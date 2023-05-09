# FloodlightActivityGroups

### Available Operations

* [DfareportingFloodlightActivityGroupsGet](#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [DfareportingFloodlightActivityGroupsInsert](#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [DfareportingFloodlightActivityGroupsList](#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [DfareportingFloodlightActivityGroupsPatch](#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [DfareportingFloodlightActivityGroupsUpdate](#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

## DfareportingFloodlightActivityGroupsGet

Gets one floodlight activity group by ID.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsGet(ctx, operations.DfareportingFloodlightActivityGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("asperiores"),
        ID: "0c004b5b-b758-4cc9-8562-f0069685fcd1",
        Key: sdk.String("est"),
        OauthToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nihil",
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.DfareportingFloodlightActivityGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsInsert

Inserts a new floodlight activity group.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsInsert(ctx, operations.DfareportingFloodlightActivityGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("libero"),
            AdvertiserID: sdk.String("cum"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("saepe"),
                Etag: sdk.String("odit"),
                ID: sdk.String("4f29834a-fb07-435c-b628-5d4a29aaa1e1"),
                Kind: sdk.String("voluptas"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("veritatis"),
            },
            FloodlightConfigurationID: sdk.String("nemo"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("nisi"),
                Etag: sdk.String("repellat"),
                ID: sdk.String("7d2ee209-505b-4f03-a93e-94480ca37fb1"),
                Kind: sdk.String("ipsa"),
                MatchType: shared.DimensionValueMatchTypeEnumBeginsWith.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            ID: sdk.String("natus"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("eaque"),
                Etag: sdk.String("sequi"),
                ID: sdk.String("2ac33317-2e2d-4d79-ac74-ba7e88ddb36f"),
                Kind: sdk.String("facere"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("eligendi"),
            },
            Kind: sdk.String("optio"),
            Name: sdk.String("Miss Danny Greenfelder"),
            SubaccountID: sdk.String("autem"),
            TagString: sdk.String("enim"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("eius"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "culpa",
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.DfareportingFloodlightActivityGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsList

Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsList(ctx, operations.DfareportingFloodlightActivityGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        AdvertiserID: sdk.String("incidunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("magnam"),
        FloodlightConfigurationID: sdk.String("eius"),
        Ids: []string{
            "impedit",
        },
        Key: sdk.String("ipsum"),
        MaxResults: sdk.Int64(643984),
        OauthToken: sdk.String("doloremque"),
        PageToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("esse"),
        SearchString: sdk.String("commodi"),
        SortField: operations.DfareportingFloodlightActivityGroupsListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingFloodlightActivityGroupsListSortOrderEnumDescending.ToPointer(),
        Type: operations.DfareportingFloodlightActivityGroupsListTypeEnumSale.ToPointer(),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DfareportingFloodlightActivityGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroupsListResponse != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsPatch

Updates an existing floodlight activity group. This method supports patch semantics.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsPatch(ctx, operations.DfareportingFloodlightActivityGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("voluptatem"),
            AdvertiserID: sdk.String("corrupti"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("tempore"),
                Etag: sdk.String("nam"),
                ID: sdk.String("e794455e-bc55-40a1-8426-b59c8366fdcc"),
                Kind: sdk.String("architecto"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("veniam"),
            },
            FloodlightConfigurationID: sdk.String("nemo"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("voluptatum"),
                Etag: sdk.String("quia"),
                ID: sdk.String("c1b855e8-89d9-4ef9-b2e9-000a13ad8124"),
                Kind: sdk.String("fugit"),
                MatchType: shared.DimensionValueMatchTypeEnumExact.ToPointer(),
                Value: sdk.String("voluptatum"),
            },
            ID: sdk.String("voluptates"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("sapiente"),
                Etag: sdk.String("at"),
                ID: sdk.String("23411898-e738-479e-bbe8-baebabb79453"),
                Kind: sdk.String("eum"),
                MatchType: shared.DimensionValueMatchTypeEnumWildcardExpression.ToPointer(),
                Value: sdk.String("excepturi"),
            },
            Kind: sdk.String("ipsa"),
            Name: sdk.String("Erica Blick"),
            SubaccountID: sdk.String("unde"),
            TagString: sdk.String("odio"),
            Type: shared.FloodlightActivityGroupTypeEnumCounter.ToPointer(),
        },
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("odit"),
        ID: "0b77a5a5-365a-479f-9527-1f01c0d361fe",
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nulla",
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DfareportingFloodlightActivityGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```

## DfareportingFloodlightActivityGroupsUpdate

Updates an existing floodlight activity group.

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
    res, err := s.FloodlightActivityGroups.DfareportingFloodlightActivityGroupsUpdate(ctx, operations.DfareportingFloodlightActivityGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FloodlightActivityGroup: &shared.FloodlightActivityGroup{
            AccountID: sdk.String("a"),
            AdvertiserID: sdk.String("nobis"),
            AdvertiserIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("quaerat"),
                Etag: sdk.String("ullam"),
                ID: sdk.String("3e9089e8-71fd-4b4d-a97b-dd9c985e4373"),
                Kind: sdk.String("numquam"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("quis"),
            },
            FloodlightConfigurationID: sdk.String("pariatur"),
            FloodlightConfigurationIDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("reprehenderit"),
                Etag: sdk.String("odit"),
                ID: sdk.String("d9edd785-be5e-47af-a552-97ba6281f44e"),
                Kind: sdk.String("dolorem"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("eos"),
            },
            ID: sdk.String("dolor"),
            IDDimensionValue: &shared.DimensionValue{
                DimensionName: sdk.String("consectetur"),
                Etag: sdk.String("unde"),
                ID: sdk.String("4a68cc80-d30f-4f72-964d-0a91fe9d9655"),
                Kind: sdk.String("adipisci"),
                MatchType: shared.DimensionValueMatchTypeEnumContains.ToPointer(),
                Value: sdk.String("praesentium"),
            },
            Kind: sdk.String("excepturi"),
            Name: sdk.String("Ms. Joseph Altenwerth"),
            SubaccountID: sdk.String("vel"),
            TagString: sdk.String("ea"),
            Type: shared.FloodlightActivityGroupTypeEnumSale.ToPointer(),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("in"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptas",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("sed"),
    }, operations.DfareportingFloodlightActivityGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FloodlightActivityGroup != nil {
        // handle response
    }
}
```
