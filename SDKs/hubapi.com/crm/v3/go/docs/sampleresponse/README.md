# SampleResponse

## Overview

Operations related to card detail responses sent to HubSpot by an app.

### Available Operations

* [GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse](#getcrmv3extensionscardssampleresponsegetcardssampleresponse) - Get sample card detail response

## GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse

Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SampleResponse.GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponse(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.IntegratorCardPayloadResponse != nil {
        // handle response
    }
}
```
