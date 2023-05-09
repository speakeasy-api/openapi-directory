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
            },
            BlacklistPatterns: []string{
                "debitis",
                "ipsa",
            },
            DisplayName: sdk.String("delectus"),
            LatestRun: &shared.ScanRun{
                EndTime: sdk.String("tempora"),
                ExecutionState: shared.ScanRunExecutionStateEnumQueued.ToPointer(),
                HasVulnerabilities: sdk.Bool(false),
                Name: sdk.String("Alexandra Schulist"),
                ProgressPercent: sdk.Int(568045),
                ResultState: shared.ScanRunResultStateEnumSuccess.ToPointer(),
                StartTime: sdk.String("recusandae"),
                UrlsCrawledCount: sdk.String("temporibus"),
                UrlsTestedCount: sdk.String("ab"),
            },
            MaxQPS: sdk.Int(337396),
            Name: sdk.String("Iris Aufderhar"),
            Schedule: &shared.Schedule{
                IntervalDurationDays: sdk.Int(957156),
                ScheduleTime: sdk.String("quo"),
            },
            StartingUrls: []string{
                "at",
            },
            TargetPlatforms: []shared.ScanConfigTargetPlatformsEnum{
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
                shared.ScanConfigTargetPlatformsEnumCompute,
                shared.ScanConfigTargetPlatformsEnumCloudRun,
                shared.ScanConfigTargetPlatformsEnumCloudFunctions,
            },
            UserAgent: shared.ScanConfigUserAgentEnumChromeLinux.ToPointer(),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolorum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("officia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("hic"),
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