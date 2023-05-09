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
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, operations.WebsecurityscannerProjectsScanConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: sdk.String("provident"),
                    Password: sdk.String("distinctio"),
                    Username: sdk.String("Rosalinda_Mitchell84"),
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: sdk.String("vel"),
                    Username: sdk.String("Linda.Oberbrunner"),
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: sdk.String("magnam"),
                    },
                },
            },
            BlacklistPatterns: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            DisplayName: sdk.String("molestiae"),
            ExportToSecurityCommandCenter: shared.ScanConfigExportToSecurityCommandCenterEnumDisabled.ToPointer(),
            IgnoreHTTPStatusErrors: sdk.Bool(false),
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(812169),
            Name: sdk.String("Ted Mante"),
            RiskLevel: shared.ScanConfigRiskLevelEnumLow.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(71036),
                ScheduleTime: sdk.String("quis"),
            },
            StartingUrls: []string{
                "deserunt",
            },
            StaticIPScan: sdk.Bool(false),
            UserAgent: shared.ScanConfigUserAgentEnumUserAgentUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("quo"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("at"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->