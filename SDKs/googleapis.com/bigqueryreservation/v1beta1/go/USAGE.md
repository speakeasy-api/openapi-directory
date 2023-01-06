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
            Parent: "expedita",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "json",
            Callback: "harum",
            CapacityCommitmentID: "nemo",
            EnforceSingleAdminProjectPerOrg: false,
            Fields: "ut",
            Key: "provident",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "quos",
            UploadType: "sapiente",
            UploadProtocol: "beatae",
        },
        Request: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 7168148920351584244,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "molestiae": "aut",
                    },
                },
                Message: "qui",
            },
            MultiRegionAuxiliary: false,
            Plan: "TRIAL",
            RenewalPlan: "ANNUAL",
            SlotCount: "nesciunt",
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