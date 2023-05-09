# PrivateQuotes

## Overview

Create and manage your own Quotes. You need an API key to access this service.

### Available Operations

* [DeleteQuote](#deletequote) - Delete a quote. The user needs to be the owner of the quote to be able to delete it.

* [GetQuote](#getquote) - Gets a `Quote` with a given `id`.
* [GetQuoteList](#getquotelist) - Get the list of quotes in your private collection.
* [PatchQuote](#patchquote) - Update a quote
* [PostQuote](#postquote) - Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
* [PostQuoteTagsAdd](#postquotetagsadd) - Add a tag to a given Quote.
* [PostQuoteTagsRemove](#postquotetagsremove) - Remove a tag from a given quote.
* [PutQuote](#putquote) - Add a new quote to your private collection.

## DeleteQuote

Delete a quote. The user needs to be the owner of the quote to be able to delete it.


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
    res, err := s.PrivateQuotes.DeleteQuote(ctx, operations.DeleteQuoteRequest{
        ID: "debitis",
    }, operations.DeleteQuoteSecurity{
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
    res, err := s.PrivateQuotes.GetQuote(ctx, operations.GetQuoteRequest{
        ID: sdk.String("ipsa"),
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

## GetQuoteList

Get the list of quotes in your private collection.

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
    res, err := s.PrivateQuotes.GetQuoteList(ctx, operations.GetQuoteListRequest{
        Limit: sdk.Int(963663),
        Start: sdk.Int(272656),
    }, operations.GetQuoteListSecurity{
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

## PatchQuote

Update a quote

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
    res, err := s.PrivateQuotes.PatchQuote(ctx, operations.PatchQuoteRequest{
        Author: sdk.String("suscipit"),
        ID: "molestiae",
        Language: sdk.String("minus"),
        Quote: sdk.String("placeat"),
        Tags: sdk.String("voluptatum"),
    }, operations.PatchQuoteSecurity{
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

## PostQuote

Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.

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
    res, err := s.PrivateQuotes.PostQuote(ctx, operations.PostQuoteRequest{
        Author: sdk.String("iusto"),
        Language: sdk.String("excepturi"),
        Quote: "nisi",
        Tags: sdk.String("recusandae"),
    }, operations.PostQuoteSecurity{
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

## PostQuoteTagsAdd

Add a tag to a given Quote.

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
    res, err := s.PrivateQuotes.PostQuoteTagsAdd(ctx, operations.PostQuoteTagsAddRequest{
        ID: "temporibus",
        Tags: "ab",
    }, operations.PostQuoteTagsAddSecurity{
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

## PostQuoteTagsRemove

Remove a tag from a given quote.

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
    res, err := s.PrivateQuotes.PostQuoteTagsRemove(ctx, operations.PostQuoteTagsRemoveRequest{
        ID: "quis",
        Tags: "veritatis",
    }, operations.PostQuoteTagsRemoveSecurity{
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

## PutQuote

Add a new quote to your private collection.

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
    res, err := s.PrivateQuotes.PutQuote(ctx, operations.PutQuoteRequest{
        Author: sdk.String("deserunt"),
        Language: sdk.String("perferendis"),
        Quote: "ipsam",
        Tags: sdk.String("repellendus"),
    }, operations.PutQuoteSecurity{
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
