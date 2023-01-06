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
            Datasource: "quia",
            Datastructure: "veritatis",
            Datatype: "magnam",
            Direct: false,
            Disease: "et",
            Facets: false,
            Fields: "dolorem",
            Format: "asperiores",
            From: 83.099998,
            Pathway: "sed",
            ScorevalueMax: 62.099998,
            ScorevalueMin: 36.200001,
            ScorevalueTypes: "debitis",
            Search: "quod",
            Size: 92.199997,
            Sort: "esse",
            Target: "rerum",
            TargetClass: "tenetur",
            TherapeuticArea: "distinctio",
            Uniprotkw: "quis",
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