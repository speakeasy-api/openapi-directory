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
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("placeat"),
                ErrorTrace: &shared.ScanRunErrorTrace{
                    Code: shared.ScanRunErrorTraceCodeEnumTimedOutWhileScanning.ToPointer(),
                    MostCommonHTTPErrorCode: sdk.Int(479977),
                    ScanConfigError: &shared.ScanConfigError{
                        Code: shared.ScanConfigErrorCodeEnumMalformedResourceName.ToPointer(),
                        FieldName: sdk.String("nisi"),
                    },
                },
                ExecutionState: shared.ScanRunExecutionStateEnumFinished.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Miss Raymond Hauck III"),
                ProgressPercent: sdk.Int(832620),
                ResultState: shared.ScanRunResultStateEnumKilled.ToPointer(),
                StartTime: sdk.String("quo"),
                UrlsCrawledCount: sdk.String("odit"),
                UrlsTestedCount: sdk.String("at"),
                WarningTraces: []shared.ScanRunWarningTrace{
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumNoStartingURLFoundForManagedScan.ToPointer(),
                    },
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumTooManyCrawlResults.ToPointer(),
                    },
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumBlockedByIap.ToPointer(),
                    },
                    shared.ScanRunWarningTrace{
                        Code: shared.ScanRunWarningTraceCodeEnumBlockedByIap.ToPointer(),
                    },
                },
            },
            ManagedScan: sdk.Bool(false),
            MaxQPS: sdk.Int(461479),
            Name: sdk.String("Miss Lowell Parisian"),
            RiskLevel: shared.ScanConfigRiskLevelEnumNormal.ToPointer(),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(143353),
                ScheduleTime: sdk.String("deleniti"),
            },
            StartingUrls: []string{
                "optio",
                "totam",
                "beatae",
                "commodi",
            },
            StaticIPScan: sdk.Bool(false),
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumAppEngine,
                shared.ScanConfigTargetPlatformsEnumTargetPlatformUnspecified,
            },
            UserAgent: shared.ScanConfigUserAgentEnumSafariIphone.ToPointer(),
        },
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("perferendis"),
        Parent: "ad",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("iste"),
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