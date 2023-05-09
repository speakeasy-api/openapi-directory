# ImagePredictionAPI

### Available Operations

* [PredictImage](#predictimage) - Predict an image and saves the result
* [PredictImageURLWithNoStoreForm](#predictimageurlwithnostoreform) - Predict an image url without saving the result
* [PredictImageURLWithNoStoreJSON](#predictimageurlwithnostorejson) - Predict an image url without saving the result
* [PredictImageURLWithNoStoreRaw](#predictimageurlwithnostoreraw) - Predict an image url without saving the result
* [PredictImageURLForm](#predictimageurlform) - Predict an image url and saves the result
* [PredictImageURLJSON](#predictimageurljson) - Predict an image url and saves the result
* [PredictImageURLRaw](#predictimageurlraw) - Predict an image url and saves the result
* [PredictImageWithNoStore](#predictimagewithnostore) - Predict an image without saving the result

## PredictImage

Predict an image and saves the result

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
    res, err := s.ImagePredictionAPI.PredictImage(ctx, operations.PredictImageRequest{
        PredictionKey: "excepturi",
        RequestBody: operations.PredictImageRequestBody{
            ImageData: operations.PredictImageRequestBodyImageData{
                Content: []byte("aspernatur"),
                ImageData: "perferendis",
            },
        },
        Application: sdk.String("ad"),
        IterationID: sdk.String("929396fe-a759-46eb-90fa-aa2352c59559"),
        ProjectID: "07aff1a3-a2fa-4946-b739-251aa52c3f5a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLWithNoStoreForm

Predict an image url without saving the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLWithNoStoreForm(ctx, operations.PredictImageURLWithNoStoreFormRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("possimus"),
        },
        PredictionKey: "aut",
        Application: sdk.String("quasi"),
        IterationID: sdk.String("9da1ffe7-8f09-47b0-874f-15471b5e6e13"),
        ProjectID: "b99d488e-1e91-4e45-8ad2-abd44269802d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLWithNoStoreJSON

Predict an image url without saving the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLWithNoStoreJSON(ctx, operations.PredictImageURLWithNoStoreJSONRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("ipsam"),
        },
        PredictionKey: "alias",
        Application: sdk.String("fugit"),
        IterationID: sdk.String("a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66"),
        ProjectID: "ae395efb-9ba8-48f3-a669-97074ba4469b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLWithNoStoreRaw

Predict an image url without saving the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLWithNoStoreRaw(ctx, operations.PredictImageURLWithNoStoreRawRequest{
        PredictionKey: "eum",
        RequestBody: []byte("vero"),
        Application: sdk.String("aspernatur"),
        IterationID: sdk.String("14195989-0afa-4563-a251-6fe4c8b711e5"),
        ProjectID: "b7fd2ed0-2892-41cd-9c69-2601fb576b0d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLForm

Predict an image url and saves the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLForm(ctx, operations.PredictImageURLFormRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("nemo"),
        },
        PredictionKey: "voluptatibus",
        Application: sdk.String("perferendis"),
        IterationID: sdk.String("d30c5fbb-2587-4053-a02c-73d5fe9b90c2"),
        ProjectID: "8909b3fe-49a8-4d9c-bf48-633323f9b77f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLJSON

Predict an image url and saves the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLJSON(ctx, operations.PredictImageURLJSONRequest{
        ImageURL: shared.ImageURL{
            URL: sdk.String("amet"),
        },
        PredictionKey: "dolorum",
        Application: sdk.String("numquam"),
        IterationID: sdk.String("100674eb-f692-480d-9ba7-7a89ebf737ae"),
        ProjectID: "4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageURLRaw

Predict an image url and saves the result

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
    res, err := s.ImagePredictionAPI.PredictImageURLRaw(ctx, operations.PredictImageURLRawRequest{
        PredictionKey: "amet",
        RequestBody: []byte("tempore"),
        Application: sdk.String("accusamus"),
        IterationID: sdk.String("453f870b-326b-45a7-b429-cdb1a8422bb6"),
        ProjectID: "79d23227-15bf-40cb-b1e3-1b8b90f3443a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```

## PredictImageWithNoStore

Predict an image without saving the result

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
    res, err := s.ImagePredictionAPI.PredictImageWithNoStore(ctx, operations.PredictImageWithNoStoreRequest{
        PredictionKey: "architecto",
        RequestBody: operations.PredictImageWithNoStoreRequestBody{
            ImageData: operations.PredictImageWithNoStoreRequestBodyImageData{
                Content: []byte("quae"),
                ImageData: "aut",
            },
        },
        Application: sdk.String("quas"),
        IterationID: sdk.String("e0adcf4b-9218-479f-8e95-3f73ef7fbc7a"),
        ProjectID: "bd74dd39-c0f5-4d2c-bf7c-70a45626d436",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImagePredictionResultModel != nil {
        // handle response
    }
}
```
