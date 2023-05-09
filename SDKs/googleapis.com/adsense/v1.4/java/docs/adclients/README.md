# adclients

### Available Operations

* [adsenseAdclientsList](#adsenseadclientslist) - List all ad clients in this AdSense account.

## adsenseAdclientsList

List all ad clients in this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAdclientsListRequest;
import org.openapis.openapi.models.operations.AdsenseAdclientsListResponse;
import org.openapis.openapi.models.operations.AdsenseAdclientsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAdclientsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAdclientsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAdclientsListRequest req = new AdsenseAdclientsListRequest() {{
                alt = AltEnum.CSV;
                fields = "magnam";
                key = "distinctio";
                maxResults = 660174L;
                oauthToken = "labore";
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "natus";
            }};            

            AdsenseAdclientsListResponse res = sdk.adclients.adsenseAdclientsList(req, new AdsenseAdclientsListSecurity() {{
                option1 = new AdsenseAdclientsListSecurityOption1("nobis", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adClients != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
