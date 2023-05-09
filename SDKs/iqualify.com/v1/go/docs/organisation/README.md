# Organisation

### Available Operations

* [GetOrg](#getorg) - Gets the current organisation

## GetOrg

Returns the current organisation info.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organisation.GetOrg(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgResponse != nil {
        // handle response
    }
}
```
