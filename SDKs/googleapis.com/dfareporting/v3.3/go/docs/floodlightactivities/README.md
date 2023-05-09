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
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("inventore"),
        ID: "fdf01c3e-91e8-4f7b-869d-460a77eceb26",
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "accusantium",
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("repudiandae"),
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
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("ab"),
        FloodlightActivityID: sdk.String("quisquam"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aperiam",
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("repellat"),
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
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("error"),
        ID: "d5c25fd3-e0b4-4a4a-8253-c3025711f42c",
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "iusto",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("enim"),
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
            AccountID: sdk.String("voluptatum"),
            AdvertiserID: sdk.String("cum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("itaque"),
                Etag: sdk.String("sit"),
                ID: sdk.String("9e41a7a2-15ca-412a-8ba9-d59988192cfd"),
                Kind: sdk.String("alias"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("odio"),
            },
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumJsp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumTransactionsCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("dolorem"),
                    Name: sdk.String("Claude Terry"),
                    Tag: sdk.String("eius"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("accusamus"),
                    Name: sdk.String("Tyler Walsh"),
                    Tag: sdk.String("excepturi"),
                },
            },
            ExpectedURL: sdk.String("consequatur"),
            FloodlightActivityGroupID: sdk.String("distinctio"),
            FloodlightActivityGroupName: sdk.String("similique"),
            FloodlightActivityGroupTagString: sdk.String("porro"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumCounter.ToPointer(),
            FloodlightConfigurationID: sdk.String("molestias"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("modi"),
                Etag: sdk.String("saepe"),
                ID: sdk.String("2396703f-ec31-4c50-824d-189a36a6b2d2"),
                Kind: sdk.String("in"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("rerum"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumImage.ToPointer(),
            Hidden: sdk.Bool(false),
            ID: sdk.String("accusantium"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nihil"),
                Etag: sdk.String("similique"),
                ID: sdk.String("a60c8fe4-6e61-477d-b9db-3b70ffbb6970"),
                Kind: sdk.String("repudiandae"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("odio"),
            },
            Kind: sdk.String("nihil"),
            Name: sdk.String("Olive Doyle V"),
            Notes: sdk.String("iusto"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("voluptatibus"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("esse"),
                        Name: sdk.String("Craig Bauch"),
                        Tag: sdk.String("suscipit"),
                    },
                    SiteID: sdk.String("vitae"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("tempore"),
                        Etag: sdk.String("sit"),
                        ID: sdk.String("d308714c-20a3-4d98-a37c-a85c3fe65574"),
                        Kind: sdk.String("possimus"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("culpa"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("reiciendis"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("natus"),
                        Name: sdk.String("Brandi Koepp"),
                        Tag: sdk.String("rem"),
                    },
                    SiteID: sdk.String("a"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("illo"),
                        Etag: sdk.String("velit"),
                        ID: sdk.String("af28db2c-f2bf-44f3-9ed3-56d7e14b21cd"),
                        Kind: sdk.String("occaecati"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("beatae"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("natus"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("aliquid"),
                        Name: sdk.String("Jerome Hauck"),
                        Tag: sdk.String("autem"),
                    },
                    SiteID: sdk.String("iste"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("mollitia"),
                        Etag: sdk.String("sunt"),
                        ID: sdk.String("c4b79ae3-3681-4c23-839a-7c0e17cb12c5"),
                        Kind: sdk.String("nam"),
                        MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                        Value: sdk.String("laudantium"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("fugit"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("corporis"),
                        Name: sdk.String("Alonzo Champlin"),
                        Tag: sdk.String("fugiat"),
                    },
                    SiteID: sdk.String("enim"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("optio"),
                        Etag: sdk.String("tempore"),
                        ID: sdk.String("a6fbfec9-32af-4681-bd65-bfecec2dd691"),
                        Kind: sdk.String("ea"),
                        MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                        Value: sdk.String("quam"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            SubaccountID: sdk.String("delectus"),
            TagFormat: shared.FloodlightActivityTagFormatEnumXhtml.ToPointer(),
            TagString: sdk.String("nihil"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU83,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU66,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU48,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU6,
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("sit"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aut",
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("praesentium"),
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
        AccessToken: sdk.String("numquam"),
        AdvertiserID: sdk.String("fugiat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("quisquam"),
        FloodlightActivityGroupIds: []string{
            "tempora",
        },
        FloodlightActivityGroupName: sdk.String("quisquam"),
        FloodlightActivityGroupTagString: sdk.String("facere"),
        FloodlightActivityGroupType: operations.DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnumSale.ToPointer(),
        FloodlightConfigurationID: sdk.String("aut"),
        Ids: []string{
            "odit",
        },
        Key: sdk.String("molestiae"),
        MaxResults: sdk.Int64(925301),
        OauthToken: sdk.String("neque"),
        PageToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        QuotaUser: sdk.String("eaque"),
        SearchString: sdk.String("facere"),
        SortField: operations.DfareportingFloodlightActivitiesListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivitiesListSortOrderEnumAscending.ToPointer(),
        TagString: sdk.String("voluptate"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("et"),
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
            AccountID: sdk.String("exercitationem"),
            AdvertiserID: sdk.String("eius"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("iste"),
                Etag: sdk.String("quae"),
                ID: sdk.String("abe9751b-106d-423e-83e6-9815aae99fcd"),
                Kind: sdk.String("necessitatibus"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("voluptates"),
            },
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumJsp.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumStandardCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("eligendi"),
                    Name: sdk.String("Orville Glover"),
                    Tag: sdk.String("pariatur"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("totam"),
                    Name: sdk.String("Tom Goodwin"),
                    Tag: sdk.String("alias"),
                },
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("quisquam"),
                    Name: sdk.String("Leslie Beer"),
                    Tag: sdk.String("nihil"),
                },
            },
            ExpectedURL: sdk.String("neque"),
            FloodlightActivityGroupID: sdk.String("est"),
            FloodlightActivityGroupName: sdk.String("consequuntur"),
            FloodlightActivityGroupTagString: sdk.String("a"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("dolorem"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("maiores"),
                Etag: sdk.String("labore"),
                ID: sdk.String("67dc0d8d-a561-4220-a6ab-8f277485c197"),
                Kind: sdk.String("voluptas"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("tenetur"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumImage.ToPointer(),
            Hidden: sdk.Bool(false),
            ID: sdk.String("blanditiis"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("aut"),
                Etag: sdk.String("nulla"),
                ID: sdk.String("a7a089fc-44db-4274-930e-5cc7c6d0cbcf"),
                Kind: sdk.String("repellendus"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("possimus"),
            },
            Kind: sdk.String("consectetur"),
            Name: sdk.String("Pauline Quigley"),
            Notes: sdk.String("ea"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("consectetur"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("tempore"),
                        Name: sdk.String("Lamar Schaden"),
                        Tag: sdk.String("nostrum"),
                    },
                    SiteID: sdk.String("alias"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("laborum"),
                        Etag: sdk.String("voluptates"),
                        ID: sdk.String("e5e0da8b-9af6-4ad0-9486-e7b413cbe2d1"),
                        Kind: sdk.String("molestiae"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("assumenda"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            SubaccountID: sdk.String("placeat"),
            TagFormat: shared.FloodlightActivityTagFormatEnumHTML.ToPointer(),
            TagString: sdk.String("optio"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU24,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU87,
            },
        },
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("aliquid"),
        ID: "1d171157-cbe5-4ee4-b721-1840772f32e3",
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "perspiciatis",
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("officiis"),
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
            AccountID: sdk.String("tenetur"),
            AdvertiserID: sdk.String("fugit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("non"),
                Etag: sdk.String("harum"),
                ID: sdk.String("7b6d9948-d6ed-4ed4-b768-0fc7a17a82e5"),
                Kind: sdk.String("vero"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eos"),
            },
            CacheBustingType: shared.FloodlightActivityCacheBustingTypeEnumColdFusion.ToPointer(),
            CountingMethod: shared.FloodlightActivityCountingMethodEnumItemsSoldCounting.ToPointer(),
            DefaultTags: []shared.FloodlightActivityDynamicTag{
                shared.FloodlightActivityDynamicTag{
                    ID: sdk.String("praesentium"),
                    Name: sdk.String("Albert Auer MD"),
                    Tag: sdk.String("iusto"),
                },
            },
            ExpectedURL: sdk.String("debitis"),
            FloodlightActivityGroupID: sdk.String("sint"),
            FloodlightActivityGroupName: sdk.String("beatae"),
            FloodlightActivityGroupTagString: sdk.String("ratione"),
            FloodlightActivityGroupType: shared.FloodlightActivityFloodlightActivityGroupTypeEnumSale.ToPointer(),
            FloodlightConfigurationID: sdk.String("qui"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolorum"),
                Etag: sdk.String("distinctio"),
                ID: sdk.String("44cb1835-008f-4461-8e53-e914498a9ba4"),
                Kind: sdk.String("nisi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("similique"),
            },
            FloodlightTagType: shared.FloodlightActivityFloodlightTagTypeEnumGlobalSiteTag.ToPointer(),
            Hidden: sdk.Bool(false),
            ID: sdk.String("pariatur"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reiciendis"),
                Etag: sdk.String("temporibus"),
                ID: sdk.String("e410c37d-aa91-482a-89d9-625d3caffc19"),
                Kind: sdk.String("blanditiis"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("saepe"),
            },
            Kind: sdk.String("animi"),
            Name: sdk.String("Bertha Hayes"),
            Notes: sdk.String("unde"),
            PublisherTags: []shared.FloodlightActivityPublisherDynamicTag{
                shared.FloodlightActivityPublisherDynamicTag{
                    ClickThrough: sdk.Bool(false),
                    DirectorySiteID: sdk.String("tempore"),
                    DynamicTag: &shared.FloodlightActivityDynamicTag{
                        ID: sdk.String("maxime"),
                        Name: sdk.String("Dr. Kyle Graham"),
                        Tag: sdk.String("occaecati"),
                    },
                    SiteID: sdk.String("corrupti"),
                    SiteIDDimensionValue: &shared.DimensionValue{
                        DimensionName: sdk.String("nam"),
                        Etag: sdk.String("itaque"),
                        ID: sdk.String("cce0486d-e0d5-46d7-bb00-5503e8dc626f"),
                        Kind: sdk.String("maiores"),
                        MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                        Value: sdk.String("dignissimos"),
                    },
                    ViewThrough: sdk.Bool(false),
                },
            },
            Secure: sdk.Bool(false),
            SslCompliant: sdk.Bool(false),
            SslRequired: sdk.Bool(false),
            SubaccountID: sdk.String("impedit"),
            TagFormat: shared.FloodlightActivityTagFormatEnumHTML.ToPointer(),
            TagString: sdk.String("ullam"),
            UserDefinedVariableTypes: []shared.FloodlightActivityUserDefinedVariableTypesEnum{
                shared.FloodlightActivityUserDefinedVariableTypesEnumU49,
                shared.FloodlightActivityUserDefinedVariableTypesEnumU32,
            },
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("harum"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "consectetur",
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("optio"),
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
