# Payment

### Available Operations

* [DeleteCreditCard](#deletecreditcard) - Delete credit card
* [GetCreditCard](#getcreditcard) - View saved credit card
* [ResetCardPaymentCode](#resetcardpaymentcode) - Reset credit card payment code
* [ResetCorporatePaymentCode](#resetcorporatepaymentcode) - Reset payment code
* [ToggleCorporateAutoCharge](#togglecorporateautocharge) - Manage automatic charges on your credit card

## DeleteCreditCard

Delete credit card

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.DeleteCreditCard(ctx, operations.DeleteCreditCardRequest{
        CardID: 209157,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```

## GetCreditCard

View saved credit card

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.GetCreditCard(ctx, operations.GetCreditCardRequest{
        CardID: 292147,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditCard != nil {
        // handle response
    }
}
```

## ResetCardPaymentCode

Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.ResetCardPaymentCode(ctx, operations.ResetCardPaymentCodeRequest{
        CardID: 286915,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditCard != nil {
        // handle response
    }
}
```

## ResetCorporatePaymentCode

Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.ResetCorporatePaymentCode(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreditCard != nil {
        // handle response
    }
}
```

## ToggleCorporateAutoCharge

Toggle (enable/disable) automatic charges on the credit card on file.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Payment.ToggleCorporateAutoCharge(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
