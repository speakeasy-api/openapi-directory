# Reports

### Available Operations

* [DeleteReportDefinition](#deletereportdefinition) - Deletes a report definition
* [DeleteTransformDefinition](#deletetransformdefinition) - Deletes a transform definition
* [GetActivePayInstructionsReportOutput](#getactivepayinstructionsreportoutput) - Runs the active pay instructions report
* [GetAoeLiabilityReportOuput](#getaoeliabilityreportouput) - Runs the AOE liability report
* [GetDpsMessageReportOutput](#getdpsmessagereportoutput) - Runs the DPS message report
* [GetEmployerSummaryReportOuput](#getemployersummaryreportouput) - Runs the employer summary report
* [GetGrossToNetReportOutput](#getgrosstonetreportoutput) - Runs the gross to net report
* [GetHolidayBalanceReportOutput](#getholidaybalancereportoutput) - Runs the holiday balance report
* [GetJournalReportOuput](#getjournalreportouput) - Runs the journal report
* [GetLastPayDateReportOuput](#getlastpaydatereportouput) - Runs the last pay date report
* [GetNetPayReportOutput](#getnetpayreportoutput) - Runs the net pay report
* [GetNextPayPeriodDatesReportOutput](#getnextpayperioddatesreportoutput) - Runs the next pay period report
* [GetP11SummaryReportOutput](#getp11summaryreportoutput) - Runs the P11 summary report
* [GetP32NetReportOutput](#getp32netreportoutput) - Runs the P32 report
* [GetP32SummaryNetReportOutput](#getp32summarynetreportoutput) - Runs the P32 summary report
* [GetP45ReportOutput](#getp45reportoutput) - Runs the P45 report
* [GetP60ReportOutput](#getp60reportoutput) - Runs the P60 report
* [GetPapdisReportOuput](#getpapdisreportouput) - Runs the PAPDIS report
* [GetPassReportOuput](#getpassreportouput) - Runs the PASS report
* [GetPayDashboardPayslipReportOuput](#getpaydashboardpayslipreportouput) - Runs the Pay Dashboard payslips report
* [GetPayslip3ReportOutput](#getpayslip3reportoutput) - Runs the verbose payslip report
* [GetPensionLiabilityReportOutput](#getpensionliabilityreportoutput) - Runs the pension liability report
* [GetReportDefinitionFromApplication](#getreportdefinitionfromapplication) - Get the report definition
* [GetReportDefinitionsFromApplication](#getreportdefinitionsfromapplication) - Gets all reports
* [GetReportOutput](#getreportoutput) - Runs the specified report definition
* [GetTransformDefinitionFromApplication](#gettransformdefinitionfromapplication) - Get the transform definition
* [GetTransformDefinitionsFromApplication](#gettransformdefinitionsfromapplication) - Gets all transform definitions
* [PostReportDefinition](#postreportdefinition) - Create a new report definition
* [PostTransformDefinition](#posttransformdefinition) - Create a new transform definition
* [PutReportDefinition](#putreportdefinition) - Updates a report definition
* [PutTransformDefinition](#puttransformdefinition) - Updates a transform definition

## DeleteReportDefinition

Delete the specified report definition

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
    res, err := s.Reports.DeleteReportDefinition(ctx, operations.DeleteReportDefinitionRequest{
        APIVersion: "modi",
        Authorization: "itaque",
        ReportDefinitionID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteTransformDefinition

Delete the specified transform definition

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
    res, err := s.Reports.DeleteTransformDefinition(ctx, operations.DeleteTransformDefinitionRequest{
        APIVersion: "modi",
        Authorization: "consequuntur",
        TransformDefinitionID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetActivePayInstructionsReportOutput

Returns the result of the executed active pay instructions report for the given query parameters

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
    res, err := s.Reports.GetActivePayInstructionsReportOutput(ctx, operations.GetActivePayInstructionsReportOutputRequest{
        ActiveOn: types.MustDateFromString("2020-01-18"),
        APIVersion: "impedit",
        Authorization: "porro",
        EmployeeKey: "accusamus",
        EmployerKey: "totam",
        FromDate: types.MustDateFromString("2022-10-20"),
        ToDate: types.MustDateFromString("2022-01-21"),
        Type: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetActivePayInstructionsReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetAoeLiabilityReportOuput

Returns the result of the executed AOE liability report for the given query parameters

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
    res, err := s.Reports.GetAoeLiabilityReportOuput(ctx, operations.GetAoeLiabilityReportOuputRequest{
        APIVersion: "iure",
        Authorization: "odio",
        EmployerKey: "nesciunt",
        PayScheduleKey: "debitis",
        TaxPeriod: sdk.String("vel"),
        TaxYear: "neque",
        TransformDefinitionKey: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAoeLiabilityReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetDpsMessageReportOutput

Returns the result of the executed DPS message report for the given query parameters

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
    res, err := s.Reports.GetDpsMessageReportOutput(ctx, operations.GetDpsMessageReportOutputRequest{
        APIVersion: "voluptas",
        Authorization: "consequuntur",
        EmployerKey: "officia",
        FromDate: types.MustDateFromString("2022-04-14"),
        MaxIndex: sdk.String("eius"),
        MessageStatuses: sdk.String("ipsa"),
        MessageTypes: sdk.String("rem"),
        StartIndex: sdk.String("maiores"),
        ToDate: types.MustDateFromString("2022-09-02"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDpsMessageReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetEmployerSummaryReportOuput

Returns the result of the employer summary report for the given query parameters

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
    res, err := s.Reports.GetEmployerSummaryReportOuput(ctx, operations.GetEmployerSummaryReportOuputRequest{
        APIVersion: "saepe",
        Authorization: "neque",
        ContextDate: types.MustDateFromString("2022-01-29"),
        EmployerKey: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEmployerSummaryReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetGrossToNetReportOutput

Returns the result of the executed gross to net report for the given query parameters

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
    res, err := s.Reports.GetGrossToNetReportOutput(ctx, operations.GetGrossToNetReportOutputRequest{
        APIVersion: "doloribus",
        Authorization: "fugiat",
        EmployerKey: "est",
        MaxIndex: sdk.String("delectus"),
        PayScheduleKey: "velit",
        StartIndex: sdk.String("vitae"),
        TaxPeriod: sdk.String("nesciunt"),
        TaxYear: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGrossToNetReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetHolidayBalanceReportOutput

Returns the result of the executed holiday balance report for the given query parameters

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
    res, err := s.Reports.GetHolidayBalanceReportOutput(ctx, operations.GetHolidayBalanceReportOutputRequest{
        APIVersion: "illo",
        Authorization: "repellat",
        EmployeeCodes: sdk.String("nemo"),
        EmployerKey: "doloribus",
        HolidayYearEnd: types.MustDateFromString("2021-03-11"),
        MaxIndex: sdk.String("incidunt"),
        StartIndex: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHolidayBalanceReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetJournalReportOuput

Returns the result of the journal report for the given query parameters

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
    res, err := s.Reports.GetJournalReportOuput(ctx, operations.GetJournalReportOuputRequest{
        APIVersion: "ipsam",
        Authorization: "cupiditate",
        EmployerKey: "optio",
        LedgerTarget: "alias",
        PayFrequency: "quidem",
        TaxPeriod: sdk.String("nesciunt"),
        TaxYear: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetJournalReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetLastPayDateReportOuput

Returns the result of the executed last pay date report for the given query parameters

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
    res, err := s.Reports.GetLastPayDateReportOuput(ctx, operations.GetLastPayDateReportOuputRequest{
        APIVersion: "sapiente",
        Authorization: "consequuntur",
        EmployeeKey: "veniam",
        EmployerKey: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLastPayDateReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetNetPayReportOutput

Returns the result of the executed net pay report for the given query parameters

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
    res, err := s.Reports.GetNetPayReportOutput(ctx, operations.GetNetPayReportOutputRequest{
        APIVersion: "officia",
        Authorization: "sint",
        EmployerKey: "ut",
        MaxIndex: sdk.String("numquam"),
        PayScheduleKey: "tenetur",
        StartIndex: sdk.String("adipisci"),
        TaxPeriod: sdk.String("libero"),
        TaxYear: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetPayReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetNextPayPeriodDatesReportOutput

Returns the result of the executed next pay period report for the given query parameters

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
    res, err := s.Reports.GetNextPayPeriodDatesReportOutput(ctx, operations.GetNextPayPeriodDatesReportOutputRequest{
        APIVersion: "minima",
        Authorization: "ex",
        EmployerKey: "minus",
        PayScheduleKey: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetP11SummaryReportOutput

Returns the result of the executed P11 summary report for the given query parameters

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
    res, err := s.Reports.GetP11SummaryReportOutput(ctx, operations.GetP11SummaryReportOutputRequest{
        APIVersion: "beatae",
        Authorization: "hic",
        EmployerKey: "nisi",
        MaxIndex: sdk.String("quisquam"),
        PayScheduleKey: "dolor",
        StartIndex: sdk.String("ducimus"),
        TaxYear: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetP11SummaryReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetP32NetReportOutput

Returns the result of the executed P32 report for the given query parameters

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
    res, err := s.Reports.GetP32NetReportOutput(ctx, operations.GetP32NetReportOutputRequest{
        APIVersion: "minima",
        Authorization: "architecto",
        EmployerKey: "qui",
        TaxYear: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetP32NetReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetP32SummaryNetReportOutput

Returns the result of the executed P32 summary report for the given query parameters

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
    res, err := s.Reports.GetP32SummaryNetReportOutput(ctx, operations.GetP32SummaryNetReportOutputRequest{
        APIVersion: "magni",
        Authorization: "incidunt",
        EmployerKey: "adipisci",
        TaxYear: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetP32SummaryNetReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetP45ReportOutput

Returns the result of the executed P45 report for the given query parameters

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
    res, err := s.Reports.GetP45ReportOutput(ctx, operations.GetP45ReportOutputRequest{
        APIVersion: "dolor",
        Authorization: "exercitationem",
        EmployeeKey: "expedita",
        EmployerKey: "facilis",
        TransformDefinitionKey: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetP45ReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetP60ReportOutput

Returns the result of the executed P60 report for the given query parameters

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
    res, err := s.Reports.GetP60ReportOutput(ctx, operations.GetP60ReportOutputRequest{
        APIVersion: "sit",
        Authorization: "nemo",
        EmployeeCodes: sdk.String("culpa"),
        EmployerKey: "consequuntur",
        MaxIndex: sdk.String("amet"),
        StartIndex: sdk.String("deserunt"),
        TaxYear: "modi",
        TransformDefinitionKey: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetP60ReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPapdisReportOuput

Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/

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
    res, err := s.Reports.GetPapdisReportOuput(ctx, operations.GetPapdisReportOuputRequest{
        APIVersion: "quod",
        Authorization: "itaque",
        EmployerKey: "a",
        MessageFunctionCode: "quisquam",
        PayScheduleKey: "enim",
        PaymentDate: types.MustDateFromString("2020-07-09"),
        PensionKey: "officiis",
        TaxYear: "architecto",
        TransformDefinitionKey: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPapdisReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPassReportOuput

Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1

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
    res, err := s.Reports.GetPassReportOuput(ctx, operations.GetPassReportOuputRequest{
        APIVersion: "culpa",
        Authorization: "ipsa",
        DocumentID: "nobis",
        EmployerKey: "necessitatibus",
        IntermediaryID: "quia",
        MessageFunctionCode: "dicta",
        PayScheduleKey: "vel",
        PaymentDate: types.MustDateFromString("2021-03-20"),
        PensionKey: "ullam",
        TaxYear: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPassReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPayDashboardPayslipReportOuput

Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.

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
    res, err := s.Reports.GetPayDashboardPayslipReportOuput(ctx, operations.GetPayDashboardPayslipReportOuputRequest{
        APIVersion: "accusantium",
        Authorization: "perferendis",
        EmployeeCodes: sdk.String("veritatis"),
        EmployerKey: "provident",
        MaxIndex: sdk.String("cumque"),
        PayScheduleKey: "iure",
        PaymentDate: types.MustDateFromString("2020-08-09"),
        PublicationDate: types.MustDateFromString("2022-01-28"),
        StartIndex: sdk.String("velit"),
        TaxYear: "magnam",
        TransformDefinitionKey: sdk.String("dignissimos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayDashboardPayslipReportOuput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPayslip3ReportOutput

Returns the result of the executed verbose payslip report for the given query parameters

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
    res, err := s.Reports.GetPayslip3ReportOutput(ctx, operations.GetPayslip3ReportOutputRequest{
        APIVersion: "laboriosam",
        Authorization: "sed",
        EmployeeCodes: sdk.String("odio"),
        EmployerKey: "natus",
        MaxIndex: sdk.String("provident"),
        PayScheduleKey: "cum",
        PaymentDate: types.MustDateFromString("2020-11-21"),
        StartIndex: sdk.String("quidem"),
        TaxYear: "itaque",
        TransformDefinitionKey: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPayslip3ReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetPensionLiabilityReportOutput

Returns the result of the executed pension liability report for the given query parameters

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
    res, err := s.Reports.GetPensionLiabilityReportOutput(ctx, operations.GetPensionLiabilityReportOutputRequest{
        APIVersion: "unde",
        Authorization: "modi",
        EmployerKey: "perspiciatis",
        PensionKey: "hic",
        TaxYear: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPensionLiabilityReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetReportDefinitionFromApplication

Returns the specified report definition from the authroised application

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
    res, err := s.Reports.GetReportDefinitionFromApplication(ctx, operations.GetReportDefinitionFromApplicationRequest{
        APIVersion: "aspernatur",
        Authorization: "libero",
        ReportDefinitionID: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportDefinition != nil {
        // handle response
    }
}
```

## GetReportDefinitionsFromApplication

Get links to all saved report definitions under authorised application

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
    res, err := s.Reports.GetReportDefinitionsFromApplication(ctx, operations.GetReportDefinitionsFromApplicationRequest{
        APIVersion: "incidunt",
        Authorization: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetReportOutput

Returns the result of the executed report definition

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
    res, err := s.Reports.GetReportOutput(ctx, operations.GetReportOutputRequest{
        APIVersion: "quod",
        Authorization: "id",
        ReportDefinitionID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportOutput200ApplicationJSONBinaryString != nil {
        // handle response
    }
}
```

## GetTransformDefinitionFromApplication

Returns the specified transform definition from the authroised application

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
    res, err := s.Reports.GetTransformDefinitionFromApplication(ctx, operations.GetTransformDefinitionFromApplicationRequest{
        APIVersion: "autem",
        Authorization: "quo",
        TransformDefinitionID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransformDefinition != nil {
        // handle response
    }
}
```

## GetTransformDefinitionsFromApplication

Get links to all saved transform definitions under authorised application

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
    res, err := s.Reports.GetTransformDefinitionsFromApplication(ctx, operations.GetTransformDefinitionsFromApplicationRequest{
        APIVersion: "illum",
        Authorization: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## PostReportDefinition

Creates a new report defintion object

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
    res, err := s.Reports.PostReportDefinition(ctx, operations.PostReportDefinitionRequest{
        APIVersion: "illum",
        Authorization: "facilis",
        ReportDefinition: shared.ReportDefinition{
            ReportDefinition: &shared.ReportDefinitionReportDefinition{
                Active: sdk.Bool(false),
                Readonly: sdk.Bool(false),
                ReportQuery: &shared.ReportDefinitionReportDefinitionReportQuery{
                    Encoding: sdk.String("non"),
                    ExcludeNullOrEmptyElements: sdk.Bool(false),
                    Groups: &shared.ReportDefinitionReportDefinitionReportQueryGroup{
                        Group: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                            shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                                AtGroupName: sdk.String("assumenda"),
                                AtItemName: sdk.String("recusandae"),
                                AtLoopExpression: sdk.String("distinctio"),
                                AtPredicate: sdk.String("pariatur"),
                                AtSelector: sdk.String("ad"),
                                AtUniqueKeyVariable: sdk.String("facere"),
                                Condition: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("eveniet"),
                                        AtValueB: sdk.String("laborum"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("incidunt"),
                                        AtValueB: sdk.String("maxime"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("ipsam"),
                                        AtValueB: sdk.String("alias"),
                                    },
                                },
                                Filter: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("deserunt"),
                                        AtValue: sdk.String("molestias"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("laborum"),
                                        AtValue: sdk.String("est"),
                                    },
                                },
                                Order: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("labore"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("quo"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("perferendis"),
                                    },
                                },
                                Output: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("aliquid"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumVariable.ToPointer(),
                                    },
                                },
                            },
                            shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                                AtGroupName: sdk.String("quaerat"),
                                AtItemName: sdk.String("eligendi"),
                                AtLoopExpression: sdk.String("hic"),
                                AtPredicate: sdk.String("nostrum"),
                                AtSelector: sdk.String("officiis"),
                                AtUniqueKeyVariable: sdk.String("unde"),
                                Condition: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("error"),
                                        AtValueB: sdk.String("mollitia"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("magnam"),
                                        AtValueB: sdk.String("nostrum"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("esse"),
                                        AtValueB: sdk.String("corrupti"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("fuga"),
                                        AtValueB: sdk.String("facere"),
                                    },
                                },
                                Filter: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("quasi"),
                                        AtValue: sdk.String("deserunt"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("quod"),
                                        AtValue: sdk.String("laboriosam"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("doloremque"),
                                        AtValue: sdk.String("voluptatem"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("facere"),
                                        AtValue: sdk.String("necessitatibus"),
                                    },
                                },
                                Order: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("consequatur"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("eaque"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("architecto"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("similique"),
                                    },
                                },
                                Output: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("blanditiis"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumElement.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("magni"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumInnerText.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("sed"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumInnerText.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("impedit"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumElement.ToPointer(),
                                    },
                                },
                            },
                            shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                                AtGroupName: sdk.String("excepturi"),
                                AtItemName: sdk.String("a"),
                                AtLoopExpression: sdk.String("maiores"),
                                AtPredicate: sdk.String("laudantium"),
                                AtSelector: sdk.String("maiores"),
                                AtUniqueKeyVariable: sdk.String("alias"),
                                Condition: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("rem"),
                                        AtValueB: sdk.String("dicta"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("suscipit"),
                                        AtValueB: sdk.String("earum"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("doloribus"),
                                        AtValueB: sdk.String("velit"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("eius"),
                                        AtValueB: sdk.String("esse"),
                                    },
                                },
                                Filter: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("eligendi"),
                                        AtValue: sdk.String("quasi"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("neque"),
                                        AtValue: sdk.String("vero"),
                                    },
                                },
                                Order: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("accusantium"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("qui"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("impedit"),
                                    },
                                },
                                Output: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("incidunt"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumElement.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    RootNodeName: sdk.String("odit"),
                    SuppressMetricAttributes: sdk.Bool(false),
                    Variables: &shared.ReportDefinitionReportDefinitionReportQueryVariable{
                        Variable: []shared.ReportDefinitionReportDefinitionReportQueryVariableVariable{
                            shared.ReportDefinitionReportDefinitionReportQueryVariableVariable{
                                AtName: sdk.String("rerum"),
                                AtValue: sdk.String("alias"),
                            },
                            shared.ReportDefinitionReportDefinitionReportQueryVariableVariable{
                                AtName: sdk.String("error"),
                                AtValue: sdk.String("vel"),
                            },
                        },
                    },
                },
                SupportedTransforms: sdk.String("accusantium"),
                Title: sdk.String("Miss"),
                Version: sdk.String("laboriosam"),
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

## PostTransformDefinition

Creates a new transform defintion object

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
    res, err := s.Reports.PostTransformDefinition(ctx, operations.PostTransformDefinitionRequest{
        APIVersion: "ex",
        Authorization: "quas",
        TransformDefinition: shared.TransformDefinition{
            TransformDefinition: &shared.TransformDefinitionTransformDefinition{
                Active: sdk.Bool(false),
                ContentType: sdk.String("veritatis"),
                Definition: sdk.String("ullam"),
                DefinitionType: sdk.String("quae"),
                Readonly: sdk.Bool(false),
                SupportedReports: sdk.String("similique"),
                TaxYear: sdk.Int(278116),
                Title: sdk.String("Ms."),
                Version: sdk.String("magni"),
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

## PutReportDefinition

Updates the existing specified report definition object

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
    res, err := s.Reports.PutReportDefinition(ctx, operations.PutReportDefinitionRequest{
        APIVersion: "deserunt",
        Authorization: "delectus",
        ReportDefinition: shared.ReportDefinition{
            ReportDefinition: &shared.ReportDefinitionReportDefinition{
                Active: sdk.Bool(false),
                Readonly: sdk.Bool(false),
                ReportQuery: &shared.ReportDefinitionReportDefinitionReportQuery{
                    Encoding: sdk.String("omnis"),
                    ExcludeNullOrEmptyElements: sdk.Bool(false),
                    Groups: &shared.ReportDefinitionReportDefinitionReportQueryGroup{
                        Group: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                            shared.ReportDefinitionReportDefinitionReportQueryGroupGroup{
                                AtGroupName: sdk.String("nesciunt"),
                                AtItemName: sdk.String("maxime"),
                                AtLoopExpression: sdk.String("quis"),
                                AtPredicate: sdk.String("cupiditate"),
                                AtSelector: sdk.String("aliquam"),
                                AtUniqueKeyVariable: sdk.String("excepturi"),
                                Condition: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("laudantium"),
                                        AtValueB: sdk.String("velit"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("reiciendis"),
                                        AtValueB: sdk.String("amet"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("nemo"),
                                        AtValueB: sdk.String("ipsa"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupCondition{
                                        AtValueA: sdk.String("quisquam"),
                                        AtValueB: sdk.String("tenetur"),
                                    },
                                },
                                Filter: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("molestiae"),
                                        AtValue: sdk.String("aliquid"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("asperiores"),
                                        AtValue: sdk.String("a"),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupFilter{
                                        AtIsOr: sdk.Bool(false),
                                        AtProperty: sdk.String("nobis"),
                                        AtValue: sdk.String("perspiciatis"),
                                    },
                                },
                                Order: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOrder{
                                        AtProperty: sdk.String("dicta"),
                                    },
                                },
                                Output: []shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("commodi"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumInnerText.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("porro"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumVariablePrepend.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("quidem"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumVariable.ToPointer(),
                                    },
                                    shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutput{
                                        AtMaxLength: sdk.String("voluptates"),
                                        AtOutput: shared.ReportDefinitionReportDefinitionReportQueryGroupGroupOutputAtOutputEnumAttribute.ToPointer(),
                                    },
                                },
                            },
                        },
                    },
                    RootNodeName: sdk.String("eius"),
                    SuppressMetricAttributes: sdk.Bool(false),
                    Variables: &shared.ReportDefinitionReportDefinitionReportQueryVariable{
                        Variable: []shared.ReportDefinitionReportDefinitionReportQueryVariableVariable{
                            shared.ReportDefinitionReportDefinitionReportQueryVariableVariable{
                                AtName: sdk.String("eligendi"),
                                AtValue: sdk.String("asperiores"),
                            },
                        },
                    },
                },
                SupportedTransforms: sdk.String("esse"),
                Title: sdk.String("Ms."),
                Version: sdk.String("sint"),
            },
        },
        ReportDefinitionID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportDefinition != nil {
        // handle response
    }
}
```

## PutTransformDefinition

Updates the existing specified transform definition object

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
    res, err := s.Reports.PutTransformDefinition(ctx, operations.PutTransformDefinitionRequest{
        APIVersion: "a",
        Authorization: "animi",
        TransformDefinition: shared.TransformDefinition{
            TransformDefinition: &shared.TransformDefinitionTransformDefinition{
                Active: sdk.Bool(false),
                ContentType: sdk.String("maiores"),
                Definition: sdk.String("itaque"),
                DefinitionType: sdk.String("nulla"),
                Readonly: sdk.Bool(false),
                SupportedReports: sdk.String("deserunt"),
                TaxYear: sdk.Int(359097),
                Title: sdk.String("Mrs."),
                Version: sdk.String("officiis"),
            },
        },
        TransformDefinitionID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransformDefinition != nil {
        // handle response
    }
}
```
