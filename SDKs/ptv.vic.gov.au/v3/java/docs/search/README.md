# search

### Available Operations

* [searchSearch](#searchsearch) - View stops, routes and myki ticket outlets that match the search term

## searchSearch

View stops, routes and myki ticket outlets that match the search term

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSearchRequest;
import org.openapis.openapi.models.operations.SearchSearchResponse;
import org.openapis.openapi.models.operations.SearchSearchRouteTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchSearchRequest req = new SearchSearchRequest("veritatis") {{
                devid = "itaque";
                includeAddresses = false;
                includeOutlets = false;
                latitude = 2777.18;
                longitude = 3185.69;
                matchRouteBySuburb = false;
                matchStopByGtfsStopId = false;
                matchStopBySuburb = false;
                maxDistance = 93.56;
                routeTypes = new org.openapis.openapi.models.operations.SearchSearchRouteTypesEnum[]{{
                    add(SearchSearchRouteTypesEnum.FOUR),
                    add(SearchSearchRouteTypesEnum.ZERO),
                    add(SearchSearchRouteTypesEnum.THREE),
                }};
                signature = "distinctio";
                token = "quibusdam";
            }};            

            SearchSearchResponse res = sdk.search.searchSearch(req);

            if (res.v3SearchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
