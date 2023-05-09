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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetNameConceptTypeSpecificConceptJSON(ctx, operations.GetNameConceptTypeSpecificConceptJSONRequest{
        ConceptType: operations.GetNameConceptTypeSpecificConceptJSONConceptTypeEnumNytdOrg,
        Fields: operations.GetNameConceptTypeSpecificConceptJSONFieldsEnumCombinations.ToPointer(),
        Query: "distinctio",
        SpecificConcept: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNameConceptTypeSpecificConceptJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->