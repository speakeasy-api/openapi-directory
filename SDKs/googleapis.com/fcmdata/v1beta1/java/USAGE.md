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

            FcmdataProjectsAndroidAppsDeliveryDataListRequest req = new FcmdataProjectsAndroidAppsDeliveryDataListRequest() {{
                security = new FcmdataProjectsAndroidAppsDeliveryDataListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new FcmdataProjectsAndroidAppsDeliveryDataListPathParams() {{
                    parent = "sit";
                }};
                queryParams = new FcmdataProjectsAndroidAppsDeliveryDataListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    pageSize = 8274930044578894929;
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
            }};

            FcmdataProjectsAndroidAppsDeliveryDataListResponse res = sdk.projects.fcmdataProjectsAndroidAppsDeliveryDataList(req);

            if (res.googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->