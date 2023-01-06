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
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CircuitsCircuitTerminationsCreateRequest{
        Request: shared.WritableCircuitTerminationInput{
            Cable: &shared.NestedCableInput{
                Label: "quo",
            },
            Circuit: 2146534388476206377,
            ConnectionStatus: false,
            Description: "praesentium",
            PortSpeed: 7326317870258218444,
            PpInfo: "ea",
            Site: 5660394970143440116,
            TermSide: "A",
            UpstreamSpeed: 1079096460568329341,
            XconnectID: "aut",
        },
    }
    
    res, err := s.Circuits.CircuitsCircuitTerminationsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CircuitTermination != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->