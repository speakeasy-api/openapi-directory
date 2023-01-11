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
                    parent = "qui";
                }};
                queryParams = new WebsecurityscannerProjectsScanConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "voluptatum";
                    alt = "media";
                    callback = "sed";
                    fields = "nihil";
                    key = "totam";
                    oauthToken = "assumenda";
                    prettyPrint = false;
                    quotaUser = "omnis";
                    uploadType = "enim";
                    uploadProtocol = "et";
                }};
                request = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "fuga";
                            password = "accusantium";
                            username = "sit";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "autem";
                            username = "odio";
                        }};
                    }};
                    blacklistPatterns = new String[]() {{
                        add("adipisci"),
                        add("incidunt"),
                    }};
                    displayName = "veniam";
                    latestRun = new ScanRun() {{
                        endTime = "rerum";
                        executionState = "FINISHED";
                        hasVulnerabilities = true;
                        name = "hic";
                        progressPercent = 5624870784759078862;
                        resultState = "ERROR";
                        startTime = "deserunt";
                        urlsCrawledCount = "quia";
                        urlsTestedCount = "officia";
                    }};
                    maxQps = 175858308072815707;
                    name = "aut";
                    schedule = new Schedule() {{
                        intervalDurationDays = 3180858640753924665;
                        scheduleTime = "quidem";
                    }};
                    startingUrls = new String[]() {{
                        add("quaerat"),
                        add("sequi"),
                    }};
                    targetPlatforms = new openapisdk.models.shared.ScanConfigTargetPlatformsEnum[]() {{
                        add("CLOUD_FUNCTIONS"),
                        add("CLOUD_FUNCTIONS"),
                        add("CLOUD_RUN"),
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