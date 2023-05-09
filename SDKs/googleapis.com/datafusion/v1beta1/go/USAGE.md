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
    res, err := s.Projects.DatafusionProjectsLocationsInstancesCreate(ctx, operations.DatafusionProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            CryptoKeyConfig: &shared.CryptoKeyConfig{
                KeyReference: sdk.String("provident"),
            },
            DataprocServiceAccount: sdk.String("distinctio"),
            Description: sdk.String("quibusdam"),
            DisplayName: sdk.String("unde"),
            EnableRbac: sdk.Bool(false),
            EnableStackdriverLogging: sdk.Bool(false),
            EnableStackdriverMonitoring: sdk.Bool(false),
            EnableZoneSeparation: sdk.Bool(false),
            EventPublishConfig: &shared.EventPublishConfig{
                Enabled: sdk.Bool(false),
                Topic: sdk.String("nulla"),
            },
            Labels: map[string]string{
                "illum": "vel",
                "error": "deserunt",
                "suscipit": "iure",
            },
            NetworkConfig: &shared.NetworkConfig{
                IPAllocation: sdk.String("magnam"),
                Network: sdk.String("debitis"),
            },
            Options: map[string]string{
                "delectus": "tempora",
            },
            PrivateInstance: sdk.Bool(false),
            Type: shared.InstanceTypeEnumBasic.ToPointer(),
            Version: sdk.String("molestiae"),
            Zone: sdk.String("minus"),
        },
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("excepturi"),
        InstanceID: sdk.String("nisi"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("temporibus"),
        Parent: "ab",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DatafusionProjectsLocationsInstancesCreateSecurity{
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