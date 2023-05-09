# TargetableRemarketingLists

### Available Operations

* [DfareportingTargetableRemarketingListsGet](#dfareportingtargetableremarketinglistsget) - Gets one remarketing list by ID.
* [DfareportingTargetableRemarketingListsList](#dfareportingtargetableremarketinglistslist) - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

## DfareportingTargetableRemarketingListsGet

Gets one remarketing list by ID.

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
    res, err := s.TargetableRemarketingLists.DfareportingTargetableRemarketingListsGet(ctx, operations.DfareportingTargetableRemarketingListsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("voluptatum"),
        ID: "37399065-df23-405a-9382-6b6d6cb27944",
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tenetur",
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("reprehenderit"),
    }, operations.DfareportingTargetableRemarketingListsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetableRemarketingList != nil {
        // handle response
    }
}
```

## DfareportingTargetableRemarketingListsList

Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

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
    res, err := s.TargetableRemarketingLists.DfareportingTargetableRemarketingListsList(ctx, operations.DfareportingTargetableRemarketingListsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("neque"),
        Active: sdk.Bool(false),
        AdvertiserID: "possimus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quo"),
        Key: sdk.String("quis"),
        MaxResults: sdk.Int64(244984),
        Name: sdk.String("Sheri Schoen"),
        OauthToken: sdk.String("officia"),
        PageToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quas",
        QuotaUser: sdk.String("porro"),
        SortField: operations.DfareportingTargetableRemarketingListsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetableRemarketingListsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.DfareportingTargetableRemarketingListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TargetableRemarketingListsListResponse != nil {
        // handle response
    }
}
```
