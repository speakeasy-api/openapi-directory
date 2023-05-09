# copyrights

### Available Operations

* [getMapVersionNumberCopyrightsFormat](#getmapversionnumbercopyrightsformat) - Copyrights whole world
* [getMapVersionNumberCopyrightsCaptionFormat](#getmapversionnumbercopyrightscaptionformat) - Captions
* [getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat](#getmapversionnumbercopyrightsminlonminlatmaxlonmaxlatformat) - Copyrights bounding box
* [getMapVersionNumberCopyrightsZoomXYFormat](#getmapversionnumbercopyrightszoomxyformat) - Copyrights tile

## getMapVersionNumberCopyrightsFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the whole world.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsFormatVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsFormatRequest req = new GetMapVersionNumberCopyrightsFormatRequest(GetMapVersionNumberCopyrightsFormatFormatEnum.JSONP, GetMapVersionNumberCopyrightsFormatVersionNumberEnum.ONE) {{
                callback = "nulla";
            }};            

            GetMapVersionNumberCopyrightsFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapVersionNumberCopyrightsCaptionFormat

This API returns copyright captions for the map service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsCaptionFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsCaptionFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsCaptionFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsCaptionFormatRequest req = new GetMapVersionNumberCopyrightsCaptionFormatRequest(GetMapVersionNumberCopyrightsCaptionFormatFormatEnum.XML, GetMapVersionNumberCopyrightsCaptionFormatVersionNumberEnum.ONE) {{
                callback = "vel";
            }};            

            GetMapVersionNumberCopyrightsCaptionFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsCaptionFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for a specific bounding box.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest req = new GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest(GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum.JSONP, 3843.82, 4375.87, 2975.34, 8917.73, GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatVersionNumberEnum.ONE) {{
                callback = "ipsa";
            }};            

            GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapVersionNumberCopyrightsZoomXYFormat

The Copyrights API returns copyright information for
the Maps API Raster Tile Service in JSON, JSONP, or XML format.
This call returns copyright information for the a specific map tile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsZoomXYFormatRequest req = new GetMapVersionNumberCopyrightsZoomXYFormatRequest(272656L, 383441L, GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum.JSONP, GetMapVersionNumberCopyrightsZoomXYFormatVersionNumberEnum.ONE, GetMapVersionNumberCopyrightsZoomXYFormatZoomEnum.FIFTEEN) {{
                callback = "placeat";
            }};            

            GetMapVersionNumberCopyrightsZoomXYFormatResponse res = sdk.copyrights.getMapVersionNumberCopyrightsZoomXYFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
