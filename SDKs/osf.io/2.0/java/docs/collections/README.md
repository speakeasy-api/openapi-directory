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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsAddMetadataRequest;
import org.openapis.openapi.models.operations.CollectionsAddMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAddMetadataRequest req = new CollectionsAddMetadataRequest(                new java.util.HashMap<String, Object>() {{
                                put("distinctio", "quibusdam");
                                put("unde", "nulla");
                                put("corrupti", "illum");
                            }}, "vel");            

            CollectionsAddMetadataResponse res = sdk.collections.collectionsAddMetadata(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsCollectedMetadataRequest;
import org.openapis.openapi.models.operations.CollectionsCollectedMetadataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsCollectedMetadataRequest req = new CollectionsCollectedMetadataRequest("error", "deserunt");            

            CollectionsCollectedMetadataResponse res = sdk.collections.collectionsCollectedMetadata(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("iure", "magnam");
                put("debitis", "ipsa");
            }}            

            CollectionsCreateResponse res = sdk.collections.collectionsCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsDelete

Deletes a collection, if the user has appropriate permissions.
#### Permissions
Users must have write permissions on a collection in order to delete it
#### Returns
Nothing is returned in the body

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsDeleteRequest;
import org.openapis.openapi.models.operations.CollectionsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsDeleteRequest req = new CollectionsDeleteRequest("delectus");            

            CollectionsDeleteResponse res = sdk.collections.collectionsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsDetailRequest;
import org.openapis.openapi.models.operations.CollectionsDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsDetailRequest req = new CollectionsDetailRequest("tempora");            

            CollectionsDetailResponse res = sdk.collections.collectionsDetail(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesListRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedNodesListRequest req = new CollectionsLinkedNodesListRequest("suscipit");            

            CollectionsLinkedNodesListResponse res = sdk.collections.collectionsLinkedNodesList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedNodesRelationshipsRequest req = new CollectionsLinkedNodesRelationshipsRequest(                new java.util.HashMap<String, Object>() {{
                                put("minus", "placeat");
                                put("voluptatum", "iusto");
                            }}, "excepturi");            

            CollectionsLinkedNodesRelationshipsResponse res = sdk.collections.collectionsLinkedNodesRelationships(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsCreateRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedNodesRelationshipsCreateRequest req = new CollectionsLinkedNodesRelationshipsCreateRequest("nisi");            

            CollectionsLinkedNodesRelationshipsCreateResponse res = sdk.collections.collectionsLinkedNodesRelationshipsCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsLinkedNodesRelationshipsDelete


This removes associated nodes from a collection
#### Permissions
Any user with write permissions on this collection should be to remove nodes from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsDeleteRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedNodesRelationshipsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedNodesRelationshipsDeleteRequest req = new CollectionsLinkedNodesRelationshipsDeleteRequest(                new java.util.HashMap<String, Object>() {{
                                put("temporibus", "ab");
                                put("quis", "veritatis");
                                put("deserunt", "perferendis");
                                put("ipsam", "repellendus");
                            }}, "sapiente");            

            CollectionsLinkedNodesRelationshipsDeleteResponse res = sdk.collections.collectionsLinkedNodesRelationshipsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedPreprintsListRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedPreprintsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedPreprintsListRequest req = new CollectionsLinkedPreprintsListRequest("quo");            

            CollectionsLinkedPreprintsListResponse res = sdk.collections.collectionsLinkedPreprintsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsListRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedRegistrationsListRequest req = new CollectionsLinkedRegistrationsListRequest("odit");            

            CollectionsLinkedRegistrationsListResponse res = sdk.collections.collectionsLinkedRegistrationsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedRegistrationsRelationshipsRequest req = new CollectionsLinkedRegistrationsRelationshipsRequest(                new java.util.HashMap<String, Object>() {{
                                put("at", "maiores");
                                put("molestiae", "quod");
                                put("quod", "esse");
                                put("totam", "porro");
                            }}, "dolorum");            

            CollectionsLinkedRegistrationsRelationshipsResponse res = sdk.collections.collectionsLinkedRegistrationsRelationships(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedRegistrationsRelationshipsCreateRequest req = new CollectionsLinkedRegistrationsRelationshipsCreateRequest("dicta");            

            CollectionsLinkedRegistrationsRelationshipsCreateResponse res = sdk.collections.collectionsLinkedRegistrationsRelationshipsCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionsLinkedRegistrationsRelationshipsDelete


This removes associated registrations from a collection
#### Permissions
Any user with write permissions on this collection should be to remove registrations from this collection.
#### Returns
Nothing in the response body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteRequest;
import org.openapis.openapi.models.operations.CollectionsLinkedRegistrationsRelationshipsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsLinkedRegistrationsRelationshipsDeleteRequest req = new CollectionsLinkedRegistrationsRelationshipsDeleteRequest(                new java.util.HashMap<String, Object>() {{
                                put("officia", "occaecati");
                                put("fugit", "deleniti");
                                put("hic", "optio");
                            }}, "totam");            

            CollectionsLinkedRegistrationsRelationshipsDeleteResponse res = sdk.collections.collectionsLinkedRegistrationsRelationshipsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsListResponse res = sdk.collections.collectionsList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataDeleteRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataDeleteRequest req = new CollectionsMetadataDeleteRequest("beatae", "commodi");            

            CollectionsMetadataDeleteResponse res = sdk.collections.collectionsMetadataDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataDetailRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataDetailRequest req = new CollectionsMetadataDetailRequest(                new java.util.HashMap<String, Object>() {{
                                put("modi", "qui");
                                put("impedit", "cum");
                            }}, "esse", "ipsum");            

            CollectionsMetadataDetailResponse res = sdk.collections.collectionsMetadataDetail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataRegistrationsDetailRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataRegistrationsDetailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataRegistrationsDetailRequest req = new CollectionsMetadataRegistrationsDetailRequest("excepturi", "aspernatur");            

            CollectionsMetadataRegistrationsDetailResponse res = sdk.collections.collectionsMetadataRegistrationsDetail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataRegistrationsListRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataRegistrationsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataRegistrationsListRequest req = new CollectionsMetadataRegistrationsListRequest("perferendis");            

            CollectionsMetadataRegistrationsListResponse res = sdk.collections.collectionsMetadataRegistrationsList(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataSubjectsRelationshipsRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataSubjectsRelationshipsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataSubjectsRelationshipsRequest req = new CollectionsMetadataSubjectsRelationshipsRequest("ad", "natus");            

            CollectionsMetadataSubjectsRelationshipsResponse res = sdk.collections.collectionsMetadataSubjectsRelationships(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateRequest;
import org.openapis.openapi.models.operations.CollectionsMetadataSubjectsRelationshipsUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsMetadataSubjectsRelationshipsUpdateRequest req = new CollectionsMetadataSubjectsRelationshipsUpdateRequest(                new java.util.HashMap<String, Object>() {{
                                put("iste", "dolor");
                            }}, "natus", "laboriosam");            

            CollectionsMetadataSubjectsRelationshipsUpdateResponse res = sdk.collections.collectionsMetadataSubjectsRelationshipsUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
