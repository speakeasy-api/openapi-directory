# objects

### Available Operations

* [storageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](#storageobjectscopy) - Copies an object to a destination in the same location. Optionally overrides metadata.
* [storageObjectsDelete](#storageobjectsdelete) - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](#storageobjectsget) - Retrieves objects or their associated metadata.
* [storageObjectsInsert](#storageobjectsinsert) - Stores new data blobs and associated metadata.
* [storageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](#storageobjectspatch) - Updates a data blob's associated metadata. This method supports patch semantics.
* [storageObjectsUpdate](#storageobjectsupdate) - Updates a data blob's associated metadata.
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
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\ComposeRequestSourceObjects;
use \OpenAPI\OpenAPI\Models\Shared\ComposeRequestSourceObjectsObjectPreconditions;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsComposeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsComposeRequest();
    $request->composeRequest = new ComposeRequest();
    $request->composeRequest->destination = new Object();
    $request->composeRequest->destination->acl = [
        new ObjectAccessControl(),
    ];
    $request->composeRequest->destination->bucket = 'corrupti';
    $request->composeRequest->destination->cacheControl = 'non';
    $request->composeRequest->destination->componentCount = 32465;
    $request->composeRequest->destination->contentDisposition = 'dolor';
    $request->composeRequest->destination->contentEncoding = 'occaecati';
    $request->composeRequest->destination->contentLanguage = 'numquam';
    $request->composeRequest->destination->contentType = 'impedit';
    $request->composeRequest->destination->crc32c = 'explicabo';
    $request->composeRequest->destination->etag = 'voluptas';
    $request->composeRequest->destination->generation = 'aut';
    $request->composeRequest->destination->id = '71f93f5f-0642-4dac-baf5-15cc413aa63a';
    $request->composeRequest->destination->kind = 'est';
    $request->composeRequest->destination->md5Hash = 'recusandae';
    $request->composeRequest->destination->mediaLink = 'totam';
    $request->composeRequest->destination->metadata = [
        'vel' => 'ducimus',
        'quos' => 'vel',
        'labore' => 'possimus',
        'facilis' => 'cum',
    ];
    $request->composeRequest->destination->metageneration = 'commodi';
    $request->composeRequest->destination->name = 'Ana Wisozk';
    $request->composeRequest->destination->owner = new ObjectOwner();
    $request->composeRequest->destination->owner->entity = 'recusandae';
    $request->composeRequest->destination->owner->entityId = 'aliquid';
    $request->composeRequest->destination->selfLink = 'aperiam';
    $request->composeRequest->destination->size = 'cum';
    $request->composeRequest->destination->storageClass = 'consectetur';
    $request->composeRequest->destination->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T18:58:12.703Z');
    $request->composeRequest->destination->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-22T14:40:50.941Z');
    $request->composeRequest->kind = 'numquam';
    $request->composeRequest->sourceObjects = [
        new ComposeRequestSourceObjects(),
        new ComposeRequestSourceObjects(),
        new ComposeRequestSourceObjects(),
        new ComposeRequestSourceObjects(),
    ];
    $request->alt = AltEnum::JSON;
    $request->destinationBucket = 'suscipit';
    $request->destinationObject = 'reiciendis';
    $request->fields = 'quidem';
    $request->ifGenerationMatch = 'saepe';
    $request->ifMetagenerationMatch = 'necessitatibus';
    $request->key = 'dolore';
    $request->oauthToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->userIp = 'adipisci';

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

Copies an object to a destination in the same location. Optionally overrides metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopyProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsCopySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsCopyRequest();
    $request->object = new Object();
    $request->object->acl = [
        new ObjectAccessControl(),
    ];
    $request->object->bucket = 'amet';
    $request->object->cacheControl = 'beatae';
    $request->object->componentCount = 489509;
    $request->object->contentDisposition = 'a';
    $request->object->contentEncoding = 'debitis';
    $request->object->contentLanguage = 'consectetur';
    $request->object->contentType = 'corporis';
    $request->object->crc32c = 'harum';
    $request->object->etag = 'laboriosam';
    $request->object->generation = 'ipsa';
    $request->object->id = 'eb1ea426-555b-4a3c-a874-4ed53b88f3a8';
    $request->object->kind = 'pariatur';
    $request->object->md5Hash = 'totam';
    $request->object->mediaLink = 'hic';
    $request->object->metadata = [
        'nobis' => 'sit',
        'rerum' => 'sed',
    ];
    $request->object->metageneration = 'reiciendis';
    $request->object->name = 'Jaime Quigley';
    $request->object->owner = new ObjectOwner();
    $request->object->owner->entity = 'ab';
    $request->object->owner->entityId = 'iste';
    $request->object->selfLink = 'dolore';
    $request->object->size = 'laborum';
    $request->object->storageClass = 'sed';
    $request->object->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-01T14:49:09.199Z');
    $request->object->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T03:48:38.490Z');
    $request->alt = AltEnum::JSON;
    $request->destinationBucket = 'voluptas';
    $request->destinationObject = 'unde';
    $request->fields = 'architecto';
    $request->ifGenerationMatch = 'suscipit';
    $request->ifGenerationNotMatch = 'sapiente';
    $request->ifMetagenerationMatch = 'debitis';
    $request->ifMetagenerationNotMatch = 'illo';
    $request->ifSourceGenerationMatch = 'reiciendis';
    $request->ifSourceGenerationNotMatch = 'perferendis';
    $request->ifSourceMetagenerationMatch = 'corrupti';
    $request->ifSourceMetagenerationNotMatch = 'maiores';
    $request->key = 'incidunt';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsCopyProjectionEnum::NO_ACL;
    $request->quotaUser = 'eius';
    $request->sourceBucket = 'necessitatibus';
    $request->sourceGeneration = 'ipsum';
    $request->sourceObject = 'ea';
    $request->userIp = 'occaecati';

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

Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsDeleteRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quos';
    $request->fields = 'voluptatibus';
    $request->generation = 'tempora';
    $request->ifGenerationMatch = 'tempora';
    $request->ifGenerationNotMatch = 'voluptate';
    $request->ifMetagenerationMatch = 'reiciendis';
    $request->ifMetagenerationNotMatch = 'ex';
    $request->key = 'sit';
    $request->oauthToken = 'non';
    $request->object = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->userIp = 'facilis';

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

Retrieves objects or their associated metadata.

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quaerat';
    $request->fields = 'incidunt';
    $request->generation = 'ipsam';
    $request->ifGenerationMatch = 'debitis';
    $request->ifGenerationNotMatch = 'rem';
    $request->ifMetagenerationMatch = 'sit';
    $request->ifMetagenerationNotMatch = 'nobis';
    $request->key = 'error';
    $request->oauthToken = 'veniam';
    $request->object = 'minima';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsGetProjectionEnum::NO_ACL;
    $request->quotaUser = 'reiciendis';
    $request->userIp = 'nulla';

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

## storageObjectsInsert

Stores new data blobs and associated metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertProjectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsInsertRequest();
    $request->requestBody = 'magni';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'aperiam';
    $request->fields = 'saepe';
    $request->ifGenerationMatch = 'numquam';
    $request->ifGenerationNotMatch = 'veniam';
    $request->ifMetagenerationMatch = 'in';
    $request->ifMetagenerationNotMatch = 'officiis';
    $request->key = 'beatae';
    $request->name = 'Jorge Langosh';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsInsertProjectionEnum::NO_ACL;
    $request->quotaUser = 'error';
    $request->userIp = 'hic';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsListRequest();
    $request->alt = AltEnum::JSON;
    $request->bucket = 'expedita';
    $request->delimiter = 'debitis';
    $request->fields = 'neque';
    $request->key = 'dolorum';
    $request->maxResults = 341698;
    $request->oauthToken = 'officia';
    $request->pageToken = 'dolorum';
    $request->prefix = 'corrupti';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsListProjectionEnum::NO_ACL;
    $request->quotaUser = 'tempora';
    $request->userIp = 'atque';
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

Updates a data blob's associated metadata. This method supports patch semantics.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
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
    ];
    $request->object1->bucket = 'ut';
    $request->object1->cacheControl = 'fugiat';
    $request->object1->componentCount = 30235;
    $request->object1->contentDisposition = 'culpa';
    $request->object1->contentEncoding = 'expedita';
    $request->object1->contentLanguage = 'magnam';
    $request->object1->contentType = 'consequatur';
    $request->object1->crc32c = 'esse';
    $request->object1->etag = 'ipsam';
    $request->object1->generation = 'sit';
    $request->object1->id = '88e51862-065e-4904-b3b1-194b8abf603a';
    $request->object1->kind = 'voluptate';
    $request->object1->md5Hash = 'unde';
    $request->object1->mediaLink = 'reiciendis';
    $request->object1->metadata = [
        'repellendus' => 'delectus',
        'voluptates' => 'perferendis',
        'est' => 'quidem',
    ];
    $request->object1->metageneration = 'reprehenderit';
    $request->object1->name = 'Grant Langosh';
    $request->object1->owner = new ObjectOwner();
    $request->object1->owner->entity = 'voluptatem';
    $request->object1->owner->entityId = 'quisquam';
    $request->object1->selfLink = 'repudiandae';
    $request->object1->size = 'quasi';
    $request->object1->storageClass = 'atque';
    $request->object1->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T05:35:56.795Z');
    $request->object1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T08:02:14.031Z');
    $request->alt = AltEnum::JSON;
    $request->bucket = 'quidem';
    $request->fields = 'maxime';
    $request->generation = 'et';
    $request->ifGenerationMatch = 'esse';
    $request->ifGenerationNotMatch = 'amet';
    $request->ifMetagenerationMatch = 'assumenda';
    $request->ifMetagenerationNotMatch = 'ea';
    $request->key = 'atque';
    $request->oauthToken = 'error';
    $request->objectPathParameter = 'officiis';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsPatchProjectionEnum::NO_ACL;
    $request->quotaUser = 'accusamus';
    $request->userIp = 'natus';

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

## storageObjectsUpdate

Updates a data blob's associated metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StorageObjectsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Object;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAccessControl;
use \OpenAPI\OpenAPI\Models\Shared\ObjectOwner;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
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
    ];
    $request->object1->bucket = 'aspernatur';
    $request->object1->cacheControl = 'ex';
    $request->object1->componentCount = 980581;
    $request->object1->contentDisposition = 'corrupti';
    $request->object1->contentEncoding = 'at';
    $request->object1->contentLanguage = 'error';
    $request->object1->contentType = 'blanditiis';
    $request->object1->crc32c = 'suscipit';
    $request->object1->etag = 'repudiandae';
    $request->object1->generation = 'atque';
    $request->object1->id = '81ead4f0-e101-4256-bf94-e29e973e922a';
    $request->object1->kind = 'quis';
    $request->object1->md5Hash = 'reprehenderit';
    $request->object1->mediaLink = 'error';
    $request->object1->metadata = [
        'corporis' => 'quidem',
    ];
    $request->object1->metageneration = 'eveniet';
    $request->object1->name = 'Meghan Batz IV';
    $request->object1->owner = new ObjectOwner();
    $request->object1->owner->entity = 'quae';
    $request->object1->owner->entityId = 'molestiae';
    $request->object1->selfLink = 'eveniet';
    $request->object1->size = 'qui';
    $request->object1->storageClass = 'cum';
    $request->object1->timeDeleted = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-07T04:58:25.283Z');
    $request->object1->updated = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-30T12:10:44.049Z');
    $request->alt = AltEnum::JSON;
    $request->bucket = 'distinctio';
    $request->fields = 'voluptatum';
    $request->generation = 'rem';
    $request->ifGenerationMatch = 'aliquam';
    $request->ifGenerationNotMatch = 'ad';
    $request->ifMetagenerationMatch = 'repellat';
    $request->ifMetagenerationNotMatch = 'alias';
    $request->key = 'corporis';
    $request->oauthToken = 'perspiciatis';
    $request->objectPathParameter = 'nihil';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsUpdateProjectionEnum::NO_ACL;
    $request->quotaUser = 'voluptas';
    $request->userIp = 'alias';

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

$sdk = SDK::builder()
    ->build();

try {
    $request = new StorageObjectsWatchAllRequest();
    $request->channel = new Channel();
    $request->channel->address = '916 Elda Port';
    $request->channel->expiration = 'nesciunt';
    $request->channel->id = '1e94764a-3e86-45e7-956f-9251a5a9da66';
    $request->channel->kind = 'accusantium';
    $request->channel->params = [
        'doloribus' => 'ullam',
        'in' => 'nam',
        'earum' => 'officia',
        'laborum' => 'placeat',
    ];
    $request->channel->payload = false;
    $request->channel->resourceId = 'modi';
    $request->channel->resourceUri = 'voluptatibus';
    $request->channel->token = 'molestias';
    $request->channel->type = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->bucket = 'sapiente';
    $request->delimiter = 'cumque';
    $request->fields = 'vitae';
    $request->key = 'rerum';
    $request->maxResults = 272229;
    $request->oauthToken = 'quis';
    $request->pageToken = 'inventore';
    $request->prefix = 'fugit';
    $request->prettyPrint = false;
    $request->projection = StorageObjectsWatchAllProjectionEnum::NO_ACL;
    $request->quotaUser = 'quae';
    $request->userIp = 'perferendis';
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
