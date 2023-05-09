# projects

### Available Operations

* [fileProjectsLocationsBackupsCreate](#fileprojectslocationsbackupscreate) - Creates a backup.
* [fileProjectsLocationsBackupsList](#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesCreate](#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesList](#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesRestore](#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesRevert](#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
* [fileProjectsLocationsInstancesSharesCreate](#fileprojectslocationsinstancessharescreate) - Creates a share.
* [fileProjectsLocationsInstancesSharesList](#fileprojectslocationsinstancesshareslist) - Lists all shares for a specified instance.
* [fileProjectsLocationsInstancesSnapshotsCreate](#fileprojectslocationsinstancessnapshotscreate) - Creates a snapshot.
* [fileProjectsLocationsInstancesSnapshotsList](#fileprojectslocationsinstancessnapshotslist) - Lists all snapshots in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesSnapshotsPatch](#fileprojectslocationsinstancessnapshotspatch) - Updates the settings of a specific snapshot.
* [fileProjectsLocationsList](#fileprojectslocationslist) - Lists information about the supported locations for this service.
* [fileProjectsLocationsOperationsCancel](#fileprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [fileProjectsLocationsOperationsDelete](#fileprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [fileProjectsLocationsOperationsGet](#fileprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [fileProjectsLocationsOperationsList](#fileprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## fileProjectsLocationsBackupsCreate

Creates a backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsBackupsCreateRequest req = new FileProjectsLocationsBackupsCreateRequest("nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    description = "temporibus";
                    kmsKeyName = "ab";
                    labels = new java.util.HashMap<String, String>() {{
                        put("veritatis", "deserunt");
                        put("perferendis", "ipsam");
                    }};
                    sourceFileShare = "repellendus";
                    sourceInstance = "sapiente";
                }};;
                accessToken = "quo";
                alt = AltEnum.JSON;
                backupId = "at";
                callback = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            FileProjectsLocationsBackupsCreateResponse res = sdk.projects.fileProjectsLocationsBackupsCreate(req, new FileProjectsLocationsBackupsCreateSecurity("porro", "dolorum") {{
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

## fileProjectsLocationsBackupsList

Lists all backups in a project for either a specified location or for all locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsBackupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsBackupsListRequest req = new FileProjectsLocationsBackupsListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                filter = "hic";
                key = "optio";
                oauthToken = "totam";
                orderBy = "beatae";
                pageSize = 414662L;
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            FileProjectsLocationsBackupsListResponse res = sdk.projects.fileProjectsLocationsBackupsList(req, new FileProjectsLocationsBackupsListSecurity("cum", "esse") {{
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

## fileProjectsLocationsInstancesCreate

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DirectoryServicesConfig;
import org.openapis.openapi.models.shared.FileShareConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceProtocolEnum;
import org.openapis.openapi.models.shared.InstanceTierEnum;
import org.openapis.openapi.models.shared.ManagedActiveDirectoryConfig;
import org.openapis.openapi.models.shared.NetworkConfigConnectModeEnum;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.NetworkConfigModesEnum;
import org.openapis.openapi.models.shared.NfsExportOptions;
import org.openapis.openapi.models.shared.NfsExportOptionsAccessModeEnum;
import org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum;
import org.openapis.openapi.models.shared.NfsExportOptionsSquashModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesCreateRequest req = new FileProjectsLocationsInstancesCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                instanceInput = new InstanceInput() {{
                    capacityGb = "aspernatur";
                    description = "perferendis";
                    directoryServices = new DirectoryServicesConfig() {{
                        managedActiveDirectory = new ManagedActiveDirectoryConfig() {{
                            computer = "ad";
                            domain = "natus";
                        }};;
                    }};;
                    etag = "sed";
                    fileShares = new org.openapis.openapi.models.shared.FileShareConfig[]{{
                        add(new FileShareConfig() {{
                            capacityGb = "dolor";
                            name = "Lester Welch";
                            nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                                    anonGid = "iste";
                                    anonUid = "iure";
                                    ipRanges = new String[]{{
                                        add("quidem"),
                                        add("architecto"),
                                        add("ipsa"),
                                        add("reiciendis"),
                                    }};
                                    securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                                        add(NfsExportOptionsSecurityFlavorsEnum.SECURITY_FLAVOR_UNSPECIFIED),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.SQUASH_MODE_UNSPECIFIED;
                                }}),
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                                    anonGid = "explicabo";
                                    anonUid = "nobis";
                                    ipRanges = new String[]{{
                                        add("omnis"),
                                        add("nemo"),
                                    }};
                                    securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5),
                                        add(NfsExportOptionsSecurityFlavorsEnum.SECURITY_FLAVOR_UNSPECIFIED),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.NO_ROOT_SQUASH;
                                }}),
                            }};
                            sourceBackup = "culpa";
                        }}),
                        add(new FileShareConfig() {{
                            capacityGb = "doloribus";
                            name = "Juan O'Hara";
                            nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_WRITE;
                                    anonGid = "mollitia";
                                    anonUid = "occaecati";
                                    ipRanges = new String[]{{
                                        add("commodi"),
                                        add("quam"),
                                    }};
                                    securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                        add(NfsExportOptionsSecurityFlavorsEnum.AUTH_SYS),
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.SQUASH_MODE_UNSPECIFIED;
                                }}),
                            }};
                            sourceBackup = "quis";
                        }}),
                        add(new FileShareConfig() {{
                            capacityGb = "vitae";
                            name = "Matt Hamill";
                            nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_WRITE;
                                    anonGid = "ipsam";
                                    anonUid = "id";
                                    ipRanges = new String[]{{
                                        add("aut"),
                                        add("quasi"),
                                        add("error"),
                                        add("temporibus"),
                                    }};
                                    securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                        add(NfsExportOptionsSecurityFlavorsEnum.SECURITY_FLAVOR_UNSPECIFIED),
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5_P),
                                        add(NfsExportOptionsSecurityFlavorsEnum.KRB5_P),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.ROOT_SQUASH;
                                }}),
                            }};
                            sourceBackup = "nihil";
                        }}),
                    }};
                    kmsKeyName = "praesentium";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "omnis");
                        put("voluptate", "cum");
                        put("perferendis", "doloremque");
                        put("reprehenderit", "ut");
                    }};
                    maxShareCount = "maiores";
                    multiShareEnabled = false;
                    networks = new org.openapis.openapi.models.shared.NetworkConfigInput[]{{
                        add(new NetworkConfigInput() {{
                            connectMode = NetworkConfigConnectModeEnum.DIRECT_PEERING;
                            modes = new org.openapis.openapi.models.shared.NetworkConfigModesEnum[]{{
                                add(NetworkConfigModesEnum.ADDRESS_MODE_UNSPECIFIED),
                                add(NetworkConfigModesEnum.ADDRESS_MODE_UNSPECIFIED),
                            }};
                            network = "harum";
                            reservedIpRange = "enim";
                        }}),
                    }};
                    protocol = InstanceProtocolEnum.NFS_V41;
                    tier = InstanceTierEnum.BASIC_HDD;
                }};;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "ipsum";
                fields = "quidem";
                instanceId = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "praesentium";
                uploadProtocol = "rem";
            }};            

            FileProjectsLocationsInstancesCreateResponse res = sdk.projects.fileProjectsLocationsInstancesCreate(req, new FileProjectsLocationsInstancesCreateSecurity("voluptates", "quasi") {{
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

## fileProjectsLocationsInstancesList

Lists all instances in a project for either a specified location or for all locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesListRequest req = new FileProjectsLocationsInstancesListRequest("repudiandae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                filter = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                orderBy = "explicabo";
                pageSize = 647174L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "labore";
                uploadProtocol = "modi";
            }};            

            FileProjectsLocationsInstancesListResponse res = sdk.projects.fileProjectsLocationsInstancesList(req, new FileProjectsLocationsInstancesListSecurity("qui", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInstancesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileProjectsLocationsInstancesRestore

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRestoreRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRestoreResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRestoreSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RestoreInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesRestoreRequest req = new FileProjectsLocationsInstancesRestoreRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreInstanceRequest = new RestoreInstanceRequest() {{
                    fileShare = "perferendis";
                    sourceBackup = "magni";
                    sourceSnapshot = "assumenda";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            FileProjectsLocationsInstancesRestoreResponse res = sdk.projects.fileProjectsLocationsInstancesRestore(req, new FileProjectsLocationsInstancesRestoreSecurity("delectus", "eum") {{
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

## fileProjectsLocationsInstancesRevert

Revert an existing instance's file system to a specified snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRevertRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRevertResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesRevertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RevertInstanceRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesRevertRequest req = new FileProjectsLocationsInstancesRevertRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                revertInstanceRequest = new RevertInstanceRequest() {{
                    targetSnapshotId = "sint";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "sint";
                key = "officia";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
            }};            

            FileProjectsLocationsInstancesRevertResponse res = sdk.projects.fileProjectsLocationsInstancesRevert(req, new FileProjectsLocationsInstancesRevertSecurity("in", "in") {{
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

## fileProjectsLocationsInstancesSharesCreate

Creates a share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NfsExportOptions;
import org.openapis.openapi.models.shared.NfsExportOptionsAccessModeEnum;
import org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum;
import org.openapis.openapi.models.shared.NfsExportOptionsSquashModeEnum;
import org.openapis.openapi.models.shared.ShareInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesSharesCreateRequest req = new FileProjectsLocationsInstancesSharesCreateRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                shareInput = new ShareInput() {{
                    backup = "rerum";
                    capacityGb = "dicta";
                    description = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("facere", "ea");
                        put("aliquid", "laborum");
                        put("accusamus", "non");
                        put("occaecati", "enim");
                    }};
                    mountName = "accusamus";
                    nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                        add(new NfsExportOptions() {{
                            accessMode = NfsExportOptionsAccessModeEnum.READ_WRITE;
                            anonGid = "provident";
                            anonUid = "nam";
                            ipRanges = new String[]{{
                                add("blanditiis"),
                                add("deleniti"),
                                add("sapiente"),
                            }};
                            securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                            }};
                            squashMode = NfsExportOptionsSquashModeEnum.NO_ROOT_SQUASH;
                        }}),
                        add(new NfsExportOptions() {{
                            accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                            anonGid = "natus";
                            anonUid = "omnis";
                            ipRanges = new String[]{{
                                add("perferendis"),
                                add("nihil"),
                            }};
                            securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                                add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                            }};
                            squashMode = NfsExportOptionsSquashModeEnum.SQUASH_MODE_UNSPECIFIED;
                        }}),
                        add(new NfsExportOptions() {{
                            accessMode = NfsExportOptionsAccessModeEnum.ACCESS_MODE_UNSPECIFIED;
                            anonGid = "suscipit";
                            anonUid = "natus";
                            ipRanges = new String[]{{
                                add("eum"),
                                add("vero"),
                                add("aspernatur"),
                            }};
                            securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                add(NfsExportOptionsSecurityFlavorsEnum.AUTH_SYS),
                            }};
                            squashMode = NfsExportOptionsSquashModeEnum.SQUASH_MODE_UNSPECIFIED;
                        }}),
                        add(new NfsExportOptions() {{
                            accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                            anonGid = "ullam";
                            anonUid = "provident";
                            ipRanges = new String[]{{
                                add("sint"),
                                add("accusantium"),
                                add("mollitia"),
                            }};
                            securityFlavors = new org.openapis.openapi.models.shared.NfsExportOptionsSecurityFlavorsEnum[]{{
                                add(NfsExportOptionsSecurityFlavorsEnum.KRB5_I),
                                add(NfsExportOptionsSecurityFlavorsEnum.AUTH_SYS),
                                add(NfsExportOptionsSecurityFlavorsEnum.KRB5),
                                add(NfsExportOptionsSecurityFlavorsEnum.AUTH_SYS),
                            }};
                            squashMode = NfsExportOptionsSquashModeEnum.ROOT_SQUASH;
                        }}),
                    }};
                }};;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                key = "doloribus";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "eius";
                shareId = "maxime";
                uploadType = "deleniti";
                uploadProtocol = "facilis";
            }};            

            FileProjectsLocationsInstancesSharesCreateResponse res = sdk.projects.fileProjectsLocationsInstancesSharesCreate(req, new FileProjectsLocationsInstancesSharesCreateSecurity("in", "architecto") {{
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

## fileProjectsLocationsInstancesSharesList

Lists all shares for a specified instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSharesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesSharesListRequest req = new FileProjectsLocationsInstancesSharesListRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "repellat";
                filter = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                orderBy = "pariatur";
                pageSize = 37559L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "natus";
                uploadProtocol = "magni";
            }};            

            FileProjectsLocationsInstancesSharesListResponse res = sdk.projects.fileProjectsLocationsInstancesSharesList(req, new FileProjectsLocationsInstancesSharesListSecurity("sunt", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSharesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileProjectsLocationsInstancesSnapshotsCreate

Creates a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsCreateRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsCreateResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SnapshotInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesSnapshotsCreateRequest req = new FileProjectsLocationsInstancesSnapshotsCreateRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotInput = new SnapshotInput() {{
                    description = "maxime";
                    labels = new java.util.HashMap<String, String>() {{
                        put("excepturi", "odit");
                        put("ea", "accusantium");
                    }};
                }};;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "ipsam";
                key = "voluptate";
                oauthToken = "autem";
                prettyPrint = false;
                quotaUser = "nam";
                snapshotId = "eaque";
                uploadType = "pariatur";
                uploadProtocol = "nemo";
            }};            

            FileProjectsLocationsInstancesSnapshotsCreateResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsCreate(req, new FileProjectsLocationsInstancesSnapshotsCreateSecurity("voluptatibus", "perferendis") {{
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

## fileProjectsLocationsInstancesSnapshotsList

Lists all snapshots in a project for either a specified location or for all locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesSnapshotsListRequest req = new FileProjectsLocationsInstancesSnapshotsListRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "hic";
                filter = "libero";
                key = "nobis";
                oauthToken = "dolores";
                orderBy = "quis";
                pageSize = 521037L;
                pageToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "eaque";
                uploadType = "quis";
                uploadProtocol = "nesciunt";
            }};            

            FileProjectsLocationsInstancesSnapshotsListResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsList(req, new FileProjectsLocationsInstancesSnapshotsListSecurity("eos", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSnapshotsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fileProjectsLocationsInstancesSnapshotsPatch

Updates the settings of a specific snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsPatchRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsPatchResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsInstancesSnapshotsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SnapshotInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsInstancesSnapshotsPatchRequest req = new FileProjectsLocationsInstancesSnapshotsPatchRequest("dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotInput = new SnapshotInput() {{
                    description = "quam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vero", "nostrum");
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                key = "perspiciatis";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                updateMask = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            FileProjectsLocationsInstancesSnapshotsPatchResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsPatch(req, new FileProjectsLocationsInstancesSnapshotsPatchSecurity("eaque", "occaecati") {{
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

## fileProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsListRequest req = new FileProjectsLocationsListRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "iste";
                filter = "dolorum";
                includeUnrevealedLocations = false;
                key = "deleniti";
                oauthToken = "pariatur";
                pageSize = 589910L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "delectus";
                uploadProtocol = "quaerat";
            }};            

            FileProjectsLocationsListResponse res = sdk.projects.fileProjectsLocationsList(req, new FileProjectsLocationsListSecurity("quos", "aliquid") {{
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

## fileProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsOperationsCancelRequest req = new FileProjectsLocationsOperationsCancelRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("qui", "ipsum");
                }};
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptate";
                key = "dignissimos";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "dolorum";
                uploadProtocol = "numquam";
            }};            

            FileProjectsLocationsOperationsCancelResponse res = sdk.projects.fileProjectsLocationsOperationsCancel(req, new FileProjectsLocationsOperationsCancelSecurity("veritatis", "ipsa") {{
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

## fileProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsOperationsDeleteRequest req = new FileProjectsLocationsOperationsDeleteRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "quidem";
                force = false;
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "eos";
                uploadProtocol = "atque";
            }};            

            FileProjectsLocationsOperationsDeleteResponse res = sdk.projects.fileProjectsLocationsOperationsDelete(req, new FileProjectsLocationsOperationsDeleteSecurity("sit", "fugiat") {{
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

## fileProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsOperationsGetRequest req = new FileProjectsLocationsOperationsGetRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "distinctio";
                uploadProtocol = "asperiores";
            }};            

            FileProjectsLocationsOperationsGetResponse res = sdk.projects.fileProjectsLocationsOperationsGet(req, new FileProjectsLocationsOperationsGetSecurity("nihil", "ipsum") {{
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

## fileProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.FileProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FileProjectsLocationsOperationsListRequest req = new FileProjectsLocationsOperationsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "perferendis";
                filter = "amet";
                key = "optio";
                oauthToken = "accusamus";
                pageSize = 320017L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "deserunt";
                uploadProtocol = "provident";
            }};            

            FileProjectsLocationsOperationsListResponse res = sdk.projects.fileProjectsLocationsOperationsList(req, new FileProjectsLocationsOperationsListSecurity("minima", "repellendus") {{
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
