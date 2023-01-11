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
                    apkVersionCode = 8717895732742165505;
                    editId = "voluptas";
                    language = "culpa";
                    packageName = "expedita";
                }};
                queryParams = new AndroidpublisherEditsApklistingsDeleteQueryParams() {{
                    alt = "json";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    userIp = "nihil";
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