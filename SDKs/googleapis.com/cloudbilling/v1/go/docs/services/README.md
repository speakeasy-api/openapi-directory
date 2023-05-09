# Services

### Available Operations

* [CloudbillingServicesList](#cloudbillingserviceslist) - Lists all public cloud services.
* [CloudbillingServicesSkusList](#cloudbillingservicesskuslist) - Lists all publicly available SKUs for a given cloud service.

## CloudbillingServicesList

Lists all public cloud services.

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
    res, err := s.Services.CloudbillingServicesList(ctx, operations.CloudbillingServicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("delectus"),
        PageSize: sdk.Int64(692532),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.CloudbillingServicesListSecurity{
        Option1: &operations.CloudbillingServicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServicesResponse != nil {
        // handle response
    }
}
```

## CloudbillingServicesSkusList

Lists all publicly available SKUs for a given cloud service.

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
    res, err := s.Services.CloudbillingServicesSkusList(ctx, operations.CloudbillingServicesSkusListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        CurrencyCode: sdk.String("nisi"),
        EndTime: sdk.String("vel"),
        Fields: sdk.String("natus"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(19193),
        PageToken: sdk.String("nihil"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        StartTime: sdk.String("id"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.CloudbillingServicesSkusListSecurity{
        Option1: &operations.CloudbillingServicesSkusListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSkusResponse != nil {
        // handle response
    }
}
```
