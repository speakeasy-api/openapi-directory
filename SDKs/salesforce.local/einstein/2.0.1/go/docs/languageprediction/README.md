# LanguagePrediction

## Overview

Resources that return predictions for text input.

### Available Operations

* [IntentMultipart](#intentmultipart) - Prediction for Intent
* [SentimentMultipart](#sentimentmultipart) - Prediction for Sentiment

## IntentMultipart

Returns an intent prediction for the given string.

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
    res, err := s.LanguagePrediction.IntentMultipart(ctx, shared.IntentPredictRequest{
        Document: "I can't tell you how much fun it was",
        ModelID: "WJH4YCA7YX4PCWVNCYNWYHBMY4",
        NumResults: sdk.Int(3),
        SampleID: sdk.String("cum"),
    }, operations.IntentMultipartSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IntentPredictResponse != nil {
        // handle response
    }
}
```

## SentimentMultipart

Returns a sentiment prediction for the given string.

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
    res, err := s.LanguagePrediction.SentimentMultipart(ctx, shared.SentimentPredictRequest{
        Document: "I can't tell you how much fun it was",
        ModelID: "WJH4YCA7YX4PCWVNCYNWYHBMY4",
        NumResults: sdk.Int(3),
        SampleID: sdk.String("esse"),
    }, operations.SentimentMultipartSecurity{
        BearerToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SentimentPredictResponse != nil {
        // handle response
    }
}
```
