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
                    poolName = "corrupti";
                    projectName = "ut";
                    zone = "quia";
                }};
                queryParams = new ReplicapoolPoolsDeleteQueryParams() {{
                    alt = "json";
                    fields = "aliquam";
                    key = "omnis";
                    oauthToken = "inventore";
                    prettyPrint = true;
                    quotaUser = "provident";
                    userIp = "omnis";
                }};
                request = new PoolsDeleteRequest() {{
                    abandonInstances = new String[]() {{
                        add("aperiam"),
                        add("sint"),
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