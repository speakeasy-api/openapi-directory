<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsDeleteRequest req = new AndroidpublisherEditsApklistingsDeleteRequest() {{
                alt = "json";
                apkVersionCode = 548814;
                editId = "provident";
                fields = "distinctio";
                key = "quibusdam";
                language = "unde";
                oauthToken = "nulla";
                packageName = "corrupti";
                prettyPrint = false;
                quotaUser = "illum";
                userIp = "vel";
            }}            

            AndroidpublisherEditsApklistingsDeleteResponse res = sdk.edits.androidpublisherEditsApklistingsDelete(req, new AndroidpublisherEditsApklistingsDeleteSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->