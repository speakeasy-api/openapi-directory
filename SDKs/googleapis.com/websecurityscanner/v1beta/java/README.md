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

import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreatePathParams;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunWarningTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunWarningTrace;
import org.openapis.openapi.models.shared.ScanRunErrorTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunErrorTrace;
import org.openapis.openapi.models.shared.ScanConfigErrorCodeEnum;
import org.openapis.openapi.models.shared.ScanConfigError;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
import org.openapis.openapi.models.shared.GoogleAccount;
import org.openapis.openapi.models.shared.CustomAccount;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest() {{
                security = new WebsecurityscannerProjectsScanConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WebsecurityscannerProjectsScanConfigsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new WebsecurityscannerProjectsScanConfigsCreateQueryParams() {{
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
                request = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "suscipit";
                            password = "iure";
                            username = "Eli96";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "tempora";
                            username = "Geraldine_Kreiger52";
                        }};
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "iusto";
                            }};
                        }};
                    }};
                    blacklistPatterns = new String[]{{
                        add("nisi"),
                        add("recusandae"),
                        add("temporibus"),
                    }};
                    displayName = "ab";
                    exportToSecurityCommandCenter = "ENABLED";
                    ignoreHttpStatusErrors = false;
                    latestRun = new ScanRun() {{
                        endTime = "veritatis";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = "TOO_MANY_REDIRECTS";
                            mostCommonHttpErrorCode = 20218;
                            scanConfigError = new ScanConfigError() {{
                                code = "CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS";
                                fieldName = "repellendus";
                            }};
                        }};
                        executionState = "FINISHED";
                        hasVulnerabilities = false;
                        name = "quo";
                        progressPercent = 140350;
                        resultState = "KILLED";
                        startTime = "at";
                        urlsCrawledCount = "maiores";
                        urlsTestedCount = "molestiae";
                        warningTraces = new org.openapis.openapi.models.shared.ScanRunWarningTrace[]{{
                            add(new ScanRunWarningTrace() {{
                                code = "BLOCKED_BY_IAP";
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = "TOO_MANY_CRAWL_RESULTS";
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = "TOO_MANY_FUZZ_TASKS";
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = "BLOCKED_BY_IAP";
                            }}),
                        }};
                    }};
                    managedScan = false;
                    maxQps = 678880;
                    name = "dicta";
                    riskLevel = "LOW";
                    schedule = new Schedule() {{
                        intervalDurationDays = 639921;
                        scheduleTime = "occaecati";
                    }};
                    startingUrls = new String[]{{
                        add("deleniti"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add("CLOUD_RUN"),
                        add("COMPUTE"),
                        add("TARGET_PLATFORM_UNSPECIFIED"),
                        add("COMPUTE"),
                    }};
                    userAgent = "CHROME_LINUX";
                }};
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req);

            if (res.scanConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `websecurityscannerProjectsScanConfigsCreate` - Creates a new ScanConfig.
* `websecurityscannerProjectsScanConfigsDelete` - Deletes an existing ScanConfig and its child resources.
* `websecurityscannerProjectsScanConfigsList` - Lists ScanConfigs under a given project.
* `websecurityscannerProjectsScanConfigsPatch` - Updates a ScanConfig. This method support partial update of a ScanConfig.
* `websecurityscannerProjectsScanConfigsScanRunsCrawledUrlsList` - List CrawledUrls under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsList` - List all FindingTypeStats under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsFindingsGet` - Gets a Finding.
* `websecurityscannerProjectsScanConfigsScanRunsFindingsList` - List Findings under a given ScanRun.
* `websecurityscannerProjectsScanConfigsScanRunsList` - Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
* `websecurityscannerProjectsScanConfigsScanRunsStop` - Stops a ScanRun. The stopped ScanRun is returned.
* `websecurityscannerProjectsScanConfigsStart` - Start a ScanRun according to the given ScanConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
