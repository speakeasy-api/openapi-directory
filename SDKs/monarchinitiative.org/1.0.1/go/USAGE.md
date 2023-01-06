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
    
    req := operations.GetAssociationBySubjectAndAssocTypeRequest{
        PathParams: operations.GetAssociationBySubjectAndAssocTypePathParams{
            AssociationType: "ad",
        },
        QueryParams: operations.GetAssociationBySubjectAndAssocTypeQueryParams{
            Evidence: "iste",
            ExcludeAutomaticAssertions: false,
            Object: "rerum",
            Rows: 3874511895358777271,
            Start: 8220185515245473586,
            Subject: "non",
            UnselectEvidence: false,
            UseCompactAssociations: true,
        },
    }
    
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->