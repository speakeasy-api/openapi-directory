# Journals

### Available Operations

* [DeleteJournalInstruction](#deletejournalinstruction) - Deletes a Journal instruction
* [DeleteJournalInstructionTemplate](#deletejournalinstructiontemplate) - Deletes a Journal instruction template
* [GetJournalInstructionFromEmployer](#getjournalinstructionfromemployer) - Gets the specified journal instruction from the employer
* [GetJournalInstructionTemplate](#getjournalinstructiontemplate) - Gets the Journal instructions template for the application
* [GetJournalInstructionTemplates](#getjournalinstructiontemplates) - Gets the Journal instructions templates for the application
* [GetJournalInstructionsFromEmployer](#getjournalinstructionsfromemployer) - Gets the Journal instructions from the specified employer
* [GetJournalLineFromEmployer](#getjournallinefromemployer) - Gets the specified journal Line from the employer
* [GetJournalLinesFromEmployee](#getjournallinesfromemployee) - Gets the journal Lines from the specified employee
* [GetJournalLinesFromEmployer](#getjournallinesfromemployer) - Gets the Journal Lines from the specified employer
* [GetJournalLinesFromPayRun](#getjournallinesfrompayrun) - Gets the journal Lines from the specified pay run
* [GetJournalLinesFromSubContractor](#getjournallinesfromsubcontractor) - Gets the journal Lines from the specified sub contractor
* [PostJournalInstruction](#postjournalinstruction) - Creates a new Journal Instruction
* [PostJournalInstructionTemplate](#postjournalinstructiontemplate) - Creates a new Journal Instruction template
* [PutJournalInstruction](#putjournalinstruction) - Update a Journal Instruction
* [PutJournalInstructionTemplate](#putjournalinstructiontemplate) - Update a Journal Instruction template

## DeleteJournalInstruction

Delete the specified Journal instruction

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
    res, err := s.Journals.DeleteJournalInstruction(ctx, operations.DeleteJournalInstructionRequest{
        APIVersion: "rem",
        Authorization: "fugiat",
        EmployerID: "dicta",
        JournalInstructionID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteJournalInstructionTemplate

Delete the specified Journal instruction template object

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
    res, err := s.Journals.DeleteJournalInstructionTemplate(ctx, operations.DeleteJournalInstructionTemplateRequest{
        APIVersion: "consequuntur",
        Authorization: "consectetur",
        JournalInstructionID: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetJournalInstructionFromEmployer

Returns the specified journal instruction from employer

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
    res, err := s.Journals.GetJournalInstructionFromEmployer(ctx, operations.GetJournalInstructionFromEmployerRequest{
        APIVersion: "cupiditate",
        Authorization: "reiciendis",
        EmployerID: "soluta",
        JournalInstructionID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalInstruction != nil {
        // handle response
    }
}
```

## GetJournalInstructionTemplate

Retrurns the specified journal instruction from the application

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
    res, err := s.Journals.GetJournalInstructionTemplate(ctx, operations.GetJournalInstructionTemplateRequest{
        APIVersion: "omnis",
        Authorization: "eos",
        JournalInstructionID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalInstruction != nil {
        // handle response
    }
}
```

## GetJournalInstructionTemplates

Get links to all journal instruction templates for the application

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
    res, err := s.Journals.GetJournalInstructionTemplates(ctx, operations.GetJournalInstructionTemplatesRequest{
        APIVersion: "iste",
        Authorization: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetJournalInstructionsFromEmployer

Get links to all journal instructions for the specified employer

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
    res, err := s.Journals.GetJournalInstructionsFromEmployer(ctx, operations.GetJournalInstructionsFromEmployerRequest{
        APIVersion: "inventore",
        Authorization: "fuga",
        EmployerID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetJournalLineFromEmployer

Returns the specified journal Line from employer

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
    res, err := s.Journals.GetJournalLineFromEmployer(ctx, operations.GetJournalLineFromEmployerRequest{
        APIVersion: "voluptatibus",
        Authorization: "distinctio",
        EmployerID: "omnis",
        JournalLineID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalLine != nil {
        // handle response
    }
}
```

## GetJournalLinesFromEmployee

Get links to all journal lines for the specified employee

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
    res, err := s.Journals.GetJournalLinesFromEmployee(ctx, operations.GetJournalLinesFromEmployeeRequest{
        APIVersion: "minima",
        Authorization: "praesentium",
        EmployeeID: "maxime",
        EmployerID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetJournalLinesFromEmployer

Get links to all journal Lines for the specified employer

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
    res, err := s.Journals.GetJournalLinesFromEmployer(ctx, operations.GetJournalLinesFromEmployerRequest{
        APIVersion: "temporibus",
        Authorization: "quos",
        EmployerID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetJournalLinesFromPayRun

Get links to all journal lines for the specified pay run

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
    res, err := s.Journals.GetJournalLinesFromPayRun(ctx, operations.GetJournalLinesFromPayRunRequest{
        APIVersion: "itaque",
        Authorization: "commodi",
        EmployerID: "totam",
        PayRunID: "earum",
        PayScheduleID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetJournalLinesFromSubContractor

Get links to all journal lines for the specified sub contractor

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
    res, err := s.Journals.GetJournalLinesFromSubContractor(ctx, operations.GetJournalLinesFromSubContractorRequest{
        APIVersion: "nam",
        Authorization: "vero",
        EmployerID: "voluptatem",
        SubContractorID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostJournalInstruction

Creates a new Journal instruction object

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
    res, err := s.Journals.PostJournalInstruction(ctx, operations.PostJournalInstructionRequest{
        APIVersion: "vel",
        Authorization: "alias",
        EmployerID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostJournalInstructionTemplate

Creates a new Journal instruction teamplte object

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
    res, err := s.Journals.PostJournalInstructionTemplate(ctx, operations.PostJournalInstructionTemplateRequest{
        APIVersion: "non",
        Authorization: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutJournalInstruction

Updates the existing specified Journal instruction object

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
    res, err := s.Journals.PutJournalInstruction(ctx, operations.PutJournalInstructionRequest{
        APIVersion: "enim",
        Authorization: "sint",
        EmployerID: "nulla",
        JournalInstructionID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalInstruction != nil {
        // handle response
    }
}
```

## PutJournalInstructionTemplate

Updates the existing specified Journal instruction template object

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
    res, err := s.Journals.PutJournalInstructionTemplate(ctx, operations.PutJournalInstructionTemplateRequest{
        APIVersion: "esse",
        Authorization: "nemo",
        JournalInstructionID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.JournalInstruction != nil {
        // handle response
    }
}
```
