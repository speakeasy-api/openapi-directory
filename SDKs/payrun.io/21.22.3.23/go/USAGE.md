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
    
    req := operations.DeleteAeAssessmentRequest{
        PathParams: operations.DeleteAeAssessmentPathParams{
            AEAssessmentID: "at",
            EmployeeID: "quos",
            EmployerID: "odit",
        },
        Headers: operations.DeleteAeAssessmentHeaders{
            APIVersion: "a",
            Authorization: "nihil",
        },
    }
    
    res, err := s.AEAssessment.DeleteAeAssessment(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->