# UptimeCheckIps

### Available Operations

* [MonitoringUptimeCheckIpsList](#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from

## MonitoringUptimeCheckIpsList

Returns the list of IP addresses that checkers run from

### Example Usage

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
    res, err := s.UptimeCheckIps.MonitoringUptimeCheckIpsList(ctx, operations.MonitoringUptimeCheckIpsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(30426),
        PageToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sequi"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.MonitoringUptimeCheckIpsListSecurity{
        Option1: &operations.MonitoringUptimeCheckIpsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUptimeCheckIpsResponse != nil {
        // handle response
    }
}
```
