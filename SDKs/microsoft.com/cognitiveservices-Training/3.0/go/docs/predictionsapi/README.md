# PredictionsAPI

### Available Operations

* [DeletePrediction](#deleteprediction) - Delete a set of predicted images and their associated prediction results.
* [QueryPredictionsForm](#querypredictionsform) - Get images that were sent to your prediction endpoint.
* [QueryPredictionsJSON](#querypredictionsjson) - Get images that were sent to your prediction endpoint.
* [QueryPredictionsRaw](#querypredictionsraw) - Get images that were sent to your prediction endpoint.
* [QuickTestImage](#quicktestimage) - Quick test an image.
* [QuickTestImageURLForm](#quicktestimageurlform) - Quick test an image url.
* [QuickTestImageURLJSON](#quicktestimageurljson) - Quick test an image url.
* [QuickTestImageURLRaw](#quicktestimageurlraw) - Quick test an image url.

## DeletePrediction

Delete a set of predicted images and their associated prediction results.

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
        TrainingKey: "dolorem",
        Ids: []string{
            "09db0536-d9e7-45ca-806f-5392c11a25a8",
        },
        ProjectID: "bf92f974-28ad-49a9-b8bf-8221125359d9",
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

Get images that were sent to your prediction endpoint.

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
            Application: sdk.String("blanditiis"),
            Continuation: sdk.String("consectetur"),
            EndTime: types.MustTimeFromString("2022-01-08T20:46:09.001Z"),
            IterationID: sdk.String("f7a79cd7-2cd2-4484-9a21-729f2ac41ef5"),
            MaxCount: sdk.Int(468221),
            OrderBy: shared.PredictionQueryTokenOrderByEnumNewest.ToPointer(),
            Session: sdk.String("quis"),
            StartTime: types.MustTimeFromString("2022-08-26T02:18:41.469Z"),
        },
        TrainingKey: "dicta",
        ProjectID: "69ac1e41-d8a2-43c2-be34-f2dfa4a197f6",
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

Get images that were sent to your prediction endpoint.

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
            Application: sdk.String("nulla"),
            Continuation: sdk.String("recusandae"),
            EndTime: types.MustTimeFromString("2022-09-25T00:43:44.722Z"),
            IterationID: sdk.String("2151fe17-1209-4985-be9f-543d854439ee"),
            MaxCount: sdk.Int(155762),
            OrderBy: shared.PredictionQueryTokenOrderByEnumNewest.ToPointer(),
            Session: sdk.String("ut"),
            StartTime: types.MustTimeFromString("2022-08-13T01:25:39.286Z"),
        },
        TrainingKey: "accusantium",
        ProjectID: "443bc154-188c-42f5-ae85-da7832eabd61",
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

Get images that were sent to your prediction endpoint.

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
        RequestBody: []byte("odio"),
        TrainingKey: "eligendi",
        ProjectID: "3b0d51a4-4bf0-41ba-9870-6d46082bfbdc",
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

Quick test an image.

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
                Content: []byte("modi"),
                ImageData: "vitae",
            },
        },
        TrainingKey: "delectus",
        IterationID: sdk.String("f5d4e2ae-4fb5-4cb3-9d17-638f1edb7835"),
        ProjectID: "9ecc5cb8-60f8-4cd5-80ba-73810e4fe444",
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

Quick test an image url.

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
            URL: "voluptate",
        },
        TrainingKey: "magni",
        IterationID: sdk.String("97cd3b1d-d3bb-4ce2-87b7-684eff50126d"),
        ProjectID: "71cffbd0-eb74-4b84-a195-3b44bd3c4315",
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

Quick test an image url.

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
            URL: "unde",
        },
        TrainingKey: "assumenda",
        IterationID: sdk.String("33e5953c-0011-4398-a3aa-41e6c31cc2f1"),
        ProjectID: "fcb51c9a-41ff-4be9-8bd7-95ee65e076cc",
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

Quick test an image url.

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
        RequestBody: []byte("molestiae"),
        TrainingKey: "mollitia",
        IterationID: sdk.String("bf616ea5-c716-4419-b4b9-0f2e09d19d2f"),
        ProjectID: "c2f9e2e1-0594-44b9-b5d2-37a72f90849d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
