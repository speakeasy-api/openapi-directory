# raster

### Available Operations

* [getMapVersionNumberStaticimage](#getmapversionnumberstaticimage) - Static Image
* [getMapVersionNumberTileLayerStyleZoomXYFormat](#getmapversionnumbertilelayerstylezoomxyformat) - Tile

## getMapVersionNumberStaticimage

The Static Image service renders a rectangular raster image
in the style, size, and zoom level specified. The image can be requested
using either a center point plus width and height or a bounding box.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageLayerEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageStyleEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageViewEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberStaticimageZoomEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberStaticimageRequest req = new GetMapVersionNumberStaticimageRequest(GetMapVersionNumberStaticimageVersionNumberEnum.ONE) {{
                bbox = "iusto";
                center = "excepturi";
                format = GetMapVersionNumberStaticimageFormatEnum.JPG;
                height = 925597L;
                layer = GetMapVersionNumberStaticimageLayerEnum.LABELS;
                style = GetMapVersionNumberStaticimageStyleEnum.MAIN;
                view = GetMapVersionNumberStaticimageViewEnum.UNIFIED;
                width = 87129L;
                zoom = GetMapVersionNumberStaticimageZoomEnum.FOURTEEN;
            }};            

            GetMapVersionNumberStaticimageResponse res = sdk.raster.getMapVersionNumberStaticimage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapVersionNumberTileLayerStyleZoomXYFormat

The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberTileLayerStyleZoomXYFormatRequest req = new GetMapVersionNumberTileLayerStyleZoomXYFormatRequest(368241L, 832620L, GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum.PNG, GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum.LABELS, GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum.MAIN, GetMapVersionNumberTileLayerStyleZoomXYFormatVersionNumberEnum.ONE, GetMapVersionNumberTileLayerStyleZoomXYFormatZoomEnum.TWENTY) {{
                tileSize = GetMapVersionNumberTileLayerStyleZoomXYFormatTileSizeEnum.FIVE_HUNDRED_AND_TWELVE;
                view = GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum.IN;
            }};            

            GetMapVersionNumberTileLayerStyleZoomXYFormatResponse res = sdk.raster.getMapVersionNumberTileLayerStyleZoomXYFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
