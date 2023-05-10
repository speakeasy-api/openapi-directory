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
    $request->signedUrlKey->keyName = 'magni';
    $request->signedUrlKey->keyValue = 'odio';
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'nam';
    $request->callback = 'hic';
    $request->fields = 'voluptatem';
    $request->key = 'cumque';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'et';
    $request->requestId = 'saepe';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'nobis';

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
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'aperiam';
    $request->callback = 'delectus';
    $request->fields = 'dolorem';
    $request->key = 'dolore';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'dolorum';
    $request->requestId = 'architecto';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'quas';

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
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->backendBucket = 'repellendus';
    $request->callback = 'porro';
    $request->fields = 'doloribus';
    $request->key = 'ut';
    $request->keyName = 'facilis';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'quae';
    $request->requestId = 'laudantium';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'voluptatibus';

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
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'quis';
    $request->callback = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'vero';
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'hic';
    $request->userIp = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'vero';
    $request->key = 'ducimus';
    $request->oauthToken = 'dolore';
    $request->optionsRequestedPolicyVersion = 844550;
    $request->prettyPrint = false;
    $request->project = 'illum';
    $request->quotaUser = 'sequi';
    $request->resource = 'natus';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'aut';
    $request->userIp = 'voluptatibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->backendBucket = new BackendBucket();
    $request->backendBucket->bucketName = 'nulla';
    $request->backendBucket->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'maiores',
        'doloribus',
        'iusto',
        'eligendi',
    ];
    $request->backendBucket->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'alias',
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
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->fields = 'aliquid';
    $request->key = 'inventore';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'quo';
    $request->requestId = 'consectetur';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'minima';

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
    $request->accessToken = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aut';
    $request->fields = 'aut';
    $request->filter = 'deleniti';
    $request->key = 'impedit';
    $request->maxResults = 304582;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'placeat';

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
    $request->backendBucket1->bucketName = 'eum';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'quas',
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
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->backendBucketPathParameter = 'quo';
    $request->callback = 'fuga';
    $request->fields = 'eius';
    $request->key = 'eos';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'cupiditate';
    $request->requestId = 'consequatur';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'ipsam';

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
    $request->securityPolicyReference->securityPolicy = 'sequi';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::MEDIA;
    $request->backendBucket = 'recusandae';
    $request->callback = 'aperiam';
    $request->fields = 'distinctio';
    $request->key = 'quod';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'nihil';
    $request->requestId = 'totam';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'odio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetPolicyRequest = new GlobalSetPolicyRequest();
    $request->globalSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->etag = 'sapiente';
    $request->globalSetPolicyRequest->policy = new Policy();
    $request->globalSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->globalSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->globalSetPolicyRequest->policy->etag = 'molestiae';
    $request->globalSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->globalSetPolicyRequest->policy->version = 783648;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'consequuntur';
    $request->key = 'deleniti';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'mollitia';
    $request->resource = 'incidunt';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'explicabo';
    $request->userIp = 'minima';

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
        'sapiente',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'saepe';
    $request->key = 'occaecati';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'esse';
    $request->resource = 'eveniet';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'esse';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->backendBucket1 = new BackendBucket();
    $request->backendBucket1->bucketName = 'nam';
    $request->backendBucket1->cdnPolicy = new BackendBucketCdnPolicy();
    $request->backendBucket1->cdnPolicy->bypassCacheOnRequestHeaders = [
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
        new BackendBucketCdnPolicyBypassCacheOnRequestHeader(),
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy();
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->includeHttpHeaders = [
        'quasi',
        'saepe',
    ];
    $request->backendBucket1->cdnPolicy->cacheKeyPolicy->queryStringWhitelist = [
        'harum',
        'molestiae',
    ];
    $request->backendBucket1->cdnPolicy->cacheMode = BackendBucketCdnPolicyCacheModeEnum::INVALID_CACHE_MODE;
    $request->backendBucket1->cdnPolicy->clientTtl = 580197;
    $request->backendBucket1->cdnPolicy->defaultTtl = 327720;
    $request->backendBucket1->cdnPolicy->maxTtl = 716244;
    $request->backendBucket1->cdnPolicy->negativeCaching = false;
    $request->backendBucket1->cdnPolicy->negativeCachingPolicy = [
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
        new BackendBucketCdnPolicyNegativeCachingPolicy(),
    ];
    $request->backendBucket1->cdnPolicy->requestCoalescing = false;
    $request->backendBucket1->cdnPolicy->serveWhileStale = 27069;
    $request->backendBucket1->cdnPolicy->signedUrlCacheMaxAgeSec = 'culpa';
    $request->backendBucket1->cdnPolicy->signedUrlKeyNames = [
        'adipisci',
        'cumque',
        'consequuntur',
    ];
    $request->backendBucket1->compressionMode = BackendBucketCompressionModeEnum::AUTOMATIC;
    $request->backendBucket1->creationTimestamp = 'minus';
    $request->backendBucket1->customResponseHeaders = [
        'sapiente',
        'consectetur',
    ];
    $request->backendBucket1->description = 'esse';
    $request->backendBucket1->edgeSecurityPolicy = 'blanditiis';
    $request->backendBucket1->enableCdn = false;
    $request->backendBucket1->id = 'provident';
    $request->backendBucket1->kind = 'a';
    $request->backendBucket1->name = 'Dr. Clifton Koch';
    $request->backendBucket1->selfLink = 'sint';
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->backendBucketPathParameter = 'quia';
    $request->callback = 'eveniet';
    $request->fields = 'asperiores';
    $request->key = 'facere';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'quasi';
    $request->requestId = 'similique';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'tenetur';

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
