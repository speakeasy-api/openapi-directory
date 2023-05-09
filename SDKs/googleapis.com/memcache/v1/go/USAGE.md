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
    res, err := s.Projects.MemcacheProjectsLocationsInstancesApplyParameters(ctx, operations.MemcacheProjectsLocationsInstancesApplyParametersRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ApplyParametersRequest: &shared.ApplyParametersRequest{
            ApplyAll: sdk.Bool(false),
            NodeIds: []string{
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
        Name: "Rick Kertzmann",
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.MemcacheProjectsLocationsInstancesApplyParametersSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->