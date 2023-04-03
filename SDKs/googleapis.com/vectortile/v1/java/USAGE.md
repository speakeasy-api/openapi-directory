<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VectortileTerraintilesGetClientInfoPlatformEnum;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetRequest;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VectortileTerraintilesGetRequest req = new VectortileTerraintilesGetRequest() {{
                dollarXgafv = "2";
                accessToken = "provident";
                alt = "proto";
                altitudePrecisionCentimeters = 844266;
                callback = "unde";
                clientInfoApiClient = "nulla";
                clientInfoApplicationId = "corrupti";
                clientInfoApplicationVersion = "illum";
                clientInfoDeviceModel = "vel";
                clientInfoOperatingSystem = "error";
                clientInfoPlatform = "ANDROID";
                clientInfoUserId = "suscipit";
                enableModeledVolumes = false;
                enablePoliticalFeatures = false;
                enablePrivateRoads = false;
                enableUnclippedBuildings = false;
                fields = "iure";
                key = "magnam";
                languageCode = "debitis";
                maxElevationResolutionCells = 56713;
                minElevationResolutionCells = 963663;
                name = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                regionCode = "minus";
                terrainFormats = new org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum[]{{
                    add("FIRST_DERIVATIVE"),
                    add("FIRST_DERIVATIVE"),
                    add("FIRST_DERIVATIVE"),
                    add("FIRST_DERIVATIVE"),
                }};
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }}            

            VectortileTerraintilesGetResponse res = sdk.terraintiles.vectortileTerraintilesGet(req);

            if (res.terrainTile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->