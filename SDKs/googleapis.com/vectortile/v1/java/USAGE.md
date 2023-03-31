<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VectortileTerraintilesGetPathParams;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetClientInfoPlatformEnum;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetTerrainFormatsEnum;
import org.openapis.openapi.models.operations.VectortileTerraintilesGetQueryParams;
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
                pathParams = new VectortileTerraintilesGetPathParams() {{
                    name = "corrupti";
                }};
                queryParams = new VectortileTerraintilesGetQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    altitudePrecisionCentimeters = 602763;
                    callback = "nulla";
                    clientInfoApiClient = "corrupti";
                    clientInfoApplicationId = "illum";
                    clientInfoApplicationVersion = "vel";
                    clientInfoDeviceModel = "error";
                    clientInfoOperatingSystem = "deserunt";
                    clientInfoPlatform = "WINDOWS";
                    clientInfoUserId = "iure";
                    enableModeledVolumes = false;
                    enablePoliticalFeatures = false;
                    enablePrivateRoads = false;
                    enableUnclippedBuildings = false;
                    fields = "magnam";
                    key = "debitis";
                    languageCode = "ipsa";
                    maxElevationResolutionCells = 963663;
                    minElevationResolutionCells = 272656;
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
                }};
            }};            

            VectortileTerraintilesGetResponse res = sdk.terraintiles.vectortileTerraintilesGet(req);

            if (res.terrainTile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->