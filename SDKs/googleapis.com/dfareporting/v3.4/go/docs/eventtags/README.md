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
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("ad"),
        ID: "8dcef234-c955-4b9b-9f21-90abd9bbcc27",
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("suscipit"),
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
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        ID: "280840c6-9ef6-48e4-9c8a-ddfac7545004",
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "optio",
        QuotaUser: sdk.String("eum"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("amet"),
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
            AccountID: sdk.String("facilis"),
            AdvertiserID: sdk.String("magnam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dolor"),
                Etag: sdk.String("provident"),
                ID: sdk.String("1fdf01c3-e91e-48f7-bc69-d460a77eceb2"),
                Kind: sdk.String("nisi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("architecto"),
            },
            CampaignID: sdk.String("accusantium"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("a"),
                Etag: sdk.String("et"),
                ID: sdk.String("ef2631c7-c0f0-4f87-bf9d-5c25fd3e0b4a"),
                Kind: sdk.String("non"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("magnam"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("quia"),
            Kind: sdk.String("ullam"),
            Name: sdk.String("Mr. Kendra Fay"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumWhitelist.ToPointer(),
            SiteIds: []string{
                "ab",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("labore"),
            Type: shared.EventTagTypeEnumImpressionImageEventTag.ToPointer(),
            URL: sdk.String("maxime"),
            URLEscapeLevels: sdk.Int(479035),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("porro"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatum",
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("sit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        AdID: sdk.String("numquam"),
        AdvertiserID: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        CampaignID: sdk.String("culpa"),
        DefinitionsOnly: sdk.Bool(false),
        Enabled: sdk.Bool(false),
        EventTagTypes: []DfareportingEventTagsListEventTagTypesEnum{
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionImageEventTag,
        },
        Fields: sdk.String("ipsam"),
        Ids: []string{
            "officia",
            "et",
            "odit",
            "similique",
        },
        Key: sdk.String("labore"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorum",
        QuotaUser: sdk.String("provident"),
        SearchString: sdk.String("quibusdam"),
        SortField: operations.DfareportingEventTagsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingEventTagsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("rem"),
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
            AccountID: sdk.String("beatae"),
            AdvertiserID: sdk.String("perspiciatis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("fugit"),
                Etag: sdk.String("placeat"),
                ID: sdk.String("fd0c77c5-3e7e-47d4-ae6e-8b90bac384e2"),
                Kind: sdk.String("dolor"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("ea"),
            },
            CampaignID: sdk.String("in"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("ipsa"),
                Etag: sdk.String("sequi"),
                ID: sdk.String("fec31c50-824d-4189-a36a-6b2d27eb707a"),
                Kind: sdk.String("est"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("aut"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("placeat"),
            Kind: sdk.String("voluptatum"),
            Name: sdk.String("Erick Greenholt"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumWhitelist.ToPointer(),
            SiteIds: []string{
                "voluptate",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumEnabled.ToPointer(),
            SubaccountID: sdk.String("fugiat"),
            Type: shared.EventTagTypeEnumClickThroughEventTag.ToPointer(),
            URL: sdk.String("iste"),
            URLEscapeLevels: sdk.Int(863113),
        },
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("dignissimos"),
        ID: "0ffbb697-0ee7-470e-b609-7ef7c206e61b",
        Key: sdk.String("sit"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dolorem",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("ducimus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        EventTag: &shared.EventTag{
            AccountID: sdk.String("modi"),
            AdvertiserID: sdk.String("porro"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consequuntur"),
                Etag: sdk.String("perferendis"),
                ID: sdk.String("a3d98637-ca85-4c3f-a655-74dbaf94a7c9"),
                Kind: sdk.String("rem"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("illo"),
            },
            CampaignID: sdk.String("velit"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("est"),
                Etag: sdk.String("delectus"),
                ID: sdk.String("28db2cf2-bf4f-43de-9356-d7e14b21cd98"),
                Kind: sdk.String("beatae"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("aliquid"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("assumenda"),
            Kind: sdk.String("veniam"),
            Name: sdk.String("Amelia Wintheiser"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlacklist.ToPointer(),
            SiteIds: []string{
                "quod",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumEnabled.ToPointer(),
            SubaccountID: sdk.String("facilis"),
            Type: shared.EventTagTypeEnumImpressionJavascriptEventTag.ToPointer(),
            URL: sdk.String("natus"),
            URLEscapeLevels: sdk.Int(684746),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("vel"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eligendi",
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("eligendi"),
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
