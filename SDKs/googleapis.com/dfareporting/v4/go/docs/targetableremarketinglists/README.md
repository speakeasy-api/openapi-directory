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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("nam"),
        ID: "fdb59d8c-afcb-4278-b1bb-d9da7f37a5a6",
        Key: sdk.String("odit"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laborum",
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("maiores"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("a"),
        Active: sdk.Bool(false),
        AdvertiserID: "consequuntur",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("temporibus"),
        MaxResults: sdk.Int64(902709),
        Name: sdk.String("Pearl Kessler"),
        OauthToken: sdk.String("nihil"),
        PageToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "et",
        QuotaUser: sdk.String("cupiditate"),
        SortField: operations.DfareportingTargetableRemarketingListsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingTargetableRemarketingListsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("ullam"),
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
