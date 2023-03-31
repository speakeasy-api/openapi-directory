<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest;
import org.openapis.openapi.models.operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse;
import org.openapis.openapi.models.shared.PlaceActionLinkPlaceActionTypeEnum;
import org.openapis.openapi.models.shared.PlaceActionLinkInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest req = new MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest() {{
                pathParams = new MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new PlaceActionLinkInput() {{
                    isPreferred = false;
                    name = "suscipit";
                    placeActionType = "DINING_RESERVATION";
                    uri = "http://unique-baboon.org";
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