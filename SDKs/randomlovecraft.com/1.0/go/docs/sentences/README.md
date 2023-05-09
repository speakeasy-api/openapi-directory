# Sentences

### Available Operations

* [GetSentences](#getsentences) - A random sentence
* [GetSentencesFromBook](#getsentencesfrombook) - Random sentences from a specific book
* [GetSpecificSentence](#getspecificsentence) - A specific sentence

## GetSentences

A random sentence

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
    res, err := s.Sentences.GetSentences(ctx, operations.GetSentencesRequest{
        Limit: sdk.Int64(548814),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSentences200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSentencesFromBook

Random sentences from a specific book

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
    res, err := s.Sentences.GetSentencesFromBook(ctx, operations.GetSentencesFromBookRequest{
        ID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Limit: sdk.Int64(20218),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSentencesFromBook200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetSpecificSentence

A specific sentence

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
    res, err := s.Sentences.GetSpecificSentence(ctx, operations.GetSpecificSentenceRequest{
        ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSpecificSentence200ApplicationJSONObject != nil {
        // handle response
    }
}
```
