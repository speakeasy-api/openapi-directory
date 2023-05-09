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
    res, err := s.Alerts.AlertcenterAlertsBatchDelete(ctx, operations.AlertcenterAlertsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeleteAlertsRequest: &shared.BatchDeleteAlertsRequest{
            AlertID: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            CustomerID: sdk.String("nulla"),
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.AlertcenterAlertsBatchDeleteSecurity{
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


### [Alerts](docs/alerts/README.md)

* [AlertcenterAlertsBatchDelete](docs/alerts/README.md#alertcenteralertsbatchdelete) - Performs batch delete operation on alerts.
* [AlertcenterAlertsBatchUndelete](docs/alerts/README.md#alertcenteralertsbatchundelete) - Performs batch undelete operation on alerts.
* [AlertcenterAlertsDelete](docs/alerts/README.md#alertcenteralertsdelete) - Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
* [AlertcenterAlertsFeedbackCreate](docs/alerts/README.md#alertcenteralertsfeedbackcreate) - Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
* [AlertcenterAlertsFeedbackList](docs/alerts/README.md#alertcenteralertsfeedbacklist) - Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsGet](docs/alerts/README.md#alertcenteralertsget) - Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsGetMetadata](docs/alerts/README.md#alertcenteralertsgetmetadata) - Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
* [AlertcenterAlertsList](docs/alerts/README.md#alertcenteralertslist) - Lists the alerts.
* [AlertcenterAlertsUndelete](docs/alerts/README.md#alertcenteralertsundelete) - Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.

### [V1beta1](docs/v1beta1/README.md)

* [AlertcenterGetSettings](docs/v1beta1/README.md#alertcentergetsettings) - Returns customer-level settings.
* [AlertcenterUpdateSettings](docs/v1beta1/README.md#alertcenterupdatesettings) - Updates the customer-level settings.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
