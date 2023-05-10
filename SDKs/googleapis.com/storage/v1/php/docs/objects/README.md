# objects

### Available Operations

* [storageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](#storageobjectscopy) - Copies a source object to a destination object. Optionally overrides metadata.
* [storageObjectsDelete](#storageobjectsdelete) - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](#storageobjectsget) - Retrieves an object or its metadata.
* [storageObjectsGetIamPolicy](#storageobjectsgetiampolicy) - Returns an IAM policy for the specified object.
* [storageObjectsInsert](#storageobjectsinsert) - Stores a new object and metadata.
* [storageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](#storageobjectspatch) - Patches an object's metadata.
* [storageObjectsRewrite](#storageobjectsrewrite) - Rewrites a source object to a destination object. Optionally overrides metadata.
* [storageObjectsSetIamPolicy](#storageobjectssetiampolicy) - Updates an IAM policy for the specified object.
* [storageObjectsTestIamPermissions](#storageobjectstestiampermissions) - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* [storageObjectsUpdate](#storageobjectsupdate) - Updates an object's metadata.
* [storageObjectsWatchAll](#storageobjectswatchall) - Watch for changes on all objects in a bucket.

## storageObjectsCompose

Concatenates a list of existing objects into a new object in the same bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ComposeRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\ObjectCustomerEncryption;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\ComposeRequestSourceObjects;
use \OpenAPI\OpenAPI\Models\Shared\ComposeRequestSourceObjectsObjectPreconditions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeDestinationPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsComposeRequest();
    $request->composeRequest = new ComposeRequest();
    $request->composeRequest->destination = new Object();
    $request->composeRequest->destination->acl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->composeRequest->destination->bucket = 'voluptatem';
    $request->composeRequest->destination->cacheControl = 'quisquam';
    $request->composeRequest->destination->componentCount = 919532;
    $request->composeRequest->destination->contentDisposition = 'quasi';
    $request->composeRequest->destination->contentEncoding = 'atque';
    $request->composeRequest->destination->contentLanguage = 'reprehenderit';
    $request->composeRequest->destination->contentType = 'asperiores';
    $request->composeRequest->destination->crc32c = 'totam';
    $request->composeRequest->destination->customTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-22T16:56:30.347Z');
    $request->composeRequest->destination->customerEncryption = new ObjectCustomerEncryption();
    $request->composeRequest->destination->customerEncryption->encryptionAlgorithm = 'maxime';
    $request->composeRequest->destination->customerEncryption->keySha256 = 'et';
    $request->composeRequest->destination->etag = 'esse';
    $request->composeRequest->destination->eventBasedHold = false;
    $request->composeRequest->destination->generation = 'amet';
    $request->composeRequest->destination->id = 'd689eee9-526f-48d9-86e8-81ead4f0e101';
    $request->composeRequest->destination->kind = 'dolores';
    $request->composeRequest->destination->kmsKeyName = 'enim';
    $request->composeRequest->destination->md5Hash = 'laboriosam';
    $request->composeRequest->destination->mediaLink = 'velit';
    $request->composeRequest->destination->metadata = [
        'molestias' => 'magnam',
        'saepe' => 'consequuntur',
        'occaecati' => 'officiis',
        'perspiciatis' => 'in',
    ];
    $request->composeRequest->destination->metageneration = 'adipisci';
    $request->composeRequest->destination->name = 'Tracy Cronin';
    $request->composeRequest->destination->owner = new ObjectOwner();
    $request->composeRequest->destination->owner->entity = 'quis';
    $request->composeRequest->destination->owner->entityId = 'reprehenderit';
    $request->composeRequest->destination->retentionExpirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-06T03:57:05.427Z');
    $request->composeRequest->destination->selfLink = 'corporis';
    $request->composeRequest->destination->size = 'quidem';
    $request->composeRequest->destination->storageClass = 'eveniet';
    $request->composeRequest->destination->temporaryHold = false;
    $request->composeRequest->destination->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:24:16.303Z');
    $request->composeRequest->destination->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T12:47:49.082Z');
    $request->composeRequest->destination->timeStorageClassUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-26T01:43:04.262Z');
    $request->composeRequest->destination->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T17:54:29.915Z');
    $request->composeRequest->kind = 'eveniet';
    $request->composeRequest->sourceObjects = [
        new ComposeRequestSourceObjects(),
    ];
    $request->alt = AltEnum::JSON;
    $request->destinationBucket = 'cum';
    $request->destinationObject = 'iure';
    $request->destinationPredefinedAcl = StorageObjectsComposeDestinationPredefinedACLEnum::PUBLIC_READ;
    $request->fields = 'ratione';
    $request->ifGenerationMatch = 'laborum';
    $request->ifMetagenerationMatch = 'distinctio';
    $request->key = 'voluptatum';
    $request->kmsKeyName = 'rem';
    $request->oauthToken = 'aliquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'repellat';
    $request->userIp = 'alias';
    $request->userProject = 'corporis';

    $requestSecurity = new StorageObjectsComposeSecurity();
    $requestSecurity->option1 = new StorageObjectsComposeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsCompose($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsCopy

Copies a source object to a destination object. Optionally overrides metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\ObjectCustomerEncryption;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopyDestinationPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopyProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsCopyRequest();
    $request->object = new Object();
    $request->object->acl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->object->bucket = 'nihil';
    $request->object->cacheControl = 'mollitia';
    $request->object->componentCount = 378245;
    $request->object->contentDisposition = 'alias';
    $request->object->contentEncoding = 'maiores';
    $request->object->contentLanguage = 'reiciendis';
    $request->object->contentType = 'dolores';
    $request->object->crc32c = 'id';
    $request->object->customTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-16T00:03:17.363Z');
    $request->object->customerEncryption = new ObjectCustomerEncryption();
    $request->object->customerEncryption->encryptionAlgorithm = 'dolorum';
    $request->object->customerEncryption->keySha256 = 'nesciunt';
    $request->object->etag = 'quae';
    $request->object->eventBasedHold = false;
    $request->object->generation = 'recusandae';
    $request->object->id = '94764a3e-865e-4795-af92-51a5a9da660f';
    $request->object->kind = 'doloribus';
    $request->object->kmsKeyName = 'ullam';
    $request->object->md5Hash = 'in';
    $request->object->mediaLink = 'nam';
    $request->object->metadata = [
        'officia' => 'laborum',
        'placeat' => 'modi',
        'voluptatibus' => 'molestias',
        'officiis' => 'sapiente',
    ];
    $request->object->metageneration = 'cumque';
    $request->object->name = 'Luz Goldner Sr.';
    $request->object->owner = new ObjectOwner();
    $request->object->owner->entity = 'cumque';
    $request->object->owner->entityId = 'quae';
    $request->object->retentionExpirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-04T16:56:27.065Z');
    $request->object->selfLink = 'aspernatur';
    $request->object->size = 'eum';
    $request->object->storageClass = 'eius';
    $request->object->temporaryHold = false;
    $request->object->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-05T02:38:00.020Z');
    $request->object->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-18T13:06:11.480Z');
    $request->object->timeStorageClassUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-13T13:26:04.826Z');
    $request->object->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T07:58:00.870Z');
    $request->alt = AltEnum::JSON;
    $request->destinationBucket = 'beatae';
    $request->destinationKmsKeyName = 'cupiditate';
    $request->destinationObject = 'provident';
    $request->destinationPredefinedAcl = StorageObjectsCopyDestinationPredefinedACLEnum::PUBLIC_READ;
    $request->fields = 'soluta';
    $request->ifGenerationMatch = 'hic';
    $request->ifGenerationNotMatch = 'illum';
    $request->ifMetagenerationMatch = 'eaque';
    $request->ifMetagenerationNotMatch = 'earum';
    $request->ifSourceGenerationMatch = 'perspiciatis';
    $request->ifSourceGenerationNotMatch = 'maiores';
    $request->ifSourceMetagenerationMatch = 'debitis';
    $request->ifSourceMetagenerationNotMatch = 'aliquid';
    $request->key = 'porro';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsCopyProjectionEnum::FULL;
    $request->quotaUser = 'fugit';
    $request->sourceBucket = 'cumque';
    $request->sourceGeneration = 'fuga';
    $request->sourceObject = 'ratione';
    $request->uploadType = 'animi';
    $request->userIp = 'necessitatibus';
    $request->userProject = 'nulla';

    $requestSecurity = new StorageObjectsCopySecurity();
    $requestSecurity->option1 = new StorageObjectsCopySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsCopy($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsDelete

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsDeleteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsDeleteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'consequatur';
    $request->fields = 'quasi';
    $request->generation = 'et';
    $request->ifGenerationMatch = 'ducimus';
    $request->ifGenerationNotMatch = 'natus';
    $request->ifMetagenerationMatch = 'occaecati';
    $request->ifMetagenerationNotMatch = 'suscipit';
    $request->key = 'adipisci';
    $request->oauthToken = 'quasi';
    $request->object = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'nulla';
    $request->userIp = 'necessitatibus';
    $request->userProject = 'ipsa';

    $requestSecurity = new StorageObjectsDeleteSecurity();
    $requestSecurity->option1 = new StorageObjectsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsGet

Retrieves an object or its metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'tempora';
    $request->fields = 'nihil';
    $request->generation = 'molestiae';
    $request->ifGenerationMatch = 'dicta';
    $request->ifGenerationNotMatch = 'iusto';
    $request->ifMetagenerationMatch = 'esse';
    $request->ifMetagenerationNotMatch = 'praesentium';
    $request->key = 'maiores';
    $request->oauthToken = 'reiciendis';
    $request->object = 'vel';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsGetProjectionEnum::FULL;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'doloremque';
    $request->userIp = 'dicta';
    $request->userProject = 'odio';

    $requestSecurity = new StorageObjectsGetSecurity();
    $requestSecurity->option1 = new StorageObjectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsGet($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsGetIamPolicy

Returns an IAM policy for the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsGetIamPolicySecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsGetIamPolicyRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'tempora';
    $request->fields = 'esse';
    $request->generation = 'ex';
    $request->key = 'consectetur';
    $request->oauthToken = 'aliquid';
    $request->object = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'sunt';
    $request->userIp = 'nostrum';
    $request->userProject = 'fugiat';

    $requestSecurity = new StorageObjectsGetIamPolicySecurity();
    $requestSecurity->option1 = new StorageObjectsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsInsert

Stores a new object and metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsInsertRequest();
    $request->requestBody = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'aliquid';
    $request->contentEncoding = 'officia';
    $request->fields = 'suscipit';
    $request->ifGenerationMatch = 'aliquid';
    $request->ifGenerationNotMatch = 'perferendis';
    $request->ifMetagenerationMatch = 'eum';
    $request->ifMetagenerationNotMatch = 'voluptas';
    $request->key = 'iste';
    $request->kmsKeyName = 'id';
    $request->name = 'Isabel Schuster';
    $request->oauthToken = 'laborum';
    $request->predefinedAcl = StorageObjectsInsertPredefinedACLEnum::PROJECT_PRIVATE;
    $request->prettyPrint = false;
    $request->projection = StorageObjectsInsertProjectionEnum::FULL;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'enim';
    $request->userIp = 'vitae';
    $request->userProject = 'repellendus';

    $requestSecurity = new StorageObjectsInsertSecurity();
    $requestSecurity->option1 = new StorageObjectsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsInsert($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsList

Retrieves a list of objects matching the criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsListSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'ex';
    $request->delimiter = 'quo';
    $request->endOffset = 'ex';
    $request->fields = 'ut';
    $request->includeTrailingDelimiter = false;
    $request->key = 'ad';
    $request->matchGlob = 'expedita';
    $request->maxResults = 29950;
    $request->oauthToken = 'molestias';
    $request->pageToken = 'cum';
    $request->prefix = 'aliquid';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsListProjectionEnum::FULL;
    $request->quotaUser = 'voluptatum';
    $request->startOffset = 'omnis';
    $request->uploadType = 'veritatis';
    $request->userIp = 'rerum';
    $request->userProject = 'est';
    $request->versions = false;

    $requestSecurity = new StorageObjectsListSecurity();
    $requestSecurity->option1 = new StorageObjectsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsList($request, $requestSecurity);

    if ($response->objects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsPatch

Patches an object's metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\ObjectCustomerEncryption;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsPatchRequest();
    $request->object1 = new Object();
    $request->object1->acl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->object1->bucket = 'voluptatem';
    $request->object1->cacheControl = 'sapiente';
    $request->object1->componentCount = 889288;
    $request->object1->contentDisposition = 'architecto';
    $request->object1->contentEncoding = 'fuga';
    $request->object1->contentLanguage = 'pariatur';
    $request->object1->contentType = 'debitis';
    $request->object1->crc32c = 'voluptatem';
    $request->object1->customTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-19T18:07:41.605Z');
    $request->object1->customerEncryption = new ObjectCustomerEncryption();
    $request->object1->customerEncryption->encryptionAlgorithm = 'earum';
    $request->object1->customerEncryption->keySha256 = 'ex';
    $request->object1->etag = 'sapiente';
    $request->object1->eventBasedHold = false;
    $request->object1->generation = 'rem';
    $request->object1->id = 'c5f350d8-cdb5-4a34-9814-3010421813d5';
    $request->object1->kind = 'consequuntur';
    $request->object1->kmsKeyName = 'ipsa';
    $request->object1->md5Hash = 'quas';
    $request->object1->mediaLink = 'eveniet';
    $request->object1->metadata = [
        'officiis' => 'esse',
        'necessitatibus' => 'sed',
        'veniam' => 'nesciunt',
        'expedita' => 'eum',
    ];
    $request->object1->metageneration = 'vel';
    $request->object1->name = 'Miss Oscar Heller';
    $request->object1->owner = new ObjectOwner();
    $request->object1->owner->entity = 'nobis';
    $request->object1->owner->entityId = 'laboriosam';
    $request->object1->retentionExpirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-09T08:51:26.881Z');
    $request->object1->selfLink = 'voluptatem';
    $request->object1->size = 'exercitationem';
    $request->object1->storageClass = 'necessitatibus';
    $request->object1->temporaryHold = false;
    $request->object1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T17:05:50.277Z');
    $request->object1->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-14T04:22:15.063Z');
    $request->object1->timeStorageClassUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-14T17:27:02.277Z');
    $request->object1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-05T14:49:29.609Z');
    $request->alt = AltEnum::JSON;
    $request->bucket = 'repudiandae';
    $request->fields = 'optio';
    $request->generation = 'occaecati';
    $request->ifGenerationMatch = 'nemo';
    $request->ifGenerationNotMatch = 'voluptate';
    $request->ifMetagenerationMatch = 'blanditiis';
    $request->ifMetagenerationNotMatch = 'officia';
    $request->key = 'voluptas';
    $request->oauthToken = 'numquam';
    $request->objectPathParameter = 'nemo';
    $request->predefinedAcl = StorageObjectsPatchPredefinedACLEnum::PRIVATE;
    $request->prettyPrint = false;
    $request->projection = StorageObjectsPatchProjectionEnum::FULL;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'ducimus';
    $request->userIp = 'nesciunt';
    $request->userProject = 'fuga';

    $requestSecurity = new StorageObjectsPatchSecurity();
    $requestSecurity->option1 = new StorageObjectsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsPatch($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsRewrite

Rewrites a source object to a destination object. Optionally overrides metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\ObjectCustomerEncryption;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteDestinationPredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsRewriteSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsRewriteRequest();
    $request->object = new Object();
    $request->object->acl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->object->bucket = 'incidunt';
    $request->object->cacheControl = 'quasi';
    $request->object->componentCount = 524380;
    $request->object->contentDisposition = 'fugiat';
    $request->object->contentEncoding = 'dicta';
    $request->object->contentLanguage = 'nisi';
    $request->object->contentType = 'consequuntur';
    $request->object->crc32c = 'consectetur';
    $request->object->customTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T07:36:53.765Z');
    $request->object->customerEncryption = new ObjectCustomerEncryption();
    $request->object->customerEncryption->encryptionAlgorithm = 'reiciendis';
    $request->object->customerEncryption->keySha256 = 'soluta';
    $request->object->etag = 'alias';
    $request->object->eventBasedHold = false;
    $request->object->generation = 'omnis';
    $request->object->id = '29921aef-b9f5-48c4-986e-68e4be056013';
    $request->object->kind = 'maiores';
    $request->object->kmsKeyName = 'enim';
    $request->object->md5Hash = 'sint';
    $request->object->mediaLink = 'nulla';
    $request->object->metadata = [
        'esse' => 'nemo',
        'reprehenderit' => 'est',
        'quis' => 'sint',
    ];
    $request->object->metageneration = 'accusamus';
    $request->object->name = 'Irvin Tromp';
    $request->object->owner = new ObjectOwner();
    $request->object->owner->entity = 'voluptas';
    $request->object->owner->entityId = 'debitis';
    $request->object->retentionExpirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-21T17:37:55.823Z');
    $request->object->selfLink = 'minus';
    $request->object->size = 'fuga';
    $request->object->storageClass = 'laborum';
    $request->object->temporaryHold = false;
    $request->object->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-03T14:46:04.624Z');
    $request->object->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-26T23:40:06.851Z');
    $request->object->timeStorageClassUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-03T04:15:46.912Z');
    $request->object->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-26T09:18:15.106Z');
    $request->alt = AltEnum::JSON;
    $request->destinationBucket = 'nam';
    $request->destinationKmsKeyName = 'dolore';
    $request->destinationObject = 'iusto';
    $request->destinationPredefinedAcl = StorageObjectsRewriteDestinationPredefinedACLEnum::BUCKET_OWNER_READ;
    $request->fields = 'sequi';
    $request->ifGenerationMatch = 'dignissimos';
    $request->ifGenerationNotMatch = 'neque';
    $request->ifMetagenerationMatch = 'quo';
    $request->ifMetagenerationNotMatch = 'deleniti';
    $request->ifSourceGenerationMatch = 'quibusdam';
    $request->ifSourceGenerationNotMatch = 'iure';
    $request->ifSourceMetagenerationMatch = 'odit';
    $request->ifSourceMetagenerationNotMatch = 'voluptatibus';
    $request->key = 'vel';
    $request->maxBytesRewrittenPerCall = 'magnam';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsRewriteProjectionEnum::FULL;
    $request->quotaUser = 'facere';
    $request->rewriteToken = 'libero';
    $request->sourceBucket = 'architecto';
    $request->sourceGeneration = 'voluptatibus';
    $request->sourceObject = 'quia';
    $request->uploadType = 'porro';
    $request->userIp = 'aliquam';
    $request->userProject = 'velit';

    $requestSecurity = new StorageObjectsRewriteSecurity();
    $requestSecurity->option1 = new StorageObjectsRewriteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsRewrite($request, $requestSecurity);

    if ($response->rewriteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsSetIamPolicy

Updates an IAM policy for the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\PolicyBindings;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsSetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsSetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsSetIamPolicyRequest();
    $request->policy = new Policy();
    $request->policy->bindings = [
        new PolicyBindings(),
    ];
    $request->policy->etag = 'accusantium';
    $request->policy->kind = 'vel';
    $request->policy->resourceId = 'ea';
    $request->policy->version = 107617;
    $request->alt = AltEnum::JSON;
    $request->bucket = 'vero';
    $request->fields = 'excepturi';
    $request->generation = 'eum';
    $request->key = 'velit';
    $request->oauthToken = 'ut';
    $request->object = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->uploadType = 'dicta';
    $request->userIp = 'impedit';
    $request->userProject = 'voluptatibus';

    $requestSecurity = new StorageObjectsSetIamPolicySecurity();
    $requestSecurity->option1 = new StorageObjectsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsTestIamPermissions

Tests a set of permissions on the given object to see which, if any, are held by the caller.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsTestIamPermissionsSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsTestIamPermissionsRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'iste';
    $request->fields = 'itaque';
    $request->generation = 'alias';
    $request->key = 'nisi';
    $request->oauthToken = 'itaque';
    $request->object = 'velit';
    $request->permissions = [
        'non',
        'dolor',
        'iusto',
    ];
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'doloremque';
    $request->userIp = 'consequatur';
    $request->userProject = 'officia';

    $requestSecurity = new StorageObjectsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new StorageObjectsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsUpdate

Updates an object's metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControlProjectTeam;
use \OpenAPI\OpenAPI\Models\Shared\ObjectCustomerEncryption;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdatePredefinedACLEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsUpdateRequest();
    $request->object1 = new Object();
    $request->object1->acl = [
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
        new ObjectAccessControl(),
    ];
    $request->object1->bucket = 'ea';
    $request->object1->cacheControl = 'quidem';
    $request->object1->componentCount = 377406;
    $request->object1->contentDisposition = 'facilis';
    $request->object1->contentEncoding = 'placeat';
    $request->object1->contentLanguage = 'perspiciatis';
    $request->object1->contentType = 'expedita';
    $request->object1->crc32c = 'deleniti';
    $request->object1->customTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-20T03:23:43.072Z');
    $request->object1->customerEncryption = new ObjectCustomerEncryption();
    $request->object1->customerEncryption->encryptionAlgorithm = 'ullam';
    $request->object1->customerEncryption->keySha256 = 'unde';
    $request->object1->etag = 'necessitatibus';
    $request->object1->eventBasedHold = false;
    $request->object1->generation = 'animi';
    $request->object1->id = 'c55a9741-d311-4352-965b-b8a720261143';
    $request->object1->kind = 'exercitationem';
    $request->object1->kmsKeyName = 'itaque';
    $request->object1->md5Hash = 'et';
    $request->object1->mediaLink = 'ipsum';
    $request->object1->metadata = [
        'nulla' => 'distinctio',
        'maxime' => 'quia',
        'quia' => 'nostrum',
    ];
    $request->object1->metageneration = 'omnis';
    $request->object1->name = 'Gerald Ondricka';
    $request->object1->owner = new ObjectOwner();
    $request->object1->owner->entity = 'officia';
    $request->object1->owner->entityId = 'quos';
    $request->object1->retentionExpirationTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-03T19:07:11.911Z');
    $request->object1->selfLink = 'iusto';
    $request->object1->size = 'ipsa';
    $request->object1->storageClass = 'voluptates';
    $request->object1->temporaryHold = false;
    $request->object1->timeCreated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T23:42:10.683Z');
    $request->object1->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-01T04:35:31.707Z');
    $request->object1->timeStorageClassUpdated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-09T00:25:03.486Z');
    $request->object1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T09:21:47.394Z');
    $request->alt = AltEnum::JSON;
    $request->bucket = 'esse';
    $request->fields = 'dolores';
    $request->generation = 'assumenda';
    $request->ifGenerationMatch = 'beatae';
    $request->ifGenerationNotMatch = 'est';
    $request->ifMetagenerationMatch = 'facere';
    $request->ifMetagenerationNotMatch = 'corrupti';
    $request->key = 'molestiae';
    $request->oauthToken = 'provident';
    $request->objectPathParameter = 'accusamus';
    $request->predefinedAcl = StorageObjectsUpdatePredefinedACLEnum::PUBLIC_READ;
    $request->prettyPrint = false;
    $request->projection = StorageObjectsUpdateProjectionEnum::NO_ACL;
    $request->quotaUser = 'sint';
    $request->uploadType = 'ea';
    $request->userIp = 'autem';
    $request->userProject = 'ipsam';

    $requestSecurity = new StorageObjectsUpdateSecurity();
    $requestSecurity->option1 = new StorageObjectsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsUpdate($request, $requestSecurity);

    if ($response->object !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## storageObjectsWatchAll

Watch for changes on all objects in a bucket.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\Channel;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsWatchAllRequest();
    $request->channel = new Channel();
    $request->channel->address = '538 Rippin Track';
    $request->channel->expiration = 'alias';
    $request->channel->id = '2bae0be2-d782-4259-a3ea-4b5197f92443';
    $request->channel->kind = 'at';
    $request->channel->params = [
        'dignissimos' => 'optio',
        'necessitatibus' => 'corporis',
        'qui' => 'expedita',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'voluptatum';
    $request->channel->resourceUri = 'cupiditate';
    $request->channel->token = 'minima';
    $request->channel->type = 'placeat';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'enim';
    $request->delimiter = 'neque';
    $request->endOffset = 'in';
    $request->fields = 'minus';
    $request->includeTrailingDelimiter = false;
    $request->key = 'eum';
    $request->maxResults = 266408;
    $request->oauthToken = 'corporis';
    $request->pageToken = 'magnam';
    $request->prefix = 'voluptates';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsWatchAllProjectionEnum::NO_ACL;
    $request->quotaUser = 'tempore';
    $request->startOffset = 'aperiam';
    $request->uploadType = 'libero';
    $request->userIp = 'ratione';
    $request->userProject = 'labore';
    $request->versions = false;

    $requestSecurity = new StorageObjectsWatchAllSecurity();
    $requestSecurity->option1 = new StorageObjectsWatchAllSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->objects->storageObjectsWatchAll($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
