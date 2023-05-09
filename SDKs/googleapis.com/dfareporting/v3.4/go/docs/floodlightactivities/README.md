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
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("nobis"),
        ID: "fec932af-6813-4d65-bfec-ec2dd6916f7f",
        Key: sdk.String("minus"),
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quibusdam",
        QuotaUser: sdk.String("assumenda"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("molestiae"),
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
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("sit"),
        FloodlightActivityID: sdk.String("vero"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reprehenderit",
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("natus"),
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
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("quisquam"),
        ID: "14cd9022-7e37-4c0d-977f-1a5491abe975",
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vitae",
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("fugiat"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivity: &shared.FloodlightActivity{
            AccountID: sdk.String("ratione"),
            AdvertiserID: sdk.String("repudiandae"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("accusantium"),
                Etag: sdk.String("dolorem"),
                ID: sdk.String("e69815aa-e99f-4cde-9e72-9c9d4f2d8a44"),
                Kind: sdk.String("laboriosam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("alias"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumPhp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumTransactionsCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("ipsa"),
                    Name: sdk.String("Geoffrey Kovacek"),
                    Tag: sdk.String("consequuntur"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("a"),
                    Name: sdk.String("Leonard Wyman"),
                    Tag: sdk.String("in"),
                },
            },
            ExpectedURL: sdk.String("at"),
            FloodlightActivityGroupID: sdk.String("quisquam"),
            FloodlightActivityGroupName: sdk.String("quae"),
            FloodlightActivityGroupTagString: sdk.String("possimus"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("facere"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("fuga"),
                Etag: sdk.String("minima"),
                ID: sdk.String("6122026a-b8f2-4774-85c1-976af980da7a"),
                Kind: sdk.String("aut"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("unde"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            ID: sdk.String("maxime"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("numquam"),
                Etag: sdk.String("ut"),
                ID: sdk.String("db274530-e5cc-47c6-90cb-cfdcd334b6f6"),
                Kind: sdk.String("fugit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("tempore"),
            },
            Kind: sdk.String("minus"),
            Name: sdk.String("Wilson O'Hara"),
            Notes: sdk.String("alias"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("voluptates"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("recusandae"),
                        Name: sdk.String("Sonja Barrows"),
                        Tag: sdk.String("quas"),
                    },
                    SiteID: sdk.String("cum"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("sint"),
                        Etag: sdk.String("laborum"),
                        ID: sdk.String("f6ad0548-6e7b-4413-8be2-d176dc1c43d4"),
                        Kind: sdk.String("doloremque"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("aliquid"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("illo"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("nulla"),
                        Name: sdk.String("Mrs. Melinda Borer"),
                        Tag: sdk.String("cumque"),
                    },
                    SiteID: sdk.String("tempore"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("debitis"),
                        Etag: sdk.String("enim"),
                        ID: sdk.String("ee4f7211-8407-472f-b2e3-b49dbe0f23b7"),
                        Kind: sdk.String("distinctio"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("fugiat"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("perspiciatis"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("cupiditate"),
                        Name: sdk.String("Dianne Simonis"),
                        Tag: sdk.String("facere"),
                    },
                    SiteID: sdk.String("necessitatibus"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("fugiat"),
                        Etag: sdk.String("eius"),
                        ID: sdk.String("77680fc7-a17a-482e-9e82-fd28d1040a7e"),
                        Kind: sdk.String("sint"),
                        MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                        Value: sdk.String("ratione"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumArchived.ToPointer(),
            SubaccountID: sdk.String("qui"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("distinctio"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU31,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU76,
            },
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("eius"),
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
        AccessToken: sdk.String("inventore"),
        AdvertiserID: sdk.String("quisquam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        FloodlightActivityGroupIds: []string{
            "excepturi",
            "illo",
            "tempora",
            "ut",
        },
        FloodlightActivityGroupName: sdk.String("perspiciatis"),
        FloodlightActivityGroupTagString: sdk.String("rem"),
        FloodlightActivityGroupType: operations.DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumSale.ToPointer(),
        FloodlightConfigurationID: sdk.String("iste"),
        Ids: []string{
            "deserunt",
            "dolore",
            "nisi",
        },
        Key: sdk.String("aperiam"),
        MaxResults: sdk.Int64(627678),
        OauthToken: sdk.String("nulla"),
        PageToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reiciendis",
        QuotaUser: sdk.String("temporibus"),
        SearchString: sdk.String("officiis"),
        SortField: operations.DfareportingFloodlightActivitiesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivitiesListSortOrderEnumAscending.ToPointer(),
        TagString: sdk.String("doloremque"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("adipisci"),
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
            AccountID: sdk.String("possimus"),
            AdvertiserID: sdk.String("culpa"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("animi"),
                Etag: sdk.String("iste"),
                ID: sdk.String("182a49d9-625d-43ca-bfc1-98eea4452792"),
                Kind: sdk.String("tempore"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("possimus"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumActiveServerPage.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumUniqueCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("saepe"),
                    Name: sdk.String("Sergio Little"),
                    Tag: sdk.String("placeat"),
                },
            },
            ExpectedURL: sdk.String("porro"),
            FloodlightActivityGroupID: sdk.String("itaque"),
            FloodlightActivityGroupName: sdk.String("accusantium"),
            FloodlightActivityGroupTagString: sdk.String("labore"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("nisi"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("pariatur"),
                Etag: sdk.String("necessitatibus"),
                ID: sdk.String("0d56d73b-0055-403e-8dc6-26ff77c65675"),
                Kind: sdk.String("delectus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("harum"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumImage.ToPointer(),
            ID: sdk.String("sit"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("recusandae"),
                Etag: sdk.String("consectetur"),
                ID: sdk.String("e4cfcc6a-91ec-4526-a4d0-0014ef45cea1"),
                Kind: sdk.String("vitae"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("minus"),
            },
            Kind: sdk.String("minima"),
            Name: sdk.String("Henrietta Powlowski"),
            Notes: sdk.String("nostrum"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("odio"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("tenetur"),
                        Name: sdk.String("Charlotte Bartell II"),
                        Tag: sdk.String("placeat"),
                    },
                    SiteID: sdk.String("ipsam"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("cum"),
                        Etag: sdk.String("sint"),
                        ID: sdk.String("acee400a-e9f9-42ca-b1b0-25f1d14718c6"),
                        Kind: sdk.String("voluptatibus"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("explicabo"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("doloribus"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("mollitia"),
                        Name: sdk.String("Ms. William Runolfsdottir"),
                        Tag: sdk.String("veniam"),
                    },
                    SiteID: sdk.String("facere"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("excepturi"),
                        Etag: sdk.String("exercitationem"),
                        ID: sdk.String("472cdd14-fc43-4b70-bca8-8fa70c43351c"),
                        Kind: sdk.String("neque"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("beatae"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("necessitatibus"),
                        Name: sdk.String("Jaime Wuckert"),
                        Tag: sdk.String("quam"),
                    },
                    SiteID: sdk.String("nemo"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("sapiente"),
                        Etag: sdk.String("magnam"),
                        ID: sdk.String("f23f1c0a-586c-43ae-bd7b-67feef5e142d"),
                        Kind: sdk.String("perspiciatis"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nam"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumActive.ToPointer(),
            SubaccountID: sdk.String("pariatur"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("eveniet"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU94,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU99,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU98,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU49,
            },
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("quae"),
        ID: "56e92782-75ee-4a76-8174-68063f799b79",
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "maxime",
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("voluptatem"),
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
            AccountID: sdk.String("mollitia"),
            AdvertiserID: sdk.String("voluptatem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quidem"),
                Etag: sdk.String("soluta"),
                ID: sdk.String("20a40e7c-4ae6-4406-8272-657b01a07c08"),
                Kind: sdk.String("earum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("sequi"),
            },
            AttributionEnabled: sdk.Bool(false),
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumPhp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumStandardCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("eligendi"),
                    Name: sdk.String("Annette Kihn"),
                    Tag: sdk.String("consequatur"),
                },
            },
            ExpectedURL: sdk.String("pariatur"),
            FloodlightActivityGroupID: sdk.String("eum"),
            FloodlightActivityGroupName: sdk.String("maiores"),
            FloodlightActivityGroupTagString: sdk.String("sit"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("dolorem"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("mollitia"),
                Etag: sdk.String("sequi"),
                ID: sdk.String("efa46d36-6dfa-4101-9a09-1b3ec8b53862"),
                Kind: sdk.String("nulla"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("illo"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            ID: sdk.String("molestias"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("at"),
                Etag: sdk.String("vitae"),
                ID: sdk.String("4fe72e52-1f90-4303-9fc3-38397fffa6d1"),
                Kind: sdk.String("pariatur"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("aspernatur"),
            },
            Kind: sdk.String("consequatur"),
            Name: sdk.String("James Yost II"),
            Notes: sdk.String("reprehenderit"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("cumque"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("molestias"),
                        Name: sdk.String("Caleb Carter"),
                        Tag: sdk.String("vitae"),
                    },
                    SiteID: sdk.String("eligendi"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("accusamus"),
                        Etag: sdk.String("perspiciatis"),
                        ID: sdk.String("be41c869-dd7d-4971-9d07-b200a58ffd29"),
                        Kind: sdk.String("suscipit"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("nulla"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("delectus"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("laudantium"),
                        Name: sdk.String("Carroll Langworth"),
                        Tag: sdk.String("fuga"),
                    },
                    SiteID: sdk.String("deleniti"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("accusamus"),
                        Etag: sdk.String("voluptas"),
                        ID: sdk.String("0be620cd-9c5a-4fdd-84c3-752512beae1d"),
                        Kind: sdk.String("atque"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("itaque"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("quisquam"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("minus"),
                        Name: sdk.String("Lucia Stoltenberg"),
                        Tag: sdk.String("animi"),
                    },
                    SiteID: sdk.String("deleniti"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("eveniet"),
                        Etag: sdk.String("molestiae"),
                        ID: sdk.String("a8831166-2cda-46d7-bc1d-86066237d422"),
                        Kind: sdk.String("molestiae"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("laboriosam"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            Status: shared.FloodlightActivityStatusEnumArchivedAndDisabled.ToPointer(),
            SubaccountID: sdk.String("quibusdam"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("molestias"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU48,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU29,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU60,
            },
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("totam"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quasi",
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("minus"),
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
