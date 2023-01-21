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
            Parent: "sit",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "dicta",
                    Password: "debitis",
                    Username: "voluptatum",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "et",
                    Username: "ut",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "dolorem",
                    },
                },
            },
            BlacklistPatterns: []string{
                "voluptate",
                "iste",
            },
            DisplayName: "vitae",
            ExportToSecurityCommandCenter: "DISABLED",
            IgnoreHTTPStatusErrors: true,
            ManagedScan: false,
            MaxQPS: 6392442863481646880,
            Name: "vel",
            RiskLevel: "RISK_LEVEL_UNSPECIFIED",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 6303220950515014660,
                ScheduleTime: "id",
            },
            StartingUrls: []string{
                "accusantium",
            },
            StaticIPScan: false,
            UserAgent: "USER_AGENT_UNSPECIFIED",
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