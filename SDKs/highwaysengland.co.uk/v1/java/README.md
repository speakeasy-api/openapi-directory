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

import org.openapis.openapi.models.operations.AreasGetPathParams;
import org.openapis.openapi.models.operations.AreasGetRequest;
import org.openapis.openapi.models.operations.AreasGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AreasGetRequest req = new AreasGetRequest() {{
                pathParams = new AreasGetPathParams() {{
                    version = "corrupti";
                }};
            }};            

            AreasGetResponse res = sdk.areas.areasGet(req);

            if (res.areaResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### areas

* `areasGet` - Returns list of areas
* `getVVersionAreasAreaIds` - Returns details of selected area

### quality

* `qualityGetDailyDataQualityForSite` - Get Site DailyQuality
* `qualityGetOverallDataQualityForSites` - Get Site OverallQuality

### reports

* `reportsIndex` - Gets the daily report.
* `getVVersionReportsStartDateToEndDateReportType` - Gets the daily report.

### siteTypes

* `siteTypesGetSitesForPublicFacingAPI` - Returns the layer metadata for the LayerId specified.
* `siteTypesIndex` - Return list of site types

### sites

* `sitesIndex` - Get a list of sites
* `getVVersionSitesSiteIds` - Get selected sites
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
