# Quote

## Overview

Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.

### Available Operations

* [GetQuote](#getquote) - Gets a `Quote` with a given `id`.
* [GetQuoteAuthorsPopular](#getquoteauthorspopular) - Gets a list of popular author names in the system. 

* [GetQuoteAuthorsSearch](#getquoteauthorssearch) - Gets a list of author names in the system. 

* [GetQuoteBookmarkToggle](#getquotebookmarktoggle) - Toggle the user bookmark of the given Quote as a user of the API Key.
* [GetQuoteCategoriesPopular](#getquotecategoriespopular) - Gets a list of popular `Quote` Categories.

* [GetQuoteCategoriesSearch](#getquotecategoriessearch) - Gets a list of `Quote` Categories matching the query string.

* [GetQuoteLikeToggle](#getquoteliketoggle) - Toggle the user like of the given Quote as a user of the API Key.
* [GetQuoteRandom](#getquoterandom) - Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
* [GetQuoteSearch](#getquotesearch) - Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

## GetQuote

Gets a `Quote` with a given `id`.

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
    res, err := s.Quote.GetQuote(ctx, operations.GetQuoteRequest{
        ID: sdk.String("optio"),
    }, operations.GetQuoteSecurity{
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

## GetQuoteAuthorsPopular

Gets a list of popular author names in the system. 


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
    res, err := s.Quote.GetQuoteAuthorsPopular(ctx, operations.GetQuoteAuthorsPopularRequest{
        Detailed: sdk.Bool(false),
        Language: sdk.String("totam"),
        Limit: sdk.Int(105907),
        Start: sdk.Int(414662),
    }, operations.GetQuoteAuthorsPopularSecurity{
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

## GetQuoteAuthorsSearch

Gets a list of author names in the system. 


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
    res, err := s.Quote.GetQuoteAuthorsSearch(ctx, operations.GetQuoteAuthorsSearchRequest{
        Detailed: sdk.Bool(false),
        Language: sdk.String("molestiae"),
        Limit: sdk.Int(264555),
        Query: sdk.String("qui"),
        Start: sdk.Int(774234),
    }, operations.GetQuoteAuthorsSearchSecurity{
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

## GetQuoteBookmarkToggle

Toggle the user bookmark of the given Quote as a user of the API Key.

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
    res, err := s.Quote.GetQuoteBookmarkToggle(ctx, operations.GetQuoteBookmarkToggleRequest{
        QuoteID: "cum",
    }, operations.GetQuoteBookmarkToggleSecurity{
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

## GetQuoteCategoriesPopular

Gets a list of popular `Quote` Categories.


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
    res, err := s.Quote.GetQuoteCategoriesPopular(ctx, operations.GetQuoteCategoriesPopularRequest{
        Limit: sdk.Int(456150),
        Start: sdk.Int(216550),
    }, operations.GetQuoteCategoriesPopularSecurity{
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

## GetQuoteCategoriesSearch

Gets a list of `Quote` Categories matching the query string.


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
    res, err := s.Quote.GetQuoteCategoriesSearch(ctx, operations.GetQuoteCategoriesSearchRequest{
        Limit: sdk.Int(568434),
        Query: sdk.String("aspernatur"),
        Start: sdk.Int(18789),
    }, operations.GetQuoteCategoriesSearchSecurity{
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

## GetQuoteLikeToggle

Toggle the user like of the given Quote as a user of the API Key.

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
    res, err := s.Quote.GetQuoteLikeToggle(ctx, operations.GetQuoteLikeToggleRequest{
        QuoteID: "ad",
    }, operations.GetQuoteLikeToggleSecurity{
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

## GetQuoteRandom

Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.

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
    res, err := s.Quote.GetQuoteRandom(ctx, operations.GetQuoteRandomRequest{
        Language: sdk.String("natus"),
        Limit: sdk.Int64(149675),
    }, operations.GetQuoteRandomSecurity{
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

## GetQuoteSearch

Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote. 

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
    res, err := s.Quote.GetQuoteSearch(ctx, operations.GetQuoteSearchRequest{
        Author: sdk.String("iste"),
        Category: sdk.String("dolor"),
        Language: sdk.String("natus"),
        Limit: sdk.Int64(386489),
        Maxlength: sdk.Int(943749),
        Minlength: sdk.Int(902599),
        Private: sdk.Bool(false),
        Query: sdk.String("fuga"),
        Sfw: sdk.Bool(false),
    }, operations.GetQuoteSearchSecurity{
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
