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