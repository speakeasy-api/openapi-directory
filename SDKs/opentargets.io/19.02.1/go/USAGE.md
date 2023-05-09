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
    res, err := s.Filter.GetAssociationFilter(ctx, operations.GetAssociationFilterRequest{
        Datasource: sdk.String("corrupti"),
        Datastructure: sdk.String("provident"),
        Datatype: sdk.String("distinctio"),
        Direct: sdk.Bool(false),
        Disease: sdk.String("quibusdam"),
        Facets: sdk.Bool(false),
        Fields: sdk.String("unde"),
        Format: sdk.String("nulla"),
        From: sdk.Float64(5448.83),
        Pathway: sdk.String("illum"),
        ScorevalueMax: sdk.Float32(4236.55),
        ScorevalueMin: sdk.Float32(6235.64),
        ScorevalueTypes: sdk.String("deserunt"),
        Search: sdk.String("suscipit"),
        Size: sdk.Float64(4375.87),
        Sort: sdk.String("magnam"),
        Target: sdk.String("debitis"),
        TargetClass: sdk.String("ipsa"),
        TherapeuticArea: sdk.String("delectus"),
        Uniprotkw: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->