# Imports

### Available Operations

* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation

## CreateOrganizationInventoryOnboardingCloudMonitoringImport

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

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
    res, err := s.Imports.CreateOrganizationInventoryOnboardingCloudMonitoringImport(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "dolorum",
                    NetworkID: "velit",
                    Udi: "veritatis",
                },
            },
        },
        OrganizationID: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryOnboardingCloudMonitoringImports

Check the status of a committed Import operation

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
    res, err := s.Imports.GetOrganizationInventoryOnboardingCloudMonitoringImports(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest{
        ImportIds: []string{
            "distinctio",
            "veritatis",
            "tempora",
        },
        OrganizationID: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
