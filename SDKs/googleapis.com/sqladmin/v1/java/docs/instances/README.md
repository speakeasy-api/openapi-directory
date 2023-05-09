# instances

### Available Operations

* [sqlInstancesAddServerCa](#sqlinstancesaddserverca) - Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.
* [sqlInstancesClone](#sqlinstancesclone) - Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.
* [sqlInstancesDelete](#sqlinstancesdelete) - Deletes a Cloud SQL instance.
* [sqlInstancesDemoteMaster](#sqlinstancesdemotemaster) - Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.
* [sqlInstancesExport](#sqlinstancesexport) - Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.
* [sqlInstancesFailover](#sqlinstancesfailover) - Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.
* [sqlInstancesGet](#sqlinstancesget) - Retrieves a resource containing information about a Cloud SQL instance.
* [sqlInstancesImport](#sqlinstancesimport) - Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.
* [sqlInstancesInsert](#sqlinstancesinsert) - Creates a new Cloud SQL instance.
* [sqlInstancesList](#sqlinstanceslist) - Lists instances under a given project.
* [sqlInstancesListServerCas](#sqlinstanceslistservercas) - Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.
* [sqlInstancesPatch](#sqlinstancespatch) - Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.
* [sqlInstancesPromoteReplica](#sqlinstancespromotereplica) - Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesResetSslConfig](#sqlinstancesresetsslconfig) - Deletes all client certificates and generates a new server SSL certificate for the instance.
* [sqlInstancesRestart](#sqlinstancesrestart) - Restarts a Cloud SQL instance.
* [sqlInstancesRestoreBackup](#sqlinstancesrestorebackup) - Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.
* [sqlInstancesRotateServerCa](#sqlinstancesrotateserverca) - Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.
* [sqlInstancesStartReplica](#sqlinstancesstartreplica) - Starts the replication in the read replica instance.
* [sqlInstancesStopReplica](#sqlinstancesstopreplica) - Stops the replication in the read replica instance.
* [sqlInstancesTruncateLog](#sqlinstancestruncatelog) - Truncate MySQL general and slow query log tables MySQL only.
* [sqlInstancesUpdate](#sqlinstancesupdate) - Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

## sqlInstancesAddServerCa

Adds a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesAddServerCaRequest;
import org.openapis.openapi.models.operations.SqlInstancesAddServerCaResponse;
import org.openapis.openapi.models.operations.SqlInstancesAddServerCaSecurity;
import org.openapis.openapi.models.operations.SqlInstancesAddServerCaSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesAddServerCaSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesAddServerCaRequest req = new SqlInstancesAddServerCaRequest("sint", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ad";
                fields = "eum";
                key = "dolor";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "nemo";
                uploadProtocol = "quasi";
            }};            

            SqlInstancesAddServerCaResponse res = sdk.instances.sqlInstancesAddServerCa(req, new SqlInstancesAddServerCaSecurity() {{
                option1 = new SqlInstancesAddServerCaSecurityOption1("iure", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesClone

Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesCloneRequest;
import org.openapis.openapi.models.operations.SqlInstancesCloneResponse;
import org.openapis.openapi.models.operations.SqlInstancesCloneSecurity;
import org.openapis.openapi.models.operations.SqlInstancesCloneSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesCloneSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BinLogCoordinates;
import org.openapis.openapi.models.shared.CloneContext;
import org.openapis.openapi.models.shared.InstancesCloneRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesCloneRequest req = new SqlInstancesCloneRequest("debitis", "eius") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesCloneRequest = new InstancesCloneRequest() {{
                    cloneContext = new CloneContext() {{
                        allocatedIpRange = "deleniti";
                        binLogCoordinates = new BinLogCoordinates() {{
                            binLogFileName = "facilis";
                            binLogPosition = "in";
                            kind = "architecto";
                        }};;
                        databaseNames = new String[]{{
                            add("repudiandae"),
                        }};
                        destinationInstanceName = "ullam";
                        kind = "expedita";
                        pitrTimestampMs = "nihil";
                        pointInTime = "repellat";
                        preferredZone = "quibusdam";
                    }};;
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            SqlInstancesCloneResponse res = sdk.instances.sqlInstancesClone(req, new SqlInstancesCloneSecurity() {{
                option1 = new SqlInstancesCloneSecurityOption1("quo", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesDelete

Deletes a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesDeleteRequest;
import org.openapis.openapi.models.operations.SqlInstancesDeleteResponse;
import org.openapis.openapi.models.operations.SqlInstancesDeleteSecurity;
import org.openapis.openapi.models.operations.SqlInstancesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesDeleteRequest req = new SqlInstancesDeleteRequest("pariatur", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                key = "ab";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ipsam";
                uploadProtocol = "voluptate";
            }};            

            SqlInstancesDeleteResponse res = sdk.instances.sqlInstancesDelete(req, new SqlInstancesDeleteSecurity() {{
                option1 = new SqlInstancesDeleteSecurityOption1("autem", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesDemoteMaster

Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesDemoteMasterRequest;
import org.openapis.openapi.models.operations.SqlInstancesDemoteMasterResponse;
import org.openapis.openapi.models.operations.SqlInstancesDemoteMasterSecurity;
import org.openapis.openapi.models.operations.SqlInstancesDemoteMasterSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesDemoteMasterSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DemoteMasterConfiguration;
import org.openapis.openapi.models.shared.DemoteMasterContext;
import org.openapis.openapi.models.shared.DemoteMasterMySqlReplicaConfiguration;
import org.openapis.openapi.models.shared.InstancesDemoteMasterRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesDemoteMasterRequest req = new SqlInstancesDemoteMasterRequest("eaque", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesDemoteMasterRequest = new InstancesDemoteMasterRequest() {{
                    demoteMasterContext = new DemoteMasterContext() {{
                        kind = "voluptatibus";
                        masterInstanceName = "perferendis";
                        replicaConfiguration = new DemoteMasterConfiguration() {{
                            kind = "fugiat";
                            mysqlReplicaConfiguration = new DemoteMasterMySqlReplicaConfiguration() {{
                                caCertificate = "amet";
                                clientCertificate = "aut";
                                clientKey = "cumque";
                                kind = "corporis";
                                password = "hic";
                                username = "Morgan33";
                            }};;
                        }};;
                        skipReplicationSetup = false;
                        verifyGtidConsistency = false;
                    }};;
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            SqlInstancesDemoteMasterResponse res = sdk.instances.sqlInstancesDemoteMaster(req, new SqlInstancesDemoteMasterSecurity() {{
                option1 = new SqlInstancesDemoteMasterSecurityOption1("quam", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesExport

Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesExportRequest;
import org.openapis.openapi.models.operations.SqlInstancesExportResponse;
import org.openapis.openapi.models.operations.SqlInstancesExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportContext;
import org.openapis.openapi.models.shared.ExportContextBakExportOptions;
import org.openapis.openapi.models.shared.ExportContextCsvExportOptions;
import org.openapis.openapi.models.shared.ExportContextFileTypeEnum;
import org.openapis.openapi.models.shared.ExportContextSqlExportOptions;
import org.openapis.openapi.models.shared.ExportContextSqlExportOptionsMysqlExportOptions;
import org.openapis.openapi.models.shared.InstancesExportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesExportRequest req = new SqlInstancesExportRequest("vero", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesExportRequest = new InstancesExportRequest() {{
                    exportContext = new ExportContext() {{
                        bakExportOptions = new ExportContextBakExportOptions() {{
                            stripeCount = 928082;
                            striped = false;
                        }};;
                        csvExportOptions = new ExportContextCsvExportOptions() {{
                            escapeCharacter = "omnis";
                            fieldsTerminatedBy = "facilis";
                            linesTerminatedBy = "perspiciatis";
                            quoteCharacter = "voluptatem";
                            selectQuery = "porro";
                        }};;
                        databases = new String[]{{
                            add("blanditiis"),
                        }};
                        fileType = ExportContextFileTypeEnum.CSV;
                        kind = "eaque";
                        offload = false;
                        sqlExportOptions = new ExportContextSqlExportOptions() {{
                            mysqlExportOptions = new ExportContextSqlExportOptionsMysqlExportOptions() {{
                                masterData = 577229;
                            }};;
                            schemaOnly = false;
                            tables = new String[]{{
                                add("adipisci"),
                                add("asperiores"),
                                add("earum"),
                            }};
                        }};;
                        uri = "http://peaceful-popularity.name";
                    }};;
                }};;
                accessToken = "pariatur";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "libero";
                key = "delectus";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "aliquid";
                uploadProtocol = "dolorem";
            }};            

            SqlInstancesExportResponse res = sdk.instances.sqlInstancesExport(req, new SqlInstancesExportSecurity("dolorem", "dolor") {{
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

## sqlInstancesFailover

Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesFailoverRequest;
import org.openapis.openapi.models.operations.SqlInstancesFailoverResponse;
import org.openapis.openapi.models.operations.SqlInstancesFailoverSecurity;
import org.openapis.openapi.models.operations.SqlInstancesFailoverSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesFailoverSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FailoverContext;
import org.openapis.openapi.models.shared.InstancesFailoverRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesFailoverRequest req = new SqlInstancesFailoverRequest("qui", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesFailoverRequest = new InstancesFailoverRequest() {{
                    failoverContext = new FailoverContext() {{
                        kind = "excepturi";
                        settingsVersion = "cum";
                    }};;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "amet";
                key = "dolorum";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "ipsa";
            }};            

            SqlInstancesFailoverResponse res = sdk.instances.sqlInstancesFailover(req, new SqlInstancesFailoverSecurity() {{
                option1 = new SqlInstancesFailoverSecurityOption1("iure", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesGet

Retrieves a resource containing information about a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesGetRequest;
import org.openapis.openapi.models.operations.SqlInstancesGetResponse;
import org.openapis.openapi.models.operations.SqlInstancesGetSecurity;
import org.openapis.openapi.models.operations.SqlInstancesGetSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesGetRequest req = new SqlInstancesGetRequest("quaerat", "accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "eos";
                key = "atque";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "ab";
                uploadProtocol = "soluta";
            }};            

            SqlInstancesGetResponse res = sdk.instances.sqlInstancesGet(req, new SqlInstancesGetSecurity() {{
                option1 = new SqlInstancesGetSecurityOption1("dolorum", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.databaseInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlInstancesImport

Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesImportRequest;
import org.openapis.openapi.models.operations.SqlInstancesImportResponse;
import org.openapis.openapi.models.operations.SqlInstancesImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportContext;
import org.openapis.openapi.models.shared.ImportContextBakImportOptions;
import org.openapis.openapi.models.shared.ImportContextBakImportOptionsEncryptionOptions;
import org.openapis.openapi.models.shared.ImportContextCsvImportOptions;
import org.openapis.openapi.models.shared.ImportContextFileTypeEnum;
import org.openapis.openapi.models.shared.InstancesImportRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesImportRequest req = new SqlInstancesImportRequest("voluptate", "dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesImportRequest = new InstancesImportRequest() {{
                    importContext = new ImportContext() {{
                        bakImportOptions = new ImportContextBakImportOptions() {{
                            encryptionOptions = new ImportContextBakImportOptionsEncryptionOptions() {{
                                certPath = "omnis";
                                pvkPassword = "necessitatibus";
                                pvkPath = "distinctio";
                            }};;
                            striped = false;
                        }};;
                        csvImportOptions = new ImportContextCsvImportOptions() {{
                            columns = new String[]{{
                                add("nihil"),
                                add("ipsum"),
                                add("voluptate"),
                                add("id"),
                            }};
                            escapeCharacter = "saepe";
                            fieldsTerminatedBy = "eius";
                            linesTerminatedBy = "aspernatur";
                            quoteCharacter = "perferendis";
                            table = "amet";
                        }};;
                        database = "optio";
                        fileType = ImportContextFileTypeEnum.BAK;
                        importUser = "ad";
                        kind = "saepe";
                        uri = "http://present-necktie.biz";
                    }};;
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "alias";
                key = "at";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "vel";
                uploadProtocol = "quod";
            }};            

            SqlInstancesImportResponse res = sdk.instances.sqlInstancesImport(req, new SqlInstancesImportSecurity("officiis", "qui") {{
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

## sqlInstancesInsert

Creates a new Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesInsertRequest;
import org.openapis.openapi.models.operations.SqlInstancesInsertResponse;
import org.openapis.openapi.models.operations.SqlInstancesInsertSecurity;
import org.openapis.openapi.models.operations.SqlInstancesInsertSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AclEntry;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupConfiguration;
import org.openapis.openapi.models.shared.BackupRetentionSettings;
import org.openapis.openapi.models.shared.BackupRetentionSettingsRetentionUnitEnum;
import org.openapis.openapi.models.shared.DatabaseFlags;
import org.openapis.openapi.models.shared.DatabaseInstanceBackendTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceDatabaseVersionEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceFailoverReplica;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceInstanceTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceStateEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum;
import org.openapis.openapi.models.shared.DenyMaintenancePeriod;
import org.openapis.openapi.models.shared.DiskEncryptionConfiguration;
import org.openapis.openapi.models.shared.DiskEncryptionStatus;
import org.openapis.openapi.models.shared.InsightsConfig;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.IpConfiguration;
import org.openapis.openapi.models.shared.IpMapping;
import org.openapis.openapi.models.shared.IpMappingTypeEnum;
import org.openapis.openapi.models.shared.LocationPreference;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowUpdateTrackEnum;
import org.openapis.openapi.models.shared.MySqlReplicaConfiguration;
import org.openapis.openapi.models.shared.OnPremisesConfiguration;
import org.openapis.openapi.models.shared.PasswordValidationPolicy;
import org.openapis.openapi.models.shared.PasswordValidationPolicyComplexityEnum;
import org.openapis.openapi.models.shared.ReplicaConfiguration;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.SettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.SettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.SettingsConnectorEnforcementEnum;
import org.openapis.openapi.models.shared.SettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.SettingsPricingPlanEnum;
import org.openapis.openapi.models.shared.SettingsReplicationTypeEnum;
import org.openapis.openapi.models.shared.SqlActiveDirectoryConfig;
import org.openapis.openapi.models.shared.SqlOutOfDiskReport;
import org.openapis.openapi.models.shared.SqlOutOfDiskReportSqlOutOfDiskStateEnum;
import org.openapis.openapi.models.shared.SqlScheduledMaintenance;
import org.openapis.openapi.models.shared.SqlServerAuditConfig;
import org.openapis.openapi.models.shared.SslCert;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesInsertRequest req = new SqlInstancesInsertRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    backendType = DatabaseInstanceBackendTypeEnum.FIRST_GEN;
                    connectionName = "harum";
                    currentDiskSize = "iusto";
                    databaseVersion = DatabaseInstanceDatabaseVersionEnum.SQLSERVER2017_EXPRESS;
                    diskEncryptionConfiguration = new DiskEncryptionConfiguration() {{
                        kind = "quisquam";
                        kmsKeyName = "tenetur";
                    }};;
                    diskEncryptionStatus = new DiskEncryptionStatus() {{
                        kind = "amet";
                        kmsKeyVersionName = "tempore";
                    }};;
                    etag = "accusamus";
                    failoverReplica = new DatabaseInstanceFailoverReplica() {{
                        available = false;
                        name = "Darlene Effertz";
                    }};;
                    gceZone = "nihil";
                    instanceType = DatabaseInstanceInstanceTypeEnum.SQL_INSTANCE_TYPE_UNSPECIFIED;
                    ipAddresses = new org.openapis.openapi.models.shared.IpMapping[]{{
                        add(new IpMapping() {{
                            ipAddress = "neque";
                            timeToRetire = "sed";
                            type = IpMappingTypeEnum.OUTGOING;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "libero";
                            timeToRetire = "voluptas";
                            type = IpMappingTypeEnum.PRIVATE_;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "quam";
                            timeToRetire = "ipsum";
                            type = IpMappingTypeEnum.PRIMARY;
                        }}),
                    }};
                    ipv6Address = "qui";
                    kind = "cupiditate";
                    maintenanceVersion = "maxime";
                    masterInstanceName = "pariatur";
                    maxDiskSize = "soluta";
                    name = "Kayla Larson";
                    onPremisesConfiguration = new OnPremisesConfiguration() {{
                        caCertificate = "dolores";
                        clientCertificate = "distinctio";
                        clientKey = "facilis";
                        dumpFilePath = "aliquid";
                        hostPort = "quam";
                        kind = "molestias";
                        password = "temporibus";
                        sourceInstance = new InstanceReference() {{
                            name = "Gladys Considine";
                            project = "sunt";
                            region = "ullam";
                        }};;
                        username = "Mireya76";
                    }};;
                    outOfDiskReport = new SqlOutOfDiskReport() {{
                        sqlMinRecommendedIncreaseSizeGb = 746994;
                        sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum.SOFT_SHUTDOWN;
                    }};;
                    project = "et";
                    region = "saepe";
                    replicaConfiguration = new ReplicaConfiguration() {{
                        failoverTarget = false;
                        kind = "ipsum";
                        mysqlReplicaConfiguration = new MySqlReplicaConfiguration() {{
                            caCertificate = "veritatis";
                            clientCertificate = "nobis";
                            clientKey = "quos";
                            connectRetryInterval = 731694;
                            dumpFilePath = "cupiditate";
                            kind = "aperiam";
                            masterHeartbeatPeriod = "delectus";
                            password = "dolorem";
                            sslCipher = "dolore";
                            username = "Edmund.Fisher6";
                            verifyServerCertificate = false;
                        }};;
                    }};;
                    replicaNames = new String[]{{
                        add("quas"),
                    }};
                    rootPassword = "itaque";
                    satisfiesPzs = false;
                    scheduledMaintenance = new SqlScheduledMaintenance() {{
                        canDefer = false;
                        canReschedule = false;
                        scheduleDeadlineTime = "consequatur";
                        startTime = "est";
                    }};;
                    secondaryGceZone = "repellendus";
                    selfLink = "porro";
                    serverCaCert = new SslCert() {{
                        cert = "doloribus";
                        certSerialNumber = "ut";
                        commonName = "facilis";
                        createTime = "cupiditate";
                        expirationTime = "qui";
                        instance = "quae";
                        kind = "laudantium";
                        selfLink = "odio";
                        sha1Fingerprint = "occaecati";
                    }};;
                    serviceAccountEmailAddress = "voluptatibus";
                    settings = new Settings() {{
                        activationPolicy = SettingsActivationPolicyEnum.ON_DEMAND;
                        activeDirectoryConfig = new SqlActiveDirectoryConfig() {{
                            domain = "vero";
                            kind = "omnis";
                        }};;
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            threadsPerCore = 338159;
                        }};;
                        authorizedGaeApplications = new String[]{{
                            add("delectus"),
                        }};
                        availabilityType = SettingsAvailabilityTypeEnum.ZONAL;
                        backupConfiguration = new BackupConfiguration() {{
                            backupRetentionSettings = new BackupRetentionSettings() {{
                                retainedBackups = 231701;
                                retentionUnit = BackupRetentionSettingsRetentionUnitEnum.COUNT;
                            }};;
                            binaryLogEnabled = false;
                            enabled = false;
                            kind = "tenetur";
                            location = "dignissimos";
                            pointInTimeRecoveryEnabled = false;
                            replicationLogArchivingEnabled = false;
                            startTime = "hic";
                            transactionLogRetentionDays = 715561;
                        }};;
                        collation = "quod";
                        connectorEnforcement = SettingsConnectorEnforcementEnum.NOT_REQUIRED;
                        crashSafeReplicationEnabled = false;
                        dataDiskSizeGb = "similique";
                        dataDiskType = SettingsDataDiskTypeEnum.PD_HDD;
                        databaseFlags = new org.openapis.openapi.models.shared.DatabaseFlags[]{{
                            add(new DatabaseFlags() {{
                                name = "Joanne Sporer";
                                value = "natus";
                            }}),
                            add(new DatabaseFlags() {{
                                name = "Richard Wiza";
                                value = "fugit";
                            }}),
                            add(new DatabaseFlags() {{
                                name = "Elijah Wyman";
                                value = "ducimus";
                            }}),
                            add(new DatabaseFlags() {{
                                name = "Brandi Glover";
                                value = "aspernatur";
                            }}),
                        }};
                        databaseReplicationEnabled = false;
                        deletionProtectionEnabled = false;
                        denyMaintenancePeriods = new org.openapis.openapi.models.shared.DenyMaintenancePeriod[]{{
                            add(new DenyMaintenancePeriod() {{
                                endDate = "possimus";
                                startDate = "magnam";
                                time = "ratione";
                            }}),
                            add(new DenyMaintenancePeriod() {{
                                endDate = "ex";
                                startDate = "laudantium";
                                time = "dicta";
                            }}),
                        }};
                        insightsConfig = new InsightsConfig() {{
                            queryInsightsEnabled = false;
                            queryPlansPerMinute = 224317;
                            queryStringLength = 980700;
                            recordApplicationTags = false;
                            recordClientAddress = false;
                        }};;
                        ipConfiguration = new IpConfiguration() {{
                            allocatedIpRange = "quasi";
                            authorizedNetworks = new org.openapis.openapi.models.shared.AclEntry[]{{
                                add(new AclEntry() {{
                                    expirationTime = "nulla";
                                    kind = "excepturi";
                                    name = "Gordon Willms";
                                    value = "ea";
                                }}),
                                add(new AclEntry() {{
                                    expirationTime = "impedit";
                                    kind = "corporis";
                                    name = "Jeanne Bode";
                                    value = "quo";
                                }}),
                            }};
                            enablePrivatePathForGoogleCloudServices = false;
                            ipv4Enabled = false;
                            privateNetwork = "consectetur";
                            requireSsl = false;
                        }};;
                        kind = "recusandae";
                        locationPreference = new LocationPreference() {{
                            followGaeApplication = "aspernatur";
                            kind = "minima";
                            secondaryZone = "eaque";
                            zone = "a";
                        }};;
                        maintenanceWindow = new MaintenanceWindow() {{
                            day = 725595;
                            hour = 13948;
                            kind = "aut";
                            updateTrack = MaintenanceWindowUpdateTrackEnum.CANARY;
                        }};;
                        passwordValidationPolicy = new PasswordValidationPolicy() {{
                            complexity = PasswordValidationPolicyComplexityEnum.COMPLEXITY_DEFAULT;
                            disallowUsernameSubstring = false;
                            enablePasswordPolicy = false;
                            minLength = 304582;
                            passwordChangeInterval = "fugit";
                            reuseInterval = 882860;
                        }};;
                        pricingPlan = SettingsPricingPlanEnum.SQL_PRICING_PLAN_UNSPECIFIED;
                        replicationType = SettingsReplicationTypeEnum.SQL_REPLICATION_TYPE_UNSPECIFIED;
                        settingsVersion = "et";
                        sqlServerAuditConfig = new SqlServerAuditConfig() {{
                            bucket = "dolorum";
                            kind = "laborum";
                            retentionInterval = "placeat";
                            uploadInterval = "velit";
                        }};;
                        storageAutoResize = false;
                        storageAutoResizeLimit = "eum";
                        tier = "autem";
                        timeZone = "nobis";
                        userLabels = new java.util.HashMap<String, String>() {{
                            put("assumenda", "nulla");
                            put("voluptas", "libero");
                            put("quasi", "tempora");
                        }};
                    }};;
                    state = DatabaseInstanceStateEnum.SUSPENDED;
                    suspensionReason = new org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum[]{{
                        add(DatabaseInstanceSuspensionReasonEnum.LEGAL_ISSUE),
                    }};
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "odio";
                key = "eius";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "rem";
                uploadProtocol = "fuga";
            }};            

            SqlInstancesInsertResponse res = sdk.instances.sqlInstancesInsert(req, new SqlInstancesInsertSecurity() {{
                option1 = new SqlInstancesInsertSecurityOption1("reprehenderit", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesList

Lists instances under a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesListRequest;
import org.openapis.openapi.models.operations.SqlInstancesListResponse;
import org.openapis.openapi.models.operations.SqlInstancesListSecurity;
import org.openapis.openapi.models.operations.SqlInstancesListSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesListRequest req = new SqlInstancesListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eum";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "eos";
                filter = "praesentium";
                key = "quisquam";
                maxResults = 86377L;
                oauthToken = "ipsa";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "neque";
                uploadProtocol = "quo";
            }};            

            SqlInstancesListResponse res = sdk.instances.sqlInstancesList(req, new SqlInstancesListSecurity() {{
                option1 = new SqlInstancesListSecurityOption1("illum", "quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instancesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlInstancesListServerCas

Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesListServerCasRequest;
import org.openapis.openapi.models.operations.SqlInstancesListServerCasResponse;
import org.openapis.openapi.models.operations.SqlInstancesListServerCasSecurity;
import org.openapis.openapi.models.operations.SqlInstancesListServerCasSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesListServerCasSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesListServerCasRequest req = new SqlInstancesListServerCasRequest("fuga", "eius") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "consequatur";
                key = "tempora";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "aspernatur";
                uploadProtocol = "sequi";
            }};            

            SqlInstancesListServerCasResponse res = sdk.instances.sqlInstancesListServerCas(req, new SqlInstancesListServerCasSecurity() {{
                option1 = new SqlInstancesListServerCasSecurityOption1("quo", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.instancesListServerCasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sqlInstancesPatch

Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesPatchRequest;
import org.openapis.openapi.models.operations.SqlInstancesPatchResponse;
import org.openapis.openapi.models.operations.SqlInstancesPatchSecurity;
import org.openapis.openapi.models.operations.SqlInstancesPatchSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AclEntry;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupConfiguration;
import org.openapis.openapi.models.shared.BackupRetentionSettings;
import org.openapis.openapi.models.shared.BackupRetentionSettingsRetentionUnitEnum;
import org.openapis.openapi.models.shared.DatabaseFlags;
import org.openapis.openapi.models.shared.DatabaseInstanceBackendTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceDatabaseVersionEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceFailoverReplica;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceInstanceTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceStateEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum;
import org.openapis.openapi.models.shared.DenyMaintenancePeriod;
import org.openapis.openapi.models.shared.DiskEncryptionConfiguration;
import org.openapis.openapi.models.shared.DiskEncryptionStatus;
import org.openapis.openapi.models.shared.InsightsConfig;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.IpConfiguration;
import org.openapis.openapi.models.shared.IpMapping;
import org.openapis.openapi.models.shared.IpMappingTypeEnum;
import org.openapis.openapi.models.shared.LocationPreference;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowUpdateTrackEnum;
import org.openapis.openapi.models.shared.MySqlReplicaConfiguration;
import org.openapis.openapi.models.shared.OnPremisesConfiguration;
import org.openapis.openapi.models.shared.PasswordValidationPolicy;
import org.openapis.openapi.models.shared.PasswordValidationPolicyComplexityEnum;
import org.openapis.openapi.models.shared.ReplicaConfiguration;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.SettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.SettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.SettingsConnectorEnforcementEnum;
import org.openapis.openapi.models.shared.SettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.SettingsPricingPlanEnum;
import org.openapis.openapi.models.shared.SettingsReplicationTypeEnum;
import org.openapis.openapi.models.shared.SqlActiveDirectoryConfig;
import org.openapis.openapi.models.shared.SqlOutOfDiskReport;
import org.openapis.openapi.models.shared.SqlOutOfDiskReportSqlOutOfDiskStateEnum;
import org.openapis.openapi.models.shared.SqlScheduledMaintenance;
import org.openapis.openapi.models.shared.SqlServerAuditConfig;
import org.openapis.openapi.models.shared.SslCert;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesPatchRequest req = new SqlInstancesPatchRequest("recusandae", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    backendType = DatabaseInstanceBackendTypeEnum.EXTERNAL;
                    connectionName = "dignissimos";
                    currentDiskSize = "inventore";
                    databaseVersion = DatabaseInstanceDatabaseVersionEnum.POSTGRES15;
                    diskEncryptionConfiguration = new DiskEncryptionConfiguration() {{
                        kind = "totam";
                        kmsKeyName = "accusamus";
                    }};;
                    diskEncryptionStatus = new DiskEncryptionStatus() {{
                        kind = "aliquam";
                        kmsKeyVersionName = "odio";
                    }};;
                    etag = "occaecati";
                    failoverReplica = new DatabaseInstanceFailoverReplica() {{
                        available = false;
                        name = "Miranda Daniel";
                    }};;
                    gceZone = "accusantium";
                    instanceType = DatabaseInstanceInstanceTypeEnum.READ_REPLICA_INSTANCE;
                    ipAddresses = new org.openapis.openapi.models.shared.IpMapping[]{{
                        add(new IpMapping() {{
                            ipAddress = "quas";
                            timeToRetire = "praesentium";
                            type = IpMappingTypeEnum.SQL_IP_ADDRESS_TYPE_UNSPECIFIED;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "deleniti";
                            timeToRetire = "fugit";
                            type = IpMappingTypeEnum.PRIVATE_;
                        }}),
                    }};
                    ipv6Address = "mollitia";
                    kind = "incidunt";
                    maintenanceVersion = "atque";
                    masterInstanceName = "explicabo";
                    maxDiskSize = "minima";
                    name = "Denise Will";
                    onPremisesConfiguration = new OnPremisesConfiguration() {{
                        caCertificate = "explicabo";
                        clientCertificate = "saepe";
                        clientKey = "occaecati";
                        dumpFilePath = "atque";
                        hostPort = "et";
                        kind = "esse";
                        password = "eveniet";
                        sourceInstance = new InstanceReference() {{
                            name = "Patrick Koch";
                            project = "vero";
                            region = "aliquid";
                        }};;
                        username = "Augustine_Turner";
                    }};;
                    outOfDiskReport = new SqlOutOfDiskReport() {{
                        sqlMinRecommendedIncreaseSizeGb = 473221;
                        sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum.SOFT_SHUTDOWN;
                    }};;
                    project = "occaecati";
                    region = "minima";
                    replicaConfiguration = new ReplicaConfiguration() {{
                        failoverTarget = false;
                        kind = "distinctio";
                        mysqlReplicaConfiguration = new MySqlReplicaConfiguration() {{
                            caCertificate = "eligendi";
                            clientCertificate = "sit";
                            clientKey = "culpa";
                            connectRetryInterval = 731398;
                            dumpFilePath = "adipisci";
                            kind = "cumque";
                            masterHeartbeatPeriod = "consequuntur";
                            password = "consequatur";
                            sslCipher = "minus";
                            username = "Elouise45";
                            verifyServerCertificate = false;
                        }};;
                    }};;
                    replicaNames = new String[]{{
                        add("provident"),
                        add("a"),
                        add("nulla"),
                    }};
                    rootPassword = "quas";
                    satisfiesPzs = false;
                    scheduledMaintenance = new SqlScheduledMaintenance() {{
                        canDefer = false;
                        canReschedule = false;
                        scheduleDeadlineTime = "esse";
                        startTime = "quasi";
                    }};;
                    secondaryGceZone = "a";
                    selfLink = "error";
                    serverCaCert = new SslCert() {{
                        cert = "sint";
                        certSerialNumber = "pariatur";
                        commonName = "possimus";
                        createTime = "quia";
                        expirationTime = "eveniet";
                        instance = "asperiores";
                        kind = "facere";
                        selfLink = "veritatis";
                        sha1Fingerprint = "consequuntur";
                    }};;
                    serviceAccountEmailAddress = "quasi";
                    settings = new Settings() {{
                        activationPolicy = SettingsActivationPolicyEnum.NEVER;
                        activeDirectoryConfig = new SqlActiveDirectoryConfig() {{
                            domain = "culpa";
                            kind = "aliquid";
                        }};;
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            threadsPerCore = 949298;
                        }};;
                        authorizedGaeApplications = new String[]{{
                            add("earum"),
                        }};
                        availabilityType = SettingsAvailabilityTypeEnum.ZONAL;
                        backupConfiguration = new BackupConfiguration() {{
                            backupRetentionSettings = new BackupRetentionSettings() {{
                                retainedBackups = 447378;
                                retentionUnit = BackupRetentionSettingsRetentionUnitEnum.RETENTION_UNIT_UNSPECIFIED;
                            }};;
                            binaryLogEnabled = false;
                            enabled = false;
                            kind = "libero";
                            location = "illum";
                            pointInTimeRecoveryEnabled = false;
                            replicationLogArchivingEnabled = false;
                            startTime = "soluta";
                            transactionLogRetentionDays = 33304;
                        }};;
                        collation = "aliquam";
                        connectorEnforcement = SettingsConnectorEnforcementEnum.REQUIRED;
                        crashSafeReplicationEnabled = false;
                        dataDiskSizeGb = "dicta";
                        dataDiskType = SettingsDataDiskTypeEnum.PD_SSD;
                        databaseFlags = new org.openapis.openapi.models.shared.DatabaseFlags[]{{
                            add(new DatabaseFlags() {{
                                name = "Alma Armstrong";
                                value = "quibusdam";
                            }}),
                            add(new DatabaseFlags() {{
                                name = "Cassandra Ward V";
                                value = "tenetur";
                            }}),
                        }};
                        databaseReplicationEnabled = false;
                        deletionProtectionEnabled = false;
                        denyMaintenancePeriods = new org.openapis.openapi.models.shared.DenyMaintenancePeriod[]{{
                            add(new DenyMaintenancePeriod() {{
                                endDate = "at";
                                startDate = "et";
                                time = "voluptate";
                            }}),
                        }};
                        insightsConfig = new InsightsConfig() {{
                            queryInsightsEnabled = false;
                            queryPlansPerMinute = 55965;
                            queryStringLength = 326701;
                            recordApplicationTags = false;
                            recordClientAddress = false;
                        }};;
                        ipConfiguration = new IpConfiguration() {{
                            allocatedIpRange = "veritatis";
                            authorizedNetworks = new org.openapis.openapi.models.shared.AclEntry[]{{
                                add(new AclEntry() {{
                                    expirationTime = "adipisci";
                                    kind = "iste";
                                    name = "Ms. Kenneth Ledner";
                                    value = "mollitia";
                                }}),
                            }};
                            enablePrivatePathForGoogleCloudServices = false;
                            ipv4Enabled = false;
                            privateNetwork = "ab";
                            requireSsl = false;
                        }};;
                        kind = "corrupti";
                        locationPreference = new LocationPreference() {{
                            followGaeApplication = "non";
                            kind = "voluptatem";
                            secondaryZone = "dolor";
                            zone = "occaecati";
                        }};;
                        maintenanceWindow = new MaintenanceWindow() {{
                            day = 253191;
                            hour = 771089;
                            kind = "explicabo";
                            updateTrack = MaintenanceWindowUpdateTrackEnum.CANARY;
                        }};;
                        passwordValidationPolicy = new PasswordValidationPolicy() {{
                            complexity = PasswordValidationPolicyComplexityEnum.COMPLEXITY_UNSPECIFIED;
                            disallowUsernameSubstring = false;
                            enablePasswordPolicy = false;
                            minLength = 491025;
                            passwordChangeInterval = "dicta";
                            reuseInterval = 981640;
                        }};;
                        pricingPlan = SettingsPricingPlanEnum.PACKAGE_;
                        replicationType = SettingsReplicationTypeEnum.SQL_REPLICATION_TYPE_UNSPECIFIED;
                        settingsVersion = "voluptatibus";
                        sqlServerAuditConfig = new SqlServerAuditConfig() {{
                            bucket = "voluptas";
                            kind = "asperiores";
                            retentionInterval = "aperiam";
                            uploadInterval = "ea";
                        }};;
                        storageAutoResize = false;
                        storageAutoResizeLimit = "quaerat";
                        tier = "consequuntur";
                        timeZone = "repellendus";
                        userLabels = new java.util.HashMap<String, String>() {{
                            put("maxime", "dignissimos");
                            put("officia", "asperiores");
                            put("nemo", "quae");
                        }};
                    }};;
                    state = DatabaseInstanceStateEnum.SUSPENDED;
                    suspensionReason = new org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum[]{{
                        add(DatabaseInstanceSuspensionReasonEnum.KMS_KEY_ISSUE),
                        add(DatabaseInstanceSuspensionReasonEnum.BILLING_ISSUE),
                        add(DatabaseInstanceSuspensionReasonEnum.SQL_SUSPENSION_REASON_UNSPECIFIED),
                        add(DatabaseInstanceSuspensionReasonEnum.BILLING_ISSUE),
                    }};
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "velit";
                key = "culpa";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "totam";
                uploadProtocol = "fugiat";
            }};            

            SqlInstancesPatchResponse res = sdk.instances.sqlInstancesPatch(req, new SqlInstancesPatchSecurity() {{
                option1 = new SqlInstancesPatchSecurityOption1("vel", "ducimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesPromoteReplica

Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesPromoteReplicaRequest;
import org.openapis.openapi.models.operations.SqlInstancesPromoteReplicaResponse;
import org.openapis.openapi.models.operations.SqlInstancesPromoteReplicaSecurity;
import org.openapis.openapi.models.operations.SqlInstancesPromoteReplicaSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesPromoteReplicaSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesPromoteReplicaRequest req = new SqlInstancesPromoteReplicaRequest("quos", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "possimus";
                alt = AltEnum.PROTO;
                callback = "cum";
                fields = "commodi";
                key = "in";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "assumenda";
                uploadProtocol = "nemo";
            }};            

            SqlInstancesPromoteReplicaResponse res = sdk.instances.sqlInstancesPromoteReplica(req, new SqlInstancesPromoteReplicaSecurity() {{
                option1 = new SqlInstancesPromoteReplicaSecurityOption1("recusandae", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesResetSslConfig

Deletes all client certificates and generates a new server SSL certificate for the instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesResetSslConfigRequest;
import org.openapis.openapi.models.operations.SqlInstancesResetSslConfigResponse;
import org.openapis.openapi.models.operations.SqlInstancesResetSslConfigSecurity;
import org.openapis.openapi.models.operations.SqlInstancesResetSslConfigSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesResetSslConfigSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesResetSslConfigRequest req = new SqlInstancesResetSslConfigRequest("aperiam", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "facere";
                key = "numquam";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "reiciendis";
                uploadProtocol = "quidem";
            }};            

            SqlInstancesResetSslConfigResponse res = sdk.instances.sqlInstancesResetSslConfig(req, new SqlInstancesResetSslConfigSecurity() {{
                option1 = new SqlInstancesResetSslConfigSecurityOption1("saepe", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesRestart

Restarts a Cloud SQL instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesRestartRequest;
import org.openapis.openapi.models.operations.SqlInstancesRestartResponse;
import org.openapis.openapi.models.operations.SqlInstancesRestartSecurity;
import org.openapis.openapi.models.operations.SqlInstancesRestartSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesRestartSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesRestartRequest req = new SqlInstancesRestartRequest("dolore", "sunt") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "beatae";
                key = "dignissimos";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "consectetur";
                uploadProtocol = "corporis";
            }};            

            SqlInstancesRestartResponse res = sdk.instances.sqlInstancesRestart(req, new SqlInstancesRestartSecurity() {{
                option1 = new SqlInstancesRestartSecurityOption1("harum", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesRestoreBackup

Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesRestoreBackupRequest;
import org.openapis.openapi.models.operations.SqlInstancesRestoreBackupResponse;
import org.openapis.openapi.models.operations.SqlInstancesRestoreBackupSecurity;
import org.openapis.openapi.models.operations.SqlInstancesRestoreBackupSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesRestoreBackupSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesRestoreBackupRequest;
import org.openapis.openapi.models.shared.RestoreBackupContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesRestoreBackupRequest req = new SqlInstancesRestoreBackupRequest("ipsa", "voluptates") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesRestoreBackupRequest = new InstancesRestoreBackupRequest() {{
                    restoreBackupContext = new RestoreBackupContext() {{
                        backupRunId = "vitae";
                        instanceId = "accusamus";
                        kind = "similique";
                        project = "tempora";
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "voluptas";
                key = "minima";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            SqlInstancesRestoreBackupResponse res = sdk.instances.sqlInstancesRestoreBackup(req, new SqlInstancesRestoreBackupSecurity() {{
                option1 = new SqlInstancesRestoreBackupSecurityOption1("dolores", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesRotateServerCa

Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesRotateServerCaRequest;
import org.openapis.openapi.models.operations.SqlInstancesRotateServerCaResponse;
import org.openapis.openapi.models.operations.SqlInstancesRotateServerCaSecurity;
import org.openapis.openapi.models.operations.SqlInstancesRotateServerCaSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesRotateServerCaSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesRotateServerCaRequest;
import org.openapis.openapi.models.shared.RotateServerCaContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesRotateServerCaRequest req = new SqlInstancesRotateServerCaRequest("in", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                instancesRotateServerCaRequest = new InstancesRotateServerCaRequest() {{
                    rotateServerCaContext = new RotateServerCaContext() {{
                        kind = "officiis";
                        nextVersion = "temporibus";
                    }};;
                }};;
                accessToken = "ullam";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "blanditiis";
                key = "quas";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "culpa";
                uploadProtocol = "corrupti";
            }};            

            SqlInstancesRotateServerCaResponse res = sdk.instances.sqlInstancesRotateServerCa(req, new SqlInstancesRotateServerCaSecurity() {{
                option1 = new SqlInstancesRotateServerCaSecurityOption1("pariatur", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesStartReplica

Starts the replication in the read replica instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesStartReplicaRequest;
import org.openapis.openapi.models.operations.SqlInstancesStartReplicaResponse;
import org.openapis.openapi.models.operations.SqlInstancesStartReplicaSecurity;
import org.openapis.openapi.models.operations.SqlInstancesStartReplicaSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesStartReplicaSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesStartReplicaRequest req = new SqlInstancesStartReplicaRequest("hic", "exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "reiciendis";
                key = "explicabo";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "voluptate";
                uploadProtocol = "expedita";
            }};            

            SqlInstancesStartReplicaResponse res = sdk.instances.sqlInstancesStartReplica(req, new SqlInstancesStartReplicaSecurity() {{
                option1 = new SqlInstancesStartReplicaSecurityOption1("ab", "iste") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesStopReplica

Stops the replication in the read replica instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesStopReplicaRequest;
import org.openapis.openapi.models.operations.SqlInstancesStopReplicaResponse;
import org.openapis.openapi.models.operations.SqlInstancesStopReplicaSecurity;
import org.openapis.openapi.models.operations.SqlInstancesStopReplicaSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesStopReplicaSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesStopReplicaRequest req = new SqlInstancesStopReplicaRequest("dolore", "laborum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "explicabo";
                key = "voluptas";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "suscipit";
                uploadProtocol = "sapiente";
            }};            

            SqlInstancesStopReplicaResponse res = sdk.instances.sqlInstancesStopReplica(req, new SqlInstancesStopReplicaSecurity() {{
                option1 = new SqlInstancesStopReplicaSecurityOption1("debitis", "illo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesTruncateLog

Truncate MySQL general and slow query log tables MySQL only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesTruncateLogRequest;
import org.openapis.openapi.models.operations.SqlInstancesTruncateLogResponse;
import org.openapis.openapi.models.operations.SqlInstancesTruncateLogSecurity;
import org.openapis.openapi.models.operations.SqlInstancesTruncateLogSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesTruncateLogSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstancesTruncateLogRequest;
import org.openapis.openapi.models.shared.TruncateLogContext;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesTruncateLogRequest req = new SqlInstancesTruncateLogRequest("reiciendis", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                instancesTruncateLogRequest = new InstancesTruncateLogRequest() {{
                    truncateLogContext = new TruncateLogContext() {{
                        kind = "maiores";
                        logType = "incidunt";
                    }};;
                }};;
                accessToken = "sed";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "necessitatibus";
                key = "ipsum";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "quos";
                uploadProtocol = "voluptatibus";
            }};            

            SqlInstancesTruncateLogResponse res = sdk.instances.sqlInstancesTruncateLog(req, new SqlInstancesTruncateLogSecurity() {{
                option1 = new SqlInstancesTruncateLogSecurityOption1("tempora", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## sqlInstancesUpdate

Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SqlInstancesUpdateRequest;
import org.openapis.openapi.models.operations.SqlInstancesUpdateResponse;
import org.openapis.openapi.models.operations.SqlInstancesUpdateSecurity;
import org.openapis.openapi.models.operations.SqlInstancesUpdateSecurityOption1;
import org.openapis.openapi.models.operations.SqlInstancesUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AclEntry;
import org.openapis.openapi.models.shared.AdvancedMachineFeatures;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupConfiguration;
import org.openapis.openapi.models.shared.BackupRetentionSettings;
import org.openapis.openapi.models.shared.BackupRetentionSettingsRetentionUnitEnum;
import org.openapis.openapi.models.shared.DatabaseFlags;
import org.openapis.openapi.models.shared.DatabaseInstanceBackendTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceDatabaseVersionEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceFailoverReplica;
import org.openapis.openapi.models.shared.DatabaseInstanceInput;
import org.openapis.openapi.models.shared.DatabaseInstanceInstanceTypeEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceStateEnum;
import org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum;
import org.openapis.openapi.models.shared.DenyMaintenancePeriod;
import org.openapis.openapi.models.shared.DiskEncryptionConfiguration;
import org.openapis.openapi.models.shared.DiskEncryptionStatus;
import org.openapis.openapi.models.shared.InsightsConfig;
import org.openapis.openapi.models.shared.InstanceReference;
import org.openapis.openapi.models.shared.IpConfiguration;
import org.openapis.openapi.models.shared.IpMapping;
import org.openapis.openapi.models.shared.IpMappingTypeEnum;
import org.openapis.openapi.models.shared.LocationPreference;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowUpdateTrackEnum;
import org.openapis.openapi.models.shared.MySqlReplicaConfiguration;
import org.openapis.openapi.models.shared.OnPremisesConfiguration;
import org.openapis.openapi.models.shared.PasswordValidationPolicy;
import org.openapis.openapi.models.shared.PasswordValidationPolicyComplexityEnum;
import org.openapis.openapi.models.shared.ReplicaConfiguration;
import org.openapis.openapi.models.shared.Settings;
import org.openapis.openapi.models.shared.SettingsActivationPolicyEnum;
import org.openapis.openapi.models.shared.SettingsAvailabilityTypeEnum;
import org.openapis.openapi.models.shared.SettingsConnectorEnforcementEnum;
import org.openapis.openapi.models.shared.SettingsDataDiskTypeEnum;
import org.openapis.openapi.models.shared.SettingsPricingPlanEnum;
import org.openapis.openapi.models.shared.SettingsReplicationTypeEnum;
import org.openapis.openapi.models.shared.SqlActiveDirectoryConfig;
import org.openapis.openapi.models.shared.SqlOutOfDiskReport;
import org.openapis.openapi.models.shared.SqlOutOfDiskReportSqlOutOfDiskStateEnum;
import org.openapis.openapi.models.shared.SqlScheduledMaintenance;
import org.openapis.openapi.models.shared.SqlServerAuditConfig;
import org.openapis.openapi.models.shared.SslCert;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SqlInstancesUpdateRequest req = new SqlInstancesUpdateRequest("voluptate", "reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                databaseInstanceInput = new DatabaseInstanceInput() {{
                    backendType = DatabaseInstanceBackendTypeEnum.SQL_BACKEND_TYPE_UNSPECIFIED;
                    connectionName = "non";
                    currentDiskSize = "officiis";
                    databaseVersion = DatabaseInstanceDatabaseVersionEnum.MYSQL80;
                    diskEncryptionConfiguration = new DiskEncryptionConfiguration() {{
                        kind = "facilis";
                        kmsKeyName = "quaerat";
                    }};;
                    diskEncryptionStatus = new DiskEncryptionStatus() {{
                        kind = "incidunt";
                        kmsKeyVersionName = "ipsam";
                    }};;
                    etag = "debitis";
                    failoverReplica = new DatabaseInstanceFailoverReplica() {{
                        available = false;
                        name = "Mark Rolfson";
                    }};;
                    gceZone = "minima";
                    instanceType = DatabaseInstanceInstanceTypeEnum.READ_REPLICA_INSTANCE;
                    ipAddresses = new org.openapis.openapi.models.shared.IpMapping[]{{
                        add(new IpMapping() {{
                            ipAddress = "nulla";
                            timeToRetire = "magni";
                            type = IpMappingTypeEnum.SQL_IP_ADDRESS_TYPE_UNSPECIFIED;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "saepe";
                            timeToRetire = "numquam";
                            type = IpMappingTypeEnum.PRIMARY;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "in";
                            timeToRetire = "officiis";
                            type = IpMappingTypeEnum.SQL_IP_ADDRESS_TYPE_UNSPECIFIED;
                        }}),
                        add(new IpMapping() {{
                            ipAddress = "laudantium";
                            timeToRetire = "exercitationem";
                            type = IpMappingTypeEnum.OUTGOING;
                        }}),
                    }};
                    ipv6Address = "cum";
                    kind = "laboriosam";
                    maintenanceVersion = "dolorum";
                    masterInstanceName = "voluptatum";
                    maxDiskSize = "error";
                    name = "Rudolph Trantow";
                    onPremisesConfiguration = new OnPremisesConfiguration() {{
                        caCertificate = "nostrum";
                        clientCertificate = "officia";
                        clientKey = "dolorum";
                        dumpFilePath = "corrupti";
                        hostPort = "accusamus";
                        kind = "tempora";
                        password = "atque";
                        sourceInstance = new InstanceReference() {{
                            name = "Miss April Stiedemann";
                            project = "magnam";
                            region = "consequatur";
                        }};;
                        username = "Jaiden53";
                    }};;
                    outOfDiskReport = new SqlOutOfDiskReport() {{
                        sqlMinRecommendedIncreaseSizeGb = 558065;
                        sqlOutOfDiskState = SqlOutOfDiskReportSqlOutOfDiskStateEnum.SOFT_SHUTDOWN;
                    }};;
                    project = "corporis";
                    region = "et";
                    replicaConfiguration = new ReplicaConfiguration() {{
                        failoverTarget = false;
                        kind = "blanditiis";
                        mysqlReplicaConfiguration = new MySqlReplicaConfiguration() {{
                            caCertificate = "ex";
                            clientCertificate = "sed";
                            clientKey = "sit";
                            connectRetryInterval = 425508;
                            dumpFilePath = "nostrum";
                            kind = "saepe";
                            masterHeartbeatPeriod = "error";
                            password = "consequatur";
                            sslCipher = "incidunt";
                            username = "Vivienne.Ebert9";
                            verifyServerCertificate = false;
                        }};;
                    }};;
                    replicaNames = new String[]{{
                        add("labore"),
                        add("quidem"),
                        add("atque"),
                    }};
                    rootPassword = "laborum";
                    satisfiesPzs = false;
                    scheduledMaintenance = new SqlScheduledMaintenance() {{
                        canDefer = false;
                        canReschedule = false;
                        scheduleDeadlineTime = "nam";
                        startTime = "tenetur";
                    }};;
                    secondaryGceZone = "laboriosam";
                    selfLink = "alias";
                    serverCaCert = new SslCert() {{
                        cert = "amet";
                        certSerialNumber = "deserunt";
                        commonName = "voluptate";
                        createTime = "unde";
                        expirationTime = "reiciendis";
                        instance = "provident";
                        kind = "repellendus";
                        selfLink = "delectus";
                        sha1Fingerprint = "voluptates";
                    }};;
                    serviceAccountEmailAddress = "perferendis";
                    settings = new Settings() {{
                        activationPolicy = SettingsActivationPolicyEnum.NEVER;
                        activeDirectoryConfig = new SqlActiveDirectoryConfig() {{
                            domain = "quidem";
                            kind = "reprehenderit";
                        }};;
                        advancedMachineFeatures = new AdvancedMachineFeatures() {{
                            threadsPerCore = 813679;
                        }};;
                        authorizedGaeApplications = new String[]{{
                            add("praesentium"),
                            add("mollitia"),
                            add("veniam"),
                        }};
                        availabilityType = SettingsAvailabilityTypeEnum.SQL_AVAILABILITY_TYPE_UNSPECIFIED;
                        backupConfiguration = new BackupConfiguration() {{
                            backupRetentionSettings = new BackupRetentionSettings() {{
                                retainedBackups = 790840;
                                retentionUnit = BackupRetentionSettingsRetentionUnitEnum.COUNT;
                            }};;
                            binaryLogEnabled = false;
                            enabled = false;
                            kind = "quasi";
                            location = "atque";
                            pointInTimeRecoveryEnabled = false;
                            replicationLogArchivingEnabled = false;
                            startTime = "reprehenderit";
                            transactionLogRetentionDays = 991142;
                        }};;
                        collation = "totam";
                        connectorEnforcement = SettingsConnectorEnforcementEnum.NOT_REQUIRED;
                        crashSafeReplicationEnabled = false;
                        dataDiskSizeGb = "quidem";
                        dataDiskType = SettingsDataDiskTypeEnum.OBSOLETE_LOCAL_SSD;
                        databaseFlags = new org.openapis.openapi.models.shared.DatabaseFlags[]{{
                            add(new DatabaseFlags() {{
                                name = "Grace Shields";
                                value = "error";
                            }}),
                        }};
                        databaseReplicationEnabled = false;
                        deletionProtectionEnabled = false;
                        denyMaintenancePeriods = new org.openapis.openapi.models.shared.DenyMaintenancePeriod[]{{
                            add(new DenyMaintenancePeriod() {{
                                endDate = "officiis";
                                startDate = "accusamus";
                                time = "natus";
                            }}),
                            add(new DenyMaintenancePeriod() {{
                                endDate = "minima";
                                startDate = "aspernatur";
                                time = "ex";
                            }}),
                            add(new DenyMaintenancePeriod() {{
                                endDate = "maiores";
                                startDate = "corrupti";
                                time = "at";
                            }}),
                            add(new DenyMaintenancePeriod() {{
                                endDate = "error";
                                startDate = "blanditiis";
                                time = "suscipit";
                            }}),
                        }};
                        insightsConfig = new InsightsConfig() {{
                            queryInsightsEnabled = false;
                            queryPlansPerMinute = 922348;
                            queryStringLength = 542129;
                            recordApplicationTags = false;
                            recordClientAddress = false;
                        }};;
                        ipConfiguration = new IpConfiguration() {{
                            allocatedIpRange = "atque";
                            authorizedNetworks = new org.openapis.openapi.models.shared.AclEntry[]{{
                                add(new AclEntry() {{
                                    expirationTime = "recusandae";
                                    kind = "dolorum";
                                    name = "Dr. Leroy Wisoky Jr.";
                                    value = "beatae";
                                }}),
                            }};
                            enablePrivatePathForGoogleCloudServices = false;
                            ipv4Enabled = false;
                            privateNetwork = "dolores";
                            requireSsl = false;
                        }};;
                        kind = "enim";
                        locationPreference = new LocationPreference() {{
                            followGaeApplication = "laboriosam";
                            kind = "velit";
                            secondaryZone = "a";
                            zone = "molestias";
                        }};;
                        maintenanceWindow = new MaintenanceWindow() {{
                            day = 300029;
                            hour = 906355;
                            kind = "consequuntur";
                            updateTrack = MaintenanceWindowUpdateTrackEnum.CANARY;
                        }};;
                        passwordValidationPolicy = new PasswordValidationPolicy() {{
                            complexity = PasswordValidationPolicyComplexityEnum.COMPLEXITY_DEFAULT;
                            disallowUsernameSubstring = false;
                            enablePasswordPolicy = false;
                            minLength = 597937;
                            passwordChangeInterval = "in";
                            reuseInterval = 238043;
                        }};;
                        pricingPlan = SettingsPricingPlanEnum.PER_USE;
                        replicationType = SettingsReplicationTypeEnum.SYNCHRONOUS;
                        settingsVersion = "consequuntur";
                        sqlServerAuditConfig = new SqlServerAuditConfig() {{
                            bucket = "fugit";
                            kind = "id";
                            retentionInterval = "quis";
                            uploadInterval = "reprehenderit";
                        }};;
                        storageAutoResize = false;
                        storageAutoResizeLimit = "error";
                        tier = "illo";
                        timeZone = "corporis";
                        userLabels = new java.util.HashMap<String, String>() {{
                            put("eveniet", "non");
                            put("vero", "doloremque");
                            put("iure", "ipsa");
                        }};
                    }};;
                    state = DatabaseInstanceStateEnum.PENDING_CREATE;
                    suspensionReason = new org.openapis.openapi.models.shared.DatabaseInstanceSuspensionReasonEnum[]{{
                        add(DatabaseInstanceSuspensionReasonEnum.LEGAL_ISSUE),
                    }};
                }};;
                accessToken = "eveniet";
                alt = AltEnum.JSON;
                callback = "cum";
                fields = "iure";
                key = "necessitatibus";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "distinctio";
                uploadProtocol = "voluptatum";
            }};            

            SqlInstancesUpdateResponse res = sdk.instances.sqlInstancesUpdate(req, new SqlInstancesUpdateSecurity() {{
                option1 = new SqlInstancesUpdateSecurityOption1("rem", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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
