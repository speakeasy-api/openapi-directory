# regionSslPolicies

### Available Operations

* [computeRegionSslPoliciesDelete](#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeRegionSslPoliciesTestIamPermissions](#computeregionsslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeRegionSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'quisquam';
    $request->key = 'blanditiis';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'dolore';
    $request->quotaUser = 'nostrum';
    $request->region = 'ipsa';
    $request->requestId = 'alias';
    $request->sslPolicy = 'enim';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'pariatur';

    $requestSecurity = new ComputeRegionSslPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consectetur';
    $request->fields = 'incidunt';
    $request->key = 'vero';
    $request->oauthToken = 'aperiam';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'commodi';
    $request->region = 'sapiente';
    $request->sslPolicy = 'ullam';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'quas';

    $requestSecurity = new ComputeRegionSslPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesGet($request, $requestSecurity);

    if ($response->sslPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesInsert

Creates a new policy in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslPolicy = new SslPolicy();
    $request->sslPolicy->creationTimestamp = 'ea';
    $request->sslPolicy->customFeatures = [
        'numquam',
        'tenetur',
    ];
    $request->sslPolicy->description = 'ea';
    $request->sslPolicy->enabledFeatures = [
        'laudantium',
        'corporis',
        'quis',
    ];
    $request->sslPolicy->fingerprint = 'ipsum';
    $request->sslPolicy->id = 'perferendis';
    $request->sslPolicy->kind = 'est';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS10;
    $request->sslPolicy->name = 'Jeremy Murazik';
    $request->sslPolicy->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy->region = 'fuga';
    $request->sslPolicy->selfLink = 'est';
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'atque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nesciunt';
    $request->fields = 'impedit';
    $request->key = 'eos';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'eaque';
    $request->region = 'incidunt';
    $request->requestId = 'aut';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'perspiciatis';

    $requestSecurity = new ComputeRegionSslPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesList

Lists all the SSL policies that have been configured for the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iste';
    $request->fields = 'voluptatem';
    $request->filter = 'voluptas';
    $request->key = 'hic';
    $request->maxResults = 410114;
    $request->oauthToken = 'officiis';
    $request->orderBy = 'soluta';
    $request->pageToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'officia';
    $request->region = 'fugiat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quam';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'maxime';

    $requestSecurity = new ComputeRegionSslPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesList($request, $requestSecurity);

    if ($response->sslPoliciesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesListAvailableFeaturesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolore';
    $request->fields = 'reiciendis';
    $request->filter = 'dolores';
    $request->key = 'corporis';
    $request->maxResults = 997982;
    $request->oauthToken = 'ex';
    $request->orderBy = 'ratione';
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'ratione';
    $request->region = 'quam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'ducimus';

    $requestSecurity = new ComputeRegionSslPoliciesListAvailableFeaturesSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesListAvailableFeatures($request, $requestSecurity);

    if ($response->sslPoliciesListAvailableFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicy1 = new SslPolicy();
    $request->sslPolicy1->creationTimestamp = 'numquam';
    $request->sslPolicy1->customFeatures = [
        'commodi',
        'soluta',
        'recusandae',
        'corrupti',
    ];
    $request->sslPolicy1->description = 'minus';
    $request->sslPolicy1->enabledFeatures = [
        'debitis',
    ];
    $request->sslPolicy1->fingerprint = 'consequatur';
    $request->sslPolicy1->id = 'perspiciatis';
    $request->sslPolicy1->kind = 'impedit';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS11;
    $request->sslPolicy1->name = 'Mona Emard';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::MODERN;
    $request->sslPolicy1->region = 'placeat';
    $request->sslPolicy1->selfLink = 'eos';
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'recusandae';
    $request->key = 'voluptas';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'dolorum';
    $request->region = 'earum';
    $request->requestId = 'sapiente';
    $request->sslPolicyPathParameter = 'inventore';
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'quaerat';
    $request->userIp = 'perferendis';

    $requestSecurity = new ComputeRegionSslPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionSslPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionSslPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'natus',
        'modi',
        'ullam',
        'voluptatibus',
    ];
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quam';
    $request->fields = 'incidunt';
    $request->key = 'consectetur';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'placeat';
    $request->region = 'repudiandae';
    $request->resource = 'quasi';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'praesentium';

    $requestSecurity = new ComputeRegionSslPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionSslPolicies->computeRegionSslPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
