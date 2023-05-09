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
                    AccountID: sdk.String("dignissimos"),
                    BatchID: sdk.Int64(54338),
                    Destinations: []string{
                        "nesciunt",
                        "eos",
                    },
                    MerchantID: sdk.String("perferendis"),
                    Method: sdk.String("dolores"),
                },
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("minus"),
                    BatchID: sdk.Int64(463451),
                    Destinations: []string{
                        "vero",
                    },
                    MerchantID: sdk.String("nostrum"),
                    Method: sdk.String("hic"),
                },
                shared.AccountstatusesCustomBatchRequestEntry{
                    AccountID: sdk.String("recusandae"),
                    BatchID: sdk.Int64(608253),
                    Destinations: []string{
                        "perspiciatis",
                        "voluptatem",
                        "porro",
                    },
                    MerchantID: sdk.String("consequuntur"),
                    Method: sdk.String("blanditiis"),
                },
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        AccountID: "pariatur",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Destinations: []string{
            "delectus",
            "quaerat",
            "quos",
        },
        Fields: sdk.String("aliquid"),
        Key: sdk.String("dolorem"),
        MerchantID: "dolorem",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("hic"),
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
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Destinations: []string{
            "amet",
            "dolorum",
            "numquam",
            "veritatis",
        },
        Fields: sdk.String("ipsa"),
        Key: sdk.String("ipsa"),
        MaxResults: sdk.Int64(434417),
        MerchantID: "odio",
        OauthToken: sdk.String("quaerat"),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("voluptas"),
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
