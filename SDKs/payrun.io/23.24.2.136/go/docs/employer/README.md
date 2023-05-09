# Employer

### Available Operations

* [DeleteEmployer](#deleteemployer) - Delete an Employer
* [DeleteEmployerRevision](#deleteemployerrevision) - Delete an Employer revision matching the specified revision date.
* [DeleteEmployerRevisionByNumber](#deleteemployerrevisionbynumber) - Delete an Employer revision matching the specified revision number.
* [DeleteEmployerSecret](#deleteemployersecret) - Deletes employer secret
* [GetAllEmployerTags](#getallemployertags) - Get all employer tags
* [GetEmployer](#getemployer) - Gets the employer
* [GetEmployerByEffectiveDate](#getemployerbyeffectivedate) - Gets the employer at the specified effective
* [GetEmployerRevisionByNumber](#getemployerrevisionbynumber) - Gets the employer by revision number
* [GetEmployerRevisionSummaries](#getemployerrevisionsummaries) - Get all employer revision summaries
* [GetEmployerRevisionSummaryByNumber](#getemployerrevisionsummarybynumber) - Gets the employer summary by revision number
* [GetEmployerRevisions](#getemployerrevisions) - Gets the employer revisions
* [GetEmployerSecret](#getemployersecret) - Get employer secret
* [GetEmployerSecrets](#getemployersecrets) - Get all employer secret links
* [GetEmployerSummaries](#getemployersummaries) - Get employer summaries.
* [GetEmployerSummariesByEffectiveDate](#getemployersummariesbyeffectivedate) - Get employer summaries at a given effective date.
* [GetEmployerSummary](#getemployersummary) - Get employer summary
* [GetEmployerSummaryByEffectiveDate](#getemployersummarybyeffectivedate) - Get employer summary by effective date.
* [GetEmployers](#getemployers) - Gets all employers
* [GetEmployersByEffectiveDate](#getemployersbyeffectivedate) - Gets all employers at the specified effective date
* [GetEmployersWithTag](#getemployerswithtag) - Get employers with tag
* [PatchEmployer](#patchemployer) - Patches the employer
* [PostEmployer](#postemployer) - Create a new Employer
* [PostEmployerSecret](#postemployersecret) - Create a new employer secret
* [PutEmployer](#putemployer) - Updates the Employer
* [PutEmployerSecret](#putemployersecret) - Create a new employer secret

## DeleteEmployer

Delete the specified employer

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
    res, err := s.Employer.DeleteEmployer(ctx, operations.DeleteEmployerRequest{
        APIVersion: "sapiente",
        Authorization: "consequuntur",
        EmployerID: "ratione",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployerRevision

Deletes the specified employer revision for the matching revision date

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
    res, err := s.Employer.DeleteEmployerRevision(ctx, operations.DeleteEmployerRevisionRequest{
        APIVersion: "explicabo",
        Authorization: "saepe",
        EffectiveDate: types.MustDateFromString("2021-11-30"),
        EmployerID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployerRevisionByNumber

Deletes the specified employer revision for the matching revision number

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
    res, err := s.Employer.DeleteEmployerRevisionByNumber(ctx, operations.DeleteEmployerRevisionByNumberRequest{
        APIVersion: "esse",
        Authorization: "eveniet",
        EmployerID: "accusamus",
        RevisionNumber: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEmployerSecret

Deletes an employer secret from the given resource location

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
    res, err := s.Employer.DeleteEmployerSecret(ctx, operations.DeleteEmployerSecretRequest{
        APIVersion: "esse",
        Authorization: "quod",
        EmployerID: "nam",
        SecretID: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllEmployerTags

Gets all the employer tags

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
    res, err := s.Employer.GetAllEmployerTags(ctx, operations.GetAllEmployerTagsRequest{
        APIVersion: "aliquid",
        Authorization: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployer

Get the specified employer object

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
    res, err := s.Employer.GetEmployer(ctx, operations.GetEmployerRequest{
        APIVersion: "saepe",
        Authorization: "vel",
        EmployerID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employer != nil {
        // handle response
    }
}
```

## GetEmployerByEffectiveDate

Returns the employer's state at the specified effective date.

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
    res, err := s.Employer.GetEmployerByEffectiveDate(ctx, operations.GetEmployerByEffectiveDateRequest{
        APIVersion: "molestiae",
        Authorization: "rerum",
        EffectiveDate: types.MustDateFromString("2022-05-06"),
        EmployerID: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employer != nil {
        // handle response
    }
}
```

## GetEmployerRevisionByNumber

Get the employer revision matching the specified revision number

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
    res, err := s.Employer.GetEmployerRevisionByNumber(ctx, operations.GetEmployerRevisionByNumberRequest{
        APIVersion: "eligendi",
        Authorization: "sit",
        EmployerID: "culpa",
        RevisionNumber: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employer != nil {
        // handle response
    }
}
```

## GetEmployerRevisionSummaries

Gets links to all employer revision summaries

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
    res, err := s.Employer.GetEmployerRevisionSummaries(ctx, operations.GetEmployerRevisionSummariesRequest{
        APIVersion: "adipisci",
        Authorization: "cumque",
        EmployerID: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerRevisionSummaryByNumber

Get the employer revision summary matching the specified revision number

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
    res, err := s.Employer.GetEmployerRevisionSummaryByNumber(ctx, operations.GetEmployerRevisionSummaryByNumberRequest{
        APIVersion: "consequatur",
        Authorization: "minus",
        EmployerID: "quaerat",
        RevisionNumber: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployerSummary != nil {
        // handle response
    }
}
```

## GetEmployerRevisions

Gets links to all the employer revisions

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
    res, err := s.Employer.GetEmployerRevisions(ctx, operations.GetEmployerRevisionsRequest{
        APIVersion: "consectetur",
        Authorization: "esse",
        EmployerID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerSecret

Get the public visible employer secret object

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
    res, err := s.Employer.GetEmployerSecret(ctx, operations.GetEmployerSecretRequest{
        APIVersion: "provident",
        Authorization: "a",
        EmployerID: "nulla",
        SecretID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployerSecret != nil {
        // handle response
    }
}
```

## GetEmployerSecrets

Get all the employer secret links

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
    res, err := s.Employer.GetEmployerSecrets(ctx, operations.GetEmployerSecretsRequest{
        APIVersion: "esse",
        Authorization: "quasi",
        EmployerID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerSummaries

Get links to all employer summaries.

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
    res, err := s.Employer.GetEmployerSummaries(ctx, operations.GetEmployerSummariesRequest{
        APIVersion: "error",
        Authorization: "sint",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerSummariesByEffectiveDate

Get links to all employer summaries on specified effective date.

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
    res, err := s.Employer.GetEmployerSummariesByEffectiveDate(ctx, operations.GetEmployerSummariesByEffectiveDateRequest{
        APIVersion: "pariatur",
        Authorization: "possimus",
        EffectiveDate: types.MustDateFromString("2022-02-03"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployerSummary

Gets the specified employer summary data.

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
    res, err := s.Employer.GetEmployerSummary(ctx, operations.GetEmployerSummaryRequest{
        APIVersion: "asperiores",
        Authorization: "facere",
        EmployerID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployerSummary != nil {
        // handle response
    }
}
```

## GetEmployerSummaryByEffectiveDate

Gets the employer summary for the specified effective date.

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
    res, err := s.Employer.GetEmployerSummaryByEffectiveDate(ctx, operations.GetEmployerSummaryByEffectiveDateRequest{
        APIVersion: "consequuntur",
        Authorization: "quasi",
        EffectiveDate: types.MustDateFromString("2021-09-25"),
        EmployerID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployerSummary != nil {
        // handle response
    }
}
```

## GetEmployers

Gets links to all employers contained under the authorised application scope

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
    res, err := s.Employer.GetEmployers(ctx, operations.GetEmployersRequest{
        APIVersion: "tenetur",
        Authorization: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployersByEffectiveDate

Gets links to all employers contained under the authorised application scope for the specified effective date.

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
    res, err := s.Employer.GetEmployersByEffectiveDate(ctx, operations.GetEmployersByEffectiveDateRequest{
        APIVersion: "earum",
        Authorization: "vel",
        EffectiveDate: types.MustDateFromString("2022-09-28"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetEmployersWithTag

Gets the employers with the tag

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
    res, err := s.Employer.GetEmployersWithTag(ctx, operations.GetEmployersWithTagRequest{
        APIVersion: "libero",
        Authorization: "illum",
        TagID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchEmployer

Patches the specified employer with the supplied values

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
    res, err := s.Employer.PatchEmployer(ctx, operations.PatchEmployerRequest{
        APIVersion: "accusantium",
        Authorization: "aliquam",
        Employer: shared.Employer{
            Employer: &shared.EmployerEmployer{
                Address: &shared.EmployerEmployerAddress{
                    Address1: sdk.String("sapiente"),
                    Address2: sdk.String("dicta"),
                    Address3: sdk.String("ullam"),
                    Address4: sdk.String("reprehenderit"),
                    Country: sdk.String("Guernsey"),
                    Postcode: sdk.String("05184"),
                },
                ApprenticeshipLevyAllowance: sdk.Float64(5362.75),
                AutoEnrolment: &shared.EmployerEmployerAutoEnrolment{
                    Pension: &shared.EmployerEmployerAutoEnrolmentPension{
                        AtHref: sdk.String("itaque"),
                        AtRel: sdk.String("dolorum"),
                        AtTitle: sdk.String("architecto"),
                    },
                    PostponementDate: types.MustDateFromString("2021-02-09"),
                    PrimaryAddress: &shared.EmployerEmployerAutoEnrolmentPrimaryAddress{
                        Address1: sdk.String("quasi"),
                        Address2: sdk.String("at"),
                        Address3: sdk.String("et"),
                        Address4: sdk.String("voluptate"),
                        Country: sdk.String("Austria"),
                        Postcode: sdk.String("02268"),
                    },
                    PrimaryEmail: sdk.String("accusantium"),
                    PrimaryFirstName: sdk.String("rem"),
                    PrimaryJobTitle: sdk.String("aut"),
                    PrimaryLastName: sdk.String("laudantium"),
                    PrimaryTelephone: sdk.String("eum"),
                    ReEnrolmentDayOffset: sdk.Int(649832),
                    ReEnrolmentMonthOffset: sdk.Int(68074),
                    RecentOptOutReEnrolmentExcluded: sdk.Bool(false),
                    SecondaryAddress: &shared.EmployerEmployerAutoEnrolmentSecondaryAddress{
                        Address1: sdk.String("corrupti"),
                        Address2: sdk.String("non"),
                        Address3: sdk.String("voluptatem"),
                        Address4: sdk.String("dolor"),
                        Country: sdk.String("Moldova"),
                        Postcode: sdk.String("71304"),
                    },
                    SecondaryEmail: sdk.String("dicta"),
                    SecondaryFirstName: sdk.String("maiores"),
                    SecondaryJobTitle: sdk.String("natus"),
                    SecondaryLastName: sdk.String("velit"),
                    SecondaryTelephone: sdk.String("voluptatibus"),
                    StagingDate: types.MustDateFromString("2022-01-04"),
                },
                BacsServiceUserNumber: sdk.String("aperiam"),
                BankAccount: &shared.EmployerEmployerBankAccount{
                    AccountName: sdk.String("ea"),
                    AccountNumber: sdk.String("quaerat"),
                    BranchName: sdk.String("consequuntur"),
                    Reference: sdk.String("repellendus"),
                    SortCode: sdk.String("officia"),
                },
                CalculateApprenticeshipLevy: sdk.Bool(false),
                ClaimEmploymentAllowance: sdk.Bool(false),
                ClaimSmallEmployerRelief: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2021-07-13"),
                HmrcSettings: &shared.EmployerEmployerHmrcSettings{
                    AccountingOfficeRef: sdk.String("officia"),
                    COTAXRef: sdk.String("asperiores"),
                    ContactEmail: sdk.String("nemo"),
                    ContactFax: sdk.String("quae"),
                    ContactFirstName: sdk.String("quaerat"),
                    ContactLastName: sdk.String("porro"),
                    ContactTelephone: sdk.String("quod"),
                    EmploymentAllowanceOverride: sdk.Float64(2883.98),
                    Password: sdk.String("ab"),
                    Sautr: sdk.String("adipisci"),
                    Sender: shared.EmployerEmployerHmrcSettingsSenderEnumTrust.ToPointer(),
                    SenderID: sdk.String("id"),
                    StateAidSector: shared.EmployerEmployerHmrcSettingsStateAidSectorEnumFisheriesAquaculture.ToPointer(),
                    TaxOfficeNumber: sdk.String("velit"),
                    TaxOfficeReference: sdk.String("culpa"),
                },
                MetaData: map[string]interface{}{
                    "recusandae": "totam",
                    "fugiat": "vel",
                    "ducimus": "quos",
                },
                Name: sdk.String("Clara Senger"),
                NextRevisionDate: types.MustDateFromString("2022-07-21"),
                Region: shared.EmployerEmployerRegionEnumEngland.ToPointer(),
                Revision: sdk.Int(968904),
                RuleExclusions: shared.EmployerEmployerRuleExclusionsEnumTaxCodeRegionChangeRule.ToPointer(),
                Territory: shared.EmployerEmployerTerritoryEnumUnitedKingdom.ToPointer(),
            },
        },
        EmployerID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employer != nil {
        // handle response
    }
}
```

## PostEmployer

Create a new employer object

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
    res, err := s.Employer.PostEmployer(ctx, operations.PostEmployerRequest{
        APIVersion: "recusandae",
        Authorization: "aliquid",
        Employer: shared.Employer{
            Employer: &shared.EmployerEmployer{
                Address: &shared.EmployerEmployerAddress{
                    Address1: sdk.String("aperiam"),
                    Address2: sdk.String("cum"),
                    Address3: sdk.String("consectetur"),
                    Address4: sdk.String("in"),
                    Country: sdk.String("Guam"),
                    Postcode: sdk.String("82939-6982"),
                },
                ApprenticeshipLevyAllowance: sdk.Float64(1210.59),
                AutoEnrolment: &shared.EmployerEmployerAutoEnrolment{
                    Pension: &shared.EmployerEmployerAutoEnrolmentPension{
                        AtHref: sdk.String("asperiores"),
                        AtRel: sdk.String("adipisci"),
                        AtTitle: sdk.String("non"),
                    },
                    PostponementDate: types.MustDateFromString("2022-11-23"),
                    PrimaryAddress: &shared.EmployerEmployerAutoEnrolmentPrimaryAddress{
                        Address1: sdk.String("dignissimos"),
                        Address2: sdk.String("a"),
                        Address3: sdk.String("debitis"),
                        Address4: sdk.String("consectetur"),
                        Country: sdk.String("Guernsey"),
                        Postcode: sdk.String("30971-8621"),
                    },
                    PrimaryEmail: sdk.String("voluptas"),
                    PrimaryFirstName: sdk.String("voluptas"),
                    PrimaryJobTitle: sdk.String("voluptas"),
                    PrimaryLastName: sdk.String("minima"),
                    PrimaryTelephone: sdk.String("nobis"),
                    ReEnrolmentDayOffset: sdk.Int(680116),
                    ReEnrolmentMonthOffset: sdk.Int(237807),
                    RecentOptOutReEnrolmentExcluded: sdk.Bool(false),
                    SecondaryAddress: &shared.EmployerEmployerAutoEnrolmentSecondaryAddress{
                        Address1: sdk.String("minus"),
                        Address2: sdk.String("dolores"),
                        Address3: sdk.String("blanditiis"),
                        Address4: sdk.String("in"),
                        Country: sdk.String("French Guiana"),
                        Postcode: sdk.String("88327"),
                    },
                    SecondaryEmail: sdk.String("blanditiis"),
                    SecondaryFirstName: sdk.String("quas"),
                    SecondaryJobTitle: sdk.String("hic"),
                    SecondaryLastName: sdk.String("nesciunt"),
                    SecondaryTelephone: sdk.String("culpa"),
                    StagingDate: types.MustDateFromString("2021-04-07"),
                },
                BacsServiceUserNumber: sdk.String("totam"),
                BankAccount: &shared.EmployerEmployerBankAccount{
                    AccountName: sdk.String("hic"),
                    AccountNumber: sdk.String("exercitationem"),
                    BranchName: sdk.String("nobis"),
                    Reference: sdk.String("sit"),
                    SortCode: sdk.String("rerum"),
                },
                CalculateApprenticeshipLevy: sdk.Bool(false),
                ClaimEmploymentAllowance: sdk.Bool(false),
                ClaimSmallEmployerRelief: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2022-01-12"),
                HmrcSettings: &shared.EmployerEmployerHmrcSettings{
                    AccountingOfficeRef: sdk.String("explicabo"),
                    COTAXRef: sdk.String("asperiores"),
                    ContactEmail: sdk.String("facilis"),
                    ContactFax: sdk.String("voluptate"),
                    ContactFirstName: sdk.String("expedita"),
                    ContactLastName: sdk.String("ab"),
                    ContactTelephone: sdk.String("iste"),
                    EmploymentAllowanceOverride: sdk.Float64(2927.94),
                    Password: sdk.String("laborum"),
                    Sautr: sdk.String("sed"),
                    Sender: shared.EmployerEmployerHmrcSettingsSenderEnumBureau.ToPointer(),
                    SenderID: sdk.String("commodi"),
                    StateAidSector: shared.EmployerEmployerHmrcSettingsStateAidSectorEnumIndustrial.ToPointer(),
                    TaxOfficeNumber: sdk.String("explicabo"),
                    TaxOfficeReference: sdk.String("voluptas"),
                },
                MetaData: map[string]interface{}{
                    "architecto": "suscipit",
                    "sapiente": "debitis",
                    "illo": "reiciendis",
                },
                Name: sdk.String("Naomi Wuckert"),
                NextRevisionDate: types.MustDateFromString("2022-06-26"),
                Region: shared.EmployerEmployerRegionEnumWales.ToPointer(),
                Revision: sdk.Int(215529),
                RuleExclusions: shared.EmployerEmployerRuleExclusionsEnumNiEndContractedOutTransferRule.ToPointer(),
                Territory: shared.EmployerEmployerTerritoryEnumUnitedKingdom.ToPointer(),
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

## PostEmployerSecret

Create new employer secret using auto generated resource location key

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
    res, err := s.Employer.PostEmployerSecret(ctx, operations.PostEmployerSecretRequest{
        APIVersion: "occaecati",
        Authorization: "quos",
        EmployerID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Link != nil {
        // handle response
    }
}
```

## PutEmployer

Updates the existing specified employer object

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
    res, err := s.Employer.PutEmployer(ctx, operations.PutEmployerRequest{
        APIVersion: "tempora",
        Authorization: "tempora",
        Employer: shared.Employer{
            Employer: &shared.EmployerEmployer{
                Address: &shared.EmployerEmployerAddress{
                    Address1: sdk.String("voluptate"),
                    Address2: sdk.String("reiciendis"),
                    Address3: sdk.String("ex"),
                    Address4: sdk.String("sit"),
                    Country: sdk.String("Ecuador"),
                    Postcode: sdk.String("57323-8507"),
                },
                ApprenticeshipLevyAllowance: sdk.Float64(6256.37),
                AutoEnrolment: &shared.EmployerEmployerAutoEnrolment{
                    Pension: &shared.EmployerEmployerAutoEnrolmentPension{
                        AtHref: sdk.String("veniam"),
                        AtRel: sdk.String("minima"),
                        AtTitle: sdk.String("recusandae"),
                    },
                    PostponementDate: types.MustDateFromString("2020-05-31"),
                    PrimaryAddress: &shared.EmployerEmployerAutoEnrolmentPrimaryAddress{
                        Address1: sdk.String("magni"),
                        Address2: sdk.String("aperiam"),
                        Address3: sdk.String("saepe"),
                        Address4: sdk.String("numquam"),
                        Country: sdk.String("Gibraltar"),
                        Postcode: sdk.String("81535"),
                    },
                    PrimaryEmail: sdk.String("cum"),
                    PrimaryFirstName: sdk.String("laboriosam"),
                    PrimaryJobTitle: sdk.String("dolorum"),
                    PrimaryLastName: sdk.String("voluptatum"),
                    PrimaryTelephone: sdk.String("error"),
                    ReEnrolmentDayOffset: sdk.Int(944708),
                    ReEnrolmentMonthOffset: sdk.Int(710529),
                    RecentOptOutReEnrolmentExcluded: sdk.Bool(false),
                    SecondaryAddress: &shared.EmployerEmployerAutoEnrolmentSecondaryAddress{
                        Address1: sdk.String("debitis"),
                        Address2: sdk.String("neque"),
                        Address3: sdk.String("dolorum"),
                        Address4: sdk.String("nostrum"),
                        Country: sdk.String("New Zealand"),
                        Postcode: sdk.String("58251-2806"),
                    },
                    SecondaryEmail: sdk.String("expedita"),
                    SecondaryFirstName: sdk.String("magnam"),
                    SecondaryJobTitle: sdk.String("consequatur"),
                    SecondaryLastName: sdk.String("esse"),
                    SecondaryTelephone: sdk.String("ipsam"),
                    StagingDate: types.MustDateFromString("2022-06-21"),
                },
                BacsServiceUserNumber: sdk.String("quas"),
                BankAccount: &shared.EmployerEmployerBankAccount{
                    AccountName: sdk.String("repudiandae"),
                    AccountNumber: sdk.String("corporis"),
                    BranchName: sdk.String("et"),
                    Reference: sdk.String("blanditiis"),
                    SortCode: sdk.String("ex"),
                },
                CalculateApprenticeshipLevy: sdk.Bool(false),
                ClaimEmploymentAllowance: sdk.Bool(false),
                ClaimSmallEmployerRelief: sdk.Bool(false),
                EffectiveDate: types.MustDateFromString("2022-12-23"),
                HmrcSettings: &shared.EmployerEmployerHmrcSettings{
                    AccountingOfficeRef: sdk.String("vel"),
                    COTAXRef: sdk.String("nostrum"),
                    ContactEmail: sdk.String("saepe"),
                    ContactFax: sdk.String("error"),
                    ContactFirstName: sdk.String("consequatur"),
                    ContactLastName: sdk.String("incidunt"),
                    ContactTelephone: sdk.String("reiciendis"),
                    EmploymentAllowanceOverride: sdk.Float64(2097.5),
                    Password: sdk.String("harum"),
                    Sautr: sdk.String("dicta"),
                    Sender: shared.EmployerEmployerHmrcSettingsSenderEnumEmployer.ToPointer(),
                    SenderID: sdk.String("occaecati"),
                    StateAidSector: shared.EmployerEmployerHmrcSettingsStateAidSectorEnumFisheriesAquaculture.ToPointer(),
                    TaxOfficeNumber: sdk.String("quidem"),
                    TaxOfficeReference: sdk.String("atque"),
                },
                MetaData: map[string]interface{}{
                    "nam": "tenetur",
                    "laboriosam": "alias",
                    "amet": "deserunt",
                },
                Name: sdk.String("Lindsey Witting"),
                NextRevisionDate: types.MustDateFromString("2020-04-04"),
                Region: shared.EmployerEmployerRegionEnumNotSet.ToPointer(),
                Revision: sdk.Int(667285),
                RuleExclusions: shared.EmployerEmployerRuleExclusionsEnumP45YtdTaxRule.ToPointer(),
                Territory: shared.EmployerEmployerTerritoryEnumUnitedKingdom.ToPointer(),
            },
        },
        EmployerID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employer != nil {
        // handle response
    }
}
```

## PutEmployerSecret

Create / update an employer secret at the given resource location

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
    res, err := s.Employer.PutEmployerSecret(ctx, operations.PutEmployerSecretRequest{
        APIVersion: "facere",
        Authorization: "fuga",
        EmployerID: "praesentium",
        SecretID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployerSecret != nil {
        // handle response
    }
}
```
