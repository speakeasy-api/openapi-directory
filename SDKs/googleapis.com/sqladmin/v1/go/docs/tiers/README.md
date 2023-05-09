# Tiers

### Available Operations

* [SQLTiersList](#sqltierslist) - Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

## SQLTiersList

Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For more information, see https://cloud.google.com/sql/pricing.

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
    res, err := s.Tiers.SQLTiersList(ctx, operations.SQLTiersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        Project: "impedit",
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.SQLTiersListSecurity{
        Option1: &operations.SQLTiersListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TiersListResponse != nil {
        // handle response
    }
}
```
