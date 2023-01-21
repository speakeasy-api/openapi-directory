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
            Datasource: "sit",
            Datastructure: "voluptas",
            Datatype: "culpa",
            Direct: false,
            Disease: "consequuntur",
            Facets: false,
            Fields: "expedita",
            Format: "voluptas",
            From: 88.099998,
            Pathway: "nihil",
            ScorevalueMax: 47.200001,
            ScorevalueMin: 48.099998,
            ScorevalueTypes: "et",
            Search: "ut",
            Size: 50.099998,
            Sort: "voluptate",
            Target: "iste",
            TargetClass: "vitae",
            TherapeuticArea: "totam",
            Uniprotkw: "dolores",
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