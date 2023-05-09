# Pubprofiles

### Available Operations

* [AdexchangebuyerPubprofilesList](#adexchangebuyerpubprofileslist) - Gets the requested publisher profile(s) by publisher accountId.

## AdexchangebuyerPubprofilesList

Gets the requested publisher profile(s) by publisher accountId.

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
    res, err := s.Pubprofiles.AdexchangebuyerPubprofilesList(ctx, operations.AdexchangebuyerPubprofilesListRequest{
        AccountID: 158059,
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("veniam"),
        Key: sdk.String("est"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UserIP: sdk.String("maiores"),
    }, operations.AdexchangebuyerPubprofilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPublisherProfilesByAccountIDResponse != nil {
        // handle response
    }
}
```
