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
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
        },
        AccessToken: sdk.String("nulla"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("vel"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("deserunt"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
        Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->