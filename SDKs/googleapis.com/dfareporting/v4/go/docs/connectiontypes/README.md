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
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("perspiciatis"),
        ID: "c242c7b6-6a1f-430c-b3df-5b6719890f42",
        Key: sdk.String("est"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("adipisci"),
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
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("exercitationem"),
        Fields: sdk.String("tempore"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("dicta"),
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
