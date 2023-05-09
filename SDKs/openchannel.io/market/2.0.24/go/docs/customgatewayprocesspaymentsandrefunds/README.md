# CustomGatewayProcessPaymentsAndRefunds

### Available Operations

* [PostCustomGatewayPaymentOwnershipID](#postcustomgatewaypaymentownershipid) - Adds a payment for an app on behalf of a user
* [PostCustomGatewayRefundOwnershipID](#postcustomgatewayrefundownershipid) - Fully or partially refund payment for an app on behalf of a user

## PostCustomGatewayPaymentOwnershipID

- Results are returned for the market provided within the basic authentication credentials 
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomGatewayProcessPaymentsAndRefunds.PostCustomGatewayPaymentOwnershipID(ctx, operations.PostCustomGatewayPaymentOwnershipIDRequest{
        Amount: 969810,
        CustomData: sdk.String("est"),
        Date: sdk.Int64(653140),
        DeveloperAmount: sdk.Int64(670638),
        FeeAmount: sdk.Int64(170909),
        MarketplaceAmount: sdk.Int64(210382),
        OwnershipID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostCustomGatewayRefundOwnershipID

- Results are returned for the market provided within the basic authentication credentials
- Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CustomGatewayProcessPaymentsAndRefunds.PostCustomGatewayRefundOwnershipID(ctx, operations.PostCustomGatewayRefundOwnershipIDRequest{
        Amount: 128926,
        CustomData: sdk.String("nobis"),
        Date: sdk.Int64(315428),
        DeveloperAmount: sdk.Int64(607831),
        FeeAmount: sdk.Int64(363711),
        MarketplaceAmount: sdk.Int64(325047),
        OwnershipID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
