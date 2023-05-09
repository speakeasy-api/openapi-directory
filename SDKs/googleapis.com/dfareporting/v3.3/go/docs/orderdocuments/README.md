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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("hic"),
        ID: "002d1986-aa99-4d3a-9d32-329e45837e8f",
        Key: sdk.String("qui"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "fugiat",
        ProjectID: "laboriosam",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("inventore"),
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
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("ipsam"),
        Ids: []string{
            "repellendus",
            "cumque",
            "aliquam",
            "corrupti",
        },
        Key: sdk.String("ipsa"),
        MaxResults: sdk.Int64(825596),
        OauthToken: sdk.String("voluptas"),
        OrderID: []string{
            "adipisci",
            "ipsum",
            "ipsa",
            "totam",
        },
        PageToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dignissimos",
        ProjectID: "exercitationem",
        QuotaUser: sdk.String("quod"),
        SearchString: sdk.String("tempore"),
        SiteID: []string{
            "quae",
            "blanditiis",
            "voluptas",
            "molestias",
        },
        SortField: operations.DfareportingOrderDocumentsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingOrderDocumentsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("ducimus"),
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
