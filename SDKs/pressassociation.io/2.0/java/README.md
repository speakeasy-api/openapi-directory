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

import org.openapis.openapi.models.operations.GetAssetSecurity;
import org.openapis.openapi.models.operations.GetAssetPathParams;
import org.openapis.openapi.models.operations.GetAssetQueryParams;
import org.openapis.openapi.models.operations.GetAssetRequest;
import org.openapis.openapi.models.operations.GetAssetResponse;
import org.openapis.openapi.models.shared.SchemeApikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetRequest req = new GetAssetRequest() {{
                security = new GetAssetSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetAssetPathParams() {{
                    assetId = "corrupti";
                }};
                queryParams = new GetAssetQueryParams() {{
                    aliases = false;
                }};
            }};            

            GetAssetResponse res = sdk.asset.getAsset(req);

            if (res.getAsset200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### asset

* `getAsset` - Asset Detail
* `getAssetContributors` - Asset Contributors
* `listAssets` - Asset Collection

### catalogue

* `getCatalogue` - Catalogue Detail
* `getCatalogueAsset` - Catalogue Asset Collection
* `getCatalogueAssetDetail` - Catalogue Asset Detail
* `listCatalogues` - Catalogue Collection

### channel

* `getChannel` - Channel Detail
* `listChannels` - Channel Collection

### contributor

* `getContributor` - Contributor Detail
* `listContributor` - Contributor Collection

### feature

* `getFeature` - Feature Detail
* `listFeatureTypes` - Feature Type Collection
* `listFeatures` - Feature Collection

### platform

* `getPlatform` - Platform Detail
* `listPlatformRegions` - Platform Region Collection
* `listPlatforms` - Platform Collection

### schedule

* `listSchedule` - Schedule Collection
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
