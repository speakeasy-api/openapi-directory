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
    
    req := operations.PostV05CareContextsDiscoverRequest{
        Headers: operations.PostV05CareContextsDiscoverHeaders{
            Authorization: "qui",
            XHIPID: "quo",
        },
        Request: operations.PostV05CareContextsDiscoverRequests{
            ApplicationXML: []byte("quia"),
            PatientDiscoveryRequest: &shared.PatientDiscoveryRequest{
                Patient: shared.PatientDiscoveryRequestPatient{
                    Gender: "F",
                    ID: "sed",
                    Name: "consequatur",
                    UnverifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "quibusdam",
                        },
                    },
                    VerifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MR",
                            Value: "sunt",
                        },
                        shared.Identifier{
                            Type: "HEALTH_ID",
                            Value: "eveniet",
                        },
                    },
                    YearOfBirth: 3323039620656045207,
                },
                RequestID: "vel",
                Timestamp: "2017-02-17T07:04:38Z",
                TransactionID: "architecto",
            },
        },
    }
    
    res, err := s.CmFacing.PostV05CareContextsDiscover(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->