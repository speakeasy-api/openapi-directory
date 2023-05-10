# buckets

### Available Operations

* [storageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsGetIamPolicy](#storagebucketsgetiampolicy) - Returns an IAM policy for the specified bucket.
* [storageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsLockRetentionPolicy](#storagebucketslockretentionpolicy) - Locks retention policy on a bucket.
* [storageBucketsPatch](#storagebucketspatch) - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* [storageBucketsSetIamPolicy](#storagebucketssetiampolicy) - Updates an IAM policy for the specified bucket.
* [storageBucketsTestIamPermissions](#storagebucketstestiampermissions) - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* [storageBucketsUpdate](#storagebucketsupdate) - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'fugit';
    $request->fields = 'dolorum';
    $request->ifMetagenerationMatch = 'excepturi';
    $request->ifMetagenerationNotMatch = 'tempora';
    $request->key = 'facilis';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->userIp = 'eum';
    $request->userProject = 'non';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'eligendi';
    $request->fields = 'sint';
    $request->ifMetagenerationMatch = 'aliquid';
    $request->ifMetagenerationNotMatch = 'provident';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->projection = StorageBucketsGetProjectionEnum::NO_ACL;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'debitis';
    $request->userIp = 'a';
    $request->userProject = 'dolorum';

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

## storageBucketsGetIamPolicy

Returns an IAM policy for the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsGetIamPolicyRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'in';
    $request->fields = 'in';
    $request->key = 'illum';
    $request->oauthToken = 'maiores';
    $request->optionsRequestedPolicyVersion = 699479;
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'magnam';
    $request->userIp = 'cumque';
    $request->userProject = 'facere';

    $requestSecurity = new StorageBucketsGetIamPolicySecurity();
    $requestSecurity->option1 = new StorageBucketsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketAutoclass;
use \OpenAPI\OpenAPI\Models\Shared\BucketBilling;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\BucketCustomPlacementConfig;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketEncryption;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationBucketPolicyOnly;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationUniformBucketLevelAccess;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertPredefinedDefaultObjectACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsInsertRequest();
    $request->bucket = new Bucket();
    $request->bucket->acl = [
        new BucketAccessControl(),
        new BucketAccessControl(),
    ];
    $request->bucket->autoclass = new BucketAutoclass();
    $request->bucket->autoclass->enabled = false;
    $request->bucket->autoclass->toggleTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-29T11:09:12.937Z');
    $request->bucket->billing = new BucketBilling();
    $request->bucket->billing->requesterPays = false;
    $request->bucket->cors = [
        new BucketCors(),
        new BucketCors(),
        new BucketCors(),
        new BucketCors(),
    ];
    $request->bucket->customPlacementConfig = new BucketCustomPlacementConfig();
    $request->bucket->customPlacementConfig->dataLocations = [
        'occaecati',
    ];
    $request->bucket->defaultEventBasedHold = false;
    $request->bucket->defaultObjectAcl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->bucket->encryption = new BucketEncryption();
    $request->bucket->encryption->defaultKmsKeyName = 'accusamus';
    $request->bucket->etag = 'delectus';
    $request->bucket->iamConfiguration = new BucketIamConfiguration();
    $request->bucket->iamConfiguration->bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly();
    $request->bucket->iamConfiguration->bucketPolicyOnly->enabled = false;
    $request->bucket->iamConfiguration->bucketPolicyOnly->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-28T10:05:29.849Z');
    $request->bucket->iamConfiguration->publicAccessPrevention = 'nam';
    $request->bucket->iamConfiguration->uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess();
    $request->bucket->iamConfiguration->uniformBucketLevelAccess->enabled = false;
    $request->bucket->iamConfiguration->uniformBucketLevelAccess->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T00:47:48.012Z');
    $request->bucket->id = '8f3a6699-7074-4ba4-869b-6e2141959890';
    $request->bucket->kind = 'mollitia';
    $request->bucket->labels = [
        'mollitia' => 'ad',
        'eum' => 'dolor',
        'necessitatibus' => 'odit',
        'nemo' => 'quasi',
    ];
    $request->bucket->lifecycle = new BucketLifecycle();
    $request->bucket->lifecycle->rule = [
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
    ];
    $request->bucket->location = 'doloribus';
    $request->bucket->locationType = 'debitis';
    $request->bucket->logging = new BucketLogging();
    $request->bucket->logging->logBucket = 'eius';
    $request->bucket->logging->logObjectPrefix = 'maxime';
    $request->bucket->metageneration = 'deleniti';
    $request->bucket->name = 'Dr. Arnold Bradtke';
    $request->bucket->owner = new BucketOwner();
    $request->bucket->owner->entity = 'expedita';
    $request->bucket->owner->entityId = 'nihil';
    $request->bucket->projectNumber = 'repellat';
    $request->bucket->retentionPolicy = new BucketRetentionPolicy();
    $request->bucket->retentionPolicy->effectiveTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-21T08:29:53.942Z');
    $request->bucket->retentionPolicy->isLocked = false;
    $request->bucket->retentionPolicy->retentionPeriod = 'saepe';
    $request->bucket->rpo = 'pariatur';
    $request->bucket->satisfiesPZS = false;
    $request->bucket->selfLink = 'accusantium';
    $request->bucket->storageClass = 'consequuntur';
    $request->bucket->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-08T15:23:46.576Z');
    $request->bucket->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T19:20:12.159Z');
    $request->bucket->versioning = new BucketVersioning();
    $request->bucket->versioning->enabled = false;
    $request->bucket->website = new BucketWebsite();
    $request->bucket->website->mainPageSuffix = 'quo';
    $request->bucket->website->notFoundPage = 'illum';
    $request->alt = AltEnum::JSON;
    $request->fields = 'pariatur';
    $request->key = 'maxime';
    $request->oauthToken = 'ea';
    $request->predefinedAcl = StorageBucketsInsertPredefinedACLEnum::PROJECT_PRIVATE;
    $request->predefinedDefaultObjectAcl = StorageBucketsInsertPredefinedDefaultObjectACLEnum::AUTHENTICATED_READ;
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->projection = StorageBucketsInsertProjectionEnum::FULL;
    $request->quotaUser = 'ab';
    $request->uploadType = 'maiores';
    $request->userIp = 'quidem';
    $request->userProject = 'ipsam';

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
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'voluptate';
    $request->key = 'autem';
    $request->maxResults = 722056;
    $request->oauthToken = 'eaque';
    $request->pageToken = 'pariatur';
    $request->prefix = 'nemo';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->projection = StorageBucketsListProjectionEnum::FULL;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'amet';
    $request->userIp = 'aut';
    $request->userProject = 'cumque';

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

## storageBucketsLockRetentionPolicy

Locks retention policy on a bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsLockRetentionPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsLockRetentionPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsLockRetentionPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsLockRetentionPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsLockRetentionPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsLockRetentionPolicyRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'corporis';
    $request->fields = 'hic';
    $request->ifMetagenerationMatch = 'libero';
    $request->key = 'nobis';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->userIp = 'dignissimos';
    $request->userProject = 'eaque';

    $requestSecurity = new StorageBucketsLockRetentionPolicySecurity();
    $requestSecurity->option1 = new StorageBucketsLockRetentionPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsLockRetentionPolicy($request, $requestSecurity);

    if ($response->bucket !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsPatch

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Bucket;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketAutoclass;
use \OpenAPI\OpenAPI\Models\Shared\BucketBilling;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\BucketCustomPlacementConfig;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketEncryption;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationBucketPolicyOnly;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationUniformBucketLevelAccess;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsPatchPredefinedDefaultObjectACLEnum;
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
    ];
    $request->bucket1->autoclass = new BucketAutoclass();
    $request->bucket1->autoclass->enabled = false;
    $request->bucket1->autoclass->toggleTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-27T11:39:54.088Z');
    $request->bucket1->billing = new BucketBilling();
    $request->bucket1->billing->requesterPays = false;
    $request->bucket1->cors = [
        new BucketCors(),
    ];
    $request->bucket1->customPlacementConfig = new BucketCustomPlacementConfig();
    $request->bucket1->customPlacementConfig->dataLocations = [
        'minus',
    ];
    $request->bucket1->defaultEventBasedHold = false;
    $request->bucket1->defaultObjectAcl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->bucket1->encryption = new BucketEncryption();
    $request->bucket1->encryption->defaultKmsKeyName = 'dolor';
    $request->bucket1->etag = 'vero';
    $request->bucket1->iamConfiguration = new BucketIamConfiguration();
    $request->bucket1->iamConfiguration->bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly();
    $request->bucket1->iamConfiguration->bucketPolicyOnly->enabled = false;
    $request->bucket1->iamConfiguration->bucketPolicyOnly->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-21T09:30:39.477Z');
    $request->bucket1->iamConfiguration->publicAccessPrevention = 'recusandae';
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess();
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess->enabled = false;
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-04T18:39:34.709Z');
    $request->bucket1->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';
    $request->bucket1->kind = 'cum';
    $request->bucket1->labels = [
        'dignissimos' => 'reiciendis',
        'amet' => 'dolorum',
    ];
    $request->bucket1->lifecycle = new BucketLifecycle();
    $request->bucket1->lifecycle->rule = [
        new BucketLifecycleRule(),
        new BucketLifecycleRule(),
    ];
    $request->bucket1->location = 'veritatis';
    $request->bucket1->locationType = 'ipsa';
    $request->bucket1->logging = new BucketLogging();
    $request->bucket1->logging->logBucket = 'ipsa';
    $request->bucket1->logging->logObjectPrefix = 'iure';
    $request->bucket1->metageneration = 'odio';
    $request->bucket1->name = 'Sophia Predovic';
    $request->bucket1->owner = new BucketOwner();
    $request->bucket1->owner->entity = 'natus';
    $request->bucket1->owner->entityId = 'eos';
    $request->bucket1->projectNumber = 'atque';
    $request->bucket1->retentionPolicy = new BucketRetentionPolicy();
    $request->bucket1->retentionPolicy->effectiveTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T01:35:05.899Z');
    $request->bucket1->retentionPolicy->isLocked = false;
    $request->bucket1->retentionPolicy->retentionPeriod = 'ab';
    $request->bucket1->rpo = 'soluta';
    $request->bucket1->satisfiesPZS = false;
    $request->bucket1->selfLink = 'dolorum';
    $request->bucket1->storageClass = 'iusto';
    $request->bucket1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-28T20:45:55.086Z');
    $request->bucket1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-14T20:34:13.522Z');
    $request->bucket1->versioning = new BucketVersioning();
    $request->bucket1->versioning->enabled = false;
    $request->bucket1->website = new BucketWebsite();
    $request->bucket1->website->mainPageSuffix = 'necessitatibus';
    $request->bucket1->website->notFoundPage = 'distinctio';
    $request->alt = AltEnum::JSON;
    $request->bucketPathParameter = 'asperiores';
    $request->fields = 'nihil';
    $request->ifMetagenerationMatch = 'ipsum';
    $request->ifMetagenerationNotMatch = 'voluptate';
    $request->key = 'id';
    $request->oauthToken = 'saepe';
    $request->predefinedAcl = StorageBucketsPatchPredefinedACLEnum::PRIVATE;
    $request->predefinedDefaultObjectAcl = StorageBucketsPatchPredefinedDefaultObjectACLEnum::AUTHENTICATED_READ;
    $request->prettyPrint = false;
    $request->projection = StorageBucketsPatchProjectionEnum::FULL;
    $request->quotaUser = 'amet';
    $request->uploadType = 'optio';
    $request->userIp = 'accusamus';
    $request->userProject = 'ad';

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

## storageBucketsSetIamPolicy

Updates an IAM policy for the specified bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyBindings;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsSetIamPolicyRequest();
    $request->policy = new Policy();
    $request->policy->bindings = [
        new PolicyBindings(),
        new PolicyBindings(),
        new PolicyBindings(),
        new PolicyBindings(),
    ];
    $request->policy->etag = 'suscipit';
    $request->policy->kind = 'deserunt';
    $request->policy->resourceId = 'provident';
    $request->policy->version = 324683;
    $request->alt = AltEnum::JSON;
    $request->bucket = 'repellendus';
    $request->fields = 'totam';
    $request->key = 'similique';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'quaerat';
    $request->userIp = 'tempora';
    $request->userProject = 'vel';

    $requestSecurity = new StorageBucketsSetIamPolicySecurity();
    $requestSecurity->option1 = new StorageBucketsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsTestIamPermissions

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsTestIamPermissionsSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageBucketsTestIamPermissionsRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quod';
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->oauthToken = 'dolorum';
    $request->permissions = [
        'esse',
        'harum',
        'iusto',
        'ipsum',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->userIp = 'amet';
    $request->userProject = 'tempore';

    $requestSecurity = new StorageBucketsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new StorageBucketsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->buckets->storageBucketsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageBucketsUpdate

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Bucket;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\BucketAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketAutoclass;
use \OpenAPI\OpenAPI\Models\Shared\BucketBilling;
use \OpenAPI\OpenAPI\Models\Shared\BucketCors;
use \OpenAPI\OpenAPI\Models\Shared\BucketCustomPlacementConfig;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\BucketEncryption;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationBucketPolicyOnly;
use \OpenAPI\OpenAPI\Models\Shared\BucketIamConfigurationUniformBucketLevelAccess;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycle;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRule;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleAction;
use \OpenAPI\OpenAPI\Models\Shared\BucketLifecycleRuleCondition;
use \OpenAPI\OpenAPI\Models\Shared\BucketLogging;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwner;
use \OpenAPI\OpenAPI\Models\Shared\BucketRetentionPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BucketVersioning;
use \OpenAPI\OpenAPI\Models\Shared\BucketWebsite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdatePredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageBucketsUpdatePredefinedDefaultObjectACLEnum;
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
        new BucketAccessControl(),
        new BucketAccessControl(),
        new BucketAccessControl(),
    ];
    $request->bucket1->autoclass = new BucketAutoclass();
    $request->bucket1->autoclass->enabled = false;
    $request->bucket1->autoclass->toggleTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-08T12:03:15.868Z');
    $request->bucket1->billing = new BucketBilling();
    $request->bucket1->billing->requesterPays = false;
    $request->bucket1->cors = [
        new BucketCors(),
    ];
    $request->bucket1->customPlacementConfig = new BucketCustomPlacementConfig();
    $request->bucket1->customPlacementConfig->dataLocations = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->bucket1->defaultEventBasedHold = false;
    $request->bucket1->defaultObjectAcl = [
        new ObjectAccessControl(),
    ];
    $request->bucket1->encryption = new BucketEncryption();
    $request->bucket1->encryption->defaultKmsKeyName = 'sed';
    $request->bucket1->etag = 'vel';
    $request->bucket1->iamConfiguration = new BucketIamConfiguration();
    $request->bucket1->iamConfiguration->bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly();
    $request->bucket1->iamConfiguration->bucketPolicyOnly->enabled = false;
    $request->bucket1->iamConfiguration->bucketPolicyOnly->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-02T20:32:30.487Z');
    $request->bucket1->iamConfiguration->publicAccessPrevention = 'deserunt';
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess();
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess->enabled = false;
    $request->bucket1->iamConfiguration->uniformBucketLevelAccess->lockedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-14T13:38:40.307Z');
    $request->bucket1->id = '429cdb1a-8422-4bb6-b9d2-322715bf0cbb';
    $request->bucket1->kind = 'et';
    $request->bucket1->labels = [
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
        'tempore' => 'cupiditate',
        'aperiam' => 'delectus',
    ];
    $request->bucket1->lifecycle = new BucketLifecycle();
    $request->bucket1->lifecycle->rule = [
        new BucketLifecycleRule(),
    ];
    $request->bucket1->location = 'dolore';
    $request->bucket1->locationType = 'labore';
    $request->bucket1->logging = new BucketLogging();
    $request->bucket1->logging->logBucket = 'adipisci';
    $request->bucket1->logging->logObjectPrefix = 'dolorum';
    $request->bucket1->metageneration = 'architecto';
    $request->bucket1->name = 'Margaret Luettgen MD';
    $request->bucket1->owner = new BucketOwner();
    $request->bucket1->owner->entity = 'repellendus';
    $request->bucket1->owner->entityId = 'porro';
    $request->bucket1->projectNumber = 'doloribus';
    $request->bucket1->retentionPolicy = new BucketRetentionPolicy();
    $request->bucket1->retentionPolicy->effectiveTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-19T05:23:08.152Z');
    $request->bucket1->retentionPolicy->isLocked = false;
    $request->bucket1->retentionPolicy->retentionPeriod = 'cupiditate';
    $request->bucket1->rpo = 'qui';
    $request->bucket1->satisfiesPZS = false;
    $request->bucket1->selfLink = 'quae';
    $request->bucket1->storageClass = 'laudantium';
    $request->bucket1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-03T03:16:58.870Z');
    $request->bucket1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-21T15:23:31.740Z');
    $request->bucket1->versioning = new BucketVersioning();
    $request->bucket1->versioning->enabled = false;
    $request->bucket1->website = new BucketWebsite();
    $request->bucket1->website->mainPageSuffix = 'vero';
    $request->bucket1->website->notFoundPage = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->bucketPathParameter = 'quis';
    $request->fields = 'ipsum';
    $request->ifMetagenerationMatch = 'delectus';
    $request->ifMetagenerationNotMatch = 'voluptate';
    $request->key = 'consectetur';
    $request->oauthToken = 'vero';
    $request->predefinedAcl = StorageBucketsUpdatePredefinedACLEnum::PUBLIC_READ_WRITE;
    $request->predefinedDefaultObjectAcl = StorageBucketsUpdatePredefinedDefaultObjectACLEnum::BUCKET_OWNER_READ;
    $request->prettyPrint = false;
    $request->projection = StorageBucketsUpdateProjectionEnum::NO_ACL;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'quod';
    $request->userIp = 'odio';
    $request->userProject = 'similique';

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
