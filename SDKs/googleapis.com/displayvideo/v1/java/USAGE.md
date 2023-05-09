<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateAssetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersAssetsUploadRequest req = new DisplayvideoAdvertisersAssetsUploadRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "distinctio".getBytes();
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            DisplayvideoAdvertisersAssetsUploadResponse res = sdk.advertisers.displayvideoAdvertisersAssetsUpload(req, new DisplayvideoAdvertisersAssetsUploadSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->