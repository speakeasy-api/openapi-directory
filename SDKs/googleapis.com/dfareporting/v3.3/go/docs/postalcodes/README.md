# PostalCodes

### Available Operations

* [DfareportingPostalCodesGet](#dfareportingpostalcodesget) - Gets one postal code by ID.
* [DfareportingPostalCodesList](#dfareportingpostalcodeslist) - Retrieves a list of postal codes.

## DfareportingPostalCodesGet

Gets one postal code by ID.

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
    res, err := s.PostalCodes.DfareportingPostalCodesGet(ctx, operations.DfareportingPostalCodesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Code: "ad",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eos",
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DfareportingPostalCodesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostalCode != nil {
        // handle response
    }
}
```

## DfareportingPostalCodesList

Retrieves a list of postal codes.

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
    res, err := s.PostalCodes.DfareportingPostalCodesList(ctx, operations.DfareportingPostalCodesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("esse"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusamus",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DfareportingPostalCodesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PostalCodesListResponse != nil {
        // handle response
    }
}
```
