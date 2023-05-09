# Marketplaceprivateauction

### Available Operations

* [AdexchangebuyerMarketplaceprivateauctionUpdateproposal](#adexchangebuyermarketplaceprivateauctionupdateproposal) - Update a given private auction proposal

## AdexchangebuyerMarketplaceprivateauctionUpdateproposal

Update a given private auction proposal

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Marketplaceprivateauction.AdexchangebuyerMarketplaceprivateauctionUpdateproposal(ctx, operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest{
        UpdatePrivateAuctionProposalRequest: &shared.UpdatePrivateAuctionProposalRequest{
            ExternalDealID: sdk.String("iusto"),
            Note: &shared.MarketplaceNote{
                CreatorRole: sdk.String("atque"),
                DealID: sdk.String("velit"),
                Kind: sdk.String("molestiae"),
                Note: sdk.String("nam"),
                NoteID: sdk.String("aperiam"),
                ProposalID: sdk.String("vitae"),
                ProposalRevisionNumber: sdk.String("mollitia"),
                TimestampMs: sdk.String("asperiores"),
            },
            ProposalRevisionNumber: sdk.String("at"),
            UpdateAction: sdk.String("quibusdam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("quam"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        PrivateAuctionID: "vel",
        QuotaUser: sdk.String("eos"),
        UserIP: sdk.String("labore"),
    }, operations.AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
