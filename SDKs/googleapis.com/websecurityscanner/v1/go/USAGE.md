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
            Parent: "facilis",
        },
        QueryParams: operations.WebsecurityscannerProjectsScanConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "proto",
            Callback: "quis",
            Fields: "repellat",
            Key: "qui",
            OauthToken: "ea",
            PrettyPrint: true,
            QuotaUser: "laudantium",
            UploadType: "earum",
            UploadProtocol: "eligendi",
        },
        Request: &shared.ScanConfig{
            Authentication: &shared.Authentication{
                CustomAccount: &shared.CustomAccount{
                    LoginURL: "ut",
                    Password: "eveniet",
                    Username: "quos",
                },
                GoogleAccount: &shared.GoogleAccount{
                    Password: "consectetur",
                    Username: "rem",
                },
                IapCredential: &shared.IapCredential{
                    IapTestServiceAccountInfo: &shared.IapTestServiceAccountInfo{
                        TargetAudienceClientID: "et",
                    },
                },
            },
            BlacklistPatterns: []string{
                "sed",
                "sint",
                "suscipit",
            },
            DisplayName: "voluptatum",
            ExportToSecurityCommandCenter: "EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED",
            IgnoreHTTPStatusErrors: true,
            ManagedScan: true,
            MaxQPS: 1531485269277272612,
            Name: "quam",
            RiskLevel: "LOW",
            Schedule: &shared.Schedule{
                IntervalDurationDays: 1862485506550677711,
                ScheduleTime: "ipsam",
            },
            StartingUrls: []string{
                "reiciendis",
            },
            StaticIPScan: true,
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