<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadResponse;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesForceReportUploadRequest req = new AndroidenterpriseDevicesForceReportUploadRequest("corrupti", "provident", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "corrupti";
                fields = "illum";
                key = "vel";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            AndroidenterpriseDevicesForceReportUploadResponse res = sdk.devices.androidenterpriseDevicesForceReportUpload(req, new AndroidenterpriseDevicesForceReportUploadSecurity("magnam", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->