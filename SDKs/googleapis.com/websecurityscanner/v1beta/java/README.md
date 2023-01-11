# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    parent = "repudiandae";
                }};
                queryParams = new WebsecurityscannerProjectsScanConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "id";
                    alt = "proto";
                    callback = "quod";
                    fields = "laudantium";
                    key = "et";
                    oauthToken = "quidem";
                    prettyPrint = true;
                    quotaUser = "quod";
                    uploadType = "asperiores";
                    uploadProtocol = "quis";
                }};
                request = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "aut";
                            password = "cupiditate";
                            username = "exercitationem";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "odit";
                            username = "excepturi";
                        }};
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "sequi";
                            }};
                        }};
                    }};
                    blacklistPatterns = new String[]() {{
                        add("doloribus"),
                    }};
                    displayName = "libero";
                    exportToSecurityCommandCenter = "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED";
                    ignoreHttpStatusErrors = true;
                    latestRun = new ScanRun() {{
                        endTime = "qui";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = "TOO_MANY_HTTP_ERRORS";
                            mostCommonHttpErrorCode = 5388339456545111320;
                            scanConfigError = new ScanConfigError() {{
                                code = "SCAN_NOT_RUNNING";
                                fieldName = "aperiam";
                            }};
                        }};
                        executionState = "EXECUTION_STATE_UNSPECIFIED";
                        hasVulnerabilities = false;
                        name = "aut";
                        progressPercent = 5893662065655002509;
                        resultState = "KILLED";
                        startTime = "ut";
                        urlsCrawledCount = "iure";
                        urlsTestedCount = "perspiciatis";
                        warningTraces = new openapisdk.models.shared.ScanRunWarningTrace[]() {{
                            add(new ScanRunWarningTrace() {{
                                code = "TOO_MANY_CRAWL_RESULTS";
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = "INSUFFICIENT_CRAWL_RESULTS";
                            }}),
                        }};
                    }};
                    managedScan = false;
                    maxQps = 244299528148468969;
                    name = "sint";
                    riskLevel = "NORMAL";
                    schedule = new Schedule() {{
                        intervalDurationDays = 144954692658273286;
                        scheduleTime = "neque";
                    }};
                    startingUrls = new String[]() {{
                        add("et"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new openapisdk.models.shared.ScanConfigTargetPlatformsEnum[]() {{
                        add("APP_ENGINE"),
                        add("CLOUD_RUN"),
                    }};
                    userAgent = "CHROME_ANDROID";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
