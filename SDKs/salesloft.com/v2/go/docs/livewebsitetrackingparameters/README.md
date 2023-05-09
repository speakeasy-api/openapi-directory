# LiveWebsiteTrackingParameters

## Overview

Live Website Tracking Parameters

### Available Operations

* [PostV2LiveWebsiteTrackingParametersJSON](#postv2livewebsitetrackingparametersjson) - Create an Live Website Tracking Parameter

## PostV2LiveWebsiteTrackingParametersJSON

Creates a Live Website Tracking parameter to identify a person


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
    res, err := s.LiveWebsiteTrackingParameters.PostV2LiveWebsiteTrackingParametersJSON(ctx, operations.PostV2LiveWebsiteTrackingParametersJSONRequestBody{
        PersonID: 102413,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
