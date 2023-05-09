# DomesticStandingOrders

### Available Operations

* [CreateDomesticStandingOrderConsentsJSON](#createdomesticstandingorderconsentsjson) - Create Domestic Standing Order Consents
* [CreateDomesticStandingOrderConsentsRaw](#createdomesticstandingorderconsentsraw) - Create Domestic Standing Order Consents
* [CreateDomesticStandingOrdersJSON](#createdomesticstandingordersjson) - Create Domestic Standing Orders
* [CreateDomesticStandingOrdersRaw](#createdomesticstandingordersraw) - Create Domestic Standing Orders
* [GetDomesticStandingOrderConsentsConsentID](#getdomesticstandingorderconsentsconsentid) - Get Domestic Standing Order Consents
* [GetDomesticStandingOrdersDomesticStandingOrderID](#getdomesticstandingordersdomesticstandingorderid) - Get Domestic Standing Orders

## CreateDomesticStandingOrderConsentsJSON

Create Domestic Standing Order Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomesticStandingOrders.CreateDomesticStandingOrderConsentsJSON(ctx, operations.CreateDomesticStandingOrderConsentsJSONRequest{
        Authorization: "quam",
        OBWriteDomesticStandingOrderConsent5: shared.OBWriteDomesticStandingOrderConsent5{
            Data: shared.OBWriteDomesticStandingOrderConsent5Data{
                Authorisation: &shared.OBWriteDomesticStandingOrderConsent5DataAuthorisation{
                    AuthorisationType: shared.OBWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnumAny,
                    CompletionDateTime: types.MustTimeFromString("2022-10-24T22:37:32.805Z"),
                },
                Initiation: shared.OBWriteDomesticStandingOrderConsent5DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount{
                        Identification: "cupiditate",
                        Name: "Miss Jody Rogahn",
                        SchemeName: "incidunt",
                        SecondaryIdentification: sdk.String("aspernatur"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount{
                        Identification: "dolores",
                        Name: sdk.String("Cesar Hyatt"),
                        SchemeName: "temporibus",
                        SecondaryIdentification: sdk.String("qui"),
                    },
                    FinalPaymentAmount: &shared.OBWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount{
                        Amount: "neque",
                        Currency: "fugit",
                    },
                    FinalPaymentDateTime: types.MustTimeFromString("2022-07-06T20:37:36.497Z"),
                    FirstPaymentAmount: shared.OBWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount{
                        Amount: "sunt",
                        Currency: "ullam",
                    },
                    FirstPaymentDateTime: types.MustTimeFromString("2021-02-13T11:37:55.892Z"),
                    Frequency: "voluptatem",
                    NumberOfPayments: sdk.String("cumque"),
                    RecurringPaymentAmount: &shared.OBWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount{
                        Amount: "soluta",
                        Currency: "nobis",
                    },
                    RecurringPaymentDateTime: types.MustTimeFromString("2022-02-05T03:24:54.198Z"),
                    Reference: sdk.String("ipsum"),
                    SupplementaryData: map[string]interface{}{
                        "nobis": "quos",
                    },
                },
                Permission: shared.OBWriteDomesticStandingOrderConsent5DataPermissionEnumCreate,
                ReadRefundAccount: shared.OBWriteDomesticStandingOrderConsent5DataReadRefundAccountEnumYes.ToPointer(),
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumSca.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("aperiam"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumPartyToParty.ToPointer(),
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "dolore",
                    },
                    BuildingNumber: sdk.String("labore"),
                    Country: "Dominica",
                    CountrySubDivision: sdk.String("dolorum"),
                    PostCode: sdk.String("00590"),
                    StreetName: sdk.String("est"),
                    TownName: "repellendus",
                },
                MerchantCategoryCode: sdk.String("porro"),
                MerchantCustomerIdentification: sdk.String("doloribus"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumEcommerceGoods.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("facilis"),
        XFapiAuthDate: sdk.String("cupiditate"),
        XFapiCustomerIPAddress: sdk.String("qui"),
        XFapiInteractionID: sdk.String("quae"),
        XIdempotencyKey: "laudantium",
        XJwsSignature: "odio",
    }, operations.CreateDomesticStandingOrderConsentsJSONSecurity{
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

## CreateDomesticStandingOrderConsentsRaw

Create Domestic Standing Order Consents

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomesticStandingOrders.CreateDomesticStandingOrderConsentsRaw(ctx, operations.CreateDomesticStandingOrderConsentsRawRequest{
        Authorization: "occaecati",
        RequestBody: []byte("voluptatibus"),
        XCustomerUserAgent: sdk.String("quisquam"),
        XFapiAuthDate: sdk.String("vero"),
        XFapiCustomerIPAddress: sdk.String("omnis"),
        XFapiInteractionID: sdk.String("quis"),
        XIdempotencyKey: "ipsum",
        XJwsSignature: "delectus",
    }, operations.CreateDomesticStandingOrderConsentsRawSecurity{
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

## CreateDomesticStandingOrdersJSON

Create Domestic Standing Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomesticStandingOrders.CreateDomesticStandingOrdersJSON(ctx, operations.CreateDomesticStandingOrdersJSONRequest{
        Authorization: "voluptate",
        OBWriteDomesticStandingOrder3: shared.OBWriteDomesticStandingOrder3{
            Data: shared.OBWriteDomesticStandingOrder3Data{
                ConsentID: "consectetur",
                Initiation: shared.OBWriteDomesticStandingOrder3DataInitiation{
                    CreditorAccount: shared.OBWriteDomesticStandingOrder3DataInitiationCreditorAccount{
                        Identification: "vero",
                        Name: "Julio Weissnat",
                        SchemeName: "odio",
                        SecondaryIdentification: sdk.String("similique"),
                    },
                    DebtorAccount: &shared.OBWriteDomesticStandingOrder3DataInitiationDebtorAccount{
                        Identification: "facilis",
                        Name: sdk.String("Allan Greenholt"),
                        SchemeName: "sequi",
                        SecondaryIdentification: sdk.String("natus"),
                    },
                    FinalPaymentAmount: &shared.OBWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount{
                        Amount: "impedit",
                        Currency: "aut",
                    },
                    FinalPaymentDateTime: types.MustTimeFromString("2021-12-16T18:42:11.269Z"),
                    FirstPaymentAmount: shared.OBWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount{
                        Amount: "nulla",
                        Currency: "fugit",
                    },
                    FirstPaymentDateTime: types.MustTimeFromString("2020-01-21T21:31:25.345Z"),
                    Frequency: "doloribus",
                    NumberOfPayments: sdk.String("iusto"),
                    RecurringPaymentAmount: &shared.OBWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount{
                        Amount: "eligendi",
                        Currency: "ducimus",
                    },
                    RecurringPaymentDateTime: types.MustTimeFromString("2022-05-12T14:13:14.359Z"),
                    Reference: sdk.String("tempora"),
                    SupplementaryData: map[string]interface{}{
                        "ea": "aspernatur",
                        "vel": "possimus",
                    },
                },
            },
            Risk: shared.OBRisk1{
                DeliveryAddress: &shared.OBRisk1DeliveryAddress{
                    AddressLine: []string{
                        "ratione",
                        "ex",
                    },
                    BuildingNumber: sdk.String("laudantium"),
                    Country: "Brazil",
                    CountrySubDivision: sdk.String("dolor"),
                    PostCode: sdk.String("04859-3979"),
                    StreetName: sdk.String("ea"),
                    TownName: "impedit",
                },
                MerchantCategoryCode: sdk.String("corporis"),
                MerchantCustomerIdentification: sdk.String("veniam"),
                PaymentContextCode: shared.OBRisk1PaymentContextCodeEnumEcommerceGoods.ToPointer(),
            },
        },
        XCustomerUserAgent: sdk.String("inventore"),
        XFapiAuthDate: sdk.String("magnam"),
        XFapiCustomerIPAddress: sdk.String("ea"),
        XFapiInteractionID: sdk.String("quo"),
        XIdempotencyKey: "consectetur",
        XJwsSignature: "recusandae",
    }, operations.CreateDomesticStandingOrdersJSONSecurity{
        PSUOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateDomesticStandingOrdersRaw

Create Domestic Standing Orders

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.DomesticStandingOrders.CreateDomesticStandingOrdersRaw(ctx, operations.CreateDomesticStandingOrdersRawRequest{
        Authorization: "aspernatur",
        RequestBody: []byte("minima"),
        XCustomerUserAgent: sdk.String("eaque"),
        XFapiAuthDate: sdk.String("a"),
        XFapiCustomerIPAddress: sdk.String("libero"),
        XFapiInteractionID: sdk.String("aut"),
        XIdempotencyKey: "aut",
        XJwsSignature: "deleniti",
    }, operations.CreateDomesticStandingOrdersRawSecurity{
        PSUOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDomesticStandingOrderConsentsConsentID

Get Domestic Standing Order Consents

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
    res, err := s.DomesticStandingOrders.GetDomesticStandingOrderConsentsConsentID(ctx, operations.GetDomesticStandingOrderConsentsConsentIDRequest{
        Authorization: "impedit",
        ConsentID: "aliquam",
        XCustomerUserAgent: sdk.String("fugit"),
        XFapiAuthDate: sdk.String("accusamus"),
        XFapiCustomerIPAddress: sdk.String("inventore"),
        XFapiInteractionID: sdk.String("non"),
    }, operations.GetDomesticStandingOrderConsentsConsentIDSecurity{
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

## GetDomesticStandingOrdersDomesticStandingOrderID

Get Domestic Standing Orders

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
    res, err := s.DomesticStandingOrders.GetDomesticStandingOrdersDomesticStandingOrderID(ctx, operations.GetDomesticStandingOrdersDomesticStandingOrderIDRequest{
        Authorization: "et",
        DomesticStandingOrderID: "dolorum",
        XCustomerUserAgent: sdk.String("laborum"),
        XFapiAuthDate: sdk.String("placeat"),
        XFapiCustomerIPAddress: sdk.String("velit"),
        XFapiInteractionID: sdk.String("eum"),
    }, operations.GetDomesticStandingOrdersDomesticStandingOrderIDSecurity{
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
