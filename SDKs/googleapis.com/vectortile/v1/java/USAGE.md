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
                    name = "qui";
                }};
                queryParams = new VectortileTerraintilesGetQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "odit";
                    alt = "media";
                    altitudePrecisionCentimeters = 9079494813988182808;
                    callback = "earum";
                    clientInfoApiClient = "debitis";
                    clientInfoApplicationId = "sed";
                    clientInfoApplicationVersion = "odio";
                    clientInfoDeviceModel = "qui";
                    clientInfoOperatingSystem = "aliquam";
                    clientInfoPlatform = "ANDROID";
                    clientInfoUserId = "aliquam";
                    enableModeledVolumes = true;
                    enablePoliticalFeatures = true;
                    enablePrivateRoads = false;
                    enableUnclippedBuildings = true;
                    fields = "suscipit";
                    key = "dignissimos";
                    languageCode = "nisi";
                    maxElevationResolutionCells = 6590693654995013765;
                    minElevationResolutionCells = 5829029072440070083;
                    oauthToken = "provident";
                    prettyPrint = false;
                    quotaUser = "dolore";
                    regionCode = "accusantium";
                    terrainFormats = new openapisdk.models.operations.VectortileTerraintilesGetTerrainFormatsEnum[]() {{
                        add("FIRST_DERIVATIVE"),
                        add("TERRAIN_FORMAT_UNKNOWN"),
                    }};
                    uploadType = "voluptate";
                    uploadProtocol = "laudantium";
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