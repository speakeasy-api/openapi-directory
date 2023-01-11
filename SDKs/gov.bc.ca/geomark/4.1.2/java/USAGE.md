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

            GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest req = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest() {{
                pathParams = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams() {{
                    fileFormatExtension = "kmz";
                    geomarkId = "dolorem";
                }};
                queryParams = new GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams() {{
                    srid = 9006196357847792672;
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