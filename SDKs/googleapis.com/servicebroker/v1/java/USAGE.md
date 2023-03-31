<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyPathParams;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyQueryParams;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ServicebrokerGetIamPolicyResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicebrokerGetIamPolicyRequest req = new ServicebrokerGetIamPolicyRequest() {{
                security = new ServicebrokerGetIamPolicySecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicebrokerGetIamPolicyPathParams() {{
                    resource = "corrupti";
                }};
                queryParams = new ServicebrokerGetIamPolicyQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    optionsRequestedPolicyVersion = 423655;
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
            }};            

            ServicebrokerGetIamPolicyResponse res = sdk.v1.servicebrokerGetIamPolicy(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->