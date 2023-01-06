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
            Authorization: "omnis",
        },
        Request: operations.PostV05ConsentRequestsInitRequests{
            ApplicationXML: []byte("officiis"),
            ConsentRequest: &shared.ConsentRequest{
                Consent: shared.ConsentRequestConsent{
                    CareContexts: []shared.CareContextDefinition{
                        shared.CareContextDefinition{
                            CareContextReference: "harum",
                            PatientReference: "dolore",
                        },
                    },
                    HiTypes: []shared.HiTypeEnumEnum{
                        "DischargeSummary",
                    },
                    Hip: map[string]interface{}{
                        "voluptatem": "ut",
                        "dolore": "eligendi",
                        "quis": "esse",
                    },
                    Hiu: map[string]interface{}{
                        "fugit": "ullam",
                        "reiciendis": "aut",
                    },
                    Patient: map[string]interface{}{
                        "perspiciatis": "incidunt",
                        "ut": "excepturi",
                        "sunt": "et",
                    },
                    Permission: shared.Permission{
                        AccessMode: "VIEW",
                        DataEraseAt: "2019-02-03T05:07:07Z",
                        DateRange: shared.PermissionDateRange{
                            From: "1998-12-03T02:52:49Z",
                            To: "2012-12-04T23:49:43Z",
                        },
                        Frequency: shared.PermissionFrequency{
                            Repeats: 2461558090694216527,
                            Unit: "WEEK",
                            Value: 3238526225196230627,
                        },
                    },
                    Purpose: shared.UsePurpose{
                        Code: "aliquid",
                        RefURI: "eos",
                        Text: "dolores",
                    },
                    Requester: shared.Requester{
                        Identifier: &shared.RequesterIdentifier{
                            System: "consequuntur",
                            Type: "expedita",
                            Value: "quasi",
                        },
                        Name: "eos",
                    },
                },
                RequestID: "eius",
                Timestamp: "1997-09-22T05:26:28Z",
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