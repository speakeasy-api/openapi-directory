<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum;
import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams;
import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionSridEnum;
import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams;
import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest;
import org.openapis.openapi.models.operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest req = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest() {{
                pathParams = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams() {{
                    fileFormatExtension = "shpz";
                    geomarkId = "provident";
                }};
                queryParams = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams() {{
                    srid = "26909";
                }};
            }};            

            GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse res = sdk.boundingBox.getGeomarksGeomarkIdBoundingBoxFileFormatExtension(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->