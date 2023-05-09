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
    res, err := s.Association.GetAssociationBySubjectAndAssocType(ctx, operations.GetAssociationBySubjectAndAssocTypeRequest{
        AssociationType: "corrupti",
        Evidence: sdk.String("provident"),
        ExcludeAutomaticAssertions: sdk.Bool(false),
        Object: sdk.String("distinctio"),
        Rows: sdk.Int64(844266),
        Start: sdk.Int64(602763),
        Subject: sdk.String("nulla"),
        UnselectEvidence: sdk.Bool(false),
        UseCompactAssociations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociationResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->