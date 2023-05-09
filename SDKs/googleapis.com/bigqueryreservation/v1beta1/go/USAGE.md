<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BigqueryreservationProjectsLocationsCapacityCommitmentsCreate(ctx, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CapacityCommitmentInput: &shared.CapacityCommitmentInput{
            FailureStatus: &shared.Status{
                Code: sdk.Int(592845),
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
                Message: sdk.String("voluptatum"),
            },
            MultiRegionAuxiliary: sdk.Bool(false),
            Plan: shared.CapacityCommitmentPlanEnumTrial.ToPointer(),
            RenewalPlan: shared.CapacityCommitmentRenewalPlanEnumTrial.ToPointer(),
            SlotCount: sdk.String("nisi"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        CapacityCommitmentID: sdk.String("quis"),
        EnforceSingleAdminProjectPerOrg: sdk.Bool(false),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quo"),
    }, operations.BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity{
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