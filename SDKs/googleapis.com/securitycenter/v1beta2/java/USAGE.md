<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest req = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest() {{
                security = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse res = sdk.projects.securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req);

            if (res.containerThreatDetectionSettings.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->