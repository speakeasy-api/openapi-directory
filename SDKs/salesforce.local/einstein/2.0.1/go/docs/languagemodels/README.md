# LanguageModels

## Overview

Resources that manage text models and model metrics.

### Available Operations

* [DeleteModel](#deletemodel) - Delete a Model
* [GetTrainedModelLearningCurve](#gettrainedmodellearningcurve) - Get Model Learning Curve
* [GetTrainedModelMetrics](#gettrainedmodelmetrics) - Get Model Metrics
* [GetTrainedModels](#gettrainedmodels) - Get All Models

## DeleteModel

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
    res, err := s.LanguageModels.DeleteModel(ctx, operations.DeleteModelRequest{
        ModelID: "optio",
    }, operations.DeleteModelSecurity{
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

## GetTrainedModelLearningCurve

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
    res, err := s.LanguageModels.GetTrainedModelLearningCurve(ctx, operations.GetTrainedModelLearningCurveRequest{
        Count: sdk.String("totam"),
        ModelID: "beatae",
        Offset: sdk.String("commodi"),
    }, operations.GetTrainedModelLearningCurveSecurity{
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

## GetTrainedModelMetrics

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
    res, err := s.LanguageModels.GetTrainedModelMetrics(ctx, operations.GetTrainedModelMetricsRequest{
        ModelID: "molestiae",
    }, operations.GetTrainedModelMetricsSecurity{
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

## GetTrainedModels

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
    res, err := s.LanguageModels.GetTrainedModels(ctx, operations.GetTrainedModelsRequest{
        Count: sdk.String("modi"),
        DatasetID: "qui",
        Offset: sdk.String("impedit"),
    }, operations.GetTrainedModelsSecurity{
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
