# Tags

### Available Operations

* [ListTags](#listtags) - List Tags

## ListTags

Returns an array of Tag objects

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Tags.ListTags(ctx, operations.ListTagsRequest{
        Filter: map[string]interface{}{
            "dolorum": "nostrum",
        },
        Limit: sdk.Int64(639028),
        Offset: sdk.Int64(676243),
        SortBy: map[string]interface{}{
            "accusamus": "tempora",
            "atque": "fugit",
            "ut": "fugiat",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagsCollection != nil {
        // handle response
    }
}
```
