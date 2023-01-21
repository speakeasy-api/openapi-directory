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
            Authorization: "sit",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("voluptas"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "expedita",
                            PatientReference: "consequuntur",
                        },
                        shared.CareContextDefinition{
                            CareContextReference: "dolor",
                            PatientReference: "expedita",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "OPConsultation",
                        "OPConsultation",
                        "OPConsultation",
                    },
                    Hip: &shared.ConsentRequestConsentHip{
                        ID: "rerum",
                    },
                    Hiu: shared.ConsentRequestConsentHiu{
                        ID: "dicta",
                    },
                    Patient: shared.ConsentRequestConsentPatient{
                        ID: "debitis",
                    },
                    Permission: shared.Permission{
                        AccessMode: "VIEW",
                        DataEraseAt: "2005-09-27T09:17:54Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1970-04-14T21:44:49Z",
                            To: "2021-10-23T13:19:10Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 7259475919510918339,
                            Unit: "YEAR",
                            Value: 3287288577352441706,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "vitae",
                        RefURI: "totam",
                        Text: "dolores",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "illum",
                            Type: "debitis",
                            Value: "vel",
                        },
                        Name: "odio",
                    },
                },
                RequestID: "dolore",
                Timestamp: "1993-03-23T22:53:08Z",
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