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

            ServicebrokerProjectsBrokersCreateRequest req = new ServicebrokerProjectsBrokersCreateRequest() {{
                security = new ServicebrokerProjectsBrokersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ServicebrokerProjectsBrokersCreatePathParams() {{
                    parent = "nihil";
                }};
                queryParams = new ServicebrokerProjectsBrokersCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "enim";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "qui";
                    key = "omnis";
                    oauthToken = "quae";
                    prettyPrint = true;
                    quotaUser = "nesciunt";
                    uploadType = "dolorem";
                    uploadProtocol = "fugit";
                }};
                request = new GoogleCloudServicebrokerV1beta1Broker() {{
                    createTime = "qui";
                    name = "dolores";
                    title = "fugiat";
                    url = "quod";
                }};
            }};

            ServicebrokerProjectsBrokersCreateResponse res = sdk.projects.servicebrokerProjectsBrokersCreate(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->