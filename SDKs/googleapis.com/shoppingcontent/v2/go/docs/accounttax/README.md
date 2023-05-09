# Accounttax

### Available Operations

* [ContentAccounttaxCustombatch](#contentaccounttaxcustombatch) - Retrieves and updates tax settings of multiple accounts in a single request.
* [ContentAccounttaxGet](#contentaccounttaxget) - Retrieves the tax settings of the account.
* [ContentAccounttaxList](#contentaccounttaxlist) - Lists the tax settings of the sub-accounts in your Merchant Center account.
* [ContentAccounttaxUpdate](#contentaccounttaxupdate) - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

## ContentAccounttaxCustombatch

Retrieves and updates tax settings of multiple accounts in a single request.

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
    res, err := s.Accounttax.ContentAccounttaxCustombatch(ctx, operations.ContentAccounttaxCustombatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccounttaxCustomBatchRequest: &shared.AccounttaxCustomBatchRequest{
            Entries: []shared.AccounttaxCustomBatchRequestEntry{
                shared.AccounttaxCustomBatchRequestEntry{
                    AccountID: sdk.String("atque"),
                    AccountTax: &shared.AccountTax{
                        AccountID: sdk.String("sit"),
                        Kind: sdk.String("fugiat"),
                        Rules: []shared.AccountTaxTaxRule{
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Saint Barthelemy"),
                                LocationID: sdk.String("dolorum"),
                                RatePercent: sdk.String("iusto"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                        },
                    },
                    BatchID: sdk.Int64(453697),
                    MerchantID: sdk.String("dolorum"),
                    Method: sdk.String("deleniti"),
                },
            },
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ContentAccounttaxCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccounttaxCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentAccounttaxGet

Retrieves the tax settings of the account.

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
    res, err := s.Accounttax.ContentAccounttaxGet(ctx, operations.ContentAccounttaxGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aspernatur"),
        AccountID: "perferendis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("ad"),
        MerchantID: "saepe",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("minima"),
    }, operations.ContentAccounttaxGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTax != nil {
        // handle response
    }
}
```

## ContentAccounttaxList

Lists the tax settings of the sub-accounts in your Merchant Center account.

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
    res, err := s.Accounttax.ContentAccounttaxList(ctx, operations.ContentAccounttaxListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        MaxResults: sdk.Int64(273542),
        MerchantID: "vel",
        OauthToken: sdk.String("quod"),
        PageToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("a"),
    }, operations.ContentAccounttaxListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccounttaxListResponse != nil {
        // handle response
    }
}
```

## ContentAccounttaxUpdate

Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

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
    res, err := s.Accounttax.ContentAccounttaxUpdate(ctx, operations.ContentAccounttaxUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountTax: &shared.AccountTax{
            AccountID: sdk.String("harum"),
            Kind: sdk.String("iusto"),
            Rules: []shared.AccountTaxTaxRule{
                shared.AccountTaxTaxRule{
                    Country: sdk.String("Senegal"),
                    LocationID: sdk.String("tenetur"),
                    RatePercent: sdk.String("amet"),
                    ShippingTaxed: sdk.Bool(false),
                    UseGlobalRate: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("tempore"),
        AccountID: "accusamus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("sapiente"),
        MerchantID: "totam",
        OauthToken: sdk.String("nihil"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("neque"),
    }, operations.ContentAccounttaxUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountTax != nil {
        // handle response
    }
}
```
