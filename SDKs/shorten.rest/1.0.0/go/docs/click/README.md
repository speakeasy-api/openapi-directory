# Click

## Overview

**Operations:** Get List

### Available Operations

* [GetClicks](#getclicks) - Get clicks

## GetClicks

Retrieve the raw click data for your account. Clicks are retrieved by creation date in descending order. 

 If there are more results than the limit for the request the response will return you a value in lastId property you can specify it in the continueFrom query parameter to get the next batch of records.

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
    res, err := s.Click.GetClicks(ctx, operations.GetClicksRequest{
        ContinueFrom: sdk.String("quidem"),
        Limit: sdk.Int64(373291),
    }, operations.GetClicksSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClicksModel != nil {
        // handle response
    }
}
```
