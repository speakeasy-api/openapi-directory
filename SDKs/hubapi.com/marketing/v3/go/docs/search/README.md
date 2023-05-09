# Search

## Overview

Endpoints that allow you to search for Marketing Events in HubSpot.

### Available Operations

* [GetMarketingV3MarketingEventsEventsSearchDoSearch](#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

## GetMarketingV3MarketingEventsEventsSearchDoSearch

Search for marketing events that have an event id that starts with the query string

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Search.GetMarketingV3MarketingEventsEventsSearchDoSearch(ctx, operations.GetMarketingV3MarketingEventsEventsSearchDoSearchRequest{
        Q: "deleniti",
    }, operations.GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging != nil {
        // handle response
    }
}
```
