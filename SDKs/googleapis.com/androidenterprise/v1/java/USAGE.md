<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadSecurity;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesForceReportUploadRequest req = new AndroidenterpriseDevicesForceReportUploadRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                callback = "quibusdam";
                deviceId = "unde";
                enterpriseId = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
                userId = "iure";
            }}            

            AndroidenterpriseDevicesForceReportUploadResponse res = sdk.devices.androidenterpriseDevicesForceReportUpload(req, new AndroidenterpriseDevicesForceReportUploadSecurity() {{
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