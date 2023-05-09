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
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonRequest;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonResponse;
import org.openapis.openapi.models.operations.GETListsBestSellersHistoryJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETListsBestSellersHistoryJsonRequest req = new GETListsBestSellersHistoryJsonRequest() {{
                ageGroup = "corrupti";
                author = "provident";
                contributor = "distinctio";
                isbn = "quibusdam";
                price = "unde";
                publisher = "nulla";
                title = "Ms.";
            }};            

            GETListsBestSellersHistoryJsonResponse res = sdk.getListsBestSellersHistoryJson(req, new GETListsBestSellersHistoryJsonSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getListsBestSellersHistoryJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getListsBestSellersHistoryJson](docs/sdk/README.md#getlistsbestsellershistoryjson) - Best Seller History List
* [getListsDateListJson](docs/sdk/README.md#getlistsdatelistjson) - Best Seller List by Date
* [getListsFormat](docs/sdk/README.md#getlistsformat) - Best Seller List
* [getListsNamesFormat](docs/sdk/README.md#getlistsnamesformat) - Best Seller List Names
* [getListsOverviewFormat](docs/sdk/README.md#getlistsoverviewformat) - Best Seller List Overview
* [getReviewsFormat](docs/sdk/README.md#getreviewsformat) - Reviews
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
