# Languages

## Overview

Information about languages

### Available Operations

* [GetResourcesLanguagesJSON](#getresourceslanguagesjson) - Get Languages
* [GetResourcesLanguagesIDJSON](#getresourceslanguagesidjson) - Get Language by ID

## GetResourcesLanguagesJSON

Language Listings

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
    res, err := s.Languages.GetResourcesLanguagesJSON(ctx, operations.GetResourcesLanguagesJSONRequest{
        Max: sdk.Int(891773),
        Offset: sdk.Int(56713),
        Sort: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguageWrappeds != nil {
        // handle response
    }
}
```

## GetResourcesLanguagesIDJSON

Information about a specific language

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
    res, err := s.Languages.GetResourcesLanguagesIDJSON(ctx, operations.GetResourcesLanguagesIDJSONRequest{
        ID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguageWrappeds != nil {
        // handle response
    }
}
```
