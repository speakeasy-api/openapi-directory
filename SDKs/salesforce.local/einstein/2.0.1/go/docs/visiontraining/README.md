# VisionTraining

## Overview

Resources that handle image dataset training.

### Available Operations

* [GetTrainStatusAndProgress1](#gettrainstatusandprogress1) - Get Training Status
* [Retrain1](#retrain1) - Retrain a Dataset
* [Train1](#train1) - Train a Dataset

## GetTrainStatusAndProgress1

Returns the status of a model's training process. Use the progress field to determine how far the training has progressed. When training completes successfully, the status is SUCCEEDED and the progress is 1.

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
    res, err := s.VisionTraining.GetTrainStatusAndProgress1(ctx, operations.GetTrainStatusAndProgress1Request{
        ModelID: "SomeModelId",
    }, operations.GetTrainStatusAndProgress1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrainResponse != nil {
        // handle response
    }
}
```

## Retrain1

Retrains a dataset and updates a model. Use this API call when you want to update a model and keep the model ID instead of creating a new model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionTraining.Retrain1(ctx, operations.Retrain1RequestBody{
        Algorithm: sdk.String("object-detection"),
        Epochs: sdk.Int(20),
        LearningRate: sdk.Float32(0.0001),
        ModelID: sdk.String("7JXCXTRXTMNLJCEF2DR5CJ46QU"),
        TrainParams: &shared.V2VisionTrainParams{
            TrainSplitRatio: sdk.Float32(0.9),
            WithFeedback: sdk.Bool(false),
            WithGlobalDatasetID: sdk.Int64(441711),
        },
    }, operations.Retrain1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrainResponse != nil {
        // handle response
    }
}
```

## Train1

Trains a dataset and creates a model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionTraining.Train1(ctx, operations.Train1RequestBody{
        Algorithm: sdk.String("object-detection"),
        DatasetID: sdk.Int64(57),
        Epochs: sdk.Int(20),
        LearningRate: sdk.Float64(0.0001),
        Name: sdk.String("Shawna Carter"),
        TrainParams: &shared.V2VisionTrainParams{
            TrainSplitRatio: sdk.Float32(0.9),
            WithFeedback: sdk.Bool(false),
            WithGlobalDatasetID: sdk.Int64(480894),
        },
    }, operations.Train1Security{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrainResponse != nil {
        // handle response
    }
}
```
