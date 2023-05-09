# RowAccessPolicies

### Available Operations

* [BigqueryRowAccessPoliciesList](#bigqueryrowaccesspolicieslist) - Lists all row access policies on the specified table.

## BigqueryRowAccessPoliciesList

Lists all row access policies on the specified table.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.RowAccessPolicies.BigqueryRowAccessPoliciesList(ctx, operations.BigqueryRowAccessPoliciesListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        DatasetID: "neque",
        Fields: sdk.String("pariatur"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("cupiditate"),
        PageSize: sdk.Int64(768613),
        PageToken: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        ProjectID: "omnis",
        QuotaUser: sdk.String("sapiente"),
        TableID: "consectetur",
        UserIP: sdk.String("quos"),
    }, operations.BigqueryRowAccessPoliciesListSecurity{
        Option1: &operations.BigqueryRowAccessPoliciesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRowAccessPoliciesResponse != nil {
        // handle response
    }
}
```
