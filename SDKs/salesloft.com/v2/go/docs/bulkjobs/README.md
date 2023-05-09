# BulkJobs

## Overview

Bulk Jobs

### Available Operations

* [GetV2BulkJobs](#getv2bulkjobs) - List bulk jobs
* [GetV2BulkJobsID](#getv2bulkjobsid) - Fetch a bulk job
* [PostV2BulkJobs](#postv2bulkjobs) - Create a bulk job
* [PutV2BulkJobsID](#putv2bulkjobsid) - Update a bulk job

## GetV2BulkJobs

Fetches multiple bulk job records. The records can be filtered, paged, and sorted according to the respective parameters.

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
    res, err := s.BulkJobs.GetV2BulkJobs(ctx, operations.GetV2BulkJobsRequest{
        ID: map[string]interface{}{
            "odio": "eius",
            "esse": "esse",
        },
        PerPage: sdk.Int64(524593),
        State: []string{
            "reprehenderit",
            "quidem",
            "fugiat",
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

## GetV2BulkJobsID

Fetches a bulk job, by ID only.

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
    res, err := s.BulkJobs.GetV2BulkJobsID(ctx, operations.GetV2BulkJobsIDRequest{
        ID: 283519,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2BulkJobs

Creates a bulk job. The type of the bulk job must be included when created.

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
    res, err := s.BulkJobs.PostV2BulkJobs(ctx, operations.PostV2BulkJobsRequestBody{
        Name: sdk.String("Yolanda Shields"),
        Type: "quisquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2BulkJobsID

Updates a bulk job's name and / or marks a bulk job as 'ready_to_execute'.  May only be updated if the bulk job is still in an "open" state.

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
    res, err := s.BulkJobs.PutV2BulkJobsID(ctx, operations.PutV2BulkJobsIDRequest{
        RequestBody: &operations.PutV2BulkJobsIDRequestBody{
            Name: sdk.String("Angela Olson"),
            ReadyToExecute: sdk.Bool(false),
        },
        ID: 778696,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
