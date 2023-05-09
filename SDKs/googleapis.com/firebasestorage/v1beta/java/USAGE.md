<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseRequest;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseResponse;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasestorageProjectsBucketsAddFirebaseRequest req = new FirebasestorageProjectsBucketsAddFirebaseRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                    put("illum", "vel");
                }};
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            FirebasestorageProjectsBucketsAddFirebaseResponse res = sdk.projects.firebasestorageProjectsBucketsAddFirebase(req, new FirebasestorageProjectsBucketsAddFirebaseSecurity() {{
                option1 = new FirebasestorageProjectsBucketsAddFirebaseSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->