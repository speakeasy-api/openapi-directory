# Activity

### Available Operations

* [GetActivities](#getactivities) - Monitor project activities
* [GetActivity](#getactivity) - View an activity
* [GetActivityComments](#getactivitycomments) - View activity comments
* [GetComments](#getcomments) - View all project comments
* [GetSalesActivities](#getsalesactivities) - Get sales activities for a project
* [InsertSalesActivity](#insertsalesactivity) - Insert sales activity for a project
* [SubmitCommentJSON](#submitcommentjson) - Submit comment to an activity
* [SubmitCommentMultipart](#submitcommentmultipart) - Submit comment to an activity

## GetActivities

Get a list of real-time activities in the project, such as translation suggestion and translation approval.

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
    res, err := s.Activity.GetActivities(ctx, operations.GetActivitiesRequest{
        Page: sdk.Int64(715190),
        PerPage: sdk.Int64(844266),
        ProjectID: 602763,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityList != nil {
        // handle response
    }
}
```

## GetActivity

View the details of an activity in the project.

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
    res, err := s.Activity.GetActivity(ctx, operations.GetActivityRequest{
        ActivityID: 857946,
        ProjectID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Activity != nil {
        // handle response
    }
}
```

## GetActivityComments

View a list of comments added to this activity.

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
    res, err := s.Activity.GetActivityComments(ctx, operations.GetActivityCommentsRequest{
        ActivityID: 847252,
        ProjectID: 423655,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```

## GetComments

View a list of activity comments in the project.

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
    res, err := s.Activity.GetComments(ctx, operations.GetCommentsRequest{
        Page: sdk.Int64(623564),
        PerPage: sdk.Int64(645894),
        ProjectID: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CommentList != nil {
        // handle response
    }
}
```

## GetSalesActivities

Get sales activities for a project

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Activity.GetSalesActivities(ctx, operations.GetSalesActivitiesRequest{
        ExcludeOwner: sdk.String("iure"),
        ID: 297534,
        Type: shared.SalesActivityTypeEnumTask.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SalesActivities != nil {
        // handle response
    }
}
```

## InsertSalesActivity

Insert sales activity for a project

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Activity.InsertSalesActivity(ctx, operations.InsertSalesActivityRequest{
        NewSalesActivity: &shared.NewSalesActivity{
            Subject: sdk.String("ipsa"),
            Timestamp: sdk.Int64(963663),
            Type: sdk.String("tempora"),
        },
        ID: 383441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## SubmitCommentJSON

Submit a comment to an activity in the project, such as translation or editing.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Activity.SubmitCommentJSON(ctx, operations.SubmitCommentJSONRequest{
        Comment: &shared.Comment{
            Comment: "molestiae",
            CommentedAt: sdk.Int64(791725),
            ID: sdk.Int64(812169),
            Links: &shared.CommentLinks{
                Activity: &shared.Href{
                    Href: sdk.String("voluptatum"),
                },
                Project: &shared.Href{
                    Href: sdk.String("iusto"),
                },
                Self: &shared.Href{
                    Href: sdk.String("excepturi"),
                },
            },
        },
        ActivityID: 392785,
        ProjectID: 925597,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```

## SubmitCommentMultipart

Submit a comment to an activity in the project, such as translation or editing.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Activity.SubmitCommentMultipart(ctx, operations.SubmitCommentMultipartRequest{
        Comment1: &shared.Comment1{
            Comment: "temporibus",
            CommentedAt: sdk.Int64(71036),
            ID: sdk.Int64(337396),
            Links: sdk.String("veritatis"),
        },
        ActivityID: 648172,
        ProjectID: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Comment != nil {
        // handle response
    }
}
```
