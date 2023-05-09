# CloudMonitoring

### Available Operations

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device

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
    res, err := s.CloudMonitoring.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody{
            LogEvent: "maxime",
            Request: sdk.String("expedita"),
            TargetOS: sdk.String("accusantium"),
            Timestamp: 408677,
        },
        OrganizationID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent202ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.CloudMonitoring.CreateOrganizationInventoryOnboardingCloudMonitoringImport(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "optio",
                    NetworkID: "est",
                    Udi: "inventore",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "consequuntur",
                    NetworkID: "repellendus",
                    Udi: "sit",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "dolores",
                    NetworkID: "enim",
                    Udi: "aspernatur",
                },
            },
        },
        OrganizationID: "perspiciatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringImport201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## CreateOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

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
    res, err := s.CloudMonitoring.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "odio",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("alias"),
                        LocalInterface: sdk.Int64(692555),
                        LoopbackNumber: sdk.Int64(533457),
                        Name: sdk.String("Vernon Kuhn"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Santiago_Stark"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Karla Lemke"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Ernest Grimes"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Herman Morissette"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Carmen Heathcote"),
                            },
                        },
                        EndLineNumber: sdk.Int64(477352),
                        RotaryNumber: sdk.Int64(292571),
                        StartLineNumber: sdk.Int64(356343),
                    },
                },
            },
        },
        OrganizationID: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != nil {
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
    res, err := s.CloudMonitoring.GetOrganizationInventoryOnboardingCloudMonitoringImports(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest{
        ImportIds: []string{
            "cupiditate",
        },
        OrganizationID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringImports200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryOnboardingCloudMonitoringNetworks

Returns list of networks eligible for adding cloud monitored device

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
    res, err := s.CloudMonitoring.GetOrganizationInventoryOnboardingCloudMonitoringNetworks(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest{
        DeviceType: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnumSwitch,
        EndingBefore: sdk.String("fugiat"),
        OrganizationID: "molestiae",
        PerPage: sdk.Int64(556898),
        StartingAfter: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != nil {
        // handle response
    }
}
```
