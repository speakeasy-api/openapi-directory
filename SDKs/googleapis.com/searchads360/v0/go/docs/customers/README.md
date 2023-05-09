# Customers

### Available Operations

* [Searchads360CustomersCustomColumnsList](#searchads360customerscustomcolumnslist) - Returns all the custom columns associated with the customer in full detail.
* [Searchads360CustomersSearchAds360Search](#searchads360customerssearchads360search) - Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## Searchads360CustomersCustomColumnsList

Returns all the custom columns associated with the customer in full detail.

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
    res, err := s.Customers.Searchads360CustomersCustomColumnsList(ctx, operations.Searchads360CustomersCustomColumnsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        CustomerID: "ipsa",
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.Searchads360CustomersCustomColumnsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsSearchads360V0ServicesListCustomColumnsResponse != nil {
        // handle response
    }
}
```

## Searchads360CustomersSearchAds360Search

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

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
    res, err := s.Customers.Searchads360CustomersSearchAds360Search(ctx, operations.Searchads360CustomersSearchAds360SearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAdsSearchads360V0ServicesSearchSearchAds360Request: &shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360Request{
            PageSize: sdk.Int(479977),
            PageToken: sdk.String("excepturi"),
            Query: sdk.String("nisi"),
            ReturnTotalResultsCount: sdk.Bool(false),
            SummaryRowSetting: shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnumSummaryRowOnly.ToPointer(),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        CustomerID: "veritatis",
        Fields: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quo"),
    }, operations.Searchads360CustomersSearchAds360SearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsSearchads360V0ServicesSearchSearchAds360Response != nil {
        // handle response
    }
}
```
