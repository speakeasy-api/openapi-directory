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