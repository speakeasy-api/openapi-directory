# regionSslPolicies

### Available Operations

* [computeRegionSslPoliciesDelete](#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.

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
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'error';
    $request->fields = 'occaecati';
    $request->key = 'voluptatem';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'nobis';
    $request->region = 'quae';
    $request->requestId = 'sit';
    $request->sslPolicy = 'rerum';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'molestiae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'amet';
    $request->key = 'eveniet';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'repellendus';
    $request->region = 'non';
    $request->sslPolicy = 'rem';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'quae';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->sslPolicy = new SslPolicy();
    $request->sslPolicy->creationTimestamp = 'dolore';
    $request->sslPolicy->customFeatures = [
        'porro',
    ];
    $request->sslPolicy->description = 'aperiam';
    $request->sslPolicy->enabledFeatures = [
        'adipisci',
        'sit',
        'labore',
    ];
    $request->sslPolicy->fingerprint = 'excepturi';
    $request->sslPolicy->id = 'quisquam';
    $request->sslPolicy->kind = 'ipsum';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS12;
    $request->sslPolicy->name = 'Mr. Hector Sawayn';
    $request->sslPolicy->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy->region = 'necessitatibus';
    $request->sslPolicy->selfLink = 'dignissimos';
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'dolorum';
    $request->key = 'quibusdam';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'illum';
    $request->region = 'aspernatur';
    $request->requestId = 'nihil';
    $request->uploadType = 'ut';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'doloribus';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'animi';
    $request->filter = 'sunt';
    $request->key = 'voluptatem';
    $request->maxResults = 901357;
    $request->oauthToken = 'ea';
    $request->orderBy = 'placeat';
    $request->pageToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'quam';
    $request->region = 'atque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'eos';

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
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'cum';
    $request->filter = 'voluptatem';
    $request->key = 'sint';
    $request->maxResults = 162520;
    $request->oauthToken = 'magni';
    $request->orderBy = 'iure';
    $request->pageToken = 'doloribus';
    $request->prettyPrint = false;
    $request->project = 'quod';
    $request->quotaUser = 'placeat';
    $request->region = 'numquam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'natus';

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
    $request->sslPolicy1->creationTimestamp = 'optio';
    $request->sslPolicy1->customFeatures = [
        'esse',
        'in',
        'cum',
    ];
    $request->sslPolicy1->description = 'soluta';
    $request->sslPolicy1->enabledFeatures = [
        'ullam',
        'esse',
        'sapiente',
        'ratione',
    ];
    $request->sslPolicy1->fingerprint = 'praesentium';
    $request->sslPolicy1->id = 'perspiciatis';
    $request->sslPolicy1->kind = 'eos';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS11;
    $request->sslPolicy1->name = 'Mr. Nelson Hudson';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::CUSTOM;
    $request->sslPolicy1->region = 'atque';
    $request->sslPolicy1->selfLink = 'illum';
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'sequi';
    $request->key = 'voluptates';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'officia';
    $request->region = 'exercitationem';
    $request->requestId = 'laboriosam';
    $request->sslPolicyPathParameter = 'quos';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'numquam';

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
