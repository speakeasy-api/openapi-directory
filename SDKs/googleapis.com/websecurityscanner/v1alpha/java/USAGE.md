<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest() {{
                dollarXgafv = "2";
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "provident";
                            password = "distinctio";
                            username = "Rosalinda_Mitchell84";
                        }};
                        googleAccount = new GoogleAccount() {{
                            password = "vel";
                            username = "Linda.Oberbrunner";
                        }};
                    }};
                    blacklistPatterns = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    displayName = "delectus";
                    latestRun = new ScanRun() {{
                        endTime = "tempora";
                        executionState = "QUEUED";
                        hasVulnerabilities = false;
                        name = "molestiae";
                        progressPercent = 791725;
                        resultState = "KILLED";
                        startTime = "voluptatum";
                        urlsCrawledCount = "iusto";
                        urlsTestedCount = "excepturi";
                    }};
                    maxQps = 392785;
                    name = "recusandae";
                    schedule = new Schedule() {{
                        intervalDurationDays = 836079;
                        scheduleTime = "ab";
                    }};
                    startingUrls = new String[]{{
                        add("veritatis"),
                        add("deserunt"),
                    }};
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add("APP_ENGINE"),
                    }};
                    userAgent = "SAFARI_IPHONE";
                }};
                accessToken = "sapiente";
                alt = "proto";
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                parent = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }}            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->