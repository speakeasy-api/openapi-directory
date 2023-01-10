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
            AssociationType: "temporibus",
        },
        QueryParams: operations.GetAssociationBySubjectAndAssocTypeQueryParams{
            Evidence: "est",
            ExcludeAutomaticAssertions: true,
            Object: "quisquam",
            Rows: 1089025540522894394,
            Start: 7427260158299952114,
            Subject: "et",
            UnselectEvidence: true,
            UseCompactAssociations: false,
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