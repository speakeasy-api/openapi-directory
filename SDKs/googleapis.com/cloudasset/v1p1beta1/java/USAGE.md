<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllSecurity;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllRequest;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetIamPoliciesSearchAllRequest req = new CloudassetIamPoliciesSearchAllRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                pageSize = 847252;
                pageToken = "vel";
                prettyPrint = false;
                query = "error";
                quotaUser = "deserunt";
                scope = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            CloudassetIamPoliciesSearchAllResponse res = sdk.iamPolicies.cloudassetIamPoliciesSearchAll(req, new CloudassetIamPoliciesSearchAllSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAllIamPoliciesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->