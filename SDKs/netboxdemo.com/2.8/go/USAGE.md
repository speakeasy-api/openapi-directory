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
                Label: "voluptatem",
            },
            Circuit: 4229805829452798336,
            ConnectionStatus: false,
            Description: "dicta",
            PortSpeed: 8904735046532926757,
            PpInfo: "molestiae",
            Site: 979502095464504871,
            TermSide: "Z",
            UpstreamSpeed: 6618523597562287215,
            XconnectID: "ea",
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