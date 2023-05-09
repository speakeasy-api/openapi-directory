# Sessions

### Available Operations

* [CreateCreditSession](#createcreditsession) - Create a new payment session
* [ReadCreditSession](#readcreditsession) - Read an existing payment session
* [UpdateCreditSession](#updatecreditsession) - Update an existing payment session

## CreateCreditSession

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.
Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Sessions.CreateCreditSession(ctx, shared.SessionCreateInput{
        AcquiringChannel: shared.SessionCreateAcquiringChannelEnumEcommerce.ToPointer(),
        Attachment: &shared.Attachment{
            Body: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
            ContentType: "application/vnd.klarna.internal.emd-v2+json",
        },
        BillingAddress: &shared.Address{
            Attention: sdk.String("Attn"),
            City: sdk.String("London"),
            Country: sdk.String("GB"),
            Email: sdk.String("test.sam@test.com"),
            FamilyName: sdk.String("Andersson"),
            GivenName: sdk.String("Adam"),
            OrganizationName: sdk.String("odit"),
            Phone: sdk.String("+44795465131"),
            PostalCode: sdk.String("W1G 0PW"),
            Region: sdk.String("OH"),
            StreetAddress: sdk.String("33 Cavendish Square"),
            StreetAddress2: sdk.String("Floor 22 / Flat 2"),
            Title: sdk.String("Mr."),
        },
        CustomPaymentMethodIds: []string{
            "at",
            "maiores",
            "molestiae",
            "quod",
        },
        Customer: &shared.Customer{
            DateOfBirth: sdk.String("1978-12-31"),
            Gender: sdk.String("male"),
            LastFourSsn: sdk.String("quod"),
            NationalIdentificationNumber: sdk.String("esse"),
            OrganizationEntityType: shared.CustomerOrganizationEntityTypeEnumGeneralPartnership.ToPointer(),
            OrganizationRegistrationID: sdk.String("porro"),
            Title: sdk.String("Mr."),
            Type: sdk.String("organization"),
            VatID: sdk.String("dolorum"),
        },
        Design: sdk.String("dicta"),
        Intent: shared.SessionCreateIntentEnumBuy.ToPointer(),
        Locale: sdk.String("en-US"),
        MerchantData: sdk.String("{"order_specific":[{"substore":"Women's Fashion","product_name":"Women Sweatshirt"}]}"),
        MerchantReference1: sdk.String("ON4711"),
        MerchantReference2: sdk.String("hdt53h-zdgg6-hdaff2"),
        MerchantUrls: &shared.MerchantUrls{
            Authorization: sdk.String("https://www.example-url.com/authorization"),
            Confirmation: sdk.String("https://www.example-url.com/confirmation"),
            Notification: sdk.String("https://www.example-url.com/notification"),
            Push: sdk.String("https://www.example-url.com/push"),
        },
        Options: &shared.Options{
            ColorBorder: sdk.String("#FF9900"),
            ColorBorderSelected: sdk.String("#FF9900"),
            ColorDetails: sdk.String("#FF9900"),
            ColorText: sdk.String("#FF9900"),
            RadiusBorder: sdk.String("5px"),
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
                    Interval: shared.SubscriptionIntervalEnumMonth,
                    IntervalCount: 582020,
                    Name: "Cassandra Welch",
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
                    Interval: shared.SubscriptionIntervalEnumDay,
                    IntervalCount: 414662,
                    Name: "Pauline Dibbert",
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
                    Interval: shared.SubscriptionIntervalEnumWeek,
                    IntervalCount: 216550,
                    Name: "Brandon Auer",
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
            OrganizationName: sdk.String("sed"),
            Phone: sdk.String("+44795465131"),
            PostalCode: sdk.String("W1G 0PW"),
            Region: sdk.String("OH"),
            StreetAddress: sdk.String("33 Cavendish Square"),
            StreetAddress2: sdk.String("Floor 22 / Flat 2"),
            Title: sdk.String("Mr."),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MerchantSession != nil {
        // handle response
    }
}
```

## ReadCreditSession

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.
Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

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
    res, err := s.Sessions.ReadCreditSession(ctx, operations.ReadCreditSessionRequest{
        SessionID: "iste",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionRead != nil {
        // handle response
    }
}
```

## UpdateCreditSession

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.
Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

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
    res, err := s.Sessions.UpdateCreditSession(ctx, operations.UpdateCreditSessionRequest{
        SessionInput: shared.SessionInput{
            AcquiringChannel: shared.SessionAcquiringChannelEnumEcommerce.ToPointer(),
            Attachment: &shared.Attachment{
                Body: "{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}",
                ContentType: "application/vnd.klarna.internal.emd-v2+json",
            },
            BillingAddress: &shared.Address{
                Attention: sdk.String("Attn"),
                City: sdk.String("London"),
                Country: sdk.String("GB"),
                Email: sdk.String("test.sam@test.com"),
                FamilyName: sdk.String("Andersson"),
                GivenName: sdk.String("Adam"),
                OrganizationName: sdk.String("dolor"),
                Phone: sdk.String("+44795465131"),
                PostalCode: sdk.String("W1G 0PW"),
                Region: sdk.String("OH"),
                StreetAddress: sdk.String("33 Cavendish Square"),
                StreetAddress2: sdk.String("Floor 22 / Flat 2"),
                Title: sdk.String("Mr."),
            },
            CustomPaymentMethodIds: []string{
                "laboriosam",
                "hic",
                "saepe",
            },
            Customer: &shared.Customer{
                DateOfBirth: sdk.String("1978-12-31"),
                Gender: sdk.String("male"),
                LastFourSsn: sdk.String("fuga"),
                NationalIdentificationNumber: sdk.String("in"),
                OrganizationEntityType: shared.CustomerOrganizationEntityTypeEnumLimitedPartnershipLimitedCompany.ToPointer(),
                OrganizationRegistrationID: sdk.String("iste"),
                Title: sdk.String("Mr."),
                Type: sdk.String("organization"),
                VatID: sdk.String("iure"),
            },
            Design: sdk.String("saepe"),
            Intent: shared.SessionIntentEnumBuy.ToPointer(),
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
            Options: &shared.Options{
                ColorBorder: sdk.String("#FF9900"),
                ColorBorderSelected: sdk.String("#FF9900"),
                ColorDetails: sdk.String("#FF9900"),
                ColorText: sdk.String("#FF9900"),
                RadiusBorder: sdk.String("5px"),
            },
            OrderAmount: sdk.Int64(2500),
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
                        Interval: shared.SubscriptionIntervalEnumDay,
                        IntervalCount: 60225,
                        Name: "Carlton O'Hara",
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
                        Interval: shared.SubscriptionIntervalEnumDay,
                        IntervalCount: 358152,
                        Name: "Della Halvorson",
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
                        Interval: shared.SubscriptionIntervalEnumWeek,
                        IntervalCount: 570197,
                        Name: "Charlene Nicolas",
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
            PurchaseCountry: sdk.String("GB"),
            PurchaseCurrency: sdk.String("GBP"),
            ShippingAddress: &shared.Address{
                Attention: sdk.String("Attn"),
                City: sdk.String("London"),
                Country: sdk.String("GB"),
                Email: sdk.String("test.sam@test.com"),
                FamilyName: sdk.String("Andersson"),
                GivenName: sdk.String("Adam"),
                OrganizationName: sdk.String("architecto"),
                Phone: sdk.String("+44795465131"),
                PostalCode: sdk.String("W1G 0PW"),
                Region: sdk.String("OH"),
                StreetAddress: sdk.String("33 Cavendish Square"),
                StreetAddress2: sdk.String("Floor 22 / Flat 2"),
                Title: sdk.String("Mr."),
            },
        },
        SessionID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
