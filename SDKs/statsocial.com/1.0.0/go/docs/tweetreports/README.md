# TweetReports

### Available Operations

* [GetReportsTweetCreate](#getreportstweetcreate) - Used to create tweet reports
* [PostReportsTweetCreate](#postreportstweetcreate) - Used to create tweet reports

## GetReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


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
    res, err := s.TweetReports.GetReportsTweetCreate(ctx, operations.GetReportsTweetCreateRequest{
        EndDate: 870013,
        Filter: sdk.String("at"),
        ReportName: "maiores",
        StartDate: 473608,
        Terms: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTweet != nil {
        // handle response
    }
}
```

## PostReportsTweetCreate

This report details the audience of the users who have tweeted content that matches what was provided in the keywords. To create custom or twitter reports other methods must be used.


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
    res, err := s.TweetReports.PostReportsTweetCreate(ctx, operations.PostReportsTweetCreateRequest{
        EndDate: 800911,
        Filter: sdk.String("esse"),
        ReportName: "totam",
        StartDate: 780529,
        Terms: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTweet != nil {
        // handle response
    }
}
```
