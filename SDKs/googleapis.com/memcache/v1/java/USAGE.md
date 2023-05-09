<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersRequest;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersResponse;
import org.openapis.openapi.models.operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplyParametersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MemcacheProjectsLocationsInstancesApplyParametersRequest req = new MemcacheProjectsLocationsInstancesApplyParametersRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                applyParametersRequest = new ApplyParametersRequest() {{
                    applyAll = false;
                    nodeIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "error";
                key = "deserunt";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "magnam";
                uploadProtocol = "debitis";
            }};            

            MemcacheProjectsLocationsInstancesApplyParametersResponse res = sdk.projects.memcacheProjectsLocationsInstancesApplyParameters(req, new MemcacheProjectsLocationsInstancesApplyParametersSecurity("ipsa", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->