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
    s := sdk.New()

    req := operations.PostV05ConsentRequestsInitJSONRequest{
        Headers: operations.PostV05ConsentRequestsInitJSONHeaders{
            Authorization: "corrupti",
        },
        Request: shared.ConsentRequest{
            Consent: shared.ConsentRequestConsent{
                CareContexts: []shared.CareContextDefinition{
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                    shared.CareContextDefinition{
                        CareContextReference: "Episode1",
                        PatientReference: "batman@tmh",
                    },
                },
                HiTypes: []shared.HITypeEnumEnum{
                    "DiagnosticReport",
                    "DischargeSummary",
                    "DiagnosticReport",
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "corrupti",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "illum",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: "STORE",
                    DataEraseAt: "2022-08-14T12:42:09.097Z",
                    DateRange: shared.PermissionDateRange{
                        From: "2022-08-06T09:05:17.035Z",
                        To: "2022-11-09T19:56:12.037Z",
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: 437587,
                        Unit: "WEEK",
                        Value: 891773,
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "ipsa",
                    RefURI: "https://fatherly-geyser.info",
                    Text: "minus",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: "https://www.mciindia.org",
                        Type: "REGNO",
                        Value: "MH1001",
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: "2022-06-06T16:31:21.065Z",
        },
    }

    ctx := context.Background()
    res, err := s.Consent.PostV05ConsentRequestsInitJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->