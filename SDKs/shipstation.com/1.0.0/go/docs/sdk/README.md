# SDK

## Overview

Polls is a simple API allowing consumers to view polls and vote in them.

### Available Operations

* [CreateANewQuestion](#createanewquestion) - Create a New Question
* [ListAllQuestions](#listallquestions) - List All Questions

## CreateANewQuestion

You may create your own question using this action. It takes a JSON
object containing a question and a collection of answers in the
form of choices.

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
    res, err := s.SDK.CreateANewQuestion(ctx, operations.CreateANewQuestionRequestBody{
        Choices: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Question: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListAllQuestions

List All Questions

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListAllQuestions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
