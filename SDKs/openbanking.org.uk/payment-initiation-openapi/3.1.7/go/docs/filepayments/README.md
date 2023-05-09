# FilePayments

### Available Operations

* [CreateFilePaymentConsentsConsentIDFileJSON](#createfilepaymentconsentsconsentidfilejson) - Create File Payment Consents
* [CreateFilePaymentConsentsConsentIDFileRaw](#createfilepaymentconsentsconsentidfileraw) - Create File Payment Consents
* [CreateFilePaymentConsentsJSON](#createfilepaymentconsentsjson) - Create File Payment Consents
* [CreateFilePaymentConsentsRaw](#createfilepaymentconsentsraw) - Create File Payment Consents
* [CreateFilePaymentsJSON](#createfilepaymentsjson) - Create File Payments
* [CreateFilePaymentsRaw](#createfilepaymentsraw) - Create File Payments
* [GetFilePaymentConsentsConsentID](#getfilepaymentconsentsconsentid) - Get File Payment Consents
* [GetFilePaymentConsentsConsentIDFile](#getfilepaymentconsentsconsentidfile) - Get File Payment Consents
* [GetFilePaymentsFilePaymentID](#getfilepaymentsfilepaymentid) - Get File Payments
* [GetFilePaymentsFilePaymentIDReportFile](#getfilepaymentsfilepaymentidreportfile) - Get File Payments

## CreateFilePaymentConsentsConsentIDFileJSON

Create File Payment Consents

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
    res, err := s.FilePayments.CreateFilePaymentConsentsConsentIDFileJSON(ctx, operations.CreateFilePaymentConsentsConsentIDFileJSONRequest{
        Authorization: "autem",
        ConsentID: "nobis",
        RequestBody: map[string]interface{}{
            "assumenda": "nulla",
            "voluptas": "libero",
            "quasi": "tempora",
        },
        XCustomerUserAgent: sdk.String("numquam"),
        XFapiAuthDate: sdk.String("explicabo"),
        XFapiCustomerIPAddress: sdk.String("provident"),
        XFapiInteractionID: sdk.String("ipsa"),
        XIdempotencyKey: "molestiae",
        XJwsSignature: "magnam",
    }, operations.CreateFilePaymentConsentsConsentIDFileJSONSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateFilePaymentConsentsConsentIDFileRaw

Create File Payment Consents

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
    res, err := s.FilePayments.CreateFilePaymentConsentsConsentIDFileRaw(ctx, operations.CreateFilePaymentConsentsConsentIDFileRawRequest{
        Authorization: "odio",
        ConsentID: "eius",
        RequestBody: []byte("esse"),
        XCustomerUserAgent: sdk.String("esse"),
        XFapiAuthDate: sdk.String("rem"),
        XFapiCustomerIPAddress: sdk.String("fuga"),
        XFapiInteractionID: sdk.String("reprehenderit"),
        XIdempotencyKey: "quidem",
        XJwsSignature: "fugiat",
    }, operations.CreateFilePaymentConsentsConsentIDFileRawSecurity{
        TPPOAuth2Security: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateFilePaymentConsentsJSON

Create File Payment Consents

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
    res, err := s.FilePayments.CreateFilePaymentConsentsJSON(ctx, operations.CreateFilePaymentConsentsJSONRequest{
        Authorization: "ut",
        OBWriteFileConsent3: shared.OBWriteFileConsent3{
            Data: shared.OBWriteFileConsent3Data{
                Authorisation: &shared.OBWriteFileConsent3DataAuthorisation{
                    AuthorisationType: shared.OBWriteFileConsent3DataAuthorisationAuthorisationTypeEnumAny,
                    CompletionDateTime: types.MustTimeFromString("2022-03-05T04:36:55.913Z"),
                },
                Initiation: shared.OBWriteFileConsent3DataInitiation{
                    ControlSum: sdk.Float64(1811.51),
                    DebtorAccount: &shared.OBWriteFileConsent3DataInitiationDebtorAccount{
                        Identification: "praesentium",
                        Name: sdk.String("Harold Bednar"),
                        SchemeName: "neque",
                        SecondaryIdentification: sdk.String("quo"),
                    },
                    FileHash: "illum",
                    FileReference: sdk.String("quo"),
                    FileType: "fuga",
                    LocalInstrument: sdk.String("eius"),
                    NumberOfTransactions: sdk.String("eos"),
                    RemittanceInformation: &shared.OBWriteFileConsent3DataInitiationRemittanceInformation{
                        Reference: sdk.String("voluptas"),
                        Unstructured: sdk.String("ab"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-12-24T22:15:46.522Z"),
                    SupplementaryData: map[string]interface{}{
                        "debitis": "ipsam",
                        "aspernatur": "sequi",
                    },
                },
                SCASupportData: &shared.OBSCASupportData1{
                    AppliedAuthenticationApproach: shared.OBSCASupportData1AppliedAuthenticationApproachEnumSca.ToPointer(),
                    ReferencePaymentOrderID: sdk.String("esse"),
                    RequestedSCAExemptionType: shared.OBSCASupportData1RequestedSCAExemptionTypeEnumPartyToParty.ToPointer(),
                },
            },
        },
        XCustomerUserAgent: sdk.String("aperiam"),
        XFapiAuthDate: sdk.String("distinctio"),
        XFapiCustomerIPAddress: sdk.String("quod"),
        XFapiInteractionID: sdk.String("dignissimos"),
        XIdempotencyKey: "inventore",
        XJwsSignature: "nihil",
    }, operations.CreateFilePaymentConsentsJSONSecurity{
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

## CreateFilePaymentConsentsRaw

Create File Payment Consents

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
    res, err := s.FilePayments.CreateFilePaymentConsentsRaw(ctx, operations.CreateFilePaymentConsentsRawRequest{
        Authorization: "totam",
        RequestBody: []byte("accusamus"),
        XCustomerUserAgent: sdk.String("aliquam"),
        XFapiAuthDate: sdk.String("odio"),
        XFapiCustomerIPAddress: sdk.String("occaecati"),
        XFapiInteractionID: sdk.String("commodi"),
        XIdempotencyKey: "sapiente",
        XJwsSignature: "dolores",
    }, operations.CreateFilePaymentConsentsRawSecurity{
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

## CreateFilePaymentsJSON

Create File Payments

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
    res, err := s.FilePayments.CreateFilePaymentsJSON(ctx, operations.CreateFilePaymentsJSONRequest{
        Authorization: "deserunt",
        OBWriteFile2: shared.OBWriteFile2{
            Data: shared.OBWriteFile2Data{
                ConsentID: "molestiae",
                Initiation: shared.OBWriteFile2DataInitiation{
                    ControlSum: sdk.Float64(353.62),
                    DebtorAccount: &shared.OBWriteFile2DataInitiationDebtorAccount{
                        Identification: "porro",
                        Name: sdk.String("Dianne Langosh"),
                        SchemeName: "fugit",
                        SecondaryIdentification: sdk.String("fuga"),
                    },
                    FileHash: "mollitia",
                    FileReference: sdk.String("incidunt"),
                    FileType: "atque",
                    LocalInstrument: sdk.String("explicabo"),
                    NumberOfTransactions: sdk.String("minima"),
                    RemittanceInformation: &shared.OBWriteFile2DataInitiationRemittanceInformation{
                        Reference: sdk.String("nisi"),
                        Unstructured: sdk.String("fugit"),
                    },
                    RequestedExecutionDateTime: types.MustTimeFromString("2022-07-09T22:36:51.892Z"),
                    SupplementaryData: map[string]interface{}{
                        "explicabo": "saepe",
                    },
                },
            },
        },
        XCustomerUserAgent: sdk.String("occaecati"),
        XFapiAuthDate: sdk.String("atque"),
        XFapiCustomerIPAddress: sdk.String("et"),
        XFapiInteractionID: sdk.String("esse"),
        XIdempotencyKey: "eveniet",
        XJwsSignature: "accusamus",
    }, operations.CreateFilePaymentsJSONSecurity{
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

## CreateFilePaymentsRaw

Create File Payments

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
    res, err := s.FilePayments.CreateFilePaymentsRaw(ctx, operations.CreateFilePaymentsRawRequest{
        Authorization: "veritatis",
        RequestBody: []byte("esse"),
        XCustomerUserAgent: sdk.String("quod"),
        XFapiAuthDate: sdk.String("nam"),
        XFapiCustomerIPAddress: sdk.String("vero"),
        XFapiInteractionID: sdk.String("aliquid"),
        XIdempotencyKey: "quasi",
        XJwsSignature: "saepe",
    }, operations.CreateFilePaymentsRawSecurity{
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

## GetFilePaymentConsentsConsentID

Get File Payment Consents

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
    res, err := s.FilePayments.GetFilePaymentConsentsConsentID(ctx, operations.GetFilePaymentConsentsConsentIDRequest{
        Authorization: "vel",
        ConsentID: "harum",
        XCustomerUserAgent: sdk.String("molestiae"),
        XFapiAuthDate: sdk.String("rerum"),
        XFapiCustomerIPAddress: sdk.String("occaecati"),
        XFapiInteractionID: sdk.String("minima"),
    }, operations.GetFilePaymentConsentsConsentIDSecurity{
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

## GetFilePaymentConsentsConsentIDFile

Get File Payment Consents

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
    res, err := s.FilePayments.GetFilePaymentConsentsConsentIDFile(ctx, operations.GetFilePaymentConsentsConsentIDFileRequest{
        Authorization: "distinctio",
        ConsentID: "eligendi",
        XCustomerUserAgent: sdk.String("sit"),
        XFapiAuthDate: sdk.String("culpa"),
        XFapiCustomerIPAddress: sdk.String("tempore"),
        XFapiInteractionID: sdk.String("adipisci"),
    }, operations.GetFilePaymentConsentsConsentIDFileSecurity{
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

## GetFilePaymentsFilePaymentID

Get File Payments

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
    res, err := s.FilePayments.GetFilePaymentsFilePaymentID(ctx, operations.GetFilePaymentsFilePaymentIDRequest{
        Authorization: "cumque",
        FilePaymentID: "consequuntur",
        XCustomerUserAgent: sdk.String("consequatur"),
        XFapiAuthDate: sdk.String("minus"),
        XFapiCustomerIPAddress: sdk.String("quaerat"),
        XFapiInteractionID: sdk.String("sapiente"),
    }, operations.GetFilePaymentsFilePaymentIDSecurity{
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

## GetFilePaymentsFilePaymentIDReportFile

Get File Payments

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
    res, err := s.FilePayments.GetFilePaymentsFilePaymentIDReportFile(ctx, operations.GetFilePaymentsFilePaymentIDReportFileRequest{
        Authorization: "consectetur",
        FilePaymentID: "esse",
        XCustomerUserAgent: sdk.String("blanditiis"),
        XFapiAuthDate: sdk.String("provident"),
        XFapiCustomerIPAddress: sdk.String("a"),
        XFapiInteractionID: sdk.String("nulla"),
    }, operations.GetFilePaymentsFilePaymentIDReportFileSecurity{
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
