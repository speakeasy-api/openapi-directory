# AssessmentData

### Available Operations

* [GetOfferingsOfferingIDAnalyticsActivitiesResponses](#getofferingsofferingidanalyticsactivitiesresponses) - Find open response activity attempts
* [GetOfferingsOfferingIDAnalyticsMarksAssignments](#getofferingsofferingidanalyticsmarksassignments) - Find assessment marks
* [GetOfferingsOfferingIDAnalyticsMarksQuizzes](#getofferingsofferingidanalyticsmarksquizzes) - Find quiz marks
* [GetOfferingsOfferingIDAnalyticsSubmissionsAssignments](#getofferingsofferingidanalyticssubmissionsassignments) - Find submissions to assessments, including marks if any
* [GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID](#getofferingsofferingidanalyticssubmissionsopenresponseassessmentid) - Find submissions to a specified open response assessment, including marks if any
* [GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID](#getofferingsofferingidanalyticssubmissionsuseremailassignmentsassessmentid) - Find a learner's submission to a specified assessment, including marks if any

## GetOfferingsOfferingIDAnalyticsActivitiesResponses

Responds with all learner activity attempts for open response activities in an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsActivitiesResponses(ctx, operations.GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest{
        OfferingID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityAttemptOpenResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsMarksAssignments

Responds with all learner assessment marks in an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsMarksAssignments(ctx, operations.GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest{
        OfferingID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentMarkResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsMarksQuizzes

Responds with all learner quiz marks in an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsMarksQuizzes(ctx, operations.GetOfferingsOfferingIDAnalyticsMarksQuizzesRequest{
        OfferingID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuizMarkResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsSubmissionsAssignments

Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsSubmissionsAssignments(ctx, operations.GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsRequest{
        OfferingID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignmentMarkResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID

Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentID(ctx, operations.GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDRequest{
        AssessmentID: "unde",
        OfferingID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmissionMarkResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID

Responds with the learner's assessment submission and any marks for the submission.

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
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentData.GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentID(ctx, operations.GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDRequest{
        AssessmentID: "corrupti",
        OfferingID: "illum",
        UserEmail: "Linda.Oberbrunner@yahoo.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmissionMarkResponses != nil {
        // handle response
    }
}
```
