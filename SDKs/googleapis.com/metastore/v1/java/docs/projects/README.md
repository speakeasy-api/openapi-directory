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
* [metastoreProjectsLocationsServicesBackupsGetIamPolicy](#metastoreprojectslocationsservicesbackupsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [metastoreProjectsLocationsServicesBackupsList](#metastoreprojectslocationsservicesbackupslist) - Lists backups in a service.
* [metastoreProjectsLocationsServicesBackupsSetIamPolicy](#metastoreprojectslocationsservicesbackupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* [metastoreProjectsLocationsServicesCreate](#metastoreprojectslocationsservicescreate) - Creates a metastore service in a project and location.
* [metastoreProjectsLocationsServicesExportMetadata](#metastoreprojectslocationsservicesexportmetadata) - Exports metadata from a service.
* [metastoreProjectsLocationsServicesList](#metastoreprojectslocationsserviceslist) - Lists services in a project and location.
* [metastoreProjectsLocationsServicesMetadataImportsCreate](#metastoreprojectslocationsservicesmetadataimportscreate) - Creates a new MetadataImport in a given project and location.
* [metastoreProjectsLocationsServicesMetadataImportsGet](#metastoreprojectslocationsservicesmetadataimportsget) - Gets details of a single import.
* [metastoreProjectsLocationsServicesMetadataImportsList](#metastoreprojectslocationsservicesmetadataimportslist) - Lists imports in a service.
* [metastoreProjectsLocationsServicesMetadataImportsPatch](#metastoreprojectslocationsservicesmetadataimportspatch) - Updates a single import. Only the description field of MetadataImport is supported to be updated.
* [metastoreProjectsLocationsServicesMoveTableToDatabase](#metastoreprojectslocationsservicesmovetabletodatabase) - Move a table to another database.
* [metastoreProjectsLocationsServicesQueryMetadata](#metastoreprojectslocationsservicesquerymetadata) - Query DPMS metadata.
* [metastoreProjectsLocationsServicesRestore](#metastoreprojectslocationsservicesrestore) - Restores a service from a backup.
* [metastoreProjectsLocationsServicesTestIamPermissions](#metastoreprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

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
                            metastoreType = BackendMetastoreMetastoreTypeEnum.DATAPROC_METASTORE;
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
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.HiveMetastoreConfigInput;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowDayOfWeekEnum;
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
                                    }};
                                    version = "sint";
                                }});
                            }};
                            configOverrides = new java.util.HashMap<String, String>() {{
                                put("provident", "necessitatibus");
                                put("sint", "officia");
                            }};
                            kerberosConfig = new KerberosConfig() {{
                                keytab = new Secret() {{
                                    cloudSecret = "dolor";
                                }};;
                                krb5ConfigGcsUri = "debitis";
                                principal = "a";
                            }};;
                            version = "dolorum";
                        }};;
                        labels = new java.util.HashMap<String, String>() {{
                            put("in", "illum");
                            put("maiores", "rerum");
                        }};
                        maintenanceWindow = new MaintenanceWindow() {{
                            dayOfWeek = MaintenanceWindowDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                            hourOfDay = 297437;
                        }};;
                        name = "Irving Jenkins";
                        network = "accusamus";
                        networkConfig = new NetworkConfigInput() {{
                            consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                add(new ConsumerInput() {{
                                    subnetwork = "occaecati";
                                }}),
                            }};
                        }};;
                        port = 313218;
                        releaseChannel = ServiceReleaseChannelEnum.STABLE;
                        scalingConfig = new ScalingConfig() {{
                            instanceSize = ScalingConfigInstanceSizeEnum.EXTRA_LARGE;
                            scalingFactor = 6925.32;
                        }};;
                        telemetryConfig = new TelemetryConfig() {{
                            logFormat = TelemetryConfigLogFormatEnum.LEGACY;
                        }};;
                        tier = ServiceTierEnum.ENTERPRISE;
                    }};;
                }};;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                backupId = "deleniti";
                callback = "sapiente";
                fields = "amet";
                key = "deserunt";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "vel";
                requestId = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            MetastoreProjectsLocationsServicesBackupsCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsCreate(req, new MetastoreProjectsLocationsServicesBackupsCreateSecurity("perferendis", "nihil") {{
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

            MetastoreProjectsLocationsServicesBackupsDeleteRequest req = new MetastoreProjectsLocationsServicesBackupsDeleteRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.JSON;
                callback = "labore";
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                requestId = "vero";
                uploadType = "aspernatur";
                uploadProtocol = "architecto";
            }};            

            MetastoreProjectsLocationsServicesBackupsDeleteResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsDelete(req, new MetastoreProjectsLocationsServicesBackupsDeleteSecurity("magnam", "et") {{
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

## metastoreProjectsLocationsServicesBackupsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest req = new MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "accusantium";
                key = "mollitia";
                oauthToken = "reiciendis";
                optionsRequestedPolicyVersion = 652103L;
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            MetastoreProjectsLocationsServicesBackupsGetIamPolicyResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsGetIamPolicy(req, new MetastoreProjectsLocationsServicesBackupsGetIamPolicySecurity("necessitatibus", "odit") {{
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

            MetastoreProjectsLocationsServicesBackupsListRequest req = new MetastoreProjectsLocationsServicesBackupsListRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                filter = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                orderBy = "in";
                pageSize = 100226L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "ullam";
                uploadProtocol = "expedita";
            }};            

            MetastoreProjectsLocationsServicesBackupsListResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsList(req, new MetastoreProjectsLocationsServicesBackupsListSecurity("nihil", "repellat") {{
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

## metastoreProjectsLocationsServicesBackupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity;
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

            MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest req = new MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consequuntur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("magni"),
                                            add("sunt"),
                                            add("quo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maxime"),
                                            add("ea"),
                                            add("excepturi"),
                                            add("odit"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("autem"),
                                            add("nam"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                            add("voluptatibus"),
                                            add("perferendis"),
                                            add("fugiat"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "aut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("libero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eaque"),
                                            add("quis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("perferendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "minus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("vero"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                            add("omnis"),
                                            add("facilis"),
                                            add("perspiciatis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "porro";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "blanditiis";
                                    expression = "error";
                                    location = "eaque";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("adipisci"),
                                    add("asperiores"),
                                    add("earum"),
                                }};
                                role = "modi";
                            }}),
                        }};
                        etag = "iste";
                        version = 679091;
                    }};;
                    updateMask = "deleniti";
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

            MetastoreProjectsLocationsServicesBackupsSetIamPolicyResponse res = sdk.projects.metastoreProjectsLocationsServicesBackupsSetIamPolicy(req, new MetastoreProjectsLocationsServicesBackupsSetIamPolicySecurity("dolorem", "dolor") {{
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
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.HiveMetastoreConfigInput;
import org.openapis.openapi.models.shared.KerberosConfig;
import org.openapis.openapi.models.shared.MaintenanceWindow;
import org.openapis.openapi.models.shared.MaintenanceWindowDayOfWeekEnum;
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

            MetastoreProjectsLocationsServicesCreateRequest req = new MetastoreProjectsLocationsServicesCreateRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                serviceInput = new ServiceInput() {{
                    databaseType = ServiceDatabaseTypeEnum.SPANNER;
                    encryptionConfig = new EncryptionConfig() {{
                        kmsKey = "excepturi";
                    }};;
                    hiveMetastoreConfig = new HiveMetastoreConfigInput() {{
                        auxiliaryVersions = new java.util.HashMap<String, org.openapis.openapi.models.shared.AuxiliaryVersionConfigInput>() {{
                            put("voluptate", new AuxiliaryVersionConfigInput() {{
                                configOverrides = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "amet");
                                    put("dolorum", "numquam");
                                }};
                                networkConfig = new NetworkConfigInput() {{
                                    consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                        add(new ConsumerInput() {{
                                            subnetwork = "ipsa";
                                        }}),
                                    }};
                                }};
                                version = "ipsa";
                            }});
                            put("iure", new AuxiliaryVersionConfigInput() {{
                                configOverrides = new java.util.HashMap<String, String>() {{
                                    put("quaerat", "accusamus");
                                    put("quidem", "voluptatibus");
                                }};
                                networkConfig = new NetworkConfigInput() {{
                                    consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                        add(new ConsumerInput() {{
                                            subnetwork = "natus";
                                        }}),
                                        add(new ConsumerInput() {{
                                            subnetwork = "eos";
                                        }}),
                                    }};
                                }};
                                version = "atque";
                            }});
                            put("sit", new AuxiliaryVersionConfigInput() {{
                                configOverrides = new java.util.HashMap<String, String>() {{
                                    put("ab", "soluta");
                                    put("dolorum", "iusto");
                                    put("voluptate", "dolorum");
                                    put("deleniti", "omnis");
                                }};
                                networkConfig = new NetworkConfigInput() {{
                                    consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                                        add(new ConsumerInput() {{
                                            subnetwork = "distinctio";
                                        }}),
                                        add(new ConsumerInput() {{
                                            subnetwork = "asperiores";
                                        }}),
                                        add(new ConsumerInput() {{
                                            subnetwork = "nihil";
                                        }}),
                                        add(new ConsumerInput() {{
                                            subnetwork = "ipsum";
                                        }}),
                                    }};
                                }};
                                version = "voluptate";
                            }});
                        }};
                        configOverrides = new java.util.HashMap<String, String>() {{
                            put("saepe", "eius");
                            put("aspernatur", "perferendis");
                            put("amet", "optio");
                        }};
                        kerberosConfig = new KerberosConfig() {{
                            keytab = new Secret() {{
                                cloudSecret = "accusamus";
                            }};;
                            krb5ConfigGcsUri = "ad";
                            principal = "saepe";
                        }};;
                        version = "suscipit";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("provident", "minima");
                        put("repellendus", "totam");
                        put("similique", "alias");
                    }};
                    maintenanceWindow = new MaintenanceWindow() {{
                        dayOfWeek = MaintenanceWindowDayOfWeekEnum.SATURDAY;
                        hourOfDay = 311860;
                    }};;
                    name = "Gina Schmeler";
                    network = "dolorum";
                    networkConfig = new NetworkConfigInput() {{
                        consumers = new org.openapis.openapi.models.shared.ConsumerInput[]{{
                            add(new ConsumerInput() {{
                                subnetwork = "esse";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "harum";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "iusto";
                            }}),
                            add(new ConsumerInput() {{
                                subnetwork = "ipsum";
                            }}),
                        }};
                    }};;
                    port = 788740;
                    releaseChannel = ServiceReleaseChannelEnum.STABLE;
                    scalingConfig = new ScalingConfig() {{
                        instanceSize = ScalingConfigInstanceSizeEnum.EXTRA_SMALL;
                        scalingFactor = 7308.56;
                    }};;
                    telemetryConfig = new TelemetryConfig() {{
                        logFormat = TelemetryConfigLogFormatEnum.JSON;
                    }};;
                    tier = ServiceTierEnum.TIER_UNSPECIFIED;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "totam";
                key = "nihil";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "neque";
                serviceId = "sed";
                uploadType = "vel";
                uploadProtocol = "libero";
            }};            

            MetastoreProjectsLocationsServicesCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesCreate(req, new MetastoreProjectsLocationsServicesCreateSecurity("voluptas", "deserunt") {{
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

            MetastoreProjectsLocationsServicesExportMetadataRequest req = new MetastoreProjectsLocationsServicesExportMetadataRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                exportMetadataRequest = new ExportMetadataRequest() {{
                    databaseDumpType = ExportMetadataRequestDatabaseDumpTypeEnum.TYPE_UNSPECIFIED;
                    destinationGcsFolder = "qui";
                    requestId = "cupiditate";
                }};;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "dicta";
                key = "laborum";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "aspernatur";
                uploadProtocol = "dolores";
            }};            

            MetastoreProjectsLocationsServicesExportMetadataResponse res = sdk.projects.metastoreProjectsLocationsServicesExportMetadata(req, new MetastoreProjectsLocationsServicesExportMetadataSecurity("distinctio", "facilis") {{
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

            MetastoreProjectsLocationsServicesListRequest req = new MetastoreProjectsLocationsServicesListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "neque";
                filter = "fugit";
                key = "magni";
                oauthToken = "odio";
                orderBy = "sunt";
                pageSize = 355613L;
                pageToken = "nam";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "voluptatem";
                uploadProtocol = "cumque";
            }};            

            MetastoreProjectsLocationsServicesListResponse res = sdk.projects.metastoreProjectsLocationsServicesList(req, new MetastoreProjectsLocationsServicesListSecurity("soluta", "nobis") {{
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

            MetastoreProjectsLocationsServicesMetadataImportsCreateRequest req = new MetastoreProjectsLocationsServicesMetadataImportsCreateRequest("et") {{
                dollarXgafv = XgafvEnum.TWO;
                metadataImportInput = new MetadataImportInput() {{
                    databaseDump = new DatabaseDump() {{
                        databaseType = DatabaseDumpDatabaseTypeEnum.DATABASE_TYPE_UNSPECIFIED;
                        gcsUri = "veritatis";
                        sourceDatabase = "nobis";
                        type = DatabaseDumpTypeEnum.MYSQL;
                    }};;
                    description = "tempore";
                    name = "Kevin Willms";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "architecto";
                key = "quae";
                metadataImportId = "aut";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "itaque";
                requestId = "consequatur";
                uploadType = "est";
                uploadProtocol = "repellendus";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsCreateResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsCreate(req, new MetastoreProjectsLocationsServicesMetadataImportsCreateSecurity("porro", "doloribus") {{
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

            MetastoreProjectsLocationsServicesMetadataImportsGetRequest req = new MetastoreProjectsLocationsServicesMetadataImportsGetRequest("ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "laudantium";
                key = "odio";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "quisquam";
                uploadProtocol = "vero";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsGetResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsGet(req, new MetastoreProjectsLocationsServicesMetadataImportsGetSecurity("omnis", "quis") {{
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

            MetastoreProjectsLocationsServicesMetadataImportsListRequest req = new MetastoreProjectsLocationsServicesMetadataImportsListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "tenetur";
                filter = "dignissimos";
                key = "hic";
                oauthToken = "distinctio";
                orderBy = "quod";
                pageSize = 486160L;
                pageToken = "similique";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "vero";
                uploadProtocol = "ducimus";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsListResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsList(req, new MetastoreProjectsLocationsServicesMetadataImportsListSecurity("dolore", "quibusdam") {{
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

            MetastoreProjectsLocationsServicesMetadataImportsPatchRequest req = new MetastoreProjectsLocationsServicesMetadataImportsPatchRequest("illum") {{
                dollarXgafv = XgafvEnum.ONE;
                metadataImportInput = new MetadataImportInput() {{
                    databaseDump = new DatabaseDump() {{
                        databaseType = DatabaseDumpDatabaseTypeEnum.MYSQL;
                        gcsUri = "impedit";
                        sourceDatabase = "aut";
                        type = DatabaseDumpTypeEnum.AVRO;
                    }};;
                    description = "exercitationem";
                    name = "Louis Sauer";
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "alias";
                key = "officia";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "ea";
                updateMask = "aspernatur";
                uploadType = "vel";
                uploadProtocol = "possimus";
            }};            

            MetastoreProjectsLocationsServicesMetadataImportsPatchResponse res = sdk.projects.metastoreProjectsLocationsServicesMetadataImportsPatch(req, new MetastoreProjectsLocationsServicesMetadataImportsPatchSecurity("magnam", "ratione") {{
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

            MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest req = new MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                moveTableToDatabaseRequest = new MoveTableToDatabaseRequest() {{
                    dbName = "dicta";
                    destinationDbName = "dolor";
                    tableName = "maiores";
                }};;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "excepturi";
                key = "voluptatibus";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quisquam";
                uploadProtocol = "saepe";
            }};            

            MetastoreProjectsLocationsServicesMoveTableToDatabaseResponse res = sdk.projects.metastoreProjectsLocationsServicesMoveTableToDatabase(req, new MetastoreProjectsLocationsServicesMoveTableToDatabaseSecurity("ea", "impedit") {{
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

            MetastoreProjectsLocationsServicesQueryMetadataRequest req = new MetastoreProjectsLocationsServicesQueryMetadataRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                queryMetadataRequest = new QueryMetadataRequest() {{
                    query = "aliquid";
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "quo";
                key = "consectetur";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "minima";
                uploadProtocol = "eaque";
            }};            

            MetastoreProjectsLocationsServicesQueryMetadataResponse res = sdk.projects.metastoreProjectsLocationsServicesQueryMetadata(req, new MetastoreProjectsLocationsServicesQueryMetadataSecurity("a", "libero") {{
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

            MetastoreProjectsLocationsServicesRestoreRequest req = new MetastoreProjectsLocationsServicesRestoreRequest("aut") {{
                dollarXgafv = XgafvEnum.ONE;
                restoreServiceRequest = new RestoreServiceRequest() {{
                    backup = "deleniti";
                    requestId = "impedit";
                    restoreType = RestoreServiceRequestRestoreTypeEnum.RESTORE_TYPE_UNSPECIFIED;
                }};;
                accessToken = "fugit";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "non";
                key = "et";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "placeat";
                uploadProtocol = "velit";
            }};            

            MetastoreProjectsLocationsServicesRestoreResponse res = sdk.projects.metastoreProjectsLocationsServicesRestore(req, new MetastoreProjectsLocationsServicesRestoreSecurity("eum", "autem") {{
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

## metastoreProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.MetastoreProjectsLocationsServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MetastoreProjectsLocationsServicesTestIamPermissionsRequest req = new MetastoreProjectsLocationsServicesTestIamPermissionsRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("nulla"),
                        add("voluptas"),
                        add("libero"),
                        add("quasi"),
                    }};
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

            MetastoreProjectsLocationsServicesTestIamPermissionsResponse res = sdk.projects.metastoreProjectsLocationsServicesTestIamPermissions(req, new MetastoreProjectsLocationsServicesTestIamPermissionsSecurity("esse", "esse") {{
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
