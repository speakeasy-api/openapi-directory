# VisionModels

## Overview

Resources that manage image models and model metrics.

### Available Operations

* [DeleteModel1](#deletemodel1) - Delete a Model
* [GetTrainedModelLearningCurve1](#gettrainedmodellearningcurve1) - Get Model Learning Curve
* [GetTrainedModelMetrics1](#gettrainedmodelmetrics1) - Get Model Metrics
* [GetTrainedModels1](#gettrainedmodels1) - Get All Models

## DeleteModel1

Deletes the specified model.

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
    res, err := s.VisionModels.DeleteModel1(ctx, operations.DeleteModel1Request{
        ModelID: "SomeModelId",
    }, operations.DeleteModel1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletionResponse != nil {
        // handle response
    }
}
```

## GetTrainedModelLearningCurve1

Returns the metrics for each epoch in a model.

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
    res, err := s.VisionModels.GetTrainedModelLearningCurve1(ctx, operations.GetTrainedModelLearningCurve1Request{
        Count: sdk.String("quasi"),
        ModelID: "SomeModelId",
        Offset: sdk.String("reiciendis"),
    }, operations.GetTrainedModelLearningCurve1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LearningCurveList != nil {
        // handle response
    }
}
```

## GetTrainedModelMetrics1

Returns the metrics for a model

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
    res, err := s.VisionModels.GetTrainedModelMetrics1(ctx, operations.GetTrainedModelMetrics1Request{
        ModelID: "SomeModelId",
    }, operations.GetTrainedModelMetrics1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Metrics != nil {
        // handle response
    }
}
```

## GetTrainedModels1

Returns all models for the specified dataset.

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
    res, err := s.VisionModels.GetTrainedModels1(ctx, operations.GetTrainedModels1Request{
        Count: sdk.String("voluptatibus"),
        DatasetID: "vero",
        Offset: sdk.String("nihil"),
    }, operations.GetTrainedModels1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ModelList != nil {
        // handle response
    }
}
```
