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
            Authorization: "fugiat",
            XHIPID: "deleniti",
        },
        Request: operations.PostV05CareContextsDiscoverRequests{
            ApplicationXML: []byte("quia"),
            PatientDiscoveryRequest: &shared.PatientDiscoveryRequest{
                Patient: shared.PatientDiscoveryRequestPatient{
                    Gender: "O",
                    ID: "architecto",
                    Name: "architecto",
                    UnverifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "quo",
                        },
                        shared.Identifier{
                            Type: "NDHM_HEALTH_NUMBER",
                            Value: "repellendus",
                        },
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "quia",
                        },
                    },
                    VerifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MR",
                            Value: "enim",
                        },
                    },
                    YearOfBirth: 8243275622332520901,
                },
                RequestID: "est",
                Timestamp: "2001-08-31T04:38:11Z",
                TransactionID: "omnis",
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