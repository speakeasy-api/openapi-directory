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
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("repellendus"),
        ID: "62fcdace-1f01-4216-8e22-39e8f25cd0d1",
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "excepturi",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("doloribus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("velit"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nisi",
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("facilis"),
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
