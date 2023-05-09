# OrderDocuments

### Available Operations

* [DfareportingOrderDocumentsGet](#dfareportingorderdocumentsget) - Gets one order document by ID.
* [DfareportingOrderDocumentsList](#dfareportingorderdocumentslist) - Retrieves a list of order documents, possibly filtered. This method supports paging.

## DfareportingOrderDocumentsGet

Gets one order document by ID.

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
    res, err := s.OrderDocuments.DfareportingOrderDocumentsGet(ctx, operations.DfareportingOrderDocumentsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("accusamus"),
        ID: "aa6bf2ff-14e8-4c1b-b52a-ccedacc52278",
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "recusandae",
        ProjectID: "porro",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DfareportingOrderDocumentsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderDocument != nil {
        // handle response
    }
}
```

## DfareportingOrderDocumentsList

Retrieves a list of order documents, possibly filtered. This method supports paging.

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
    res, err := s.OrderDocuments.DfareportingOrderDocumentsList(ctx, operations.DfareportingOrderDocumentsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("inventore"),
        Ids: []string{
            "harum",
            "quae",
            "consectetur",
            "quaerat",
        },
        Key: sdk.String("explicabo"),
        MaxResults: sdk.Int64(852547),
        OauthToken: sdk.String("quaerat"),
        OrderID: []string{
            "perferendis",
        },
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "similique",
        ProjectID: "dolores",
        QuotaUser: sdk.String("veniam"),
        SearchString: sdk.String("debitis"),
        SiteID: []string{
            "iusto",
            "quasi",
            "fugiat",
            "debitis",
        },
        SortField: operations.DfareportingOrderDocumentsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingOrderDocumentsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DfareportingOrderDocumentsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderDocumentsListResponse != nil {
        // handle response
    }
}
```
