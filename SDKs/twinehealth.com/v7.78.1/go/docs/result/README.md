# Result

## Overview

A patient health result is a quantitative result for a patient.

### Available Operations

* [FetchPatientHealthResult](#fetchpatienthealthresult) - Get a patient health result
* [FetchPatientHealthResults](#fetchpatienthealthresults) - List patient health results

## FetchPatientHealthResult

Get patient health result by id.

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
    res, err := s.Result.FetchPatientHealthResult(ctx, operations.FetchPatientHealthResultRequest{
        ID: "578adc1a-c600-4dec-801a-c802e2ec09ff",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientHealthResultResponse != nil {
        // handle response
    }
}
```

## FetchPatientHealthResults

Get a list of patient health results.

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
    res, err := s.Result.FetchPatientHealthResults(ctx, operations.FetchPatientHealthResultsRequest{
        FilterActions: sdk.String("laudantium"),
        FilterCreatedAt: sdk.String("maiores"),
        FilterEndAt: sdk.String("alias"),
        FilterPatient: "asperiores",
        FilterStartAt: sdk.String("rem"),
        FilterThreads: sdk.String("dicta"),
        FilterUpdatedAt: sdk.String("suscipit"),
        PageAfter: sdk.String("earum"),
        PageLimit: sdk.Int64(985360),
        PageNumber: sdk.Int64(244569),
        PageSize: sdk.Int64(260588),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientHealthResultResponse != nil {
        // handle response
    }
}
```
