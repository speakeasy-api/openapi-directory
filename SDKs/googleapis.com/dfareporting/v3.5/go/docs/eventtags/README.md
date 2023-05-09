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
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("iusto"),
        ID: "e7dc548b-e09e-441a-ba21-5ca12a4ba9d5",
        Key: sdk.String("provident"),
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "rem",
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("perspiciatis"),
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
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("alias"),
        ID: "c77c53e7-e7d4-4ee6-a8b9-0bac384e2396",
        Key: sdk.String("in"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "sequi",
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("quod"),
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
            AccountID: sdk.String("sunt"),
            AdvertiserID: sdk.String("quo"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("veniam"),
                Etag: sdk.String("sit"),
                ID: sdk.String("824d189a-36a6-4b2d-a7eb-707aa60c8fe4"),
                Kind: sdk.String("commodi"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("commodi"),
            },
            CampaignID: sdk.String("beatae"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptate"),
                Etag: sdk.String("voluptate"),
                ID: sdk.String("db9db3b7-0ffb-4b69-b0ee-770e36097ef7"),
                Kind: sdk.String("maxime"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("doloremque"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("vel"),
            Kind: sdk.String("itaque"),
            Name: sdk.String("Dr. Gloria Renner"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumAllowlist.ToPointer(),
            SiteIds: []string{
                "ducimus",
                "inventore",
                "modi",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("consequuntur"),
            Type: shared.EventTagTypeEnumImpressionImageEventTag.ToPointer(),
            URL: sdk.String("est"),
            URLEscapeLevels: sdk.Int(218153),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("ea"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nobis",
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("totam"),
        UploadProtocol: sdk.String("corporis"),
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
        AccessToken: sdk.String("adipisci"),
        AdID: sdk.String("delectus"),
        AdvertiserID: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        CampaignID: sdk.String("ad"),
        DefinitionsOnly: sdk.Bool(false),
        Enabled: sdk.Bool(false),
        EventTagTypes: []DfareportingEventTagsListEventTagTypesEnum{
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionImageEventTag,
            operations.DfareportingEventTagsListEventTagTypesEnumClickThroughEventTag,
        },
        Fields: sdk.String("harum"),
        Ids: []string{
            "reiciendis",
            "natus",
            "labore",
        },
        Key: sdk.String("officia"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("sint"),
        SearchString: sdk.String("rem"),
        SortField: operations.DfareportingEventTagsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingEventTagsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("est"),
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
            AccountID: sdk.String("magni"),
            AdvertiserID: sdk.String("rem"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("assumenda"),
                Etag: sdk.String("libero"),
                ID: sdk.String("2cf2bf4f-3ded-4356-97e1-4b21cd98196d"),
                Kind: sdk.String("veniam"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("id"),
            },
            CampaignID: sdk.String("delectus"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("autem"),
                Etag: sdk.String("iste"),
                ID: sdk.String("a1c4b79a-e336-481c-a3c3-9a7c0e17cb12"),
                Kind: sdk.String("impedit"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("nam"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("culpa"),
            Kind: sdk.String("laudantium"),
            Name: sdk.String("Stacy Will Sr."),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlocklist.ToPointer(),
            SiteIds: []string{
                "enim",
                "optio",
                "tempore",
                "est",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumEnabled.ToPointer(),
            SubaccountID: sdk.String("hic"),
            Type: shared.EventTagTypeEnumClickThroughEventTag.ToPointer(),
            URL: sdk.String("repellat"),
            URLEscapeLevels: sdk.Int(900339),
        },
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("consequuntur"),
        ID: "af6813d6-5bfe-4cec-add6-916f7fc7dda7",
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "placeat",
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("vero"),
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
            AccountID: sdk.String("aut"),
            AdvertiserID: sdk.String("reprehenderit"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nostrum"),
                Etag: sdk.String("praesentium"),
                ID: sdk.String("94d61c14-cd90-4227-a37c-0d977f1a5491"),
                Kind: sdk.String("similique"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("officiis"),
            },
            CampaignID: sdk.String("provident"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("dignissimos"),
                Etag: sdk.String("nostrum"),
                ID: sdk.String("1b106d23-e03e-4698-95aa-e99fcde9e729"),
                Kind: sdk.String("eligendi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("nulla"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("tempora"),
            Kind: sdk.String("maiores"),
            Name: sdk.String("Freda Leannon"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumAllowlist.ToPointer(),
            SiteIds: []string{
                "quaerat",
                "alias",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("fuga"),
            Type: shared.EventTagTypeEnumImpressionJavascriptEventTag.ToPointer(),
            URL: sdk.String("ipsa"),
            URLEscapeLevels: sdk.Int(849802),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("est"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("a"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "unde",
        QuotaUser: sdk.String("dolorem"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("labore"),
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
