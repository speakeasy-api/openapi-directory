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
                    parent = "sit";
                }};
                queryParams = new RunNamespacesAuthorizeddomainsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    pageSize = 8274930044578894929;
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
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