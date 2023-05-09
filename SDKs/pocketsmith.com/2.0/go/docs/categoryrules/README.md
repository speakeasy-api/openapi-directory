# CategoryRules

### Available Operations

* [GetUsersIDCategoryRules](#getusersidcategoryrules) - List category rules in user
* [PostCategoriesIDCategoryRules](#postcategoriesidcategoryrules) - Create category rule in category

## GetUsersIDCategoryRules

Lists all category rules belonging to a user by their ID.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CategoryRules.GetUsersIDCategoryRules(ctx, operations.GetUsersIDCategoryRulesRequest{
        ID: 449950,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryRules != nil {
        // handle response
    }
}
```

## PostCategoriesIDCategoryRules

Creates a rule to allocate a category to transactions.

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
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CategoryRules.PostCategoriesIDCategoryRules(ctx, operations.PostCategoriesIDCategoryRulesRequest{
        RequestBody: &operations.PostCategoriesIDCategoryRulesRequestBody{
            ApplyToAll: sdk.Bool(false),
            ApplyToUncategorised: sdk.Bool(true),
            PayeeMatches: "Countdown",
        },
        ID: 359508,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CategoryRule != nil {
        // handle response
    }
}
```
