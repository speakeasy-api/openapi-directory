# Blog

### Available Operations

* [GetBlogPosts](#getblogposts) - Get blog posts - ordered by created desc by default

## GetBlogPosts

Get blog posts - ordered by created desc by default

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Blog.GetBlogPosts(ctx, operations.GetBlogPostsRequest{
        Fallback: sdk.Bool(false),
        Locale: sdk.String("quod"),
        Page: sdk.Int64(461479),
        PerPage: sdk.Int64(520478),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlogArticleList != nil {
        // handle response
    }
}
```
