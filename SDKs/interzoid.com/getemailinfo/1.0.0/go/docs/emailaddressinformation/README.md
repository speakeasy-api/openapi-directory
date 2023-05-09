# EmailAddressInformation

### Available Operations

* [Getemailinfo](#getemailinfo) - Gets email validation information for an email address

## Getemailinfo

Get email validation information and other demographics for an email address.

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
    res, err := s.EmailAddressInformation.Getemailinfo(ctx, operations.GetemailinfoRequest{
        Email: "Henry.Mueller@hotmail.com",
        License: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getemailinfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
