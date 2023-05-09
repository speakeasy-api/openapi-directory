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