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

            DatatransferApplicationsGetRequest req = new DatatransferApplicationsGetRequest() {{
                security = new DatatransferApplicationsGetSecurity() {{
                    option1 = new DatatransferApplicationsGetSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DatatransferApplicationsGetPathParams() {{
                    applicationId = "reiciendis";
                }};
                queryParams = new DatatransferApplicationsGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "qui";
                    alt = "json";
                    callback = "sequi";
                    fields = "ut";
                    key = "aperiam";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "nesciunt";
                    uploadType = "tenetur";
                    uploadProtocol = "fugiat";
                }};
            }};

            DatatransferApplicationsGetResponse res = sdk.applications.datatransferApplicationsGet(req);

            if (res.application.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->