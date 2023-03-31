<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadSecurity;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadPathParams;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadQueryParams;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadRequest;
import org.openapis.openapi.models.operations.AndroidenterpriseDevicesForceReportUploadResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidenterpriseDevicesForceReportUploadRequest req = new AndroidenterpriseDevicesForceReportUploadRequest() {{
                security = new AndroidenterpriseDevicesForceReportUploadSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AndroidenterpriseDevicesForceReportUploadPathParams() {{
                    deviceId = "corrupti";
                    enterpriseId = "provident";
                    userId = "distinctio";
                }};
                queryParams = new AndroidenterpriseDevicesForceReportUploadQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "unde";
                    alt = "proto";
                    callback = "corrupti";
                    fields = "illum";
                    key = "vel";
                    oauthToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            AndroidenterpriseDevicesForceReportUploadResponse res = sdk.devices.androidenterpriseDevicesForceReportUpload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->