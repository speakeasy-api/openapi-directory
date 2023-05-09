# HealthQuestionDefinition

## Overview

A health question definition specifies a health question and the corresponding answer choices.

### Available Operations

* [FetchHealthQuestionDefinition](#fetchhealthquestiondefinition) - Get a health question definition
* [FetchHealthQuestionDefinitions](#fetchhealthquestiondefinitions) - List health question definitions

## FetchHealthQuestionDefinition

Get a health question definition by id

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
    res, err := s.HealthQuestionDefinition.FetchHealthQuestionDefinition(ctx, operations.FetchHealthQuestionDefinitionRequest{
        ID: "f9e06e3a-4370-400a-a6b6-bc9b8f759eac",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthQuestionDefinitionResponse != nil {
        // handle response
    }
}
```

## FetchHealthQuestionDefinitions

Get a list of all health question definitions

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
    res, err := s.HealthQuestionDefinition.FetchHealthQuestionDefinitions(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchHealthQuestionDefinitionsResponse != nil {
        // handle response
    }
}
```
