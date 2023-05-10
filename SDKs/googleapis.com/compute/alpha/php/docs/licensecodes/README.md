# licenseCodes

### Available Operations

* [computeLicenseCodesGet](#computelicensecodesget) - Return a specified license code. License codes are mirrored across all projects that have permissions to read the License Code. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesGetIamPolicy](#computelicensecodesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicenseCodesSetIamPolicy](#computelicensecodessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
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
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'aliquid';
    $request->key = 'eius';
    $request->licenseCode = 'atque';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'enim';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'aspernatur';

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

## computeLicenseCodesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicenseCodesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'est';
    $request->key = 'voluptatem';
    $request->oauthToken = 'aut';
    $request->optionsRequestedPolicyVersion = 747951;
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'maiores';
    $request->resource = 'autem';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'illo';

    $requestSecurity = new ComputeLicenseCodesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeLicenseCodesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseCodes->computeLicenseCodesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicenseCodesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicenseCodesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicenseCodesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'veritatis';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'suscipit';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 3866;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'fuga';
    $request->fields = 'nihil';
    $request->key = 'similique';
    $request->oauthToken = 'repellat';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'accusamus';
    $request->resource = 'illum';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'similique';

    $requestSecurity = new ComputeLicenseCodesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeLicenseCodesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenseCodes->computeLicenseCodesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
        'dolorum',
        'aliquam',
    ];
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'corrupti';
    $request->key = 'officiis';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'in';
    $request->resource = 'sequi';
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'quisquam';

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
