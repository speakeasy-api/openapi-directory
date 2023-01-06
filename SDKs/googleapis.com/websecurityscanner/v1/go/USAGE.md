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
            Parent: "laudantium",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "illo",
            Alt: "json",
            Callback: "unde",
            Fields: "at",
            Key: "architecto",
            OauthToken: "vitae",
            PrettyPrint: false,
            QuotaUser: "provident",
            UploadType: "aut",
            UploadProtocol: "fugit",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "quia",
                    Password: "a",
                    Username: "dolorem",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "rerum",
                    Username: "voluptatem",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "facilis",
                    },
                },
            },
            BlacklistPatterns: []string{
                "velit",
                "ut",
            },
            DisplayName: "amet",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: true,
            ManagedScan: true,
            MaxQPS: 4137322236744237846,
            Name: "rerum",
            RiskLevel: "RISK_LEVEL_UNSPECIFIED",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 713640259408744039,
                ScheduleTime: "enim",
            },
            StartingUrls: []string{
                "consequatur",
                "aliquam",
                "repudiandae",
            },
            StaticIPScan: false,
            UserAgent: "SAFARI_IPHONE",
        },
    }
    
    res, err := s.Projects.WebsecurityscannerProjectsScanConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ScanConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->