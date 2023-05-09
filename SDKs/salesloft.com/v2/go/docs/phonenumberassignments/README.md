# PhoneNumberAssignments

## Overview

Phone Number Assignments

### Available Operations

* [GetV2PhoneNumberAssignmentsJSON](#getv2phonenumberassignmentsjson) - List phone number assignments
* [GetV2PhoneNumberAssignmentsIDJSON](#getv2phonenumberassignmentsidjson) - Fetch a phone number assignment

## GetV2PhoneNumberAssignmentsJSON

Fetches multiple phone number assignment records. The records can be filtered, paged, and sorted according to
the respective parameters.


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
    res, err := s.PhoneNumberAssignments.GetV2PhoneNumberAssignmentsJSON(ctx, operations.GetV2PhoneNumberAssignmentsJSONRequest{
        Ids: []int64{
            983854,
            703966,
            697330,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(932080),
        PerPage: sdk.Int64(389548),
        SortBy: sdk.String("unde"),
        SortDirection: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetV2PhoneNumberAssignmentsIDJSON

Fetches a phone number assignment, by ID only.


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
    res, err := s.PhoneNumberAssignments.GetV2PhoneNumberAssignmentsIDJSON(ctx, operations.GetV2PhoneNumberAssignmentsIDJSONRequest{
        ID: "9fb2bb4e-cae6-4c3d-9db3-adebd5daea4c",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
