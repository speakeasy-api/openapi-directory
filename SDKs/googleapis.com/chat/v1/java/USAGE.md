<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption1;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption2;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurityOption3;
import org.openapis.openapi.models.operations.ChatMediaDownloadSecurity;
import org.openapis.openapi.models.operations.ChatMediaDownloadPathParams;
import org.openapis.openapi.models.operations.ChatMediaDownloadQueryParams;
import org.openapis.openapi.models.operations.ChatMediaDownloadRequest;
import org.openapis.openapi.models.operations.ChatMediaDownloadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChatMediaDownloadRequest req = new ChatMediaDownloadRequest() {{
                security = new ChatMediaDownloadSecurity() {{
                    option1 = new ChatMediaDownloadSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new ChatMediaDownloadPathParams() {{
                    resourceName = "corrupti";
                }};
                queryParams = new ChatMediaDownloadQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            ChatMediaDownloadResponse res = sdk.media.chatMediaDownload(req);

            if (res.media.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->