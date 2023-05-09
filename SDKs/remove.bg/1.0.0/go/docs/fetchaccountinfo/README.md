# FetchAccountInfo

### Available Operations

* [GetAccount](#getaccount) - Fetch credit balance and free API calls.

## GetAccount

Get the current credit balance and number of free API calls.

Notes:

* Balance changes may be delayed by several seconds. To locally keep track of your credit balance, you should therefore only call this endpoint initially (or e.g. when the user manually triggers a refresh), then use the `X-Credits-Charged` response header returned with each image processing response to adjust the local balance.

* The "*sizes*" field is always "all", is deprecated and will soon be removed.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FetchAccountInfo.GetAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
