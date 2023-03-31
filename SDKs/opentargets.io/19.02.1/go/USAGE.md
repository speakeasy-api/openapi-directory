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
        Datasource: "corrupti",
        Datastructure: "provident",
        Datatype: "distinctio",
        Direct: false,
        Disease: "quibusdam",
        Facets: false,
        Fields: "unde",
        Format: "nulla",
        From: 5448.83,
        Pathway: "illum",
        ScorevalueMax: 4236.55,
        ScorevalueMin: 6235.64,
        ScorevalueTypes: "deserunt",
        Search: "suscipit",
        Size: 4375.87,
        Sort: "magnam",
        Target: "debitis",
        TargetClass: "ipsa",
        TherapeuticArea: "delectus",
        Uniprotkw: "tempora",
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