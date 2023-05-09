# CRMActivityFields

## Overview

CRM Activity Fields

### Available Operations

* [GetV2CrmActivityFieldsJSON](#getv2crmactivityfieldsjson) - List crm activity fields

## GetV2CrmActivityFieldsJSON

Fetches multiple crm activity field records. The records can be filtered, paged, and sorted according to
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
    res, err := s.CRMActivityFields.GetV2CrmActivityFieldsJSON(ctx, operations.GetV2CrmActivityFieldsJSONRequest{
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(690025),
        PerPage: sdk.Int64(473221),
        SortBy: sdk.String("rerum"),
        SortDirection: sdk.String("occaecati"),
        Source: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
