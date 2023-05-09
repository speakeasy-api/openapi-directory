# SubContractor

### Available Operations

* [DeleteSubContractor](#deletesubcontractor) - Delete an sub contractor
* [DeleteSubContractorRevision](#deletesubcontractorrevision) - Delete an sub contractor revision matching the specified revision date.
* [DeleteSubContractorRevisionByNumber](#deletesubcontractorrevisionbynumber) - Delete an SubContractor revision matching the specified revision number.
* [GetSubContractorByEffectiveDate](#getsubcontractorbyeffectivedate) - Get sub contractor by effective date.
* [GetSubContractorFromEmployer](#getsubcontractorfromemployer) - Get sub contractor from employer
* [GetSubContractorRevisionByNumber](#getsubcontractorrevisionbynumber) - Gets the sub contractor by revision number
* [GetSubContractorRevisions](#getsubcontractorrevisions) - Get all sub contractor revisions
* [GetSubContractorsByEffectiveDate](#getsubcontractorsbyeffectivedate) - Get sub contractors from employer at a given effective date.
* [GetSubContractorsFromEmployer](#getsubcontractorsfromemployer) - Get sub contractors from employer.
* [PatchSubContractor](#patchsubcontractor) - Patches the sub contractor
* [PostSubContractorIntoEmployer](#postsubcontractorintoemployer) - Create a new sub contractor
* [PutSubContractorIntoEmployer](#putsubcontractorintoemployer) - Updates the sub contractor

## DeleteSubContractor

Delete the specified sub contractor

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
    res, err := s.SubContractor.DeleteSubContractor(ctx, operations.DeleteSubContractorRequest{
        APIVersion: "officia",
        Authorization: "impedit",
        EmployerID: "quasi",
        SubContractorID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubContractorRevision

Deletes the specified sub contractor revision for the matching revision date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubContractor.DeleteSubContractorRevision(ctx, operations.DeleteSubContractorRevisionRequest{
        APIVersion: "eius",
        Authorization: "quisquam",
        EffectiveDate: types.MustDateFromString("2022-04-02"),
        EmployerID: "natus",
        SubContractorID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubContractorRevisionByNumber

Deletes the specified sub contractor revision for the matching revision number

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
    res, err := s.SubContractor.DeleteSubContractorRevisionByNumber(ctx, operations.DeleteSubContractorRevisionByNumberRequest{
        APIVersion: "quia",
        Authorization: "magnam",
        EmployerID: "reprehenderit",
        RevisionNumber: "quod",
        SubContractorID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubContractorByEffectiveDate

Returns the sub contractor's state at the specified effective date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubContractor.GetSubContractorByEffectiveDate(ctx, operations.GetSubContractorByEffectiveDateRequest{
        APIVersion: "corrupti",
        Authorization: "amet",
        EffectiveDate: types.MustDateFromString("2022-10-10"),
        EmployerID: "laborum",
        SubContractorID: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubContractor != nil {
        // handle response
    }
}
```

## GetSubContractorFromEmployer

Gets the specified sub contractor from employer.

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
    res, err := s.SubContractor.GetSubContractorFromEmployer(ctx, operations.GetSubContractorFromEmployerRequest{
        APIVersion: "perferendis",
        Authorization: "necessitatibus",
        EmployerID: "architecto",
        SubContractorID: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubContractor != nil {
        // handle response
    }
}
```

## GetSubContractorRevisionByNumber

Get the sub contractor revision matching the specified revision number

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
    res, err := s.SubContractor.GetSubContractorRevisionByNumber(ctx, operations.GetSubContractorRevisionByNumberRequest{
        APIVersion: "dolore",
        Authorization: "sunt",
        EmployerID: "maiores",
        RevisionNumber: "neque",
        SubContractorID: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubContractor != nil {
        // handle response
    }
}
```

## GetSubContractorRevisions

Gets links to all the sub contractor revisions

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
    res, err := s.SubContractor.GetSubContractorRevisions(ctx, operations.GetSubContractorRevisionsRequest{
        APIVersion: "earum",
        Authorization: "veniam",
        EmployerID: "ipsam",
        SubContractorID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetSubContractorsByEffectiveDate

Get links to all sub contractors for the employer on specified effective date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubContractor.GetSubContractorsByEffectiveDate(ctx, operations.GetSubContractorsByEffectiveDateRequest{
        APIVersion: "exercitationem",
        Authorization: "veniam",
        EffectiveDate: types.MustDateFromString("2022-09-06"),
        EmployerID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetSubContractorsFromEmployer

Get links to all sub contractors for the specified employer.

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
    res, err := s.SubContractor.GetSubContractorsFromEmployer(ctx, operations.GetSubContractorsFromEmployerRequest{
        APIVersion: "tenetur",
        Authorization: "quis",
        EmployerID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchSubContractor

Patches the specified sub contractor with the supplied values

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
    res, err := s.SubContractor.PatchSubContractor(ctx, operations.PatchSubContractorRequest{
        APIVersion: "nemo",
        Authorization: "suscipit",
        EmployerID: "pariatur",
        SubContractor: shared.SubContractor{
            SubContractor: &shared.SubContractorSubContractor{
                Address: &shared.SubContractorSubContractorAddress{
                    Address1: sdk.String("sit"),
                    Address2: sdk.String("quidem"),
                    Address3: sdk.String("repellendus"),
                    Address4: sdk.String("perferendis"),
                    Country: sdk.String("Northern Mariana Islands"),
                    Postcode: sdk.String("18991-2862"),
                },
                BankAccount: &shared.SubContractorSubContractorBankAccount{
                    AccountName: sdk.String("voluptatibus"),
                    AccountNumber: sdk.String("iure"),
                    BranchName: sdk.String("explicabo"),
                    Reference: sdk.String("minus"),
                    SortCode: sdk.String("soluta"),
                },
                BusinessType: shared.SubContractorSubContractorBusinessTypeEnumPartnership.ToPointer(),
                CompanyName: sdk.String("velit"),
                CompanyRegistrationNumber: sdk.String("earum"),
                Deactivated: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2021-10-04"),
                FirstName: sdk.String("Dena"),
                Initials: sdk.String("quasi"),
                LastName: sdk.String("O'Connell"),
                MetaData: map[string]interface{}{
                    "harum": "cumque",
                    "doloremque": "expedita",
                    "corrupti": "eaque",
                    "deserunt": "aliquid",
                },
                MiddleName: sdk.String("excepturi"),
                NextRevisionDate: types.MustDateFromString("2022-09-23"),
                NiNumber: sdk.String("possimus"),
                PartnershipName: sdk.String("dolor"),
                PartnershipUniqueTaxReference: sdk.String("rerum"),
                PayFrequency: shared.SubContractorSubContractorPayFrequencyEnumMonthly.ToPointer(),
                PaymentMethod: shared.SubContractorSubContractorPaymentMethodEnumOther.ToPointer(),
                Region: shared.SubContractorSubContractorRegionEnumWales.ToPointer(),
                Revision: sdk.Int(966576),
                TaxationStatus: shared.SubContractorSubContractorTaxationStatusEnumGross.ToPointer(),
                Telephone: sdk.String("quo"),
                Territory: shared.SubContractorSubContractorTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Ms."),
                TradingName: sdk.String("asperiores"),
                UniqueTaxReference: sdk.String("voluptatum"),
                VatRegistered: sdk.Bool(false),
                VatRegistrationNumber: sdk.String("iste"),
                VerificationDate: types.MustTimeFromString("2022-12-18T10:44:39.786Z"),
                VerificationNumber: sdk.String("illo"),
                WorksNumber: sdk.String("aut"),
            },
        },
        SubContractorID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubContractor != nil {
        // handle response
    }
}
```

## PostSubContractorIntoEmployer

Create a new sub contractor object

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
    res, err := s.SubContractor.PostSubContractorIntoEmployer(ctx, operations.PostSubContractorIntoEmployerRequest{
        APIVersion: "nostrum",
        Authorization: "at",
        EmployerID: "possimus",
        SubContractor: shared.SubContractor{
            SubContractor: &shared.SubContractorSubContractor{
                Address: &shared.SubContractorSubContractorAddress{
                    Address1: sdk.String("neque"),
                    Address2: sdk.String("pariatur"),
                    Address3: sdk.String("vel"),
                    Address4: sdk.String("sapiente"),
                    Country: sdk.String("Niue"),
                    Postcode: sdk.String("50293"),
                },
                BankAccount: &shared.SubContractorSubContractorBankAccount{
                    AccountName: sdk.String("aliquam"),
                    AccountNumber: sdk.String("quisquam"),
                    BranchName: sdk.String("quas"),
                    Reference: sdk.String("consequuntur"),
                    SortCode: sdk.String("maiores"),
                },
                BusinessType: shared.SubContractorSubContractorBusinessTypeEnumSoleTrader.ToPointer(),
                CompanyName: sdk.String("aliquid"),
                CompanyRegistrationNumber: sdk.String("laudantium"),
                Deactivated: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2022-07-23"),
                FirstName: sdk.String("Gregory"),
                Initials: sdk.String("consectetur"),
                LastName: sdk.String("Runte"),
                MetaData: map[string]interface{}{
                    "voluptatum": "ducimus",
                    "adipisci": "recusandae",
                    "tempora": "blanditiis",
                },
                MiddleName: sdk.String("numquam"),
                NextRevisionDate: types.MustDateFromString("2022-06-20"),
                NiNumber: sdk.String("sit"),
                PartnershipName: sdk.String("rerum"),
                PartnershipUniqueTaxReference: sdk.String("veritatis"),
                PayFrequency: shared.SubContractorSubContractorPayFrequencyEnumWeekly.ToPointer(),
                PaymentMethod: shared.SubContractorSubContractorPaymentMethodEnumCheque.ToPointer(),
                Region: shared.SubContractorSubContractorRegionEnumScotland.ToPointer(),
                Revision: sdk.Int(517121),
                TaxationStatus: shared.SubContractorSubContractorTaxationStatusEnumGross.ToPointer(),
                Telephone: sdk.String("deserunt"),
                Territory: shared.SubContractorSubContractorTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Mr."),
                TradingName: sdk.String("nihil"),
                UniqueTaxReference: sdk.String("voluptas"),
                VatRegistered: sdk.Bool(false),
                VatRegistrationNumber: sdk.String("animi"),
                VerificationDate: types.MustTimeFromString("2022-12-31T17:43:08.927Z"),
                VerificationNumber: sdk.String("fuga"),
                WorksNumber: sdk.String("aut"),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutSubContractorIntoEmployer

Updates the existing specified sub contractor object

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
    res, err := s.SubContractor.PutSubContractorIntoEmployer(ctx, operations.PutSubContractorIntoEmployerRequest{
        APIVersion: "dolore",
        Authorization: "maxime",
        EmployerID: "aliquam",
        SubContractor: shared.SubContractor{
            SubContractor: &shared.SubContractorSubContractor{
                Address: &shared.SubContractorSubContractorAddress{
                    Address1: sdk.String("iste"),
                    Address2: sdk.String("ullam"),
                    Address3: sdk.String("eligendi"),
                    Address4: sdk.String("placeat"),
                    Country: sdk.String("Heard Island and McDonald Islands"),
                    Postcode: sdk.String("60407-3071"),
                },
                BankAccount: &shared.SubContractorSubContractorBankAccount{
                    AccountName: sdk.String("harum"),
                    AccountNumber: sdk.String("facere"),
                    BranchName: sdk.String("facilis"),
                    Reference: sdk.String("beatae"),
                    SortCode: sdk.String("cumque"),
                },
                BusinessType: shared.SubContractorSubContractorBusinessTypeEnumTrust.ToPointer(),
                CompanyName: sdk.String("labore"),
                CompanyRegistrationNumber: sdk.String("expedita"),
                Deactivated: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2021-12-14"),
                FirstName: sdk.String("Karianne"),
                Initials: sdk.String("officiis"),
                LastName: sdk.String("Ritchie"),
                MetaData: map[string]interface{}{
                    "sapiente": "quo",
                    "incidunt": "quod",
                    "minus": "porro",
                    "id": "excepturi",
                },
                MiddleName: sdk.String("occaecati"),
                NextRevisionDate: types.MustDateFromString("2021-06-14"),
                NiNumber: sdk.String("esse"),
                PartnershipName: sdk.String("hic"),
                PartnershipUniqueTaxReference: sdk.String("maxime"),
                PayFrequency: shared.SubContractorSubContractorPayFrequencyEnumMonthly.ToPointer(),
                PaymentMethod: shared.SubContractorSubContractorPaymentMethodEnumFasterPayments.ToPointer(),
                Region: shared.SubContractorSubContractorRegionEnumNotSet.ToPointer(),
                Revision: sdk.Int(866292),
                TaxationStatus: shared.SubContractorSubContractorTaxationStatusEnumGross.ToPointer(),
                Telephone: sdk.String("recusandae"),
                Territory: shared.SubContractorSubContractorTerritoryEnumUnitedKingdom.ToPointer(),
                Title: sdk.String("Mr."),
                TradingName: sdk.String("aut"),
                UniqueTaxReference: sdk.String("laudantium"),
                VatRegistered: sdk.Bool(false),
                VatRegistrationNumber: sdk.String("iusto"),
                VerificationDate: types.MustTimeFromString("2022-01-31T05:44:55.505Z"),
                VerificationNumber: sdk.String("tempora"),
                WorksNumber: sdk.String("magni"),
            },
        },
        SubContractorID: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubContractor != nil {
        // handle response
    }
}
```
