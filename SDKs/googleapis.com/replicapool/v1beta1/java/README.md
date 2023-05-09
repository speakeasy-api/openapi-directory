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
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteRequest;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteResponse;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurity;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.ReplicapoolPoolsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PoolsDeleteRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReplicapoolPoolsDeleteRequest req = new ReplicapoolPoolsDeleteRequest("corrupti", "provident", "distinctio") {{
                poolsDeleteRequest = new PoolsDeleteRequest() {{
                    abandonInstances = new String[]{{
                        add("unde"),
                        add("nulla"),
                        add("corrupti"),
                        add("illum"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "vel";
                key = "error";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "iure";
            }};            

            ReplicapoolPoolsDeleteResponse res = sdk.pools.replicapoolPoolsDelete(req, new ReplicapoolPoolsDeleteSecurity() {{
                option1 = new ReplicapoolPoolsDeleteSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.statusCode == 200) {
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


### [pools](docs/pools/README.md)

* [replicapoolPoolsDelete](docs/pools/README.md#replicapoolpoolsdelete) - Deletes a replica pool.
* [replicapoolPoolsGet](docs/pools/README.md#replicapoolpoolsget) - Gets information about a single replica pool.
* [replicapoolPoolsInsert](docs/pools/README.md#replicapoolpoolsinsert) - Inserts a new replica pool.
* [replicapoolPoolsList](docs/pools/README.md#replicapoolpoolslist) - List all replica pools.
* [replicapoolPoolsResize](docs/pools/README.md#replicapoolpoolsresize) - Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
* [replicapoolPoolsUpdatetemplate](docs/pools/README.md#replicapoolpoolsupdatetemplate) - Update the template used by the pool.

### [replicas](docs/replicas/README.md)

* [replicapoolReplicasDelete](docs/replicas/README.md#replicapoolreplicasdelete) - Deletes a replica from the pool.
* [replicapoolReplicasGet](docs/replicas/README.md#replicapoolreplicasget) - Gets information about a specific replica.
* [replicapoolReplicasList](docs/replicas/README.md#replicapoolreplicaslist) - Lists all replicas in a pool.
* [replicapoolReplicasRestart](docs/replicas/README.md#replicapoolreplicasrestart) - Restarts a replica in a pool.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
