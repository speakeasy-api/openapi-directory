<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest{
        PathParams: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgPathParams{
            Org: "corrupti",
            RunnerID: 592845,
        },
        Request: operations.ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequestBody{
            Labels: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Actions.ActionsAddCustomLabelsToSelfHostedRunnerForOrg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActionsAddCustomLabelsToSelfHostedRunnerForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->