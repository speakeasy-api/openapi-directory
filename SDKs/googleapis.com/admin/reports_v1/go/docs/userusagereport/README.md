# UserUsageReport

### Available Operations

* [ReportsUserUsageReportGet](#reportsuserusagereportget) - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

## ReportsUserUsageReportGet

Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

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
    res, err := s.UserUsageReport.ReportsUserUsageReportGet(ctx, operations.ReportsUserUsageReportGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("non"),
        CustomerID: sdk.String("eligendi"),
        Date: "sint",
        Fields: sdk.String("aliquid"),
        Filters: sdk.String("provident"),
        GroupIDFilter: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        MaxResults: sdk.Int64(638921),
        OauthToken: sdk.String("dolor"),
        OrgUnitID: sdk.String("debitis"),
        PageToken: sdk.String("a"),
        Parameters: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("illum"),
        UserKey: "maiores",
    }, operations.ReportsUserUsageReportGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsageReports != nil {
        // handle response
    }
}
```
