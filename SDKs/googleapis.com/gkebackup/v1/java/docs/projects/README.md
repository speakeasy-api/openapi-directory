# projects

### Available Operations

* [gkebackupProjectsLocationsBackupPlansBackupsCreate](#gkebackupprojectslocationsbackupplansbackupscreate) - Creates a Backup for the given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsList](#gkebackupprojectslocationsbackupplansbackupslist) - Lists the Backups for a given BackupPlan.
* [gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList](#gkebackupprojectslocationsbackupplansbackupsvolumebackupslist) - Lists the VolumeBackups for a given Backup.
* [gkebackupProjectsLocationsBackupPlansCreate](#gkebackupprojectslocationsbackupplanscreate) - Creates a new BackupPlan in a given location.
* [gkebackupProjectsLocationsBackupPlansList](#gkebackupprojectslocationsbackupplanslist) - Lists BackupPlans in a given location.
* [gkebackupProjectsLocationsDeleteOperations](#gkebackupprojectslocationsdeleteoperations) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [gkebackupProjectsLocationsList](#gkebackupprojectslocationslist) - Lists information about the supported locations for this service.
* [gkebackupProjectsLocationsOperationsCancel](#gkebackupprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [gkebackupProjectsLocationsOperationsList](#gkebackupprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [gkebackupProjectsLocationsRestorePlansCreate](#gkebackupprojectslocationsrestoreplanscreate) - Creates a new RestorePlan in a given location.
* [gkebackupProjectsLocationsRestorePlansList](#gkebackupprojectslocationsrestoreplanslist) - Lists RestorePlans in a given location.
* [gkebackupProjectsLocationsRestorePlansRestoresCreate](#gkebackupprojectslocationsrestoreplansrestorescreate) - Creates a new Restore for the given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresDelete](#gkebackupprojectslocationsrestoreplansrestoresdelete) - Deletes an existing Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresList](#gkebackupprojectslocationsrestoreplansrestoreslist) - Lists the Restores for a given RestorePlan.
* [gkebackupProjectsLocationsRestorePlansRestoresPatch](#gkebackupprojectslocationsrestoreplansrestorespatch) - Update a Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresget) - Retrieve the details of a single VolumeRestore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoresgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoreslist) - Lists the VolumeRestores for a given Restore.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy](#gkebackupprojectslocationsrestoreplansrestoresvolumerestoressetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions](#gkebackupprojectslocationsrestoreplansrestoresvolumerestorestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## gkebackupProjectsLocationsBackupPlansBackupsCreate

Creates a Backup for the given BackupPlan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupInput;
import org.openapis.openapi.models.shared.ClusterMetadata;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsCreateRequest req = new GkebackupProjectsLocationsBackupPlansBackupsCreateRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                backupInput = new BackupInput() {{
                    clusterMetadata = new ClusterMetadata() {{
                        anthosVersion = "cum";
                        backupCrdVersions = new java.util.HashMap<String, String>() {{
                            put("ipsum", "excepturi");
                            put("aspernatur", "perferendis");
                        }};
                        cluster = "ad";
                        gkeVersion = "natus";
                        k8sVersion = "sed";
                    }};;
                    deleteLockDays = 612096;
                    description = "dolor";
                    encryptionKey = new EncryptionKey() {{
                        gcpKmsEncryptionKey = "natus";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "saepe");
                        put("fuga", "in");
                    }};
                    retainDays = 359508;
                    selectedApplications = new NamespacedNames() {{
                        namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                            add(new NamespacedName() {{
                                name = "Mr. Kerry Predovic";
                                namespace = "est";
                            }}),
                            add(new NamespacedName() {{
                                name = "Cameron Dach";
                                namespace = "explicabo";
                            }}),
                            add(new NamespacedName() {{
                                name = "Ronnie Mohr";
                                namespace = "excepturi";
                            }}),
                        }};
                    }};;
                    selectedNamespaces = new Namespaces() {{
                        namespaces = new String[]{{
                            add("iure"),
                        }};
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                backupId = "sapiente";
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsCreate(req, new GkebackupProjectsLocationsBackupPlansBackupsCreateSecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsBackupPlansBackupsList

Lists the Backups for a given BackupPlan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsListRequest req = new GkebackupProjectsLocationsBackupPlansBackupsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                filter = "quis";
                key = "vitae";
                oauthToken = "laborum";
                orderBy = "animi";
                pageSize = 317202L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsListResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsList(req, new GkebackupProjectsLocationsBackupPlansBackupsListSecurity("ipsam", "id") {{
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

## gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList

Lists the VolumeBackups for a given Backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest req = new GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                orderBy = "vero";
                pageSize = 468651L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList(req, new GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVolumeBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsBackupPlansCreate

Creates a new BackupPlan in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackupConfig;
import org.openapis.openapi.models.shared.BackupPlanInput;
import org.openapis.openapi.models.shared.EncryptionKey;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.RetentionPolicy;
import org.openapis.openapi.models.shared.Schedule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansCreateRequest req = new GkebackupProjectsLocationsBackupPlansCreateRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                backupPlanInput = new BackupPlanInput() {{
                    backupConfig = new BackupConfig() {{
                        allNamespaces = false;
                        encryptionKey = new EncryptionKey() {{
                            gcpKmsEncryptionKey = "reprehenderit";
                        }};;
                        includeSecrets = false;
                        includeVolumeData = false;
                        selectedApplications = new NamespacedNames() {{
                            namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                                add(new NamespacedName() {{
                                    name = "Willie Hessel";
                                    namespace = "dicta";
                                }}),
                                add(new NamespacedName() {{
                                    name = "Bill Thompson";
                                    namespace = "quae";
                                }}),
                            }};
                        }};;
                        selectedNamespaces = new Namespaces() {{
                            namespaces = new String[]{{
                                add("quidem"),
                            }};
                        }};;
                    }};;
                    backupSchedule = new Schedule() {{
                        cronSchedule = "molestias";
                        paused = false;
                    }};;
                    cluster = "excepturi";
                    deactivated = false;
                    description = "pariatur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("praesentium", "rem");
                        put("voluptates", "quasi");
                    }};
                    retentionPolicy = new RetentionPolicy() {{
                        backupDeleteLockDays = 921158;
                        backupRetainDays = 575947;
                        locked = false;
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                backupPlanId = "incidunt";
                callback = "enim";
                fields = "consequatur";
                key = "est";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "deserunt";
                uploadProtocol = "distinctio";
            }};            

            GkebackupProjectsLocationsBackupPlansCreateResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansCreate(req, new GkebackupProjectsLocationsBackupPlansCreateSecurity("quibusdam", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsBackupPlansList

Lists BackupPlans in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsBackupPlansListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsBackupPlansListRequest req = new GkebackupProjectsLocationsBackupPlansListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "quos";
                fields = "perferendis";
                filter = "magni";
                key = "assumenda";
                oauthToken = "ipsam";
                orderBy = "alias";
                pageSize = 146441L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "tempora";
                uploadProtocol = "facilis";
            }};            

            GkebackupProjectsLocationsBackupPlansListResponse res = sdk.projects.gkebackupProjectsLocationsBackupPlansList(req, new GkebackupProjectsLocationsBackupPlansListSecurity("tempore", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listBackupPlansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsDeleteOperations

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsDeleteOperationsRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsDeleteOperationsResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsDeleteOperationsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsDeleteOperationsRequest req = new GkebackupProjectsLocationsDeleteOperationsRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "aliquid";
                key = "provident";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "officia";
                uploadProtocol = "dolor";
            }};            

            GkebackupProjectsLocationsDeleteOperationsResponse res = sdk.projects.gkebackupProjectsLocationsDeleteOperations(req, new GkebackupProjectsLocationsDeleteOperationsSecurity("debitis", "a") {{
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

## gkebackupProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsListRequest req = new GkebackupProjectsLocationsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "rerum";
                filter = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                pageSize = 813798L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laborum";
                uploadProtocol = "accusamus";
            }};            

            GkebackupProjectsLocationsListResponse res = sdk.projects.gkebackupProjectsLocationsList(req, new GkebackupProjectsLocationsListSecurity("non", "occaecati") {{
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

## gkebackupProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsOperationsCancelRequest req = new GkebackupProjectsLocationsOperationsCancelRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quidem", "provident");
                    put("nam", "id");
                    put("blanditiis", "deleniti");
                    put("sapiente", "amet");
                }};
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "nihil";
                uploadProtocol = "magnam";
            }};            

            GkebackupProjectsLocationsOperationsCancelResponse res = sdk.projects.gkebackupProjectsLocationsOperationsCancel(req, new GkebackupProjectsLocationsOperationsCancelSecurity("distinctio", "id") {{
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

## gkebackupProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsOperationsListRequest req = new GkebackupProjectsLocationsOperationsListRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "eum";
                filter = "vero";
                key = "aspernatur";
                oauthToken = "architecto";
                pageSize = 298282L;
                pageToken = "et";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "ullam";
                uploadProtocol = "provident";
            }};            

            GkebackupProjectsLocationsOperationsListResponse res = sdk.projects.gkebackupProjectsLocationsOperationsList(req, new GkebackupProjectsLocationsOperationsListSecurity("quos", "sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansCreate

Creates a new RestorePlan in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClusterResourceRestoreScope;
import org.openapis.openapi.models.shared.GroupKind;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.RestoreConfig;
import org.openapis.openapi.models.shared.RestoreConfigClusterResourceConflictPolicyEnum;
import org.openapis.openapi.models.shared.RestoreConfigNamespacedResourceRestoreModeEnum;
import org.openapis.openapi.models.shared.RestoreConfigVolumeDataRestorePolicyEnum;
import org.openapis.openapi.models.shared.RestorePlanInput;
import org.openapis.openapi.models.shared.SubstitutionRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansCreateRequest req = new GkebackupProjectsLocationsRestorePlansCreateRequest("accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                restorePlanInput = new RestorePlanInput() {{
                    backupPlan = "reiciendis";
                    cluster = "mollitia";
                    description = "ad";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolor", "necessitatibus");
                        put("odit", "nemo");
                    }};
                    restoreConfig = new RestoreConfig() {{
                        allNamespaces = false;
                        clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum.CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED;
                        clusterResourceRestoreScope = new ClusterResourceRestoreScope() {{
                            selectedGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                add(new GroupKind() {{
                                    resourceGroup = "doloribus";
                                    resourceKind = "debitis";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "eius";
                                    resourceKind = "maxime";
                                }}),
                            }};
                        }};;
                        namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum.DELETE_AND_RESTORE;
                        selectedApplications = new NamespacedNames() {{
                            namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                                add(new NamespacedName() {{
                                    name = "Alice Bradtke";
                                    namespace = "expedita";
                                }}),
                                add(new NamespacedName() {{
                                    name = "Kristie Spencer";
                                    namespace = "pariatur";
                                }}),
                                add(new NamespacedName() {{
                                    name = "Kathryn Lang";
                                    namespace = "sunt";
                                }}),
                            }};
                        }};;
                        selectedNamespaces = new Namespaces() {{
                            namespaces = new String[]{{
                                add("illum"),
                                add("pariatur"),
                                add("maxime"),
                                add("ea"),
                            }};
                        }};;
                        substitutionRules = new org.openapis.openapi.models.shared.SubstitutionRule[]{{
                            add(new SubstitutionRule() {{
                                newValue = "odit";
                                originalValuePattern = "ea";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "ab";
                                        resourceKind = "maiores";
                                    }}),
                                }};
                                targetJsonPath = "quidem";
                                targetNamespaces = new String[]{{
                                    add("voluptate"),
                                    add("autem"),
                                }};
                            }}),
                            add(new SubstitutionRule() {{
                                newValue = "nam";
                                originalValuePattern = "eaque";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "nemo";
                                        resourceKind = "voluptatibus";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "perferendis";
                                        resourceKind = "fugiat";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "amet";
                                        resourceKind = "aut";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "cumque";
                                        resourceKind = "corporis";
                                    }}),
                                }};
                                targetJsonPath = "hic";
                                targetNamespaces = new String[]{{
                                    add("nobis"),
                                    add("dolores"),
                                    add("quis"),
                                }};
                            }}),
                            add(new SubstitutionRule() {{
                                newValue = "totam";
                                originalValuePattern = "dignissimos";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "quis";
                                        resourceKind = "nesciunt";
                                    }}),
                                }};
                                targetJsonPath = "eos";
                                targetNamespaces = new String[]{{
                                    add("dolores"),
                                }};
                            }}),
                        }};
                        volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum.NO_VOLUME_DATA_RESTORATION;
                    }};;
                }};;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "nostrum";
                key = "hic";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                restorePlanId = "facilis";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptatem";
            }};            

            GkebackupProjectsLocationsRestorePlansCreateResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansCreate(req, new GkebackupProjectsLocationsRestorePlansCreateSecurity("porro", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansList

Lists RestorePlans in a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansListRequest req = new GkebackupProjectsLocationsRestorePlansListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "adipisci";
                filter = "asperiores";
                key = "earum";
                oauthToken = "modi";
                orderBy = "iste";
                pageSize = 679091L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
            }};            

            GkebackupProjectsLocationsRestorePlansListResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansList(req, new GkebackupProjectsLocationsRestorePlansListSecurity("libero", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRestorePlansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresCreate

Creates a new Restore for the given RestorePlan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresCreateRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresCreateResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClusterResourceRestoreScope;
import org.openapis.openapi.models.shared.GroupKind;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.RestoreConfig;
import org.openapis.openapi.models.shared.RestoreConfigClusterResourceConflictPolicyEnum;
import org.openapis.openapi.models.shared.RestoreConfigNamespacedResourceRestoreModeEnum;
import org.openapis.openapi.models.shared.RestoreConfigVolumeDataRestorePolicyEnum;
import org.openapis.openapi.models.shared.RestoreInput;
import org.openapis.openapi.models.shared.SubstitutionRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresCreateRequest req = new GkebackupProjectsLocationsRestorePlansRestoresCreateRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                restoreInput = new RestoreInput() {{
                    backup = "aliquid";
                    description = "dolorem";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolor", "qui");
                    }};
                    restoreConfig = new RestoreConfig() {{
                        allNamespaces = false;
                        clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum.CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED;
                        clusterResourceRestoreScope = new ClusterResourceRestoreScope() {{
                            selectedGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                add(new GroupKind() {{
                                    resourceGroup = "excepturi";
                                    resourceKind = "cum";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "voluptate";
                                    resourceKind = "dignissimos";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "reiciendis";
                                    resourceKind = "amet";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "dolorum";
                                    resourceKind = "numquam";
                                }}),
                            }};
                        }};;
                        namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum.NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED;
                        selectedApplications = new NamespacedNames() {{
                            namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                                add(new NamespacedName() {{
                                    name = "Vera Kuhlman";
                                    namespace = "quidem";
                                }}),
                            }};
                        }};;
                        selectedNamespaces = new Namespaces() {{
                            namespaces = new String[]{{
                                add("voluptas"),
                                add("natus"),
                                add("eos"),
                                add("atque"),
                            }};
                        }};;
                        substitutionRules = new org.openapis.openapi.models.shared.SubstitutionRule[]{{
                            add(new SubstitutionRule() {{
                                newValue = "fugiat";
                                originalValuePattern = "ab";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "dolorum";
                                        resourceKind = "iusto";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "voluptate";
                                        resourceKind = "dolorum";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "deleniti";
                                        resourceKind = "omnis";
                                    }}),
                                }};
                                targetJsonPath = "necessitatibus";
                                targetNamespaces = new String[]{{
                                    add("asperiores"),
                                    add("nihil"),
                                    add("ipsum"),
                                }};
                            }}),
                        }};
                        volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum.RESTORE_VOLUME_DATA_FROM_BACKUP;
                    }};;
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "optio";
                restoreId = "accusamus";
                uploadType = "ad";
                uploadProtocol = "saepe";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresCreateResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresCreate(req, new GkebackupProjectsLocationsRestorePlansRestoresCreateSecurity("suscipit", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresDelete

Deletes an existing Restore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest req = new GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest("provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "similique";
                etag = "alias";
                fields = "at";
                force = false;
                key = "quaerat";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "quod";
                uploadProtocol = "officiis";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresDelete(req, new GkebackupProjectsLocationsRestorePlansRestoresDeleteSecurity("qui", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresList

Lists the Restores for a given RestorePlan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresListRequest req = new GkebackupProjectsLocationsRestorePlansRestoresListRequest("a") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "quisquam";
                filter = "tenetur";
                key = "amet";
                oauthToken = "tempore";
                orderBy = "accusamus";
                pageSize = 253941L;
                pageToken = "enim";
                prettyPrint = false;
                quotaUser = "dolorem";
                uploadType = "sapiente";
                uploadProtocol = "totam";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresListResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresList(req, new GkebackupProjectsLocationsRestorePlansRestoresListSecurity("nihil", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRestoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresPatch

Update a Restore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresPatchRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresPatchResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClusterResourceRestoreScope;
import org.openapis.openapi.models.shared.GroupKind;
import org.openapis.openapi.models.shared.NamespacedName;
import org.openapis.openapi.models.shared.NamespacedNames;
import org.openapis.openapi.models.shared.Namespaces;
import org.openapis.openapi.models.shared.RestoreConfig;
import org.openapis.openapi.models.shared.RestoreConfigClusterResourceConflictPolicyEnum;
import org.openapis.openapi.models.shared.RestoreConfigNamespacedResourceRestoreModeEnum;
import org.openapis.openapi.models.shared.RestoreConfigVolumeDataRestorePolicyEnum;
import org.openapis.openapi.models.shared.RestoreInput;
import org.openapis.openapi.models.shared.SubstitutionRule;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresPatchRequest req = new GkebackupProjectsLocationsRestorePlansRestoresPatchRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                restoreInput = new RestoreInput() {{
                    backup = "sed";
                    description = "vel";
                    labels = new java.util.HashMap<String, String>() {{
                        put("voluptas", "deserunt");
                        put("quam", "ipsum");
                        put("incidunt", "qui");
                    }};
                    restoreConfig = new RestoreConfig() {{
                        allNamespaces = false;
                        clusterResourceConflictPolicy = RestoreConfigClusterResourceConflictPolicyEnum.USE_EXISTING_VERSION;
                        clusterResourceRestoreScope = new ClusterResourceRestoreScope() {{
                            selectedGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                add(new GroupKind() {{
                                    resourceGroup = "pariatur";
                                    resourceKind = "soluta";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "dicta";
                                    resourceKind = "laborum";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "totam";
                                    resourceKind = "incidunt";
                                }}),
                                add(new GroupKind() {{
                                    resourceGroup = "aspernatur";
                                    resourceKind = "dolores";
                                }}),
                            }};
                        }};;
                        namespacedResourceRestoreMode = RestoreConfigNamespacedResourceRestoreModeEnum.FAIL_ON_CONFLICT;
                        selectedApplications = new NamespacedNames() {{
                            namespacedNames = new org.openapis.openapi.models.shared.NamespacedName[]{{
                                add(new NamespacedName() {{
                                    name = "Constance Mann";
                                    namespace = "neque";
                                }}),
                                add(new NamespacedName() {{
                                    name = "Mrs. Louise Kuhlman";
                                    namespace = "hic";
                                }}),
                                add(new NamespacedName() {{
                                    name = "Erma Rogahn PhD";
                                    namespace = "ipsum";
                                }}),
                            }};
                        }};;
                        selectedNamespaces = new Namespaces() {{
                            namespaces = new String[]{{
                                add("nobis"),
                            }};
                        }};;
                        substitutionRules = new org.openapis.openapi.models.shared.SubstitutionRule[]{{
                            add(new SubstitutionRule() {{
                                newValue = "tempore";
                                originalValuePattern = "cupiditate";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "delectus";
                                        resourceKind = "dolorem";
                                    }}),
                                }};
                                targetJsonPath = "dolore";
                                targetNamespaces = new String[]{{
                                    add("adipisci"),
                                    add("dolorum"),
                                }};
                            }}),
                            add(new SubstitutionRule() {{
                                newValue = "architecto";
                                originalValuePattern = "quae";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "quas";
                                        resourceKind = "itaque";
                                    }}),
                                }};
                                targetJsonPath = "consequatur";
                                targetNamespaces = new String[]{{
                                    add("repellendus"),
                                    add("porro"),
                                    add("doloribus"),
                                }};
                            }}),
                            add(new SubstitutionRule() {{
                                newValue = "ut";
                                originalValuePattern = "facilis";
                                targetGroupKinds = new org.openapis.openapi.models.shared.GroupKind[]{{
                                    add(new GroupKind() {{
                                        resourceGroup = "qui";
                                        resourceKind = "quae";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "laudantium";
                                        resourceKind = "odio";
                                    }}),
                                    add(new GroupKind() {{
                                        resourceGroup = "occaecati";
                                        resourceKind = "voluptatibus";
                                    }}),
                                }};
                                targetJsonPath = "quisquam";
                                targetNamespaces = new String[]{{
                                    add("omnis"),
                                    add("quis"),
                                    add("ipsum"),
                                    add("delectus"),
                                }};
                            }}),
                        }};
                        volumeDataRestorePolicy = RestoreConfigVolumeDataRestorePolicyEnum.RESTORE_VOLUME_DATA_FROM_BACKUP;
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "dignissimos";
                key = "hic";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quod";
                updateMask = "odio";
                uploadType = "similique";
                uploadProtocol = "facilis";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresPatchResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresPatch(req, new GkebackupProjectsLocationsRestorePlansRestoresPatchSecurity("vero", "ducimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet

Retrieve the details of a single VolumeRestore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest req = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest("dolore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "impedit";
                key = "aut";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "nulla";
                uploadProtocol = "fugit";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet(req, new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetSecurity("porro", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.volumeRestore != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest req = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "alias";
                fields = "officia";
                key = "tempora";
                oauthToken = "ipsam";
                optionsRequestedPolicyVersion = 410492L;
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "vel";
                uploadProtocol = "possimus";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy(req, new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity("magnam", "ratione") {{
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

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList

Lists the VolumeRestores for a given Restore.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest req = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "quasi";
                filter = "ex";
                key = "nulla";
                oauthToken = "excepturi";
                orderBy = "voluptatibus";
                pageSize = 343605L;
                pageToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "saepe";
                uploadProtocol = "ea";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList(req, new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListSecurity("impedit", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listVolumeRestoresResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity;
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

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest req = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("consectetur"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "a";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "aut";
                                    expression = "aut";
                                    location = "deleniti";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("fugit"),
                                    add("accusamus"),
                                }};
                                role = "inventore";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "non";
                                    expression = "et";
                                    location = "dolorum";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("velit"),
                                    add("eum"),
                                    add("autem"),
                                    add("nobis"),
                                }};
                                role = "quas";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "assumenda";
                                    expression = "nulla";
                                    location = "voluptas";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("tempora"),
                                }};
                                role = "numquam";
                            }}),
                        }};
                        etag = "explicabo";
                        version = 591935;
                    }};;
                    updateMask = "ipsa";
                }};;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "eius";
                key = "esse";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "fuga";
                uploadProtocol = "reprehenderit";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy(req, new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicySecurity("quidem", "fugiat") {{
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

## gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest req = new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("assumenda"),
                        add("eos"),
                    }};
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "ipsa";
                key = "id";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse res = sdk.projects.gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions(req, new GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity("quo", "fuga") {{
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
