# buckets

### Available Operations

* [storageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsPatch](#storagebucketspatch) - Updates a bucket. This method supports patch semantics.
* [storageBucketsUpdate](#storagebucketsupdate) - Updates a bucket.

## storageBucketsDelete

Permanently deletes an empty bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'consequatur';
    $request->fields = 'est';
    $request->ifMetagenerationMatch = 'quibusdam';
    $request->ifMetagenerationNotMatch = 'explicabo';
    $request->key = 'deserunt';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->userIp = 'labore';

    $requestSecurity = new StorageBucketsDeleteSecurity();
    $requestSecurity->option1 = new StorageBucketsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsGet

Returns metadata for the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'modi';
    $request->fields = 'qui';
    $request->ifMetagenerationMatch = 'aliquid';
    $request->ifMetagenerationNotMatch = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->projection = StorageBucketsGetProjectionEnum::FULL;
    $request->quotaUser = 'assumenda';
    $request->userIp = 'ipsam';

    $requestSecurity = new StorageBucketsGetSecurity();
    $requestSecurity->option1 = new StorageBucketsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsGet($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsInsert

Creates a new bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Bucket;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsInsertRequest();
    $request->bucket = new Bucket();
    $request->bucket->acl = [
        new BucketAccessControl(),
    ];
    $request->bucket->cors = [
        new BucketCors(),
    ];
    $request->bucket->defaultObjectAcl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->bucket->etag = 'excepturi';
    $request->bucket->id = '4bb4f63c-969e-49a3-afa7-7dfb14cd66ae';
    $request->bucket->kind = 'non';
    $request->bucket->lifecycle = new BucketLifecycle();
    $request->bucket->lifecycle->rule = [
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
    ];
    $request->bucket->location = 'enim';
    $request->bucket->logging = new BucketLogging();
    $request->bucket->logging->logBucket = 'accusamus';
    $request->bucket->logging->logObjectPrefix = 'delectus';
    $request->bucket->metageneration = 'quidem';
    $request->bucket->name = 'Marco Olson';
    $request->bucket->owner = new BucketOwner();
    $request->bucket->owner->entity = 'sapiente';
    $request->bucket->owner->entityId = 'amet';
    $request->bucket->selfLink = 'deserunt';
    $request->bucket->storageClass = 'nisi';
    $request->bucket->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T03:14:12.839Z');
    $request->bucket->versioning = new BucketVersioning();
    $request->bucket->versioning->enabled = false;
    $request->bucket->website = new BucketWebsite();
    $request->bucket->website->mainPageSuffix = 'omnis';
    $request->bucket->website->notFoundPage = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->fields = 'perferendis';
    $request->key = 'nihil';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'distinctio';
    $request->projection = StorageBucketsInsertProjectionEnum::NO_ACL;
    $request->quotaUser = 'labore';
    $request->userIp = 'labore';

    $requestSecurity = new StorageBucketsInsertSecurity();
    $requestSecurity->option1 = new StorageBucketsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsInsert($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsList

Retrieves a list of buckets for a given project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'suscipit';
    $request->key = 'natus';
    $request->maxResults = 749170;
    $request->oauthToken = 'eum';
    $request->pageToken = 'vero';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->projection = StorageBucketsListProjectionEnum::FULL;
    $request->quotaUser = 'magnam';
    $request->userIp = 'et';

    $requestSecurity = new StorageBucketsListSecurity();
    $requestSecurity->option1 = new StorageBucketsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsList($request, $requestSecurity);

    if ($response->buckets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsPatch

Updates a bucket. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Bucket;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsPatchRequest();
    $request->bucket1 = new Bucket();
    $request->bucket1->acl = [
        new BucketAccessControl(),
        new BucketAccessControl(),
        new BucketAccessControl(),
    ];
    $request->bucket1->cors = [
        new BucketCors(),
        new BucketCors(),
    ];
    $request->bucket1->defaultObjectAcl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->bucket1->etag = 'quos';
    $request->bucket1->id = '90afa563-e251-46fe-8c8b-711e5b7fd2ed';
    $request->bucket1->kind = 'accusantium';
    $request->bucket1->lifecycle = new BucketLifecycle();
    $request->bucket1->lifecycle->rule = [
        new BucketLifecycleRule(),
    ];
    $request->bucket1->location = 'praesentium';
    $request->bucket1->logging = new BucketLogging();
    $request->bucket1->logging->logBucket = 'natus';
    $request->bucket1->logging->logObjectPrefix = 'magni';
    $request->bucket1->metageneration = 'sunt';
    $request->bucket1->name = 'Gilberto Streich';
    $request->bucket1->owner = new BucketOwner();
    $request->bucket1->owner->entity = 'excepturi';
    $request->bucket1->owner->entityId = 'odit';
    $request->bucket1->selfLink = 'ea';
    $request->bucket1->storageClass = 'accusantium';
    $request->bucket1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T08:38:36.147Z');
    $request->bucket1->versioning = new BucketVersioning();
    $request->bucket1->versioning->enabled = false;
    $request->bucket1->website = new BucketWebsite();
    $request->bucket1->website->mainPageSuffix = 'quidem';
    $request->bucket1->website->notFoundPage = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->bucketPathParameter = 'voluptate';
    $request->fields = 'autem';
    $request->ifMetagenerationMatch = 'nam';
    $request->ifMetagenerationNotMatch = 'eaque';
    $request->key = 'pariatur';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->projection = StorageBucketsPatchProjectionEnum::NO_ACL;
    $request->quotaUser = 'perferendis';
    $request->userIp = 'fugiat';

    $requestSecurity = new StorageBucketsPatchSecurity();
    $requestSecurity->option1 = new StorageBucketsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsPatch($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsUpdate

Updates a bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Bucket;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsUpdateRequest();
    $request->bucket1 = new Bucket();
    $request->bucket1->acl = [
        new BucketAccessControl(),
    ];
    $request->bucket1->cors = [
        new BucketCors(),
    ];
    $request->bucket1->defaultObjectAcl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->bucket1->etag = 'corporis';
    $request->bucket1->id = 'fbb25870-5320-42c7-bd5f-e9b90c28909b';
    $request->bucket1->kind = 'adipisci';
    $request->bucket1->lifecycle = new BucketLifecycle();
    $request->bucket1->lifecycle->rule = [
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
    ];
    $request->bucket1->location = 'earum';
    $request->bucket1->logging = new BucketLogging();
    $request->bucket1->logging->logBucket = 'modi';
    $request->bucket1->logging->logObjectPrefix = 'iste';
    $request->bucket1->metageneration = 'dolorum';
    $request->bucket1->name = 'Ervin McLaughlin';
    $request->bucket1->owner = new BucketOwner();
    $request->bucket1->owner->entity = 'delectus';
    $request->bucket1->owner->entityId = 'quaerat';
    $request->bucket1->selfLink = 'quos';
    $request->bucket1->storageClass = 'aliquid';
    $request->bucket1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-16T09:46:06.582Z');
    $request->bucket1->versioning = new BucketVersioning();
    $request->bucket1->versioning->enabled = false;
    $request->bucket1->website = new BucketWebsite();
    $request->bucket1->website->mainPageSuffix = 'dolor';
    $request->bucket1->website->notFoundPage = 'qui';
    $request->alt = AltEnum::JSON;
    $request->bucketPathParameter = 'ipsum';
    $request->fields = 'hic';
    $request->ifMetagenerationMatch = 'excepturi';
    $request->ifMetagenerationNotMatch = 'cum';
    $request->key = 'voluptate';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->projection = StorageBucketsUpdateProjectionEnum::NO_ACL;
    $request->quotaUser = 'amet';
    $request->userIp = 'dolorum';

    $requestSecurity = new StorageBucketsUpdateSecurity();
    $requestSecurity->option1 = new StorageBucketsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsUpdate($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
