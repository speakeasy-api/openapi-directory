# Report

### Available Operations

* [GenerateQAReport](#generateqareport) - Generate a QA report for given filter
* [GetFilterContents](#getfiltercontents) - Returns available options for selected timeframe.
* [GetLanguagePairsReport](#getlanguagepairsreport) - Language pairs report
* [GetProjectsReport](#getprojectsreport) - Projects report
* [GetUsersReport](#getusersreport) - Company users report

## GenerateQAReport

Generate a QA report for given filter

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GenerateQAReport(ctx, shared.QaFilter{
        BudgetCodes: []string{
            "quas",
            "praesentium",
        },
        Categories: []string{
            "deleniti",
        },
        Clients: []float64{
            6813.93,
        },
        DateFrom: types.MustTimeFromString("2022-06-12T08:30:58.411Z"),
        DateTo: types.MustTimeFromString("2022-09-28T22:21:45.403Z"),
        Documents: []float64{
            3926.76,
            1470.14,
        },
        Projects: []float64{
            1598.7,
            1871.31,
            1294.12,
            9039.84,
        },
        Severities: []string{
            "atque",
            "et",
            "esse",
        },
        SourceLanguages: []string{
            "accusamus",
            "veritatis",
            "esse",
            "quod",
        },
        Subjects: []string{
            "vero",
            "aliquid",
            "quasi",
        },
        TargetLanguages: []string{
            "vel",
            "harum",
            "molestiae",
            "rerum",
        },
        Vendors: []float64{
            3277.2,
            7162.44,
            7567.79,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QaWarnings != nil {
        // handle response
    }
}
```

## GetFilterContents

Returns available options for selected timeframe.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GetFilterContents(ctx, shared.FilterDates{
        DateFrom: types.MustTimeFromString("2022-05-13T20:06:18.158Z"),
        DateTo: types.MustTimeFromString("2022-07-09T18:50:40.536Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FilterContents != nil {
        // handle response
    }
}
```

## GetLanguagePairsReport

View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GetLanguagePairsReport(ctx, shared.ReportFilter{
        BudgetCode: sdk.String("cumque"),
        DateFrom: types.MustTimeFromString("2022-12-28T10:26:44.811Z"),
        DateTo: types.MustTimeFromString("2022-01-28T10:14:21.975Z"),
        SourceLanguages: []string{
            "consectetur",
            "esse",
            "blanditiis",
            "provident",
        },
        TargetLanguages: []string{
            "nulla",
            "quas",
            "esse",
            "quasi",
        },
        Users: []int64{
            621679,
            575751,
            863023,
            820767,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LanguagePairsReport != nil {
        // handle response
    }
}
```

## GetProjectsReport

View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GetProjectsReport(ctx, shared.ReportFilter{
        BudgetCode: sdk.String("quia"),
        DateFrom: types.MustTimeFromString("2020-01-10T06:57:07.831Z"),
        DateTo: types.MustTimeFromString("2022-09-29T22:10:17.894Z"),
        SourceLanguages: []string{
            "quasi",
        },
        TargetLanguages: []string{
            "culpa",
            "aliquid",
            "tenetur",
        },
        Users: []int64{
            936747,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProjectList != nil {
        // handle response
    }
}
```

## GetUsersReport

View translation reports for each user under your company account. You need the permission to view users in your company.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Report.GetUsersReport(ctx, shared.ReportFilter{
        BudgetCode: sdk.String("vel"),
        DateFrom: types.MustTimeFromString("2022-09-28T13:55:38.564Z"),
        DateTo: types.MustTimeFromString("2021-04-21T04:50:55.832Z"),
        SourceLanguages: []string{
            "accusantium",
            "aliquam",
            "sapiente",
        },
        TargetLanguages: []string{
            "ullam",
        },
        Users: []int64{
            356707,
            391774,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersReport != nil {
        // handle response
    }
}
```
