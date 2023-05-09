# VppAccounts

### Available Operations

* [GetOrganizationSmVppAccount](#getorganizationsmvppaccount) - Get a hash containing the unparsed token of the VPP account with the given ID
* [GetOrganizationSmVppAccounts](#getorganizationsmvppaccounts) - List the VPP accounts in the organization

## GetOrganizationSmVppAccount

Get a hash containing the unparsed token of the VPP account with the given ID

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
    res, err := s.VppAccounts.GetOrganizationSmVppAccount(ctx, operations.GetOrganizationSmVppAccountRequest{
        OrganizationID: "blanditiis",
        VppAccountID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccount200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSmVppAccounts

List the VPP accounts in the organization

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
    res, err := s.VppAccounts.GetOrganizationSmVppAccounts(ctx, operations.GetOrganizationSmVppAccountsRequest{
        OrganizationID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSmVppAccounts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
