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
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "harum",
        QuotaUser: sdk.String("aliquid"),
        RemarketingListID: "necessitatibus",
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("similique"),
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
            Kind: sdk.String("debitis"),
            RemarketingListID: sdk.String("quis"),
            SharedAccountIds: []string{
                "doloremque",
                "tempore",
                "error",
                "cupiditate",
            },
            SharedAdvertiserIds: []string{
                "velit",
                "nobis",
                "illo",
                "amet",
            },
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("nisi"),
        ID: "a87bb7ae-cbe5-469d-b0cb-069907f98944",
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nostrum",
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("sint"),
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
            Kind: sdk.String("ipsa"),
            RemarketingListID: sdk.String("quasi"),
            SharedAccountIds: []string{
                "dolorem",
                "quaerat",
                "incidunt",
                "eos",
            },
            SharedAdvertiserIds: []string{
                "vel",
                "inventore",
                "quidem",
                "debitis",
            },
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nulla",
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("neque"),
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
