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

            StorageBucketAccessControlsDeleteRequest req = new StorageBucketAccessControlsDeleteRequest() {{
                security = new StorageBucketAccessControlsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new StorageBucketAccessControlsDeletePathParams() {{
                    bucket = "molestias";
                    entity = "excepturi";
                }};
                queryParams = new StorageBucketAccessControlsDeleteQueryParams() {{
                    alt = "json";
                    fields = "quis";
                    key = "blanditiis";
                    oauthToken = "eius";
                    prettyPrint = true;
                    quotaUser = "accusamus";
                    userIp = "dicta";
                }};
            }};

            StorageBucketAccessControlsDeleteResponse res = sdk.bucketAccessControls.storageBucketAccessControlsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->