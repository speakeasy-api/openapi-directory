<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreatePathParams;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.Authentication;
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
                    }};
                    blacklistPatterns = new String[]{{
                        add("excepturi"),
                        add("nisi"),
                    }};
                    displayName = "recusandae";
                    latestRun = new ScanRun() {{
                        endTime = "temporibus";
                        executionState = "EXECUTION_STATE_UNSPECIFIED";
                        hasVulnerabilities = false;
                        name = "quis";
                        progressPercent = 87129;
                        resultState = "ERROR";
                        startTime = "perferendis";
                        urlsCrawledCount = "ipsam";
                        urlsTestedCount = "repellendus";
                    }};
                    maxQps = 957156;
                    name = "quo";
                    schedule = new Schedule() {{
                        intervalDurationDays = 140350;
                        scheduleTime = "at";
                    }};
                    startingUrls = new String[]{{
                        add("maiores"),
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                    }};
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add("COMPUTE"),
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