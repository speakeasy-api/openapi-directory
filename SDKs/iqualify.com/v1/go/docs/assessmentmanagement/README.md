# AssessmentManagement

### Available Operations

* [DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID](#deleteofferingsofferingidassessmentsassessmentiddocumentsdocumentid) - Remove assessment document
* [DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID](#deleteofferingsofferingidusersuseremailassessmentsassessmentid) - Reset user's assessment to draft state
* [GetOfferingsOfferingIDActivitiesOpenresponse](#getofferingsofferingidactivitiesopenresponse) - Find offering's activities
* [GetOfferingsOfferingIDAssessments](#getofferingsofferingidassessments) - Find offering's assessments
* [GetOfferingsOfferingIDLearnersPendingSubmission](#getofferingsofferingidlearnerspendingsubmission) - Find learners with assessments pending x days before due date within the specified offeringId
* [GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse](#getofferingsofferingidusersuseremailsubmissionsopenresponse) - Find learner's open response assessment submissions
* [PatchOfferingsOfferingIDAssessmentsAssessmentID](#patchofferingsofferingidassessmentsassessmentid) - Update assessment details
* [PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail](#patchofferingsofferingidassessmentsassessmentiduseremail) - Update the due dates for a learner's quiz attempt

## DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID

Removes the assessment document file for a specified assessment in an offering.

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
    res, err := s.AssessmentManagement.DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentID(ctx, operations.DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDRequest{
        AssessmentID: "perferendis",
        DocumentID: "ipsam",
        OfferingID: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID

Resets the user's submitted assessment to a draft state.

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
    res, err := s.AssessmentManagement.DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentID(ctx, operations.DeleteOfferingsOfferingIDUsersUserEmailAssessmentsAssessmentIDRequest{
        AssessmentID: "sapiente",
        OfferingID: "quo",
        UserEmail: "Sarah.Strosin79@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOfferingsOfferingIDActivitiesOpenresponse

Responds with the activities in a specific offering.

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
    res, err := s.AssessmentManagement.GetOfferingsOfferingIDActivitiesOpenresponse(ctx, operations.GetOfferingsOfferingIDActivitiesOpenresponseRequest{
        OfferingID: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OfferingActivitiesResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDAssessments

Responds with all assessments in an offering matching the offeringId.

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
    res, err := s.AssessmentManagement.GetOfferingsOfferingIDAssessments(ctx, operations.GetOfferingsOfferingIDAssessmentsRequest{
        OfferingID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssessmentResponses != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDLearnersPendingSubmission

Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.

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
    res, err := s.AssessmentManagement.GetOfferingsOfferingIDLearnersPendingSubmission(ctx, operations.GetOfferingsOfferingIDLearnersPendingSubmissionRequest{
        Days: sdk.String("totam"),
        OfferingID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssessmentPendingSubmissions != nil {
        // handle response
    }
}
```

## GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse

Responds with open response assessment submissions by a learner in an offering.

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
    res, err := s.AssessmentManagement.GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponse(ctx, operations.GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseRequest{
        OfferingID: "dolorum",
        UserEmail: "Minerva.Nikolaus@gmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Assignments != nil {
        // handle response
    }
}
```

## PatchOfferingsOfferingIDAssessmentsAssessmentID

Updates the assessment details for a specified assessment in an offering.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentManagement.PatchOfferingsOfferingIDAssessmentsAssessmentID(ctx, operations.PatchOfferingsOfferingIDAssessmentsAssessmentIDRequest{
        Assessment: shared.Assessment{
            Content: sdk.String("deleniti"),
            DueDate: types.MustTimeFromString("2020-09-22T07:34:53.140Z"),
            MarkNumber: sdk.String("totam"),
            MarkType: sdk.String("beatae"),
            OpenDate: types.MustTimeFromString("2022-07-12T03:15:36.542Z"),
        },
        AssessmentID: "modi",
        OfferingID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssessmentResponse != nil {
        // handle response
    }
}
```

## PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail

Updates the due dates for a learner's quiz attempt specified by the assessmentId.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Authorization: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AssessmentManagement.PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmail(ctx, operations.PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequest{
        RequestBody: operations.PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody{
            DueDate: types.MustTimeFromString("2020-10-16T01:47:24.760Z"),
        },
        AssessmentID: "esse",
        OfferingID: "ipsum",
        UserEmail: "Brianne61@yahoo.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
