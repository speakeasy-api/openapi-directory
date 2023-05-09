# Orderreturns

### Available Operations

* [ContentOrderreturnsGet](#contentorderreturnsget) - Retrieves an order return from your Merchant Center account.
* [ContentOrderreturnsList](#contentorderreturnslist) - Lists order returns in your Merchant Center account.

## ContentOrderreturnsGet

Retrieves an order return from your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsGet(ctx, operations.ContentOrderreturnsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("dignissimos"),
        MerchantID: "laboriosam",
        OauthToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        ReturnID: "natus",
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ContentOrderreturnsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MerchantOrderReturn != nil {
        // handle response
    }
}
```

## ContentOrderreturnsList

Lists order returns in your Merchant Center account.

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
    res, err := s.Orderreturns.ContentOrderreturnsList(ctx, operations.ContentOrderreturnsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("itaque"),
        CreatedEndDate: sdk.String("laboriosam"),
        CreatedStartDate: sdk.String("unde"),
        Fields: sdk.String("modi"),
        Key: sdk.String("perspiciatis"),
        MaxResults: sdk.Int64(944626),
        MerchantID: "cum",
        OauthToken: sdk.String("aspernatur"),
        OrderBy: operations.ContentOrderreturnsListOrderByEnumReturnCreationTimeAsc.ToPointer(),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.ContentOrderreturnsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrderreturnsListResponse != nil {
        // handle response
    }
}
```
