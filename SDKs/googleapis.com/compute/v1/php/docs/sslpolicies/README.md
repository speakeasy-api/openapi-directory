# sslPolicies

### Available Operations

* [computeSslPoliciesAggregatedList](#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.

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
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'placeat';
    $request->filter = 'blanditiis';
    $request->includeAllScopes = false;
    $request->key = 'cumque';
    $request->maxResults = 489320;
    $request->oauthToken = 'placeat';
    $request->orderBy = 'ratione';
    $request->pageToken = 'eligendi';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'quasi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'accusamus';
    $request->userIp = 'inventore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'excepturi';
    $request->key = 'perferendis';
    $request->oauthToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'expedita';
    $request->requestId = 'labore';
    $request->sslPolicy = 'quidem';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'itaque';

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
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'inventore';
    $request->fields = 'odit';
    $request->key = 'in';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'excepturi';
    $request->sslPolicy = 'aperiam';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'quis';

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
    $request->sslPolicy->creationTimestamp = 'consequuntur';
    $request->sslPolicy->customFeatures = [
        'dolores',
        'ipsam',
        'ipsa',
    ];
    $request->sslPolicy->description = 'pariatur';
    $request->sslPolicy->enabledFeatures = [
        'nobis',
        'soluta',
        'eligendi',
        'fugiat',
    ];
    $request->sslPolicy->fingerprint = 'velit';
    $request->sslPolicy->id = 'facilis';
    $request->sslPolicy->kind = 'architecto';
    $request->sslPolicy->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS10;
    $request->sslPolicy->name = 'Whitney Lind';
    $request->sslPolicy->profile = SslPolicyProfileEnum::COMPATIBLE;
    $request->sslPolicy->region = 'officiis';
    $request->sslPolicy->selfLink = 'saepe';
    $request->sslPolicy->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'doloremque';
    $request->key = 'autem';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'excepturi';
    $request->requestId = 'quasi';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'maxime';
    $request->userIp = 'laudantium';

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
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'iusto';
    $request->filter = 'repellendus';
    $request->key = 'beatae';
    $request->maxResults = 498103;
    $request->oauthToken = 'autem';
    $request->orderBy = 'ut';
    $request->pageToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'eum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'cumque';

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
    $request->accessToken = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'impedit';
    $request->filter = 'harum';
    $request->key = 'aliquid';
    $request->maxResults = 897431;
    $request->oauthToken = 'harum';
    $request->orderBy = 'similique';
    $request->pageToken = 'expedita';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'quis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'tempore';

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
    $request->sslPolicy1->creationTimestamp = 'cupiditate';
    $request->sslPolicy1->customFeatures = [
        'velit',
        'nobis',
        'illo',
        'amet',
    ];
    $request->sslPolicy1->description = 'enim';
    $request->sslPolicy1->enabledFeatures = [
        'nulla',
        'nisi',
        'deserunt',
    ];
    $request->sslPolicy1->fingerprint = 'corrupti';
    $request->sslPolicy1->id = 'reprehenderit';
    $request->sslPolicy1->kind = 'nam';
    $request->sslPolicy1->minTlsVersion = SslPolicyMinTlsVersionEnum::TLS12;
    $request->sslPolicy1->name = 'Janie Veum';
    $request->sslPolicy1->profile = SslPolicyProfileEnum::RESTRICTED;
    $request->sslPolicy1->region = 'ullam';
    $request->sslPolicy1->selfLink = 'eum';
    $request->sslPolicy1->warnings = [
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
        new SslPolicyWarnings(),
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'minus';
    $request->key = 'expedita';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'occaecati';
    $request->sslPolicyPathParameter = 'sit';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'provident';

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
