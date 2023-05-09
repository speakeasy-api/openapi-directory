# OpenapiSpec

### Available Operations

* [GetOrganizationOpenapiSpec](#getorganizationopenapispec) - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

## GetOrganizationOpenapiSpec

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

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
    res, err := s.OpenapiSpec.GetOrganizationOpenapiSpec(ctx, operations.GetOrganizationOpenapiSpecRequest{
        OrganizationID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationOpenapiSpec200ApplicationJSONObject != nil {
        // handle response
    }
}
```
