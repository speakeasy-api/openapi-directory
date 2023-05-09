<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdditionalData.GetSearchVersionNumberAdditionalDataExt(ctx, operations.GetSearchVersionNumberAdditionalDataExtRequest{
        Ext: operations.GetSearchVersionNumberAdditionalDataExtExtEnumJSON,
        Geometries: "corrupti",
        GeometriesZoom: operations.GetSearchVersionNumberAdditionalDataExtGeometriesZoomEnumThirteen.ToPointer(),
        VersionNumber: shared.VersionNumberEnumTwo,
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