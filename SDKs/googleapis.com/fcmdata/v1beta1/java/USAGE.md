<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse;
import org.openapis.openapi.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FcmdataProjectsAndroidAppsDeliveryDataListRequest req = new FcmdataProjectsAndroidAppsDeliveryDataListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            FcmdataProjectsAndroidAppsDeliveryDataListResponse res = sdk.projects.fcmdataProjectsAndroidAppsDeliveryDataList(req, new FcmdataProjectsAndroidAppsDeliveryDataListSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->