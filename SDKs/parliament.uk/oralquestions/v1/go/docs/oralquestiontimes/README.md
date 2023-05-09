# OralQuestionTimes

### Available Operations

* [PublishedOralQuestionTimeGet](#publishedoralquestiontimeget) - Returns a list of oral question times

## PublishedOralQuestionTimeGet

A list of oral question times meeting the specified criteria.

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
    res, err := s.OralQuestionTimes.PublishedOralQuestionTimeGet(ctx, operations.PublishedOralQuestionTimeGetRequest{
        ParametersAnsweringBodyIds: []int{
            925597,
            836079,
        },
        ParametersAnsweringDateEnd: types.MustTimeFromString("2022-08-30T20:24:33.984Z"),
        ParametersAnsweringDateStart: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
        ParametersDeadlineDateEnd: types.MustTimeFromString("2022-08-19T14:12:14.246Z"),
        ParametersDeadlineDateStart: types.MustTimeFromString("2020-02-17T21:57:45.117Z"),
        ParametersOralQuestionTimeID: sdk.Int(778157),
        ParametersSkip: sdk.Int(140350),
        ParametersTake: sdk.Int(870013),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIResponseListPublishedWrittenQuestion != nil {
        // handle response
    }
}
```
