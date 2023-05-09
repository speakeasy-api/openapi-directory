# Quotes

### Available Operations

* [GetQuotesQuoteID](#getquotesquoteid) - /quotes/{quote_id}

## GetQuotesQuoteID

### Get a quote

Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response. 

> If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Quotes.GetQuotesQuoteID(ctx, operations.GetQuotesQuoteIDRequest{
        QuoteID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetQuotesQuoteID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
