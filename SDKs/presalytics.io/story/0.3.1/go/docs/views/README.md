# Views

### Available Operations

* [SessionsIDViewsGet](#sessionsidviewsget) - Views: List Session Views
* [SessionsIDViewsPost](#sessionsidviewspost) - Views: Create A Session View
* [ViewsIDDelete](#viewsiddelete) - Views: Delete by Id
* [ViewsIDGet](#viewsidget) - Views: Get View

## SessionsIDViewsGet

Get data for all views in a session

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
    res, err := s.Views.SessionsIDViewsGet(ctx, operations.SessionsIDViewsGetRequest{
        SessionID: "f725b291-2203-40d8-bf5a-eb7799d22e8c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Views != nil {
        // handle response
    }
}
```

## SessionsIDViewsPost

Create a page view object for a viewing session

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Views.SessionsIDViewsPost(ctx, operations.SessionsIDViewsPostRequest{
        RequestBody: operations.SessionsIDViewsPostRequiredParametersToCreateAView{
            ActiveMSecs: sdk.Int64(98805),
            Additional: sdk.String("repellat"),
            EndTime: types.MustTimeFromString("2022-05-28T15:53:37.829Z"),
            PageNumber: 594379,
            StartTime: types.MustTimeFromString("2022-06-15T16:15:25.092Z"),
        },
        SessionID: "25fdc42c-876c-42c2-9fb4-cfc1c76230f8",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.View != nil {
        // handle response
    }
}
```

## ViewsIDDelete

Remove a view and dependant data.

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
    res, err := s.Views.ViewsIDDelete(ctx, operations.ViewsIDDeleteRequest{
        ViewID: "41fb1bd2-3fdb-414d-b6be-5a685998e22a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ViewsIDGet

Get view meta data

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
    res, err := s.Views.ViewsIDGet(ctx, operations.ViewsIDGetRequest{
        ViewID: "e20da16f-c2b2-471a-a89c-57e854e90439",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.View != nil {
        // handle response
    }
}
```
