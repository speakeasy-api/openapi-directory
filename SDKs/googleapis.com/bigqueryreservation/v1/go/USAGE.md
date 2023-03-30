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
        Security: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity{
            Option1: &operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            CapacityCommitmentID: "nulla",
            EnforceSingleAdminProjectPerOrg: false,
            Fields: "corrupti",
            Key: "illum",
            OauthToken: "vel",
            PrettyPrint: false,
            QuotaUser: "error",
            UploadType: "deserunt",
            UploadProtocol: "suscipit",
        },
        Request: &shared.CapacityCommitmentInput{
            Edition: "STANDARD",
            FailureStatus: &shared.Status{
                Code: 297534,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "delectus": "tempora",
                    },
                    map[string]interface{}{
                        "molestiae": "minus",
                        "placeat": "voluptatum",
                    },
                    map[string]interface{}{
                        "excepturi": "nisi",
                        "recusandae": "temporibus",
                    },
                    map[string]interface{}{
                        "quis": "veritatis",
                    },
                },
                Message: "deserunt",
            },
            MultiRegionAuxiliary: false,
            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
            RenewalPlan: "TRIAL",
            SlotCount: "repellendus",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CapacityCommitment != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->