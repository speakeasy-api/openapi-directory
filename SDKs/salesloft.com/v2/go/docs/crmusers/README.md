# CrmUsers

## Overview

Crm Users

### Available Operations

* [GetV2CrmUsersJSON](#getv2crmusersjson) - List crm users

## GetV2CrmUsersJSON

Crm Users


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
    res, err := s.CrmUsers.GetV2CrmUsersJSON(ctx, operations.GetV2CrmUsersJSONRequest{
        CrmID: []string{
            "labore",
            "reiciendis",
            "doloremque",
            "repudiandae",
        },
        Ids: []int64{
            36033,
        },
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(106429),
        PerPage: sdk.Int64(174772),
        SortBy: sdk.String("enim"),
        SortDirection: sdk.String("laboriosam"),
        UserGUID: []string{
            "a",
        },
        UserID: []int64{
            300029,
            906355,
            160467,
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
