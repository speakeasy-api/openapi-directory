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
        AssociationType: "corrupti",
        Evidence: "provident",
        ExcludeAutomaticAssertions: false,
        Object: "distinctio",
        Rows: 844266,
        Start: 602763,
        Subject: "nulla",
        UnselectEvidence: false,
        UseCompactAssociations: false,
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