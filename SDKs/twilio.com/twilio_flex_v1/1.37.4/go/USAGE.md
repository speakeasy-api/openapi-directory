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
    
    req := operations.CreateAssessmentsRequest{
        Security: operations.CreateAssessmentsSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
    }
    
    res, err := s.CreateAssessments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Assessments != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->