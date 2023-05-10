# collections

### Available Operations

* [collectionsAddMetadata](#collectionsaddmetadata) - Add Metadata or Subjects to a Entity in a Collection
* [collectionsCollectedMetadata](#collectionscollectedmetadata) - Retrieve subject data for a specific piece of metadata info for a collection
* [collectionsCreate](#collectionscreate) - Create a Collection
* [collectionsDelete](#collectionsdelete) - Delete a Collection
* [collectionsDetail](#collectionsdetail) - Retrieve a Collection
* [collectionsLinkedNodesList](#collectionslinkednodeslist) - List All Linked Nodes for a Collection
* [collectionsLinkedNodesRelationships](#collectionslinkednodesrelationships) - Link Nodes to Collection
* [collectionsLinkedNodesRelationshipsCreate](#collectionslinkednodesrelationshipscreate) - Give a Sparse List of Node Ids
* [collectionsLinkedNodesRelationshipsDelete](#collectionslinkednodesrelationshipsdelete) - Remove Nodes From Collection
* [collectionsLinkedPreprintsList](#collectionslinkedpreprintslist) - List All Linked Preprints for a Collection
* [collectionsLinkedRegistrationsList](#collectionslinkedregistrationslist) - List All Linked Registrations for a Collection
* [collectionsLinkedRegistrationsRelationships](#collectionslinkedregistrationsrelationships) - Link Registrations to Collection
* [collectionsLinkedRegistrationsRelationshipsCreate](#collectionslinkedregistrationsrelationshipscreate) - Give a Sparse List of Registrations Ids
* [collectionsLinkedRegistrationsRelationshipsDelete](#collectionslinkedregistrationsrelationshipsdelete) - Remove Registrations From Collection
* [collectionsList](#collectionslist) - List all Collections
* [collectionsMetadataDelete](#collectionsmetadatadelete) - Delete Collection Metadata from entitiy
* [collectionsMetadataDetail](#collectionsmetadatadetail) - Add Metadata or Subjects to an Entity in a Collection
* [collectionsMetadataRegistrationsDetail](#collectionsmetadataregistrationsdetail) - Retrieve Specific Metadata for a Collection
* [collectionsMetadataRegistrationsList](#collectionsmetadataregistrationslist) - Retrieve a list of collected metadata for a collection
* [collectionsMetadataSubjectsRelationships](#collectionsmetadatasubjectsrelationships) - Retrieve subject metadata for a specific piece of metadata in a collection
* [collectionsMetadataSubjectsRelationshipsUpdate](#collectionsmetadatasubjectsrelationshipsupdate) - Update subjects for a specific piece of metadata in a collection

## collectionsAddMetadata

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAddMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsAddMetadataRequest();
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'unde' => 'nulla',
        'corrupti' => 'illum',
    ];
    $request->collectionId = 'vel';

    $response = $sdk->collections->collectionsAddMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsCollectedMetadata


#### Permissions
In order to view these subject it must be a public collection or a user must have read permissions for collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error, other then permissions errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsCollectedMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsCollectedMetadataRequest();
    $request->cgmId = 'error';
    $request->collectionId = 'deserunt';

    $response = $sdk->collections->collectionsCollectedMetadata($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsCreate

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'iure' => 'magnam',
        'debitis' => 'ipsa',
    ]

    $response = $sdk->collections->collectionsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsDelete

Deletes a collection, if the user has appropriate permissions.
#### Permissions
Users must have write permissions on a collection in order to delete it
#### Returns
Nothing is returned in the body

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsDeleteRequest();
    $request->collectionId = 'delectus';

    $response = $sdk->collections->collectionsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsDetail

Retrieves a collection, if the user has appropriate permissions.

#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsDetailRequest();
    $request->collectionId = 'tempora';

    $response = $sdk->collections->collectionsDetail($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedNodesList

List of all nodes linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedNodesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedNodesListRequest();
    $request->collectionId = 'suscipit';

    $response = $sdk->collections->collectionsLinkedNodesList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedNodesRelationships

This endpoint allow users to a add a node to a collection by issuing a POST request.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedNodesRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedNodesRelationshipsRequest();
    $request->requestBody = [
        'minus' => 'placeat',
        'voluptatum' => 'iusto',
    ];
    $request->collectionId = 'excepturi';

    $response = $sdk->collections->collectionsLinkedNodesRelationships($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedNodesRelationshipsCreate

List of all the node ids linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedNodesRelationshipsCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedNodesRelationshipsCreateRequest();
    $request->collectionId = 'nisi';

    $response = $sdk->collections->collectionsLinkedNodesRelationshipsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedNodesRelationshipsDelete


This removes associated nodes from a collection
#### Permissions
Any user with write permissions on this collection should be to remove nodes from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedNodesRelationshipsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedNodesRelationshipsDeleteRequest();
    $request->requestBody = [
        'temporibus' => 'ab',
        'quis' => 'veritatis',
        'deserunt' => 'perferendis',
        'ipsam' => 'repellendus',
    ];
    $request->collectionId = 'sapiente';

    $response = $sdk->collections->collectionsLinkedNodesRelationshipsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedPreprintsList

List of all preprints linked to the given collection.
#### Permissions
This returns all public preprints associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedPreprintsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedPreprintsListRequest();
    $request->collectionId = 'quo';

    $response = $sdk->collections->collectionsLinkedPreprintsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedRegistrationsList

List of all registrations linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedRegistrationsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedRegistrationsListRequest();
    $request->collectionId = 'odit';

    $response = $sdk->collections->collectionsLinkedRegistrationsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedRegistrationsRelationships

This endpoint allow users to a add a registration to a collection by issuing a POST request.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedRegistrationsRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedRegistrationsRelationshipsRequest();
    $request->requestBody = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->collectionId = 'dolorum';

    $response = $sdk->collections->collectionsLinkedRegistrationsRelationships($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedRegistrationsRelationshipsCreate

List of all the registration ids linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedRegistrationsRelationshipsCreateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedRegistrationsRelationshipsCreateRequest();
    $request->collectionId = 'dicta';

    $response = $sdk->collections->collectionsLinkedRegistrationsRelationshipsCreate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsLinkedRegistrationsRelationshipsDelete


This removes associated registrations from a collection
#### Permissions
Any user with write permissions on this collection should be to remove registrations from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsLinkedRegistrationsRelationshipsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsLinkedRegistrationsRelationshipsDeleteRequest();
    $request->requestBody = [
        'officia' => 'occaecati',
        'fugit' => 'deleniti',
        'hic' => 'optio',
    ];
    $request->collectionId = 'totam';

    $response = $sdk->collections->collectionsLinkedRegistrationsRelationshipsDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsList

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->collections->collectionsList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataDelete


#### Permissions
Only a user with collection admin permissions can delete collected metadata
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataDeleteRequest();
    $request->cgmId = 'beatae';
    $request->collectionId = 'commodi';

    $response = $sdk->collections->collectionsMetadataDelete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataDetail

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataDetailRequest();
    $request->requestBody = [
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->cgmId = 'esse';
    $request->collectionId = 'ipsum';

    $response = $sdk->collections->collectionsMetadataDetail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataRegistrationsDetail


#### Permissions
In order to view this metadata it must be public or a user must have read permissions for collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataRegistrationsDetailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataRegistrationsDetailRequest();
    $request->cgmId = 'excepturi';
    $request->collectionId = 'aspernatur';

    $response = $sdk->collections->collectionsMetadataRegistrationsDetail($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataRegistrationsList

List of user created metadata for entities within a collection.
#### Permissions
In order to view this metadata it must be public or a user must have read permissions for collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataRegistrationsListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataRegistrationsListRequest();
    $request->collectionId = 'perferendis';

    $response = $sdk->collections->collectionsMetadataRegistrationsList($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataSubjectsRelationships


#### Permissions
This is public for a logged out user when an entity is public.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataSubjectsRelationshipsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataSubjectsRelationshipsRequest();
    $request->cgmId = 'ad';
    $request->collectionId = 'natus';

    $response = $sdk->collections->collectionsMetadataSubjectsRelationships($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectionsMetadataSubjectsRelationshipsUpdate


#### Permissions
This is editable for a user with a write permission for this collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsMetadataSubjectsRelationshipsUpdateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsMetadataSubjectsRelationshipsUpdateRequest();
    $request->requestBody = [
        'iste' => 'dolor',
    ];
    $request->cgmId = 'natus';
    $request->collectionId = 'laboriosam';

    $response = $sdk->collections->collectionsMetadataSubjectsRelationshipsUpdate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
