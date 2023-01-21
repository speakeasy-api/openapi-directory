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
            Authorization: "sit",
            XHIPID: "voluptas",
        },
        Request: operations.PostV05CareContextsDiscoverRequests{
            ApplicationXML: []byte("culpa"),
            PatientDiscoveryRequest: &shared.PatientDiscoveryRequest{
                Patient: shared.PatientDiscoveryRequestPatient{
                    Gender: "O",
                    ID: "consequuntur",
                    Name: "dolor",
                    UnverifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "MR",
                            Value: "fugit",
                        },
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "nihil",
                        },
                    },
                    VerifiedIdentifiers: []shared.Identifier{
                        shared.Identifier{
                            Type: "HEALTH_ID",
                            Value: "debitis",
                        },
                        shared.Identifier{
                            Type: "MOBILE",
                            Value: "et",
                        },
                        shared.Identifier{
                            Type: "HEALTH_ID",
                            Value: "dolorem",
                        },
                    },
                    YearOfBirth: 7259475919510918339,
                },
                RequestID: "voluptate",
                Timestamp: "1998-09-30T11:01:25Z",
                TransactionID: "vitae",
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