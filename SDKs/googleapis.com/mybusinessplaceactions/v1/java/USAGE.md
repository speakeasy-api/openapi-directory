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