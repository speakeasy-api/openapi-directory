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
            AssociationType: "sit",
        },
        QueryParams: operations.GetAssociationBySubjectAndAssocTypeQueryParams{
            Evidence: "voluptas",
            ExcludeAutomaticAssertions: true,
            Object: "expedita",
            Rows: 3390393562759376202,
            Start: 2669985732393126063,
            Subject: "expedita",
            UnselectEvidence: true,
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