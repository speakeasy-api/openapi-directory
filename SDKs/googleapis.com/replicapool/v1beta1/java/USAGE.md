<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    poolName = "sit";
                    projectName = "voluptas";
                    zone = "culpa";
                }};
                queryParams = new ReplicapoolPoolsDeleteQueryParams() {{
                    alt = "json";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    userIp = "et";
                }};
                request = new PoolsDeleteRequest() {{
                    abandonInstances = new String[]() {{
                        add("rerum"),
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