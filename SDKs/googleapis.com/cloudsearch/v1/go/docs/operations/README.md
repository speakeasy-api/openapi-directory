# Operations

### Available Operations

* [CloudsearchOperationsGet](#cloudsearchoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [CloudsearchOperationsLroList](#cloudsearchoperationslrolist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## CloudsearchOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Operations.CloudsearchOperationsGet(ctx, operations.CloudsearchOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("dicta"),
        Name: "Elisa Boyle",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.CloudsearchOperationsGetSecurity{
        Option1: &operations.CloudsearchOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## CloudsearchOperationsLroList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Operations.CloudsearchOperationsLroList(ctx, operations.CloudsearchOperationsLroListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("corporis"),
        Filter: sdk.String("veniam"),
        Key: sdk.String("aliquid"),
        Name: "Megan Jaskolski",
        OauthToken: sdk.String("recusandae"),
        PageSize: sdk.Int64(132487),
        PageToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("libero"),
    }, operations.CloudsearchOperationsLroListSecurity{
        Option1: &operations.CloudsearchOperationsLroListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```
