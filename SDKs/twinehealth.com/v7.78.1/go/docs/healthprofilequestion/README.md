# HealthProfileQuestion

## Overview

A health profile question contains a health question and the corresponding answer for a patient.

### Available Operations

* [FetchHealthProfileQuestion](#fetchhealthprofilequestion) - Get a health profile question
* [FetchHealthProfileQuestions](#fetchhealthprofilequestions) - List health profile questions

## FetchHealthProfileQuestion

Get a health profile by id

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
    res, err := s.HealthProfileQuestion.FetchHealthProfileQuestion(ctx, operations.FetchHealthProfileQuestionRequest{
        ID: "7373c8d7-2f64-4d1d-b1f2-c4310661e963",
        Include: operations.FetchHealthProfileQuestionIncludeEnumQuestionDefinition.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfileQuestionResponse != nil {
        // handle response
    }
}
```

## FetchHealthProfileQuestions

Get a list of health profile questions

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
    res, err := s.HealthProfileQuestion.FetchHealthProfileQuestions(ctx, operations.FetchHealthProfileQuestionsRequest{
        FilterGroups: sdk.String("perspiciatis"),
        FilterOrganization: sdk.String("earum"),
        FilterPatient: sdk.String("dicta"),
        Include: operations.FetchHealthProfileQuestionsIncludeEnumAnswer.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthProfileQuestionsResponse != nil {
        // handle response
    }
}
```
