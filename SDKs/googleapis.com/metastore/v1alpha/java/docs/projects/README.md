# projects

### Available Operations

* [metastoreProjectsLocationsFederationsCreate](#metastoreprojectslocationsfederationscreate) - Creates a metastore federation in a project and location.
* [metastoreProjectsLocationsFederationsList](#metastoreprojectslocationsfederationslist) - Lists federations in a project and location.
* [metastoreProjectsLocationsList](#metastoreprojectslocationslist) - Lists information about the supported locations for this service.
* [metastoreProjectsLocationsOperationsCancel](#metastoreprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* [metastoreProjectsLocationsOperationsList](#metastoreprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
* [metastoreProjectsLocationsServicesAlterLocation](#metastoreprojectslocationsservicesalterlocation) - Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
* [metastoreProjectsLocationsServicesBackupsCreate](#metastoreprojectslocationsservicesbackupscreate) - Creates a new backup in a given project and location.
* [metastoreProjectsLocationsServicesBackupsDelete](#metastoreprojectslocationsservicesbackupsdelete) - Deletes a single backup.
* [metastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [metastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy](#metastoreprojectslocationsservicesdatabasestablesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy](#metastoreprojectslocationsservicesdatabasestablessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions](#metastoreprojectslocationsservicesdatabasestablestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [metastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [metastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [metastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [metastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [metastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [metastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [metastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [metastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [metastoreProjectsLocationsServicesRemoveIamPolicy](#metastoreprojectslocationsservicesremoveiampolicy) - Removes the attached IAM policies for a resource
* [metastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.

## metastoreProjectsLocationsFederationsCreate

Creates a metastore federation in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendMetastore;
import org.openapis.openapi.models.shared.BackendMetastoreMetastoreTypeEnum;
import org.openapis.openapi.models.shared.FederationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsCreateRequest req = new MetastoreProjectsLocationsFederationsCreateRequest("nam") {{
                dollarXgafv = XgafvEnum.TWO;
                federationInput = new FederationInput() {{
                    backendMetastores = new java.util.HashMap<String, org.openapis.openapi.models.shared.BackendMetastore>() {{
                        put("fugit", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.BIGQUERY;
                            name = "Ms. Earnest Lebsack";
                        }});
                        put("modi", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.METASTORE_TYPE_UNSPECIFIED;
                            name = "Jonathon Klocko";
                        }});
                        put("aspernatur", new BackendMetastore() {{
                            metastoreType = BackendMetastoreMetastoreTypeEnum.METASTORE_TYPE_UNSPECIFIED;
                            name = "Faye Cormier";
                        }});
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "hic");
                        put("saepe", "fuga");
                        put("in", "corporis");
                    }};
                    name = "Brad Turcotte Jr.";
                    version = "reiciendis";
                }};;
                accessToken = "est";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                federationId = "dolores";
                fields = "dolorem";
                key = "corporis";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            MetastoreProjectsLocationsFederationsCreateResponse res = sdk.projects.metastoreProjectsLocationsFederationsCreate(req, new MetastoreProjectsLocationsFederationsCreateSecurity("minima", "excepturi") {{
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

## metastoreProjectsLocationsFederationsList

Lists federations in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsFederationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsFederationsListRequest req = new MetastoreProjectsLocationsFederationsListRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                filter = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                orderBy = "consequuntur";
                pageSize = 995300L;
                pageToken = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            MetastoreProjectsLocationsFederationsListResponse res = sdk.projects.metastoreProjectsLocationsFederationsList(req, new MetastoreProjectsLocationsFederationsListSecurity("quam", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listFederationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsListRequest req = new MetastoreProjectsLocationsListRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                filter = "animi";
                key = "enim";
                oauthToken = "odit";
                pageSize = 778346L;
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            MetastoreProjectsLocationsListResponse res = sdk.projects.metastoreProjectsLocationsList(req, new MetastoreProjectsLocationsListSecurity("possimus", "aut") {{
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

## metastoreProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsOperationsCancelRequest req = new MetastoreProjectsLocationsOperationsCancelRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laborum", "quasi");
                    put("reiciendis", "voluptatibus");
                    put("vero", "nihil");
                    put("praesentium", "voluptatibus");
                }};
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "cum";
                key = "perferendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "maiores";
            }};            

            MetastoreProjectsLocationsOperationsCancelResponse res = sdk.projects.metastoreProjectsLocationsOperationsCancel(req, new MetastoreProjectsLocationsOperationsCancelSecurity("dicta", "corporis") {{
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

## metastoreProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsOperationsListRequest req = new MetastoreProjectsLocationsOperationsListRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                filter = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                pageSize = 216822L;
                pageToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
            }};            

            MetastoreProjectsLocationsOperationsListResponse res = sdk.projects.metastoreProjectsLocationsOperationsList(req, new MetastoreProjectsLocationsOperationsListSecurity("modi", "praesentium") {{
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

## metastoreProjectsLocationsServicesAlterLocation

Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesAlterLocationRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesAlterLocationResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesAlterLocationSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AlterMetadataResourceLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesAlterLocationRequest req = new MetastoreProjectsLocationsServicesAlterLocationRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                alterMetadataResourceLocationRequest = new AlterMetadataResourceLocationRequest() {{
                    locationUri = "quasi";
                    resourceName = "repudiandae";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            MetastoreProjectsLocationsServicesAlterLocationResponse res = sdk.projects.metastoreProjectsLocationsServicesAlterLocation(req, new MetastoreProjectsLocationsServicesAlterLocationSecurity("deserunt", "distinctio") {{
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

## metastoreProjectsLocationsServicesBackupsCreate

Creates a new backup in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuxiliaryVersionConfigInput;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.ConsumerInput;
import org.openapis.openapi.models.shared.DataCatalogConfig;
import org.openapis.openapi.models.shared.DataplexConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.HiveMetastoreConfigEndpointProtocolEnum;
import org.openapis.openapi.models.shared.HiveMetastoreConfigInput;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.Lake;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowDayOfWeekEnum;
import org.openapis.openapi.models.shared.MetadataIntegration;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.ScalingConfig;
import org.openapis.openapi.models.shared.ScalingConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.ServiceDatabaseTypeEnum;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.ServiceReleaseChannelEnum;
import org.openapis.openapi.models.shared.ServiceTierEnum;
import org.openapis.openapi.models.shared.TelemetryConfig;
import org.openapis.openapi.models.shared.TelemetryConfigLogFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesBackupsCreateRequest req = new MetastoreProjectsLocationsServicesBackupsCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                backupInput = new BackupInput() {{
                    description = "modi";
                    name = "Beth McGlynn Sr.";
                    serviceRevision = new ServiceInput() {{
                        databaseType = ServiceDatabaseTypeEnum.SPANNER;
                        encryptionConfig = new EncryptionConfig() {{
                            kmsKey = "ipsam";
                        }};;
                        hiveMetastoreConfig = new HiveMetastoreConfigInput() {{
                            auxiliaryVersions = new java.util.HashMap<String, org.openapis.openapi.models.shared.AuxiliaryVersionConfigInput>() {{
                                put("fugit", new AuxiliaryVersionConfigInput() {{
                                    configOverrides = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "tempora");
                                        put("facilis", "tempore");
                                        put("labore", "delectus");
                                    }};
                                    networkConfig = new NetworkConfigInput() {{
                                        consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                            add(new ConsumerInput() {{
                                                subnetwork = "non";
                                            }}),
                                            add(new ConsumerInput() {{
                                                subnetwork = "eligendi";
                                            }}),
                                        }};
                                        customRoutesEnabled = false;
                                    }};
                                    version = "sint";
                                }});
                            }};
                            configOverrides = new java.util.HashMap<String, String>() {{
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                            }};
                            endpointProtocol = HiveMetastoreConfigEndpointProtocolEnum.ENDPOINT_PROTOCOL_UNSPECIFIED;
                            kerberosConfig = new KerberosConfig() {{
                                keytab = new Secret() {{
                                    cloudSecret = "debitis";
                                }};;
                                krb5ConfigGcsUri = "a";
                                principal = "dolorum";
                            }};;
                            version = "in";
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("illum", "maiores");
                            put("rerum", "dicta");
                        }};
                        maintenanceWindow = new MaintenanceWindow() {{
                            dayOfWeek = MaintenanceWindowDayOfWeekEnum.TUESDAY;
                            hourOfDay = 767024;
                        }};;
                        metadataIntegration = new MetadataIntegration() {{
                            dataCatalogConfig = new DataCatalogConfig() {{
                                enabled = false;
                            }};;
                            dataplexConfig = new DataplexConfig() {{
                                lakeResources = new java.util.HashMap<String, org.openapis.openapi.models.shared.Lake>() {{
                                    put("ea", new Lake() {{
                                        name = "Kayla Thompson";
                                    }});
                                    put("enim", new Lake() {{
                                        name = "Toby Pouros";
                                    }});
                                    put("id", new Lake() {{
                                        name = "Jaime Will";
                                    }});
                                    put("nisi", new Lake() {{
                                        name = "Ada Moen IV";
                                    }});
                                }};
                            }};;
                        }};;
                        name = "Verna Olson";
                        network = "suscipit";
                        networkConfig = new NetworkConfigInput() {{
                            consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                add(new ConsumerInput() {{
                                    subnetwork = "nobis";
                                }}),
                                add(new ConsumerInput() {{
                                    subnetwork = "eum";
                                }}),
                                add(new ConsumerInput() {{
                                    subnetwork = "vero";
                                }}),
                            }};
                            customRoutesEnabled = false;
                        }};;
                        port = 135474;
                        releaseChannel = ServiceReleaseChannelEnum.RELEASE_CHANNEL_UNSPECIFIED;
                        scalingConfig = new ScalingConfig() {{
                            instanceSize = ScalingConfigInstanceSizeEnum.EXTRA_SMALL;
                            scalingFactor = 923.73;
                        }};;
                        telemetryConfig = new TelemetryConfig() {{
                            logFormat = TelemetryConfigLogFormatEnum.LEGACY;
                        }};;
                        tier = ServiceTierEnum.DEVELOPER;
                    }};;
                }};;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                backupId = "sint";
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                requestId = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            MetastoreProjectsLocationsServicesBackupsCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsCreate(req, new MetastoreProjectsLocationsServicesBackupsCreateSecurity("odit", "nemo") {{
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

## metastoreProjectsLocationsServicesBackupsDelete

Deletes a single backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsDeleteRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsDeleteResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesBackupsDeleteRequest req = new MetastoreProjectsLocationsServicesBackupsDeleteRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            MetastoreProjectsLocationsServicesBackupsDeleteResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsDelete(req, new MetastoreProjectsLocationsServicesBackupsDeleteSecurity("ullam", "expedita") {{
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

## metastoreProjectsLocationsServicesBackupsList

Lists backups in a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesBackupsListRequest req = new MetastoreProjectsLocationsServicesBackupsListRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "pariatur";
                filter = "accusantium";
                key = "consequuntur";
                oauthToken = "praesentium";
                orderBy = "natus";
                pageSize = 166847L;
                pageToken = "sunt";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "illum";
                uploadProtocol = "pariatur";
            }};            

            MetastoreProjectsLocationsServicesBackupsListResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsList(req, new MetastoreProjectsLocationsServicesBackupsListSecurity("maxime", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesCreate

Creates a metastore service in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuxiliaryVersionConfigInput;
import org.openapis.openapi.models.shared.ConsumerInput;
import org.openapis.openapi.models.shared.DataCatalogConfig;
import org.openapis.openapi.models.shared.DataplexConfig;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.HiveMetastoreConfigEndpointProtocolEnum;
import org.openapis.openapi.models.shared.HiveMetastoreConfigInput;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.Lake;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowDayOfWeekEnum;
import org.openapis.openapi.models.shared.MetadataIntegration;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.ScalingConfig;
import org.openapis.openapi.models.shared.ScalingConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.Secret;
import org.openapis.openapi.models.shared.ServiceDatabaseTypeEnum;
import org.openapis.openapi.models.shared.ServiceInput;
import org.openapis.openapi.models.shared.ServiceReleaseChannelEnum;
import org.openapis.openapi.models.shared.ServiceTierEnum;
import org.openapis.openapi.models.shared.TelemetryConfig;
import org.openapis.openapi.models.shared.TelemetryConfigLogFormatEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesCreateRequest req = new MetastoreProjectsLocationsServicesCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceInput = new ServiceInput() {{
                    databaseType = ServiceDatabaseTypeEnum.MYSQL;
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKey = "accusantium";
                    }};;
                    hiveMetastoreConfig = new HiveMetastoreConfigInput() {{
                        auxiliaryVersions = new java.util.HashMap<String, org.openapis.openapi.models.shared.AuxiliaryVersionConfigInput>() {{
                            put("maiores", new AuxiliaryVersionConfigInput() {{
                                configOverrides = new java.util.HashMap<String, String>() {{
                                    put("ipsam", "voluptate");
                                    put("autem", "nam");
                                    put("eaque", "pariatur");
                                }};
                                networkConfig = new NetworkConfigInput() {{
                                    consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                        add(new ConsumerInput() {{
                                            subnetwork = "voluptatibus";
                                        }}),
                                        add(new ConsumerInput() {{
                                            subnetwork = "perferendis";
                                        }}),
                                    }};
                                    customRoutesEnabled = false;
                                }};
                                version = "fugiat";
                            }});
                        }};
                        configOverrides = new java.util.HashMap<String, String>() {{
                            put("aut", "cumque");
                        }};
                        endpointProtocol = HiveMetastoreConfigEndpointProtocolEnum.THRIFT;
                        kerberosConfig = new KerberosConfig() {{
                            keytab = new Secret() {{
                                cloudSecret = "hic";
                            }};;
                            krb5ConfigGcsUri = "libero";
                            principal = "nobis";
                        }};;
                        version = "dolores";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("totam", "dignissimos");
                        put("eaque", "quis");
                    }};
                    maintenanceWindow = new MaintenanceWindow() {{
                        dayOfWeek = MaintenanceWindowDayOfWeekEnum.MONDAY;
                        hourOfDay = 179490;
                    }};;
                    metadataIntegration = new MetadataIntegration() {{
                        dataCatalogConfig = new DataCatalogConfig() {{
                            enabled = false;
                        }};;
                        dataplexConfig = new DataplexConfig() {{
                            lakeResources = new java.util.HashMap<String, org.openapis.openapi.models.shared.Lake>() {{
                                put("dolores", new Lake() {{
                                    name = "Darryl Fadel";
                                }});
                            }};
                        }};;
                    }};;
                    name = "Percy Mohr";
                    network = "voluptatem";
                    networkConfig = new NetworkConfigInput() {{
                        consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                            add(new ConsumerInput() {{
                                subnetwork = "consequuntur";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "blanditiis";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "error";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "eaque";
                            }}),
                        }};
                        customRoutesEnabled = false;
                    }};;
                    port = 577229;
                    releaseChannel = ServiceReleaseChannelEnum.STABLE;
                    scalingConfig = new ScalingConfig() {{
                        instanceSize = ScalingConfigInstanceSizeEnum.EXTRA_SMALL;
                        scalingFactor = 9923.97;
                    }};;
                    telemetryConfig = new TelemetryConfig() {{
                        logFormat = TelemetryConfigLogFormatEnum.JSON;
                    }};;
                    tier = ServiceTierEnum.TIER_UNSPECIFIED;
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "deleniti";
                fields = "pariatur";
                key = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "delectus";
                serviceId = "quaerat";
                uploadType = "quos";
                uploadProtocol = "aliquid";
            }};            

            MetastoreProjectsLocationsServicesCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesCreate(req, new MetastoreProjectsLocationsServicesCreateSecurity("dolorem", "dolorem") {{
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

## metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest req = new MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "cum";
                key = "voluptate";
                oauthToken = "dignissimos";
                optionsRequestedPolicyVersion = 970237L;
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyResponse res = sdk.projects.metastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(req, new MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicySecurity("veritatis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest req = new MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quidem"),
                                            add("voluptatibus"),
                                            add("voluptas"),
                                            add("natus"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                            add("fugiat"),
                                            add("ab"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "dolorum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolorum"),
                                            add("deleniti"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("distinctio"),
                                            add("asperiores"),
                                            add("nihil"),
                                            add("ipsum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "id";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "eius";
                                    expression = "aspernatur";
                                    location = "perferendis";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("accusamus"),
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                }};
                                role = "deserunt";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "provident";
                                    expression = "minima";
                                    location = "repellendus";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("alias"),
                                    add("at"),
                                    add("quaerat"),
                                }};
                                role = "tempora";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "vel";
                                    expression = "quod";
                                    location = "officiis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("a"),
                                    add("esse"),
                                    add("harum"),
                                }};
                                role = "iusto";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ipsum";
                                    expression = "quisquam";
                                    location = "tenetur";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("accusamus"),
                                    add("numquam"),
                                    add("enim"),
                                }};
                                role = "dolorem";
                            }}),
                        }};
                        etag = "sapiente";
                        version = 518201;
                    }};;
                    updateMask = "nihil";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "sed";
                key = "vel";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "deserunt";
                uploadProtocol = "quam";
            }};            

            MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyResponse res = sdk.projects.metastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(req, new MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicySecurity("ipsum", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest req = new MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("pariatur"),
                        add("soluta"),
                        add("dicta"),
                        add("laborum"),
                    }};
                }};;
                accessToken = "totam";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "dolores";
                key = "distinctio";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "quam";
                uploadProtocol = "molestias";
            }};            

            MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsResponse res = sdk.projects.metastoreProjectsLocationsServicesDatabasesTablesTestIamPermissions(req, new MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity("temporibus", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesExportMetadata

Exports metadata from a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesExportMetadataRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesExportMetadataResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesExportMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExportMetadataRequest;
import org.openapis.openapi.models.shared.ExportMetadataRequestDatabaseDumpTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesExportMetadataRequest req = new MetastoreProjectsLocationsServicesExportMetadataRequest("neque") {{
                dollarXgafv = XgafvEnum.ONE;
                exportMetadataRequest = new ExportMetadataRequest() {{
                    databaseDumpType = ExportMetadataRequestDatabaseDumpTypeEnum.TYPE_UNSPECIFIED;
                    destinationGcsFolder = "odio";
                    requestId = "sunt";
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "voluptatem";
                key = "cumque";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "et";
                uploadProtocol = "saepe";
            }};            

            MetastoreProjectsLocationsServicesExportMetadataResponse res = sdk.projects.metastoreProjectsLocationsServicesExportMetadata(req, new MetastoreProjectsLocationsServicesExportMetadataSecurity("ipsum", "veritatis") {{
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

## metastoreProjectsLocationsServicesList

Lists services in a project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesListRequest req = new MetastoreProjectsLocationsServicesListRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                filter = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                orderBy = "adipisci";
                pageSize = 677263L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "aut";
                uploadProtocol = "quas";
            }};            

            MetastoreProjectsLocationsServicesListResponse res = sdk.projects.metastoreProjectsLocationsServicesList(req, new MetastoreProjectsLocationsServicesListSecurity("itaque", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesMetadataImportsCreate

Creates a new MetadataImport in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsCreateRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsCreateResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseDump;
import org.openapis.openapi.models.shared.DatabaseDumpDatabaseTypeEnum;
import org.openapis.openapi.models.shared.DatabaseDumpTypeEnum;
import org.openapis.openapi.models.shared.MetadataImportInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesMetadataImportsCreateRequest req = new MetastoreProjectsLocationsServicesMetadataImportsCreateRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                metadataImportInput = new MetadataImportInput() {{
                    databaseDump = new DatabaseDump() {{
                        databaseType = DatabaseDumpDatabaseTypeEnum.MYSQL;
                        gcsUri = "doloribus";
                        sourceDatabase = "ut";
                        type = DatabaseDumpTypeEnum.AVRO;
                    }};;
                    description = "cupiditate";
                    name = "Amy Langworth";
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "omnis";
                key = "quis";
                metadataImportId = "ipsum";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "consectetur";
                uploadType = "vero";
                uploadProtocol = "tenetur";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsCreate(req, new MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity("dignissimos", "hic") {{
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

## metastoreProjectsLocationsServicesMetadataImportsGet

Gets details of a single import.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsGetRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsGetResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesMetadataImportsGetRequest req = new MetastoreProjectsLocationsServicesMetadataImportsGetRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "vero";
                key = "ducimus";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "illum";
                uploadProtocol = "sequi";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsGetResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsGet(req, new MetastoreProjectsLocationsServicesMetadataImportsGetSecurity("natus", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.metadataImport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesMetadataImportsList

Lists imports in a service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsListRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsListResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesMetadataImportsListRequest req = new MetastoreProjectsLocationsServicesMetadataImportsListRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "porro";
                filter = "maiores";
                key = "doloribus";
                oauthToken = "iusto";
                orderBy = "eligendi";
                pageSize = 497391L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "tempora";
                uploadProtocol = "ipsam";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsListResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsList(req, new MetastoreProjectsLocationsServicesMetadataImportsListSecurity("ea", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listMetadataImportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesMetadataImportsPatch

Updates a single import. Only the description field of MetadataImport is supported to be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsPatchRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsPatchResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DatabaseDump;
import org.openapis.openapi.models.shared.DatabaseDumpDatabaseTypeEnum;
import org.openapis.openapi.models.shared.DatabaseDumpTypeEnum;
import org.openapis.openapi.models.shared.MetadataImportInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesMetadataImportsPatchRequest req = new MetastoreProjectsLocationsServicesMetadataImportsPatchRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                metadataImportInput = new MetadataImportInput() {{
                    databaseDump = new DatabaseDump() {{
                        databaseType = DatabaseDumpDatabaseTypeEnum.DATABASE_TYPE_UNSPECIFIED;
                        gcsUri = "ratione";
                        sourceDatabase = "ex";
                        type = DatabaseDumpTypeEnum.MYSQL;
                    }};;
                    description = "dicta";
                    name = "Elisa Boyle";
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "sapiente";
                key = "quisquam";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "impedit";
                updateMask = "corporis";
                uploadType = "veniam";
                uploadProtocol = "aliquid";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsPatchResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsPatch(req, new MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity("inventore", "magnam") {{
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

## metastoreProjectsLocationsServicesMoveTableToDatabase

Move a table to another database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.MoveTableToDatabaseRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest req = new MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                moveTableToDatabaseRequest = new MoveTableToDatabaseRequest() {{
                    dbName = "consectetur";
                    destinationDbName = "recusandae";
                    tableName = "aspernatur";
                }};;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "libero";
                key = "aut";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "impedit";
                uploadProtocol = "aliquam";
            }};            

            MetastoreProjectsLocationsServicesMoveTableToDatabaseResponse res = sdk.projects.metastoreProjectsLocationsServicesMoveTableToDatabase(req, new MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity("fugit", "accusamus") {{
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

## metastoreProjectsLocationsServicesQueryMetadata

Query DPMS metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesQueryMetadataRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesQueryMetadataResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesQueryMetadataSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.QueryMetadataRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesQueryMetadataRequest req = new MetastoreProjectsLocationsServicesQueryMetadataRequest("inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                queryMetadataRequest = new QueryMetadataRequest() {{
                    query = "et";
                }};;
                accessToken = "dolorum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "velit";
                key = "eum";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "quas";
                uploadProtocol = "assumenda";
            }};            

            MetastoreProjectsLocationsServicesQueryMetadataResponse res = sdk.projects.metastoreProjectsLocationsServicesQueryMetadata(req, new MetastoreProjectsLocationsServicesQueryMetadataSecurity("nulla", "voluptas") {{
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

## metastoreProjectsLocationsServicesRemoveIamPolicy

Removes the attached IAM policies for a resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRemoveIamPolicyRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRemoveIamPolicyResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRemoveIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesRemoveIamPolicyRequest req = new MetastoreProjectsLocationsServicesRemoveIamPolicyRequest("libero") {{
                dollarXgafv = XgafvEnum.ONE;
                removeIamPolicyRequest = new RemoveIamPolicyRequest() {{
                    asynchronous = false;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "provident";
                key = "ipsa";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "odio";
                uploadProtocol = "eius";
            }};            

            MetastoreProjectsLocationsServicesRemoveIamPolicyResponse res = sdk.projects.metastoreProjectsLocationsServicesRemoveIamPolicy(req, new MetastoreProjectsLocationsServicesRemoveIamPolicySecurity("esse", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.removeIamPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## metastoreProjectsLocationsServicesRestore

Restores a service from a backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRestoreRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRestoreResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesRestoreSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RestoreServiceRequest;
import org.openapis.openapi.models.shared.RestoreServiceRequestRestoreTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesRestoreRequest req = new MetastoreProjectsLocationsServicesRestoreRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreServiceRequest = new RestoreServiceRequest() {{
                    backup = "reprehenderit";
                    requestId = "quidem";
                    restoreType = RestoreServiceRequestRestoreTypeEnum.METADATA_ONLY;
                }};;
                accessToken = "ut";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "assumenda";
                key = "eos";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "veritatis";
                uploadProtocol = "ipsa";
            }};            

            MetastoreProjectsLocationsServicesRestoreResponse res = sdk.projects.metastoreProjectsLocationsServicesRestore(req, new MetastoreProjectsLocationsServicesRestoreSecurity("id", "quidem") {{
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
