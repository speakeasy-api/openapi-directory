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
            Edition: shared.CapacityCommitmentEditionEnumEnterprise.ToPointer(),
            FailureStatus: &shared.Status{
                Code: sdk.Int(715190),
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
                Message: sdk.String("veritatis"),
            },
            MultiRegionAuxiliary: sdk.Bool(false),
            Plan: shared.CapacityCommitmentPlanEnumAnnual.ToPointer(),
            RenewalPlan: shared.CapacityCommitmentRenewalPlanEnumCommitmentPlanUnspecified.ToPointer(),
            SlotCount: sdk.String("ipsam"),
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        CapacityCommitmentID: sdk.String("odit"),
        EnforceSingleAdminProjectPerOrg: sdk.Bool(false),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
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