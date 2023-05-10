# backendBuckets

### Available Operations

* [computeBackendBucketsAddSignedUrlKey](#computebackendbucketsaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsDelete](#computebackendbucketsdelete) - Deletes the specified BackendBucket resource.
* [computeBackendBucketsDeleteSignedUrlKey](#computebackendbucketsdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsGet](#computebackendbucketsget) - Returns the specified BackendBucket resource.
* [computeBackendBucketsGetIamPolicy](#computebackendbucketsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeBackendBucketsInsert](#computebackendbucketsinsert) - Creates a BackendBucket resource in the specified project using the data included in the request.
* [computeBackendBucketsList](#computebackendbucketslist) - Retrieves the list of BackendBucket resources available to the specified project.
* [computeBackendBucketsPatch](#computebackendbucketspatch) - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendBucketsSetEdgeSecurityPolicy](#computebackendbucketssetedgesecuritypolicy) - Sets the edge security policy for the specified backend bucket.
* [computeBackendBucketsSetIamPolicy](#computebackendbucketssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeBackendBucketsTestIamPermissions](#computebackendbucketstestiampermissions) - Returns permissions that a caller has on the specified resource.
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
    $request->signedUrlKey->keyName = 'odio';
    $request->signedUrlKey->keyValue = 'sunt';
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'hic';
    $request->callback = 'voluptatem';
    $request->fields = 'cumque';
    $request->key = 'soluta';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'saepe';
    $request->requestId = 'ipsum';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'nobis';
    $request->userIp = 'quos';

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
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::JSON;
    $request->backendBucket = 'delectus';
    $request->callback = 'dolorem';
    $request->fields = 'dolore';
    $request->key = 'labore';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'dolorum';
    $request->quotaUser = 'architecto';
    $request->requestId = 'quae';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'porro';
    $request->callback = 'doloribus';
    $request->fields = 'ut';
    $request->key = 'facilis';
    $request->keyName = 'cupiditate';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'laudantium';
    $request->requestId = 'odio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'quisquam';

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
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'ipsum';
    $request->callback = 'delectus';
    $request->fields = 'voluptate';
    $request->key = 'consectetur';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'tenetur';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'quod';

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

## computeBackendBucketsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'ducimus';
    $request->key = 'dolore';
    $request->oauthToken = 'quibusdam';
    $request->optionsRequestedPolicyVersion = 848944;
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'natus';
    $request->resource = 'impedit';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'exercitationem';

    $requestSecurity = new ComputeBackendBucketsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
    $request->backendBucket->bucketName = 'fugit';
    $request->backendBucket->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'doloribus',
        'iusto',
        'eligendi',
        'ducimus',
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'officia',
    ];
    $request->backendBucket->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::FORCE_CACHE_ALL;
    $request->backendBucket->cdnPolicy->clientTtl = 368584;
    $request->backendBucket->cdnPolicy->defaultTtl = 410492;
    $request->backendBucket->cdnPolicy->maxTtl = 136900;
    $request->backendBucket->cdnPolicy->negativeCaching = false;
    $request->backendBucket->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket->cdnPolicy->requestCoalescing = false;
    $request->backendBucket->cdnPolicy->serveWhileStale = 822118;
    $request->backendBucket->cdnPolicy->signedUrlCacheMaxAgeSec = 'magnam';
    $request->backendBucket->cdnPolicy->signedUrlKeyNames = [
        'ex',
    ];
    $request->backendBucket->compressionMode = BackendBucketCompressionModeEnum::DISABLED;
    $request->backendBucket->creationTimestamp = 'dicta';
    $request->backendBucket->customResponseHeaders = [
        'maiores',
    ];
    $request->backendBucket->description = 'quasi';
    $request->backendBucket->edgeSecurityPolicy = 'ex';
    $request->backendBucket->enableCdn = false;
    $request->backendBucket->id = 'nulla';
    $request->backendBucket->kind = 'excepturi';
    $request->backendBucket->name = 'Gordon Willms';
    $request->backendBucket->selfLink = 'ea';
    $request->backendBucket->selfLinkWithId = 'impedit';
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'inventore';
    $request->key = 'magnam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'consectetur';
    $request->requestId = 'recusandae';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'eaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aut';
    $request->fields = 'deleniti';
    $request->filter = 'impedit';
    $request->key = 'aliquam';
    $request->maxResults = 146946;
    $request->oauthToken = 'accusamus';
    $request->orderBy = 'inventore';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'dolorum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'velit';

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
    $request->backendBucket1->bucketName = 'autem';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'quasi',
        'tempora',
        'numquam',
    ];
    $request->backendBucket1->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendBucket1->cdnPolicy->clientTtl = 591935;
    $request->backendBucket1->cdnPolicy->defaultTtl = 55374;
    $request->backendBucket1->cdnPolicy->maxTtl = 476477;
    $request->backendBucket1->cdnPolicy->negativeCaching = false;
    $request->backendBucket1->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket1->cdnPolicy->requestCoalescing = false;
    $request->backendBucket1->cdnPolicy->serveWhileStale = 487935;
    $request->backendBucket1->cdnPolicy->signedUrlCacheMaxAgeSec = 'eius';
    $request->backendBucket1->cdnPolicy->signedUrlKeyNames = [
        'esse',
        'rem',
    ];
    $request->backendBucket1->compressionMode = BackendBucketCompressionModeEnum::DISABLED;
    $request->backendBucket1->creationTimestamp = 'reprehenderit';
    $request->backendBucket1->customResponseHeaders = [
        'fugiat',
        'ut',
        'eum',
    ];
    $request->backendBucket1->description = 'suscipit';
    $request->backendBucket1->edgeSecurityPolicy = 'assumenda';
    $request->backendBucket1->enableCdn = false;
    $request->backendBucket1->id = 'eos';
    $request->backendBucket1->kind = 'praesentium';
    $request->backendBucket1->name = 'Harold Bednar';
    $request->backendBucket1->selfLink = 'neque';
    $request->backendBucket1->selfLinkWithId = 'quo';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->backendBucketPathParameter = 'fuga';
    $request->callback = 'eius';
    $request->fields = 'eos';
    $request->key = 'voluptas';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->project = 'cupiditate';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'tempora';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'aspernatur';

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
    $request->securityPolicyReference->securityPolicy = 'quo';
    $request->accessToken = 'esse';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'aperiam';
    $request->callback = 'distinctio';
    $request->fields = 'quod';
    $request->key = 'dignissimos';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'totam';
    $request->requestId = 'accusamus';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'occaecati';

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

## computeBackendBucketsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'dolores';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'accusantium';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 430402;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->fields = 'deleniti';
    $request->key = 'fugit';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'mollitia';
    $request->quotaUser = 'incidunt';
    $request->resource = 'atque';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'nisi';

    $requestSecurity = new ComputeBackendBucketsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeBackendBucketsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeBackendBucketsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeBackendBucketsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'esse';
    $request->key = 'eveniet';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'esse';
    $request->resource = 'quod';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'vero';
    $request->userIp = 'aliquid';

    $requestSecurity = new ComputeBackendBucketsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeBackendBucketsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->backendBuckets->computeBackendBucketsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendBucket1 = new BackendBucket();
    $request->backendBucket1->bucketName = 'saepe';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'molestiae',
        'rerum',
        'occaecati',
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'distinctio',
        'eligendi',
    ];
    $request->backendBucket1->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::CACHE_ALL_STATIC;
    $request->backendBucket1->cdnPolicy->clientTtl = 636061;
    $request->backendBucket1->cdnPolicy->defaultTtl = 731398;
    $request->backendBucket1->cdnPolicy->maxTtl = 240020;
    $request->backendBucket1->cdnPolicy->negativeCaching = false;
    $request->backendBucket1->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket1->cdnPolicy->requestCoalescing = false;
    $request->backendBucket1->cdnPolicy->serveWhileStale = 160538;
    $request->backendBucket1->cdnPolicy->signedUrlCacheMaxAgeSec = 'consequatur';
    $request->backendBucket1->cdnPolicy->signedUrlKeyNames = [
        'quaerat',
        'sapiente',
        'consectetur',
        'esse',
    ];
    $request->backendBucket1->compressionMode = BackendBucketCompressionModeEnum::DISABLED;
    $request->backendBucket1->creationTimestamp = 'provident';
    $request->backendBucket1->customResponseHeaders = [
        'nulla',
        'quas',
        'esse',
        'quasi',
    ];
    $request->backendBucket1->description = 'a';
    $request->backendBucket1->edgeSecurityPolicy = 'error';
    $request->backendBucket1->enableCdn = false;
    $request->backendBucket1->id = 'sint';
    $request->backendBucket1->kind = 'pariatur';
    $request->backendBucket1->name = 'Howard Upton';
    $request->backendBucket1->selfLink = 'veritatis';
    $request->backendBucket1->selfLinkWithId = 'consequuntur';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucketPathParameter = 'culpa';
    $request->callback = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'in';
    $request->requestId = 'eius';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'soluta';

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
