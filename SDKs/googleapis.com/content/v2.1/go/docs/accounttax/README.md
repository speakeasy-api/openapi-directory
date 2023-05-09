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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccounttaxCustomBatchRequest: &shared.AccounttaxCustomBatchRequest{
            Entries: []shared.AccounttaxCustomBatchRequestEntry{
                shared.AccounttaxCustomBatchRequestEntry{
                    AccountID: sdk.String("eligendi"),
                    AccountTax: &shared.AccountTax{
                        AccountID: sdk.String("sit"),
                        Kind: sdk.String("culpa"),
                        Rules: []shared.AccountTaxTaxRule{
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Dominica"),
                                LocationID: sdk.String("cumque"),
                                RatePercent: sdk.String("consequuntur"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Algeria"),
                                LocationID: sdk.String("minus"),
                                RatePercent: sdk.String("quaerat"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Vanuatu"),
                                LocationID: sdk.String("consectetur"),
                                RatePercent: sdk.String("esse"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                        },
                    },
                    BatchID: sdk.Int64(503427),
                    MerchantID: sdk.String("provident"),
                    Method: sdk.String("a"),
                },
                shared.AccounttaxCustomBatchRequestEntry{
                    AccountID: sdk.String("nulla"),
                    AccountTax: &shared.AccountTax{
                        AccountID: sdk.String("quas"),
                        Kind: sdk.String("esse"),
                        Rules: []shared.AccountTaxTaxRule{
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Uruguay"),
                                LocationID: sdk.String("error"),
                                RatePercent: sdk.String("sint"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                        },
                    },
                    BatchID: sdk.Int64(863023),
                    MerchantID: sdk.String("possimus"),
                    Method: sdk.String("quia"),
                },
                shared.AccounttaxCustomBatchRequestEntry{
                    AccountID: sdk.String("eveniet"),
                    AccountTax: &shared.AccountTax{
                        AccountID: sdk.String("asperiores"),
                        Kind: sdk.String("facere"),
                        Rules: []shared.AccountTaxTaxRule{
                            shared.AccountTaxTaxRule{
                                Country: sdk.String("Cape Verde"),
                                LocationID: sdk.String("quasi"),
                                RatePercent: sdk.String("similique"),
                                ShippingTaxed: sdk.Bool(false),
                                UseGlobalRate: sdk.Bool(false),
                            },
                        },
                    },
                    BatchID: sdk.Int64(633608),
                    MerchantID: sdk.String("aliquid"),
                    Method: sdk.String("tenetur"),
                },
            },
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("in"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("libero"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("accusantium"),
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
        AccessToken: sdk.String("sapiente"),
        AccountID: "dicta",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("nisi"),
        MerchantID: "aut",
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("ex"),
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
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("tenetur"),
        MaxResults: sdk.Int64(98478),
        MerchantID: "at",
        OauthToken: sdk.String("et"),
        PageToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("veritatis"),
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
            AccountID: sdk.String("adipisci"),
            Kind: sdk.String("iste"),
            Rules: []shared.AccountTaxTaxRule{
                shared.AccountTaxTaxRule{
                    Country: sdk.String("Antigua and Barbuda"),
                    LocationID: sdk.String("rem"),
                    RatePercent: sdk.String("aut"),
                    ShippingTaxed: sdk.Bool(false),
                    UseGlobalRate: sdk.Bool(false),
                },
                shared.AccountTaxTaxRule{
                    Country: sdk.String("Luxembourg"),
                    LocationID: sdk.String("eum"),
                    RatePercent: sdk.String("mollitia"),
                    ShippingTaxed: sdk.Bool(false),
                    UseGlobalRate: sdk.Bool(false),
                },
                shared.AccountTaxTaxRule{
                    Country: sdk.String("Bahrain"),
                    LocationID: sdk.String("corrupti"),
                    RatePercent: sdk.String("non"),
                    ShippingTaxed: sdk.Bool(false),
                    UseGlobalRate: sdk.Bool(false),
                },
                shared.AccountTaxTaxRule{
                    Country: sdk.String("Antarctica (the territory South of 60 deg S)"),
                    LocationID: sdk.String("dolor"),
                    RatePercent: sdk.String("occaecati"),
                    ShippingTaxed: sdk.Bool(false),
                    UseGlobalRate: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("numquam"),
        AccountID: "impedit",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("aut"),
        Key: sdk.String("dignissimos"),
        MerchantID: "dicta",
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("voluptatibus"),
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
