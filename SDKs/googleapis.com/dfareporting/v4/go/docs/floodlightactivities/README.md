# FloodlightActivities

### Available Operations

* [DfareportingFloodlightActivitiesDelete](#dfareportingfloodlightactivitiesdelete) - Deletes an existing floodlight activity.
* [DfareportingFloodlightActivitiesGeneratetag](#dfareportingfloodlightactivitiesgeneratetag) - Generates a tag for a floodlight activity.
* [DfareportingFloodlightActivitiesGet](#dfareportingfloodlightactivitiesget) - Gets one floodlight activity by ID.
* [DfareportingFloodlightActivitiesInsert](#dfareportingfloodlightactivitiesinsert) - Inserts a new floodlight activity.
* [DfareportingFloodlightActivitiesList](#dfareportingfloodlightactivitieslist) - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* [DfareportingFloodlightActivitiesPatch](#dfareportingfloodlightactivitiespatch) - Updates an existing floodlight activity. This method supports patch semantics.
* [DfareportingFloodlightActivitiesUpdate](#dfareportingfloodlightactivitiesupdate) - Updates an existing floodlight activity.

## DfareportingFloodlightActivitiesDelete

Deletes an existing floodlight activity.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesDelete(ctx, operations.DfareportingFloodlightActivitiesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("eos"),
        ID: "d8a44640-ca60-4db7-ba2f-93f467dc0d8d",
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptas",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DfareportingFloodlightActivitiesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesGeneratetag

Generates a tag for a floodlight activity.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesGeneratetag(ctx, operations.DfareportingFloodlightActivitiesGeneratetagRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("soluta"),
        FloodlightActivityID: sdk.String("quas"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DfareportingFloodlightActivitiesGeneratetagSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivitiesGenerateTagResponse != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesGet

Gets one floodlight activity by ID.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesGet(ctx, operations.DfareportingFloodlightActivitiesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cupiditate"),
        Fields: sdk.String("in"),
        ID: "6af980da-7a08-49fc-84db-274530e5cc7c",
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.DfareportingFloodlightActivitiesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivity != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesInsert

Inserts a new floodlight activity.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesInsert(ctx, operations.DfareportingFloodlightActivitiesInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("repellendus"),
            AdvertiserID: sdk.String("quo"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("possimus"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("34b6f623-bcec-4ab5-8aee-5e0da8b9af6a"),
                Kind: sdk.String("nulla"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("ullam"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumActiveServerPage.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumSessionCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("repudiandae"),
                    Name: sdk.String("Mrs. Jeannette Gutmann"),
                    Tag: sdk.String("expedita"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("saepe"),
                    Name: sdk.String("Krystal Bosco"),
                    Tag: sdk.String("assumenda"),
                },
            },
            ExpectedURL: sdk.String("placeat"),
            FloodlightActivityGroupID: sdk.String("illo"),
            FloodlightActivityGroupName: sdk.String("optio"),
            FloodlightActivityGroupTagString: sdk.String("numquam"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("pariatur"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("doloremque"),
                ID: sdk.String("f61d1711-57cb-4e5e-a4f7-211840772f32"),
                Kind: sdk.String("itaque"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("distinctio"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumIframe.ToPointer(),
            ID: sdk.String("perspiciatis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("pariatur"),
                Etag: sdk.String("facilis"),
                ID: sdk.String("e0f23b7b-6d99-448d-aede-d477680fc7a1"),
                Kind: sdk.String("iure"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("blanditiis"),
            },
            Kind: sdk.String("dolores"),
            Name: sdk.String("Herman Thiel"),
            Notes: sdk.String("delectus"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("consequuntur"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("praesentium"),
                        Name: sdk.String("Albert Auer MD"),
                        Tag: sdk.String("iusto"),
                    },
                    SiteID: sdk.String("debitis"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("beatae"),
                        ID: sdk.String("392ab44c-b183-4500-8f46-1ce53e914498"),
                        Kind: sdk.String("animi"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("libero"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("deserunt"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("dolore"),
                        Name: sdk.String("Kimberly Murazik"),
                        Tag: sdk.String("reiciendis"),
                    },
                    SiteID: sdk.String("temporibus"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("officiis"),
                        Etag: sdk.String("non"),
                        ID: sdk.String("10c37daa-9182-4a49-9962-5d3caffc198e"),
                        Kind: sdk.String("saepe"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("modi"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("quaerat"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("quis"),
                        Name: sdk.String("Stella Mitchell"),
                        Tag: sdk.String("maxime"),
                    },
                    SiteID: sdk.String("possimus"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("non"),
                        Etag: sdk.String("ut"),
                        ID: sdk.String("0ea98bec-ce04-486d-a0d5-6d73b005503e"),
                        Kind: sdk.String("totam"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("impedit"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("autem"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("explicabo"),
                        Name: sdk.String("Ora Wuckert"),
                        Tag: sdk.String("impedit"),
                    },
                    SiteID: sdk.String("iure"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("ullam"),
                        Etag: sdk.String("aliquid"),
                        ID: sdk.String("75f5b70e-3e4c-4fcc-aa91-ec52624d0001"),
                        Kind: sdk.String("tempora"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("hic"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumArchivedAndDisabled.ToPointer(),
            SubaccountID: sdk.String("minima"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("officiis"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU12,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU12,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU68,
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "suscipit",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DfareportingFloodlightActivitiesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivity != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesList

Retrieves a list of floodlight activities, possibly filtered. This method supports paging.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesList(ctx, operations.DfareportingFloodlightActivitiesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        AdvertiserID: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("quae"),
        FloodlightActivityGroupIds: []string{
            "placeat",
            "ipsam",
        },
        FloodlightActivityGroupName: sdk.String("cum"),
        FloodlightActivityGroupTagString: sdk.String("sint"),
        FloodlightActivityGroupType: operations.DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumSale.ToPointer(),
        FloodlightConfigurationID: sdk.String("quod"),
        Ids: []string{
            "debitis",
            "non",
            "quae",
            "perferendis",
        },
        Key: sdk.String("mollitia"),
        MaxResults: sdk.Int64(914691),
        OauthToken: sdk.String("provident"),
        PageToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "unde",
        QuotaUser: sdk.String("magni"),
        SearchString: sdk.String("minus"),
        SortField: operations.DfareportingFloodlightActivitiesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivitiesListSortOrderEnumDescending.ToPointer(),
        TagString: sdk.String("architecto"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DfareportingFloodlightActivitiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivitiesListResponse != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesPatch

Updates an existing floodlight activity. This method supports patch semantics.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesPatch(ctx, operations.DfareportingFloodlightActivitiesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("nemo"),
            AdvertiserID: sdk.String("a"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("architecto"),
                Etag: sdk.String("pariatur"),
                ID: sdk.String("14718c6f-a2fa-4d0c-86c5-d95472cdd14f"),
                Kind: sdk.String("porro"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nesciunt"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumPhp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumSessionCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("distinctio"),
                    Name: sdk.String("Grant Larkin"),
                    Tag: sdk.String("est"),
                },
            },
            ExpectedURL: sdk.String("dignissimos"),
            FloodlightActivityGroupID: sdk.String("eaque"),
            FloodlightActivityGroupName: sdk.String("quo"),
            FloodlightActivityGroupTagString: sdk.String("labore"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("ipsum"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("exercitationem"),
                Etag: sdk.String("inventore"),
                ID: sdk.String("c3dd1eb8-f7f7-45f4-b23f-1c0a586c3ae7"),
                Kind: sdk.String("temporibus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("soluta"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumImage.ToPointer(),
            ID: sdk.String("odio"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reiciendis"),
                Etag: sdk.String("officiis"),
                ID: sdk.String("ef5e142d-95b1-4dbe-8eff-7c4b156e9278"),
                Kind: sdk.String("consequuntur"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("ipsam"),
            },
            Kind: sdk.String("debitis"),
            Name: sdk.String("Gerard Koelpin"),
            Notes: sdk.String("quasi"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("labore"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("laboriosam"),
                        Name: sdk.String("Frank Huels"),
                        Tag: sdk.String("ducimus"),
                    },
                    SiteID: sdk.String("perspiciatis"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("cupiditate"),
                        Etag: sdk.String("facilis"),
                        ID: sdk.String("7956c0b0-fa0b-4b20-a40e-7c4ae6406427"),
                        Kind: sdk.String("explicabo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nostrum"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("esse"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("nobis"),
                        Name: sdk.String("Ms. Rebecca Nader"),
                        Tag: sdk.String("perferendis"),
                    },
                    SiteID: sdk.String("rem"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("earum"),
                        Etag: sdk.String("nulla"),
                        ID: sdk.String("3921c257-930d-46f0-93a3-efa46d366dfa"),
                        Kind: sdk.String("inventore"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("architecto"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumActive.ToPointer(),
            SubaccountID: sdk.String("id"),
            TagFormat: shared.FloodlightActivityTagFormatEnumHTML.ToPointer(),
            TagString: sdk.String("unde"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU74,
            },
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("laudantium"),
        ID: "b53862de-1a9d-414f-a72e-521f90303dfc",
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "laudantium",
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("molestiae"),
    }, operations.DfareportingFloodlightActivitiesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivity != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivitiesUpdate

Updates an existing floodlight activity.

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
    res, err := s.FloodlightActivities.DfareportingFloodlightActivitiesUpdate(ctx, operations.DfareportingFloodlightActivitiesUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("hic"),
            AdvertiserID: sdk.String("hic"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("error"),
                Etag: sdk.String("ea"),
                ID: sdk.String("d1d32090-fc15-47ac-9fe1-961ce9be41c8"),
                Kind: sdk.String("nisi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("nulla"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumColdFusion.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumSessionCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("omnis"),
                    Name: sdk.String("Pamela Mitchell IV"),
                    Tag: sdk.String("harum"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("odit"),
                    Name: sdk.String("Deborah O'Connell"),
                    Tag: sdk.String("delectus"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("a"),
                    Name: sdk.String("Russell Moore"),
                    Tag: sdk.String("nulla"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("delectus"),
                    Name: sdk.String("Timmy Schultz"),
                    Tag: sdk.String("sed"),
                },
            },
            ExpectedURL: sdk.String("fuga"),
            FloodlightActivityGroupID: sdk.String("deleniti"),
            FloodlightActivityGroupName: sdk.String("accusamus"),
            FloodlightActivityGroupTagString: sdk.String("voluptas"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("tempore"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusamus"),
                Etag: sdk.String("commodi"),
                ID: sdk.String("20cd9c5a-fdd0-44c3-b525-12beae1d87ec"),
                Kind: sdk.String("minus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("delectus"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            ID: sdk.String("quod"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("saepe"),
                Etag: sdk.String("animi"),
                ID: sdk.String("8e7a8831-1662-4cda-ad77-c1d86066237d"),
                Kind: sdk.String("tempora"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("magni"),
            },
            Kind: sdk.String("molestiae"),
            Name: sdk.String("Rick Hyatt"),
            Notes: sdk.String("molestias"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("molestiae"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("labore"),
                        Name: sdk.String("Stewart Feeney"),
                        Tag: sdk.String("incidunt"),
                    },
                    SiteID: sdk.String("exercitationem"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("quasi"),
                        Etag: sdk.String("beatae"),
                        ID: sdk.String("cc75e4f0-c004-4b5b-b758-cc94562f0069"),
                        Kind: sdk.String("ea"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("nemo"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("a"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("maxime"),
                        Name: sdk.String("Ms. Arthur O'Reilly"),
                        Tag: sdk.String("illum"),
                    },
                    SiteID: sdk.String("laudantium"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("non"),
                        Etag: sdk.String("libero"),
                        ID: sdk.String("be24f298-34af-4b07-b5cb-6285d4a29aaa"),
                        Kind: sdk.String("quae"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quasi"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("voluptas"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("omnis"),
                        Name: sdk.String("Vivian Huel"),
                        Tag: sdk.String("possimus"),
                    },
                    SiteID: sdk.String("aspernatur"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("recusandae"),
                        Etag: sdk.String("repudiandae"),
                        ID: sdk.String("209505bf-03a9-43e9-8480-ca37fb107890"),
                        Kind: sdk.String("sequi"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("deserunt"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumDisabledPolicy.ToPointer(),
            SubaccountID: sdk.String("amet"),
            TagFormat: shared.FloodlightActivityTagFormatEnumHTML.ToPointer(),
            TagString: sdk.String("nesciunt"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU47,
            },
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("assumenda"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "provident",
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("in"),
    }, operations.DfareportingFloodlightActivitiesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivity != nil {
        // handle response
    }
}
```
