# Advertisers

### Available Operations

* [DfareportingAdvertisersGet](#dfareportingadvertisersget) - Gets one advertiser by ID.
* [DfareportingAdvertisersInsert](#dfareportingadvertisersinsert) - Inserts a new advertiser.
* [DfareportingAdvertisersList](#dfareportingadvertiserslist) - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* [DfareportingAdvertisersPatch](#dfareportingadvertiserspatch) - Updates an existing advertiser. This method supports patch semantics.
* [DfareportingAdvertisersUpdate](#dfareportingadvertisersupdate) - Updates an existing advertiser.

## DfareportingAdvertisersGet

Gets one advertiser by ID.

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
    res, err := s.Advertisers.DfareportingAdvertisersGet(ctx, operations.DfareportingAdvertisersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("maiores"),
        ID: "068981d6-bb33-4cfa-a348-c31bf407ee4f",
        Key: sdk.String("eligendi"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("aspernatur"),
    }, operations.DfareportingAdvertisersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DfareportingAdvertisersInsert

Inserts a new advertiser.

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
    res, err := s.Advertisers.DfareportingAdvertisersInsert(ctx, operations.DfareportingAdvertisersInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("nihil"),
            AdvertiserGroupID: sdk.String("voluptatum"),
            ClickThroughURLSuffix: sdk.String("reiciendis"),
            DefaultClickThroughEventTagID: sdk.String("vitae"),
            DefaultEmail: sdk.String("ullam"),
            FloodlightConfigurationID: sdk.String("nisi"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consequuntur"),
                Etag: sdk.String("voluptas"),
                ID: sdk.String("398a0dc7-6632-44cc-b06c-8ca12d025292"),
                Kind: sdk.String("odio"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("quidem"),
            },
            ID: sdk.String("deleniti"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("possimus"),
                Etag: sdk.String("ipsam"),
                ID: sdk.String("722dd895-b8bc-4f24-9b95-9693352f7453"),
                Kind: sdk.String("adipisci"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("occaecati"),
            },
            Kind: sdk.String("numquam"),
            Name: sdk.String("Javier Lynch"),
            OriginalFloodlightConfigurationID: sdk.String("amet"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("vel"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("cum"),
    }, operations.DfareportingAdvertisersInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DfareportingAdvertisersList

Retrieves a list of advertisers, possibly filtered. This method supports paging.

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
    res, err := s.Advertisers.DfareportingAdvertisersList(ctx, operations.DfareportingAdvertisersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        AdvertiserGroupIds: []string{
            "commodi",
            "fugit",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("doloremque"),
        FloodlightConfigurationIds: []string{
            "qui",
            "praesentium",
            "adipisci",
        },
        Ids: []string{
            "qui",
            "deserunt",
            "eligendi",
        },
        IncludeAdvertisersWithoutGroupsOnly: sdk.Bool(false),
        Key: sdk.String("incidunt"),
        MaxResults: sdk.Int64(535883),
        OauthToken: sdk.String("dolor"),
        OnlyParent: sdk.Bool(false),
        PageToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reiciendis",
        QuotaUser: sdk.String("possimus"),
        SearchString: sdk.String("odit"),
        SortField: operations.DfareportingAdvertisersListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAdvertisersListSortOrderEnumAscending.ToPointer(),
        Status: operations.DfareportingAdvertisersListStatusEnumApproved.ToPointer(),
        SubaccountID: sdk.String("facilis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DfareportingAdvertisersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertisersListResponse != nil {
        // handle response
    }
}
```

## DfareportingAdvertisersPatch

Updates an existing advertiser. This method supports patch semantics.

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
    res, err := s.Advertisers.DfareportingAdvertisersPatch(ctx, operations.DfareportingAdvertisersPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("ipsam"),
            AdvertiserGroupID: sdk.String("voluptatem"),
            ClickThroughURLSuffix: sdk.String("illo"),
            DefaultClickThroughEventTagID: sdk.String("iure"),
            DefaultEmail: sdk.String("incidunt"),
            FloodlightConfigurationID: sdk.String("eveniet"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quae"),
                Etag: sdk.String("ea"),
                ID: sdk.String("f5bf6ae5-91bc-48bd-af36-12b63c205fda"),
                Kind: sdk.String("atque"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("aperiam"),
            },
            ID: sdk.String("dignissimos"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quam"),
                Etag: sdk.String("modi"),
                ID: sdk.String("a68a9a35-d086-4b6f-a6fe-f020e9f443b4"),
                Kind: sdk.String("dolores"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nihil"),
            },
            Kind: sdk.String("libero"),
            Name: sdk.String("Marshall Daugherty"),
            OriginalFloodlightConfigurationID: sdk.String("repellendus"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("quibusdam"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("similique"),
        Fields: sdk.String("autem"),
        ID: "1efa2198-258f-4d0a-9eba-47f7d3ef0496",
        Key: sdk.String("dolore"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illum",
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DfareportingAdvertisersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DfareportingAdvertisersUpdate

Updates an existing advertiser.

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
    res, err := s.Advertisers.DfareportingAdvertisersUpdate(ctx, operations.DfareportingAdvertisersUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("ratione"),
            AdvertiserGroupID: sdk.String("vitae"),
            ClickThroughURLSuffix: sdk.String("quisquam"),
            DefaultClickThroughEventTagID: sdk.String("atque"),
            DefaultEmail: sdk.String("nihil"),
            FloodlightConfigurationID: sdk.String("culpa"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("temporibus"),
                Etag: sdk.String("a"),
                ID: sdk.String("596fdf1a-d837-4ae8-8c1c-19c95ba99867"),
                Kind: sdk.String("voluptatum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("deserunt"),
            },
            ID: sdk.String("dolor"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("hic"),
                Etag: sdk.String("iure"),
                ID: sdk.String("96991af3-88ce-4036-9444-8c7977a0ef2f"),
                Kind: sdk.String("exercitationem"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("laboriosam"),
            },
            Kind: sdk.String("doloremque"),
            Name: sdk.String("Nora Toy"),
            OriginalFloodlightConfigurationID: sdk.String("eveniet"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("cupiditate"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "possimus",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DfareportingAdvertisersUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```
