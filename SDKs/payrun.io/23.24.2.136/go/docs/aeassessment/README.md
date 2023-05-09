# AEAssessment

### Available Operations

* [DeleteAEAssessment](#deleteaeassessment) - Delete auto enrolment assessment
* [GetAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [GetAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [GetAEAssessmentsFromPayRun](#getaeassessmentsfrompayrun) - Get the auto enrolment assessments
* [PostNewAEAssessment](#postnewaeassessment) - Insert new auto enrolment assessment
* [PutNewAEAssessment](#putnewaeassessment) - Insert new auto enrolment assessment

## DeleteAEAssessment

Deletes an existing auto enrolment assessment for the employee. Used to remove historical assessments

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
    res, err := s.AEAssessment.DeleteAEAssessment(ctx, operations.DeleteAEAssessmentRequest{
        AEAssessmentID: "nulla",
        APIVersion: "corrupti",
        Authorization: "illum",
        EmployeeID: "vel",
        EmployerID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAEAssessmentFromEmployee

Gets the auto enrolment assessment from the specified employee

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
    res, err := s.AEAssessment.GetAEAssessmentFromEmployee(ctx, operations.GetAEAssessmentFromEmployeeRequest{
        AEAssessmentID: "deserunt",
        APIVersion: "suscipit",
        Authorization: "iure",
        EmployeeID: "magnam",
        EmployerID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AEAssessment != nil {
        // handle response
    }
}
```

## GetAEAssessmentsFromEmployee

Gets all auto enrolment assessments from the specified employee

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
    res, err := s.AEAssessment.GetAEAssessmentsFromEmployee(ctx, operations.GetAEAssessmentsFromEmployeeRequest{
        APIVersion: "ipsa",
        Authorization: "delectus",
        EmployeeID: "tempora",
        EmployerID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAEAssessmentsFromPayRun

Gets all auto enrolment assessments from the specified pay run

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
    res, err := s.AEAssessment.GetAEAssessmentsFromPayRun(ctx, operations.GetAEAssessmentsFromPayRunRequest{
        APIVersion: "molestiae",
        Authorization: "minus",
        EmployerID: "placeat",
        PayRunID: "voluptatum",
        PayScheduleID: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AEAssessment.PostNewAEAssessment(ctx, operations.PostNewAEAssessmentRequest{
        AEAssessment: shared.AEAssessment{
            AEAssessment: &shared.AEAssessmentAEAssessment{
                Age: sdk.Int(568045),
                AssessmentCode: shared.AEAssessmentAEAssessmentAssessmentCodeEnumEligibleJobHolder.ToPointer(),
                AssessmentDate: types.MustDateFromString("2020-06-29"),
                AssessmentEvent: shared.AEAssessmentAEAssessmentAssessmentEventEnumNonEnrolmentEvent.ToPointer(),
                AssessmentOverride: shared.AEAssessmentAEAssessmentAssessmentOverrideEnumOptIn.ToPointer(),
                AssessmentResult: shared.AEAssessmentAEAssessmentAssessmentResultEnumInconclusive.ToPointer(),
                IsMemberOfAlternativePensionScheme: sdk.Bool(false),
                OptOutWindowEndDate: types.MustDateFromString("2022-12-17"),
                QualifyingEarnings: sdk.Float64(3682.41),
                ReenrolmentDate: types.MustDateFromString("2020-02-17"),
                StatePensionAge: sdk.Int(778157),
                StatePensionDate: types.MustDateFromString("2022-02-17"),
                TaxPeriod: sdk.Int(870088),
                TaxYear: sdk.Int(978619),
            },
        },
        APIVersion: "molestiae",
        Authorization: "quod",
        EmployeeID: "quod",
        EmployerID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutNewAEAssessment

Creates a new auto enrolment assessment for the employee. Used to insert historical assessments

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AEAssessment.PutNewAEAssessment(ctx, operations.PutNewAEAssessmentRequest{
        AEAssessment: shared.AEAssessment{
            AEAssessment: &shared.AEAssessmentAEAssessment{
                Age: sdk.Int(520478),
                AssessmentCode: shared.AEAssessmentAEAssessmentAssessmentCodeEnumEntitledWorker.ToPointer(),
                AssessmentDate: types.MustDateFromString("2022-10-06"),
                AssessmentEvent: shared.AEAssessmentAEAssessmentAssessmentEventEnumVoluntaryJoiner.ToPointer(),
                AssessmentOverride: shared.AEAssessmentAEAssessmentAssessmentOverrideEnumCeasedMembership.ToPointer(),
                AssessmentResult: shared.AEAssessmentAEAssessmentAssessmentResultEnumEnrol.ToPointer(),
                IsMemberOfAlternativePensionScheme: sdk.Bool(false),
                OptOutWindowEndDate: types.MustDateFromString("2022-06-18"),
                QualifyingEarnings: sdk.Float64(9446.69),
                ReenrolmentDate: types.MustDateFromString("2021-06-08"),
                StatePensionAge: sdk.Int(105907),
                StatePensionDate: types.MustDateFromString("2022-07-12"),
                TaxPeriod: sdk.Int(264555),
                TaxYear: sdk.Int(186332),
            },
        },
        AEAssessmentID: "impedit",
        APIVersion: "cum",
        Authorization: "esse",
        EmployeeID: "ipsum",
        EmployerID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AEAssessment != nil {
        // handle response
    }
}
```
