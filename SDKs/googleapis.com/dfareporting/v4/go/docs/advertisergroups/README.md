# AdvertiserGroups

### Available Operations

* [DfareportingAdvertiserGroupsDelete](#dfareportingadvertisergroupsdelete) - Deletes an existing advertiser group.
* [DfareportingAdvertiserGroupsGet](#dfareportingadvertisergroupsget) - Gets one advertiser group by ID.
* [DfareportingAdvertiserGroupsInsert](#dfareportingadvertisergroupsinsert) - Inserts a new advertiser group.
* [DfareportingAdvertiserGroupsList](#dfareportingadvertisergroupslist) - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* [DfareportingAdvertiserGroupsPatch](#dfareportingadvertisergroupspatch) - Updates an existing advertiser group. This method supports patch semantics.
* [DfareportingAdvertiserGroupsUpdate](#dfareportingadvertisergroupsupdate) - Updates an existing advertiser group.

## DfareportingAdvertiserGroupsDelete

Deletes an existing advertiser group.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsDelete(ctx, operations.DfareportingAdvertiserGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("sapiente"),
        ID: "73bc845e-320a-4319-b4ba-df947c9a867b",
        Key: sdk.String("optio"),
        OauthToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eos",
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.DfareportingAdvertiserGroupsDeleteSecurity{
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

## DfareportingAdvertiserGroupsGet

Gets one advertiser group by ID.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsGet(ctx, operations.DfareportingAdvertiserGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("illo"),
        ID: "6ddca8ef-51fc-4b4c-993e-c12cdaad0ec7",
        Key: sdk.String("similique"),
        OauthToken: sdk.String("delectus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("nobis"),
        UploadProtocol: sdk.String("at"),
    }, operations.DfareportingAdvertiserGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserGroup != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserGroupsInsert

Inserts a new advertiser group.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsInsert(ctx, operations.DfareportingAdvertiserGroupsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdvertiserGroup: &shared.AdvertiserGroup{
            AccountID: sdk.String("aut"),
            ID: sdk.String("temporibus"),
            Kind: sdk.String("tenetur"),
            Name: sdk.String("Marjorie Lockman"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("amet"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "impedit",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DfareportingAdvertiserGroupsInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserGroup != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserGroupsList

Retrieves a list of advertiser groups, possibly filtered. This method supports paging.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsList(ctx, operations.DfareportingAdvertiserGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("ipsum"),
        Ids: []string{
            "fuga",
            "facilis",
            "maiores",
            "error",
        },
        Key: sdk.String("recusandae"),
        MaxResults: sdk.Int64(955962),
        OauthToken: sdk.String("consectetur"),
        PageToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "voluptatibus",
        QuotaUser: sdk.String("assumenda"),
        SearchString: sdk.String("repellendus"),
        SortField: operations.DfareportingAdvertiserGroupsListSortFieldEnumName.ToPointer(),
        SortOrder: operations.DfareportingAdvertiserGroupsListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DfareportingAdvertiserGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserGroupsListResponse != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserGroupsPatch

Updates an existing advertiser group. This method supports patch semantics.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsPatch(ctx, operations.DfareportingAdvertiserGroupsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AdvertiserGroup: &shared.AdvertiserGroup{
            AccountID: sdk.String("quam"),
            ID: sdk.String("omnis"),
            Kind: sdk.String("similique"),
            Name: sdk.String("Edwin Schumm"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("porro"),
        ID: "db0f4d28-1187-4d56-844e-ded85a9065e6",
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quidem",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.DfareportingAdvertiserGroupsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserGroup != nil {
        // handle response
    }
}
```

## DfareportingAdvertiserGroupsUpdate

Updates an existing advertiser group.

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
    res, err := s.AdvertiserGroups.DfareportingAdvertiserGroupsUpdate(ctx, operations.DfareportingAdvertiserGroupsUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AdvertiserGroup: &shared.AdvertiserGroup{
            AccountID: sdk.String("consequatur"),
            ID: sdk.String("nesciunt"),
            Kind: sdk.String("quia"),
            Name: sdk.String("Hector Satterfield"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "debitis",
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("ad"),
    }, operations.DfareportingAdvertiserGroupsUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiserGroup != nil {
        // handle response
    }
}
```
