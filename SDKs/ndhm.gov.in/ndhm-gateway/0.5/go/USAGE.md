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
        Headers: operations.PostV05CareContextsDiscoverJSONHeaders{
            Authorization: "corrupti",
            XHipID: "provident",
        },
        Request: shared.PatientDiscoveryRequest{
            Patient: shared.PatientDiscoveryRequestPatient{
                Gender: "O",
                ID: "<patient-id>@<consent-manager-id>",
                Name: "chandler bing",
                UnverifiedIdentifiers: []shared.Identifier{
                    shared.Identifier{
                        Type: "NDHM_HEALTH_NUMBER",
                        Value: "+919800083232",
                    },
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
                        Type: "NDHM_HEALTH_NUMBER",
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
            Timestamp: "2022-07-25T06:44:09.184Z",
            TransactionID: "4e0f467c-c879-46ed-951a-05dfc2ddf7cc",
        },
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