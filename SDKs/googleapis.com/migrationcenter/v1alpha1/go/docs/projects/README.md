# Projects

### Available Operations

* [MigrationcenterProjectsLocationsAssetsAggregateValues](#migrationcenterprojectslocationsassetsaggregatevalues) - Aggregates the requested fields based on provided function.
* [MigrationcenterProjectsLocationsAssetsBatchDelete](#migrationcenterprojectslocationsassetsbatchdelete) - Deletes list of Assets.
* [MigrationcenterProjectsLocationsAssetsBatchUpdate](#migrationcenterprojectslocationsassetsbatchupdate) - Updates the parameters of a list of assets.
* [MigrationcenterProjectsLocationsAssetsList](#migrationcenterprojectslocationsassetslist) - Lists all the assets in a given project and location.
* [MigrationcenterProjectsLocationsAssetsReportAssetFrames](#migrationcenterprojectslocationsassetsreportassetframes) - Reports a set of frames.
* [MigrationcenterProjectsLocationsGroupsAddAssets](#migrationcenterprojectslocationsgroupsaddassets) - Adds assets to a group.
* [MigrationcenterProjectsLocationsGroupsCreate](#migrationcenterprojectslocationsgroupscreate) - Creates a new group in a given project and location.
* [MigrationcenterProjectsLocationsGroupsList](#migrationcenterprojectslocationsgroupslist) - Lists all groups in a given project and location.
* [MigrationcenterProjectsLocationsGroupsRemoveAssets](#migrationcenterprojectslocationsgroupsremoveassets) - Removes assets from a group.
* [MigrationcenterProjectsLocationsImportJobsCreate](#migrationcenterprojectslocationsimportjobscreate) - Creates an import job.
* [MigrationcenterProjectsLocationsImportJobsImportDataFilesCreate](#migrationcenterprojectslocationsimportjobsimportdatafilescreate) - Creates an import data file.
* [MigrationcenterProjectsLocationsImportJobsImportDataFilesList](#migrationcenterprojectslocationsimportjobsimportdatafileslist) - List import data files.
* [MigrationcenterProjectsLocationsImportJobsList](#migrationcenterprojectslocationsimportjobslist) - Lists all import jobs.
* [MigrationcenterProjectsLocationsImportJobsRun](#migrationcenterprojectslocationsimportjobsrun) - Runs an import job.
* [MigrationcenterProjectsLocationsImportJobsValidate](#migrationcenterprojectslocationsimportjobsvalidate) - Validates an import job.
* [MigrationcenterProjectsLocationsList](#migrationcenterprojectslocationslist) - Lists information about the supported locations for this service.
* [MigrationcenterProjectsLocationsOperationsCancel](#migrationcenterprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [MigrationcenterProjectsLocationsOperationsList](#migrationcenterprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [MigrationcenterProjectsLocationsPreferenceSetsCreate](#migrationcenterprojectslocationspreferencesetscreate) - Creates a new preference set in a given project and location.
* [MigrationcenterProjectsLocationsPreferenceSetsList](#migrationcenterprojectslocationspreferencesetslist) - Lists all the preference sets in a given project and location.
* [MigrationcenterProjectsLocationsReportConfigsCreate](#migrationcenterprojectslocationsreportconfigscreate) - Creates a report configuration.
* [MigrationcenterProjectsLocationsReportConfigsList](#migrationcenterprojectslocationsreportconfigslist) - Lists ReportConfigs in a given project and location.
* [MigrationcenterProjectsLocationsReportConfigsReportsCreate](#migrationcenterprojectslocationsreportconfigsreportscreate) - Creates a report.
* [MigrationcenterProjectsLocationsReportConfigsReportsList](#migrationcenterprojectslocationsreportconfigsreportslist) - Lists Reports in a given ReportConfig.
* [MigrationcenterProjectsLocationsSourcesCreate](#migrationcenterprojectslocationssourcescreate) - Creates a new source in a given project and location.
* [MigrationcenterProjectsLocationsSourcesDelete](#migrationcenterprojectslocationssourcesdelete) - Deletes a source.
* [MigrationcenterProjectsLocationsSourcesErrorFramesGet](#migrationcenterprojectslocationssourceserrorframesget) - Gets the details of an error frame.
* [MigrationcenterProjectsLocationsSourcesErrorFramesList](#migrationcenterprojectslocationssourceserrorframeslist) - Lists all error frames in a given source and location.
* [MigrationcenterProjectsLocationsSourcesList](#migrationcenterprojectslocationssourceslist) - Lists all the sources in a given project and location.
* [MigrationcenterProjectsLocationsSourcesPatch](#migrationcenterprojectslocationssourcespatch) - Updates the parameters of a source.

## MigrationcenterProjectsLocationsAssetsAggregateValues

Aggregates the requested fields based on provided function.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsAggregateValues(ctx, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AggregateAssetsValuesRequest: &shared.AggregateAssetsValuesRequest{
            Aggregations: []shared.Aggregation{
                shared.Aggregation{
                    Count: map[string]interface{}{
                        "corporis": "explicabo",
                    },
                    Field: sdk.String("nobis"),
                    Frequency: map[string]interface{}{
                        "omnis": "nemo",
                        "minima": "excepturi",
                    },
                    Histogram: &shared.AggregationHistogram{
                        LowerBounds: []float64{
                            4386.01,
                        },
                    },
                    Sum: map[string]interface{}{
                        "doloribus": "sapiente",
                        "architecto": "mollitia",
                        "dolorem": "culpa",
                    },
                },
            },
            Filter: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    }, operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AggregateAssetsValuesResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsAssetsBatchDelete

Deletes list of Assets.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsBatchDelete(ctx, operations.MigrationcenterProjectsLocationsAssetsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchDeleteAssetsRequest: &shared.BatchDeleteAssetsRequest{
            AllowMissing: sdk.Bool(false),
            Names: []string{
                "laborum",
            },
        },
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity{
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

## MigrationcenterProjectsLocationsAssetsBatchUpdate

Updates the parameters of a list of assets.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsBatchUpdate(ctx, operations.MigrationcenterProjectsLocationsAssetsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchUpdateAssetsRequestInput: &shared.BatchUpdateAssetsRequestInput{
            Requests: []shared.UpdateAssetRequestInput{
                shared.UpdateAssetRequestInput{
                    Asset: &shared.AssetInput{
                        Attributes: map[string]string{
                            "laborum": "quasi",
                            "reiciendis": "voluptatibus",
                            "vero": "nihil",
                            "praesentium": "voluptatibus",
                        },
                        Labels: map[string]string{
                            "omnis": "voluptate",
                        },
                        PerformanceData: &shared.AssetPerformanceData{
                            DailyResourceUsageAggregations: []shared.DailyResourceUsageAggregation{
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(199.87),
                                            Median: sdk.Float32(391.87),
                                            NinteyFifthPercentile: sdk.Float32(4417.11),
                                            Peak: sdk.Float32(2828.07),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(979587),
                                        Month: sdk.Int(120196),
                                        Year: sdk.Int(359444),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(2961.4),
                                            Median: sdk.Float32(4808.94),
                                            NinteyFifthPercentile: sdk.Float32(1187.27),
                                            Peak: sdk.Float32(6886.61),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(3179.83),
                                            Median: sdk.Float32(8804.76),
                                            NinteyFifthPercentile: sdk.Float32(4142.63),
                                            Peak: sdk.Float32(9182.36),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(641.47),
                                            Median: sdk.Float32(2168.22),
                                            NinteyFifthPercentile: sdk.Float32(6924.72),
                                            Peak: sdk.Float32(5651.89),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5666.02),
                                            Median: sdk.Float32(8651.03),
                                            NinteyFifthPercentile: sdk.Float32(2653.89),
                                            Peak: sdk.Float32(5089.69),
                                        },
                                    },
                                },
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5232.48),
                                            Median: sdk.Float32(9167.23),
                                            NinteyFifthPercentile: sdk.Float32(939.4),
                                            Peak: sdk.Float32(9211.58),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(575947),
                                        Month: sdk.Int(83112),
                                        Year: sdk.Int(929297),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(2777.18),
                                            Median: sdk.Float32(3185.69),
                                            NinteyFifthPercentile: sdk.Float32(93.56),
                                            Peak: sdk.Float32(6674.11),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(8423.42),
                                            Median: sdk.Float32(1317.97),
                                            NinteyFifthPercentile: sdk.Float32(6471.74),
                                            Peak: sdk.Float32(7163.27),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(8413.86),
                                            Median: sdk.Float32(2894.06),
                                            NinteyFifthPercentile: sdk.Float32(2647.3),
                                            Peak: sdk.Float32(1831.91),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(3978.21),
                                            Median: sdk.Float32(5865.13),
                                            NinteyFifthPercentile: sdk.Float32(5528.22),
                                            Peak: sdk.Float32(201.07),
                                        },
                                    },
                                },
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(1649.4),
                                            Median: sdk.Float32(8289.4),
                                            NinteyFifthPercentile: sdk.Float32(3698.08),
                                            Peak: sdk.Float32(46.95),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(146441),
                                        Month: sdk.Int(677817),
                                        Year: sdk.Int(569618),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(2700.08),
                                            Median: sdk.Float32(7037.37),
                                            NinteyFifthPercentile: sdk.Float32(7351.94),
                                            Peak: sdk.Float32(2884.76),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(9621.89),
                                            Median: sdk.Float32(4332.88),
                                            NinteyFifthPercentile: sdk.Float32(2487.53),
                                            Peak: sdk.Float32(7561.07),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5761.57),
                                            Median: sdk.Float32(3960.98),
                                            NinteyFifthPercentile: sdk.Float32(5920.42),
                                            Peak: sdk.Float32(8960.39),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5722.52),
                                            Median: sdk.Float32(6389.21),
                                            NinteyFifthPercentile: sdk.Float32(2230.81),
                                            Peak: sdk.Float32(8915.55),
                                        },
                                    },
                                },
                            },
                        },
                        VirtualMachineDetails: &shared.VirtualMachineDetails{
                            CoreCount: sdk.Int(952749),
                            CreateTime: sdk.String("dolorum"),
                            GuestOs: &shared.GuestOsDetails{
                                Config: &shared.GuestConfigDetails{
                                    Fstab: &shared.FstabEntryList{
                                        Entries: []shared.FstabEntry{
                                            shared.FstabEntry{
                                                File: sdk.String("in"),
                                                Freq: sdk.Int(846409),
                                                Mntops: sdk.String("maiores"),
                                                Passno: sdk.Int(699479),
                                                Spec: sdk.String("dicta"),
                                                Vfstype: sdk.String("magnam"),
                                            },
                                            shared.FstabEntry{
                                                File: sdk.String("cumque"),
                                                Freq: sdk.Int(813798),
                                                Mntops: sdk.String("ea"),
                                                Passno: sdk.Int(396506),
                                                Spec: sdk.String("laborum"),
                                                Vfstype: sdk.String("accusamus"),
                                            },
                                        },
                                    },
                                    Hosts: &shared.HostsEntryList{
                                        Entries: []shared.HostsEntry{
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "enim",
                                                    "accusamus",
                                                    "delectus",
                                                },
                                                IP: sdk.String("quidem"),
                                            },
                                        },
                                    },
                                    Issue: sdk.String("provident"),
                                    NfsExports: &shared.NfsExportList{
                                        Entries: []shared.NfsExport{
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("id"),
                                                Hosts: []string{
                                                    "deleniti",
                                                    "sapiente",
                                                    "amet",
                                                },
                                            },
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("deserunt"),
                                                Hosts: []string{
                                                    "vel",
                                                    "natus",
                                                },
                                            },
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("omnis"),
                                                Hosts: []string{
                                                    "perferendis",
                                                    "nihil",
                                                },
                                            },
                                        },
                                    },
                                    Selinux: &shared.Selinux{
                                        Enabled: sdk.Bool(false),
                                        Mode: sdk.String("magnam"),
                                    },
                                },
                                Runtime: &shared.GuestRuntimeDetails{
                                    Domain: sdk.String("distinctio"),
                                    InstalledApps: &shared.GuestInstalledApplicationList{
                                        Entries: []shared.GuestInstalledApplication{
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Jamie Hoppe"),
                                                Path: sdk.String("eum"),
                                                Time: sdk.String("vero"),
                                                Vendor: sdk.String("aspernatur"),
                                                Version: sdk.String("architecto"),
                                            },
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Frances Marks"),
                                                Path: sdk.String("quos"),
                                                Time: sdk.String("sint"),
                                                Vendor: sdk.String("accusantium"),
                                                Version: sdk.String("mollitia"),
                                            },
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Shaun Hammes"),
                                                Path: sdk.String("necessitatibus"),
                                                Time: sdk.String("odit"),
                                                Vendor: sdk.String("nemo"),
                                                Version: sdk.String("quasi"),
                                            },
                                        },
                                    },
                                    LastUptime: &shared.Date{
                                        Day: sdk.Int(435865),
                                        Month: sdk.Int(984043),
                                        Year: sdk.Int(891924),
                                    },
                                    MachineName: sdk.String("eius"),
                                    NetworkInfo: &shared.RuntimeNetworkInfo{
                                        Connections: &shared.NetworkConnectionList{
                                            Entries: []shared.NetworkConnection{
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("deleniti"),
                                                    LocalPort: sdk.Int(703889),
                                                    Pid: sdk.String("in"),
                                                    ProcessName: sdk.String("architecto"),
                                                    Protocol: sdk.String("architecto"),
                                                    RemoteIPAddress: sdk.String("repudiandae"),
                                                    RemotePort: sdk.Int(352312),
                                                    State: sdk.String("expedita"),
                                                },
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("nihil"),
                                                    LocalPort: sdk.Int(998848),
                                                    Pid: sdk.String("quibusdam"),
                                                    ProcessName: sdk.String("sed"),
                                                    Protocol: sdk.String("saepe"),
                                                    RemoteIPAddress: sdk.String("pariatur"),
                                                    RemotePort: sdk.Int(37559),
                                                    State: sdk.String("consequuntur"),
                                                },
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("praesentium"),
                                                    LocalPort: sdk.Int(615560),
                                                    Pid: sdk.String("magni"),
                                                    ProcessName: sdk.String("sunt"),
                                                    Protocol: sdk.String("quo"),
                                                    RemoteIPAddress: sdk.String("illum"),
                                                    RemotePort: sdk.Int(864934),
                                                    State: sdk.String("maxime"),
                                                },
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("ea"),
                                                    LocalPort: sdk.Int(569101),
                                                    Pid: sdk.String("odit"),
                                                    ProcessName: sdk.String("ea"),
                                                    Protocol: sdk.String("accusantium"),
                                                    RemoteIPAddress: sdk.String("ab"),
                                                    RemotePort: sdk.Int(982575),
                                                    State: sdk.String("quidem"),
                                                },
                                            },
                                        },
                                        Netstat: sdk.String("ipsam"),
                                        NetstatTime: &shared.DateTime{
                                            Day: sdk.Int(453543),
                                            Hours: sdk.Int(420075),
                                            Minutes: sdk.Int(722056),
                                            Month: sdk.Int(50588),
                                            Nanos: sdk.Int(866383),
                                            Seconds: sdk.Int(365496),
                                            TimeZone: &shared.TimeZone{
                                                ID: sdk.String("f0d30c5f-bb25-4870-9320-2c73d5fe9b90"),
                                                Version: sdk.String("porro"),
                                            },
                                            UtcOffset: sdk.String("consequuntur"),
                                            Year: sdk.Int(500026),
                                        },
                                    },
                                    OpenFileList: &shared.OpenFileList{
                                        Entries: []shared.OpenFileDetails{
                                            shared.OpenFileDetails{
                                                Command: sdk.String("eaque"),
                                                FilePath: sdk.String("occaecati"),
                                                FileType: sdk.String("rerum"),
                                                User: sdk.String("adipisci"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("asperiores"),
                                                FilePath: sdk.String("earum"),
                                                FileType: sdk.String("modi"),
                                                User: sdk.String("iste"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("dolorum"),
                                                FilePath: sdk.String("deleniti"),
                                                FileType: sdk.String("pariatur"),
                                                User: sdk.String("provident"),
                                            },
                                        },
                                    },
                                    Processes: &shared.RunningProcessList{
                                        Processes: []shared.RunningProcess{
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "delectus": "quaerat",
                                                    "quos": "aliquid",
                                                    "dolorem": "dolorem",
                                                },
                                                Cmdline: sdk.String("dolor"),
                                                ExePath: sdk.String("qui"),
                                                Pid: sdk.String("ipsum"),
                                                User: sdk.String("hic"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "cum": "voluptate",
                                                    "dignissimos": "reiciendis",
                                                    "amet": "dolorum",
                                                },
                                                Cmdline: sdk.String("numquam"),
                                                ExePath: sdk.String("veritatis"),
                                                Pid: sdk.String("ipsa"),
                                                User: sdk.String("ipsa"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "odio": "quaerat",
                                                    "accusamus": "quidem",
                                                },
                                                Cmdline: sdk.String("voluptatibus"),
                                                ExePath: sdk.String("voluptas"),
                                                Pid: sdk.String("natus"),
                                                User: sdk.String("eos"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "sit": "fugiat",
                                                    "ab": "soluta",
                                                    "dolorum": "iusto",
                                                },
                                                Cmdline: sdk.String("voluptate"),
                                                ExePath: sdk.String("dolorum"),
                                                Pid: sdk.String("deleniti"),
                                                User: sdk.String("omnis"),
                                            },
                                        },
                                    },
                                    Services: &shared.RunningServiceList{
                                        Services: []shared.RunningService{
                                            shared.RunningService{
                                                Cmdline: sdk.String("distinctio"),
                                                ExePath: sdk.String("asperiores"),
                                                Name: sdk.String("Edna Klocko"),
                                                Pid: sdk.String("eius"),
                                                StartMode: sdk.String("aspernatur"),
                                                State: sdk.String("perferendis"),
                                                Status: sdk.String("amet"),
                                            },
                                            shared.RunningService{
                                                Cmdline: sdk.String("optio"),
                                                ExePath: sdk.String("accusamus"),
                                                Name: sdk.String("Jenna Hoppe"),
                                                Pid: sdk.String("minima"),
                                                StartMode: sdk.String("repellendus"),
                                                State: sdk.String("totam"),
                                                Status: sdk.String("similique"),
                                            },
                                            shared.RunningService{
                                                Cmdline: sdk.String("alias"),
                                                ExePath: sdk.String("at"),
                                                Name: sdk.String("Rhonda Kautzer"),
                                                Pid: sdk.String("qui"),
                                                StartMode: sdk.String("dolorum"),
                                                State: sdk.String("a"),
                                                Status: sdk.String("esse"),
                                            },
                                            shared.RunningService{
                                                Cmdline: sdk.String("harum"),
                                                ExePath: sdk.String("iusto"),
                                                Name: sdk.String("Rosalie White"),
                                                Pid: sdk.String("accusamus"),
                                                StartMode: sdk.String("numquam"),
                                                State: sdk.String("enim"),
                                                Status: sdk.String("dolorem"),
                                            },
                                        },
                                    },
                                },
                            },
                            MemoryMb: sdk.Int(957451),
                            OsFamily: shared.VirtualMachineDetailsOsFamilyEnumOsFamilyLinux.ToPointer(),
                            OsName: sdk.String("nihil"),
                            OsVersion: sdk.String("sit"),
                            Platform: &shared.PlatformDetails{
                                AwsEc2Details: &shared.AwsEc2PlatformDetails{
                                    Location: sdk.String("expedita"),
                                    MachineTypeLabel: sdk.String("neque"),
                                },
                                AzureVMDetails: &shared.AzureVMPlatformDetails{
                                    Location: sdk.String("sed"),
                                    MachineTypeLabel: sdk.String("vel"),
                                    ProvisioningState: sdk.String("libero"),
                                },
                                GenericDetails: &shared.GenericPlatformDetails{
                                    Location: sdk.String("voluptas"),
                                },
                                PhysicalDetails: &shared.PhysicalPlatformDetails{
                                    Location: sdk.String("deserunt"),
                                },
                                VmwareDetails: &shared.VmwarePlatformDetails{
                                    EsxVersion: sdk.String("quam"),
                                    Osid: sdk.String("ipsum"),
                                    VcenterVersion: sdk.String("incidunt"),
                                },
                            },
                            PowerState: sdk.String("qui"),
                            VcenterFolder: sdk.String("cupiditate"),
                            VcenterURL: sdk.String("maxime"),
                            VcenterVMID: sdk.String("pariatur"),
                            VMArchitecture: &shared.VirtualMachineArchitectureDetails{
                                Bios: &shared.BiosDetails{
                                    BiosManufacturer: sdk.String("soluta"),
                                    BiosName: sdk.String("dicta"),
                                    BiosReleaseDate: sdk.String("laborum"),
                                    BiosVersion: sdk.String("totam"),
                                    SmbiosUUID: sdk.String("incidunt"),
                                },
                                CPUArchitecture: sdk.String("aspernatur"),
                                CPUManufacturer: sdk.String("dolores"),
                                CPUName: sdk.String("distinctio"),
                                CPUSocketCount: sdk.Int(704474),
                                CPUThreadCount: sdk.Int(396060),
                                Firmware: sdk.String("quam"),
                                Hyperthreading: shared.VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingDisabled.ToPointer(),
                                Vendor: sdk.String("temporibus"),
                            },
                            VMDisks: &shared.VirtualMachineDiskDetails{
                                Disks: &shared.DiskEntryList{
                                    Entries: []shared.DiskEntry{
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("neque"),
                                            DiskLabelType: sdk.String("fugit"),
                                            HwAddress: sdk.String("magni"),
                                            InterfaceType: sdk.String("odio"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("ullam"),
                                                        FileSystem: sdk.String("nam"),
                                                        FreeBytes: sdk.String("hic"),
                                                        MountPoint: sdk.String("voluptatem"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("cumque"),
                                                        UUID: sdk.String("bb1e31b8-b90f-4344-ba11-08e0adcf4b92"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("quae"),
                                            TotalCapacityBytes: sdk.String("laudantium"),
                                            TotalFreeBytes: sdk.String("odio"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeRdmV2.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("voluptatibus"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("quisquam"),
                                            },
                                        },
                                    },
                                },
                                HddTotalCapacityBytes: sdk.String("vero"),
                                HddTotalFreeBytes: sdk.String("omnis"),
                                LsblkJSON: sdk.String("quis"),
                            },
                            VMName: sdk.String("ipsum"),
                            VMNetwork: &shared.VirtualMachineNetworkDetails{
                                DefaultGw: sdk.String("delectus"),
                                NetworkAdapters: &shared.NetworkAdapterList{
                                    NetworkAdapters: []shared.NetworkAdapterDetails{
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("consectetur"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("dignissimos"),
                                                        Fqdn: sdk.String("hic"),
                                                        IPAddress: sdk.String("distinctio"),
                                                        SubnetMask: sdk.String("quod"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                        Bcast: sdk.String("similique"),
                                                        Fqdn: sdk.String("facilis"),
                                                        IPAddress: sdk.String("vero"),
                                                        SubnetMask: sdk.String("ducimus"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentUnspecified.ToPointer(),
                                                        Bcast: sdk.String("quibusdam"),
                                                        Fqdn: sdk.String("illum"),
                                                        IPAddress: sdk.String("sequi"),
                                                        SubnetMask: sdk.String("natus"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("aut"),
                                                        Fqdn: sdk.String("voluptatibus"),
                                                        IPAddress: sdk.String("exercitationem"),
                                                        SubnetMask: sdk.String("nulla"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("fugit"),
                                        },
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("porro"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("iusto"),
                                                        Fqdn: sdk.String("eligendi"),
                                                        IPAddress: sdk.String("ducimus"),
                                                        SubnetMask: sdk.String("alias"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                        Bcast: sdk.String("tempora"),
                                                        Fqdn: sdk.String("ipsam"),
                                                        IPAddress: sdk.String("ea"),
                                                        SubnetMask: sdk.String("aspernatur"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                        Bcast: sdk.String("possimus"),
                                                        Fqdn: sdk.String("magnam"),
                                                        IPAddress: sdk.String("ratione"),
                                                        SubnetMask: sdk.String("ex"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                        Bcast: sdk.String("dicta"),
                                                        Fqdn: sdk.String("dolor"),
                                                        IPAddress: sdk.String("maiores"),
                                                        SubnetMask: sdk.String("quasi"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("ex"),
                                        },
                                    },
                                },
                                PrimaryIPAddress: sdk.String("nulla"),
                                PrimaryMacAddress: sdk.String("excepturi"),
                                PublicIPAddress: sdk.String("voluptatibus"),
                            },
                            VMUUID: sdk.String("nostrum"),
                        },
                    },
                    RequestID: sdk.String("sapiente"),
                    UpdateMask: sdk.String("quisquam"),
                },
                shared.UpdateAssetRequestInput{
                    Asset: &shared.AssetInput{
                        Attributes: map[string]string{
                            "ea": "impedit",
                            "corporis": "veniam",
                            "aliquid": "inventore",
                            "magnam": "ea",
                        },
                        Labels: map[string]string{
                            "consectetur": "recusandae",
                            "aspernatur": "minima",
                            "eaque": "a",
                            "libero": "aut",
                        },
                        PerformanceData: &shared.AssetPerformanceData{
                            DailyResourceUsageAggregations: []shared.DailyResourceUsageAggregation{
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5334.66),
                                            Median: sdk.Float32(7705.81),
                                            NinteyFifthPercentile: sdk.Float32(3045.82),
                                            Peak: sdk.Float32(1469.46),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(882860),
                                        Month: sdk.Int(79522),
                                        Year: sdk.Int(250622),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(896.03),
                                            Median: sdk.Float32(6774.12),
                                            NinteyFifthPercentile: sdk.Float32(6720.48),
                                            Peak: sdk.Float32(8104.24),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(2453.67),
                                            Median: sdk.Float32(4321.48),
                                            NinteyFifthPercentile: sdk.Float32(4205.39),
                                            Peak: sdk.Float32(7521.35),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5573.69),
                                            Median: sdk.Float32(8296.03),
                                            NinteyFifthPercentile: sdk.Float32(8605.52),
                                            Peak: sdk.Float32(3790.34),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(7270.44),
                                            Median: sdk.Float32(965.49),
                                            NinteyFifthPercentile: sdk.Float32(2703.28),
                                            Peak: sdk.Float32(2561.39),
                                        },
                                    },
                                },
                            },
                        },
                        VirtualMachineDetails: &shared.VirtualMachineDetails{
                            CoreCount: sdk.Int(131482),
                            CreateTime: sdk.String("provident"),
                            GuestOs: &shared.GuestOsDetails{
                                Config: &shared.GuestConfigDetails{
                                    Fstab: &shared.FstabEntryList{
                                        Entries: []shared.FstabEntry{
                                            shared.FstabEntry{
                                                File: sdk.String("molestiae"),
                                                Freq: sdk.Int(301598),
                                                Mntops: sdk.String("odio"),
                                                Passno: sdk.Int(262118),
                                                Spec: sdk.String("esse"),
                                                Vfstype: sdk.String("esse"),
                                            },
                                        },
                                    },
                                    Hosts: &shared.HostsEntryList{
                                        Entries: []shared.HostsEntry{
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "reprehenderit",
                                                    "quidem",
                                                    "fugiat",
                                                },
                                                IP: sdk.String("ut"),
                                            },
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "suscipit",
                                                    "assumenda",
                                                },
                                                IP: sdk.String("eos"),
                                            },
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "quisquam",
                                                    "veritatis",
                                                    "ipsa",
                                                },
                                                IP: sdk.String("id"),
                                            },
                                        },
                                    },
                                    Issue: sdk.String("quidem"),
                                    NfsExports: &shared.NfsExportList{
                                        Entries: []shared.NfsExport{
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("quo"),
                                                Hosts: []string{
                                                    "quo",
                                                    "fuga",
                                                    "eius",
                                                    "eos",
                                                },
                                            },
                                        },
                                    },
                                    Selinux: &shared.Selinux{
                                        Enabled: sdk.Bool(false),
                                        Mode: sdk.String("voluptas"),
                                    },
                                },
                                Runtime: &shared.GuestRuntimeDetails{
                                    Domain: sdk.String("ab"),
                                    InstalledApps: &shared.GuestInstalledApplicationList{
                                        Entries: []shared.GuestInstalledApplication{
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Rhonda Toy"),
                                                Path: sdk.String("sequi"),
                                                Time: sdk.String("quo"),
                                                Vendor: sdk.String("esse"),
                                                Version: sdk.String("recusandae"),
                                            },
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Lola Schmidt IV"),
                                                Path: sdk.String("totam"),
                                                Time: sdk.String("accusamus"),
                                                Vendor: sdk.String("aliquam"),
                                                Version: sdk.String("odio"),
                                            },
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Leslie Williamson"),
                                                Path: sdk.String("molestiae"),
                                                Time: sdk.String("accusantium"),
                                                Vendor: sdk.String("porro"),
                                                Version: sdk.String("eum"),
                                            },
                                        },
                                    },
                                    LastUptime: &shared.Date{
                                        Day: sdk.Int(556429),
                                        Month: sdk.Int(510017),
                                        Year: sdk.Int(159867),
                                    },
                                    MachineName: sdk.String("deleniti"),
                                    NetworkInfo: &shared.RuntimeNetworkInfo{
                                        Connections: &shared.NetworkConnectionList{
                                            Entries: []shared.NetworkConnection{
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("fuga"),
                                                    LocalPort: sdk.Int(649463),
                                                    Pid: sdk.String("incidunt"),
                                                    ProcessName: sdk.String("atque"),
                                                    Protocol: sdk.String("explicabo"),
                                                    RemoteIPAddress: sdk.String("minima"),
                                                    RemotePort: sdk.Int(392676),
                                                    State: sdk.String("fugit"),
                                                },
                                            },
                                        },
                                        Netstat: sdk.String("sapiente"),
                                        NetstatTime: &shared.DateTime{
                                            Day: sdk.Int(159870),
                                            Hours: sdk.Int(187131),
                                            Minutes: sdk.Int(129412),
                                            Month: sdk.Int(903984),
                                            Nanos: sdk.Int(578922),
                                            Seconds: sdk.Int(543806),
                                            TimeZone: &shared.TimeZone{
                                                ID: sdk.String("17ee17cb-e61e-46b7-b95b-c0ab3c20c4f3"),
                                                Version: sdk.String("esse"),
                                            },
                                            UtcOffset: sdk.String("blanditiis"),
                                            Year: sdk.Int(590984),
                                        },
                                    },
                                    OpenFileList: &shared.OpenFileList{
                                        Entries: []shared.OpenFileDetails{
                                            shared.OpenFileDetails{
                                                Command: sdk.String("nulla"),
                                                FilePath: sdk.String("quas"),
                                                FileType: sdk.String("esse"),
                                                User: sdk.String("quasi"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("a"),
                                                FilePath: sdk.String("error"),
                                                FileType: sdk.String("sint"),
                                                User: sdk.String("pariatur"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("possimus"),
                                                FilePath: sdk.String("quia"),
                                                FileType: sdk.String("eveniet"),
                                                User: sdk.String("asperiores"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("facere"),
                                                FilePath: sdk.String("veritatis"),
                                                FileType: sdk.String("consequuntur"),
                                                User: sdk.String("quasi"),
                                            },
                                        },
                                    },
                                    Processes: &shared.RunningProcessList{
                                        Processes: []shared.RunningProcess{
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "aliquid": "tenetur",
                                                    "quae": "earum",
                                                    "vel": "in",
                                                },
                                                Cmdline: sdk.String("eius"),
                                                ExePath: sdk.String("libero"),
                                                Pid: sdk.String("illum"),
                                                User: sdk.String("soluta"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "aliquam": "sapiente",
                                                },
                                                Cmdline: sdk.String("dicta"),
                                                ExePath: sdk.String("ullam"),
                                                Pid: sdk.String("reprehenderit"),
                                                User: sdk.String("ullam"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "aut": "voluptatum",
                                                    "qui": "quibusdam",
                                                },
                                                Cmdline: sdk.String("ex"),
                                                ExePath: sdk.String("deleniti"),
                                                Pid: sdk.String("itaque"),
                                                User: sdk.String("dolorum"),
                                            },
                                        },
                                    },
                                    Services: &shared.RunningServiceList{
                                        Services: []shared.RunningService{
                                            shared.RunningService{
                                                Cmdline: sdk.String("omnis"),
                                                ExePath: sdk.String("tenetur"),
                                                Name: sdk.String("Lynette Bosco II"),
                                                Pid: sdk.String("veritatis"),
                                                StartMode: sdk.String("consectetur"),
                                                State: sdk.String("adipisci"),
                                                Status: sdk.String("iste"),
                                            },
                                        },
                                    },
                                },
                            },
                            MemoryMb: sdk.Int(839513),
                            OsFamily: shared.VirtualMachineDetailsOsFamilyEnumOsFamilyUnknown.ToPointer(),
                            OsName: sdk.String("rem"),
                            OsVersion: sdk.String("aut"),
                            Platform: &shared.PlatformDetails{
                                AwsEc2Details: &shared.AwsEc2PlatformDetails{
                                    Location: sdk.String("laudantium"),
                                    MachineTypeLabel: sdk.String("eum"),
                                },
                                AzureVMDetails: &shared.AzureVMPlatformDetails{
                                    Location: sdk.String("mollitia"),
                                    MachineTypeLabel: sdk.String("ab"),
                                    ProvisioningState: sdk.String("corrupti"),
                                },
                                GenericDetails: &shared.GenericPlatformDetails{
                                    Location: sdk.String("non"),
                                },
                                PhysicalDetails: &shared.PhysicalPlatformDetails{
                                    Location: sdk.String("voluptatem"),
                                },
                                VmwareDetails: &shared.VmwarePlatformDetails{
                                    EsxVersion: sdk.String("dolor"),
                                    Osid: sdk.String("occaecati"),
                                    VcenterVersion: sdk.String("numquam"),
                                },
                            },
                            PowerState: sdk.String("impedit"),
                            VcenterFolder: sdk.String("explicabo"),
                            VcenterURL: sdk.String("voluptas"),
                            VcenterVMID: sdk.String("aut"),
                            VMArchitecture: &shared.VirtualMachineArchitectureDetails{
                                Bios: &shared.BiosDetails{
                                    BiosManufacturer: sdk.String("dignissimos"),
                                    BiosName: sdk.String("dicta"),
                                    BiosReleaseDate: sdk.String("maiores"),
                                    BiosVersion: sdk.String("natus"),
                                    SmbiosUUID: sdk.String("velit"),
                                },
                                CPUArchitecture: sdk.String("voluptatibus"),
                                CPUManufacturer: sdk.String("voluptas"),
                                CPUName: sdk.String("asperiores"),
                                CPUSocketCount: sdk.Int(45659),
                                CPUThreadCount: sdk.Int(409054),
                                Firmware: sdk.String("quaerat"),
                                Hyperthreading: shared.VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingUnspecified.ToPointer(),
                                Vendor: sdk.String("repellendus"),
                            },
                            VMDisks: &shared.VirtualMachineDiskDetails{
                                Disks: &shared.DiskEntryList{
                                    Entries: []shared.DiskEntry{
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("maxime"),
                                            DiskLabelType: sdk.String("dignissimos"),
                                            HwAddress: sdk.String("officia"),
                                            InterfaceType: sdk.String("asperiores"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("quae"),
                                                        FileSystem: sdk.String("quaerat"),
                                                        FreeBytes: sdk.String("porro"),
                                                        MountPoint: sdk.String("quod"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("labore"),
                                                        UUID: sdk.String("13aa63aa-e8d6-4786-8dbb-675fd5e60b37"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("exercitationem"),
                                                        FileSystem: sdk.String("earum"),
                                                        FreeBytes: sdk.String("facere"),
                                                        MountPoint: sdk.String("numquam"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("doloribus"),
                                                        UUID: sdk.String("6fbee41f-3331-47fe-b5b6-0eb1ea426555"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("nobis"),
                                            TotalCapacityBytes: sdk.String("dolorum"),
                                            TotalFreeBytes: sdk.String("adipisci"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeSesparseV1.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("dolores"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("blanditiis"),
                                            },
                                        },
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("in"),
                                            DiskLabelType: sdk.String("dolore"),
                                            HwAddress: sdk.String("aliquam"),
                                            InterfaceType: sdk.String("officiis"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("ullam"),
                                                        FileSystem: sdk.String("adipisci"),
                                                        FreeBytes: sdk.String("cum"),
                                                        MountPoint: sdk.String("blanditiis"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("quas"),
                                                        UUID: sdk.String("f3a8d8f5-c0b2-4f2f-b7b1-94a276b26916"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("sapiente"),
                                                        FileSystem: sdk.String("debitis"),
                                                        FreeBytes: sdk.String("illo"),
                                                        MountPoint: sdk.String("reiciendis"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("perferendis"),
                                                        UUID: sdk.String("8f4294e3-698f-4447-b603-e8b445e80ca5"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("minima"),
                                                        FileSystem: sdk.String("recusandae"),
                                                        FreeBytes: sdk.String("reiciendis"),
                                                        MountPoint: sdk.String("nulla"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("magni"),
                                                        UUID: sdk.String("0e457e18-58b6-4a89-bbe3-a5aa8e4824d0"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("culpa"),
                                                        FileSystem: sdk.String("expedita"),
                                                        FreeBytes: sdk.String("magnam"),
                                                        MountPoint: sdk.String("consequatur"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("esse"),
                                                        UUID: sdk.String("5088e518-6206-45e9-84f3-b1194b8abf60"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("amet"),
                                            TotalCapacityBytes: sdk.String("deserunt"),
                                            TotalFreeBytes: sdk.String("voluptate"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeRdmV2.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("reiciendis"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("provident"),
                                            },
                                        },
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("repellendus"),
                                            DiskLabelType: sdk.String("delectus"),
                                            HwAddress: sdk.String("voluptates"),
                                            InterfaceType: sdk.String("perferendis"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("quidem"),
                                                        FileSystem: sdk.String("reprehenderit"),
                                                        FreeBytes: sdk.String("facere"),
                                                        MountPoint: sdk.String("fuga"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("praesentium"),
                                                        UUID: sdk.String("a50ce187-f86b-4c17-bd68-9eee9526f8d9"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("blanditiis"),
                                                        FileSystem: sdk.String("suscipit"),
                                                        FreeBytes: sdk.String("repudiandae"),
                                                        MountPoint: sdk.String("atque"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("atque"),
                                                        UUID: sdk.String("1ead4f0e-1012-4563-b94e-29e973e922a5"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("reprehenderit"),
                                                        FileSystem: sdk.String("error"),
                                                        FreeBytes: sdk.String("illo"),
                                                        MountPoint: sdk.String("corporis"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("quidem"),
                                                        UUID: sdk.String("e3e06080-7e2b-46e3-ab88-45f0597a60ff"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("dolores"),
                                            TotalCapacityBytes: sdk.String("id"),
                                            TotalFreeBytes: sdk.String("minima"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeFlatV2.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("dolorum"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("nesciunt"),
                                            },
                                        },
                                    },
                                },
                                HddTotalCapacityBytes: sdk.String("quae"),
                                HddTotalFreeBytes: sdk.String("recusandae"),
                                LsblkJSON: sdk.String("omnis"),
                            },
                            VMName: sdk.String("quaerat"),
                            VMNetwork: &shared.VirtualMachineNetworkDetails{
                                DefaultGw: sdk.String("molestiae"),
                                NetworkAdapters: &shared.NetworkAdapterList{
                                    NetworkAdapters: []shared.NetworkAdapterDetails{
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("ut"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentUnspecified.ToPointer(),
                                                        Bcast: sdk.String("debitis"),
                                                        Fqdn: sdk.String("laudantium"),
                                                        IPAddress: sdk.String("eum"),
                                                        SubnetMask: sdk.String("nemo"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("esse"),
                                                        Fqdn: sdk.String("provident"),
                                                        IPAddress: sdk.String("quis"),
                                                        SubnetMask: sdk.String("eum"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("provident"),
                                                        Fqdn: sdk.String("aspernatur"),
                                                        IPAddress: sdk.String("ullam"),
                                                        SubnetMask: sdk.String("quasi"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("animi"),
                                        },
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("nostrum"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                        Bcast: sdk.String("possimus"),
                                                        Fqdn: sdk.String("animi"),
                                                        IPAddress: sdk.String("ex"),
                                                        SubnetMask: sdk.String("aliquid"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentUnspecified.ToPointer(),
                                                        Bcast: sdk.String("repellat"),
                                                        Fqdn: sdk.String("doloribus"),
                                                        IPAddress: sdk.String("ullam"),
                                                        SubnetMask: sdk.String("in"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("earum"),
                                                        Fqdn: sdk.String("officia"),
                                                        IPAddress: sdk.String("laborum"),
                                                        SubnetMask: sdk.String("placeat"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("modi"),
                                        },
                                    },
                                },
                                PrimaryIPAddress: sdk.String("voluptatibus"),
                                PrimaryMacAddress: sdk.String("molestias"),
                                PublicIPAddress: sdk.String("officiis"),
                            },
                            VMUUID: sdk.String("sapiente"),
                        },
                    },
                    RequestID: sdk.String("cumque"),
                    UpdateMask: sdk.String("vitae"),
                },
                shared.UpdateAssetRequestInput{
                    Asset: &shared.AssetInput{
                        Attributes: map[string]string{
                            "tempora": "quis",
                            "inventore": "fugit",
                            "cumque": "quae",
                        },
                        Labels: map[string]string{
                            "velit": "aspernatur",
                        },
                        PerformanceData: &shared.AssetPerformanceData{
                            DailyResourceUsageAggregations: []shared.DailyResourceUsageAggregation{
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(2606.28),
                                            Median: sdk.Float32(5219.96),
                                            NinteyFifthPercentile: sdk.Float32(8710.83),
                                            Peak: sdk.Float32(7730.84),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(179410),
                                        Month: sdk.Int(958741),
                                        Year: sdk.Int(433279),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(1173.2),
                                            Median: sdk.Float32(3251.18),
                                            NinteyFifthPercentile: sdk.Float32(1070.04),
                                            Peak: sdk.Float32(5834.04),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(5896.95),
                                            Median: sdk.Float32(9364.69),
                                            NinteyFifthPercentile: sdk.Float32(7453.98),
                                            Peak: sdk.Float32(9407.82),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(8481.51),
                                            Median: sdk.Float32(525.08),
                                            NinteyFifthPercentile: sdk.Float32(9358.33),
                                            Peak: sdk.Float32(5962.11),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(9834.27),
                                            Median: sdk.Float32(8918.01),
                                            NinteyFifthPercentile: sdk.Float32(3998.02),
                                            Peak: sdk.Float32(7809.31),
                                        },
                                    },
                                },
                                shared.DailyResourceUsageAggregation{
                                    CPU: &shared.DailyResourceUsageAggregationCPU{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(3803.35),
                                            Median: sdk.Float32(2115.34),
                                            NinteyFifthPercentile: sdk.Float32(1478.08),
                                            Peak: sdk.Float32(7649.95),
                                        },
                                    },
                                    Date: &shared.Date{
                                        Day: sdk.Int(684935),
                                        Month: sdk.Int(189062),
                                        Year: sdk.Int(656762),
                                    },
                                    Disk: &shared.DailyResourceUsageAggregationDisk{
                                        Iops: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(8987.6),
                                            Median: sdk.Float32(8620.63),
                                            NinteyFifthPercentile: sdk.Float32(89.31),
                                            Peak: sdk.Float32(972.58),
                                        },
                                    },
                                    Memory: &shared.DailyResourceUsageAggregationMemory{
                                        UtilizationPercentage: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(902.33),
                                            Median: sdk.Float32(4977.77),
                                            NinteyFifthPercentile: sdk.Float32(6191.83),
                                            Peak: sdk.Float32(5810.82),
                                        },
                                    },
                                    Network: &shared.DailyResourceUsageAggregationNetwork{
                                        EgressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(3824.4),
                                            Median: sdk.Float32(2415.57),
                                            NinteyFifthPercentile: sdk.Float32(965.62),
                                            Peak: sdk.Float32(1690.25),
                                        },
                                        IngressBps: &shared.DailyResourceUsageAggregationStats{
                                            Average: sdk.Float32(9849.34),
                                            Median: sdk.Float32(8595.81),
                                            NinteyFifthPercentile: sdk.Float32(8965.82),
                                            Peak: sdk.Float32(585.34),
                                        },
                                    },
                                },
                            },
                        },
                        VirtualMachineDetails: &shared.VirtualMachineDetails{
                            CoreCount: sdk.Int(271113),
                            CreateTime: sdk.String("nihil"),
                            GuestOs: &shared.GuestOsDetails{
                                Config: &shared.GuestConfigDetails{
                                    Fstab: &shared.FstabEntryList{
                                        Entries: []shared.FstabEntry{
                                            shared.FstabEntry{
                                                File: sdk.String("dicta"),
                                                Freq: sdk.Int(479754),
                                                Mntops: sdk.String("esse"),
                                                Passno: sdk.Int(508390),
                                                Spec: sdk.String("maiores"),
                                                Vfstype: sdk.String("reiciendis"),
                                            },
                                            shared.FstabEntry{
                                                File: sdk.String("vel"),
                                                Freq: sdk.Int(99958),
                                                Mntops: sdk.String("fugiat"),
                                                Passno: sdk.Int(39650),
                                                Spec: sdk.String("dicta"),
                                                Vfstype: sdk.String("odio"),
                                            },
                                        },
                                    },
                                    Hosts: &shared.HostsEntryList{
                                        Entries: []shared.HostsEntry{
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "ex",
                                                    "consectetur",
                                                },
                                                IP: sdk.String("aliquid"),
                                            },
                                            shared.HostsEntry{
                                                HostNames: []string{
                                                    "laborum",
                                                },
                                                IP: sdk.String("sunt"),
                                            },
                                        },
                                    },
                                    Issue: sdk.String("nostrum"),
                                    NfsExports: &shared.NfsExportList{
                                        Entries: []shared.NfsExport{
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("expedita"),
                                                Hosts: []string{
                                                    "officia",
                                                    "suscipit",
                                                },
                                            },
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("aliquid"),
                                                Hosts: []string{
                                                    "eum",
                                                },
                                            },
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("voluptas"),
                                                Hosts: []string{
                                                    "id",
                                                    "ab",
                                                    "error",
                                                },
                                            },
                                            shared.NfsExport{
                                                ExportDirectory: sdk.String("possimus"),
                                                Hosts: []string{
                                                    "mollitia",
                                                    "laborum",
                                                    "libero",
                                                    "ad",
                                                },
                                            },
                                        },
                                    },
                                    Selinux: &shared.Selinux{
                                        Enabled: sdk.Bool(false),
                                        Mode: sdk.String("deleniti"),
                                    },
                                },
                                Runtime: &shared.GuestRuntimeDetails{
                                    Domain: sdk.String("enim"),
                                    InstalledApps: &shared.GuestInstalledApplicationList{
                                        Entries: []shared.GuestInstalledApplication{
                                            shared.GuestInstalledApplication{
                                                Name: sdk.String("Ruben Ryan"),
                                                Path: sdk.String("ad"),
                                                Time: sdk.String("expedita"),
                                                Vendor: sdk.String("voluptatem"),
                                                Version: sdk.String("molestias"),
                                            },
                                        },
                                    },
                                    LastUptime: &shared.Date{
                                        Day: sdk.Int(737254),
                                        Month: sdk.Int(399660),
                                        Year: sdk.Int(109784),
                                    },
                                    MachineName: sdk.String("voluptatum"),
                                    NetworkInfo: &shared.RuntimeNetworkInfo{
                                        Connections: &shared.NetworkConnectionList{
                                            Entries: []shared.NetworkConnection{
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("veritatis"),
                                                    LocalPort: sdk.Int(703218),
                                                    Pid: sdk.String("est"),
                                                    ProcessName: sdk.String("culpa"),
                                                    Protocol: sdk.String("voluptatem"),
                                                    RemoteIPAddress: sdk.String("sapiente"),
                                                    RemotePort: sdk.Int(889288),
                                                    State: sdk.String("architecto"),
                                                },
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("fuga"),
                                                    LocalPort: sdk.Int(867168),
                                                    Pid: sdk.String("debitis"),
                                                    ProcessName: sdk.String("voluptatem"),
                                                    Protocol: sdk.String("alias"),
                                                    RemoteIPAddress: sdk.String("deleniti"),
                                                    RemotePort: sdk.Int(937219),
                                                    State: sdk.String("ex"),
                                                },
                                                shared.NetworkConnection{
                                                    LocalIPAddress: sdk.String("sapiente"),
                                                    LocalPort: sdk.Int(524184),
                                                    Pid: sdk.String("minus"),
                                                    ProcessName: sdk.String("nemo"),
                                                    Protocol: sdk.String("asperiores"),
                                                    RemoteIPAddress: sdk.String("ratione"),
                                                    RemotePort: sdk.Int(355225),
                                                    State: sdk.String("perferendis"),
                                                },
                                            },
                                        },
                                        Netstat: sdk.String("illum"),
                                        NetstatTime: &shared.DateTime{
                                            Day: sdk.Int(518150),
                                            Hours: sdk.Int(770675),
                                            Minutes: sdk.Int(842777),
                                            Month: sdk.Int(720528),
                                            Nanos: sdk.Int(373216),
                                            Seconds: sdk.Int(633415),
                                            TimeZone: &shared.TimeZone{
                                                ID: sdk.String("34181430-1042-4181-bd52-08ece7e253b6"),
                                                Version: sdk.String("vel"),
                                            },
                                            UtcOffset: sdk.String("voluptatum"),
                                            Year: sdk.Int(301692),
                                        },
                                    },
                                    OpenFileList: &shared.OpenFileList{
                                        Entries: []shared.OpenFileDetails{
                                            shared.OpenFileDetails{
                                                Command: sdk.String("ab"),
                                                FilePath: sdk.String("porro"),
                                                FileType: sdk.String("autem"),
                                                User: sdk.String("nobis"),
                                            },
                                            shared.OpenFileDetails{
                                                Command: sdk.String("laboriosam"),
                                                FilePath: sdk.String("recusandae"),
                                                FileType: sdk.String("consequuntur"),
                                                User: sdk.String("voluptatem"),
                                            },
                                        },
                                    },
                                    Processes: &shared.RunningProcessList{
                                        Processes: []shared.RunningProcess{
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "quasi": "nisi",
                                                    "at": "vero",
                                                    "est": "harum",
                                                    "sequi": "doloribus",
                                                },
                                                Cmdline: sdk.String("repudiandae"),
                                                ExePath: sdk.String("optio"),
                                                Pid: sdk.String("occaecati"),
                                                User: sdk.String("nemo"),
                                            },
                                            shared.RunningProcess{
                                                Attributes: map[string]string{
                                                    "blanditiis": "officia",
                                                    "voluptas": "numquam",
                                                },
                                                Cmdline: sdk.String("nemo"),
                                                ExePath: sdk.String("quos"),
                                                Pid: sdk.String("eius"),
                                                User: sdk.String("aspernatur"),
                                            },
                                        },
                                    },
                                    Services: &shared.RunningServiceList{
                                        Services: []shared.RunningService{
                                            shared.RunningService{
                                                Cmdline: sdk.String("nesciunt"),
                                                ExePath: sdk.String("fuga"),
                                                Name: sdk.String("Randall Boyle"),
                                                Pid: sdk.String("dicta"),
                                                StartMode: sdk.String("nisi"),
                                                State: sdk.String("consequuntur"),
                                                Status: sdk.String("consectetur"),
                                            },
                                            shared.RunningService{
                                                Cmdline: sdk.String("aperiam"),
                                                ExePath: sdk.String("cupiditate"),
                                                Name: sdk.String("Dominic Abernathy"),
                                                Pid: sdk.String("occaecati"),
                                                StartMode: sdk.String("iste"),
                                                State: sdk.String("magni"),
                                                Status: sdk.String("inventore"),
                                            },
                                        },
                                    },
                                },
                            },
                            MemoryMb: sdk.Int(686362),
                            OsFamily: shared.VirtualMachineDetailsOsFamilyEnumOsFamilyUnix.ToPointer(),
                            OsName: sdk.String("voluptatibus"),
                            OsVersion: sdk.String("distinctio"),
                            Platform: &shared.PlatformDetails{
                                AwsEc2Details: &shared.AwsEc2PlatformDetails{
                                    Location: sdk.String("omnis"),
                                    MachineTypeLabel: sdk.String("delectus"),
                                },
                                AzureVMDetails: &shared.AzureVMPlatformDetails{
                                    Location: sdk.String("minima"),
                                    MachineTypeLabel: sdk.String("praesentium"),
                                    ProvisioningState: sdk.String("maxime"),
                                },
                                GenericDetails: &shared.GenericPlatformDetails{
                                    Location: sdk.String("magnam"),
                                },
                                PhysicalDetails: &shared.PhysicalPlatformDetails{
                                    Location: sdk.String("temporibus"),
                                },
                                VmwareDetails: &shared.VmwarePlatformDetails{
                                    EsxVersion: sdk.String("quos"),
                                    Osid: sdk.String("commodi"),
                                    VcenterVersion: sdk.String("itaque"),
                                },
                            },
                            PowerState: sdk.String("commodi"),
                            VcenterFolder: sdk.String("totam"),
                            VcenterURL: sdk.String("earum"),
                            VcenterVMID: sdk.String("modi"),
                            VMArchitecture: &shared.VirtualMachineArchitectureDetails{
                                Bios: &shared.BiosDetails{
                                    BiosManufacturer: sdk.String("nam"),
                                    BiosName: sdk.String("vero"),
                                    BiosReleaseDate: sdk.String("voluptatem"),
                                    BiosVersion: sdk.String("ipsam"),
                                    SmbiosUUID: sdk.String("vel"),
                                },
                                CPUArchitecture: sdk.String("alias"),
                                CPUManufacturer: sdk.String("quasi"),
                                CPUName: sdk.String("non"),
                                CPUSocketCount: sdk.Int(978548),
                                CPUThreadCount: sdk.Int(318233),
                                Firmware: sdk.String("sint"),
                                Hyperthreading: shared.VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingEnabled.ToPointer(),
                                Vendor: sdk.String("deserunt"),
                            },
                            VMDisks: &shared.VirtualMachineDiskDetails{
                                Disks: &shared.DiskEntryList{
                                    Entries: []shared.DiskEntry{
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("nemo"),
                                            DiskLabelType: sdk.String("reprehenderit"),
                                            HwAddress: sdk.String("est"),
                                            InterfaceType: sdk.String("quis"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("accusamus"),
                                                        FileSystem: sdk.String("impedit"),
                                                        FreeBytes: sdk.String("hic"),
                                                        MountPoint: sdk.String("necessitatibus"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("asperiores"),
                                                        UUID: sdk.String("66ef1caa-3383-4c2b-ab47-7373c8d72f64"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("quibusdam"),
                                                        FileSystem: sdk.String("inventore"),
                                                        FreeBytes: sdk.String("facere"),
                                                        MountPoint: sdk.String("libero"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("architecto"),
                                                        UUID: sdk.String("f2c43106-61e9-4634-9e1c-f9e06e3a4370"),
                                                    },
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("doloremque"),
                                                        FileSystem: sdk.String("consequatur"),
                                                        FreeBytes: sdk.String("officia"),
                                                        MountPoint: sdk.String("recusandae"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("ea"),
                                                        UUID: sdk.String("b6bc9b8f-759e-4ac5-9a97-41d311352965"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("soluta"),
                                            TotalCapacityBytes: sdk.String("libero"),
                                            TotalFreeBytes: sdk.String("rem"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeSesparse.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("odio"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("fugit"),
                                            },
                                        },
                                        shared.DiskEntry{
                                            DiskLabel: sdk.String("alias"),
                                            DiskLabelType: sdk.String("magni"),
                                            HwAddress: sdk.String("vel"),
                                            InterfaceType: sdk.String("quae"),
                                            Partitions: &shared.DiskPartitionList{
                                                Entries: []shared.DiskPartition{
                                                    shared.DiskPartition{
                                                        CapacityBytes: sdk.String("modi"),
                                                        FileSystem: sdk.String("neque"),
                                                        FreeBytes: sdk.String("exercitationem"),
                                                        MountPoint: sdk.String("itaque"),
                                                        SubPartitions: &shared.DiskPartitionList{},
                                                        Type: sdk.String("et"),
                                                        UUID: sdk.String("39dbc225-9b1a-4bda-8c07-0e1084cb0672"),
                                                    },
                                                },
                                            },
                                            Status: sdk.String("assumenda"),
                                            TotalCapacityBytes: sdk.String("beatae"),
                                            TotalFreeBytes: sdk.String("est"),
                                            VmwareConfig: &shared.VmwareDiskConfig{
                                                BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeSesparseV1.ToPointer(),
                                                RdmCompatibilityMode: sdk.String("corrupti"),
                                                Shared: sdk.Bool(false),
                                                VmdkDiskMode: sdk.String("molestiae"),
                                            },
                                        },
                                    },
                                },
                                HddTotalCapacityBytes: sdk.String("provident"),
                                HddTotalFreeBytes: sdk.String("accusamus"),
                                LsblkJSON: sdk.String("necessitatibus"),
                            },
                            VMName: sdk.String("tempore"),
                            VMNetwork: &shared.VirtualMachineNetworkDetails{
                                DefaultGw: sdk.String("sint"),
                                NetworkAdapters: &shared.NetworkAdapterList{
                                    NetworkAdapters: []shared.NetworkAdapterDetails{
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("autem"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("laudantium"),
                                                        Fqdn: sdk.String("corporis"),
                                                        IPAddress: sdk.String("officiis"),
                                                        SubnetMask: sdk.String("voluptatibus"),
                                                    },
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("at"),
                                                        Fqdn: sdk.String("alias"),
                                                        IPAddress: sdk.String("quia"),
                                                        SubnetMask: sdk.String("quidem"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("fuga"),
                                        },
                                        shared.NetworkAdapterDetails{
                                            AdapterType: sdk.String("repudiandae"),
                                            Addresses: &shared.NetworkAddressList{
                                                Addresses: []shared.NetworkAddress{
                                                    shared.NetworkAddress{
                                                        Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                        Bcast: sdk.String("officiis"),
                                                        Fqdn: sdk.String("eos"),
                                                        IPAddress: sdk.String("quibusdam"),
                                                        SubnetMask: sdk.String("odio"),
                                                    },
                                                },
                                            },
                                            MacAddress: sdk.String("praesentium"),
                                        },
                                    },
                                },
                                PrimaryIPAddress: sdk.String("odit"),
                                PrimaryMacAddress: sdk.String("explicabo"),
                                PublicIPAddress: sdk.String("corporis"),
                            },
                            VMUUID: sdk.String("error"),
                        },
                    },
                    RequestID: sdk.String("earum"),
                    UpdateMask: sdk.String("adipisci"),
                },
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ut"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("beatae"),
        Parent: "unde",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateAssetsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsAssetsList

Lists all the assets in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsList(ctx, operations.MigrationcenterProjectsLocationsAssetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("at"),
        Filter: sdk.String("officia"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("optio"),
        OrderBy: sdk.String("necessitatibus"),
        PageSize: sdk.Int64(359111),
        PageToken: sdk.String("qui"),
        Parent: "expedita",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("minima"),
        View: operations.MigrationcenterProjectsLocationsAssetsListViewEnumAssetViewStandard.ToPointer(),
    }, operations.MigrationcenterProjectsLocationsAssetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsAssetsReportAssetFrames

Reports a set of frames.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsAssetsReportAssetFrames(ctx, operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Frames: &shared.Frames{
            FramesData: []shared.AssetFrame{
                shared.AssetFrame{
                    Attributes: map[string]string{
                        "minus": "eum",
                        "modi": "corporis",
                    },
                    Labels: map[string]string{
                        "voluptates": "maiores",
                        "tempore": "aperiam",
                    },
                    PerformanceSamples: []shared.PerformanceSample{
                        shared.PerformanceSample{
                            CPU: &shared.CPUUsageSample{
                                UtilizedPercentage: sdk.Float32(1897.53),
                            },
                            Disk: &shared.DiskUsageSample{
                                AverageIops: sdk.Float32(2899.13),
                            },
                            Memory: &shared.MemoryUsageSample{
                                UtilizedPercentage: sdk.Float32(5208.75),
                            },
                            Network: &shared.NetworkUsageSample{
                                AverageEgressBps: sdk.Float32(5777.09),
                                AverageIngressBps: sdk.Float32(3759.94),
                            },
                            SampleTime: sdk.String("quo"),
                        },
                        shared.PerformanceSample{
                            CPU: &shared.CPUUsageSample{
                                UtilizedPercentage: sdk.Float32(2420.99),
                            },
                            Disk: &shared.DiskUsageSample{
                                AverageIops: sdk.Float32(7955.91),
                            },
                            Memory: &shared.MemoryUsageSample{
                                UtilizedPercentage: sdk.Float32(6845.53),
                            },
                            Network: &shared.NetworkUsageSample{
                                AverageEgressBps: sdk.Float32(3445.3),
                                AverageIngressBps: sdk.Float32(6692.37),
                            },
                            SampleTime: sdk.String("impedit"),
                        },
                        shared.PerformanceSample{
                            CPU: &shared.CPUUsageSample{
                                UtilizedPercentage: sdk.Float32(9637.41),
                            },
                            Disk: &shared.DiskUsageSample{
                                AverageIops: sdk.Float32(7358.94),
                            },
                            Memory: &shared.MemoryUsageSample{
                                UtilizedPercentage: sdk.Float32(8786.01),
                            },
                            Network: &shared.NetworkUsageSample{
                                AverageEgressBps: sdk.Float32(1415.06),
                                AverageIngressBps: sdk.Float32(9974.37),
                            },
                            SampleTime: sdk.String("pariatur"),
                        },
                    },
                    ReportTime: sdk.String("nemo"),
                    TraceToken: sdk.String("reprehenderit"),
                    VirtualMachineDetails: &shared.VirtualMachineDetails{
                        CoreCount: sdk.Int(45234),
                        CreateTime: sdk.String("odio"),
                        GuestOs: &shared.GuestOsDetails{
                            Config: &shared.GuestConfigDetails{
                                Fstab: &shared.FstabEntryList{
                                    Entries: []shared.FstabEntry{
                                        shared.FstabEntry{
                                            File: sdk.String("in"),
                                            Freq: sdk.Int(496915),
                                            Mntops: sdk.String("excepturi"),
                                            Passno: sdk.Int(172195),
                                            Spec: sdk.String("error"),
                                            Vfstype: sdk.String("veritatis"),
                                        },
                                        shared.FstabEntry{
                                            File: sdk.String("ducimus"),
                                            Freq: sdk.Int(452729),
                                            Mntops: sdk.String("pariatur"),
                                            Passno: sdk.Int(932666),
                                            Spec: sdk.String("similique"),
                                            Vfstype: sdk.String("optio"),
                                        },
                                    },
                                },
                                Hosts: &shared.HostsEntryList{
                                    Entries: []shared.HostsEntry{
                                        shared.HostsEntry{
                                            HostNames: []string{
                                                "commodi",
                                                "officiis",
                                            },
                                            IP: sdk.String("placeat"),
                                        },
                                        shared.HostsEntry{
                                            HostNames: []string{
                                                "exercitationem",
                                                "quam",
                                                "dolorem",
                                            },
                                            IP: sdk.String("modi"),
                                        },
                                    },
                                },
                                Issue: sdk.String("ipsa"),
                                NfsExports: &shared.NfsExportList{
                                    Entries: []shared.NfsExport{
                                        shared.NfsExport{
                                            ExportDirectory: sdk.String("vero"),
                                            Hosts: []string{
                                                "repudiandae",
                                            },
                                        },
                                        shared.NfsExport{
                                            ExportDirectory: sdk.String("cum"),
                                            Hosts: []string{
                                                "earum",
                                            },
                                        },
                                        shared.NfsExport{
                                            ExportDirectory: sdk.String("veniam"),
                                            Hosts: []string{
                                                "dolores",
                                                "nam",
                                                "dicta",
                                            },
                                        },
                                    },
                                },
                                Selinux: &shared.Selinux{
                                    Enabled: sdk.Bool(false),
                                    Mode: sdk.String("consequuntur"),
                                },
                            },
                            Runtime: &shared.GuestRuntimeDetails{
                                Domain: sdk.String("necessitatibus"),
                                InstalledApps: &shared.GuestInstalledApplicationList{
                                    Entries: []shared.GuestInstalledApplication{
                                        shared.GuestInstalledApplication{
                                            Name: sdk.String("Mr. Dora Wuckert"),
                                            Path: sdk.String("pariatur"),
                                            Time: sdk.String("libero"),
                                            Vendor: sdk.String("excepturi"),
                                            Version: sdk.String("occaecati"),
                                        },
                                        shared.GuestInstalledApplication{
                                            Name: sdk.String("Michele Heaney"),
                                            Path: sdk.String("sint"),
                                            Time: sdk.String("enim"),
                                            Vendor: sdk.String("hic"),
                                            Version: sdk.String("animi"),
                                        },
                                        shared.GuestInstalledApplication{
                                            Name: sdk.String("Felix Mann PhD"),
                                            Path: sdk.String("architecto"),
                                            Time: sdk.String("quos"),
                                            Vendor: sdk.String("iste"),
                                            Version: sdk.String("assumenda"),
                                        },
                                    },
                                },
                                LastUptime: &shared.Date{
                                    Day: sdk.Int(731634),
                                    Month: sdk.Int(725574),
                                    Year: sdk.Int(244032),
                                },
                                MachineName: sdk.String("doloremque"),
                                NetworkInfo: &shared.RuntimeNetworkInfo{
                                    Connections: &shared.NetworkConnectionList{
                                        Entries: []shared.NetworkConnection{
                                            shared.NetworkConnection{
                                                LocalIPAddress: sdk.String("impedit"),
                                                LocalPort: sdk.Int(741238),
                                                Pid: sdk.String("ipsum"),
                                                ProcessName: sdk.String("adipisci"),
                                                Protocol: sdk.String("saepe"),
                                                RemoteIPAddress: sdk.String("deserunt"),
                                                RemotePort: sdk.Int(42924),
                                                State: sdk.String("quis"),
                                            },
                                            shared.NetworkConnection{
                                                LocalIPAddress: sdk.String("veniam"),
                                                LocalPort: sdk.Int(727481),
                                                Pid: sdk.String("architecto"),
                                                ProcessName: sdk.String("cupiditate"),
                                                Protocol: sdk.String("molestiae"),
                                                RemoteIPAddress: sdk.String("eligendi"),
                                                RemotePort: sdk.Int(820023),
                                                State: sdk.String("non"),
                                            },
                                            shared.NetworkConnection{
                                                LocalIPAddress: sdk.String("magnam"),
                                                LocalPort: sdk.Int(932296),
                                                Pid: sdk.String("sed"),
                                                ProcessName: sdk.String("asperiores"),
                                                Protocol: sdk.String("veniam"),
                                                RemoteIPAddress: sdk.String("consequuntur"),
                                                RemotePort: sdk.Int(813880),
                                                State: sdk.String("laudantium"),
                                            },
                                            shared.NetworkConnection{
                                                LocalIPAddress: sdk.String("odit"),
                                                LocalPort: sdk.Int(863477),
                                                Pid: sdk.String("amet"),
                                                ProcessName: sdk.String("exercitationem"),
                                                Protocol: sdk.String("ab"),
                                                RemoteIPAddress: sdk.String("velit"),
                                                RemotePort: sdk.Int(705710),
                                                State: sdk.String("tempore"),
                                            },
                                        },
                                    },
                                    Netstat: sdk.String("nisi"),
                                    NetstatTime: &shared.DateTime{
                                        Day: sdk.Int(977518),
                                        Hours: sdk.Int(310840),
                                        Minutes: sdk.Int(503748),
                                        Month: sdk.Int(718627),
                                        Nanos: sdk.Int(392430),
                                        Seconds: sdk.Int(335977),
                                        TimeZone: &shared.TimeZone{
                                            ID: sdk.String("6bcdb35f-f2e4-4b27-937a-8cd9e7319c17"),
                                            Version: sdk.String("esse"),
                                        },
                                        UtcOffset: sdk.String("fugiat"),
                                        Year: sdk.Int(322333),
                                    },
                                },
                                OpenFileList: &shared.OpenFileList{
                                    Entries: []shared.OpenFileDetails{
                                        shared.OpenFileDetails{
                                            Command: sdk.String("enim"),
                                            FilePath: sdk.String("delectus"),
                                            FileType: sdk.String("iusto"),
                                            User: sdk.String("dignissimos"),
                                        },
                                    },
                                },
                                Processes: &shared.RunningProcessList{
                                    Processes: []shared.RunningProcess{
                                        shared.RunningProcess{
                                            Attributes: map[string]string{
                                                "ab": "incidunt",
                                            },
                                            Cmdline: sdk.String("accusamus"),
                                            ExePath: sdk.String("saepe"),
                                            Pid: sdk.String("tempore"),
                                            User: sdk.String("veniam"),
                                        },
                                        shared.RunningProcess{
                                            Attributes: map[string]string{
                                                "reiciendis": "earum",
                                            },
                                            Cmdline: sdk.String("reprehenderit"),
                                            ExePath: sdk.String("praesentium"),
                                            Pid: sdk.String("nemo"),
                                            User: sdk.String("repellat"),
                                        },
                                        shared.RunningProcess{
                                            Attributes: map[string]string{
                                                "sequi": "nihil",
                                                "deleniti": "illo",
                                                "labore": "assumenda",
                                                "aliquam": "quisquam",
                                            },
                                            Cmdline: sdk.String("provident"),
                                            ExePath: sdk.String("laudantium"),
                                            Pid: sdk.String("repudiandae"),
                                            User: sdk.String("consequatur"),
                                        },
                                    },
                                },
                                Services: &shared.RunningServiceList{
                                    Services: []shared.RunningService{
                                        shared.RunningService{
                                            Cmdline: sdk.String("aspernatur"),
                                            ExePath: sdk.String("nam"),
                                            Name: sdk.String("Willard McLaughlin"),
                                            Pid: sdk.String("dignissimos"),
                                            StartMode: sdk.String("corporis"),
                                            State: sdk.String("vero"),
                                            Status: sdk.String("similique"),
                                        },
                                        shared.RunningService{
                                            Cmdline: sdk.String("repellendus"),
                                            ExePath: sdk.String("iure"),
                                            Name: sdk.String("Gertrude Russel Jr."),
                                            Pid: sdk.String("ad"),
                                            StartMode: sdk.String("quae"),
                                            State: sdk.String("amet"),
                                            Status: sdk.String("illum"),
                                        },
                                        shared.RunningService{
                                            Cmdline: sdk.String("praesentium"),
                                            ExePath: sdk.String("quidem"),
                                            Name: sdk.String("Ms. Vincent Boyle DVM"),
                                            Pid: sdk.String("iusto"),
                                            StartMode: sdk.String("amet"),
                                            State: sdk.String("provident"),
                                            Status: sdk.String("dolorum"),
                                        },
                                        shared.RunningService{
                                            Cmdline: sdk.String("necessitatibus"),
                                            ExePath: sdk.String("provident"),
                                            Name: sdk.String("David Hilll"),
                                            Pid: sdk.String("facilis"),
                                            StartMode: sdk.String("corrupti"),
                                            State: sdk.String("aperiam"),
                                            Status: sdk.String("sint"),
                                        },
                                    },
                                },
                            },
                        },
                        MemoryMb: sdk.Int(879522),
                        OsFamily: shared.VirtualMachineDetailsOsFamilyEnumOsFamilyUnknown.ToPointer(),
                        OsName: sdk.String("totam"),
                        OsVersion: sdk.String("dicta"),
                        Platform: &shared.PlatformDetails{
                            AwsEc2Details: &shared.AwsEc2PlatformDetails{
                                Location: sdk.String("voluptatem"),
                                MachineTypeLabel: sdk.String("velit"),
                            },
                            AzureVMDetails: &shared.AzureVMPlatformDetails{
                                Location: sdk.String("dolor"),
                                MachineTypeLabel: sdk.String("sunt"),
                                ProvisioningState: sdk.String("a"),
                            },
                            GenericDetails: &shared.GenericPlatformDetails{
                                Location: sdk.String("dolor"),
                            },
                            PhysicalDetails: &shared.PhysicalPlatformDetails{
                                Location: sdk.String("occaecati"),
                            },
                            VmwareDetails: &shared.VmwarePlatformDetails{
                                EsxVersion: sdk.String("atque"),
                                Osid: sdk.String("beatae"),
                                VcenterVersion: sdk.String("at"),
                            },
                        },
                        PowerState: sdk.String("labore"),
                        VcenterFolder: sdk.String("minus"),
                        VcenterURL: sdk.String("esse"),
                        VcenterVMID: sdk.String("voluptatem"),
                        VMArchitecture: &shared.VirtualMachineArchitectureDetails{
                            Bios: &shared.BiosDetails{
                                BiosManufacturer: sdk.String("perferendis"),
                                BiosName: sdk.String("rerum"),
                                BiosReleaseDate: sdk.String("ea"),
                                BiosVersion: sdk.String("aperiam"),
                                SmbiosUUID: sdk.String("dignissimos"),
                            },
                            CPUArchitecture: sdk.String("repellat"),
                            CPUManufacturer: sdk.String("velit"),
                            CPUName: sdk.String("porro"),
                            CPUSocketCount: sdk.Int(588639),
                            CPUThreadCount: sdk.Int(231382),
                            Firmware: sdk.String("eligendi"),
                            Hyperthreading: shared.VirtualMachineArchitectureDetailsHyperthreadingEnumHyperThreadingDisabled.ToPointer(),
                            Vendor: sdk.String("consectetur"),
                        },
                        VMDisks: &shared.VirtualMachineDiskDetails{
                            Disks: &shared.DiskEntryList{
                                Entries: []shared.DiskEntry{
                                    shared.DiskEntry{
                                        DiskLabel: sdk.String("natus"),
                                        DiskLabelType: sdk.String("temporibus"),
                                        HwAddress: sdk.String("officia"),
                                        InterfaceType: sdk.String("amet"),
                                        Partitions: &shared.DiskPartitionList{
                                            Entries: []shared.DiskPartition{
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("aspernatur"),
                                                    FileSystem: sdk.String("quo"),
                                                    FreeBytes: sdk.String("itaque"),
                                                    MountPoint: sdk.String("illum"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("laborum"),
                                                    UUID: sdk.String("7e23f225-7411-4faf-8b75-44e472e80285"),
                                                },
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("voluptate"),
                                                    FileSystem: sdk.String("similique"),
                                                    FreeBytes: sdk.String("minima"),
                                                    MountPoint: sdk.String("libero"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("magnam"),
                                                    UUID: sdk.String("0463a7d5-75f1-4400-a764-ad7334ec1b78"),
                                                },
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("et"),
                                                    FileSystem: sdk.String("facilis"),
                                                    FreeBytes: sdk.String("amet"),
                                                    MountPoint: sdk.String("autem"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("fuga"),
                                                    UUID: sdk.String("08088d10-0efa-4da2-80ef-0422eb2164cf"),
                                                },
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("molestias"),
                                                    FileSystem: sdk.String("officia"),
                                                    FreeBytes: sdk.String("libero"),
                                                    MountPoint: sdk.String("totam"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("sequi"),
                                                    UUID: sdk.String("66c723ff-da9e-406b-ae48-25c1fc0e115c"),
                                                },
                                            },
                                        },
                                        Status: sdk.String("rem"),
                                        TotalCapacityBytes: sdk.String("perferendis"),
                                        TotalFreeBytes: sdk.String("facilis"),
                                        VmwareConfig: &shared.VmwareDiskConfig{
                                            BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypeSesparseV2.ToPointer(),
                                            RdmCompatibilityMode: sdk.String("a"),
                                            Shared: sdk.Bool(false),
                                            VmdkDiskMode: sdk.String("iste"),
                                        },
                                    },
                                    shared.DiskEntry{
                                        DiskLabel: sdk.String("dicta"),
                                        DiskLabelType: sdk.String("quos"),
                                        HwAddress: sdk.String("ullam"),
                                        InterfaceType: sdk.String("dolore"),
                                        Partitions: &shared.DiskPartitionList{
                                            Entries: []shared.DiskPartition{
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("itaque"),
                                                    FileSystem: sdk.String("maxime"),
                                                    FreeBytes: sdk.String("modi"),
                                                    MountPoint: sdk.String("consequuntur"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("assumenda"),
                                                    UUID: sdk.String("efcce8f1-9777-473e-a356-2a7b408f05e3"),
                                                },
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("facere"),
                                                    FileSystem: sdk.String("aliquam"),
                                                    FreeBytes: sdk.String("quos"),
                                                    MountPoint: sdk.String("doloribus"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("fugiat"),
                                                    UUID: sdk.String("af313a1f-5fd9-4425-9c0b-36f25ea944f3"),
                                                },
                                            },
                                        },
                                        Status: sdk.String("libero"),
                                        TotalCapacityBytes: sdk.String("in"),
                                        TotalFreeBytes: sdk.String("minima"),
                                        VmwareConfig: &shared.VmwareDiskConfig{
                                            BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypePmem.ToPointer(),
                                            RdmCompatibilityMode: sdk.String("minus"),
                                            Shared: sdk.Bool(false),
                                            VmdkDiskMode: sdk.String("ab"),
                                        },
                                    },
                                    shared.DiskEntry{
                                        DiskLabel: sdk.String("beatae"),
                                        DiskLabelType: sdk.String("hic"),
                                        HwAddress: sdk.String("nisi"),
                                        InterfaceType: sdk.String("quisquam"),
                                        Partitions: &shared.DiskPartitionList{
                                            Entries: []shared.DiskPartition{
                                                shared.DiskPartition{
                                                    CapacityBytes: sdk.String("ducimus"),
                                                    FileSystem: sdk.String("fuga"),
                                                    FreeBytes: sdk.String("minima"),
                                                    MountPoint: sdk.String("architecto"),
                                                    SubPartitions: &shared.DiskPartitionList{},
                                                    Type: sdk.String("qui"),
                                                    UUID: sdk.String("6243835b-bc05-4a23-a45c-efc5fde10a0c"),
                                                },
                                            },
                                        },
                                        Status: sdk.String("necessitatibus"),
                                        TotalCapacityBytes: sdk.String("quia"),
                                        TotalFreeBytes: sdk.String("dicta"),
                                        VmwareConfig: &shared.VmwareDiskConfig{
                                            BackingType: shared.VmwareDiskConfigBackingTypeEnumBackingTypePmem.ToPointer(),
                                            RdmCompatibilityMode: sdk.String("perspiciatis"),
                                            Shared: sdk.Bool(false),
                                            VmdkDiskMode: sdk.String("debitis"),
                                        },
                                    },
                                },
                            },
                            HddTotalCapacityBytes: sdk.String("ullam"),
                            HddTotalFreeBytes: sdk.String("architecto"),
                            LsblkJSON: sdk.String("accusantium"),
                        },
                        VMName: sdk.String("perferendis"),
                        VMNetwork: &shared.VirtualMachineNetworkDetails{
                            DefaultGw: sdk.String("veritatis"),
                            NetworkAdapters: &shared.NetworkAdapterList{
                                NetworkAdapters: []shared.NetworkAdapterDetails{
                                    shared.NetworkAdapterDetails{
                                        AdapterType: sdk.String("cumque"),
                                        Addresses: &shared.NetworkAddressList{
                                            Addresses: []shared.NetworkAddress{
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                    Bcast: sdk.String("quod"),
                                                    Fqdn: sdk.String("nemo"),
                                                    IPAddress: sdk.String("recusandae"),
                                                    SubnetMask: sdk.String("velit"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentUnspecified.ToPointer(),
                                                    Bcast: sdk.String("dignissimos"),
                                                    Fqdn: sdk.String("laboriosam"),
                                                    IPAddress: sdk.String("sed"),
                                                    SubnetMask: sdk.String("odio"),
                                                },
                                            },
                                        },
                                        MacAddress: sdk.String("natus"),
                                    },
                                    shared.NetworkAdapterDetails{
                                        AdapterType: sdk.String("provident"),
                                        Addresses: &shared.NetworkAddressList{
                                            Addresses: []shared.NetworkAddress{
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                    Bcast: sdk.String("facilis"),
                                                    Fqdn: sdk.String("quidem"),
                                                    IPAddress: sdk.String("itaque"),
                                                    SubnetMask: sdk.String("laboriosam"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                    Bcast: sdk.String("modi"),
                                                    Fqdn: sdk.String("perspiciatis"),
                                                    IPAddress: sdk.String("hic"),
                                                    SubnetMask: sdk.String("cum"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentUnspecified.ToPointer(),
                                                    Bcast: sdk.String("libero"),
                                                    Fqdn: sdk.String("nam"),
                                                    IPAddress: sdk.String("incidunt"),
                                                    SubnetMask: sdk.String("recusandae"),
                                                },
                                            },
                                        },
                                        MacAddress: sdk.String("quod"),
                                    },
                                    shared.NetworkAdapterDetails{
                                        AdapterType: sdk.String("id"),
                                        Addresses: &shared.NetworkAddressList{
                                            Addresses: []shared.NetworkAddress{
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentStatic.ToPointer(),
                                                    Bcast: sdk.String("quo"),
                                                    Fqdn: sdk.String("nesciunt"),
                                                    IPAddress: sdk.String("illum"),
                                                    SubnetMask: sdk.String("nemo"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                    Bcast: sdk.String("facilis"),
                                                    Fqdn: sdk.String("non"),
                                                    IPAddress: sdk.String("mollitia"),
                                                    SubnetMask: sdk.String("assumenda"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                    Bcast: sdk.String("distinctio"),
                                                    Fqdn: sdk.String("pariatur"),
                                                    IPAddress: sdk.String("ad"),
                                                    SubnetMask: sdk.String("facere"),
                                                },
                                                shared.NetworkAddress{
                                                    Assignment: shared.NetworkAddressAssignmentEnumAddressAssignmentDhcp.ToPointer(),
                                                    Bcast: sdk.String("eveniet"),
                                                    Fqdn: sdk.String("laborum"),
                                                    IPAddress: sdk.String("incidunt"),
                                                    SubnetMask: sdk.String("maxime"),
                                                },
                                            },
                                        },
                                        MacAddress: sdk.String("ipsam"),
                                    },
                                },
                            },
                            PrimaryIPAddress: sdk.String("alias"),
                            PrimaryMacAddress: sdk.String("suscipit"),
                            PublicIPAddress: sdk.String("deserunt"),
                        },
                        VMUUID: sdk.String("molestias"),
                    },
                },
            },
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("labore"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("perferendis"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        Source: sdk.String("magnam"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAssetFramesResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsGroupsAddAssets

Adds assets to a group.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsGroupsAddAssets(ctx, operations.MigrationcenterProjectsLocationsGroupsAddAssetsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddAssetsToGroupRequest: &shared.AddAssetsToGroupRequest{
            AllowExisting: sdk.Bool(false),
            Assets: &shared.AssetList{
                AssetIds: []string{
                    "officiis",
                    "unde",
                },
            },
            RequestID: sdk.String("nulla"),
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("nostrum"),
        Group: "esse",
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.MigrationcenterProjectsLocationsGroupsAddAssetsSecurity{
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

## MigrationcenterProjectsLocationsGroupsCreate

Creates a new group in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsGroupsCreate(ctx, operations.MigrationcenterProjectsLocationsGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GroupInput: &shared.GroupInput{
            Description: sdk.String("quod"),
            DisplayName: sdk.String("laboriosam"),
            Labels: map[string]string{
                "voluptatem": "facere",
            },
        },
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("eaque"),
        GroupID: sdk.String("architecto"),
        Key: sdk.String("similique"),
        OauthToken: sdk.String("porro"),
        Parent: "blanditiis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        RequestID: sdk.String("magni"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("sed"),
    }, operations.MigrationcenterProjectsLocationsGroupsCreateSecurity{
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

## MigrationcenterProjectsLocationsGroupsList

Lists all groups in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsGroupsList(ctx, operations.MigrationcenterProjectsLocationsGroupsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("a"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("maiores"),
        OrderBy: sdk.String("alias"),
        PageSize: sdk.Int64(992667),
        PageToken: sdk.String("rem"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.MigrationcenterProjectsLocationsGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsGroupsRemoveAssets

Removes assets from a group.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsGroupsRemoveAssets(ctx, operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveAssetsFromGroupRequest: &shared.RemoveAssetsFromGroupRequest{
            AllowMissing: sdk.Bool(false),
            Assets: &shared.AssetList{
                AssetIds: []string{
                    "esse",
                    "in",
                },
            },
            RequestID: sdk.String("eligendi"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("excepturi"),
        Group: "accusantium",
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity{
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

## MigrationcenterProjectsLocationsImportJobsCreate

Creates an import job.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsCreate(ctx, operations.MigrationcenterProjectsLocationsImportJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportJobInput: &shared.ImportJobInput{
            AssetSource: sdk.String("corporis"),
            DisplayName: sdk.String("rerum"),
            ExecutionReport: &shared.ExecutionReport{
                ExecutionErrors: &shared.ValidationReport{
                    FileValidations: []shared.FileValidationReport{
                        shared.FileValidationReport{
                            FileErrors: []shared.ImportError{
                                shared.ImportError{
                                    ErrorDetails: sdk.String("vel"),
                                    Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                },
                                shared.ImportError{
                                    ErrorDetails: sdk.String("id"),
                                    Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                },
                                shared.ImportError{
                                    ErrorDetails: sdk.String("ex"),
                                    Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                },
                            },
                            FileName: sdk.String("veritatis"),
                            PartialReport: sdk.Bool(false),
                            RowErrors: []shared.ImportRowError{
                                shared.ImportRowError{
                                    Errors: []shared.ImportError{
                                        shared.ImportError{
                                            ErrorDetails: sdk.String("similique"),
                                            Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                        },
                                    },
                                    RowNumber: sdk.Int(462583),
                                    VMName: sdk.String("magni"),
                                    VMUUID: sdk.String("deserunt"),
                                },
                                shared.ImportRowError{
                                    Errors: []shared.ImportError{
                                        shared.ImportError{
                                            ErrorDetails: sdk.String("omnis"),
                                            Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                        },
                                        shared.ImportError{
                                            ErrorDetails: sdk.String("nesciunt"),
                                            Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                                        },
                                        shared.ImportError{
                                            ErrorDetails: sdk.String("quis"),
                                            Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                        },
                                        shared.ImportError{
                                            ErrorDetails: sdk.String("aliquam"),
                                            Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                        },
                                    },
                                    RowNumber: sdk.Int(980410),
                                    VMName: sdk.String("laudantium"),
                                    VMUUID: sdk.String("velit"),
                                },
                            },
                        },
                    },
                    JobErrors: []shared.ImportError{
                        shared.ImportError{
                            ErrorDetails: sdk.String("amet"),
                            Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                        },
                        shared.ImportError{
                            ErrorDetails: sdk.String("ipsa"),
                            Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                        },
                        shared.ImportError{
                            ErrorDetails: sdk.String("tenetur"),
                            Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                        },
                        shared.ImportError{
                            ErrorDetails: sdk.String("molestiae"),
                            Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                        },
                    },
                },
                FramesReported: sdk.Int(989033),
                JobErrors: []shared.ImportError{
                    shared.ImportError{
                        ErrorDetails: sdk.String("nobis"),
                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                    },
                    shared.ImportError{
                        ErrorDetails: sdk.String("accusantium"),
                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                    },
                    shared.ImportError{
                        ErrorDetails: sdk.String("minus"),
                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                    },
                    shared.ImportError{
                        ErrorDetails: sdk.String("eveniet"),
                        Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                    },
                },
                TotalRowsCount: sdk.Int(735740),
            },
            GcsPayload: &shared.GCSPayloadInfo{
                Format: shared.GCSPayloadInfoFormatEnumImportJobFormatExportedAwsCsv.ToPointer(),
                Path: sdk.String("modi"),
            },
            InlinePayload: &shared.InlinePayloadInfo{
                Format: shared.InlinePayloadInfoFormatEnumImportJobFormatManualCsv.ToPointer(),
                Payload: []shared.PayloadFile{
                    shared.PayloadFile{
                        Data: sdk.String("eius"),
                        Name: sdk.String("Marianne Zemlak"),
                    },
                },
            },
            Labels: map[string]string{
                "repellat": "a",
                "animi": "maiores",
                "itaque": "nulla",
            },
            ValidationReport: &shared.ValidationReport{
                FileValidations: []shared.FileValidationReport{
                    shared.FileValidationReport{
                        FileErrors: []shared.ImportError{
                            shared.ImportError{
                                ErrorDetails: sdk.String("velit"),
                                Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                            },
                            shared.ImportError{
                                ErrorDetails: sdk.String("enim"),
                                Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                            },
                        },
                        FileName: sdk.String("saepe"),
                        PartialReport: sdk.Bool(false),
                        RowErrors: []shared.ImportRowError{
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("accusantium"),
                                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("impedit"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("blanditiis"),
                                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("quisquam"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(748023),
                                VMName: sdk.String("natus"),
                                VMUUID: sdk.String("minus"),
                            },
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("magnam"),
                                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(800799),
                                VMName: sdk.String("quos"),
                                VMUUID: sdk.String("corrupti"),
                            },
                        },
                    },
                    shared.FileValidationReport{
                        FileErrors: []shared.ImportError{
                            shared.ImportError{
                                ErrorDetails: sdk.String("molestiae"),
                                Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                            },
                        },
                        FileName: sdk.String("laborum"),
                        PartialReport: sdk.Bool(false),
                        RowErrors: []shared.ImportRowError{
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("necessitatibus"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(564627),
                                VMName: sdk.String("dolore"),
                                VMUUID: sdk.String("sunt"),
                            },
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("neque"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("earum"),
                                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("ipsam"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("exercitationem"),
                                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(469994),
                                VMName: sdk.String("ad"),
                                VMUUID: sdk.String("nisi"),
                            },
                        },
                    },
                    shared.FileValidationReport{
                        FileErrors: []shared.ImportError{
                            shared.ImportError{
                                ErrorDetails: sdk.String("quis"),
                                Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                            },
                            shared.ImportError{
                                ErrorDetails: sdk.String("nemo"),
                                Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                            },
                            shared.ImportError{
                                ErrorDetails: sdk.String("pariatur"),
                                Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                            },
                            shared.ImportError{
                                ErrorDetails: sdk.String("quidem"),
                                Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                            },
                        },
                        FileName: sdk.String("perferendis"),
                        PartialReport: sdk.Bool(false),
                        RowErrors: []shared.ImportRowError{
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("sed"),
                                        Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("repellat"),
                                        Severity: shared.ImportErrorSeverityEnumInfo.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("architecto"),
                                        Severity: shared.ImportErrorSeverityEnumSeverityUnspecified.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("pariatur"),
                                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(294266),
                                VMName: sdk.String("voluptatibus"),
                                VMUUID: sdk.String("iure"),
                            },
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("minus"),
                                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(677509),
                                VMName: sdk.String("velit"),
                                VMUUID: sdk.String("earum"),
                            },
                            shared.ImportRowError{
                                Errors: []shared.ImportError{
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("error"),
                                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("quasi"),
                                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                    },
                                    shared.ImportError{
                                        ErrorDetails: sdk.String("accusamus"),
                                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                                    },
                                },
                                RowNumber: sdk.Int(769156),
                                VMName: sdk.String("doloremque"),
                                VMUUID: sdk.String("expedita"),
                            },
                        },
                    },
                },
                JobErrors: []shared.ImportError{
                    shared.ImportError{
                        ErrorDetails: sdk.String("eaque"),
                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                    },
                    shared.ImportError{
                        ErrorDetails: sdk.String("aliquid"),
                        Severity: shared.ImportErrorSeverityEnumWarning.ToPointer(),
                    },
                    shared.ImportError{
                        ErrorDetails: sdk.String("magni"),
                        Severity: shared.ImportErrorSeverityEnumError.ToPointer(),
                    },
                },
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("sed"),
        ImportJobID: sdk.String("accusamus"),
        Key: sdk.String("optio"),
        OauthToken: sdk.String("delectus"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        RequestID: sdk.String("quos"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.MigrationcenterProjectsLocationsImportJobsCreateSecurity{
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

## MigrationcenterProjectsLocationsImportJobsImportDataFilesCreate

Creates an import data file.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreate(ctx, operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ImportDataFileInput: &shared.ImportDataFileInput{
            DisplayName: sdk.String("corporis"),
            Format: shared.ImportDataFileFormatEnumImportJobFormatUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("nostrum"),
        ImportDataFileID: sdk.String("at"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("neque"),
        Parent: "pariatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RequestID: sdk.String("sapiente"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("quae"),
    }, operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity{
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

## MigrationcenterProjectsLocationsImportJobsImportDataFilesList

List import data files.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsImportDataFilesList(ctx, operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aperiam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("ad"),
        Filter: sdk.String("aliquam"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("quas"),
        OrderBy: sdk.String("consequuntur"),
        PageSize: sdk.Int64(982445),
        PageToken: sdk.String("inventore"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportDataFilesResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsImportJobsList

Lists all import jobs.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsList(ctx, operations.MigrationcenterProjectsLocationsImportJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("ducimus"),
        Key: sdk.String("adipisci"),
        OauthToken: sdk.String("recusandae"),
        OrderBy: sdk.String("tempora"),
        PageSize: sdk.Int64(503449),
        PageToken: sdk.String("numquam"),
        Parent: "sequi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("rerum"),
        View: operations.MigrationcenterProjectsLocationsImportJobsListViewEnumImportJobViewUnspecified.ToPointer(),
    }, operations.MigrationcenterProjectsLocationsImportJobsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListImportJobsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsImportJobsRun

Runs an import job.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsRun(ctx, operations.MigrationcenterProjectsLocationsImportJobsRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RunImportJobRequest: &shared.RunImportJobRequest{
            RequestID: sdk.String("autem"),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("magni"),
        Name: "Melanie Okuneva MD",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.MigrationcenterProjectsLocationsImportJobsRunSecurity{
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

## MigrationcenterProjectsLocationsImportJobsValidate

Validates an import job.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsImportJobsValidate(ctx, operations.MigrationcenterProjectsLocationsImportJobsValidateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ValidateImportJobRequest: &shared.ValidateImportJobRequest{
            RequestID: sdk.String("ullam"),
        },
        AccessToken: sdk.String("eligendi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("unde"),
        Name: "Jackie Block",
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.MigrationcenterProjectsLocationsImportJobsValidateSecurity{
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

## MigrationcenterProjectsLocationsList

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
    res, err := s.Projects.MigrationcenterProjectsLocationsList(ctx, operations.MigrationcenterProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("delectus"),
        Filter: sdk.String("labore"),
        Key: sdk.String("expedita"),
        Name: "Jordan Little",
        OauthToken: sdk.String("pariatur"),
        PageSize: sdk.Int64(956871),
        PageToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("minus"),
    }, operations.MigrationcenterProjectsLocationsListSecurity{
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

## MigrationcenterProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsOperationsCancel(ctx, operations.MigrationcenterProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "excepturi": "occaecati",
            "libero": "quo",
            "esse": "hic",
        },
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("pariatur"),
        Name: "Ms. Clay Boehm",
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptates"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("magni"),
    }, operations.MigrationcenterProjectsLocationsOperationsCancelSecurity{
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

## MigrationcenterProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsOperationsList(ctx, operations.MigrationcenterProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("at"),
        Filter: sdk.String("eum"),
        Key: sdk.String("reprehenderit"),
        Name: "Guy Kovacek",
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(541822),
        PageToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("est"),
    }, operations.MigrationcenterProjectsLocationsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsPreferenceSetsCreate

Creates a new preference set in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsPreferenceSetsCreate(ctx, operations.MigrationcenterProjectsLocationsPreferenceSetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PreferenceSetInput: &shared.PreferenceSetInput{
            Description: sdk.String("rem"),
            DisplayName: sdk.String("magni"),
            VirtualMachinePreferences: &shared.VirtualMachinePreferences{
                CommitmentPlan: shared.VirtualMachinePreferencesCommitmentPlanEnumCommitmentPlanUnspecified.ToPointer(),
                ComputeEnginePreferences: &shared.ComputeEnginePreferences{
                    LicenseType: shared.ComputeEnginePreferencesLicenseTypeEnumLicenseTypeDefault.ToPointer(),
                    MachinePreferences: &shared.MachinePreferences{
                        AllowedMachineSeries: []shared.MachineSeries{
                            shared.MachineSeries{
                                Code: sdk.String("enim"),
                            },
                            shared.MachineSeries{
                                Code: sdk.String("labore"),
                            },
                            shared.MachineSeries{
                                Code: sdk.String("sapiente"),
                            },
                            shared.MachineSeries{
                                Code: sdk.String("saepe"),
                            },
                        },
                    },
                    PersistentDiskType: shared.ComputeEnginePreferencesPersistentDiskTypeEnumPersistentDiskTypeSsd.ToPointer(),
                },
                RegionPreferences: &shared.RegionPreferences{
                    PreferredRegions: []string{
                        "natus",
                        "cumque",
                        "natus",
                    },
                },
                SizingOptimizationStrategy: shared.VirtualMachinePreferencesSizingOptimizationStrategyEnumSizingOptimizationStrategySameAsSource.ToPointer(),
            },
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("quis"),
        Parent: "enim",
        PreferenceSetID: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        RequestID: sdk.String("illum"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("sit"),
    }, operations.MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity{
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

## MigrationcenterProjectsLocationsPreferenceSetsList

Lists all the preference sets in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsPreferenceSetsList(ctx, operations.MigrationcenterProjectsLocationsPreferenceSetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("dicta"),
        OrderBy: sdk.String("fugit"),
        PageSize: sdk.Int64(25190),
        PageToken: sdk.String("aliquid"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("sunt"),
    }, operations.MigrationcenterProjectsLocationsPreferenceSetsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPreferenceSetsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsReportConfigsCreate

Creates a report configuration.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsReportConfigsCreate(ctx, operations.MigrationcenterProjectsLocationsReportConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportConfigInput: &shared.ReportConfigInput{
            Description: sdk.String("delectus"),
            DisplayName: sdk.String("laborum"),
            GroupPreferencesetAssignments: []shared.ReportConfigGroupPreferenceSetAssignment{
                shared.ReportConfigGroupPreferenceSetAssignment{
                    Group: sdk.String("deserunt"),
                    PreferenceSet: sdk.String("modi"),
                },
                shared.ReportConfigGroupPreferenceSetAssignment{
                    Group: sdk.String("sunt"),
                    PreferenceSet: sdk.String("impedit"),
                },
            },
        },
        AccessToken: sdk.String("eius"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("at"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("repellat"),
        Parent: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        ReportConfigID: sdk.String("sequi"),
        RequestID: sdk.String("fugit"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("hic"),
    }, operations.MigrationcenterProjectsLocationsReportConfigsCreateSecurity{
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

## MigrationcenterProjectsLocationsReportConfigsList

Lists ReportConfigs in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsReportConfigsList(ctx, operations.MigrationcenterProjectsLocationsReportConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("illo"),
        OrderBy: sdk.String("magnam"),
        PageSize: sdk.Int64(961842),
        PageToken: sdk.String("numquam"),
        Parent: "optio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("repellat"),
    }, operations.MigrationcenterProjectsLocationsReportConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportConfigsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsReportConfigsReportsCreate

Creates a report.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsReportConfigsReportsCreate(ctx, operations.MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportInput: &shared.ReportInput{
            Description: sdk.String("deleniti"),
            DisplayName: sdk.String("expedita"),
            State: shared.ReportStateEnumFailed.ToPointer(),
            Summary: &shared.ReportSummary{
                AllAssetsStats: &shared.ReportSummaryAssetAggregateStats{
                    AssetAge: &shared.ReportSummaryChartData{
                        DataPoints: []shared.ReportSummaryChartDataDataPoint{
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("aliquid"),
                                Value: sdk.Float64(1513.85),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("beatae"),
                                Value: sdk.Float64(6273.41),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("ea"),
                                Value: sdk.Float64(6573.01),
                            },
                        },
                    },
                    CoreCountHistogram: &shared.ReportSummaryHistogramChartData{
                        Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("tenetur"),
                                LowerBound: sdk.String("dignissimos"),
                                UpperBound: sdk.String("esse"),
                            },
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("animi"),
                                LowerBound: sdk.String("laudantium"),
                                UpperBound: sdk.String("esse"),
                            },
                        },
                    },
                    MemoryBytesHistogram: &shared.ReportSummaryHistogramChartData{
                        Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("earum"),
                                LowerBound: sdk.String("velit"),
                                UpperBound: sdk.String("officiis"),
                            },
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("eius"),
                                LowerBound: sdk.String("rerum"),
                                UpperBound: sdk.String("itaque"),
                            },
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("dignissimos"),
                                LowerBound: sdk.String("ipsam"),
                                UpperBound: sdk.String("explicabo"),
                            },
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("impedit"),
                                LowerBound: sdk.String("aliquid"),
                                UpperBound: sdk.String("quis"),
                            },
                        },
                    },
                    MemoryUtilization: &shared.ReportSummaryChartData{
                        DataPoints: []shared.ReportSummaryChartDataDataPoint{
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("ipsum"),
                                Value: sdk.Float64(2848.85),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("quaerat"),
                                Value: sdk.Float64(1039.88),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("praesentium"),
                                Value: sdk.Float64(9078.99),
                            },
                        },
                    },
                    MemoryUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                        Free: sdk.String("dolor"),
                        Used: sdk.String("expedita"),
                    },
                    OperatingSystem: &shared.ReportSummaryChartData{
                        DataPoints: []shared.ReportSummaryChartDataDataPoint{
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("iste"),
                                Value: sdk.Float64(749.21),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("minus"),
                                Value: sdk.Float64(5533.15),
                            },
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("temporibus"),
                                Value: sdk.Float64(5766.57),
                            },
                        },
                    },
                    StorageBytesHistogram: &shared.ReportSummaryHistogramChartData{
                        Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("enim"),
                                LowerBound: sdk.String("accusamus"),
                                UpperBound: sdk.String("aperiam"),
                            },
                            shared.ReportSummaryHistogramChartDataBucket{
                                Count: sdk.String("voluptates"),
                                LowerBound: sdk.String("laudantium"),
                                UpperBound: sdk.String("tempora"),
                            },
                        },
                    },
                    StorageUtilization: &shared.ReportSummaryChartData{
                        DataPoints: []shared.ReportSummaryChartDataDataPoint{
                            shared.ReportSummaryChartDataDataPoint{
                                Label: sdk.String("omnis"),
                                Value: sdk.Float64(8480.63),
                            },
                        },
                    },
                    StorageUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                        Free: sdk.String("rem"),
                        Used: sdk.String("tenetur"),
                    },
                    TotalAssets: sdk.String("deleniti"),
                    TotalCores: sdk.String("modi"),
                    TotalMemoryBytes: sdk.String("earum"),
                    TotalStorageBytes: sdk.String("architecto"),
                },
                GroupFindings: []shared.ReportSummaryGroupFinding{
                    shared.ReportSummaryGroupFinding{
                        AssetAggregateStats: &shared.ReportSummaryAssetAggregateStats{
                            AssetAge: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("maiores"),
                                        Value: sdk.Float64(1966.46),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("saepe"),
                                        Value: sdk.Float64(89.04),
                                    },
                                },
                            },
                            CoreCountHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("debitis"),
                                        LowerBound: sdk.String("facere"),
                                        UpperBound: sdk.String("quisquam"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("cumque"),
                                        LowerBound: sdk.String("aliquam"),
                                        UpperBound: sdk.String("dolorum"),
                                    },
                                },
                            },
                            MemoryBytesHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("ad"),
                                        LowerBound: sdk.String("reiciendis"),
                                        UpperBound: sdk.String("sequi"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("porro"),
                                        LowerBound: sdk.String("laborum"),
                                        UpperBound: sdk.String("nobis"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("quibusdam"),
                                        LowerBound: sdk.String("omnis"),
                                        UpperBound: sdk.String("aut"),
                                    },
                                },
                            },
                            MemoryUtilization: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("officia"),
                                        Value: sdk.Float64(5846.4),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("reprehenderit"),
                                        Value: sdk.Float64(1572.81),
                                    },
                                },
                            },
                            MemoryUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                                Free: sdk.String("necessitatibus"),
                                Used: sdk.String("accusantium"),
                            },
                            OperatingSystem: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("nisi"),
                                        Value: sdk.Float64(4741.85),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("quia"),
                                        Value: sdk.Float64(5147.67),
                                    },
                                },
                            },
                            StorageBytesHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("odit"),
                                        LowerBound: sdk.String("iusto"),
                                        UpperBound: sdk.String("expedita"),
                                    },
                                },
                            },
                            StorageUtilization: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("repellendus"),
                                        Value: sdk.Float64(1998.79),
                                    },
                                },
                            },
                            StorageUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                                Free: sdk.String("ipsa"),
                                Used: sdk.String("sint"),
                            },
                            TotalAssets: sdk.String("dolore"),
                            TotalCores: sdk.String("esse"),
                            TotalMemoryBytes: sdk.String("accusantium"),
                            TotalStorageBytes: sdk.String("distinctio"),
                        },
                        Description: sdk.String("sapiente"),
                        DisplayName: sdk.String("quam"),
                        OverlappingAssetCount: sdk.String("est"),
                        PreferenceSetFindings: []shared.ReportSummaryGroupPreferenceSetFinding{
                            shared.ReportSummaryGroupPreferenceSetFinding{
                                Description: sdk.String("delectus"),
                                DisplayName: sdk.String("culpa"),
                                MachineFinding: &shared.ReportSummaryMachineFinding{
                                    AllocatedAssetCount: sdk.String("voluptatum"),
                                    AllocatedDiskTypes: []shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum{
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeSsd,
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeSsd,
                                    },
                                    AllocatedRegions: []string{
                                        "non",
                                        "ullam",
                                    },
                                    MachineSeriesAllocations: []shared.ReportSummaryMachineSeriesAllocation{
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("voluptas"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("doloribus"),
                                            },
                                        },
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("animi"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("recusandae"),
                                            },
                                        },
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("corporis"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("non"),
                                            },
                                        },
                                    },
                                },
                                MachinePreferences: &shared.VirtualMachinePreferences{
                                    CommitmentPlan: shared.VirtualMachinePreferencesCommitmentPlanEnumCommitmentPlanThreeYears.ToPointer(),
                                    ComputeEnginePreferences: &shared.ComputeEnginePreferences{
                                        LicenseType: shared.ComputeEnginePreferencesLicenseTypeEnumLicenseTypeBringYourOwnLicense.ToPointer(),
                                        MachinePreferences: &shared.MachinePreferences{
                                            AllowedMachineSeries: []shared.MachineSeries{
                                                shared.MachineSeries{
                                                    Code: sdk.String("laboriosam"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("voluptatem"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("optio"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("sequi"),
                                                },
                                            },
                                        },
                                        PersistentDiskType: shared.ComputeEnginePreferencesPersistentDiskTypeEnumPersistentDiskTypeUnspecified.ToPointer(),
                                    },
                                    RegionPreferences: &shared.RegionPreferences{
                                        PreferredRegions: []string{
                                            "voluptatibus",
                                        },
                                    },
                                    SizingOptimizationStrategy: shared.VirtualMachinePreferencesSizingOptimizationStrategyEnumSizingOptimizationStrategyUnspecified.ToPointer(),
                                },
                                MonthlyCostCompute: &shared.Money{
                                    CurrencyCode: sdk.String("sed"),
                                    Nanos: sdk.Int(227741),
                                    Units: sdk.String("rerum"),
                                },
                                MonthlyCostNetworkEgress: &shared.Money{
                                    CurrencyCode: sdk.String("in"),
                                    Nanos: sdk.Int(345514),
                                    Units: sdk.String("temporibus"),
                                },
                                MonthlyCostOsLicense: &shared.Money{
                                    CurrencyCode: sdk.String("ratione"),
                                    Nanos: sdk.Int(221824),
                                    Units: sdk.String("nisi"),
                                },
                                MonthlyCostOther: &shared.Money{
                                    CurrencyCode: sdk.String("dignissimos"),
                                    Nanos: sdk.Int(971360),
                                    Units: sdk.String("itaque"),
                                },
                                MonthlyCostStorage: &shared.Money{
                                    CurrencyCode: sdk.String("vitae"),
                                    Nanos: sdk.Int(667215),
                                    Units: sdk.String("accusantium"),
                                },
                                MonthlyCostTotal: &shared.Money{
                                    CurrencyCode: sdk.String("quod"),
                                    Nanos: sdk.Int(796117),
                                    Units: sdk.String("quos"),
                                },
                                PreferredRegion: sdk.String("possimus"),
                                PricingTrack: sdk.String("maiores"),
                                TopPriority: sdk.String("odio"),
                            },
                            shared.ReportSummaryGroupPreferenceSetFinding{
                                Description: sdk.String("provident"),
                                DisplayName: sdk.String("sapiente"),
                                MachineFinding: &shared.ReportSummaryMachineFinding{
                                    AllocatedAssetCount: sdk.String("aperiam"),
                                    AllocatedDiskTypes: []shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum{
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeUnspecified,
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeBalanced,
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeStandard,
                                    },
                                    AllocatedRegions: []string{
                                        "unde",
                                        "alias",
                                        "impedit",
                                        "sequi",
                                    },
                                    MachineSeriesAllocations: []shared.ReportSummaryMachineSeriesAllocation{
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("labore"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("expedita"),
                                            },
                                        },
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("in"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("quisquam"),
                                            },
                                        },
                                    },
                                },
                                MachinePreferences: &shared.VirtualMachinePreferences{
                                    CommitmentPlan: shared.VirtualMachinePreferencesCommitmentPlanEnumCommitmentPlanUnspecified.ToPointer(),
                                    ComputeEnginePreferences: &shared.ComputeEnginePreferences{
                                        LicenseType: shared.ComputeEnginePreferencesLicenseTypeEnumLicenseTypeUnspecified.ToPointer(),
                                        MachinePreferences: &shared.MachinePreferences{
                                            AllowedMachineSeries: []shared.MachineSeries{
                                                shared.MachineSeries{
                                                    Code: sdk.String("maiores"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("distinctio"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("mollitia"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("impedit"),
                                                },
                                            },
                                        },
                                        PersistentDiskType: shared.ComputeEnginePreferencesPersistentDiskTypeEnumPersistentDiskTypeSsd.ToPointer(),
                                    },
                                    RegionPreferences: &shared.RegionPreferences{
                                        PreferredRegions: []string{
                                            "quas",
                                        },
                                    },
                                    SizingOptimizationStrategy: shared.VirtualMachinePreferencesSizingOptimizationStrategyEnumSizingOptimizationStrategyModerate.ToPointer(),
                                },
                                MonthlyCostCompute: &shared.Money{
                                    CurrencyCode: sdk.String("cum"),
                                    Nanos: sdk.Int(119725),
                                    Units: sdk.String("impedit"),
                                },
                                MonthlyCostNetworkEgress: &shared.Money{
                                    CurrencyCode: sdk.String("tempora"),
                                    Nanos: sdk.Int(908249),
                                    Units: sdk.String("repudiandae"),
                                },
                                MonthlyCostOsLicense: &shared.Money{
                                    CurrencyCode: sdk.String("sed"),
                                    Nanos: sdk.Int(772628),
                                    Units: sdk.String("quas"),
                                },
                                MonthlyCostOther: &shared.Money{
                                    CurrencyCode: sdk.String("impedit"),
                                    Nanos: sdk.Int(428378),
                                    Units: sdk.String("eligendi"),
                                },
                                MonthlyCostStorage: &shared.Money{
                                    CurrencyCode: sdk.String("recusandae"),
                                    Nanos: sdk.Int(404643),
                                    Units: sdk.String("beatae"),
                                },
                                MonthlyCostTotal: &shared.Money{
                                    CurrencyCode: sdk.String("veritatis"),
                                    Nanos: sdk.Int(982574),
                                    Units: sdk.String("itaque"),
                                },
                                PreferredRegion: sdk.String("vero"),
                                PricingTrack: sdk.String("quidem"),
                                TopPriority: sdk.String("illo"),
                            },
                        },
                    },
                    shared.ReportSummaryGroupFinding{
                        AssetAggregateStats: &shared.ReportSummaryAssetAggregateStats{
                            AssetAge: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("dignissimos"),
                                        Value: sdk.Float64(7916.15),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("distinctio"),
                                        Value: sdk.Float64(8233.41),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("cum"),
                                        Value: sdk.Float64(3823.42),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("saepe"),
                                        Value: sdk.Float64(9347.82),
                                    },
                                },
                            },
                            CoreCountHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("nihil"),
                                        LowerBound: sdk.String("quaerat"),
                                        UpperBound: sdk.String("ipsum"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("ducimus"),
                                        LowerBound: sdk.String("laudantium"),
                                        UpperBound: sdk.String("rerum"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("deserunt"),
                                        LowerBound: sdk.String("odit"),
                                        UpperBound: sdk.String("ad"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("sequi"),
                                        LowerBound: sdk.String("beatae"),
                                        UpperBound: sdk.String("iusto"),
                                    },
                                },
                            },
                            MemoryBytesHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("magnam"),
                                        LowerBound: sdk.String("odio"),
                                        UpperBound: sdk.String("nulla"),
                                    },
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("impedit"),
                                        LowerBound: sdk.String("cupiditate"),
                                        UpperBound: sdk.String("illo"),
                                    },
                                },
                            },
                            MemoryUtilization: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("laborum"),
                                        Value: sdk.Float64(8488.33),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("fugit"),
                                        Value: sdk.Float64(8048.79),
                                    },
                                },
                            },
                            MemoryUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                                Free: sdk.String("dolorum"),
                                Used: sdk.String("repellat"),
                            },
                            OperatingSystem: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("illum"),
                                        Value: sdk.Float64(8450.86),
                                    },
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("commodi"),
                                        Value: sdk.Float64(4563.71),
                                    },
                                },
                            },
                            StorageBytesHistogram: &shared.ReportSummaryHistogramChartData{
                                Buckets: []shared.ReportSummaryHistogramChartDataBucket{
                                    shared.ReportSummaryHistogramChartDataBucket{
                                        Count: sdk.String("consectetur"),
                                        LowerBound: sdk.String("temporibus"),
                                        UpperBound: sdk.String("optio"),
                                    },
                                },
                            },
                            StorageUtilization: &shared.ReportSummaryChartData{
                                DataPoints: []shared.ReportSummaryChartDataDataPoint{
                                    shared.ReportSummaryChartDataDataPoint{
                                        Label: sdk.String("maiores"),
                                        Value: sdk.Float64(3502.71),
                                    },
                                },
                            },
                            StorageUtilizationChart: &shared.ReportSummaryUtilizationChartData{
                                Free: sdk.String("culpa"),
                                Used: sdk.String("repudiandae"),
                            },
                            TotalAssets: sdk.String("aspernatur"),
                            TotalCores: sdk.String("sapiente"),
                            TotalMemoryBytes: sdk.String("neque"),
                            TotalStorageBytes: sdk.String("officia"),
                        },
                        Description: sdk.String("suscipit"),
                        DisplayName: sdk.String("harum"),
                        OverlappingAssetCount: sdk.String("ducimus"),
                        PreferenceSetFindings: []shared.ReportSummaryGroupPreferenceSetFinding{
                            shared.ReportSummaryGroupPreferenceSetFinding{
                                Description: sdk.String("perferendis"),
                                DisplayName: sdk.String("laudantium"),
                                MachineFinding: &shared.ReportSummaryMachineFinding{
                                    AllocatedAssetCount: sdk.String("iusto"),
                                    AllocatedDiskTypes: []shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum{
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeStandard,
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeStandard,
                                        shared.ReportSummaryMachineFindingAllocatedDiskTypesEnumPersistentDiskTypeStandard,
                                    },
                                    AllocatedRegions: []string{
                                        "quaerat",
                                    },
                                    MachineSeriesAllocations: []shared.ReportSummaryMachineSeriesAllocation{
                                        shared.ReportSummaryMachineSeriesAllocation{
                                            AllocatedAssetCount: sdk.String("sapiente"),
                                            MachineSeries: &shared.MachineSeries{
                                                Code: sdk.String("corporis"),
                                            },
                                        },
                                    },
                                },
                                MachinePreferences: &shared.VirtualMachinePreferences{
                                    CommitmentPlan: shared.VirtualMachinePreferencesCommitmentPlanEnumCommitmentPlanOneYear.ToPointer(),
                                    ComputeEnginePreferences: &shared.ComputeEnginePreferences{
                                        LicenseType: shared.ComputeEnginePreferencesLicenseTypeEnumLicenseTypeDefault.ToPointer(),
                                        MachinePreferences: &shared.MachinePreferences{
                                            AllowedMachineSeries: []shared.MachineSeries{
                                                shared.MachineSeries{
                                                    Code: sdk.String("provident"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("laudantium"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("nam"),
                                                },
                                                shared.MachineSeries{
                                                    Code: sdk.String("nemo"),
                                                },
                                            },
                                        },
                                        PersistentDiskType: shared.ComputeEnginePreferencesPersistentDiskTypeEnumPersistentDiskTypeStandard.ToPointer(),
                                    },
                                    RegionPreferences: &shared.RegionPreferences{
                                        PreferredRegions: []string{
                                            "minima",
                                            "tempora",
                                        },
                                    },
                                    SizingOptimizationStrategy: shared.VirtualMachinePreferencesSizingOptimizationStrategyEnumSizingOptimizationStrategyUnspecified.ToPointer(),
                                },
                                MonthlyCostCompute: &shared.Money{
                                    CurrencyCode: sdk.String("corrupti"),
                                    Nanos: sdk.Int(40874),
                                    Units: sdk.String("fugiat"),
                                },
                                MonthlyCostNetworkEgress: &shared.Money{
                                    CurrencyCode: sdk.String("numquam"),
                                    Nanos: sdk.Int(39202),
                                    Units: sdk.String("cum"),
                                },
                                MonthlyCostOsLicense: &shared.Money{
                                    CurrencyCode: sdk.String("nobis"),
                                    Nanos: sdk.Int(628314),
                                    Units: sdk.String("porro"),
                                },
                                MonthlyCostOther: &shared.Money{
                                    CurrencyCode: sdk.String("impedit"),
                                    Nanos: sdk.Int(394724),
                                    Units: sdk.String("cumque"),
                                },
                                MonthlyCostStorage: &shared.Money{
                                    CurrencyCode: sdk.String("soluta"),
                                    Nanos: sdk.Int(856568),
                                    Units: sdk.String("laboriosam"),
                                },
                                MonthlyCostTotal: &shared.Money{
                                    CurrencyCode: sdk.String("nam"),
                                    Nanos: sdk.Int(315387),
                                    Units: sdk.String("maiores"),
                                },
                                PreferredRegion: sdk.String("consectetur"),
                                PricingTrack: sdk.String("necessitatibus"),
                                TopPriority: sdk.String("maxime"),
                            },
                        },
                    },
                },
            },
            Type: shared.ReportTypeEnumTotalCostOfOwnership.ToPointer(),
        },
        AccessToken: sdk.String("voluptatem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("repellat"),
        Parent: "omnis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        ReportID: sdk.String("vel"),
        RequestID: sdk.String("cum"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.MigrationcenterProjectsLocationsReportConfigsReportsCreateSecurity{
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

## MigrationcenterProjectsLocationsReportConfigsReportsList

Lists Reports in a given ReportConfig.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsReportConfigsReportsList(ctx, operations.MigrationcenterProjectsLocationsReportConfigsReportsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("voluptatum"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("nobis"),
        OrderBy: sdk.String("tempora"),
        PageSize: sdk.Int64(452653),
        PageToken: sdk.String("eius"),
        Parent: "expedita",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("possimus"),
        View: operations.MigrationcenterProjectsLocationsReportConfigsReportsListViewEnumReportViewUnspecified.ToPointer(),
    }, operations.MigrationcenterProjectsLocationsReportConfigsReportsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsSourcesCreate

Creates a new source in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesCreate(ctx, operations.MigrationcenterProjectsLocationsSourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SourceInput: &shared.SourceInput{
            Description: sdk.String("repudiandae"),
            DisplayName: sdk.String("corporis"),
            IsManaged: sdk.Bool(false),
            Priority: sdk.Int(411626),
            Type: shared.SourceTypeEnumSourceTypeUnknown.ToPointer(),
        },
        AccessToken: sdk.String("aliquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("autem"),
        Parent: "nesciunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        RequestID: sdk.String("animi"),
        SourceID: sdk.String("provident"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.MigrationcenterProjectsLocationsSourcesCreateSecurity{
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

## MigrationcenterProjectsLocationsSourcesDelete

Deletes a source.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesDelete(ctx, operations.MigrationcenterProjectsLocationsSourcesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("tempore"),
        Name: "Denise Hoppe",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        RequestID: sdk.String("laboriosam"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ab"),
    }, operations.MigrationcenterProjectsLocationsSourcesDeleteSecurity{
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

## MigrationcenterProjectsLocationsSourcesErrorFramesGet

Gets the details of an error frame.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesErrorFramesGet(ctx, operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quisquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("qui"),
        Key: sdk.String("consequuntur"),
        Name: "Melody Dickinson",
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("similique"),
        View: operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetViewEnumReportViewStandard.ToPointer(),
    }, operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ErrorFrame != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsSourcesErrorFramesList

Lists all error frames in a given source and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesErrorFramesList(ctx, operations.MigrationcenterProjectsLocationsSourcesErrorFramesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("asperiores"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("id"),
        PageSize: sdk.Int64(542017),
        PageToken: sdk.String("quibusdam"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("aliquam"),
        View: operations.MigrationcenterProjectsLocationsSourcesErrorFramesListViewEnumErrorFrameViewBasic.ToPointer(),
    }, operations.MigrationcenterProjectsLocationsSourcesErrorFramesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListErrorFramesResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsSourcesList

Lists all the sources in a given project and location.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesList(ctx, operations.MigrationcenterProjectsLocationsSourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("earum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("alias"),
        Filter: sdk.String("doloremque"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("perspiciatis"),
        OrderBy: sdk.String("quam"),
        PageSize: sdk.Int64(541009),
        PageToken: sdk.String("officia"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.MigrationcenterProjectsLocationsSourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourcesResponse != nil {
        // handle response
    }
}
```

## MigrationcenterProjectsLocationsSourcesPatch

Updates the parameters of a source.

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
    res, err := s.Projects.MigrationcenterProjectsLocationsSourcesPatch(ctx, operations.MigrationcenterProjectsLocationsSourcesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SourceInput: &shared.SourceInput{
            Description: sdk.String("quod"),
            DisplayName: sdk.String("a"),
            IsManaged: sdk.Bool(false),
            Priority: sdk.Int(185313),
            Type: shared.SourceTypeEnumSourceTypeUnknown.ToPointer(),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("voluptate"),
        Name: "Bernadette Brown",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptate"),
        RequestID: sdk.String("inventore"),
        UpdateMask: sdk.String("facere"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.MigrationcenterProjectsLocationsSourcesPatchSecurity{
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
