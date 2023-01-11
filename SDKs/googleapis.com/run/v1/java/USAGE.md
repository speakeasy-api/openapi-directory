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

            RunNamespacesAuthorizeddomainsListRequest req = new RunNamespacesAuthorizeddomainsListRequest() {{
                security = new RunNamespacesAuthorizeddomainsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RunNamespacesAuthorizeddomainsListPathParams() {{
                    parent = "ut";
                }};
                queryParams = new RunNamespacesAuthorizeddomainsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "molestiae";
                    alt = "media";
                    callback = "porro";
                    fields = "aut";
                    key = "enim";
                    oauthToken = "iusto";
                    pageSize = 5267949312635929379;
                    pageToken = "doloribus";
                    prettyPrint = false;
                    quotaUser = "excepturi";
                    uploadType = "id";
                    uploadProtocol = "quo";
                }};
            }};

            RunNamespacesAuthorizeddomainsListResponse res = sdk.namespaces.runNamespacesAuthorizeddomainsList(req);

            if (res.listAuthorizedDomainsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->