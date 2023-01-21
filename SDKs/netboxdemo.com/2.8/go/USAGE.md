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
                Label: "sit",
            },
            Circuit: 2259404117704393152,
            ConnectionStatus: true,
            Description: "expedita",
            PortSpeed: 3390393562759376202,
            PpInfo: "dolor",
            Site: 1774932891286980153,
            TermSide: "Z",
            UpstreamSpeed: 8274930044578894929,
            XconnectID: "et",
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