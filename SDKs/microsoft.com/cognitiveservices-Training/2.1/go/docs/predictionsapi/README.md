# PredictionsAPI

### Available Operations

* [DeletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results
* [QueryPredictionsForm](#querypredictionsform) - Get images that were sent to your prediction endpoint
* [QueryPredictionsJSON](#querypredictionsjson) - Get images that were sent to your prediction endpoint
* [QueryPredictionsRaw](#querypredictionsraw) - Get images that were sent to your prediction endpoint
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
        TrainingKey: "tenetur",
        Ids: []string{
            "deserunt",
        },
        ProjectID: "cab58b99-1c92-46dd-b589-461e7421cbe6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QueryPredictionsForm

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
    res, err := s.PredictionsAPI.QueryPredictionsForm(ctx, operations.QueryPredictionsFormRequest{
        PredictionQueryTokenInput: shared.PredictionQueryTokenInput{
            Application: sdk.String("possimus"),
            Continuation: sdk.String("provident"),
            EndTime: types.MustTimeFromString("2022-12-22T08:49:45.030Z"),
            IterationID: sdk.String("2f0ea930-b69f-47ac-af72-f88500904911"),
            MaxCount: sdk.Int(402908),
            OrderBy: shared.PredictionQueryTokenOrderByEnumNewest.ToPointer(),
            Session: sdk.String("quas"),
            StartTime: types.MustTimeFromString("2022-12-25T18:43:22.990Z"),
        },
        TrainingKey: "esse",
        ProjectID: "888ec661-83bf-4e96-99eb-40ec16faf75b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQueryResult != nil {
        // handle response
    }
}
```

## QueryPredictionsJSON

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
    res, err := s.PredictionsAPI.QueryPredictionsJSON(ctx, operations.QueryPredictionsJSONRequest{
        PredictionQueryTokenInput: shared.PredictionQueryTokenInput{
            Application: sdk.String("perferendis"),
            Continuation: sdk.String("nam"),
            EndTime: types.MustTimeFromString("2022-10-23T01:50:15.716Z"),
            IterationID: sdk.String("2a4da37c-baaf-4445-ac48-42c9b2ad32da"),
            MaxCount: sdk.Int(956572),
            OrderBy: shared.PredictionQueryTokenOrderByEnumSuggested.ToPointer(),
            Session: sdk.String("voluptatum"),
            StartTime: types.MustTimeFromString("2022-05-08T23:29:41.319Z"),
        },
        TrainingKey: "voluptatum",
        ProjectID: "8f444457-3fec-4d47-b53f-63c8209379aa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQueryResult != nil {
        // handle response
    }
}
```

## QueryPredictionsRaw

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
    res, err := s.PredictionsAPI.QueryPredictionsRaw(ctx, operations.QueryPredictionsRawRequest{
        RequestBody: []byte("ex"),
        TrainingKey: "occaecati",
        ProjectID: "cd5fbcf7-9da1-48a7-822b-f95894e6861a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PredictionQueryResult != nil {
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
                Content: []byte("possimus"),
                ImageData: "libero",
            },
        },
        TrainingKey: "ullam",
        IterationID: sdk.String("5f9e5d75-1c9f-4e8f-b502-bfdc3450841f"),
        ProjectID: "17644563-79f3-4fb2-be21-f862657b36fc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
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
            URL: sdk.String("vel"),
        },
        TrainingKey: "distinctio",
        IterationID: sdk.String("9f587ce5-25c6-4764-9a83-12e5047b4c21"),
        ProjectID: "ccb423ab-cdc9-41fa-abdd-88e71f6c4825",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
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
            URL: sdk.String("sed"),
        },
        TrainingKey: "quibusdam",
        IterationID: sdk.String("7771e7fd-0740-409e-b8d2-9de1dd7097b5"),
        ProjectID: "da08c57f-a6c7-48a2-96e1-9bafeca61914",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
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
        RequestBody: []byte("excepturi"),
        TrainingKey: "atque",
        IterationID: sdk.String("140b64ff-8ae1-470e-b03b-5f37e4aa8685"),
        ProjectID: "55966732-aa5d-4cb6-a82c-b70f8cfd5fb6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
