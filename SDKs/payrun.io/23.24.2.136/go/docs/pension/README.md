# Pension

### Available Operations

* [DeletePension](#deletepension) - Delete a Pension
* [DeletePensionRevision](#deletepensionrevision) - Delete an Pension revision matching the specified revision date.
* [DeletePensionRevisionByNumber](#deletepensionrevisionbynumber) - Delete an Pension revision matching the specified revision number.
* [GetPensionByEffectiveDate](#getpensionbyeffectivedate) - Get pension by effective date.
* [GetPensionFromEmployer](#getpensionfromemployer) - Get pension from employer
* [GetPensionRevisionByNumber](#getpensionrevisionbynumber) - Gets the pension by revision number
* [GetPensionRevisions](#getpensionrevisions) - Get all pension revisions
* [GetPensionsByEffectiveDate](#getpensionsbyeffectivedate) - Get pensions from employer at a given effective date.
* [GetPensionsFromEmployer](#getpensionsfromemployer) - Get pensions from employer.
* [PatchPension](#patchpension) - Patches the pension
* [PostPensionIntoEmployer](#postpensionintoemployer) - Create a new Pension
* [PutPensionIntoEmployer](#putpensionintoemployer) - Updates the Pension

## DeletePension

Delete the specified ppension

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
    res, err := s.Pension.DeletePension(ctx, operations.DeletePensionRequest{
        APIVersion: "veniam",
        Authorization: "libero",
        EmployerID: "architecto",
        PensionID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePensionRevision

Deletes the specified pension revision for the matching revision date

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
    res, err := s.Pension.DeletePensionRevision(ctx, operations.DeletePensionRevisionRequest{
        APIVersion: "molestiae",
        Authorization: "eligendi",
        EffectiveDate: types.MustDateFromString("2022-03-31"),
        EmployerID: "magnam",
        PensionID: "itaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePensionRevisionByNumber

Deletes the specified pension revision for the matching revision number

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
    res, err := s.Pension.DeletePensionRevisionByNumber(ctx, operations.DeletePensionRevisionByNumberRequest{
        APIVersion: "sed",
        Authorization: "asperiores",
        EmployerID: "veniam",
        PensionID: "consequuntur",
        RevisionNumber: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPensionByEffectiveDate

Returns the penion's state at the specified effective date.

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
    res, err := s.Pension.GetPensionByEffectiveDate(ctx, operations.GetPensionByEffectiveDateRequest{
        APIVersion: "laudantium",
        Authorization: "odit",
        EffectiveDate: types.MustDateFromString("2022-04-27"),
        EmployerID: "exercitationem",
        PensionID: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pension != nil {
        // handle response
    }
}
```

## GetPensionFromEmployer

Gets the specified pension from employer by pension code.

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
    res, err := s.Pension.GetPensionFromEmployer(ctx, operations.GetPensionFromEmployerRequest{
        APIVersion: "velit",
        Authorization: "facilis",
        EmployerID: "tempore",
        PensionID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pension != nil {
        // handle response
    }
}
```

## GetPensionRevisionByNumber

Get the pension revision matching the specified revision number

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
    res, err := s.Pension.GetPensionRevisionByNumber(ctx, operations.GetPensionRevisionByNumberRequest{
        APIVersion: "voluptatibus",
        Authorization: "quaerat",
        EmployerID: "blanditiis",
        PensionID: "distinctio",
        RevisionNumber: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pension != nil {
        // handle response
    }
}
```

## GetPensionRevisions

Returns links to all revisions of the pension

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
    res, err := s.Pension.GetPensionRevisions(ctx, operations.GetPensionRevisionsRequest{
        APIVersion: "quis",
        Authorization: "nisi",
        EmployerID: "libero",
        PensionID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPensionsByEffectiveDate

Get links to all pensions for the employer on specified effective date.

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
    res, err := s.Pension.GetPensionsByEffectiveDate(ctx, operations.GetPensionsByEffectiveDateRequest{
        APIVersion: "facere",
        Authorization: "facilis",
        EffectiveDate: types.MustDateFromString("2022-09-06"),
        EmployerID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPensionsFromEmployer

Get links to all pensions for the specified employer.

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
    res, err := s.Pension.GetPensionsFromEmployer(ctx, operations.GetPensionsFromEmployerRequest{
        APIVersion: "voluptatibus",
        Authorization: "consequuntur",
        EmployerID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchPension

Patches the specified pension with the supplied values

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
    res, err := s.Pension.PatchPension(ctx, operations.PatchPensionRequest{
        APIVersion: "labore",
        Authorization: "rerum",
        EmployerID: "eos",
        Pension: shared.Pension{
            Pension: &shared.PensionPension{
                AECompatible: sdk.Bool(false),
                Certification: shared.PensionPensionCertificationEnumSet1.ToPointer(),
                Code: sdk.String("nostrum"),
                ContributionDeductionDay: sdk.Int(207296),
                EffectiveDate: types.MustDateFromString("2022-05-03"),
                EmployeeContributionCash: sdk.Float64(5221.76),
                EmployeeContributionPercent: sdk.Float64(7538.9),
                EmployerContributionCash: sdk.Float64(8536.06),
                EmployerContributionPercent: sdk.Float64(6040.78),
                EmployerNiSaving: sdk.Bool(false),
                EmployerNiSavingPercentage: sdk.Float64(8894.48),
                Group: sdk.String("ducimus"),
                LowerThreshold: sdk.Float64(2201.04),
                MetaData: map[string]interface{}{
                    "error": "porro",
                },
                NextRevisionDate: types.MustDateFromString("2022-07-05"),
                PensionablePayCodes: &shared.PensionPensionPensionablePayCodes{
                    PayCode: []string{
                        "fugiat",
                        "ad",
                    },
                },
                ProRataMethod: shared.PensionPensionProRataMethodEnumAnnual260Days.ToPointer(),
                ProviderEmployerRef: sdk.String("enim"),
                ProviderName: sdk.String("delectus"),
                QualifyingPayCodes: &shared.PensionPensionQualifyingPayCodes{
                    PayCode: []string{
                        "dignissimos",
                        "libero",
                    },
                },
                RasRoundingOverride: shared.PensionPensionRasRoundingOverrideEnumNotSet.ToPointer(),
                Revision: sdk.Int(69182),
                RoundingOption: shared.PensionPensionRoundingOptionEnumPennyDown.ToPointer(),
                SalarySacrifice: sdk.Bool(false),
                SchemeName: sdk.String("accusamus"),
                SubGroup: sdk.String("saepe"),
                TaxationMethod: shared.PensionPensionTaxationMethodEnumReliefAtSource.ToPointer(),
                UpperThreshold: sdk.Float64(3340.18),
                UseAEThresholds: sdk.Bool(false),
            },
        },
        PensionID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pension != nil {
        // handle response
    }
}
```

## PostPensionIntoEmployer

Create a new pension object

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
    res, err := s.Pension.PostPensionIntoEmployer(ctx, operations.PostPensionIntoEmployerRequest{
        APIVersion: "reiciendis",
        Authorization: "earum",
        EmployerID: "reprehenderit",
        Pension: shared.Pension{
            Pension: &shared.PensionPension{
                AECompatible: sdk.Bool(false),
                Certification: shared.PensionPensionCertificationEnumSet2.ToPointer(),
                Code: sdk.String("nemo"),
                ContributionDeductionDay: sdk.Int(999809),
                EffectiveDate: types.MustDateFromString("2022-05-30"),
                EmployeeContributionCash: sdk.Float64(4671.19),
                EmployeeContributionPercent: sdk.Float64(5349.08),
                EmployerContributionCash: sdk.Float64(755.66),
                EmployerContributionPercent: sdk.Float64(2902.48),
                EmployerNiSaving: sdk.Bool(false),
                EmployerNiSavingPercentage: sdk.Float64(8288.41),
                Group: sdk.String("aliquam"),
                LowerThreshold: sdk.Float64(7904.63),
                MetaData: map[string]interface{}{
                    "laudantium": "repudiandae",
                    "consequatur": "maxime",
                    "aspernatur": "nam",
                },
                NextRevisionDate: types.MustDateFromString("2021-11-18"),
                PensionablePayCodes: &shared.PensionPensionPensionablePayCodes{
                    PayCode: []string{
                        "repudiandae",
                        "rerum",
                        "dignissimos",
                    },
                },
                ProRataMethod: shared.PensionPensionProRataMethodEnumAnnual365Days.ToPointer(),
                ProviderEmployerRef: sdk.String("vero"),
                ProviderName: sdk.String("similique"),
                QualifyingPayCodes: &shared.PensionPensionQualifyingPayCodes{
                    PayCode: []string{
                        "iure",
                        "dolorem",
                        "commodi",
                        "impedit",
                    },
                },
                RasRoundingOverride: shared.PensionPensionRasRoundingOverrideEnumBankers.ToPointer(),
                Revision: sdk.Int(12171),
                RoundingOption: shared.PensionPensionRoundingOptionEnumNotSet.ToPointer(),
                SalarySacrifice: sdk.Bool(false),
                SchemeName: sdk.String("ad"),
                SubGroup: sdk.String("quae"),
                TaxationMethod: shared.PensionPensionTaxationMethodEnumNotSet.ToPointer(),
                UpperThreshold: sdk.Float64(8493.2),
                UseAEThresholds: sdk.Bool(false),
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

## PutPensionIntoEmployer

Updates existing or inserts the specified pension object

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
    res, err := s.Pension.PutPensionIntoEmployer(ctx, operations.PutPensionIntoEmployerRequest{
        APIVersion: "praesentium",
        Authorization: "quidem",
        EmployerID: "cum",
        Pension: shared.Pension{
            Pension: &shared.PensionPension{
                AECompatible: sdk.Bool(false),
                Certification: shared.PensionPensionCertificationEnumNotSet.ToPointer(),
                Code: sdk.String("quasi"),
                ContributionDeductionDay: sdk.Int(118126),
                EffectiveDate: types.MustDateFromString("2022-12-02"),
                EmployeeContributionCash: sdk.Float64(9384.12),
                EmployeeContributionPercent: sdk.Float64(4797.07),
                EmployerContributionCash: sdk.Float64(2286.46),
                EmployerContributionPercent: sdk.Float64(5879.67),
                EmployerNiSaving: sdk.Bool(false),
                EmployerNiSavingPercentage: sdk.Float64(6771.41),
                Group: sdk.String("necessitatibus"),
                LowerThreshold: sdk.Float64(5928.8),
                MetaData: map[string]interface{}{
                    "consequatur": "nemo",
                    "molestiae": "itaque",
                    "facilis": "corrupti",
                    "aperiam": "sint",
                },
                NextRevisionDate: types.MustDateFromString("2022-06-19"),
                PensionablePayCodes: &shared.PensionPensionPensionablePayCodes{
                    PayCode: []string{
                        "dicta",
                        "voluptatem",
                        "velit",
                    },
                },
                ProRataMethod: shared.PensionPensionProRataMethodEnumAnnual260Days.ToPointer(),
                ProviderEmployerRef: sdk.String("sunt"),
                ProviderName: sdk.String("a"),
                QualifyingPayCodes: &shared.PensionPensionQualifyingPayCodes{
                    PayCode: []string{
                        "occaecati",
                    },
                },
                RasRoundingOverride: shared.PensionPensionRasRoundingOverrideEnumFiveUp.ToPointer(),
                Revision: sdk.Int(107472),
                RoundingOption: shared.PensionPensionRoundingOptionEnumFloor.ToPointer(),
                SalarySacrifice: sdk.Bool(false),
                SchemeName: sdk.String("labore"),
                SubGroup: sdk.String("minus"),
                TaxationMethod: shared.PensionPensionTaxationMethodEnumNetBased.ToPointer(),
                UpperThreshold: sdk.Float64(323.56),
                UseAEThresholds: sdk.Bool(false),
            },
        },
        PensionID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Pension != nil {
        // handle response
    }
}
```
