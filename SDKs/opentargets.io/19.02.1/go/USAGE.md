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

    req := operations.GetAssociationFilterRequest{
        QueryParams: operations.GetAssociationFilterQueryParams{
            Datasource: "unde",
            Datastructure: "deserunt",
            Datatype: "porro",
            Direct: false,
            Disease: "nulla",
            Facets: false,
            Fields: "id",
            Format: "vero",
            From: 5448.83,
            Pathway: "nulla",
            ScorevalueMax: 4236.55,
            ScorevalueMin: 6235.64,
            ScorevalueTypes: "facilis",
            Search: "eum",
            Size: 4375.87,
            Sort: "ullam",
            Target: "saepe",
            TargetClass: "inventore",
            TherapeuticArea: "sapiente",
            Uniprotkw: "enim",
        },
    }

    ctx := context.Background()
    res, err := s.Filter.GetAssociationFilter(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->