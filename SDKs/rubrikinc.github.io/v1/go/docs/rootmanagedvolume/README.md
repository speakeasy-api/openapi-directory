# RootManagedVolume

## Overview

Managed volumes.

### Available Operations

* [CreateManagedVolumeGenerateScriptJob](#createmanagedvolumegeneratescriptjob) - Generate and download unified view script

## CreateManagedVolumeGenerateScriptJob

Start an asynchronous job to generate and download a script to unify export paths across channels in managed volume export.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootManagedVolume.CreateManagedVolumeGenerateScriptJob(ctx, operations.CreateManagedVolumeGenerateScriptJobRequest{
        ID: "f79da18a-7822-4bf9-9894-e6861adb55f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```
