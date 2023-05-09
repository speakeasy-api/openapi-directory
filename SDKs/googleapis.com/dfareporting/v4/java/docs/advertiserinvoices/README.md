# advertiserInvoices

### Available Operations

* [dfareportingAdvertiserInvoicesList](#dfareportingadvertiserinvoiceslist) - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

## dfareportingAdvertiserInvoicesList

Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingAdvertiserInvoicesListRequest;
import org.openapis.openapi.models.operations.DfareportingAdvertiserInvoicesListResponse;
import org.openapis.openapi.models.operations.DfareportingAdvertiserInvoicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingAdvertiserInvoicesListRequest req = new DfareportingAdvertiserInvoicesListRequest("tempora", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "doloremque";
                issueMonth = "cum";
                key = "nobis";
                maxResults = 628314L;
                oauthToken = "porro";
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "cumque";
                uploadProtocol = "soluta";
            }};            

            DfareportingAdvertiserInvoicesListResponse res = sdk.advertiserInvoices.dfareportingAdvertiserInvoicesList(req, new DfareportingAdvertiserInvoicesListSecurity("fugiat", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiserInvoicesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
