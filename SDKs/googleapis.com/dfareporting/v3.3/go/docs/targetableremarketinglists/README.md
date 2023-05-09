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
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("nobis"),
        ID: "eabf8012-4590-448f-a667-67e29d4e543c",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("debitis"),
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
        AccessToken: sdk.String("necessitatibus"),
        Active: sdk.Bool(false),
        AdvertiserID: "atque",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("nobis"),
        Key: sdk.String("modi"),
        MaxResults: sdk.Int64(455808),
        Name: sdk.String("Leah Gorczany"),
        OauthToken: sdk.String("saepe"),
        PageToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rem",
        QuotaUser: sdk.String("sunt"),
        SortField: operations.DfareportingTargetableRemarketingListsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetableRemarketingListsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("facilis"),
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
