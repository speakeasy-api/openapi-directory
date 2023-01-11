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
                    parent = "exercitationem";
                }};
                queryParams = new WebsecurityscannerProjectsScanConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "aliquid";
                    alt = "json";
                    callback = "aut";
                    fields = "repellat";
                    key = "dolorum";
                    oauthToken = "explicabo";
                    prettyPrint = true;
                    quotaUser = "mollitia";
                    uploadType = "consectetur";
                    uploadProtocol = "deserunt";
                }};
                request = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "est";
                            password = "facere";
                            username = "laudantium";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "voluptatem";
                            username = "qui";
                        }};
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "dolor";
                            }};
                        }};
                    }};
                    blacklistPatterns = new String[]() {{
                        add("officiis"),
                        add("laboriosam"),
                    }};
                    displayName = "quidem";
                    exportToSecurityCommandCenter = "ENABLED";
                    ignoreHttpStatusErrors = true;
                    managedScan = true;
                    maxQps = 8949695593592463926;
                    name = "repudiandae";
                    riskLevel = "LOW";
                    schedule = new Schedule() {{
                        intervalDurationDays = 5149194830450837313;
                        scheduleTime = "ut";
                    }};
                    startingUrls = new String[]() {{
                        add("deleniti"),
                    }};
                    staticIpScan = true;
                    userAgent = "SAFARI_IPHONE";
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
