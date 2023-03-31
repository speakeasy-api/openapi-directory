<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebasePathParams;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseQueryParams;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsAddFirebaseRequest req = new FirebasestorageProjectsBucketsAddFirebaseRequest() {{
                security = new FirebasestorageProjectsBucketsAddFirebaseSecurity() {{
                    option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasestorageProjectsBucketsAddFirebasePathParams() {{
                    bucket = "corrupti";
                }};
                queryParams = new FirebasestorageProjectsBucketsAddFirebaseQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            FirebasestorageProjectsBucketsAddFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsAddFirebase(req);

            if (res.bucket.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->