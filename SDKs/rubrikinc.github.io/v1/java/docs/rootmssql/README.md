# rootMssql

## Overview

SQL Server instances and databases.

### Available Operations

* [assignMssqlSlaProperties](#assignmssqlslaproperties) - Assign SLA properties to SQL Server objects
* [browseMssqlBackupFiles](#browsemssqlbackupfiles) - List snapshots and logs from a Microsoft SQL database
* [bulkUpdateMssqlDbV1](#bulkupdatemssqldbv1) - Update multiple Microsoft SQL databases
* [countMssqlDbV1](#countmssqldbv1) - Returns a count of Microsoft SQL databases
* [countMssqlInstanceV1](#countmssqlinstancev1) - Returns a count of Microsoft SQL instances
* [createDownloadMssqlBackupFiles](#createdownloadmssqlbackupfiles) - Download snapshots and logs backups from a Microsoft SQL Database
* [createDownloadMssqlBackupFilesById](#createdownloadmssqlbackupfilesbyid) - Downloads a list of snapshot and log backups from a Microsoft SQL database
* [createExportMssqlDb](#createexportmssqldb) - Export a Microsoft SQL database to a new location
* [createLogShippingConfiguration](#createlogshippingconfiguration) - Create a log shipping configuration
* [createMssqlHostConfig](#createmssqlhostconfig) - Create a SQL Server host configuration
* [createMssqlMount](#createmssqlmount) - Live Mount SQL Server database from a point in time copy
* [createMssqlUnmount](#createmssqlunmount) - Delete a Live Mount of a SQL Server database
* [createOnDemandMssqlBackup](#createondemandmssqlbackup) - Take an on-demand backup of a Microsoft SQL database
* [createOnDemandMssqlBatchBackupV1](#createondemandmssqlbatchbackupv1) - Take an on-demand backup of multiple Microsoft SQL databases
* [createOnDemandMssqlLogBackup](#createondemandmssqllogbackup) - Take an on-demand log backup for a Microsoft SQL database
* [createRestoreMssqlDb](#createrestoremssqldb) - Restore a Microsoft SQL database
* [deleteDownloadedMssqlDbRecoverableRangesV1](#deletedownloadedmssqldbrecoverablerangesv1) - Delete downloaded recoverable ranges of a Microsoft SQL database
* [deleteLogShippingConfiguration](#deletelogshippingconfiguration) - Delete a specified log shipping configuration
* [deleteMssqlDbSnapshots](#deletemssqldbsnapshots) - Delete all snapshots of a Microsoft SQL database
* [deleteMssqlHostConfig](#deletemssqlhostconfig) - Delete the SQL Server host configuration
* [downloadFromArchive](#downloadfromarchive) - Download snapshots and log backups from archival
* [getCompatibleMssqlInstancesV1](#getcompatiblemssqlinstancesv1) - Get compatible instances for the recovery of a Microsoft SQL database
* [getDefaultDbPropertiesV1](#getdefaultdbpropertiesv1) - Returns the current default properties for Microsoft SQL databases
* [getDeleteMssqlDbRecoverableRangesStatusV1](#getdeletemssqldbrecoverablerangesstatusv1) - Get the deletion status of downloaded recoverable ranges
* [getLogShippingConfiguration](#getlogshippingconfiguration) - Get a log shipping configuration
* [getMissedMssqlDbSnapshots](#getmissedmssqldbsnapshots) - Get summary information for missed snapshots of a SQL database
* [getMssqlAsyncRequestStatus](#getmssqlasyncrequeststatus) - Get details for an async request
* [getMssqlAvailabilityGroupV1](#getmssqlavailabilitygroupv1) - Returns detailed information for a Microsoft SQL availability group
* [getMssqlDb](#getmssqldb) - Get detailed information for a Microsoft SQL database
* [getMssqlDbMissedRecoverableRanges](#getmssqldbmissedrecoverableranges) - Get missed recoverable ranges of a Microsoft SQL database
* [getMssqlDbRecoverableRanges](#getmssqldbrecoverableranges) - Get recoverable ranges of a Microsoft SQL database
* [getMssqlDbSnapshot](#getmssqldbsnapshot) - Get details information about a Microsoft SQL database snapshot
* [getMssqlHierarchyChildren](#getmssqlhierarchychildren) - Get list of immediate descendant objects
* [getMssqlHierarchyDescendants](#getmssqlhierarchydescendants) - Get list of descendant objects
* [getMssqlHierarchyObject](#getmssqlhierarchyobject) - Get summary of a SQL Server hierarchy object
* [getMssqlHostConfig](#getmssqlhostconfig) - Get the configuration for a specific host
* [getMssqlInstance](#getmssqlinstance) - Get detailed information for a Microsoft SQL instance
* [getMssqlMount](#getmssqlmount) - Get detailed information for a Live Mount of a SQL Server database
* [getOnDemandMssqlBatchBackupResultV1](#getondemandmssqlbatchbackupresultv1) - Returns details for an on-demand backup of multiple Microsoft SQL databases
* [mssqlGetRestoreFilesV1](#mssqlgetrestorefilesv1) - Returns a list all database files to be restored
* [mssqlGetSnappableIdV1](#mssqlgetsnappableidv1) - Returns the snappableId for a Microsoft SQL database
* [mssqlRestoreEstimateV1](#mssqlrestoreestimatev1) - Returns a size estimate for a restore or export
* [queryLogShippingConfigurations](#querylogshippingconfigurations) - Get log shipping configurations
* [queryMssqlAvailabilityGroupV1](#querymssqlavailabilitygroupv1) - Returns summary information for Microsoft SQL availability groups
* [queryMssqlDb](#querymssqldb) - Get summary information for SQL Server databases
* [queryMssqlDbSnapshot](#querymssqldbsnapshot) - Get summary information for snapshots of a Microsoft SQL database
* [queryMssqlHostConfig](#querymssqlhostconfig) - Get the summary of SQL Server host configurations
* [queryMssqlInstance](#querymssqlinstance) - Get summary information for Microsoft SQL instances
* [queryMssqlMount](#querymssqlmount) - Get summary information for all Live Mounts SQL Server databases
* [reseedSecondary](#reseedsecondary) - Reseed a secondary database
* [updateDefaultDbPropertiesV1](#updatedefaultdbpropertiesv1) - Update the default properties for Microsoft SQL databases
* [updateLogShippingConfiguration](#updatelogshippingconfiguration) - Update a specified log shipping configuration
* [updateMssqlAvailabilityGroupV1](#updatemssqlavailabilitygroupv1) - Update a Microsoft SQL availability group
* [updateMssqlDb](#updatemssqldb) - Update a Microsoft SQL database
* [updateMssqlHostConfig](#updatemssqlhostconfig) - Update host configuration
* [updateMssqlInstance](#updatemssqlinstance) - Update a Microsoft SQL instance

## assignMssqlSlaProperties

Assigns SLA Domain properties to SQL Server objects. Hosts and Windows clusters cannot be assigned SLA Domains directly. The SLA Domains are instead applied to the SQL Server child objects within the Host or Windows Cluster object. Newly discovered SQL Server objects within a given Host or Windows Cluster object do not inherit SLA Domain properties from other child SQL Server objects with the same parent object.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignMssqlSlaPropertiesResponse;
import org.openapis.openapi.models.shared.ExistingSnapshotRetentionEnum;
import org.openapis.openapi.models.shared.MssqlSlaDomainAssignInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("velit", "doloremque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.MssqlSlaDomainAssignInfo req = new MssqlSlaDomainAssignInfo(                new String[]{{
                                add("impedit"),
                                add("cum"),
                                add("ipsum"),
                                add("adipisci"),
                            }}) {{
                configuredSlaDomainId = "saepe";
                copyOnly = false;
                existingSnapshotRetention = ExistingSnapshotRetentionEnum.KEEP_FOREVER;
                logBackupFrequencyInSeconds = 42924;
                logRetentionHours = 339756;
                useConfiguredDefaultLogRetention = false;
            }};            

            AssignMssqlSlaPropertiesResponse res = sdk.rootMssql.assignMssqlSlaProperties(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## browseMssqlBackupFiles

When a recovery point is set, this API endpoint returns the snapshot and list of logs needed to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a recovery point or a range. Specify only LSNs or times.
This endpoint is only used to fetch data, but uses POST instead of GET due to limitations on parameters used in the body of a GET request. The parameter set for this endpoint is shared with the download_file endpoint.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrowseMssqlBackupFilesRequest;
import org.openapis.openapi.models.operations.BrowseMssqlBackupFilesResponse;
import org.openapis.openapi.models.shared.LegalHoldDownloadConfig;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MssqlBackupSelection;
import org.openapis.openapi.models.shared.MssqlBackupTypeEnum;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veniam", "libero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BrowseMssqlBackupFilesRequest req = new BrowseMssqlBackupFilesRequest(                new MssqlBackupSelection() {{
                                backupType = MssqlBackupTypeEnum.SNAPSHOT;
                                endPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2022-01-18T19:40:42.789Z");
                                    lsnPoint = new LsnRecoveryPoint("eligendi") {{
                                        recoveryForkGuid = "possimus";
                                    }};;
                                    timestampMs = 251464L;
                                }};;
                                legalHoldDownloadConfig = new LegalHoldDownloadConfig(false);;
                                recoveryPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2022-01-25T17:05:34.945Z");
                                    lsnPoint = new LsnRecoveryPoint("sed") {{
                                        recoveryForkGuid = "asperiores";
                                    }};;
                                    timestampMs = 330267L;
                                }};;
                                startPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2022-03-09T22:24:35.771Z");
                                    lsnPoint = new LsnRecoveryPoint("laudantium") {{
                                        recoveryForkGuid = "odit";
                                    }};;
                                    timestampMs = 863477L;
                                }};;
                            }};, "amet");            

            BrowseMssqlBackupFilesResponse res = sdk.rootMssql.browseMssqlBackupFiles(req);

            if (res.mssqlBackups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateMssqlDbV1

Update multiple Microsoft SQL databases with the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateMssqlDbV1Response;
import org.openapis.openapi.models.shared.MssqlDbUpdate;
import org.openapis.openapi.models.shared.MssqlDbUpdateId;
import org.openapis.openapi.models.shared.MssqlScriptDetail;
import org.openapis.openapi.models.shared.ScriptErrorActionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("exercitationem", "ab") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.MssqlDbUpdateId[]{{
                add(new MssqlDbUpdateId("voluptatibus",                 new MssqlDbUpdate() {{
                                    configuredSlaDomainId = "consequuntur";
                                    copyOnly = false;
                                    isPaused = false;
                                    logBackupFrequencyInSeconds = 891581;
                                    logRetentionHours = 290841;
                                    maxDataStreams = 700928;
                                    postBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.ABORT, "reprehenderit", 345506L);;
                                    preBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.ABORT, "iusto", 664965L);;
                                    shouldForceFull = false;
                                    useConfiguredDefaultLogRetention = false;
                                }};) {{
                    databaseId = "facilis";
                    updateProperties = new MssqlDbUpdate() {{
                        configuredSlaDomainId = "tempore";
                        copyOnly = false;
                        isPaused = false;
                        logBackupFrequencyInSeconds = 395233;
                        logRetentionHours = 977518;
                        maxDataStreams = 310840;
                        postBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.ABORT, "nisi", 727771L) {{
                            scriptErrorAction = ScriptErrorActionEnum.CONTINUE_;
                            scriptPath = "distinctio";
                            timeoutMs = 392430L;
                        }};
                        preBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.ABORT, "ad", 973819L) {{
                            scriptErrorAction = ScriptErrorActionEnum.CONTINUE_;
                            scriptPath = "facere";
                            timeoutMs = 706061L;
                        }};
                        shouldForceFull = false;
                        useConfiguredDefaultLogRetention = false;
                    }};
                }}),
            }}            

            BulkUpdateMssqlDbV1Response res = sdk.rootMssql.bulkUpdateMssqlDbV1(req);

            if (res.mssqlDbDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countMssqlDbV1

Returns a count of Microsoft SQL databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountMssqlDbV1Request;
import org.openapis.openapi.models.operations.CountMssqlDbV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("rem", "eligendi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CountMssqlDbV1Request req = new CountMssqlDbV1Request() {{
                rootId = "fugiat";
            }};            

            CountMssqlDbV1Response res = sdk.rootMssql.countMssqlDbV1(req);

            if (res.protectedObjectsCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countMssqlInstanceV1

Returns a count of all Microsoft SQL instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountMssqlInstanceV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "officiis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CountMssqlInstanceV1Response res = sdk.rootMssql.countMssqlInstanceV1();

            if (res.countResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDownloadMssqlBackupFiles

Starts an asynchronous request to download a set of backup files as a single compressed zipfile.
When a recovery point is set, this API endpoint returns the snapshot and list of logs that Rubrik CDM would use to restore the database to the recovery point. When a time range or LSN range is specified, this API endpoint returns the snapshots and logs that overlap the specified range.
Specify only a point in time or a range. Specify only LSNs or times.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDownloadMssqlBackupFilesRequest;
import org.openapis.openapi.models.operations.CreateDownloadMssqlBackupFilesResponse;
import org.openapis.openapi.models.shared.LegalHoldDownloadConfig;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MssqlBackupSelection;
import org.openapis.openapi.models.shared.MssqlBackupTypeEnum;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ducimus", "dolor") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateDownloadMssqlBackupFilesRequest req = new CreateDownloadMssqlBackupFilesRequest(                new MssqlBackupSelection() {{
                                backupType = MssqlBackupTypeEnum.SNAPSHOT;
                                endPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2021-06-07T03:31:13.366Z");
                                    lsnPoint = new LsnRecoveryPoint("vitae") {{
                                        recoveryForkGuid = "dignissimos";
                                    }};;
                                    timestampMs = 458970L;
                                }};;
                                legalHoldDownloadConfig = new LegalHoldDownloadConfig(false);;
                                recoveryPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2022-01-13T01:04:27.808Z");
                                    lsnPoint = new LsnRecoveryPoint("aspernatur") {{
                                        recoveryForkGuid = "enim";
                                    }};;
                                    timestampMs = 965090L;
                                }};;
                                startPoint = new MssqlRecoveryPoint() {{
                                    date = OffsetDateTime.parse("2022-07-05T17:04:43.417Z");
                                    lsnPoint = new LsnRecoveryPoint("libero") {{
                                        recoveryForkGuid = "illo";
                                    }};;
                                    timestampMs = 69182L;
                                }};;
                            }};, "incidunt");            

            CreateDownloadMssqlBackupFilesResponse res = sdk.rootMssql.createDownloadMssqlBackupFiles(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDownloadMssqlBackupFilesById

Downloads a list of snapshot and log backups from a Microsoft SQL database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDownloadMssqlBackupFilesByIdRequest;
import org.openapis.openapi.models.operations.CreateDownloadMssqlBackupFilesByIdResponse;
import org.openapis.openapi.models.shared.DownloadMssqlBackupFilesByIdJobConfig;
import org.openapis.openapi.models.shared.LegalHoldDownloadConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("accusamus", "saepe") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateDownloadMssqlBackupFilesByIdRequest req = new CreateDownloadMssqlBackupFilesByIdRequest(                new DownloadMssqlBackupFilesByIdJobConfig(                new String[]{{
                                                add("veniam"),
                                                add("eos"),
                                                add("reiciendis"),
                                            }}) {{
                                legalHoldDownloadConfig = new LegalHoldDownloadConfig(false);;
                            }};, "earum");            

            CreateDownloadMssqlBackupFilesByIdResponse res = sdk.rootMssql.createDownloadMssqlBackupFilesById(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createExportMssqlDb

Create a request to export a Microsoft SQL database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExportMssqlDbRequest;
import org.openapis.openapi.models.operations.CreateExportMssqlDbResponse;
import org.openapis.openapi.models.shared.ExportMssqlDbJobConfig;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MssqlDbFileExportPath;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reprehenderit", "praesentium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateExportMssqlDbRequest req = new CreateExportMssqlDbRequest(                new ExportMssqlDbJobConfig(                new MssqlRecoveryPoint() {{
                                                date = OffsetDateTime.parse("2022-01-01T01:40:36.755Z");
                                                lsnPoint = new LsnRecoveryPoint("quisquam") {{
                                                    recoveryForkGuid = "sequi";
                                                }};;
                                                timestampMs = 467119L;
                                            }};, "deleniti", "illo") {{
                                allowOverwrite = false;
                                finishRecovery = false;
                                maxDataStreams = 290248;
                                targetDataFilePath = "assumenda";
                                targetFilePaths = new org.openapis.openapi.models.shared.MssqlDbFileExportPath[]{{
                                    add(new MssqlDbFileExportPath("consequatur", "maxime") {{
                                        exportPath = "quisquam";
                                        logicalName = "provident";
                                        newFilename = "laudantium";
                                        newLogicalName = "repudiandae";
                                    }}),
                                    add(new MssqlDbFileExportPath("provident", "repudiandae") {{
                                        exportPath = "aspernatur";
                                        logicalName = "nam";
                                        newFilename = "expedita";
                                        newLogicalName = "quas";
                                    }}),
                                }};
                                targetLogFilePath = "rerum";
                            }};, "dignissimos");            

            CreateExportMssqlDbResponse res = sdk.rootMssql.createExportMssqlDb(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLogShippingConfiguration

Create a log shipping configuration between a specified primary database and a specified secondary database. The transaction logs from the primary database are regularly restored to the secondary database in order to maintain the secondary database as a point-in-time copy of the primary database. The primary database must have log backups configured, and it must be in the full or bulk-logged recovery model.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLogShippingConfigurationRequest;
import org.openapis.openapi.models.operations.CreateLogShippingConfigurationResponse;
import org.openapis.openapi.models.shared.MssqlDbFileExportPath;
import org.openapis.openapi.models.shared.MssqlLogShippingCreateConfig;
import org.openapis.openapi.models.shared.MssqlLogShippingOkStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corporis", "vero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateLogShippingConfigurationRequest req = new CreateLogShippingConfigurationRequest(                new MssqlLogShippingCreateConfig(MssqlLogShippingOkStateEnum.STANDBY, "repellendus", "iure") {{
                                maxDataStreams = 213835;
                                shouldDisconnectStandbyUsers = false;
                                targetDataFilePath = "commodi";
                                targetFilePaths = new org.openapis.openapi.models.shared.MssqlDbFileExportPath[]{{
                                    add(new MssqlDbFileExportPath("quae", "amet") {{
                                        exportPath = "commodi";
                                        logicalName = "aut";
                                        newFilename = "voluptatem";
                                        newLogicalName = "ad";
                                    }}),
                                    add(new MssqlDbFileExportPath("amet", "quasi") {{
                                        exportPath = "illum";
                                        logicalName = "praesentium";
                                        newFilename = "quidem";
                                        newLogicalName = "cum";
                                    }}),
                                    add(new MssqlDbFileExportPath("iusto", "amet") {{
                                        exportPath = "dicta";
                                        logicalName = "laudantium";
                                        newFilename = "doloremque";
                                        newLogicalName = "earum";
                                    }}),
                                    add(new MssqlDbFileExportPath("repudiandae", "consequatur") {{
                                        exportPath = "provident";
                                        logicalName = "dolorum";
                                        newFilename = "necessitatibus";
                                        newLogicalName = "provident";
                                    }}),
                                }};
                                targetLogFilePath = "nemo";
                            }};, "molestiae");            

            CreateLogShippingConfigurationResponse res = sdk.rootMssql.createLogShippingConfiguration(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMssqlHostConfig

Creates a SQL Server host configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMssqlHostConfigResponse;
import org.openapis.openapi.models.shared.HostConfigurationPropertyEnabledEnum;
import org.openapis.openapi.models.shared.MssqlHostConfigurationWithHostId;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("itaque", "facilis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.MssqlHostConfigurationWithHostId req = new MssqlHostConfigurationWithHostId("corrupti") {{
                enableDatabaseBatchSnapshots = HostConfigurationPropertyEnabledEnum.ENABLED;
                enableGroupFetch = HostConfigurationPropertyEnabledEnum.DISABLED;
                enableVdi = HostConfigurationPropertyEnabledEnum.DEFAULT_;
                enableVdiDb = HostConfigurationPropertyEnabledEnum.ENABLED;
                fileRestoreReadParallelism = 520081;
                fileRestoreWriteParallelism = 115861;
                fileTransferParallelism = 30661;
                mssqlDefaultMaxDataStreamsPerDatabase = 244376;
                physicalHostDatabaseRestoreThrottleMaxRefCount = 224413;
                physicalHostLogBackupThrottleMaxRefCount = 124289;
                throttlePhysicalHostMaxRefCount = 953676;
            }};            

            CreateMssqlHostConfigResponse res = sdk.rootMssql.createMssqlHostConfig(req);

            if (res.mssqlHostConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMssqlMount

Create an asynchronous request to create a Live Mount SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMssqlMountRequest;
import org.openapis.openapi.models.operations.CreateMssqlMountResponse;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MountMssqlDbConfig;
import org.openapis.openapi.models.shared.MssqlDatabaseRecoveryModelEnum;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolor", "occaecati") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateMssqlMountRequest req = new CreateMssqlMountRequest(                new MountMssqlDbConfig("atque",                 new MssqlRecoveryPoint() {{
                                                date = OffsetDateTime.parse("2022-02-18T02:05:10.545Z");
                                                lsnPoint = new LsnRecoveryPoint("labore") {{
                                                    recoveryForkGuid = "minus";
                                                }};;
                                                timestampMs = 456704L;
                                            }};) {{
                                recoveryModel = MssqlDatabaseRecoveryModelEnum.SIMPLE;
                                targetInstanceId = "perferendis";
                            }};, "rerum");            

            CreateMssqlMountResponse res = sdk.rootMssql.createMssqlMount(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMssqlUnmount

Create an async request to delete a Live Mount of a SQL Server database. Poll the task status by using /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMssqlUnmountRequest;
import org.openapis.openapi.models.operations.CreateMssqlUnmountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ea", "aperiam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateMssqlUnmountRequest req = new CreateMssqlUnmountRequest("dignissimos") {{
                force = false;
            }};            

            CreateMssqlUnmountResponse res = sdk.rootMssql.createMssqlUnmount(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOnDemandMssqlBackup

Take an on-demand backup of a Microsoft SQL database. The forceFullSnapshot property can be set to true to force a full snapshot. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandMssqlBackupRequest;
import org.openapis.openapi.models.operations.CreateOnDemandMssqlBackupResponse;
import org.openapis.openapi.models.shared.MssqlBackupJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repellat", "velit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandMssqlBackupRequest req = new CreateOnDemandMssqlBackupRequest(                new MssqlBackupJobConfig() {{
                                forceFullSnapshot = false;
                                slaId = "porro";
                            }};, "provident");            

            CreateOnDemandMssqlBackupResponse res = sdk.rootMssql.createOnDemandMssqlBackup(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOnDemandMssqlBatchBackupV1

Take an on-demand backup of one or more Microsoft SQL databases. Set the forceFullSnapshot property to true to force a full snapshot for every database that is specified. Only one snapshot will be taken for each database, even if a database is included multiple times in the fields of the request body. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandMssqlBatchBackupV1Response;
import org.openapis.openapi.models.shared.MssqlBatchBackupJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consectetur", "eligendi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.MssqlBatchBackupJobConfig req = new MssqlBatchBackupJobConfig() {{
                availabilityGroupIds = new String[]{{
                    add("consectetur"),
                    add("soluta"),
                }};
                databaseIds = new String[]{{
                    add("temporibus"),
                    add("officia"),
                    add("amet"),
                }};
                forceFullSnapshot = false;
                hostIds = new String[]{{
                    add("aspernatur"),
                    add("quo"),
                    add("itaque"),
                    add("illum"),
                }};
                instanceIds = new String[]{{
                    add("dignissimos"),
                    add("vero"),
                    add("qui"),
                }};
                slaId = "consectetur";
                windowsClusterIds = new String[]{{
                    add("explicabo"),
                    add("explicabo"),
                    add("exercitationem"),
                    add("nihil"),
                }};
            }};            

            CreateOnDemandMssqlBatchBackupV1Response res = sdk.rootMssql.createOnDemandMssqlBatchBackupV1(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOnDemandMssqlLogBackup

Take an on-demand log backup for a Microsoft SQL database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandMssqlLogBackupRequest;
import org.openapis.openapi.models.operations.CreateOnDemandMssqlLogBackupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("non", "ab") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandMssqlLogBackupRequest req = new CreateOnDemandMssqlLogBackupRequest("illo");            

            CreateOnDemandMssqlLogBackupResponse res = sdk.rootMssql.createOnDemandMssqlLogBackup(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRestoreMssqlDb

Create a request to restore a SQL Server database. To check the result of the request, poll /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRestoreMssqlDbRequest;
import org.openapis.openapi.models.operations.CreateRestoreMssqlDbResponse;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.RestoreMssqlDbJobConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("hic", "deserunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateRestoreMssqlDbRequest req = new CreateRestoreMssqlDbRequest(                new RestoreMssqlDbJobConfig(                new MssqlRecoveryPoint() {{
                                                date = OffsetDateTime.parse("2022-03-31T22:08:57.998Z");
                                                lsnPoint = new LsnRecoveryPoint("distinctio") {{
                                                    recoveryForkGuid = "in";
                                                }};;
                                                timestampMs = 349993L;
                                            }};) {{
                                finishRecovery = false;
                                maxDataStreams = 288300;
                            }};, "numquam");            

            CreateRestoreMssqlDbResponse res = sdk.rootMssql.createRestoreMssqlDb(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDownloadedMssqlDbRecoverableRangesV1

Deletes all local snapshots and logs that have previously been downloaded. Provide a begin or end time to delete only the downloaded snapshots and logs that fall within this time frame. The time is relative to when the snapshot or log backup was originally taken, not downloaded. Parts of the window may not be deleted if certain log files must be kept to preserve times outside the window. Data is deleted in the background. To check the status of the deletion, poll /mssql/db/recoverable_range/download/{id}.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDownloadedMssqlDbRecoverableRangesV1Request;
import org.openapis.openapi.models.operations.DeleteDownloadedMssqlDbRecoverableRangesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repudiandae", "modi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteDownloadedMssqlDbRecoverableRangesV1Request req = new DeleteDownloadedMssqlDbRecoverableRangesV1Request("in") {{
                afterTime = OffsetDateTime.parse("2022-02-13T20:27:19.478Z");
                beforeTime = OffsetDateTime.parse("2022-11-29T20:49:59.079Z");
            }};            

            DeleteDownloadedMssqlDbRecoverableRangesV1Response res = sdk.rootMssql.deleteDownloadedMssqlDbRecoverableRangesV1(req);

            if (res.jobScheduledResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLogShippingConfiguration

Deletes the specified log shipping configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLogShippingConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteLogShippingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odit", "deleniti") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteLogShippingConfigurationRequest req = new DeleteLogShippingConfigurationRequest("enim") {{
                deleteSecondaryDatabase = false;
            }};            

            DeleteLogShippingConfigurationResponse res = sdk.rootMssql.deleteLogShippingConfiguration(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMssqlDbSnapshots

Deletes all snapshots of a Microsoft SQL database. The database must be unprotected for the operation to succeed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMssqlDbSnapshotsRequest;
import org.openapis.openapi.models.operations.DeleteMssqlDbSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptate", "similique") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteMssqlDbSnapshotsRequest req = new DeleteMssqlDbSnapshotsRequest("minima");            

            DeleteMssqlDbSnapshotsResponse res = sdk.rootMssql.deleteMssqlDbSnapshots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMssqlHostConfig

Deletes the SQL Server host configuration. The host falls back to use values from the global configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMssqlHostConfigRequest;
import org.openapis.openapi.models.operations.DeleteMssqlHostConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("libero", "magnam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteMssqlHostConfigRequest req = new DeleteMssqlHostConfigRequest("sit");            

            DeleteMssqlHostConfigResponse res = sdk.rootMssql.deleteMssqlHostConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadFromArchive

Starts an asynchronous request to download snapshots and logs from archival for a given database and recovery point.
If the specified point in time is already available locally, this endpoint throws an error.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadFromArchiveRequest;
import org.openapis.openapi.models.operations.DownloadFromArchiveResponse;
import org.openapis.openapi.models.shared.LsnRecoveryPoint;
import org.openapis.openapi.models.shared.MssqlDownloadFromArchiveConfig;
import org.openapis.openapi.models.shared.MssqlRecoveryPoint;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "eum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DownloadFromArchiveRequest req = new DownloadFromArchiveRequest(                new MssqlDownloadFromArchiveConfig(                new MssqlRecoveryPoint() {{
                                                date = OffsetDateTime.parse("2022-05-07T23:23:18.376Z");
                                                lsnPoint = new LsnRecoveryPoint("dignissimos") {{
                                                    recoveryForkGuid = "fugiat";
                                                }};;
                                                timestampMs = 345138L;
                                            }};);, "molestiae");            

            DownloadFromArchiveResponse res = sdk.rootMssql.downloadFromArchive(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompatibleMssqlInstancesV1

Returns all compatible instances for export for the specified recovery time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompatibleMssqlInstancesV1RecoveryTypeEnum;
import org.openapis.openapi.models.operations.GetCompatibleMssqlInstancesV1Request;
import org.openapis.openapi.models.operations.GetCompatibleMssqlInstancesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veniam", "reiciendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetCompatibleMssqlInstancesV1Request req = new GetCompatibleMssqlInstancesV1Request("ab", GetCompatibleMssqlInstancesV1RecoveryTypeEnum.MOUNT) {{
                recoveryTime = OffsetDateTime.parse("2022-12-27T01:39:48.546Z");
            }};            

            GetCompatibleMssqlInstancesV1Response res = sdk.rootMssql.getCompatibleMssqlInstancesV1(req);

            if (res.mssqlInstanceSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDefaultDbPropertiesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eveniet", "odio") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetDefaultDbPropertiesV1Response res = sdk.rootMssql.getDefaultDbPropertiesV1();

            if (res.mssqlDbDefaults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteMssqlDbRecoverableRangesStatusV1

Get the details of the progress made in deleting recoverable ranges. The recoverable ranges to delete are those specified by the DELETE request to /mssql/db/{id}/recoverable_range/download which yielded the response with the job id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeleteMssqlDbRecoverableRangesStatusV1Request;
import org.openapis.openapi.models.operations.GetDeleteMssqlDbRecoverableRangesStatusV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("commodi", "numquam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetDeleteMssqlDbRecoverableRangesStatusV1Request req = new GetDeleteMssqlDbRecoverableRangesStatusV1Request("dolorum");            

            GetDeleteMssqlDbRecoverableRangesStatusV1Response res = sdk.rootMssql.getDeleteMssqlDbRecoverableRangesStatusV1(req);

            if (res.internalJobInstanceDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLogShippingConfiguration

Retrieves a particular log shipping configuration with all the details of the configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogShippingConfigurationRequest;
import org.openapis.openapi.models.operations.GetLogShippingConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("possimus", "voluptate") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetLogShippingConfigurationRequest req = new GetLogShippingConfigurationRequest("consectetur");            

            GetLogShippingConfigurationResponse res = sdk.rootMssql.getLogShippingConfiguration(req);

            if (res.mssqlLogShippingDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMissedMssqlDbSnapshots

Returns a list of summary information for the missed snapshots of a Microsoft SQL database, including the time of day and the locations where the snapshot was missed.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMissedMssqlDbSnapshotsRequest;
import org.openapis.openapi.models.operations.GetMissedMssqlDbSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nesciunt", "quaerat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMissedMssqlDbSnapshotsRequest req = new GetMissedMssqlDbSnapshotsRequest("itaque") {{
                afterTime = OffsetDateTime.parse("2022-08-19T16:26:34.311Z");
                beforeTime = OffsetDateTime.parse("2022-01-14T14:18:21.018Z");
            }};            

            GetMissedMssqlDbSnapshotsResponse res = sdk.rootMssql.getMissedMssqlDbSnapshots(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlAsyncRequestStatus

Returns the task object for an async request related to SQL Server databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetMssqlAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quas", "et") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlAsyncRequestStatusRequest req = new GetMssqlAsyncRequestStatusRequest("facilis");            

            GetMssqlAsyncRequestStatusResponse res = sdk.rootMssql.getMssqlAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlAvailabilityGroupV1

Returns a detailed view of a Microsoft SQL availability group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlAvailabilityGroupV1Request;
import org.openapis.openapi.models.operations.GetMssqlAvailabilityGroupV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("amet", "autem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlAvailabilityGroupV1Request req = new GetMssqlAvailabilityGroupV1Request("fuga");            

            GetMssqlAvailabilityGroupV1Response res = sdk.rootMssql.getMssqlAvailabilityGroupV1(req);

            if (res.mssqlAvailabilityGroupSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlDb

Returns a detailed view of a Microsoft SQL database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlDbRequest;
import org.openapis.openapi.models.operations.GetMssqlDbResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "rem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlDbRequest req = new GetMssqlDbRequest("aut");            

            GetMssqlDbResponse res = sdk.rootMssql.getMssqlDb(req);

            if (res.mssqlDbDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlDbMissedRecoverableRanges

Retrieve a list of missed recoverable ranges for a Microsoft SQL database. For each run of one type of error, the first and last occurrence of the error are given.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlDbMissedRecoverableRangesRequest;
import org.openapis.openapi.models.operations.GetMssqlDbMissedRecoverableRangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quos", "laudantium") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlDbMissedRecoverableRangesRequest req = new GetMssqlDbMissedRecoverableRangesRequest("repellendus") {{
                afterTime = OffsetDateTime.parse("2022-12-09T19:34:59.129Z");
                beforeTime = OffsetDateTime.parse("2022-02-04T17:43:04.954Z");
            }};            

            GetMssqlDbMissedRecoverableRangesResponse res = sdk.rootMssql.getMssqlDbMissedRecoverableRanges(req);

            if (res.mssqlMissedRecoverableRangeListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlDbRecoverableRanges

Retrieve the recoverable ranges for a specified Microsoft SQL database. A begin and/or end timestamp can be provided to retrieve only the ranges that fall within the window.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlDbRecoverableRangesRequest;
import org.openapis.openapi.models.operations.GetMssqlDbRecoverableRangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("delectus", "mollitia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlDbRecoverableRangesRequest req = new GetMssqlDbRecoverableRangesRequest("nulla") {{
                afterTime = OffsetDateTime.parse("2022-09-12T00:28:57.628Z");
                beforeTime = OffsetDateTime.parse("2022-12-31T18:10:52.300Z");
            }};            

            GetMssqlDbRecoverableRangesResponse res = sdk.rootMssql.getMssqlDbRecoverableRanges(req);

            if (res.mssqlRecoverableRangeListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlDbSnapshot

Returns detailed information about a Microsoft SQL database snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlDbSnapshotRequest;
import org.openapis.openapi.models.operations.GetMssqlDbSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eveniet", "hic") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlDbSnapshotRequest req = new GetMssqlDbSnapshotRequest("voluptatem");            

            GetMssqlDbSnapshotResponse res = sdk.rootMssql.getMssqlDbSnapshot(req);

            if (res.mssqlDbSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlHierarchyChildren

Retrieve the list of immediate descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenObjectTypeEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenRequest;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenResponse;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenSLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenSnappableStatusEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenSortByEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "qui") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlHierarchyChildrenRequest req = new GetMssqlHierarchyChildrenRequest("qui") {{
                effectiveSlaDomainId = "necessitatibus";
                hasInstances = false;
                isClustered = false;
                isLiveMount = false;
                isLogShippingSecondary = false;
                isRelic = false;
                limit = 691508;
                name = "Doris Jacobi";
                objectType = new org.openapis.openapi.models.operations.GetMssqlHierarchyChildrenObjectTypeEnum[]{{
                    add(GetMssqlHierarchyChildrenObjectTypeEnum.MSSQL_DATABASE),
                    add(GetMssqlHierarchyChildrenObjectTypeEnum.WINDOWS_CLUSTER),
                    add(GetMssqlHierarchyChildrenObjectTypeEnum.WINDOWS_CLUSTER),
                    add(GetMssqlHierarchyChildrenObjectTypeEnum.MSSQL_DATABASE),
                }};
                offset = 192846;
                primaryClusterId = "aliquid";
                slaAssignment = GetMssqlHierarchyChildrenSLAAssignmentEnum.DIRECT;
                snappableStatus = GetMssqlHierarchyChildrenSnappableStatusEnum.PROTECTABLE;
                sortBy = GetMssqlHierarchyChildrenSortByEnum.COPY_ONLY;
                sortOrder = GetMssqlHierarchyChildrenSortOrderEnum.ASC;
            }};            

            GetMssqlHierarchyChildrenResponse res = sdk.rootMssql.getMssqlHierarchyChildren(req);

            if (res.mssqlHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlHierarchyDescendants

Retrieve the list of descendant objects for the specified parent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsObjectTypeEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsRequest;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsResponse;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsSLAAssignmentEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsSnappableStatusEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsSortByEnum;
import org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odit", "velit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlHierarchyDescendantsRequest req = new GetMssqlHierarchyDescendantsRequest("reiciendis") {{
                effectiveSlaDomainId = "repellat";
                hasInstances = false;
                isClustered = false;
                isLiveMount = false;
                isLogShippingSecondary = false;
                isRelic = false;
                limit = 861123;
                name = "Mrs. Luther Torp";
                objectType = new org.openapis.openapi.models.operations.GetMssqlHierarchyDescendantsObjectTypeEnum[]{{
                    add(GetMssqlHierarchyDescendantsObjectTypeEnum.MSSQL_AVAILABILITY_GROUP),
                    add(GetMssqlHierarchyDescendantsObjectTypeEnum.MSSQL_INSTANCE),
                    add(GetMssqlHierarchyDescendantsObjectTypeEnum.MSSQL_DATABASE),
                    add(GetMssqlHierarchyDescendantsObjectTypeEnum.HOST),
                }};
                offset = 354225;
                primaryClusterId = "quisquam";
                slaAssignment = GetMssqlHierarchyDescendantsSLAAssignmentEnum.DERIVED;
                snappableStatus = GetMssqlHierarchyDescendantsSnappableStatusEnum.PROTECTABLE;
                sortBy = GetMssqlHierarchyDescendantsSortByEnum.EFFECTIVE_SLA_DOMAIN_NAME;
                sortOrder = GetMssqlHierarchyDescendantsSortOrderEnum.DESC;
            }};            

            GetMssqlHierarchyDescendantsResponse res = sdk.rootMssql.getMssqlHierarchyDescendants(req);

            if (res.mssqlHierarchyObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlHierarchyObject

Retrieve details for the specified object in the SQL Server hierarchy.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlHierarchyObjectRequest;
import org.openapis.openapi.models.operations.GetMssqlHierarchyObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "officiis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlHierarchyObjectRequest req = new GetMssqlHierarchyObjectRequest("architecto");            

            GetMssqlHierarchyObjectResponse res = sdk.rootMssql.getMssqlHierarchyObject(req);

            if (res.mssqlHierarchyObjectSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlHostConfig

Returns the configuration for the specified SQL Server host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlHostConfigRequest;
import org.openapis.openapi.models.operations.GetMssqlHostConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("architecto", "enim") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlHostConfigRequest req = new GetMssqlHostConfigRequest("optio");            

            GetMssqlHostConfigResponse res = sdk.rootMssql.getMssqlHostConfig(req);

            if (res.mssqlHostConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlInstance

Returns a detailed view of a Microsoft SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlInstanceRequest;
import org.openapis.openapi.models.operations.GetMssqlInstanceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("rem", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlInstanceRequest req = new GetMssqlInstanceRequest("facilis");            

            GetMssqlInstanceResponse res = sdk.rootMssql.getMssqlInstance(req);

            if (res.mssqlInstanceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMssqlMount

Returns detailed information for the specified Live Mount of a SQL Server database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMssqlMountRequest;
import org.openapis.openapi.models.operations.GetMssqlMountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reiciendis", "a") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMssqlMountRequest req = new GetMssqlMountRequest("iste");            

            GetMssqlMountResponse res = sdk.rootMssql.getMssqlMount(req);

            if (res.mssqlMountDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOnDemandMssqlBatchBackupResultV1

Returns the details for an on-demand backup of multiple Microsoft SQL databases. This only returns details for requests that have finished successfully. To check the status of the request, poll /mssql/request/{id}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOnDemandMssqlBatchBackupResultV1Request;
import org.openapis.openapi.models.operations.GetOnDemandMssqlBatchBackupResultV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dicta", "quos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetOnDemandMssqlBatchBackupResultV1Request req = new GetOnDemandMssqlBatchBackupResultV1Request("ullam");            

            GetOnDemandMssqlBatchBackupResultV1Response res = sdk.rootMssql.getOnDemandMssqlBatchBackupResultV1(req);

            if (res.mssqlBatchBackupSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mssqlGetRestoreFilesV1

Provides a list of database files to be restored for the specified restore or export operation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MssqlGetRestoreFilesV1Request;
import org.openapis.openapi.models.operations.MssqlGetRestoreFilesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolore", "modi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MssqlGetRestoreFilesV1Request req = new MssqlGetRestoreFilesV1Request("itaque") {{
                lsn = "maxime";
                recoveryForkGuid = "modi";
                time = OffsetDateTime.parse("2022-03-04T17:26:08.366Z");
            }};            

            MssqlGetRestoreFilesV1Response res = sdk.rootMssql.mssqlGetRestoreFilesV1(req);

            if (res.mssqlRestoreFiles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mssqlGetSnappableIdV1

Returns the snappableId for a Microsoft SQL database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MssqlGetSnappableIdV1Request;
import org.openapis.openapi.models.operations.MssqlGetSnappableIdV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "doloribus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MssqlGetSnappableIdV1Request req = new MssqlGetSnappableIdV1Request("impedit");            

            MssqlGetSnappableIdV1Response res = sdk.rootMssql.mssqlGetSnappableIdV1(req);

            if (res.mssqlSnappableId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mssqlRestoreEstimateV1

Provides an estimate of resources needed for the specified restore or export operation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MssqlRestoreEstimateV1Request;
import org.openapis.openapi.models.operations.MssqlRestoreEstimateV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("porro", "accusamus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            MssqlRestoreEstimateV1Request req = new MssqlRestoreEstimateV1Request("totam") {{
                lsn = "reiciendis";
                recoveryForkGuid = "ab";
                time = OffsetDateTime.parse("2022-01-21T03:18:36.986Z");
            }};            

            MssqlRestoreEstimateV1Response res = sdk.rootMssql.mssqlRestoreEstimateV1(req);

            if (res.mssqlRestoreEstimateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryLogShippingConfigurations

Retrieves all log shipping configuration objects. Results can be filtered and sorted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryLogShippingConfigurationsRequest;
import org.openapis.openapi.models.operations.QueryLogShippingConfigurationsResponse;
import org.openapis.openapi.models.operations.QueryLogShippingConfigurationsSortByEnum;
import org.openapis.openapi.models.operations.QueryLogShippingConfigurationsSortOrderEnum;
import org.openapis.openapi.models.operations.QueryLogShippingConfigurationsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "iure") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryLogShippingConfigurationsRequest req = new QueryLogShippingConfigurationsRequest() {{
                limit = 485031;
                location = "nesciunt";
                offset = 895513;
                primaryDatabaseId = "vel";
                primaryDatabaseName = "neque";
                secondaryDatabaseName = "corporis";
                sortBy = QueryLogShippingConfigurationsSortByEnum.PRIMARY_DATABASE_NAME;
                sortOrder = QueryLogShippingConfigurationsSortOrderEnum.ASC;
                status = QueryLogShippingConfigurationsStatusEnum.INITIALIZING;
            }};            

            QueryLogShippingConfigurationsResponse res = sdk.rootMssql.queryLogShippingConfigurations(req);

            if (res.mssqlLogShippingSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlAvailabilityGroupV1

Returns a list of summary information for Microsoft SQL availability groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlAvailabilityGroupV1Request;
import org.openapis.openapi.models.operations.QueryMssqlAvailabilityGroupV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reprehenderit", "distinctio") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlAvailabilityGroupV1Request req = new QueryMssqlAvailabilityGroupV1Request() {{
                primaryClusterId = "eius";
            }};            

            QueryMssqlAvailabilityGroupV1Response res = sdk.rootMssql.queryMssqlAvailabilityGroupV1(req);

            if (res.mssqlAvailabilityGroupSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlDb

Returns a list of summary information for Microsoft SQL databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlDbRequest;
import org.openapis.openapi.models.operations.QueryMssqlDbResponse;
import org.openapis.openapi.models.operations.QueryMssqlDbSortByEnum;
import org.openapis.openapi.models.operations.QueryMssqlDbSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsa", "rem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlDbRequest req = new QueryMssqlDbRequest() {{
                availabilityGroupId = "maiores";
                effectiveSlaDomainId = "accusantium";
                includeBackupTaskInfo = false;
                instanceId = "veniam";
                isLiveMount = false;
                isLogShippingSecondary = false;
                isRelic = false;
                limit = 906232;
                name = "Ernestine Hackett";
                offset = 851809;
                primaryClusterId = "est";
                slaAssignment = "delectus";
                sortBy = QueryMssqlDbSortByEnum.COPY_ONLY;
                sortOrder = QueryMssqlDbSortOrderEnum.ASC;
            }};            

            QueryMssqlDbResponse res = sdk.rootMssql.queryMssqlDb(req);

            if (res.mssqlDbSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlDbSnapshot

Returns a list of summary information for snapshots of a Microsoft SQL database.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlDbSnapshotRequest;
import org.openapis.openapi.models.operations.QueryMssqlDbSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nesciunt", "similique") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlDbSnapshotRequest req = new QueryMssqlDbSnapshotRequest("illo") {{
                afterTime = OffsetDateTime.parse("2021-11-29T06:44:11.905Z");
                beforeTime = OffsetDateTime.parse("2020-07-12T23:46:00.624Z");
            }};            

            QueryMssqlDbSnapshotResponse res = sdk.rootMssql.queryMssqlDbSnapshot(req);

            if (res.mssqlDbSnapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlHostConfig

Returns a list of customized SQL Server host configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlHostConfigRequest;
import org.openapis.openapi.models.operations.QueryMssqlHostConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "incidunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlHostConfigRequest req = new QueryMssqlHostConfigRequest() {{
                hostId = new String[]{{
                    add("ipsam"),
                }};
            }};            

            QueryMssqlHostConfigResponse res = sdk.rootMssql.queryMssqlHostConfig(req);

            if (res.mssqlHostConfigurationWithHostIdListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlInstance

Returns a list of summary information for Microsoft SQL instances.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlInstanceRequest;
import org.openapis.openapi.models.operations.QueryMssqlInstanceResponse;
import org.openapis.openapi.models.operations.QueryMssqlInstanceSnappableStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cupiditate", "optio") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlInstanceRequest req = new QueryMssqlInstanceRequest() {{
                primaryClusterId = "alias";
                rootId = "quidem";
                snappableStatus = QueryMssqlInstanceSnappableStatusEnum.PROTECTABLE;
            }};            

            QueryMssqlInstanceResponse res = sdk.rootMssql.queryMssqlInstance(req);

            if (res.mssqlInstanceSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryMssqlMount

Returns a list with summary information for all Live Mount SQL Server databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryMssqlMountRequest;
import org.openapis.openapi.models.operations.QueryMssqlMountResponse;
import org.openapis.openapi.models.operations.QueryMssqlMountSortByEnum;
import org.openapis.openapi.models.operations.QueryMssqlMountSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nesciunt", "commodi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryMssqlMountRequest req = new QueryMssqlMountRequest() {{
                limit = 956124;
                mountedDatabaseName = "consequuntur";
                offset = 330440;
                sortBy = QueryMssqlMountSortByEnum.CREATION_DATE;
                sortOrder = QueryMssqlMountSortOrderEnum.DESC;
                sourceDatabaseId = "sint";
                sourceDatabaseName = "ut";
                targetInstanceId = "numquam";
            }};            

            QueryMssqlMountResponse res = sdk.rootMssql.queryMssqlMount(req);

            if (res.mssqlMountSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reseedSecondary

Starts an asynchronous job to reseed a secondary database. Reseeding restores the data in the secondary database based on a log shipping configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReseedSecondaryRequest;
import org.openapis.openapi.models.operations.ReseedSecondaryResponse;
import org.openapis.openapi.models.shared.MssqlLogShippingOkStateEnum;
import org.openapis.openapi.models.shared.MssqlLogShippingTargetStateOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("tenetur", "adipisci") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ReseedSecondaryRequest req = new ReseedSecondaryRequest(                new MssqlLogShippingTargetStateOptions(MssqlLogShippingOkStateEnum.STANDBY) {{
                                shouldDisconnectStandbyUsers = false;
                            }};, "in");            

            ReseedSecondaryResponse res = sdk.rootMssql.reseedSecondary(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDefaultDbPropertiesV1

The default properties are Log Backup Frequency (in seconds), Log Retention Time (in hours) and CBT status. New databases added to the Rubrik cluster are provided the log backup frequency value and log backup retention value by default. New hosts added to the Rubrik cluster are provided the CBT status by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDefaultDbPropertiesV1Response;
import org.openapis.openapi.models.shared.MssqlDbDefaultsUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minima", "ex") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.MssqlDbDefaultsUpdate req = new MssqlDbDefaultsUpdate() {{
                cbtStatus = false;
                logBackupFrequencyInSeconds = 791762L;
                logRetentionTimeInHours = 68880;
            }};            

            UpdateDefaultDbPropertiesV1Response res = sdk.rootMssql.updateDefaultDbPropertiesV1(req);

            if (res.mssqlDbDefaults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLogShippingConfiguration

Updates a specified log shipping configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLogShippingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLogShippingConfigurationResponse;
import org.openapis.openapi.models.shared.MssqlLogShippingOkStateEnum;
import org.openapis.openapi.models.shared.MssqlLogShippingTargetStateOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("beatae", "hic") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateLogShippingConfigurationRequest req = new UpdateLogShippingConfigurationRequest(                new MssqlLogShippingTargetStateOptions(MssqlLogShippingOkStateEnum.RESTORING) {{
                                shouldDisconnectStandbyUsers = false;
                            }};, "quisquam");            

            UpdateLogShippingConfigurationResponse res = sdk.rootMssql.updateLogShippingConfiguration(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMssqlAvailabilityGroupV1

Update a Microsoft SQL availability group with the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMssqlAvailabilityGroupV1Request;
import org.openapis.openapi.models.operations.UpdateMssqlAvailabilityGroupV1Response;
import org.openapis.openapi.models.shared.MssqlSlaPatchProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dolor", "ducimus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMssqlAvailabilityGroupV1Request req = new UpdateMssqlAvailabilityGroupV1Request(                new MssqlSlaPatchProperties() {{
                                configuredSlaDomainId = "fuga";
                                copyOnly = false;
                                logBackupFrequencyInSeconds = 326903;
                                logRetentionHours = 102446;
                                useConfiguredDefaultLogRetention = false;
                            }};, "qui");            

            UpdateMssqlAvailabilityGroupV1Response res = sdk.rootMssql.updateMssqlAvailabilityGroupV1(req);

            if (res.mssqlAvailabilityGroupSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMssqlDb

Update a Microsoft SQL database with the specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMssqlDbRequest;
import org.openapis.openapi.models.operations.UpdateMssqlDbResponse;
import org.openapis.openapi.models.shared.MssqlDbUpdate;
import org.openapis.openapi.models.shared.MssqlScriptDetail;
import org.openapis.openapi.models.shared.ScriptErrorActionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aliquid", "magni") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMssqlDbRequest req = new UpdateMssqlDbRequest(                new MssqlDbUpdate() {{
                                configuredSlaDomainId = "incidunt";
                                copyOnly = false;
                                isPaused = false;
                                logBackupFrequencyInSeconds = 240490;
                                logRetentionHours = 506343;
                                maxDataStreams = 220528;
                                postBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.ABORT, "expedita", 706411L);;
                                preBackupScript = new MssqlScriptDetail(ScriptErrorActionEnum.CONTINUE_, "sit", 363482L);;
                                shouldForceFull = false;
                                useConfiguredDefaultLogRetention = false;
                            }};, "culpa");            

            UpdateMssqlDbResponse res = sdk.rootMssql.updateMssqlDb(req);

            if (res.mssqlDbDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMssqlHostConfig

Updates the configuration for a specified host.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMssqlHostConfigRequest;
import org.openapis.openapi.models.operations.UpdateMssqlHostConfigResponse;
import org.openapis.openapi.models.shared.HostConfigurationPropertyEnabledEnum;
import org.openapis.openapi.models.shared.MssqlHostConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consequuntur", "amet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMssqlHostConfigRequest req = new UpdateMssqlHostConfigRequest(                new MssqlHostConfiguration() {{
                                enableDatabaseBatchSnapshots = HostConfigurationPropertyEnabledEnum.DISABLED;
                                enableGroupFetch = HostConfigurationPropertyEnabledEnum.ENABLED;
                                enableVdi = HostConfigurationPropertyEnabledEnum.ENABLED;
                                enableVdiDb = HostConfigurationPropertyEnabledEnum.DEFAULT_;
                                fileRestoreReadParallelism = 932250;
                                fileRestoreWriteParallelism = 955569;
                                fileTransferParallelism = 788661;
                                mssqlDefaultMaxDataStreamsPerDatabase = 316550;
                                physicalHostDatabaseRestoreThrottleMaxRefCount = 987759;
                                physicalHostLogBackupThrottleMaxRefCount = 826806;
                                throttlePhysicalHostMaxRefCount = 887363;
                            }};, "architecto");            

            UpdateMssqlHostConfigResponse res = sdk.rootMssql.updateMssqlHostConfig(req);

            if (res.mssqlHostConfiguration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMssqlInstance

Update a Microsoft SQL instance with specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMssqlInstanceRequest;
import org.openapis.openapi.models.operations.UpdateMssqlInstanceResponse;
import org.openapis.openapi.models.shared.MssqlSlaPatchProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("alias", "culpa") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateMssqlInstanceRequest req = new UpdateMssqlInstanceRequest(                new MssqlSlaPatchProperties() {{
                                configuredSlaDomainId = "ipsa";
                                copyOnly = false;
                                logBackupFrequencyInSeconds = 751033;
                                logRetentionHours = 898193;
                                useConfiguredDefaultLogRetention = false;
                            }};, "quia");            

            UpdateMssqlInstanceResponse res = sdk.rootMssql.updateMssqlInstance(req);

            if (res.mssqlInstanceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
