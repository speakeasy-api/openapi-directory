# Marketplacenotes

### Available Operations

* [AdexchangebuyerMarketplacenotesInsert](#adexchangebuyermarketplacenotesinsert) - Add notes to the proposal
* [AdexchangebuyerMarketplacenotesList](#adexchangebuyermarketplacenoteslist) - Get all the notes associated with a proposal

## AdexchangebuyerMarketplacenotesInsert

Add notes to the proposal

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
    res, err := s.Marketplacenotes.AdexchangebuyerMarketplacenotesInsert(ctx, operations.AdexchangebuyerMarketplacenotesInsertRequest{
        AddOrderNotesRequest: &shared.AddOrderNotesRequest{
            Notes: []shared.MarketplaceNote{
                shared.MarketplaceNote{
                    CreatorRole: sdk.String("adipisci"),
                    DealID: sdk.String("sunt"),
                    Kind: sdk.String("rerum"),
                    Note: sdk.String("occaecati"),
                    NoteID: sdk.String("provident"),
                    ProposalID: sdk.String("necessitatibus"),
                    ProposalRevisionNumber: sdk.String("fugit"),
                    TimestampMs: sdk.String("autem"),
                },
                shared.MarketplaceNote{
                    CreatorRole: sdk.String("optio"),
                    DealID: sdk.String("eveniet"),
                    Kind: sdk.String("fugiat"),
                    Note: sdk.String("blanditiis"),
                    NoteID: sdk.String("a"),
                    ProposalID: sdk.String("natus"),
                    ProposalRevisionNumber: sdk.String("sapiente"),
                    TimestampMs: sdk.String("repellendus"),
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("facilis"),
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "et",
        QuotaUser: sdk.String("accusantium"),
        UserIP: sdk.String("maiores"),
    }, operations.AdexchangebuyerMarketplacenotesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddOrderNotesResponse != nil {
        // handle response
    }
}
```

## AdexchangebuyerMarketplacenotesList

Get all the notes associated with a proposal

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
    res, err := s.Marketplacenotes.AdexchangebuyerMarketplacenotesList(ctx, operations.AdexchangebuyerMarketplacenotesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nisi"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("tempore"),
        PqlQuery: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        ProposalID: "hic",
        QuotaUser: sdk.String("blanditiis"),
        UserIP: sdk.String("vitae"),
    }, operations.AdexchangebuyerMarketplacenotesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrderNotesResponse != nil {
        // handle response
    }
}
```
