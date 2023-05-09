# Privileges

### Available Operations

* [DirectoryPrivilegesList](#directoryprivilegeslist) - Retrieves a paginated list of all privileges for a customer.

## DirectoryPrivilegesList

Retrieves a paginated list of all privileges for a customer.

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
    res, err := s.Privileges.DirectoryPrivilegesList(ctx, operations.DirectoryPrivilegesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("itaque"),
        Customer: "minus",
        Fields: sdk.String("sunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("iusto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("facilis"),
    }, operations.DirectoryPrivilegesListSecurity{
        Option1: &operations.DirectoryPrivilegesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Privileges != nil {
        // handle response
    }
}
```
