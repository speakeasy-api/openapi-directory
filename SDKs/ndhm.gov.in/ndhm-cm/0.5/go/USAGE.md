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
            Authorization: "unde",
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
                    ID: "perspiciatis",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "nulla",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: "STORE",
                    DataEraseAt: "2022-08-13T22:19:51.328Z",
                    DateRange: shared.PermissionDateRange{
                        From: "2022-08-05T18:42:59.266Z",
                        To: "2022-11-09T05:33:54.269Z",
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: 437587,
                        Unit: "WEEK",
                        Value: 891773,
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "inventore",
                    RefURI: "https://donny.info",
                    Text: "voluptatum",
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
            Timestamp: "2022-06-13T13:14:15.573Z",
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