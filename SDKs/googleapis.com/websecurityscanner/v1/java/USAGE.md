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
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
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
                    managedScan = false;
                    maxQps = 812169;
                    name = "Ted Mante";
                    riskLevel = ScanConfigRiskLevelEnum.LOW;
                    schedule = new Schedule() {{
                        intervalDurationDays = 71036;
                        scheduleTime = "quis";
                    }};;
                    startingUrls = new String[]{{
                        add("deserunt"),
                    }};
                    staticIpScan = false;
                    userAgent = ScanConfigUserAgentEnum.USER_AGENT_UNSPECIFIED;
                }};;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
            }};            

            WebsecurityscannerProjectsScanConfigsCreateResponse res = sdk.projects.websecurityscannerProjectsScanConfigsCreate(req, new WebsecurityscannerProjectsScanConfigsCreateSecurity("quod", "quod") {{
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