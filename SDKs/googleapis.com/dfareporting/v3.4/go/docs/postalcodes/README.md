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
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Code: "sed",
        Fields: sdk.String("ea"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "doloribus",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("ipsa"),
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "debitis",
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("nam"),
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
