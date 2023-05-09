# PredictionsAPI

### Available Operations

* [DeletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [QueryPredictionResultsForm](#querypredictionresultsform) - Get images that were sent to your prediction endpoint
* [QueryPredictionResultsJSON](#querypredictionresultsjson) - Get images that were sent to your prediction endpoint
* [QueryPredictionResultsRaw](#querypredictionresultsraw) - Get images that were sent to your prediction endpoint
* [QuickTestImage](#quicktestimage) - Quick test an image
* [QuickTestImageURLForm](#quicktestimageurlform) - Quick test an image url
* [QuickTestImageURLJSON](#quicktestimageurljson) - Quick test an image url
* [QuickTestImageURLRaw](#quicktestimageurlraw) - Quick test an image url

## DeletePrediction

Delete a set of predicted images and their associated prediction results

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
    res, err := s.PredictionsAPI.DeletePrediction(ctx, operations.DeletePredictionRequest{
        TrainingKey: "nesciunt",
        Ids: []string{
            "sint",
        },
        ProjectID: "470bf7a4-fa87-4cf5-b5a6-fae54ebf60c3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QueryPredictionResultsForm

Get images that were sent to your prediction endpoint

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionResultsForm(ctx, operations.QueryPredictionResultsFormRequest{
        PredictionQueryTokenInput: shared.PredictionQueryTokenInput{
            Application: sdk.String("sunt"),
            Continuation: sdk.String("vitae"),
            EndTime: types.MustTimeFromString("2022-11-15T14:40:21.227Z"),
            IterationID: sdk.String("23b75d23-67fe-41a0-8c8d-f79f0a396d90"),
            MaxCount: sdk.Int(771931),
            OrderBy: shared.PredictionQueryTokenOrderByEnumNewest.ToPointer(),
            Session: sdk.String("commodi"),
            StartTime: types.MustTimeFromString("2022-04-16T19:53:20.939Z"),
        },
        TrainingKey: "in",
        ProjectID: "c15dfbac-e188-4b1c-8ee2-c8c6ce611fee",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQuery != nil {
        // handle response
    }
}
```

## QueryPredictionResultsJSON

Get images that were sent to your prediction endpoint

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionResultsJSON(ctx, operations.QueryPredictionResultsJSONRequest{
        PredictionQueryTokenInput: shared.PredictionQueryTokenInput{
            Application: sdk.String("quidem"),
            Continuation: sdk.String("illo"),
            EndTime: types.MustTimeFromString("2021-07-12T09:24:12.136Z"),
            IterationID: sdk.String("cbdb6eec-7437-48ba-a531-7747dc915ad2"),
            MaxCount: sdk.Int(804879),
            OrderBy: shared.PredictionQueryTokenOrderByEnumSuggested.ToPointer(),
            Session: sdk.String("repellat"),
            StartTime: types.MustTimeFromString("2022-02-25T17:35:04.595Z"),
        },
        TrainingKey: "quibusdam",
        ProjectID: "6723dc0f-5ae2-4f3a-ab70-0878756143f5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQuery != nil {
        // handle response
    }
}
```

## QueryPredictionResultsRaw

Get images that were sent to your prediction endpoint

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionResultsRaw(ctx, operations.QueryPredictionResultsRawRequest{
        RequestBody: []byte("est"),
        TrainingKey: "iure",
        ProjectID: "c98b5555-4080-4d40-bcac-c6cbd6b5f3ec",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQuery != nil {
        // handle response
    }
}
```

## QuickTestImage

Quick test an image

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
    res, err := s.PredictionsAPI.QuickTestImage(ctx, operations.QuickTestImageRequest{
        RequestBody: operations.QuickTestImageRequestBody{
            ImageData: operations.QuickTestImageRequestBodyImageData{
                Content: []byte("cupiditate"),
                ImageData: "voluptatem",
            },
        },
        TrainingKey: "provident",
        IterationID: sdk.String("304f926b-ad25-4538-99b4-74b0ed20e562"),
        ProjectID: "48fff639-a910-4abd-8ab6-2676696e1ec0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResult != nil {
        // handle response
    }
}
```

## QuickTestImageURLForm

Quick test an image url

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
    res, err := s.PredictionsAPI.QuickTestImageURLForm(ctx, operations.QuickTestImageURLFormRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("alias"),
        },
        TrainingKey: "qui",
        IterationID: sdk.String("21b335d8-9acb-43ec-bda8-d0c549ef0300"),
        ProjectID: "4978a61f-a1cf-4206-88f7-7c1ffc71dca1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResult != nil {
        // handle response
    }
}
```

## QuickTestImageURLJSON

Quick test an image url

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
    res, err := s.PredictionsAPI.QuickTestImageURLJSON(ctx, operations.QuickTestImageURLJSONRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("ex"),
        },
        TrainingKey: "consectetur",
        IterationID: sdk.String("f2a3c80a-97ff-4334-8ddf-857a9e61876c"),
        ProjectID: "6ab21d29-dfc9-44d6-becd-799390066a6d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResult != nil {
        // handle response
    }
}
```

## QuickTestImageURLRaw

Quick test an image url

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
    res, err := s.PredictionsAPI.QuickTestImageURLRaw(ctx, operations.QuickTestImageURLRawRequest{
        RequestBody: []byte("explicabo"),
        TrainingKey: "fugiat",
        IterationID: sdk.String("00035533-8cec-4086-ba21-e9152cb31191"),
        ProjectID: "67b8e3c8-db03-4408-96d3-64ffd455906d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResult != nil {
        // handle response
    }
}
```
