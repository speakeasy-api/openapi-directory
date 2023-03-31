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
            Edition: "ENTERPRISE",
            FailureStatus: &shared.Status{
                Code: 715190,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "nulla": "corrupti",
                        "illum": "vel",
                        "error": "deserunt",
                    },
                    map[string]interface{}{
                        "iure": "magnam",
                        "debitis": "ipsa",
                    },
                    map[string]interface{}{
                        "tempora": "suscipit",
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                        "iusto": "excepturi",
                    },
                    map[string]interface{}{
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                },
                Message: "veritatis",
            },
            MultiRegionAuxiliary: false,
            Plan: "ANNUAL",
            RenewalPlan: "COMMITMENT_PLAN_UNSPECIFIED",
            SlotCount: "ipsam",
        },
        AccessToken: "repellendus",
        Alt: "proto",
        Callback: "quo",
        CapacityCommitmentID: "odit",
        EnforceSingleAdminProjectPerOrg: false,
        Fields: "at",
        Key: "at",
        OauthToken: "maiores",
        Parent: "molestiae",
        PrettyPrint: false,
        QuotaUser: "quod",
        UploadType: "quod",
        UploadProtocol: "esse",
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