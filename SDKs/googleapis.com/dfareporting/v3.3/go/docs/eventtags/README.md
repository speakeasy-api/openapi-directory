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
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("nobis"),
        ID: "856bcba5-1ef2-4454-a47f-acf116cdd544",
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "reprehenderit",
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("consequuntur"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("dignissimos"),
        ID: "dd9efaf4-3dc6-4236-a0f3-138f30df3db0",
        Key: sdk.String("magni"),
        OauthToken: sdk.String("aspernatur"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "earum",
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("exercitationem"),
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
            AccountID: sdk.String("nostrum"),
            AdvertiserID: sdk.String("delectus"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quidem"),
                Etag: sdk.String("rem"),
                ID: sdk.String("f652ebb9-d383-4838-b902-43b293dab30e"),
                Kind: sdk.String("excepturi"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("iure"),
            },
            CampaignID: sdk.String("doloribus"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corporis"),
                Etag: sdk.String("alias"),
                ID: sdk.String("fda04c8b-1bb5-45a2-92b0-bc3bb744664e"),
                Kind: sdk.String("cum"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("repellendus"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("voluptatem"),
            Kind: sdk.String("non"),
            Name: sdk.String("Myrtle Lebsack PhD"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumWhitelist.ToPointer(),
            SiteIds: []string{
                "rerum",
                "architecto",
                "in",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("tenetur"),
            Type: shared.EventTagTypeEnumClickThroughEventTag.ToPointer(),
            URL: sdk.String("eveniet"),
            URLEscapeLevels: sdk.Int(441981),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "occaecati",
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("voluptate"),
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
        AccessToken: sdk.String("nihil"),
        AdID: sdk.String("recusandae"),
        AdvertiserID: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("reiciendis"),
        CampaignID: sdk.String("consectetur"),
        DefinitionsOnly: sdk.Bool(false),
        Enabled: sdk.Bool(false),
        EventTagTypes: []DfareportingEventTagsListEventTagTypesEnum{
            operations.DfareportingEventTagsListEventTagTypesEnumClickThroughEventTag,
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionImageEventTag,
            operations.DfareportingEventTagsListEventTagTypesEnumImpressionJavascriptEventTag,
        },
        Fields: sdk.String("tenetur"),
        Ids: []string{
            "asperiores",
            "odio",
            "nisi",
        },
        Key: sdk.String("hic"),
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ab",
        QuotaUser: sdk.String("eum"),
        SearchString: sdk.String("quia"),
        SortField: operations.DfareportingEventTagsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingEventTagsListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("dolor"),
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
            AccountID: sdk.String("consectetur"),
            AdvertiserID: sdk.String("aperiam"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sed"),
                Etag: sdk.String("dolor"),
                ID: sdk.String("b93e3431-6cf5-45b4-b135-53ccf1c204c4"),
                Kind: sdk.String("culpa"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("quod"),
            },
            CampaignID: sdk.String("minus"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sint"),
                Etag: sdk.String("occaecati"),
                ID: sdk.String("04c5195b-8648-4cef-a78f-1e2d3b901e09"),
                Kind: sdk.String("corporis"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("distinctio"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("harum"),
            Kind: sdk.String("quidem"),
            Name: sdk.String("Brooke Pouros V"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlacklist.ToPointer(),
            SiteIds: []string{
                "ab",
                "neque",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumDisabled.ToPointer(),
            SubaccountID: sdk.String("excepturi"),
            Type: shared.EventTagTypeEnumImpressionImageEventTag.ToPointer(),
            URL: sdk.String("culpa"),
            URLEscapeLevels: sdk.Int(293095),
        },
        AccessToken: sdk.String("sunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestias"),
        Fields: sdk.String("impedit"),
        ID: "1387271e-18ea-49e4-9118-c2cc57fbd60b",
        Key: sdk.String("beatae"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quam",
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("quibusdam"),
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
            AccountID: sdk.String("cupiditate"),
            AdvertiserID: sdk.String("est"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("occaecati"),
                Etag: sdk.String("pariatur"),
                ID: sdk.String("4eea8565-8c2d-44f4-888b-e4f278fd9667"),
                Kind: sdk.String("accusamus"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("autem"),
            },
            CampaignID: sdk.String("placeat"),
            CampaignIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("corporis"),
                Etag: sdk.String("dicta"),
                ID: sdk.String("d2ffaa58-dcef-4234-8955-b9bdf2190abd"),
                Kind: sdk.String("excepturi"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("harum"),
            },
            EnabledByDefault: sdk.Bool(false),
            ExcludeFromAdxRequests: sdk.Bool(false),
            ID: sdk.String("quisquam"),
            Kind: sdk.String("eligendi"),
            Name: sdk.String("Stella Cole"),
            SiteFilterType: shared.EventTagSiteFilterTypeEnumBlacklist.ToPointer(),
            SiteIds: []string{
                "suscipit",
            },
            SslCompliant: sdk.Bool(false),
            Status: shared.EventTagStatusEnumEnabled.ToPointer(),
            SubaccountID: sdk.String("error"),
            Type: shared.EventTagTypeEnumClickThroughEventTag.ToPointer(),
            URL: sdk.String("debitis"),
            URLEscapeLevels: sdk.Int(60438),
        },
        AccessToken: sdk.String("quia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quod",
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("eveniet"),
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
