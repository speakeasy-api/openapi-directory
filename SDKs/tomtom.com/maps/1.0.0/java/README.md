# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMapVersionNumberCopyrightsFormatRequest req = new GetMapVersionNumberCopyrightsFormatRequest(GetMapVersionNumberCopyrightsFormatFormatEnum.JSONP, GetMapVersionNumberCopyrightsFormatVersionNumberEnum.ONE) {{
                callback = "distinctio";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [copyrights](docs/copyrights/README.md)

* [getMapVersionNumberCopyrightsFormat](docs/copyrights/README.md#getmapversionnumbercopyrightsformat) - Copyrights whole world
* [getMapVersionNumberCopyrightsCaptionFormat](docs/copyrights/README.md#getmapversionnumbercopyrightscaptionformat) - Captions
* [getMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat](docs/copyrights/README.md#getmapversionnumbercopyrightsminlonminlatmaxlonmaxlatformat) - Copyrights bounding box
* [getMapVersionNumberCopyrightsZoomXYFormat](docs/copyrights/README.md#getmapversionnumbercopyrightszoomxyformat) - Copyrights tile

### [raster](docs/raster/README.md)

* [getMapVersionNumberStaticimage](docs/raster/README.md#getmapversionnumberstaticimage) - Static Image
* [getMapVersionNumberTileLayerStyleZoomXYFormat](docs/raster/README.md#getmapversionnumbertilelayerstylezoomxyformat) - Tile

### [vector](docs/vector/README.md)

* [getMapVersionNumberTileLayerStyleZoomXYPbf](docs/vector/README.md#getmapversionnumbertilelayerstylezoomxypbf) - Tile

### [wmsWmts](docs/wmswmts/README.md)

* [getCapabilities](docs/wmswmts/README.md#getcapabilities) - GetCapabilities
* [getMap](docs/wmswmts/README.md#getmap) - GetMap
* [getMapVersionNumberWMTSKeyWMTSVersionWMTSCapabilitiesXml](docs/wmswmts/README.md#getmapversionnumberwmtskeywmtsversionwmtscapabilitiesxml) - WMTS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
