# ReportLineInstruction

### Available Operations

* [DeleteReportingInstruction](#deletereportinginstruction) - Deletes a reporting instruction
* [GetReportingInstructionFromEmployer](#getreportinginstructionfromemployer) - Gets the specified reporting instruction from the employer
* [GetReportingInstructionsFromEmployer](#getreportinginstructionsfromemployer) - Gets the reporting instructions from the specified employer
* [PostReportingInstruction](#postreportinginstruction) - Creates a new Reporting Instruction
* [PutReportingInstruction](#putreportinginstruction) - Update a reporting Instruction

## DeleteReportingInstruction

Delete the specified reporting instruction

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
    res, err := s.ReportLineInstruction.DeleteReportingInstruction(ctx, operations.DeleteReportingInstructionRequest{
        APIVersion: "laborum",
        Authorization: "natus",
        EmployerID: "accusamus",
        ReportingInstructionID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReportingInstructionFromEmployer

Returns the specified pay instruction from employee

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
    res, err := s.ReportLineInstruction.GetReportingInstructionFromEmployer(ctx, operations.GetReportingInstructionFromEmployerRequest{
        APIVersion: "nisi",
        Authorization: "rerum",
        EmployerID: "recusandae",
        ReportingInstructionID: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportingInstruction != nil {
        // handle response
    }
}
```

## GetReportingInstructionsFromEmployer

Get links to all pay instructions for the specified employee

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
    res, err := s.ReportLineInstruction.GetReportingInstructionsFromEmployer(ctx, operations.GetReportingInstructionsFromEmployerRequest{
        APIVersion: "non",
        Authorization: "rem",
        EmployerID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostReportingInstruction

Creates a new reporting instruction object

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
    res, err := s.ReportLineInstruction.PostReportingInstruction(ctx, operations.PostReportingInstructionRequest{
        APIVersion: "ullam",
        Authorization: "quisquam",
        EmployerID: "dicta",
        ReportingInstruction: shared.ReportingInstruction{
            ReportingInstruction: &shared.ReportingInstructionReportingInstruction{
                EndDate: types.MustDateFromString("2020-09-26"),
                StartDate: types.MustDateFromString("2022-02-11"),
                TaxMonth: sdk.Int(100002),
                TaxYear: sdk.Int(100251),
                Value: sdk.Float64(3178.98),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutReportingInstruction

Updates the existing specified reporting instruction object

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
    res, err := s.ReportLineInstruction.PutReportingInstruction(ctx, operations.PutReportingInstructionRequest{
        APIVersion: "optio",
        Authorization: "rem",
        EmployerID: "perferendis",
        ReportingInstruction: shared.ReportingInstruction{
            ReportingInstruction: &shared.ReportingInstructionReportingInstruction{
                EndDate: types.MustDateFromString("2021-01-25"),
                StartDate: types.MustDateFromString("2021-02-26"),
                TaxMonth: sdk.Int(117819),
                TaxYear: sdk.Int(552439),
                Value: sdk.Float64(3563.15),
            },
        },
        ReportingInstructionID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportingInstruction != nil {
        // handle response
    }
}
```
