# Merchants

### Available Operations

* [ListMerchants](#listmerchants) - ListMerchants
* [RetrieveMerchant](#retrievemerchant) - RetrieveMerchant

## ListMerchants

Returns `Merchant` information for a given access token.

If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
You can specify your personal access token to get your own merchant information or specify an OAuth token
to get the information for the  merchant that granted you access.

If you know the merchant ID, you can also use the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant)
endpoint to get the merchant information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Merchants.ListMerchants(ctx, operations.ListMerchantsRequest{
        Cursor: sdk.Int64(304459),
    }, operations.ListMerchantsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListMerchantsResponse != nil {
        // handle response
    }
}
```

## RetrieveMerchant

Retrieve a `Merchant` object for the given `merchant_id`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Merchants.RetrieveMerchant(ctx, operations.RetrieveMerchantRequest{
        MerchantID: "natus",
    }, operations.RetrieveMerchantSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveMerchantResponse != nil {
        // handle response
    }
}
```
