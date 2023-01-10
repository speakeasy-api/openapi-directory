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
            Parent: "amet",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "culpa",
            Alt: "proto",
            Callback: "ex",
            CapacityCommitmentID: "quod",
            EnforceSingleAdminProjectPerOrg: false,
            Fields: "delectus",
            Key: "architecto",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "eius",
            UploadType: "perferendis",
            UploadProtocol: "voluptatem",
        },
        Request: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 5007631981227778759,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "sapiente": "qui",
                        "laudantium": "repellendus",
                        "architecto": "pariatur",
                    },
                    map[string]interface{}{
                        "animi": "error",
                    },
                    map[string]interface{}{
                        "sit": "tempore",
                        "iure": "magni",
                    },
                },
                Message: "sed",
            },
            MultiRegionAuxiliary: false,
            Plan: "MONTHLY",
            RenewalPlan: "MONTHLY",
            SlotCount: "sunt",
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