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
    
    req := operations.GetAssociationFilterRequest{
        QueryParams: operations.GetAssociationFilterQueryParams{
            Datasource: "in",
            Datastructure: "porro",
            Datatype: "aut",
            Direct: false,
            Disease: "et",
            Facets: false,
            Fields: "sed",
            Format: "dignissimos",
            From: 13.200000,
            Pathway: "facere",
            ScorevalueMax: 55.200001,
            ScorevalueMin: 87.199997,
            ScorevalueTypes: "est",
            Search: "voluptatum",
            Size: 40.200001,
            Sort: "error",
            Target: "ut",
            TargetClass: "qui",
            TherapeuticArea: "molestias",
            Uniprotkw: "praesentium",
        },
    }
    
    res, err := s.Filter.GetAssociationFilter(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->