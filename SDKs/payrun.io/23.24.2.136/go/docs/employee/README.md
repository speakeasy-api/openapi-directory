# Employee

### Available Operations

* [DeleteEmployee](#deleteemployee) - Delete an Employee
* [DeleteEmployeeRevision](#deleteemployeerevision) - Delete an Employee revision matching the specified revision date.
* [DeleteEmployeeRevisionByNumber](#deleteemployeerevisionbynumber) - Delete an Employee revision matching the specified revision number.
* [DeleteEmployeeSecret](#deleteemployeesecret) - Deletes employee secret
* [GetAEAssessmentFromEmployee](#getaeassessmentfromemployee) - Get the auto enrolment assessment
* [GetAEAssessmentsFromEmployee](#getaeassessmentsfromemployee) - Get the auto enrolment assessments
* [GetAllEmployeeTags](#getallemployeetags) - Get all employee tags
* [GetCommentariesFromEmployee](#getcommentariesfromemployee) - Get links to all commentaries for the specified employee
* [GetCommentaryFromEmployee](#getcommentaryfromemployee) - Get commentary from employee
* [GetCommentaryFromPayRunByEmployee](#getcommentaryfrompayrunbyemployee) - Get commentary from payrun by specified employee.
* [GetEmployeeByEffectiveDate](#getemployeebyeffectivedate) - Get employee by effective date.
* [GetEmployeeFromEmployer](#getemployeefromemployer) - Get employee from employer
* [GetEmployeeRevisionByNumber](#getemployeerevisionbynumber) - Gets the employee by revision number
* [GetEmployeeRevisionSummaries](#getemployeerevisionsummaries) - Get all employee revision summaries
* [GetEmployeeRevisionSummaryByNumber](#getemployeerevisionsummarybynumber) - Gets the employee summary by revision number
* [GetEmployeeRevisions](#getemployeerevisions) - Get all employee revisions
* [GetEmployeeSecret](#getemployeesecret) - Get employee secret
* [GetEmployeeSecrets](#getemployeesecrets) - Get all employee secret links
* [GetEmployeeSummariesByEffectiveDate](#getemployeesummariesbyeffectivedate) - Get employee summaries from employer at a given effective date.
* [GetEmployeeSummariesFromEmployer](#getemployeesummariesfromemployer) - Get employee summaries from employer.
* [GetEmployeeSummaryByEffectiveDate](#getemployeesummarybyeffectivedate) - Get employee summary by effective date.
* [GetEmployeeSummaryFromEmployer](#getemployeesummaryfromemployer) - Get employee summary from employer
* [GetEmployeesByEffectiveDate](#getemployeesbyeffectivedate) - Get employees from employer at a given effective date.
* [GetEmployeesFromEmployer](#getemployeesfromemployer) - Get employees from employer.
* [GetEmployeesFromPayRun](#getemployeesfrompayrun) - Get employees from the pay run
* [GetEmployeesFromPaySchedule](#getemployeesfrompayschedule) - Get all employees revisions from a pay schedule.
* [GetEmployeesFromPayScheduleOnEffectiveDate](#getemployeesfrompayscheduleoneffectivedate) - Get employees from a pay schedule on effective date.
* [GetEmployeesWithTag](#getemployeeswithtag) - Get employees with tag
* [GetPayRunsFromEmployee](#getpayrunsfromemployee) - Gets the pay runs from the employee
* [PatchEmployee](#patchemployee) - Patches the employee
* [PostEmployeeIntoEmployer](#postemployeeintoemployer) - Create a new Employee
* [PostEmployeeSecret](#postemployeesecret) - Create a new employee secret
* [PutEmployeeIntoEmployer](#putemployeeintoemployer) - Updates the Employee
* [PutEmployeeSecret](#putemployeesecret) - Create a new employee secret

## DeleteEmployee

Delete the specified employee

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
    res, err := s.Employee.DeleteEmployee(ctx, operations.DeleteEmployeeRequest{
        APIVersion: "dolores",
        Authorization: "quis",
        EmployeeID: "totam",
        EmployerID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployeeRevision

Deletes the specified employee revision for the matching revision date

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
    res, err := s.Employee.DeleteEmployeeRevision(ctx, operations.DeleteEmployeeRevisionRequest{
        APIVersion: "eaque",
        Authorization: "quis",
        EffectiveDate: types.MustDateFromString("2022-10-27"),
        EmployeeID: "perferendis",
        EmployerID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployeeRevisionByNumber

Deletes the specified employee revision for the matching revision number

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
    res, err := s.Employee.DeleteEmployeeRevisionByNumber(ctx, operations.DeleteEmployeeRevisionByNumberRequest{
        APIVersion: "minus",
        Authorization: "quam",
        EmployeeID: "dolor",
        EmployerID: "vero",
        RevisionNumber: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployeeSecret

Deletes an employee secret from the given resource location

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
    res, err := s.Employee.DeleteEmployeeSecret(ctx, operations.DeleteEmployeeSecretRequest{
        APIVersion: "hic",
        Authorization: "recusandae",
        EmployeeID: "omnis",
        EmployerID: "facilis",
        SecretID: "perspiciatis",
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
    res, err := s.Employee.GetAEAssessmentFromEmployee(ctx, operations.GetAEAssessmentFromEmployeeRequest{
        AEAssessmentID: "voluptatem",
        APIVersion: "porro",
        Authorization: "consequuntur",
        EmployeeID: "blanditiis",
        EmployerID: "error",
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
    res, err := s.Employee.GetAEAssessmentsFromEmployee(ctx, operations.GetAEAssessmentsFromEmployeeRequest{
        APIVersion: "eaque",
        Authorization: "occaecati",
        EmployeeID: "rerum",
        EmployerID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllEmployeeTags

Gets all the employee tags

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
    res, err := s.Employee.GetAllEmployeeTags(ctx, operations.GetAllEmployeeTagsRequest{
        APIVersion: "asperiores",
        Authorization: "earum",
        EmployerID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCommentariesFromEmployee

Get links to all commentaries for the specified employee.

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
    res, err := s.Employee.GetCommentariesFromEmployee(ctx, operations.GetCommentariesFromEmployeeRequest{
        APIVersion: "iste",
        Authorization: "dolorum",
        EmployeeID: "deleniti",
        EmployerID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCommentaryFromEmployee

Gets the specified commentary report from the employee

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
    res, err := s.Employee.GetCommentaryFromEmployee(ctx, operations.GetCommentaryFromEmployeeRequest{
        APIVersion: "provident",
        Authorization: "nobis",
        CommentaryID: "libero",
        EmployeeID: "delectus",
        EmployerID: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commentary != nil {
        // handle response
    }
}
```

## GetCommentaryFromPayRunByEmployee

Get commentary from payrun by specified employee.

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
    res, err := s.Employee.GetCommentaryFromPayRunByEmployee(ctx, operations.GetCommentaryFromPayRunByEmployeeRequest{
        APIVersion: "quos",
        Authorization: "aliquid",
        EmployeeID: "dolorem",
        EmployerID: "dolorem",
        PayRunID: "dolor",
        PayScheduleID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Commentary != nil {
        // handle response
    }
}
```

## GetEmployeeByEffectiveDate

Returns the employee's state at the specified effective date.

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
    res, err := s.Employee.GetEmployeeByEffectiveDate(ctx, operations.GetEmployeeByEffectiveDateRequest{
        APIVersion: "ipsum",
        Authorization: "hic",
        EffectiveDate: types.MustDateFromString("2021-07-10"),
        EmployeeID: "voluptate",
        EmployerID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## GetEmployeeFromEmployer

Gets the specified employee from employer by employee code.

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
    res, err := s.Employee.GetEmployeeFromEmployer(ctx, operations.GetEmployeeFromEmployerRequest{
        APIVersion: "reiciendis",
        Authorization: "amet",
        EmployeeID: "dolorum",
        EmployerID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## GetEmployeeRevisionByNumber

Get the employee revision matching the specified revision number

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
    res, err := s.Employee.GetEmployeeRevisionByNumber(ctx, operations.GetEmployeeRevisionByNumberRequest{
        APIVersion: "veritatis",
        Authorization: "ipsa",
        EmployeeID: "ipsa",
        EmployerID: "iure",
        RevisionNumber: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## GetEmployeeRevisionSummaries

Gets links to all employee revision summaries

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
    res, err := s.Employee.GetEmployeeRevisionSummaries(ctx, operations.GetEmployeeRevisionSummariesRequest{
        APIVersion: "quaerat",
        Authorization: "accusamus",
        EmployeeID: "quidem",
        EmployerID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeeRevisionSummaryByNumber

Get the employee revision summary matching the specified revision number

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
    res, err := s.Employee.GetEmployeeRevisionSummaryByNumber(ctx, operations.GetEmployeeRevisionSummaryByNumberRequest{
        APIVersion: "voluptas",
        Authorization: "natus",
        EmployeeID: "eos",
        EmployerID: "atque",
        RevisionNumber: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeSummary != nil {
        // handle response
    }
}
```

## GetEmployeeRevisions

Gets links to all employee revisions

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
    res, err := s.Employee.GetEmployeeRevisions(ctx, operations.GetEmployeeRevisionsRequest{
        APIVersion: "fugiat",
        Authorization: "ab",
        EmployeeID: "soluta",
        EmployerID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeeSecret

Get the public visible employee secret object

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
    res, err := s.Employee.GetEmployeeSecret(ctx, operations.GetEmployeeSecretRequest{
        APIVersion: "iusto",
        Authorization: "voluptate",
        EmployeeID: "dolorum",
        EmployerID: "deleniti",
        SecretID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeSecret != nil {
        // handle response
    }
}
```

## GetEmployeeSecrets

Get all the employee secret links

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
    res, err := s.Employee.GetEmployeeSecrets(ctx, operations.GetEmployeeSecretsRequest{
        APIVersion: "necessitatibus",
        Authorization: "distinctio",
        EmployeeID: "asperiores",
        EmployerID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeeSummariesByEffectiveDate

Get links to all employee summaries for the employer on specified effective date.

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
    res, err := s.Employee.GetEmployeeSummariesByEffectiveDate(ctx, operations.GetEmployeeSummariesByEffectiveDateRequest{
        APIVersion: "ipsum",
        Authorization: "voluptate",
        EffectiveDate: types.MustDateFromString("2021-03-10"),
        EmployerID: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeeSummariesFromEmployer

Get links to all employee summaries for the specified employer.

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
    res, err := s.Employee.GetEmployeeSummariesFromEmployer(ctx, operations.GetEmployeeSummariesFromEmployerRequest{
        APIVersion: "aspernatur",
        Authorization: "perferendis",
        EmployerID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeeSummaryByEffectiveDate

Gets the employee summary for the specified effective date.

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
    res, err := s.Employee.GetEmployeeSummaryByEffectiveDate(ctx, operations.GetEmployeeSummaryByEffectiveDateRequest{
        APIVersion: "optio",
        Authorization: "accusamus",
        EffectiveDate: types.MustDateFromString("2022-02-04"),
        EmployeeID: "suscipit",
        EmployerID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeSummary != nil {
        // handle response
    }
}
```

## GetEmployeeSummaryFromEmployer

Gets the specified employee summary data from employer by employee code.

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
    res, err := s.Employee.GetEmployeeSummaryFromEmployer(ctx, operations.GetEmployeeSummaryFromEmployerRequest{
        APIVersion: "provident",
        Authorization: "minima",
        EmployeeID: "repellendus",
        EmployerID: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeSummary != nil {
        // handle response
    }
}
```

## GetEmployeesByEffectiveDate

Get links to all employees for the employer on specified effective date.

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
    res, err := s.Employee.GetEmployeesByEffectiveDate(ctx, operations.GetEmployeesByEffectiveDateRequest{
        APIVersion: "similique",
        Authorization: "alias",
        EffectiveDate: types.MustDateFromString("2022-01-24"),
        EmployerID: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromEmployer

Get links to all employees for the specified employer.

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
    res, err := s.Employee.GetEmployeesFromEmployer(ctx, operations.GetEmployeesFromEmployerRequest{
        APIVersion: "vel",
        Authorization: "quod",
        EmployerID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromPayRun

Gets links to all employees included in the specified pay run.

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
    res, err := s.Employee.GetEmployeesFromPayRun(ctx, operations.GetEmployeesFromPayRunRequest{
        APIVersion: "qui",
        Authorization: "dolorum",
        EmployerID: "a",
        PayRunID: "esse",
        PayScheduleID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromPaySchedule

Gets links to all employee revisions that have ever existed in the specified pay schedule.

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
    res, err := s.Employee.GetEmployeesFromPaySchedule(ctx, operations.GetEmployeesFromPayScheduleRequest{
        APIVersion: "iusto",
        Authorization: "ipsum",
        EmployerID: "quisquam",
        PayScheduleID: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesFromPayScheduleOnEffectiveDate

Gets links to all employee revisions in the specified pay schedule for the given effective date.

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
    res, err := s.Employee.GetEmployeesFromPayScheduleOnEffectiveDate(ctx, operations.GetEmployeesFromPayScheduleOnEffectiveDateRequest{
        APIVersion: "amet",
        Authorization: "tempore",
        EffectiveDate: types.MustDateFromString("2022-03-28"),
        EmployerID: "enim",
        PayScheduleID: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployeesWithTag

Gets the employees with the tag

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
    res, err := s.Employee.GetEmployeesWithTag(ctx, operations.GetEmployeesWithTagRequest{
        APIVersion: "sapiente",
        Authorization: "totam",
        EmployerID: "nihil",
        TagID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayRunsFromEmployee

Get links to all pay runs for the specified employee.

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
    res, err := s.Employee.GetPayRunsFromEmployee(ctx, operations.GetPayRunsFromEmployeeRequest{
        APIVersion: "expedita",
        Authorization: "neque",
        EmployeeID: "sed",
        EmployerID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchEmployee

Patches the specified employee with the supplied values

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
    res, err := s.Employee.PatchEmployee(ctx, operations.PatchEmployeeRequest{
        APIVersion: "libero",
        Authorization: "voluptas",
        Employee: shared.Employee{
            Employee: &shared.EmployeeEmployee{
                AEAssessmentOverride: shared.EmployeeEmployeeAEAssessmentOverrideEnumCeasedMembership.ToPointer(),
                AEAssessmentOverrideDate: types.MustDateFromString("2022-10-14"),
                AEExclusionReasonCode: shared.EmployeeEmployeeAEExclusionReasonCodeEnumTemporaryUkWorker.ToPointer(),
                AEPostponementDate: types.MustDateFromString("2022-05-31"),
                Address: &shared.EmployeeEmployeeAddress{
                    Address1: sdk.String("maxime"),
                    Address2: sdk.String("pariatur"),
                    Address3: sdk.String("soluta"),
                    Address4: sdk.String("dicta"),
                    Country: sdk.String("Pakistan"),
                    Postcode: sdk.String("21177-3458"),
                },
                BankAccount: &shared.EmployeeEmployeeBankAccount{
                    AccountName: sdk.String("qui"),
                    AccountNumber: sdk.String("neque"),
                    BranchName: sdk.String("fugit"),
                    Reference: sdk.String("magni"),
                    SortCode: sdk.String("odio"),
                },
                Code: sdk.String("sunt"),
                DateOfBirth: types.MustDateFromString("2022-04-12"),
                Deactivated: sdk.Bool(false),
                DirectorshipAppointmentDate: types.MustDateFromString("2022-11-28"),
                EEACitizen: sdk.Bool(false),
                Epm6: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2020-10-05"),
                EmployeePartner: &shared.EmployeeEmployeeEmployeePartner{
                    FirstName: sdk.String("Nella"),
                    Initials: sdk.String("et"),
                    LastName: sdk.String("Turner"),
                    MiddleName: sdk.String("ipsum"),
                    NiNumber: sdk.String("veritatis"),
                },
                FirstName: sdk.String("Nellie"),
                Gender: shared.EmployeeEmployeeGenderEnumMale.ToPointer(),
                HoursPerWeek: sdk.Float64(7316.94),
                Initials: sdk.String("cupiditate"),
                IrregularEmployment: sdk.Bool(false),
                IsAgencyWorker: sdk.Bool(false),
                LastName: sdk.String("Bayer"),
                LeaverReason: shared.EmployeeEmployeeLeaverReasonEnumOther.ToPointer(),
                LeavingDate: types.MustDateFromString("2022-09-16"),
                MaritalStatus: shared.EmployeeEmployeeMaritalStatusEnumSingle.ToPointer(),
                MetaData: map[string]interface{}{
                    "dolorum": "architecto",
                },
                MiddleName: sdk.String("quae"),
                NextRevisionDate: types.MustDateFromString("2022-06-12"),
                NiNumber: sdk.String("itaque"),
                NicLiability: shared.EmployeeEmployeeNicLiabilityEnumHasOtherJob.ToPointer(),
                OffPayrollWorker: sdk.Bool(false),
                OnStrike: sdk.Bool(false),
                P45IssuedDate: types.MustDateFromString("2021-05-02"),
                PassportNumber: sdk.String("porro"),
                PaySchedule: &shared.EmployeeEmployeePaySchedule{
                    AtHref: sdk.String("doloribus"),
                    AtRel: sdk.String("ut"),
                    AtTitle: sdk.String("facilis"),
                },
                PaymentMethod: shared.EmployeeEmployeePaymentMethodEnumBacs.ToPointer(),
                PaymentToANonIndividual: sdk.Bool(false),
                Region: shared.EmployeeEmployeeRegionEnumNotSet.ToPointer(),
                Revision: sdk.Int(63955),
                RuleExclusions: shared.EmployeeEmployeeRuleExclusionsEnumLeaverEndInstructionsRule.ToPointer(),
                Seconded: shared.EmployeeEmployeeSecondedEnumStay183DaysOrMore.ToPointer(),
                StartDate: types.MustDateFromString("2021-01-17"),
                StarterDeclaration: shared.EmployeeEmployeeStarterDeclarationEnumC.ToPointer(),
                Territory: shared.EmployeeEmployeeTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Dr."),
                VeteranPeriodStartDate: types.MustDateFromString("2022-04-29"),
                WorkingWeek: shared.EmployeeEmployeeWorkingWeekEnumTuesday.ToPointer(),
            },
        },
        EmployeeID: "delectus",
        EmployerID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## PostEmployeeIntoEmployer

Create a new employee object

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
    res, err := s.Employee.PostEmployeeIntoEmployer(ctx, operations.PostEmployeeIntoEmployerRequest{
        APIVersion: "consectetur",
        Authorization: "vero",
        Employee: shared.Employee{
            Employee: &shared.EmployeeEmployee{
                AEAssessmentOverride: shared.EmployeeEmployeeAEAssessmentOverrideEnumExcluded.ToPointer(),
                AEAssessmentOverrideDate: types.MustDateFromString("2022-01-22"),
                AEExclusionReasonCode: shared.EmployeeEmployeeAEExclusionReasonCodeEnumWorkerWulsWithin12Month.ToPointer(),
                AEPostponementDate: types.MustDateFromString("2021-07-17"),
                Address: &shared.EmployeeEmployeeAddress{
                    Address1: sdk.String("similique"),
                    Address2: sdk.String("facilis"),
                    Address3: sdk.String("vero"),
                    Address4: sdk.String("ducimus"),
                    Country: sdk.String("France"),
                    Postcode: sdk.String("81670-9381"),
                },
                BankAccount: &shared.EmployeeEmployeeBankAccount{
                    AccountName: sdk.String("porro"),
                    AccountNumber: sdk.String("maiores"),
                    BranchName: sdk.String("doloribus"),
                    Reference: sdk.String("iusto"),
                    SortCode: sdk.String("eligendi"),
                },
                Code: sdk.String("ducimus"),
                DateOfBirth: types.MustDateFromString("2022-05-12"),
                Deactivated: sdk.Bool(false),
                DirectorshipAppointmentDate: types.MustDateFromString("2022-08-19"),
                EEACitizen: sdk.Bool(false),
                Epm6: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2022-11-12"),
                EmployeePartner: &shared.EmployeeEmployeeEmployeePartner{
                    FirstName: sdk.String("Hilbert"),
                    Initials: sdk.String("possimus"),
                    LastName: sdk.String("Gulgowski"),
                    MiddleName: sdk.String("ratione"),
                    NiNumber: sdk.String("ex"),
                },
                FirstName: sdk.String("Johnpaul"),
                Gender: shared.EmployeeEmployeeGenderEnumUnknown.ToPointer(),
                HoursPerWeek: sdk.Float64(2243.17),
                Initials: sdk.String("maiores"),
                IrregularEmployment: sdk.Bool(false),
                IsAgencyWorker: sdk.Bool(false),
                LastName: sdk.String("Boyle"),
                LeaverReason: shared.EmployeeEmployeeLeaverReasonEnumRedundant.ToPointer(),
                LeavingDate: types.MustDateFromString("2021-04-17"),
                MaritalStatus: shared.EmployeeEmployeeMaritalStatusEnumWidowed.ToPointer(),
                MetaData: map[string]interface{}{
                    "sapiente": "quisquam",
                    "saepe": "ea",
                },
                MiddleName: sdk.String("impedit"),
                NextRevisionDate: types.MustDateFromString("2022-09-01"),
                NiNumber: sdk.String("aliquid"),
                NicLiability: shared.EmployeeEmployeeNicLiabilityEnumHasOtherJob.ToPointer(),
                OffPayrollWorker: sdk.Bool(false),
                OnStrike: sdk.Bool(false),
                P45IssuedDate: types.MustDateFromString("2022-08-05"),
                PassportNumber: sdk.String("quo"),
                PaySchedule: &shared.EmployeeEmployeePaySchedule{
                    AtHref: sdk.String("consectetur"),
                    AtRel: sdk.String("recusandae"),
                    AtTitle: sdk.String("aspernatur"),
                },
                PaymentMethod: shared.EmployeeEmployeePaymentMethodEnumCash.ToPointer(),
                PaymentToANonIndividual: sdk.Bool(false),
                Region: shared.EmployeeEmployeeRegionEnumNotSet.ToPointer(),
                Revision: sdk.Int(952871),
                RuleExclusions: shared.EmployeeEmployeeRuleExclusionsEnumYtdInstructionRule.ToPointer(),
                Seconded: shared.EmployeeEmployeeSecondedEnumNotSet.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-20"),
                StarterDeclaration: shared.EmployeeEmployeeStarterDeclarationEnumC.ToPointer(),
                Territory: shared.EmployeeEmployeeTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Mrs."),
                VeteranPeriodStartDate: types.MustDateFromString("2022-02-12"),
                WorkingWeek: shared.EmployeeEmployeeWorkingWeekEnumNone.ToPointer(),
            },
        },
        EmployerID: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostEmployeeSecret

Create new employee secret using auto generated resource location key

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
    res, err := s.Employee.PostEmployeeSecret(ctx, operations.PostEmployeeSecretRequest{
        APIVersion: "et",
        Authorization: "dolorum",
        EmployeeID: "laborum",
        EmployerID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutEmployeeIntoEmployer

Updates the existing specified employee object

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
    res, err := s.Employee.PutEmployeeIntoEmployer(ctx, operations.PutEmployeeIntoEmployerRequest{
        APIVersion: "velit",
        Authorization: "eum",
        Employee: shared.Employee{
            Employee: &shared.EmployeeEmployee{
                AEAssessmentOverride: shared.EmployeeEmployeeAEAssessmentOverrideEnumVoluntaryJoiner.ToPointer(),
                AEAssessmentOverrideDate: types.MustDateFromString("2021-04-30"),
                AEExclusionReasonCode: shared.EmployeeEmployeeAEExclusionReasonCodeEnumWorkerWulsBeyond12Month.ToPointer(),
                AEPostponementDate: types.MustDateFromString("2021-11-11"),
                Address: &shared.EmployeeEmployeeAddress{
                    Address1: sdk.String("libero"),
                    Address2: sdk.String("quasi"),
                    Address3: sdk.String("tempora"),
                    Address4: sdk.String("numquam"),
                    Country: sdk.String("Bulgaria"),
                    Postcode: sdk.String("04342-4456"),
                },
                BankAccount: &shared.EmployeeEmployeeBankAccount{
                    AccountName: sdk.String("reprehenderit"),
                    AccountNumber: sdk.String("quidem"),
                    BranchName: sdk.String("fugiat"),
                    Reference: sdk.String("ut"),
                    SortCode: sdk.String("eum"),
                },
                Code: sdk.String("suscipit"),
                DateOfBirth: types.MustDateFromString("2022-06-16"),
                Deactivated: sdk.Bool(false),
                DirectorshipAppointmentDate: types.MustDateFromString("2021-06-04"),
                EEACitizen: sdk.Bool(false),
                Epm6: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2022-12-11"),
                EmployeePartner: &shared.EmployeeEmployeeEmployeePartner{
                    FirstName: sdk.String("Maggie"),
                    Initials: sdk.String("quidem"),
                    LastName: sdk.String("DuBuque"),
                    MiddleName: sdk.String("quo"),
                    NiNumber: sdk.String("illum"),
                },
                FirstName: sdk.String("Orion"),
                Gender: shared.EmployeeEmployeeGenderEnumFemale.ToPointer(),
                HoursPerWeek: sdk.Float64(2594.22),
                Initials: sdk.String("eos"),
                IrregularEmployment: sdk.Bool(false),
                IsAgencyWorker: sdk.Bool(false),
                LastName: sdk.String("Hintz"),
                LeaverReason: shared.EmployeeEmployeeLeaverReasonEnumResigned.ToPointer(),
                LeavingDate: types.MustDateFromString("2022-12-24"),
                MaritalStatus: shared.EmployeeEmployeeMaritalStatusEnumSingle.ToPointer(),
                MetaData: map[string]interface{}{
                    "ipsam": "aspernatur",
                    "sequi": "quo",
                    "esse": "recusandae",
                    "aperiam": "distinctio",
                },
                MiddleName: sdk.String("quod"),
                NextRevisionDate: types.MustDateFromString("2022-12-03"),
                NiNumber: sdk.String("nihil"),
                NicLiability: shared.EmployeeEmployeeNicLiabilityEnumIsApprentice.ToPointer(),
                OffPayrollWorker: sdk.Bool(false),
                OnStrike: sdk.Bool(false),
                P45IssuedDate: types.MustDateFromString("2022-01-30"),
                PassportNumber: sdk.String("odio"),
                PaySchedule: &shared.EmployeeEmployeePaySchedule{
                    AtHref: sdk.String("occaecati"),
                    AtRel: sdk.String("commodi"),
                    AtTitle: sdk.String("sapiente"),
                },
                PaymentMethod: shared.EmployeeEmployeePaymentMethodEnumCash.ToPointer(),
                PaymentToANonIndividual: sdk.Bool(false),
                Region: shared.EmployeeEmployeeRegionEnumScotland.ToPointer(),
                Revision: sdk.Int(475289),
                RuleExclusions: shared.EmployeeEmployeeRuleExclusionsEnumNone.ToPointer(),
                Seconded: shared.EmployeeEmployeeSecondedEnumInOutUk.ToPointer(),
                StartDate: types.MustDateFromString("2022-06-11"),
                StarterDeclaration: shared.EmployeeEmployeeStarterDeclarationEnumB.ToPointer(),
                Territory: shared.EmployeeEmployeeTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Mr."),
                VeteranPeriodStartDate: types.MustDateFromString("2022-09-18"),
                WorkingWeek: shared.EmployeeEmployeeWorkingWeekEnumAllWeekDays.ToPointer(),
            },
        },
        EmployeeID: "mollitia",
        EmployerID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## PutEmployeeSecret

Create / update an employee secret at the given resource location

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
    res, err := s.Employee.PutEmployeeSecret(ctx, operations.PutEmployeeSecretRequest{
        APIVersion: "atque",
        Authorization: "explicabo",
        EmployeeID: "minima",
        EmployerID: "nisi",
        SecretID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeSecret != nil {
        // handle response
    }
}
```
