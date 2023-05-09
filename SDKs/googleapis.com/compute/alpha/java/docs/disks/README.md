# disks

### Available Operations

* [computeDisksAddResourcePolicies](#computedisksaddresourcepolicies) - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeDisksAggregatedList](#computedisksaggregatedlist) - Retrieves an aggregated list of persistent disks.
* [computeDisksBulkInsert](#computedisksbulkinsert) - Bulk create a set of disks.
* [computeDisksCreateSnapshot](#computediskscreatesnapshot) - Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.
* [computeDisksDelete](#computedisksdelete) - Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
* [computeDisksGet](#computedisksget) - Returns the specified persistent disk.
* [computeDisksGetIamPolicy](#computedisksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeDisksInsert](#computedisksinsert) - Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
* [computeDisksList](#computediskslist) - Retrieves a list of persistent disks contained within the specified zone.
* [computeDisksRemoveResourcePolicies](#computedisksremoveresourcepolicies) - Removes resource policies from a disk.
* [computeDisksResize](#computedisksresize) - Resizes the specified persistent disk. You can only increase the size of the disk.
* [computeDisksSetIamPolicy](#computediskssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeDisksSetLabels](#computediskssetlabels) - Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
* [computeDisksStartAsyncReplication](#computedisksstartasyncreplication) - Starts asynchronous replication. Must be invoked on the primary disk.
* [computeDisksStopAsyncReplication](#computedisksstopasyncreplication) - Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.
* [computeDisksStopGroupAsyncReplication](#computedisksstopgroupasyncreplication) - Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.
* [computeDisksTestIamPermissions](#computediskstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeDisksUpdate](#computedisksupdate) - Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

## computeDisksAddResourcePolicies

Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksAddResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeDisksAddResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeDisksAddResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeDisksAddResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksAddResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksAddResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksAddResourcePoliciesRequest req = new ComputeDisksAddResourcePoliciesRequest("accusantium", "consequatur", "impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                disksAddResourcePoliciesRequest = new DisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("deleniti"),
                        add("est"),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "quos";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "culpa";
                uploadType = "doloremque";
                uploadProtocol = "fuga";
                userIp = "dicta";
            }};            

            ComputeDisksAddResourcePoliciesResponse res = sdk.disks.computeDisksAddResourcePolicies(req, new ComputeDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeDisksAddResourcePoliciesSecurityOption1("architecto", "suscipit") {{
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

## computeDisksAggregatedList

Retrieves an aggregated list of persistent disks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDisksAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksAggregatedListRequest req = new ComputeDisksAggregatedListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "ratione";
                fields = "possimus";
                filter = "quaerat";
                includeAllScopes = false;
                key = "aut";
                maxResults = 620534L;
                oauthToken = "esse";
                orderBy = "delectus";
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "ratione";
                returnPartialSuccess = false;
                uploadType = "ipsa";
                uploadProtocol = "debitis";
                userIp = "iste";
            }};            

            ComputeDisksAggregatedListResponse res = sdk.disks.computeDisksAggregatedList(req, new ComputeDisksAggregatedListSecurity() {{
                option1 = new ComputeDisksAggregatedListSecurityOption1("deserunt", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.diskAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeDisksBulkInsert

Bulk create a set of disks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksBulkInsertRequest;
import org.openapis.openapi.models.operations.ComputeDisksBulkInsertResponse;
import org.openapis.openapi.models.operations.ComputeDisksBulkInsertSecurity;
import org.openapis.openapi.models.operations.ComputeDisksBulkInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksBulkInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkInsertDiskResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksBulkInsertRequest req = new ComputeDisksBulkInsertRequest("ducimus", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkInsertDiskResource = new BulkInsertDiskResource() {{
                    sourceConsistencyGroupPolicy = "libero";
                }};;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "qui";
                key = "explicabo";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "amet";
                requestId = "consequatur";
                uploadType = "fugiat";
                uploadProtocol = "voluptatum";
                userIp = "velit";
            }};            

            ComputeDisksBulkInsertResponse res = sdk.disks.computeDisksBulkInsert(req, new ComputeDisksBulkInsertSecurity() {{
                option1 = new ComputeDisksBulkInsertSecurityOption1("hic", "ullam") {{
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

## computeDisksCreateSnapshot

Creates a snapshot of a specified persistent disk. For regular snapshot creation, consider using snapshots.insert instead, as that method supports more features, such as creating snapshots in a project different from the source disk project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksCreateSnapshotRequest;
import org.openapis.openapi.models.operations.ComputeDisksCreateSnapshotResponse;
import org.openapis.openapi.models.operations.ComputeDisksCreateSnapshotSecurity;
import org.openapis.openapi.models.operations.ComputeDisksCreateSnapshotSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksCreateSnapshotSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
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

            ComputeDisksCreateSnapshotRequest req = new ComputeDisksCreateSnapshotRequest("deserunt", "itaque", "distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARM64;
                    autoCreated = false;
                    chainName = "provident";
                    creationSizeBytes = "occaecati";
                    creationTimestamp = "assumenda";
                    description = "sunt";
                    diskSizeGb = "odit";
                    downloadBytes = "vero";
                    guestFlush = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.WINDOWS;
                        }}),
                    }};
                    id = "atque";
                    kind = "magnam";
                    labelFingerprint = "perspiciatis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corrupti", "sunt");
                    }};
                    licenseCodes = new String[]{{
                        add("delectus"),
                        add("illum"),
                    }};
                    licenses = new String[]{{
                        add("quaerat"),
                        add("magni"),
                        add("cumque"),
                        add("quos"),
                    }};
                    locationHint = "in";
                    maxRetentionDays = 413768;
                    name = "Jeremy Schiller";
                    satisfiesPzs = false;
                    selfLink = "delectus";
                    selfLinkWithId = "harum";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aliquam";
                        kmsKeyServiceAccount = "eligendi";
                        rawKey = "hic";
                        rsaEncryptedKey = "quo";
                        sha256 = "illo";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "esse";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nisi";
                        kmsKeyServiceAccount = "explicabo";
                        rawKey = "sequi";
                        rsaEncryptedKey = "alias";
                        sha256 = "reiciendis";
                    }};;
                    sourceDiskForRecoveryCheckpoint = "quos";
                    sourceDiskId = "numquam";
                    sourceInstantSnapshot = "vitae";
                    sourceInstantSnapshotId = "maiores";
                    sourceSnapshotSchedulePolicy = "nam";
                    sourceSnapshotSchedulePolicyId = "architecto";
                    status = SnapshotStatusEnum.READY;
                    storageBytes = "assumenda";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UPDATING;
                    storageLocations = new String[]{{
                        add("hic"),
                    }};
                    userLicenses = new String[]{{
                        add("nam"),
                        add("ab"),
                        add("magnam"),
                        add("pariatur"),
                    }};
                }};;
                accessToken = "expedita";
                alt = AltEnum.MEDIA;
                callback = "tempore";
                fields = "recusandae";
                guestFlush = false;
                key = "nostrum";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "voluptas";
                requestId = "laudantium";
                uploadType = "corporis";
                uploadProtocol = "excepturi";
                userIp = "natus";
            }};            

            ComputeDisksCreateSnapshotResponse res = sdk.disks.computeDisksCreateSnapshot(req, new ComputeDisksCreateSnapshotSecurity() {{
                option1 = new ComputeDisksCreateSnapshotSecurityOption1("deleniti", "necessitatibus") {{
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

## computeDisksDelete

Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksDeleteRequest;
import org.openapis.openapi.models.operations.ComputeDisksDeleteResponse;
import org.openapis.openapi.models.operations.ComputeDisksDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeDisksDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksDeleteRequest req = new ComputeDisksDeleteRequest("aspernatur", "dolores", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.JSON;
                callback = "temporibus";
                fields = "id";
                key = "quae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "a";
                requestId = "minus";
                uploadType = "sed";
                uploadProtocol = "nam";
                userIp = "quia";
            }};            

            ComputeDisksDeleteResponse res = sdk.disks.computeDisksDelete(req, new ComputeDisksDeleteSecurity() {{
                option1 = new ComputeDisksDeleteSecurityOption1("iusto", "ab") {{
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

## computeDisksGet

Returns the specified persistent disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksGetRequest;
import org.openapis.openapi.models.operations.ComputeDisksGetResponse;
import org.openapis.openapi.models.operations.ComputeDisksGetSecurity;
import org.openapis.openapi.models.operations.ComputeDisksGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDisksGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksGetRequest req = new ComputeDisksGetRequest("deserunt", "sed", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "itaque";
                key = "rem";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
                userIp = "ipsa";
            }};            

            ComputeDisksGetResponse res = sdk.disks.computeDisksGet(req, new ComputeDisksGetSecurity() {{
                option1 = new ComputeDisksGetSecurityOption1("aliquam", "dolor") {{
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

## computeDisksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeDisksGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksGetIamPolicyRequest req = new ComputeDisksGetIamPolicyRequest("occaecati", "quibusdam", "magni") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "ipsam";
                key = "vel";
                oauthToken = "cupiditate";
                optionsRequestedPolicyVersion = 268109L;
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "explicabo";
                uploadProtocol = "modi";
                userIp = "doloremque";
            }};            

            ComputeDisksGetIamPolicyResponse res = sdk.disks.computeDisksGetIamPolicy(req, new ComputeDisksGetIamPolicySecurity() {{
                option1 = new ComputeDisksGetIamPolicySecurityOption1("odio", "sit") {{
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

## computeDisksInsert

Creates a persistent disk in the specified project using the data in the request. You can create a disk from a source (sourceImage, sourceSnapshot, or sourceDisk) or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksInsertRequest;
import org.openapis.openapi.models.operations.ComputeDisksInsertResponse;
import org.openapis.openapi.models.operations.ComputeDisksInsertSecurity;
import org.openapis.openapi.models.operations.ComputeDisksInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksInsertSecurityOption2;
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

            ComputeDisksInsertRequest req = new ComputeDisksInsertRequest("voluptatum", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "dolorum";
                        consistencyGroupPolicyId = "libero";
                        disk = "ratione";
                        diskId = "molestiae";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("saepe", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "maiores";
                                consistencyGroupPolicyId = "accusantium";
                                disk = "sed";
                                diskId = "eos";
                            }};
                        }});
                        put("consequuntur", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "quis";
                                consistencyGroupPolicyId = "vitae";
                                disk = "occaecati";
                                diskId = "labore";
                            }};
                        }});
                        put("fugiat", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "quidem";
                                consistencyGroupPolicyId = "exercitationem";
                                disk = "veniam";
                                diskId = "modi";
                            }};
                        }});
                        put("quasi", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "quae";
                                consistencyGroupPolicyId = "similique";
                                disk = "possimus";
                                diskId = "quo";
                            }};
                        }});
                    }};
                    creationTimestamp = "suscipit";
                    description = "ex";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "sint";
                        kmsKeyServiceAccount = "est";
                        rawKey = "doloribus";
                        rsaEncryptedKey = "provident";
                        sha256 = "alias";
                    }};;
                    enableConfidentialCompute = false;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                        }}),
                    }};
                    id = "molestiae";
                    interface_ = DiskInterfaceEnum.UNSPECIFIED;
                    kind = "facere";
                    labelFingerprint = "impedit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("deleniti", "quasi");
                        put("maiores", "voluptatem");
                        put("aliquid", "laudantium");
                    }};
                    lastAttachTimestamp = "unde";
                    lastDetachTimestamp = "corrupti";
                    licenseCodes = new String[]{{
                        add("facere"),
                    }};
                    licenses = new String[]{{
                        add("libero"),
                        add("nam"),
                    }};
                    locationHint = "amet";
                    locked = false;
                    multiWriter = false;
                    name = "Brooke Welch";
                    options = "consectetur";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("laudantium", "cumque");
                            put("adipisci", "veritatis");
                        }};
                    }};;
                    physicalBlockSizeBytes = "nam";
                    provisionedIops = "voluptatibus";
                    provisionedThroughput = "magnam";
                    region = "aperiam";
                    replicaZones = new String[]{{
                        add("itaque"),
                        add("necessitatibus"),
                    }};
                    resourcePolicies = new String[]{{
                        add("doloribus"),
                        add("eligendi"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPING;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("impedit", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "aspernatur";
                    selfLinkWithId = "nobis";
                    sizeGb = "nihil";
                    sourceConsistencyGroupPolicy = "voluptatum";
                    sourceConsistencyGroupPolicyId = "reiciendis";
                    sourceDisk = "vitae";
                    sourceDiskId = "ullam";
                    sourceImage = "nisi";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "consequuntur";
                        kmsKeyServiceAccount = "voluptas";
                        rawKey = "ratione";
                        rsaEncryptedKey = "excepturi";
                        sha256 = "corrupti";
                    }};;
                    sourceImageId = "est";
                    sourceInstantSnapshot = "perferendis";
                    sourceInstantSnapshotId = "quibusdam";
                    sourceSnapshot = "impedit";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ducimus";
                        kmsKeyServiceAccount = "nisi";
                        rawKey = "nisi";
                        rsaEncryptedKey = "dolor";
                        sha256 = "fugit";
                    }};;
                    sourceSnapshotId = "dolore";
                    sourceStorageObject = "maxime";
                    status = DiskStatusEnum.RESTORING;
                    storagePool = "expedita";
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "ea";
                    userLicenses = new String[]{{
                        add("totam"),
                        add("optio"),
                        add("est"),
                        add("inventore"),
                    }};
                    users = new String[]{{
                        add("repellendus"),
                    }};
                    zone = "sit";
                }};;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "perspiciatis";
                key = "magni";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "quidem";
                sourceImage = "deleniti";
                uploadType = "possimus";
                uploadProtocol = "ipsam";
                userIp = "odio";
            }};            

            ComputeDisksInsertResponse res = sdk.disks.computeDisksInsert(req, new ComputeDisksInsertSecurity() {{
                option1 = new ComputeDisksInsertSecurityOption1("fugit", "aspernatur") {{
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

## computeDisksList

Retrieves a list of persistent disks contained within the specified zone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksListRequest;
import org.openapis.openapi.models.operations.ComputeDisksListResponse;
import org.openapis.openapi.models.operations.ComputeDisksListSecurity;
import org.openapis.openapi.models.operations.ComputeDisksListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDisksListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksListRequest req = new ComputeDisksListRequest("at", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptatum";
                filter = "facilis";
                key = "placeat";
                maxResults = 968212L;
                oauthToken = "dolores";
                orderBy = "dolore";
                pageToken = "pariatur";
                prettyPrint = false;
                quotaUser = "facilis";
                returnPartialSuccess = false;
                uploadType = "cupiditate";
                uploadProtocol = "nemo";
                userIp = "natus";
            }};            

            ComputeDisksListResponse res = sdk.disks.computeDisksList(req, new ComputeDisksListSecurity() {{
                option1 = new ComputeDisksListSecurityOption1("nisi", "provident") {{
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

## computeDisksRemoveResourcePolicies

Removes resource policies from a disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.operations.ComputeDisksRemoveResourcePoliciesResponse;
import org.openapis.openapi.models.operations.ComputeDisksRemoveResourcePoliciesSecurity;
import org.openapis.openapi.models.operations.ComputeDisksRemoveResourcePoliciesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksRemoveResourcePoliciesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksRemoveResourcePoliciesRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksRemoveResourcePoliciesRequest req = new ComputeDisksRemoveResourcePoliciesRequest("amet", "dolor", "nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                disksRemoveResourcePoliciesRequest = new DisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("molestiae"),
                        add("dolore"),
                        add("ullam"),
                        add("velit"),
                    }};
                }};;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "fugiat";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "repellendus";
                uploadType = "saepe";
                uploadProtocol = "amet";
                userIp = "distinctio";
            }};            

            ComputeDisksRemoveResourcePoliciesResponse res = sdk.disks.computeDisksRemoveResourcePolicies(req, new ComputeDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeDisksRemoveResourcePoliciesSecurityOption1("vel", "necessitatibus") {{
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

## computeDisksResize

Resizes the specified persistent disk. You can only increase the size of the disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksResizeRequest;
import org.openapis.openapi.models.operations.ComputeDisksResizeResponse;
import org.openapis.openapi.models.operations.ComputeDisksResizeSecurity;
import org.openapis.openapi.models.operations.ComputeDisksResizeSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksResizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksResizeRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksResizeRequest req = new ComputeDisksResizeRequest("iste", "nesciunt", "corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                disksResizeRequest = new DisksResizeRequest() {{
                    sizeGb = "voluptatibus";
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "cum";
                key = "in";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "commodi";
                uploadType = "fugit";
                uploadProtocol = "ullam";
                userIp = "ullam";
            }};            

            ComputeDisksResizeResponse res = sdk.disks.computeDisksResize(req, new ComputeDisksResizeSecurity() {{
                option1 = new ComputeDisksResizeSecurityOption1("doloremque", "est") {{
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

## computeDisksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeDisksSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeDisksSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeDisksSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksSetIamPolicySecurityOption2;
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
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksSetIamPolicyRequest req = new ComputeDisksSetIamPolicyRequest("qui", "praesentium", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "deserunt";
                            condition = new Expr() {{
                                description = "eligendi";
                                expression = "incidunt";
                                location = "deleniti";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("reiciendis"),
                                add("possimus"),
                                add("odit"),
                            }};
                            role = "consectetur";
                        }}),
                    }};
                    etag = "inventore";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("deserunt"),
                                            add("nisi"),
                                            add("ipsam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iure"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quae"),
                                            add("ea"),
                                            add("asperiores"),
                                            add("veniam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("eum"),
                                    add("deserunt"),
                                    add("repudiandae"),
                                    add("nemo"),
                                }};
                                service = "molestias";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quisquam"),
                                            add("praesentium"),
                                            add("facilis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("maiores"),
                                    add("ipsum"),
                                    add("commodi"),
                                    add("vitae"),
                                }};
                                service = "fugit";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "ex";
                                condition = new Expr() {{
                                    description = "neque";
                                    expression = "quod";
                                    location = "eos";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("a"),
                                    add("facere"),
                                }};
                                role = "id";
                            }}),
                            add(new Binding() {{
                                bindingId = "atque";
                                condition = new Expr() {{
                                    description = "quaerat";
                                    expression = "aperiam";
                                    location = "dignissimos";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("fuga"),
                                    add("iure"),
                                }};
                                role = "deleniti";
                            }}),
                            add(new Binding() {{
                                bindingId = "officia";
                                condition = new Expr() {{
                                    description = "sint";
                                    expression = "laborum";
                                    location = "dolor";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("sit"),
                                    add("molestias"),
                                    add("voluptas"),
                                    add("expedita"),
                                }};
                                role = "voluptas";
                            }}),
                        }};
                        etag = "maiores";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "consequatur";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("voluptates"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quaerat";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("cum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "enim";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("omnis"),
                                            add("excepturi"),
                                            add("eos"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "repellendus";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("est"),
                                            add("commodi"),
                                            add("similique"),
                                            add("autem"),
                                        }};
                                    }}),
                                }};
                                description = "dicta";
                                ins = new String[]{{
                                    add("sapiente"),
                                    add("id"),
                                    add("odit"),
                                    add("inventore"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Santos Stroman";
                                                    value = "eveniet";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lynn Green";
                                                    value = "quam";
                                                }}),
                                            }};
                                            field = "nulla";
                                            metric = "dolorem";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Gene Grimes";
                                                    value = "culpa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Leah Dicki";
                                                    value = "nihil";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "temporibus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Marcos Willms";
                                                    value = "praesentium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Claudia O'Keefe";
                                                    value = "voluptatem";
                                                }}),
                                            }};
                                            field = "quisquam";
                                            metric = "vitae";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("sint"),
                                }};
                                permissions = new String[]{{
                                    add("occaecati"),
                                    add("quis"),
                                    add("tempore"),
                                    add("officia"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "ducimus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("deserunt"),
                                            add("dolor"),
                                            add("hic"),
                                            add("iure"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "iste";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("fuga"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "voluptatum";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("eaque"),
                                            add("consectetur"),
                                            add("autem"),
                                        }};
                                    }}),
                                }};
                                description = "vitae";
                                ins = new String[]{{
                                    add("incidunt"),
                                    add("modi"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Charlene O'Keefe";
                                                    value = "qui";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jorge Emmerich Sr.";
                                                    value = "voluptatum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darnell Watsica";
                                                    value = "cupiditate";
                                                }}),
                                            }};
                                            field = "adipisci";
                                            metric = "aliquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cody Ward";
                                                    value = "non";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Randall Schinner";
                                                    value = "illum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Homer Ortiz III";
                                                    value = "consequatur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Randall Greenholt";
                                                    value = "quo";
                                                }}),
                                            }};
                                            field = "maxime";
                                            metric = "delectus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Emanuel McKenzie";
                                                    value = "culpa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dennis Littel";
                                                    value = "voluptates";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Peggy Bergstrom";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            field = "delectus";
                                            metric = "nemo";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("sequi"),
                                    add("atque"),
                                    add("maiores"),
                                }};
                                permissions = new String[]{{
                                    add("rerum"),
                                    add("totam"),
                                    add("quod"),
                                }};
                            }}),
                        }};
                        version = 133076;
                    }};;
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "ex";
                key = "odio";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "ut";
                uploadProtocol = "distinctio";
                userIp = "eius";
            }};            

            ComputeDisksSetIamPolicyResponse res = sdk.disks.computeDisksSetIamPolicy(req, new ComputeDisksSetIamPolicySecurity() {{
                option1 = new ComputeDisksSetIamPolicySecurityOption1("eos", "veniam") {{
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

## computeDisksSetLabels

Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeDisksSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeDisksSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeDisksSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.ZoneSetLabelsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksSetLabelsRequest req = new ComputeDisksSetLabelsRequest("repudiandae", "sint", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetLabelsRequest = new ZoneSetLabelsRequest() {{
                    labelFingerprint = "laboriosam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("amet", "incidunt");
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "voluptate";
                key = "tempore";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "omnis";
                requestId = "possimus";
                uploadType = "tenetur";
                uploadProtocol = "recusandae";
                userIp = "expedita";
            }};            

            ComputeDisksSetLabelsResponse res = sdk.disks.computeDisksSetLabels(req, new ComputeDisksSetLabelsSecurity() {{
                option1 = new ComputeDisksSetLabelsSecurityOption1("iusto", "esse") {{
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

## computeDisksStartAsyncReplication

Starts asynchronous replication. Must be invoked on the primary disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksStartAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeDisksStartAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeDisksStartAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeDisksStartAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksStartAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksStartAsyncReplicationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksStartAsyncReplicationRequest req = new ComputeDisksStartAsyncReplicationRequest("harum", "ad", "quod") {{
                dollarXgafv = XgafvEnum.ONE;
                disksStartAsyncReplicationRequest = new DisksStartAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "totam";
                }};;
                accessToken = "vero";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "maiores";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "illo";
                requestId = "saepe";
                uploadType = "enim";
                uploadProtocol = "eaque";
                userIp = "ex";
            }};            

            ComputeDisksStartAsyncReplicationResponse res = sdk.disks.computeDisksStartAsyncReplication(req, new ComputeDisksStartAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStartAsyncReplicationSecurityOption1("eveniet", "delectus") {{
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

## computeDisksStopAsyncReplication

Stops asynchronous replication. Can be invoked either on the primary or on the secondary disk.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksStopAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeDisksStopAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeDisksStopAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeDisksStopAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksStopAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksStopAsyncReplicationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksStopAsyncReplicationRequest req = new ComputeDisksStopAsyncReplicationRequest("deleniti", "provident", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStopAsyncReplicationRequest = new DisksStopAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "nostrum";
                }};;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "odio";
                key = "nostrum";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "veritatis";
                requestId = "autem";
                uploadType = "earum";
                uploadProtocol = "minima";
                userIp = "ex";
            }};            

            ComputeDisksStopAsyncReplicationResponse res = sdk.disks.computeDisksStopAsyncReplication(req, new ComputeDisksStopAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStopAsyncReplicationSecurityOption1("possimus", "nesciunt") {{
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

## computeDisksStopGroupAsyncReplication

Stops asynchronous replication for a consistency group of disks. Can be invoked either in the primary or secondary scope.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksStopGroupAsyncReplicationRequest;
import org.openapis.openapi.models.operations.ComputeDisksStopGroupAsyncReplicationResponse;
import org.openapis.openapi.models.operations.ComputeDisksStopGroupAsyncReplicationSecurity;
import org.openapis.openapi.models.operations.ComputeDisksStopGroupAsyncReplicationSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksStopGroupAsyncReplicationSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisksStopGroupAsyncReplicationResource;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksStopGroupAsyncReplicationRequest req = new ComputeDisksStopGroupAsyncReplicationRequest("corrupti", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource() {{
                    resourcePolicy = "sequi";
                }};;
                accessToken = "maxime";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "eligendi";
                key = "autem";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "sunt";
                requestId = "rerum";
                uploadType = "occaecati";
                uploadProtocol = "provident";
                userIp = "necessitatibus";
            }};            

            ComputeDisksStopGroupAsyncReplicationResponse res = sdk.disks.computeDisksStopGroupAsyncReplication(req, new ComputeDisksStopGroupAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStopGroupAsyncReplicationSecurityOption1("fugit", "autem") {{
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

## computeDisksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeDisksTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksTestIamPermissionsRequest req = new ComputeDisksTestIamPermissionsRequest("optio", "eveniet", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("natus"),
                        add("sapiente"),
                        add("repellendus"),
                        add("facilis"),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "accusantium";
                key = "maiores";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "tempore";
                uploadProtocol = "expedita";
                userIp = "hic";
            }};            

            ComputeDisksTestIamPermissionsResponse res = sdk.disks.computeDisksTestIamPermissions(req, new ComputeDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeDisksTestIamPermissionsSecurityOption1("blanditiis", "vitae") {{
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

## computeDisksUpdate

Updates the specified disk with the data included in the request. The update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: user_license.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeDisksUpdateRequest;
import org.openapis.openapi.models.operations.ComputeDisksUpdateResponse;
import org.openapis.openapi.models.operations.ComputeDisksUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeDisksUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeDisksUpdateSecurityOption2;
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

            ComputeDisksUpdateRequest req = new ComputeDisksUpdateRequest("iusto", "atque", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.X8664;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "aperiam";
                        consistencyGroupPolicyId = "vitae";
                        disk = "mollitia";
                        diskId = "asperiores";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("quibusdam", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "quam";
                                consistencyGroupPolicyId = "deleniti";
                                disk = "rem";
                                diskId = "vel";
                            }};
                        }});
                        put("eos", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "labore";
                                consistencyGroupPolicyId = "sunt";
                                disk = "blanditiis";
                                diskId = "iste";
                            }};
                        }});
                        put("accusamus", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "distinctio";
                                consistencyGroupPolicyId = "incidunt";
                                disk = "labore";
                                diskId = "blanditiis";
                            }};
                        }});
                        put("ducimus", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "consectetur";
                                consistencyGroupPolicyId = "sapiente";
                                disk = "quis";
                                diskId = "accusantium";
                            }};
                        }});
                    }};
                    creationTimestamp = "ratione";
                    description = "consectetur";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "asperiores";
                        kmsKeyServiceAccount = "architecto";
                        rawKey = "sint";
                        rsaEncryptedKey = "possimus";
                        sha256 = "tempore";
                    }};;
                    enableConfidentialCompute = false;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                        }}),
                    }};
                    id = "debitis";
                    interface_ = DiskInterfaceEnum.NVME;
                    kind = "veritatis";
                    labelFingerprint = "minima";
                    labels = new java.util.HashMap<String, String>() {{
                        put("itaque", "error");
                    }};
                    lastAttachTimestamp = "expedita";
                    lastDetachTimestamp = "error";
                    licenseCodes = new String[]{{
                        add("temporibus"),
                        add("voluptate"),
                        add("earum"),
                        add("minima"),
                    }};
                    licenses = new String[]{{
                        add("odit"),
                    }};
                    locationHint = "eius";
                    locked = false;
                    multiWriter = false;
                    name = "Dr. Cecil Parisian Sr.";
                    options = "amet";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("iusto", "corrupti");
                            put("non", "esse");
                            put("vero", "eligendi");
                        }};
                    }};;
                    physicalBlockSizeBytes = "minima";
                    provisionedIops = "omnis";
                    provisionedThroughput = "recusandae";
                    region = "architecto";
                    replicaZones = new String[]{{
                        add("autem"),
                        add("in"),
                        add("repellat"),
                        add("amet"),
                    }};
                    resourcePolicies = new String[]{{
                        add("dolore"),
                        add("optio"),
                        add("quo"),
                        add("repudiandae"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("suscipit", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPING;
                            }});
                            put("iusto", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                            put("sint", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "repellat";
                    selfLinkWithId = "sapiente";
                    sizeGb = "consectetur";
                    sourceConsistencyGroupPolicy = "eligendi";
                    sourceConsistencyGroupPolicyId = "ullam";
                    sourceDisk = "nihil";
                    sourceDiskId = "eius";
                    sourceImage = "dignissimos";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "corporis";
                        kmsKeyServiceAccount = "perferendis";
                        rawKey = "architecto";
                        rsaEncryptedKey = "amet";
                        sha256 = "corporis";
                    }};;
                    sourceImageId = "nihil";
                    sourceInstantSnapshot = "officiis";
                    sourceInstantSnapshotId = "dolore";
                    sourceSnapshot = "magnam";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "maiores";
                        kmsKeyServiceAccount = "ipsam";
                        rawKey = "dicta";
                        rsaEncryptedKey = "hic";
                        sha256 = "praesentium";
                    }};;
                    sourceSnapshotId = "libero";
                    sourceStorageObject = "consequatur";
                    status = DiskStatusEnum.FAILED;
                    storagePool = "tempora";
                    storageType = DiskStorageTypeEnum.SSD;
                    type = "dolor";
                    userLicenses = new String[]{{
                        add("omnis"),
                    }};
                    users = new String[]{{
                        add("officiis"),
                        add("dicta"),
                    }};
                    zone = "excepturi";
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "odit";
                fields = "incidunt";
                key = "corporis";
                oauthToken = "quaerat";
                paths = new String[]{{
                    add("ducimus"),
                    add("tenetur"),
                }};
                prettyPrint = false;
                quotaUser = "excepturi";
                requestId = "modi";
                updateMask = "corrupti";
                uploadType = "nihil";
                uploadProtocol = "eius";
                userIp = "placeat";
            }};            

            ComputeDisksUpdateResponse res = sdk.disks.computeDisksUpdate(req, new ComputeDisksUpdateSecurity() {{
                option1 = new ComputeDisksUpdateSecurityOption1("fugit", "facere") {{
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
