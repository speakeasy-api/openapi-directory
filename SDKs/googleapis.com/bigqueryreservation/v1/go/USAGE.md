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
            Parent: "unde",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            CapacityCommitmentID: "vero",
            EnforceSingleAdminProjectPerOrg: false,
            Fields: "perspiciatis",
            Key: "nulla",
            OauthToken: "nihil",
            PrettyPrint: false,
            QuotaUser: "fuga",
            UploadType: "facilis",
            UploadProtocol: "eum",
        },
        Request: &shared.CapacityCommitmentInput{
            Edition: "STANDARD",
            FailureStatus: &shared.Status{
                Code: 297534,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "sapiente": "enim",
                    },
                    map[string]interface{}{
                        "voluptatum": "autem",
                        "vel": "non",
                    },
                    map[string]interface{}{
                        "similique": "reprehenderit",
                        "molestiae": "quo",
                    },
                    map[string]interface{}{
                        "laboriosam": "dicta",
                    },
                },
                Message: "est",
            },
            MultiRegionAuxiliary: false,
            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
            RenewalPlan: "TRIAL",
            SlotCount: "fugiat",
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