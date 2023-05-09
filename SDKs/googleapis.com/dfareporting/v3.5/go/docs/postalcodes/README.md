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
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Code: "architecto",
        Fields: sdk.String("atque"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusamus",
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("quo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("ut"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "delectus",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("beatae"),
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
