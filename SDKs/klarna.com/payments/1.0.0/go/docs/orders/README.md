# Orders

### Available Operations

* [CancelAuthorization](#cancelauthorization) - Cancel an existing authorization
* [CreateOrder](#createorder) - Create a new order
* [PurchaseToken](#purchasetoken) - Generate a consumer token

## CancelAuthorization

Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.
Read more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.

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
    res, err := s.Orders.CancelAuthorization(ctx, operations.CancelAuthorizationRequest{
        AuthorizationToken: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateOrder

Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).
Read more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.

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
    res, err := s.Orders.CreateOrder(ctx, operations.CreateOrderRequest{
        AuthorizationToken: "distinctio",
        CreateOrderRequestInput: &shared.CreateOrderRequestInput{
            AutoCapture: sdk.Bool(false),
            BillingAddress: &shared.Address{
                Attention: sdk.String("Attn"),
                City: sdk.String("London"),
                Country: sdk.String("GB"),
                Email: sdk.String("test.sam@test.com"),
                FamilyName: sdk.String("Andersson"),
                GivenName: sdk.String("Adam"),
                OrganizationName: sdk.String("quibusdam"),
                Phone: sdk.String("+44795465131"),
                PostalCode: sdk.String("W1G 0PW"),
                Region: sdk.String("OH"),
                StreetAddress: sdk.String("33 Cavendish Square"),
                StreetAddress2: sdk.String("Floor 22 / Flat 2"),
                Title: sdk.String("Mr."),
            },
            CustomPaymentMethodIds: []string{
                "nulla",
                "corrupti",
                "illum",
            },
            Customer: &shared.Customer{
                DateOfBirth: sdk.String("1978-12-31"),
                Gender: sdk.String("male"),
                LastFourSsn: sdk.String("vel"),
                NationalIdentificationNumber: sdk.String("error"),
                OrganizationEntityType: shared.CustomerOrganizationEntityTypeEnumSoleTrader.ToPointer(),
                OrganizationRegistrationID: sdk.String("suscipit"),
                Title: sdk.String("Mr."),
                Type: sdk.String("organization"),
                VatID: sdk.String("iure"),
            },
            Locale: sdk.String("en-GB"),
            MerchantData: sdk.String("{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}"),
            MerchantReference1: sdk.String("ON4711"),
            MerchantReference2: sdk.String("hdt53h-zdgg6-hdaff2"),
            MerchantUrls: &shared.MerchantUrls{
                Authorization: sdk.String("https://www.example-url.com/authorization"),
                Confirmation: sdk.String("https://www.example-url.com/confirmation"),
                Notification: sdk.String("https://www.example-url.com/notification"),
                Push: sdk.String("https://www.example-url.com/push"),
            },
            OrderAmount: 2500,
            OrderLines: []shared.OrderLine{
                shared.OrderLine{
                    ImageURL: sdk.String("https://www.exampleobjects.com/logo.png"),
                    MerchantData: sdk.String("{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}"),
                    Name: "Running shoe",
                    ProductIdentifiers: &shared.ProductIdentifiers{
                        Brand: sdk.String("shoe-brand"),
                        CategoryPath: sdk.String("Shoes > Running"),
                        Color: sdk.String("white"),
                        GlobalTradeItemNumber: sdk.String("4912345678904"),
                        ManufacturerPartNumber: sdk.String("AD6654412-334.22"),
                        Size: sdk.String("small"),
                    },
                    ProductURL: sdk.String("https://.../AD6654412.html"),
                    Quantity: 1,
                    QuantityUnit: sdk.String("pcs"),
                    Reference: sdk.String("AD6654412"),
                    Subscription: &shared.Subscription{
                        Interval: shared.SubscriptionIntervalEnumYear,
                        IntervalCount: 56713,
                        Name: "Ricky Hoppe",
                    },
                    TaxRate: sdk.Int64(1900),
                    TotalAmount: 2500,
                    TotalDiscountAmount: sdk.Int64(500),
                    TotalTaxAmount: sdk.Int64(475),
                    Type: sdk.String("physical"),
                    UnitPrice: 2500,
                },
                shared.OrderLine{
                    ImageURL: sdk.String("https://www.exampleobjects.com/logo.png"),
                    MerchantData: sdk.String("{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}"),
                    Name: "Running shoe",
                    ProductIdentifiers: &shared.ProductIdentifiers{
                        Brand: sdk.String("shoe-brand"),
                        CategoryPath: sdk.String("Shoes > Running"),
                        Color: sdk.String("white"),
                        GlobalTradeItemNumber: sdk.String("4912345678904"),
                        ManufacturerPartNumber: sdk.String("AD6654412-334.22"),
                        Size: sdk.String("small"),
                    },
                    ProductURL: sdk.String("https://.../AD6654412.html"),
                    Quantity: 1,
                    QuantityUnit: sdk.String("pcs"),
                    Reference: sdk.String("AD6654412"),
                    Subscription: &shared.Subscription{
                        Interval: shared.SubscriptionIntervalEnumYear,
                        IntervalCount: 528895,
                        Name: "Miriam Huel",
                    },
                    TaxRate: sdk.Int64(1900),
                    TotalAmount: 2500,
                    TotalDiscountAmount: sdk.Int64(500),
                    TotalTaxAmount: sdk.Int64(475),
                    Type: sdk.String("physical"),
                    UnitPrice: 2500,
                },
            },
            OrderTaxAmount: sdk.Int64(475),
            PurchaseCountry: "GB",
            PurchaseCurrency: "GBP",
            ShippingAddress: &shared.Address{
                Attention: sdk.String("Attn"),
                City: sdk.String("London"),
                Country: sdk.String("GB"),
                Email: sdk.String("test.sam@test.com"),
                FamilyName: sdk.String("Andersson"),
                GivenName: sdk.String("Adam"),
                OrganizationName: sdk.String("ab"),
                Phone: sdk.String("+44795465131"),
                PostalCode: sdk.String("W1G 0PW"),
                Region: sdk.String("OH"),
                StreetAddress: sdk.String("33 Cavendish Square"),
                StreetAddress2: sdk.String("Floor 22 / Flat 2"),
                Title: sdk.String("Mr."),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Order != nil {
        // handle response
    }
}
```

## PurchaseToken

Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.
Read more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.

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
    res, err := s.Orders.PurchaseToken(ctx, operations.PurchaseTokenRequest{
        AuthorizationToken: "quis",
        CustomerTokenCreationRequest: &shared.CustomerTokenCreationRequest{
            BillingAddress: &shared.Address{
                Attention: sdk.String("Attn"),
                City: sdk.String("London"),
                Country: sdk.String("GB"),
                Email: sdk.String("test.sam@test.com"),
                FamilyName: sdk.String("Andersson"),
                GivenName: sdk.String("Adam"),
                OrganizationName: sdk.String("veritatis"),
                Phone: sdk.String("+44795465131"),
                PostalCode: sdk.String("W1G 0PW"),
                Region: sdk.String("OH"),
                StreetAddress: sdk.String("33 Cavendish Square"),
                StreetAddress2: sdk.String("Floor 22 / Flat 2"),
                Title: sdk.String("Mr."),
            },
            Customer: &shared.Customer{
                DateOfBirth: sdk.String("1978-12-31"),
                Gender: sdk.String("male"),
                LastFourSsn: sdk.String("deserunt"),
                NationalIdentificationNumber: sdk.String("perferendis"),
                OrganizationEntityType: shared.CustomerOrganizationEntityTypeEnumLimitedPartnership.ToPointer(),
                OrganizationRegistrationID: sdk.String("repellendus"),
                Title: sdk.String("Mr."),
                Type: sdk.String("organization"),
                VatID: sdk.String("sapiente"),
            },
            Description: "quo",
            IntendedUse: shared.CustomerTokenCreationRequestIntendedUseEnumSubscription,
            Locale: "en-GB",
            PurchaseCountry: "GB",
            PurchaseCurrency: "GBP",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerTokenCreationResponse != nil {
        // handle response
    }
}
```
