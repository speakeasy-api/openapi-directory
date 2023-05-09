# BulkJobsResults

## Overview

Bulk Jobs - Results

### Available Operations

* [GetV2BulkJobsBulkJobsIDResults](#getv2bulkjobsbulkjobsidresults) - List job data for a completed bulk job.

## GetV2BulkJobsBulkJobsIDResults

Fetches multiple job data records for a completed bulk job. Note that until a bulk job's state is set to `done` the returned `data` will be an empty array. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

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
    res, err := s.BulkJobsResults.GetV2BulkJobsBulkJobsIDResults(ctx, operations.GetV2BulkJobsBulkJobsIDResultsRequest{
        BulkJobsID: 490819,
        ID: map[string]interface{}{
            "nihil": "totam",
        },
        PerPage: sdk.Int64(882710),
        Status: []string{
            "odio",
            "occaecati",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
