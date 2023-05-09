# Records

### Available Operations

* [GetRecord](#getrecord)
* [GetRecords](#getrecords)

## GetRecord

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
    res, err := s.Records.GetRecord(ctx, operations.GetRecordRequest{
        IfMatch: sdk.String("tempora"),
        IfNoneMatch: sdk.String("vel"),
        Fields: []string{
            "officiis",
            "qui",
            "dolorum",
            "a",
        },
        BucketID: "esse",
        CollectionID: "harum",
        ID: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObjectSchema != nil {
        // handle response
    }
}
```

## GetRecords

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
    res, err := s.Records.GetRecords(ctx, operations.GetRecordsRequest{
        IfMatch: sdk.String("totam"),
        IfNoneMatch: sdk.String("incidunt"),
        Before: sdk.Int64(132068),
        Fields: []string{
            "distinctio",
        },
        Limit: sdk.Int64(704474),
        Since: sdk.Int64(396060),
        Sort: []string{
            "molestias",
            "temporibus",
        },
        To: sdk.Int64(183280),
        Token: sdk.String("neque"),
        BucketID: "fugit",
        CollectionID: "magni",
        ID: sdk.String("715bf0cb-b1e3-41b8-b90f-3443a1108e0a"),
        LastModified: sdk.Int64(833038),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schema != nil {
        // handle response
    }
}
```
