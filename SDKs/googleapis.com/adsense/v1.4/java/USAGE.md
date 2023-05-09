<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsGetAdCodeRequest req = new AdsenseAccountsAdclientsGetAdCodeRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                tagPartner = "illum";
                userIp = "vel";
            }};            

            AdsenseAccountsAdclientsGetAdCodeResponse res = sdk.accounts.adsenseAccountsAdclientsGetAdCode(req, new AdsenseAccountsAdclientsGetAdCodeSecurity() {{
                option1 = new AdsenseAccountsAdclientsGetAdCodeSecurityOption1("error", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->