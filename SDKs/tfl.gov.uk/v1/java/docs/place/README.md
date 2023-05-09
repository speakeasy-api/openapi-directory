# place

### Available Operations

* [placeGet](#placeget) - Gets the place with the given id.
* [placeGetAt](#placegetat) - Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.
* [placeGetByGeo](#placegetbygeo) - Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.
* [placeGetByType](#placegetbytype) - Gets all places of a given type
* [placeGetOverlay](#placegetoverlay) - Gets the place overlay for a given set of co-ordinates and a given width/height.
* [placeGetStreetsByPostCode](#placegetstreetsbypostcode) - Gets the set of streets associated with a post code.
* [placeMetaCategories](#placemetacategories) - Gets a list of all of the available place property categories and keys.
* [placeMetaPlaceTypes](#placemetaplacetypes) - Gets a list of the available types of Place.
* [placeSearch](#placesearch) - Gets all places that matches the given query

## placeGet

Gets the place with the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetRequest;
import org.openapis.openapi.models.operations.PlaceGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetRequest req = new PlaceGetRequest("laborum") {{
                includeChildren = false;
            }};            

            PlaceGetResponse res = sdk.place.placeGet(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeGetAt

Gets any places of the given type whose geography intersects the given latitude and longitude. In practice this means the Place
            must be polygonal e.g. a BoroughBoundary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetAtRequest;
import org.openapis.openapi.models.operations.PlaceGetAtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetAtRequest req = new PlaceGetAtRequest("quasi", "reiciendis", "voluptatibus", 8781.94, 4686.51, "praesentium",                 new String[]{{
                                add("ipsa"),
                                add("omnis"),
                                add("voluptate"),
                                add("cum"),
                            }});            

            PlaceGetAtResponse res = sdk.place.placeGetAt(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeGetByGeo

Gets the places that lie within a geographic region. The geographic region of interest can either be specified
            by using a lat/lon geo-point and a radius in metres to return places within the locus defined by the lat/lon of
            its centre or alternatively, by the use of a bounding box defined by the lat/lon of its north-west and south-east corners.
            Optionally filters on type and can strip properties for a smaller payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetByGeoRequest;
import org.openapis.openapi.models.operations.PlaceGetByGeoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetByGeoRequest req = new PlaceGetByGeoRequest() {{
                activeOnly = false;
                categories = new String[]{{
                    add("doloremque"),
                }};
                includeChildren = false;
                numberOfPlacesToReturn = 441711;
                placeGeoLat = 2828.07;
                placeGeoLon = 9795.87;
                placeGeoNeLat = 1201.96;
                placeGeoNeLon = 3594.44;
                placeGeoSwLat = 2961.4;
                placeGeoSwLon = 4808.94;
                radius = 1187.27;
                type = new String[]{{
                    add("enim"),
                    add("accusamus"),
                    add("commodi"),
                }};
            }};            

            PlaceGetByGeoResponse res = sdk.place.placeGetByGeo(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeGetByType

Gets all places of a given type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetByTypeRequest;
import org.openapis.openapi.models.operations.PlaceGetByTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetByTypeRequest req = new PlaceGetByTypeRequest(                new String[]{{
                                add("quae"),
                                add("ipsum"),
                                add("quidem"),
                                add("molestias"),
                            }}) {{
                activeOnly = false;
            }};            

            PlaceGetByTypeResponse res = sdk.place.placeGetByType(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeGetOverlay

Gets the place overlay for a given set of co-ordinates and a given width/height.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetOverlayRequest;
import org.openapis.openapi.models.operations.PlaceGetOverlayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetOverlayRequest req = new PlaceGetOverlayRequest("excepturi", "pariatur", 265389, "praesentium", 5232.48, 9167.23, "quasi",                 new String[]{{
                                add("sint"),
                                add("veritatis"),
                                add("itaque"),
                                add("incidunt"),
                            }}, 318569, 9356);            

            PlaceGetOverlayResponse res = sdk.place.placeGetOverlay(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeGetStreetsByPostCode

Gets the set of streets associated with a post code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceGetStreetsByPostCodeRequest;
import org.openapis.openapi.models.operations.PlaceGetStreetsByPostCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceGetStreetsByPostCodeRequest req = new PlaceGetStreetsByPostCodeRequest("est", "quibusdam") {{
                postcodeInputPostcode = "explicabo";
            }};            

            PlaceGetStreetsByPostCodeResponse res = sdk.place.placeGetStreetsByPostCode(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeMetaCategories

Gets a list of all of the available place property categories and keys.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceMetaCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceMetaCategoriesResponse res = sdk.place.placeMetaCategories();

            if (res.tflApiPresentationEntitiesPlaceCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeMetaPlaceTypes

Gets a list of the available types of Place.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceMetaPlaceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceMetaPlaceTypesResponse res = sdk.place.placeMetaPlaceTypes();

            if (res.tflApiPresentationEntitiesPlaceCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## placeSearch

Gets all places that matches the given query

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlaceSearchRequest;
import org.openapis.openapi.models.operations.PlaceSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlaceSearchRequest req = new PlaceSearchRequest("deserunt") {{
                types = new String[]{{
                    add("quibusdam"),
                    add("labore"),
                    add("modi"),
                }};
            }};            

            PlaceSearchResponse res = sdk.place.placeSearch(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
