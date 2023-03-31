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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### boundingBox

* `getGeomarksGeomarkIdBoundingBoxFileFormatExtension` - Gets the bounding box of the geomark

### create

* `postGeomarksCopy` - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
* `postGeomarksNew` - Create a new geomark

### feature

* `getGeomarksGeomarkIdFeatureFileFormatExtension` - Get the feature and attribution of the geomark

### info

* `getGeomarksGeomarkIdFileFormatExtension` - Get information about a particular geomark

### parts

* `getGeomarksGeomarkIdPartsFileFormatExtension` - Get the individual geometries within a multi-part geometry

### point

* `getGeomarksGeomarkIdPointFileFormatExtension` - Gets a single spatial point representative of the geomark.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
