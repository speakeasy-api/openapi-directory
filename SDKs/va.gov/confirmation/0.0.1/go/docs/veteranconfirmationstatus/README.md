# VeteranConfirmationStatus

## Overview

Veteran Confirmation - Veteran Status

### Available Operations

* [~~GetVeteranStatus~~](#getveteranstatus) - Get confirmation about an individual's Veteran status according to the VA :warning: **Deprecated**

## ~~GetVeteranStatus~~

Get confirmation about an individual's Veteran status according to the VA

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VeteranConfirmationStatus.GetVeteranStatus(ctx, shared.VeteranStatusRequest{
        BirthDate: "1965-01-01",
        FirstName: "John",
        Gender: shared.VeteranStatusRequestGenderEnumM.ToPointer(),
        LastName: "Doe",
        MiddleName: sdk.String("Theodore"),
        Ssn: "555-55-5555",
    }, operations.GetVeteranStatusSecurity{
        Apikey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VeteranStatusConfirmation != nil {
        // handle response
    }
}
```
