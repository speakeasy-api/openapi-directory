# RootVcdVapp

## Overview

vCloud Director vApps.

### Available Operations

* [CreateOnDemandSnapshotV1](#createondemandsnapshotv1) - Create an on-demand snapshot for a vApp
* [CreateVappExportV1](#createvappexportv1) - Export vApp snapshot
* [CreateVappInstantRecoveryV1](#createvappinstantrecoveryv1) - Instant Recovery of vApp virtual machines
* [CreateVappTemplateSnapshotExport](#createvapptemplatesnapshotexport) - Export of a vApp template snapshot
* [CreateVcdVappDownloadSnapshotFromCloudV1](#createvcdvappdownloadsnapshotfromcloudv1) - Download snapshot from archive
* [DeleteVappSnapshotV1](#deletevappsnapshotv1) - Delete a vApp snapshot
* [DeleteVappSnapshotsV1](#deletevappsnapshotsv1) - Delete all snapshots of vApp
* [GetVappAsyncRequestStatusV1](#getvappasyncrequeststatusv1) - Get vApp job status
* [GetVappSnapshotExportOptionsV1](#getvappsnapshotexportoptionsv1) - Get exportable network configurations
* [GetVappSnapshotInstantRecoveryOptionsV1](#getvappsnapshotinstantrecoveryoptionsv1) - Get Instant Recovery information
* [GetVappSnapshotV1](#getvappsnapshotv1) - Get vApp snapshot details
* [GetVappTemplateSnapshotExportOptions](#getvapptemplatesnapshotexportoptions) - Get Export information for a vApp template snapshot
* [GetVcdVappV1](#getvcdvappv1) - Get details of a specific vApp
* [QueryVappSnapshotV1](#queryvappsnapshotv1) - Get list of snapshots of vApp
* [QueryVcdVappsV1](#queryvcdvappsv1) - Get summary for vApps
* [SearchVappV1](#searchvappv1) - Search for a file in a vApp
* [UpdateVcdVappV1](#updatevcdvappv1) - Update vApp
* [VcdMissedSnapshotsV1](#vcdmissedsnapshotsv1) - Get details about missed snapshots for a vApp

## CreateOnDemandSnapshotV1

Start an asynchronous job to create an on-demand snapshot for a specified vApp object.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.CreateOnDemandSnapshotV1(ctx, operations.CreateOnDemandSnapshotV1Request{
        BaseOnDemandSnapshotConfig: &shared.BaseOnDemandSnapshotConfig{
            SLAID: sdk.String("esse"),
        },
        ID: "aaee79e3-c71a-4d31-becb-83d2378ae3bf",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateVappExportV1

Export the specified vApp snapshot into a new vApp or an existing vApp.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.CreateVappExportV1(ctx, operations.CreateVappExportV1Request{
        VappExportSnapshotJobConfig: shared.VappExportSnapshotJobConfig{
            ExportMode: shared.VappExportModeEnumExportToTargetVapp,
            NetworksToRestore: []shared.CreateVappNetworkParams{
                shared.CreateVappNetworkParams{
                    IsDeployed: false,
                    Name: "Christie Marquardt",
                    NewName: sdk.String("aperiam"),
                    ParentNetworkID: sdk.String("animi"),
                },
            },
            NewVappParams: &shared.CreateNewVappParams{
                Name: "Jordan Kerluke",
                OrgVdcID: "natus",
            },
            ShouldPowerOnVappAfterExport: sdk.Bool(false),
            TargetVappID: sdk.String("ad"),
            VmsToExport: []shared.VappVMRestoreSpec{
                shared.VappVMRestoreSpec{
                    Name: "Ms. Jermaine Kozey",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumManual,
                            IPAddress: sdk.String("rerum"),
                            IsConnected: false,
                            MacAddress: sdk.String("magni"),
                            NetworkAdapterType: sdk.String("laudantium"),
                            NicIndex: 921981,
                            VappNetworkName: sdk.String("minus"),
                        },
                    },
                    StoragePolicyID: sdk.String("porro"),
                    VcdMoid: "atque",
                },
                shared.VappVMRestoreSpec{
                    Name: "Mrs. Charlotte Miller",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumNone,
                            IPAddress: sdk.String("aliquid"),
                            IsConnected: false,
                            MacAddress: sdk.String("qui"),
                            NetworkAdapterType: sdk.String("eligendi"),
                            NicIndex: 598681,
                            VappNetworkName: sdk.String("eum"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumPool,
                            IPAddress: sdk.String("eligendi"),
                            IsConnected: false,
                            MacAddress: sdk.String("incidunt"),
                            NetworkAdapterType: sdk.String("quisquam"),
                            NicIndex: 797792,
                            VappNetworkName: sdk.String("laboriosam"),
                        },
                    },
                    StoragePolicyID: sdk.String("quidem"),
                    VcdMoid: "reprehenderit",
                },
                shared.VappVMRestoreSpec{
                    Name: "Miss Everett Mueller",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumNone,
                            IPAddress: sdk.String("nesciunt"),
                            IsConnected: false,
                            MacAddress: sdk.String("optio"),
                            NetworkAdapterType: sdk.String("corrupti"),
                            NicIndex: 77151,
                            VappNetworkName: sdk.String("quibusdam"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumPool,
                            IPAddress: sdk.String("dicta"),
                            IsConnected: false,
                            MacAddress: sdk.String("perferendis"),
                            NetworkAdapterType: sdk.String("asperiores"),
                            NicIndex: 534204,
                            VappNetworkName: sdk.String("optio"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumDhcp,
                            IPAddress: sdk.String("non"),
                            IsConnected: false,
                            MacAddress: sdk.String("fugiat"),
                            NetworkAdapterType: sdk.String("voluptatibus"),
                            NicIndex: 614815,
                            VappNetworkName: sdk.String("amet"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumDhcp,
                            IPAddress: sdk.String("pariatur"),
                            IsConnected: false,
                            MacAddress: sdk.String("officia"),
                            NetworkAdapterType: sdk.String("velit"),
                            NicIndex: 892199,
                            VappNetworkName: sdk.String("facere"),
                        },
                    },
                    StoragePolicyID: sdk.String("tempore"),
                    VcdMoid: "minima",
                },
            },
        },
        SnapshotID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateVappInstantRecoveryV1

Use Instant Recovery to recover specified vApp virtual machines.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.CreateVappInstantRecoveryV1(ctx, operations.CreateVappInstantRecoveryV1Request{
        VappInstantRecoveryJobConfig: shared.VappInstantRecoveryJobConfig{
            ShouldPowerOnVmsAfterRecovery: sdk.Bool(false),
            VmsToRestore: []shared.VappVMRestoreSpec{
                shared.VappVMRestoreSpec{
                    Name: "Carroll Monahan",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumNone,
                            IPAddress: sdk.String("sint"),
                            IsConnected: false,
                            MacAddress: sdk.String("aliquam"),
                            NetworkAdapterType: sdk.String("consectetur"),
                            NicIndex: 355468,
                            VappNetworkName: sdk.String("dicta"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumDhcp,
                            IPAddress: sdk.String("reprehenderit"),
                            IsConnected: false,
                            MacAddress: sdk.String("esse"),
                            NetworkAdapterType: sdk.String("magni"),
                            NicIndex: 409843,
                            VappNetworkName: sdk.String("quibusdam"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumDhcp,
                            IPAddress: sdk.String("ad"),
                            IsConnected: false,
                            MacAddress: sdk.String("velit"),
                            NetworkAdapterType: sdk.String("quia"),
                            NicIndex: 119927,
                            VappNetworkName: sdk.String("nam"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumPool,
                            IPAddress: sdk.String("velit"),
                            IsConnected: false,
                            MacAddress: sdk.String("ratione"),
                            NetworkAdapterType: sdk.String("fuga"),
                            NicIndex: 325602,
                            VappNetworkName: sdk.String("aliquid"),
                        },
                    },
                    StoragePolicyID: sdk.String("facere"),
                    VcdMoid: "laboriosam",
                },
                shared.VappVMRestoreSpec{
                    Name: "Dr. Juan Leannon",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumDhcp,
                            IPAddress: sdk.String("accusamus"),
                            IsConnected: false,
                            MacAddress: sdk.String("cum"),
                            NetworkAdapterType: sdk.String("occaecati"),
                            NicIndex: 682506,
                            VappNetworkName: sdk.String("ex"),
                        },
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumManual,
                            IPAddress: sdk.String("nostrum"),
                            IsConnected: false,
                            MacAddress: sdk.String("atque"),
                            NetworkAdapterType: sdk.String("saepe"),
                            NicIndex: 432055,
                            VappNetworkName: sdk.String("molestias"),
                        },
                    },
                    StoragePolicyID: sdk.String("fuga"),
                    VcdMoid: "non",
                },
                shared.VappVMRestoreSpec{
                    Name: "Jimmie Grady",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumPool,
                            IPAddress: sdk.String("explicabo"),
                            IsConnected: false,
                            MacAddress: sdk.String("quibusdam"),
                            NetworkAdapterType: sdk.String("harum"),
                            NicIndex: 932012,
                            VappNetworkName: sdk.String("porro"),
                        },
                    },
                    StoragePolicyID: sdk.String("ducimus"),
                    VcdMoid: "ad",
                },
                shared.VappVMRestoreSpec{
                    Name: "Angel Lockman",
                    NetworkConnections: []shared.VappVMNetworkConnection{
                        shared.VappVMNetworkConnection{
                            AddressingMode: shared.VappVMIPAddressingModeEnumManual,
                            IPAddress: sdk.String("veniam"),
                            IsConnected: false,
                            MacAddress: sdk.String("cupiditate"),
                            NetworkAdapterType: sdk.String("aliquam"),
                            NicIndex: 381837,
                            VappNetworkName: sdk.String("atque"),
                        },
                    },
                    StoragePolicyID: sdk.String("minus"),
                    VcdMoid: "debitis",
                },
            },
        },
        SnapshotID: "neque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateVappTemplateSnapshotExport

Export a vApp template snapashot to a catalog. Use the options endpoint to confirm that exporting to the catalog defaults or the original organization vDC storage profile is possible.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.CreateVappTemplateSnapshotExport(ctx, operations.CreateVappTemplateSnapshotExportRequest{
        VappTemplateExportJobConfig: shared.VappTemplateExportJobConfig{
            CatalogID: "doloremque",
            Name: "Doreen Lind",
            OrgVdcID: "cupiditate",
            StoragePolicyID: sdk.String("expedita"),
        },
        SnapshotID: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## CreateVcdVappDownloadSnapshotFromCloudV1

Provides a method for retrieving a snapshot that is not available locally, from an archival location.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.CreateVcdVappDownloadSnapshotFromCloudV1(ctx, operations.CreateVcdVappDownloadSnapshotFromCloudV1Request{
        ID: "8214c337-f96b-4b0c-a9e3-72db1344ba9f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## DeleteVappSnapshotV1

Designate a vApp snapshot as expired and available for garbage collection. The snapshot must be an on-demand snapshot or a snapshot from a vApp that is not assigned to an SLA Domain.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.DeleteVappSnapshotV1(ctx, operations.DeleteVappSnapshotV1Request{
        ID: "78a5c0ed-7aab-462e-9726-1fb0c58d27b5",
        Location: operations.DeleteVappSnapshotV1LocationEnumAll,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteVappSnapshotsV1

Delete all snapshots for a specified vApp object.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.DeleteVappSnapshotsV1(ctx, operations.DeleteVappSnapshotsV1Request{
        ID: "996b5b4b-50ee-4f71-ab7a-7ab0344b1710",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVappAsyncRequestStatusV1

Retrieve the details of a specified asynchronous job for a vApp.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVappAsyncRequestStatusV1(ctx, operations.GetVappAsyncRequestStatusV1Request{
        ID: "688deebe-f897-4f3d-90cc-d33f11b3e4e0",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AsyncRequestStatus != nil {
        // handle response
    }
}
```

## GetVappSnapshotExportOptionsV1

Retrieve summary information for the vApp networks that are available for network connections from the virtual machines in the exported vApp snapshot. The summary also specifies the default vApp network for each virtual machine network connection.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVappSnapshotExportOptionsV1(ctx, operations.GetVappSnapshotExportOptionsV1Request{
        ExportMode: operations.GetVappSnapshotExportOptionsV1ExportModeEnumExportToTargetVapp,
        SnapshotID: "aut",
        TargetOrgVdcID: sdk.String("officia"),
        TargetVappID: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VappExportOptions != nil {
        // handle response
    }
}
```

## GetVappSnapshotInstantRecoveryOptionsV1

Retrieve the available vApp network connections and the default vApp network connection for the virtual machines in a vApp snapshot. Use this information to configure an Instant Recovery of specified virtual machines in the vApp snapshot.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVappSnapshotInstantRecoveryOptionsV1(ctx, operations.GetVappSnapshotInstantRecoveryOptionsV1Request{
        SnapshotID: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VappInstantRecoveryOptions != nil {
        // handle response
    }
}
```

## GetVappSnapshotV1

Retrieve detailed information about a specified snapshot for a vApp object.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVappSnapshotV1(ctx, operations.GetVappSnapshotV1Request{
        ID: "04186ec7-59e0-42f3-b02c-5c8e2d30ead3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdVappSnapshotDetail != nil {
        // handle response
    }
}
```

## GetVappTemplateSnapshotExportOptions

Retrieve the available choices vApp template storage profile and organization vDC choices in case of exporting to either original organization vDC defaults of the target catalog. In case advanced option of manually deciding org vdc is preferred, this also provides available storage profile choices.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVappTemplateSnapshotExportOptions(ctx, operations.GetVappTemplateSnapshotExportOptionsRequest{
        CatalogID: "sunt",
        Name: "Eva Wuckert",
        OrgVdcID: sdk.String("eius"),
        SnapshotID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VappTemplateExportOptionsUnion != nil {
        // handle response
    }
}
```

## GetVcdVappV1

Retrieve detailed information for a specified vApp.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.GetVcdVappV1(ctx, operations.GetVcdVappV1Request{
        ID: "07bf375b-4428-4282-9fdb-2f69e59267c7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdVappDetail != nil {
        // handle response
    }
}
```

## QueryVappSnapshotV1

Retrieve summary information for each of the snapshot objects of a specified vApp object.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.QueryVappSnapshotV1(ctx, operations.QueryVappSnapshotV1Request{
        ID: "1cc8d3cd-4258-4d03-98a8-2c808fe2751a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdVappSnapshotSummaryListResponse != nil {
        // handle response
    }
}
```

## QueryVcdVappsV1

Retrieve summary information for all vCD vApp objects.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.QueryVcdVappsV1(ctx, operations.QueryVcdVappsV1Request{
        EffectiveSLADomainID: sdk.String("fugit"),
        IncludeBackupTaskInfo: sdk.Bool(false),
        IsRelic: sdk.Bool(false),
        Limit: sdk.Int(19487),
        Name: sdk.String("Mrs. Caroline Schmeler"),
        Offset: sdk.Int(609429),
        PrimaryClusterID: sdk.String("repudiandae"),
        SLAAssignment: operations.QueryVcdVappsV1SLAAssignmentEnumDerived.ToPointer(),
        SortBy: operations.QueryVcdVappsV1SortByEnumName.ToPointer(),
        SortOrder: operations.QueryVcdVappsV1SortOrderEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdVappSummaryListResponse != nil {
        // handle response
    }
}
```

## SearchVappV1

Aggregated search for a file through snapshots of all virtual machines that are presently part of the vApp. Specify the file using a full path prefix or a filename prefix.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.SearchVappV1(ctx, operations.SearchVappV1Request{
        ID: "f9619bb7-d40d-45a1-9fa4-36e6259233f9",
        Path: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppSearchResponseListResponse != nil {
        // handle response
    }
}
```

## UpdateVcdVappV1

Make changes to the parameters of a specified vApp object.

### Example Usage

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.UpdateVcdVappV1(ctx, operations.UpdateVcdVappV1Request{
        VcdVappPatch: shared.VcdVappPatch{
            ConfiguredSLADomainID: sdk.String("minus"),
            IsBestEffortSynchronizationEnabled: sdk.Bool(false),
            IsPaused: sdk.Bool(false),
            VcdVMMoidsToExcludeFromSnapshot: []string{
                "quibusdam",
                "explicabo",
                "adipisci",
            },
        },
        ID: "7397c785-b5db-44f5-8018-3febdf676b72",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VcdVappDetail != nil {
        // handle response
    }
}
```

## VcdMissedSnapshotsV1

Retrieve the timestamp for each missed snapshot for a specified vApp.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVcdVapp.VcdMissedSnapshotsV1(ctx, operations.VcdMissedSnapshotsV1Request{
        ID: "06dab750-052a-4564-bedc-439ed8c4320f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MissedSnapshotListResponse != nil {
        // handle response
    }
}
```
