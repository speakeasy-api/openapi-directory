<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadPathParams;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadQueryParams;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadResponse;
import org.openapis.openapi.models.shared.CreateAssetRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersAssetsUploadRequest req = new DisplayvideoAdvertisersAssetsUploadRequest() {{
                security = new DisplayvideoAdvertisersAssetsUploadSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DisplayvideoAdvertisersAssetsUploadPathParams() {{
                    advertiserId = "corrupti";
                }};
                queryParams = new DisplayvideoAdvertisersAssetsUploadQueryParams() {{
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
                request = "suscipit".getBytes();
            }};            

            DisplayvideoAdvertisersAssetsUploadResponse res = sdk.advertisers.displayvideoAdvertisersAssetsUpload(req);

            if (res.createAssetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->