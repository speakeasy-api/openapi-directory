<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddExpiryListingsJsonResponse;
import org.openapis.openapi.models.shared.AftermarketListingExpiryCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.AftermarketListingExpiryCreate[]{{
                add(new AftermarketListingExpiryCreate("corrupti", "illum", 423655L) {{
                    domain = "provident";
                    expiresAt = "distinctio";
                    losingRegistrarId = 844266L;
                    pageViewsMonthly = 602763L;
                    revenueMonthly = 857946L;
                }}),
                add(new AftermarketListingExpiryCreate("debitis", "ipsa", 963663L) {{
                    domain = "error";
                    expiresAt = "deserunt";
                    losingRegistrarId = 384382L;
                    pageViewsMonthly = 437587L;
                    revenueMonthly = 297534L;
                }}),
                add(new AftermarketListingExpiryCreate("voluptatum", "iusto", 568045L) {{
                    domain = "tempora";
                    expiresAt = "suscipit";
                    losingRegistrarId = 477665L;
                    pageViewsMonthly = 791725L;
                    revenueMonthly = 812169L;
                }}),
            }}            

            AddExpiryListingsJsonResponse res = sdk.v1.addExpiryListingsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->