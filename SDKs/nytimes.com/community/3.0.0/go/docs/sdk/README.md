# SDK

## Overview

Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

<http://developer.nytimes.com/>
### Available Operations

* [GETUserContentByDateJSON](#getusercontentbydatejson) - Comments by Date
* [GETUserContentRecentJSON](#getusercontentrecentjson) - Recent User Comments
* [GETUserContentURLJSON](#getusercontenturljson) - Comments by URL
* [GETUserContentUserJSON](#getusercontentuserjson) - Comments by User

## GETUserContentByDateJSON

Comments by Date

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
    res, err := s.SDK.GETUserContentByDateJSON(ctx, operations.GETUserContentByDateJSONRequest{
        Date: sdk.String("provident"),
    }, operations.GETUserContentByDateJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentByDateJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETUserContentRecentJSON

Recent User Comments

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
    res, err := s.SDK.GETUserContentRecentJSON(ctx, operations.GETUserContentRecentJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentRecentJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETUserContentURLJSON

Comments by URL

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
    res, err := s.SDK.GETUserContentURLJSON(ctx, operations.GETUserContentURLJSONRequest{
        URL: sdk.String("distinctio"),
    }, operations.GETUserContentURLJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentURLJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GETUserContentUserJSON

Comments by User

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
    res, err := s.SDK.GETUserContentUserJSON(ctx, operations.GETUserContentUserJSONRequest{
        UserID: sdk.Int64(844266),
    }, operations.GETUserContentUserJSONSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GETUserContentUserJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
