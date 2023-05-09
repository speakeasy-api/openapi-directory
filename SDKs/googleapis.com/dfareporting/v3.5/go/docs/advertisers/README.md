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
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerLinkWrappingPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                PartnerAdvertiserID: sdk.String("quas"),
            },
            Name: sdk.String("Elbert Fay"),
            OriginalFloodlightConfigurationID: sdk.String("necessitatibus"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("nesciunt"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("soluta"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "cum",
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("commodi"),
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
        AccessToken: sdk.String("fugit"),
        AdvertiserGroupIds: []string{
            "ullam",
            "doloremque",
        },
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("praesentium"),
        FloodlightConfigurationIds: []string{
            "totam",
        },
        Ids: []string{
            "deserunt",
        },
        IncludeAdvertisersWithoutGroupsOnly: sdk.Bool(false),
        Key: sdk.String("eligendi"),
        MaxResults: sdk.Int64(275837),
        OauthToken: sdk.String("deleniti"),
        OnlyParent: sdk.Bool(false),
        PageToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "est",
        QuotaUser: sdk.String("reiciendis"),
        SearchString: sdk.String("possimus"),
        SortField: operations.DfareportingAdvertisersListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingAdvertisersListSortOrderEnumAscending.ToPointer(),
        Status: operations.DfareportingAdvertisersListStatusEnumApproved.ToPointer(),
        SubaccountID: sdk.String("minima"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("facilis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("nisi"),
            AdvertiserGroupID: sdk.String("ipsam"),
            ClickThroughURLSuffix: sdk.String("voluptatem"),
            DefaultClickThroughEventTagID: sdk.String("illo"),
            DefaultEmail: sdk.String("iure"),
            FloodlightConfigurationID: sdk.String("incidunt"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eveniet"),
                Etag: sdk.String("quae"),
                ID: sdk.String("6f5bf6ae-591b-4c8b-9ef3-612b63c205fd"),
                Kind: sdk.String("id"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("quaerat"),
            },
            ID: sdk.String("aperiam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dignissimos"),
                Etag: sdk.String("quam"),
                ID: sdk.String("4a68a9a3-5d08-46b6-b66f-ef020e9f443b"),
                Kind: sdk.String("incidunt"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("enim"),
            },
            Kind: sdk.String("nihil"),
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerLinkOptOutPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                PartnerAdvertiserID: sdk.String("excepturi"),
            },
            Name: sdk.String("Rosalie Lockman"),
            OriginalFloodlightConfigurationID: sdk.String("quibusdam"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("commodi"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("recusandae"),
        ID: "fa219825-8fd0-4a9e-ba47-f7d3ef049640",
        Key: sdk.String("illum"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("quisquam"),
            AdvertiserGroupID: sdk.String("atque"),
            ClickThroughURLSuffix: sdk.String("nihil"),
            DefaultClickThroughEventTagID: sdk.String("culpa"),
            DefaultEmail: sdk.String("temporibus"),
            FloodlightConfigurationID: sdk.String("a"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ad"),
                Etag: sdk.String("cupiditate"),
                ID: sdk.String("6fdf1ad8-37ae-480c-9c19-c95ba998678f"),
                Kind: sdk.String("deserunt"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("hic"),
            },
            ID: sdk.String("iure"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sint"),
                Etag: sdk.String("autem"),
                ID: sdk.String("991af388-ce03-4614-848c-7977a0ef2f53"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("sed"),
            },
            Kind: sdk.String("voluptatum"),
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerModeChangePending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumDoubleVerify.ToPointer(),
                PartnerAdvertiserID: sdk.String("itaque"),
            },
            Name: sdk.String("Edmond McDermott"),
            OriginalFloodlightConfigurationID: sdk.String("illo"),
            Status: shared.AdvertiserStatusEnumApproved.ToPointer(),
            SubaccountID: sdk.String("sed"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "non",
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("quod"),
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
