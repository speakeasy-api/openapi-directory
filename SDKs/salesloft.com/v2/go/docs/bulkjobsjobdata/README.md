# BulkJobsJobData

## Overview

Bulk Jobs - Job Data

### Available Operations

* [GetV2BulkJobsBulkJobsIDJobData](#getv2bulkjobsbulkjobsidjobdata) - List job data for a bulk job
* [PostV2BulkJobsBulkJobsIDJobData](#postv2bulkjobsbulkjobsidjobdata) - Create job data for a bulk job

## GetV2BulkJobsBulkJobsIDJobData

Fetches multiple job data records for a given bulk job. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

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
    res, err := s.BulkJobsJobData.GetV2BulkJobsBulkJobsIDJobData(ctx, operations.GetV2BulkJobsBulkJobsIDJobDataRequest{
        BulkJobsID: 847276,
        ID: map[string]interface{}{
            "fuga": "eius",
            "eos": "voluptas",
            "ab": "cupiditate",
            "consequatur": "tempora",
        },
        PerPage: sdk.Int64(892050),
        Status: []string{
            "aspernatur",
            "sequi",
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

## PostV2BulkJobsBulkJobsIDJobData

Upload job data for the specified bulk job. Upload an array of objects, where element contains the parameters necessary to execute the individual calls. Each call to this endpoint can handle up to 5,000 records at a time. There is no limit to how many times you can create job data for a given bulk job.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


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
    res, err := s.BulkJobsJobData.PostV2BulkJobsBulkJobsIDJobData(ctx, operations.PostV2BulkJobsBulkJobsIDJobDataRequest{
        RequestBody: operations.PostV2BulkJobsBulkJobsIDJobDataRequestBody{
            Data: []string{
                "esse",
                "recusandae",
                "aperiam",
                "distinctio",
            },
        },
        BulkJobsID: 799796,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
