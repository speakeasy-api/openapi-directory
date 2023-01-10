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
            Parent: "accusamus",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deleniti",
            Alt: "json",
            Callback: "quasi",
            CapacityCommitmentID: "praesentium",
            EnforceSingleAdminProjectPerOrg: true,
            Fields: "eos",
            Key: "ipsam",
            OauthToken: "ipsum",
            PrettyPrint: false,
            QuotaUser: "ut",
            UploadType: "veniam",
            UploadProtocol: "qui",
        },
        Request: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 7196243287888629260,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "distinctio": "eos",
                    },
                },
                Message: "officia",
            },
            MultiRegionAuxiliary: true,
            Plan: "ANNUAL",
            RenewalPlan: "COMMITMENT_PLAN_UNSPECIFIED",
            SlotCount: "corporis",
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