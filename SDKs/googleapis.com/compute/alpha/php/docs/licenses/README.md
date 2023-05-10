# licenses

### Available Operations

* [computeLicensesDelete](#computelicensesdelete) - Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGet](#computelicensesget) - Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesGetIamPolicy](#computelicensesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesInsert](#computelicensesinsert) - Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesList](#computelicenseslist) - Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesSetIamPolicy](#computelicensessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 
* [computeLicensesTestIamPermissions](#computelicensestestiampermissions) - Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

## computeLicensesDelete

Deletes the specified license. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'ipsum';
    $request->key = 'ratione';
    $request->license = 'expedita';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'provident';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'id';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeLicensesDeleteSecurity();
    $requestSecurity->option1 = new ComputeLicensesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesGet

Returns the specified License resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nobis';
    $request->fields = 'placeat';
    $request->key = 'mollitia';
    $request->license = 'architecto';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'commodi';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'omnis';

    $requestSecurity = new ComputeLicensesGetSecurity();
    $requestSecurity->option1 = new ComputeLicensesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesGet($request, $requestSecurity);

    if ($response->license !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'esse';
    $request->fields = 'vitae';
    $request->key = 'beatae';
    $request->oauthToken = 'pariatur';
    $request->optionsRequestedPolicyVersion = 28449;
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'eligendi';
    $request->resource = 'tenetur';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new ComputeLicensesGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeLicensesGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesInsert

Create a License resource in the specified project. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\License;
use \OpenAPI\OpenAPI\Models\Shared\LicenseResourceRequirements;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesInsertSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->license = new License();
    $request->license->chargesUseFee = false;
    $request->license->creationTimestamp = 'iste';
    $request->license->description = 'reiciendis';
    $request->license->id = 'nihil';
    $request->license->kind = 'libero';
    $request->license->licenseCode = 'perspiciatis';
    $request->license->name = 'Homer Hilll V';
    $request->license->resourceRequirements = new LicenseResourceRequirements();
    $request->license->resourceRequirements->minGuestCpuCount = 432546;
    $request->license->resourceRequirements->minMemoryMb = 339333;
    $request->license->selfLink = 'commodi';
    $request->license->selfLinkWithId = 'eveniet';
    $request->license->transferable = false;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'velit';
    $request->key = 'soluta';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'quo';
    $request->requestId = 'officiis';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'est';
    $request->userIp = 'fuga';

    $requestSecurity = new ComputeLicensesInsertSecurity();
    $requestSecurity->option1 = new ComputeLicensesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesList

Retrieves the list of licenses available in the specified project. This method does not get any licenses that belong to other projects, including licenses attached to publicly-available images, like Debian 9. If you want to get a list of publicly-available licenses, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'qui';
    $request->filter = 'officia';
    $request->key = 'cupiditate';
    $request->maxResults = 525089;
    $request->oauthToken = 'ea';
    $request->orderBy = 'debitis';
    $request->pageToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'eveniet';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'quisquam';

    $requestSecurity = new ComputeLicensesListSecurity();
    $requestSecurity->option1 = new ComputeLicensesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesList($request, $requestSecurity);

    if ($response->licensesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'autem';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'atque';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 105102;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'natus';
    $request->key = 'nihil';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'unde';
    $request->resource = 'similique';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeLicensesSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeLicensesSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeLicensesTestIamPermissions

Returns permissions that a caller has on the specified resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeLicensesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeLicensesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'earum',
        'impedit',
        'accusamus',
    ];
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'hic';
    $request->fields = 'occaecati';
    $request->key = 'perferendis';
    $request->oauthToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'consequatur';
    $request->resource = 'architecto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'sit';
    $request->userIp = 'ad';

    $requestSecurity = new ComputeLicensesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeLicensesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->licenses->computeLicensesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
