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
                    scope = "ex";
                }};
                queryParams = new CloudassetIamPoliciesSearchAllQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "a";
                    alt = "proto";
                    callback = "omnis";
                    fields = "dicta";
                    key = "in";
                    oauthToken = "et";
                    pageSize = 7830817467687560859;
                    pageToken = "saepe";
                    prettyPrint = false;
                    query = "quasi";
                    quotaUser = "recusandae";
                    uploadType = "numquam";
                    uploadProtocol = "numquam";
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