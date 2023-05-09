# projects

### Available Operations

* [fcmdataProjectsAndroidAppsDeliveryDataList](#fcmdataprojectsandroidappsdeliverydatalist) - List aggregate delivery data for the given Android application.

## fcmdataProjectsAndroidAppsDeliveryDataList

List aggregate delivery data for the given Android application.

### Example Usage

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

            FcmdataProjectsAndroidAppsDeliveryDataListRequest req = new FcmdataProjectsAndroidAppsDeliveryDataListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                pageSize = 479977L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            FcmdataProjectsAndroidAppsDeliveryDataListResponse res = sdk.projects.fcmdataProjectsAndroidAppsDeliveryDataList(req, new FcmdataProjectsAndroidAppsDeliveryDataListSecurity("ab", "quis") {{
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
