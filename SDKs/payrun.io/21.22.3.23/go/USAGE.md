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
            AEAssessmentID: "sunt",
            EmployeeID: "ullam",
            EmployerID: "ullam",
        },
        Headers: operations.DeleteAeAssessmentHeaders{
            APIVersion: "officia",
            Authorization: "nam",
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