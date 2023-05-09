# projects

### Available Operations

* [fileProjectsLocationsBackupsCreate](#fileprojectslocationsbackupscreate) - Creates a backup.
* [fileProjectsLocationsBackupsList](#fileprojectslocationsbackupslist) - Lists all backups in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesCreate](#fileprojectslocationsinstancescreate) - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesList](#fileprojectslocationsinstanceslist) - Lists all instances in a project for either a specified location or for all locations.
* [fileProjectsLocationsInstancesRestore](#fileprojectslocationsinstancesrestore) - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
* [fileProjectsLocationsInstancesRevert](#fileprojectslocationsinstancesrevert) - Revert an existing instance's file system to a specified snapshot.
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
                    kmsKey = "ab";
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
import org.openapis.openapi.models.shared.FileShareConfig;
import org.openapis.openapi.models.shared.InstanceInput;
import org.openapis.openapi.models.shared.InstanceTierEnum;
import org.openapis.openapi.models.shared.NetworkConfigConnectModeEnum;
import org.openapis.openapi.models.shared.NetworkConfigInput;
import org.openapis.openapi.models.shared.NetworkConfigModesEnum;
import org.openapis.openapi.models.shared.NfsExportOptions;
import org.openapis.openapi.models.shared.NfsExportOptionsAccessModeEnum;
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
                    description = "aspernatur";
                    etag = "perferendis";
                    fileShares = new org.openapis.openapi.models.shared.FileShareConfig[]{{
                        add(new FileShareConfig() {{
                            capacityGb = "natus";
                            name = "Sheryl Fadel";
                            nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_WRITE;
                                    anonGid = "fuga";
                                    anonUid = "in";
                                    ipRanges = new String[]{{
                                        add("iste"),
                                        add("iure"),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.ROOT_SQUASH;
                                }}),
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_WRITE;
                                    anonGid = "architecto";
                                    anonUid = "ipsa";
                                    ipRanges = new String[]{{
                                        add("est"),
                                        add("mollitia"),
                                        add("laborum"),
                                        add("dolores"),
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
                                    squashMode = NfsExportOptionsSquashModeEnum.SQUASH_MODE_UNSPECIFIED;
                                }}),
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                                    anonGid = "accusantium";
                                    anonUid = "iure";
                                    ipRanges = new String[]{{
                                        add("doloribus"),
                                        add("sapiente"),
                                        add("architecto"),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.NO_ROOT_SQUASH;
                                }}),
                            }};
                            sourceBackup = "dolorem";
                        }}),
                        add(new FileShareConfig() {{
                            capacityGb = "culpa";
                            name = "Jaime O'Hara";
                            nfsExportOptions = new org.openapis.openapi.models.shared.NfsExportOptions[]{{
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                                    anonGid = "molestiae";
                                    anonUid = "velit";
                                    ipRanges = new String[]{{
                                        add("quia"),
                                        add("quis"),
                                        add("vitae"),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.ROOT_SQUASH;
                                }}),
                                add(new NfsExportOptions() {{
                                    accessMode = NfsExportOptionsAccessModeEnum.READ_ONLY;
                                    anonGid = "enim";
                                    anonUid = "odit";
                                    ipRanges = new String[]{{
                                        add("sequi"),
                                        add("tenetur"),
                                        add("ipsam"),
                                        add("id"),
                                    }};
                                    squashMode = NfsExportOptionsSquashModeEnum.ROOT_SQUASH;
                                }}),
                            }};
                            sourceBackup = "aut";
                        }}),
                    }};
                    kmsKeyName = "quasi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("temporibus", "laborum");
                        put("quasi", "reiciendis");
                        put("voluptatibus", "vero");
                    }};
                    networks = new org.openapis.openapi.models.shared.NetworkConfigInput[]{{
                        add(new NetworkConfigInput() {{
                            connectMode = NetworkConfigConnectModeEnum.DIRECT_PEERING;
                            modes = new org.openapis.openapi.models.shared.NetworkConfigModesEnum[]{{
                                add(NetworkConfigModesEnum.ADDRESS_MODE_UNSPECIFIED),
                                add(NetworkConfigModesEnum.MODE_IPV4),
                                add(NetworkConfigModesEnum.ADDRESS_MODE_UNSPECIFIED),
                                add(NetworkConfigModesEnum.MODE_IPV4),
                            }};
                            network = "perferendis";
                            reservedIpRange = "doloremque";
                        }}),
                        add(new NetworkConfigInput() {{
                            connectMode = NetworkConfigConnectModeEnum.DIRECT_PEERING;
                            modes = new org.openapis.openapi.models.shared.NetworkConfigModesEnum[]{{
                                add(NetworkConfigModesEnum.MODE_IPV4),
                                add(NetworkConfigModesEnum.ADDRESS_MODE_UNSPECIFIED),
                            }};
                            network = "corporis";
                            reservedIpRange = "dolore";
                        }}),
                    }};
                    tier = InstanceTierEnum.BASIC_HDD;
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                instanceId = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quidem";
                uploadProtocol = "molestias";
            }};            

            FileProjectsLocationsInstancesCreateResponse res = sdk.projects.fileProjectsLocationsInstancesCreate(req, new FileProjectsLocationsInstancesCreateSecurity("excepturi", "pariatur") {{
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

            FileProjectsLocationsInstancesListRequest req = new FileProjectsLocationsInstancesListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rem";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "repudiandae";
                filter = "sint";
                key = "veritatis";
                oauthToken = "itaque";
                orderBy = "incidunt";
                pageSize = 318569L;
                pageToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            FileProjectsLocationsInstancesListResponse res = sdk.projects.fileProjectsLocationsInstancesList(req, new FileProjectsLocationsInstancesListSecurity("deserunt", "distinctio") {{
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

            FileProjectsLocationsInstancesRestoreRequest req = new FileProjectsLocationsInstancesRestoreRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                restoreInstanceRequest = new RestoreInstanceRequest() {{
                    fileShare = "modi";
                    sourceBackup = "qui";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                key = "magni";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "alias";
                uploadProtocol = "fugit";
            }};            

            FileProjectsLocationsInstancesRestoreResponse res = sdk.projects.fileProjectsLocationsInstancesRestore(req, new FileProjectsLocationsInstancesRestoreSecurity("dolorum", "excepturi") {{
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

            FileProjectsLocationsInstancesRevertRequest req = new FileProjectsLocationsInstancesRevertRequest("tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                revertInstanceRequest = new RevertInstanceRequest() {{
                    targetSnapshotId = "tempore";
                }};;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "eum";
                fields = "non";
                key = "eligendi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
            }};            

            FileProjectsLocationsInstancesRevertResponse res = sdk.projects.fileProjectsLocationsInstancesRevert(req, new FileProjectsLocationsInstancesRevertSecurity("sint", "officia") {{
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

            FileProjectsLocationsInstancesSnapshotsCreateRequest req = new FileProjectsLocationsInstancesSnapshotsCreateRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotInput = new SnapshotInput() {{
                    description = "a";
                    labels = new java.util.HashMap<String, String>() {{
                        put("in", "in");
                        put("illum", "maiores");
                        put("rerum", "dicta");
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                snapshotId = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            FileProjectsLocationsInstancesSnapshotsCreateResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsCreate(req, new FileProjectsLocationsInstancesSnapshotsCreateSecurity("accusamus", "delectus") {{
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

            FileProjectsLocationsInstancesSnapshotsListRequest req = new FileProjectsLocationsInstancesSnapshotsListRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "deleniti";
                filter = "sapiente";
                key = "amet";
                oauthToken = "deserunt";
                orderBy = "nisi";
                pageSize = 423855L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "molestiae";
                uploadProtocol = "perferendis";
            }};            

            FileProjectsLocationsInstancesSnapshotsListResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsList(req, new FileProjectsLocationsInstancesSnapshotsListSecurity("nihil", "magnam") {{
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

            FileProjectsLocationsInstancesSnapshotsPatchRequest req = new FileProjectsLocationsInstancesSnapshotsPatchRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshotInput = new SnapshotInput() {{
                    description = "labore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "natus");
                        put("nobis", "eum");
                    }};
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "architecto";
                fields = "magnam";
                key = "et";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "ullam";
                updateMask = "provident";
                uploadType = "quos";
                uploadProtocol = "sint";
            }};            

            FileProjectsLocationsInstancesSnapshotsPatchResponse res = sdk.projects.fileProjectsLocationsInstancesSnapshotsPatch(req, new FileProjectsLocationsInstancesSnapshotsPatchSecurity("accusantium", "mollitia") {{
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

            FileProjectsLocationsListRequest req = new FileProjectsLocationsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "dolor";
                fields = "necessitatibus";
                filter = "odit";
                includeUnrevealedLocations = false;
                key = "nemo";
                oauthToken = "quasi";
                pageSize = 435865L;
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "eius";
                uploadProtocol = "maxime";
            }};            

            FileProjectsLocationsListResponse res = sdk.projects.fileProjectsLocationsList(req, new FileProjectsLocationsListSecurity("deleniti", "facilis") {{
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

            FileProjectsLocationsOperationsCancelRequest req = new FileProjectsLocationsOperationsCancelRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("repudiandae", "ullam");
                }};
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "repellat";
                fields = "quibusdam";
                key = "sed";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "accusantium";
                uploadProtocol = "consequuntur";
            }};            

            FileProjectsLocationsOperationsCancelResponse res = sdk.projects.fileProjectsLocationsOperationsCancel(req, new FileProjectsLocationsOperationsCancelSecurity("praesentium", "natus") {{
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

            FileProjectsLocationsOperationsDeleteRequest req = new FileProjectsLocationsOperationsDeleteRequest("magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                force = false;
                key = "ea";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "ea";
                uploadProtocol = "accusantium";
            }};            

            FileProjectsLocationsOperationsDeleteResponse res = sdk.projects.fileProjectsLocationsOperationsDelete(req, new FileProjectsLocationsOperationsDeleteSecurity("ab", "maiores") {{
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

            FileProjectsLocationsOperationsGetRequest req = new FileProjectsLocationsOperationsGetRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "eaque";
                key = "pariatur";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "perferendis";
                uploadProtocol = "fugiat";
            }};            

            FileProjectsLocationsOperationsGetResponse res = sdk.projects.fileProjectsLocationsOperationsGet(req, new FileProjectsLocationsOperationsGetSecurity("amet", "aut") {{
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

            FileProjectsLocationsOperationsListRequest req = new FileProjectsLocationsOperationsListRequest("cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "nobis";
                fields = "dolores";
                filter = "quis";
                key = "totam";
                oauthToken = "dignissimos";
                pageSize = 54338L;
                pageToken = "quis";
                prettyPrint = false;
                quotaUser = "nesciunt";
                uploadType = "eos";
                uploadProtocol = "perferendis";
            }};            

            FileProjectsLocationsOperationsListResponse res = sdk.projects.fileProjectsLocationsOperationsList(req, new FileProjectsLocationsOperationsListSecurity("dolores", "minus") {{
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
