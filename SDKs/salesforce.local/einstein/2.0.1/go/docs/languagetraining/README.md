# LanguageTraining

## Overview

Resources that handle text dataset training.

### Available Operations

* [GetTrainStatusAndProgress](#gettrainstatusandprogress) - Get Training Status
* [Retrain](#retrain) - Retrain a Dataset
* [Train](#train) - Train a Dataset

## GetTrainStatusAndProgress

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
    res, err := s.LanguageTraining.GetTrainStatusAndProgress(ctx, operations.GetTrainStatusAndProgressRequest{
        ModelID: "ipsum",
    }, operations.GetTrainStatusAndProgressSecurity{
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

## Retrain

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
    res, err := s.LanguageTraining.Retrain(ctx, operations.RetrainRequestBody{
        Algorithm: sdk.String("intent"),
        Epochs: sdk.Int(20),
        LearningRate: sdk.Float32(0.0001),
        ModelID: sdk.String("7JXCXTRXTMNLJCEF2DR5CJ46QU"),
        TrainParams: &shared.V2LanguageTrainParams{
            TrainSplitRatio: sdk.Float32(0.9),
            WithFeedback: sdk.Bool(false),
            WithGlobalDatasetID: sdk.Int64(568434),
        },
    }, operations.RetrainSecurity{
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

## Train

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
    res, err := s.LanguageTraining.Train(ctx, operations.TrainRequestBody{
        Algorithm: sdk.String("intent"),
        DatasetID: sdk.Int64(57),
        Epochs: sdk.Int(20),
        LearningRate: sdk.Float64(1352.18),
        Name: sdk.String("Cathy Mosciski"),
        TrainParams: &shared.V2LanguageTrainParams{
            TrainSplitRatio: sdk.Float32(0.9),
            WithFeedback: sdk.Bool(false),
            WithGlobalDatasetID: sdk.Int64(222321),
        },
    }, operations.TrainSecurity{
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
