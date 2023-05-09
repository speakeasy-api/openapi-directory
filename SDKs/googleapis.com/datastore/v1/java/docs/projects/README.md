# projects

### Available Operations

* [datastoreProjectsAllocateIds](#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [datastoreProjectsBeginTransaction](#datastoreprojectsbegintransaction) - Begins a new transaction.
* [datastoreProjectsCommit](#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [datastoreProjectsExport](#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [datastoreProjectsImport](#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* [datastoreProjectsIndexesCreate](#datastoreprojectsindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* [datastoreProjectsIndexesDelete](#datastoreprojectsindexesdelete) - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* [datastoreProjectsIndexesGet](#datastoreprojectsindexesget) - Gets an index.
* [datastoreProjectsIndexesList](#datastoreprojectsindexeslist) - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* [datastoreProjectsLookup](#datastoreprojectslookup) - Looks up entities by key.
* [datastoreProjectsOperationsCancel](#datastoreprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastoreProjectsOperationsDelete](#datastoreprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datastoreProjectsOperationsGet](#datastoreprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datastoreProjectsOperationsList](#datastoreprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastoreProjectsReserveIds](#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [datastoreProjectsRollback](#datastoreprojectsrollback) - Rolls back a transaction.
* [datastoreProjectsRunAggregationQuery](#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [datastoreProjectsRunQuery](#datastoreprojectsrunquery) - Queries for entities.

## datastoreProjectsAllocateIds

Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption2;
import org.openapis.openapi.models.shared.AllocateIdsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                allocateIdsRequest = new AllocateIdsRequest() {{
                    databaseId = "error";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "quis";
                                namespaceId = "vitae";
                                projectId = "laborum";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "enim";
                                    kind = "odit";
                                    name = "Jimmy Wiegand";
                                }}),
                                add(new PathElement() {{
                                    id = "possimus";
                                    kind = "aut";
                                    name = "Sabrina Smitham DVM";
                                }}),
                                add(new PathElement() {{
                                    id = "voluptatibus";
                                    kind = "vero";
                                    name = "Miss Irma Wolff";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1("iusto", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.allocateIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsBeginTransaction

Begins a new transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsBeginTransactionSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BeginTransactionRequest;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsBeginTransactionRequest req = new DatastoreProjectsBeginTransactionRequest("harum") {{
                dollarXgafv = XgafvEnum.ONE;
                beginTransactionRequest = new BeginTransactionRequest() {{
                    databaseId = "accusamus";
                    transactionOptions = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "commodi";
                        }};;
                        readWrite = new ReadWrite() {{
                            previousTransaction = "repudiandae";
                        }};;
                    }};;
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            DatastoreProjectsBeginTransactionResponse res = sdk.projects.datastoreProjectsBeginTransaction(req, new DatastoreProjectsBeginTransactionSecurity() {{
                option1 = new DatastoreProjectsBeginTransactionSecurityOption1("voluptates", "quasi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.beginTransactionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsCommit

Commits a transaction, optionally creating, deleting or modifying some entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsCommitSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CommitRequest;
import org.openapis.openapi.models.shared.CommitRequestModeEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.Mutation;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsCommitRequest req = new DatastoreProjectsCommitRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                commitRequest = new CommitRequest() {{
                    databaseId = "veritatis";
                    mode = CommitRequestModeEnum.NON_TRANSACTIONAL;
                    mutations = new org.openapis.openapi.models.shared.Mutation[]{{
                        add(new Mutation() {{
                            baseVersion = "enim";
                            delete = new Key() {{
                                partitionId = new PartitionId() {{
                                    databaseId = "consequatur";
                                    namespaceId = "est";
                                    projectId = "quibusdam";
                                }};
                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                    add(new PathElement() {{
                                        id = "deserunt";
                                        kind = "distinctio";
                                        name = "Francisco Gleason";
                                    }}),
                                }};
                            }};
                            insert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "cupiditate";
                                        namespaceId = "quos";
                                        projectId = "perferendis";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "assumenda";
                                            kind = "ipsam";
                                            name = "Denise Pagac";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("tempore", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "delectus";
                                        booleanValue = false;
                                        doubleValue = 4332.88;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 2487.53;
                                            longitude = 7561.07;
                                        }};
                                        integerValue = "sint";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "aliquid";
                                                namespaceId = "provident";
                                                projectId = "necessitatibus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "officia";
                                                    kind = "dolor";
                                                    name = "Randal Parisian";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "illum";
                                                    kind = "maiores";
                                                    name = "Keith Gulgowski";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "ea";
                                                    kind = "aliquid";
                                                    name = "Tomas Friesen";
                                                }}),
                                            }};
                                        }};
                                        meaning = 881736;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "delectus";
                                        timestampValue = "quidem";
                                    }});
                                    put("provident", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "id";
                                        booleanValue = false;
                                        doubleValue = 5013.24;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 5332.06;
                                            longitude = 9560.84;
                                        }};
                                        integerValue = "amet";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "deserunt";
                                                namespaceId = "nisi";
                                                projectId = "vel";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "omnis";
                                                    kind = "molestiae";
                                                    name = "Marcia Gutkowski";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "labore";
                                                    kind = "labore";
                                                    name = "Ada Rohan";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aspernatur";
                                                    kind = "architecto";
                                                    name = "Frances Marks";
                                                }}),
                                            }};
                                        }};
                                        meaning = 551816;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "sint";
                                        timestampValue = "accusantium";
                                    }});
                                    put("mollitia", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "mollitia";
                                        booleanValue = false;
                                        doubleValue = 3209.97;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 4314.18;
                                            longitude = 2212.62;
                                        }};
                                        integerValue = "necessitatibus";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "odit";
                                                namespaceId = "nemo";
                                                projectId = "quasi";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "doloribus";
                                                    kind = "debitis";
                                                    name = "Jasmine Lind";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "architecto";
                                                    kind = "architecto";
                                                    name = "Pedro Ratke";
                                                }}),
                                            }};
                                        }};
                                        meaning = 841140;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "sed";
                                        timestampValue = "saepe";
                                    }});
                                }};
                            }};
                            update = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "pariatur";
                                        namespaceId = "accusantium";
                                        projectId = "consequuntur";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "natus";
                                            kind = "magni";
                                            name = "Angelica Stanton";
                                        }}),
                                        add(new PathElement() {{
                                            id = "ea";
                                            kind = "excepturi";
                                            name = "Dr. Rosemary Bartoletti";
                                        }}),
                                        add(new PathElement() {{
                                            id = "ipsam";
                                            kind = "voluptate";
                                            name = "Candice Beatty";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("perferendis", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "amet";
                                        booleanValue = false;
                                        doubleValue = 117.14;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 7649.12;
                                            longitude = 3599.78;
                                        }};
                                        integerValue = "hic";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "libero";
                                                namespaceId = "nobis";
                                                projectId = "dolores";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "totam";
                                                    kind = "dignissimos";
                                                    name = "Beatrice Dooley Sr.";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "minus";
                                                    kind = "quam";
                                                    name = "Eula Hegmann";
                                                }}),
                                            }};
                                        }};
                                        meaning = 608253;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "facilis";
                                        timestampValue = "perspiciatis";
                                    }});
                                    put("voluptatem", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "consequuntur";
                                        booleanValue = false;
                                        doubleValue = 5000.26;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 6214.79;
                                            longitude = 503.7;
                                        }};
                                        integerValue = "occaecati";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "rerum";
                                                namespaceId = "adipisci";
                                                projectId = "asperiores";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "modi";
                                                    kind = "iste";
                                                    name = "Casey Stracke";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "libero";
                                                    kind = "delectus";
                                                    name = "Billie Jacobi";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "dolor";
                                                    kind = "qui";
                                                    name = "Mindy Marks";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "dignissimos";
                                                    kind = "reiciendis";
                                                    name = "Mr. Lee Funk III";
                                                }}),
                                            }};
                                        }};
                                        meaning = 487838;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "quaerat";
                                        timestampValue = "accusamus";
                                    }});
                                    put("quidem", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "voluptas";
                                        booleanValue = false;
                                        doubleValue = 6176.58;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 1796.03;
                                            longitude = 5424.99;
                                        }};
                                        integerValue = "sit";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "fugiat";
                                                namespaceId = "ab";
                                                projectId = "soluta";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "iusto";
                                                    kind = "voluptate";
                                                    name = "Alfredo Mohr";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "asperiores";
                                                    kind = "nihil";
                                                    name = "Tamara Ondricka";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aspernatur";
                                                    kind = "perferendis";
                                                    name = "Marianne Thompson";
                                                }}),
                                            }};
                                        }};
                                        meaning = 383464;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "deserunt";
                                        timestampValue = "provident";
                                    }});
                                    put("minima", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "totam";
                                        booleanValue = false;
                                        doubleValue = 6289.82;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 0.55;
                                            longitude = 8726.51;
                                        }};
                                        integerValue = "quaerat";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "tempora";
                                                namespaceId = "vel";
                                                projectId = "quod";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "qui";
                                                    kind = "dolorum";
                                                    name = "Cory Pfeffer";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "quisquam";
                                                    kind = "tenetur";
                                                    name = "Kelli Thompson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "dolorem";
                                                    kind = "sapiente";
                                                    name = "Christian Balistreri";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "sed";
                                                    kind = "vel";
                                                    name = "Glen Oberbrunner";
                                                }}),
                                            }};
                                        }};
                                        meaning = 277628;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "qui";
                                        timestampValue = "cupiditate";
                                    }});
                                }};
                            }};
                            updateTime = "maxime";
                            upsert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "pariatur";
                                        namespaceId = "soluta";
                                        projectId = "dicta";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "totam";
                                            kind = "incidunt";
                                            name = "Bonnie Raynor";
                                        }}),
                                        add(new PathElement() {{
                                            id = "quam";
                                            kind = "molestias";
                                            name = "Shawn Doyle";
                                        }}),
                                        add(new PathElement() {{
                                            id = "odio";
                                            kind = "sunt";
                                            name = "Miss Candice Weimann";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("et", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "ipsum";
                                        booleanValue = false;
                                        doubleValue = 834.22;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 7492.55;
                                            longitude = 5521.93;
                                        }};
                                        integerValue = "tempore";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "cupiditate";
                                                namespaceId = "aperiam";
                                                projectId = "delectus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "dolore";
                                                    kind = "labore";
                                                    name = "Mr. Sonya Bradtke";
                                                }}),
                                            }};
                                        }};
                                        meaning = 929530;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "consequatur";
                                        timestampValue = "est";
                                    }});
                                    put("repellendus", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "doloribus";
                                        booleanValue = false;
                                        doubleValue = 2817.3;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 7034.95;
                                            longitude = 5864.1;
                                        }};
                                        integerValue = "qui";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "quae";
                                                namespaceId = "laudantium";
                                                projectId = "odio";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "voluptatibus";
                                                    kind = "quisquam";
                                                    name = "Arturo Hauck";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "voluptate";
                                                    kind = "consectetur";
                                                    name = "Roman Kulas";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "quod";
                                                    kind = "odio";
                                                    name = "Malcolm Swift";
                                                }}),
                                            }};
                                        }};
                                        meaning = 844550;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "illum";
                                        timestampValue = "sequi";
                                    }});
                                    put("natus", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "aut";
                                        booleanValue = false;
                                        doubleValue = 9742.59;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 3472.33;
                                            longitude = 8623.1;
                                        }};
                                        integerValue = "fugit";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "porro";
                                                namespaceId = "maiores";
                                                projectId = "doloribus";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "eligendi";
                                                    kind = "ducimus";
                                                    name = "Brandi Glover";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aspernatur";
                                                    kind = "vel";
                                                    name = "Clifford Dickens";
                                                }}),
                                            }};
                                        }};
                                        meaning = 120657;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "dolor";
                                        timestampValue = "maiores";
                                    }});
                                }};
                            }};
                        }}),
                        add(new Mutation() {{
                            baseVersion = "quasi";
                            delete = new Key() {{
                                partitionId = new PartitionId() {{
                                    databaseId = "ex";
                                    namespaceId = "nulla";
                                    projectId = "excepturi";
                                }};
                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                    add(new PathElement() {{
                                        id = "nostrum";
                                        kind = "sapiente";
                                        name = "Elbert Jenkins";
                                    }}),
                                    add(new PathElement() {{
                                        id = "veniam";
                                        kind = "aliquid";
                                        name = "Megan Jaskolski";
                                    }}),
                                    add(new PathElement() {{
                                        id = "recusandae";
                                        kind = "aspernatur";
                                        name = "Shirley Wilderman Jr.";
                                    }}),
                                    add(new PathElement() {{
                                        id = "deleniti";
                                        kind = "impedit";
                                        name = "Mrs. Denise Tillman MD";
                                    }}),
                                }};
                            }};
                            insert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "laborum";
                                        namespaceId = "placeat";
                                        projectId = "velit";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "autem";
                                            kind = "nobis";
                                            name = "Mack Stoltenberg";
                                        }}),
                                        add(new PathElement() {{
                                            id = "quasi";
                                            kind = "tempora";
                                            name = "Ms. Janice McLaughlin";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("eius", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "esse";
                                        booleanValue = false;
                                        doubleValue = 5245.93;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 6832.82;
                                            longitude = 4420.15;
                                        }};
                                        integerValue = "quidem";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "fugiat";
                                                namespaceId = "ut";
                                                projectId = "eum";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "assumenda";
                                                    kind = "eos";
                                                    name = "Miss Devin Bogan";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "neque";
                                                    kind = "quo";
                                                    name = "Salvatore Parker";
                                                }}),
                                            }};
                                        }};
                                        meaning = 373813;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "ab";
                                        timestampValue = "cupiditate";
                                    }});
                                    put("consequatur", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "debitis";
                                        booleanValue = false;
                                        doubleValue = 3708.53;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 1334.65;
                                            longitude = 1970.54;
                                        }};
                                        integerValue = "quo";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "esse";
                                                namespaceId = "recusandae";
                                                projectId = "aperiam";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "quod";
                                                    kind = "dignissimos";
                                                    name = "Jackie Leannon";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "odio";
                                                    kind = "occaecati";
                                                    name = "Miranda Daniel";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "accusantium";
                                                    kind = "porro";
                                                    name = "Dianne Langosh";
                                                }}),
                                            }};
                                        }};
                                        meaning = 143829;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "fuga";
                                        timestampValue = "mollitia";
                                    }});
                                }};
                            }};
                            update = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "incidunt";
                                        namespaceId = "atque";
                                        projectId = "explicabo";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "nisi";
                                            kind = "fugit";
                                            name = "Eugene Dibbert";
                                        }}),
                                        add(new PathElement() {{
                                            id = "occaecati";
                                            kind = "atque";
                                            name = "Tamara Vandervort IV";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("nam", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "aliquid";
                                        booleanValue = false;
                                        doubleValue = 934.59;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9040.45;
                                            longitude = 4263.06;
                                        }};
                                        integerValue = "harum";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "molestiae";
                                                namespaceId = "rerum";
                                                projectId = "occaecati";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "distinctio";
                                                    kind = "eligendi";
                                                    name = "Kristi Renner";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "consequuntur";
                                                    kind = "consequatur";
                                                    name = "Calvin Williamson";
                                                }}),
                                            }};
                                        }};
                                        meaning = 503427;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "provident";
                                        timestampValue = "a";
                                    }});
                                    put("nulla", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "esse";
                                        booleanValue = false;
                                        doubleValue = 974.68;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9518.75;
                                            longitude = 6216.79;
                                        }};
                                        integerValue = "sint";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "pariatur";
                                                namespaceId = "possimus";
                                                projectId = "quia";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "asperiores";
                                                    kind = "facere";
                                                    name = "Marilyn Botsford";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aliquid";
                                                    kind = "tenetur";
                                                    name = "Lila Kassulke";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "libero";
                                                    kind = "illum";
                                                    name = "Kenneth Hackett II";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "reprehenderit";
                                                    kind = "ullam";
                                                    name = "Margaret Lemke";
                                                }}),
                                            }};
                                        }};
                                        meaning = 401259;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "deleniti";
                                        timestampValue = "itaque";
                                    }});
                                    put("dolorum", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "omnis";
                                        booleanValue = false;
                                        doubleValue = 9453.02;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 984.78;
                                            longitude = 8694.89;
                                        }};
                                        integerValue = "et";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "voluptate";
                                                namespaceId = "ipsa";
                                                projectId = "minima";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "consectetur";
                                                    kind = "adipisci";
                                                    name = "Lionel Bartoletti IV";
                                                }}),
                                            }};
                                        }};
                                        meaning = 428796;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "mollitia";
                                        timestampValue = "ab";
                                    }});
                                    put("corrupti", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "voluptatem";
                                        booleanValue = false;
                                        doubleValue = 2211.61;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 5801.52;
                                            longitude = 2531.91;
                                        }};
                                        integerValue = "impedit";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "explicabo";
                                                namespaceId = "voluptas";
                                                projectId = "aut";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "dicta";
                                                    kind = "maiores";
                                                    name = "Lee Wiza";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "aperiam";
                                                    kind = "ea";
                                                    name = "Kathryn Sipes";
                                                }}),
                                            }};
                                        }};
                                        meaning = 490305;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "officia";
                                        timestampValue = "asperiores";
                                    }});
                                }};
                            }};
                            updateTime = "nemo";
                            upsert = new Entity() {{
                                key = new Key() {{
                                    partitionId = new PartitionId() {{
                                        databaseId = "quae";
                                        namespaceId = "quaerat";
                                        projectId = "porro";
                                    }};
                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                        add(new PathElement() {{
                                            id = "labore";
                                            kind = "ab";
                                            name = "Kristine Ondricka";
                                        }}),
                                        add(new PathElement() {{
                                            id = "culpa";
                                            kind = "est";
                                            name = "Felix Stehr";
                                        }}),
                                        add(new PathElement() {{
                                            id = "quos";
                                            kind = "vel";
                                            name = "Elena Quigley";
                                        }}),
                                        add(new PathElement() {{
                                            id = "in";
                                            kind = "corporis";
                                            name = "Mack Hettinger";
                                        }}),
                                    }};
                                }};
                                properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                    put("cum", new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};
                                        blobValue = "in";
                                        booleanValue = false;
                                        doubleValue = 3485.19;
                                        entityValue = new Entity() {{}};
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 9372.85;
                                            longitude = 8149.67;
                                        }};
                                        integerValue = "numquam";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "doloribus";
                                                namespaceId = "suscipit";
                                                projectId = "reiciendis";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "saepe";
                                                    kind = "necessitatibus";
                                                    name = "Katherine Zemlak";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "amet";
                                                    kind = "beatae";
                                                    name = "Lorene Toy";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "harum";
                                                    kind = "laboriosam";
                                                    name = "Dr. Silvia Renner";
                                                }}),
                                            }};
                                        }};
                                        meaning = 272437;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "aspernatur";
                                        timestampValue = "voluptas";
                                    }});
                                }};
                            }};
                        }}),
                    }};
                    singleUseTransaction = new TransactionOptions() {{
                        readOnly = new ReadOnly() {{
                            readTime = "voluptas";
                        }};;
                        readWrite = new ReadWrite() {{
                            previousTransaction = "voluptas";
                        }};;
                    }};;
                    transaction = "minima";
                }};;
                accessToken = "nobis";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "minus";
                key = "dolores";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "dolore";
                uploadProtocol = "aliquam";
            }};            

            DatastoreProjectsCommitResponse res = sdk.projects.datastoreProjectsCommit(req, new DatastoreProjectsCommitSecurity() {{
                option1 = new DatastoreProjectsCommitSecurityOption1("officiis", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.commitResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsExport

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsExportRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsExportResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsExportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1EntityFilter;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1ExportEntitiesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsExportRequest req = new DatastoreProjectsExportRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDatastoreAdminV1ExportEntitiesRequest = new GoogleDatastoreAdminV1ExportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1EntityFilter() {{
                        kinds = new String[]{{
                            add("blanditiis"),
                            add("quas"),
                            add("hic"),
                        }};
                        namespaceIds = new String[]{{
                            add("culpa"),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("pariatur", "totam");
                        put("hic", "exercitationem");
                        put("nobis", "sit");
                    }};
                    outputUrlPrefix = "rerum";
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "asperiores";
                key = "facilis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "ab";
                uploadProtocol = "iste";
            }};            

            DatastoreProjectsExportResponse res = sdk.projects.datastoreProjectsExport(req, new DatastoreProjectsExportSecurity() {{
                option1 = new DatastoreProjectsExportSecurityOption1("dolore", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsImport

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsImportRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsImportResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsImportSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1EntityFilter;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1ImportEntitiesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsImportRequest req = new DatastoreProjectsImportRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDatastoreAdminV1ImportEntitiesRequest = new GoogleDatastoreAdminV1ImportEntitiesRequest() {{
                    entityFilter = new GoogleDatastoreAdminV1EntityFilter() {{
                        kinds = new String[]{{
                            add("quidem"),
                            add("explicabo"),
                        }};
                        namespaceIds = new String[]{{
                            add("unde"),
                            add("architecto"),
                        }};
                    }};;
                    inputUrl = "suscipit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("debitis", "illo");
                        put("reiciendis", "perferendis");
                        put("corrupti", "maiores");
                        put("incidunt", "sed");
                    }};
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "ipsum";
                key = "ea";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "voluptatibus";
                uploadProtocol = "tempora";
            }};            

            DatastoreProjectsImportResponse res = sdk.projects.datastoreProjectsImport(req, new DatastoreProjectsImportSecurity() {{
                option1 = new DatastoreProjectsImportSecurityOption1("tempora", "voluptate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsIndexesCreate

Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesCreateRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesCreateResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesCreateSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesCreateSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1IndexAncestorEnum;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1IndexInput;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1IndexedProperty;
import org.openapis.openapi.models.shared.GoogleDatastoreAdminV1IndexedPropertyDirectionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsIndexesCreateRequest req = new DatastoreProjectsIndexesCreateRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                googleDatastoreAdminV1IndexInput = new GoogleDatastoreAdminV1IndexInput() {{
                    ancestor = GoogleDatastoreAdminV1IndexAncestorEnum.ANCESTOR_MODE_UNSPECIFIED;
                    kind = "non";
                    properties = new org.openapis.openapi.models.shared.GoogleDatastoreAdminV1IndexedProperty[]{{
                        add(new GoogleDatastoreAdminV1IndexedProperty() {{
                            direction = GoogleDatastoreAdminV1IndexedPropertyDirectionEnum.ASCENDING;
                            name = "Alex Gottlieb";
                        }}),
                        add(new GoogleDatastoreAdminV1IndexedProperty() {{
                            direction = GoogleDatastoreAdminV1IndexedPropertyDirectionEnum.ASCENDING;
                            name = "Della Muller";
                        }}),
                        add(new GoogleDatastoreAdminV1IndexedProperty() {{
                            direction = GoogleDatastoreAdminV1IndexedPropertyDirectionEnum.DESCENDING;
                            name = "Dr. Jody Cummings";
                        }}),
                        add(new GoogleDatastoreAdminV1IndexedProperty() {{
                            direction = GoogleDatastoreAdminV1IndexedPropertyDirectionEnum.DIRECTION_UNSPECIFIED;
                            name = "Cecelia Braun";
                        }}),
                    }};
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "dolorum";
                key = "voluptatum";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "expedita";
                uploadProtocol = "debitis";
            }};            

            DatastoreProjectsIndexesCreateResponse res = sdk.projects.datastoreProjectsIndexesCreate(req, new DatastoreProjectsIndexesCreateSecurity() {{
                option1 = new DatastoreProjectsIndexesCreateSecurityOption1("neque", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsIndexesDelete

Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesDeleteRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesDeleteResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesDeleteSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsIndexesDeleteRequest req = new DatastoreProjectsIndexesDeleteRequest("nostrum", "officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "atque";
                key = "fugit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "voluptatem";
                uploadProtocol = "culpa";
            }};            

            DatastoreProjectsIndexesDeleteResponse res = sdk.projects.datastoreProjectsIndexesDelete(req, new DatastoreProjectsIndexesDeleteSecurity() {{
                option1 = new DatastoreProjectsIndexesDeleteSecurityOption1("expedita", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsIndexesGet

Gets an index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesGetRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesGetResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesGetSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesGetSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsIndexesGetRequest req = new DatastoreProjectsIndexesGetRequest("consequatur", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "repudiandae";
                key = "corporis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "ex";
                uploadProtocol = "sed";
            }};            

            DatastoreProjectsIndexesGetResponse res = sdk.projects.datastoreProjectsIndexesGet(req, new DatastoreProjectsIndexesGetSecurity() {{
                option1 = new DatastoreProjectsIndexesGetSecurityOption1("sit", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleDatastoreAdminV1Index != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsIndexesList

Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesListRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesListResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesListSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesListSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsIndexesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsIndexesListRequest req = new DatastoreProjectsIndexesListRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "reiciendis";
                filter = "dolorem";
                key = "harum";
                oauthToken = "dicta";
                pageSize = 99416L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "quidem";
                uploadProtocol = "atque";
            }};            

            DatastoreProjectsIndexesListResponse res = sdk.projects.datastoreProjectsIndexesList(req, new DatastoreProjectsIndexesListSecurity() {{
                option1 = new DatastoreProjectsIndexesListSecurityOption1("laborum", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleDatastoreAdminV1ListIndexesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsLookup

Looks up entities by key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsLookupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.LookupRequest;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsLookupRequest req = new DatastoreProjectsLookupRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                lookupRequest = new LookupRequest() {{
                    databaseId = "alias";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "deserunt";
                                namespaceId = "voluptate";
                                projectId = "unde";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "provident";
                                    kind = "repellendus";
                                    name = "Noah Armstrong";
                                }}),
                                add(new PathElement() {{
                                    id = "reprehenderit";
                                    kind = "facere";
                                    name = "Max O'Connell DDS";
                                }}),
                                add(new PathElement() {{
                                    id = "repudiandae";
                                    kind = "quasi";
                                    name = "Mitchell Zboncak";
                                }}),
                                add(new PathElement() {{
                                    id = "quidem";
                                    kind = "maxime";
                                    name = "Georgia Farrell";
                                }}),
                            }};
                        }}),
                    }};
                    readOptions = new ReadOptions() {{
                        newTransaction = new TransactionOptions() {{
                            readOnly = new ReadOnly() {{
                                readTime = "atque";
                            }};;
                            readWrite = new ReadWrite() {{
                                previousTransaction = "error";
                            }};;
                        }};;
                        readConsistency = ReadOptionsReadConsistencyEnum.EVENTUAL;
                        readTime = "officiis";
                        transaction = "accusamus";
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "ex";
                key = "maiores";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "error";
                uploadProtocol = "blanditiis";
            }};            

            DatastoreProjectsLookupResponse res = sdk.projects.datastoreProjectsLookup(req, new DatastoreProjectsLookupSecurity() {{
                option1 = new DatastoreProjectsLookupSecurityOption1("suscipit", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsCancelRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsCancelResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsCancelSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsCancelSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsOperationsCancelRequest req = new DatastoreProjectsOperationsCancelRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "repellendus";
                key = "labore";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "repudiandae";
                uploadProtocol = "dicta";
            }};            

            DatastoreProjectsOperationsCancelResponse res = sdk.projects.datastoreProjectsOperationsCancel(req, new DatastoreProjectsOperationsCancelSecurity() {{
                option1 = new DatastoreProjectsOperationsCancelSecurityOption1("accusantium", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsDeleteSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsOperationsDeleteRequest req = new DatastoreProjectsOperationsDeleteRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "molestias";
                key = "magnam";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "occaecati";
                uploadProtocol = "officiis";
            }};            

            DatastoreProjectsOperationsDeleteResponse res = sdk.projects.datastoreProjectsOperationsDelete(req, new DatastoreProjectsOperationsDeleteSecurity() {{
                option1 = new DatastoreProjectsOperationsDeleteSecurityOption1("perspiciatis", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsGetSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsOperationsGetRequest req = new DatastoreProjectsOperationsGetRequest("adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "id";
                key = "quis";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "illo";
                uploadProtocol = "corporis";
            }};            

            DatastoreProjectsOperationsGetResponse res = sdk.projects.datastoreProjectsOperationsGet(req, new DatastoreProjectsOperationsGetSecurity() {{
                option1 = new DatastoreProjectsOperationsGetSecurityOption1("quidem", "eveniet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsListRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsListResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsListSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsListSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsOperationsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsOperationsListRequest req = new DatastoreProjectsOperationsListRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "totam";
                filter = "quae";
                key = "molestiae";
                oauthToken = "eveniet";
                pageSize = 184362L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "necessitatibus";
                uploadProtocol = "ratione";
            }};            

            DatastoreProjectsOperationsListResponse res = sdk.projects.datastoreProjectsOperationsList(req, new DatastoreProjectsOperationsListSecurity() {{
                option1 = new DatastoreProjectsOperationsListSecurityOption1("laborum", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsReserveIds

Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsReserveIdsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.ReserveIdsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsReserveIdsRequest req = new DatastoreProjectsReserveIdsRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                reserveIdsRequest = new ReserveIdsRequest() {{
                    databaseId = "aliquam";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "repellat";
                                namespaceId = "alias";
                                projectId = "corporis";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "nihil";
                                    kind = "mollitia";
                                    name = "Linda Wuckert";
                                }}),
                                add(new PathElement() {{
                                    id = "id";
                                    kind = "minima";
                                    name = "Dr. Lee Dooley";
                                }}),
                                add(new PathElement() {{
                                    id = "quaerat";
                                    kind = "molestiae";
                                    name = "April Nader";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "laudantium";
                                namespaceId = "eum";
                                projectId = "nemo";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "esse";
                                    kind = "provident";
                                    name = "Natalie Witting";
                                }}),
                                add(new PathElement() {{
                                    id = "ullam";
                                    kind = "quasi";
                                    name = "Gordon O'Hara";
                                }}),
                                add(new PathElement() {{
                                    id = "animi";
                                    kind = "ex";
                                    name = "Ruth Zulauf";
                                }}),
                                add(new PathElement() {{
                                    id = "in";
                                    kind = "nam";
                                    name = "Oliver Osinski";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "sapiente";
                key = "cumque";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "tempora";
                uploadProtocol = "quis";
            }};            

            DatastoreProjectsReserveIdsResponse res = sdk.projects.datastoreProjectsReserveIds(req, new DatastoreProjectsReserveIdsSecurity() {{
                option1 = new DatastoreProjectsReserveIdsSecurityOption1("inventore", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reserveIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRollback

Rolls back a transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRollbackSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RollbackRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRollbackRequest req = new DatastoreProjectsRollbackRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                rollbackRequest = new RollbackRequest() {{
                    databaseId = "perferendis";
                    transaction = "velit";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "rem";
                key = "at";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "sapiente";
                uploadProtocol = "eum";
            }};            

            DatastoreProjectsRollbackResponse res = sdk.projects.datastoreProjectsRollback(req, new DatastoreProjectsRollbackSecurity() {{
                option1 = new DatastoreProjectsRollbackSecurityOption1("dicta", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.rollbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRunAggregationQuery

Runs an aggregation query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQueryRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQueryResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRunAggregationQuerySecurityOption2;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationQuery;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterOpEnum;
import org.openapis.openapi.models.shared.Count;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.GqlQuery;
import org.openapis.openapi.models.shared.GqlQueryParameter;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KindExpression;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.Projection;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilterOpEnum;
import org.openapis.openapi.models.shared.PropertyOrder;
import org.openapis.openapi.models.shared.PropertyOrderDirectionEnum;
import org.openapis.openapi.models.shared.PropertyReference;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.RunAggregationQueryRequest;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRunAggregationQueryRequest req = new DatastoreProjectsRunAggregationQueryRequest("beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                runAggregationQueryRequest = new RunAggregationQueryRequest() {{
                    aggregationQuery = new AggregationQuery() {{
                        aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                            add(new Aggregation() {{
                                alias = "earum";
                                count = new Count() {{
                                    upTo = "soluta";
                                }};
                            }}),
                            add(new Aggregation() {{
                                alias = "hic";
                                count = new Count() {{
                                    upTo = "illum";
                                }};
                            }}),
                            add(new Aggregation() {{
                                alias = "eaque";
                                count = new Count() {{
                                    upTo = "earum";
                                }};
                            }}),
                        }};
                        nestedQuery = new Query() {{
                            distinctOn = new org.openapis.openapi.models.shared.PropertyReference[]{{
                                add(new PropertyReference() {{
                                    name = "Doyle Jacobs";
                                }}),
                                add(new PropertyReference() {{
                                    name = "Denise Runolfsdottir";
                                }}),
                                add(new PropertyReference() {{
                                    name = "Mr. Santiago Stoltenberg IV";
                                }}),
                            }};
                            endCursor = "natus";
                            filter = new Filter() {{
                                compositeFilter = new CompositeFilter() {{
                                    filters = new org.openapis.openapi.models.shared.Filter[]{{
                                        add(new Filter() {{}}),
                                        add(new Filter() {{}}),
                                        add(new Filter() {{}}),
                                    }};
                                    op = CompositeFilterOpEnum.AND;
                                }};;
                                propertyFilter = new PropertyFilter() {{
                                    op = PropertyFilterOpEnum.LESS_THAN_OR_EQUAL;
                                    property = new PropertyReference() {{
                                        name = "Anne Wyman";
                                    }};;
                                    value = new Value() {{
                                        arrayValue = new ArrayValue() {{
                                            values = new org.openapis.openapi.models.shared.Value[]{{
                                                add(new Value() {{}}),
                                            }};
                                        }};;
                                        blobValue = "tempora";
                                        booleanValue = false;
                                        doubleValue = 4706.21;
                                        entityValue = new Entity() {{
                                            key = new Key() {{
                                                partitionId = new PartitionId() {{
                                                    databaseId = "molestiae";
                                                    namespaceId = "dicta";
                                                    projectId = "iusto";
                                                }};;
                                                path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                    add(new PathElement() {{
                                                        id = "praesentium";
                                                        kind = "maiores";
                                                        name = "Ben Bradtke Sr.";
                                                    }}),
                                                    add(new PathElement() {{
                                                        id = "odio";
                                                        kind = "tempora";
                                                        name = "Carla Feil MD";
                                                    }}),
                                                }};
                                            }};;
                                            properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                                put("nostrum", new Value() {{
                                                    arrayValue = new ArrayValue() {{
                                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                                            add(new Value() {{}}),
                                                            add(new Value() {{}}),
                                                            add(new Value() {{}}),
                                                            add(new Value() {{}}),
                                                        }};
                                                    }};
                                                    blobValue = "expedita";
                                                    booleanValue = false;
                                                    doubleValue = 3996.67;
                                                    entityValue = new Entity() {{}};
                                                    excludeFromIndexes = false;
                                                    geoPointValue = new LatLng() {{
                                                        latitude = 6391.87;
                                                        longitude = 3813.97;
                                                    }};
                                                    integerValue = "aliquid";
                                                    keyValue = new Key() {{
                                                        partitionId = new PartitionId() {{
                                                            databaseId = "perferendis";
                                                            namespaceId = "eum";
                                                            projectId = "voluptas";
                                                        }};
                                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                            add(new PathElement() {{
                                                                id = "id";
                                                                kind = "ab";
                                                                name = "Woodrow Volkman";
                                                            }}),
                                                            add(new PathElement() {{
                                                                id = "libero";
                                                                kind = "ad";
                                                                name = "Bill Brown";
                                                            }}),
                                                            add(new PathElement() {{
                                                                id = "quo";
                                                                kind = "ex";
                                                                name = "Ms. Geraldine Ratke";
                                                            }}),
                                                        }};
                                                    }};
                                                    meaning = 399660;
                                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                                    stringValue = "beatae";
                                                    timestampValue = "voluptatum";
                                                }});
                                            }};
                                        }};;
                                        excludeFromIndexes = false;
                                        geoPointValue = new LatLng() {{
                                            latitude = 6063.08;
                                            longitude = 852.33;
                                        }};;
                                        integerValue = "rerum";
                                        keyValue = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "est";
                                                namespaceId = "culpa";
                                                projectId = "voluptatem";
                                            }};;
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "officiis";
                                                    kind = "architecto";
                                                    name = "Mr. Dewey Toy";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "earum";
                                                    kind = "ex";
                                                    name = "Ian Schinner";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "ratione";
                                                    kind = "ullam";
                                                    name = "Desiree Leannon";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "nam";
                                                    kind = "ipsam";
                                                    name = "Ms. Curtis Hackett II";
                                                }}),
                                            }};
                                        }};;
                                        meaning = 221396;
                                        nullValue = ValueNullValueEnum.NULL_VALUE;
                                        stringValue = "consequatur";
                                        timestampValue = "architecto";
                                    }};;
                                }};;
                            }};;
                            kind = new org.openapis.openapi.models.shared.KindExpression[]{{
                                add(new KindExpression() {{
                                    name = "Beverly Bergstrom I";
                                }}),
                            }};
                            limit = 856277;
                            offset = 369490;
                            order = new org.openapis.openapi.models.shared.PropertyOrder[]{{
                                add(new PropertyOrder() {{
                                    direction = PropertyOrderDirectionEnum.DIRECTION_UNSPECIFIED;
                                    property = new PropertyReference() {{
                                        name = "Conrad Rutherford";
                                    }};
                                }}),
                            }};
                            projection = new org.openapis.openapi.models.shared.Projection[]{{
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Sally Dooley";
                                    }};
                                }}),
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Jennie Gutkowski DDS";
                                    }};
                                }}),
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Della Howell";
                                    }};
                                }}),
                                add(new Projection() {{
                                    property = new PropertyReference() {{
                                        name = "Mrs. June Tremblay";
                                    }};
                                }}),
                            }};
                            startCursor = "vero";
                        }};;
                    }};;
                    databaseId = "est";
                    gqlQuery = new GqlQuery() {{
                        allowLiterals = false;
                        namedBindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.GqlQueryParameter>() {{
                            put("sequi", new GqlQueryParameter() {{
                                cursor = "doloribus";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "optio";
                                    booleanValue = false;
                                    doubleValue = 5796.81;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "nemo";
                                                namespaceId = "voluptate";
                                                projectId = "blanditiis";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "voluptas";
                                                    kind = "numquam";
                                                    name = "Brandy Gibson";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "nesciunt";
                                                    kind = "fuga";
                                                    name = "Randall Boyle";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "dicta";
                                                    kind = "nisi";
                                                    name = "Edith Beahan";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("alias", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "eos";
                                                booleanValue = false;
                                                doubleValue = 5790.11;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6128.67;
                                                    longitude = 1700.99;
                                                }};
                                                integerValue = "inventore";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "fuga";
                                                        namespaceId = "accusamus";
                                                        projectId = "voluptatibus";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "omnis";
                                                            kind = "delectus";
                                                            name = "Maxine Schmitt";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quos";
                                                            kind = "commodi";
                                                            name = "Leslie Lebsack";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nam";
                                                            kind = "vero";
                                                            name = "Mr. Holly Kautzer";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 978548;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "enim";
                                                timestampValue = "sint";
                                            }});
                                            put("nulla", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "esse";
                                                booleanValue = false;
                                                doubleValue = 3644.63;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 4445.87;
                                                    longitude = 6677.15;
                                                }};
                                                integerValue = "quis";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "sint";
                                                        namespaceId = "accusamus";
                                                        projectId = "impedit";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "necessitatibus";
                                                            kind = "asperiores";
                                                            name = "Loretta Tremblay DDS";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "fuga";
                                                            kind = "laborum";
                                                            name = "Shannon Lind";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "magni";
                                                            kind = "soluta";
                                                            name = "Alton Grimes";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "sequi";
                                                            kind = "dignissimos";
                                                            name = "Angelica Leuschke";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 139072;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "voluptatibus";
                                                timestampValue = "vel";
                                            }});
                                            put("magnam", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "inventore";
                                                booleanValue = false;
                                                doubleValue = 8180.34;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7268.78;
                                                    longitude = 1024.13;
                                                }};
                                                integerValue = "voluptatibus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "quia";
                                                        namespaceId = "porro";
                                                        projectId = "aliquam";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "illo";
                                                            kind = "accusantium";
                                                            name = "Rosemary Breitenberg";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 431994;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "velit";
                                                timestampValue = "ut";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 5964.33;
                                        longitude = 9353.02;
                                    }};
                                    integerValue = "dicta";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "impedit";
                                            namespaceId = "voluptatibus";
                                            projectId = "iste";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "alias";
                                                kind = "nisi";
                                                name = "Jacob Pacocha";
                                            }}),
                                            add(new PathElement() {{
                                                id = "iusto";
                                                kind = "sit";
                                                name = "Barbara Nikolaus";
                                            }}),
                                            add(new PathElement() {{
                                                id = "quidem";
                                                kind = "voluptas";
                                                name = "Guadalupe Mertz";
                                            }}),
                                            add(new PathElement() {{
                                                id = "a";
                                                kind = "voluptate";
                                                name = "Lindsey Treutel";
                                            }}),
                                        }};
                                    }};
                                    meaning = 373040;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "corporis";
                                    timestampValue = "est";
                                }};
                            }});
                            put("error", new GqlQueryParameter() {{
                                cursor = "esse";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "veritatis";
                                    booleanValue = false;
                                    doubleValue = 8744;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "consectetur";
                                                namespaceId = "vitae";
                                                projectId = "inventore";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "ad";
                                                    kind = "qui";
                                                    name = "Reginald Hilll";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("dolorum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "fugit";
                                                booleanValue = false;
                                                doubleValue = 5.45;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1680.42;
                                                    longitude = 4254.02;
                                                }};
                                                integerValue = "quae";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "quae";
                                                        namespaceId = "modi";
                                                        projectId = "neque";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "itaque";
                                                            kind = "et";
                                                            name = "Lindsay Stiedemann";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quia";
                                                            kind = "quia";
                                                            name = "Miss Geneva Reinger";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 854460;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "officia";
                                                timestampValue = "quos";
                                            }});
                                            put("placeat", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "iusto";
                                                booleanValue = false;
                                                doubleValue = 573.2;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9148.64;
                                                    longitude = 800.61;
                                                }};
                                                integerValue = "aperiam";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "totam";
                                                        namespaceId = "dolore";
                                                        projectId = "eligendi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "voluptatem";
                                                            kind = "autem";
                                                            name = "Miss Wanda Shanahan";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "corrupti";
                                                            kind = "molestiae";
                                                            name = "Sheldon Treutel";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "ea";
                                                            kind = "autem";
                                                            name = "Olivia Larkin";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 972912;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "cum";
                                                timestampValue = "at";
                                            }});
                                            put("alias", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "quidem";
                                                booleanValue = false;
                                                doubleValue = 6841.26;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9195.08;
                                                    longitude = 340.7;
                                                }};
                                                integerValue = "expedita";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "officiis";
                                                        namespaceId = "eos";
                                                        projectId = "quibusdam";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "praesentium";
                                                            kind = "odit";
                                                            name = "Stacy Mraz";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "recusandae";
                                                            kind = "similique";
                                                            name = "Miss Alison Hayes";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 963198;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "cupiditate";
                                                timestampValue = "fugit";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 2536.25;
                                        longitude = 2569.16;
                                    }};
                                    integerValue = "nesciunt";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "at";
                                            namespaceId = "officia";
                                            projectId = "dignissimos";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "necessitatibus";
                                                kind = "corporis";
                                                name = "Kristy Lemke";
                                            }}),
                                            add(new PathElement() {{
                                                id = "placeat";
                                                kind = "enim";
                                                name = "Pearl Schinner";
                                            }}),
                                            add(new PathElement() {{
                                                id = "corporis";
                                                kind = "magnam";
                                                name = "Miss Emilio Reynolds";
                                            }}),
                                            add(new PathElement() {{
                                                id = "labore";
                                                kind = "totam";
                                                name = "Glen Satterfield";
                                            }}),
                                        }};
                                    }};
                                    meaning = 684553;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "nostrum";
                                    timestampValue = "est";
                                }};
                            }});
                            put("impedit", new GqlQueryParameter() {{
                                cursor = "delectus";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "vero";
                                    booleanValue = false;
                                    doubleValue = 1415.06;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "repellat";
                                                namespaceId = "pariatur";
                                                projectId = "nemo";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "aperiam";
                                                    kind = "odio";
                                                    name = "Arlene Kuphal";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "error";
                                                    kind = "veritatis";
                                                    name = "Colleen Streich";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("ex", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "commodi";
                                                booleanValue = false;
                                                doubleValue = 8886.16;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 8108.39;
                                                    longitude = 6972.74;
                                                }};
                                                integerValue = "exercitationem";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "quam";
                                                        namespaceId = "dolorem";
                                                        projectId = "modi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "sint";
                                                            kind = "vero";
                                                            name = "Dr. Elvira Robel";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 659268;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "dolores";
                                                timestampValue = "nam";
                                            }});
                                            put("dicta", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "necessitatibus";
                                                booleanValue = false;
                                                doubleValue = 7482.24;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 568.77;
                                                    longitude = 4973.57;
                                                }};
                                                integerValue = "maiores";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "veritatis";
                                                        namespaceId = "quasi";
                                                        projectId = "laboriosam";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "libero";
                                                            kind = "excepturi";
                                                            name = "Maurice Haag";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "eligendi";
                                                            kind = "sint";
                                                            name = "Mindy O'Kon";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "molestias";
                                                            kind = "odio";
                                                            name = "Gwen Braun";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "assumenda";
                                                            kind = "tempore";
                                                            name = "Lee Batz";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 741238;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ipsum";
                                                timestampValue = "adipisci";
                                            }});
                                            put("saepe", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "doloremque";
                                                booleanValue = false;
                                                doubleValue = 3397.56;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 3330.72;
                                                    longitude = 7274.81;
                                                }};
                                                integerValue = "architecto";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "cupiditate";
                                                        namespaceId = "molestiae";
                                                        projectId = "eligendi";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "non";
                                                            kind = "magnam";
                                                            name = "Jeremy Zemlak";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "facere";
                                                            kind = "laudantium";
                                                            name = "Freda Farrell I";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "facilis";
                                                            kind = "tempore";
                                                            name = "Tami Hahn";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "nisi";
                                                            kind = "quis";
                                                            name = "Jeannette Schimmel";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 217663;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ad";
                                                timestampValue = "voluptatibus";
                                            }});
                                            put("voluptatibus", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "debitis";
                                                booleanValue = false;
                                                doubleValue = 2908.41;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7009.28;
                                                    longitude = 1797.95;
                                                }};
                                                integerValue = "reprehenderit";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "nostrum";
                                                        namespaceId = "neque";
                                                        projectId = "iusto";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "rem";
                                                            kind = "eligendi";
                                                            name = "Fredrick Towne";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "dicta";
                                                            kind = "error";
                                                            name = "Justin Kulas";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "ad";
                                                            kind = "aspernatur";
                                                            name = "Marta Kub";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 72350;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ab";
                                                timestampValue = "incidunt";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 8791.74;
                                        longitude = 9025.81;
                                    }};
                                    integerValue = "tempore";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "veniam";
                                            namespaceId = "eos";
                                            projectId = "reiciendis";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "reprehenderit";
                                                kind = "praesentium";
                                                name = "Kristie Schamberger";
                                            }}),
                                            add(new PathElement() {{
                                                id = "deleniti";
                                                kind = "illo";
                                                name = "Nadine Gutmann";
                                            }}),
                                            add(new PathElement() {{
                                                id = "laudantium";
                                                kind = "repudiandae";
                                                name = "Kendra Collins";
                                            }}),
                                            add(new PathElement() {{
                                                id = "quas";
                                                kind = "provident";
                                                name = "Ira Kulas";
                                            }}),
                                        }};
                                    }};
                                    meaning = 629377;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "repellendus";
                                    timestampValue = "iure";
                                }};
                            }});
                        }};
                        positionalBindings = new org.openapis.openapi.models.shared.GqlQueryParameter[]{{
                            add(new GqlQueryParameter() {{
                                cursor = "commodi";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "commodi";
                                    booleanValue = false;
                                    doubleValue = 121.71;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "voluptatem";
                                                namespaceId = "ad";
                                                projectId = "quae";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "illum";
                                                    kind = "praesentium";
                                                    name = "Mr. Jonathon Fay";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("earum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "amet";
                                                booleanValue = false;
                                                doubleValue = 5879.67;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6771.41;
                                                    longitude = 8979.56;
                                                }};
                                                integerValue = "provident";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "repudiandae";
                                                        namespaceId = "consequatur";
                                                        projectId = "nemo";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "itaque";
                                                            kind = "facilis";
                                                            name = "Anthony Marvin";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "totam";
                                                            kind = "dicta";
                                                            name = "Dr. Shannon Fahey";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 582320;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "atque";
                                                timestampValue = "beatae";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 8682.55;
                                        longitude = 2875.44;
                                    }};
                                    integerValue = "minus";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "esse";
                                            namespaceId = "voluptatem";
                                            projectId = "perferendis";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "ea";
                                                kind = "aperiam";
                                                name = "Kristie Frami";
                                            }}),
                                            add(new PathElement() {{
                                                id = "consectetur";
                                                kind = "eligendi";
                                                name = "Kim Roberts";
                                            }}),
                                            add(new PathElement() {{
                                                id = "officia";
                                                kind = "amet";
                                                name = "Bruce Satterfield";
                                            }}),
                                        }};
                                    }};
                                    meaning = 670762;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "dignissimos";
                                    timestampValue = "vero";
                                }};
                            }}),
                        }};
                        queryString = "qui";
                    }};;
                    partitionId = new PartitionId() {{
                        databaseId = "consectetur";
                        namespaceId = "repellat";
                        projectId = "explicabo";
                    }};;
                    readOptions = new ReadOptions() {{
                        newTransaction = new TransactionOptions() {{
                            readOnly = new ReadOnly() {{
                                readTime = "explicabo";
                            }};;
                            readWrite = new ReadWrite() {{
                                previousTransaction = "exercitationem";
                            }};;
                        }};;
                        readConsistency = ReadOptionsReadConsistencyEnum.STRONG;
                        readTime = "non";
                        transaction = "ab";
                    }};;
                }};;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                fields = "delectus";
                key = "non";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "exercitationem";
                uploadProtocol = "labore";
            }};            

            DatastoreProjectsRunAggregationQueryResponse res = sdk.projects.datastoreProjectsRunAggregationQuery(req, new DatastoreProjectsRunAggregationQuerySecurity() {{
                option1 = new DatastoreProjectsRunAggregationQuerySecurityOption1("numquam", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runAggregationQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datastoreProjectsRunQuery

Queries for entities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQueryRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQueryResponse;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsRunQuerySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArrayValue;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterOpEnum;
import org.openapis.openapi.models.shared.Entity;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.GqlQuery;
import org.openapis.openapi.models.shared.GqlQueryParameter;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.KindExpression;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.Projection;
import org.openapis.openapi.models.shared.PropertyFilter;
import org.openapis.openapi.models.shared.PropertyFilterOpEnum;
import org.openapis.openapi.models.shared.PropertyOrder;
import org.openapis.openapi.models.shared.PropertyOrderDirectionEnum;
import org.openapis.openapi.models.shared.PropertyReference;
import org.openapis.openapi.models.shared.Query;
import org.openapis.openapi.models.shared.ReadOnly;
import org.openapis.openapi.models.shared.ReadOptions;
import org.openapis.openapi.models.shared.ReadOptionsReadConsistencyEnum;
import org.openapis.openapi.models.shared.ReadWrite;
import org.openapis.openapi.models.shared.RunQueryRequest;
import org.openapis.openapi.models.shared.TransactionOptions;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueNullValueEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsRunQueryRequest req = new DatastoreProjectsRunQueryRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                runQueryRequest = new RunQueryRequest() {{
                    databaseId = "explicabo";
                    gqlQuery = new GqlQuery() {{
                        allowLiterals = false;
                        namedBindings = new java.util.HashMap<String, org.openapis.openapi.models.shared.GqlQueryParameter>() {{
                            put("rem", new GqlQueryParameter() {{
                                cursor = "aperiam";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "deleniti";
                                    booleanValue = false;
                                    doubleValue = 3167.3;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "voluptate";
                                                namespaceId = "similique";
                                                projectId = "minima";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "magnam";
                                                    kind = "sit";
                                                    name = "Natalie Dooley";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "fugiat";
                                                    kind = "nostrum";
                                                    name = "Mrs. Lynn Wisozk Jr.";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "eveniet";
                                                    kind = "odio";
                                                    name = "Carrie Pagac";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("nesciunt", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "itaque";
                                                booleanValue = false;
                                                doubleValue = 7912.28;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1226.62;
                                                    longitude = 7151.43;
                                                }};
                                                integerValue = "iusto";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "quas";
                                                        namespaceId = "et";
                                                        projectId = "facilis";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "autem";
                                                            kind = "fuga";
                                                            name = "Gwendolyn Anderson";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 832239;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "veritatis";
                                                timestampValue = "quae";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 510.75;
                                        longitude = 9048.27;
                                    }};
                                    integerValue = "delectus";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "mollitia";
                                            namespaceId = "nulla";
                                            projectId = "officia";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "voluptatem";
                                                kind = "alias";
                                                name = "Terrell Barrows";
                                            }}),
                                        }};
                                    }};
                                    meaning = 185897;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "necessitatibus";
                                    timestampValue = "harum";
                                }};
                            }});
                            put("explicabo", new GqlQueryParameter() {{
                                cursor = "beatae";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "modi";
                                    booleanValue = false;
                                    doubleValue = 7600.49;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "voluptatibus";
                                                namespaceId = "molestias";
                                                projectId = "officia";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "totam";
                                                    kind = "sequi";
                                                    name = "Gertrude Ryan";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "velit";
                                                    kind = "reiciendis";
                                                    name = "Drew Osinski";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "doloremque";
                                                    kind = "nisi";
                                                    name = "Rolando Veum";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("ullam", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "dicta";
                                                booleanValue = false;
                                                doubleValue = 9730.17;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7549.01;
                                                    longitude = 620.35;
                                                }};
                                                integerValue = "officiis";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "architecto";
                                                        namespaceId = "architecto";
                                                        projectId = "enim";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "rem";
                                                            kind = "perferendis";
                                                            name = "Van Wilkinson V";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "ullam";
                                                            kind = "dolore";
                                                            name = "Patti Schoen";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "assumenda";
                                                            kind = "vero";
                                                            name = "Edmund Sawayn";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "reiciendis";
                                                            kind = "ab";
                                                            name = "Javier Koch";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 202796;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "debitis";
                                                timestampValue = "vel";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 2086.83;
                                        longitude = 3577.58;
                                    }};
                                    integerValue = "voluptas";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "consequuntur";
                                            namespaceId = "officia";
                                            projectId = "reprehenderit";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "eius";
                                                kind = "ipsa";
                                                name = "Emilio Barton";
                                            }}),
                                            add(new PathElement() {{
                                                id = "neque";
                                                kind = "facere";
                                                name = "Olga Wyman";
                                            }}),
                                            add(new PathElement() {{
                                                id = "delectus";
                                                kind = "velit";
                                                name = "Dr. Peggy Murray";
                                            }}),
                                        }};
                                    }};
                                    meaning = 987890;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "possimus";
                                    timestampValue = "unde";
                                }};
                            }});
                            put("incidunt", new GqlQueryParameter() {{
                                cursor = "explicabo";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "cupiditate";
                                    booleanValue = false;
                                    doubleValue = 7614.37;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "alias";
                                                namespaceId = "quidem";
                                                projectId = "nesciunt";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "sapiente";
                                                    kind = "consequuntur";
                                                    name = "Henrietta Nienow";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "numquam";
                                                    kind = "tenetur";
                                                    name = "Pam Kirlin";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("ab", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "hic";
                                                booleanValue = false;
                                                doubleValue = 3923.19;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 7869.54;
                                                    longitude = 2212.18;
                                                }};
                                                integerValue = "ducimus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "fuga";
                                                        namespaceId = "minima";
                                                        projectId = "architecto";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "aliquid";
                                                            kind = "magni";
                                                            name = "Josephine Lakin";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 709701;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "facilis";
                                                timestampValue = "impedit";
                                            }});
                                            put("sit", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "culpa";
                                                booleanValue = false;
                                                doubleValue = 1593.93;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 2305.71;
                                                    longitude = 6447.34;
                                                }};
                                                integerValue = "modi";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "veniam";
                                                        namespaceId = "quod";
                                                        projectId = "itaque";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "quisquam";
                                                            kind = "enim";
                                                            name = "Mr. Kristopher Torphy";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "ipsa";
                                                            kind = "nobis";
                                                            name = "Randy Carter";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "debitis";
                                                            kind = "ullam";
                                                            name = "Ms. Donna Auer";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "iure";
                                                            kind = "quibusdam";
                                                            name = "Corey Walker";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 493591;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "laboriosam";
                                                timestampValue = "sed";
                                            }});
                                            put("odio", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "provident";
                                                booleanValue = false;
                                                doubleValue = 7395.08;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9838.54;
                                                    longitude = 7039.66;
                                                }};
                                                integerValue = "quidem";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "itaque";
                                                        namespaceId = "laboriosam";
                                                        projectId = "unde";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "perspiciatis";
                                                            kind = "hic";
                                                            name = "Brandon Reinger";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "recusandae";
                                                            kind = "quod";
                                                            name = "Bert Kassulke";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 849383;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "nemo";
                                                timestampValue = "illum";
                                            }});
                                            put("facilis", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "mollitia";
                                                booleanValue = false;
                                                doubleValue = 8270.51;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 9279.77;
                                                    longitude = 7189.81;
                                                }};
                                                integerValue = "pariatur";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "ad";
                                                        namespaceId = "facere";
                                                        projectId = "laborum";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "laborum";
                                                            kind = "incidunt";
                                                            name = "Vernon Abbott";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "molestias";
                                                            kind = "laborum";
                                                            name = "Sergio Grant Sr.";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "aliquid";
                                                            kind = "magnam";
                                                            name = "Lynne Weissnat";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "unde";
                                                            kind = "nulla";
                                                            name = "Shaun Gusikowski";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 548849;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "fuga";
                                                timestampValue = "facere";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 7736.59;
                                        longitude = 986.1;
                                    }};
                                    integerValue = "deserunt";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "quod";
                                            namespaceId = "laboriosam";
                                            projectId = "doloremque";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "facere";
                                                kind = "necessitatibus";
                                                name = "Miss William Bechtelar";
                                            }}),
                                        }};
                                    }};
                                    meaning = 502453;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "quae";
                                    timestampValue = "magni";
                                }};
                            }});
                            put("officiis", new GqlQueryParameter() {{
                                cursor = "sed";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "impedit";
                                    booleanValue = false;
                                    doubleValue = 559.81;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "excepturi";
                                                namespaceId = "a";
                                                projectId = "maiores";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "maiores";
                                                    kind = "alias";
                                                    name = "Jordan Carter";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "doloribus";
                                                    kind = "velit";
                                                    name = "Joy King I";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "vero";
                                                    kind = "excepturi";
                                                    name = "Mrs. Phyllis Russel Sr.";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("rerum", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "error";
                                                booleanValue = false;
                                                doubleValue = 4248.54;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 355.81;
                                                    longitude = 6641.97;
                                                }};
                                                integerValue = "laboriosam";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "ex";
                                                        namespaceId = "quas";
                                                        projectId = "veritatis";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "quae";
                                                            kind = "similique";
                                                            name = "Constance Dach";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "omnis";
                                                            kind = "sed";
                                                            name = "Kendra Hauck";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 569287;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "maiores";
                                                timestampValue = "laudantium";
                                            }});
                                            put("velit", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "amet";
                                                booleanValue = false;
                                                doubleValue = 3638.45;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 574.7;
                                                    longitude = 7879.16;
                                                }};
                                                integerValue = "tenetur";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "quas";
                                                        namespaceId = "molestiae";
                                                        projectId = "aliquid";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "a";
                                                            kind = "nobis";
                                                            name = "Steven Carter";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "eveniet";
                                                            kind = "porro";
                                                            name = "Abraham Gleason";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "eius";
                                                            kind = "sequi";
                                                            name = "Marlon Koelpin";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "repellat";
                                                            kind = "a";
                                                            name = "Emilio Waters";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 359097;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "velit";
                                                timestampValue = "officiis";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 3150.22;
                                        longitude = 6386.09;
                                    }};
                                    integerValue = "saepe";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "eum";
                                            namespaceId = "repudiandae";
                                            projectId = "accusantium";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "impedit";
                                                kind = "quasi";
                                                name = "Frederick Schaden";
                                            }}),
                                            add(new PathElement() {{
                                                id = "natus";
                                                kind = "minus";
                                                name = "Megan Kiehn";
                                            }}),
                                            add(new PathElement() {{
                                                id = "corrupti";
                                                kind = "amet";
                                                name = "Grace Padberg PhD";
                                            }}),
                                        }};
                                    }};
                                    meaning = 102316;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "molestias";
                                    timestampValue = "dolore";
                                }};
                            }});
                        }};
                        positionalBindings = new org.openapis.openapi.models.shared.GqlQueryParameter[]{{
                            add(new GqlQueryParameter() {{
                                cursor = "maiores";
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                        }};
                                    }};
                                    blobValue = "odit";
                                    booleanValue = false;
                                    doubleValue = 9368.45;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "veniam";
                                                namespaceId = "ipsam";
                                                projectId = "eaque";
                                            }};
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "veniam";
                                                    kind = "nihil";
                                                    name = "Elsie West";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "nemo";
                                                    kind = "suscipit";
                                                    name = "Paul Powlowski MD";
                                                }}),
                                            }};
                                        }};
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("sed", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "repellat";
                                                booleanValue = false;
                                                doubleValue = 9210.6;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1002.33;
                                                    longitude = 2406.96;
                                                }};
                                                integerValue = "pariatur";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "harum";
                                                        namespaceId = "dolore";
                                                        projectId = "voluptatibus";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "explicabo";
                                                            kind = "minus";
                                                            name = "Lorenzo Flatley";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "error";
                                                            kind = "non";
                                                            name = "Iris Torp";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 42615;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "expedita";
                                                timestampValue = "corrupti";
                                            }});
                                            put("eaque", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "aliquid";
                                                booleanValue = false;
                                                doubleValue = 5704.23;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 1674.35;
                                                    longitude = 2736.77;
                                                }};
                                                integerValue = "possimus";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "dolor";
                                                        namespaceId = "rerum";
                                                        projectId = "sed";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "optio";
                                                            kind = "delectus";
                                                            name = "Garrett Lubowitz";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "iste";
                                                            kind = "corporis";
                                                            name = "Martha Ankunding";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "at";
                                                            kind = "possimus";
                                                            name = "Meredith Kassulke";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "quae";
                                                            kind = "quos";
                                                            name = "Ellen Veum";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 788165;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "quas";
                                                timestampValue = "consequuntur";
                                            }});
                                            put("maiores", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "aliquid";
                                                booleanValue = false;
                                                doubleValue = 5131.85;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6658.72;
                                                    longitude = 2213.29;
                                                }};
                                                integerValue = "aliquid";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "consectetur";
                                                        namespaceId = "cumque";
                                                        projectId = "rem";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "ducimus";
                                                            kind = "adipisci";
                                                            name = "Eddie Labadie";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "voluptatum";
                                                            kind = "sit";
                                                            name = "Peter Wiegand";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "totam";
                                                            kind = "porro";
                                                            name = "Martin Kovacek";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 413780;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "alias";
                                                timestampValue = "fuga";
                                            }});
                                            put("aut", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "maxime";
                                                booleanValue = false;
                                                doubleValue = 3032.92;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 6137.02;
                                                    longitude = 3558.89;
                                                }};
                                                integerValue = "eligendi";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "placeat";
                                                        namespaceId = "voluptas";
                                                        projectId = "occaecati";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "illo";
                                                            kind = "nihil";
                                                            name = "Miss Juana Hilpert MD";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "facere";
                                                            kind = "facilis";
                                                            name = "Blanca Wintheiser";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "corrupti";
                                                            kind = "rem";
                                                            name = "Frankie Ritchie";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 775427;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "incidunt";
                                                timestampValue = "quod";
                                            }});
                                        }};
                                    }};
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 7932.82;
                                        longitude = 7814.91;
                                    }};
                                    integerValue = "id";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "excepturi";
                                            namespaceId = "occaecati";
                                            projectId = "libero";
                                        }};
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "esse";
                                                kind = "hic";
                                                name = "Edward Roberts";
                                            }}),
                                            add(new PathElement() {{
                                                id = "eligendi";
                                                kind = "recusandae";
                                                name = "Maria Larson";
                                            }}),
                                            add(new PathElement() {{
                                                id = "voluptates";
                                                kind = "tempora";
                                                name = "Ms. Susie Batz";
                                            }}),
                                            add(new PathElement() {{
                                                id = "eum";
                                                kind = "reprehenderit";
                                                name = "Guy Kovacek";
                                            }}),
                                        }};
                                    }};
                                    meaning = 645544;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "atque";
                                    timestampValue = "nostrum";
                                }};
                            }}),
                        }};
                        queryString = "atque";
                    }};;
                    partitionId = new PartitionId() {{
                        databaseId = "architecto";
                        namespaceId = "est";
                        projectId = "enim";
                    }};;
                    query = new Query() {{
                        distinctOn = new org.openapis.openapi.models.shared.PropertyReference[]{{
                            add(new PropertyReference() {{
                                name = "Amy Lynch";
                            }}),
                            add(new PropertyReference() {{
                                name = "Miranda Turcotte";
                            }}),
                            add(new PropertyReference() {{
                                name = "Benny Mosciski";
                            }}),
                        }};
                        endCursor = "quia";
                        filter = new Filter() {{
                            compositeFilter = new CompositeFilter() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{}}),
                                    add(new Filter() {{}}),
                                    add(new Filter() {{}}),
                                    add(new Filter() {{}}),
                                }};
                                op = CompositeFilterOpEnum.AND;
                            }};;
                            propertyFilter = new PropertyFilter() {{
                                op = PropertyFilterOpEnum.NOT_EQUAL;
                                property = new PropertyReference() {{
                                    name = "Darlene Keeling";
                                }};;
                                value = new Value() {{
                                    arrayValue = new ArrayValue() {{
                                        values = new org.openapis.openapi.models.shared.Value[]{{
                                            add(new Value() {{}}),
                                        }};
                                    }};;
                                    blobValue = "sit";
                                    booleanValue = false;
                                    doubleValue = 4871.48;
                                    entityValue = new Entity() {{
                                        key = new Key() {{
                                            partitionId = new PartitionId() {{
                                                databaseId = "minus";
                                                namespaceId = "asperiores";
                                                projectId = "recusandae";
                                            }};;
                                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                add(new PathElement() {{
                                                    id = "praesentium";
                                                    kind = "dicta";
                                                    name = "Karen Hyatt";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "deleniti";
                                                    kind = "sunt";
                                                    name = "Lucia Pacocha";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "modi";
                                                    kind = "sunt";
                                                    name = "Dr. Herbert Legros";
                                                }}),
                                                add(new PathElement() {{
                                                    id = "repellat";
                                                    kind = "aspernatur";
                                                    name = "Annie Conroy";
                                                }}),
                                            }};
                                        }};;
                                        properties = new java.util.HashMap<String, org.openapis.openapi.models.shared.Value>() {{
                                            put("dolorem", new Value() {{
                                                arrayValue = new ArrayValue() {{
                                                    values = new org.openapis.openapi.models.shared.Value[]{{
                                                        add(new Value() {{}}),
                                                    }};
                                                }};
                                                blobValue = "aperiam";
                                                booleanValue = false;
                                                doubleValue = 1341.73;
                                                entityValue = new Entity() {{}};
                                                excludeFromIndexes = false;
                                                geoPointValue = new LatLng() {{
                                                    latitude = 8603.62;
                                                    longitude = 3165.41;
                                                }};
                                                integerValue = "illo";
                                                keyValue = new Key() {{
                                                    partitionId = new PartitionId() {{
                                                        databaseId = "magnam";
                                                        namespaceId = "delectus";
                                                        projectId = "numquam";
                                                    }};
                                                    path = new org.openapis.openapi.models.shared.PathElement[]{{
                                                        add(new PathElement() {{
                                                            id = "nobis";
                                                            kind = "ex";
                                                            name = "Eric Lesch";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "excepturi";
                                                            kind = "aliquid";
                                                            name = "Teresa Murazik";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "dolore";
                                                            kind = "tenetur";
                                                            name = "Tamara O'Kon";
                                                        }}),
                                                        add(new PathElement() {{
                                                            id = "eveniet";
                                                            kind = "earum";
                                                            name = "Rochelle Gislason";
                                                        }}),
                                                    }};
                                                }};
                                                meaning = 489685;
                                                nullValue = ValueNullValueEnum.NULL_VALUE;
                                                stringValue = "ipsam";
                                                timestampValue = "explicabo";
                                            }});
                                        }};
                                    }};;
                                    excludeFromIndexes = false;
                                    geoPointValue = new LatLng() {{
                                        latitude = 7716.32;
                                        longitude = 3970.14;
                                    }};;
                                    integerValue = "quis";
                                    keyValue = new Key() {{
                                        partitionId = new PartitionId() {{
                                            databaseId = "facilis";
                                            namespaceId = "ipsum";
                                            projectId = "ut";
                                        }};;
                                        path = new org.openapis.openapi.models.shared.PathElement[]{{
                                            add(new PathElement() {{
                                                id = "architecto";
                                                kind = "praesentium";
                                                name = "Rodney Quitzon";
                                            }}),
                                            add(new PathElement() {{
                                                id = "illo";
                                                kind = "minus";
                                                name = "Gustavo Mayer";
                                            }}),
                                        }};
                                    }};;
                                    meaning = 881189;
                                    nullValue = ValueNullValueEnum.NULL_VALUE;
                                    stringValue = "aperiam";
                                    timestampValue = "voluptates";
                                }};;
                            }};;
                        }};;
                        kind = new org.openapis.openapi.models.shared.KindExpression[]{{
                            add(new KindExpression() {{
                                name = "Amy Mohr";
                            }}),
                            add(new KindExpression() {{
                                name = "Alfredo Gleason II";
                            }}),
                            add(new KindExpression() {{
                                name = "Ebony Donnelly IV";
                            }}),
                        }};
                        limit = 891302;
                        offset = 817454;
                        order = new org.openapis.openapi.models.shared.PropertyOrder[]{{
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DESCENDING;
                                property = new PropertyReference() {{
                                    name = "Sonya Oberbrunner";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DIRECTION_UNSPECIFIED;
                                property = new PropertyReference() {{
                                    name = "Cameron Rohan";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DIRECTION_UNSPECIFIED;
                                property = new PropertyReference() {{
                                    name = "Sandy McDermott";
                                }};
                            }}),
                            add(new PropertyOrder() {{
                                direction = PropertyOrderDirectionEnum.DESCENDING;
                                property = new PropertyReference() {{
                                    name = "Geraldine Huel";
                                }};
                            }}),
                        }};
                        projection = new org.openapis.openapi.models.shared.Projection[]{{
                            add(new Projection() {{
                                property = new PropertyReference() {{
                                    name = "Kathy Kris";
                                }};
                            }}),
                            add(new Projection() {{
                                property = new PropertyReference() {{
                                    name = "Antonio Beer";
                                }};
                            }}),
                            add(new Projection() {{
                                property = new PropertyReference() {{
                                    name = "Sharon Raynor";
                                }};
                            }}),
                        }};
                        startCursor = "est";
                    }};;
                    readOptions = new ReadOptions() {{
                        newTransaction = new TransactionOptions() {{
                            readOnly = new ReadOnly() {{
                                readTime = "aliquam";
                            }};;
                            readWrite = new ReadWrite() {{
                                previousTransaction = "delectus";
                            }};;
                        }};;
                        readConsistency = ReadOptionsReadConsistencyEnum.STRONG;
                        readTime = "voluptatum";
                        transaction = "iusto";
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "non";
                key = "ullam";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "doloribus";
                uploadProtocol = "animi";
            }};            

            DatastoreProjectsRunQueryResponse res = sdk.projects.datastoreProjectsRunQuery(req, new DatastoreProjectsRunQuerySecurity() {{
                option1 = new DatastoreProjectsRunQuerySecurityOption1("recusandae", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
