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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetNameConceptTypeSpecificConceptJSONRequest{
        PathParams: operations.GetNameConceptTypeSpecificConceptJSONPathParams{
            ConceptType: "nytd_org",
            SpecificConcept: "provident",
        },
        QueryParams: operations.GetNameConceptTypeSpecificConceptJSONQueryParams{
            Fields: "article_list",
            Query: "quibusdam",
        },
    }

    ctx := context.Background()
    res, err := s.GetNameConceptTypeSpecificConceptJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNameConceptTypeSpecificConceptJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->