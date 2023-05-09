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