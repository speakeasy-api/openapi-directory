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

import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption1;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurityOption2;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsSecurity;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsPathParams;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsQueryParams;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsRequest;
import org.openapis.openapi.models.operations.DatastoreProjectsAllocateIdsResponse;
import org.openapis.openapi.models.shared.AllocateIdsRequest;
import org.openapis.openapi.models.shared.Key;
import org.openapis.openapi.models.shared.PathElement;
import org.openapis.openapi.models.shared.PartitionId;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatastoreProjectsAllocateIdsRequest req = new DatastoreProjectsAllocateIdsRequest() {{
                security = new DatastoreProjectsAllocateIdsSecurity() {{
                    option1 = new DatastoreProjectsAllocateIdsSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DatastoreProjectsAllocateIdsPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new DatastoreProjectsAllocateIdsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AllocateIdsRequest() {{
                    keys = new org.openapis.openapi.models.shared.Key[]{{
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "iure";
                                projectId = "magnam";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "ipsa";
                                    kind = "delectus";
                                    name = "tempora";
                                }}),
                                add(new PathElement() {{
                                    id = "suscipit";
                                    kind = "molestiae";
                                    name = "minus";
                                }}),
                                add(new PathElement() {{
                                    id = "placeat";
                                    kind = "voluptatum";
                                    name = "iusto";
                                }}),
                                add(new PathElement() {{
                                    id = "excepturi";
                                    kind = "nisi";
                                    name = "recusandae";
                                }}),
                            }};
                        }}),
                        add(new Key() {{
                            partitionId = new PartitionId() {{
                                namespaceId = "temporibus";
                                projectId = "ab";
                            }};
                            path = new org.openapis.openapi.models.shared.PathElement[]{{
                                add(new PathElement() {{
                                    id = "veritatis";
                                    kind = "deserunt";
                                    name = "perferendis";
                                }}),
                                add(new PathElement() {{
                                    id = "ipsam";
                                    kind = "repellendus";
                                    name = "sapiente";
                                }}),
                            }};
                        }}),
                    }};
                }};
            }};            

            DatastoreProjectsAllocateIdsResponse res = sdk.projects.datastoreProjectsAllocateIds(req);

            if (res.allocateIdsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `datastoreProjectsAllocateIds` - Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
* `datastoreProjectsBeginTransaction` - Begins a new transaction.
* `datastoreProjectsCommit` - Commits a transaction, optionally creating, deleting or modifying some entities.
* `datastoreProjectsLookup` - Looks up entities by key.
* `datastoreProjectsReserveIds` - Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
* `datastoreProjectsRollback` - Rolls back a transaction.
* `datastoreProjectsRunAggregationQuery` - Runs an aggregation query.
* `datastoreProjectsRunQuery` - Queries for entities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
