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
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("natus"),
        ID: "693352f7-4533-4994-978d-e3b6e9389f5a",
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "in",
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("commodi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Advertiser: &shared.Advertiser{
            AccountID: sdk.String("ullam"),
            AdvertiserGroupID: sdk.String("ullam"),
            ClickThroughURLSuffix: sdk.String("doloremque"),
            DefaultClickThroughEventTagID: sdk.String("est"),
            DefaultEmail: sdk.String("qui"),
            FloodlightConfigurationID: sdk.String("praesentium"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("adipisci"),
                Etag: sdk.String("totam"),
                ID: sdk.String("2ac483af-d231-45bb-a650-164e06f5bf6a"),
                Kind: sdk.String("repudiandae"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("molestias"),
            },
            ID: sdk.String("architecto"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("expedita"),
                Etag: sdk.String("quisquam"),
                ID: sdk.String("8bdef361-2b63-4c20-9fda-840774a68a9a"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("illum"),
            },
            Kind: sdk.String("sit"),
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerLinkOptOut.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumIntegralAdScience.ToPointer(),
                PartnerAdvertiserID: sdk.String("expedita"),
            },
            Name: sdk.String("Elisa Jenkins"),
            OriginalFloodlightConfigurationID: sdk.String("accusamus"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("consequatur"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("provident"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "numquam",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("incidunt"),
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
        AccessToken: sdk.String("enim"),
        AdvertiserGroupIds: []string{
            "libero",
            "omnis",
        },
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("quisquam"),
        FloodlightConfigurationIds: []string{
            "repellendus",
            "cum",
            "quibusdam",
        },
        Ids: []string{
            "commodi",
            "similique",
            "autem",
        },
        IncludeAdvertisersWithoutGroupsOnly: sdk.Bool(false),
        Key: sdk.String("dicta"),
        MaxResults: sdk.Int64(926266),
        OauthToken: sdk.String("sapiente"),
        OnlyParent: sdk.Bool(false),
        PageToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "odit",
        QuotaUser: sdk.String("inventore"),
        SearchString: sdk.String("iste"),
        SortField: operations.DfareportingAdvertisersListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingAdvertisersListSortOrderEnumAscending.ToPointer(),
        Status: operations.DfareportingAdvertisersListStatusEnumApproved.ToPointer(),
        SubaccountID: sdk.String("atque"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("pariatur"),
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
            AccountID: sdk.String("similique"),
            AdvertiserGroupID: sdk.String("iste"),
            ClickThroughURLSuffix: sdk.String("eveniet"),
            DefaultClickThroughEventTagID: sdk.String("nam"),
            DefaultEmail: sdk.String("animi"),
            FloodlightConfigurationID: sdk.String("labore"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptate"),
                Etag: sdk.String("voluptatibus"),
                ID: sdk.String("7d3ef049-640d-46a1-831c-87adf596fdf1"),
                Kind: sdk.String("mollitia"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("praesentium"),
            },
            ID: sdk.String("neque"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quam"),
                Etag: sdk.String("animi"),
                ID: sdk.String("e80c1c19-c95b-4a99-8678-fa3f696991af"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("molestias"),
            },
            Kind: sdk.String("quod"),
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerModeChangePending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumNone.ToPointer(),
                PartnerAdvertiserID: sdk.String("consectetur"),
            },
            Name: sdk.String("Gloria Gerhold"),
            OriginalFloodlightConfigurationID: sdk.String("quos"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("voluptate"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("animi"),
        ID: "0ef2f536-028e-4fee-b934-152ed7e253f4",
        Key: sdk.String("quod"),
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ullam",
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("voluptates"),
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
            AccountID: sdk.String("est"),
            AdvertiserGroupID: sdk.String("in"),
            ClickThroughURLSuffix: sdk.String("illo"),
            DefaultClickThroughEventTagID: sdk.String("voluptate"),
            DefaultEmail: sdk.String("consequatur"),
            FloodlightConfigurationID: sdk.String("delectus"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("incidunt"),
                Etag: sdk.String("dolore"),
                ID: sdk.String("5accf667-aaf9-4bba-9185-fe431d6bf5c8"),
                Kind: sdk.String("sequi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("maiores"),
            },
            ID: sdk.String("expedita"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("rerum"),
                Etag: sdk.String("totam"),
                ID: sdk.String("c20cb67f-c4b4-425e-99e6-234c9f7b79df"),
                Kind: sdk.String("recusandae"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("iusto"),
            },
            Kind: sdk.String("esse"),
            MeasurementPartnerLink: &shared.MeasurementPartnerAdvertiserLink{
                LinkStatus: shared.MeasurementPartnerAdvertiserLinkLinkStatusEnumMeasurementPartnerLinkOptOutPending.ToPointer(),
                MeasurementPartner: shared.MeasurementPartnerAdvertiserLinkMeasurementPartnerEnumNone.ToPointer(),
                PartnerAdvertiserID: sdk.String("quod"),
            },
            Name: sdk.String("Christy Swift"),
            OriginalFloodlightConfigurationID: sdk.String("officia"),
            Status: shared.AdvertiserStatusEnumOnHold.ToPointer(),
            SubaccountID: sdk.String("cupiditate"),
            Suspended: sdk.Bool(false),
        },
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "delectus",
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("aut"),
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
