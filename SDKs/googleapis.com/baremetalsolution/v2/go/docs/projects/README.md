# Projects

### Available Operations

* [BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch](#baremetalsolutionprojectslocationsinstanceprovisioningsettingsfetch) - Get instance provisioning settings for a given project. This is hidden method used by UI only.
* [BaremetalsolutionProjectsLocationsInstancesCreate](#baremetalsolutionprojectslocationsinstancescreate) - Create an Instance.
* [BaremetalsolutionProjectsLocationsInstancesDetachLun](#baremetalsolutionprojectslocationsinstancesdetachlun) - Detach LUN from Instance.
* [BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesdisableinteractiveserialconsole) - Disable the interactive serial console feature on an instance.
* [BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole](#baremetalsolutionprojectslocationsinstancesenableinteractiveserialconsole) - Enable the interactive serial console feature on an instance.
* [BaremetalsolutionProjectsLocationsInstancesList](#baremetalsolutionprojectslocationsinstanceslist) - List servers in a given project and location.
* [BaremetalsolutionProjectsLocationsInstancesReset](#baremetalsolutionprojectslocationsinstancesreset) - Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
* [BaremetalsolutionProjectsLocationsInstancesStart](#baremetalsolutionprojectslocationsinstancesstart) - Starts a server that was shutdown.
* [BaremetalsolutionProjectsLocationsInstancesStop](#baremetalsolutionprojectslocationsinstancesstop) - Stop a running server.
* [BaremetalsolutionProjectsLocationsList](#baremetalsolutionprojectslocationslist) - Lists information about the supported locations for this service.
* [BaremetalsolutionProjectsLocationsNetworksList](#baremetalsolutionprojectslocationsnetworkslist) - List network in a given project and location.
* [BaremetalsolutionProjectsLocationsNetworksListNetworkUsage](#baremetalsolutionprojectslocationsnetworkslistnetworkusage) - List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
* [BaremetalsolutionProjectsLocationsNfsSharesCreate](#baremetalsolutionprojectslocationsnfssharescreate) - Create an NFS share.
* [BaremetalsolutionProjectsLocationsNfsSharesList](#baremetalsolutionprojectslocationsnfsshareslist) - List NFS shares.
* [BaremetalsolutionProjectsLocationsProvisioningConfigsCreate](#baremetalsolutionprojectslocationsprovisioningconfigscreate) - Create new ProvisioningConfig.
* [BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit](#baremetalsolutionprojectslocationsprovisioningconfigssubmit) - Submit a provisiong configuration for a given project.
* [BaremetalsolutionProjectsLocationsProvisioningQuotasList](#baremetalsolutionprojectslocationsprovisioningquotaslist) - List the budget details to provision resources on a given project.
* [BaremetalsolutionProjectsLocationsSSHKeysCreate](#baremetalsolutionprojectslocationssshkeyscreate) - Register a public SSH key in the specified project for use with the interactive serial console feature.
* [BaremetalsolutionProjectsLocationsSSHKeysList](#baremetalsolutionprojectslocationssshkeyslist) - Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
* [BaremetalsolutionProjectsLocationsVolumesList](#baremetalsolutionprojectslocationsvolumeslist) - List storage volumes in a given project and location.
* [BaremetalsolutionProjectsLocationsVolumesLunsEvict](#baremetalsolutionprojectslocationsvolumeslunsevict) - Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
* [BaremetalsolutionProjectsLocationsVolumesLunsList](#baremetalsolutionprojectslocationsvolumeslunslist) - List storage volume luns for given storage volume.
* [BaremetalsolutionProjectsLocationsVolumesPatch](#baremetalsolutionprojectslocationsvolumespatch) - Update details of a single storage volume.
* [BaremetalsolutionProjectsLocationsVolumesRename](#baremetalsolutionprojectslocationsvolumesrename) - RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
* [BaremetalsolutionProjectsLocationsVolumesResize](#baremetalsolutionprojectslocationsvolumesresize) - Emergency Volume resize.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate](#baremetalsolutionprojectslocationsvolumessnapshotscreate) - Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete](#baremetalsolutionprojectslocationsvolumessnapshotsdelete) - Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsGet](#baremetalsolutionprojectslocationsvolumessnapshotsget) - Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsList](#baremetalsolutionprojectslocationsvolumessnapshotslist) - Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
* [BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot](#baremetalsolutionprojectslocationsvolumessnapshotsrestorevolumesnapshot) - Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

## BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch

Get instance provisioning settings for a given project. This is hidden method used by UI only.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetch(ctx, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        Location: "tempora",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    }, operations.BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchInstanceProvisioningSettingsResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesCreate

Create an Instance.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesCreate(ctx, operations.BaremetalsolutionProjectsLocationsInstancesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InstanceInput: &shared.InstanceInput{
            HyperthreadingEnabled: sdk.Bool(false),
            Labels: map[string]string{
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
            LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                    InterfaceIndex: sdk.Int(337396),
                    LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                        shared.LogicalNetworkInterface{
                            DefaultGateway: sdk.Bool(false),
                            ID: sdk.String("a05dfc2d-df7c-4c78-8a1b-a928fc816742"),
                            IPAddress: sdk.String("impedit"),
                            Network: sdk.String("cum"),
                            NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                        },
                    },
                    Name: sdk.String("Mrs. Miriam Collier"),
                },
            },
            Luns: []shared.LunInput{
                shared.LunInput{
                    BootLun: sdk.Bool(false),
                    ID: sdk.String("9396fea7-596e-4b10-baaa-2352c5955907"),
                    MultiprotocolType: shared.LunMultiprotocolTypeEnumLinux.ToPointer(),
                    Shareable: sdk.Bool(false),
                    SizeGb: sdk.String("doloribus"),
                    State: shared.LunStateEnumCoolOff.ToPointer(),
                    StorageType: shared.LunStorageTypeEnumStorageTypeUnspecified.ToPointer(),
                    StorageVolume: sdk.String("mollitia"),
                    Wwid: sdk.String("dolorem"),
                },
            },
            MachineType: sdk.String("culpa"),
            Name: sdk.String("Jaime O'Hara"),
            NetworkTemplate: sdk.String("commodi"),
            OsImage: sdk.String("quam"),
            Pod: sdk.String("molestiae"),
            Volumes: []shared.VolumeInput{
                shared.VolumeInput{
                    AutoGrownSizeGib: sdk.String("error"),
                    CurrentSizeGib: sdk.String("quia"),
                    EmergencySizeGib: sdk.String("quis"),
                    ID: sdk.String("1aa52c3f-5ad0-419d-a1ff-e78f097b0074"),
                    Labels: map[string]string{
                        "dicta": "corporis",
                        "dolore": "iusto",
                        "dicta": "harum",
                        "enim": "accusamus",
                    },
                    MaxSizeGib: sdk.String("commodi"),
                    Notes: sdk.String("repudiandae"),
                    OriginallyRequestedSizeGib: sdk.String("quae"),
                    PerformanceTier: shared.VolumePerformanceTierEnumVolumePerformanceTierUnspecified.ToPointer(),
                    Pod: sdk.String("quidem"),
                    RemainingSpaceGib: sdk.String("molestias"),
                    RequestedSizeGib: sdk.String("excepturi"),
                    SnapshotAutoDeleteBehavior: shared.VolumeSnapshotAutoDeleteBehaviorEnumNewestFirst.ToPointer(),
                    SnapshotEnabled: sdk.Bool(false),
                    SnapshotReservationDetail: &shared.SnapshotReservationDetail{
                        ReservedSpaceGib: sdk.String("modi"),
                        ReservedSpacePercent: sdk.Int(508969),
                        ReservedSpaceRemainingGib: sdk.String("rem"),
                        ReservedSpaceUsedPercent: sdk.Int(916723),
                    },
                    SnapshotSchedulePolicy: sdk.String("quasi"),
                    State: shared.VolumeStateEnumCoolOff.ToPointer(),
                    StorageAggregatePool: sdk.String("sint"),
                    StorageType: shared.VolumeStorageTypeEnumStorageTypeUnspecified.ToPointer(),
                    WorkloadProfile: shared.VolumeWorkloadProfileEnumHana.ToPointer(),
                },
            },
            WorkloadProfile: shared.InstanceWorkloadProfileEnumWorkloadProfileUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("deserunt"),
        Parent: "distinctio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("modi"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesDetachLun

Detach LUN from Instance.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesDetachLun(ctx, operations.BaremetalsolutionProjectsLocationsInstancesDetachLunRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DetachLunRequest: &shared.DetachLunRequest{
            Lun: sdk.String("aliquid"),
            SkipReboot: sdk.Bool(false),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("magni"),
        Instance: "assumenda",
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesDetachLunSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole

Disable the interactive serial console feature on an instance.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsole(ctx, operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "tempore": "labore",
            "delectus": "eum",
            "non": "eligendi",
        },
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("sint"),
        Name: "Curtis Toy",
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesDisableInteractiveSerialConsoleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole

Enable the interactive serial console feature on an instance.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsole(ctx, operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "magnam": "cumque",
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("accusamus"),
        Name: "Toni Haley",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("id"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesEnableInteractiveSerialConsoleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesList

List servers in a given project and location.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesList(ctx, operations.BaremetalsolutionProjectsLocationsInstancesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("deserunt"),
        Filter: sdk.String("nisi"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("natus"),
        PageSize: sdk.Int64(606393),
        PageToken: sdk.String("molestiae"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInstancesResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesReset

Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesReset(ctx, operations.BaremetalsolutionProjectsLocationsInstancesResetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "labore": "suscipit",
            "natus": "nobis",
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("magnam"),
        Name: "Miriam Hermann",
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesResetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesStart

Starts a server that was shutdown.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesStart(ctx, operations.BaremetalsolutionProjectsLocationsInstancesStartRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "eum": "dolor",
            "necessitatibus": "odit",
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("debitis"),
        Name: "Jasmine Lind",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesStartSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsInstancesStop

Stop a running server.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsInstancesStop(ctx, operations.BaremetalsolutionProjectsLocationsInstancesStopRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "repellat": "quibusdam",
            "sed": "saepe",
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("natus"),
        Name: "Joan Satterfield",
        OauthToken: sdk.String("maxime"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("odit"),
    }, operations.BaremetalsolutionProjectsLocationsInstancesStopSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsList

Lists information about the supported locations for this service.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsList(ctx, operations.BaremetalsolutionProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("voluptate"),
        Name: "Candice Beatty",
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(16627),
        PageToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("aut"),
        UploadProtocol: sdk.String("cumque"),
    }, operations.BaremetalsolutionProjectsLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsNetworksList

List network in a given project and location.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsNetworksList(ctx, operations.BaremetalsolutionProjectsLocationsNetworksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("dolores"),
        Filter: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PageSize: sdk.Int64(54338),
        PageToken: sdk.String("quis"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.BaremetalsolutionProjectsLocationsNetworksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworksResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsNetworksListNetworkUsage

List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsNetworksListNetworkUsage(ctx, operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("hic"),
        Location: "recusandae",
        OauthToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNetworkUsageResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsNfsSharesCreate

Create an NFS share.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsNfsSharesCreate(ctx, operations.BaremetalsolutionProjectsLocationsNfsSharesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NfsShareInput: &shared.NfsShareInput{
            AllowedClients: []shared.AllowedClientInput{
                shared.AllowedClientInput{
                    AllowDev: sdk.Bool(false),
                    AllowSuid: sdk.Bool(false),
                    AllowedClientsCidr: sdk.String("blanditiis"),
                    MountPermissions: shared.AllowedClientMountPermissionsEnumRead.ToPointer(),
                    Network: sdk.String("eaque"),
                    NoRootSquash: sdk.Bool(false),
                },
            },
            Labels: map[string]string{
                "rerum": "adipisci",
                "asperiores": "earum",
                "modi": "iste",
            },
            Name: sdk.String("Casey Stracke"),
            RequestedSizeGib: sdk.String("libero"),
            StorageType: shared.NfsShareStorageTypeEnumHdd.ToPointer(),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolor"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.BaremetalsolutionProjectsLocationsNfsSharesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsNfsSharesList

List NFS shares.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsNfsSharesList(ctx, operations.BaremetalsolutionProjectsLocationsNfsSharesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("dolorum"),
        Key: sdk.String("numquam"),
        OauthToken: sdk.String("veritatis"),
        PageSize: sdk.Int64(58029),
        PageToken: sdk.String("ipsa"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.BaremetalsolutionProjectsLocationsNfsSharesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNfsSharesResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsProvisioningConfigsCreate

Create new ProvisioningConfig.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsProvisioningConfigsCreate(ctx, operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProvisioningConfigInput: &shared.ProvisioningConfigInput{
            CustomID: sdk.String("voluptatibus"),
            Email: sdk.String("Liam.Daugherty@yahoo.com"),
            HandoverServiceAccount: sdk.String("fugiat"),
            Instances: []shared.InstanceConfigInput{
                shared.InstanceConfigInput{
                    AccountNetworksEnabled: sdk.Bool(false),
                    ClientNetwork: &shared.NetworkAddress{
                        Address: sdk.String("644 Leuschke Parkway"),
                        ExistingNetworkID: sdk.String("necessitatibus"),
                        NetworkID: sdk.String("distinctio"),
                    },
                    Hyperthreading: sdk.Bool(false),
                    ID: sdk.String("f737ae42-03ce-45e6-a95d-8a0d446ce2af"),
                    InstanceType: sdk.String("esse"),
                    LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                        shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            InterfaceIndex: sdk.Int(483409),
                            LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                shared.LogicalNetworkInterface{
                                    DefaultGateway: sdk.Bool(false),
                                    ID: sdk.String("cf3be453-f870-4b32-ab5a-73429cdb1a84"),
                                    IPAddress: sdk.String("aspernatur"),
                                    Network: sdk.String("dolores"),
                                    NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                },
                            },
                            Name: sdk.String("Gilbert Kohler"),
                        },
                        shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            InterfaceIndex: sdk.Int(183280),
                            LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                shared.LogicalNetworkInterface{
                                    DefaultGateway: sdk.Bool(false),
                                    ID: sdk.String("22715bf0-cbb1-4e31-b8b9-0f3443a1108e"),
                                    IPAddress: sdk.String("consequatur"),
                                    Network: sdk.String("est"),
                                    NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                },
                            },
                            Name: sdk.String("Domingo Grady"),
                        },
                        shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            InterfaceIndex: sdk.Int(181631),
                            LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                shared.LogicalNetworkInterface{
                                    DefaultGateway: sdk.Bool(false),
                                    ID: sdk.String("879fce95-3f73-4ef7-bbc7-abd74dd39c0f"),
                                    IPAddress: sdk.String("exercitationem"),
                                    Network: sdk.String("nulla"),
                                    NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                },
                            },
                            Name: sdk.String("Elijah Wyman"),
                        },
                    },
                    NetworkConfig: shared.InstanceConfigNetworkConfigEnumSingleVlan.ToPointer(),
                    NetworkTemplate: sdk.String("alias"),
                    OsImage: sdk.String("officia"),
                    PrivateNetwork: &shared.NetworkAddress{
                        Address: sdk.String("34148 Clarabelle Island"),
                        ExistingNetworkID: sdk.String("laudantium"),
                        NetworkID: sdk.String("dicta"),
                    },
                    UserNote: sdk.String("dolor"),
                },
            },
            Location: sdk.String("maiores"),
            Networks: []shared.NetworkConfigInput{
                shared.NetworkConfigInput{
                    Bandwidth: shared.NetworkConfigBandwidthEnumBw2Gbps.ToPointer(),
                    Cidr: sdk.String("nulla"),
                    GcpService: sdk.String("excepturi"),
                    ID: sdk.String("f5fce6c5-5614-46c3-a250-fb008c42e141"),
                    JumboFramesEnabled: sdk.Bool(false),
                    ServiceCidr: shared.NetworkConfigServiceCidrEnumHigh27.ToPointer(),
                    Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                    UserNote: sdk.String("placeat"),
                    VlanAttachments: []shared.IntakeVlanAttachment{
                        shared.IntakeVlanAttachment{
                            ID: sdk.String("66c8dd6b-1442-4907-8747-78a7bd466d28"),
                            PairingKey: sdk.String("quisquam"),
                        },
                    },
                    VlanSameProject: sdk.Bool(false),
                },
            },
            StatusMessage: sdk.String("veritatis"),
            TicketID: sdk.String("ipsa"),
            Volumes: []shared.VolumeConfigInput{
                shared.VolumeConfigInput{
                    GcpService: sdk.String("quidem"),
                    ID: sdk.String("3cdca425-1904-4e52-bc7e-0bc7178e4796"),
                    LunRanges: []shared.LunRange{
                        shared.LunRange{
                            Quantity: sdk.Int(174112),
                            SizeGb: sdk.Int(645570),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(475289),
                            SizeGb: sdk.Int(35362),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(783648),
                            SizeGb: sdk.Int(430402),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(556429),
                            SizeGb: sdk.Int(510017),
                        },
                    },
                    MachineIds: []string{
                        "deleniti",
                    },
                    NfsExports: []shared.NfsExport{
                        shared.NfsExport{
                            AllowDev: sdk.Bool(false),
                            AllowSuid: sdk.Bool(false),
                            Cidr: sdk.String("fuga"),
                            MachineID: sdk.String("mollitia"),
                            NetworkID: sdk.String("incidunt"),
                            NoRootSquash: sdk.Bool(false),
                            Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                        },
                    },
                    PerformanceTier: shared.VolumeConfigPerformanceTierEnumVolumePerformanceTierUnspecified.ToPointer(),
                    Protocol: shared.VolumeConfigProtocolEnumProtocolUnspecified.ToPointer(),
                    SizeGb: sdk.Int(392676),
                    SnapshotsEnabled: sdk.Bool(false),
                    StorageAggregatePool: sdk.String("fugit"),
                    Type: shared.VolumeConfigTypeEnumDisk.ToPointer(),
                    UserNote: sdk.String("consequuntur"),
                },
                shared.VolumeConfigInput{
                    GcpService: sdk.String("ratione"),
                    ID: sdk.String("2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20"),
                    LunRanges: []shared.LunRange{
                        shared.LunRange{
                            Quantity: sdk.Int(308286),
                            SizeGb: sdk.Int(959167),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(232865),
                            SizeGb: sdk.Int(458139),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(503427),
                            SizeGb: sdk.Int(590984),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(953722),
                            SizeGb: sdk.Int(857723),
                        },
                    },
                    MachineIds: []string{
                        "esse",
                        "quasi",
                        "a",
                    },
                    NfsExports: []shared.NfsExport{
                        shared.NfsExport{
                            AllowDev: sdk.Bool(false),
                            AllowSuid: sdk.Bool(false),
                            Cidr: sdk.String("sint"),
                            MachineID: sdk.String("pariatur"),
                            NetworkID: sdk.String("possimus"),
                            NoRootSquash: sdk.Bool(false),
                            Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                        },
                        shared.NfsExport{
                            AllowDev: sdk.Bool(false),
                            AllowSuid: sdk.Bool(false),
                            Cidr: sdk.String("eveniet"),
                            MachineID: sdk.String("asperiores"),
                            NetworkID: sdk.String("facere"),
                            NoRootSquash: sdk.Bool(false),
                            Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                        },
                        shared.NfsExport{
                            AllowDev: sdk.Bool(false),
                            AllowSuid: sdk.Bool(false),
                            Cidr: sdk.String("consequuntur"),
                            MachineID: sdk.String("quasi"),
                            NetworkID: sdk.String("similique"),
                            NoRootSquash: sdk.Bool(false),
                            Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                        },
                    },
                    PerformanceTier: shared.VolumeConfigPerformanceTierEnumVolumePerformanceTierShared.ToPointer(),
                    Protocol: shared.VolumeConfigProtocolEnumProtocolNfs.ToPointer(),
                    SizeGb: sdk.Int(62713),
                    SnapshotsEnabled: sdk.Bool(false),
                    StorageAggregatePool: sdk.String("earum"),
                    Type: shared.VolumeConfigTypeEnumFlash.ToPointer(),
                    UserNote: sdk.String("in"),
                },
                shared.VolumeConfigInput{
                    GcpService: sdk.String("eius"),
                    ID: sdk.String("bdb04f15-7560-482d-a8ea-19f1d1705133"),
                    LunRanges: []shared.LunRange{
                        shared.LunRange{
                            Quantity: sdk.Int(839513),
                            SizeGb: sdk.Int(33074),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(522371),
                            SizeGb: sdk.Int(15606),
                        },
                        shared.LunRange{
                            Quantity: sdk.Int(513075),
                            SizeGb: sdk.Int(428796),
                        },
                    },
                    MachineIds: []string{
                        "ab",
                        "corrupti",
                        "non",
                    },
                    NfsExports: []shared.NfsExport{
                        shared.NfsExport{
                            AllowDev: sdk.Bool(false),
                            AllowSuid: sdk.Bool(false),
                            Cidr: sdk.String("dolor"),
                            MachineID: sdk.String("occaecati"),
                            NetworkID: sdk.String("numquam"),
                            NoRootSquash: sdk.Bool(false),
                            Permissions: shared.NfsExportPermissionsEnumReadWrite.ToPointer(),
                        },
                    },
                    PerformanceTier: shared.VolumeConfigPerformanceTierEnumVolumePerformanceTierUnspecified.ToPointer(),
                    Protocol: shared.VolumeConfigProtocolEnumProtocolFc.ToPointer(),
                    SizeGb: sdk.Int(12036),
                    SnapshotsEnabled: sdk.Bool(false),
                    StorageAggregatePool: sdk.String("dignissimos"),
                    Type: shared.VolumeConfigTypeEnumTypeUnspecified.ToPointer(),
                    UserNote: sdk.String("maiores"),
                },
            },
            VpcScEnabled: sdk.Bool(false),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Email: sdk.String("Yessenia.Bayer@yahoo.com"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("officia"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("officia"),
        UploadProtocol: sdk.String("asperiores"),
    }, operations.BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisioningConfig != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit

Submit a provisiong configuration for a given project.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmit(ctx, operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SubmitProvisioningConfigRequestInput: &shared.SubmitProvisioningConfigRequestInput{
            Email: sdk.String("Elwyn.Sawayn7@gmail.com"),
            ProvisioningConfig: &shared.ProvisioningConfigInput{
                CustomID: sdk.String("adipisci"),
                Email: sdk.String("Makayla63@hotmail.com"),
                HandoverServiceAccount: sdk.String("est"),
                Instances: []shared.InstanceConfigInput{
                    shared.InstanceConfigInput{
                        AccountNetworksEnabled: sdk.Bool(false),
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("8445 Edmund Squares"),
                            ExistingNetworkID: sdk.String("facilis"),
                            NetworkID: sdk.String("cum"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("675fd5e6-0b37-45ed-8f6f-bee41f33317f"),
                        InstanceType: sdk.String("debitis"),
                        LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(358107),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("60eb1ea4-2655-45ba-bc28-744ed53b88f3"),
                                        IPAddress: sdk.String("culpa"),
                                        Network: sdk.String("corrupti"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0"),
                                        IPAddress: sdk.String("corrupti"),
                                        Network: sdk.String("maiores"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("294e3698-f447-4f60-be8b-445e80ca55ef"),
                                        IPAddress: sdk.String("nulla"),
                                        Network: sdk.String("magni"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Francis Harris"),
                            },
                        },
                        NetworkConfig: shared.InstanceConfigNetworkConfigEnumNetworkconfigUnspecified.ToPointer(),
                        NetworkTemplate: sdk.String("laudantium"),
                        OsImage: sdk.String("exercitationem"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("7365 Welch Rapid"),
                            ExistingNetworkID: sdk.String("debitis"),
                            NetworkID: sdk.String("neque"),
                        },
                        UserNote: sdk.String("dolorum"),
                    },
                    shared.InstanceConfigInput{
                        AccountNetworksEnabled: sdk.Bool(false),
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("6658 Karina Creek"),
                            ExistingNetworkID: sdk.String("ut"),
                            NetworkID: sdk.String("fugiat"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("0ab40750-88e5-4186-a065-e904f3b1194b"),
                        InstanceType: sdk.String("atque"),
                        LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(724148),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("603a79f9-dfe0-4ab7-9a8a-50ce187f86bc"),
                                        IPAddress: sdk.String("et"),
                                        Network: sdk.String("esse"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("d689eee9-526f-48d9-86e8-81ead4f0e101"),
                                        IPAddress: sdk.String("dolores"),
                                        Network: sdk.String("enim"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("3f94e29e-973e-4922-a57a-15be3e060807"),
                                        IPAddress: sdk.String("eveniet"),
                                        Network: sdk.String("qui"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("6e3ab884-5f05-497a-a0ff-2a54a31e9476"),
                                        IPAddress: sdk.String("ut"),
                                        Network: sdk.String("culpa"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Armando Kemmer"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(456520),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("56f9251a-5a9d-4a66-8ff5-7bfaad4f9efc"),
                                        IPAddress: sdk.String("vitae"),
                                        Network: sdk.String("rerum"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("512c1032-648d-4c2f-a151-99ebfd0e9fe6"),
                                        IPAddress: sdk.String("porro"),
                                        Network: sdk.String("suscipit"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("2ca3aed0-1179-4963-92fd-e04771778ff6"),
                                        IPAddress: sdk.String("architecto"),
                                        Network: sdk.String("fugiat"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Glenda Goldner"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(235263),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("0a15db6a-6606-459a-9ade-aab5851d6c64"),
                                        IPAddress: sdk.String("ad"),
                                        Network: sdk.String("expedita"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d"),
                                        IPAddress: sdk.String("totam"),
                                        Network: sdk.String("impedit"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Clyde Nader"),
                            },
                        },
                        NetworkConfig: shared.InstanceConfigNetworkConfigEnumNetworkconfigUnspecified.ToPointer(),
                        NetworkTemplate: sdk.String("deleniti"),
                        OsImage: sdk.String("veritatis"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("20102 Annabel Manor"),
                            ExistingNetworkID: sdk.String("quae"),
                            NetworkID: sdk.String("dolor"),
                        },
                        UserNote: sdk.String("fugiat"),
                    },
                    shared.InstanceConfigInput{
                        AccountNetworksEnabled: sdk.Bool(false),
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("1059 Torp Lakes"),
                            ExistingNetworkID: sdk.String("necessitatibus"),
                            NetworkID: sdk.String("sed"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("53b66845-1c6c-46e2-85e1-6deab3fec957"),
                        InstanceType: sdk.String("blanditiis"),
                        LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(376389),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("584273a8-418d-4162-b09f-b0929921aefb"),
                                        IPAddress: sdk.String("omnis"),
                                        Network: sdk.String("delectus"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("8c4d86e6-8e4b-4e05-a013-f59da757a59e"),
                                        IPAddress: sdk.String("impedit"),
                                        Network: sdk.String("hic"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Ruben Hodkiewicz"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(65082),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("aa3383c2-beb4-4773-b3c8-d72f64d1db1f"),
                                        IPAddress: sdk.String("quia"),
                                        Network: sdk.String("porro"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("310661e9-6349-4e1c-b9e0-6e3a437000ae"),
                                        IPAddress: sdk.String("ea"),
                                        Network: sdk.String("quidem"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("bc9b8f75-9eac-455a-9741-d311352965bb"),
                                        IPAddress: sdk.String("rem"),
                                        Network: sdk.String("dolorum"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("20261143-5e13-49db-8225-9b1abda8c070"),
                                        IPAddress: sdk.String("voluptates"),
                                        Network: sdk.String("inventore"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Micheal Roob III"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(456688),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("d1ad879e-eb96-465b-85ef-bd02bae0be2d"),
                                        IPAddress: sdk.String("odio"),
                                        Network: sdk.String("praesentium"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Stacy Mraz"),
                            },
                        },
                        NetworkConfig: shared.InstanceConfigNetworkConfigEnumMultiVlan.ToPointer(),
                        NetworkTemplate: sdk.String("similique"),
                        OsImage: sdk.String("ut"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("316 Vincenza Oval"),
                            ExistingNetworkID: sdk.String("fugit"),
                            NetworkID: sdk.String("numquam"),
                        },
                        UserNote: sdk.String("numquam"),
                    },
                    shared.InstanceConfigInput{
                        AccountNetworksEnabled: sdk.Bool(false),
                        ClientNetwork: &shared.NetworkAddress{
                            Address: sdk.String("86478 Christophe Rapid"),
                            ExistingNetworkID: sdk.String("voluptatum"),
                            NetworkID: sdk.String("cupiditate"),
                        },
                        Hyperthreading: sdk.Bool(false),
                        ID: sdk.String("5c537c64-54ef-4b0b-b489-6c3ca5acfbe2"),
                        InstanceType: sdk.String("repellat"),
                        LogicalInterfaces: []shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(362888),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("07577929-177d-4eac-a46e-cb573409e3eb"),
                                        IPAddress: sdk.String("dicta"),
                                        Network: sdk.String("earum"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("a2b12eb0-7f11-46db-9954-5fc95fa88970"),
                                        IPAddress: sdk.String("saepe"),
                                        Network: sdk.String("architecto"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Kristopher Reynolds"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(38557),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("cb33ea05-5b19-47cd-84e2-f52d82d3513b"),
                                        IPAddress: sdk.String("tempore"),
                                        Network: sdk.String("nisi"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("48b656bc-db35-4ff2-a4b2-7537a8cd9e73"),
                                        IPAddress: sdk.String("dicta"),
                                        Network: sdk.String("error"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("177d525f-77b1-414e-ab52-ff785fc37814"),
                                        IPAddress: sdk.String("assumenda"),
                                        Network: sdk.String("aliquam"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("98e0c2bb-89eb-475d-ad63-6c600503d8bb"),
                                        IPAddress: sdk.String("amet"),
                                        Network: sdk.String("quasi"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Ronald Wehner"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(587967),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("e9e057eb-809e-4281-8331-f3981d4c700b"),
                                        IPAddress: sdk.String("ea"),
                                        Network: sdk.String("aperiam"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumClient.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("f3c93c73-b9da-43f2-8eda-7e23f2257411"),
                                        IPAddress: sdk.String("hic"),
                                        Network: sdk.String("deserunt"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("4b7544e4-72e8-4028-97a5-b40463a7d575"),
                                        IPAddress: sdk.String("reiciendis"),
                                        Network: sdk.String("ab"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumTypeUnspecified.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Maria Veum"),
                            },
                            shared.GoogleCloudBaremetalsolutionV2LogicalInterface{
                                InterfaceIndex: sdk.Int(256114),
                                LogicalNetworkInterfaces: []shared.LogicalNetworkInterface{
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("d7334ec1-b781-4b36-a080-88d100efada2"),
                                        IPAddress: sdk.String("voluptatem"),
                                        Network: sdk.String("alias"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("f0422eb2-164c-4f9a-b836-6c723ffda9e0"),
                                        IPAddress: sdk.String("nisi"),
                                        Network: sdk.String("rerum"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                    shared.LogicalNetworkInterface{
                                        DefaultGateway: sdk.Bool(false),
                                        ID: sdk.String("e4825c1f-c0e1-415c-80bf-f918544ec42d"),
                                        IPAddress: sdk.String("vero"),
                                        Network: sdk.String("doloribus"),
                                        NetworkType: shared.LogicalNetworkInterfaceNetworkTypeEnumPrivate.ToPointer(),
                                    },
                                },
                                Name: sdk.String("Sheldon Leannon V"),
                            },
                        },
                        NetworkConfig: shared.InstanceConfigNetworkConfigEnumSingleVlan.ToPointer(),
                        NetworkTemplate: sdk.String("esse"),
                        OsImage: sdk.String("iure"),
                        PrivateNetwork: &shared.NetworkAddress{
                            Address: sdk.String("2842 Garret Crossing"),
                            ExistingNetworkID: sdk.String("officia"),
                            NetworkID: sdk.String("reprehenderit"),
                        },
                        UserNote: sdk.String("distinctio"),
                    },
                },
                Location: sdk.String("eius"),
                Networks: []shared.NetworkConfigInput{
                    shared.NetworkConfigInput{
                        Bandwidth: shared.NetworkConfigBandwidthEnumBw2Gbps.ToPointer(),
                        Cidr: sdk.String("maiores"),
                        GcpService: sdk.String("accusantium"),
                        ID: sdk.String("5e3d48fd-af31-43a1-b5fd-94259c0b36f2"),
                        JumboFramesEnabled: sdk.Bool(false),
                        ServiceCidr: shared.NetworkConfigServiceCidrEnumDisabled.ToPointer(),
                        Type: shared.NetworkConfigTypeEnumPrivate.ToPointer(),
                        UserNote: sdk.String("officia"),
                        VlanAttachments: []shared.IntakeVlanAttachment{
                            shared.IntakeVlanAttachment{
                                ID: sdk.String("44f3b756-c11f-46c3-ba51-26243835bbc0"),
                                PairingKey: sdk.String("nemo"),
                            },
                            shared.IntakeVlanAttachment{
                                ID: sdk.String("a23a45ce-fc5f-4de1-8a0c-e2169e510019"),
                                PairingKey: sdk.String("cumque"),
                            },
                            shared.IntakeVlanAttachment{
                                ID: sdk.String("6dc5e347-6279-49bf-bbe6-949fb2bb4eca"),
                                PairingKey: sdk.String("saepe"),
                            },
                        },
                        VlanSameProject: sdk.Bool(false),
                    },
                },
                StatusMessage: sdk.String("autem"),
                TicketID: sdk.String("quo"),
                Volumes: []shared.VolumeConfigInput{
                    shared.VolumeConfigInput{
                        GcpService: sdk.String("illum"),
                        ID: sdk.String("5db3adeb-d5da-4ea4-8506-a8aa94c02644"),
                        LunRanges: []shared.LunRange{
                            shared.LunRange{
                                Quantity: sdk.Int(942185),
                                SizeGb: sdk.Int(342921),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(888265),
                                SizeGb: sdk.Int(603650),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(860311),
                                SizeGb: sdk.Int(621393),
                            },
                            shared.LunRange{
                                Quantity: sdk.Int(653000),
                                SizeGb: sdk.Int(298613),
                            },
                        },
                        MachineIds: []string{
                            "esse",
                            "corrupti",
                        },
                        NfsExports: []shared.NfsExport{
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("facere"),
                                MachineID: sdk.String("impedit"),
                                NetworkID: sdk.String("quasi"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumReadOnly.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("quod"),
                                MachineID: sdk.String("laboriosam"),
                                NetworkID: sdk.String("doloremque"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                            },
                            shared.NfsExport{
                                AllowDev: sdk.Bool(false),
                                AllowSuid: sdk.Bool(false),
                                Cidr: sdk.String("facere"),
                                MachineID: sdk.String("necessitatibus"),
                                NetworkID: sdk.String("maxime"),
                                NoRootSquash: sdk.Bool(false),
                                Permissions: shared.NfsExportPermissionsEnumPermissionsUnspecified.ToPointer(),
                            },
                        },
                        PerformanceTier: shared.VolumeConfigPerformanceTierEnumVolumePerformanceTierUnspecified.ToPointer(),
                        Protocol: shared.VolumeConfigProtocolEnumProtocolUnspecified.ToPointer(),
                        SizeGb: sdk.Int(627161),
                        SnapshotsEnabled: sdk.Bool(false),
                        StorageAggregatePool: sdk.String("porro"),
                        Type: shared.VolumeConfigTypeEnumFlash.ToPointer(),
                        UserNote: sdk.String("quae"),
                    },
                },
                VpcScEnabled: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("ipsa"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.BaremetalsolutionProjectsLocationsProvisioningConfigsSubmitSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitProvisioningConfigResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsProvisioningQuotasList

List the budget details to provision resources on a given project.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsProvisioningQuotasList(ctx, operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("earum"),
        PageSize: sdk.Int64(985360),
        PageToken: sdk.String("velit"),
        Parent: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProvisioningQuotasResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsSSHKeysCreate

Register a public SSH key in the specified project for use with the interactive serial console feature.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSSHKeysCreate(ctx, operations.BaremetalsolutionProjectsLocationsSSHKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SSHKeyInput: &shared.SSHKeyInput{
            PublicKey: sdk.String("neque"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("beatae"),
        Parent: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        SSHKeyID: sdk.String("odit"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("rerum"),
    }, operations.BaremetalsolutionProjectsLocationsSSHKeysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SSHKey != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsSSHKeysList

Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsSSHKeysList(ctx, operations.BaremetalsolutionProjectsLocationsSSHKeysListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("id"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("ex"),
        PageSize: sdk.Int64(555679),
        PageToken: sdk.String("veritatis"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.BaremetalsolutionProjectsLocationsSSHKeysListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSSHKeysResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesList

List storage volumes in a given project and location.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesList(ctx, operations.BaremetalsolutionProjectsLocationsVolumesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("sed"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("maxime"),
        PageSize: sdk.Int64(337841),
        PageToken: sdk.String("cupiditate"),
        Parent: "aliquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVolumesResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesLunsEvict

Skips lun's cooloff and deletes it now. Lun must be in cooloff state.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesLunsEvict(ctx, operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "amet": "nemo",
            "ipsa": "quisquam",
            "tenetur": "quas",
            "molestiae": "aliquid",
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("accusantium"),
        Name: "Bethany Johnson",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quidem"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesLunsEvictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesLunsList

List storage volume luns for given storage volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesLunsList(ctx, operations.BaremetalsolutionProjectsLocationsVolumesLunsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("blanditiis"),
        PageSize: sdk.Int64(573610),
        PageToken: sdk.String("repellat"),
        Parent: "a",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("animi"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesLunsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLunsResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesPatch

Update details of a single storage volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesPatch(ctx, operations.BaremetalsolutionProjectsLocationsVolumesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VolumeInput: &shared.VolumeInput{
            AutoGrownSizeGib: sdk.String("deserunt"),
            CurrentSizeGib: sdk.String("corporis"),
            EmergencySizeGib: sdk.String("velit"),
            ID: sdk.String("e5ae6e0a-c184-4c2b-9c24-7c88373a40e1"),
            Labels: map[string]string{
                "dolore": "sunt",
                "maiores": "neque",
                "odit": "earum",
            },
            MaxSizeGib: sdk.String("veniam"),
            Notes: sdk.String("ipsam"),
            OriginallyRequestedSizeGib: sdk.String("eaque"),
            PerformanceTier: shared.VolumePerformanceTierEnumVolumePerformanceTierShared.ToPointer(),
            Pod: sdk.String("veniam"),
            RemainingSpaceGib: sdk.String("nihil"),
            RequestedSizeGib: sdk.String("ad"),
            SnapshotAutoDeleteBehavior: shared.VolumeSnapshotAutoDeleteBehaviorEnumDisabled.ToPointer(),
            SnapshotEnabled: sdk.Bool(false),
            SnapshotReservationDetail: &shared.SnapshotReservationDetail{
                ReservedSpaceGib: sdk.String("tenetur"),
                ReservedSpacePercent: sdk.Int(338281),
                ReservedSpaceRemainingGib: sdk.String("quibusdam"),
                ReservedSpaceUsedPercent: sdk.Int(366480),
            },
            SnapshotSchedulePolicy: sdk.String("suscipit"),
            State: shared.VolumeStateEnumCoolOff.ToPointer(),
            StorageAggregatePool: sdk.String("sit"),
            StorageType: shared.VolumeStorageTypeEnumHdd.ToPointer(),
            WorkloadProfile: shared.VolumeWorkloadProfileEnumHana.ToPointer(),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("sed"),
        Key: sdk.String("possimus"),
        Name: "Cornelius Bradtke",
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UpdateMask: sdk.String("voluptatibus"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesRename

RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesRename(ctx, operations.BaremetalsolutionProjectsLocationsVolumesRenameRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RenameVolumeRequest: &shared.RenameVolumeRequest{
            NewVolumeID: sdk.String("soluta"),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("error"),
        Name: "Joyce O'Connell",
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("corrupti"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesRenameSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Volume != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesResize

Emergency Volume resize.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesResize(ctx, operations.BaremetalsolutionProjectsLocationsVolumesResizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ResizeVolumeRequest: &shared.ResizeVolumeRequest{
            SizeGib: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("accusamus"),
        Volume: "optio",
    }, operations.BaremetalsolutionProjectsLocationsVolumesResizeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate

Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreate(ctx, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        VolumeSnapshotInput: &shared.VolumeSnapshotInput{
            Description: sdk.String("minus"),
            Name: sdk.String("Julian Ziemann"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("illo"),
        Fields: sdk.String("aut"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("nostrum"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeSnapshot != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete

Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesSnapshotsDelete(ctx, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("quos"),
        Key: sdk.String("aperiam"),
        Name: "Alexis Hane",
        OauthToken: sdk.String("quas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesSnapshotsGet

Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesSnapshotsGet(ctx, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("consectetur"),
        Name: "Ian Legros",
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VolumeSnapshot != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesSnapshotsList

Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesSnapshotsList(ctx, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptatum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("autem"),
        PageSize: sdk.Int64(694088),
        PageToken: sdk.String("totam"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVolumeSnapshotsResponse != nil {
        // handle response
    }
}
```

## BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot

Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshot(ctx, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "commodi": "alias",
            "fuga": "aut",
            "dolore": "maxime",
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptas"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("illo"),
        VolumeSnapshot: "nihil",
    }, operations.BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
