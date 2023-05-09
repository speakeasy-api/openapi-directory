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
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.CustomAccount;
import org.openapis.openapi.models.shared.GoogleAccount;
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "distinctio";
                            password = "quibusdam";
                            username = "Leda_Stiedemann";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "vel";
                            username = "Linda.Oberbrunner";
                        }};;
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "magnam";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    displayName = "molestiae";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.DISABLED;
                    ignoreHttpStatusErrors = false;
                    managedScan = false;
                    maxQps = 812169;
                    name = "Ted Mante";
                    riskLevel = ScanConfigRiskLevelEnum.LOW;
                    schedule = new Schedule() {{
                        intervalDurationDays = 71036;
                        scheduleTime = "quis";
                    }};;
                    startingUrls = new String[]{{
                        add("deserunt"),
                    }};
                    staticIpScan = false;
                    userAgent = ScanConfigUserAgentEnum.USER_AGENT_UNSPECIFIED;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("quod", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanConfig != null) {
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

* [websecurityscannerProjectsScanConfigsCreate](docs/projects/README.md#websecurityscannerprojectsscanconfigscreate) - Creates a new ScanConfig.
* [websecurityscannerProjectsScanConfigsDelete](docs/projects/README.md#websecurityscannerprojectsscanconfigsdelete) - Deletes an existing ScanConfig and its child resources.
* [websecurityscannerProjectsScanConfigsList](docs/projects/README.md#websecurityscannerprojectsscanconfigslist) - Lists ScanConfigs under a given project.
* [websecurityscannerProjectsScanConfigsPatch](docs/projects/README.md#websecurityscannerprojectsscanconfigspatch) - Updates a ScanConfig. This method support partial update of a ScanConfig.
* [websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunscrawledurlslist) - List CrawledUrls under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingtypestatslist) - List all FindingTypeStats under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsGet](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingsget) - Gets a Finding.
* [websecurityscannerProjectsScanConfigsScanRunsFindingsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsfindingslist) - List Findings under a given ScanRun.
* [websecurityscannerProjectsScanConfigsScanRunsList](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunslist) - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* [websecurityscannerProjectsScanConfigsScanRunsStop](docs/projects/README.md#websecurityscannerprojectsscanconfigsscanrunsstop) - Stops a ScanRun. The stopped ScanRun is returned.
* [websecurityscannerProjectsScanConfigsStart](docs/projects/README.md#websecurityscannerprojectsscanconfigsstart) - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
