# projects

### Available Operations

* [securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings) - Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
* [securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings](#securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings) - Update the ContainerThreatDetectionSettings resource.
* [securitycenterProjectsWebSecurityScannerSettingsCalculate](#securitycenterprojectswebsecurityscannersettingscalculate) - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

## securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings

Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest req = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse res = sdk.projects.securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req, new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.containerThreatDetectionSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings

Update the ContainerThreatDetectionSettings resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Config;
import org.openapis.openapi.models.shared.ConfigModuleEnablementStateEnum;
import org.openapis.openapi.models.shared.ContainerThreatDetectionSettingsInput;
import org.openapis.openapi.models.shared.ContainerThreatDetectionSettingsServiceEnablementStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest req = new SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest("recusandae") {{
                dollarXgafv = XgafvEnum.TWO;
                containerThreatDetectionSettingsInput = new ContainerThreatDetectionSettingsInput() {{
                    modules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Config>() {{
                        put("quis", new Config() {{
                            moduleEnablementState = ConfigModuleEnablementStateEnum.ENABLEMENT_STATE_UNSPECIFIED;
                            value = new java.util.HashMap<String, Object>() {{
                                put("perferendis", "ipsam");
                                put("repellendus", "sapiente");
                                put("quo", "odit");
                            }};
                        }});
                    }};
                    name = "Wilfred Wolff";
                    serviceEnablementState = ContainerThreatDetectionSettingsServiceEnablementStateEnum.DISABLED;
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                key = "dicta";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "officia";
                updateMask = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse res = sdk.projects.securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings(req, new SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.containerThreatDetectionSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## securitycenterProjectsWebSecurityScannerSettingsCalculate

Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest;
import org.openapis.openapi.models.operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse;
import org.openapis.openapi.models.operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest req = new SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse res = sdk.projects.securitycenterProjectsWebSecurityScannerSettingsCalculate(req, new SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity("aspernatur", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.webSecurityScannerSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
