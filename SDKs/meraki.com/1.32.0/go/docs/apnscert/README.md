# ApnsCert

### Available Operations

* [GetOrganizationSmApnsCert](#getorganizationsmapnscert) - Get the organization's APNS certificate

## GetOrganizationSmApnsCert

Get the organization's APNS certificate

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
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ApnsCert.GetOrganizationSmApnsCert(ctx, operations.GetOrganizationSmApnsCertRequest{
        OrganizationID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmApnsCert200ApplicationJSONObject != nil {
        // handle response
    }
}
```
