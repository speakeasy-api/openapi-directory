# PatientController

## Overview

Patient Controller

### Available Operations

* [GetBasicPatientDetails](#getbasicpatientdetails) - Get Basic Patient Information

## GetBasicPatientDetails

Given a User ID, get basic patient information for a user from clinical data stored in FHIR

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
    res, err := s.PatientController.GetBasicPatientDetails(ctx, operations.GetBasicPatientDetailsRequest{
        UserID: 528895,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
