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
            Bearer: shared.SchemeBearer{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CircuitsCircuitTerminationsCreateRequest{
        Request: shared.WritableCircuitTerminationInput{
            Cable: &shared.NestedCableInput{
                Label: "unde",
            },
            Circuit: 592845,
            ConnectionStatus: "true",
            Description: "nulla",
            PortSpeed: 602763,
            PpInfo: "vero",
            Site: 544883,
            TermSide: "Z",
            UpstreamSpeed: 423655,
            XconnectID: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.Circuits.CircuitsCircuitTerminationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CircuitTermination != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->