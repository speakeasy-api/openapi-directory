# VisionPrediction

## Overview

Resources that return predictions for image input.

### Available Operations

* [DetectMultipart](#detectmultipart) - Detection with Image File
* [OcrMultipart](#ocrmultipart) - Detect Text
* [PredictMultipart](#predictmultipart) - Make Prediction

## DetectMultipart

Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionPrediction.DetectMultipart(ctx, shared.ObjectDetectionRequest{
        ModelID: "YCQ4ZACEPJFGXZNRA6ERF3GL5E",
        SampleBase64Content: sdk.String("SomeBase64EncodedImage"),
        SampleID: sdk.String("praesentium"),
        SampleLocation: sdk.String("voluptatibus"),
    }, operations.DetectMultipartSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectDetectionResponse != nil {
        // handle response
    }
}
```

## OcrMultipart

Returns a prediction from an OCR model for the specified image URL or local image file.

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
    res, err := s.VisionPrediction.OcrMultipart(ctx, operations.OcrMultipartRequestBody{
        ModelID: sdk.String("WJH4YCA7YX4PCWVNCYNWYHBMY4"),
        SampleContent: &operations.OcrMultipartRequestBodySampleContent{
            Content: []byte("ipsa"),
            SampleContent: "omnis",
        },
        SampleID: sdk.String("voluptate"),
        SampleLocation: sdk.String("cum"),
        Task: sdk.String("table"),
    }, operations.OcrMultipartSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OCRPredictResponse != nil {
        // handle response
    }
}
```

## PredictMultipart

Returns a prediction from an image or multi-label model for the specified image.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VisionPrediction.PredictMultipart(ctx, shared.ImageClassificationRequest{
        ModelID: "WJH4YCA7YX4PCWVNCYNWYHBMY4",
        NumResults: sdk.Int(3),
        SampleBase64Content: sdk.String("SomeBase64EncodedImage"),
        SampleID: sdk.String("perferendis"),
        SampleLocation: sdk.String("doloremque"),
    }, operations.PredictMultipartSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImageClassificationResponse != nil {
        // handle response
    }
}
```
