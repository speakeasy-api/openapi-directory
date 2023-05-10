# coterm

### Available Operations

* [getOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)

## getOrganizationLicensingCotermLicenses

List the licenses in a coterm organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensingCotermLicensesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensingCotermLicensesRequest();
    $request->endingBefore = 'accusantium';
    $request->expired = false;
    $request->invalidated = false;
    $request->organizationId = 'nulla';
    $request->perPage = 78734;
    $request->startingAfter = 'omnis';

    $response = $sdk->coterm->getOrganizationLicensingCotermLicenses($request);

    if ($response->getOrganizationLicensingCotermLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicensingCotermLicenses

Moves a license to a different organization (coterm only)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyDestination;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyLicenses;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensingCotermLicensesRequest();
    $request->requestBody = new MoveOrganizationLicensingCotermLicensesRequestBody();
    $request->requestBody->destination = new MoveOrganizationLicensingCotermLicensesRequestBodyDestination();
    $request->requestBody->destination->mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum::RENEW;
    $request->requestBody->destination->organizationId = 'excepturi';
    $request->requestBody->licenses = [
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
    ];
    $request->organizationId = 'sint';

    $response = $sdk->coterm->moveOrganizationLicensingCotermLicenses($request);

    if ($response->moveOrganizationLicensingCotermLicenses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
