# licensee

## Overview

Licensee operations

Licensee Services
<https://netlicensing.io/wiki/licensee-services>
### Available Operations

* [createLicensee](#createlicensee) - Create Licensee
* [deleteLicensee](#deletelicensee) - Delete Licensee
* [getLicensee](#getlicensee) - Get Licensee
* [listLicensees](#listlicensees) - List Licensees
* [transferLicenses](#transferlicenses) - Transfer Licenses
* [updateLicensee](#updatelicensee) - Update Licensee
* [validateLicensee](#validatelicensee) - Validate Licensee

## createLicensee

Creates a new Licensee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseeRequestBody();
    $request->active = false;
    $request->markedForTransfer = false;
    $request->name = 'Roger Beier';
    $request->number = 'mollitia';
    $request->productNumber = 'laborum';

    $requestSecurity = new CreateLicenseeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->createLicensee($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicensee

Delete a Licensee by 'number'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseeRequest();
    $request->forceCascade = false;
    $request->licenseeNumber = 'dolores';

    $requestSecurity = new DeleteLicenseeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->deleteLicensee($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicensee

Return a Licensee by 'licenseeNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseeRequest();
    $request->licenseeNumber = 'dolorem';

    $requestSecurity = new GetLicenseeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->getLicensee($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicensees

Return a list of all Licensees for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLicenseesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->listLicensees($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transferLicenses

Licenses transfer between Licensees

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransferLicensesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransferLicensesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\TransferLicensesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferLicensesRequest();
    $request->requestBody = new TransferLicensesRequestBody();
    $request->requestBody->sourceLicenseeNumber = 'corporis';
    $request->licenseeNumber = 'explicabo';

    $requestSecurity = new TransferLicensesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->transferLicenses($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicensee

Sets the provided properties to a Licensee. Return an updated Licensee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseeRequest();
    $request->requestBody = new UpdateLicenseeRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->markedForTransfer = false;
    $request->requestBody->name = 'Ronnie Mohr';
    $request->requestBody->number = 'excepturi';
    $request->licenseeNumber = 'accusantium';

    $requestSecurity = new UpdateLicenseeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->updateLicensee($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## validateLicensee

Validates active Licenses of the Licensee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ValidateLicenseeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ValidateLicenseeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ValidateLicenseeRequestBodyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ValidateLicenseeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ValidateLicenseeRequest();
    $request->requestBody = new ValidateLicenseeRequestBody();
    $request->requestBody->action = ValidateLicenseeRequestBodyActionEnum::CHECK_OUT;
    $request->requestBody->licenseeName = 'culpa';
    $request->requestBody->nodeSecret = 'doloribus';
    $request->requestBody->productModuleNumber = 'sapiente';
    $request->requestBody->productNumber = 'architecto';
    $request->requestBody->sessionId = 'mollitia';
    $request->licenseeNumber = 'dolorem';

    $requestSecurity = new ValidateLicenseeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->licensee->validateLicensee($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
