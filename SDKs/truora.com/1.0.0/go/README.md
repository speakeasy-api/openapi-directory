# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/truora.com/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Behavior.ReportBehavior(ctx, shared.CreateBehaviorInput{
        BirthDate: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Country: shared.CreateBehaviorInputCountryEnumCr,
        DocumentID: "quibusdam",
        DocumentType: shared.CreateBehaviorInputDocumentTypeEnumName,
        Email: "Karley_Stamm@hotmail.com",
        FeedbackDate: types.MustTimeFromString("2022-03-26T09:37:56.283Z"),
        FirstName: "Hunter",
        LastName: "Gulgowski",
        PhoneNumber: sdk.String("debitis"),
        Reason: shared.CreateBehaviorInputReasonEnumRape,
    }, operations.ReportBehaviorSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviourOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Behavior](docs/behavior/README.md)

* [ReportBehavior](docs/behavior/README.md#reportbehavior) - Report Behavior

### [Checks](docs/checks/README.md)

* [GetHealthDashboard](docs/checks/README.md#gethealthdashboard) - Get Health Dashboard
* [CreateCheck](docs/checks/README.md#createcheck) - Create a background check
* [GetCheck](docs/checks/README.md#getcheck) - Get Background Check
* [ListCheckDetails](docs/checks/README.md#listcheckdetails) - List Check Details
* [ListChecks](docs/checks/README.md#listchecks) - List Checks

### [Continuous](docs/continuous/README.md)

* [GetContinuousCheck](docs/continuous/README.md#getcontinuouscheck) - Lists history associated with a Check. It can be paginated
* [ListContinuousChecks](docs/continuous/README.md#listcontinuouschecks) - Lists all continuous checks
* [UpdateContinuousCheck](docs/continuous/README.md#updatecontinuouscheck) - Updates a continuous check
* [CreateContinuousCheck](docs/continuous/README.md#createcontinuouscheck) - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* [GetV1ContinuousChecksContinuousCheckIDHistory](docs/continuous/README.md#getv1continuouscheckscontinuouscheckidhistory) - Lists background check logs. It can be paginated


### [CustomType](docs/customtype/README.md)

* [DeleteCustomType](docs/customtype/README.md#deletecustomtype) - Delete Custom Type
* [UpdateCustomType](docs/customtype/README.md#updatecustomtype) - Update Custom Type
* [CreateScoreConfig](docs/customtype/README.md#createscoreconfig) - Create Score Configurations
* [ListScoreConfigs](docs/customtype/README.md#listscoreconfigs) - List Score Configurations

### [Hooks](docs/hooks/README.md)

* [CreateHook](docs/hooks/README.md#createhook) - Creates a hook subscription
* [DeletHook](docs/hooks/README.md#delethook) - Deletes hook
* [ListHook](docs/hooks/README.md#listhook) - Lists all hooks
* [UpdateHook](docs/hooks/README.md#updatehook) - Updates hook

### [Pdf](docs/pdf/README.md)

* [CreatePDF](docs/pdf/README.md#createpdf) - Create PDF
* [GetPDF](docs/pdf/README.md#getpdf) - Get PDF

### [Reports](docs/reports/README.md)

* [BatchUpload](docs/reports/README.md#batchupload) - Batch Upload
* [CreateReport](docs/reports/README.md#createreport) - Create Report
* [GetReport](docs/reports/README.md#getreport) - Get Report
* [ListReports](docs/reports/README.md#listreports) - List Reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
