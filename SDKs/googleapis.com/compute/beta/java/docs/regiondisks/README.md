# regionDisks

### Available Operations

* [computeRegionDisksAddResourcePolicies](#computeregiondisksaddresourcepolicies) - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeRegionDisksBulkInsert](#computeregiondisksbulkinsert) - Bulk create a set of disks.
* [computeRegionDisksCreateSnapshot](#computeregiondiskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeRegionDisksDelete](#computeregiondisksdelete) - Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeRegionDisksGet](#computeregiondisksget) - Returns a specified regional persistent disk.
* [computeRegionDisksGetIamPolicy](#computeregiondisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeRegionDisksInsert](#computeregiondisksinsert) - Creates a persistent regional disk in the specified project using the data included in the request.
* [computeRegionDisksList](#computeregiondiskslist) - Retrieves the list of persistent disks contained within the specified region.
* [computeRegionDisksRemoveResourcePolicies](#computeregiondisksremoveresourcepolicies) - Removes resource policies from a regional disk.
* [computeRegionDisksResize](#computeregiondisksresize) - Resizes the specified regional persistent disk.
* [computeRegionDisksSetIamPolicy](#computeregiondiskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeRegionDisksSetLabels](#computeregiondiskssetlabels) - Sets the labels on the target regional disk.
* [computeRegionDisksStartAsyncReplication](#computeregiondisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeRegionDisksStopAsyncReplication](#computeregiondisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeRegionDisksStopGroupAsyncReplication](#computeregiondisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeRegionDisksTestIamPermissions](#computeregiondiskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeRegionDisksUpdate](#computeregiondisksupdate) - Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

## computeRegionDisksAddResourcePolicies

Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksAddResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksAddResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksAddResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksAddResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksAddResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionDisksAddResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksAddResourcePoliciesRequest req = new ComputeRegionDisksAddResourcePoliciesRequest("nisi", "cupiditate", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksAddResourcePoliciesRequest = new RegionDisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("recusandae"),
                        add("voluptate"),
                        add("dicta"),
                    }};
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "dignissimos";
                key = "aut";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "at";
                requestId = "laborum";
                uploadType = "repudiandae";
                uploadProtocol = "perferendis";
                userIp = "unde";
            }};            

            ComputeRegionDisksAddResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksAddResourcePolicies(req, new ComputeRegionDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksAddResourcePoliciesSecurityOption1("explicabo", "rerum") {{
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

## computeRegionDisksBulkInsert

Bulk create a set of disks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksBulkInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksBulkInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksBulkInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksBulkInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksBulkInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkInsertDiskResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksBulkInsertRequest req = new ComputeRegionDisksBulkInsertRequest("esse", "quae") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkInsertDiskResource = new BulkInsertDiskResource() {{
                    sourceConsistencyGroupPolicy = "quidem";
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "cupiditate";
                fields = "ad";
                key = "natus";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "non";
                requestId = "quibusdam";
                uploadType = "quo";
                uploadProtocol = "quam";
                userIp = "tenetur";
            }};            

            ComputeRegionDisksBulkInsertResponse res = sdk.regionDisks.computeRegionDisksBulkInsert(req, new ComputeRegionDisksBulkInsertSecurity() {{
                option1 = new ComputeRegionDisksBulkInsertSecurityOption1("quae", "illo") {{
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

## computeRegionDisksCreateSnapshot

Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksCreateSnapshotRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksCreateSnapshotResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksCreateSnapshotSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksCreateSnapshotSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksCreateSnapshotSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.Snapshot;
import org.openapis.openapi.models.shared.SnapshotArchitectureEnum;
import org.openapis.openapi.models.shared.SnapshotSnapshotTypeEnum;
import org.openapis.openapi.models.shared.SnapshotStatusEnum;
import org.openapis.openapi.models.shared.SnapshotStorageBytesStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksCreateSnapshotRequest req = new ComputeRegionDisksCreateSnapshotRequest("velit", "necessitatibus", "reprehenderit") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.X8664;
                    autoCreated = false;
                    chainName = "laboriosam";
                    creationSizeBytes = "adipisci";
                    creationTimestamp = "aliquid";
                    description = "quo";
                    diskSizeGb = "unde";
                    downloadBytes = "dolores";
                    guestFlush = false;
                    id = "tempore";
                    kind = "officia";
                    labelFingerprint = "amet";
                    labels = new java.util.HashMap<String, String>() {{
                        put("eius", "impedit");
                    }};
                    licenseCodes = new String[]{{
                        add("atque"),
                        add("error"),
                        add("debitis"),
                    }};
                    licenses = new String[]{{
                        add("beatae"),
                        add("libero"),
                    }};
                    locationHint = "ratione";
                    name = "Blanca Walsh";
                    satisfiesPzs = false;
                    selfLink = "ab";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ipsum";
                        kmsKeyServiceAccount = "rerum";
                        rawKey = "fugiat";
                        rsaEncryptedKey = "aspernatur";
                        sha256 = "dolor";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.ARCHIVE;
                    sourceDisk = "maxime";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "blanditiis";
                        kmsKeyServiceAccount = "vero";
                        rawKey = "ea";
                        rsaEncryptedKey = "fugit";
                        sha256 = "dolores";
                    }};;
                    sourceDiskId = "eos";
                    sourceSnapshotSchedulePolicy = "laborum";
                    sourceSnapshotSchedulePolicyId = "totam";
                    status = SnapshotStatusEnum.FAILED;
                    storageBytes = "earum";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("suscipit"),
                        add("deleniti"),
                        add("assumenda"),
                    }};
                    userLicenses = new String[]{{
                        add("sint"),
                        add("porro"),
                        add("placeat"),
                        add("animi"),
                    }};
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "reprehenderit";
                key = "laboriosam";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "maxime";
                requestId = "dolores";
                uploadType = "voluptatem";
                uploadProtocol = "aperiam";
                userIp = "dolores";
            }};            

            ComputeRegionDisksCreateSnapshotResponse res = sdk.regionDisks.computeRegionDisksCreateSnapshot(req, new ComputeRegionDisksCreateSnapshotSecurity() {{
                option1 = new ComputeRegionDisksCreateSnapshotSecurityOption1("molestiae", "similique") {{
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

## computeRegionDisksDelete

Deletes the specified regional persistent disk. Deleting a regional disk removes all the replicas of its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksDeleteRequest req = new ComputeRegionDisksDeleteRequest("minus", "soluta", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ratione";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "maiores";
                key = "eveniet";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "autem";
                uploadType = "nesciunt";
                uploadProtocol = "quisquam";
                userIp = "autem";
            }};            

            ComputeRegionDisksDeleteResponse res = sdk.regionDisks.computeRegionDisksDelete(req, new ComputeRegionDisksDeleteSecurity() {{
                option1 = new ComputeRegionDisksDeleteSecurityOption1("dolore", "amet") {{
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

## computeRegionDisksGet

Returns a specified regional persistent disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksGetRequest req = new ComputeRegionDisksGetRequest("itaque", "reprehenderit", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "repellat";
                key = "delectus";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "dolores";
                uploadProtocol = "ea";
                userIp = "explicabo";
            }};            

            ComputeRegionDisksGetResponse res = sdk.regionDisks.computeRegionDisksGet(req, new ComputeRegionDisksGetSecurity() {{
                option1 = new ComputeRegionDisksGetSecurityOption1("praesentium", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.disk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionDisksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDisksGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksGetIamPolicyRequest req = new ComputeRegionDisksGetIamPolicyRequest("laudantium", "cum", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "fugiat";
                key = "quo";
                oauthToken = "a";
                optionsRequestedPolicyVersion = 718320L;
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "perferendis";
                uploadProtocol = "magni";
                userIp = "laborum";
            }};            

            ComputeRegionDisksGetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksGetIamPolicy(req, new ComputeRegionDisksGetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksGetIamPolicySecurityOption1("eos", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeRegionDisksInsert

Creates a persistent regional disk in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DiskArchitectureEnum;
import org.openapis.openapi.models.shared.DiskAsyncReplication;
import org.openapis.openapi.models.shared.DiskAsyncReplicationList;
import org.openapis.openapi.models.shared.DiskInterfaceEnum;
import org.openapis.openapi.models.shared.DiskParams;
import org.openapis.openapi.models.shared.DiskResourceStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatusStateEnum;
import org.openapis.openapi.models.shared.DiskStatusEnum;
import org.openapis.openapi.models.shared.DiskStorageTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksInsertRequest req = new ComputeRegionDisksInsertRequest("asperiores", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "beatae";
                        consistencyGroupPolicyId = "sint";
                        disk = "asperiores";
                        diskId = "dolor";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("dolorum", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "ad";
                                consistencyGroupPolicyId = "saepe";
                                disk = "debitis";
                                diskId = "veniam";
                            }};
                        }});
                    }};
                    creationTimestamp = "perferendis";
                    description = "quae";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ad";
                        kmsKeyServiceAccount = "earum";
                        rawKey = "esse";
                        rsaEncryptedKey = "corrupti";
                        sha256 = "illo";
                    }};;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.WINDOWS;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                        }}),
                    }};
                    id = "delectus";
                    interface_ = DiskInterfaceEnum.SCSI;
                    kind = "necessitatibus";
                    labelFingerprint = "voluptatibus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("iure", "doloremque");
                    }};
                    lastAttachTimestamp = "non";
                    lastDetachTimestamp = "vero";
                    licenseCodes = new String[]{{
                        add("veritatis"),
                        add("accusamus"),
                        add("consequuntur"),
                        add("ipsa"),
                    }};
                    licenses = new String[]{{
                        add("cum"),
                        add("dolorem"),
                        add("veniam"),
                    }};
                    locationHint = "quis";
                    locked = false;
                    multiWriter = false;
                    name = "Bennie Flatley";
                    options = "dicta";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quod", "accusamus");
                        }};
                    }};;
                    physicalBlockSizeBytes = "accusantium";
                    provisionedIops = "aspernatur";
                    provisionedThroughput = "tempora";
                    region = "deserunt";
                    replicaZones = new String[]{{
                        add("amet"),
                        add("incidunt"),
                    }};
                    resourcePolicies = new String[]{{
                        add("debitis"),
                        add("qui"),
                        add("dicta"),
                        add("optio"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("dicta", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                            put("beatae", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                            }});
                            put("voluptatem", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "modi";
                    sizeGb = "omnis";
                    sourceConsistencyGroupPolicy = "impedit";
                    sourceConsistencyGroupPolicyId = "amet";
                    sourceDisk = "accusantium";
                    sourceDiskId = "sint";
                    sourceImage = "repellendus";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "modi";
                        kmsKeyServiceAccount = "quam";
                        rawKey = "magnam";
                        rsaEncryptedKey = "voluptates";
                        sha256 = "ducimus";
                    }};;
                    sourceImageId = "molestiae";
                    sourceSnapshot = "amet";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "perspiciatis";
                        kmsKeyServiceAccount = "natus";
                        rawKey = "vero";
                        rsaEncryptedKey = "magnam";
                        sha256 = "et";
                    }};;
                    sourceSnapshotId = "qui";
                    sourceStorageObject = "eveniet";
                    status = DiskStatusEnum.RESTORING;
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "iure";
                    userLicenses = new String[]{{
                        add("hic"),
                        add("natus"),
                    }};
                    users = new String[]{{
                        add("vero"),
                        add("consequatur"),
                    }};
                    zone = "distinctio";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "temporibus";
                fields = "dicta";
                key = "corporis";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "quos";
                sourceImage = "laboriosam";
                uploadType = "praesentium";
                uploadProtocol = "magnam";
                userIp = "voluptatem";
            }};            

            ComputeRegionDisksInsertResponse res = sdk.regionDisks.computeRegionDisksInsert(req, new ComputeRegionDisksInsertSecurity() {{
                option1 = new ComputeRegionDisksInsertSecurityOption1("quod", "cumque") {{
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

## computeRegionDisksList

Retrieves the list of persistent disks contained within the specified region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksListRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksListResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDisksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksListRequest req = new ComputeRegionDisksListRequest("illo", "ad") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "minima";
                filter = "itaque";
                key = "dolor";
                maxResults = 11517L;
                oauthToken = "perspiciatis";
                orderBy = "temporibus";
                pageToken = "tenetur";
                prettyPrint = false;
                quotaUser = "optio";
                returnPartialSuccess = false;
                uploadType = "ullam";
                uploadProtocol = "sapiente";
                userIp = "amet";
            }};            

            ComputeRegionDisksListResponse res = sdk.regionDisks.computeRegionDisksList(req, new ComputeRegionDisksListSecurity() {{
                option1 = new ComputeRegionDisksListSecurityOption1("sapiente", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionDisksRemoveResourcePolicies

Removes resource policies from a regional disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksRemoveResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksRemoveResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksRemoveResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksRemoveResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionDisksRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksRemoveResourcePoliciesRequest req = new ComputeRegionDisksRemoveResourcePoliciesRequest("delectus", "et", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksRemoveResourcePoliciesRequest = new RegionDisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("deserunt"),
                        add("fugit"),
                        add("expedita"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "hic";
                fields = "ratione";
                key = "magni";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "distinctio";
                requestId = "aspernatur";
                uploadType = "ex";
                uploadProtocol = "error";
                userIp = "adipisci";
            }};            

            ComputeRegionDisksRemoveResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksRemoveResourcePolicies(req, new ComputeRegionDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksRemoveResourcePoliciesSecurityOption1("neque", "sequi") {{
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

## computeRegionDisksResize

Resizes the specified regional persistent disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksResizeRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksResizeResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksResizeSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksResizeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksResizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionDisksResizeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksResizeRequest req = new ComputeRegionDisksResizeRequest("optio", "magni", "fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                regionDisksResizeRequest = new RegionDisksResizeRequest() {{
                    sizeGb = "soluta";
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "consequatur";
                key = "eum";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "placeat";
                requestId = "eius";
                uploadType = "optio";
                uploadProtocol = "optio";
                userIp = "aperiam";
            }};            

            ComputeRegionDisksResizeResponse res = sdk.regionDisks.computeRegionDisksResize(req, new ComputeRegionDisksResizeSecurity() {{
                option1 = new ComputeRegionDisksResizeSecurityOption1("fuga", "officia") {{
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

## computeRegionDisksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.RegionSetPolicyRequest;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksSetIamPolicyRequest req = new ComputeRegionDisksSetIamPolicyRequest("consequuntur", "reiciendis", "totam") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "dolore";
                            condition = new Expr() {{
                                description = "vel";
                                expression = "iste";
                                location = "impedit";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("cupiditate"),
                            }};
                            role = "quos";
                        }}),
                    }};
                    etag = "molestias";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ad"),
                                            add("eos"),
                                            add("eum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quod"),
                                            add("consequatur"),
                                            add("qui"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odio"),
                                            add("numquam"),
                                            add("eos"),
                                            add("saepe"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("beatae"),
                                    add("culpa"),
                                    add("nam"),
                                    add("animi"),
                                }};
                                service = "possimus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quis"),
                                            add("voluptates"),
                                            add("officiis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("dolor"),
                                    add("magnam"),
                                }};
                                service = "possimus";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ratione"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("provident"),
                                            add("porro"),
                                            add("laudantium"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nisi"),
                                    add("fugit"),
                                }};
                                service = "tempora";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("mollitia"),
                                            add("odit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("cumque"),
                                            add("corrupti"),
                                            add("delectus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("officia"),
                                    add("veniam"),
                                    add("recusandae"),
                                }};
                                service = "tempore";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "modi";
                                condition = new Expr() {{
                                    description = "aut";
                                    expression = "officiis";
                                    location = "accusamus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("autem"),
                                }};
                                role = "libero";
                            }}),
                            add(new Binding() {{
                                bindingId = "tempore";
                                condition = new Expr() {{
                                    description = "sequi";
                                    expression = "alias";
                                    location = "sunt";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("cum"),
                                    add("accusantium"),
                                    add("voluptas"),
                                    add("voluptatem"),
                                }};
                                role = "ab";
                            }}),
                            add(new Binding() {{
                                bindingId = "in";
                                condition = new Expr() {{
                                    description = "eum";
                                    expression = "cupiditate";
                                    location = "alias";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("nam"),
                                }};
                                role = "numquam";
                            }}),
                        }};
                        etag = "earum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quibusdam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("rerum"),
                                            add("repellendus"),
                                            add("dicta"),
                                            add("molestias"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "pariatur";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ducimus"),
                                            add("a"),
                                            add("inventore"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "voluptates";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("perspiciatis"),
                                            add("harum"),
                                            add("saepe"),
                                        }};
                                    }}),
                                }};
                                description = "repellendus";
                                ins = new String[]{{
                                    add("a"),
                                    add("earum"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jessica Mohr";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Moses Balistreri";
                                                    value = "dolore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marie Nolan";
                                                    value = "nam";
                                                }}),
                                            }};
                                            field = "id";
                                            metric = "quod";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("aut"),
                                    add("facere"),
                                    add("doloribus"),
                                    add("vitae"),
                                }};
                                permissions = new String[]{{
                                    add("quis"),
                                    add("doloribus"),
                                    add("facere"),
                                    add("tenetur"),
                                }};
                            }}),
                        }};
                        version = 734276;
                    }};;
                }};;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "magnam";
                fields = "optio";
                key = "debitis";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "assumenda";
                uploadProtocol = "neque";
                userIp = "veritatis";
            }};            

            ComputeRegionDisksSetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksSetIamPolicy(req, new ComputeRegionDisksSetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksSetIamPolicySecurityOption1("corrupti", "possimus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## computeRegionDisksSetLabels

Sets the labels on the target regional disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksSetLabelsRequest req = new ComputeRegionDisksSetLabelsRequest("sequi", "enim", "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "perspiciatis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("officiis", "inventore");
                    }};
                }};;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "porro";
                key = "omnis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "quo";
                requestId = "asperiores";
                uploadType = "consequuntur";
                uploadProtocol = "impedit";
                userIp = "temporibus";
            }};            

            ComputeRegionDisksSetLabelsResponse res = sdk.regionDisks.computeRegionDisksSetLabels(req, new ComputeRegionDisksSetLabelsSecurity() {{
                option1 = new ComputeRegionDisksSetLabelsSecurityOption1("libero", "aliquam") {{
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

## computeRegionDisksStartAsyncReplication

Starts asynchronous replication. Must be invoked on the primary disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksStartAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksStartAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksStartAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksStartAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksStartAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RegionDisksStartAsyncReplicationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksStartAsyncReplicationRequest req = new ComputeRegionDisksStartAsyncReplicationRequest("ea", "magni", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksStartAsyncReplicationRequest = new RegionDisksStartAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "suscipit";
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "quis";
                key = "nostrum";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "quia";
                requestId = "voluptatum";
                uploadType = "voluptates";
                uploadProtocol = "omnis";
                userIp = "architecto";
            }};            

            ComputeRegionDisksStartAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStartAsyncReplication(req, new ComputeRegionDisksStartAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStartAsyncReplicationSecurityOption1("dicta", "quod") {{
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

## computeRegionDisksStopAsyncReplication

Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksStopAsyncReplicationRequest req = new ComputeRegionDisksStopAsyncReplicationRequest("cumque", "minus", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cupiditate";
                alt = AltEnum.JSON;
                callback = "accusantium";
                fields = "voluptatibus";
                key = "ipsum";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "atque";
                uploadType = "architecto";
                uploadProtocol = "adipisci";
                userIp = "libero";
            }};            

            ComputeRegionDisksStopAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStopAsyncReplication(req, new ComputeRegionDisksStopAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStopAsyncReplicationSecurityOption1("at", "ipsum") {{
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

## computeRegionDisksStopGroupAsyncReplication

Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopGroupAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopGroupAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopGroupAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopGroupAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksStopGroupAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksStopGroupAsyncReplicationResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksStopGroupAsyncReplicationRequest req = new ComputeRegionDisksStopGroupAsyncReplicationRequest("ipsam", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource() {{
                    resourcePolicy = "accusantium";
                }};;
                accessToken = "et";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "illum";
                key = "enim";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "mollitia";
                requestId = "tempore";
                uploadType = "voluptatibus";
                uploadProtocol = "neque";
                userIp = "dolor";
            }};            

            ComputeRegionDisksStopGroupAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStopGroupAsyncReplication(req, new ComputeRegionDisksStopGroupAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStopGroupAsyncReplicationSecurityOption1("sequi", "delectus") {{
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

## computeRegionDisksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionDisksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksTestIamPermissionsRequest req = new ComputeRegionDisksTestIamPermissionsRequest("cupiditate", "ab", "ratione") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("harum"),
                    }};
                }};;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "optio";
                fields = "cum";
                key = "et";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "cum";
                uploadProtocol = "at";
                userIp = "quis";
            }};            

            ComputeRegionDisksTestIamPermissionsResponse res = sdk.regionDisks.computeRegionDisksTestIamPermissions(req, new ComputeRegionDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionDisksTestIamPermissionsSecurityOption1("consequuntur", "sapiente") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeRegionDisksUpdate

Update the specified disk with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionDisksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeRegionDisksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeRegionDisksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeRegionDisksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionDisksUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.Disk;
import org.openapis.openapi.models.shared.DiskArchitectureEnum;
import org.openapis.openapi.models.shared.DiskAsyncReplication;
import org.openapis.openapi.models.shared.DiskAsyncReplicationList;
import org.openapis.openapi.models.shared.DiskInterfaceEnum;
import org.openapis.openapi.models.shared.DiskParams;
import org.openapis.openapi.models.shared.DiskResourceStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatusStateEnum;
import org.openapis.openapi.models.shared.DiskStatusEnum;
import org.openapis.openapi.models.shared.DiskStorageTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksUpdateRequest req = new ComputeRegionDisksUpdateRequest("reiciendis", "unde", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.X8664;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "sequi";
                        consistencyGroupPolicyId = "illo";
                        disk = "est";
                        diskId = "fugit";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("reprehenderit", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "voluptates";
                                consistencyGroupPolicyId = "aperiam";
                                disk = "beatae";
                                diskId = "tempora";
                            }};
                        }});
                        put("voluptate", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "perspiciatis";
                                consistencyGroupPolicyId = "molestias";
                                disk = "explicabo";
                                diskId = "sint";
                            }};
                        }});
                        put("sunt", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "fugiat";
                                consistencyGroupPolicyId = "ex";
                                disk = "eius";
                                diskId = "architecto";
                            }};
                        }});
                    }};
                    creationTimestamp = "aliquid";
                    description = "mollitia";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "dolores";
                        kmsKeyServiceAccount = "quisquam";
                        rawKey = "perspiciatis";
                        rsaEncryptedKey = "molestiae";
                        sha256 = "at";
                    }};;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                    }};
                    id = "iste";
                    interface_ = DiskInterfaceEnum.NVME;
                    kind = "adipisci";
                    labelFingerprint = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("adipisci", "sequi");
                        put("corporis", "officia");
                    }};
                    lastAttachTimestamp = "debitis";
                    lastDetachTimestamp = "possimus";
                    licenseCodes = new String[]{{
                        add("nulla"),
                        add("doloremque"),
                    }};
                    licenses = new String[]{{
                        add("ad"),
                        add("corrupti"),
                        add("nobis"),
                        add("quas"),
                    }};
                    locationHint = "ratione";
                    locked = false;
                    multiWriter = false;
                    name = "Terry Armstrong";
                    options = "illum";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("accusamus", "aliquid");
                            put("magnam", "deserunt");
                            put("voluptates", "minima");
                        }};
                    }};;
                    physicalBlockSizeBytes = "cumque";
                    provisionedIops = "ullam";
                    provisionedThroughput = "quis";
                    region = "suscipit";
                    replicaZones = new String[]{{
                        add("illum"),
                        add("alias"),
                        add("neque"),
                        add("sed"),
                    }};
                    resourcePolicies = new String[]{{
                        add("in"),
                        add("eius"),
                        add("et"),
                        add("dignissimos"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("iure", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                            put("cum", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "sed";
                    sizeGb = "voluptas";
                    sourceConsistencyGroupPolicy = "vero";
                    sourceConsistencyGroupPolicyId = "magnam";
                    sourceDisk = "mollitia";
                    sourceDiskId = "perferendis";
                    sourceImage = "eveniet";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "maxime";
                        kmsKeyServiceAccount = "maiores";
                        rawKey = "voluptate";
                        rsaEncryptedKey = "incidunt";
                        sha256 = "eius";
                    }};;
                    sourceImageId = "omnis";
                    sourceSnapshot = "ratione";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nobis";
                        kmsKeyServiceAccount = "quia";
                        rawKey = "minus";
                        rsaEncryptedKey = "tenetur";
                        sha256 = "saepe";
                    }};;
                    sourceSnapshotId = "perspiciatis";
                    sourceStorageObject = "aut";
                    status = DiskStatusEnum.DELETING;
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "eius";
                    userLicenses = new String[]{{
                        add("asperiores"),
                        add("nihil"),
                    }};
                    users = new String[]{{
                        add("quis"),
                        add("consequuntur"),
                        add("delectus"),
                    }};
                    zone = "quod";
                }};;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "est";
                key = "incidunt";
                oauthToken = "cupiditate";
                paths = new String[]{{
                    add("odit"),
                    add("odit"),
                }};
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "culpa";
                updateMask = "eligendi";
                uploadType = "numquam";
                uploadProtocol = "adipisci";
                userIp = "tempora";
            }};            

            ComputeRegionDisksUpdateResponse res = sdk.regionDisks.computeRegionDisksUpdate(req, new ComputeRegionDisksUpdateSecurity() {{
                option1 = new ComputeRegionDisksUpdateSecurityOption1("expedita", "occaecati") {{
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
