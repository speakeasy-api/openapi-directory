# JournalLine

### Available Operations

* [DeleteJournalLineTag](#deletejournallinetag) - Delete journal line tag
* [GetAllJournalLineTags](#getalljournallinetags) - Get all journal line tags
* [GetAllJournalLinesWithTag](#getalljournallineswithtag) - Get links to tagged journal lines
* [GetTagFromJournalLine](#gettagfromjournalline) - Get journal line tag
* [GetTagsFromJournalLine](#gettagsfromjournalline) - Get tags from journal line
* [PutJournalLineTag](#putjournallinetag) - Insert journal line tag

## DeleteJournalLineTag

Deletes a tag from the journal line

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
    res, err := s.JournalLine.DeleteJournalLineTag(ctx, operations.DeleteJournalLineTagRequest{
        APIVersion: "nisi",
        Authorization: "at",
        EmployerID: "vero",
        JournalLineID: "est",
        TagID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllJournalLineTags

Gets all the journal line tags

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
    res, err := s.JournalLine.GetAllJournalLineTags(ctx, operations.GetAllJournalLineTagsRequest{
        APIVersion: "sequi",
        Authorization: "doloribus",
        EmployerID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetAllJournalLinesWithTag

Gets the journal lines with the specified tag

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
    res, err := s.JournalLine.GetAllJournalLinesWithTag(ctx, operations.GetAllJournalLinesWithTagRequest{
        APIVersion: "optio",
        Authorization: "occaecati",
        EmployerID: "nemo",
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

## GetTagFromJournalLine

Gets a tag from the journal line

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
    res, err := s.JournalLine.GetTagFromJournalLine(ctx, operations.GetTagFromJournalLineRequest{
        APIVersion: "blanditiis",
        Authorization: "officia",
        EmployerID: "voluptas",
        JournalLineID: "numquam",
        TagID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromJournalLine

Gets all tags from the journal line

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
    res, err := s.JournalLine.GetTagsFromJournalLine(ctx, operations.GetTagsFromJournalLineRequest{
        APIVersion: "quos",
        Authorization: "eius",
        EmployerID: "aspernatur",
        JournalLineID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PutJournalLineTag

Inserts a tag on the journal line

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
    res, err := s.JournalLine.PutJournalLineTag(ctx, operations.PutJournalLineTagRequest{
        APIVersion: "nesciunt",
        Authorization: "fuga",
        EmployerID: "laudantium",
        JournalLineID: "incidunt",
        TagID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
