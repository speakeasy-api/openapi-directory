# SDK

## Overview

Search for millions of products from the world's greatest brands.

### Available Operations

* [details](#details) - Return more details about a list of products.
* [search](#search) - Search for products

## details

Return more details about a list of products.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetailsRequest;
import org.openapis.openapi.models.operations.DetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DetailsRequest req = new DetailsRequest("provident");            

            DetailsResponse res = sdk.sdk.details(req);

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## search

Search for products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest() {{
                numResults = "distinctio";
                priceMax = 8442.66;
                priceMin = 6027.63;
                query = "nulla";
                similarToId = "corrupti";
            }};            

            SearchResponse res = sdk.sdk.search(req);

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
