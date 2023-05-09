# Search

### Available Operations

* [GetOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization

## GetOrganizationClientsSearch

Return the client details in an organization

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
    res, err := s.Search.GetOrganizationClientsSearch(ctx, operations.GetOrganizationClientsSearchRequest{
        EndingBefore: sdk.String("at"),
        Mac: "quis",
        OrganizationID: "nostrum",
        PerPage: sdk.Int64(122516),
        StartingAfter: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
