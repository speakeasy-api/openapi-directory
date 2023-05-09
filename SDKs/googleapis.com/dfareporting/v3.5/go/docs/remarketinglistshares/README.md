# RemarketingListShares

### Available Operations

* [DfareportingRemarketingListSharesGet](#dfareportingremarketinglistsharesget) - Gets one remarketing list share by remarketing list ID.
* [DfareportingRemarketingListSharesPatch](#dfareportingremarketinglistsharespatch) - Updates an existing remarketing list share. This method supports patch semantics.
* [DfareportingRemarketingListSharesUpdate](#dfareportingremarketinglistsharesupdate) - Updates an existing remarketing list share.

## DfareportingRemarketingListSharesGet

Gets one remarketing list share by remarketing list ID.

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
    res, err := s.RemarketingListShares.DfareportingRemarketingListSharesGet(ctx, operations.DfareportingRemarketingListSharesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "soluta",
        QuotaUser: sdk.String("hic"),
        RemarketingListID: "quos",
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("neque"),
    }, operations.DfareportingRemarketingListSharesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingListShare != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListSharesPatch

Updates an existing remarketing list share. This method supports patch semantics.

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
    res, err := s.RemarketingListShares.DfareportingRemarketingListSharesPatch(ctx, operations.DfareportingRemarketingListSharesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemarketingListShare: &shared.RemarketingListShare{
            Kind: sdk.String("harum"),
            RemarketingListID: sdk.String("eveniet"),
            SharedAccountIds: []string{
                "alias",
                "provident",
            },
            SharedAdvertiserIds: []string{
                "exercitationem",
                "consequatur",
                "atque",
                "quam",
            },
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("a"),
        ID: "06f0bce5-5a86-4871-83c9-7905ff797a5d",
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ex",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("in"),
    }, operations.DfareportingRemarketingListSharesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingListShare != nil {
        // handle response
    }
}
```

## DfareportingRemarketingListSharesUpdate

Updates an existing remarketing list share.

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
    res, err := s.RemarketingListShares.DfareportingRemarketingListSharesUpdate(ctx, operations.DfareportingRemarketingListSharesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemarketingListShare: &shared.RemarketingListShare{
            Kind: sdk.String("reprehenderit"),
            RemarketingListID: sdk.String("dignissimos"),
            SharedAccountIds: []string{
                "mollitia",
                "nihil",
                "dolore",
            },
            SharedAdvertiserIds: []string{
                "error",
                "culpa",
                "culpa",
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eum",
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.DfareportingRemarketingListSharesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemarketingListShare != nil {
        // handle response
    }
}
```
