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

    req := operations.DeleteAEAssessmentRequest{
        PathParams: operations.DeleteAEAssessmentPathParams{
            AEAssessmentID: "corrupti",
            EmployeeID: "provident",
            EmployerID: "distinctio",
        },
        Headers: operations.DeleteAEAssessmentHeaders{
            APIVersion: "quibusdam",
            Authorization: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.AEAssessment.DeleteAEAssessment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->