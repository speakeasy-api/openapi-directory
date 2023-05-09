# ObservationController

## Overview

Observation Controller

### Available Operations

* [GetObservationsByCode](#getobservationsbycode) - Get Observations of a Certain Type For a User
* [GetObservationsByCodes](#getobservationsbycodes) - Get Observations of Multiple Types For a User
* [GetPatientEnteredObservationsByCode](#getpatiententeredobservationsbycode) - Get patient entered Observations of a Certain Type For a User

## GetObservationsByCode

Given a User ID and observation code, retrieve all observations.

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
    res, err := s.ObservationController.GetObservationsByCode(ctx, operations.GetObservationsByCodeRequest{
        Code: "error",
        UserID: 645894,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetObservationsByCodes

Given a User ID and search parameters, retrieve a page of observations.

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
    res, err := s.ObservationController.GetObservationsByCodes(ctx, operations.GetObservationsByCodesRequest{
        Code: []string{
            "iure",
            "magnam",
        },
        Limit: 891773,
        Offset: 56713,
        OrderDirection: "delectus",
        UserID: 272656,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPatientEnteredObservationsByCode

Given a User ID and observation code, retrieve patient entered observations.

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
    res, err := s.ObservationController.GetPatientEnteredObservationsByCode(ctx, operations.GetPatientEnteredObservationsByCodeRequest{
        Code: "suscipit",
        UserID: 477665,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
