<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetRequest;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetResponse;
import org.openapis.openapi.models.operations.AdsensehostAccountsAdclientsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsensehostAccountsAdclientsGetRequest req = new AdsensehostAccountsAdclientsGetRequest("corrupti", "provident") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "unde";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "corrupti";
                userIp = "illum";
            }};            

            AdsensehostAccountsAdclientsGetResponse res = sdk.accounts.adsensehostAccountsAdclientsGet(req, new AdsensehostAccountsAdclientsGetSecurity("vel", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.adClient != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->