# CustomerUsageReports

### Available Operations

* [ReportsCustomerUsageReportsGet](#reportscustomerusagereportsget) - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

## ReportsCustomerUsageReportsGet

Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

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
    res, err := s.CustomerUsageReports.ReportsCustomerUsageReportsGet(ctx, operations.ReportsCustomerUsageReportsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veritatis"),
        CustomerID: sdk.String("itaque"),
        Date: "incidunt",
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PageToken: sdk.String("quibusdam"),
        Parameters: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ReportsCustomerUsageReportsGetSecurity{
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
