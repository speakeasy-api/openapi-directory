<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest{
        PathParams: operations.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgPathParams{
            Org: "eum",
            RepositoryID: 1184955834402479672,
            RunnerGroupID: 4822368707231037983,
        },
    }
    
    res, err := s.Actions.ActionsAddRepoAccessToSelfHostedRunnerGroupInOrg(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->