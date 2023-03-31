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

    req := operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest{
        DollarXgafv: "2",
        CapacityCommitmentInput: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 592845,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "unde": "nulla",
                        "corrupti": "illum",
                        "vel": "error",
                        "deserunt": "suscipit",
                    },
                    map[string]interface{}{
                        "magnam": "debitis",
                        "ipsa": "delectus",
                    },
                    map[string]interface{}{
                        "suscipit": "molestiae",
                        "minus": "placeat",
                    },
                },
                Message: "voluptatum",
            },
            MultiRegionAuxiliary: false,
            Plan: "TRIAL",
            RenewalPlan: "TRIAL",
            SlotCount: "nisi",
        },
        AccessToken: "recusandae",
        Alt: "proto",
        Callback: "ab",
        CapacityCommitmentID: "quis",
        EnforceSingleAdminProjectPerOrg: false,
        Fields: "veritatis",
        Key: "deserunt",
        OauthToken: "perferendis",
        Parent: "ipsam",
        PrettyPrint: false,
        QuotaUser: "repellendus",
        UploadType: "sapiente",
        UploadProtocol: "quo",
    }

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsCreate(ctx, req, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity{
        Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CapacityCommitment != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->