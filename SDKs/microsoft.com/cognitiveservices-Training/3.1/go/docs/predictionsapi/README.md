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
        TrainingKey: "impedit",
        Ids: []string{
            "6b99bc63-562e-4bfd-b55c-294c060b06a1",
            "287764ee-f6d0-4c6d-aed9-c73dd6345715",
            "09a8e870-d3c5-4a1f-9c24-2c7b66a1f30c",
            "73df5b67-1989-40f4-aa4b-b438d85b2605",
        },
        ProjectID: "91d745e3-c205-49c9-83f5-67e0e252765b",
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
        PredictionQueryToken: shared.PredictionQueryToken{
            Application: sdk.String("beatae"),
            Continuation: sdk.String("repellendus"),
            EndTime: types.MustTimeFromString("2022-11-02T13:26:31.816Z"),
            IterationID: sdk.String("fcdace1f-0121-46ce-a239-e8f25cd0d19d"),
            MaxCount: sdk.Int(566089),
            OrderBy: shared.PredictionQueryTokenOrderByEnumOldest.ToPointer(),
            Session: sdk.String("sint"),
            StartTime: types.MustTimeFromString("2022-02-05T02:07:11.321Z"),
            Tags: []shared.PredictionQueryTag{
                shared.PredictionQueryTag{
                    ID: sdk.String("9e39266c-bd95-4f7a-a2b2-4113695d1e66"),
                    MaxThreshold: sdk.Float32(5711.57),
                    MinThreshold: sdk.Float32(5585.83),
                },
            },
        },
        TrainingKey: "repellat",
        ProjectID: "cc459621-7c29-4776-b633-4254038bfb59",
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
        PredictionQueryToken: shared.PredictionQueryToken{
            Application: sdk.String("molestiae"),
            Continuation: sdk.String("et"),
            EndTime: types.MustTimeFromString("2021-04-20T22:38:18.015Z"),
            IterationID: sdk.String("81905573-89ce-4dba-87fd-a39594d66bc2"),
            MaxCount: sdk.Int(652257),
            OrderBy: shared.PredictionQueryTokenOrderByEnumSuggested.ToPointer(),
            Session: sdk.String("aliquam"),
            StartTime: types.MustTimeFromString("2022-12-22T00:10:43.682Z"),
            Tags: []shared.PredictionQueryTag{
                shared.PredictionQueryTag{
                    ID: sdk.String("32b9954b-6fa2-4206-b698-28553cb10006"),
                    MaxThreshold: sdk.Float32(7316.75),
                    MinThreshold: sdk.Float32(8966.95),
                },
                shared.PredictionQueryTag{
                    ID: sdk.String("f4921ec2-053b-4749-b66a-c8ee0f2bf195"),
                    MaxThreshold: sdk.Float32(5514.1),
                    MinThreshold: sdk.Float32(5216.94),
                },
            },
        },
        TrainingKey: "facere",
        ProjectID: "40d03f3d-eba2-497b-a3e9-0bc40df868fd",
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
        RequestBody: []byte("nemo"),
        TrainingKey: "ratione",
        ProjectID: "405cb331-d492-4f4f-927f-b0e0bf1f8217",
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
                Content: []byte("sint"),
                ImageData: "dignissimos",
            },
        },
        TrainingKey: "voluptatum",
        IterationID: sdk.String("d0acca77-aeb7-4b70-a1a5-2046b64e99fb"),
        ProjectID: "0e67e094-fdfe-4d55-80ef-53a34a1b8fe9",
        Store: sdk.Bool(false),
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
            URL: "natus",
        },
        TrainingKey: "reprehenderit",
        IterationID: sdk.String("31adc05d-85ae-42df-b70f-b3874290d336"),
        ProjectID: "561eca16-ef89-4451-bd76-eeeb518c4da1",
        Store: sdk.Bool(false),
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
            URL: "asperiores",
        },
        TrainingKey: "est",
        IterationID: sdk.String("d35512f0-6d4e-45b7-af0f-548568a0424e"),
        ProjectID: "00a1d6eb-9434-4645-9030-84fbba5cceff",
        Store: sdk.Bool(false),
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
        RequestBody: []byte("ipsam"),
        TrainingKey: "quod",
        IterationID: sdk.String("b01fe51e-528a-445a-882b-85f8bc2caba8"),
        ProjectID: "da4127dd-597f-4f47-91aa-1bc74b86cecc",
        Store: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePrediction != nil {
        // handle response
    }
}
```
