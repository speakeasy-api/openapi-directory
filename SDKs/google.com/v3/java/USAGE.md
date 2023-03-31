<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreatePathParams;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateQueryParams;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateResponse;
import org.openapis.openapi.models.shared.AccountLinkStatusEnum;
import org.openapis.openapi.models.shared.AccountLink;
import org.openapis.openapi.models.shared.AccountLinkTarget;
import org.openapis.openapi.models.shared.HotelList;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksCreateRequest req = new TravelpartnerAccountsAccountLinksCreateRequest() {{
                pathParams = new TravelpartnerAccountsAccountLinksCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new TravelpartnerAccountsAccountLinksCreateQueryParams() {{
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
                request = new AccountLink() {{
                    accountLinkTarget = new AccountLinkTarget() {{
                        allHotels = false;
                        hotelList = new HotelList() {{
                            partnerHotelIds = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                        }};
                    }};
                    googleAdsCustomerName = "debitis";
                    name = "ipsa";
                    status = "APPROVED";
                }};
            }};            

            TravelpartnerAccountsAccountLinksCreateResponse res = sdk.accounts.travelpartnerAccountsAccountLinksCreate(req);

            if (res.accountLink.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->