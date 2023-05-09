# Collections

### Available Operations

* [CollectionsAddMetadata](#collectionsaddmetadata) - Add Metadata or Subjects to a Entity in a Collection
* [CollectionsCollectedMetadata](#collectionscollectedmetadata) - Retrieve subject data for a specific piece of metadata info for a collection
* [CollectionsCreate](#collectionscreate) - Create a Collection
* [CollectionsDelete](#collectionsdelete) - Delete a Collection
* [CollectionsDetail](#collectionsdetail) - Retrieve a Collection
* [CollectionsLinkedNodesList](#collectionslinkednodeslist) - List All Linked Nodes for a Collection
* [CollectionsLinkedNodesRelationships](#collectionslinkednodesrelationships) - Link Nodes to Collection
* [CollectionsLinkedNodesRelationshipsCreate](#collectionslinkednodesrelationshipscreate) - Give a Sparse List of Node Ids
* [CollectionsLinkedNodesRelationshipsDelete](#collectionslinkednodesrelationshipsdelete) - Remove Nodes From Collection
* [CollectionsLinkedPreprintsList](#collectionslinkedpreprintslist) - List All Linked Preprints for a Collection
* [CollectionsLinkedRegistrationsList](#collectionslinkedregistrationslist) - List All Linked Registrations for a Collection
* [CollectionsLinkedRegistrationsRelationships](#collectionslinkedregistrationsrelationships) - Link Registrations to Collection
* [CollectionsLinkedRegistrationsRelationshipsCreate](#collectionslinkedregistrationsrelationshipscreate) - Give a Sparse List of Registrations Ids
* [CollectionsLinkedRegistrationsRelationshipsDelete](#collectionslinkedregistrationsrelationshipsdelete) - Remove Registrations From Collection
* [CollectionsList](#collectionslist) - List all Collections
* [CollectionsMetadataDelete](#collectionsmetadatadelete) - Delete Collection Metadata from entitiy
* [CollectionsMetadataDetail](#collectionsmetadatadetail) - Add Metadata or Subjects to an Entity in a Collection
* [CollectionsMetadataRegistrationsDetail](#collectionsmetadataregistrationsdetail) - Retrieve Specific Metadata for a Collection
* [CollectionsMetadataRegistrationsList](#collectionsmetadataregistrationslist) - Retrieve a list of collected metadata for a collection
* [CollectionsMetadataSubjectsRelationships](#collectionsmetadatasubjectsrelationships) - Retrieve subject metadata for a specific piece of metadata in a collection
* [CollectionsMetadataSubjectsRelationshipsUpdate](#collectionsmetadatasubjectsrelationshipsupdate) - Update subjects for a specific piece of metadata in a collection

## CollectionsAddMetadata

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsAddMetadata(ctx, operations.CollectionsAddMetadataRequest{
        RequestBody: map[string]interface{}{
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        CollectionID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsCollectedMetadata


#### Permissions
In order to view these subject it must be a public collection or a user must have read permissions for collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error, other then permissions errors.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsCollectedMetadata(ctx, operations.CollectionsCollectedMetadataRequest{
        CgmID: "error",
        CollectionID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsCreate

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsCreate(ctx, map[string]interface{}{
        "iure": "magnam",
        "debitis": "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsDelete

Deletes a collection, if the user has appropriate permissions.
#### Permissions
Users must have write permissions on a collection in order to delete it
#### Returns
Nothing is returned in the body

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsDelete(ctx, operations.CollectionsDeleteRequest{
        CollectionID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsDetail

Retrieves a collection, if the user has appropriate permissions.

#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsDetail(ctx, operations.CollectionsDetailRequest{
        CollectionID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CollectionsLinkedNodesList

List of all nodes linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedNodesList(ctx, operations.CollectionsLinkedNodesListRequest{
        CollectionID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedNodesRelationships

This endpoint allow users to a add a node to a collection by issuing a POST request.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedNodesRelationships(ctx, operations.CollectionsLinkedNodesRelationshipsRequest{
        RequestBody: map[string]interface{}{
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        CollectionID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedNodesRelationshipsCreate

List of all the node ids linked to the given collection.
#### Permissions
This returns all public nodes associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedNodesRelationshipsCreate(ctx, operations.CollectionsLinkedNodesRelationshipsCreateRequest{
        CollectionID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedNodesRelationshipsDelete


This removes associated nodes from a collection
#### Permissions
Any user with write permissions on this collection should be to remove nodes from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedNodesRelationshipsDelete(ctx, operations.CollectionsLinkedNodesRelationshipsDeleteRequest{
        RequestBody: map[string]interface{}{
            "temporibus": "ab",
            "quis": "veritatis",
            "deserunt": "perferendis",
            "ipsam": "repellendus",
        },
        CollectionID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedPreprintsList

List of all preprints linked to the given collection.
#### Permissions
This returns all public preprints associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedPreprintsList(ctx, operations.CollectionsLinkedPreprintsListRequest{
        CollectionID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedRegistrationsList

List of all registrations linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of up to 10 nodes. Each resource in the array is a separate node object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedRegistrationsList(ctx, operations.CollectionsLinkedRegistrationsListRequest{
        CollectionID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedRegistrationsRelationships

This endpoint allow users to a add a registration to a collection by issuing a POST request.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of comment objects. Each resource in the array is a separate comment object.

The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedRegistrationsRelationships(ctx, operations.CollectionsLinkedRegistrationsRelationshipsRequest{
        RequestBody: map[string]interface{}{
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
        },
        CollectionID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedRegistrationsRelationshipsCreate

List of all the registration ids linked to the given collection.
#### Permissions
This returns all public registrations associated with this collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedRegistrationsRelationshipsCreate(ctx, operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest{
        CollectionID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsLinkedRegistrationsRelationshipsDelete


This removes associated registrations from a collection
#### Permissions
Any user with write permissions on this collection should be to remove registrations from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsLinkedRegistrationsRelationshipsDelete(ctx, operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest{
        RequestBody: map[string]interface{}{
            "officia": "occaecati",
            "fugit": "deleniti",
            "hic": "optio",
        },
        CollectionID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsList

Retrieves a list collections, either public or related to the user
#### Permissions
Anonymous users are able to see all public collections at this endpoint. Logged in users will only be able to see their own content.

Comments on private nodes are only visible to contributors and administrators on the parent node.
#### Returns
Returns a JSON object containing `data` and `links` keys.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CollectionsMetadataDelete


#### Permissions
Only a user with collection admin permissions can delete collected metadata
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataDelete(ctx, operations.CollectionsMetadataDeleteRequest{
        CgmID: "beatae",
        CollectionID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsMetadataDetail

List of user created metadata for entities within a collection.
#### Permissions
To edit this collection a user must have collections write permissions
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataDetail(ctx, operations.CollectionsMetadataDetailRequest{
        RequestBody: map[string]interface{}{
            "modi": "qui",
            "impedit": "cum",
        },
        CgmID: "esse",
        CollectionID: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsMetadataRegistrationsDetail


#### Permissions
In order to view this metadata it must be public or a user must have read permissions for collection.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
#### Errors
This request should never return an error.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataRegistrationsDetail(ctx, operations.CollectionsMetadataRegistrationsDetailRequest{
        CgmID: "excepturi",
        CollectionID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsMetadataRegistrationsList

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataRegistrationsList(ctx, operations.CollectionsMetadataRegistrationsListRequest{
        CollectionID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsMetadataSubjectsRelationships


#### Permissions
This is public for a logged out user when an entity is public.
#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataSubjectsRelationships(ctx, operations.CollectionsMetadataSubjectsRelationshipsRequest{
        CgmID: "ad",
        CollectionID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CollectionsMetadataSubjectsRelationshipsUpdate


#### Permissions
This is editable for a user with a write permission for this collection.

#### Returns
Returns a JSON object containing `data` and `links` keys.

The `data` key contains an array of nodes ids.
The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsMetadataSubjectsRelationshipsUpdate(ctx, operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest{
        RequestBody: map[string]interface{}{
            "iste": "dolor",
        },
        CgmID: "natus",
        CollectionID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
