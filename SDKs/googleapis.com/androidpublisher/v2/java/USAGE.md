<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteSecurity;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeletePathParams;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteQueryParams;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsDeleteRequest req = new AndroidpublisherEditsApklistingsDeleteRequest() {{
                security = new AndroidpublisherEditsApklistingsDeleteSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidpublisherEditsApklistingsDeletePathParams() {{
                    apkVersionCode = 548814;
                    editId = "provident";
                    language = "distinctio";
                    packageName = "quibusdam";
                }};
                queryParams = new AndroidpublisherEditsApklistingsDeleteQueryParams() {{
                    alt = "json";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    userIp = "vel";
                }};
            }};            

            AndroidpublisherEditsApklistingsDeleteResponse res = sdk.edits.androidpublisherEditsApklistingsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->