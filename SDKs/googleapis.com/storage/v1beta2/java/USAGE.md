<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeletePathParams;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteQueryParams;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteRequest;
import org.openapis.openapi.models.operations.StorageBucketAccessControlsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    bucket = "corrupti";
                    entity = "provident";
                }};
                queryParams = new StorageBucketAccessControlsDeleteQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
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