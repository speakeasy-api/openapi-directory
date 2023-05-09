# weatherMaps

### Available Operations

* [mapMapGet](#mapmapget) - Returns PNG weather map for given area and variable

## mapMapGet

## PNG weather forecast maps for given area and variable

### Area specification
There are two ways to specify geographical area you need for your map:
1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.
2. Specify latitude and longitude bounds of the area you want to cover.

### Notes
* The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.
* As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.
* The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.
* Weather maps are only supported for forecasts, not for archive data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MapMapGetRequest;
import org.openapis.openapi.models.operations.MapMapGetResponse;
import org.openapis.openapi.models.operations.MapMapGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MapMapGetRequest req = new MapMapGetRequest("molestiae", "quod") {{
                key = "quod";
                maxLat = "esse";
                maxLon = "totam";
                minLat = "porro";
                minLon = "dolorum";
                tileX = 118274L;
                tileY = 720633L;
                tileZoom = 639921L;
            }};            

            MapMapGetResponse res = sdk.weatherMaps.mapMapGet(req, new MapMapGetSecurity("occaecati") {{
                apiKeyHeader = "YOUR_API_KEY_HERE";
            }});

            if (res.mapMapGet200ImagePngString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
