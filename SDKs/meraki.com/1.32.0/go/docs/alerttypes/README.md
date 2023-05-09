# AlertTypes

### Available Operations

* [GetOrganizationWebhooksAlertTypes](#getorganizationwebhooksalerttypes) - Return a list of alert types to be used with managing webhook alerts

## GetOrganizationWebhooksAlertTypes

Return a list of alert types to be used with managing webhook alerts

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
    res, err := s.AlertTypes.GetOrganizationWebhooksAlertTypes(ctx, operations.GetOrganizationWebhooksAlertTypesRequest{
        OrganizationID: "consequuntur",
        ProductType: operations.GetOrganizationWebhooksAlertTypesProductTypeEnumSensor.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationWebhooksAlertTypes200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
