# accessPolicies

### Available Operations

* [accesscontextmanagerAccessPoliciesAccessLevelsCreate](#accesscontextmanageraccesspoliciesaccesslevelscreate) - Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesAccessLevelsList](#accesscontextmanageraccesspoliciesaccesslevelslist) - List all Access Levels for an access policy.
* [accesscontextmanagerAccessPoliciesCreate](#accesscontextmanageraccesspoliciescreate) - Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.
* [accesscontextmanagerAccessPoliciesList](#accesscontextmanageraccesspolicieslist) - List all AccessPolicies under a container.
* [accesscontextmanagerAccessPoliciesServicePerimetersCreate](#accesscontextmanageraccesspoliciesserviceperimeterscreate) - Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.
* [accesscontextmanagerAccessPoliciesServicePerimetersDelete](#accesscontextmanageraccesspoliciesserviceperimetersdelete) - Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.
* [accesscontextmanagerAccessPoliciesServicePerimetersList](#accesscontextmanageraccesspoliciesserviceperimeterslist) - List all Service Perimeters for an access policy.
* [accesscontextmanagerAccessPoliciesServicePerimetersPatch](#accesscontextmanageraccesspoliciesserviceperimeterspatch) - Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

## accesscontextmanagerAccessPoliciesAccessLevelsCreate

Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevel;
use \OpenAPI\OpenAPI\Models\Shared\BasicLevelCombiningFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedDeviceManagementLevelsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DevicePolicyAllowedEncryptionStatusesEnum;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraint;
use \OpenAPI\OpenAPI\Models\Shared\OsConstraintOsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomLevel;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessLevel = new AccessLevel();
    $request->accessLevel->basic = new BasicLevel();
    $request->accessLevel->basic->combiningFunction = BasicLevelCombiningFunctionEnum::AND;
    $request->accessLevel->basic->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->accessLevel->custom = new CustomLevel();
    $request->accessLevel->custom->expr = new Expr();
    $request->accessLevel->custom->expr->description = 'temporibus';
    $request->accessLevel->custom->expr->expression = 'ab';
    $request->accessLevel->custom->expr->location = 'quis';
    $request->accessLevel->custom->expr->title = 'Mr.';
    $request->accessLevel->description = 'deserunt';
    $request->accessLevel->name = 'Roberta Sipes';
    $request->accessLevel->title = 'Mr.';
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->parent = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesAccessLevelsList

List all Access Levels for an access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesAccessLevelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessLevelFormat = AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum::CEL;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->oauthToken = 'optio';
    $request->pageSize = 521848;
    $request->pageToken = 'beatae';
    $request->parent = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesAccessLevelsList($request, $requestSecurity);

    if ($response->listAccessLevelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesCreate

Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccessPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessPolicy = new AccessPolicy();
    $request->accessPolicy->name = 'Cory Emmerich';
    $request->accessPolicy->parent = 'perferendis';
    $request->accessPolicy->title = 'Mrs.';
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolor';
    $request->key = 'natus';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesList

List all AccessPolicies under a container.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'saepe';
    $request->key = 'quidem';
    $request->oauthToken = 'architecto';
    $request->pageSize = 60225;
    $request->pageToken = 'reiciendis';
    $request->parent = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesList($request, $requestSecurity);

    if ($response->listAccessPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersCreate

Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeter;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterPerimeterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessibleServices;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->servicePerimeter = new ServicePerimeter();
    $request->servicePerimeter->description = 'corporis';
    $request->servicePerimeter->name = 'Della Halvorson';
    $request->servicePerimeter->perimeterType = ServicePerimeterPerimeterTypeEnum::PERIMETER_TYPE_REGULAR;
    $request->servicePerimeter->status = new ServicePerimeterConfig();
    $request->servicePerimeter->status->accessLevels = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->servicePerimeter->status->resources = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->servicePerimeter->status->restrictedServices = [
        'consequuntur',
        'repellat',
        'mollitia',
    ];
    $request->servicePerimeter->status->unrestrictedServices = [
        'numquam',
        'commodi',
        'quam',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices = new VpcAccessibleServices();
    $request->servicePerimeter->status->vpcAccessibleServices->allowedServices = [
        'velit',
        'error',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices->enableRestriction = false;
    $request->servicePerimeter->title = 'Mr.';
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laborum';
    $request->fields = 'animi';
    $request->key = 'enim';
    $request->oauthToken = 'odit';
    $request->parent = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersDelete

Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'error';
    $request->key = 'temporibus';
    $request->name = 'Ryan Witting';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'ipsa';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersList

List all Service Perimeters for an access policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'perferendis';
    $request->fields = 'doloremque';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'ut';
    $request->pageSize = 979587;
    $request->pageToken = 'dicta';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersList($request, $requestSecurity);

    if ($response->listServicePerimetersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## accesscontextmanagerAccessPoliciesServicePerimetersPatch

Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeter;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterPerimeterTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServicePerimeterConfig;
use \OpenAPI\OpenAPI\Models\Shared\VpcAccessibleServices;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccesscontextmanagerAccessPoliciesServicePerimetersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->servicePerimeter = new ServicePerimeter();
    $request->servicePerimeter->description = 'enim';
    $request->servicePerimeter->name = 'Mrs. Leslie VonRueden';
    $request->servicePerimeter->perimeterType = ServicePerimeterPerimeterTypeEnum::PERIMETER_TYPE_BRIDGE;
    $request->servicePerimeter->status = new ServicePerimeterConfig();
    $request->servicePerimeter->status->accessLevels = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->servicePerimeter->status->resources = [
        'voluptates',
        'quasi',
        'repudiandae',
    ];
    $request->servicePerimeter->status->restrictedServices = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->servicePerimeter->status->unrestrictedServices = [
        'consequatur',
        'est',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices = new VpcAccessibleServices();
    $request->servicePerimeter->status->vpcAccessibleServices->allowedServices = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->servicePerimeter->status->vpcAccessibleServices->enableRestriction = false;
    $request->servicePerimeter->title = 'Mrs.';
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->name = 'Louise Simonis Sr.';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->updateMask = 'tempora';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'tempore';

    $requestSecurity = new AccesscontextmanagerAccessPoliciesServicePerimetersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accessPolicies->accesscontextmanagerAccessPoliciesServicePerimetersPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
