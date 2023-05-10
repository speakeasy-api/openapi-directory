# projects

### Available Operations

* [datastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [datastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [datastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [datastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
* [datastoreProjectsReserveIds](#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [datastoreProjectsRollback](#datastoreprojectsrollback) - Rolls back a transaction.
* [datastoreProjectsRunAggregationQuery](#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [datastoreProjectsRunQuery](#datastoreprojectsrunquery) - Queries for entities.

## datastoreProjectsAllocateIds

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AllocateIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsAllocateIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsAllocateIdsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->allocateIdsRequest = new AllocateIdsRequest();
    $request->allocateIdsRequest->keys = [
        new Key(),
        new Key(),
    ];
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->projectId = 'minus';
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DatastoreProjectsAllocateIdsSecurity();
    $requestSecurity->option1 = new DatastoreProjectsAllocateIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsAllocateIds($request, $requestSecurity);

    if ($response->allocateIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsBeginTransaction

Begins a new transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BeginTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOnlyT;
use \OpenAPI\OpenAPI\Models\Shared\ReadWrite;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsBeginTransactionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsBeginTransactionRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->beginTransactionRequest = new BeginTransactionRequest();
    $request->beginTransactionRequest->transactionOptions = new TransactionOptions();
    $request->beginTransactionRequest->transactionOptions->readOnly = new ReadOnlyT();
    $request->beginTransactionRequest->transactionOptions->readOnly->readTime = 'nisi';
    $request->beginTransactionRequest->transactionOptions->readWrite = new ReadWrite();
    $request->beginTransactionRequest->transactionOptions->readWrite->previousTransaction = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'veritatis';
    $request->key = 'deserunt';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->projectId = 'ipsam';
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new DatastoreProjectsBeginTransactionSecurity();
    $requestSecurity->option1 = new DatastoreProjectsBeginTransactionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsBeginTransaction($request, $requestSecurity);

    if ($response->beginTransactionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsCommit

Commits a transaction, optionally creating, deleting or modifying some entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CommitRequest;
use \OpenAPI\OpenAPI\Models\Shared\CommitRequestModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Mutation;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsCommitSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsCommitRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->commitRequest = new CommitRequest();
    $request->commitRequest->mode = CommitRequestModeEnum::NON_TRANSACTIONAL;
    $request->commitRequest->mutations = [
        new Mutation(),
        new Mutation(),
        new Mutation(),
        new Mutation(),
    ];
    $request->commitRequest->transaction = 'maiores';
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'esse';
    $request->key = 'totam';
    $request->oauthToken = 'porro';
    $request->prettyPrint = false;
    $request->projectId = 'dolorum';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DatastoreProjectsCommitSecurity();
    $requestSecurity->option1 = new DatastoreProjectsCommitSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsCommit($request, $requestSecurity);

    if ($response->commitResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsLookup

Looks up entities by key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LookupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsLookupSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsLookupRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->lookupRequest = new LookupRequest();
    $request->lookupRequest->keys = [
        new Key(),
    ];
    $request->lookupRequest->readOptions = new ReadOptions();
    $request->lookupRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::STRONG;
    $request->lookupRequest->readOptions->readTime = 'hic';
    $request->lookupRequest->readOptions->transaction = 'optio';
    $request->accessToken = 'totam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'molestiae';
    $request->key = 'modi';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->projectId = 'impedit';
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DatastoreProjectsLookupSecurity();
    $requestSecurity->option1 = new DatastoreProjectsLookupSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsLookup($request, $requestSecurity);

    if ($response->lookupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsReserveIds

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReserveIdsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsReserveIdsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsReserveIdsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->reserveIdsRequest = new ReserveIdsRequest();
    $request->reserveIdsRequest->databaseId = 'aspernatur';
    $request->reserveIdsRequest->keys = [
        new Key(),
    ];
    $request->accessToken = 'ad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->projectId = 'laboriosam';
    $request->quotaUser = 'hic';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'fuga';

    $requestSecurity = new DatastoreProjectsReserveIdsSecurity();
    $requestSecurity->option1 = new DatastoreProjectsReserveIdsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsReserveIds($request, $requestSecurity);

    if ($response->reserveIdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRollback

Rolls back a transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RollbackRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRollbackSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRollbackRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->rollbackRequest = new RollbackRequest();
    $request->rollbackRequest->transaction = 'corporis';
    $request->accessToken = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->projectId = 'reiciendis';
    $request->quotaUser = 'est';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DatastoreProjectsRollbackSecurity();
    $requestSecurity->option1 = new DatastoreProjectsRollbackSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRollback($request, $requestSecurity);

    if ($response->rollbackResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRunAggregationQuery

Runs an aggregation query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunAggregationQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AggregationQuery;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\Count;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\PropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrder;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\GqlQuery;
use \OpenAPI\OpenAPI\Models\Shared\GqlQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunAggregationQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRunAggregationQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runAggregationQueryRequest = new RunAggregationQueryRequest();
    $request->runAggregationQueryRequest->aggregationQuery = new AggregationQuery();
    $request->runAggregationQueryRequest->aggregationQuery->aggregations = [
        new Aggregation(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery = new Query();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->distinctOn = [
        new PropertyReference(),
        new PropertyReference(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->endCursor = 'explicabo';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter = new Filter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter = new CompositeFilter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->compositeFilter->op = CompositeFilterOpEnum::OPERATOR_UNSPECIFIED;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter = new PropertyFilter();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->op = PropertyFilterOpEnum::IN;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->property = new PropertyReference();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->property->name = 'Ms. Cathy Marks';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value = new Value();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->arrayValue = new ArrayValue();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->blobValue = 'sapiente';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->booleanValue = false;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->doubleValue = 1020.44;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue = new Entity();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key = new Key();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId->namespaceId = 'mollitia';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->partitionId->projectId = 'dolorem';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->key->path = [
        new PathElement(),
        new PathElement(),
        new PathElement(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->entityValue->properties = [
        'repellat' => new Value(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->excludeFromIndexes = false;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue = new LatLng();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue->latitude = 6531.08;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->geoPointValue->longitude = 5818.5;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->integerValue = 'numquam';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue = new Key();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId->namespaceId = 'commodi';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->partitionId->projectId = 'quam';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->keyValue->path = [
        new PathElement(),
        new PathElement(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->meaning = 244425;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->stringValue = 'error';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->filter->propertyFilter->value->timestampValue = 'quia';
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->kind = [
        new KindExpression(),
        new KindExpression(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->limit = 110375;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->offset = 674752;
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->order = [
        new PropertyOrder(),
        new PropertyOrder(),
        new PropertyOrder(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->projection = [
        new Projection(),
        new Projection(),
    ];
    $request->runAggregationQueryRequest->aggregationQuery->nestedQuery->startCursor = 'odit';
    $request->runAggregationQueryRequest->gqlQuery = new GqlQuery();
    $request->runAggregationQueryRequest->gqlQuery->allowLiterals = false;
    $request->runAggregationQueryRequest->gqlQuery->namedBindings = [
        'sequi' => new GqlQueryParameter(),
        'tenetur' => new GqlQueryParameter(),
        'ipsam' => new GqlQueryParameter(),
        'id' => new GqlQueryParameter(),
    ];
    $request->runAggregationQueryRequest->gqlQuery->positionalBindings = [
        new GqlQueryParameter(),
        new GqlQueryParameter(),
        new GqlQueryParameter(),
        new GqlQueryParameter(),
    ];
    $request->runAggregationQueryRequest->gqlQuery->queryString = 'aut';
    $request->runAggregationQueryRequest->partitionId = new PartitionId();
    $request->runAggregationQueryRequest->partitionId->namespaceId = 'quasi';
    $request->runAggregationQueryRequest->partitionId->projectId = 'error';
    $request->runAggregationQueryRequest->readOptions = new ReadOptions();
    $request->runAggregationQueryRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::EVENTUAL;
    $request->runAggregationQueryRequest->readOptions->readTime = 'laborum';
    $request->runAggregationQueryRequest->readOptions->transaction = 'quasi';
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'praesentium';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->projectId = 'ipsa';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new DatastoreProjectsRunAggregationQuerySecurity();
    $requestSecurity->option1 = new DatastoreProjectsRunAggregationQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRunAggregationQuery($request, $requestSecurity);

    if ($response->runAggregationQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## datastoreProjectsRunQuery

Queries for entities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RunQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GqlQuery;
use \OpenAPI\OpenAPI\Models\Shared\GqlQueryParameter;
use \OpenAPI\OpenAPI\Models\Shared\Value;
use \OpenAPI\OpenAPI\Models\Shared\ArrayValue;
use \OpenAPI\OpenAPI\Models\Shared\Entity;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\PartitionId;
use \OpenAPI\OpenAPI\Models\Shared\PathElement;
use \OpenAPI\OpenAPI\Models\Shared\LatLng;
use \OpenAPI\OpenAPI\Models\Shared\ValueNullValueEnum;
use \OpenAPI\OpenAPI\Models\Shared\Query;
use \OpenAPI\OpenAPI\Models\Shared\PropertyReference;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilter;
use \OpenAPI\OpenAPI\Models\Shared\CompositeFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilter;
use \OpenAPI\OpenAPI\Models\Shared\PropertyFilterOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\KindExpression;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrder;
use \OpenAPI\OpenAPI\Models\Shared\PropertyOrderDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Projection;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReadOptionsReadConsistencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DatastoreProjectsRunQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DatastoreProjectsRunQueryRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->runQueryRequest = new RunQueryRequest();
    $request->runQueryRequest->gqlQuery = new GqlQuery();
    $request->runQueryRequest->gqlQuery->allowLiterals = false;
    $request->runQueryRequest->gqlQuery->namedBindings = [
        'reprehenderit' => new GqlQueryParameter(),
    ];
    $request->runQueryRequest->gqlQuery->positionalBindings = [
        new GqlQueryParameter(),
        new GqlQueryParameter(),
    ];
    $request->runQueryRequest->gqlQuery->queryString = 'maiores';
    $request->runQueryRequest->partitionId = new PartitionId();
    $request->runQueryRequest->partitionId->namespaceId = 'dicta';
    $request->runQueryRequest->partitionId->projectId = 'corporis';
    $request->runQueryRequest->query = new Query();
    $request->runQueryRequest->query->distinctOn = [
        new PropertyReference(),
        new PropertyReference(),
    ];
    $request->runQueryRequest->query->endCursor = 'iusto';
    $request->runQueryRequest->query->filter = new Filter();
    $request->runQueryRequest->query->filter->compositeFilter = new CompositeFilter();
    $request->runQueryRequest->query->filter->compositeFilter->filters = [
        new Filter(),
    ];
    $request->runQueryRequest->query->filter->compositeFilter->op = CompositeFilterOpEnum::OR;
    $request->runQueryRequest->query->filter->propertyFilter = new PropertyFilter();
    $request->runQueryRequest->query->filter->propertyFilter->op = PropertyFilterOpEnum::GREATER_THAN;
    $request->runQueryRequest->query->filter->propertyFilter->property = new PropertyReference();
    $request->runQueryRequest->query->filter->propertyFilter->property->name = 'Mrs. Leslie VonRueden';
    $request->runQueryRequest->query->filter->propertyFilter->value = new Value();
    $request->runQueryRequest->query->filter->propertyFilter->value->arrayValue = new ArrayValue();
    $request->runQueryRequest->query->filter->propertyFilter->value->arrayValue->values = [
        new Value(),
        new Value(),
        new Value(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->blobValue = 'excepturi';
    $request->runQueryRequest->query->filter->propertyFilter->value->booleanValue = false;
    $request->runQueryRequest->query->filter->propertyFilter->value->doubleValue = 8651.03;
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue = new Entity();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key = new Key();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId = new PartitionId();
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId->namespaceId = 'modi';
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->partitionId->projectId = 'praesentium';
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->key->path = [
        new PathElement(),
        new PathElement(),
        new PathElement(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->entityValue->properties = [
        'quasi' => new Value(),
        'repudiandae' => new Value(),
        'sint' => new Value(),
        'veritatis' => new Value(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->excludeFromIndexes = false;
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue = new LatLng();
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue->latitude = 9292.97;
    $request->runQueryRequest->query->filter->propertyFilter->value->geoPointValue->longitude = 2777.18;
    $request->runQueryRequest->query->filter->propertyFilter->value->integerValue = 'enim';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue = new Key();
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId = new PartitionId();
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId->namespaceId = 'consequatur';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->partitionId->projectId = 'est';
    $request->runQueryRequest->query->filter->propertyFilter->value->keyValue->path = [
        new PathElement(),
        new PathElement(),
        new PathElement(),
        new PathElement(),
    ];
    $request->runQueryRequest->query->filter->propertyFilter->value->meaning = 131797;
    $request->runQueryRequest->query->filter->propertyFilter->value->nullValue = ValueNullValueEnum::NULL_VALUE;
    $request->runQueryRequest->query->filter->propertyFilter->value->stringValue = 'deserunt';
    $request->runQueryRequest->query->filter->propertyFilter->value->timestampValue = 'distinctio';
    $request->runQueryRequest->query->kind = [
        new KindExpression(),
        new KindExpression(),
        new KindExpression(),
        new KindExpression(),
    ];
    $request->runQueryRequest->query->limit = 289406;
    $request->runQueryRequest->query->offset = 264730;
    $request->runQueryRequest->query->order = [
        new PropertyOrder(),
    ];
    $request->runQueryRequest->query->projection = [
        new Projection(),
        new Projection(),
    ];
    $request->runQueryRequest->query->startCursor = 'cupiditate';
    $request->runQueryRequest->readOptions = new ReadOptions();
    $request->runQueryRequest->readOptions->readConsistency = ReadOptionsReadConsistencyEnum::STRONG;
    $request->runQueryRequest->readOptions->readTime = 'perferendis';
    $request->runQueryRequest->readOptions->transaction = 'magni';
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'fugit';
    $request->key = 'dolorum';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->projectId = 'tempora';
    $request->quotaUser = 'facilis';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DatastoreProjectsRunQuerySecurity();
    $requestSecurity->option1 = new DatastoreProjectsRunQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->datastoreProjectsRunQuery($request, $requestSecurity);

    if ($response->runQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
