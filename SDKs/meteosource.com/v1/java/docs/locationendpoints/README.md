# locationEndpoints

### Available Operations

* [findPlacesFindPlacesGet](#findplacesfindplacesget) - Search for places. Complete words required.
* [findPlacesPrefixFindPlacesPrefixGet](#findplacesprefixfindplacesprefixget) - Prefix search for places. Useful for autocomplete forms.
* [nearestPlaceNearestPlaceGet](#nearestplacenearestplaceget) - Returns the nearest named location for a given GPS coordinates.

## findPlacesFindPlacesGet

## Search for places

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint.
The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_place_prefix` endpoint, complete words are required here. You can search for cities,
mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance.
You can then identify the one you want by coordinates, country, or the administrative area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetRequest;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetResponse;
import org.openapis.openapi.models.operations.FindPlacesFindPlacesGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesFindPlacesGetRequest req = new FindPlacesFindPlacesGetRequest("unde") {{
                key = "nulla";
                language = FindPlacesFindPlacesGetLanguageLanguageEnum.ES;
            }};            

            FindPlacesFindPlacesGetResponse res = sdk.locationEndpoints.findPlacesFindPlacesGet(req, new FindPlacesFindPlacesGetSecurity("illum") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.findPlacesModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findPlacesPrefixFindPlacesPrefixGet

## Search for places by prefix

You can use this endpoint to obtain `place_id` of the location you want, to be used in `point` endpoint. The response also contains detailed information about the location, such as coordinates, timezone and the country the place belongs to.

Unlike the `/find_places` endpoint, you should only specify the prefix of the place you are looking for. This is particularly useful for autocomplete forms. You can search for cities, mountains, lakes, countries, ZIP codes, etc. The response can contain multiple places, sorted by relevance. You can then identify the one you want by coordinates, country, or the administrative area.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.FindPlacesPrefixFindPlacesPrefixGetRequest;
import org.openapis.openapi.models.operations.FindPlacesPrefixFindPlacesPrefixGetResponse;
import org.openapis.openapi.models.operations.FindPlacesPrefixFindPlacesPrefixGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindPlacesPrefixFindPlacesPrefixGetRequest req = new FindPlacesPrefixFindPlacesPrefixGetRequest("vel") {{
                key = "error";
                language = FindPlacesPrefixFindPlacesPrefixGetLanguageLanguageEnum.FR;
            }};            

            FindPlacesPrefixFindPlacesPrefixGetResponse res = sdk.locationEndpoints.findPlacesPrefixFindPlacesPrefixGet(req, new FindPlacesPrefixFindPlacesPrefixGetSecurity("suscipit") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.findPlacesModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## nearestPlaceNearestPlaceGet

## Search for nearest place by coordinates

You can use this endpoint to find the nearest place from given coordinates.

*Note: If you specify coordinates of a secluded place (e.g. middle of the ocean), the nearest point can be very far from the coordinates.*

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NearestPlaceNearestPlaceGetLanguageLanguageEnum;
import org.openapis.openapi.models.operations.NearestPlaceNearestPlaceGetRequest;
import org.openapis.openapi.models.operations.NearestPlaceNearestPlaceGetResponse;
import org.openapis.openapi.models.operations.NearestPlaceNearestPlaceGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NearestPlaceNearestPlaceGetRequest req = new NearestPlaceNearestPlaceGetRequest("iure", "magnam") {{
                key = "debitis";
                language = NearestPlaceNearestPlaceGetLanguageLanguageEnum.CS;
            }};            

            NearestPlaceNearestPlaceGetResponse res = sdk.locationEndpoints.nearestPlaceNearestPlaceGet(req, new NearestPlaceNearestPlaceGetSecurity("delectus") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.findPlacesModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
