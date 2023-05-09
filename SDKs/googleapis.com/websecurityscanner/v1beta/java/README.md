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
import org.openapis.openapi.models.shared.ScanConfigError;
import org.openapis.openapi.models.shared.ScanConfigErrorCodeEnum;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunErrorTrace;
import org.openapis.openapi.models.shared.ScanRunErrorTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRunWarningTrace;
import org.openapis.openapi.models.shared.ScanRunWarningTraceCodeEnum;
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
                    latestRun = new ScanRun() {{
                        endTime = "placeat";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = ScanRunErrorTraceCodeEnum.TIMED_OUT_WHILE_SCANNING;
                            mostCommonHttpErrorCode = 479977;
                            scanConfigError = new ScanConfigError() {{
                                code = ScanConfigErrorCodeEnum.MALFORMED_RESOURCE_NAME;
                                fieldName = "nisi";
                            }};;
                        }};;
                        executionState = ScanRunExecutionStateEnum.FINISHED;
                        hasVulnerabilities = false;
                        name = "Miss Raymond Hauck III";
                        progressPercent = 832620;
                        resultState = ScanRunResultStateEnum.KILLED;
                        startTime = "quo";
                        urlsCrawledCount = "odit";
                        urlsTestedCount = "at";
                        warningTraces = new org.openapis.openapi.models.shared.ScanRunWarningTrace[]{{
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.TOO_MANY_CRAWL_RESULTS;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.BLOCKED_BY_IAP;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.BLOCKED_BY_IAP;
                            }}),
                        }};
                    }};;
                    managedScan = false;
                    maxQps = 461479;
                    name = "Miss Lowell Parisian";
                    riskLevel = ScanConfigRiskLevelEnum.NORMAL;
                    schedule = new Schedule() {{
                        intervalDurationDays = 143353;
                        scheduleTime = "deleniti";
                    }};;
                    startingUrls = new String[]{{
                        add("optio"),
                        add("totam"),
                        add("beatae"),
                        add("commodi"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                        add(ScanConfigTargetPlatformsEnum.TARGET_PLATFORM_UNSPECIFIED),
                    }};
                    userAgent = ScanConfigUserAgentEnum.SAFARI_IPHONE;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("iste", "dolor") {{
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
