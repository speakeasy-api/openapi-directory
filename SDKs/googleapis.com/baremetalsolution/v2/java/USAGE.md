<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    location = "corrupti";
                }};
                queryParams = new BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams() {{
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

            BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse res = sdk.projects.baremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(req);

            if (res.fetchInstanceProvisioningSettingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->