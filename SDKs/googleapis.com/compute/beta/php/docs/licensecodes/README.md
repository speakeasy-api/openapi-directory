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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->fields = 'doloremque';
    $request->key = 'repellendus';
    $request->licenseCode = 'ratione';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'quo';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'repudiandae';

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
        'nostrum',
        'labore',
        'iusto',
    ];
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'necessitatibus';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'quasi';
    $request->resource = 'iure';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'error';
    $request->userIp = 'deleniti';

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
