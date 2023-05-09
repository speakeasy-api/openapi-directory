# QuoteOfTheDay

## Overview

Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.

Find out more
<https://theysaidso.com/api/quote#qod>
### Available Operations

* [GetQod](#getqod) - Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day

* [GetQodCategories](#getqodcategories) - Gets a list of `Quote of the Day` Categories.

* [GetQodLanguages](#getqodlanguages) - Gets a list of supported languages for `Quote of the Day`. 


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
    res, err := s.QuoteOfTheDay.GetQod(ctx, operations.GetQodRequest{
        Category: sdk.String("occaecati"),
        ID: sdk.String("numquam"),
        Language: sdk.String("commodi"),
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

## GetQodCategories

Gets a list of `Quote of the Day` Categories.


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
    res, err := s.QuoteOfTheDay.GetQodCategories(ctx, operations.GetQodCategoriesRequest{
        Detailed: sdk.Bool(false),
        Language: sdk.String("quam"),
    }, operations.GetQodCategoriesSecurity{
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

## GetQodLanguages

Gets a list of supported languages for `Quote of the Day`. 


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
    res, err := s.QuoteOfTheDay.GetQodLanguages(ctx, operations.GetQodLanguagesSecurity{
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
