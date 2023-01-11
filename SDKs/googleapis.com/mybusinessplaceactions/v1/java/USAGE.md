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
                    parent = "et";
                }};
                queryParams = new MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "veniam";
                    alt = "media";
                    callback = "culpa";
                    fields = "deleniti";
                    key = "iste";
                    oauthToken = "corrupti";
                    prettyPrint = true;
                    quotaUser = "omnis";
                    uploadType = "autem";
                    uploadProtocol = "velit";
                }};
                request = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "omnis";
                    placeActionType = "ONLINE_APPOINTMENT";
                    uri = "repudiandae";
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