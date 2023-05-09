# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                allocateIdsRequest = new AllocateIdsRequest() {{
                    databaseId = "distinctio";
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "unde";
                                namespaceId = "nulla";
                                projectId = "corrupti";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "vel";
                                    kind = "error";
                                    name = "Rick Kertzmann";
                                }}),
                                add(new PathElement() {{
                                    id = "ipsa";
                                    kind = "delectus";
                                    name = "Laurie Kreiger";
                                }}),
                                add(new PathElement() {{
                                    id = "voluptatum";
                                    kind = "iusto";
                                    name = "Charlie Walsh II";
                                }}),
                                add(new PathElement() {{
                                    id = "veritatis";
                                    kind = "deserunt";
                                    name = "Roberta Sipes";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "odit";
                                namespaceId = "at";
                                projectId = "at";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "molestiae";
                                    kind = "quod";
                                    name = "Erik Lebsack";
                                }}),
                                add(new PathElement() {{
                                    id = "dicta";
                                    kind = "nam";
                                    name = "Seth Conroy";
                                }}),
                                add(new PathElement() {{
                                    id = "optio";
                                    kind = "totam";
                                    name = "Lucy Krajcik";
                                }}),
                                add(new PathElement() {{
                                    id = "impedit";
                                    kind = "cum";
                                    name = "Edna Mante II";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "natus";
                                namespaceId = "sed";
                                projectId = "iste";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "natus";
                                    kind = "laboriosam";
                                    name = "Elias Parker";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                databaseId = "iste";
                                namespaceId = "iure";
                                projectId = "saepe";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "architecto";
                                    kind = "ipsa";
                                    name = "Carlton O'Hara";
                                }}),
                                add(new PathElement() {{
                                    id = "dolorem";
                                    kind = "corporis";
                                    name = "Della Halvorson";
                                }}),
                                add(new PathElement() {{
                                    id = "minima";
                                    kind = "excepturi";
                                    name = "Charlene Nicolas";
                                }}),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "mollitia";
                uploadType = "occaecati";
                uploadProtocol = "numquam";
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req, new DatastoreProjectsAllocateIdsSecurity() {{
                option1 = new DatastoreProjectsAllocateIdsSecurityOption1("commodi", "quam") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datastoreProjectsAllocateIds](docs/projects/README.md#datastoreprojectsallocateids) - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* [datastoreProjectsBeginTransaction](docs/projects/README.md#datastoreprojectsbegintransaction) - Begins a new transaction.
* [datastoreProjectsCommit](docs/projects/README.md#datastoreprojectscommit) - Commits a transaction, optionally creating, deleting or modifying some entities.
* [datastoreProjectsExport](docs/projects/README.md#datastoreprojectsexport) - Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
* [datastoreProjectsImport](docs/projects/README.md#datastoreprojectsimport) - Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
* [datastoreProjectsIndexesCreate](docs/projects/README.md#datastoreprojectsindexescreate) - Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
* [datastoreProjectsIndexesDelete](docs/projects/README.md#datastoreprojectsindexesdelete) - Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
* [datastoreProjectsIndexesGet](docs/projects/README.md#datastoreprojectsindexesget) - Gets an index.
* [datastoreProjectsIndexesList](docs/projects/README.md#datastoreprojectsindexeslist) - Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
* [datastoreProjectsLookup](docs/projects/README.md#datastoreprojectslookup) - Looks up entities by key.
* [datastoreProjectsOperationsCancel](docs/projects/README.md#datastoreprojectsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [datastoreProjectsOperationsDelete](docs/projects/README.md#datastoreprojectsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [datastoreProjectsOperationsGet](docs/projects/README.md#datastoreprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [datastoreProjectsOperationsList](docs/projects/README.md#datastoreprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [datastoreProjectsReserveIds](docs/projects/README.md#datastoreprojectsreserveids) - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* [datastoreProjectsRollback](docs/projects/README.md#datastoreprojectsrollback) - Rolls back a transaction.
* [datastoreProjectsRunAggregationQuery](docs/projects/README.md#datastoreprojectsrunaggregationquery) - Runs an aggregation query.
* [datastoreProjectsRunQuery](docs/projects/README.md#datastoreprojectsrunquery) - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
