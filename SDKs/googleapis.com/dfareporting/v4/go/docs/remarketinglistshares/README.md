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
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("neque"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eaque",
        QuotaUser: sdk.String("aliquid"),
        RemarketingListID: "maiores",
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("tempore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemarketingListShare: &shared.RemarketingListShare{
            Kind: sdk.String("voluptates"),
            RemarketingListID: sdk.String("enim"),
            SharedAccountIds: []string{
                "officia",
                "quas",
            },
            SharedAdvertiserIds: []string{
                "voluptatum",
                "iure",
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("quisquam"),
        ID: "97905ff7-97a5-4da6-a4b7-e778a74baaa2",
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consequuntur",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("eum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemarketingListShare: &shared.RemarketingListShare{
            Kind: sdk.String("totam"),
            RemarketingListID: sdk.String("laboriosam"),
            SharedAccountIds: []string{
                "illum",
            },
            SharedAdvertiserIds: []string{
                "dolorum",
            },
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "tempora",
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
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
