# quotas

### Available Operations

* [contentQuotasList](#contentquotaslist) - Lists the daily call quota and usage per method for your Merchant Center account.

## contentQuotasList

Lists the daily call quota and usage per method for your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentQuotasListRequest;
import org.openapis.openapi.models.operations.ContentQuotasListResponse;
import org.openapis.openapi.models.operations.ContentQuotasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentQuotasListRequest req = new ContentQuotasListRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facilis";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "fugiat";
                key = "beatae";
                oauthToken = "dignissimos";
                pageSize = 392692L;
                pageToken = "consectetur";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "delectus";
                uploadProtocol = "sunt";
            }};            

            ContentQuotasListResponse res = sdk.quotas.contentQuotasList(req, new ContentQuotasListSecurity("repudiandae", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMethodQuotasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
