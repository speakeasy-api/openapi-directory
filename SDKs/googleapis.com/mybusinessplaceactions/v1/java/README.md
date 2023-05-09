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
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlaceActionLinkInput;
import org.openapis.openapi.models.shared.PlaceActionLinkPlaceActionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                placeActionLinkInput = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "Ellis Mitchell";
                    placeActionType = PlaceActionLinkPlaceActionTypeEnum.FOOD_TAKEOUT;
                    uri = "http://physical-pegboard.info";
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "molestiae";
                uploadProtocol = "minus";
            }};            

            MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksCreate(req);

            if (res.placeActionLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [locations](docs/locations/README.md)

* [mybusinessplaceactionsLocationsPlaceActionLinksCreate](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [mybusinessplaceactionsLocationsPlaceActionLinksDelete](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksGet](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [mybusinessplaceactionsLocationsPlaceActionLinksList](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [mybusinessplaceactionsLocationsPlaceActionLinksPatch](docs/locations/README.md#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

### [placeActionTypeMetadata](docs/placeactiontypemetadata/README.md)

* [mybusinessplaceactionsPlaceActionTypeMetadataList](docs/placeactiontypemetadata/README.md#mybusinessplaceactionsplaceactiontypemetadatalist) - Returns the list of available place action types for a location or country.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
