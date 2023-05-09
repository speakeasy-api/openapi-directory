# ExportEvents

### Available Operations

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch

## CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent

Imports event logs related to the onboarding app into elastisearch

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ExportEvents.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody{
            LogEvent: "alias",
            Request: sdk.String("at"),
            TargetOS: sdk.String("dignissimos"),
            Timestamp: 400351,
        },
        OrganizationID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject != nil {
        // handle response
    }
}
```
