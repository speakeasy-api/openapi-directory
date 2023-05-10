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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'architecto';
    $request->fields = 'est';
    $request->key = 'nemo';
    $request->license = 'magni';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'quaerat';
    $request->quotaUser = 'suscipit';
    $request->requestId = 'rerum';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'repudiandae';

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
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'doloremque';
    $request->key = 'officiis';
    $request->license = 'nisi';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'alias';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'ut';
    $request->userIp = 'hic';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'assumenda';
    $request->fields = 'exercitationem';
    $request->key = 'exercitationem';
    $request->oauthToken = 'dolore';
    $request->optionsRequestedPolicyVersion = 26721;
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'a';
    $request->resource = 'exercitationem';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'mollitia';
    $request->userIp = 'velit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->license = new License();
    $request->license->chargesUseFee = false;
    $request->license->creationTimestamp = 'est';
    $request->license->description = 'quasi';
    $request->license->id = 'rerum';
    $request->license->kind = 'blanditiis';
    $request->license->licenseCode = 'sapiente';
    $request->license->name = 'Enrique Mosciski';
    $request->license->resourceRequirements = new LicenseResourceRequirements();
    $request->license->resourceRequirements->minGuestCpuCount = 124381;
    $request->license->resourceRequirements->minMemoryMb = 682430;
    $request->license->selfLink = 'nulla';
    $request->license->transferable = false;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'fugiat';
    $request->key = 'quas';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'eveniet';
    $request->requestId = 'consequuntur';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'rerum';

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
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'harum';
    $request->fields = 'ratione';
    $request->filter = 'molestias';
    $request->key = 'odio';
    $request->maxResults = 252183;
    $request->oauthToken = 'magni';
    $request->orderBy = 'sint';
    $request->pageToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'adipisci';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'quis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'officiis';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'architecto';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 911991;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'tempora';
    $request->key = 'ad';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'facere';
    $request->resource = 'ducimus';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'officiis';

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
        'nemo',
        'veritatis',
        'molestias',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'possimus';
    $request->fields = 'similique';
    $request->key = 'architecto';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'repellendus';
    $request->resource = 'dolor';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'quis';
    $request->userIp = 'quasi';

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
