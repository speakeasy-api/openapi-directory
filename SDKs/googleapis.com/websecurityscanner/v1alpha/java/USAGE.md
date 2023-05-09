<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.CustomAccount;
import org.openapis.openapi.models.shared.GoogleAccount;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebsecurityscannerProjectsScanConfigsCreateRequest req = new WebsecurityscannerProjectsScanConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                scanConfig = new ScanConfig() {{
                    authentication = new Authentication() {{
                        customAccount = new CustomAccount() {{
                            loginUrl = "distinctio";
                            password = "quibusdam";
                            username = "Leda_Stiedemann";
                        }};;
                        googleAccount = new GoogleAccount() {{
                            password = "vel";
                            username = "Linda.Oberbrunner";
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    displayName = "delectus";
                    latestRun = new ScanRun() {{
                        endTime = "tempora";
                        executionState = ScanRunExecutionStateEnum.QUEUED;
                        hasVulnerabilities = false;
                        name = "Alexandra Schulist";
                        progressPercent = 568045;
                        resultState = ScanRunResultStateEnum.SUCCESS;
                        startTime = "recusandae";
                        urlsCrawledCount = "temporibus";
                        urlsTestedCount = "ab";
                    }};;
                    maxQps = 337396;
                    name = "Iris Aufderhar";
                    schedule = new Schedule() {{
                        intervalDurationDays = 957156;
                        scheduleTime = "quo";
                    }};;
                    startingUrls = new String[]{{
                        add("at"),
                    }};
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.CLOUD_FUNCTIONS),
                        add(ScanConfigTargetPlatformsEnum.COMPUTE),
                        add(ScanConfigTargetPlatformsEnum.CLOUD_RUN),
                        add(ScanConfigTargetPlatformsEnum.CLOUD_FUNCTIONS),
                    }};
                    userAgent = ScanConfigUserAgentEnum.CHROME_LINUX;
                }};;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "dicta";
                key = "nam";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "fugit";
                uploadProtocol = "deleniti";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("hic", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scanConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->