# license

## Overview

License operations

License Services
<https://netlicensing.io/wiki/license-services>
### Available Operations

* [createLicense](#createlicense) - Create License
* [deleteLicense](#deletelicense) - Delete License
* [getLicense](#getlicense) - Get License
* [listLicenses](#listlicenses) - List Licenses
* [updateLicense](#updatelicense) - Update License

## createLicense

Creates a new License

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseRequestBody();
    $request->active = false;
    $request->currency = 'tempora';
    $request->hidden = false;
    $request->licenseTemplateNumber = 'suscipit';
    $request->licenseeNumber = 'molestiae';
    $request->name = 'Irving Lehner';
    $request->number = 'nisi';
    $request->parentfeature = 'recusandae';
    $request->price = 8360.79;
    $request->quantity = 'ab';
    $request->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T04:44:49.578Z');
    $request->timeVolume = 'deserunt';
    $request->timeVolumePeriod = 'perferendis';
    $request->usedQuantity = 'ipsam';

    $requestSecurity = new CreateLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->createLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicense

Delete License by a 'licenseNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseRequest();
    $request->licenseNumber = 'repellendus';

    $requestSecurity = new DeleteLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->deleteLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicense

Get License by a 'licenseNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseRequest();
    $request->licenseNumber = 'sapiente';

    $requestSecurity = new GetLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->getLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenses

Return a list of all Licenses for the current Vendor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListLicensesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListLicensesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->listLicenses($requestSecurity);

    if ($response->netlicensings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicense

Update License by a 'licenseNumber'

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseRequest();
    $request->requestBody = new UpdateLicenseRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->currency = 'quo';
    $request->requestBody->hidden = false;
    $request->requestBody->name = 'Teri Strosin';
    $request->requestBody->number = 'quod';
    $request->requestBody->parentfeature = 'quod';
    $request->requestBody->price = 4614.79;
    $request->requestBody->quantity = 'totam';
    $request->requestBody->startDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-12-18T15:02:44.758Z');
    $request->requestBody->timeVolume = 'dicta';
    $request->requestBody->timeVolumePeriod = 'nam';
    $request->requestBody->usedQuantity = 'officia';
    $request->licenseNumber = 'occaecati';

    $requestSecurity = new UpdateLicenseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->license->updateLicense($request, $requestSecurity);

    if ($response->netlicensing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
