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

    req := operations.ActionsAddSelectedRepoToOrgSecretRequest{
        PathParams: operations.ActionsAddSelectedRepoToOrgSecretPathParams{
            Org: "corrupti",
            RepositoryID: 592845,
            SecretName: "distinctio",
        },
    }

    ctx := context.Background()
    res, err := s.Actions.ActionsAddSelectedRepoToOrgSecret(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->