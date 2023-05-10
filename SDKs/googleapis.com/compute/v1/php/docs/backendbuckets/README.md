# backendBuckets

### Available Operations

* [computeBackendBucketsAddSignedUrlKey](#computebackendbucketsaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsDelete](#computebackendbucketsdelete) - Deletes the specified BackendBucket resource.
* [computeBackendBucketsDeleteSignedUrlKey](#computebackendbucketsdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsGet](#computebackendbucketsget) - Returns the specified BackendBucket resource.
* [computeBackendBucketsInsert](#computebackendbucketsinsert) - Creates a BackendBucket resource in the specified project using the data included in the request.
* [computeBackendBucketsList](#computebackendbucketslist) - Retrieves the list of BackendBucket resources available to the specified project.
* [computeBackendBucketsPatch](#computebackendbucketspatch) - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendBucketsSetEdgeSecurityPolicy](#computebackendbucketssetedgesecuritypolicy) - Sets the edge security policy for the specified backend bucket.
* [computeBackendBucketsUpdate](#computebackendbucketsupdate) - Updates the specified BackendBucket resource with the data included in the request.

## computeBackendBucketsAddSignedUrlKey

Adds a key for validating requests with signed URLs for this backend bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsAddSignedUrlKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SignedUrlKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsAddSignedUrlKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsAddSignedUrlKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsAddSignedUrlKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsAddSignedUrlKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->signedUrlKey = new SignedUrlKey();
    $request->signedUrlKey->keyName = 'tempora';
    $request->signedUrlKey->keyValue = 'vel';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'qui';
    $request->callback = 'dolorum';
    $request->fields = 'a';
    $request->key = 'esse';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'ipsum';
    $request->requestId = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'tempore';

    $requestSecurity = new ComputeBackendBucketsAddSignedUrlKeySecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsAddSignedUrlKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsAddSignedUrlKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsDelete

Deletes the specified BackendBucket resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->backendBucket = 'dolorem';
    $request->callback = 'sapiente';
    $request->fields = 'totam';
    $request->key = 'nihil';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'expedita';
    $request->quotaUser = 'neque';
    $request->requestId = 'sed';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'libero';
    $request->userIp = 'voluptas';

    $requestSecurity = new ComputeBackendBucketsDeleteSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsDeleteSignedUrlKey

Deletes a key for validating requests with signed URLs for this backend bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSignedUrlKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSignedUrlKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsDeleteSignedUrlKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsDeleteSignedUrlKeyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::JSON;
    $request->backendBucket = 'incidunt';
    $request->callback = 'qui';
    $request->fields = 'cupiditate';
    $request->key = 'maxime';
    $request->keyName = 'pariatur';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'laborum';
    $request->requestId = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'dolores';

    $requestSecurity = new ComputeBackendBucketsDeleteSignedUrlKeySecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsDeleteSignedUrlKey($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsGet

Returns the specified BackendBucket resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'quam';
    $request->callback = 'molestias';
    $request->fields = 'temporibus';
    $request->key = 'qui';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'fugit';
    $request->quotaUser = 'magni';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'ullam';

    $requestSecurity = new ComputeBackendBucketsGetSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsGet($request, $requestSecurity);

    if ($response->backendBucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsInsert

Creates a BackendBucket resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucket;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendBucket = new BackendBucket();
    $request->backendBucket->bucketName = 'hic';
    $request->backendBucket->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'soluta',
        'nobis',
        'et',
        'saepe',
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'veritatis',
    ];
    $request->backendBucket->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::INVALID_CACHE_MODE;
    $request->backendBucket->cdnPolicy->clientTtl = 552193;
    $request->backendBucket->cdnPolicy->defaultTtl = 731694;
    $request->backendBucket->cdnPolicy->maxTtl = 584476;
    $request->backendBucket->cdnPolicy->negativeCaching = false;
    $request->backendBucket->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket->cdnPolicy->requestCoalescing = false;
    $request->backendBucket->cdnPolicy->serveWhileStale = 961937;
    $request->backendBucket->cdnPolicy->signedUrlCacheMaxAgeSec = 'dolorem';
    $request->backendBucket->cdnPolicy->signedUrlKeyNames = [
        'labore',
        'adipisci',
    ];
    $request->backendBucket->compressionMode = BackendBucketCompressionModeEnum::DISABLED;
    $request->backendBucket->creationTimestamp = 'architecto';
    $request->backendBucket->customResponseHeaders = [
        'aut',
    ];
    $request->backendBucket->description = 'quas';
    $request->backendBucket->edgeSecurityPolicy = 'itaque';
    $request->backendBucket->enableCdn = false;
    $request->backendBucket->id = 'consequatur';
    $request->backendBucket->kind = 'est';
    $request->backendBucket->name = 'Sherman Wyman';
    $request->backendBucket->selfLink = 'cupiditate';
    $request->accessToken = 'qui';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'odio';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'quisquam';
    $request->quotaUser = 'vero';
    $request->requestId = 'omnis';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'delectus';

    $requestSecurity = new ComputeBackendBucketsInsertSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsList

Retrieves the list of BackendBucket resources available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->fields = 'dignissimos';
    $request->filter = 'hic';
    $request->key = 'distinctio';
    $request->maxResults = 799203;
    $request->oauthToken = 'odio';
    $request->orderBy = 'similique';
    $request->pageToken = 'facilis';
    $request->prettyPrint = false;
    $request->project = 'vero';
    $request->quotaUser = 'ducimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'illum';

    $requestSecurity = new ComputeBackendBucketsListSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsList($request, $requestSecurity);

    if ($response->backendBucketList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsPatch

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucket;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendBucket1 = new BackendBucket();
    $request->backendBucket1->bucketName = 'natus';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'voluptatibus',
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'nulla',
        'fugit',
    ];
    $request->backendBucket1->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendBucket1->cdnPolicy->clientTtl = 981830;
    $request->backendBucket1->cdnPolicy->defaultTtl = 985033;
    $request->backendBucket1->cdnPolicy->maxTtl = 478370;
    $request->backendBucket1->cdnPolicy->negativeCaching = false;
    $request->backendBucket1->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket1->cdnPolicy->requestCoalescing = false;
    $request->backendBucket1->cdnPolicy->serveWhileStale = 497391;
    $request->backendBucket1->cdnPolicy->signedUrlCacheMaxAgeSec = 'alias';
    $request->backendBucket1->cdnPolicy->signedUrlKeyNames = [
        'tempora',
        'ipsam',
        'ea',
    ];
    $request->backendBucket1->compressionMode = BackendBucketCompressionModeEnum::AUTOMATIC;
    $request->backendBucket1->creationTimestamp = 'vel';
    $request->backendBucket1->customResponseHeaders = [
        'magnam',
        'ratione',
        'ex',
        'laudantium',
    ];
    $request->backendBucket1->description = 'dicta';
    $request->backendBucket1->edgeSecurityPolicy = 'dolor';
    $request->backendBucket1->enableCdn = false;
    $request->backendBucket1->id = 'maiores';
    $request->backendBucket1->kind = 'quasi';
    $request->backendBucket1->name = 'Freda Marks';
    $request->backendBucket1->selfLink = 'sapiente';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->backendBucketPathParameter = 'ea';
    $request->callback = 'impedit';
    $request->fields = 'corporis';
    $request->key = 'veniam';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'magnam';
    $request->requestId = 'ea';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeBackendBucketsPatchSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsSetEdgeSecurityPolicy

Sets the edge security policy for the specified backend bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetEdgeSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SecurityPolicyReference;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetEdgeSecurityPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsSetEdgeSecurityPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->securityPolicyReference = new SecurityPolicyReference();
    $request->securityPolicyReference->securityPolicy = 'minima';
    $request->accessToken = 'eaque';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'libero';
    $request->callback = 'aut';
    $request->fields = 'aut';
    $request->key = 'deleniti';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'fugit';
    $request->requestId = 'accusamus';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'non';
    $request->userIp = 'et';

    $requestSecurity = new ComputeBackendBucketsSetEdgeSecurityPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsSetEdgeSecurityPolicy($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsUpdate

Updates the specified BackendBucket resource with the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucket;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyBypassCacheOnRequestHeader;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheKeyPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyCacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCdnPolicyNegativeCachingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BackendBucketCompressionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendBucket1 = new BackendBucket();
    $request->backendBucket1->bucketName = 'laborum';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'eum',
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'nobis',
        'quas',
    ];
    $request->backendBucket1->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::USE_ORIGIN_HEADERS;
    $request->backendBucket1->cdnPolicy->clientTtl = 860552;
    $request->backendBucket1->cdnPolicy->defaultTtl = 379034;
    $request->backendBucket1->cdnPolicy->maxTtl = 727044;
    $request->backendBucket1->cdnPolicy->negativeCaching = false;
    $request->backendBucket1->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket1->cdnPolicy->requestCoalescing = false;
    $request->backendBucket1->cdnPolicy->serveWhileStale = 270328;
    $request->backendBucket1->cdnPolicy->signedUrlCacheMaxAgeSec = 'numquam';
    $request->backendBucket1->cdnPolicy->signedUrlKeyNames = [
        'provident',
    ];
    $request->backendBucket1->compressionMode = BackendBucketCompressionModeEnum::AUTOMATIC;
    $request->backendBucket1->creationTimestamp = 'molestiae';
    $request->backendBucket1->customResponseHeaders = [
        'odio',
        'eius',
    ];
    $request->backendBucket1->description = 'esse';
    $request->backendBucket1->edgeSecurityPolicy = 'esse';
    $request->backendBucket1->enableCdn = false;
    $request->backendBucket1->id = 'rem';
    $request->backendBucket1->kind = 'fuga';
    $request->backendBucket1->name = 'Yvette Stehr';
    $request->backendBucket1->selfLink = 'suscipit';
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->backendBucketPathParameter = 'praesentium';
    $request->callback = 'quisquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'neque';
    $request->requestId = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'fuga';

    $requestSecurity = new ComputeBackendBucketsUpdateSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsUpdate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
