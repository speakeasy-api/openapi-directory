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
    
    req := operations.PostV05ConsentRequestsInitRequest{
        Headers: operations.PostV05ConsentRequestsInitHeaders{
            Authorization: "assumenda",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("ipsa"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "debitis",
                            PatientReference: "quia",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "qui",
                            PatientReference: "sit",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "aut",
                            PatientReference: "corrupti",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "Prescription",
                        "DiagnosticReport",
                        "OPConsultation",
                    },
                    Hip: &shared.ConsentRequestConsentHip{
                        ID: "quos",
                    },
                    Hiu: shared.ConsentRequestConsentHiu{
                        ID: "non",
                    },
                    Patient: shared.ConsentRequestConsentPatient{
                        ID: "culpa",
                    },
                    Permission: shared.Permission{
                        AccessMode: "STORE",
                        DataEraseAt: "1996-05-30T09:14:15Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1999-04-03T00:31:51Z",
                            To: "2000-05-14T09:37:53Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 1023459084632939894,
                            Unit: "MONTH",
                            Value: 9095513636727418367,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "atque",
                        RefURI: "quasi",
                        Text: "voluptates",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "in",
                            Type: "aut",
                            Value: "nobis",
                        },
                        Name: "hic",
                    },
                },
                RequestID: "dolores",
                Timestamp: "2018-03-19T12:27:56Z",
            },
        },
    }
    
    res, err := s.Consent.PostV05ConsentRequestsInit(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->