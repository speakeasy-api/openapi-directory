# Flags

### Available Operations

* [SQLFlagsList](#sqlflagslist) - Lists all available database flags for Cloud SQL instances.

## SQLFlagsList

Lists all available database flags for Cloud SQL instances.

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
    res, err := s.Flags.SQLFlagsList(ctx, operations.SQLFlagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        DatabaseVersion: sdk.String("nemo"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.SQLFlagsListSecurity{
        Option1: &operations.SQLFlagsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FlagsListResponse != nil {
        // handle response
    }
}
```
