# Surveys

### Available Operations

* [GetQuestions](#getquestions) - Get survey questions in given scope and type
* [SubmitAnswers](#submitanswers) - Post survey answers for scope and type

## GetQuestions

Get survey questions in given scope and type

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Surveys.GetQuestions(ctx, operations.GetQuestionsRequest{
        AttachAnswersForProject: sdk.Int64(257233),
        Scope: "doloribus",
        Type: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SurveyQuestions != nil {
        // handle response
    }
}
```

## SubmitAnswers

Post survey answers for scope and type

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Surveys.SubmitAnswers(ctx, operations.SubmitAnswersRequest{
        SurveyAnswers: &shared.SurveyAnswers{
            Answers: []shared.SurveyAnswer{
                shared.SurveyAnswer{
                    Answer: sdk.String("quidem"),
                    ProjectID: sdk.Int64(904949),
                    QuestionAnswerID: sdk.Int64(897071),
                    QuestionID: sdk.Int64(296556),
                    UserID: sdk.Int64(121059),
                },
                shared.SurveyAnswer{
                    Answer: sdk.String("asperiores"),
                    ProjectID: sdk.Int64(241545),
                    QuestionAnswerID: sdk.Int64(249420),
                    QuestionID: sdk.Int64(228263),
                    UserID: sdk.Int64(105906),
                },
                shared.SurveyAnswer{
                    Answer: sdk.String("dignissimos"),
                    ProjectID: sdk.Int64(950953),
                    QuestionAnswerID: sdk.Int64(891523),
                    QuestionID: sdk.Int64(233420),
                    UserID: sdk.Int64(358107),
                },
                shared.SurveyAnswer{
                    Answer: sdk.String("harum"),
                    ProjectID: sdk.Int64(385237),
                    QuestionAnswerID: sdk.Int64(58356),
                    QuestionID: sdk.Int64(916727),
                    UserID: sdk.Int64(730709),
                },
            },
        },
        Scope: "vitae",
        Type: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
