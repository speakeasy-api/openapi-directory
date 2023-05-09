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
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "porro",
        QuotaUser: sdk.String("aspernatur"),
        RemarketingListID: "asperiores",
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("consequuntur"),
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
            Kind: sdk.String("aliquam"),
            RemarketingListID: sdk.String("architecto"),
            SharedAccountIds: []string{
                "sed",
                "enim",
                "architecto",
            },
            SharedAdvertiserIds: []string{
                "cumque",
                "saepe",
                "accusamus",
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("natus"),
        ID: "99f469f6-f1cf-41a3-b023-c669e6a62601",
        Key: sdk.String("sunt"),
        OauthToken: sdk.String("vero"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "expedita",
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("consequatur"),
        UploadProtocol: sdk.String("quis"),
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
            Kind: sdk.String("unde"),
            RemarketingListID: sdk.String("quos"),
            SharedAccountIds: []string{
                "placeat",
                "suscipit",
                "in",
            },
            SharedAdvertiserIds: []string{
                "alias",
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("ut"),
        UploadProtocol: sdk.String("alias"),
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
