<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateResponse;
import org.openapis.openapi.models.shared.AccountLink;
import org.openapis.openapi.models.shared.AccountLinkStatusEnum;
import org.openapis.openapi.models.shared.AccountLinkTarget;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.HotelList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksCreateRequest req = new TravelpartnerAccountsAccountLinksCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accountLink = new AccountLink() {{
                    accountLinkTarget = new AccountLinkTarget() {{
                        allHotels = false;
                        hotelList = new HotelList() {{
                            partnerHotelIds = new String[]{{
                                add("quibusdam"),
                                add("unde"),
                                add("nulla"),
                            }};
                        }};;
                    }};;
                    googleAdsCustomerName = "corrupti";
                    name = "Ben Mueller";
                    status = AccountLinkStatusEnum.REQUESTED_FROM_HOTEL_CENTER;
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "delectus";
                key = "tempora";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "minus";
                uploadProtocol = "placeat";
            }};            

            TravelpartnerAccountsAccountLinksCreateResponse res = sdk.accounts.travelpartnerAccountsAccountLinksCreate(req);

            if (res.accountLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->