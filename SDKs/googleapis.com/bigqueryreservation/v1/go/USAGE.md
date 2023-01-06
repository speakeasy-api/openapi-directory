<!-- Start SDK Example Usage -->
```go
package main

import (
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
            Parent: "ullam",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "proto",
            Callback: "amet",
            CapacityCommitmentID: "nulla",
            EnforceSingleAdminProjectPerOrg: true,
            Fields: "voluptatum",
            Key: "error",
            OauthToken: "similique",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "ullam",
            UploadProtocol: "dolorum",
        },
        Request: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 7160520866229055577,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "aperiam": "eaque",
                        "nihil": "sint",
                    },
                    map[string]interface{}{
                        "consequatur": "sunt",
                        "quam": "nesciunt",
                        "esse": "quam",
                    },
                    map[string]interface{}{
                        "autem": "atque",
                    },
                },
                Message: "asperiores",
            },
            MultiRegionAuxiliary: false,
            Plan: "COMMITMENT_PLAN_UNSPECIFIED",
            RenewalPlan: "MONTHLY",
            SlotCount: "velit",
        },
    }
    
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CapacityCommitment != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->