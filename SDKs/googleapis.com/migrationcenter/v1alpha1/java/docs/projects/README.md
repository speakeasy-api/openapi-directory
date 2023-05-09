# projects

### Available Operations

* [migrationcenterProjectsLocationsAssetsAggregateValues](#migrationcenterprojectslocationsassetsaggregatevalues) - Aggregates the requested fields based on provided function.
* [migrationcenterProjectsLocationsAssetsBatchDelete](#migrationcenterprojectslocationsassetsbatchdelete) - Deletes list of Assets.
* [migrationcenterProjectsLocationsAssetsBatchUpdate](#migrationcenterprojectslocationsassetsbatchupdate) - Updates the parameters of a list of assets.
* [migrationcenterProjectsLocationsAssetsList](#migrationcenterprojectslocationsassetslist) - Lists all the assets in a given project and location.
* [migrationcenterProjectsLocationsAssetsReportAssetFrames](#migrationcenterprojectslocationsassetsreportassetframes) - Reports a set of frames.
* [migrationcenterProjectsLocationsGroupsAddAssets](#migrationcenterprojectslocationsgroupsaddassets) - Adds assets to a group.
* [migrationcenterProjectsLocationsGroupsCreate](#migrationcenterprojectslocationsgroupscreate) - Creates a new group in a given project and location.
* [migrationcenterProjectsLocationsGroupsList](#migrationcenterprojectslocationsgroupslist) - Lists all groups in a given project and location.
* [migrationcenterProjectsLocationsGroupsRemoveAssets](#migrationcenterprojectslocationsgroupsremoveassets) - Removes assets from a group.
* [migrationcenterProjectsLocationsImportJobsCreate](#migrationcenterprojectslocationsimportjobscreate) - Creates an import job.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesCreate](#migrationcenterprojectslocationsimportjobsimportdatafilescreate) - Creates an import data file.
* [migrationcenterProjectsLocationsImportJobsImportDataFilesList](#migrationcenterprojectslocationsimportjobsimportdatafileslist) - List import data files.
* [migrationcenterProjectsLocationsImportJobsList](#migrationcenterprojectslocationsimportjobslist) - Lists all import jobs.
* [migrationcenterProjectsLocationsImportJobsRun](#migrationcenterprojectslocationsimportjobsrun) - Runs an import job.
* [migrationcenterProjectsLocationsImportJobsValidate](#migrationcenterprojectslocationsimportjobsvalidate) - Validates an import job.
* [migrationcenterProjectsLocationsList](#migrationcenterprojectslocationslist) - Lists information about the supported locations for this service.
* [migrationcenterProjectsLocationsOperationsCancel](#migrationcenterprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [migrationcenterProjectsLocationsOperationsList](#migrationcenterprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [migrationcenterProjectsLocationsPreferenceSetsCreate](#migrationcenterprojectslocationspreferencesetscreate) - Creates a new preference set in a given project and location.
* [migrationcenterProjectsLocationsPreferenceSetsList](#migrationcenterprojectslocationspreferencesetslist) - Lists all the preference sets in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsCreate](#migrationcenterprojectslocationsreportconfigscreate) - Creates a report configuration.
* [migrationcenterProjectsLocationsReportConfigsList](#migrationcenterprojectslocationsreportconfigslist) - Lists ReportConfigs in a given project and location.
* [migrationcenterProjectsLocationsReportConfigsReportsCreate](#migrationcenterprojectslocationsreportconfigsreportscreate) - Creates a report.
* [migrationcenterProjectsLocationsReportConfigsReportsList](#migrationcenterprojectslocationsreportconfigsreportslist) - Lists Reports in a given ReportConfig.
* [migrationcenterProjectsLocationsSourcesCreate](#migrationcenterprojectslocationssourcescreate) - Creates a new source in a given project and location.
* [migrationcenterProjectsLocationsSourcesDelete](#migrationcenterprojectslocationssourcesdelete) - Deletes a source.
* [migrationcenterProjectsLocationsSourcesErrorFramesGet](#migrationcenterprojectslocationssourceserrorframesget) - Gets the details of an error frame.
* [migrationcenterProjectsLocationsSourcesErrorFramesList](#migrationcenterprojectslocationssourceserrorframeslist) - Lists all error frames in a given source and location.
* [migrationcenterProjectsLocationsSourcesList](#migrationcenterprojectslocationssourceslist) - Lists all the sources in a given project and location.
* [migrationcenterProjectsLocationsSourcesPatch](#migrationcenterprojectslocationssourcespatch) - Updates the parameters of a source.

## migrationcenterProjectsLocationsAssetsAggregateValues

Aggregates the requested fields based on provided function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;
import org.openapis.openapi.models.shared.AggregateAssetsValuesRequest;
import org.openapis.openapi.models.shared.Aggregation;
import org.openapis.openapi.models.shared.AggregationHistogram;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsAggregateValuesRequest req = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                aggregateAssetsValuesRequest = new AggregateAssetsValuesRequest() {{
                    aggregations = new org.openapis.openapi.models.shared.Aggregation[]{{
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("ipsa", "reiciendis");
                            }};
                            field = "est";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("laborum", "dolores");
                                put("dolorem", "corporis");
                                put("explicabo", "nobis");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(6078.31),
                                    add(3637.11),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("excepturi", "accusantium");
                                put("iure", "culpa");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("sapiente", "architecto");
                                put("mollitia", "dolorem");
                                put("culpa", "consequuntur");
                                put("repellat", "mollitia");
                            }};
                            field = "occaecati";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("commodi", "quam");
                                put("molestiae", "velit");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(1589.69),
                                    add(3380.07),
                                    add(1103.75),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("animi", "enim");
                                put("odit", "quo");
                                put("sequi", "tenetur");
                            }};
                        }}),
                        add(new Aggregation() {{
                            count = new java.util.HashMap<String, Object>() {{
                                put("id", "possimus");
                                put("aut", "quasi");
                            }};
                            field = "error";
                            frequency = new java.util.HashMap<String, Object>() {{
                                put("laborum", "quasi");
                                put("reiciendis", "voluptatibus");
                                put("vero", "nihil");
                                put("praesentium", "voluptatibus");
                            }};
                            histogram = new AggregationHistogram() {{
                                lowerBounds = new Double[]{{
                                    add(6048.46),
                                }};
                            }};
                            sum = new java.util.HashMap<String, Object>() {{
                                put("cum", "perferendis");
                                put("doloremque", "reprehenderit");
                            }};
                        }}),
                    }};
                    filter = "ut";
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "dolore";
                key = "iusto";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            MigrationcenterProjectsLocationsAssetsAggregateValuesResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsAggregateValues(req, new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity("commodi", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.aggregateAssetsValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsAssetsBatchDelete

Deletes list of Assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchDeleteRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchDeleteResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteAssetsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsBatchDeleteRequest req = new MigrationcenterProjectsLocationsAssetsBatchDeleteRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteAssetsRequest = new BatchDeleteAssetsRequest() {{
                    allowMissing = false;
                    names = new String[]{{
                        add("molestias"),
                        add("excepturi"),
                        add("pariatur"),
                    }};
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "voluptates";
                key = "quasi";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            MigrationcenterProjectsLocationsAssetsBatchDeleteResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsBatchDelete(req, new MigrationcenterProjectsLocationsAssetsBatchDeleteSecurity("incidunt", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsAssetsBatchUpdate

Updates the parameters of a list of assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchUpdateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchUpdateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssetInput;
import org.openapis.openapi.models.shared.AssetPerformanceData;
import org.openapis.openapi.models.shared.AwsEc2PlatformDetails;
import org.openapis.openapi.models.shared.AzureVmPlatformDetails;
import org.openapis.openapi.models.shared.BatchUpdateAssetsRequestInput;
import org.openapis.openapi.models.shared.BiosDetails;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregation;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregationCPU;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregationDisk;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregationMemory;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregationNetwork;
import org.openapis.openapi.models.shared.DailyResourceUsageAggregationStats;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateTime;
import org.openapis.openapi.models.shared.DiskEntry;
import org.openapis.openapi.models.shared.DiskEntryList;
import org.openapis.openapi.models.shared.DiskPartition;
import org.openapis.openapi.models.shared.DiskPartitionList;
import org.openapis.openapi.models.shared.FstabEntry;
import org.openapis.openapi.models.shared.FstabEntryList;
import org.openapis.openapi.models.shared.GenericPlatformDetails;
import org.openapis.openapi.models.shared.GuestConfigDetails;
import org.openapis.openapi.models.shared.GuestInstalledApplication;
import org.openapis.openapi.models.shared.GuestInstalledApplicationList;
import org.openapis.openapi.models.shared.GuestOsDetails;
import org.openapis.openapi.models.shared.GuestRuntimeDetails;
import org.openapis.openapi.models.shared.HostsEntry;
import org.openapis.openapi.models.shared.HostsEntryList;
import org.openapis.openapi.models.shared.NetworkAdapterDetails;
import org.openapis.openapi.models.shared.NetworkAdapterList;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.NetworkAddressAssignmentEnum;
import org.openapis.openapi.models.shared.NetworkAddressList;
import org.openapis.openapi.models.shared.NetworkConnection;
import org.openapis.openapi.models.shared.NetworkConnectionList;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.NfsExportList;
import org.openapis.openapi.models.shared.OpenFileDetails;
import org.openapis.openapi.models.shared.OpenFileList;
import org.openapis.openapi.models.shared.PhysicalPlatformDetails;
import org.openapis.openapi.models.shared.PlatformDetails;
import org.openapis.openapi.models.shared.RunningProcess;
import org.openapis.openapi.models.shared.RunningProcessList;
import org.openapis.openapi.models.shared.RunningService;
import org.openapis.openapi.models.shared.RunningServiceList;
import org.openapis.openapi.models.shared.RuntimeNetworkInfo;
import org.openapis.openapi.models.shared.Selinux;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.UpdateAssetRequestInput;
import org.openapis.openapi.models.shared.VirtualMachineArchitectureDetails;
import org.openapis.openapi.models.shared.VirtualMachineArchitectureDetailsHyperthreadingEnum;
import org.openapis.openapi.models.shared.VirtualMachineDetails;
import org.openapis.openapi.models.shared.VirtualMachineDetailsOsFamilyEnum;
import org.openapis.openapi.models.shared.VirtualMachineDiskDetails;
import org.openapis.openapi.models.shared.VirtualMachineNetworkDetails;
import org.openapis.openapi.models.shared.VmwareDiskConfig;
import org.openapis.openapi.models.shared.VmwareDiskConfigBackingTypeEnum;
import org.openapis.openapi.models.shared.VmwarePlatformDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsBatchUpdateRequest req = new MigrationcenterProjectsLocationsAssetsBatchUpdateRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                batchUpdateAssetsRequestInput = new BatchUpdateAssetsRequestInput() {{
                    requests = new org.openapis.openapi.models.shared.UpdateAssetRequestInput[]{{
                        add(new UpdateAssetRequestInput() {{
                            asset = new AssetInput() {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("deserunt", "distinctio");
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("labore", "modi");
                                    put("qui", "aliquid");
                                    put("cupiditate", "quos");
                                    put("perferendis", "magni");
                                }};
                                performanceData = new AssetPerformanceData() {{
                                    dailyResourceUsageAggregations = new org.openapis.openapi.models.shared.DailyResourceUsageAggregation[]{{
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 3698.08;
                                                    median = 46.95;
                                                    ninteyFifthPercentile = 1464.41;
                                                    peak = 6778.17;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 569618;
                                                month = 270008;
                                                year = 703737;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 7351.94;
                                                    median = 2884.76;
                                                    ninteyFifthPercentile = 9621.89;
                                                    peak = 4332.88;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 2487.53;
                                                    median = 7561.07;
                                                    ninteyFifthPercentile = 5761.57;
                                                    peak = 3960.98;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 5920.42;
                                                    median = 8960.39;
                                                    ninteyFifthPercentile = 5722.52;
                                                    peak = 6389.21;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 2230.81;
                                                    median = 8915.55;
                                                    ninteyFifthPercentile = 9527.49;
                                                    peak = 6800.56;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 4471.25;
                                                    median = 4491.98;
                                                    ninteyFifthPercentile = 8464.09;
                                                    peak = 9785.71;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 699479;
                                                month = 116202;
                                                year = 297437;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 7670.24;
                                                    median = 8137.98;
                                                    ninteyFifthPercentile = 4118.2;
                                                    peak = 3965.06;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 6754.39;
                                                    median = 8811.04;
                                                    ninteyFifthPercentile = 2497.96;
                                                    peak = 5812.73;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 3132.18;
                                                    median = 8817.36;
                                                    ninteyFifthPercentile = 9654.17;
                                                    peak = 6925.32;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 5884.65;
                                                    median = 7252.55;
                                                    ninteyFifthPercentile = 6596.69;
                                                    peak = 5013.24;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 5332.06;
                                                    median = 9560.84;
                                                    ninteyFifthPercentile = 2305.33;
                                                    peak = 6439.9;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 394869;
                                                month = 423855;
                                                year = 618809;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 6063.93;
                                                    median = 4748.67;
                                                    ninteyFifthPercentile = 191.93;
                                                    peak = 4701.32;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 3015.75;
                                                    median = 7160.75;
                                                    ninteyFifthPercentile = 6601.74;
                                                    peak = 2879.91;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 2900.77;
                                                    median = 3834.62;
                                                    ninteyFifthPercentile = 6180.16;
                                                    peak = 7491.7;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 4287.69;
                                                    median = 8784.53;
                                                    ninteyFifthPercentile = 1354.74;
                                                    peak = 1028.63;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 2982.82;
                                                    median = 923.73;
                                                    ninteyFifthPercentile = 5699.65;
                                                    peak = 3540.47;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 590873;
                                                month = 551816;
                                                year = 574325;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 336.25;
                                                    median = 6532.01;
                                                    ninteyFifthPercentile = 9689.62;
                                                    peak = 6521.03;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 3209.97;
                                                    median = 4314.18;
                                                    ninteyFifthPercentile = 2212.62;
                                                    peak = 8965.47;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 1412.64;
                                                    median = 3675.62;
                                                    ninteyFifthPercentile = 972.6;
                                                    peak = 4358.65;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 9840.43;
                                                    median = 8919.24;
                                                    ninteyFifthPercentile = 2603.41;
                                                    peak = 8061.94;
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                virtualMachineDetails = new VirtualMachineDetails() {{
                                    coreCount = 537023;
                                    createTime = "facilis";
                                    guestOs = new GuestOsDetails() {{
                                        config = new GuestConfigDetails() {{
                                            fstab = new FstabEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                    add(new FstabEntry() {{
                                                        file = "architecto";
                                                        freq = 99569;
                                                        mntops = "repudiandae";
                                                        passno = 352312;
                                                        spec = "expedita";
                                                        vfstype = "nihil";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "repellat";
                                                        freq = 841140;
                                                        mntops = "sed";
                                                        passno = 904648;
                                                        spec = "pariatur";
                                                        vfstype = "accusantium";
                                                    }}),
                                                }};
                                            }};
                                            hosts = new HostsEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("natus"),
                                                            add("magni"),
                                                            add("sunt"),
                                                        }};
                                                        ip = "quo";
                                                    }}),
                                                }};
                                            }};
                                            issue = "illum";
                                            nfsExports = new NfsExportList() {{
                                                entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                    add(new NfsExport() {{
                                                        exportDirectory = "maxime";
                                                        hosts = new String[]{{
                                                            add("excepturi"),
                                                            add("odit"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "ea";
                                                        hosts = new String[]{{
                                                            add("ab"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "maiores";
                                                        hosts = new String[]{{
                                                            add("ipsam"),
                                                            add("voluptate"),
                                                            add("autem"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "nam";
                                                        hosts = new String[]{{
                                                            add("pariatur"),
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                            selinux = new Selinux() {{
                                                enabled = false;
                                                mode = "nemo";
                                            }};
                                        }};
                                        runtime = new GuestRuntimeDetails() {{
                                            domain = "voluptatibus";
                                            installedApps = new GuestInstalledApplicationList() {{
                                                entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Vincent Anderson";
                                                        path = "hic";
                                                        time = "libero";
                                                        vendor = "nobis";
                                                        version = "dolores";
                                                    }}),
                                                }};
                                            }};
                                            lastUptime = new Date() {{
                                                day = 339404;
                                                month = 521037;
                                                year = 489549;
                                            }};
                                            machineName = "eaque";
                                            networkInfo = new RuntimeNetworkInfo() {{
                                                connections = new NetworkConnectionList() {{
                                                    entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "nesciunt";
                                                            localPort = 179490;
                                                            pid = "perferendis";
                                                            processName = "dolores";
                                                            protocol = "minus";
                                                            remoteIpAddress = "quam";
                                                            remotePort = 223924;
                                                            state = "vero";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "nostrum";
                                                            localPort = 944120;
                                                            pid = "recusandae";
                                                            processName = "omnis";
                                                            protocol = "facilis";
                                                            remoteIpAddress = "perspiciatis";
                                                            remotePort = 31838;
                                                            state = "porro";
                                                        }}),
                                                    }};
                                                }};
                                                netstat = "consequuntur";
                                                netstatTime = new DateTime() {{
                                                    day = 500026;
                                                    hours = 621479;
                                                    minutes = 50370;
                                                    month = 577229;
                                                    nanos = 699098;
                                                    seconds = 237893;
                                                    timeZone = new TimeZone() {{
                                                        id = "fe49a8d9-cbf4-4863-b323-f9b77f3a4100";
                                                        version = "iure";
                                                    }};
                                                    utcOffset = "odio";
                                                    year = 311796;
                                                }};
                                            }};
                                            openFileList = new OpenFileList() {{
                                                entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                    add(new OpenFileDetails() {{
                                                        command = "quidem";
                                                        filePath = "voluptatibus";
                                                        fileType = "voluptas";
                                                        user = "natus";
                                                    }}),
                                                    add(new OpenFileDetails() {{
                                                        command = "eos";
                                                        filePath = "atque";
                                                        fileType = "sit";
                                                        user = "fugiat";
                                                    }}),
                                                    add(new OpenFileDetails() {{
                                                        command = "ab";
                                                        filePath = "soluta";
                                                        fileType = "dolorum";
                                                        user = "iusto";
                                                    }}),
                                                    add(new OpenFileDetails() {{
                                                        command = "voluptate";
                                                        filePath = "dolorum";
                                                        fileType = "deleniti";
                                                        user = "omnis";
                                                    }}),
                                                }};
                                            }};
                                            processes = new RunningProcessList() {{
                                                processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("asperiores", "nihil");
                                                            put("ipsum", "voluptate");
                                                            put("id", "saepe");
                                                        }};
                                                        cmdline = "eius";
                                                        exePath = "aspernatur";
                                                        pid = "perferendis";
                                                        user = "amet";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("accusamus", "ad");
                                                            put("saepe", "suscipit");
                                                            put("deserunt", "provident");
                                                            put("minima", "repellendus");
                                                        }};
                                                        cmdline = "totam";
                                                        exePath = "similique";
                                                        pid = "alias";
                                                        user = "at";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "vel");
                                                            put("quod", "officiis");
                                                        }};
                                                        cmdline = "qui";
                                                        exePath = "dolorum";
                                                        pid = "a";
                                                        user = "esse";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("iusto", "ipsum");
                                                            put("quisquam", "tenetur");
                                                            put("amet", "tempore");
                                                        }};
                                                        cmdline = "accusamus";
                                                        exePath = "numquam";
                                                        pid = "enim";
                                                        user = "dolorem";
                                                    }}),
                                                }};
                                            }};
                                            services = new RunningServiceList() {{
                                                services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                    add(new RunningService() {{
                                                        cmdline = "totam";
                                                        exePath = "nihil";
                                                        name = "Mamie Durgan";
                                                        pid = "libero";
                                                        startMode = "voluptas";
                                                        state = "deserunt";
                                                        status = "quam";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "ipsum";
                                                        exePath = "incidunt";
                                                        name = "Shelly Schoen";
                                                        pid = "dicta";
                                                        startMode = "laborum";
                                                        state = "totam";
                                                        status = "incidunt";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "aspernatur";
                                                        exePath = "dolores";
                                                        name = "Cesar Hyatt";
                                                        pid = "temporibus";
                                                        startMode = "qui";
                                                        state = "neque";
                                                        status = "fugit";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "magni";
                                                        exePath = "odio";
                                                        name = "Marion Reichert DDS";
                                                        pid = "soluta";
                                                        startMode = "nobis";
                                                        state = "et";
                                                        status = "saepe";
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                    memoryMb = 217450;
                                    osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_UNKNOWN;
                                    osName = "nobis";
                                    osVersion = "quos";
                                    platform = new PlatformDetails() {{
                                        awsEc2Details = new AwsEc2PlatformDetails() {{
                                            location = "tempore";
                                            machineTypeLabel = "cupiditate";
                                        }};
                                        azureVmDetails = new AzureVmPlatformDetails() {{
                                            location = "aperiam";
                                            machineTypeLabel = "delectus";
                                            provisioningState = "dolorem";
                                        }};
                                        genericDetails = new GenericPlatformDetails() {{
                                            location = "dolore";
                                        }};
                                        physicalDetails = new PhysicalPlatformDetails() {{
                                            location = "labore";
                                        }};
                                        vmwareDetails = new VmwarePlatformDetails() {{
                                            esxVersion = "adipisci";
                                            osid = "dolorum";
                                            vcenterVersion = "architecto";
                                        }};
                                    }};
                                    powerState = "quae";
                                    vcenterFolder = "aut";
                                    vcenterUrl = "quas";
                                    vcenterVmId = "itaque";
                                    vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                        bios = new BiosDetails() {{
                                            biosManufacturer = "consequatur";
                                            biosName = "est";
                                            biosReleaseDate = "repellendus";
                                            biosVersion = "porro";
                                            smbiosUuid = "doloribus";
                                        }};
                                        cpuArchitecture = "ut";
                                        cpuManufacturer = "facilis";
                                        cpuName = "cupiditate";
                                        cpuSocketCount = 181631;
                                        cpuThreadCount = 63955;
                                        firmware = "laudantium";
                                        hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_DISABLED;
                                        vendor = "occaecati";
                                    }};
                                    vmDisks = new VirtualMachineDiskDetails() {{
                                        disks = new DiskEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                                add(new DiskEntry() {{
                                                    diskLabel = "quisquam";
                                                    diskLabelType = "vero";
                                                    hwAddress = "omnis";
                                                    interfaceType = "quis";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "delectus";
                                                                fileSystem = "voluptate";
                                                                freeBytes = "consectetur";
                                                                mountPoint = "vero";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "tenetur";
                                                                uuid = "7fbc7abd-74dd-439c-8f5d-2cff7c70a456";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "aspernatur";
                                                    totalCapacityBytes = "vel";
                                                    totalFreeBytes = "possimus";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_FLAT_V2;
                                                        rdmCompatibilityMode = "ratione";
                                                        shared = false;
                                                        vmdkDiskMode = "ex";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "laudantium";
                                                    diskLabelType = "dicta";
                                                    hwAddress = "dolor";
                                                    interfaceType = "maiores";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "ex";
                                                                fileSystem = "nulla";
                                                                freeBytes = "excepturi";
                                                                mountPoint = "voluptatibus";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "nostrum";
                                                                uuid = "fce6c556-146c-43e2-90fb-008c42e141aa";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "placeat";
                                                    totalCapacityBytes = "velit";
                                                    totalFreeBytes = "eum";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_PMEM;
                                                        rdmCompatibilityMode = "nobis";
                                                        shared = false;
                                                        vmdkDiskMode = "quas";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "assumenda";
                                                    diskLabelType = "nulla";
                                                    hwAddress = "voluptas";
                                                    interfaceType = "libero";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "tempora";
                                                                fileSystem = "numquam";
                                                                freeBytes = "explicabo";
                                                                mountPoint = "provident";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "ipsa";
                                                                uuid = "7474778a-7bd4-466d-a8c1-0ab3cdca4251";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "cupiditate";
                                                    totalCapacityBytes = "consequatur";
                                                    totalFreeBytes = "tempora";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_SESPARSE_V2;
                                                        rdmCompatibilityMode = "ipsam";
                                                        shared = false;
                                                        vmdkDiskMode = "aspernatur";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "sequi";
                                                    diskLabelType = "quo";
                                                    hwAddress = "esse";
                                                    interfaceType = "recusandae";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "distinctio";
                                                                fileSystem = "quod";
                                                                freeBytes = "dignissimos";
                                                                mountPoint = "inventore";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "nihil";
                                                                uuid = "8e4796f2-a70c-4688-a82a-a482562f222e";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "occaecati";
                                                    totalCapacityBytes = "atque";
                                                    totalFreeBytes = "et";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_RDM_V1;
                                                        rdmCompatibilityMode = "eveniet";
                                                        shared = false;
                                                        vmdkDiskMode = "accusamus";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        hddTotalCapacityBytes = "veritatis";
                                        hddTotalFreeBytes = "esse";
                                        lsblkJson = "quod";
                                    }};
                                    vmName = "nam";
                                    vmNetwork = new VirtualMachineNetworkDetails() {{
                                        defaultGw = "vero";
                                        networkAdapters = new NetworkAdapterList() {{
                                            networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "quasi";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "harum";
                                                                fqdn = "molestiae";
                                                                ipAddress = "rerum";
                                                                subnetMask = "occaecati";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "distinctio";
                                                                fqdn = "eligendi";
                                                                ipAddress = "sit";
                                                                subnetMask = "culpa";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "adipisci";
                                                                fqdn = "cumque";
                                                                ipAddress = "consequuntur";
                                                                subnetMask = "consequatur";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "quaerat";
                                                                fqdn = "sapiente";
                                                                ipAddress = "consectetur";
                                                                subnetMask = "esse";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "blanditiis";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "provident";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "quas";
                                                                fqdn = "esse";
                                                                ipAddress = "quasi";
                                                                subnetMask = "a";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "sint";
                                                                fqdn = "pariatur";
                                                                ipAddress = "possimus";
                                                                subnetMask = "quia";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "asperiores";
                                                                fqdn = "facere";
                                                                ipAddress = "veritatis";
                                                                subnetMask = "consequuntur";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "similique";
                                                                fqdn = "culpa";
                                                                ipAddress = "aliquid";
                                                                subnetMask = "tenetur";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "quae";
                                                }}),
                                            }};
                                        }};
                                        primaryIpAddress = "earum";
                                        primaryMacAddress = "vel";
                                        publicIpAddress = "in";
                                    }};
                                    vmUuid = "eius";
                                }};
                            }};
                            requestId = "libero";
                            updateMask = "illum";
                        }}),
                        add(new UpdateAssetRequestInput() {{
                            asset = new AssetInput() {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("accusantium", "aliquam");
                                    put("sapiente", "dicta");
                                    put("ullam", "reprehenderit");
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("nisi", "aut");
                                    put("voluptatum", "qui");
                                }};
                                performanceData = new AssetPerformanceData() {{
                                    dailyResourceUsageAggregations = new org.openapis.openapi.models.shared.DailyResourceUsageAggregation[]{{
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 4012.59;
                                                    median = 5362.75;
                                                    ninteyFifthPercentile = 9292.92;
                                                    peak = 6802.7;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 99615;
                                                month = 609178;
                                                year = 945302;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 984.78;
                                                    median = 8694.89;
                                                    ninteyFifthPercentile = 920.27;
                                                    peak = 4541.62;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 559.65;
                                                    median = 3267.01;
                                                    ninteyFifthPercentile = 865.32;
                                                    peak = 2327.44;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 2371.73;
                                                    median = 6144.65;
                                                    ninteyFifthPercentile = 8395.13;
                                                    peak = 330.74;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 5223.71;
                                                    median = 156.06;
                                                    ninteyFifthPercentile = 5130.75;
                                                    peak = 4287.96;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 6498.32;
                                                    median = 680.74;
                                                    ninteyFifthPercentile = 5445.91;
                                                    peak = 2519.41;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 32465;
                                                month = 221161;
                                                year = 580152;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 2531.91;
                                                    median = 7710.89;
                                                    ninteyFifthPercentile = 1310.55;
                                                    peak = 3762.26;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 120.36;
                                                    median = 4910.25;
                                                    ninteyFifthPercentile = 1154.84;
                                                    peak = 9816.4;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 6184.8;
                                                    median = 2446.51;
                                                    ninteyFifthPercentile = 9742.57;
                                                    peak = 3743.23;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 9903.45;
                                                    median = 456.59;
                                                    ninteyFifthPercentile = 4090.54;
                                                    peak = 3100.67;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 1629.54;
                                                    median = 8315.2;
                                                    ninteyFifthPercentile = 6387.62;
                                                    peak = 8070.23;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 490305;
                                                month = 640024;
                                                year = 989410;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 3681.02;
                                                    median = 653.04;
                                                    ninteyFifthPercentile = 3127.53;
                                                    peak = 7832.35;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 8018.36;
                                                    median = 2883.98;
                                                    ninteyFifthPercentile = 704.47;
                                                    peak = 2414.18;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 6835.73;
                                                    median = 6625.05;
                                                    ninteyFifthPercentile = 3807.29;
                                                    peak = 2460.63;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 6339.31;
                                                    median = 6658.59;
                                                    ninteyFifthPercentile = 9268.8;
                                                    peak = 5173.09;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 8539.4;
                                                    median = 4240.89;
                                                    ninteyFifthPercentile = 4976.78;
                                                    peak = 5546.88;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 427834;
                                                month = 287051;
                                                year = 822560;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 7065.75;
                                                    median = 7382.27;
                                                    ninteyFifthPercentile = 4148.57;
                                                    peak = 4471.44;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 3605.45;
                                                    median = 9689.04;
                                                    ninteyFifthPercentile = 8286.57;
                                                    peak = 3631.61;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 9249.67;
                                                    median = 3975.33;
                                                    ninteyFifthPercentile = 460.07;
                                                    peak = 7386.83;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 2326.27;
                                                    median = 4490.83;
                                                    ninteyFifthPercentile = 3485.19;
                                                    peak = 9372.85;
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                virtualMachineDetails = new VirtualMachineDetails() {{
                                    coreCount = 814967;
                                    createTime = "numquam";
                                    guestOs = new GuestOsDetails() {{
                                        config = new GuestConfigDetails() {{
                                            fstab = new FstabEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                    add(new FstabEntry() {{
                                                        file = "suscipit";
                                                        freq = 968972;
                                                        mntops = "quidem";
                                                        passno = 904949;
                                                        spec = "necessitatibus";
                                                        vfstype = "dolore";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "sunt";
                                                        freq = 992012;
                                                        mntops = "adipisci";
                                                        passno = 249420;
                                                        spec = "amet";
                                                        vfstype = "beatae";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "dignissimos";
                                                        freq = 950953;
                                                        mntops = "debitis";
                                                        passno = 233420;
                                                        spec = "corporis";
                                                        vfstype = "harum";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "laboriosam";
                                                        freq = 58356;
                                                        mntops = "voluptates";
                                                        passno = 730709;
                                                        spec = "vitae";
                                                        vfstype = "accusamus";
                                                    }}),
                                                }};
                                            }};
                                            hosts = new HostsEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("aspernatur"),
                                                            add("voluptas"),
                                                        }};
                                                        ip = "voluptas";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("minima"),
                                                            add("nobis"),
                                                        }};
                                                        ip = "dolorum";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("minus"),
                                                        }};
                                                        ip = "dolores";
                                                    }}),
                                                }};
                                            }};
                                            issue = "blanditiis";
                                            nfsExports = new NfsExportList() {{
                                                entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                    add(new NfsExport() {{
                                                        exportDirectory = "dolore";
                                                        hosts = new String[]{{
                                                            add("officiis"),
                                                            add("temporibus"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "ullam";
                                                        hosts = new String[]{{
                                                            add("cum"),
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                            selinux = new Selinux() {{
                                                enabled = false;
                                                mode = "blanditiis";
                                            }};
                                        }};
                                        runtime = new GuestRuntimeDetails() {{
                                            domain = "quas";
                                            installedApps = new GuestInstalledApplicationList() {{
                                                entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Molly Lowe";
                                                        path = "hic";
                                                        time = "exercitationem";
                                                        vendor = "nobis";
                                                        version = "sit";
                                                    }}),
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Louis Wisoky";
                                                        path = "facilis";
                                                        time = "voluptate";
                                                        vendor = "expedita";
                                                        version = "ab";
                                                    }}),
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Micheal Osinski";
                                                        path = "commodi";
                                                        time = "quidem";
                                                        vendor = "explicabo";
                                                        version = "voluptas";
                                                    }}),
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Joe Hoppe";
                                                        path = "illo";
                                                        time = "reiciendis";
                                                        vendor = "perferendis";
                                                        version = "corrupti";
                                                    }}),
                                                }};
                                            }};
                                            lastUptime = new Date() {{
                                                day = 979574;
                                                month = 274823;
                                                year = 148478;
                                            }};
                                            machineName = "provident";
                                            networkInfo = new RuntimeNetworkInfo() {{
                                                connections = new NetworkConnectionList() {{
                                                    entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "necessitatibus";
                                                            localPort = 215529;
                                                            pid = "ea";
                                                            processName = "occaecati";
                                                            protocol = "quos";
                                                            remoteIpAddress = "voluptatibus";
                                                            remotePort = 271653;
                                                            state = "tempora";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "voluptate";
                                                            localPort = 970076;
                                                            pid = "ex";
                                                            processName = "sit";
                                                            protocol = "non";
                                                            remoteIpAddress = "officiis";
                                                            remotePort = 505866;
                                                            state = "facilis";
                                                        }}),
                                                    }};
                                                }};
                                                netstat = "quaerat";
                                                netstatTime = new DateTime() {{
                                                    day = 277773;
                                                    hours = 373035;
                                                    minutes = 894864;
                                                    month = 524970;
                                                    nanos = 26522;
                                                    seconds = 750595;
                                                    timeZone = new TimeZone() {{
                                                        id = "a55efd20-e457-4e18-98b6-a89fbe3a5aa8";
                                                        version = "accusamus";
                                                    }};
                                                    utcOffset = "tempora";
                                                    year = 543678;
                                                }};
                                            }};
                                            openFileList = new OpenFileList() {{
                                                entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                    add(new OpenFileDetails() {{
                                                        command = "ut";
                                                        filePath = "fugiat";
                                                        fileType = "voluptatem";
                                                        user = "culpa";
                                                    }}),
                                                }};
                                            }};
                                            processes = new RunningProcessList() {{
                                                processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("consequatur", "esse");
                                                            put("ipsam", "sit");
                                                        }};
                                                        cmdline = "voluptatum";
                                                        exePath = "quas";
                                                        pid = "repudiandae";
                                                        user = "corporis";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("blanditiis", "ex");
                                                        }};
                                                        cmdline = "sed";
                                                        exePath = "sit";
                                                        pid = "vel";
                                                        user = "nostrum";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("error", "consequatur");
                                                            put("incidunt", "reiciendis");
                                                            put("dolorem", "harum");
                                                            put("dicta", "architecto");
                                                        }};
                                                        cmdline = "occaecati";
                                                        exePath = "labore";
                                                        pid = "quidem";
                                                        user = "atque";
                                                    }}),
                                                }};
                                            }};
                                            services = new RunningServiceList() {{
                                                services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                    add(new RunningService() {{
                                                        cmdline = "nam";
                                                        exePath = "tenetur";
                                                        name = "Patricia Farrell";
                                                        pid = "unde";
                                                        startMode = "reiciendis";
                                                        state = "provident";
                                                        status = "repellendus";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "delectus";
                                                        exePath = "voluptates";
                                                        name = "Monique Predovic";
                                                        pid = "fuga";
                                                        startMode = "praesentium";
                                                        state = "mollitia";
                                                        status = "veniam";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "voluptatem";
                                                        exePath = "quisquam";
                                                        name = "Ryan Littel";
                                                        pid = "totam";
                                                        startMode = "suscipit";
                                                        state = "quidem";
                                                        status = "maxime";
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                    memoryMb = 90885;
                                    osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_WINDOWS;
                                    osName = "amet";
                                    osVersion = "assumenda";
                                    platform = new PlatformDetails() {{
                                        awsEc2Details = new AwsEc2PlatformDetails() {{
                                            location = "ea";
                                            machineTypeLabel = "atque";
                                        }};
                                        azureVmDetails = new AzureVmPlatformDetails() {{
                                            location = "error";
                                            machineTypeLabel = "officiis";
                                            provisioningState = "officiis";
                                        }};
                                        genericDetails = new GenericPlatformDetails() {{
                                            location = "accusamus";
                                        }};
                                        physicalDetails = new PhysicalPlatformDetails() {{
                                            location = "natus";
                                        }};
                                        vmwareDetails = new VmwarePlatformDetails() {{
                                            esxVersion = "minima";
                                            osid = "aspernatur";
                                            vcenterVersion = "ex";
                                        }};
                                    }};
                                    powerState = "maiores";
                                    vcenterFolder = "corrupti";
                                    vcenterUrl = "at";
                                    vcenterVmId = "error";
                                    vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                        bios = new BiosDetails() {{
                                            biosManufacturer = "blanditiis";
                                            biosName = "suscipit";
                                            biosReleaseDate = "repudiandae";
                                            biosVersion = "atque";
                                            smbiosUuid = "atque";
                                        }};
                                        cpuArchitecture = "sunt";
                                        cpuManufacturer = "recusandae";
                                        cpuName = "dolorum";
                                        cpuSocketCount = 829898;
                                        cpuThreadCount = 287119;
                                        firmware = "reiciendis";
                                        hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_UNSPECIFIED;
                                        vendor = "repudiandae";
                                    }};
                                    vmDisks = new VirtualMachineDiskDetails() {{
                                        disks = new DiskEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                                add(new DiskEntry() {{
                                                    diskLabel = "accusantium";
                                                    diskLabelType = "beatae";
                                                    hwAddress = "dolores";
                                                    interfaceType = "enim";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "velit";
                                                                fileSystem = "a";
                                                                freeBytes = "molestias";
                                                                mountPoint = "magnam";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "saepe";
                                                                uuid = "29e973e9-22a5-47a1-9be3-e060807e2b6e";
                                                            }}),
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "ratione";
                                                                fileSystem = "laborum";
                                                                freeBytes = "distinctio";
                                                                mountPoint = "voluptatum";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "rem";
                                                                uuid = "45f0597a-60ff-42a5-8a31-e94764a3e865";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "recusandae";
                                                    totalCapacityBytes = "esse";
                                                    totalFreeBytes = "provident";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_PMEM;
                                                        rdmCompatibilityMode = "eum";
                                                        shared = false;
                                                        vmdkDiskMode = "reiciendis";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        hddTotalCapacityBytes = "provident";
                                        hddTotalFreeBytes = "aspernatur";
                                        lsblkJson = "ullam";
                                    }};
                                    vmName = "quasi";
                                    vmNetwork = new VirtualMachineNetworkDetails() {{
                                        defaultGw = "animi";
                                        networkAdapters = new NetworkAdapterList() {{
                                            networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "mollitia";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "animi";
                                                                fqdn = "ex";
                                                                ipAddress = "aliquid";
                                                                subnetMask = "accusantium";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "doloribus";
                                                                fqdn = "ullam";
                                                                ipAddress = "in";
                                                                subnetMask = "nam";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "officia";
                                                                fqdn = "laborum";
                                                                ipAddress = "placeat";
                                                                subnetMask = "modi";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "voluptatibus";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "molestias";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "cumque";
                                                                fqdn = "vitae";
                                                                ipAddress = "rerum";
                                                                subnetMask = "tempora";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "inventore";
                                                                fqdn = "fugit";
                                                                ipAddress = "cumque";
                                                                subnetMask = "quae";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "velit";
                                                                fqdn = "aspernatur";
                                                                ipAddress = "eum";
                                                                subnetMask = "eius";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "at";
                                                                fqdn = "impedit";
                                                                ipAddress = "eos";
                                                                subnetMask = "sapiente";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "eum";
                                                }}),
                                            }};
                                        }};
                                        primaryIpAddress = "dicta";
                                        primaryMacAddress = "minima";
                                        publicIpAddress = "beatae";
                                    }};
                                    vmUuid = "cupiditate";
                                }};
                            }};
                            requestId = "provident";
                            updateMask = "earum";
                        }}),
                        add(new UpdateAssetRequestInput() {{
                            asset = new AssetInput() {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("hic", "illum");
                                    put("eaque", "earum");
                                    put("perspiciatis", "maiores");
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "porro");
                                    put("suscipit", "dolorem");
                                    put("fugit", "cumque");
                                    put("fuga", "ratione");
                                }};
                                performanceData = new AssetPerformanceData() {{
                                    dailyResourceUsageAggregations = new org.openapis.openapi.models.shared.DailyResourceUsageAggregation[]{{
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 8987.6;
                                                    median = 8620.63;
                                                    ninteyFifthPercentile = 89.31;
                                                    peak = 972.58;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 90233;
                                                month = 497777;
                                                year = 619183;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 5810.82;
                                                    median = 3824.4;
                                                    ninteyFifthPercentile = 2415.57;
                                                    peak = 965.62;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 1690.25;
                                                    median = 9849.34;
                                                    ninteyFifthPercentile = 8595.81;
                                                    peak = 8965.82;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 585.34;
                                                    median = 2711.13;
                                                    ninteyFifthPercentile = 4706.21;
                                                    peak = 4731.9;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 1158.34;
                                                    median = 4797.54;
                                                    ninteyFifthPercentile = 4570.59;
                                                    peak = 5083.9;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 9799.63;
                                                    median = 9672.6;
                                                    ninteyFifthPercentile = 4237.06;
                                                    peak = 999.58;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 857125;
                                                month = 39650;
                                                year = 117315;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 4837.06;
                                                    median = 2712.52;
                                                    ninteyFifthPercentile = 4582.59;
                                                    peak = 4037.93;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 2352.63;
                                                    median = 3998.12;
                                                    ninteyFifthPercentile = 588.7;
                                                    peak = 6713.84;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 1238.44;
                                                    median = 3447.18;
                                                    ninteyFifthPercentile = 8567.56;
                                                    peak = 7137.67;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 3996.67;
                                                    median = 6391.87;
                                                    ninteyFifthPercentile = 3813.97;
                                                    peak = 3991.61;
                                                }};
                                            }};
                                        }}),
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 219.73;
                                                    median = 4317.6;
                                                    ninteyFifthPercentile = 3747.53;
                                                    peak = 6145.28;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 661607;
                                                month = 70042;
                                                year = 625358;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 8224.07;
                                                    median = 9139.92;
                                                    ninteyFifthPercentile = 6534.21;
                                                    peak = 6717.94;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 7263.43;
                                                    median = 3240.83;
                                                    ninteyFifthPercentile = 5369.23;
                                                    peak = 3162.2;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 1104.77;
                                                    median = 8333.16;
                                                    ninteyFifthPercentile = 4050.36;
                                                    peak = 7758.03;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 4053.73;
                                                    median = 2811.53;
                                                    ninteyFifthPercentile = 3210.43;
                                                    peak = 7139.27;
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                virtualMachineDetails = new VirtualMachineDetails() {{
                                    coreCount = 29950;
                                    createTime = "molestias";
                                    guestOs = new GuestOsDetails() {{
                                        config = new GuestConfigDetails() {{
                                            fstab = new FstabEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                    add(new FstabEntry() {{
                                                        file = "aliquid";
                                                        freq = 109784;
                                                        mntops = "voluptatum";
                                                        passno = 606308;
                                                        spec = "veritatis";
                                                        vfstype = "rerum";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "est";
                                                        freq = 634786;
                                                        mntops = "voluptatem";
                                                        passno = 959143;
                                                        spec = "officiis";
                                                        vfstype = "architecto";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "fuga";
                                                        freq = 867168;
                                                        mntops = "debitis";
                                                        passno = 29190;
                                                        spec = "alias";
                                                        vfstype = "deleniti";
                                                    }}),
                                                }};
                                            }};
                                            hosts = new HostsEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("sapiente"),
                                                            add("rem"),
                                                        }};
                                                        ip = "minus";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("asperiores"),
                                                            add("ratione"),
                                                        }};
                                                        ip = "ullam";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("illum"),
                                                        }};
                                                        ip = "totam";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("quibusdam"),
                                                            add("nam"),
                                                            add("ipsam"),
                                                            add("culpa"),
                                                        }};
                                                        ip = "dolor";
                                                    }}),
                                                }};
                                            }};
                                            issue = "aliquam";
                                            nfsExports = new NfsExportList() {{
                                                entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                    add(new NfsExport() {{
                                                        exportDirectory = "deleniti";
                                                        hosts = new String[]{{
                                                            add("tempora"),
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                            selinux = new Selinux() {{
                                                enabled = false;
                                                mode = "dolor";
                                            }};
                                        }};
                                        runtime = new GuestRuntimeDetails() {{
                                            domain = "consequatur";
                                            installedApps = new GuestInstalledApplicationList() {{
                                                entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Ms. Pauline Considine I";
                                                        path = "fugiat";
                                                        time = "ipsam";
                                                        vendor = "consequuntur";
                                                        version = "ipsa";
                                                    }}),
                                                }};
                                            }};
                                            lastUptime = new Date() {{
                                                day = 559682;
                                                month = 911198;
                                                year = 773456;
                                            }};
                                            machineName = "officiis";
                                            networkInfo = new RuntimeNetworkInfo() {{
                                                connections = new NetworkConnectionList() {{
                                                    entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "necessitatibus";
                                                            localPort = 153369;
                                                            pid = "veniam";
                                                            processName = "nesciunt";
                                                            protocol = "expedita";
                                                            remoteIpAddress = "eum";
                                                            remotePort = 426943;
                                                            state = "voluptatum";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "magnam";
                                                            localPort = 349440;
                                                            pid = "ab";
                                                            processName = "porro";
                                                            protocol = "autem";
                                                            remoteIpAddress = "nobis";
                                                            remotePort = 388319;
                                                            state = "recusandae";
                                                        }}),
                                                    }};
                                                }};
                                                netstat = "consequuntur";
                                                netstatTime = new DateTime() {{
                                                    day = 28952;
                                                    hours = 350207;
                                                    minutes = 895692;
                                                    month = 95619;
                                                    nanos = 392569;
                                                    seconds = 871103;
                                                    timeZone = new TimeZone() {{
                                                        id = "eab3fec9-578a-4645-8427-3a8418d16230";
                                                        version = "cupiditate";
                                                    }};
                                                    utcOffset = "reiciendis";
                                                    year = 746837;
                                                }};
                                            }};
                                            openFileList = new OpenFileList() {{
                                                entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                    add(new OpenFileDetails() {{
                                                        command = "omnis";
                                                        filePath = "eos";
                                                        fileType = "occaecati";
                                                        user = "iste";
                                                    }}),
                                                }};
                                            }};
                                            processes = new RunningProcessList() {{
                                                processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("fuga", "accusamus");
                                                        }};
                                                        cmdline = "voluptatibus";
                                                        exePath = "distinctio";
                                                        pid = "omnis";
                                                        user = "delectus";
                                                    }}),
                                                }};
                                            }};
                                            services = new RunningServiceList() {{
                                                services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                    add(new RunningService() {{
                                                        cmdline = "praesentium";
                                                        exePath = "maxime";
                                                        name = "Paulette Lowe";
                                                        pid = "commodi";
                                                        startMode = "totam";
                                                        state = "earum";
                                                        status = "modi";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "nam";
                                                        exePath = "vero";
                                                        name = "Mr. Holly Kautzer";
                                                        pid = "maiores";
                                                        startMode = "enim";
                                                        state = "sint";
                                                        status = "nulla";
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                    memoryMb = 643678;
                                    osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_WINDOWS;
                                    osName = "nemo";
                                    osVersion = "reprehenderit";
                                    platform = new PlatformDetails() {{
                                        awsEc2Details = new AwsEc2PlatformDetails() {{
                                            location = "est";
                                            machineTypeLabel = "quis";
                                        }};
                                        azureVmDetails = new AzureVmPlatformDetails() {{
                                            location = "sint";
                                            machineTypeLabel = "accusamus";
                                            provisioningState = "impedit";
                                        }};
                                        genericDetails = new GenericPlatformDetails() {{
                                            location = "hic";
                                        }};
                                        physicalDetails = new PhysicalPlatformDetails() {{
                                            location = "necessitatibus";
                                        }};
                                        vmwareDetails = new VmwarePlatformDetails() {{
                                            esxVersion = "asperiores";
                                            osid = "ex";
                                            vcenterVersion = "voluptas";
                                        }};
                                    }};
                                    powerState = "debitis";
                                    vcenterFolder = "delectus";
                                    vcenterUrl = "quae";
                                    vcenterVmId = "minus";
                                    vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                        bios = new BiosDetails() {{
                                            biosManufacturer = "fuga";
                                            biosName = "laborum";
                                            biosReleaseDate = "consectetur";
                                            biosVersion = "velit";
                                            smbiosUuid = "atque";
                                        }};
                                        cpuArchitecture = "ipsum";
                                        cpuManufacturer = "impedit";
                                        cpuName = "magni";
                                        cpuSocketCount = 746585;
                                        cpuThreadCount = 922757;
                                        firmware = "nam";
                                        hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_UNSPECIFIED;
                                        vendor = "iusto";
                                    }};
                                    vmDisks = new VirtualMachineDiskDetails() {{
                                        disks = new DiskEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                                add(new DiskEntry() {{
                                                    diskLabel = "sequi";
                                                    diskLabelType = "dignissimos";
                                                    hwAddress = "neque";
                                                    interfaceType = "quo";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "quibusdam";
                                                                fileSystem = "iure";
                                                                freeBytes = "odit";
                                                                mountPoint = "voluptatibus";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "vel";
                                                                uuid = "4d1db1f2-c431-4066-9e96-349e1cf9e06e";
                                                            }}),
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "velit";
                                                                fileSystem = "laborum";
                                                                freeBytes = "non";
                                                                mountPoint = "dolor";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "iusto";
                                                                uuid = "000ae6b6-bc9b-48f7-99ea-c55a9741d311";
                                                            }}),
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "dolorem";
                                                                fileSystem = "ad";
                                                                freeBytes = "qui";
                                                                mountPoint = "iste";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "ex";
                                                                uuid = "5bb8a720-2611-4435-a139-dbc2259b1abd";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "officia";
                                                    totalCapacityBytes = "quos";
                                                    totalFreeBytes = "placeat";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_UNSPECIFIED;
                                                        rdmCompatibilityMode = "iusto";
                                                        shared = false;
                                                        vmdkDiskMode = "ipsa";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "voluptates";
                                                    diskLabelType = "inventore";
                                                    hwAddress = "aperiam";
                                                    interfaceType = "totam";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "eligendi";
                                                                fileSystem = "distinctio";
                                                                freeBytes = "voluptatem";
                                                                mountPoint = "autem";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "esse";
                                                                uuid = "2d1ad879-eeb9-4665-b85e-fbd02bae0be2";
                                                            }}),
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "quibusdam";
                                                                fileSystem = "odio";
                                                                freeBytes = "praesentium";
                                                                mountPoint = "odit";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "explicabo";
                                                                uuid = "59e3ea4b-5197-4f92-843d-a7ce52b895c5";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "neque";
                                                    totalCapacityBytes = "in";
                                                    totalFreeBytes = "minus";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_PMEM;
                                                        rdmCompatibilityMode = "modi";
                                                        shared = false;
                                                        vmdkDiskMode = "corporis";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        hddTotalCapacityBytes = "magnam";
                                        hddTotalFreeBytes = "voluptates";
                                        lsblkJson = "maiores";
                                    }};
                                    vmName = "tempore";
                                    vmNetwork = new VirtualMachineNetworkDetails() {{
                                        defaultGw = "aperiam";
                                        networkAdapters = new NetworkAdapterList() {{
                                            networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "ratione";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "occaecati";
                                                                fqdn = "voluptas";
                                                                ipAddress = "quo";
                                                                subnetMask = "velit";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "fuga";
                                                                fqdn = "nostrum";
                                                                ipAddress = "est";
                                                                subnetMask = "impedit";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "delectus";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "tempore";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "repellat";
                                                                fqdn = "pariatur";
                                                                ipAddress = "nemo";
                                                                subnetMask = "reprehenderit";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "odio";
                                                                fqdn = "minima";
                                                                ipAddress = "in";
                                                                subnetMask = "ducimus";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "dolores";
                                                                fqdn = "error";
                                                                ipAddress = "veritatis";
                                                                subnetMask = "ducimus";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "pariatur";
                                                                fqdn = "itaque";
                                                                ipAddress = "similique";
                                                                subnetMask = "optio";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "ex";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "quaerat";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "placeat";
                                                                fqdn = "quidem";
                                                                ipAddress = "exercitationem";
                                                                subnetMask = "quam";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "modi";
                                                                fqdn = "ipsa";
                                                                ipAddress = "sint";
                                                                subnetMask = "vero";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "sequi";
                                                }}),
                                            }};
                                        }};
                                        primaryIpAddress = "repudiandae";
                                        primaryMacAddress = "cum";
                                        publicIpAddress = "dicta";
                                    }};
                                    vmUuid = "earum";
                                }};
                            }};
                            requestId = "veniam";
                            updateMask = "animi";
                        }}),
                        add(new UpdateAssetRequestInput() {{
                            asset = new AssetInput() {{
                                attributes = new java.util.HashMap<String, String>() {{
                                    put("nam", "dicta");
                                }};
                                labels = new java.util.HashMap<String, String>() {{
                                    put("necessitatibus", "nobis");
                                }};
                                performanceData = new AssetPerformanceData() {{
                                    dailyResourceUsageAggregations = new org.openapis.openapi.models.shared.DailyResourceUsageAggregation[]{{
                                        add(new DailyResourceUsageAggregation() {{
                                            cpu = new DailyResourceUsageAggregationCPU() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 4973.57;
                                                    median = 9804.86;
                                                    ninteyFifthPercentile = 873.82;
                                                    peak = 964.5;
                                                }};
                                            }};
                                            date = new Date() {{
                                                day = 386447;
                                                month = 863471;
                                                year = 729448;
                                            }};
                                            disk = new DailyResourceUsageAggregationDisk() {{
                                                iops = new DailyResourceUsageAggregationStats() {{
                                                    average = 5665.06;
                                                    median = 5782.1;
                                                    ninteyFifthPercentile = 3679.17;
                                                    peak = 3063.82;
                                                }};
                                            }};
                                            memory = new DailyResourceUsageAggregationMemory() {{
                                                utilizationPercentage = new DailyResourceUsageAggregationStats() {{
                                                    average = 3423.42;
                                                    median = 9887.49;
                                                    ninteyFifthPercentile = 7573.64;
                                                    peak = 5740.32;
                                                }};
                                            }};
                                            network = new DailyResourceUsageAggregationNetwork() {{
                                                egressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 3145.73;
                                                    median = 9449.5;
                                                    ninteyFifthPercentile = 6573.19;
                                                    peak = 5597.74;
                                                }};
                                                ingressBps = new DailyResourceUsageAggregationStats() {{
                                                    average = 5173.26;
                                                    median = 5646.67;
                                                    ninteyFifthPercentile = 4849.66;
                                                    peak = 511.7;
                                                }};
                                            }};
                                        }}),
                                    }};
                                }};
                                virtualMachineDetails = new VirtualMachineDetails() {{
                                    coreCount = 901163;
                                    createTime = "architecto";
                                    guestOs = new GuestOsDetails() {{
                                        config = new GuestConfigDetails() {{
                                            fstab = new FstabEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                    add(new FstabEntry() {{
                                                        file = "iste";
                                                        freq = 826862;
                                                        mntops = "tempore";
                                                        passno = 725574;
                                                        spec = "velit";
                                                        vfstype = "doloremque";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "delectus";
                                                        freq = 773110;
                                                        mntops = "cum";
                                                        passno = 216870;
                                                        spec = "adipisci";
                                                        vfstype = "saepe";
                                                    }}),
                                                    add(new FstabEntry() {{
                                                        file = "deserunt";
                                                        freq = 42924;
                                                        mntops = "quis";
                                                        passno = 333072;
                                                        spec = "libero";
                                                        vfstype = "architecto";
                                                    }}),
                                                }};
                                            }};
                                            hosts = new HostsEntryList() {{
                                                entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("eligendi"),
                                                            add("possimus"),
                                                        }};
                                                        ip = "non";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("itaque"),
                                                            add("sed"),
                                                        }};
                                                        ip = "asperiores";
                                                    }}),
                                                    add(new HostsEntry() {{
                                                        hostNames = new String[]{{
                                                            add("consequuntur"),
                                                            add("facere"),
                                                        }};
                                                        ip = "laudantium";
                                                    }}),
                                                }};
                                            }};
                                            issue = "odit";
                                            nfsExports = new NfsExportList() {{
                                                entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                    add(new NfsExport() {{
                                                        exportDirectory = "amet";
                                                        hosts = new String[]{{
                                                            add("ab"),
                                                            add("velit"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "facilis";
                                                        hosts = new String[]{{
                                                            add("nisi"),
                                                            add("voluptatibus"),
                                                            add("quaerat"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "blanditiis";
                                                        hosts = new String[]{{
                                                            add("nisi"),
                                                            add("quis"),
                                                            add("nisi"),
                                                        }};
                                                    }}),
                                                    add(new NfsExport() {{
                                                        exportDirectory = "libero";
                                                        hosts = new String[]{{
                                                            add("facere"),
                                                            add("facilis"),
                                                            add("ipsum"),
                                                            add("ad"),
                                                        }};
                                                    }}),
                                                }};
                                            }};
                                            selinux = new Selinux() {{
                                                enabled = false;
                                                mode = "voluptatibus";
                                            }};
                                        }};
                                        runtime = new GuestRuntimeDetails() {{
                                            domain = "voluptatibus";
                                            installedApps = new GuestInstalledApplicationList() {{
                                                entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                    add(new GuestInstalledApplication() {{
                                                        name = "Marcus Prohaska";
                                                        path = "nostrum";
                                                        time = "neque";
                                                        vendor = "iusto";
                                                        version = "est";
                                                    }}),
                                                }};
                                            }};
                                            lastUptime = new Date() {{
                                                day = 522176;
                                                month = 753890;
                                                year = 853606;
                                            }};
                                            machineName = "unde";
                                            networkInfo = new RuntimeNetworkInfo() {{
                                                connections = new NetworkConnectionList() {{
                                                    entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "ducimus";
                                                            localPort = 220104;
                                                            pid = "dicta";
                                                            processName = "error";
                                                            protocol = "porro";
                                                            remoteIpAddress = "vitae";
                                                            remotePort = 491591;
                                                            state = "esse";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "fugiat";
                                                            localPort = 322333;
                                                            pid = "aspernatur";
                                                            processName = "enim";
                                                            protocol = "delectus";
                                                            remoteIpAddress = "iusto";
                                                            remotePort = 491201;
                                                            state = "libero";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "illo";
                                                            localPort = 69182;
                                                            pid = "incidunt";
                                                            processName = "accusamus";
                                                            protocol = "saepe";
                                                            remoteIpAddress = "tempore";
                                                            remotePort = 334018;
                                                            state = "eos";
                                                        }}),
                                                        add(new NetworkConnection() {{
                                                            localIpAddress = "reiciendis";
                                                            localPort = 939161;
                                                            pid = "reprehenderit";
                                                            processName = "praesentium";
                                                            protocol = "nemo";
                                                            remoteIpAddress = "repellat";
                                                            remotePort = 789770;
                                                            state = "sequi";
                                                        }}),
                                                    }};
                                                }};
                                                netstat = "nihil";
                                                netstatTime = new DateTime() {{
                                                    day = 534908;
                                                    hours = 75566;
                                                    minutes = 290248;
                                                    month = 828841;
                                                    nanos = 304173;
                                                    seconds = 790463;
                                                    timeZone = new TimeZone() {{
                                                        id = "98e0c2bb-89eb-475d-ad63-6c600503d8bb";
                                                        version = "amet";
                                                    }};
                                                    utcOffset = "quasi";
                                                    year = 118126;
                                                }};
                                            }};
                                            openFileList = new OpenFileList() {{
                                                entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                    add(new OpenFileDetails() {{
                                                        command = "doloremque";
                                                        filePath = "earum";
                                                        fileType = "iusto";
                                                        user = "amet";
                                                    }}),
                                                    add(new OpenFileDetails() {{
                                                        command = "provident";
                                                        filePath = "dolorum";
                                                        fileType = "necessitatibus";
                                                        user = "provident";
                                                    }}),
                                                    add(new OpenFileDetails() {{
                                                        command = "repudiandae";
                                                        filePath = "consequatur";
                                                        fileType = "nemo";
                                                        user = "molestiae";
                                                    }}),
                                                }};
                                            }};
                                            processes = new RunningProcessList() {{
                                                processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("corrupti", "aperiam");
                                                            put("sint", "accusamus");
                                                            put("eos", "totam");
                                                        }};
                                                        cmdline = "dicta";
                                                        exePath = "voluptatem";
                                                        pid = "velit";
                                                        user = "dolor";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("a", "dolor");
                                                        }};
                                                        cmdline = "occaecati";
                                                        exePath = "atque";
                                                        pid = "beatae";
                                                        user = "at";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("minus", "esse");
                                                            put("voluptatem", "perferendis");
                                                        }};
                                                        cmdline = "rerum";
                                                        exePath = "ea";
                                                        pid = "aperiam";
                                                        user = "dignissimos";
                                                    }}),
                                                    add(new RunningProcess() {{
                                                        attributes = new java.util.HashMap<String, String>() {{
                                                            put("velit", "porro");
                                                            put("provident", "consectetur");
                                                            put("eligendi", "dignissimos");
                                                            put("consectetur", "soluta");
                                                        }};
                                                        cmdline = "natus";
                                                        exePath = "temporibus";
                                                        pid = "officia";
                                                        user = "amet";
                                                    }}),
                                                }};
                                            }};
                                            services = new RunningServiceList() {{
                                                services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                    add(new RunningService() {{
                                                        cmdline = "aspernatur";
                                                        exePath = "quo";
                                                        name = "Gilberto Osinski";
                                                        pid = "qui";
                                                        startMode = "consectetur";
                                                        state = "repellat";
                                                        status = "explicabo";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "explicabo";
                                                        exePath = "exercitationem";
                                                        name = "Dr. Elaine Bernhard";
                                                        pid = "delectus";
                                                        startMode = "non";
                                                        state = "distinctio";
                                                        status = "in";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "exercitationem";
                                                        exePath = "labore";
                                                        name = "Casey Gleason PhD";
                                                        pid = "rem";
                                                        startMode = "aperiam";
                                                        state = "odit";
                                                        status = "deleniti";
                                                    }}),
                                                    add(new RunningService() {{
                                                        cmdline = "enim";
                                                        exePath = "voluptate";
                                                        name = "Warren Rempel I";
                                                        pid = "eum";
                                                        startMode = "nesciunt";
                                                        state = "mollitia";
                                                        status = "dignissimos";
                                                    }}),
                                                }};
                                            }};
                                        }};
                                    }};
                                    memoryMb = 853246;
                                    osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_WINDOWS;
                                    osName = "molestiae";
                                    osVersion = "veniam";
                                    platform = new PlatformDetails() {{
                                        awsEc2Details = new AwsEc2PlatformDetails() {{
                                            location = "reiciendis";
                                            machineTypeLabel = "ab";
                                        }};
                                        azureVmDetails = new AzureVmPlatformDetails() {{
                                            location = "modi";
                                            machineTypeLabel = "aut";
                                            provisioningState = "aut";
                                        }};
                                        genericDetails = new GenericPlatformDetails() {{
                                            location = "eveniet";
                                        }};
                                        physicalDetails = new PhysicalPlatformDetails() {{
                                            location = "odio";
                                        }};
                                        vmwareDetails = new VmwarePlatformDetails() {{
                                            esxVersion = "commodi";
                                            osid = "numquam";
                                            vcenterVersion = "dolorum";
                                        }};
                                    }};
                                    powerState = "possimus";
                                    vcenterFolder = "voluptate";
                                    vcenterUrl = "consectetur";
                                    vcenterVmId = "nesciunt";
                                    vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                        bios = new BiosDetails() {{
                                            biosManufacturer = "quaerat";
                                            biosName = "itaque";
                                            biosReleaseDate = "minus";
                                            biosVersion = "sunt";
                                            smbiosUuid = "distinctio";
                                        }};
                                        cpuArchitecture = "iusto";
                                        cpuManufacturer = "quas";
                                        cpuName = "et";
                                        cpuSocketCount = 704948;
                                        cpuThreadCount = 229276;
                                        firmware = "autem";
                                        hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_ENABLED;
                                        vendor = "alias";
                                    }};
                                    vmDisks = new VirtualMachineDiskDetails() {{
                                        disks = new DiskEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                                add(new DiskEntry() {{
                                                    diskLabel = "aut";
                                                    diskLabelType = "quos";
                                                    hwAddress = "laudantium";
                                                    interfaceType = "repellendus";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "quae";
                                                                fileSystem = "eaque";
                                                                freeBytes = "saepe";
                                                                mountPoint = "delectus";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "mollitia";
                                                                uuid = "da200ef0-422e-4b21-a4cf-9ab8366c723f";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "repellat";
                                                    totalCapacityBytes = "nulla";
                                                    totalFreeBytes = "laborum";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_RDM_V2;
                                                        rdmCompatibilityMode = "accusamus";
                                                        shared = false;
                                                        vmdkDiskMode = "doloremque";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "nisi";
                                                    diskLabelType = "rerum";
                                                    hwAddress = "recusandae";
                                                    interfaceType = "voluptates";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "rem";
                                                                fileSystem = "quia";
                                                                freeBytes = "ullam";
                                                                mountPoint = "quisquam";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "dicta";
                                                                uuid = "fc0e115c-80bf-4f91-8544-ec42defcce8f";
                                                            }}),
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "ab";
                                                                fileSystem = "sint";
                                                                freeBytes = "nihil";
                                                                mountPoint = "esse";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "iure";
                                                                uuid = "73e63562-a7b4-408f-85e3-d48fdaf313a1";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "repellat";
                                                    totalCapacityBytes = "nemo";
                                                    totalFreeBytes = "doloribus";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_SESPARSE_V1;
                                                        rdmCompatibilityMode = "unde";
                                                        shared = false;
                                                        vmdkDiskMode = "incidunt";
                                                    }};
                                                }}),
                                                add(new DiskEntry() {{
                                                    diskLabel = "explicabo";
                                                    diskLabelType = "ipsam";
                                                    hwAddress = "cupiditate";
                                                    interfaceType = "optio";
                                                    partitions = new DiskPartitionList() {{
                                                        entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                            add(new DiskPartition() {{
                                                                capacityBytes = "quidem";
                                                                fileSystem = "nesciunt";
                                                                freeBytes = "commodi";
                                                                mountPoint = "sapiente";
                                                                subPartitions = new DiskPartitionList() {{}};
                                                                type = "consequuntur";
                                                                uuid = "5ea944f3-b756-4c11-b6c3-7a5126243835";
                                                            }}),
                                                        }};
                                                    }};
                                                    status = "expedita";
                                                    totalCapacityBytes = "facilis";
                                                    totalFreeBytes = "impedit";
                                                    vmwareConfig = new VmwareDiskConfig() {{
                                                        backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_UNSPECIFIED;
                                                        rdmCompatibilityMode = "nemo";
                                                        shared = false;
                                                        vmdkDiskMode = "culpa";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        hddTotalCapacityBytes = "consequuntur";
                                        hddTotalFreeBytes = "amet";
                                        lsblkJson = "deserunt";
                                    }};
                                    vmName = "modi";
                                    vmNetwork = new VirtualMachineNetworkDetails() {{
                                        defaultGw = "veniam";
                                        networkAdapters = new NetworkAdapterList() {{
                                            networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "itaque";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "enim";
                                                                fqdn = "doloribus";
                                                                ipAddress = "assumenda";
                                                                subnetMask = "officiis";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "alias";
                                                                fqdn = "culpa";
                                                                ipAddress = "ipsa";
                                                                subnetMask = "nobis";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "quia";
                                                                fqdn = "dicta";
                                                                ipAddress = "vel";
                                                                subnetMask = "perspiciatis";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "ullam";
                                                                fqdn = "architecto";
                                                                ipAddress = "accusantium";
                                                                subnetMask = "perferendis";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "veritatis";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "provident";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "quibusdam";
                                                                fqdn = "quod";
                                                                ipAddress = "nemo";
                                                                subnetMask = "recusandae";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                                bcast = "magnam";
                                                                fqdn = "dignissimos";
                                                                ipAddress = "laboriosam";
                                                                subnetMask = "sed";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                                bcast = "natus";
                                                                fqdn = "provident";
                                                                ipAddress = "cum";
                                                                subnetMask = "doloribus";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "quidem";
                                                                fqdn = "itaque";
                                                                ipAddress = "laboriosam";
                                                                subnetMask = "unde";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "modi";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "perspiciatis";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "aspernatur";
                                                                fqdn = "libero";
                                                                ipAddress = "nam";
                                                                subnetMask = "incidunt";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "quod";
                                                                fqdn = "id";
                                                                ipAddress = "saepe";
                                                                subnetMask = "autem";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "nesciunt";
                                                                fqdn = "illum";
                                                                ipAddress = "nemo";
                                                                subnetMask = "illum";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "non";
                                                                fqdn = "mollitia";
                                                                ipAddress = "assumenda";
                                                                subnetMask = "recusandae";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "distinctio";
                                                }}),
                                                add(new NetworkAdapterDetails() {{
                                                    adapterType = "pariatur";
                                                    addresses = new NetworkAddressList() {{
                                                        addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "laborum";
                                                                fqdn = "eveniet";
                                                                ipAddress = "laborum";
                                                                subnetMask = "incidunt";
                                                            }}),
                                                            add(new NetworkAddress() {{
                                                                assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                                bcast = "ipsam";
                                                                fqdn = "alias";
                                                                ipAddress = "suscipit";
                                                                subnetMask = "deserunt";
                                                            }}),
                                                        }};
                                                    }};
                                                    macAddress = "molestias";
                                                }}),
                                            }};
                                        }};
                                        primaryIpAddress = "laborum";
                                        primaryMacAddress = "est";
                                        publicIpAddress = "occaecati";
                                    }};
                                    vmUuid = "labore";
                                }};
                            }};
                            requestId = "quo";
                            updateMask = "perferendis";
                        }}),
                    }};
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "quaerat";
                key = "eligendi";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "officiis";
                uploadProtocol = "unde";
            }};            

            MigrationcenterProjectsLocationsAssetsBatchUpdateResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsBatchUpdate(req, new MigrationcenterProjectsLocationsAssetsBatchUpdateSecurity("nulla", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUpdateAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsAssetsList

Lists all the assets in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsListSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsListRequest req = new MigrationcenterProjectsLocationsAssetsListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "corrupti";
                fields = "fuga";
                filter = "facere";
                key = "impedit";
                oauthToken = "quasi";
                orderBy = "deserunt";
                pageSize = 801075L;
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "voluptatem";
                uploadProtocol = "facere";
                view = MigrationcenterProjectsLocationsAssetsListViewEnum.ASSET_VIEW_STANDARD;
            }};            

            MigrationcenterProjectsLocationsAssetsListResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsList(req, new MigrationcenterProjectsLocationsAssetsListSecurity("maxime", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsAssetsReportAssetFrames

Reports a set of frames.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssetFrame;
import org.openapis.openapi.models.shared.AwsEc2PlatformDetails;
import org.openapis.openapi.models.shared.AzureVmPlatformDetails;
import org.openapis.openapi.models.shared.BiosDetails;
import org.openapis.openapi.models.shared.CpuUsageSample;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateTime;
import org.openapis.openapi.models.shared.DiskEntry;
import org.openapis.openapi.models.shared.DiskEntryList;
import org.openapis.openapi.models.shared.DiskPartition;
import org.openapis.openapi.models.shared.DiskPartitionList;
import org.openapis.openapi.models.shared.DiskUsageSample;
import org.openapis.openapi.models.shared.Frames;
import org.openapis.openapi.models.shared.FstabEntry;
import org.openapis.openapi.models.shared.FstabEntryList;
import org.openapis.openapi.models.shared.GenericPlatformDetails;
import org.openapis.openapi.models.shared.GuestConfigDetails;
import org.openapis.openapi.models.shared.GuestInstalledApplication;
import org.openapis.openapi.models.shared.GuestInstalledApplicationList;
import org.openapis.openapi.models.shared.GuestOsDetails;
import org.openapis.openapi.models.shared.GuestRuntimeDetails;
import org.openapis.openapi.models.shared.HostsEntry;
import org.openapis.openapi.models.shared.HostsEntryList;
import org.openapis.openapi.models.shared.MemoryUsageSample;
import org.openapis.openapi.models.shared.NetworkAdapterDetails;
import org.openapis.openapi.models.shared.NetworkAdapterList;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.NetworkAddressAssignmentEnum;
import org.openapis.openapi.models.shared.NetworkAddressList;
import org.openapis.openapi.models.shared.NetworkConnection;
import org.openapis.openapi.models.shared.NetworkConnectionList;
import org.openapis.openapi.models.shared.NetworkUsageSample;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.NfsExportList;
import org.openapis.openapi.models.shared.OpenFileDetails;
import org.openapis.openapi.models.shared.OpenFileList;
import org.openapis.openapi.models.shared.PerformanceSample;
import org.openapis.openapi.models.shared.PhysicalPlatformDetails;
import org.openapis.openapi.models.shared.PlatformDetails;
import org.openapis.openapi.models.shared.RunningProcess;
import org.openapis.openapi.models.shared.RunningProcessList;
import org.openapis.openapi.models.shared.RunningService;
import org.openapis.openapi.models.shared.RunningServiceList;
import org.openapis.openapi.models.shared.RuntimeNetworkInfo;
import org.openapis.openapi.models.shared.Selinux;
import org.openapis.openapi.models.shared.TimeZone;
import org.openapis.openapi.models.shared.VirtualMachineArchitectureDetails;
import org.openapis.openapi.models.shared.VirtualMachineArchitectureDetailsHyperthreadingEnum;
import org.openapis.openapi.models.shared.VirtualMachineDetails;
import org.openapis.openapi.models.shared.VirtualMachineDetailsOsFamilyEnum;
import org.openapis.openapi.models.shared.VirtualMachineDiskDetails;
import org.openapis.openapi.models.shared.VirtualMachineNetworkDetails;
import org.openapis.openapi.models.shared.VmwareDiskConfig;
import org.openapis.openapi.models.shared.VmwareDiskConfigBackingTypeEnum;
import org.openapis.openapi.models.shared.VmwarePlatformDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest req = new MigrationcenterProjectsLocationsAssetsReportAssetFramesRequest("eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                frames = new Frames() {{
                    framesData = new org.openapis.openapi.models.shared.AssetFrame[]{{
                        add(new AssetFrame() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("blanditiis", "quae");
                                put("magni", "officiis");
                                put("sed", "necessitatibus");
                                put("impedit", "ipsa");
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("a", "maiores");
                                put("laudantium", "maiores");
                                put("alias", "asperiores");
                            }};
                            performanceSamples = new org.openapis.openapi.models.shared.PerformanceSample[]{{
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 1186.15;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 3805.95;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 9382.57;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 9853.6;
                                        averageIngressBps = 2445.69;
                                    }};
                                    sampleTime = "eius";
                                }}),
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 4582.12;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 4465.47;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 7574.07;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 946.97;
                                        averageIngressBps = 2036.21;
                                    }};
                                    sampleTime = "vero";
                                }}),
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 5663.12;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 375.34;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 1858.16;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 7712.41;
                                        averageIngressBps = 1047.36;
                                    }};
                                    sampleTime = "incidunt";
                                }}),
                            }};
                            reportTime = "dicta";
                            traceToken = "odit";
                            virtualMachineDetails = new VirtualMachineDetails() {{
                                coreCount = 357639;
                                createTime = "rerum";
                                guestOs = new GuestOsDetails() {{
                                    config = new GuestConfigDetails() {{
                                        fstab = new FstabEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                add(new FstabEntry() {{
                                                    file = "error";
                                                    freq = 424854;
                                                    mntops = "accusantium";
                                                    passno = 664197;
                                                    spec = "laboriosam";
                                                    vfstype = "ex";
                                                }}),
                                            }};
                                        }};
                                        hosts = new HostsEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("ullam"),
                                                    }};
                                                    ip = "quae";
                                                }}),
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("incidunt"),
                                                        add("quam"),
                                                        add("magni"),
                                                    }};
                                                    ip = "deserunt";
                                                }}),
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("omnis"),
                                                        add("sed"),
                                                        add("nesciunt"),
                                                        add("maxime"),
                                                    }};
                                                    ip = "quis";
                                                }}),
                                            }};
                                        }};
                                        issue = "cupiditate";
                                        nfsExports = new NfsExportList() {{
                                            entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                add(new NfsExport() {{
                                                    exportDirectory = "excepturi";
                                                    hosts = new String[]{{
                                                        add("laudantium"),
                                                        add("velit"),
                                                        add("reiciendis"),
                                                        add("amet"),
                                                    }};
                                                }}),
                                                add(new NfsExport() {{
                                                    exportDirectory = "nemo";
                                                    hosts = new String[]{{
                                                        add("quisquam"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        selinux = new Selinux() {{
                                            enabled = false;
                                            mode = "tenetur";
                                        }};
                                    }};
                                    runtime = new GuestRuntimeDetails() {{
                                        domain = "quas";
                                        installedApps = new GuestInstalledApplicationList() {{
                                            entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                add(new GuestInstalledApplication() {{
                                                    name = "Nettie Wilkinson";
                                                    path = "accusantium";
                                                    time = "dicta";
                                                    vendor = "minus";
                                                    version = "commodi";
                                                }}),
                                                add(new GuestInstalledApplication() {{
                                                    name = "Lowell Rippin";
                                                    path = "voluptates";
                                                    time = "fugit";
                                                    vendor = "eius";
                                                    version = "sequi";
                                                }}),
                                            }};
                                        }};
                                        lastUptime = new Date() {{
                                            day = 758194;
                                            month = 992887;
                                            year = 459875;
                                        }};
                                        machineName = "blanditiis";
                                        networkInfo = new RuntimeNetworkInfo() {{
                                            connections = new NetworkConnectionList() {{
                                                entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "repellat";
                                                        localPort = 955047;
                                                        pid = "animi";
                                                        processName = "maiores";
                                                        protocol = "itaque";
                                                        remoteIpAddress = "nulla";
                                                        remotePort = 643419;
                                                        state = "corporis";
                                                    }}),
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "velit";
                                                        localPort = 887701;
                                                        pid = "enim";
                                                        processName = "officia";
                                                        protocol = "saepe";
                                                        remoteIpAddress = "eum";
                                                        remotePort = 922094;
                                                        state = "accusantium";
                                                    }}),
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "officia";
                                                        localPort = 770128;
                                                        pid = "quasi";
                                                        processName = "blanditiis";
                                                        protocol = "eius";
                                                        remoteIpAddress = "quisquam";
                                                        remotePort = 177929;
                                                        state = "nobis";
                                                    }}),
                                                }};
                                            }};
                                            netstat = "natus";
                                            netstatTime = new DateTime() {{
                                                day = 793568;
                                                hours = 154389;
                                                minutes = 300651;
                                                month = 440847;
                                                nanos = 800799;
                                                seconds = 552440;
                                                timeZone = new TimeZone() {{
                                                    id = "8373a40e-1942-4f32-a550-55756f5d56d0";
                                                    version = "quidem";
                                                }};
                                                utcOffset = "repellendus";
                                                year = 17768;
                                            }};
                                        }};
                                        openFileList = new OpenFileList() {{
                                            entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                add(new OpenFileDetails() {{
                                                    command = "sapiente";
                                                    filePath = "sed";
                                                    fileType = "possimus";
                                                    user = "repellat";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "repudiandae";
                                                    filePath = "architecto";
                                                    fileType = "adipisci";
                                                    user = "pariatur";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "harum";
                                                    filePath = "dolore";
                                                    fileType = "voluptatibus";
                                                    user = "iure";
                                                }}),
                                            }};
                                        }};
                                        processes = new RunningProcessList() {{
                                            processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("soluta", "dolorum");
                                                        put("velit", "earum");
                                                        put("praesentium", "error");
                                                        put("non", "quasi");
                                                    }};
                                                    cmdline = "mollitia";
                                                    exePath = "accusamus";
                                                    pid = "harum";
                                                    user = "cumque";
                                                }}),
                                            }};
                                        }};
                                        services = new RunningServiceList() {{
                                            services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                add(new RunningService() {{
                                                    cmdline = "expedita";
                                                    exePath = "corrupti";
                                                    name = "Sandy Hyatt";
                                                    pid = "tempora";
                                                    startMode = "possimus";
                                                    state = "dolor";
                                                    status = "rerum";
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                memoryMb = 153582;
                                osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_UNIX;
                                osName = "optio";
                                osVersion = "delectus";
                                platform = new PlatformDetails() {{
                                    awsEc2Details = new AwsEc2PlatformDetails() {{
                                        location = "minus";
                                        machineTypeLabel = "quo";
                                    }};
                                    azureVmDetails = new AzureVmPlatformDetails() {{
                                        location = "quos";
                                        machineTypeLabel = "asperiores";
                                        provisioningState = "voluptatum";
                                    }};
                                    genericDetails = new GenericPlatformDetails() {{
                                        location = "iste";
                                    }};
                                    physicalDetails = new PhysicalPlatformDetails() {{
                                        location = "corporis";
                                    }};
                                    vmwareDetails = new VmwarePlatformDetails() {{
                                        esxVersion = "accusantium";
                                        osid = "illo";
                                        vcenterVersion = "aut";
                                    }};
                                }};
                                powerState = "doloribus";
                                vcenterFolder = "nostrum";
                                vcenterUrl = "at";
                                vcenterVmId = "possimus";
                                vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                    bios = new BiosDetails() {{
                                        biosManufacturer = "neque";
                                        biosName = "pariatur";
                                        biosReleaseDate = "vel";
                                        biosVersion = "sapiente";
                                        smbiosUuid = "mollitia";
                                    }};
                                    cpuArchitecture = "quae";
                                    cpuManufacturer = "quos";
                                    cpuName = "aperiam";
                                    cpuSocketCount = 251200;
                                    cpuThreadCount = 913284;
                                    firmware = "ad";
                                    hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_UNSPECIFIED;
                                    vendor = "quisquam";
                                }};
                                vmDisks = new VirtualMachineDiskDetails() {{
                                    disks = new DiskEntryList() {{
                                        entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                            add(new DiskEntry() {{
                                                diskLabel = "consequuntur";
                                                diskLabelType = "maiores";
                                                hwAddress = "inventore";
                                                interfaceType = "aliquid";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "est";
                                                            fileSystem = "dolor";
                                                            freeBytes = "aliquid";
                                                            mountPoint = "consectetur";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "cumque";
                                                            uuid = "8873e484-380b-41f6-b8ca-275a60a04c49";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "ullam";
                                                            fileSystem = "eligendi";
                                                            freeBytes = "placeat";
                                                            mountPoint = "voluptas";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "occaecati";
                                                            uuid = "9171b51c-1bdb-41cf-8b88-8ebdfc4ccca9";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "occaecati";
                                                            fileSystem = "libero";
                                                            freeBytes = "quo";
                                                            mountPoint = "esse";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "hic";
                                                            uuid = "c0b2dce1-0873-4e42-b006-d678878ba858";
                                                        }}),
                                                    }};
                                                }};
                                                status = "architecto";
                                                totalCapacityBytes = "est";
                                                totalFreeBytes = "enim";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_RDM_V1;
                                                    rdmCompatibilityMode = "magni";
                                                    shared = false;
                                                    vmdkDiskMode = "quae";
                                                }};
                                            }}),
                                            add(new DiskEntry() {{
                                                diskLabel = "quas";
                                                diskLabelType = "placeat";
                                                hwAddress = "enim";
                                                interfaceType = "labore";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "saepe";
                                                            fileSystem = "delectus";
                                                            freeBytes = "officia";
                                                            mountPoint = "natus";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "cumque";
                                                            uuid = "95f2eac5-565d-4307-8fee-81206e2813fa";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "aliquam";
                                                            fileSystem = "deserunt";
                                                            freeBytes = "modi";
                                                            mountPoint = "sunt";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "impedit";
                                                            uuid = "480d3f21-32af-4031-82d5-14f4cc6f18bf";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "excepturi";
                                                            fileSystem = "aliquid";
                                                            freeBytes = "sed";
                                                            mountPoint = "beatae";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "similique";
                                                            uuid = "6a4f77a8-7ee3-4e4b-a752-c65b34418e3b";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "libero";
                                                            fileSystem = "iste";
                                                            freeBytes = "illo";
                                                            mountPoint = "minus";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "quos";
                                                            uuid = "d975e0e8-419d-48f8-8f14-4f3e07edcc4a";
                                                        }}),
                                                    }};
                                                }};
                                                status = "deserunt";
                                                totalCapacityBytes = "ad";
                                                totalFreeBytes = "reiciendis";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_FLAT_V1;
                                                    rdmCompatibilityMode = "porro";
                                                    shared = false;
                                                    vmdkDiskMode = "laborum";
                                                }};
                                            }}),
                                            add(new DiskEntry() {{
                                                diskLabel = "nobis";
                                                diskLabelType = "quibusdam";
                                                hwAddress = "omnis";
                                                interfaceType = "aut";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "officia";
                                                            fileSystem = "cupiditate";
                                                            freeBytes = "reprehenderit";
                                                            mountPoint = "quia";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "necessitatibus";
                                                            uuid = "05672822-7b2d-4309-870b-f7a4fa87cf53";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "ullam";
                                                            fileSystem = "laborum";
                                                            freeBytes = "voluptas";
                                                            mountPoint = "doloribus";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "animi";
                                                            uuid = "e54ebf60-c321-4f02-bb75-d2367fe1a0cc";
                                                        }}),
                                                    }};
                                                }};
                                                status = "quos";
                                                totalCapacityBytes = "possimus";
                                                totalFreeBytes = "maiores";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_RDM_V1;
                                                    rdmCompatibilityMode = "provident";
                                                    shared = false;
                                                    vmdkDiskMode = "sapiente";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    hddTotalCapacityBytes = "aperiam";
                                    hddTotalFreeBytes = "similique";
                                    lsblkJson = "nesciunt";
                                }};
                                vmName = "provident";
                                vmNetwork = new VirtualMachineNetworkDetails() {{
                                    defaultGw = "ex";
                                    networkAdapters = new NetworkAdapterList() {{
                                        networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "unde";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "sequi";
                                                            fqdn = "commodi";
                                                            ipAddress = "labore";
                                                            subnetMask = "expedita";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "in";
                                            }}),
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "quisquam";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                            bcast = "nulla";
                                                            fqdn = "maiores";
                                                            ipAddress = "distinctio";
                                                            subnetMask = "mollitia";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "impedit";
                                            }}),
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "accusamus";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                            bcast = "blanditiis";
                                                            fqdn = "cum";
                                                            ipAddress = "dicta";
                                                            subnetMask = "impedit";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "tempora";
                                            }}),
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "eveniet";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                            bcast = "impedit";
                                                            fqdn = "quas";
                                                            ipAddress = "impedit";
                                                            subnetMask = "vel";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "recusandae";
                                                            fqdn = "ex";
                                                            ipAddress = "beatae";
                                                            subnetMask = "veritatis";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "itaque";
                                                            fqdn = "vero";
                                                            ipAddress = "quidem";
                                                            subnetMask = "illo";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "dignissimos";
                                                            fqdn = "minus";
                                                            ipAddress = "distinctio";
                                                            subnetMask = "possimus";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "cum";
                                            }}),
                                        }};
                                    }};
                                    primaryIpAddress = "suscipit";
                                    primaryMacAddress = "saepe";
                                    publicIpAddress = "earum";
                                }};
                                vmUuid = "quod";
                            }};
                        }}),
                        add(new AssetFrame() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("quaerat", "ipsum");
                                put("ducimus", "laudantium");
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("deserunt", "odit");
                                put("ad", "sequi");
                                put("beatae", "iusto");
                            }};
                            performanceSamples = new org.openapis.openapi.models.shared.PerformanceSample[]{{
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 2982.46;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 4877.99;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 8625.6;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 7714.06;
                                        averageIngressBps = 5862.77;
                                    }};
                                    sampleTime = "illo";
                                }}),
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 3486.65;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 6704.3;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 8488.33;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 1479.89;
                                        averageIngressBps = 8048.79;
                                    }};
                                    sampleTime = "dolorum";
                                }}),
                            }};
                            reportTime = "repellat";
                            traceToken = "nostrum";
                            virtualMachineDetails = new VirtualMachineDetails() {{
                                coreCount = 847308;
                                createTime = "quibusdam";
                                guestOs = new GuestOsDetails() {{
                                    config = new GuestConfigDetails() {{
                                        fstab = new FstabEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                add(new FstabEntry() {{
                                                    file = "esse";
                                                    freq = 127499;
                                                    mntops = "consectetur";
                                                    passno = 840641;
                                                    spec = "optio";
                                                    vfstype = "ipsa";
                                                }}),
                                                add(new FstabEntry() {{
                                                    file = "maiores";
                                                    freq = 350271;
                                                    mntops = "culpa";
                                                    passno = 919738;
                                                    spec = "aspernatur";
                                                    vfstype = "sapiente";
                                                }}),
                                            }};
                                        }};
                                        hosts = new HostsEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("suscipit"),
                                                        add("harum"),
                                                        add("ducimus"),
                                                    }};
                                                    ip = "doloremque";
                                                }}),
                                            }};
                                        }};
                                        issue = "perferendis";
                                        nfsExports = new NfsExportList() {{
                                            entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                add(new NfsExport() {{
                                                    exportDirectory = "iusto";
                                                    hosts = new String[]{{
                                                        add("molestiae"),
                                                        add("quis"),
                                                        add("iure"),
                                                    }};
                                                }}),
                                                add(new NfsExport() {{
                                                    exportDirectory = "ab";
                                                    hosts = new String[]{{
                                                        add("amet"),
                                                        add("sapiente"),
                                                    }};
                                                }}),
                                                add(new NfsExport() {{
                                                    exportDirectory = "corporis";
                                                    hosts = new String[]{{
                                                        add("iure"),
                                                        add("quisquam"),
                                                        add("provident"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        selinux = new Selinux() {{
                                            enabled = false;
                                            mode = "laudantium";
                                        }};
                                    }};
                                    runtime = new GuestRuntimeDetails() {{
                                        domain = "nam";
                                        installedApps = new GuestInstalledApplicationList() {{
                                            entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                add(new GuestInstalledApplication() {{
                                                    name = "Holly Harber V";
                                                    path = "doloremque";
                                                    time = "fugiat";
                                                    vendor = "numquam";
                                                    version = "doloremque";
                                                }}),
                                                add(new GuestInstalledApplication() {{
                                                    name = "Loren Murphy";
                                                    path = "nisi";
                                                    time = "cumque";
                                                    vendor = "soluta";
                                                    version = "fugiat";
                                                }}),
                                            }};
                                        }};
                                        lastUptime = new Date() {{
                                            day = 389287;
                                            month = 720319;
                                            year = 315387;
                                        }};
                                        machineName = "maiores";
                                        networkInfo = new RuntimeNetworkInfo() {{
                                            connections = new NetworkConnectionList() {{
                                                entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "necessitatibus";
                                                        localPort = 803792;
                                                        pid = "cupiditate";
                                                        processName = "voluptatem";
                                                        protocol = "provident";
                                                        remoteIpAddress = "adipisci";
                                                        remotePort = 34267;
                                                        state = "magnam";
                                                    }}),
                                                }};
                                            }};
                                            netstat = "repellat";
                                            netstatTime = new DateTime() {{
                                                day = 607631;
                                                hours = 131576;
                                                minutes = 425817;
                                                month = 740347;
                                                nanos = 663062;
                                                seconds = 821016;
                                                timeZone = new TimeZone() {{
                                                    id = "2553819b-474b-40ed-a0e5-6248fff639a9";
                                                    version = "beatae";
                                                }};
                                                utcOffset = "ipsa";
                                                year = 650914;
                                            }};
                                        }};
                                        openFileList = new OpenFileList() {{
                                            entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                add(new OpenFileDetails() {{
                                                    command = "assumenda";
                                                    filePath = "quo";
                                                    fileType = "fuga";
                                                    user = "tempore";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "commodi";
                                                    filePath = "fugit";
                                                    fileType = "suscipit";
                                                    user = "voluptate";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "nisi";
                                                    filePath = "aliquid";
                                                    fileType = "provident";
                                                    user = "laboriosam";
                                                }}),
                                            }};
                                        }};
                                        processes = new RunningProcessList() {{
                                            processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("itaque", "quisquam");
                                                    }};
                                                    cmdline = "eaque";
                                                    exePath = "alias";
                                                    pid = "qui";
                                                    user = "consequuntur";
                                                }}),
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("quidem", "sequi");
                                                    }};
                                                    cmdline = "amet";
                                                    exePath = "exercitationem";
                                                    pid = "illum";
                                                    user = "praesentium";
                                                }}),
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("similique", "eligendi");
                                                        put("tempore", "amet");
                                                        put("debitis", "nobis");
                                                    }};
                                                    cmdline = "asperiores";
                                                    exePath = "temporibus";
                                                    pid = "id";
                                                    user = "atque";
                                                }}),
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("sit", "quo");
                                                        put("veniam", "aliquam");
                                                        put("provident", "vero");
                                                        put("earum", "doloremque");
                                                    }};
                                                    cmdline = "ipsum";
                                                    exePath = "alias";
                                                    pid = "doloremque";
                                                    user = "tempora";
                                                }}),
                                            }};
                                        }};
                                        services = new RunningServiceList() {{
                                            services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                add(new RunningService() {{
                                                    cmdline = "quam";
                                                    exePath = "atque";
                                                    name = "Brett Brakus";
                                                    pid = "veritatis";
                                                    startMode = "quod";
                                                    state = "a";
                                                    status = "qui";
                                                }}),
                                                add(new RunningService() {{
                                                    cmdline = "accusantium";
                                                    exePath = "commodi";
                                                    name = "Jimmie West";
                                                    pid = "quod";
                                                    startMode = "vitae";
                                                    state = "sapiente";
                                                    status = "reiciendis";
                                                }}),
                                                add(new RunningService() {{
                                                    cmdline = "quod";
                                                    exePath = "voluptate";
                                                    name = "Mable Schneider III";
                                                    pid = "consectetur";
                                                    startMode = "maiores";
                                                    state = "sed";
                                                    status = "animi";
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                memoryMb = 197519;
                                osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_UNIX;
                                osName = "voluptatum";
                                osVersion = "perferendis";
                                platform = new PlatformDetails() {{
                                    awsEc2Details = new AwsEc2PlatformDetails() {{
                                        location = "laborum";
                                        machineTypeLabel = "omnis";
                                    }};
                                    azureVmDetails = new AzureVmPlatformDetails() {{
                                        location = "nihil";
                                        machineTypeLabel = "tenetur";
                                        provisioningState = "sapiente";
                                    }};
                                    genericDetails = new GenericPlatformDetails() {{
                                        location = "velit";
                                    }};
                                    physicalDetails = new PhysicalPlatformDetails() {{
                                        location = "adipisci";
                                    }};
                                    vmwareDetails = new VmwarePlatformDetails() {{
                                        esxVersion = "non";
                                        osid = "optio";
                                        vcenterVersion = "illum";
                                    }};
                                }};
                                powerState = "at";
                                vcenterFolder = "tenetur";
                                vcenterUrl = "molestias";
                                vcenterVmId = "ipsam";
                                vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                    bios = new BiosDetails() {{
                                        biosManufacturer = "esse";
                                        biosName = "laborum";
                                        biosReleaseDate = "perspiciatis";
                                        biosVersion = "voluptates";
                                        smbiosUuid = "eum";
                                    }};
                                    cpuArchitecture = "quasi";
                                    cpuManufacturer = "quas";
                                    cpuName = "odio";
                                    cpuSocketCount = 416934;
                                    cpuThreadCount = 780789;
                                    firmware = "aliquid";
                                    hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_DISABLED;
                                    vendor = "quidem";
                                }};
                                vmDisks = new VirtualMachineDiskDetails() {{
                                    disks = new DiskEntryList() {{
                                        entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                            add(new DiskEntry() {{
                                                diskLabel = "et";
                                                diskLabelType = "nulla";
                                                hwAddress = "magni";
                                                interfaceType = "natus";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "a";
                                                            fileSystem = "impedit";
                                                            freeBytes = "unde";
                                                            mountPoint = "ut";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "facere";
                                                            uuid = "6fecd799-3900-466a-ad2d-000355338cec";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "doloremque";
                                                            fileSystem = "totam";
                                                            freeBytes = "iure";
                                                            mountPoint = "maiores";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "est";
                                                            uuid = "21e9152c-b311-4916-bb8e-3c8db03408d6";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "quibusdam";
                                                            fileSystem = "consectetur";
                                                            freeBytes = "voluptas";
                                                            mountPoint = "quaerat";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "earum";
                                                            uuid = "fd455906-d126-43d4-8e93-5c2c9e81f30b";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "necessitatibus";
                                                            fileSystem = "sequi";
                                                            freeBytes = "recusandae";
                                                            mountPoint = "labore";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "adipisci";
                                                            uuid = "202d7216-5765-4066-8187-0d9d21f9ad03";
                                                        }}),
                                                    }};
                                                }};
                                                status = "doloremque";
                                                totalCapacityBytes = "optio";
                                                totalFreeBytes = "tempora";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_SESPARSE_V2;
                                                    rdmCompatibilityMode = "cumque";
                                                    shared = false;
                                                    vmdkDiskMode = "maxime";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    hddTotalCapacityBytes = "et";
                                    hddTotalFreeBytes = "beatae";
                                    lsblkJson = "id";
                                }};
                                vmName = "consequatur";
                                vmNetwork = new VirtualMachineNetworkDetails() {{
                                    defaultGw = "quos";
                                    networkAdapters = new NetworkAdapterList() {{
                                        networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "iure";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_UNSPECIFIED;
                                                            bcast = "natus";
                                                            fqdn = "voluptatem";
                                                            ipAddress = "suscipit";
                                                            subnetMask = "laudantium";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "laudantium";
                                                            fqdn = "ullam";
                                                            ipAddress = "aut";
                                                            subnetMask = "quia";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "officia";
                                            }}),
                                        }};
                                    }};
                                    primaryIpAddress = "quaerat";
                                    primaryMacAddress = "corporis";
                                    publicIpAddress = "accusamus";
                                }};
                                vmUuid = "iusto";
                            }};
                        }}),
                        add(new AssetFrame() {{
                            attributes = new java.util.HashMap<String, String>() {{
                                put("esse", "neque");
                                put("quidem", "quisquam");
                                put("praesentium", "tempora");
                                put("ipsam", "officiis");
                            }};
                            labels = new java.util.HashMap<String, String>() {{
                                put("magni", "voluptatem");
                            }};
                            performanceSamples = new org.openapis.openapi.models.shared.PerformanceSample[]{{
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 2261.81;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 842.11;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 6218.1;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 9738.94;
                                        averageIngressBps = 2581.4;
                                    }};
                                    sampleTime = "rerum";
                                }}),
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 6786.95;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 8418.16;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 9375.91;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 5666.69;
                                        averageIngressBps = 2565.67;
                                    }};
                                    sampleTime = "molestiae";
                                }}),
                                add(new PerformanceSample() {{
                                    cpu = new CpuUsageSample() {{
                                        utilizedPercentage = 7738.33;
                                    }};
                                    disk = new DiskUsageSample() {{
                                        averageIops = 6218.83;
                                    }};
                                    memory = new MemoryUsageSample() {{
                                        utilizedPercentage = 6561.59;
                                    }};
                                    network = new NetworkUsageSample() {{
                                        averageEgressBps = 5287.42;
                                        averageIngressBps = 3995.85;
                                    }};
                                    sampleTime = "nihil";
                                }}),
                            }};
                            reportTime = "facilis";
                            traceToken = "optio";
                            virtualMachineDetails = new VirtualMachineDetails() {{
                                coreCount = 279673;
                                createTime = "eos";
                                guestOs = new GuestOsDetails() {{
                                    config = new GuestConfigDetails() {{
                                        fstab = new FstabEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.FstabEntry[]{{
                                                add(new FstabEntry() {{
                                                    file = "dolores";
                                                    freq = 400492;
                                                    mntops = "eum";
                                                    passno = 423701;
                                                    spec = "ad";
                                                    vfstype = "quos";
                                                }}),
                                                add(new FstabEntry() {{
                                                    file = "illo";
                                                    freq = 383381;
                                                    mntops = "quibusdam";
                                                    passno = 855484;
                                                    spec = "impedit";
                                                    vfstype = "culpa";
                                                }}),
                                            }};
                                        }};
                                        hosts = new HostsEntryList() {{
                                            entries = new org.openapis.openapi.models.shared.HostsEntry[]{{
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("maiores"),
                                                        add("nemo"),
                                                        add("illo"),
                                                        add("doloribus"),
                                                    }};
                                                    ip = "cumque";
                                                }}),
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("modi"),
                                                        add("cumque"),
                                                        add("ipsam"),
                                                    }};
                                                    ip = "occaecati";
                                                }}),
                                                add(new HostsEntry() {{
                                                    hostNames = new String[]{{
                                                        add("accusamus"),
                                                    }};
                                                    ip = "quisquam";
                                                }}),
                                            }};
                                        }};
                                        issue = "quasi";
                                        nfsExports = new NfsExportList() {{
                                            entries = new org.openapis.openapi.models.shared.NfsExport[]{{
                                                add(new NfsExport() {{
                                                    exportDirectory = "quo";
                                                    hosts = new String[]{{
                                                        add("mollitia"),
                                                        add("id"),
                                                        add("quibusdam"),
                                                        add("ipsa"),
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        selinux = new Selinux() {{
                                            enabled = false;
                                            mode = "accusamus";
                                        }};
                                    }};
                                    runtime = new GuestRuntimeDetails() {{
                                        domain = "placeat";
                                        installedApps = new GuestInstalledApplicationList() {{
                                            entries = new org.openapis.openapi.models.shared.GuestInstalledApplication[]{{
                                                add(new GuestInstalledApplication() {{
                                                    name = "Brendan Ullrich";
                                                    path = "at";
                                                    time = "molestias";
                                                    vendor = "aut";
                                                    version = "temporibus";
                                                }}),
                                                add(new GuestInstalledApplication() {{
                                                    name = "Barry Funk";
                                                    path = "dolore";
                                                    time = "esse";
                                                    vendor = "reiciendis";
                                                    version = "iste";
                                                }}),
                                            }};
                                        }};
                                        lastUptime = new Date() {{
                                            day = 226196;
                                            month = 581019;
                                            year = 15738;
                                        }};
                                        machineName = "impedit";
                                        networkInfo = new RuntimeNetworkInfo() {{
                                            connections = new NetworkConnectionList() {{
                                                entries = new org.openapis.openapi.models.shared.NetworkConnection[]{{
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "quos";
                                                        localPort = 502509;
                                                        pid = "quas";
                                                        processName = "voluptatem";
                                                        protocol = "provident";
                                                        remoteIpAddress = "quas";
                                                        remotePort = 218413;
                                                        state = "vero";
                                                    }}),
                                                    add(new NetworkConnection() {{
                                                        localIpAddress = "fuga";
                                                        localPort = 704732;
                                                        pid = "maiores";
                                                        processName = "error";
                                                        protocol = "recusandae";
                                                        remoteIpAddress = "a";
                                                        remotePort = 234964;
                                                        state = "sapiente";
                                                    }}),
                                                }};
                                            }};
                                            netstat = "voluptatibus";
                                            netstatTime = new DateTime() {{
                                                day = 824267;
                                                hours = 830149;
                                                minutes = 607742;
                                                month = 966652;
                                                nanos = 487765;
                                                seconds = 974703;
                                                timeZone = new TimeZone() {{
                                                    id = "079af4d3-5724-4cdb-8f4d-281187d56844";
                                                    version = "accusamus";
                                                }};
                                                utcOffset = "nulla";
                                                year = 921127;
                                            }};
                                        }};
                                        openFileList = new OpenFileList() {{
                                            entries = new org.openapis.openapi.models.shared.OpenFileDetails[]{{
                                                add(new OpenFileDetails() {{
                                                    command = "praesentium";
                                                    filePath = "enim";
                                                    fileType = "animi";
                                                    user = "unde";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "quae";
                                                    filePath = "eum";
                                                    fileType = "nostrum";
                                                    user = "eveniet";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "laboriosam";
                                                    filePath = "ratione";
                                                    fileType = "blanditiis";
                                                    user = "quidem";
                                                }}),
                                                add(new OpenFileDetails() {{
                                                    command = "illum";
                                                    filePath = "reiciendis";
                                                    fileType = "placeat";
                                                    user = "dolores";
                                                }}),
                                            }};
                                        }};
                                        processes = new RunningProcessList() {{
                                            processes = new org.openapis.openapi.models.shared.RunningProcess[]{{
                                                add(new RunningProcess() {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("quia", "quidem");
                                                    }};
                                                    cmdline = "voluptas";
                                                    exePath = "quo";
                                                    pid = "laudantium";
                                                    user = "dignissimos";
                                                }}),
                                            }};
                                        }};
                                        services = new RunningServiceList() {{
                                            services = new org.openapis.openapi.models.shared.RunningService[]{{
                                                add(new RunningService() {{
                                                    cmdline = "omnis";
                                                    exePath = "fugit";
                                                    name = "Melody Kreiger I";
                                                    pid = "ad";
                                                    startMode = "atque";
                                                    state = "ut";
                                                    status = "asperiores";
                                                }}),
                                                add(new RunningService() {{
                                                    cmdline = "reprehenderit";
                                                    exePath = "deserunt";
                                                    name = "Carl Davis";
                                                    pid = "praesentium";
                                                    startMode = "natus";
                                                    state = "vitae";
                                                    status = "tenetur";
                                                }}),
                                                add(new RunningService() {{
                                                    cmdline = "laudantium";
                                                    exePath = "aspernatur";
                                                    name = "Mrs. Grady Carroll";
                                                    pid = "inventore";
                                                    startMode = "voluptate";
                                                    state = "sed";
                                                    status = "dolorem";
                                                }}),
                                            }};
                                        }};
                                    }};
                                }};
                                memoryMb = 52497;
                                osFamily = VirtualMachineDetailsOsFamilyEnum.OS_FAMILY_WINDOWS;
                                osName = "amet";
                                osVersion = "voluptate";
                                platform = new PlatformDetails() {{
                                    awsEc2Details = new AwsEc2PlatformDetails() {{
                                        location = "voluptate";
                                        machineTypeLabel = "pariatur";
                                    }};
                                    azureVmDetails = new AzureVmPlatformDetails() {{
                                        location = "minus";
                                        machineTypeLabel = "a";
                                        provisioningState = "fuga";
                                    }};
                                    genericDetails = new GenericPlatformDetails() {{
                                        location = "totam";
                                    }};
                                    physicalDetails = new PhysicalPlatformDetails() {{
                                        location = "cupiditate";
                                    }};
                                    vmwareDetails = new VmwarePlatformDetails() {{
                                        esxVersion = "at";
                                        osid = "doloribus";
                                        vcenterVersion = "omnis";
                                    }};
                                }};
                                powerState = "quam";
                                vcenterFolder = "exercitationem";
                                vcenterUrl = "voluptates";
                                vcenterVmId = "sequi";
                                vmArchitecture = new VirtualMachineArchitectureDetails() {{
                                    bios = new BiosDetails() {{
                                        biosManufacturer = "quis";
                                        biosName = "commodi";
                                        biosReleaseDate = "vel";
                                        biosVersion = "rem";
                                        smbiosUuid = "aliquid";
                                    }};
                                    cpuArchitecture = "aperiam";
                                    cpuManufacturer = "perspiciatis";
                                    cpuName = "fugit";
                                    cpuSocketCount = 932057;
                                    cpuThreadCount = 600185;
                                    firmware = "cumque";
                                    hyperthreading = VirtualMachineArchitectureDetailsHyperthreadingEnum.HYPER_THREADING_UNSPECIFIED;
                                    vendor = "repellendus";
                                }};
                                vmDisks = new VirtualMachineDiskDetails() {{
                                    disks = new DiskEntryList() {{
                                        entries = new org.openapis.openapi.models.shared.DiskEntry[]{{
                                            add(new DiskEntry() {{
                                                diskLabel = "minus";
                                                diskLabelType = "minima";
                                                hwAddress = "a";
                                                interfaceType = "beatae";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "veritatis";
                                                            fileSystem = "facere";
                                                            freeBytes = "earum";
                                                            mountPoint = "laborum";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "dicta";
                                                            uuid = "026d541a-4d19-40fe-b217-80bccc0dbbdd";
                                                        }}),
                                                    }};
                                                }};
                                                status = "soluta";
                                                totalCapacityBytes = "magnam";
                                                totalFreeBytes = "laudantium";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_FLAT_V2;
                                                    rdmCompatibilityMode = "esse";
                                                    shared = false;
                                                    vmdkDiskMode = "doloremque";
                                                }};
                                            }}),
                                            add(new DiskEntry() {{
                                                diskLabel = "corrupti";
                                                diskLabelType = "reiciendis";
                                                hwAddress = "facilis";
                                                interfaceType = "aliquam";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "amet";
                                                            fileSystem = "natus";
                                                            freeBytes = "ab";
                                                            mountPoint = "officiis";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "eum";
                                                            uuid = "bc158c4c-4e54-4599-aa34-2260e9b200ce";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "voluptate";
                                                            fileSystem = "deleniti";
                                                            freeBytes = "est";
                                                            mountPoint = "et";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "expedita";
                                                            uuid = "d8fb7a0a-116c-4e72-bd40-97fa30e9af72";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "ipsam";
                                                            fileSystem = "libero";
                                                            freeBytes = "quia";
                                                            mountPoint = "omnis";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "dicta";
                                                            uuid = "22030d83-f5ae-4b77-99d2-2e8c1f849382";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "nemo";
                                                            fileSystem = "delectus";
                                                            freeBytes = "illum";
                                                            mountPoint = "porro";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "quaerat";
                                                            uuid = "2c876c2c-2dfb-44cf-81c7-6230f841fb1b";
                                                        }}),
                                                    }};
                                                }};
                                                status = "assumenda";
                                                totalCapacityBytes = "eos";
                                                totalFreeBytes = "dolorem";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_SESPARSE_V2;
                                                    rdmCompatibilityMode = "repellendus";
                                                    shared = false;
                                                    vmdkDiskMode = "nam";
                                                }};
                                            }}),
                                            add(new DiskEntry() {{
                                                diskLabel = "ab";
                                                diskLabelType = "magnam";
                                                hwAddress = "pariatur";
                                                interfaceType = "expedita";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "tempore";
                                                            fileSystem = "recusandae";
                                                            freeBytes = "nostrum";
                                                            mountPoint = "officia";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "voluptas";
                                                            uuid = "85998e22-ae20-4da1-afc2-b271a289c57e";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "rem";
                                                            fileSystem = "nemo";
                                                            freeBytes = "non";
                                                            mountPoint = "recusandae";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "omnis";
                                                            uuid = "0439d222-4656-4946-a407-084f7ab37cef";
                                                        }}),
                                                    }};
                                                }};
                                                status = "accusantium";
                                                totalCapacityBytes = "sed";
                                                totalFreeBytes = "eos";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_FLAT_V1;
                                                    rdmCompatibilityMode = "quis";
                                                    shared = false;
                                                    vmdkDiskMode = "vitae";
                                                }};
                                            }}),
                                            add(new DiskEntry() {{
                                                diskLabel = "occaecati";
                                                diskLabelType = "labore";
                                                hwAddress = "fugiat";
                                                interfaceType = "quidem";
                                                partitions = new DiskPartitionList() {{
                                                    entries = new org.openapis.openapi.models.shared.DiskPartition[]{{
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "veniam";
                                                            fileSystem = "modi";
                                                            freeBytes = "quasi";
                                                            mountPoint = "quae";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "similique";
                                                            uuid = "dc669af9-0a26-4c7c-9c98-1f068981d6bb";
                                                        }}),
                                                        add(new DiskPartition() {{
                                                            capacityBytes = "amet";
                                                            fileSystem = "adipisci";
                                                            freeBytes = "minus";
                                                            mountPoint = "hic";
                                                            subPartitions = new DiskPartitionList() {{}};
                                                            type = "similique";
                                                            uuid = "a348c31b-f407-4ee4-bcf0-c42b78f15626";
                                                        }}),
                                                    }};
                                                }};
                                                status = "ratione";
                                                totalCapacityBytes = "excepturi";
                                                totalFreeBytes = "corrupti";
                                                vmwareConfig = new VmwareDiskConfig() {{
                                                    backingType = VmwareDiskConfigBackingTypeEnum.BACKING_TYPE_SESPARSE;
                                                    rdmCompatibilityMode = "perferendis";
                                                    shared = false;
                                                    vmdkDiskMode = "quibusdam";
                                                }};
                                            }}),
                                        }};
                                    }};
                                    hddTotalCapacityBytes = "impedit";
                                    hddTotalFreeBytes = "ducimus";
                                    lsblkJson = "nisi";
                                }};
                                vmName = "nisi";
                                vmNetwork = new VirtualMachineNetworkDetails() {{
                                    defaultGw = "dolor";
                                    networkAdapters = new NetworkAdapterList() {{
                                        networkAdapters = new org.openapis.openapi.models.shared.NetworkAdapterDetails[]{{
                                            add(new NetworkAdapterDetails() {{
                                                adapterType = "dolore";
                                                addresses = new NetworkAddressList() {{
                                                    addresses = new org.openapis.openapi.models.shared.NetworkAddress[]{{
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "expedita";
                                                            fqdn = "accusantium";
                                                            ipAddress = "ea";
                                                            subnetMask = "impedit";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                            bcast = "optio";
                                                            fqdn = "est";
                                                            ipAddress = "inventore";
                                                            subnetMask = "consequuntur";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_DHCP;
                                                            bcast = "sit";
                                                            fqdn = "dolores";
                                                            ipAddress = "enim";
                                                            subnetMask = "aspernatur";
                                                        }}),
                                                        add(new NetworkAddress() {{
                                                            assignment = NetworkAddressAssignmentEnum.ADDRESS_ASSIGNMENT_STATIC;
                                                            bcast = "magni";
                                                            fqdn = "odio";
                                                            ipAddress = "alias";
                                                            subnetMask = "quidem";
                                                        }}),
                                                    }};
                                                }};
                                                macAddress = "deleniti";
                                            }}),
                                        }};
                                    }};
                                    primaryIpAddress = "possimus";
                                    primaryMacAddress = "ipsam";
                                    publicIpAddress = "odio";
                                }};
                                vmUuid = "fugit";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "praesentium";
                key = "sint";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "cum";
                source = "voluptatum";
                uploadType = "facilis";
                uploadProtocol = "placeat";
            }};            

            MigrationcenterProjectsLocationsAssetsReportAssetFramesResponse res = sdk.projects.migrationcenterProjectsLocationsAssetsReportAssetFrames(req, new MigrationcenterProjectsLocationsAssetsReportAssetFramesSecurity("reiciendis", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reportAssetFramesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsGroupsAddAssets

Adds assets to a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsAddAssetsRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsAddAssetsResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsAddAssetsSecurity;
import org.openapis.openapi.models.shared.AddAssetsToGroupRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssetList;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsGroupsAddAssetsRequest req = new MigrationcenterProjectsLocationsGroupsAddAssetsRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                addAssetsToGroupRequest = new AddAssetsToGroupRequest() {{
                    allowExisting = false;
                    assets = new AssetList() {{
                        assetIds = new String[]{{
                            add("cupiditate"),
                            add("nemo"),
                            add("natus"),
                        }};
                    }};;
                    requestId = "nisi";
                }};;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "nostrum";
                key = "qui";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "dolore";
                uploadProtocol = "ullam";
            }};            

            MigrationcenterProjectsLocationsGroupsAddAssetsResponse res = sdk.projects.migrationcenterProjectsLocationsGroupsAddAssets(req, new MigrationcenterProjectsLocationsGroupsAddAssetsSecurity("velit", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsGroupsCreate

Creates a new group in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GroupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsGroupsCreateRequest req = new MigrationcenterProjectsLocationsGroupsCreateRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                groupInput = new GroupInput() {{
                    description = "numquam";
                    displayName = "fugiat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quas", "repellendus");
                        put("saepe", "amet");
                    }};
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "iste";
                groupId = "nesciunt";
                key = "corrupti";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "ullam";
                uploadType = "dolorum";
                uploadProtocol = "soluta";
            }};            

            MigrationcenterProjectsLocationsGroupsCreateResponse res = sdk.projects.migrationcenterProjectsLocationsGroupsCreate(req, new MigrationcenterProjectsLocationsGroupsCreateSecurity("cum", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsGroupsList

Lists all groups in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsGroupsListRequest req = new MigrationcenterProjectsLocationsGroupsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "ullam";
                filter = "doloremque";
                key = "est";
                oauthToken = "qui";
                orderBy = "praesentium";
                pageSize = 237189L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "deserunt";
                uploadProtocol = "eligendi";
            }};            

            MigrationcenterProjectsLocationsGroupsListResponse res = sdk.projects.migrationcenterProjectsLocationsGroupsList(req, new MigrationcenterProjectsLocationsGroupsListSecurity("incidunt", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsGroupsRemoveAssets

Removes assets from a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssetList;
import org.openapis.openapi.models.shared.RemoveAssetsFromGroupRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest req = new MigrationcenterProjectsLocationsGroupsRemoveAssetsRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                removeAssetsFromGroupRequest = new RemoveAssetsFromGroupRequest() {{
                    allowMissing = false;
                    assets = new AssetList() {{
                        assetIds = new String[]{{
                            add("possimus"),
                            add("odit"),
                            add("consectetur"),
                            add("inventore"),
                        }};
                    }};;
                    requestId = "minima";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                fields = "nisi";
                key = "ipsam";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "iure";
                uploadProtocol = "incidunt";
            }};            

            MigrationcenterProjectsLocationsGroupsRemoveAssetsResponse res = sdk.projects.migrationcenterProjectsLocationsGroupsRemoveAssets(req, new MigrationcenterProjectsLocationsGroupsRemoveAssetsSecurity("eveniet", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsCreate

Creates an import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecutionReport;
import org.openapis.openapi.models.shared.FileValidationReport;
import org.openapis.openapi.models.shared.GCSPayloadInfo;
import org.openapis.openapi.models.shared.GCSPayloadInfoFormatEnum;
import org.openapis.openapi.models.shared.ImportError;
import org.openapis.openapi.models.shared.ImportErrorSeverityEnum;
import org.openapis.openapi.models.shared.ImportJobInput;
import org.openapis.openapi.models.shared.ImportRowError;
import org.openapis.openapi.models.shared.InlinePayloadInfo;
import org.openapis.openapi.models.shared.InlinePayloadInfoFormatEnum;
import org.openapis.openapi.models.shared.PayloadFile;
import org.openapis.openapi.models.shared.ValidationReport;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsCreateRequest req = new MigrationcenterProjectsLocationsImportJobsCreateRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                importJobInput = new ImportJobInput() {{
                    assetSource = "veniam";
                    displayName = "quidem";
                    executionReport = new ExecutionReport() {{
                        executionErrors = new ValidationReport() {{
                            fileValidations = new org.openapis.openapi.models.shared.FileValidationReport[]{{
                                add(new FileValidationReport() {{
                                    fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                        add(new ImportError() {{
                                            errorDetails = "deserunt";
                                            severity = ImportErrorSeverityEnum.INFO;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "nemo";
                                            severity = ImportErrorSeverityEnum.WARNING;
                                        }}),
                                    }};
                                    fileName = "architecto";
                                    partialReport = false;
                                    rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "praesentium";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "assumenda";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "maiores";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "commodi";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                            }};
                                            rowNumber = 147297;
                                            vmName = "nam";
                                            vmUuid = "ex";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "quod";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                            }};
                                            rowNumber = 186;
                                            vmName = "ad";
                                            vmUuid = "a";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "id";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "quaerat";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "dignissimos";
                                                    severity = ImportErrorSeverityEnum.ERROR;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "modi";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                            }};
                                            rowNumber = 435931;
                                            vmName = "deleniti";
                                            vmUuid = "officia";
                                        }}),
                                    }};
                                }}),
                                add(new FileValidationReport() {{
                                    fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                        add(new ImportError() {{
                                            errorDetails = "laborum";
                                            severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "ad";
                                            severity = ImportErrorSeverityEnum.INFO;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "sit";
                                            severity = ImportErrorSeverityEnum.WARNING;
                                        }}),
                                    }};
                                    fileName = "voluptas";
                                    partialReport = false;
                                    rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "maiores";
                                                    severity = ImportErrorSeverityEnum.ERROR;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "vel";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                            }};
                                            rowNumber = 881067;
                                            vmName = "reiciendis";
                                            vmUuid = "consequatur";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "accusantium";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                            }};
                                            rowNumber = 590280;
                                            vmName = "maiores";
                                            vmUuid = "quaerat";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "non";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "incidunt";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                            }};
                                            rowNumber = 318403;
                                            vmName = "nihil";
                                            vmUuid = "libero";
                                        }}),
                                    }};
                                }}),
                                add(new FileValidationReport() {{
                                    fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                        add(new ImportError() {{
                                            errorDetails = "excepturi";
                                            severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "quisquam";
                                            severity = ImportErrorSeverityEnum.WARNING;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "repellendus";
                                            severity = ImportErrorSeverityEnum.WARNING;
                                        }}),
                                    }};
                                    fileName = "quibusdam";
                                    partialReport = false;
                                    rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "similique";
                                                    severity = ImportErrorSeverityEnum.ERROR;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "dicta";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                            }};
                                            rowNumber = 956390;
                                            vmName = "id";
                                            vmUuid = "odit";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "iste";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                            }};
                                            rowNumber = 129531;
                                            vmName = "ullam";
                                            vmUuid = "atque";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "pariatur";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "similique";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "eveniet";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "animi";
                                                    severity = ImportErrorSeverityEnum.ERROR;
                                                }}),
                                            }};
                                            rowNumber = 455400;
                                            vmName = "voluptatibus";
                                            vmUuid = "quam";
                                        }}),
                                    }};
                                }}),
                                add(new FileValidationReport() {{
                                    fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                        add(new ImportError() {{
                                            errorDetails = "dolorem";
                                            severity = ImportErrorSeverityEnum.INFO;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "a";
                                            severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "quaerat";
                                            severity = ImportErrorSeverityEnum.WARNING;
                                        }}),
                                        add(new ImportError() {{
                                            errorDetails = "aliquid";
                                            severity = ImportErrorSeverityEnum.ERROR;
                                        }}),
                                    }};
                                    fileName = "voluptatem";
                                    partialReport = false;
                                    rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "culpa";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "atque";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                            }};
                                            rowNumber = 114588;
                                            vmName = "quisquam";
                                            vmUuid = "atque";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "culpa";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "a";
                                                    severity = ImportErrorSeverityEnum.ERROR;
                                                }}),
                                            }};
                                            rowNumber = 585051;
                                            vmName = "suscipit";
                                            vmUuid = "reiciendis";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "delectus";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "mollitia";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "praesentium";
                                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "quam";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                            }};
                                            rowNumber = 890379;
                                            vmName = "voluptatum";
                                            vmUuid = "voluptatem";
                                        }}),
                                        add(new ImportRowError() {{
                                            errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                                add(new ImportError() {{
                                                    errorDetails = "vitae";
                                                    severity = ImportErrorSeverityEnum.INFO;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "architecto";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "eligendi";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                                add(new ImportError() {{
                                                    errorDetails = "quis";
                                                    severity = ImportErrorSeverityEnum.WARNING;
                                                }}),
                                            }};
                                            rowNumber = 637969;
                                            vmName = "iste";
                                            vmUuid = "unde";
                                        }}),
                                    }};
                                }}),
                            }};
                            jobErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                add(new ImportError() {{
                                    errorDetails = "laboriosam";
                                    severity = ImportErrorSeverityEnum.ERROR;
                                }}),
                                add(new ImportError() {{
                                    errorDetails = "voluptatum";
                                    severity = ImportErrorSeverityEnum.INFO;
                                }}),
                                add(new ImportError() {{
                                    errorDetails = "deserunt";
                                    severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                }}),
                            }};
                        }};;
                        framesReported = 940951;
                        jobErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                            add(new ImportError() {{
                                errorDetails = "sint";
                                severity = ImportErrorSeverityEnum.ERROR;
                            }}),
                            add(new ImportError() {{
                                errorDetails = "iste";
                                severity = ImportErrorSeverityEnum.WARNING;
                            }}),
                        }};
                        totalRowsCount = 67855;
                    }};;
                    gcsPayload = new GCSPayloadInfo() {{
                        format = GCSPayloadInfoFormatEnum.IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV;
                        path = "a";
                    }};;
                    inlinePayload = new InlinePayloadInfo() {{
                        format = InlinePayloadInfoFormatEnum.IMPORT_JOB_FORMAT_CMDB;
                        payload = new org.openapis.openapi.models.shared.PayloadFile[]{{
                            add(new PayloadFile() {{
                                data = "molestias";
                                name = "Cornelius Beatty";
                            }}),
                            add(new PayloadFile() {{
                                data = "vitae";
                                name = "Eva Gleichner";
                            }}),
                            add(new PayloadFile() {{
                                data = "voluptate";
                                name = "Ron Kessler DVM";
                            }}),
                        }};
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("qui", "delectus");
                        put("exercitationem", "ipsum");
                        put("laboriosam", "doloremque");
                        put("sed", "voluptatum");
                    }};
                    validationReport = new ValidationReport() {{
                        fileValidations = new org.openapis.openapi.models.shared.FileValidationReport[]{{
                            add(new FileValidationReport() {{
                                fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                    add(new ImportError() {{
                                        errorDetails = "itaque";
                                        severity = ImportErrorSeverityEnum.INFO;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "repellat";
                                        severity = ImportErrorSeverityEnum.WARNING;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "adipisci";
                                        severity = ImportErrorSeverityEnum.ERROR;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "illo";
                                        severity = ImportErrorSeverityEnum.ERROR;
                                    }}),
                                }};
                                fileName = "sed";
                                partialReport = false;
                                rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "dignissimos";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "explicabo";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "non";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "incidunt";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                        }};
                                        rowNumber = 123546;
                                        vmName = "ullam";
                                        vmUuid = "quam";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "voluptates";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "est";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "illo";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "consequatur";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                        }};
                                        rowNumber = 276247;
                                        vmName = "dolore";
                                        vmUuid = "nemo";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "quo";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "delectus";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "laboriosam";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 686690;
                                        vmName = "officia";
                                        vmUuid = "repellat";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "soluta";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "culpa";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "inventore";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                        }};
                                        rowNumber = 323215;
                                        vmName = "sapiente";
                                        vmUuid = "voluptates";
                                    }}),
                                }};
                            }}),
                            add(new FileValidationReport() {{
                                fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                    add(new ImportError() {{
                                        errorDetails = "nesciunt";
                                        severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "quibusdam";
                                        severity = ImportErrorSeverityEnum.ERROR;
                                    }}),
                                }};
                                fileName = "quidem";
                                partialReport = false;
                                rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "cumque";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "sequi";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                        }};
                                        rowNumber = 979706;
                                        vmName = "expedita";
                                        vmUuid = "rerum";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "quod";
                                                severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "eaque";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "nam";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 483626;
                                        vmName = "delectus";
                                        vmUuid = "minus";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "distinctio";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "eos";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 918720;
                                        vmName = "sint";
                                        vmUuid = "occaecati";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "laboriosam";
                                                severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "amet";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "porro";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "reiciendis";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 735521;
                                        vmName = "in";
                                        vmUuid = "omnis";
                                    }}),
                                }};
                            }}),
                            add(new FileValidationReport() {{
                                fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                    add(new ImportError() {{
                                        errorDetails = "tenetur";
                                        severity = ImportErrorSeverityEnum.INFO;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "expedita";
                                        severity = ImportErrorSeverityEnum.ERROR;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "esse";
                                        severity = ImportErrorSeverityEnum.WARNING;
                                    }}),
                                    add(new ImportError() {{
                                        errorDetails = "ad";
                                        severity = ImportErrorSeverityEnum.INFO;
                                    }}),
                                }};
                                fileName = "ratione";
                                partialReport = false;
                                rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "dolore";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "officia";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "cupiditate";
                                                severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "saepe";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 52407;
                                        vmName = "ex";
                                        vmUuid = "eveniet";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "deleniti";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "aut";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "nostrum";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "nam";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                        }};
                                        rowNumber = 488433;
                                        vmName = "nostrum";
                                        vmUuid = "maiores";
                                    }}),
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "autem";
                                                severity = ImportErrorSeverityEnum.INFO;
                                            }}),
                                        }};
                                        rowNumber = 326635;
                                        vmName = "ex";
                                        vmUuid = "possimus";
                                    }}),
                                }};
                            }}),
                            add(new FileValidationReport() {{
                                fileErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                                    add(new ImportError() {{
                                        errorDetails = "corrupti";
                                        severity = ImportErrorSeverityEnum.ERROR;
                                    }}),
                                }};
                                fileName = "fuga";
                                partialReport = false;
                                rowErrors = new org.openapis.openapi.models.shared.ImportRowError[]{{
                                    add(new ImportRowError() {{
                                        errors = new org.openapis.openapi.models.shared.ImportError[]{{
                                            add(new ImportError() {{
                                                errorDetails = "numquam";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "eligendi";
                                                severity = ImportErrorSeverityEnum.ERROR;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "adipisci";
                                                severity = ImportErrorSeverityEnum.SEVERITY_UNSPECIFIED;
                                            }}),
                                            add(new ImportError() {{
                                                errorDetails = "rerum";
                                                severity = ImportErrorSeverityEnum.WARNING;
                                            }}),
                                        }};
                                        rowNumber = 593366;
                                        vmName = "necessitatibus";
                                        vmUuid = "fugit";
                                    }}),
                                }};
                            }}),
                        }};
                        jobErrors = new org.openapis.openapi.models.shared.ImportError[]{{
                            add(new ImportError() {{
                                errorDetails = "optio";
                                severity = ImportErrorSeverityEnum.INFO;
                            }}),
                            add(new ImportError() {{
                                errorDetails = "fugiat";
                                severity = ImportErrorSeverityEnum.WARNING;
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "repellendus";
                importJobId = "facilis";
                key = "molestias";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "et";
                requestId = "accusantium";
                uploadType = "maiores";
                uploadProtocol = "nisi";
            }};            

            MigrationcenterProjectsLocationsImportJobsCreateResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsCreate(req, new MigrationcenterProjectsLocationsImportJobsCreateSecurity("velit", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsImportDataFilesCreate

Creates an import data file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportDataFileFormatEnum;
import org.openapis.openapi.models.shared.ImportDataFileInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest req = new MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                importDataFileInput = new ImportDataFileInput() {{
                    displayName = "blanditiis";
                    format = ImportDataFileFormatEnum.IMPORT_JOB_FORMAT_UNSPECIFIED;
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "molestiae";
                importDataFileId = "nam";
                key = "aperiam";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "asperiores";
                uploadType = "at";
                uploadProtocol = "quibusdam";
            }};            

            MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsImportDataFilesCreate(req, new MigrationcenterProjectsLocationsImportJobsImportDataFilesCreateSecurity("quam", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsImportDataFilesList

List import data files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest req = new MigrationcenterProjectsLocationsImportJobsImportDataFilesListRequest("rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "blanditiis";
                filter = "iste";
                key = "accusamus";
                oauthToken = "distinctio";
                orderBy = "incidunt";
                pageSize = 287503L;
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "consectetur";
                uploadProtocol = "sapiente";
            }};            

            MigrationcenterProjectsLocationsImportJobsImportDataFilesListResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsImportDataFilesList(req, new MigrationcenterProjectsLocationsImportJobsImportDataFilesListSecurity("quis", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listImportDataFilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsList

Lists all import jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsListSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsListRequest req = new MigrationcenterProjectsLocationsImportJobsListRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "possimus";
                filter = "tempore";
                key = "asperiores";
                oauthToken = "quasi";
                orderBy = "consequuntur";
                pageSize = 366117L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "labore";
                uploadProtocol = "veritatis";
                view = MigrationcenterProjectsLocationsImportJobsListViewEnum.IMPORT_JOB_VIEW_UNSPECIFIED;
            }};            

            MigrationcenterProjectsLocationsImportJobsListResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsList(req, new MigrationcenterProjectsLocationsImportJobsListSecurity("magni", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listImportJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsRun

Runs an import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsRunRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsRunResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RunImportJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsRunRequest req = new MigrationcenterProjectsLocationsImportJobsRunRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                runImportJobRequest = new RunImportJobRequest() {{
                    requestId = "error";
                }};;
                accessToken = "placeat";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "earum";
                key = "minima";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "eius";
                uploadProtocol = "error";
            }};            

            MigrationcenterProjectsLocationsImportJobsRunResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsRun(req, new MigrationcenterProjectsLocationsImportJobsRunSecurity("vel", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsImportJobsValidate

Validates an import job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsValidateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsValidateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsImportJobsValidateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ValidateImportJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsImportJobsValidateRequest req = new MigrationcenterProjectsLocationsImportJobsValidateRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                validateImportJobRequest = new ValidateImportJobRequest() {{
                    requestId = "ab";
                }};;
                accessToken = "sunt";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "iusto";
                key = "corrupti";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "vero";
                uploadProtocol = "eligendi";
            }};            

            MigrationcenterProjectsLocationsImportJobsValidateResponse res = sdk.projects.migrationcenterProjectsLocationsImportJobsValidate(req, new MigrationcenterProjectsLocationsImportJobsValidateSecurity("minima", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsListRequest req = new MigrationcenterProjectsLocationsListRequest("recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "repellat";
                filter = "amet";
                key = "cumque";
                oauthToken = "dolore";
                pageSize = 762581L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "tempora";
                uploadProtocol = "libero";
            }};            

            MigrationcenterProjectsLocationsListResponse res = sdk.projects.migrationcenterProjectsLocationsList(req, new MigrationcenterProjectsLocationsListSecurity("suscipit", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsOperationsCancelRequest req = new MigrationcenterProjectsLocationsOperationsCancelRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "repellat");
                    put("sapiente", "consectetur");
                    put("eligendi", "ullam");
                }};
                accessToken = "nihil";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "corporis";
                key = "perferendis";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "corporis";
                uploadProtocol = "nihil";
            }};            

            MigrationcenterProjectsLocationsOperationsCancelResponse res = sdk.projects.migrationcenterProjectsLocationsOperationsCancel(req, new MigrationcenterProjectsLocationsOperationsCancelSecurity("officiis", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsOperationsListRequest req = new MigrationcenterProjectsLocationsOperationsListRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "hic";
                fields = "praesentium";
                filter = "libero";
                key = "consequatur";
                oauthToken = "totam";
                pageSize = 272518L;
                pageToken = "quo";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "sunt";
                uploadProtocol = "omnis";
            }};            

            MigrationcenterProjectsLocationsOperationsListResponse res = sdk.projects.migrationcenterProjectsLocationsOperationsList(req, new MigrationcenterProjectsLocationsOperationsListSecurity("quam", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsPreferenceSetsCreate

Creates a new preference set in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComputeEnginePreferences;
import org.openapis.openapi.models.shared.ComputeEnginePreferencesLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeEnginePreferencesPersistentDiskTypeEnum;
import org.openapis.openapi.models.shared.MachinePreferences;
import org.openapis.openapi.models.shared.MachineSeries;
import org.openapis.openapi.models.shared.PreferenceSetInput;
import org.openapis.openapi.models.shared.RegionPreferences;
import org.openapis.openapi.models.shared.VirtualMachinePreferences;
import org.openapis.openapi.models.shared.VirtualMachinePreferencesCommitmentPlanEnum;
import org.openapis.openapi.models.shared.VirtualMachinePreferencesSizingOptimizationStrategyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsPreferenceSetsCreateRequest req = new MigrationcenterProjectsLocationsPreferenceSetsCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                preferenceSetInput = new PreferenceSetInput() {{
                    description = "consectetur";
                    displayName = "deserunt";
                    virtualMachinePreferences = new VirtualMachinePreferences() {{
                        commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                        computeEnginePreferences = new ComputeEnginePreferences() {{
                            licenseType = ComputeEnginePreferencesLicenseTypeEnum.LICENSE_TYPE_UNSPECIFIED;
                            machinePreferences = new MachinePreferences() {{
                                allowedMachineSeries = new org.openapis.openapi.models.shared.MachineSeries[]{{
                                    add(new MachineSeries() {{
                                        code = "quaerat";
                                    }}),
                                    add(new MachineSeries() {{
                                        code = "suscipit";
                                    }}),
                                }};
                            }};;
                            persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum.PERSISTENT_DISK_TYPE_STANDARD;
                        }};;
                        regionPreferences = new RegionPreferences() {{
                            preferredRegions = new String[]{{
                                add("excepturi"),
                                add("modi"),
                                add("corrupti"),
                                add("nihil"),
                            }};
                        }};;
                        sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum.SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE;
                    }};;
                }};;
                accessToken = "placeat";
                alt = AltEnum.JSON;
                callback = "facere";
                fields = "ipsam";
                key = "nobis";
                oauthToken = "porro";
                preferenceSetId = "labore";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "ducimus";
                uploadType = "qui";
                uploadProtocol = "qui";
            }};            

            MigrationcenterProjectsLocationsPreferenceSetsCreateResponse res = sdk.projects.migrationcenterProjectsLocationsPreferenceSetsCreate(req, new MigrationcenterProjectsLocationsPreferenceSetsCreateSecurity("consectetur", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsPreferenceSetsList

Lists all the preference sets in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsPreferenceSetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsPreferenceSetsListRequest req = new MigrationcenterProjectsLocationsPreferenceSetsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "rem";
                key = "voluptatibus";
                oauthToken = "officiis";
                orderBy = "corporis";
                pageSize = 830909L;
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "libero";
                uploadProtocol = "excepturi";
            }};            

            MigrationcenterProjectsLocationsPreferenceSetsListResponse res = sdk.projects.migrationcenterProjectsLocationsPreferenceSetsList(req, new MigrationcenterProjectsLocationsPreferenceSetsListSecurity("odio", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPreferenceSetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsReportConfigsCreate

Creates a report configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportConfigGroupPreferenceSetAssignment;
import org.openapis.openapi.models.shared.ReportConfigInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsReportConfigsCreateRequest req = new MigrationcenterProjectsLocationsReportConfigsCreateRequest("officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                reportConfigInput = new ReportConfigInput() {{
                    description = "magni";
                    displayName = "sit";
                    groupPreferencesetAssignments = new org.openapis.openapi.models.shared.ReportConfigGroupPreferenceSetAssignment[]{{
                        add(new ReportConfigGroupPreferenceSetAssignment() {{
                            group = "voluptatum";
                            preferenceSet = "nihil";
                        }}),
                    }};
                }};;
                accessToken = "neque";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "corporis";
                key = "cupiditate";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "impedit";
                reportConfigId = "quod";
                requestId = "quo";
                uploadType = "architecto";
                uploadProtocol = "voluptatem";
            }};            

            MigrationcenterProjectsLocationsReportConfigsCreateResponse res = sdk.projects.migrationcenterProjectsLocationsReportConfigsCreate(req, new MigrationcenterProjectsLocationsReportConfigsCreateSecurity("perspiciatis", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsReportConfigsList

Lists ReportConfigs in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsReportConfigsListRequest req = new MigrationcenterProjectsLocationsReportConfigsListRequest("eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "beatae";
                fields = "sequi";
                filter = "rerum";
                key = "ipsum";
                oauthToken = "debitis";
                orderBy = "quis";
                pageSize = 54677L;
                pageToken = "incidunt";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "delectus";
                uploadProtocol = "aliquid";
            }};            

            MigrationcenterProjectsLocationsReportConfigsListResponse res = sdk.projects.migrationcenterProjectsLocationsReportConfigsList(req, new MigrationcenterProjectsLocationsReportConfigsListSecurity("ullam", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReportConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsReportConfigsReportsCreate

Creates a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComputeEnginePreferences;
import org.openapis.openapi.models.shared.ComputeEnginePreferencesLicenseTypeEnum;
import org.openapis.openapi.models.shared.ComputeEnginePreferencesPersistentDiskTypeEnum;
import org.openapis.openapi.models.shared.MachinePreferences;
import org.openapis.openapi.models.shared.MachineSeries;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RegionPreferences;
import org.openapis.openapi.models.shared.ReportInput;
import org.openapis.openapi.models.shared.ReportStateEnum;
import org.openapis.openapi.models.shared.ReportSummary;
import org.openapis.openapi.models.shared.ReportSummaryAssetAggregateStats;
import org.openapis.openapi.models.shared.ReportSummaryChartData;
import org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint;
import org.openapis.openapi.models.shared.ReportSummaryGroupFinding;
import org.openapis.openapi.models.shared.ReportSummaryGroupPreferenceSetFinding;
import org.openapis.openapi.models.shared.ReportSummaryHistogramChartData;
import org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket;
import org.openapis.openapi.models.shared.ReportSummaryMachineFinding;
import org.openapis.openapi.models.shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum;
import org.openapis.openapi.models.shared.ReportSummaryMachineSeriesAllocation;
import org.openapis.openapi.models.shared.ReportSummaryUtilizationChartData;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.VirtualMachinePreferences;
import org.openapis.openapi.models.shared.VirtualMachinePreferencesCommitmentPlanEnum;
import org.openapis.openapi.models.shared.VirtualMachinePreferencesSizingOptimizationStrategyEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest req = new MigrationcenterProjectsLocationsReportConfigsReportsCreateRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                reportInput = new ReportInput() {{
                    description = "eos";
                    displayName = "assumenda";
                    state = ReportStateEnum.FAILED;
                    summary = new ReportSummary() {{
                        allAssetsStats = new ReportSummaryAssetAggregateStats() {{
                            assetAge = new ReportSummaryChartData() {{
                                dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "quae";
                                        value = 4681.7;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "quam";
                                        value = 8258.62;
                                    }}),
                                }};
                            }};;
                            coreCountHistogram = new ReportSummaryHistogramChartData() {{
                                buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "cumque";
                                        lowerBound = "placeat";
                                        upperBound = "adipisci";
                                    }}),
                                }};
                            }};;
                            memoryBytesHistogram = new ReportSummaryHistogramChartData() {{
                                buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "non";
                                        lowerBound = "accusantium";
                                        upperBound = "corrupti";
                                    }}),
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "itaque";
                                        lowerBound = "earum";
                                        upperBound = "impedit";
                                    }}),
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "dicta";
                                        lowerBound = "corporis";
                                        upperBound = "impedit";
                                    }}),
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "eveniet";
                                        lowerBound = "cum";
                                        upperBound = "dolore";
                                    }}),
                                }};
                            }};;
                            memoryUtilization = new ReportSummaryChartData() {{
                                dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "ea";
                                        value = 8892.01;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "quasi";
                                        value = 8834.26;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "animi";
                                        value = 9009.16;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "voluptatem";
                                        value = 9807.05;
                                    }}),
                                }};
                            }};;
                            memoryUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                free = "odio";
                                used = "veniam";
                            }};;
                            operatingSystem = new ReportSummaryChartData() {{
                                dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "itaque";
                                        value = 8212.38;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "tenetur";
                                        value = 1499.41;
                                    }}),
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "deserunt";
                                        value = 7540.91;
                                    }}),
                                }};
                            }};;
                            storageBytesHistogram = new ReportSummaryHistogramChartData() {{
                                buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "distinctio";
                                        lowerBound = "corporis";
                                        upperBound = "quas";
                                    }}),
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "soluta";
                                        lowerBound = "cupiditate";
                                        upperBound = "unde";
                                    }}),
                                    add(new ReportSummaryHistogramChartDataBucket() {{
                                        count = "et";
                                        lowerBound = "quisquam";
                                        upperBound = "unde";
                                    }}),
                                }};
                            }};;
                            storageUtilization = new ReportSummaryChartData() {{
                                dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                    add(new ReportSummaryChartDataDataPoint() {{
                                        label = "suscipit";
                                        value = 8145.93;
                                    }}),
                                }};
                            }};;
                            storageUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                free = "pariatur";
                                used = "nam";
                            }};;
                            totalAssets = "quaerat";
                            totalCores = "corrupti";
                            totalMemoryBytes = "sint";
                            totalStorageBytes = "eius";
                        }};;
                        groupFindings = new org.openapis.openapi.models.shared.ReportSummaryGroupFinding[]{{
                            add(new ReportSummaryGroupFinding() {{
                                assetAggregateStats = new ReportSummaryAssetAggregateStats() {{
                                    assetAge = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "vero";
                                                value = 4848.33;
                                            }}),
                                        }};
                                    }};
                                    coreCountHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "fugit";
                                                lowerBound = "inventore";
                                                upperBound = "optio";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "nobis";
                                                lowerBound = "recusandae";
                                                upperBound = "commodi";
                                            }}),
                                        }};
                                    }};
                                    memoryBytesHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "provident";
                                                lowerBound = "veniam";
                                                upperBound = "sit";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "fugit";
                                                lowerBound = "a";
                                                upperBound = "consequatur";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "vero";
                                                lowerBound = "id";
                                                upperBound = "error";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "ratione";
                                                lowerBound = "perferendis";
                                                upperBound = "distinctio";
                                            }}),
                                        }};
                                    }};
                                    memoryUtilization = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "sint";
                                                value = 9787.97;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "nihil";
                                                value = 6813.31;
                                            }}),
                                        }};
                                    }};
                                    memoryUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                        free = "cumque";
                                        used = "consequuntur";
                                    }};
                                    operatingSystem = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "esse";
                                                value = 1285.94;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "delectus";
                                                value = 5505.19;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "deleniti";
                                                value = 3132.23;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "sit";
                                                value = 279.55;
                                            }}),
                                        }};
                                    }};
                                    storageBytesHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "voluptatem";
                                                lowerBound = "tempora";
                                                upperBound = "occaecati";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "quasi";
                                                lowerBound = "veritatis";
                                                upperBound = "ex";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "doloremque";
                                                lowerBound = "quas";
                                                upperBound = "dolores";
                                            }}),
                                        }};
                                    }};
                                    storageUtilization = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "esse";
                                                value = 5590.47;
                                            }}),
                                        }};
                                    }};
                                    storageUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                        free = "blanditiis";
                                        used = "laudantium";
                                    }};
                                    totalAssets = "voluptates";
                                    totalCores = "minus";
                                    totalMemoryBytes = "autem";
                                    totalStorageBytes = "vel";
                                }};
                                description = "beatae";
                                displayName = "quos";
                                overlappingAssetCount = "consectetur";
                                preferenceSetFindings = new org.openapis.openapi.models.shared.ReportSummaryGroupPreferenceSetFinding[]{{
                                    add(new ReportSummaryGroupPreferenceSetFinding() {{
                                        description = "tenetur";
                                        displayName = "necessitatibus";
                                        machineFinding = new ReportSummaryMachineFinding() {{
                                            allocatedAssetCount = "perspiciatis";
                                            allocatedDiskTypes = new org.openapis.openapi.models.shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum[]{{
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_STANDARD),
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_BALANCED),
                                            }};
                                            allocatedRegions = new String[]{{
                                                add("quidem"),
                                                add("magnam"),
                                                add("doloremque"),
                                                add("accusamus"),
                                            }};
                                            machineSeriesAllocations = new org.openapis.openapi.models.shared.ReportSummaryMachineSeriesAllocation[]{{
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "sunt";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "voluptas";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "earum";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "est";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "earum";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "nihil";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "nostrum";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "rerum";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        machinePreferences = new VirtualMachinePreferences() {{
                                            commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum.COMMITMENT_PLAN_UNSPECIFIED;
                                            computeEnginePreferences = new ComputeEnginePreferences() {{
                                                licenseType = ComputeEnginePreferencesLicenseTypeEnum.LICENSE_TYPE_BRING_YOUR_OWN_LICENSE;
                                                machinePreferences = new MachinePreferences() {{
                                                    allowedMachineSeries = new org.openapis.openapi.models.shared.MachineSeries[]{{
                                                        add(new MachineSeries() {{
                                                            code = "ratione";
                                                        }}),
                                                        add(new MachineSeries() {{
                                                            code = "eos";
                                                        }}),
                                                    }};
                                                }};
                                                persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum.PERSISTENT_DISK_TYPE_BALANCED;
                                            }};
                                            regionPreferences = new RegionPreferences() {{
                                                preferredRegions = new String[]{{
                                                    add("illum"),
                                                    add("error"),
                                                }};
                                            }};
                                            sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum.SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED;
                                        }};
                                        monthlyCostCompute = new Money() {{
                                            currencyCode = "reprehenderit";
                                            nanos = 758184;
                                            units = "cum";
                                        }};
                                        monthlyCostNetworkEgress = new Money() {{
                                            currencyCode = "culpa";
                                            nanos = 637037;
                                            units = "a";
                                        }};
                                        monthlyCostOsLicense = new Money() {{
                                            currencyCode = "magnam";
                                            nanos = 260246;
                                            units = "ad";
                                        }};
                                        monthlyCostOther = new Money() {{
                                            currencyCode = "quia";
                                            nanos = 798147;
                                            units = "quaerat";
                                        }};
                                        monthlyCostStorage = new Money() {{
                                            currencyCode = "voluptatum";
                                            nanos = 257959;
                                            units = "explicabo";
                                        }};
                                        monthlyCostTotal = new Money() {{
                                            currencyCode = "eligendi";
                                            nanos = 586723;
                                            units = "tempore";
                                        }};
                                        preferredRegion = "odit";
                                        pricingTrack = "est";
                                        topPriority = "at";
                                    }}),
                                    add(new ReportSummaryGroupPreferenceSetFinding() {{
                                        description = "ipsum";
                                        displayName = "explicabo";
                                        machineFinding = new ReportSummaryMachineFinding() {{
                                            allocatedAssetCount = "nulla";
                                            allocatedDiskTypes = new org.openapis.openapi.models.shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum[]{{
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_SSD),
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_SSD),
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_BALANCED),
                                            }};
                                            allocatedRegions = new String[]{{
                                                add("mollitia"),
                                            }};
                                            machineSeriesAllocations = new org.openapis.openapi.models.shared.ReportSummaryMachineSeriesAllocation[]{{
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "blanditiis";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "sapiente";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "ut";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "incidunt";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "labore";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "ut";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        machinePreferences = new VirtualMachinePreferences() {{
                                            commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum.COMMITMENT_PLAN_NONE;
                                            computeEnginePreferences = new ComputeEnginePreferences() {{
                                                licenseType = ComputeEnginePreferencesLicenseTypeEnum.LICENSE_TYPE_DEFAULT;
                                                machinePreferences = new MachinePreferences() {{
                                                    allowedMachineSeries = new org.openapis.openapi.models.shared.MachineSeries[]{{
                                                        add(new MachineSeries() {{
                                                            code = "tenetur";
                                                        }}),
                                                    }};
                                                }};
                                                persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum.PERSISTENT_DISK_TYPE_SSD;
                                            }};
                                            regionPreferences = new RegionPreferences() {{
                                                preferredRegions = new String[]{{
                                                    add("nulla"),
                                                    add("tempora"),
                                                    add("quam"),
                                                    add("consectetur"),
                                                }};
                                            }};
                                            sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum.SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE;
                                        }};
                                        monthlyCostCompute = new Money() {{
                                            currencyCode = "nesciunt";
                                            nanos = 939079;
                                            units = "eum";
                                        }};
                                        monthlyCostNetworkEgress = new Money() {{
                                            currencyCode = "dolor";
                                            nanos = 807906;
                                            units = "quos";
                                        }};
                                        monthlyCostOsLicense = new Money() {{
                                            currencyCode = "sed";
                                            nanos = 54498;
                                            units = "natus";
                                        }};
                                        monthlyCostOther = new Money() {{
                                            currencyCode = "ratione";
                                            nanos = 472290;
                                            units = "unde";
                                        }};
                                        monthlyCostStorage = new Money() {{
                                            currencyCode = "deserunt";
                                            nanos = 662184;
                                            units = "ex";
                                        }};
                                        monthlyCostTotal = new Money() {{
                                            currencyCode = "occaecati";
                                            nanos = 759822;
                                            units = "at";
                                        }};
                                        preferredRegion = "ad";
                                        pricingTrack = "asperiores";
                                        topPriority = "nam";
                                    }}),
                                    add(new ReportSummaryGroupPreferenceSetFinding() {{
                                        description = "cumque";
                                        displayName = "sapiente";
                                        machineFinding = new ReportSummaryMachineFinding() {{
                                            allocatedAssetCount = "quam";
                                            allocatedDiskTypes = new org.openapis.openapi.models.shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum[]{{
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_SSD),
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_BALANCED),
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_UNSPECIFIED),
                                            }};
                                            allocatedRegions = new String[]{{
                                                add("fuga"),
                                                add("odio"),
                                                add("totam"),
                                            }};
                                            machineSeriesAllocations = new org.openapis.openapi.models.shared.ReportSummaryMachineSeriesAllocation[]{{
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "eos";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "harum";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        machinePreferences = new VirtualMachinePreferences() {{
                                            commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum.COMMITMENT_PLAN_THREE_YEARS;
                                            computeEnginePreferences = new ComputeEnginePreferences() {{
                                                licenseType = ComputeEnginePreferencesLicenseTypeEnum.LICENSE_TYPE_DEFAULT;
                                                machinePreferences = new MachinePreferences() {{
                                                    allowedMachineSeries = new org.openapis.openapi.models.shared.MachineSeries[]{{
                                                        add(new MachineSeries() {{
                                                            code = "quos";
                                                        }}),
                                                        add(new MachineSeries() {{
                                                            code = "natus";
                                                        }}),
                                                    }};
                                                }};
                                                persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum.PERSISTENT_DISK_TYPE_STANDARD;
                                            }};
                                            regionPreferences = new RegionPreferences() {{
                                                preferredRegions = new String[]{{
                                                    add("nisi"),
                                                    add("praesentium"),
                                                    add("eum"),
                                                    add("vitae"),
                                                }};
                                            }};
                                            sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum.SIZING_OPTIMIZATION_STRATEGY_MODERATE;
                                        }};
                                        monthlyCostCompute = new Money() {{
                                            currencyCode = "possimus";
                                            nanos = 725894;
                                            units = "ullam";
                                        }};
                                        monthlyCostNetworkEgress = new Money() {{
                                            currencyCode = "quaerat";
                                            nanos = 983067;
                                            units = "iste";
                                        }};
                                        monthlyCostOsLicense = new Money() {{
                                            currencyCode = "accusamus";
                                            nanos = 370374;
                                            units = "fugiat";
                                        }};
                                        monthlyCostOther = new Money() {{
                                            currencyCode = "odio";
                                            nanos = 356253;
                                            units = "inventore";
                                        }};
                                        monthlyCostStorage = new Money() {{
                                            currencyCode = "eligendi";
                                            nanos = 578678;
                                            units = "doloribus";
                                        }};
                                        monthlyCostTotal = new Money() {{
                                            currencyCode = "necessitatibus";
                                            nanos = 526322;
                                            units = "a";
                                        }};
                                        preferredRegion = "nihil";
                                        pricingTrack = "veniam";
                                        topPriority = "aut";
                                    }}),
                                }};
                            }}),
                            add(new ReportSummaryGroupFinding() {{
                                assetAggregateStats = new ReportSummaryAssetAggregateStats() {{
                                    assetAge = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "rerum";
                                                value = 9766.41;
                                            }}),
                                        }};
                                    }};
                                    coreCountHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "quod";
                                                lowerBound = "non";
                                                upperBound = "dolore";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "enim";
                                                lowerBound = "alias";
                                                upperBound = "blanditiis";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "modi";
                                                lowerBound = "illo";
                                                upperBound = "a";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "et";
                                                lowerBound = "molestiae";
                                                upperBound = "autem";
                                            }}),
                                        }};
                                    }};
                                    memoryBytesHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "eius";
                                                lowerBound = "nostrum";
                                                upperBound = "ex";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "amet";
                                                lowerBound = "voluptate";
                                                upperBound = "molestias";
                                            }}),
                                        }};
                                    }};
                                    memoryUtilization = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "ipsum";
                                                value = 9442.6;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "quidem";
                                                value = 1397.3;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "molestiae";
                                                value = 8825.86;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "quia";
                                                value = 802.06;
                                            }}),
                                        }};
                                    }};
                                    memoryUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                        free = "doloribus";
                                        used = "praesentium";
                                    }};
                                    operatingSystem = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "consequuntur";
                                                value = 3894.4;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "nemo";
                                                value = 4428.53;
                                            }}),
                                        }};
                                    }};
                                    storageBytesHistogram = new ReportSummaryHistogramChartData() {{
                                        buckets = new org.openapis.openapi.models.shared.ReportSummaryHistogramChartDataBucket[]{{
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "ipsum";
                                                lowerBound = "vel";
                                                upperBound = "delectus";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "maxime";
                                                lowerBound = "vel";
                                                upperBound = "distinctio";
                                            }}),
                                            add(new ReportSummaryHistogramChartDataBucket() {{
                                                count = "cupiditate";
                                                lowerBound = "hic";
                                                upperBound = "quis";
                                            }}),
                                        }};
                                    }};
                                    storageUtilization = new ReportSummaryChartData() {{
                                        dataPoints = new org.openapis.openapi.models.shared.ReportSummaryChartDataDataPoint[]{{
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "iusto";
                                                value = 8021.48;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "saepe";
                                                value = 3229.07;
                                            }}),
                                            add(new ReportSummaryChartDataDataPoint() {{
                                                label = "magni";
                                                value = 3457.46;
                                            }}),
                                        }};
                                    }};
                                    storageUtilizationChart = new ReportSummaryUtilizationChartData() {{
                                        free = "minus";
                                        used = "aliquid";
                                    }};
                                    totalAssets = "quam";
                                    totalCores = "ea";
                                    totalMemoryBytes = "numquam";
                                    totalStorageBytes = "architecto";
                                }};
                                description = "fuga";
                                displayName = "totam";
                                overlappingAssetCount = "velit";
                                preferenceSetFindings = new org.openapis.openapi.models.shared.ReportSummaryGroupPreferenceSetFinding[]{{
                                    add(new ReportSummaryGroupPreferenceSetFinding() {{
                                        description = "sed";
                                        displayName = "officiis";
                                        machineFinding = new ReportSummaryMachineFinding() {{
                                            allocatedAssetCount = "veniam";
                                            allocatedDiskTypes = new org.openapis.openapi.models.shared.ReportSummaryMachineFindingAllocatedDiskTypesEnum[]{{
                                                add(ReportSummaryMachineFindingAllocatedDiskTypesEnum.PERSISTENT_DISK_TYPE_STANDARD),
                                            }};
                                            allocatedRegions = new String[]{{
                                                add("libero"),
                                                add("ut"),
                                            }};
                                            machineSeriesAllocations = new org.openapis.openapi.models.shared.ReportSummaryMachineSeriesAllocation[]{{
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "quia";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "beatae";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "porro";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "cumque";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "distinctio";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "numquam";
                                                    }};
                                                }}),
                                                add(new ReportSummaryMachineSeriesAllocation() {{
                                                    allocatedAssetCount = "fugit";
                                                    machineSeries = new MachineSeries() {{
                                                        code = "amet";
                                                    }};
                                                }}),
                                            }};
                                        }};
                                        machinePreferences = new VirtualMachinePreferences() {{
                                            commitmentPlan = VirtualMachinePreferencesCommitmentPlanEnum.COMMITMENT_PLAN_ONE_YEAR;
                                            computeEnginePreferences = new ComputeEnginePreferences() {{
                                                licenseType = ComputeEnginePreferencesLicenseTypeEnum.LICENSE_TYPE_BRING_YOUR_OWN_LICENSE;
                                                machinePreferences = new MachinePreferences() {{
                                                    allowedMachineSeries = new org.openapis.openapi.models.shared.MachineSeries[]{{
                                                        add(new MachineSeries() {{
                                                            code = "vero";
                                                        }}),
                                                        add(new MachineSeries() {{
                                                            code = "impedit";
                                                        }}),
                                                        add(new MachineSeries() {{
                                                            code = "omnis";
                                                        }}),
                                                        add(new MachineSeries() {{
                                                            code = "et";
                                                        }}),
                                                    }};
                                                }};
                                                persistentDiskType = ComputeEnginePreferencesPersistentDiskTypeEnum.PERSISTENT_DISK_TYPE_SSD;
                                            }};
                                            regionPreferences = new RegionPreferences() {{
                                                preferredRegions = new String[]{{
                                                    add("est"),
                                                    add("distinctio"),
                                                    add("fugiat"),
                                                }};
                                            }};
                                            sizingOptimizationStrategy = VirtualMachinePreferencesSizingOptimizationStrategyEnum.SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE;
                                        }};
                                        monthlyCostCompute = new Money() {{
                                            currencyCode = "totam";
                                            nanos = 508044;
                                            units = "officiis";
                                        }};
                                        monthlyCostNetworkEgress = new Money() {{
                                            currencyCode = "esse";
                                            nanos = 115148;
                                            units = "delectus";
                                        }};
                                        monthlyCostOsLicense = new Money() {{
                                            currencyCode = "laboriosam";
                                            nanos = 796513;
                                            units = "labore";
                                        }};
                                        monthlyCostOther = new Money() {{
                                            currencyCode = "quas";
                                            nanos = 149235;
                                            units = "veniam";
                                        }};
                                        monthlyCostStorage = new Money() {{
                                            currencyCode = "sed";
                                            nanos = 845238;
                                            units = "reprehenderit";
                                        }};
                                        monthlyCostTotal = new Money() {{
                                            currencyCode = "voluptate";
                                            nanos = 442435;
                                            units = "et";
                                        }};
                                        preferredRegion = "eveniet";
                                        pricingTrack = "voluptate";
                                        topPriority = "hic";
                                    }}),
                                }};
                            }}),
                        }};
                    }};;
                    type = ReportTypeEnum.TOTAL_COST_OF_OWNERSHIP;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "aut";
                key = "consequatur";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "accusamus";
                reportId = "repellat";
                requestId = "voluptatum";
                uploadType = "facere";
                uploadProtocol = "consequuntur";
            }};            

            MigrationcenterProjectsLocationsReportConfigsReportsCreateResponse res = sdk.projects.migrationcenterProjectsLocationsReportConfigsReportsCreate(req, new MigrationcenterProjectsLocationsReportConfigsReportsCreateSecurity("natus", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsReportConfigsReportsList

Lists Reports in a given ReportConfig.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsListSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsReportConfigsReportsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsReportConfigsReportsListRequest req = new MigrationcenterProjectsLocationsReportConfigsReportsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "aut";
                filter = "provident";
                key = "voluptate";
                oauthToken = "tempore";
                orderBy = "ullam";
                pageSize = 846427L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "quos";
                uploadProtocol = "quo";
                view = MigrationcenterProjectsLocationsReportConfigsReportsListViewEnum.REPORT_VIEW_BASIC;
            }};            

            MigrationcenterProjectsLocationsReportConfigsReportsListResponse res = sdk.projects.migrationcenterProjectsLocationsReportConfigsReportsList(req, new MigrationcenterProjectsLocationsReportConfigsReportsListSecurity("in", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesCreate

Creates a new source in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesCreateRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesCreateResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesCreateRequest req = new MigrationcenterProjectsLocationsSourcesCreateRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                sourceInput = new SourceInput() {{
                    description = "cumque";
                    displayName = "odio";
                    isManaged = false;
                    priority = 539502;
                    type = SourceTypeEnum.SOURCE_TYPE_INVENTORY_SCAN;
                }};;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusamus";
                key = "illo";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "harum";
                requestId = "laborum";
                sourceId = "a";
                uploadType = "repudiandae";
                uploadProtocol = "minus";
            }};            

            MigrationcenterProjectsLocationsSourcesCreateResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesCreate(req, new MigrationcenterProjectsLocationsSourcesCreateSecurity("officia", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesDelete

Deletes a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesDeleteRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesDeleteResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesDeleteRequest req = new MigrationcenterProjectsLocationsSourcesDeleteRequest("illo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "atque";
                key = "dicta";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "cum";
                uploadType = "suscipit";
                uploadProtocol = "eius";
            }};            

            MigrationcenterProjectsLocationsSourcesDeleteResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesDelete(req, new MigrationcenterProjectsLocationsSourcesDeleteSecurity("maiores", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesErrorFramesGet

Gets the details of an error frame.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest req = new MigrationcenterProjectsLocationsSourcesErrorFramesGetRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "consequatur";
                key = "itaque";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "dolor";
                uploadProtocol = "distinctio";
                view = MigrationcenterProjectsLocationsSourcesErrorFramesGetViewEnum.ERROR_FRAME_VIEW_BASIC;
            }};            

            MigrationcenterProjectsLocationsSourcesErrorFramesGetResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesErrorFramesGet(req, new MigrationcenterProjectsLocationsSourcesErrorFramesGetSecurity("a", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.errorFrame != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesErrorFramesList

Lists all error frames in a given source and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesListSecurity;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesErrorFramesListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesErrorFramesListRequest req = new MigrationcenterProjectsLocationsSourcesErrorFramesListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "mollitia";
                fields = "blanditiis";
                key = "suscipit";
                oauthToken = "quas";
                pageSize = 338542L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "ea";
                view = MigrationcenterProjectsLocationsSourcesErrorFramesListViewEnum.ERROR_FRAME_VIEW_BASIC;
            }};            

            MigrationcenterProjectsLocationsSourcesErrorFramesListResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesErrorFramesList(req, new MigrationcenterProjectsLocationsSourcesErrorFramesListSecurity("voluptate", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listErrorFramesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesList

Lists all the sources in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesListRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesListResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesListRequest req = new MigrationcenterProjectsLocationsSourcesListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "porro";
                filter = "tempore";
                key = "commodi";
                oauthToken = "autem";
                orderBy = "praesentium";
                pageSize = 166136L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "in";
                uploadProtocol = "eaque";
            }};            

            MigrationcenterProjectsLocationsSourcesListResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesList(req, new MigrationcenterProjectsLocationsSourcesListSecurity("delectus", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## migrationcenterProjectsLocationsSourcesPatch

Updates the parameters of a source.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesPatchRequest;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesPatchResponse;
import org.openapis.openapi.models.operations.MigrationcenterProjectsLocationsSourcesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MigrationcenterProjectsLocationsSourcesPatchRequest req = new MigrationcenterProjectsLocationsSourcesPatchRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                sourceInput = new SourceInput() {{
                    description = "assumenda";
                    displayName = "exercitationem";
                    isManaged = false;
                    priority = 953921;
                    type = SourceTypeEnum.SOURCE_TYPE_INVENTORY_SCAN;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                fields = "dicta";
                key = "quidem";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "laborum";
                requestId = "molestias";
                updateMask = "a";
                uploadType = "dignissimos";
                uploadProtocol = "labore";
            }};            

            MigrationcenterProjectsLocationsSourcesPatchResponse res = sdk.projects.migrationcenterProjectsLocationsSourcesPatch(req, new MigrationcenterProjectsLocationsSourcesPatchSecurity("laudantium", "dolore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
