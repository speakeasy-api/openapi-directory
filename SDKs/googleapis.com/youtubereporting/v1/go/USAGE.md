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
    res, err := s.Jobs.YoutubereportingJobsCreate(ctx, operations.YoutubereportingJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Job: &shared.Job{
            CreateTime: sdk.String("provident"),
            ExpireTime: sdk.String("distinctio"),
            ID: sdk.String("d9d8d69a-674e-40f4-a7cc-8796ed151a05"),
            Name: sdk.String("Timmy Satterfield"),
            ReportTypeID: sdk.String("at"),
            SystemManaged: sdk.Bool(false),
        },
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        OnBehalfOfContentOwner: sdk.String("porro"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("nam"),
    }, operations.YoutubereportingJobsCreateSecurity{
        Option1: &operations.YoutubereportingJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->