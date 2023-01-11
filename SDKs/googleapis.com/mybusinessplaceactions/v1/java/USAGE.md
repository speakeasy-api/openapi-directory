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

            MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest() {{
                pathParams = new MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "debitis";
                    placeActionType = "PLACE_ACTION_TYPE_UNSPECIFIED";
                    uri = "et";
                }};
            }};

            MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse res = sdk.locations.mybusinessplaceactionsLocationsPlaceActionLinksCreate(req);

            if (res.placeActionLink.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->