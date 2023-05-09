# EntityUsageReports

### Available Operations

* [ReportsEntityUsageReportsGet](#reportsentityusagereportsget) - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

## ReportsEntityUsageReportsGet

Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

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
    res, err := s.EntityUsageReports.ReportsEntityUsageReportsGet(ctx, operations.ReportsEntityUsageReportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquid"),
        CustomerID: sdk.String("cupiditate"),
        Date: "quos",
        EntityKey: "perferendis",
        EntityType: operations.ReportsEntityUsageReportsGetEntityTypeEnumGplusCommunities,
        Fields: sdk.String("magni"),
        Filters: sdk.String("assumenda"),
        Key: sdk.String("ipsam"),
        MaxResults: sdk.Int64(4695),
        OauthToken: sdk.String("fugit"),
        PageToken: sdk.String("dolorum"),
        Parameters: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
    }, operations.ReportsEntityUsageReportsGetSecurity{
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
