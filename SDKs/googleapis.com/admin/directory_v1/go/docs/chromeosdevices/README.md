# Chromeosdevices

### Available Operations

* [DirectoryChromeosdevicesAction](#directorychromeosdevicesaction) - Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).
* [DirectoryChromeosdevicesGet](#directorychromeosdevicesget) - Retrieves a Chrome OS device's properties.
* [DirectoryChromeosdevicesList](#directorychromeosdeviceslist) - Retrieves a paginated list of Chrome OS devices within an account.
* [DirectoryChromeosdevicesMoveDevicesToOu](#directorychromeosdevicesmovedevicestoou) - Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.
* [DirectoryChromeosdevicesPatch](#directorychromeosdevicespatch) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
* [DirectoryChromeosdevicesUpdate](#directorychromeosdevicesupdate) - Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

## DirectoryChromeosdevicesAction

Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

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
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesAction(ctx, operations.DirectoryChromeosdevicesActionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChromeOsDeviceAction: &shared.ChromeOsDeviceAction{
            Action: sdk.String("repellat"),
            DeprovisionReason: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("commodi"),
        CustomerID: "quam",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        ResourceID: "quis",
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DirectoryChromeosdevicesActionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryChromeosdevicesGet

Retrieves a Chrome OS device's properties.

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
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesGet(ctx, operations.DirectoryChromeosdevicesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        CustomerID: "sequi",
        DeviceID: "tenetur",
        Fields: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryChromeosdevicesGetProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DirectoryChromeosdevicesGetSecurity{
        Option1: &operations.DirectoryChromeosdevicesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChromeOsDevice != nil {
        // handle response
    }
}
```

## DirectoryChromeosdevicesList

Retrieves a paginated list of Chrome OS devices within an account.

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
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesList(ctx, operations.DirectoryChromeosdevicesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        CustomerID: "vero",
        Fields: sdk.String("nihil"),
        IncludeChildOrgunits: sdk.Bool(false),
        Key: sdk.String("praesentium"),
        MaxResults: sdk.Int64(976762),
        OauthToken: sdk.String("ipsa"),
        OrderBy: operations.DirectoryChromeosdevicesListOrderByEnumNotes.ToPointer(),
        OrgUnitPath: sdk.String("voluptate"),
        PageToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryChromeosdevicesListProjectionEnumBasic.ToPointer(),
        Query: sdk.String("doloremque"),
        QuotaUser: sdk.String("reprehenderit"),
        SortOrder: operations.DirectoryChromeosdevicesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.DirectoryChromeosdevicesListSecurity{
        Option1: &operations.DirectoryChromeosdevicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChromeOsDevices != nil {
        // handle response
    }
}
```

## DirectoryChromeosdevicesMoveDevicesToOu

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

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
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesMoveDevicesToOu(ctx, operations.DirectoryChromeosdevicesMoveDevicesToOuRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChromeOsMoveDevicesToOu: &shared.ChromeOsMoveDevicesToOu{
            DeviceIds: []string{
                "iusto",
                "dicta",
            },
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("accusamus"),
        CustomerID: "commodi",
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("ipsum"),
        OrgUnitPath: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestias"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.DirectoryChromeosdevicesMoveDevicesToOuSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DirectoryChromeosdevicesPatch

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesPatch(ctx, operations.DirectoryChromeosdevicesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChromeOsDevice: &shared.ChromeOsDevice{
            ActiveTimeRanges: []shared.ChromeOsDeviceActiveTimeRanges{
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(523248),
                    Date: types.MustDateFromString("2022-09-20"),
                },
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(921158),
                    Date: types.MustDateFromString("2022-11-01"),
                },
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(929297),
                    Date: types.MustDateFromString("2022-09-06"),
                },
            },
            AnnotatedAssetID: sdk.String("consequatur"),
            AnnotatedLocation: sdk.String("est"),
            AnnotatedUser: sdk.String("quibusdam"),
            AutoUpdateExpiration: sdk.String("explicabo"),
            BootMode: sdk.String("deserunt"),
            CPUInfo: []shared.ChromeOsDeviceCPUInfo{
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("quibusdam"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("qui"),
                                    SessionDuration: sdk.String("aliquid"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("cupiditate"),
                                    SessionDuration: sdk.String("quos"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(20107),
                            IdleDuration: sdk.String("magni"),
                            MaxScalingFrequencyKhz: sdk.Int(828940),
                        },
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("alias"),
                                    SessionDuration: sdk.String("fugit"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("dolorum"),
                                    SessionDuration: sdk.String("excepturi"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(270008),
                            IdleDuration: sdk.String("facilis"),
                            MaxScalingFrequencyKhz: sdk.Int(735194),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(288476),
                    Model: sdk.String("delectus"),
                },
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("eum"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("sint"),
                                    SessionDuration: sdk.String("aliquid"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("provident"),
                                    SessionDuration: sdk.String("necessitatibus"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("sint"),
                                    SessionDuration: sdk.String("officia"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("dolor"),
                                    SessionDuration: sdk.String("debitis"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(952749),
                            IdleDuration: sdk.String("dolorum"),
                            MaxScalingFrequencyKhz: sdk.Int(447125),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(449198),
                    Model: sdk.String("illum"),
                },
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("maiores"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("magnam"),
                                    SessionDuration: sdk.String("cumque"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(813798),
                            IdleDuration: sdk.String("ea"),
                            MaxScalingFrequencyKhz: sdk.Int(396506),
                        },
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("accusamus"),
                                    SessionDuration: sdk.String("non"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("occaecati"),
                                    SessionDuration: sdk.String("enim"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("accusamus"),
                                    SessionDuration: sdk.String("delectus"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(692532),
                            IdleDuration: sdk.String("provident"),
                            MaxScalingFrequencyKhz: sdk.Int(725255),
                        },
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("blanditiis"),
                                    SessionDuration: sdk.String("deleniti"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("sapiente"),
                                    SessionDuration: sdk.String("amet"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("deserunt"),
                                    SessionDuration: sdk.String("nisi"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(423855),
                            IdleDuration: sdk.String("natus"),
                            MaxScalingFrequencyKhz: sdk.Int(606393),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(474867),
                    Model: sdk.String("perferendis"),
                },
            },
            CPUStatusReports: []shared.ChromeOsDeviceCPUStatusReports{
                shared.ChromeOsDeviceCPUStatusReports{
                    CPUTemperatureInfo: []shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("distinctio"),
                            Temperature: sdk.Int(660174),
                        },
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("labore"),
                            Temperature: sdk.Int(290077),
                        },
                    },
                    CPUUtilizationPercentageInfo: []int{
                        618016,
                        749170,
                    },
                    ReportTime: types.MustTimeFromString("2022-02-14T08:45:31.579Z"),
                },
                shared.ChromeOsDeviceCPUStatusReports{
                    CPUTemperatureInfo: []shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("architecto"),
                            Temperature: sdk.Int(298282),
                        },
                    },
                    CPUUtilizationPercentageInfo: []int{
                        569965,
                    },
                    ReportTime: types.MustTimeFromString("2022-05-30T07:57:16.138Z"),
                },
            },
            DeprovisionReason: shared.ChromeOsDeviceDeprovisionReasonEnumDeprovisionReasonDifferentModelReplacement.ToPointer(),
            DeviceFiles: []shared.ChromeOsDeviceDeviceFiles{
                shared.ChromeOsDeviceDeviceFiles{
                    CreateTime: types.MustTimeFromString("2022-05-07T13:57:38.738Z"),
                    DownloadURL: sdk.String("reiciendis"),
                    Name: sdk.String("Tommy Kemmer"),
                    Type: sdk.String("odit"),
                },
                shared.ChromeOsDeviceDeviceFiles{
                    CreateTime: types.MustTimeFromString("2022-11-26T12:00:10.052Z"),
                    DownloadURL: sdk.String("iure"),
                    Name: sdk.String("Doyle Gibson"),
                    Type: sdk.String("facilis"),
                },
                shared.ChromeOsDeviceDeviceFiles{
                    CreateTime: types.MustTimeFromString("2022-11-25T10:00:44.006Z"),
                    DownloadURL: sdk.String("architecto"),
                    Name: sdk.String("Pedro Ratke"),
                    Type: sdk.String("quibusdam"),
                },
            },
            DeviceID: sdk.String("sed"),
            DiskVolumeReports: []shared.ChromeOsDeviceDiskVolumeReports{
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("accusantium"),
                            StorageTotal: sdk.String("consequuntur"),
                            VolumeID: sdk.String("praesentium"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("natus"),
                            StorageTotal: sdk.String("magni"),
                            VolumeID: sdk.String("sunt"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("quo"),
                            StorageTotal: sdk.String("illum"),
                            VolumeID: sdk.String("pariatur"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("maxime"),
                            StorageTotal: sdk.String("ea"),
                            VolumeID: sdk.String("excepturi"),
                        },
                    },
                },
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("ea"),
                            StorageTotal: sdk.String("accusantium"),
                            VolumeID: sdk.String("ab"),
                        },
                    },
                },
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("quidem"),
                            StorageTotal: sdk.String("ipsam"),
                            VolumeID: sdk.String("voluptate"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("autem"),
                            StorageTotal: sdk.String("nam"),
                            VolumeID: sdk.String("eaque"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("pariatur"),
                            StorageTotal: sdk.String("nemo"),
                            VolumeID: sdk.String("voluptatibus"),
                        },
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("perferendis"),
                            StorageTotal: sdk.String("fugiat"),
                            VolumeID: sdk.String("amet"),
                        },
                    },
                },
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("cumque"),
                            StorageTotal: sdk.String("corporis"),
                            VolumeID: sdk.String("hic"),
                        },
                    },
                },
            },
            DockMacAddress: sdk.String("libero"),
            Etag: sdk.String("nobis"),
            EthernetMacAddress: sdk.String("dolores"),
            EthernetMacAddress0: sdk.String("quis"),
            FirmwareVersion: sdk.String("totam"),
            FirstEnrollmentTime: sdk.String("dignissimos"),
            Kind: sdk.String("eaque"),
            LastDeprovisionTimestamp: sdk.String("quis"),
            LastEnrollmentTime: types.MustTimeFromString("2022-10-27T11:39:54.088Z"),
            LastKnownNetwork: []shared.ChromeOsDeviceLastKnownNetwork{
                shared.ChromeOsDeviceLastKnownNetwork{
                    IPAddress: sdk.String("dolores"),
                    WanIPAddress: sdk.String("minus"),
                },
            },
            LastSync: types.MustTimeFromString("2022-10-11T06:25:10.430Z"),
            MacAddress: sdk.String("vero"),
            ManufactureDate: sdk.String("nostrum"),
            Meid: sdk.String("hic"),
            Model: sdk.String("recusandae"),
            Notes: sdk.String("omnis"),
            OrderNumber: sdk.String("facilis"),
            OrgUnitID: sdk.String("perspiciatis"),
            OrgUnitPath: sdk.String("voluptatem"),
            OsUpdateStatus: &shared.OsUpdateStatus{
                RebootTime: sdk.String("porro"),
                State: shared.OsUpdateStatusStateEnumUpdateStateUnspecified.ToPointer(),
                TargetKioskAppVersion: sdk.String("blanditiis"),
                TargetOsVersion: sdk.String("error"),
                UpdateCheckTime: sdk.String("eaque"),
                UpdateTime: sdk.String("occaecati"),
            },
            OsVersion: sdk.String("rerum"),
            PlatformVersion: sdk.String("adipisci"),
            RecentUsers: []shared.ChromeOsDeviceRecentUsers{
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Dolly_Morar86@hotmail.com"),
                    Type: sdk.String("provident"),
                },
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Moriah55@hotmail.com"),
                    Type: sdk.String("aliquid"),
                },
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Cornelius21@gmail.com"),
                    Type: sdk.String("hic"),
                },
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Myrtle_Klein@yahoo.com"),
                    Type: sdk.String("amet"),
                },
            },
            ScreenshotFiles: []shared.ChromeOsDeviceScreenshotFiles{
                shared.ChromeOsDeviceScreenshotFiles{
                    CreateTime: types.MustTimeFromString("2022-11-30T20:48:38.083Z"),
                    DownloadURL: sdk.String("ipsa"),
                    Name: sdk.String("Vera Kuhlman"),
                    Type: sdk.String("quidem"),
                },
                shared.ChromeOsDeviceScreenshotFiles{
                    CreateTime: types.MustTimeFromString("2021-11-13T08:40:53.559Z"),
                    DownloadURL: sdk.String("natus"),
                    Name: sdk.String("Kay Bailey DDS"),
                    Type: sdk.String("dolorum"),
                },
                shared.ChromeOsDeviceScreenshotFiles{
                    CreateTime: types.MustTimeFromString("2022-07-19T09:36:55.923Z"),
                    DownloadURL: sdk.String("dolorum"),
                    Name: sdk.String("Arturo Treutel"),
                    Type: sdk.String("nihil"),
                },
            },
            SerialNumber: sdk.String("ipsum"),
            Status: sdk.String("voluptate"),
            SupportEndDate: types.MustTimeFromString("2021-03-10T07:33:18.208Z"),
            SystemRAMFreeReports: []shared.ChromeOsDeviceSystemRAMFreeReports{
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2022-12-24T11:05:48.936Z"),
                    SystemRAMFreeInfo: []string{
                        "optio",
                    },
                },
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2022-01-15T13:56:57.287Z"),
                    SystemRAMFreeInfo: []string{
                        "suscipit",
                        "deserunt",
                        "provident",
                        "minima",
                    },
                },
            },
            SystemRAMTotal: sdk.String("repellendus"),
            TpmVersionInfo: &shared.ChromeOsDeviceTpmVersionInfo{
                Family: sdk.String("totam"),
                FirmwareVersion: sdk.String("similique"),
                Manufacturer: sdk.String("alias"),
                SpecLevel: sdk.String("at"),
                TpmModel: sdk.String("quaerat"),
                VendorSpecific: sdk.String("tempora"),
            },
            WillAutoRenew: sdk.Bool(false),
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        CustomerID: "qui",
        DeviceID: "dolorum",
        Fields: sdk.String("a"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryChromeosdevicesPatchProjectionEnumBasic.ToPointer(),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DirectoryChromeosdevicesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChromeOsDevice != nil {
        // handle response
    }
}
```

## DirectoryChromeosdevicesUpdate

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Chromeosdevices.DirectoryChromeosdevicesUpdate(ctx, operations.DirectoryChromeosdevicesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChromeOsDevice: &shared.ChromeOsDevice{
            ActiveTimeRanges: []shared.ChromeOsDeviceActiveTimeRanges{
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(880298),
                    Date: types.MustDateFromString("2022-09-08"),
                },
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(213312),
                    Date: types.MustDateFromString("2021-06-12"),
                },
                shared.ChromeOsDeviceActiveTimeRanges{
                    ActiveTime: sdk.Int(471752),
                    Date: types.MustDateFromString("2022-04-16"),
                },
            },
            AnnotatedAssetID: sdk.String("neque"),
            AnnotatedLocation: sdk.String("sed"),
            AnnotatedUser: sdk.String("vel"),
            AutoUpdateExpiration: sdk.String("libero"),
            BootMode: sdk.String("voluptas"),
            CPUInfo: []shared.ChromeOsDeviceCPUInfo{
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("quam"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("qui"),
                                    SessionDuration: sdk.String("cupiditate"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("maxime"),
                                    SessionDuration: sdk.String("pariatur"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(747080),
                            IdleDuration: sdk.String("dicta"),
                            MaxScalingFrequencyKhz: sdk.Int(674848),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(517379),
                    Model: sdk.String("incidunt"),
                },
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("aspernatur"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("facilis"),
                                    SessionDuration: sdk.String("aliquid"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("quam"),
                                    SessionDuration: sdk.String("molestias"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("temporibus"),
                                    SessionDuration: sdk.String("qui"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(204865),
                            IdleDuration: sdk.String("fugit"),
                            MaxScalingFrequencyKhz: sdk.Int(164959),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(488056),
                    Model: sdk.String("sunt"),
                },
                shared.ChromeOsDeviceCPUInfo{
                    Architecture: sdk.String("ullam"),
                    LogicalCpus: []shared.ChromeOsDeviceCPUInfoLogicalCpus{
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("voluptatem"),
                                    SessionDuration: sdk.String("cumque"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("soluta"),
                                    SessionDuration: sdk.String("nobis"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("et"),
                                    SessionDuration: sdk.String("saepe"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("ipsum"),
                                    SessionDuration: sdk.String("veritatis"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(749255),
                            IdleDuration: sdk.String("quos"),
                            MaxScalingFrequencyKhz: sdk.Int(731694),
                        },
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("aperiam"),
                                    SessionDuration: sdk.String("delectus"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("dolorem"),
                                    SessionDuration: sdk.String("dolore"),
                                },
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("labore"),
                                    SessionDuration: sdk.String("adipisci"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(677263),
                            IdleDuration: sdk.String("architecto"),
                            MaxScalingFrequencyKhz: sdk.Int(63038),
                        },
                        shared.ChromeOsDeviceCPUInfoLogicalCpus{
                            CStates: []shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                shared.ChromeOsDeviceCPUInfoLogicalCpusCStates{
                                    DisplayName: sdk.String("quas"),
                                    SessionDuration: sdk.String("itaque"),
                                },
                            },
                            CurrentScalingFrequencyKhz: sdk.Int(9240),
                            IdleDuration: sdk.String("est"),
                            MaxScalingFrequencyKhz: sdk.Int(833038),
                        },
                    },
                    MaxClockSpeedKhz: sdk.Int(785153),
                    Model: sdk.String("doloribus"),
                },
            },
            CPUStatusReports: []shared.ChromeOsDeviceCPUStatusReports{
                shared.ChromeOsDeviceCPUStatusReports{
                    CPUTemperatureInfo: []shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("cupiditate"),
                            Temperature: sdk.Int(181631),
                        },
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("quae"),
                            Temperature: sdk.Int(512393),
                        },
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("odio"),
                            Temperature: sdk.Int(580447),
                        },
                    },
                    CPUUtilizationPercentageInfo: []int{
                        787542,
                        876506,
                        606476,
                        338159,
                    },
                    ReportTime: types.MustTimeFromString("2022-01-15T00:38:43.469Z"),
                },
                shared.ChromeOsDeviceCPUStatusReports{
                    CPUTemperatureInfo: []shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("consectetur"),
                            Temperature: sdk.Int(878870),
                        },
                        shared.ChromeOsDeviceCPUStatusReportsCPUTemperatureInfo{
                            Label: sdk.String("tenetur"),
                            Temperature: sdk.Int(492268),
                        },
                    },
                    CPUUtilizationPercentageInfo: []int{
                        715561,
                        799203,
                        486160,
                        630448,
                    },
                    ReportTime: types.MustTimeFromString("2021-04-02T18:28:29.036Z"),
                },
            },
            DeprovisionReason: shared.ChromeOsDeviceDeprovisionReasonEnumDeprovisionReasonOther.ToPointer(),
            DeviceFiles: []shared.ChromeOsDeviceDeviceFiles{
                shared.ChromeOsDeviceDeviceFiles{
                    CreateTime: types.MustTimeFromString("2020-06-15T09:45:48.083Z"),
                    DownloadURL: sdk.String("sequi"),
                    Name: sdk.String("Edmund Ankunding"),
                    Type: sdk.String("nulla"),
                },
                shared.ChromeOsDeviceDeviceFiles{
                    CreateTime: types.MustTimeFromString("2022-03-22T03:27:44.973Z"),
                    DownloadURL: sdk.String("maiores"),
                    Name: sdk.String("Ted Romaguera MD"),
                    Type: sdk.String("tempora"),
                },
            },
            DeviceID: sdk.String("ipsam"),
            DiskVolumeReports: []shared.ChromeOsDeviceDiskVolumeReports{
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("vel"),
                            StorageTotal: sdk.String("possimus"),
                            VolumeID: sdk.String("magnam"),
                        },
                    },
                },
                shared.ChromeOsDeviceDiskVolumeReports{
                    VolumeInfo: []shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                        shared.ChromeOsDeviceDiskVolumeReportsVolumeInfo{
                            StorageFree: sdk.String("ex"),
                            StorageTotal: sdk.String("laudantium"),
                            VolumeID: sdk.String("dicta"),
                        },
                    },
                },
            },
            DockMacAddress: sdk.String("dolor"),
            Etag: sdk.String("maiores"),
            EthernetMacAddress: sdk.String("quasi"),
            EthernetMacAddress0: sdk.String("ex"),
            FirmwareVersion: sdk.String("nulla"),
            FirstEnrollmentTime: sdk.String("excepturi"),
            Kind: sdk.String("voluptatibus"),
            LastDeprovisionTimestamp: sdk.String("nostrum"),
            LastEnrollmentTime: types.MustTimeFromString("2020-08-20T04:25:24.387Z"),
            LastKnownNetwork: []shared.ChromeOsDeviceLastKnownNetwork{
                shared.ChromeOsDeviceLastKnownNetwork{
                    IPAddress: sdk.String("ea"),
                    WanIPAddress: sdk.String("impedit"),
                },
                shared.ChromeOsDeviceLastKnownNetwork{
                    IPAddress: sdk.String("corporis"),
                    WanIPAddress: sdk.String("veniam"),
                },
                shared.ChromeOsDeviceLastKnownNetwork{
                    IPAddress: sdk.String("aliquid"),
                    WanIPAddress: sdk.String("inventore"),
                },
                shared.ChromeOsDeviceLastKnownNetwork{
                    IPAddress: sdk.String("magnam"),
                    WanIPAddress: sdk.String("ea"),
                },
            },
            LastSync: types.MustTimeFromString("2022-04-21T16:53:11.568Z"),
            MacAddress: sdk.String("recusandae"),
            ManufactureDate: sdk.String("aspernatur"),
            Meid: sdk.String("minima"),
            Model: sdk.String("eaque"),
            Notes: sdk.String("a"),
            OrderNumber: sdk.String("libero"),
            OrgUnitID: sdk.String("aut"),
            OrgUnitPath: sdk.String("aut"),
            OsUpdateStatus: &shared.OsUpdateStatus{
                RebootTime: sdk.String("deleniti"),
                State: shared.OsUpdateStatusStateEnumUpdateStateNeedReboot.ToPointer(),
                TargetKioskAppVersion: sdk.String("aliquam"),
                TargetOsVersion: sdk.String("fugit"),
                UpdateCheckTime: sdk.String("accusamus"),
                UpdateTime: sdk.String("inventore"),
            },
            OsVersion: sdk.String("non"),
            PlatformVersion: sdk.String("et"),
            RecentUsers: []shared.ChromeOsDeviceRecentUsers{
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Ramon.Franecki@hotmail.com"),
                    Type: sdk.String("nobis"),
                },
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Richard_Stoltenberg@yahoo.com"),
                    Type: sdk.String("quasi"),
                },
                shared.ChromeOsDeviceRecentUsers{
                    Email: sdk.String("Derrick.Cole@gmail.com"),
                    Type: sdk.String("molestiae"),
                },
            },
            ScreenshotFiles: []shared.ChromeOsDeviceScreenshotFiles{
                shared.ChromeOsDeviceScreenshotFiles{
                    CreateTime: types.MustTimeFromString("2022-09-27T07:50:41.350Z"),
                    DownloadURL: sdk.String("esse"),
                    Name: sdk.String("Hilda Paucek"),
                    Type: sdk.String("fugiat"),
                },
                shared.ChromeOsDeviceScreenshotFiles{
                    CreateTime: types.MustTimeFromString("2022-07-26T19:04:27.877Z"),
                    DownloadURL: sdk.String("suscipit"),
                    Name: sdk.String("Alan Lang Jr."),
                    Type: sdk.String("id"),
                },
            },
            SerialNumber: sdk.String("quidem"),
            Status: sdk.String("neque"),
            SupportEndDate: types.MustTimeFromString("2020-06-17T05:36:16.683Z"),
            SystemRAMFreeReports: []shared.ChromeOsDeviceSystemRAMFreeReports{
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2022-06-25T14:54:59.204Z"),
                    SystemRAMFreeInfo: []string{
                        "voluptas",
                    },
                },
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2022-05-31T12:37:37.443Z"),
                    SystemRAMFreeInfo: []string{
                        "tempora",
                    },
                },
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2021-11-20T21:59:17.660Z"),
                    SystemRAMFreeInfo: []string{
                        "sequi",
                    },
                },
                shared.ChromeOsDeviceSystemRAMFreeReports{
                    ReportTime: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
                    SystemRAMFreeInfo: []string{
                        "aperiam",
                        "distinctio",
                        "quod",
                        "dignissimos",
                    },
                },
            },
            SystemRAMTotal: sdk.String("inventore"),
            TpmVersionInfo: &shared.ChromeOsDeviceTpmVersionInfo{
                Family: sdk.String("nihil"),
                FirmwareVersion: sdk.String("totam"),
                Manufacturer: sdk.String("accusamus"),
                SpecLevel: sdk.String("aliquam"),
                TpmModel: sdk.String("odio"),
                VendorSpecific: sdk.String("occaecati"),
            },
            WillAutoRenew: sdk.Bool(false),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        CustomerID: "deserunt",
        DeviceID: "molestiae",
        Fields: sdk.String("accusantium"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.DirectoryChromeosdevicesUpdateProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.DirectoryChromeosdevicesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChromeOsDevice != nil {
        // handle response
    }
}
```
