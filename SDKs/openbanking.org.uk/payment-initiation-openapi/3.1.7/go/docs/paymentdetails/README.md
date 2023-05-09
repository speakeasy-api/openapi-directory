# PaymentDetails

### Available Operations

* [GetDomesticPaymentsDomesticPaymentIDPaymentDetails](#getdomesticpaymentsdomesticpaymentidpaymentdetails) - Get Payment Details
* [GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails](#getdomesticscheduledpaymentsdomesticscheduledpaymentidpaymentdetails) - Get Payment Details
* [GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails](#getdomesticstandingordersdomesticstandingorderidpaymentdetails) - Get Payment Details
* [GetFilePaymentsFilePaymentIDPaymentDetails](#getfilepaymentsfilepaymentidpaymentdetails) - Get Payment Details
* [GetInternationalPaymentsInternationalPaymentIDPaymentDetails](#getinternationalpaymentsinternationalpaymentidpaymentdetails) - Get Payment Details
* [GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails](#getinternationalscheduledpaymentsinternationalscheduledpaymentidpaymentdetails) - Get Payment Details
* [GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails](#getinternationalstandingordersinternationalstandingorderpaymentidpaymentdetails) - Get Payment Details

## GetDomesticPaymentsDomesticPaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetDomesticPaymentsDomesticPaymentIDPaymentDetails(ctx, operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsRequest{
        Authorization: "ut",
        DomesticPaymentID: "perspiciatis",
        XCustomerUserAgent: sdk.String("earum"),
        XFapiAuthDate: sdk.String("dicta"),
        XFapiCustomerIPAddress: sdk.String("impedit"),
        XFapiInteractionID: sdk.String("voluptatibus"),
    }, operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetails(ctx, operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsRequest{
        Authorization: "iste",
        DomesticScheduledPaymentID: "itaque",
        XCustomerUserAgent: sdk.String("alias"),
        XFapiAuthDate: sdk.String("nisi"),
        XFapiCustomerIPAddress: sdk.String("itaque"),
        XFapiInteractionID: sdk.String("velit"),
    }, operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetails(ctx, operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsRequest{
        Authorization: "laborum",
        DomesticStandingOrderID: "non",
        XCustomerUserAgent: sdk.String("dolor"),
        XFapiAuthDate: sdk.String("iusto"),
        XFapiCustomerIPAddress: sdk.String("sit"),
        XFapiInteractionID: sdk.String("doloremque"),
    }, operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFilePaymentsFilePaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetFilePaymentsFilePaymentIDPaymentDetails(ctx, operations.GetFilePaymentsFilePaymentIDPaymentDetailsRequest{
        Authorization: "consequatur",
        FilePaymentID: "officia",
        XCustomerUserAgent: sdk.String("recusandae"),
        XFapiAuthDate: sdk.String("ea"),
        XFapiCustomerIPAddress: sdk.String("quidem"),
        XFapiInteractionID: sdk.String("voluptas"),
    }, operations.GetFilePaymentsFilePaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInternationalPaymentsInternationalPaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetInternationalPaymentsInternationalPaymentIDPaymentDetails(ctx, operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsRequest{
        Authorization: "facilis",
        InternationalPaymentID: "placeat",
        XCustomerUserAgent: sdk.String("perspiciatis"),
        XFapiAuthDate: sdk.String("expedita"),
        XFapiCustomerIPAddress: sdk.String("deleniti"),
        XFapiInteractionID: sdk.String("a"),
    }, operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetails(ctx, operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsRequest{
        Authorization: "voluptate",
        InternationalScheduledPaymentID: "ullam",
        XCustomerUserAgent: sdk.String("unde"),
        XFapiAuthDate: sdk.String("necessitatibus"),
        XFapiCustomerIPAddress: sdk.String("animi"),
        XFapiInteractionID: sdk.String("impedit"),
    }, operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails

Get Payment Details

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
    res, err := s.PaymentDetails.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetails(ctx, operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsRequest{
        Authorization: "ipsam",
        InternationalStandingOrderPaymentID: "corporis",
        XCustomerUserAgent: sdk.String("est"),
        XFapiAuthDate: sdk.String("error"),
        XFapiCustomerIPAddress: sdk.String("esse"),
        XFapiInteractionID: sdk.String("labore"),
    }, operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
