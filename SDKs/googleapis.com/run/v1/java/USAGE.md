<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListSecurity;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListPathParams;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListQueryParams;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new RunNamespacesAuthorizeddomainsListQueryParams() {{
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
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
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