<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurityOption2;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadSecurity;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadPathParams;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadQueryParams;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadRequest;
import org.openapis.openapi.models.operations.DisplayvideoMediaDownloadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoMediaDownloadRequest req = new DisplayvideoMediaDownloadRequest() {{
                security = new DisplayvideoMediaDownloadSecurity() {{
                    option1 = new DisplayvideoMediaDownloadSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new DisplayvideoMediaDownloadPathParams() {{
                    resourceName = "corrupti";
                }};
                queryParams = new DisplayvideoMediaDownloadQueryParams() {{
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

            DisplayvideoMediaDownloadResponse res = sdk.media.displayvideoMediaDownload(req);

            if (res.googleBytestreamMedia.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->