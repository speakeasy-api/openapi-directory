<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Consent.PostV05ConsentRequestsInitJSON(ctx, operations.PostV05ConsentRequestsInitJSONRequest{
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
                    shared.HITypeEnumEnumDiagnosticReport,
                    shared.HITypeEnumEnumDischargeSummary,
                    shared.HITypeEnumEnumDiagnosticReport,
                },
                Hip: &shared.ConsentRequestConsentHip{
                    ID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
                },
                Hiu: shared.ConsentRequestConsentHiu{
                    ID: "2ddf7cc7-8ca1-4ba9-a8fc-816742cb7392",
                },
                Patient: shared.ConsentRequestConsentPatient{
                    ID: "hinapatel79@ndhm",
                },
                Permission: shared.Permission{
                    AccessMode: shared.PermissionAccessModeEnumView,
                    DataEraseAt: types.MustTimeFromString("2022-05-20T13:30:46.463Z"),
                    DateRange: shared.PermissionDateRange{
                        From: types.MustTimeFromString("2022-05-22T14:02:28.908Z"),
                        To: types.MustTimeFromString("2022-05-20T19:39:29.035Z"),
                    },
                    Frequency: shared.PermissionFrequency{
                        Repeats: sdk.Int64(386489),
                        Unit: shared.PermissionFrequencyUnitEnumYear.ToPointer(),
                        Value: sdk.Int64(902599),
                    },
                },
                Purpose: shared.UsePurpose{
                    Code: "fuga",
                    RefURI: sdk.String("http://grown-opposite.info"),
                    Text: "saepe",
                },
                Requester: shared.Requester{
                    Identifier: &shared.RequesterIdentifier{
                        System: sdk.String("https://www.mciindia.org"),
                        Type: "REGNO",
                        Value: "MH1001",
                    },
                    Name: "Dr. Manju",
                },
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: types.MustTimeFromString("2022-10-20T12:36:28.767Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->