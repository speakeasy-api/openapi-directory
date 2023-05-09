# Accounts

## Overview

Account Management

### Available Operations

* [DeleteV2AccountsIDJSON](#deletev2accountsidjson) - Delete an account
* [GetV2AccountsJSON](#getv2accountsjson) - List accounts
* [GetV2AccountsIDJSON](#getv2accountsidjson) - Fetch an account
* [PostV2AccountsJSON](#postv2accountsjson) - Create an account
* [PutV2AccountsIDJSON](#putv2accountsidjson) - Update an existing Account

## DeleteV2AccountsIDJSON

Deletes an account. This operation is not reversible without contacting support.
This operation can be called multiple times successfully.

Deleting an account will remove all connected people from that account.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.DeleteV2AccountsIDJSON(ctx, operations.DeleteV2AccountsIDJSONRequest{
        ID: "450ad2ab-d442-4698-82d5-02a94bb4f63c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetV2AccountsJSON

Fetches multiple account records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.GetV2AccountsJSON(ctx, operations.GetV2AccountsJSONRequest{
        AccountStageID: []int64{
            396098,
            592042,
            896039,
        },
        AccountTierID: []int64{
            638921,
            223081,
            891555,
        },
        Archived: sdk.Bool(false),
        City: []string{
            "dolorum",
            "in",
            "in",
            "illum",
        },
        Country: []string{
            "rerum",
            "dicta",
            "magnam",
            "cumque",
        },
        CreatedAt: []string{
            "ea",
            "aliquid",
            "laborum",
            "accusamus",
        },
        CrmID: []string{
            "occaecati",
        },
        CustomFields: map[string]interface{}{
            "accusamus": "delectus",
            "quidem": "provident",
        },
        Domain: sdk.String("nam"),
        Ids: []int64{
            501324,
            533206,
            956084,
        },
        IncludePagingCounts: sdk.Bool(false),
        Industry: []string{
            "deserunt",
        },
        LastContacted: map[string]interface{}{
            "vel": "natus",
            "omnis": "molestiae",
        },
        LimitPagingCounts: sdk.Bool(false),
        Locales: []string{
            "nihil",
        },
        Name: []string{
            "distinctio",
            "id",
        },
        OwnerCrmID: []string{
            "labore",
            "suscipit",
        },
        OwnerID: []string{
            "nobis",
            "eum",
            "vero",
        },
        OwnerIsActive: sdk.Bool(false),
        Page: sdk.Int64(135474),
        PerPage: sdk.Int64(102863),
        SortBy: sdk.String("magnam"),
        SortDirection: sdk.String("et"),
        State: []string{
            "ullam",
            "provident",
            "quos",
        },
        Tag: []string{
            "accusantium",
            "mollitia",
            "reiciendis",
        },
        TagID: []int64{
            320997,
            431418,
            221262,
        },
        UpdatedAt: []string{
            "odit",
            "nemo",
            "quasi",
            "iure",
        },
        UserRelationships: map[string]interface{}{
            "debitis": "eius",
            "maxime": "deleniti",
            "facilis": "in",
            "architecto": "architecto",
        },
        Website: []string{
            "ullam",
            "expedita",
            "nihil",
            "repellat",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2AccountsIDJSON

Fetches an account, by ID only.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.GetV2AccountsIDJSON(ctx, operations.GetV2AccountsIDJSONRequest{
        ID: "d2ed0289-21cd-4dc6-9260-1fb576b0d5f0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2AccountsJSON

Creates an account.

"domain" must be unique on the current team.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.PostV2AccountsJSON(ctx, operations.PostV2AccountsJSONRequestBody{
        AccountTierID: sdk.Int64(855804),
        City: sdk.String("North Norwood"),
        CompanyStageID: sdk.Int64(359978),
        CompanyType: sdk.String("hic"),
        ConversationalName: sdk.String("libero"),
        Country: sdk.String("Saint Helena"),
        CrmID: sdk.String("dolores"),
        CrmIDType: sdk.String("quis"),
        CustomFields: []map[string]interface{}{
            map[string]interface{}{
                "eaque": "quis",
                "nesciunt": "eos",
            },
            map[string]interface{}{
                "dolores": "minus",
            },
            map[string]interface{}{
                "dolor": "vero",
                "nostrum": "hic",
            },
        },
        Description: sdk.String("recusandae"),
        DoNotContact: sdk.Bool(false),
        Domain: "omnis",
        Founded: sdk.String("facilis"),
        Industry: sdk.String("perspiciatis"),
        LinkedinURL: sdk.String("voluptatem"),
        Locale: sdk.String("porro"),
        Name: "Ms. Vickie Mraz",
        OwnerID: sdk.Int64(237893),
        Phone: sdk.String("926.758.5779 x35322"),
        PostalCode: sdk.String("12957"),
        RevenueRange: sdk.String("voluptate"),
        Size: sdk.String("dignissimos"),
        State: sdk.String("reiciendis"),
        Street: sdk.String("62000 Jeff Garden"),
        Tags: []string{
            "quidem",
            "voluptatibus",
            "voluptas",
            "natus",
        },
        TwitterHandle: sdk.String("eos"),
        Website: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2AccountsIDJSON

Updates an account.

"domain" must be unique on the current team.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.PutV2AccountsIDJSON(ctx, operations.PutV2AccountsIDJSONRequest{
        RequestBody: operations.PutV2AccountsIDJSONRequestBody{
            AccountTierID: sdk.Int64(24678),
            Archived: sdk.Bool(false),
            City: sdk.String("Bedford"),
            CompanyStageID: sdk.Int64(743835),
            CompanyType: sdk.String("dolorum"),
            ConversationalName: sdk.String("iusto"),
            Country: sdk.String("Kazakhstan"),
            CrmID: sdk.String("dolorum"),
            CrmIDType: sdk.String("deleniti"),
            CustomFields: []map[string]interface{}{
                map[string]interface{}{
                    "distinctio": "asperiores",
                    "nihil": "ipsum",
                    "voluptate": "id",
                    "saepe": "eius",
                },
                map[string]interface{}{
                    "perferendis": "amet",
                },
                map[string]interface{}{
                    "accusamus": "ad",
                    "saepe": "suscipit",
                    "deserunt": "provident",
                    "minima": "repellendus",
                },
            },
            Description: sdk.String("totam"),
            DoNotContact: sdk.Bool(false),
            Domain: "similique",
            Founded: sdk.String("alias"),
            Industry: sdk.String("at"),
            LinkedinURL: sdk.String("quaerat"),
            Locale: sdk.String("tempora"),
            Name: "Bernadette Torp",
            OwnerID: sdk.Int64(952792),
            Phone: sdk.String("742.892.7823 x295"),
            PostalCode: sdk.String("07214"),
            RevenueRange: sdk.String("libero"),
            Size: sdk.String("voluptas"),
            State: sdk.String("deserunt"),
            Street: sdk.String("2215 Stracke Roads"),
            Tags: []string{
                "laborum",
            },
            TwitterHandle: sdk.String("totam"),
            Website: sdk.String("incidunt"),
        },
        ID: "22bb679d-2322-4715-bf0c-bb1e31b8b90f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
