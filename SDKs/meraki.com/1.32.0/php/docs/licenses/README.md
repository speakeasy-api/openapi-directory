# licenses

### Available Operations

* [assignOrganizationLicensesSeats](#assignorganizationlicensesseats) - Assign SM seats to a network
* [getOrganizationLicense](#getorganizationlicense) - Display a license
* [getOrganizationLicenses](#getorganizationlicenses) - List the licenses for an organization
* [getOrganizationLicensesOverview](#getorganizationlicensesoverview) - Return an overview of the license state for an organization
* [getOrganizationLicensingCotermLicenses](#getorganizationlicensingcotermlicenses) - List the licenses in a coterm organization
* [moveOrganizationLicenses](#moveorganizationlicenses) - Move licenses to another organization
* [moveOrganizationLicensesSeats](#moveorganizationlicensesseats) - Move SM seats to another organization
* [moveOrganizationLicensingCotermLicenses](#moveorganizationlicensingcotermlicenses) - Moves a license to a different organization (coterm only)
* [renewOrganizationLicensesSeats](#reneworganizationlicensesseats) - Renew SM seats of a license
* [updateOrganizationLicense](#updateorganizationlicense) - Update a license

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
    $request->requestBody->licenseId = 'dolore';
    $request->requestBody->networkId = 'voluptatibus';
    $request->requestBody->seatCount = 907826;
    $request->organizationId = 'odio';

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
    $request->licenseId = 'voluptate';
    $request->organizationId = 'explicabo';

    $response = $sdk->licenses->getOrganizationLicense($request);

    if ($response->getOrganizationLicense200ApplicationJSONObject !== null) {
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
    $request->deviceSerial = 'architecto';
    $request->endingBefore = 'perferendis';
    $request->networkId = 'possimus';
    $request->organizationId = 'dicta';
    $request->perPage = 965454;
    $request->startingAfter = 'voluptas';
    $request->state = GetOrganizationLicensesStateEnum::EXPIRING;

    $response = $sdk->licenses->getOrganizationLicenses($request);

    if ($response->getOrganizationLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationLicensesOverview

Return an overview of the license state for an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationLicensesOverviewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationLicensesOverviewRequest();
    $request->organizationId = 'quis';

    $response = $sdk->licenses->getOrganizationLicensesOverview($request);

    if ($response->getOrganizationLicensesOverview200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

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
    $request->endingBefore = 'quos';
    $request->expired = false;
    $request->invalidated = false;
    $request->organizationId = 'impedit';
    $request->perPage = 583071;
    $request->startingAfter = 'excepturi';

    $response = $sdk->licenses->getOrganizationLicensingCotermLicenses($request);

    if ($response->getOrganizationLicensingCotermLicenses200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## moveOrganizationLicenses

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\MoveOrganizationLicensesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MoveOrganizationLicensesRequest();
    $request->requestBody = new MoveOrganizationLicensesRequestBody();
    $request->requestBody->destOrganizationId = 'quod';
    $request->requestBody->licenseIds = [
        'sed',
        'odit',
    ];
    $request->organizationId = 'quibusdam';

    $response = $sdk->licenses->moveOrganizationLicenses($request);

    if ($response->moveOrganizationLicenses200ApplicationJSONObject !== null) {
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
    $request->requestBody->destOrganizationId = 'fugit';
    $request->requestBody->licenseId = 'nam';
    $request->requestBody->seatCount = 761165;
    $request->organizationId = 'accusantium';

    $response = $sdk->licenses->moveOrganizationLicensesSeats($request);

    if ($response->moveOrganizationLicensesSeats200ApplicationJSONObject !== null) {
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
    $request->organizationId = 'voluptatem';

    $response = $sdk->licenses->moveOrganizationLicensingCotermLicenses($request);

    if ($response->moveOrganizationLicensingCotermLicenses200ApplicationJSONObject !== null) {
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
    $request->requestBody->licenseIdToRenew = 'voluptatum';
    $request->requestBody->unusedLicenseId = 'ducimus';
    $request->organizationId = 'possimus';

    $response = $sdk->licenses->renewOrganizationLicensesSeats($request);

    if ($response->renewOrganizationLicensesSeats200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOrganizationLicense

Update a license

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOrganizationLicenseRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOrganizationLicenseRequest();
    $request->requestBody = new UpdateOrganizationLicenseRequestBody();
    $request->requestBody->deviceSerial = 'unde';
    $request->licenseId = 'maxime';
    $request->organizationId = 'culpa';

    $response = $sdk->licenses->updateOrganizationLicense($request);

    if ($response->updateOrganizationLicense200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
