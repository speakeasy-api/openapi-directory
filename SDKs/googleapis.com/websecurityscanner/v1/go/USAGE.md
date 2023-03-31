<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.WebsecurityscannerProjectsScanConfigsCreateRequest{
        DollarXgafv: "2",
        ScanConfig: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "provident",
                    Password: "distinctio",
                    Username: "Rosalinda_Mitchell84",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "vel",
                    Username: "Linda.Oberbrunner",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "magnam",
                    },
                },
            },
            BlacklistPatterns: []string{
                "ipsa",
                "delectus",
                "tempora",
                "suscipit",
            },
            DisplayName: "molestiae",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: false,
            ManagedScan: false,
            MaxQPS: 812169,
            Name: "voluptatum",
            RiskLevel: "NORMAL",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 568045,
                ScheduleTime: "nisi",
            },
            StartingUrls: []string{
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            },
            StaticIPScan: false,
            UserAgent: "CHROME_ANDROID",
        },
        AccessToken: "perferendis",
        Alt: "media",
        Callback: "repellendus",
        Fields: "sapiente",
        Key: "quo",
        OauthToken: "odit",
        Parent: "at",
        PrettyPrint: false,
        QuotaUser: "at",
        UploadType: "maiores",
        UploadProtocol: "molestiae",
    }

    ctx := context.Background()
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req, operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
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