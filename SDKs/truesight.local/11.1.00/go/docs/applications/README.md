# Applications

## Overview

API operations to interact with the monitored Applications.

### Available Operations

* [GetApplications](#getapplications) - Gets summarized information about all monitored applications.
* [GetOneApplication](#getoneapplication) - Gets detailed information for a specific application.

## GetApplications

Lists all the available ApplicationSummary instances.

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
    res, err := s.Applications.GetApplications(ctx, operations.GetApplicationsRequest{
        Direction: operations.GetApplicationsDirectionEnumDesc.ToPointer(),
        Limit: sdk.Int(528895),
        Page: sdk.String("iusto"),
        Sort: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOneApplication

You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.

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
    res, err := s.Applications.GetOneApplication(ctx, operations.GetOneApplicationRequest{
        ApplicationID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
