# PrivateQOD

## Overview

Define and host your own quote of the day service. You can set filter conditions based on tags, authors, your own quote collection etc. and our platform  will do the magic for you.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [GetQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [PatchQod](#patchqod) - Update an existing private `Quote of the Day` definition.

* [PutQod](#putqod) - Create a private `Quote of the Day` service. 


## GetQod

Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day


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
    res, err := s.PrivateQOD.GetQod(ctx, operations.GetQodRequest{
        Category: sdk.String("quibusdam"),
        ID: sdk.String("unde"),
        Language: sdk.String("nulla"),
    }, operations.GetQodSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QODResponse != nil {
        // handle response
    }
}
```

## PatchQod

Update an existing private `Quote of the Day` definition.


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
    res, err := s.PrivateQOD.PatchQod(ctx, operations.PatchQodRequest{
        Authors: sdk.String("corrupti"),
        Language: sdk.String("illum"),
        Private: sdk.Bool(false),
        RepeatAfter: sdk.Int64(423655),
        Sfw: sdk.Bool(false),
        Title: "error",
    }, operations.PatchQodSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuoteResponse != nil {
        // handle response
    }
}
```

## PutQod

Create a private `Quote of the Day` service. 


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
    res, err := s.PrivateQOD.PutQod(ctx, operations.PutQodRequest{
        Authors: sdk.String("deserunt"),
        Language: sdk.String("suscipit"),
        Private: sdk.Bool(false),
        RepeatAfter: sdk.Int64(437587),
        Sfw: sdk.Bool(false),
        Title: "magnam",
    }, operations.PutQodSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuccessResponse != nil {
        // handle response
    }
}
```
