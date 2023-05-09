# ConnectionTypes

### Available Operations

* [DfareportingConnectionTypesGet](#dfareportingconnectiontypesget) - Gets one connection type by ID.
* [DfareportingConnectionTypesList](#dfareportingconnectiontypeslist) - Retrieves a list of connection types.

## DfareportingConnectionTypesGet

Gets one connection type by ID.

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
    res, err := s.ConnectionTypes.DfareportingConnectionTypesGet(ctx, operations.DfareportingConnectionTypesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("excepturi"),
        ID: "fb0e67e0-94fd-4fed-9540-ef53a34a1b8f",
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "natus",
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.DfareportingConnectionTypesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionType != nil {
        // handle response
    }
}
```

## DfareportingConnectionTypesList

Retrieves a list of connection types.

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
    res, err := s.ConnectionTypes.DfareportingConnectionTypesList(ctx, operations.DfareportingConnectionTypesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("ad"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quis",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DfareportingConnectionTypesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConnectionTypesListResponse != nil {
        // handle response
    }
}
```
