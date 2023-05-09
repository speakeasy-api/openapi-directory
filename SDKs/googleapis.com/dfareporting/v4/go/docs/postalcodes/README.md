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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Code: "dolorum",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sed",
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("suscipit"),
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
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("harum"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquid",
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("sunt"),
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
