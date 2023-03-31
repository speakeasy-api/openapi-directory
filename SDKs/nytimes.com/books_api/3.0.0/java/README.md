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

import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonSecurity;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonQueryParams;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonRequest;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonResponse;
import org.openapis.openapi.models.shared.SchemeAPIKey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsBestSellersHistoryJsonRequest req = new GETListsBestSellersHistoryJsonRequest() {{
                security = new GETListsBestSellersHistoryJsonSecurity() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GETListsBestSellersHistoryJsonQueryParams() {{
                    ageGroup = "corrupti";
                    author = "provident";
                    contributor = "distinctio";
                    isbn = "quibusdam";
                    price = "unde";
                    publisher = "nulla";
                    title = "Ms.";
                }};
            }};            

            GETListsBestSellersHistoryJsonResponse res = sdk.getListsBestSellersHistoryJson(req);

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getListsBestSellersHistoryJson` - Best Seller History List
* `getListsDateListJson` - Best Seller List by Date
* `getListsFormat` - Best Seller List
* `getListsNamesFormat` - Best Seller List Names
* `getListsOverviewFormat` - Best Seller List Overview
* `getReviewsFormat` - Reviews
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
