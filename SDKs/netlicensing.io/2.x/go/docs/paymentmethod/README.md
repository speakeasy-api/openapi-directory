# PaymentMethod

## Overview

Payment Method operations

Payment Method Services
<https://netlicensing.io/wiki/payment-method-services>
### Available Operations

* [GetPaymentMethod](#getpaymentmethod) - Get Payment Method
* [ListPaymentMethods](#listpaymentmethods) - List Payment Methods
* [UpdatePaymentMethod](#updatepaymentmethod) - Update Payment Method

## GetPaymentMethod

Return a Payment Method info by 'paymentMethodNumber'

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
    res, err := s.PaymentMethod.GetPaymentMethod(ctx, operations.GetPaymentMethodRequest{
        PaymentMethodNumber: "culpa",
    }, operations.GetPaymentMethodSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ListPaymentMethods

Return a list of all Payment Methods for the current Vendor

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
    res, err := s.PaymentMethod.ListPaymentMethods(ctx, operations.ListPaymentMethodsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```

## UpdatePaymentMethod

Sets the provided properties to a Payment Method. Return an updated Payment Method

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
    res, err := s.PaymentMethod.UpdatePaymentMethod(ctx, operations.UpdatePaymentMethodRequest{
        RequestBody: &operations.UpdatePaymentMethodRequestBody{
            Active: sdk.Bool(false),
            PaypalSubject: sdk.String("consequuntur"),
        },
        PaymentMethodNumber: "repellat",
    }, operations.UpdatePaymentMethodSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
