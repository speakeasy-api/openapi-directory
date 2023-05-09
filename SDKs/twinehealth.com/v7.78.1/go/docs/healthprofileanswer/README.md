# HealthProfileAnswer

## Overview

A health profile answer is the answer to a question for a patient.

### Available Operations

* [FetchHealthProfileAnswer](#fetchhealthprofileanswer) - Get a health profile answer
* [FetchHealthProfileAnswers](#fetchhealthprofileanswers) - List health profile answers

## FetchHealthProfileAnswer

Get a health profile answer by id

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
    res, err := s.HealthProfileAnswer.FetchHealthProfileAnswer(ctx, operations.FetchHealthProfileAnswerRequest{
        ID: "013f59da-757a-459e-8fef-66ef1caa3383",
        Include: operations.FetchHealthProfileAnswerIncludeEnumPatient.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfileAnswerResponse != nil {
        // handle response
    }
}
```

## FetchHealthProfileAnswers

Get a list of health profile answers

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
    res, err := s.HealthProfileAnswer.FetchHealthProfileAnswers(ctx, operations.FetchHealthProfileAnswersRequest{
        FilterGroups: sdk.String("impedit"),
        FilterOrganization: sdk.String("magni"),
        FilterPatient: sdk.String("soluta"),
        Include: operations.FetchHealthProfileAnswersIncludeEnumPatient.ToPointer(),
        PageCursor: sdk.String("repudiandae"),
        PageLimit: sdk.Int64(721430),
        PageNumber: sdk.Int64(294076),
        PageSize: sdk.Int64(482892),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfileAnswersResponse != nil {
        // handle response
    }
}
```
