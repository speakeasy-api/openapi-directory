# wmsWmts

### Available Operations

* [getCapabilities](#getcapabilities) - GetCapabilities
* [getMap](#getmap) - GetMap
* [getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml](#getmapversionnumberwmtskeywmtsversionwmtscapabilitiesxml) - WMTS

## getCapabilities

The GetCapabilities call is part of TomTom's implementation of version 1.1.1
the Web Map Service (WMS). It provides descriptions of the other calls
that are available in the implementation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCapabilitiesRequest;
import org.openapis.openapi.models.operations.GetCapabilitiesRequestEnum;
import org.openapis.openapi.models.operations.GetCapabilitiesResponse;
import org.openapis.openapi.models.operations.GetCapabilitiesServiceEnum;
import org.openapis.openapi.models.operations.GetCapabilitiesVersionEnum;
import org.openapis.openapi.models.operations.GetCapabilitiesVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCapabilitiesRequest req = new GetCapabilitiesRequest(GetCapabilitiesRequestEnum.GET_CAPABILITIES, GetCapabilitiesServiceEnum.WMS, GetCapabilitiesVersionNumberEnum.ONE) {{
                version = GetCapabilitiesVersionEnum.ONE11;
            }};            

            GetCapabilitiesResponse res = sdk.wmsWmts.getCapabilities(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMap

The GetMap call implements the Web Map Service 1.1.1 standard
to access TomTom raster map tiles. This service is described
in the response to the GetCapabilities API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapFormatEnum;
import org.openapis.openapi.models.operations.GetMapLayersEnum;
import org.openapis.openapi.models.operations.GetMapRequest;
import org.openapis.openapi.models.operations.GetMapRequestEnum;
import org.openapis.openapi.models.operations.GetMapResponse;
import org.openapis.openapi.models.operations.GetMapServiceEnum;
import org.openapis.openapi.models.operations.GetMapSrsEnum;
import org.openapis.openapi.models.operations.GetMapStylesEnum;
import org.openapis.openapi.models.operations.GetMapVersionEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapRequest req = new GetMapRequest("officia", GetMapFormatEnum.IMAGE_PNG, 143353L, GetMapLayersEnum.BASIC, GetMapRequestEnum.GET_MAP, GetMapSrsEnum.EPSG4326, GetMapVersionEnum.ONE11, GetMapVersionNumberEnum.ONE, 944669L) {{
                service = GetMapServiceEnum.WMS;
                styles = GetMapStylesEnum.UNKNOWN;
            }};            

            GetMapResponse res = sdk.wmsWmts.getMap(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml

The WMTS GetCapabilities call implements version 1.0.0 of
the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
(WMTS) standard. It returns metadata that allows compatible calling systems to construct
calls to TomTom's raster map tile service. See the
<a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
for more information on WMTS.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest;
import org.openapis.openapi.models.operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlResponse;
import org.openapis.openapi.models.operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum;
import org.openapis.openapi.models.operations.GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest req = new GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlRequest("totam", GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlVersionNumberEnum.ONE, GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlWMTSVersionEnum.ONE00);            

            GetMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXmlResponse res = sdk.wmsWmts.getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
