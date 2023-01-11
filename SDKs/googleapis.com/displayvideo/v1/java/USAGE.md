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
                    advertiserId = "autem";
                }};
                queryParams = new DisplayvideoAdvertisersAssetsUploadQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "cumque";
                    alt = "json";
                    callback = "deleniti";
                    fields = "qui";
                    key = "et";
                    oauthToken = "quia";
                    prettyPrint = false;
                    quotaUser = "quidem";
                    uploadType = "dolorum";
                    uploadProtocol = "blanditiis";
                }};
                request = "voluptatem".getBytes();
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