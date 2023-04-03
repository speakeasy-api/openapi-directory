<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateSecurity;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateRequest;
import org.openapis.openapi.models.operations.WebsecurityscannerProjectsScanConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ScanConfigExportToSecurityCommandCenterEnum;
import org.openapis.openapi.models.shared.ScanConfigRiskLevelEnum;
import org.openapis.openapi.models.shared.ScanConfigUserAgentEnum;
import org.openapis.openapi.models.shared.ScanConfig;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.Authentication;
import org.openapis.openapi.models.shared.IapCredential;
import org.openapis.openapi.models.shared.IapTestServiceAccountInfo;
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
                        iapCredential = new IapCredential() {{
                            iapTestServiceAccountInfo = new IapTestServiceAccountInfo() {{
                                targetAudienceClientId = "magnam";
                            }};
                        }};
                    }};
                    blacklistPatterns = new String[]{{
                        add("ipsa"),
                        add("delectus"),
                        add("tempora"),
                        add("suscipit"),
                    }};
                    displayName = "molestiae";
                    exportToSecurityCommandCenter = "DISABLED";
                    ignoreHttpStatusErrors = false;
                    managedScan = false;
                    maxQps = 812169;
                    name = "voluptatum";
                    riskLevel = "NORMAL";
                    schedule = new Schedule() {{
                        intervalDurationDays = 568045;
                        scheduleTime = "nisi";
                    }};
                    startingUrls = new String[]{{
                        add("temporibus"),
                        add("ab"),
                        add("quis"),
                        add("veritatis"),
                    }};
                    staticIpScan = false;
                    userAgent = "CHROME_ANDROID";
                }};
                accessToken = "perferendis";
                alt = "media";
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                parent = "at";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "maiores";
                uploadProtocol = "molestiae";
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