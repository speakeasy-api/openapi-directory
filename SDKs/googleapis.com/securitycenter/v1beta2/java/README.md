# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest req = new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
            }};            

            SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse res = sdk.projects.securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings(req, new SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity("suscipit", "iure") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [securitycenterProjectsLocationsClustersGetContainerThreatDetectionSettings](docs/projects/README.md#securitycenterprojectslocationsclustersgetcontainerthreatdetectionsettings) - Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
* [securitycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettings](docs/projects/README.md#securitycenterprojectslocationsclustersupdatecontainerthreatdetectionsettings) - Update the ContainerThreatDetectionSettings resource.
* [securitycenterProjectsWebSecurityScannerSettingsCalculate](docs/projects/README.md#securitycenterprojectswebsecurityscannersettingscalculate) - Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
