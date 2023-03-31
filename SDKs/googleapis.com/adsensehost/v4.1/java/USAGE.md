<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetSecurity;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetPathParams;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetQueryParams;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdclientsGetRequest req = new AdsensehostAccountsAdclientsGetRequest() {{
                security = new AdsensehostAccountsAdclientsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdsensehostAccountsAdclientsGetPathParams() {{
                    accountId = "corrupti";
                    adClientId = "provident";
                }};
                queryParams = new AdsensehostAccountsAdclientsGetQueryParams() {{
                    alt = "json";
                    fields = "quibusdam";
                    key = "unde";
                    oauthToken = "nulla";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    userIp = "illum";
                }};
            }};            

            AdsensehostAccountsAdclientsGetResponse res = sdk.accounts.adsensehostAccountsAdclientsGet(req);

            if (res.adClient.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->