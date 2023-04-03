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
                add(new AftermarketListingExpiryCreate() {{
                    domain = "provident";
                    expiresAt = "distinctio";
                    losingRegistrarId = 844266;
                    pageViewsMonthly = 602763;
                    revenueMonthly = 857946;
                }}),
                add(new AftermarketListingExpiryCreate() {{
                    domain = "corrupti";
                    expiresAt = "illum";
                    losingRegistrarId = 423655;
                    pageViewsMonthly = 623564;
                    revenueMonthly = 645894;
                }}),
                add(new AftermarketListingExpiryCreate() {{
                    domain = "suscipit";
                    expiresAt = "iure";
                    losingRegistrarId = 297534;
                    pageViewsMonthly = 891773;
                    revenueMonthly = 56713;
                }}),
            }}            

            AddExpiryListingsJsonResponse res = sdk.v1.addExpiryListingsJson(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->