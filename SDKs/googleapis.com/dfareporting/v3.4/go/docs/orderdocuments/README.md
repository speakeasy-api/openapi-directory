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
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("dolorem"),
        ID: "59b855d0-15b6-42c8-b83a-38a8a88c1442",
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "optio",
        ProjectID: "aspernatur",
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("repudiandae"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Approved: sdk.Bool(false),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("ab"),
        Ids: []string{
            "impedit",
            "repellat",
            "laudantium",
            "quo",
        },
        Key: sdk.String("adipisci"),
        MaxResults: sdk.Int64(262638),
        OauthToken: sdk.String("cupiditate"),
        OrderID: []string{
            "commodi",
            "harum",
        },
        PageToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorum",
        ProjectID: "ducimus",
        QuotaUser: sdk.String("id"),
        SearchString: sdk.String("accusantium"),
        SiteID: []string{
            "deserunt",
            "totam",
        },
        SortField: operations.DfareportingOrderDocumentsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingOrderDocumentsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("perspiciatis"),
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
