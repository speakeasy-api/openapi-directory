<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodePathParams;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeQueryParams;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsGetAdCodeRequest req = new AdsenseAccountsAdclientsGetAdCodeRequest() {{
                security = new AdsenseAccountsAdclientsGetAdCodeSecurity() {{
                    option1 = new AdsenseAccountsAdclientsGetAdCodeSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new AdsenseAccountsAdclientsGetAdCodePathParams() {{
                    accountId = "corrupti";
                    adClientId = "provident";
                }};
                queryParams = new AdsenseAccountsAdclientsGetAdCodeQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    tagPartner = "illum";
                    userIp = "vel";
                }};
            }};            

            AdsenseAccountsAdclientsGetAdCodeResponse res = sdk.accounts.adsenseAccountsAdclientsGetAdCode(req);

            if (res.adCode.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->