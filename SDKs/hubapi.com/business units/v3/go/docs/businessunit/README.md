# BusinessUnit

## Overview

Get Business Unit information.

### Available Operations

* [GetBusinessUnitsV3BusinessUnitsUserUserID](#getbusinessunitsv3businessunitsuseruserid) - Get Business Units for a user

## GetBusinessUnitsV3BusinessUnitsUserUserID

Get Business Units identified by `userId`. The `userId` refers to the user’s ID.

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
    res, err := s.BusinessUnit.GetBusinessUnitsV3BusinessUnitsUserUserID(ctx, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDRequest{
        Name: []string{
            "deserunt",
            "suscipit",
            "iure",
        },
        Properties: []string{
            "debitis",
            "ipsa",
        },
        UserID: "delectus",
    }, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDSecurity{
        Oauth2Legacy: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionResponsePublicBusinessUnitNoPaging != nil {
        // handle response
    }
}
```
