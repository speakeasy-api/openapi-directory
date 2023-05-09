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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.DeletePrediction(ctx, operations.DeletePredictionRequest{
        Ids: []string{
            "c4da1fad-3551-42f0-ad4e-5b72f0f54856",
            "8a0424e0-0a1d-46eb-9434-645d03084fbb",
            "a5cceff5-cb01-4fe5-9e52-8a45ac82b85f",
        },
        ProjectID: "8bc2caba-8da4-4127-9d59-7ff4711aa1bc",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionsForm(ctx, operations.QueryPredictionsFormRequest{
        PredictionQueryToken: shared.PredictionQueryToken{
            Application: sdk.String("nihil"),
            Continuation: sdk.String("numquam"),
            EndTime: types.MustTimeFromString("2021-12-03T17:04:02.348Z"),
            IterationID: sdk.String("6cecc74f-77b4-4848-bd6a-6f0441d2c3b8"),
            MaxCount: sdk.Int(23128),
            OrderBy: shared.PredictionQueryTokenOrderByEnumOldest.ToPointer(),
            Session: sdk.String("sit"),
            StartTime: types.MustTimeFromString("2022-05-18T15:08:01.341Z"),
            Tags: []shared.PredictionQueryTag{
                shared.PredictionQueryTag{
                    ID: sdk.String("73e06045-9beb-4bad-82f2-586bcf152558"),
                    MaxThreshold: sdk.Float32(8433.86),
                    MinThreshold: sdk.Float32(6849.38),
                },
            },
        },
        ProjectID: "a95be6cd-0275-46c3-94aa-432b47e1763c",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionsJSON(ctx, operations.QueryPredictionsJSONRequest{
        PredictionQueryToken: shared.PredictionQueryToken{
            Application: sdk.String("ad"),
            Continuation: sdk.String("explicabo"),
            EndTime: types.MustTimeFromString("2022-07-01T12:28:26.841Z"),
            IterationID: sdk.String("c23e9802-d82f-40d4-9eb4-a8b674ee5cfc"),
            MaxCount: sdk.Int(122426),
            OrderBy: shared.PredictionQueryTokenOrderByEnumOldest.ToPointer(),
            Session: sdk.String("itaque"),
            StartTime: types.MustTimeFromString("2020-09-18T06:51:35.386Z"),
            Tags: []shared.PredictionQueryTag{
                shared.PredictionQueryTag{
                    ID: sdk.String("f787e32e-04b3-4d3e-90c5-670ef42bd3c9"),
                    MaxThreshold: sdk.Float32(9380.76),
                    MinThreshold: sdk.Float32(1131.23),
                },
                shared.PredictionQueryTag{
                    ID: sdk.String("cc503f6c-39bc-4d0a-a290-f957f385189a"),
                    MaxThreshold: sdk.Float32(8220.84),
                    MinThreshold: sdk.Float32(4766.44),
                },
            },
        },
        ProjectID: "ef807aae-03f3-43ca-b9fb-9de4032ba26f",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QueryPredictionsRaw(ctx, operations.QueryPredictionsRawRequest{
        RequestBody: []byte("temporibus"),
        ProjectID: "368ba921-6bcb-4415-835c-73641723133e",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QuickTestImage(ctx, operations.QuickTestImageRequest{
        RequestBody: operations.QuickTestImageRequestBody{
            ImageData: operations.QuickTestImageRequestBodyImageData{
                Content: []byte("fugiat"),
                ImageData: "quod",
            },
        },
        IterationID: sdk.String("046bc516-3bbc-4a49-a27c-42c22c553504"),
        ProjectID: "95c5dbb3-c57c-41e4-981e-8aa257ddc191",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QuickTestImageURLForm(ctx, operations.QuickTestImageURLFormRequest{
        ImageURL: shared.ImageURL{
            URL: "fugit",
        },
        IterationID: sdk.String("ebde64bf-cc54-469d-8015-dfa796206bef"),
        ProjectID: "2b0a3e42-c1aa-4010-a9aa-c2e9135586d1",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QuickTestImageURLJSON(ctx, operations.QuickTestImageURLJSONRequest{
        ImageURL: shared.ImageURL{
            URL: "quas",
        },
        IterationID: sdk.String("f9f97a4b-fad2-4bf7-967c-a84ad99b41d6"),
        ProjectID: "12435318-70cf-468b-83ad-421bd43d1f0c",
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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            ApimKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PredictionsAPI.QuickTestImageURLRaw(ctx, operations.QuickTestImageURLRawRequest{
        RequestBody: []byte("libero"),
        IterationID: sdk.String("0a0003eb-22d9-4b3a-b0d9-4faa741c57d1"),
        ProjectID: "fedc2050-d38d-4c3c-a185-472f9ee69166",
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
