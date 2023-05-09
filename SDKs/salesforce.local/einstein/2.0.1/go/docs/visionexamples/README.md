# VisionExamples

## Overview

Resources that manage image examples.

### Available Operations

* [AddExample](#addexample) - Create an Example
* [GetExamplesByLabel1](#getexamplesbylabel1) - Get All Examples for Label
* [GetExamples1](#getexamples1) - Get All Examples
* [ProvideFeedback1](#providefeedback1) - Create a Feedback Example
* [UpdateDatasetAsync1](#updatedatasetasync1) - Create Feedback Examples From a Zip File
* [UpdateDatasetAsync2](#updatedatasetasync2) - Create Examples From a Zip File

## AddExample

Adds an example with the specified label to a dataset.

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
    res, err := s.VisionExamples.AddExample(ctx, operations.AddExampleRequest{
        RequestBody: &operations.AddExampleRequestBody{
            Data: sdk.String("quam"),
            LabelID: sdk.Int64(42),
            Name: sdk.String("Shannon Mueller"),
        },
        DatasetID: "vitae",
    }, operations.AddExampleSecurity{
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

## GetExamplesByLabel1

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
    res, err := s.VisionExamples.GetExamplesByLabel1(ctx, operations.GetExamplesByLabel1Request{
        Count: sdk.String("laborum"),
        LabelID: sdk.String("animi"),
        Offset: sdk.String("enim"),
    }, operations.GetExamplesByLabel1Security{
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

## GetExamples1

Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.

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
    res, err := s.VisionExamples.GetExamples1(ctx, operations.GetExamples1Request{
        Count: sdk.String("odit"),
        DatasetID: "quo",
        Offset: sdk.String("sequi"),
        Source: operations.GetExamples1SourceEnumUpload.ToPointer(),
    }, operations.GetExamples1Security{
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

## ProvideFeedback1

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
    res, err := s.VisionExamples.ProvideFeedback1(ctx, operations.ProvideFeedback1RequestBody{
        Data: sdk.String("ipsam"),
        ExpectedLabel: sdk.String("id"),
        ModelID: sdk.String("possimus"),
        Name: sdk.String("feedback-1"),
    }, operations.ProvideFeedback1Security{
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

## UpdateDatasetAsync1

Adds feedback examples to the dataset associated with the specified object detection model.

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
    res, err := s.VisionExamples.UpdateDatasetAsync1(ctx, operations.UpdateDatasetAsync1RequestBody{
        Data: sdk.String("aut"),
        ModelID: sdk.String("quasi"),
    }, operations.UpdateDatasetAsync1Security{
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

## UpdateDatasetAsync2

Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.

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
    res, err := s.VisionExamples.UpdateDatasetAsync2(ctx, operations.UpdateDatasetAsync2Request{
        RequestBody: &operations.UpdateDatasetAsync2RequestBody{
            Data: sdk.String("error"),
            Path: sdk.String("temporibus"),
        },
        DatasetID: "laborum",
    }, operations.UpdateDatasetAsync2Security{
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
