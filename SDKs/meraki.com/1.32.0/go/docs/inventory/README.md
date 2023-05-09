# Inventory

### Available Operations

* [ClaimIntoOrganizationInventory](#claimintoorganizationinventory) - Claim a list of devices, licenses, and/or orders into an organization inventory
* [CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent](#createorganizationinventoryonboardingcloudmonitoringexportevent) - Imports event logs related to the onboarding app into elastisearch
* [CreateOrganizationInventoryOnboardingCloudMonitoringImport](#createorganizationinventoryonboardingcloudmonitoringimport) - Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session
* [GetOrganizationInventoryDevice](#getorganizationinventorydevice) - Return a single device from the inventory of an organization
* [GetOrganizationInventoryDevices](#getorganizationinventorydevices) - Return the device inventory for an organization
* [GetOrganizationInventoryOnboardingCloudMonitoringImports](#getorganizationinventoryonboardingcloudmonitoringimports) - Check the status of a committed Import operation
* [GetOrganizationInventoryOnboardingCloudMonitoringNetworks](#getorganizationinventoryonboardingcloudmonitoringnetworks) - Returns list of networks eligible for adding cloud monitored device
* [ReleaseFromOrganizationInventory](#releasefromorganizationinventory) - Release a list of claimed devices from an organization.

## ClaimIntoOrganizationInventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

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
    res, err := s.Inventory.ClaimIntoOrganizationInventory(ctx, operations.ClaimIntoOrganizationInventoryRequest{
        RequestBody: &operations.ClaimIntoOrganizationInventoryRequestBody{
            Licenses: []ClaimIntoOrganizationInventoryRequestBodyLicenses{
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "quas",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "quaerat",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "quidem",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumRenew.ToPointer(),
                },
                operations.ClaimIntoOrganizationInventoryRequestBodyLicenses{
                    Key: "voluptas",
                    Mode: operations.ClaimIntoOrganizationInventoryRequestBodyLicensesModeEnumAddDevices.ToPointer(),
                },
            },
            Orders: []string{
                "ullam",
                "iusto",
                "exercitationem",
                "officia",
            },
            Serials: []string{
                "recusandae",
            },
        },
        OrganizationID: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClaimIntoOrganizationInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Inventory.CreateOrganizationInventoryOnboardingCloudMonitoringExportEvent(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequestBody{
            LogEvent: "iure",
            Request: sdk.String("ex"),
            TargetOS: sdk.String("quos"),
            Timestamp: 496467,
        },
        OrganizationID: "ratione",
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
    res, err := s.Inventory.CreateOrganizationInventoryOnboardingCloudMonitoringImport(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestBodyDevices{
                    DeviceID: "quidem",
                    NetworkID: "accusamus",
                    Udi: "dolorem",
                },
            },
        },
        OrganizationID: "ducimus",
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
    res, err := s.Inventory.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "sit",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("recusandae"),
                        LocalInterface: sdk.Int64(547912),
                        LoopbackNumber: sdk.Int64(941301),
                        Name: sdk.String("Forrest Grimes"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Rodger_Satterfield"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Miriam Prosacco"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Martha Balistreri II"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Katherine Graham"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Douglas Balistreri"),
                            },
                        },
                        EndLineNumber: sdk.Int64(512493),
                        RotaryNumber: sdk.Int64(153803),
                        StartLineNumber: sdk.Int64(311611),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "laudantium",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("eius"),
                        LocalInterface: sdk.Int64(771253),
                        LoopbackNumber: sdk.Int64(233222),
                        Name: sdk.String("Raquel Metz"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Katharina47"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Victor Shields"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Daniel Ritchie"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Jose Stark"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Tommy Kessler"),
                            },
                        },
                        EndLineNumber: sdk.Int64(992116),
                        RotaryNumber: sdk.Int64(569742),
                        StartLineNumber: sdk.Int64(525362),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "odit",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("eaque"),
                        LocalInterface: sdk.Int64(731105),
                        LoopbackNumber: sdk.Int64(879495),
                        Name: sdk.String("Ms. Heidi Lind"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Collin_Jerde89"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Mrs. Shawna Koch"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Dr. Sophie Batz"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Margie Turner"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Sabrina Gutkowski"),
                            },
                        },
                        EndLineNumber: sdk.Int64(979792),
                        RotaryNumber: sdk.Int64(443062),
                        StartLineNumber: sdk.Int64(295010),
                    },
                },
            },
        },
        OrganizationID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevice

Return a single device from the inventory of an organization

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
    res, err := s.Inventory.GetOrganizationInventoryDevice(ctx, operations.GetOrganizationInventoryDeviceRequest{
        OrganizationID: "eveniet",
        Serial: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationInventoryDevices

Return the device inventory for an organization

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
    res, err := s.Inventory.GetOrganizationInventoryDevices(ctx, operations.GetOrganizationInventoryDevicesRequest{
        EndingBefore: sdk.String("delectus"),
        Macs: []string{
            "quisquam",
            "distinctio",
            "vel",
            "sint",
        },
        Models: []string{
            "minima",
            "numquam",
            "ab",
            "expedita",
        },
        NetworkIds: []string{
            "tempore",
            "sequi",
        },
        OrderNumbers: []string{
            "amet",
            "voluptatibus",
            "amet",
        },
        OrganizationID: "ad",
        PerPage: sdk.Int64(430547),
        ProductTypes: []GetOrganizationInventoryDevicesProductTypesEnum{
            operations.GetOrganizationInventoryDevicesProductTypesEnumCellularGateway,
            operations.GetOrganizationInventoryDevicesProductTypesEnumCamera,
        },
        Search: sdk.String("quis"),
        Serials: []string{
            "accusamus",
            "laborum",
            "nesciunt",
        },
        StartingAfter: sdk.String("magni"),
        Tags: []string{
            "quae",
        },
        TagsFilterType: operations.GetOrganizationInventoryDevicesTagsFilterTypeEnumWithAllTags.ToPointer(),
        UsedState: operations.GetOrganizationInventoryDevicesUsedStateEnumUsed.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryDevices200ApplicationJSONObjects != nil {
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
    res, err := s.Inventory.GetOrganizationInventoryOnboardingCloudMonitoringImports(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringImportsRequest{
        ImportIds: []string{
            "porro",
            "sequi",
            "reprehenderit",
            "sint",
        },
        OrganizationID: "optio",
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
    res, err := s.Inventory.GetOrganizationInventoryOnboardingCloudMonitoringNetworks(ctx, operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksRequest{
        DeviceType: operations.GetOrganizationInventoryOnboardingCloudMonitoringNetworksDeviceTypeEnumSwitch,
        EndingBefore: sdk.String("error"),
        OrganizationID: "quas",
        PerPage: sdk.Int64(902486),
        StartingAfter: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationInventoryOnboardingCloudMonitoringNetworks202ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ReleaseFromOrganizationInventory

Release a list of claimed devices from an organization.

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
    res, err := s.Inventory.ReleaseFromOrganizationInventory(ctx, operations.ReleaseFromOrganizationInventoryRequest{
        RequestBody: &operations.ReleaseFromOrganizationInventoryRequestBody{
            Serials: []string{
                "temporibus",
            },
        },
        OrganizationID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReleaseFromOrganizationInventory200ApplicationJSONObject != nil {
        // handle response
    }
}
```
