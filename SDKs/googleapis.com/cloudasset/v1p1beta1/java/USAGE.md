<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllSecurity;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllPathParams;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllQueryParams;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllRequest;
import org.openapis.openapi.models.operations.CloudassetIamPoliciesSearchAllResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudassetIamPoliciesSearchAllRequest req = new CloudassetIamPoliciesSearchAllRequest() {{
                security = new CloudassetIamPoliciesSearchAllSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudassetIamPoliciesSearchAllPathParams() {{
                    scope = "corrupti";
                }};
                queryParams = new CloudassetIamPoliciesSearchAllQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    query = "deserunt";
                    quotaUser = "suscipit";
                    uploadType = "iure";
                    uploadProtocol = "magnam";
                }};
            }};            

            CloudassetIamPoliciesSearchAllResponse res = sdk.iamPolicies.cloudassetIamPoliciesSearchAll(req);

            if (res.searchAllIamPoliciesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->