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
                    parent = "sit";
                }};
                queryParams = new WebsecurityscannerProjectsScanConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "dicta";
                            password = "debitis";
                            username = "voluptatum";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "et";
                            username = "ut";
                        }};
                    }};
                    blacklistPatterns = new String[]() {{
                        add("et"),
                        add("voluptate"),
                        add("iste"),
                    }};
                    displayName = "vitae";
                    latestRun = new ScanRun() {{
                        endTime = "totam";
                        executionState = "EXECUTION_STATE_UNSPECIFIED";
                        hasVulnerabilities = false;
                        name = "debitis";
                        progressPercent = 3706853784096366226;
                        resultState = "RESULT_STATE_UNSPECIFIED";
                        startTime = "dolore";
                        urlsCrawledCount = "id";
                        urlsTestedCount = "aspernatur";
                    }};
                    maxQps = 2914295034816259174;
                    name = "totam";
                    schedule = new Schedule() {{
                        intervalDurationDays = 6745438398739480977;
                        scheduleTime = "quis";
                    }};
                    startingUrls = new String[]() {{
                        add("aut"),
                        add("odit"),
                    }};
                    targetPlatforms = new openapisdk.models.shared.ScanConfigTargetPlatformsEnum[]() {{
                        add("CLOUD_FUNCTIONS"),
                        add("COMPUTE"),
                        add("CLOUD_FUNCTIONS"),
                    }};
                    userAgent = "USER_AGENT_UNSPECIFIED";
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
