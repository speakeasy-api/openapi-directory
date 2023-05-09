# EventTags

### Available Operations

* [DfareportingEventTagsDelete](#dfareportingeventtagsdelete) - Deletes an existing event tag.
* [DfareportingEventTagsGet](#dfareportingeventtagsget) - Gets one event tag by ID.
* [DfareportingEventTagsInsert](#dfareportingeventtagsinsert) - Inserts a new event tag.
* [DfareportingEventTagsList](#dfareportingeventtagslist) - Retrieves a list of event tags, possibly filtered.
* [DfareportingEventTagsPatch](#dfareportingeventtagspatch) - Updates an existing event tag. This method supports patch semantics.
* [DfareportingEventTagsUpdate](#dfareportingeventtagsupdate) - Updates an existing event tag.

## DfareportingEventTagsDelete

Deletes an existing event tag.

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
    res, err := s.EventTags.DfareportingEventTagsDelete(ctx, operations.DfareportingEventTagsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempore"),
        Fields: sdk.String("sunt"),
        ID: "6d10f1ef-2631-4c7c-8f0f-873f9d5c25fd",
        Key: sdk.String("non"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DfareportingEventTagsDeleteSecurity{
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

## DfareportingEventTagsGet

Gets one event tag by ID.

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
    res, err := s.EventTags.DfareportingEventTagsGet(ctx, operations.DfareportingEventTagsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("ullam"),
        ID: "3c302571-1f42-4c7e-bdc5-48be09e41a7a",
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsam",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("et"),
    }, operations.DfareportingEventTagsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTag != nil {
        // handle response
    }
}
```

## DfareportingEventTagsInsert

Inserts a new event tag.

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
    res, err := s.EventTags.DfareportingEventTagsInsert(ctx, operations.DfareportingEventTagsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EventTag: &shared.EventTag{
            AccountID: sdk.String("similique"),
            AdvertiserID: sdk.String("labore"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("harum"),
                Etag: sdk.String("dolorum"),
                ID: sdk.String("9d599881-92cf-4d0c-b7c5-3e7e7d4ee6e8"),
                Kind: sdk.String("nobis"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("consequatur"),
            },
            CampaignID: sdk.String("distinctio"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("similique"),
                Etag: sdk.String("porro"),
                ID: sdk.String("384e2396-703f-4ec3-9c50-824d189a36a6"),
                Kind: sdk.String("harum"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("facere"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("dolores"),
            Kind: sdk.String("in"),
            Name: sdk.String("Ms. Jean Koch"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlocklist.ToPointer(),
            SiteIds: []string{
                "aut",
                "placeat",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("doloribus"),
            Type: shared.EventTagTypeEnumClickThroughEventTag.ToPointer(),
            URL: sdk.String("dolore"),
            URLEscapeLevels: sdk.Int(417304),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DfareportingEventTagsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTag != nil {
        // handle response
    }
}
```

## DfareportingEventTagsList

Retrieves a list of event tags, possibly filtered.

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
    res, err := s.EventTags.DfareportingEventTagsList(ctx, operations.DfareportingEventTagsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        AdID: sdk.String("dignissimos"),
        AdvertiserID: sdk.String("eaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        CampaignID: sdk.String("cum"),
        DefinitionsOnly: sdk.Bool(false),
        Enabled: sdk.Bool(false),
        EventTagTypes: []DfareportingEventTagsListEventTagTypesEnum{
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionJavascriptEventTag,
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionJavascriptEventTag,
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionJavascriptEventTag,
        },
        Fields: sdk.String("aperiam"),
        Ids: []string{
            "repudiandae",
            "odio",
            "nihil",
            "ipsa",
        },
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("neque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "autem",
        QuotaUser: sdk.String("alias"),
        SearchString: sdk.String("occaecati"),
        SortField: operations.DfareportingEventTagsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingEventTagsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("esse"),
    }, operations.DfareportingEventTagsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTagsListResponse != nil {
        // handle response
    }
}
```

## DfareportingEventTagsPatch

Updates an existing event tag. This method supports patch semantics.

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
    res, err := s.EventTags.DfareportingEventTagsPatch(ctx, operations.DfareportingEventTagsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EventTag: &shared.EventTag{
            AccountID: sdk.String("eos"),
            AdvertiserID: sdk.String("doloremque"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("vel"),
                Etag: sdk.String("itaque"),
                ID: sdk.String("61b0d308-714c-420a-bd98-637ca85c3fe6"),
                Kind: sdk.String("nostrum"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("molestiae"),
            },
            CampaignID: sdk.String("ut"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("possimus"),
                Etag: sdk.String("harum"),
                ID: sdk.String("af94a7c9-8f13-4af2-8db2-cf2bf4f3ded3"),
                Kind: sdk.String("minima"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("fugiat"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("esse"),
            Kind: sdk.String("officiis"),
            Name: sdk.String("Emma Rice DDS"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlocklist.ToPointer(),
            SiteIds: []string{
                "voluptatum",
                "beatae",
                "natus",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumEnabled.ToPointer(),
            SubaccountID: sdk.String("assumenda"),
            Type: shared.EventTagTypeEnumImpressionImageEventTag.ToPointer(),
            URL: sdk.String("quis"),
            URLEscapeLevels: sdk.Int(660691),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("mollitia"),
        ID: "1c4b79ae-3368-41c2-bc39-a7c0e17cb12c",
        Key: sdk.String("enim"),
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.DfareportingEventTagsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTag != nil {
        // handle response
    }
}
```

## DfareportingEventTagsUpdate

Updates an existing event tag.

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
    res, err := s.EventTags.DfareportingEventTagsUpdate(ctx, operations.DfareportingEventTagsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        EventTag: &shared.EventTag{
            AccountID: sdk.String("necessitatibus"),
            AdvertiserID: sdk.String("explicabo"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eos"),
                Etag: sdk.String("quo"),
                ID: sdk.String("d5cba6fb-fec9-432a-b681-3d65bfecec2d"),
                Kind: sdk.String("at"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("provident"),
            },
            CampaignID: sdk.String("inventore"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ea"),
                Etag: sdk.String("repellat"),
                ID: sdk.String("7fc7dda7-0ec6-40e6-8758-94d61c14cd90"),
                Kind: sdk.String("aspernatur"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("molestiae"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("recusandae"),
            Kind: sdk.String("neque"),
            Name: sdk.String("Della Bechtelar"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumAllowlist.ToPointer(),
            SiteIds: []string{
                "reiciendis",
                "et",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("exercitationem"),
            Type: shared.EventTagTypeEnumImpressionImageEventTag.ToPointer(),
            URL: sdk.String("iste"),
            URLEscapeLevels: sdk.Int(65930),
        },
        AccessToken: sdk.String("similique"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("provident"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "beatae",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.DfareportingEventTagsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventTag != nil {
        // handle response
    }
}
```
