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
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.ScanConfigError;
import org.openapis.openapi.models.shared.ScanConfigErrorCodeEnum;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanRun;
import org.openapis.openapi.models.shared.ScanRunErrorTrace;
import org.openapis.openapi.models.shared.ScanRunErrorTraceCodeEnum;
import org.openapis.openapi.models.shared.ScanRunExecutionStateEnum;
import org.openapis.openapi.models.shared.ScanRunResultStateEnum;
import org.openapis.openapi.models.shared.ScanRunWarningTrace;
import org.openapis.openapi.models.shared.ScanRunWarningTraceCodeEnum;
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
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "magnam";
                            }};;
                        }};;
                    }};;
                    blacklistPatterns = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    displayName = "molestiae";
                    exportToSecurityCommandCenter = ScanConfigExportToSecurityCommandCenterEnum.DISABLED;
                    ignoreHttpStatusErrors = false;
                    latestRun = new ScanRun() {{
                        endTime = "placeat";
                        errorTrace = new ScanRunErrorTrace() {{
                            code = ScanRunErrorTraceCodeEnum.TIMED_OUT_WHILE_SCANNING;
                            mostCommonHttpErrorCode = 479977;
                            scanConfigError = new ScanConfigError() {{
                                code = ScanConfigErrorCodeEnum.MALFORMED_RESOURCE_NAME;
                                fieldName = "nisi";
                            }};;
                        }};;
                        executionState = ScanRunExecutionStateEnum.FINISHED;
                        hasVulnerabilities = false;
                        name = "Miss Raymond Hauck III";
                        progressPercent = 832620;
                        resultState = ScanRunResultStateEnum.KILLED;
                        startTime = "quo";
                        urlsCrawledCount = "odit";
                        urlsTestedCount = "at";
                        warningTraces = new org.openapis.openapi.models.shared.ScanRunWarningTrace[]{{
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.TOO_MANY_CRAWL_RESULTS;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.BLOCKED_BY_IAP;
                            }}),
                            add(new ScanRunWarningTrace() {{
                                code = ScanRunWarningTraceCodeEnum.BLOCKED_BY_IAP;
                            }}),
                        }};
                    }};;
                    managedScan = false;
                    maxQps = 461479;
                    name = "Miss Lowell Parisian";
                    riskLevel = ScanConfigRiskLevelEnum.NORMAL;
                    schedule = new Schedule() {{
                        intervalDurationDays = 143353;
                        scheduleTime = "deleniti";
                    }};;
                    startingUrls = new String[]{{
                        add("optio"),
                        add("totam"),
                        add("beatae"),
                        add("commodi"),
                    }};
                    staticIpScan = false;
                    targetPlatforms = new org.openapis.openapi.models.shared.ScanConfigTargetPlatformsEnum[]{{
                        add(ScanConfigTargetPlatformsEnum.APP_ENGINE),
                        add(ScanConfigTargetPlatformsEnum.TARGET_PLATFORM_UNSPECIFIED),
                    }};
                    userAgent = ScanConfigUserAgentEnum.SAFARI_IPHONE;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "excepturi";
                key = "aspernatur";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "natus";
                uploadProtocol = "sed";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("iste", "dolor") {{
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