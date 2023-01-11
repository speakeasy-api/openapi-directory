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
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "dolorem";
                            }};
                        }};
                    }};
                    blacklistPatterns = new String[]() {{
                        add("voluptate"),
                        add("iste"),
                    }};
                    displayName = "vitae";
                    exportToSecurityCommandCenter = "DISABLED";
                    ignoreHttpStatusErrors = true;
                    latestRun = new ScanRun() {{
                        endTime = "illum";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = "AUTHENTICATION_CONFIG_ISSUE";
                            mostCommonHttpErrorCode = 3706853784096366226;
                            scanConfigError = new ScanConfigError() {{
                                code = "CANNOT_USE_GOOGLE_COM_ACCOUNT";
                                fieldName = "dolore";
                            }};
                        }};
                        executionState = "EXECUTION_STATE_UNSPECIFIED";
                        hasVulnerabilities = true;
                        name = "accusantium";
                        progressPercent = 1395437218309923052;
                        resultState = "RESULT_STATE_UNSPECIFIED";
                        startTime = "quis";
                        urlsCrawledCount = "est";
                        urlsTestedCount = "aut";
                        warningTraces = new openapisdk.models.shared.ScanRunWarningTrace[]() {{
                            add(new ScanRunWarningTrace() {{
                                code = "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN";
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = "CODE_UNSPECIFIED";
                            }}),
                        }};
                    }};
                    managedScan = true;
                    maxQps = 1059542851699319360;
                    name = "illo";
                    riskLevel = "LOW";
                    schedule = new Schedule() {{
                        intervalDurationDays = 7845762441295307478;
                        scheduleTime = "autem";
                    }};
                    startingUrls = new String[]() {{
                        add("nobis"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new openapisdk.models.shared.ScanConfigTargetPlatformsEnum[]() {{
                        add("TARGET_PLATFORM_UNSPECIFIED"),
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