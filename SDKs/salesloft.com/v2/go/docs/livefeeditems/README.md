# LiveFeedItems

## Overview

Live Feed Items

### Available Operations

* [PostV2ThirdPartyLiveFeedItems](#postv2thirdpartylivefeeditems) - Create a live feed item

## PostV2ThirdPartyLiveFeedItems

Creates a live feed item that can be sent to users. May only be used by whitelisted Frontend Integrations. Reference the Salesloft App Directory and Frontend Integrations sections for additional details.

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
    res, err := s.LiveFeedItems.PostV2ThirdPartyLiveFeedItems(ctx, operations.PostV2ThirdPartyLiveFeedItemsRequestBody{
        EventOccurredAt: "vel",
        IdempotencyKey: "magnam",
        Message: "quibusdam",
        SubjectID: 78969,
        SubjectType: "facere",
        UserGUID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
