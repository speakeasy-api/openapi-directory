<!-- Start SDK Example Usage -->
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
    res, err := s.AEAssessment.DeleteAEAssessment(ctx, operations.DeleteAEAssessmentRequest{
        AEAssessmentID: "corrupti",
        APIVersion: "provident",
        Authorization: "distinctio",
        EmployeeID: "quibusdam",
        EmployerID: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->