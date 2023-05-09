# ObservationHeadingController

## Overview

Observation Heading Controller

### Available Operations

* [GetAvailableObservationHeadings](#getavailableobservationheadings) - Get Available Observations Types For a User
* [GetPatientEnteredObservationHeadings](#getpatiententeredobservationheadings) - Get Available Patient Entered Observations Types For a User

## GetAvailableObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have observation data).

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
    res, err := s.ObservationHeadingController.GetAvailableObservationHeadings(ctx, operations.GetAvailableObservationHeadingsRequest{
        UserID: 791725,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObservationHeadings != nil {
        // handle response
    }
}
```

## GetPatientEnteredObservationHeadings

Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).

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
    res, err := s.ObservationHeadingController.GetPatientEnteredObservationHeadings(ctx, operations.GetPatientEnteredObservationHeadingsRequest{
        UserID: 812169,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ObservationHeadings != nil {
        // handle response
    }
}
```
