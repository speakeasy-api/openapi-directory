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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("similique"),
        ID: "f980da7a-089f-4c44-9b27-4530e5cc7c6d",
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rerum",
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("repellendus"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("modi"),
        FloodlightActivityID: sdk.String("facilis"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ea",
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("tempore"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("facilis"),
        ID: "50aee5e0-da8b-49af-aad0-5486e7b413cb",
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "assumenda",
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("ea"),
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
            AccountID: sdk.String("placeat"),
            AdvertiserID: sdk.String("illo"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("optio"),
                Etag: sdk.String("numquam"),
                ID: sdk.String("3d40f61d-1711-457c-be5e-e4f721184077"),
                Kind: sdk.String("quia"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("adipisci"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumJavascript.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumItemsSoldCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("distinctio"),
                    Name: sdk.String("Katrina Streich"),
                    Tag: sdk.String("alias"),
                },
            },
            ExpectedURL: sdk.String("tenetur"),
            FloodlightActivityGroupID: sdk.String("fugit"),
            FloodlightActivityGroupName: sdk.String("non"),
            FloodlightActivityGroupTagString: sdk.String("harum"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("distinctio"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("suscipit"),
                Etag: sdk.String("fugiat"),
                ID: sdk.String("9948d6ed-ed47-4768-8fc7-a17a82e5e82f"),
                Kind: sdk.String("illum"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("praesentium"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            ID: sdk.String("beatae"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("perferendis"),
                Etag: sdk.String("quaerat"),
                ID: sdk.String("0a7e9139-2ab4-44cb-9835-008f461ce53e"),
                Kind: sdk.String("excepturi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("tempora"),
            },
            Kind: sdk.String("ut"),
            Name: sdk.String("Wallace O'Keefe"),
            Notes: sdk.String("deserunt"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("nisi"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("aperiam"),
                        Name: sdk.String("Ismael Streich"),
                        Tag: sdk.String("officiis"),
                    },
                    SiteID: sdk.String("non"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("veritatis"),
                        Etag: sdk.String("doloremque"),
                        ID: sdk.String("c37daa91-82a4-49d9-a25d-3caffc198eea"),
                        Kind: sdk.String("modi"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("quis"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("dolores"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("dignissimos"),
                        Name: sdk.String("Fred Rippin"),
                        Tag: sdk.String("non"),
                    },
                    SiteID: sdk.String("ut"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("ipsa"),
                        Etag: sdk.String("saepe"),
                        ID: sdk.String("a98becce-0486-4de0-956d-73b005503e8d"),
                        Kind: sdk.String("impedit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("explicabo"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumArchivedAndDisabled.ToPointer(),
            SubaccountID: sdk.String("doloribus"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("nihil"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU78,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU44,
            },
        },
        AccessToken: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("enim"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "harum",
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("recusandae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vero"),
        AdvertiserID: sdk.String("eius"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("porro"),
        FloodlightActivityGroupIds: []string{
            "vel",
            "dolorum",
            "cupiditate",
            "ab",
        },
        FloodlightActivityGroupName: sdk.String("necessitatibus"),
        FloodlightActivityGroupTagString: sdk.String("maxime"),
        FloodlightActivityGroupType: operations.DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumCounter.ToPointer(),
        FloodlightConfigurationID: sdk.String("qui"),
        Ids: []string{
            "sed",
            "modi",
        },
        Key: sdk.String("at"),
        MaxResults: sdk.Int64(44938),
        OauthToken: sdk.String("alias"),
        PageToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("tempora"),
        SearchString: sdk.String("repudiandae"),
        SortField: operations.DfareportingFloodlightActivitiesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivitiesListSortOrderEnumAscending.ToPointer(),
        TagString: sdk.String("minima"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("officiis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("dicta"),
            AdvertiserID: sdk.String("vitae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("laborum"),
                Etag: sdk.String("minus"),
                ID: sdk.String("53ebb658-7f34-4041-8c5b-9acee400ae9f"),
                Kind: sdk.String("unde"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("minus"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumPhp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumItemsSoldCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("nobis"),
                    Name: sdk.String("Jacqueline Hettinger PhD"),
                    Tag: sdk.String("vitae"),
                },
            },
            ExpectedURL: sdk.String("magnam"),
            FloodlightActivityGroupID: sdk.String("dignissimos"),
            FloodlightActivityGroupName: sdk.String("sunt"),
            FloodlightActivityGroupTagString: sdk.String("voluptatum"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("nisi"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatibus"),
                Etag: sdk.String("est"),
                ID: sdk.String("2fad0c06-c5d9-4547-acdd-14fc43b70bca"),
                Kind: sdk.String("laudantium"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("reiciendis"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            ID: sdk.String("dignissimos"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eaque"),
                Etag: sdk.String("quo"),
                ID: sdk.String("43351c3d-d1eb-48f7-b75f-4f23f1c0a586"),
                Kind: sdk.String("maxime"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("mollitia"),
            },
            Kind: sdk.String("repudiandae"),
            Name: sdk.String("Paulette Kiehn"),
            Notes: sdk.String("odio"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("officiis"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("voluptates"),
                        Name: sdk.String("Mrs. Floyd Torphy"),
                        Tag: sdk.String("pariatur"),
                    },
                    SiteID: sdk.String("perspiciatis"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("exercitationem"),
                        Etag: sdk.String("nam"),
                        ID: sdk.String("1dbeceff-7c4b-4156-a927-8275eea76817"),
                        Kind: sdk.String("labore"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("praesentium"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("quae"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("nisi"),
                        Name: sdk.String("Mandy Kutch"),
                        Tag: sdk.String("facilis"),
                    },
                    SiteID: sdk.String("iusto"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("perspiciatis"),
                        Etag: sdk.String("nemo"),
                        ID: sdk.String("6c0b0fa0-bb20-4a40-a7c4-ae6406427265"),
                        Kind: sdk.String("esse"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("voluptatem"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("ab"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("culpa"),
                        Name: sdk.String("Ms. Maureen Schroeder"),
                        Tag: sdk.String("nulla"),
                    },
                    SiteID: sdk.String("sequi"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("iste"),
                        Etag: sdk.String("magni"),
                        ID: sdk.String("1c257930-d6f0-493a-befa-46d366dfa101"),
                        Kind: sdk.String("vitae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("voluptatem"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("unde"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("et"),
                        Name: sdk.String("Rodney Turcotte"),
                        Tag: sdk.String("tempore"),
                    },
                    SiteID: sdk.String("exercitationem"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("velit"),
                        Etag: sdk.String("totam"),
                        ID: sdk.String("62de1a9d-14fe-472e-921f-90303dfc3383"),
                        Kind: sdk.String("natus"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("reiciendis"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumDisabledPolicy.ToPointer(),
            SubaccountID: sdk.String("hic"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("ea"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU12,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU87,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU20,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU14,
            },
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("doloribus"),
        ID: "c157ac9f-e196-41ce-9be4-1c869dd7d971",
        Key: sdk.String("unde"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consequatur",
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("odit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("eaque"),
            AdvertiserID: sdk.String("deserunt"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corporis"),
                Etag: sdk.String("praesentium"),
                ID: sdk.String("ffd2967d-f8fd-4882-a8e6-0be620cd9c5a"),
                Kind: sdk.String("sapiente"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quibusdam"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumJavascript.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumUniqueCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("nesciunt"),
                    Name: sdk.String("Stacy Collins Sr."),
                    Tag: sdk.String("harum"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("earum"),
                    Name: sdk.String("Frankie Boyer"),
                    Tag: sdk.String("voluptate"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("itaque"),
                    Name: sdk.String("Roosevelt Hessel"),
                    Tag: sdk.String("quod"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("saepe"),
                    Name: sdk.String("Alberto Veum"),
                    Tag: sdk.String("voluptatum"),
                },
            },
            ExpectedURL: sdk.String("blanditiis"),
            FloodlightActivityGroupID: sdk.String("adipisci"),
            FloodlightActivityGroupName: sdk.String("et"),
            FloodlightActivityGroupTagString: sdk.String("et"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("laboriosam"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ratione"),
                Etag: sdk.String("porro"),
                ID: sdk.String("da6d77c1-d860-4662-b7d4-227866db8a74"),
                Kind: sdk.String("perspiciatis"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("consectetur"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumImage.ToPointer(),
            ID: sdk.String("totam"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("incidunt"),
                Etag: sdk.String("exercitationem"),
                ID: sdk.String("11cc75e4-f0c0-404b-9bb7-58cc94562f00"),
                Kind: sdk.String("suscipit"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ea"),
            },
            Kind: sdk.String("rem"),
            Name: sdk.String("Elsa Schmitt MD"),
            Notes: sdk.String("vitae"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("consectetur"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("illum"),
                        Name: sdk.String("Francis Reinger"),
                        Tag: sdk.String("odit"),
                    },
                    SiteID: sdk.String("modi"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("tenetur"),
                        Etag: sdk.String("explicabo"),
                        ID: sdk.String("9834afb0-735c-4b62-85d4-a29aaa1e1691"),
                        Kind: sdk.String("nemo"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("repellat"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("voluptate"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("possimus"),
                        Name: sdk.String("Kate Waelchi V"),
                        Tag: sdk.String("ullam"),
                    },
                    SiteID: sdk.String("voluptatem"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("corporis"),
                        Etag: sdk.String("tempore"),
                        ID: sdk.String("f03a93e9-4480-4ca3-bfb1-0789032ac333"),
                        Kind: sdk.String("et"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("odit"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumDisabledPolicy.ToPointer(),
            SubaccountID: sdk.String("odit"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("quibusdam"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU59,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU93,
            },
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("odio"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "necessitatibus",
        QuotaUser: sdk.String("corrupti"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("possimus"),
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
