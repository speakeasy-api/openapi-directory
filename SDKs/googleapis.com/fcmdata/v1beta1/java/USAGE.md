<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListSecurity;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListPathParams;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListQueryParams;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new FcmdataProjectsAndroidAppsDeliveryDataListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
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