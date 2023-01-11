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
                    name = "placeat";
                }};
                queryParams = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "error";
                    alt = "json";
                    callback = "est";
                    fields = "reprehenderit";
                    key = "pariatur";
                    oauthToken = "hic";
                    prettyPrint = true;
                    quotaUser = "aut";
                    uploadType = "est";
                    uploadProtocol = "cupiditate";
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