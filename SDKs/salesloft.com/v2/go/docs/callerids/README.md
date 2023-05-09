# CallerIDs

## Overview

Caller ID Information

### Available Operations

* [GetV2PhoneNumbersCallerIdsJSON](#getv2phonenumberscalleridsjson) - List caller ids

## GetV2PhoneNumbersCallerIdsJSON

Each entry is a possible caller ID match for the number. Multiple
entries may be returned if the phone number is present on more than one
person in the system.  Phone number should be in E.164 format.


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
    res, err := s.CallerIDs.GetV2PhoneNumbersCallerIdsJSON(ctx, operations.GetV2PhoneNumbersCallerIdsJSONRequest{
        PhoneNumber: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
