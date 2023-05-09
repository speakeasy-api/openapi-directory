# marketplaceprivateauction

### Available Operations

* [adexchangebuyerMarketplaceprivateauctionUpdateproposal](#adexchangebuyermarketplaceprivateauctionupdateproposal) - Update a given private auction proposal

## adexchangebuyerMarketplaceprivateauctionUpdateproposal

Update a given private auction proposal

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MarketplaceNote;
import org.openapis.openapi.models.shared.UpdatePrivateAuctionProposalRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest req = new AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest("mollitia") {{
                updatePrivateAuctionProposalRequest = new UpdatePrivateAuctionProposalRequest() {{
                    externalDealId = "dignissimos";
                    note = new MarketplaceNote() {{
                        creatorRole = "fugiat";
                        dealId = "nostrum";
                        kind = "molestiae";
                        note = "veniam";
                        noteId = "reiciendis";
                        proposalId = "ab";
                        proposalRevisionNumber = "modi";
                        timestampMs = "aut";
                    }};;
                    proposalRevisionNumber = "aut";
                    updateAction = "eveniet";
                }};;
                alt = AltEnum.JSON;
                fields = "odio";
                key = "commodi";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "dolorum";
                userIp = "possimus";
            }};            

            AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse res = sdk.marketplaceprivateauction.adexchangebuyerMarketplaceprivateauctionUpdateproposal(req, new AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity("voluptate", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
