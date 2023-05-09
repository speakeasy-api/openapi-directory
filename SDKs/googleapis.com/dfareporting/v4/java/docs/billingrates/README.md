# billingRates

### Available Operations

* [dfareportingBillingRatesList](#dfareportingbillingrateslist) - Retrieves a list of billing rates. This method supports paging.

## dfareportingBillingRatesList

Retrieves a list of billing rates. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingBillingRatesListRequest;
import org.openapis.openapi.models.operations.DfareportingBillingRatesListResponse;
import org.openapis.openapi.models.operations.DfareportingBillingRatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingBillingRatesListRequest req = new DfareportingBillingRatesListRequest("laudantium", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "libero";
                key = "nam";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "minus";
                uploadProtocol = "hic";
            }};            

            DfareportingBillingRatesListResponse res = sdk.billingRates.dfareportingBillingRatesList(req, new DfareportingBillingRatesListSecurity("similique", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingRatesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
