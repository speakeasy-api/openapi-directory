# FollowerReports

### Available Operations

* [GetReportsTwitterCreate](#getreportstwittercreate) - Used to create twitter follower report
* [PostReportsTwitterCreate](#postreportstwittercreate) - Used to create twitter follower report

## GetReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowerReports.GetReportsTwitterCreate(ctx, operations.GetReportsTwitterCreateRequest{
        Filter: sdk.String("minus"),
        TwitterHandle: sdk.String("placeat"),
        TwitterID: sdk.Int64(528895),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTwitter != nil {
        // handle response
    }
}
```

## PostReportsTwitterCreate

This report uses the twitter followers as the audience. To create custom or tweet reports other methods must be used. Any report older than two days will be automatically regenerated upon create.


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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FollowerReports.PostReportsTwitterCreate(ctx, operations.PostReportsTwitterCreateRequest{
        Filter: sdk.String("iusto"),
        TwitterHandle: sdk.String("excepturi"),
        TwitterID: sdk.Int64(392785),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTwitter != nil {
        // handle response
    }
}
```
