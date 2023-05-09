# OralQuestions

### Available Operations

* [PublishedOralQuestionGet](#publishedoralquestionget) - Returns a list of oral questions

## PublishedOralQuestionGet

A list of oral questions meeting the specified criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OralQuestions.PublishedOralQuestionGet(ctx, operations.PublishedOralQuestionGetRequest{
        ParametersAnsweringBodyIds: []int{
            978619,
            473608,
            799159,
            800911,
        },
        ParametersAnsweringDateEnd: types.MustTimeFromString("2022-06-25T00:37:01.696Z"),
        ParametersAnsweringDateStart: types.MustTimeFromString("2020-12-18T15:02:44.758Z"),
        ParametersAskingMemberIds: []int{
            720633,
        },
        ParametersOralQuestionTimeID: sdk.Int(639921),
        ParametersQuestionType: operations.PublishedOralQuestionGetParametersQuestionTypeEnumTopical.ToPointer(),
        ParametersSkip: sdk.Int(143353),
        ParametersTake: sdk.Int(537373),
        ParametersUINs: []int{
            758616,
            521848,
            105907,
            414662,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
