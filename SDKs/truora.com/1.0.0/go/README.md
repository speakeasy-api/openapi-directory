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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.CreateBehaviorInput{
        BirthDate: "2021-10-25T05:21:43.948Z",
        Country: "cr",
        DocumentID: "quibusdam",
        DocumentType: "name",
        Email: "Karley_Stamm@hotmail.com",
        FeedbackDate: "2022-03-26T09:37:56.283Z",
        FirstName: "Hunter",
        LastName: "Gulgowski",
        PhoneNumber: "debitis",
        Reason: "rape",
    }

    ctx := context.Background()
    res, err := s.Behavior.ReportBehavior(ctx, req, operations.ReportBehaviorSecurity{
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


### Behavior

* `ReportBehavior` - Report Behavior

### Checks

* `GetHealthDashboard` - Get Health Dashboard
* `CreateCheck` - Create a background check
* `GetCheck` - Get Background Check
* `ListCheckDetails` - List Check Details
* `ListChecks` - List Checks

### Continuous

* `GetContinuousCheck` - Lists history associated with a Check. It can be paginated
* `ListContinuousChecks` - Lists all continuous checks
* `UpdateContinuousCheck` - Updates a continuous check
* `CreateContinuousCheck` - Creates a continuous check that will run background checks recurrently according to the frequency provided.
* `GetV1ContinuousChecksContinuousCheckIDHistory` - Lists background check logs. It can be paginated


### CustomType

* `DeleteCustomType` - Delete Custom Type
* `UpdateCustomType` - Update Custom Type
* `CreateScoreConfig` - Create Score Configurations
* `ListScoreConfigs` - List Score Configurations

### Hooks

* `CreateHook` - Creates a hook subscription
* `DeletHook` - Deletes hook
* `ListHook` - Lists all hooks
* `UpdateHook` - Updates hook

### Pdf

* `CreatePDF` - Create PDF
* `GetPDF` - Get PDF

### Reports

* `BatchUpload` - Batch Upload
* `CreateReport` - Create Report
* `GetReport` - Get Report
* `ListReports` - List Reports
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
