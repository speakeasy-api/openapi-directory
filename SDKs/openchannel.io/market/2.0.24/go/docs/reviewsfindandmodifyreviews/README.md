# ReviewsFindAndModifyReviews

### Available Operations

* [DeleteReviewsReviewID](#deletereviewsreviewid) - Remove a review
* [GetReviews](#getreviews) - Find reviews for a particular App and marketplace. Results are automatically paginated when limit is set
* [GetReviewsReviewID](#getreviewsreviewid) - Find a Review within a particular App and marketplace
* [PatchReviewsReviewID](#patchreviewsreviewid) - Update a review fields
* [PostReviews](#postreviews) - Post a review from a User and returns the new post
* [PostReviewsReviewID](#postreviewsreviewid) - Update a review from a User and returns the new post

## DeleteReviewsReviewID

- Only the review author is able to remove their review


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
    res, err := s.ReviewsFindAndModifyReviews.DeleteReviewsReviewID(ctx, operations.DeleteReviewsReviewIDRequest{
        ReviewID: "officia",
        UserAccountID: sdk.String("dolor"),
        UserID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReviews

- Results are paginated and the default is value is 100 if no limit is provided


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
    res, err := s.ReviewsFindAndModifyReviews.GetReviews(ctx, operations.GetReviewsRequest{
        Limit: sdk.Int64(952749),
        PageNumber: sdk.Int64(680056),
        Query: sdk.String("in"),
        Sort: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReviewsReviewID

Find a Review within a particular App and marketplace

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
    res, err := s.ReviewsFindAndModifyReviews.GetReviewsReviewID(ctx, operations.GetReviewsReviewIDRequest{
        ReviewID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchReviewsReviewID

- Only the review author is able to update their review
- Returns the newly updated review


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
    res, err := s.ReviewsFindAndModifyReviews.PatchReviewsReviewID(ctx, operations.PatchReviewsReviewIDRequest{
        CustomData: sdk.String("maiores"),
        Description: sdk.String("rerum"),
        Headline: sdk.String("dicta"),
        Rating: sdk.Int64(297437),
        ReviewID: "cumque",
        UserAccountID: sdk.String("facere"),
        UserID: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostReviews

- Only authenticated users are able to post reviews
- Returns the newly created review


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
    res, err := s.ReviewsFindAndModifyReviews.PostReviews(ctx, operations.PostReviewsRequest{
        AppID: "aliquid",
        AutoApprove: sdk.Bool(false),
        CustomData: sdk.String("laborum"),
        Description: "accusamus",
        Headline: "non",
        MustOwnApp: sdk.Bool(false),
        Rating: 581273,
        Type: sdk.String("enim"),
        UserAccountID: sdk.String("accusamus"),
        UserID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostReviewsReviewID

- Only the review author is able to update their review
- Returns the newly updated review


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
    res, err := s.ReviewsFindAndModifyReviews.PostReviewsReviewID(ctx, operations.PostReviewsReviewIDRequest{
        CustomData: sdk.String("quidem"),
        Description: "provident",
        Headline: "nam",
        Rating: 659669,
        ReviewID: "blanditiis",
        UserAccountID: "deleniti",
        UserID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
