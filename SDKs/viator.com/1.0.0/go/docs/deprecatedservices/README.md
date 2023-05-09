# DeprecatedServices

## Overview

Deprecated services

### Available Operations

* [~~MerchantCancellation~~](#merchantcancellation) - /merchant/cancellation :warning: **Deprecated**

## ~~MerchantCancellation~~

Cancel a booking
**Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.DeprecatedServices.MerchantCancellation(ctx, operations.MerchantCancellationRequest{
        AcceptLanguage: "en-US",
        RequestBody: &operations.MerchantCancellationRequestBody{
            CancelItems: []MerchantCancellationRequestBodyCancelItems{
                operations.MerchantCancellationRequestBodyCancelItems{
                    CancelCode: sdk.String("82"),
                    CancelDescription: sdk.String("non"),
                    DistributorItemRef: sdk.String("JdpItin001"),
                    ItemID: sdk.Int64(330056),
                },
                operations.MerchantCancellationRequestBodyCancelItems{
                    CancelCode: sdk.String("82"),
                    CancelDescription: sdk.String("eligendi"),
                    DistributorItemRef: sdk.String("JdpItin001"),
                    ItemID: sdk.Int64(330056),
                },
            },
            DistributorRef: sdk.String("Jdp122"),
            ItineraryID: sdk.Int64(1234655),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MerchantCancellation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
