# LanguageExamples

## Overview

Resources that manage text examples.

### Available Operations

* [GetExamples](#getexamples) - Get All Examples
* [GetExamplesByLabel](#getexamplesbylabel) - Get All Examples for Label
* [ProvideFeedback](#providefeedback) - Create a Feedback Example
* [UpdateDatasetAsync](#updatedatasetasync) - Create Examples From a File

## GetExamples

Returns all the examples for the specified dataset,

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
    res, err := s.LanguageExamples.GetExamples(ctx, operations.GetExamplesRequest{
        Count: sdk.String("quod"),
        DatasetID: "quod",
        Offset: sdk.String("esse"),
        Source: operations.GetExamplesSourceEnumFeedback.ToPointer(),
    }, operations.GetExamplesSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExampleList != nil {
        // handle response
    }
}
```

## GetExamplesByLabel

Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.

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
    res, err := s.LanguageExamples.GetExamplesByLabel(ctx, operations.GetExamplesByLabelRequest{
        Count: sdk.String("porro"),
        LabelID: sdk.String("dolorum"),
        Offset: sdk.String("dicta"),
    }, operations.GetExamplesByLabelSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExampleList != nil {
        // handle response
    }
}
```

## ProvideFeedback

Adds a feedback example to the dataset associated with the specified model.

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
    res, err := s.LanguageExamples.ProvideFeedback(ctx, operations.ProvideFeedbackRequestBody{
        Document: sdk.String("nam"),
        ExpectedLabel: sdk.String("officia"),
        ModelID: sdk.String("occaecati"),
        Name: sdk.String("feedback-2"),
    }, operations.ProvideFeedbackSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Example != nil {
        // handle response
    }
}
```

## UpdateDatasetAsync

Adds examples from a .csv, .tsv, or .json file to a dataset.

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
    res, err := s.LanguageExamples.UpdateDatasetAsync(ctx, operations.UpdateDatasetAsyncRequest{
        RequestBody: &operations.UpdateDatasetAsyncRequestBody{
            Data: sdk.String("fugit"),
            Type: sdk.String("deleniti"),
        },
        DatasetID: "hic",
    }, operations.UpdateDatasetAsyncSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Dataset != nil {
        // handle response
    }
}
```
