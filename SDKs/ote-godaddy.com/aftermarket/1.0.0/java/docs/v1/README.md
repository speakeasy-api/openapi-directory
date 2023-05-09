# v1

### Available Operations

* [addExpiryListingsJson](#addexpirylistingsjson) - Add expiry listings into GoDaddy Auction
* [addExpiryListingsRaw](#addexpirylistingsraw) - Add expiry listings into GoDaddy Auction
* [deleteListings](#deletelistings) - Remove listings from GoDaddy Auction

## addExpiryListingsJson

Add expiry listings into GoDaddy Auction

### Example Usage

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
                add(new AftermarketListingExpiryCreate("deserunt", "perferendis", 368241L) {{
                    domain = "recusandae";
                    expiresAt = "temporibus";
                    losingRegistrarId = 71036L;
                    pageViewsMonthly = 337396L;
                    revenueMonthly = 87129L;
                }}),
                add(new AftermarketListingExpiryCreate("at", "maiores", 473608L) {{
                    domain = "repellendus";
                    expiresAt = "sapiente";
                    losingRegistrarId = 778157L;
                    pageViewsMonthly = 140350L;
                    revenueMonthly = 870013L;
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

## addExpiryListingsRaw

Add expiry listings into GoDaddy Auction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddExpiryListingsRawResponse;
import org.openapis.openapi.models.shared.AftermarketListingExpiryCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "quod".getBytes()            

            AddExpiryListingsRawResponse res = sdk.v1.addExpiryListingsRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteListings

Remove listings from GoDaddy Auction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteListingsRequest;
import org.openapis.openapi.models.operations.DeleteListingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteListingsRequest req = new DeleteListingsRequest(                new String[]{{
                                add("esse"),
                                add("totam"),
                                add("porro"),
                                add("dolorum"),
                            }});            

            DeleteListingsResponse res = sdk.v1.deleteListings(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
