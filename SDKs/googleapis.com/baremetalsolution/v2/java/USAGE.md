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

            BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest req = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest() {{
                security = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams() {{
                    location = "nobis";
                }};
                queryParams = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "accusamus";
                    alt = "json";
                    callback = "hic";
                    fields = "sed";
                    key = "enim";
                    oauthToken = "eum";
                    prettyPrint = true;
                    quotaUser = "expedita";
                    uploadType = "et";
                    uploadProtocol = "quasi";
                }};
            }};

            BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req);

            if (res.fetchInstanceProvisioningSettingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->