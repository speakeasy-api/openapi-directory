# Qshow

## Overview

Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.

### Available Operations

* [DeleteQshow](#deleteqshow) - Delete a qshow.

* [GetQshow](#getqshow) - Gets a details about a qshow.

* [GetQshowList](#getqshowlist) - Get the list of Qshows in They Said So platform.
* [GetQshowQuotes](#getqshowquotes) - Get the quotes in a given Qshow.
* [PatchQshow](#patchqshow) - Update an existing qshow.
* [PostQshowQuotesAdd](#postqshowquotesadd) - Add a quote to a given Qshow.
* [PostQshowQuotesRemove](#postqshowquotesremove) - Remove a quote to a given Qshow.
* [PutQshow](#putqshow) - Create and add a new qshow to your private collection.

## DeleteQshow

Delete a qshow.


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
    res, err := s.Qshow.DeleteQshow(ctx, operations.DeleteQshowRequest{
        ID: "sapiente",
    }, operations.DeleteQshowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQshow

Gets a details about a qshow.


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
    res, err := s.Qshow.GetQshow(ctx, operations.GetQshowRequest{
        ID: "quo",
    }, operations.GetQshowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQshowList

Get the list of Qshows in They Said So platform.

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
    res, err := s.Qshow.GetQshowList(ctx, operations.GetQshowListRequest{
        Public: sdk.Bool(false),
        Start: sdk.Int(140350),
    }, operations.GetQshowListSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQshowQuotes

Get the quotes in a given Qshow.

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
    res, err := s.Qshow.GetQshowQuotes(ctx, operations.GetQshowQuotesRequest{
        ID: "at",
    }, operations.GetQshowQuotesSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchQshow

Update an existing qshow.

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
    res, err := s.Qshow.PatchQshow(ctx, operations.PatchQshowRequest{
        Description: sdk.String("at"),
        ID: "maiores",
        Tags: []string{
            "quod",
            "quod",
        },
        Title: sdk.String("esse"),
    }, operations.PatchQshowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQshowQuotesAdd

Add a quote to a given Qshow.

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
    res, err := s.Qshow.PostQshowQuotesAdd(ctx, operations.PostQshowQuotesAddRequest{
        ID: "totam",
        Quoteid: "porro",
    }, operations.PostQshowQuotesAddSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostQshowQuotesRemove

Remove a quote to a given Qshow.

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
    res, err := s.Qshow.PostQshowQuotesRemove(ctx, operations.PostQshowQuotesRemoveRequest{
        ID: "dolorum",
        Quoteid: "dicta",
    }, operations.PostQshowQuotesRemoveSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutQshow

Create and add a new qshow to your private collection.

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
    res, err := s.Qshow.PutQshow(ctx, operations.PutQshowRequest{
        Description: sdk.String("nam"),
        Tags: []string{
            "occaecati",
            "fugit",
            "deleniti",
        },
        Title: "hic",
    }, operations.PutQshowSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
