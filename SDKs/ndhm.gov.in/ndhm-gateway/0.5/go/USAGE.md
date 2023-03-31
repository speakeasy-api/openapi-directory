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

    req := operations.PostV05CareContextsDiscoverJSONRequest{
        Authorization: "corrupti",
        PatientDiscoveryRequest: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: "O",
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: "HEALTH_ID",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "HEALTH_ID",
                        Value: "+919800083232",
                    },
                },
                VerifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: "HEALTH_ID",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "MR",
                        Value: "+919800083232",
                    },
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
                },
                YearOfBirth: 2000,
            },
            RequestID: "499a5a4a-7dda-4f20-9b67-e24589627061",
            Timestamp: "2022-03-26T09:37:56.283Z",
            TransactionID: "74e0f467-cc87-496e-9151-a05dfc2ddf7c",
        },
        XHipID: "quod",
    }

    ctx := context.Background()
    res, err := s.CmFacing.PostV05CareContextsDiscoverJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->