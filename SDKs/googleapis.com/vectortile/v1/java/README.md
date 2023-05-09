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
import org.openapis.openapi.models.operations.VectortileTerraintilesGetClientInfoPlatformEnum;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetRequest;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetResponse;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VectortileTerraintilesGetRequest req = new VectortileTerraintilesGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                altitudePrecisionCentimeters = 602763L;
                callback = "nulla";
                clientInfoApiClient = "corrupti";
                clientInfoApplicationId = "illum";
                clientInfoApplicationVersion = "vel";
                clientInfoDeviceModel = "error";
                clientInfoOperatingSystem = "deserunt";
                clientInfoPlatform = VectortileTerraintilesGetClientInfoPlatformEnum.WINDOWS;
                clientInfoUserId = "iure";
                enableModeledVolumes = false;
                enablePoliticalFeatures = false;
                enablePrivateRoads = false;
                enableUnclippedBuildings = false;
                fields = "magnam";
                key = "debitis";
                languageCode = "ipsa";
                maxElevationResolutionCells = 963663L;
                minElevationResolutionCells = 272656L;
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                regionCode = "minus";
                terrainFormats = new org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum[]{{
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                }};
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            VectortileTerraintilesGetResponse res = sdk.terraintiles.vectortileTerraintilesGet(req);

            if (res.terrainTile != null) {
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


### [terraintiles](docs/terraintiles/README.md)

* [vectortileTerraintilesGet](docs/terraintiles/README.md#vectortileterraintilesget) - Gets a terrain tile by its tile resource name.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
