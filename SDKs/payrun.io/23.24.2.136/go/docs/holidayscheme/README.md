# HolidayScheme

### Available Operations

* [DeleteHolidayScheme](#deleteholidayscheme) - Delete an holiday scheme
* [DeleteHolidaySchemeRevision](#deleteholidayschemerevision) - Delete an holiday scheme revision matching the specified revision date.
* [DeleteHolidaySchemeRevisionByNumber](#deleteholidayschemerevisionbynumber) - Delete an HolidayScheme revision matching the specified revision number.
* [DeleteHolidaySchemeTag](#deleteholidayschemetag) - Delete holiday scheme tag
* [GetAllHolidaySchemeTags](#getallholidayschemetags) - Get all holiday scheme tags
* [GetHolidaySchemeByEffectiveDate](#getholidayschemebyeffectivedate) - Get holiday scheme by effective date.
* [GetHolidaySchemeFromEmployer](#getholidayschemefromemployer) - Get holiday scheme from employer
* [GetHolidaySchemeRevisionByNumber](#getholidayschemerevisionbynumber) - Gets the holiday scheme revision by revision number
* [GetHolidaySchemeRevisions](#getholidayschemerevisions) - Get all holiday scheme revisions
* [GetHolidaySchemesByEffectiveDate](#getholidayschemesbyeffectivedate) - Get holiday schemes from employer at a given effective date.
* [GetHolidaySchemesFromEmployer](#getholidayschemesfromemployer) - Get holiday schemes from employer.
* [GetHolidaySchemesWithTag](#getholidayschemeswithtag) - Get holiday schemes with tag
* [GetTagFromHolidayScheme](#gettagfromholidayscheme) - Get holiday scheme tag
* [GetTagFromHolidaySchemeRevision](#gettagfromholidayschemerevision) - Get holiday scheme revision tag
* [GetTagsFromHolidayScheme](#gettagsfromholidayscheme) - Get all tags from the holiday scheme
* [GetTagsFromHolidaySchemeRevision](#gettagsfromholidayschemerevision) - Get all holiday scheme revision tags
* [PatchHolidayScheme](#patchholidayscheme) - Patches the holiday scheme
* [PostHolidaySchemeIntoEmployer](#postholidayschemeintoemployer) - Create a new holiday scheme
* [PutHolidaySchemeIntoEmployer](#putholidayschemeintoemployer) - Updates the holiday scheme
* [PutHolidaySchemeTag](#putholidayschemetag) - Insert holiday scheme tag

## DeleteHolidayScheme

Delete the specified holiday scheme

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
    res, err := s.HolidayScheme.DeleteHolidayScheme(ctx, operations.DeleteHolidaySchemeRequest{
        APIVersion: "veniam",
        Authorization: "voluptatem",
        EmployerID: "quisquam",
        HolidaySchemeID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHolidaySchemeRevision

Deletes the specified holiday scheme revision for the matching revision date

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
    res, err := s.HolidayScheme.DeleteHolidaySchemeRevision(ctx, operations.DeleteHolidaySchemeRevisionRequest{
        APIVersion: "quasi",
        Authorization: "atque",
        EffectiveDate: types.MustDateFromString("2022-01-04"),
        EmployerID: "totam",
        HolidaySchemeID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHolidaySchemeRevisionByNumber

Deletes the specified holiday scheme revision for the matching revision number

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
    res, err := s.HolidayScheme.DeleteHolidaySchemeRevisionByNumber(ctx, operations.DeleteHolidaySchemeRevisionByNumberRequest{
        APIVersion: "quidem",
        Authorization: "maxime",
        EmployerID: "et",
        HolidaySchemeID: "esse",
        RevisionNumber: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHolidaySchemeTag

Deletes a tag from the holiday scheme

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
    res, err := s.HolidayScheme.DeleteHolidaySchemeTag(ctx, operations.DeleteHolidaySchemeTagRequest{
        APIVersion: "assumenda",
        Authorization: "ea",
        EmployerID: "atque",
        HolidaySchemeID: "error",
        TagID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllHolidaySchemeTags

Gets all the holiday scheme tags

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
    res, err := s.HolidayScheme.GetAllHolidaySchemeTags(ctx, operations.GetAllHolidaySchemeTagsRequest{
        APIVersion: "officiis",
        Authorization: "accusamus",
        EmployerID: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetHolidaySchemeByEffectiveDate

Returns the holiday scheme's state at the specified effective date.

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
    res, err := s.HolidayScheme.GetHolidaySchemeByEffectiveDate(ctx, operations.GetHolidaySchemeByEffectiveDateRequest{
        APIVersion: "minima",
        Authorization: "aspernatur",
        EffectiveDate: types.MustDateFromString("2022-01-08"),
        EmployerID: "corrupti",
        HolidaySchemeID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HolidayScheme != nil {
        // handle response
    }
}
```

## GetHolidaySchemeFromEmployer

Gets the specified holiday scheme from employer.

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
    res, err := s.HolidayScheme.GetHolidaySchemeFromEmployer(ctx, operations.GetHolidaySchemeFromEmployerRequest{
        APIVersion: "error",
        Authorization: "blanditiis",
        EmployerID: "suscipit",
        HolidaySchemeID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HolidayScheme != nil {
        // handle response
    }
}
```

## GetHolidaySchemeRevisionByNumber

Get the holiday scheme revision matching the specified revision number

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
    res, err := s.HolidayScheme.GetHolidaySchemeRevisionByNumber(ctx, operations.GetHolidaySchemeRevisionByNumberRequest{
        APIVersion: "atque",
        Authorization: "atque",
        EmployerID: "sunt",
        HolidaySchemeID: "recusandae",
        RevisionNumber: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HolidayScheme != nil {
        // handle response
    }
}
```

## GetHolidaySchemeRevisions

Gets links to all the holiday scheme revisions

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
    res, err := s.HolidayScheme.GetHolidaySchemeRevisions(ctx, operations.GetHolidaySchemeRevisionsRequest{
        APIVersion: "repellendus",
        Authorization: "labore",
        EmployerID: "reiciendis",
        HolidaySchemeID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetHolidaySchemesByEffectiveDate

Get links to all holiday schemes for the employer on specified effective date.

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
    res, err := s.HolidayScheme.GetHolidaySchemesByEffectiveDate(ctx, operations.GetHolidaySchemesByEffectiveDateRequest{
        APIVersion: "repudiandae",
        Authorization: "dicta",
        EffectiveDate: types.MustDateFromString("2022-11-23"),
        EmployerID: "dolores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetHolidaySchemesFromEmployer

Get links to all holiday schemes for the specified employer.

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
    res, err := s.HolidayScheme.GetHolidaySchemesFromEmployer(ctx, operations.GetHolidaySchemesFromEmployerRequest{
        APIVersion: "enim",
        Authorization: "laboriosam",
        EmployerID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetHolidaySchemesWithTag

Gets the holiday scheme with the tag

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
    res, err := s.HolidayScheme.GetHolidaySchemesWithTag(ctx, operations.GetHolidaySchemesWithTagRequest{
        APIVersion: "a",
        Authorization: "molestias",
        EmployerID: "magnam",
        TagID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagFromHolidayScheme

Gets the tag from the holiday scheme

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
    res, err := s.HolidayScheme.GetTagFromHolidayScheme(ctx, operations.GetTagFromHolidaySchemeRequest{
        APIVersion: "consequuntur",
        Authorization: "occaecati",
        EmployerID: "officiis",
        HolidaySchemeID: "perspiciatis",
        TagID: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagFromHolidaySchemeRevision

Gets the tag from the holiday scheme revision

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
    res, err := s.HolidayScheme.GetTagFromHolidaySchemeRevision(ctx, operations.GetTagFromHolidaySchemeRevisionRequest{
        APIVersion: "adipisci",
        Authorization: "eveniet",
        EffectiveDate: types.MustDateFromString("2022-09-06"),
        EmployerID: "fugit",
        HolidaySchemeID: "id",
        TagID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsFromHolidayScheme

Gets all the tags from the holiday scheme

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
    res, err := s.HolidayScheme.GetTagsFromHolidayScheme(ctx, operations.GetTagsFromHolidaySchemeRequest{
        APIVersion: "reprehenderit",
        Authorization: "error",
        EmployerID: "illo",
        HolidaySchemeID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetTagsFromHolidaySchemeRevision

Gets all the tags from the holiday scheme revision

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
    res, err := s.HolidayScheme.GetTagsFromHolidaySchemeRevision(ctx, operations.GetTagsFromHolidaySchemeRevisionRequest{
        APIVersion: "quidem",
        Authorization: "eveniet",
        EffectiveDate: types.MustDateFromString("2022-02-14"),
        EmployerID: "doloremque",
        HolidaySchemeID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PatchHolidayScheme

Patches the specified holiday scheme with the supplied values

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
    res, err := s.HolidayScheme.PatchHolidayScheme(ctx, operations.PatchHolidaySchemeRequest{
        APIVersion: "ipsa",
        Authorization: "totam",
        EmployerID: "quae",
        HolidayScheme: shared.HolidayScheme{
            HolidayScheme: &shared.HolidaySchemeHolidayScheme{
                AccrualPayCodes: &shared.HolidaySchemeHolidaySchemeAccrualPayCodes{
                    PayCode: []string{
                        "eveniet",
                        "qui",
                    },
                },
                AllowExceedAnnualEntitlement: sdk.Bool(false),
                AllowNegativeBalance: sdk.Bool(false),
                AnnualEntitlementWeeks: sdk.Float64(7398.84),
                BankHolidayInclusive: sdk.Bool(false),
                Code: sdk.String("iure"),
                EffectiveDate: types.MustDateFromString("2022-06-09"),
                MaxCarryOverDays: sdk.Float64(6725.82),
                NextRevisionDate: types.MustDateFromString("2021-12-10"),
                OffsetPayment: sdk.Bool(false),
                Revision: sdk.Int(523006),
                SchemeCeasedDate: types.MustDateFromString("2022-09-05"),
                SchemeKey: sdk.String("repellat"),
                SchemeName: sdk.String("alias"),
                YearStartDay: sdk.Int(362189),
                YearStartMonth: sdk.Int(597303),
            },
        },
        HolidaySchemeID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HolidayScheme != nil {
        // handle response
    }
}
```

## PostHolidaySchemeIntoEmployer

Create a new holiday scheme object

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
    res, err := s.HolidayScheme.PostHolidaySchemeIntoEmployer(ctx, operations.PostHolidaySchemeIntoEmployerRequest{
        APIVersion: "mollitia",
        Authorization: "voluptas",
        EmployerID: "alias",
        HolidayScheme: shared.HolidayScheme{
            HolidayScheme: &shared.HolidaySchemeHolidayScheme{
                AccrualPayCodes: &shared.HolidaySchemeHolidaySchemeAccrualPayCodes{
                    PayCode: []string{
                        "reiciendis",
                        "dolores",
                        "id",
                        "minima",
                    },
                },
                AllowExceedAnnualEntitlement: sdk.Bool(false),
                AllowNegativeBalance: sdk.Bool(false),
                AnnualEntitlementWeeks: sdk.Float64(2931.44),
                BankHolidayInclusive: sdk.Bool(false),
                Code: sdk.String("dolorum"),
                EffectiveDate: types.MustDateFromString("2022-12-08"),
                MaxCarryOverDays: sdk.Float64(9257.03),
                NextRevisionDate: types.MustDateFromString("2022-05-20"),
                OffsetPayment: sdk.Bool(false),
                Revision: sdk.Int(477646),
                SchemeCeasedDate: types.MustDateFromString("2022-09-19"),
                SchemeKey: sdk.String("culpa"),
                SchemeName: sdk.String("adipisci"),
                YearStartDay: sdk.Int(890653),
                YearStartMonth: sdk.Int(514513),
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

## PutHolidaySchemeIntoEmployer

Updates the existing specified holiday scheme object

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
    res, err := s.HolidayScheme.PutHolidaySchemeIntoEmployer(ctx, operations.PutHolidaySchemeIntoEmployerRequest{
        APIVersion: "eum",
        Authorization: "nemo",
        EmployerID: "recusandae",
        HolidayScheme: shared.HolidayScheme{
            HolidayScheme: &shared.HolidaySchemeHolidayScheme{
                AccrualPayCodes: &shared.HolidaySchemeHolidaySchemeAccrualPayCodes{
                    PayCode: []string{
                        "provident",
                        "quis",
                    },
                },
                AllowExceedAnnualEntitlement: sdk.Bool(false),
                AllowNegativeBalance: sdk.Bool(false),
                AnnualEntitlementWeeks: sdk.Float64(4317.85),
                BankHolidayInclusive: sdk.Bool(false),
                Code: sdk.String("reiciendis"),
                EffectiveDate: types.MustDateFromString("2022-09-25"),
                MaxCarryOverDays: sdk.Float64(3545.06),
                NextRevisionDate: types.MustDateFromString("2022-05-06"),
                OffsetPayment: sdk.Bool(false),
                Revision: sdk.Int(343392),
                SchemeCeasedDate: types.MustDateFromString("2021-10-26"),
                SchemeKey: sdk.String("possimus"),
                SchemeName: sdk.String("animi"),
                YearStartDay: sdk.Int(402767),
                YearStartMonth: sdk.Int(397257),
            },
        },
        HolidaySchemeID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.HolidayScheme != nil {
        // handle response
    }
}
```

## PutHolidaySchemeTag

Inserts a new tag on the holiday scheme

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
    res, err := s.HolidayScheme.PutHolidaySchemeTag(ctx, operations.PutHolidaySchemeTagRequest{
        APIVersion: "repellat",
        Authorization: "doloribus",
        EmployerID: "ullam",
        HolidaySchemeID: "in",
        TagID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```
