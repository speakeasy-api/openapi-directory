# Onboarding

### Available Operations

* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationCameraOnboardingStatuses](#getorganizationcameraonboardingstatuses) - Fetch onboarding status of cameras
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [UpdateOrganizationCameraOnboardingStatuses](#updateorganizationcameraonboardingstatuses) - Notify that credential handoff to camera has completed

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
    res, err := s.Onboarding.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody{
            LogEvent: "occaecati",
            Request: sdk.String("cupiditate"),
            TargetOS: sdk.String("modi"),
            Timestamp: 816238,
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
    res, err := s.Onboarding.CreateOrganizationInventoryOnboardingCloudMonitoringImport(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "quis",
                    NetworkID: "dolor",
                    Udi: "nobis",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "dolore",
                    NetworkID: "sed",
                    Udi: "ex",
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "autem",
                    NetworkID: "impedit",
                    Udi: "sit",
                },
            },
        },
        OrganizationID: "saepe",
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
    res, err := s.Onboarding.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "sit",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("perferendis"),
                        LocalInterface: sdk.Int64(993419),
                        LoopbackNumber: sdk.Int64(793558),
                        Name: sdk.String("Juanita Cole"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Peyton4"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Sergio Bruen"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Miss Bridget Fay"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Tabitha Volkman"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Dr. Sherman Terry"),
                            },
                        },
                        EndLineNumber: sdk.Int64(645735),
                        RotaryNumber: sdk.Int64(147976),
                        StartLineNumber: sdk.Int64(496633),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "ipsum",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("dolore"),
                        LocalInterface: sdk.Int64(861309),
                        LoopbackNumber: sdk.Int64(222691),
                        Name: sdk.String("Carmen Grimes"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Hollis.Vandervort64"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Mrs. Timothy Douglas"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Kimberly Lockman"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Erika Bednar"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Marcia Dooley"),
                            },
                        },
                        EndLineNumber: sdk.Int64(350687),
                        RotaryNumber: sdk.Int64(98036),
                        StartLineNumber: sdk.Int64(593627),
                    },
                },
            },
        },
        OrganizationID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationCameraOnboardingStatuses

Fetch onboarding status of cameras

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
    res, err := s.Onboarding.GetOrganizationCameraOnboardingStatuses(ctx, operations.GetOrganizationCameraOnboardingStatusesRequest{
        NetworkIds: []string{
            "aut",
        },
        OrganizationID: "minus",
        Serials: []string{
            "perferendis",
            "recusandae",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationCameraOnboardingStatuses200ApplicationJSONObjects != nil {
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
    res, err := s.Onboarding.GetOrganizationInventoryOnboardingCloudMonitoringImports(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest{
        ImportIds: []string{
            "ratione",
            "deserunt",
        },
        OrganizationID: "rem",
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
    res, err := s.Onboarding.GetOrganizationInventoryOnboardingCloudMonitoringNetworks(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest{
        DeviceType: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnumWirelessController,
        EndingBefore: sdk.String("sed"),
        OrganizationID: "autem",
        PerPage: sdk.Int64(949769),
        StartingAfter: sdk.String("autem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateOrganizationCameraOnboardingStatuses

Notify that credential handoff to camera has completed

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
    res, err := s.Onboarding.UpdateOrganizationCameraOnboardingStatuses(ctx, operations.UpdateOrganizationCameraOnboardingStatusesRequest{
        RequestBody: &operations.UpdateOrganizationCameraOnboardingStatusesRequestBody{
            Serial: sdk.String("possimus"),
            WirelessCredentialsSent: sdk.Bool(false),
        },
        OrganizationID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationCameraOnboardingStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```
