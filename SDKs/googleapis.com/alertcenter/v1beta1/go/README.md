# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/alertcenter/v1beta1/go
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

    req := operations.AlertcenterAlertsBatchDeleteRequest{
        DollarXgafv: "2",
        BatchDeleteAlertsRequest: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            CustomerID: "nulla",
        },
        AccessToken: "corrupti",
        Alt: "proto",
        Callback: "vel",
        Fields: "error",
        Key: "deserunt",
        OauthToken: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, req, operations.AlertcenterAlertsBatchDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteAlertsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Alerts

* `AlertcenterAlertsBatchDelete` - Performs batch delete operation on alerts.
* `AlertcenterAlertsBatchUndelete` - Performs batch undelete operation on alerts.
* `AlertcenterAlertsDelete` - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* `AlertcenterAlertsFeedbackCreate` - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* `AlertcenterAlertsFeedbackList` - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* `AlertcenterAlertsGet` - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* `AlertcenterAlertsGetMetadata` - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* `AlertcenterAlertsList` - Lists the alerts.
* `AlertcenterAlertsUndelete` - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### V1beta1

* `AlertcenterGetSettings` - Returns customer-level settings.
* `AlertcenterUpdateSettings` - Updates the customer-level settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
