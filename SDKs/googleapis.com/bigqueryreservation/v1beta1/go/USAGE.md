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
            Parent: "sit",
        },
        QueryParams: operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            CapacityCommitmentID: "dolor",
            EnforceSingleAdminProjectPerOrg: true,
            Fields: "voluptas",
            Key: "fugit",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "rerum",
            UploadType: "dicta",
            UploadProtocol: "debitis",
        },
        Request: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: 5617773211005988520,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "dolorem": "et",
                        "voluptate": "iste",
                        "vitae": "totam",
                    },
                },
                Message: "dolores",
            },
            MultiRegionAuxiliary: false,
            Plan: "FLEX",
            RenewalPlan: "TRIAL",
            SlotCount: "odio",
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