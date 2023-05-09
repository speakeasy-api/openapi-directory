# Cis

### Available Operations

* [DeleteCisInstruction](#deletecisinstruction) - Delete a CIS instruction
* [DeleteCisInstructionTag](#deletecisinstructiontag) - Delete CIS instruction tag
* [DeleteCisLine](#deletecisline) - Delete a CIS line
* [DeleteCisLineTag](#deletecislinetag) - Delete CIS line tag
* [DeleteCisLineType](#deletecislinetype) - Delete an CIS line type
* [DeleteCisLineTypeTag](#deletecislinetypetag) - Delete CIS line type tag
* [DeleteCisTransaction](#deletecistransaction) - Delete the CIS transaction
* [DeleteSubContractorTag](#deletesubcontractortag) - Delete sub contractor tag
* [GetAllCisInstructionTags](#getallcisinstructiontags) - Get all CIS instruction tags
* [GetAllCisLineTags](#getallcislinetags) - Get all CIS line tags
* [GetAllCisLineTypeTags](#getallcislinetypetags) - Get all CIS line type tags
* [GetAllSubContractorTags](#getallsubcontractortags) - Get all sub contractor tags
* [GetCisInstructionFromSubContractor](#getcisinstructionfromsubcontractor) - Get CIS instruction from sub contractor
* [GetCisInstructionsFromSubContractor](#getcisinstructionsfromsubcontractor) - Get CIS instructions from sub contractor.
* [GetCisInstructionsWithTag](#getcisinstructionswithtag) - Get CIS instructions with tag
* [GetCisLineFromSubContractor](#getcislinefromsubcontractor) - Get CIS line from sub contractor
* [GetCisLineTypeFromEmployer](#getcislinetypefromemployer) - Get CIS line type from employer
* [GetCisLineTypesFromEmployer](#getcislinetypesfromemployer) - Get CIS line types from employer.
* [GetCisLineTypesWithTag](#getcislinetypeswithtag) - Get CIS line types with tag
* [GetCisLinesFromSubContractor](#getcislinesfromsubcontractor) - Get CIS lines from sub contractor.
* [GetCisLinesWithTag](#getcislineswithtag) - Get CIS lines with tag
* [GetCisTransactionFromEmployer](#getcistransactionfromemployer) - Get the CIS transaction
* [GetCisTransactionsFromEmployer](#getcistransactionsfromemployer) - Get all CIS transactions for the employer
* [GetSubContractorsWithTag](#getsubcontractorswithtag) - Get sub contractors with tag
* [GetTagFromCisInstruction](#gettagfromcisinstruction) - Get CIS instruction tag
* [GetTagFromCisLine](#gettagfromcisline) - Get CIS line tag
* [GetTagFromCisLineType](#gettagfromcislinetype) - Get CIS line type tag
* [GetTagFromSubContractor](#gettagfromsubcontractor) - Get sub contractor tag
* [GetTagFromSubContractorRevision](#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [GetTagsFromCisInstruction](#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [GetTagsFromCisLine](#gettagsfromcisline) - Get all tags from the CIS line
* [GetTagsFromCisLineType](#gettagsfromcislinetype) - Get all tags from the CIS line type
* [GetTagsFromSubContractor](#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [GetTagsFromSubContractorRevision](#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [PatchCisInstruction](#patchcisinstruction) - Patches the CIS instruction
* [PostCisInstructionIntoSubContractor](#postcisinstructionintosubcontractor) - Create a new CIS instruction
* [PostCisLineTypeIntoEmployer](#postcislinetypeintoemployer) - Create a new CIS line type
* [PutCisInstructionIntoSubContractor](#putcisinstructionintosubcontractor) - Updates the CIS instruction
* [PutCisInstructionTag](#putcisinstructiontag) - Insert CIS instruction tag
* [PutCisLineTag](#putcislinetag) - Insert CIS line tag
* [PutCisLineTypeIntoEmployer](#putcislinetypeintoemployer) - Updates the CIS line type
* [PutCisLineTypeTag](#putcislinetypetag) - Insert CIS line type tag
* [PutSubContractorTag](#putsubcontractortag) - Insert sub contractor tag

## DeleteCisInstruction

Delete the specified CIS instruction

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
    res, err := s.Cis.DeleteCisInstruction(ctx, operations.DeleteCisInstructionRequest{
        APIVersion: "corporis",
        Authorization: "iste",
        CisInstructionID: "iure",
        EmployerID: "saepe",
        SubContractorID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisInstructionTag

Deletes a tag from the CIS instruction

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
    res, err := s.Cis.DeleteCisInstructionTag(ctx, operations.DeleteCisInstructionTagRequest{
        APIVersion: "architecto",
        Authorization: "ipsa",
        CisInstructionID: "reiciendis",
        EmployerID: "est",
        SubContractorID: "mollitia",
        TagID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisLine

Delete the specified CIS line

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
    res, err := s.Cis.DeleteCisLine(ctx, operations.DeleteCisLineRequest{
        APIVersion: "dolores",
        Authorization: "dolorem",
        CisLineID: "corporis",
        EmployerID: "explicabo",
        SubContractorID: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisLineTag

Deletes a tag from the CIS line

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
    res, err := s.Cis.DeleteCisLineTag(ctx, operations.DeleteCisLineTagRequest{
        APIVersion: "enim",
        Authorization: "omnis",
        CisLineID: "nemo",
        EmployerID: "minima",
        SubContractorID: "excepturi",
        TagID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisLineType

Delete the specified CIS line type

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
    res, err := s.Cis.DeleteCisLineType(ctx, operations.DeleteCisLineTypeRequest{
        APIVersion: "iure",
        Authorization: "culpa",
        CisLineTypeID: "doloribus",
        EmployerID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisLineTypeTag

Deletes a tag from the CIS line type

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
    res, err := s.Cis.DeleteCisLineTypeTag(ctx, operations.DeleteCisLineTypeTagRequest{
        APIVersion: "architecto",
        Authorization: "mollitia",
        CisLineTypeID: "dolorem",
        EmployerID: "culpa",
        TagID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCisTransaction

Deletes the specified CIS transaction

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
    res, err := s.Cis.DeleteCisTransaction(ctx, operations.DeleteCisTransactionRequest{
        APIVersion: "repellat",
        Authorization: "mollitia",
        CisTransactionID: "occaecati",
        EmployerID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubContractorTag

Deletes a tag from the sub contractor

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
    res, err := s.Cis.DeleteSubContractorTag(ctx, operations.DeleteSubContractorTagRequest{
        APIVersion: "commodi",
        Authorization: "quam",
        EmployerID: "molestiae",
        SubContractorID: "velit",
        TagID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllCisInstructionTags

Gets all the CIS instruction tags

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
    res, err := s.Cis.GetAllCisInstructionTags(ctx, operations.GetAllCisInstructionTagsRequest{
        APIVersion: "quia",
        Authorization: "quis",
        EmployerID: "vitae",
        SubContractorID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllCisLineTags

Gets all the CIS line tags

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
    res, err := s.Cis.GetAllCisLineTags(ctx, operations.GetAllCisLineTagsRequest{
        APIVersion: "animi",
        Authorization: "enim",
        EmployerID: "odit",
        SubContractorID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllCisLineTypeTags

Gets all the CIS line type tags

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
    res, err := s.Cis.GetAllCisLineTypeTags(ctx, operations.GetAllCisLineTypeTagsRequest{
        APIVersion: "sequi",
        Authorization: "tenetur",
        EmployerID: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllSubContractorTags

Gets all the sub contractor tags

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
    res, err := s.Cis.GetAllSubContractorTags(ctx, operations.GetAllSubContractorTagsRequest{
        APIVersion: "id",
        Authorization: "possimus",
        EmployerID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisInstructionFromSubContractor

Gets the specified CIS instruction from sub contractor.

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
    res, err := s.Cis.GetCisInstructionFromSubContractor(ctx, operations.GetCisInstructionFromSubContractorRequest{
        APIVersion: "quasi",
        Authorization: "error",
        CisInstructionID: "temporibus",
        EmployerID: "laborum",
        SubContractorID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisInstruction != nil {
        // handle response
    }
}
```

## GetCisInstructionsFromSubContractor

Get links to all CIS instructions for the specified sub contractor.

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
    res, err := s.Cis.GetCisInstructionsFromSubContractor(ctx, operations.GetCisInstructionsFromSubContractorRequest{
        APIVersion: "reiciendis",
        Authorization: "voluptatibus",
        EmployerID: "vero",
        SubContractorID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisInstructionsWithTag

Gets the CIS instruction with the tag

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
    res, err := s.Cis.GetCisInstructionsWithTag(ctx, operations.GetCisInstructionsWithTagRequest{
        APIVersion: "praesentium",
        Authorization: "voluptatibus",
        EmployerID: "ipsa",
        SubContractorID: "omnis",
        TagID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisLineFromSubContractor

Gets the specified CIS line from sub contractor.

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
    res, err := s.Cis.GetCisLineFromSubContractor(ctx, operations.GetCisLineFromSubContractorRequest{
        APIVersion: "cum",
        Authorization: "perferendis",
        CisLineID: "doloremque",
        EmployerID: "reprehenderit",
        SubContractorID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisLine != nil {
        // handle response
    }
}
```

## GetCisLineTypeFromEmployer

Gets the specified CIS line type from employer.

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
    res, err := s.Cis.GetCisLineTypeFromEmployer(ctx, operations.GetCisLineTypeFromEmployerRequest{
        APIVersion: "maiores",
        Authorization: "dicta",
        CisLineTypeID: "corporis",
        EmployerID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisLineType != nil {
        // handle response
    }
}
```

## GetCisLineTypesFromEmployer

Get links to all CIS line types for the specified employer.

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
    res, err := s.Cis.GetCisLineTypesFromEmployer(ctx, operations.GetCisLineTypesFromEmployerRequest{
        APIVersion: "iusto",
        Authorization: "dicta",
        EmployerID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisLineTypesWithTag

Gets the CIS line type with the tag

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
    res, err := s.Cis.GetCisLineTypesWithTag(ctx, operations.GetCisLineTypesWithTagRequest{
        APIVersion: "enim",
        Authorization: "accusamus",
        EmployerID: "commodi",
        TagID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisLinesFromSubContractor

Get links to all CIS lines for the specified sub contractor.

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
    res, err := s.Cis.GetCisLinesFromSubContractor(ctx, operations.GetCisLinesFromSubContractorRequest{
        APIVersion: "quae",
        Authorization: "ipsum",
        EmployerID: "quidem",
        SubContractorID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisLinesWithTag

Gets the CIS line with the tag

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
    res, err := s.Cis.GetCisLinesWithTag(ctx, operations.GetCisLinesWithTagRequest{
        APIVersion: "excepturi",
        Authorization: "pariatur",
        EmployerID: "modi",
        SubContractorID: "praesentium",
        TagID: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetCisTransactionFromEmployer

Returns the specified CIS transaction

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
    res, err := s.Cis.GetCisTransactionFromEmployer(ctx, operations.GetCisTransactionFromEmployerRequest{
        APIVersion: "voluptates",
        Authorization: "quasi",
        CisTransactionID: "repudiandae",
        EmployerID: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisTransaction != nil {
        // handle response
    }
}
```

## GetCisTransactionsFromEmployer

Get links for all CIS transactions for the specified employer

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
    res, err := s.Cis.GetCisTransactionsFromEmployer(ctx, operations.GetCisTransactionsFromEmployerRequest{
        APIVersion: "veritatis",
        Authorization: "itaque",
        EmployerID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetSubContractorsWithTag

Gets the sub contractor with the tag

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
    res, err := s.Cis.GetSubContractorsWithTag(ctx, operations.GetSubContractorsWithTagRequest{
        APIVersion: "enim",
        Authorization: "consequatur",
        EmployerID: "est",
        TagID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagFromCisInstruction

Gets the tag from the CIS instruction

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
    res, err := s.Cis.GetTagFromCisInstruction(ctx, operations.GetTagFromCisInstructionRequest{
        APIVersion: "explicabo",
        Authorization: "deserunt",
        CisInstructionID: "distinctio",
        EmployerID: "quibusdam",
        SubContractorID: "labore",
        TagID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagFromCisLine

Gets the tag from the CIS line

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
    res, err := s.Cis.GetTagFromCisLine(ctx, operations.GetTagFromCisLineRequest{
        APIVersion: "qui",
        Authorization: "aliquid",
        CisLineID: "cupiditate",
        EmployerID: "quos",
        SubContractorID: "perferendis",
        TagID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagFromCisLineType

Gets the tag from the CIS line type

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
    res, err := s.Cis.GetTagFromCisLineType(ctx, operations.GetTagFromCisLineTypeRequest{
        APIVersion: "assumenda",
        Authorization: "ipsam",
        CisLineTypeID: "alias",
        EmployerID: "fugit",
        TagID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagFromSubContractor

Gets the tag from the sub contractor

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
    res, err := s.Cis.GetTagFromSubContractor(ctx, operations.GetTagFromSubContractorRequest{
        APIVersion: "excepturi",
        Authorization: "tempora",
        EmployerID: "facilis",
        SubContractorID: "tempore",
        TagID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagFromSubContractorRevision

Gets the tag from the sub contractor revision

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
    res, err := s.Cis.GetTagFromSubContractorRevision(ctx, operations.GetTagFromSubContractorRevisionRequest{
        APIVersion: "delectus",
        Authorization: "eum",
        EffectiveDate: types.MustDateFromString("2022-03-31"),
        EmployerID: "sint",
        SubContractorID: "aliquid",
        TagID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromCisInstruction

Gets all the tags from the CIS instruction

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
    res, err := s.Cis.GetTagsFromCisInstruction(ctx, operations.GetTagsFromCisInstructionRequest{
        APIVersion: "necessitatibus",
        Authorization: "sint",
        CisInstructionID: "officia",
        EmployerID: "dolor",
        SubContractorID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagsFromCisLine

Gets all the tags from the CIS line

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
    res, err := s.Cis.GetTagsFromCisLine(ctx, operations.GetTagsFromCisLineRequest{
        APIVersion: "a",
        Authorization: "dolorum",
        CisLineID: "in",
        EmployerID: "in",
        SubContractorID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagsFromCisLineType

Gets all the tags from the CIS line type

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
    res, err := s.Cis.GetTagsFromCisLineType(ctx, operations.GetTagsFromCisLineTypeRequest{
        APIVersion: "maiores",
        Authorization: "rerum",
        CisLineTypeID: "dicta",
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

## GetTagsFromSubContractor

Gets all the tags from the sub contractor

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
    res, err := s.Cis.GetTagsFromSubContractor(ctx, operations.GetTagsFromSubContractorRequest{
        APIVersion: "cumque",
        Authorization: "facere",
        EmployerID: "ea",
        SubContractorID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagsFromSubContractorRevision

Gets all the tags from the sub contractor revision

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
    res, err := s.Cis.GetTagsFromSubContractorRevision(ctx, operations.GetTagsFromSubContractorRevisionRequest{
        APIVersion: "laborum",
        Authorization: "accusamus",
        EffectiveDate: types.MustDateFromString("2022-06-02"),
        EmployerID: "enim",
        SubContractorID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchCisInstruction

Update an existing CIS instruction object

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
    res, err := s.Cis.PatchCisInstruction(ctx, operations.PatchCisInstructionRequest{
        APIVersion: "delectus",
        Authorization: "quidem",
        CisInstructionID: "provident",
        EmployerID: "nam",
        SubContractorID: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisInstruction != nil {
        // handle response
    }
}
```

## PostCisInstructionIntoSubContractor

Create a new CIS instruction object

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cis.PostCisInstructionIntoSubContractor(ctx, operations.PostCisInstructionIntoSubContractorRequest{
        APIVersion: "blanditiis",
        Authorization: "deleniti",
        CisInstruction: shared.CisInstruction{
            CisInstruction: &shared.CisInstructionCisInstruction{
                CisLineTag: sdk.String("sapiente"),
                CisLineType: sdk.String("amet"),
                Description: sdk.String("deserunt"),
                PayFrequency: shared.CisInstructionCisInstructionPayFrequencyEnumMonthly.ToPointer(),
                PeriodEnd: sdk.Int(423855),
                PeriodStart: sdk.Int(618809),
                TaxYearEnd: sdk.Int(606393),
                TaxYearStart: sdk.Int(474867),
                Uom: shared.CisInstructionCisInstructionUOMEnumNotSet.ToPointer(),
                Units: sdk.Float64(4701.32),
                Vat: sdk.Float64(3015.75),
                Value: sdk.Float64(7160.75),
            },
        },
        EmployerID: "id",
        SubContractorID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PostCisLineTypeIntoEmployer

Create a new CIS line type object

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cis.PostCisLineTypeIntoEmployer(ctx, operations.PostCisLineTypeIntoEmployerRequest{
        APIVersion: "labore",
        Authorization: "suscipit",
        CisLineType: shared.CisLineType{
            CisLineType: &shared.CisLineTypeCisLineType{
                Description: sdk.String("natus"),
                LineType: sdk.String("nobis"),
                NominalCode: &shared.CisLineTypeCisLineTypeNominalCode{
                    AtHref: sdk.String("eum"),
                    AtRel: sdk.String("vero"),
                    AtTitle: sdk.String("aspernatur"),
                },
                TaxTreatment: shared.CisLineTypeCisLineTypeTaxTreatmentEnumTaxable.ToPointer(),
            },
        },
        EmployerID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutCisInstructionIntoSubContractor

Insert or update existing CIS instruction object

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cis.PutCisInstructionIntoSubContractor(ctx, operations.PutCisInstructionIntoSubContractorRequest{
        APIVersion: "et",
        Authorization: "excepturi",
        CisInstruction: shared.CisInstruction{
            CisInstruction: &shared.CisInstructionCisInstruction{
                CisLineTag: sdk.String("ullam"),
                CisLineType: sdk.String("provident"),
                Description: sdk.String("quos"),
                PayFrequency: shared.CisInstructionCisInstructionPayFrequencyEnumWeekly.ToPointer(),
                PeriodEnd: sdk.Int(33625),
                PeriodStart: sdk.Int(653201),
                TaxYearEnd: sdk.Int(968962),
                TaxYearStart: sdk.Int(652103),
                Uom: shared.CisInstructionCisInstructionUOMEnumHour.ToPointer(),
                Units: sdk.Float64(4314.18),
                Vat: sdk.Float64(2212.62),
                Value: sdk.Float64(8965.47),
            },
        },
        CisInstructionID: "odit",
        EmployerID: "nemo",
        SubContractorID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisInstruction != nil {
        // handle response
    }
}
```

## PutCisInstructionTag

Inserts a new tag on the CIS instruction

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
    res, err := s.Cis.PutCisInstructionTag(ctx, operations.PutCisInstructionTagRequest{
        APIVersion: "iure",
        Authorization: "doloribus",
        CisInstructionID: "debitis",
        EmployerID: "eius",
        SubContractorID: "maxime",
        TagID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PutCisLineTag

Inserts a new tag on the CIS line

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
    res, err := s.Cis.PutCisLineTag(ctx, operations.PutCisLineTagRequest{
        APIVersion: "facilis",
        Authorization: "in",
        CisLineID: "architecto",
        EmployerID: "architecto",
        SubContractorID: "repudiandae",
        TagID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PutCisLineTypeIntoEmployer

Updates the existing specified CIS line type object

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cis.PutCisLineTypeIntoEmployer(ctx, operations.PutCisLineTypeIntoEmployerRequest{
        APIVersion: "expedita",
        Authorization: "nihil",
        CisLineType: shared.CisLineType{
            CisLineType: &shared.CisLineTypeCisLineType{
                Description: sdk.String("repellat"),
                LineType: sdk.String("quibusdam"),
                NominalCode: &shared.CisLineTypeCisLineTypeNominalCode{
                    AtHref: sdk.String("sed"),
                    AtRel: sdk.String("saepe"),
                    AtTitle: sdk.String("pariatur"),
                },
                TaxTreatment: shared.CisLineTypeCisLineTypeTaxTreatmentEnumTaxable.ToPointer(),
            },
        },
        CisLineTypeID: "consequuntur",
        EmployerID: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CisLineType != nil {
        // handle response
    }
}
```

## PutCisLineTypeTag

Inserts a new tag on the CIS line type

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
    res, err := s.Cis.PutCisLineTypeTag(ctx, operations.PutCisLineTypeTagRequest{
        APIVersion: "natus",
        Authorization: "magni",
        CisLineTypeID: "sunt",
        EmployerID: "quo",
        TagID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PutSubContractorTag

Inserts a new tag on the sub contractor

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
    res, err := s.Cis.PutSubContractorTag(ctx, operations.PutSubContractorTagRequest{
        APIVersion: "pariatur",
        Authorization: "maxime",
        EmployerID: "ea",
        SubContractorID: "excepturi",
        TagID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
