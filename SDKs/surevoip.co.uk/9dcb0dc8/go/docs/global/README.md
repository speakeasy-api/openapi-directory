# Global

### Available Operations

* [Get](#get) - List global resources

## Get

List global resources

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Global.Get(ctx, operations.GetRequest{
        ContentType: operations.GetContentTypeEnumTextHTML.ToPointer(),
        Hypermedia: operations.GetHypermediaEnumYes.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200ApplicationJSONObject != nil {
        // handle response
    }
}
```
