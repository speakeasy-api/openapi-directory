# Collectionstatuses

### Available Operations

* [ContentCollectionstatusesGet](#contentcollectionstatusesget) - Gets the status of a collection from your Merchant Center account.
* [ContentCollectionstatusesList](#contentcollectionstatuseslist) - Lists the statuses of the collections in your Merchant Center account.

## ContentCollectionstatusesGet

Gets the status of a collection from your Merchant Center account.

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
    res, err := s.Collectionstatuses.ContentCollectionstatusesGet(ctx, operations.ContentCollectionstatusesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        CollectionID: "voluptatum",
        Fields: sdk.String("quas"),
        Key: sdk.String("repudiandae"),
        MerchantID: "corporis",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("sed"),
    }, operations.ContentCollectionstatusesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionStatus != nil {
        // handle response
    }
}
```

## ContentCollectionstatusesList

Lists the statuses of the collections in your Merchant Center account.

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
    res, err := s.Collectionstatuses.ContentCollectionstatusesList(ctx, operations.ContentCollectionstatusesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("error"),
        Key: sdk.String("consequatur"),
        MerchantID: "incidunt",
        OauthToken: sdk.String("reiciendis"),
        PageSize: sdk.Int64(209750),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ContentCollectionstatusesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCollectionStatusesResponse != nil {
        // handle response
    }
}
```
