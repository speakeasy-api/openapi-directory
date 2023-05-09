# taxonomyServices

## Overview

Taxonomy services

### Available Operations

* [taxonomyAttractions](#taxonomyattractions) - /taxonomy/attractions
* [taxonomyCategories](#taxonomycategories) - /taxonomy/categories
* [taxonomyDestinations](#taxonomydestinations) - /taxonomy/destinations

## taxonomyAttractions

Get attractions
- Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
- The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxonomyAttractionsRequest;
import org.openapis.openapi.models.operations.TaxonomyAttractionsRequestBody;
import org.openapis.openapi.models.operations.TaxonomyAttractionsRequestBodySortOrderEnum;
import org.openapis.openapi.models.operations.TaxonomyAttractionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TaxonomyAttractionsRequest req = new TaxonomyAttractionsRequest("en-US") {{
                requestBody = new TaxonomyAttractionsRequestBody() {{
                    destId = 313218L;
                    sortOrder = TaxonomyAttractionsRequestBodySortOrderEnum.SEO_ALPHABETICAL;
                    topX = "delectus";
                }};;
            }};            

            TaxonomyAttractionsResponse res = sdk.taxonomyServices.taxonomyAttractions(req);

            if (res.taxonomyAttractions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxonomyCategories

Get all product categories
- Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
- This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
- **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxonomyCategoriesRequest;
import org.openapis.openapi.models.operations.TaxonomyCategoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TaxonomyCategoriesRequest req = new TaxonomyCategoriesRequest("en-US") {{
                destId = 692532L;
            }};            

            TaxonomyCategoriesResponse res = sdk.taxonomyServices.taxonomyCategories(req);

            if (res.taxonomyCategories200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## taxonomyDestinations

Get details of all destinations supported by this API
- Retrieves all the country taxonomy/city nodes as a flat list
- Returns a complete list of Viator destinations, including destination names and parent identifiers
- Used to provide navigation through drill down lists or combo boxes


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TaxonomyDestinationsRequest;
import org.openapis.openapi.models.operations.TaxonomyDestinationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TaxonomyDestinationsRequest req = new TaxonomyDestinationsRequest("en-US");            

            TaxonomyDestinationsResponse res = sdk.taxonomyServices.taxonomyDestinations(req);

            if (res.taxonomyDestinations200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
