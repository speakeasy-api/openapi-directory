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
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("illo"),
        ID: "c1585bee-ae66-4a92-9d17-4da31457fd36",
        Key: sdk.String("optio"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsa",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("ea"),
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
        AccessToken: sdk.String("quia"),
        Active: sdk.Bool(false),
        AdvertiserID: "animi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("labore"),
        Key: sdk.String("cumque"),
        MaxResults: sdk.Int64(992054),
        Name: sdk.String("Melissa Friesen"),
        OauthToken: sdk.String("nulla"),
        PageToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquam",
        QuotaUser: sdk.String("numquam"),
        SortField: operations.DfareportingTargetableRemarketingListsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingTargetableRemarketingListsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("ipsa"),
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
