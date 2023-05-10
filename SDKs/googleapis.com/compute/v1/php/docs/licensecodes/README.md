# licenseCodes

### Available Operations

* [computeLicenseCodesGet](#computelicensecodesget) - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesTestIamPermissions](#computelicensecodestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

## computeLicenseCodesGet

Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicenseCodesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aperiam';
    $request->fields = 'saepe';
    $request->key = 'voluptatem';
    $request->licenseCode = 'soluta';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'delectus';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeLicenseCodesGetSecurity();
    $requestSecurity->option1 = new ComputeLicenseCodesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseCodes->computeLicenseCodesGet($request, $requestSecurity);

    if ($response->licenseCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicenseCodesTestIamPermissions

Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicenseCodesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'dignissimos',
        'voluptatum',
        'nulla',
    ];
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'impedit';
    $request->key = 'officia';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'mollitia';
    $request->resource = 'repudiandae';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'cum';

    $requestSecurity = new ComputeLicenseCodesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeLicenseCodesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseCodes->computeLicenseCodesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
