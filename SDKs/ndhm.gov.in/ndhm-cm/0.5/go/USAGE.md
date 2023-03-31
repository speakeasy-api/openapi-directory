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
        Authorization: "corrupti",
        ConsentRequest: shared.ConsentRequest{
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
                    DataEraseAt: "2021-09-16T11:56:06.019Z",
                    DateRange: shared.PermissionDateRange{
                        From: "2022-07-25T06:44:09.184Z",
                        To: "2022-02-09T12:04:06.508Z",
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: 56713,
                        Unit: "YEAR",
                        Value: 272656,
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "suscipit",
                    RefURI: "http://spotted-skyline.name",
                    Text: "iusto",
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
            Timestamp: "2022-03-20T06:24:36.919Z",
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