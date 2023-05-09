# PayInstruction

### Available Operations

* [DeletePayInstruction](#deletepayinstruction) - Deletes a pay instruction
* [GetAllPayInstructionTags](#getallpayinstructiontags) - Get all pay instruction tags
* [GetPayInstructionFromEmployee](#getpayinstructionfromemployee) - Gets the specified pay instruction from the employee
* [GetPayInstructionsFromEmployee](#getpayinstructionsfromemployee) - Gets the pay instructions from the specified employee
* [GetPayInstructionsWithTag](#getpayinstructionswithtag) - Get pay instructions with tag
* [PatchPayInstruction](#patchpayinstruction) - Sparse Update of a Pay Instruction
* [PostPayInstruction](#postpayinstruction) - Creates a new Pay Instruction
* [PutPayInstruction](#putpayinstruction) - Update a Pay Instruction

## DeletePayInstruction

Delete the specified pay instruction

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
    res, err := s.PayInstruction.DeletePayInstruction(ctx, operations.DeletePayInstructionRequest{
        APIVersion: "omnis",
        Authorization: "libero",
        EmployeeID: "dicta",
        EmployerID: "id",
        PayInstructionID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllPayInstructionTags

Gets all the pay instruction tags

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
    res, err := s.PayInstruction.GetAllPayInstructionTags(ctx, operations.GetAllPayInstructionTagsRequest{
        APIVersion: "fugiat",
        Authorization: "officia",
        EmployeeID: "quos",
        EmployerID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayInstructionFromEmployee

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
    res, err := s.PayInstruction.GetPayInstructionFromEmployee(ctx, operations.GetPayInstructionFromEmployeeRequest{
        APIVersion: "sit",
        Authorization: "iusto",
        EmployeeID: "ipsa",
        EmployerID: "voluptates",
        PayInstructionID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayInstruction != nil {
        // handle response
    }
}
```

## GetPayInstructionsFromEmployee

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
    res, err := s.PayInstruction.GetPayInstructionsFromEmployee(ctx, operations.GetPayInstructionsFromEmployeeRequest{
        APIVersion: "aperiam",
        Authorization: "totam",
        EmployeeID: "dolore",
        EmployerID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayInstructionsWithTag

Gets the pay instructions with the tag

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
    res, err := s.PayInstruction.GetPayInstructionsWithTag(ctx, operations.GetPayInstructionsWithTagRequest{
        APIVersion: "distinctio",
        Authorization: "voluptatem",
        EmployeeID: "autem",
        EmployerID: "esse",
        TagID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchPayInstruction

Patches the specified pay instruction with the supplied values

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
    res, err := s.PayInstruction.PatchPayInstruction(ctx, operations.PatchPayInstructionRequest{
        APIVersion: "assumenda",
        Authorization: "beatae",
        EmployeeID: "est",
        EmployerID: "facere",
        PayInstruction: shared.PayInstruction{
            PayInstruction: &shared.PayInstructionPayInstruction{
                Description: sdk.String("corrupti"),
                EndDate: types.MustDateFromString("2022-05-31"),
                PayLineTag: sdk.String("accusamus"),
                StartDate: types.MustDateFromString("2020-10-20"),
            },
        },
        PayInstructionID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayInstruction != nil {
        // handle response
    }
}
```

## PostPayInstruction

Creates a new pay instruction object

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
    res, err := s.PayInstruction.PostPayInstruction(ctx, operations.PostPayInstructionRequest{
        APIVersion: "ea",
        Authorization: "autem",
        EmployeeID: "ipsam",
        EmployerID: "rerum",
        PayInstruction: shared.PayInstruction{
            PayInstruction: &shared.PayInstructionPayInstruction{
                Description: sdk.String("laudantium"),
                EndDate: types.MustDateFromString("2022-02-10"),
                PayLineTag: sdk.String("voluptatibus"),
                StartDate: types.MustDateFromString("2021-04-04"),
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

## PutPayInstruction

Updates the existing specified pay instruction object

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
    res, err := s.PayInstruction.PutPayInstruction(ctx, operations.PutPayInstructionRequest{
        APIVersion: "alias",
        Authorization: "quia",
        EmployeeID: "quidem",
        EmployerID: "fuga",
        PayInstruction: shared.PayInstruction{
            PayInstruction: &shared.PayInstructionPayInstruction{
                Description: sdk.String("repudiandae"),
                EndDate: types.MustDateFromString("2022-04-16"),
                PayLineTag: sdk.String("officiis"),
                StartDate: types.MustDateFromString("2022-02-26"),
            },
        },
        PayInstructionID: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayInstruction != nil {
        // handle response
    }
}
```
