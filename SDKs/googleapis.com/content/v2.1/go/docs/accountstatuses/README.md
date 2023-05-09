# Accountstatuses

### Available Operations

* [ContentAccountstatusesCustombatch](#contentaccountstatusescustombatch) - Retrieves multiple Merchant Center account statuses in a single request.
* [ContentAccountstatusesGet](#contentaccountstatusesget) - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
* [ContentAccountstatusesList](#contentaccountstatuseslist) - Lists the statuses of the sub-accounts in your Merchant Center account.

## ContentAccountstatusesCustombatch

Retrieves multiple Merchant Center account statuses in a single request.

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
    res, err := s.Accountstatuses.ContentAccountstatusesCustombatch(ctx, operations.ContentAccountstatusesCustombatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccountstatusesCustomBatchRequest: &shared.AccountstatusesCustomBatchRequest{
            Entries: []shared.AccountstatusesCustomBatchRequestEntry{
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("eos"),
                    BatchID: sdk.Int64(509342),
                    Destinations: []string{
                        "veritatis",
                        "ipsa",
                        "id",
                        "quidem",
                    },
                    MerchantID: sdk.String("neque"),
                    Method: sdk.String("quo"),
                },
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("illum"),
                    BatchID: sdk.Int64(777408),
                    Destinations: []string{
                        "eius",
                        "eos",
                        "voluptas",
                    },
                    MerchantID: sdk.String("ab"),
                    Method: sdk.String("cupiditate"),
                },
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("consequatur"),
                    BatchID: sdk.Int64(272822),
                    Destinations: []string{
                        "ipsam",
                        "aspernatur",
                        "sequi",
                        "quo",
                    },
                    MerchantID: sdk.String("esse"),
                    Method: sdk.String("recusandae"),
                },
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("aperiam"),
                    BatchID: sdk.Int64(715179),
                    Destinations: []string{
                        "dignissimos",
                        "inventore",
                        "nihil",
                        "totam",
                    },
                    MerchantID: sdk.String("accusamus"),
                    Method: sdk.String("aliquam"),
                },
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("porro"),
    }, operations.ContentAccountstatusesCustombatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountstatusesCustomBatchResponse != nil {
        // handle response
    }
}
```

## ContentAccountstatusesGet

Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.

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
    res, err := s.Accountstatuses.ContentAccountstatusesGet(ctx, operations.ContentAccountstatusesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quas"),
        AccountID: "praesentium",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Destinations: []string{
            "fuga",
        },
        Fields: sdk.String("mollitia"),
        Key: sdk.String("incidunt"),
        MerchantID: "atque",
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("fugit"),
    }, operations.ContentAccountstatusesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountStatus != nil {
        // handle response
    }
}
```

## ContentAccountstatusesList

Lists the statuses of the sub-accounts in your Merchant Center account.

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
    res, err := s.Accountstatuses.ContentAccountstatusesList(ctx, operations.ContentAccountstatusesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Destinations: []string{
            "occaecati",
            "atque",
            "et",
            "esse",
        },
        Fields: sdk.String("eveniet"),
        Key: sdk.String("accusamus"),
        MaxResults: sdk.Int64(82971),
        MerchantID: "esse",
        Name: sdk.String("Marco Terry PhD"),
        OauthToken: sdk.String("vel"),
        PageToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.ContentAccountstatusesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountstatusesListResponse != nil {
        // handle response
    }
}
```
