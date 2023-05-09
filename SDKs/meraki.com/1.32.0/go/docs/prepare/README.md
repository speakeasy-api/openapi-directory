# Prepare

### Available Operations

* [CreateOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session

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
    res, err := s.Prepare.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare(ctx, operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest{
        RequestBody: operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody{
            Devices: []CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "odit",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("voluptates"),
                        LocalInterface: sdk.Int64(251543),
                        LoopbackNumber: sdk.Int64(913945),
                        Name: sdk.String("Regina Fritsch"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Rashad_Hills"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Mrs. Denise Kling"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Stella Heller"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Kate Schmidt"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Jody Breitenberg"),
                            },
                        },
                        EndLineNumber: sdk.Int64(698030),
                        RotaryNumber: sdk.Int64(186365),
                        StartLineNumber: sdk.Int64(713649),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "ratione",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("atque"),
                        LocalInterface: sdk.Int64(888343),
                        LoopbackNumber: sdk.Int64(931402),
                        Name: sdk.String("Alexis Hoeger III"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Alfreda_Gibson76"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Elmer Hermiston"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Ms. Matthew Kerluke"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Vicky Goyette"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Christina Considine I"),
                            },
                        },
                        EndLineNumber: sdk.Int64(639740),
                        RotaryNumber: sdk.Int64(30802),
                        StartLineNumber: sdk.Int64(715178),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "doloribus",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("et"),
                        LocalInterface: sdk.Int64(939574),
                        LoopbackNumber: sdk.Int64(939083),
                        Name: sdk.String("Shawn Spinka"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Jaiden86"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Lewis Orn"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Justin Rosenbaum"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Arthur Senger"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Miss Dorothy Boyle"),
                            },
                        },
                        EndLineNumber: sdk.Int64(272604),
                        RotaryNumber: sdk.Int64(862994),
                        StartLineNumber: sdk.Int64(159620),
                    },
                },
                operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices{
                    Sudi: "repellat",
                    Tunnel: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel{
                        CertificateName: sdk.String("maiores"),
                        LocalInterface: sdk.Int64(979621),
                        LoopbackNumber: sdk.Int64(820355),
                        Name: sdk.String("Kristine Keebler"),
                    },
                    User: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser{
                        Username: sdk.String("Catherine_Goyette92"),
                    },
                    Vty: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty{
                        AccessList: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList{
                            VtyIn: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn{
                                Name: sdk.String("Jody Yost"),
                            },
                            VtyOut: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut{
                                Name: sdk.String("Eunice Labadie"),
                            },
                        },
                        Authentication: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup{
                                Name: sdk.String("Elisa Schulist"),
                            },
                        },
                        Authorization: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization{
                            Group: &operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup{
                                Name: sdk.String("Tiffany Bahringer"),
                            },
                        },
                        EndLineNumber: sdk.Int64(403650),
                        RotaryNumber: sdk.Int64(127802),
                        StartLineNumber: sdk.Int64(679797),
                    },
                },
            },
        },
        OrganizationID: "omnis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != nil {
        // handle response
    }
}
```
