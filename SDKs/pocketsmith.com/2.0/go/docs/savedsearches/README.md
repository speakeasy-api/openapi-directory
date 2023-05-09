# SavedSearches

### Available Operations

* [GetUsersIDSavedSearches](#getusersidsavedsearches) - List saved searches in user

## GetUsersIDSavedSearches

Lists saved searches belonging to a user by their ID.

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
    res, err := s.SavedSearches.GetUsersIDSavedSearches(ctx, operations.GetUsersIDSavedSearchesRequest{
        ID: 447125,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SavedSearches != nil {
        // handle response
    }
}
```
