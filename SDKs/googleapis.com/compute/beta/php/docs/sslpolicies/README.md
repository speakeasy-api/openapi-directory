# sslPolicies

### Available Operations

* [computeSslPoliciesAggregatedList](#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeSslPoliciesTestIamPermissions](#computesslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSslPoliciesAggregatedList

Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'a';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laboriosam';
    $request->fields = 'deleniti';
    $request->filter = 'excepturi';
    $request->includeAllScopes = false;
    $request->key = 'unde';
    $request->maxResults = 761275;
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'numquam';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'accusamus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'cum';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeSslPoliciesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesAggregatedList($request, $requestSecurity);

    if ($response->sslPoliciesAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'nesciunt';
    $request->key = 'beatae';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'laborum';
    $request->quotaUser = 'voluptatum';
    $request->requestId = 'vitae';
    $request->sslPolicy = 'eveniet';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'beatae';

    $requestSecurity = new ComputeSslPoliciesDeleteSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'hic';
    $request->key = 'odio';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'nemo';
    $request->sslPolicy = 'suscipit';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'ipsam';

    $requestSecurity = new ComputeSslPoliciesGetSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesGet($request, $requestSecurity);

    if ($response->sslPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesInsert

Returns the specified SSL policy resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicy = new SslPolicy();
    $request->sslPolicy->creationTimestamp = 'repudiandae';
    $request->sslPolicy->customFeatures = [
        'perferendis',
        'rem',
    ];
    $request->sslPolicy->description = 'quos';
    $request->sslPolicy->enabledFeatures = [
        'praesentium',
        'id',
        'ratione',
        'magni',
    ];
    $request->sslPolicy->fingerprint = 'vel';
    $request->sslPolicy->id = 'dolorem';
    $request->sslPolicy->kind = 'magnam';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS10;
    $request->sslPolicy->name = 'Salvatore Romaguera';
    $request->sslPolicy->profile = SslPolicyProfileEnum::MODERN;
    $request->sslPolicy->region = 'nisi';
    $request->sslPolicy->selfLink = 'nisi';
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'officia';
    $request->fields = 'deleniti';
    $request->key = 'ad';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->project = 'corporis';
    $request->quotaUser = 'minus';
    $request->requestId = 'dicta';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'dolores';

    $requestSecurity = new ComputeSslPoliciesInsertSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesList

Lists all the SSL policies that have been configured for the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vitae';
    $request->fields = 'consectetur';
    $request->filter = 'repudiandae';
    $request->key = 'nesciunt';
    $request->maxResults = 689770;
    $request->oauthToken = 'dolor';
    $request->orderBy = 'vitae';
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'ea';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeSslPoliciesListSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesList($request, $requestSecurity);

    if ($response->sslPoliciesList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesListAvailableFeaturesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesListAvailableFeaturesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'omnis';
    $request->fields = 'doloremque';
    $request->filter = 'vel';
    $request->key = 'expedita';
    $request->maxResults = 567510;
    $request->oauthToken = 'vel';
    $request->orderBy = 'quisquam';
    $request->pageToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'vel';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'aliquam';

    $requestSecurity = new ComputeSslPoliciesListAvailableFeaturesSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesListAvailableFeaturesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesListAvailableFeatures($request, $requestSecurity);

    if ($response->sslPoliciesListAvailableFeaturesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicy;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyMinTlsVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyProfileEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarnings;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SslPolicyWarningsData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->sslPolicy1 = new SslPolicy();
    $request->sslPolicy1->creationTimestamp = 'fugit';
    $request->sslPolicy1->customFeatures = [
        'culpa',
        'quaerat',
        'rem',
    ];
    $request->sslPolicy1->description = 'et';
    $request->sslPolicy1->enabledFeatures = [
        'excepturi',
        'similique',
    ];
    $request->sslPolicy1->fingerprint = 'quae';
    $request->sslPolicy1->id = 'distinctio';
    $request->sslPolicy1->kind = 'rem';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS10;
    $request->sslPolicy1->name = 'Cheryl Miller';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy1->region = 'aut';
    $request->sslPolicy1->selfLink = 'minima';
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'dolorem';
    $request->key = 'aut';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'dicta';
    $request->requestId = 'sunt';
    $request->sslPolicyPathParameter = 'velit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'recusandae';
    $request->userIp = 'eius';

    $requestSecurity = new ComputeSslPoliciesPatchSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSslPoliciesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSslPoliciesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'inventore',
        'aperiam',
    ];
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nulla';
    $request->fields = 'alias';
    $request->key = 'provident';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'placeat';
    $request->resource = 'molestias';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'temporibus';

    $requestSecurity = new ComputeSslPoliciesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSslPoliciesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sslPolicies->computeSslPoliciesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
