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

import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption3;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeletePathParams;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteQueryParams;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteResponse;
import org.openapis.openapi.models.shared.PoolsDeleteRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsDeleteRequest req = new ReplicapoolPoolsDeleteRequest() {{
                security = new ReplicapoolPoolsDeleteSecurity() {{
                    option1 = new ReplicapoolPoolsDeleteSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ReplicapoolPoolsDeletePathParams() {{
                    poolName = "corrupti";
                    projectName = "provident";
                    zone = "distinctio";
                }};
                queryParams = new ReplicapoolPoolsDeleteQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
                request = new PoolsDeleteRequest() {{
                    abandonInstances = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            ReplicapoolPoolsDeleteResponse res = sdk.pools.replicapoolPoolsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### pools

* `replicapoolPoolsDelete` - Deletes a replica pool.
* `replicapoolPoolsGet` - Gets information about a single replica pool.
* `replicapoolPoolsInsert` - Inserts a new replica pool.
* `replicapoolPoolsList` - List all replica pools.
* `replicapoolPoolsResize` - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* `replicapoolPoolsUpdatetemplate` - Update the template used by the pool.

### replicas

* `replicapoolReplicasDelete` - Deletes a replica from the pool.
* `replicapoolReplicasGet` - Gets information about a specific replica.
* `replicapoolReplicasList` - Lists all replicas in a pool.
* `replicapoolReplicasRestart` - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
