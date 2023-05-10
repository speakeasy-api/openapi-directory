# licenses

### Available Operations

* [assignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](#getorganizationlicense) - Display a license
* [getOrganizationLicenseState](#getorganizationlicensestate) - Return an overview of the license state for an organization
* [getOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [moveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [renewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license

## assignOrganizationLicensesSeats

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssignOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignOrganizationLicensesSeatsRequest();
    $request->requestBody = new AssignOrganizationLicensesSeatsRequestBody();
    $request->requestBody->licenseId = 'libero';
    $request->requestBody->networkId = 'voluptas';
    $request->requestBody->seatCount = 646265;
    $request->organizationId = 'quam';

    $response = $sdk->licenses->assignOrganizationLicensesSeats($request);

    if ($response->assignOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicense

Display a license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicenseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicenseRequest();
    $request->licenseId = 'ipsum';
    $request->organizationId = 'incidunt';

    $response = $sdk->licenses->getOrganizationLicense($request);

    if ($response->getOrganizationLicense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicenseState

Return an overview of the license state for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicenseStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicenseStateRequest();
    $request->organizationId = 'qui';

    $response = $sdk->licenses->getOrganizationLicenseState($request);

    if ($response->getOrganizationLicenseState200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicenses

List the licenses for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensesRequest();
    $request->deviceSerial = 'cupiditate';
    $request->endingBefore = 'maxime';
    $request->networkId = 'pariatur';
    $request->organizationId = 'soluta';
    $request->perPage = 117531;
    $request->startingAfter = 'laborum';
    $request->state = GetOrganizationLicensesStateEnum::RECENTLY_QUEUED;

    $response = $sdk->licenses->getOrganizationLicenses($request);

    if ($response->getOrganizationLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicensesSeats

Move SM seats to another organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensesSeatsRequest();
    $request->requestBody = new MoveOrganizationLicensesSeatsRequestBody();
    $request->requestBody->destOrganizationId = 'incidunt';
    $request->requestBody->licenseId = 'aspernatur';
    $request->requestBody->seatCount = 174909;
    $request->organizationId = 'distinctio';

    $response = $sdk->licenses->moveOrganizationLicensesSeats($request);

    if ($response->moveOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## renewOrganizationLicensesSeats

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RenewOrganizationLicensesSeatsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RenewOrganizationLicensesSeatsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RenewOrganizationLicensesSeatsRequest();
    $request->requestBody = new RenewOrganizationLicensesSeatsRequestBody();
    $request->requestBody->licenseIdToRenew = 'facilis';
    $request->requestBody->unusedLicenseId = 'aliquid';
    $request->organizationId = 'quam';

    $response = $sdk->licenses->renewOrganizationLicensesSeats($request);

    if ($response->renewOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
