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
        Security: operations.WebsecurityscannerProjectsScanConfigsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.WebsecurityscannerProjectsScanConfigsCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "suscipit",
                    Password: "iure",
                    Username: "Eli96",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "tempora",
                    Username: "Geraldine_Kreiger52",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "iusto",
                    },
                },
            },
            BlacklistPatterns: []string{
                "nisi",
                "recusandae",
                "temporibus",
            },
            DisplayName: "ab",
            ExportToSecurityCommandCenter: "ENABLED",
            IgnoreHTTPStatusErrors: false,
            ManagedScan: false,
            MaxQPS: 87129,
            Name: "deserunt",
            RiskLevel: "RISK_LEVEL_UNSPECIFIED",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 368241,
                ScheduleTime: "repellendus",
            },
            StartingUrls: []string{
                "quo",
                "odit",
                "at",
                "at",
            },
            StaticIPScan: false,
            UserAgent: "SAFARI_IPHONE",
        },
    }

    ctx := context.Background()
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->