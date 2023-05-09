# vector

### Available Operations

* [getMapVersionNumberTileLayerStyleZoomXYPbf](#getmapversionnumbertilelayerstylezoomxypbf) - Tile

## getMapVersionNumberTileLayerStyleZoomXYPbf

The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberTileLayerStyleZoomXYPbfRequest req = new GetMapVersionNumberTileLayerStyleZoomXYPbfRequest(799159L, 800911L, GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum.HYBRID, GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum.MAIN, GetMapVersionNumberTileLayerStyleZoomXYPbfVersionNumberEnum.ONE, GetMapVersionNumberTileLayerStyleZoomXYPbfZoomEnum.ELEVEN) {{
                language = "porro";
                view = GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum.IN;
            }};            

            GetMapVersionNumberTileLayerStyleZoomXYPbfResponse res = sdk.vector.getMapVersionNumberTileLayerStyleZoomXYPbf(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
