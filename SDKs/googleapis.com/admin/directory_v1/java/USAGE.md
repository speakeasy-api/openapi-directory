<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DirectoryAspsDeleteSecurity;
import org.openapis.openapi.models.operations.DirectoryAspsDeletePathParams;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteQueryParams;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryAspsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryAspsDeleteRequest req = new DirectoryAspsDeleteRequest() {{
                security = new DirectoryAspsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DirectoryAspsDeletePathParams() {{
                    codeId = 548814;
                    userKey = "provident";
                }};
                queryParams = new DirectoryAspsDeleteQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
            }};            

            DirectoryAspsDeleteResponse res = sdk.asps.directoryAspsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->