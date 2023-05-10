# licensing

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
    $request->endingBefore = 'deserunt';
    $request->expired = false;
    $request->invalidated = false;
    $request->organizationId = 'recusandae';
    $request->perPage = 42929;
    $request->startingAfter = 'magnam';

    $response = $sdk->licensing->getOrganizationLicensingCotermLicenses($request);

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
    $request->requestBody->destination->mode = MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum::ADD_DEVICES;
    $request->requestBody->destination->organizationId = 'quibusdam';
    $request->requestBody->licenses = [
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
        new MoveOrganizationLicensingCotermLicensesRequestBodyLicenses(),
    ];
    $request->organizationId = 'voluptate';

    $response = $sdk->licensing->moveOrganizationLicensingCotermLicenses($request);

    if ($response->moveOrganizationLicensingCotermLicenses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
