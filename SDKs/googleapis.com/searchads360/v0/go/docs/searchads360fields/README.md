# SearchAds360Fields

### Available Operations

* [Searchads360SearchAds360FieldsGet](#searchads360searchads360fieldsget) - Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
* [Searchads360SearchAds360FieldsSearch](#searchads360searchads360fieldssearch) - Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## Searchads360SearchAds360FieldsGet

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

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
    res, err := s.SearchAds360Fields.Searchads360SearchAds360FieldsGet(ctx, operations.Searchads360SearchAds360FieldsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        ResourceName: "totam",
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.Searchads360SearchAds360FieldsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsSearchads360V0ResourcesSearchAds360Field != nil {
        // handle response
    }
}
```

## Searchads360SearchAds360FieldsSearch

Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

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
    res, err := s.SearchAds360Fields.Searchads360SearchAds360FieldsSearch(ctx, operations.Searchads360SearchAds360FieldsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest: &shared.GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest{
            PageSize: sdk.Int(720633),
            PageToken: sdk.String("officia"),
            Query: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("fugit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.Searchads360SearchAds360FieldsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse != nil {
        // handle response
    }
}
```
