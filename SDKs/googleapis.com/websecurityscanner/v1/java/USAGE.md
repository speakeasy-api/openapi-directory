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
                    managedScan = false;
                    maxQps = 6392442863481646880;
                    name = "vel";
                    riskLevel = "RISK_LEVEL_UNSPECIFIED";
                    schedule = new Schedule() {{
                        intervalDurationDays = 6303220950515014660;
                        scheduleTime = "id";
                    }};
                    startingUrls = new String[]() {{
                        add("accusantium"),
                    }};
                    staticIpScan = false;
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