# Locationrules

## Overview

Location rules are directives for the localization engine that may be useful for certain solutions.


### Available Operations

* [AddLocationRule](#addlocationrule) - Create location rule
* [DeleteLocationRule](#deletelocationrule) - Delete location rule
* [GetLocationRuleByID](#getlocationrulebyid) - Get location rule
* [GetLocationRules](#getlocationrules) - Get all location rules
* [UpdateLocationRule](#updatelocationrule) - Update existing location rule

## AddLocationRule

Create location rule

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locationrules.AddLocationRule(ctx, shared.LocationRuleUpdate{
        Conditions: &shared.LocationRuleUpdateConditions{
            FromLocation: sdk.String("5b7d6cbd7503c445552a1664"),
            ToLocation: sdk.String("5b7d6cbd7503c445552a1664"),
        },
        Enabled: sdk.Bool(true),
        Label: sdk.String("Foo Bar"),
        Parameters: map[string]interface{}{
            "qui": "quae",
            "laudantium": "odio",
            "occaecati": "voluptatibus",
        },
        Type: shared.LocationRuleTypeEnumDebounce.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## DeleteLocationRule

Delete location rule

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locationrules.DeleteLocationRule(ctx, operations.DeleteLocationRuleRequest{
        ID: "e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## GetLocationRuleByID

Get location rule

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locationrules.GetLocationRuleByID(ctx, operations.GetLocationRuleByIDRequest{
        ID: "f7c70a45-626d-4436-813f-16d9f5fce6c5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationRule != nil {
        // handle response
    }
}
```

## GetLocationRules

Get all location rules

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locationrules.GetLocationRules(ctx, operations.GetLocationRulesRequest{
        After: types.MustTimeFromString("2022-08-08T04:23:21.555Z"),
        AfterID: sdk.String("inventore"),
        Before: sdk.String("magnam"),
        BeforeID: sdk.String("ea"),
        Enabled: sdk.Bool(true),
        From: sdk.String("quo"),
        FromID: sdk.String("consectetur"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Label: sdk.String("Foo Bar"),
        Limit: sdk.Int64(926213),
        Populate: sdk.String("aspernatur"),
        ResultsOnly: sdk.Bool(false),
        Select: sdk.String("minima"),
        Sort: sdk.String("eaque"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeUpdated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(9528.71),
        Type: shared.LocationRuleTypeEnumDisappeared.ToPointer(),
        Until: sdk.String("aut"),
        UntilID: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLocationRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateLocationRule

Update existing location rule

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Locationrules.UpdateLocationRule(ctx, operations.UpdateLocationRuleRequest{
        LocationRuleUpdate: shared.LocationRuleUpdate{
            Conditions: &shared.LocationRuleUpdateConditions{
                FromLocation: sdk.String("5b7d6cbd7503c445552a1664"),
                ToLocation: sdk.String("5b7d6cbd7503c445552a1664"),
            },
            Enabled: sdk.Bool(true),
            Label: sdk.String("Foo Bar"),
            Parameters: map[string]interface{}{
                "impedit": "aliquam",
                "fugit": "accusamus",
                "inventore": "non",
            },
            Type: shared.LocationRuleTypeEnumAllow.ToPointer(),
        },
        ID: "aac366c8-dd6b-4144-a907-474778a7bd46",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
