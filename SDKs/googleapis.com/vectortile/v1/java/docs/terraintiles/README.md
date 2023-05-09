# terraintiles

### Available Operations

* [vectortileTerraintilesGet](#vectortileterraintilesget) - Gets a terrain tile by its tile resource name.

## vectortileTerraintilesGet

Gets a terrain tile by its tile resource name.

### Example Usage

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

            VectortileTerraintilesGetRequest req = new VectortileTerraintilesGetRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                altitudePrecisionCentimeters = 20218L;
                callback = "ipsam";
                clientInfoApiClient = "repellendus";
                clientInfoApplicationId = "sapiente";
                clientInfoApplicationVersion = "quo";
                clientInfoDeviceModel = "odit";
                clientInfoOperatingSystem = "at";
                clientInfoPlatform = VectortileTerraintilesGetClientInfoPlatformEnum.IOS;
                clientInfoUserId = "maiores";
                enableModeledVolumes = false;
                enablePoliticalFeatures = false;
                enablePrivateRoads = false;
                enableUnclippedBuildings = false;
                fields = "molestiae";
                key = "quod";
                languageCode = "quod";
                maxElevationResolutionCells = 461479L;
                minElevationResolutionCells = 520478L;
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                regionCode = "dicta";
                terrainFormats = new org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum[]{{
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                    add(VectortileTerraintilesGetTerrainFormatsEnum.FIRST_DERIVATIVE),
                    add(VectortileTerraintilesGetTerrainFormatsEnum.TERRAIN_FORMAT_UNKNOWN),
                }};
                uploadType = "deleniti";
                uploadProtocol = "hic";
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
