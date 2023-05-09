# PayCode

### Available Operations

* [DeletePayCode](#deletepaycode) - Deletes a pay code
* [DeletePayCodeRevision](#deletepaycoderevision) - Deletes a pay code revision
* [DeletePayCodeRevisionByNumber](#deletepaycoderevisionbynumber) - Delete an PayCode revision matching the specified revision number.
* [GetAllPayCodeTags](#getallpaycodetags) - Get all pay code tags
* [GetPayCodeByEffectiveDate](#getpaycodebyeffectivedate) - Gets pay code for specified date
* [GetPayCodeFromEmployer](#getpaycodefromemployer) - Gets the specified pay code from the employer
* [GetPayCodeRevisionByNumber](#getpaycoderevisionbynumber) - Gets the pay code by revision number
* [GetPayCodeRevisions](#getpaycoderevisions) - Get all revisions of the Pay Code
* [GetPayCodesByEffectiveDate](#getpaycodesbyeffectivedate) - Gets all pay codes for specified date
* [GetPayCodesFromEmployer](#getpaycodesfromemployer) - Gets the pay codes from the employer
* [GetPayCodesFromNominalCode](#getpaycodesfromnominalcode) - Gets the pay codes by nominal code
* [GetPayCodesWithTag](#getpaycodeswithtag) - Get pay codes with tag
* [PatchPayCode](#patchpaycode) - Patches the pay code
* [PostPayCode](#postpaycode) - Create a new pay code
* [PutPayCode](#putpaycode) - Updates a pay code

## DeletePayCode

Delete the specified pay code

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
    res, err := s.PayCode.DeletePayCode(ctx, operations.DeletePayCodeRequest{
        APIVersion: "soluta",
        Authorization: "repudiandae",
        EmployerID: "nam",
        PayCodeID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePayCodeRevision

Delete the pay code revision for the specified date

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
    res, err := s.PayCode.DeletePayCodeRevision(ctx, operations.DeletePayCodeRevisionRequest{
        APIVersion: "iusto",
        Authorization: "voluptate",
        EffectiveDate: types.MustDateFromString("2022-07-04"),
        EmployerID: "neque",
        PayCodeID: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePayCodeRevisionByNumber

Deletes the specified pay code revision for the matching revision number

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
    res, err := s.PayCode.DeletePayCodeRevisionByNumber(ctx, operations.DeletePayCodeRevisionByNumberRequest{
        APIVersion: "deleniti",
        Authorization: "quibusdam",
        EmployerID: "iure",
        PayCodeID: "odit",
        RevisionNumber: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllPayCodeTags

Gets all the pay code tags

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
    res, err := s.PayCode.GetAllPayCodeTags(ctx, operations.GetAllPayCodeTagsRequest{
        APIVersion: "vel",
        Authorization: "magnam",
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

## GetPayCodeByEffectiveDate

Gets the pay code revision for the specified effective date

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
    res, err := s.PayCode.GetPayCodeByEffectiveDate(ctx, operations.GetPayCodeByEffectiveDateRequest{
        APIVersion: "inventore",
        Authorization: "facere",
        EffectiveDate: types.MustDateFromString("2022-10-18"),
        EmployerID: "voluptatibus",
        PayCodeID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayCode != nil {
        // handle response
    }
}
```

## GetPayCodeFromEmployer

Returns the specified pay code from the employer

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
    res, err := s.PayCode.GetPayCodeFromEmployer(ctx, operations.GetPayCodeFromEmployerRequest{
        APIVersion: "porro",
        Authorization: "aliquam",
        EmployerID: "velit",
        PayCodeID: "illo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayCode != nil {
        // handle response
    }
}
```

## GetPayCodeRevisionByNumber

Get the pay code revision matching the specified revision number

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
    res, err := s.PayCode.GetPayCodeRevisionByNumber(ctx, operations.GetPayCodeRevisionByNumberRequest{
        APIVersion: "accusantium",
        Authorization: "vel",
        EmployerID: "ea",
        PayCodeID: "beatae",
        RevisionNumber: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayCode != nil {
        // handle response
    }
}
```

## GetPayCodeRevisions

Returns links to all revisions of the pay code

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
    res, err := s.PayCode.GetPayCodeRevisions(ctx, operations.GetPayCodeRevisionsRequest{
        APIVersion: "excepturi",
        Authorization: "eum",
        EmployerID: "velit",
        PayCodeID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayCodesByEffectiveDate

Gets the effective pay code revision for the specified date

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
    res, err := s.PayCode.GetPayCodesByEffectiveDate(ctx, operations.GetPayCodesByEffectiveDateRequest{
        APIVersion: "perspiciatis",
        Authorization: "earum",
        EffectiveDate: types.MustDateFromString("2022-03-25"),
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

## GetPayCodesFromEmployer

Get links to all the pay codes for the specified employer

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
    res, err := s.PayCode.GetPayCodesFromEmployer(ctx, operations.GetPayCodesFromEmployerRequest{
        APIVersion: "iste",
        Authorization: "itaque",
        EmployerID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayCodesFromNominalCode

Get the pay codes that share the specified nominal code

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
    res, err := s.PayCode.GetPayCodesFromNominalCode(ctx, operations.GetPayCodesFromNominalCodeRequest{
        APIVersion: "nisi",
        Authorization: "itaque",
        EmployerID: "velit",
        NominalCodeID: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayCodesWithTag

Gets the pay codes with the tag

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
    res, err := s.PayCode.GetPayCodesWithTag(ctx, operations.GetPayCodesWithTagRequest{
        APIVersion: "non",
        Authorization: "dolor",
        EmployerID: "iusto",
        TagID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchPayCode

Patches the specified pay code object with the supplied values

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
    res, err := s.PayCode.PatchPayCode(ctx, operations.PatchPayCodeRequest{
        APIVersion: "doloremque",
        Authorization: "consequatur",
        EmployerID: "officia",
        PayCode: shared.PayCode{
            PayCode: &shared.PayCodePayCode{
                Benefit: sdk.Bool(false),
                Code: sdk.String("recusandae"),
                Description: sdk.String("ea"),
                EffectiveDate: types.MustDateFromString("2022-03-31"),
                MetaData: map[string]interface{}{
                    "placeat": "perspiciatis",
                    "expedita": "deleniti",
                    "a": "voluptate",
                },
                NextRevisionDate: types.MustDateFromString("2022-05-26"),
                Niable: sdk.Bool(false),
                NominalCode: &shared.PayCodePayCodeNominalCode{
                    AtHref: sdk.String("necessitatibus"),
                    AtRel: sdk.String("animi"),
                    AtTitle: sdk.String("impedit"),
                },
                NonArrestable: sdk.Bool(false),
                Notional: sdk.Bool(false),
                Readonly: sdk.Bool(false),
                Region: shared.PayCodePayCodeRegionEnumEngland.ToPointer(),
                Revision: sdk.Int(357425),
                Taxable: sdk.Bool(false),
                Territory: shared.PayCodePayCodeTerritoryEnumUnitedKingdom.ToPointer(),
                Type: shared.PayCodePayCodeTypeEnumDeduction.ToPointer(),
            },
        },
        PayCodeID: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayCode != nil {
        // handle response
    }
}
```

## PostPayCode

Create a new pay code object

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
    res, err := s.PayCode.PostPayCode(ctx, operations.PostPayCodeRequest{
        APIVersion: "esse",
        Authorization: "labore",
        EmployerID: "veritatis",
        PayCode: shared.PayCode{
            PayCode: &shared.PayCodePayCode{
                Benefit: sdk.Bool(false),
                Code: sdk.String("vero"),
                Description: sdk.String("consectetur"),
                EffectiveDate: types.MustDateFromString("2022-12-02"),
                MetaData: map[string]interface{}{
                    "ad": "qui",
                },
                NextRevisionDate: types.MustDateFromString("2022-03-12"),
                Niable: sdk.Bool(false),
                NominalCode: &shared.PayCodePayCodeNominalCode{
                    AtHref: sdk.String("nemo"),
                    AtRel: sdk.String("soluta"),
                    AtTitle: sdk.String("libero"),
                },
                NonArrestable: sdk.Bool(false),
                Notional: sdk.Bool(false),
                Readonly: sdk.Bool(false),
                Region: shared.PayCodePayCodeRegionEnumScotland.ToPointer(),
                Revision: sdk.Int(678060),
                Taxable: sdk.Bool(false),
                Territory: shared.PayCodePayCodeTerritoryEnumUnitedKingdom.ToPointer(),
                Type: shared.PayCodePayCodeTypeEnumPayment.ToPointer(),
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

## PutPayCode

Updates the existing specified pay code object

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
    res, err := s.PayCode.PutPayCode(ctx, operations.PutPayCodeRequest{
        APIVersion: "fugit",
        Authorization: "alias",
        EmployerID: "magni",
        PayCode: shared.PayCode{
            PayCode: &shared.PayCodePayCode{
                Benefit: sdk.Bool(false),
                Code: sdk.String("vel"),
                Description: sdk.String("quae"),
                EffectiveDate: types.MustDateFromString("2022-09-26"),
                MetaData: map[string]interface{}{
                    "exercitationem": "itaque",
                },
                NextRevisionDate: types.MustDateFromString("2022-10-14"),
                Niable: sdk.Bool(false),
                NominalCode: &shared.PayCodePayCodeNominalCode{
                    AtHref: sdk.String("unde"),
                    AtRel: sdk.String("nulla"),
                    AtTitle: sdk.String("distinctio"),
                },
                NonArrestable: sdk.Bool(false),
                Notional: sdk.Bool(false),
                Readonly: sdk.Bool(false),
                Region: shared.PayCodePayCodeRegionEnumWales.ToPointer(),
                Revision: sdk.Int(157222),
                Taxable: sdk.Bool(false),
                Territory: shared.PayCodePayCodeTerritoryEnumUnitedKingdom.ToPointer(),
                Type: shared.PayCodePayCodeTypeEnumNotSet.ToPointer(),
            },
        },
        PayCodeID: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayCode != nil {
        // handle response
    }
}
```
