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

    req := operations.GetAssociationBySubjectAndAssocTypeRequest{
        PathParams: operations.GetAssociationBySubjectAndAssocTypePathParams{
            AssociationType: "unde",
        },
        QueryParams: operations.GetAssociationBySubjectAndAssocTypeQueryParams{
            Evidence: "deserunt",
            ExcludeAutomaticAssertions: false,
            Object: "porro",
            Rows: 844266,
            Start: 602763,
            Subject: "vero",
            UnselectEvidence: false,
            UseCompactAssociations: false,
        },
    }

    ctx := context.Background()
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->