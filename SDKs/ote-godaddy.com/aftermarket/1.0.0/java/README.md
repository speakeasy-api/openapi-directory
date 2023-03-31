# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AddExpiryListingsJsonRequest;
import org.openapis.openapi.models.operations.AddExpiryListingsJsonResponse;
import org.openapis.openapi.models.shared.AftermarketListingExpiryCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddExpiryListingsJsonRequest req = new AddExpiryListingsJsonRequest() {{
                request = new org.openapis.openapi.models.shared.AftermarketListingExpiryCreate[]{{
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
                }};
            }};            

            AddExpiryListingsJsonResponse res = sdk.v1.addExpiryListingsJson(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### v1

* `addExpiryListingsJson` - Add expiry listings into GoDaddy Auction
* `addExpiryListingsRaw` - Add expiry listings into GoDaddy Auction
* `deleteListings` - Remove listings from GoDaddy Auction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
