<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            VectortileTerraintilesGetRequest req = new VectortileTerraintilesGetRequest() {{
                pathParams = new VectortileTerraintilesGetPathParams() {{
                    name = "sit";
                }};
                queryParams = new VectortileTerraintilesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    altitudePrecisionCentimeters = 3390393562759376202;
                    callback = "dolor";
                    clientInfoApiClient = "expedita";
                    clientInfoApplicationId = "voluptas";
                    clientInfoApplicationVersion = "fugit";
                    clientInfoDeviceModel = "et";
                    clientInfoOperatingSystem = "nihil";
                    clientInfoPlatform = "WINDOWS";
                    clientInfoUserId = "dicta";
                    enableModeledVolumes = true;
                    enablePoliticalFeatures = true;
                    enablePrivateRoads = false;
                    enableUnclippedBuildings = false;
                    fields = "dolorem";
                    key = "et";
                    languageCode = "voluptate";
                    maxElevationResolutionCells = 3287288577352441706;
                    minElevationResolutionCells = 3930927879439176946;
                    oauthToken = "totam";
                    prettyPrint = true;
                    quotaUser = "illum";
                    regionCode = "debitis";
                    terrainFormats = new openapisdk.models.operations.VectortileTerraintilesGetTerrainFormatsEnum[]() {{
                        add("TERRAIN_FORMAT_UNKNOWN"),
                        add("FIRST_DERIVATIVE"),
                    }};
                    uploadType = "id";
                    uploadProtocol = "aspernatur";
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