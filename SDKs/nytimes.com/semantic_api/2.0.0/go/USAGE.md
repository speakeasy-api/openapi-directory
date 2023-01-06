<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetNameConceptTypeSpecificConceptJSONRequest{
        PathParams: operations.GetNameConceptTypeSpecificConceptJSONPathParams{
            ConceptType: "nytd_org",
            SpecificConcept: "harum",
        },
        QueryParams: operations.GetNameConceptTypeSpecificConceptJSONQueryParams{
            Fields: "taxonomy",
            Query: "aliquid",
        },
    }
    
    res, err := s.GetNameConceptTypeSpecificConceptJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNameConceptTypeSpecificConceptJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->