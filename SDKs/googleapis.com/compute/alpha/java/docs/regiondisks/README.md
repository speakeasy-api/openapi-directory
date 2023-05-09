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

            ComputeRegionDisksAddResourcePoliciesRequest req = new ComputeRegionDisksAddResourcePoliciesRequest("veniam", "officia", "sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                regionDisksAddResourcePoliciesRequest = new RegionDisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("quidem"),
                        add("odio"),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "odio";
                key = "ullam";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "qui";
                requestId = "exercitationem";
                uploadType = "soluta";
                uploadProtocol = "laudantium";
                userIp = "consequatur";
            }};            

            ComputeRegionDisksAddResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksAddResourcePolicies(req, new ComputeRegionDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksAddResourcePoliciesSecurityOption1("cum", "sint") {{
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

            ComputeRegionDisksBulkInsertRequest req = new ComputeRegionDisksBulkInsertRequest("labore", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertDiskResource = new BulkInsertDiskResource() {{
                    sourceConsistencyGroupPolicy = "ipsum";
                }};;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "eligendi";
                fields = "nihil";
                key = "sequi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestId = "ipsa";
                uploadType = "inventore";
                uploadProtocol = "cum";
                userIp = "illum";
            }};            

            ComputeRegionDisksBulkInsertResponse res = sdk.regionDisks.computeRegionDisksBulkInsert(req, new ComputeRegionDisksBulkInsertSecurity() {{
                option1 = new ComputeRegionDisksBulkInsertSecurityOption1("labore", "quidem") {{
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

            ComputeRegionDisksCreateSnapshotRequest req = new ComputeRegionDisksCreateSnapshotRequest("deleniti", "corrupti", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARM64;
                    autoCreated = false;
                    chainName = "eius";
                    creationSizeBytes = "cum";
                    creationTimestamp = "accusantium";
                    description = "quas";
                    diskSizeGb = "sit";
                    downloadBytes = "praesentium";
                    guestFlush = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                        }}),
                    }};
                    id = "repudiandae";
                    kind = "aliquid";
                    labelFingerprint = "adipisci";
                    labels = new java.util.HashMap<String, String>() {{
                        put("neque", "sint");
                        put("qui", "quam");
                        put("praesentium", "doloremque");
                        put("quod", "sed");
                    }};
                    licenseCodes = new String[]{{
                        add("perspiciatis"),
                        add("aspernatur"),
                        add("numquam"),
                    }};
                    licenses = new String[]{{
                        add("perferendis"),
                    }};
                    locationHint = "nam";
                    maxRetentionDays = 680263;
                    name = "Eugene Bayer";
                    satisfiesPzs = false;
                    selfLink = "iusto";
                    selfLinkWithId = "rem";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aspernatur";
                        kmsKeyServiceAccount = "enim";
                        rawKey = "atque";
                        rsaEncryptedKey = "ratione";
                        sha256 = "harum";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "optio";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "porro";
                        kmsKeyServiceAccount = "quod";
                        rawKey = "rem";
                        rsaEncryptedKey = "voluptatem";
                        sha256 = "aliquam";
                    }};;
                    sourceDiskForRecoveryCheckpoint = "labore";
                    sourceDiskId = "sed";
                    sourceInstantSnapshot = "facere";
                    sourceInstantSnapshotId = "inventore";
                    sourceSnapshotSchedulePolicy = "inventore";
                    sourceSnapshotSchedulePolicyId = "cum";
                    status = SnapshotStatusEnum.DELETING;
                    storageBytes = "velit";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("nesciunt"),
                        add("architecto"),
                    }};
                    userLicenses = new String[]{{
                        add("itaque"),
                        add("nostrum"),
                        add("libero"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "doloremque";
                guestFlush = false;
                key = "ipsam";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "asperiores";
                requestId = "tempora";
                uploadType = "enim";
                uploadProtocol = "consequatur";
                userIp = "aut";
            }};            

            ComputeRegionDisksCreateSnapshotResponse res = sdk.regionDisks.computeRegionDisksCreateSnapshot(req, new ComputeRegionDisksCreateSnapshotSecurity() {{
                option1 = new ComputeRegionDisksCreateSnapshotSecurityOption1("eos", "soluta") {{
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

            ComputeRegionDisksDeleteRequest req = new ComputeRegionDisksDeleteRequest("magnam", "corrupti", "nesciunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "similique";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "dignissimos";
                key = "amet";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "inventore";
                uploadType = "tempora";
                uploadProtocol = "dolor";
                userIp = "provident";
            }};            

            ComputeRegionDisksDeleteResponse res = sdk.regionDisks.computeRegionDisksDelete(req, new ComputeRegionDisksDeleteSecurity() {{
                option1 = new ComputeRegionDisksDeleteSecurityOption1("architecto", "iusto") {{
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

            ComputeRegionDisksGetRequest req = new ComputeRegionDisksGetRequest("consectetur", "et", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "alias";
                fields = "aliquam";
                key = "maiores";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "unde";
                uploadProtocol = "reprehenderit";
                userIp = "libero";
            }};            

            ComputeRegionDisksGetResponse res = sdk.regionDisks.computeRegionDisksGet(req, new ComputeRegionDisksGetSecurity() {{
                option1 = new ComputeRegionDisksGetSecurityOption1("dolor", "animi") {{
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

            ComputeRegionDisksGetIamPolicyRequest req = new ComputeRegionDisksGetIamPolicyRequest("mollitia", "in", "porro") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "tenetur";
                key = "aliquid";
                oauthToken = "adipisci";
                optionsRequestedPolicyVersion = 249642L;
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "aliquid";
                uploadProtocol = "magnam";
                userIp = "aut";
            }};            

            ComputeRegionDisksGetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksGetIamPolicy(req, new ComputeRegionDisksGetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksGetIamPolicySecurityOption1("harum", "animi") {{
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

            ComputeRegionDisksInsertRequest req = new ComputeRegionDisksInsertRequest("nihil", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "voluptates";
                        consistencyGroupPolicyId = "recusandae";
                        disk = "consectetur";
                        diskId = "est";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("consequatur", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "eaque";
                                consistencyGroupPolicyId = "debitis";
                                disk = "enim";
                                diskId = "adipisci";
                            }};
                        }});
                    }};
                    creationTimestamp = "odit";
                    description = "doloribus";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "eius";
                        kmsKeyServiceAccount = "occaecati";
                        rawKey = "asperiores";
                        rsaEncryptedKey = "enim";
                        sha256 = "iusto";
                    }};;
                    enableConfidentialCompute = false;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                    }};
                    id = "repellendus";
                    interface_ = DiskInterfaceEnum.UNSPECIFIED;
                    kind = "minus";
                    labelFingerprint = "sit";
                    labels = new java.util.HashMap<String, String>() {{
                        put("in", "odit");
                    }};
                    lastAttachTimestamp = "placeat";
                    lastDetachTimestamp = "ipsam";
                    licenseCodes = new String[]{{
                        add("impedit"),
                        add("illum"),
                        add("odio"),
                        add("ipsam"),
                    }};
                    licenses = new String[]{{
                        add("ipsum"),
                        add("rem"),
                    }};
                    locationHint = "quo";
                    locked = false;
                    multiWriter = false;
                    name = "Monica Jast Jr.";
                    options = "pariatur";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quam", "recusandae");
                            put("voluptas", "dolore");
                            put("aliquid", "cumque");
                        }};
                    }};;
                    physicalBlockSizeBytes = "perspiciatis";
                    provisionedIops = "et";
                    provisionedThroughput = "debitis";
                    region = "magni";
                    replicaZones = new String[]{{
                        add("quaerat"),
                        add("officia"),
                    }};
                    resourcePolicies = new String[]{{
                        add("possimus"),
                        add("atque"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("amet", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "recusandae";
                    selfLinkWithId = "quam";
                    sizeGb = "sunt";
                    sourceConsistencyGroupPolicy = "occaecati";
                    sourceConsistencyGroupPolicyId = "aliquam";
                    sourceDisk = "nostrum";
                    sourceDiskId = "qui";
                    sourceImage = "beatae";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "illo";
                        kmsKeyServiceAccount = "dolor";
                        rawKey = "porro";
                        rsaEncryptedKey = "dolorem";
                        sha256 = "consequatur";
                    }};;
                    sourceImageId = "incidunt";
                    sourceInstantSnapshot = "expedita";
                    sourceInstantSnapshotId = "itaque";
                    sourceSnapshot = "ad";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "velit";
                        kmsKeyServiceAccount = "et";
                        rawKey = "autem";
                        rsaEncryptedKey = "nobis";
                        sha256 = "corrupti";
                    }};;
                    sourceSnapshotId = "vel";
                    sourceStorageObject = "beatae";
                    status = DiskStatusEnum.FAILED;
                    storagePool = "nesciunt";
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "voluptatum";
                    userLicenses = new String[]{{
                        add("illo"),
                    }};
                    users = new String[]{{
                        add("quae"),
                        add("similique"),
                        add("nisi"),
                    }};
                    zone = "consequatur";
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "sunt";
                key = "quod";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "officia";
                requestId = "consectetur";
                sourceImage = "temporibus";
                uploadType = "veniam";
                uploadProtocol = "laboriosam";
                userIp = "sequi";
            }};            

            ComputeRegionDisksInsertResponse res = sdk.regionDisks.computeRegionDisksInsert(req, new ComputeRegionDisksInsertSecurity() {{
                option1 = new ComputeRegionDisksInsertSecurityOption1("assumenda", "sequi") {{
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

            ComputeRegionDisksListRequest req = new ComputeRegionDisksListRequest("voluptatem", "itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ut";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "quam";
                filter = "nam";
                key = "quos";
                maxResults = 210181L;
                oauthToken = "eveniet";
                orderBy = "hic";
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "in";
                uploadProtocol = "nobis";
                userIp = "occaecati";
            }};            

            ComputeRegionDisksListResponse res = sdk.regionDisks.computeRegionDisksList(req, new ComputeRegionDisksListSecurity() {{
                option1 = new ComputeRegionDisksListSecurityOption1("enim", "ullam") {{
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

            ComputeRegionDisksRemoveResourcePoliciesRequest req = new ComputeRegionDisksRemoveResourcePoliciesRequest("velit", "voluptatum", "neque") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksRemoveResourcePoliciesRequest = new RegionDisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("totam"),
                        add("libero"),
                        add("dolore"),
                    }};
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "veniam";
                key = "ad";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "tenetur";
                requestId = "culpa";
                uploadType = "repudiandae";
                uploadProtocol = "assumenda";
                userIp = "recusandae";
            }};            

            ComputeRegionDisksRemoveResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksRemoveResourcePolicies(req, new ComputeRegionDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksRemoveResourcePoliciesSecurityOption1("qui", "consectetur") {{
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

            ComputeRegionDisksResizeRequest req = new ComputeRegionDisksResizeRequest("ipsum", "reiciendis", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                regionDisksResizeRequest = new RegionDisksResizeRequest() {{
                    sizeGb = "nam";
                }};;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "aut";
                fields = "quidem";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "sequi";
                requestId = "debitis";
                uploadType = "culpa";
                uploadProtocol = "tempore";
                userIp = "ea";
            }};            

            ComputeRegionDisksResizeResponse res = sdk.regionDisks.computeRegionDisksResize(req, new ComputeRegionDisksResizeSecurity() {{
                option1 = new ComputeRegionDisksResizeSecurityOption1("molestiae", "vero") {{
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

            ComputeRegionDisksSetIamPolicyRequest req = new ComputeRegionDisksSetIamPolicyRequest("ipsam", "modi", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "maxime";
                            condition = new Expr() {{
                                description = "aliquam";
                                expression = "cumque";
                                location = "fugit";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("iste"),
                            }};
                            role = "dolor";
                        }}),
                        add(new Binding() {{
                            bindingId = "ex";
                            condition = new Expr() {{
                                description = "fugiat";
                                expression = "iste";
                                location = "doloribus";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("tempore"),
                            }};
                            role = "dolorum";
                        }}),
                        add(new Binding() {{
                            bindingId = "labore";
                            condition = new Expr() {{
                                description = "dolores";
                                expression = "possimus";
                                location = "ad";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("id"),
                                add("nisi"),
                                add("cum"),
                            }};
                            role = "officia";
                        }}),
                        add(new Binding() {{
                            bindingId = "impedit";
                            condition = new Expr() {{
                                description = "velit";
                                expression = "recusandae";
                                location = "illum";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("blanditiis"),
                                add("in"),
                                add("eveniet"),
                            }};
                            role = "tenetur";
                        }}),
                    }};
                    etag = "veniam";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("odit"),
                                            add("ab"),
                                            add("atque"),
                                            add("ducimus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("excepturi"),
                                            add("doloribus"),
                                            add("neque"),
                                            add("porro"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsam"),
                                            add("recusandae"),
                                            add("modi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("vitae"),
                                }};
                                service = "nobis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                            add("sit"),
                                            add("repellat"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quidem"),
                                    add("quasi"),
                                    add("laborum"),
                                }};
                                service = "inventore";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "minima";
                                condition = new Expr() {{
                                    description = "architecto";
                                    expression = "velit";
                                    location = "ipsum";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("minima"),
                                    add("accusantium"),
                                    add("nisi"),
                                    add("placeat"),
                                }};
                                role = "ullam";
                            }}),
                            add(new Binding() {{
                                bindingId = "ad";
                                condition = new Expr() {{
                                    description = "veritatis";
                                    expression = "veniam";
                                    location = "aperiam";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("sint"),
                                }};
                                role = "quibusdam";
                            }}),
                            add(new Binding() {{
                                bindingId = "ex";
                                condition = new Expr() {{
                                    description = "voluptas";
                                    expression = "provident";
                                    location = "accusantium";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ullam"),
                                    add("doloremque"),
                                    add("atque"),
                                }};
                                role = "impedit";
                            }}),
                        }};
                        etag = "eum";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "minus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("quas"),
                                            add("accusamus"),
                                            add("odit"),
                                            add("quam"),
                                        }};
                                    }}),
                                }};
                                description = "accusamus";
                                ins = new String[]{{
                                    add("minus"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gilbert Dibbert";
                                                    value = "tempora";
                                                }}),
                                            }};
                                            field = "itaque";
                                            metric = "minus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Noah Corwin";
                                                    value = "cupiditate";
                                                }}),
                                            }};
                                            field = "quasi";
                                            metric = "quisquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
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
                                                    name = "Marie Wolff";
                                                    value = "quaerat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cindy Quitzon";
                                                    value = "vero";
                                                }}),
                                            }};
                                            field = "libero";
                                            metric = "necessitatibus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("neque"),
                                    add("soluta"),
                                    add("consequuntur"),
                                }};
                                permissions = new String[]{{
                                    add("voluptate"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "libero";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("sed"),
                                            add("vitae"),
                                            add("nulla"),
                                            add("pariatur"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "repellat";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quae"),
                                            add("ratione"),
                                            add("sit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "voluptas";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("saepe"),
                                            add("blanditiis"),
                                            add("doloribus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.NO_ATTR;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "autem";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quia"),
                                            add("cum"),
                                            add("necessitatibus"),
                                            add("veniam"),
                                        }};
                                    }}),
                                }};
                                description = "maiores";
                                ins = new String[]{{
                                    add("corporis"),
                                    add("sapiente"),
                                    add("dolorem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Meghan Reynolds";
                                                    value = "odit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Pearl Gutmann";
                                                    value = "ut";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Patsy DuBuque";
                                                    value = "labore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marion Strosin";
                                                    value = "officiis";
                                                }}),
                                            }};
                                            field = "itaque";
                                            metric = "provident";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Antonio Grimes";
                                                    value = "quae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Spencer Barton";
                                                    value = "quis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jon Hilll";
                                                    value = "nesciunt";
                                                }}),
                                            }};
                                            field = "voluptatibus";
                                            metric = "illum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sadie Reinger";
                                                    value = "quaerat";
                                                }}),
                                            }};
                                            field = "assumenda";
                                            metric = "impedit";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Stephanie Ziemann DVM";
                                                    value = "animi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Erica Veum";
                                                    value = "animi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brad Dibbert";
                                                    value = "autem";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Janie Bruen";
                                                    value = "quibusdam";
                                                }}),
                                            }};
                                            field = "tenetur";
                                            metric = "tempore";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("optio"),
                                    add("illum"),
                                    add("consequuntur"),
                                }};
                                permissions = new String[]{{
                                    add("corporis"),
                                    add("dolorem"),
                                    add("aliquam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "illo";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("veritatis"),
                                            add("nam"),
                                            add("doloribus"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "eum";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("culpa"),
                                            add("tempora"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "blanditiis";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("laboriosam"),
                                            add("laborum"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "ducimus";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quaerat"),
                                            add("illo"),
                                        }};
                                    }}),
                                }};
                                description = "beatae";
                                ins = new String[]{{
                                    add("voluptatibus"),
                                    add("est"),
                                    add("quod"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Lillie Senger";
                                                    value = "dolores";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ernest Casper";
                                                    value = "libero";
                                                }}),
                                            }};
                                            field = "velit";
                                            metric = "dolorum";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Diana Walker";
                                                    value = "unde";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jody Rice";
                                                    value = "aliquam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amanda Olson";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lee O'Connell";
                                                    value = "sapiente";
                                                }}),
                                            }};
                                            field = "pariatur";
                                            metric = "commodi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lori King";
                                                    value = "tenetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Genevieve Bauch";
                                                    value = "porro";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Deborah Sporer";
                                                    value = "nobis";
                                                }}),
                                            }};
                                            field = "deserunt";
                                            metric = "esse";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Nadine Parker";
                                                    value = "blanditiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Lela Torp MD";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jeremy Okuneva";
                                                    value = "vitae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Arthur Hyatt III";
                                                    value = "odio";
                                                }}),
                                            }};
                                            field = "odit";
                                            metric = "expedita";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("rem"),
                                    add("blanditiis"),
                                    add("maiores"),
                                }};
                                permissions = new String[]{{
                                    add("perferendis"),
                                    add("illum"),
                                    add("laborum"),
                                    add("facere"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "maiores";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("ab"),
                                            add("veniam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "quam";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("debitis"),
                                        }};
                                    }}),
                                }};
                                description = "reprehenderit";
                                ins = new String[]{{
                                    add("dolor"),
                                    add("illo"),
                                    add("quidem"),
                                    add("aut"),
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
                                                    name = "Allison Gorczany";
                                                    value = "impedit";
                                                }}),
                                            }};
                                            field = "commodi";
                                            metric = "voluptas";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Antonia Herman Sr.";
                                                    value = "error";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darnell Hagenes";
                                                    value = "a";
                                                }}),
                                            }};
                                            field = "magni";
                                            metric = "sint";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mrs. Bernard McGlynn";
                                                    value = "qui";
                                                }}),
                                            }};
                                            field = "quam";
                                            metric = "rerum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("molestiae"),
                                }};
                                permissions = new String[]{{
                                    add("veniam"),
                                    add("nisi"),
                                }};
                            }}),
                        }};
                        version = 979356;
                    }};;
                }};;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "facere";
                key = "doloremque";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "accusamus";
                uploadProtocol = "recusandae";
                userIp = "temporibus";
            }};            

            ComputeRegionDisksSetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksSetIamPolicy(req, new ComputeRegionDisksSetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksSetIamPolicySecurityOption1("nesciunt", "eveniet") {{
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

            ComputeRegionDisksSetLabelsRequest req = new ComputeRegionDisksSetLabelsRequest("nostrum", "doloremque", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "ratione";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vero", "fugiat");
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "aliquam";
                key = "sequi";
                oauthToken = "quia";
                prettyPrint = false;
                quotaUser = "ipsam";
                requestId = "unde";
                uploadType = "illo";
                uploadProtocol = "voluptatem";
                userIp = "consequuntur";
            }};            

            ComputeRegionDisksSetLabelsResponse res = sdk.regionDisks.computeRegionDisksSetLabels(req, new ComputeRegionDisksSetLabelsSecurity() {{
                option1 = new ComputeRegionDisksSetLabelsSecurityOption1("minus", "ab") {{
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

            ComputeRegionDisksStartAsyncReplicationRequest req = new ComputeRegionDisksStartAsyncReplicationRequest("ad", "nemo", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksStartAsyncReplicationRequest = new RegionDisksStartAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "veritatis";
                }};;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "expedita";
                key = "recusandae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "provident";
                requestId = "vero";
                uploadType = "dolorum";
                uploadProtocol = "esse";
                userIp = "veniam";
            }};            

            ComputeRegionDisksStartAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStartAsyncReplication(req, new ComputeRegionDisksStartAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStartAsyncReplicationSecurityOption1("enim", "aliquam") {{
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
import org.openapis.openapi.models.shared.RegionDisksStopAsyncReplicationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionDisksStopAsyncReplicationRequest req = new ComputeRegionDisksStopAsyncReplicationRequest("molestias", "voluptas", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksStopAsyncReplicationRequest = new RegionDisksStopAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "pariatur";
                }};;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "perferendis";
                key = "occaecati";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "quod";
                requestId = "atque";
                uploadType = "minus";
                uploadProtocol = "asperiores";
                userIp = "laborum";
            }};            

            ComputeRegionDisksStopAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStopAsyncReplication(req, new ComputeRegionDisksStopAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStopAsyncReplicationSecurityOption1("repellendus", "laborum") {{
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

            ComputeRegionDisksStopGroupAsyncReplicationRequest req = new ComputeRegionDisksStopGroupAsyncReplicationRequest("deleniti", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource() {{
                    resourcePolicy = "dicta";
                }};;
                accessToken = "eaque";
                alt = AltEnum.MEDIA;
                callback = "atque";
                fields = "quam";
                key = "ex";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "dolores";
                uploadType = "odit";
                uploadProtocol = "est";
                userIp = "perferendis";
            }};            

            ComputeRegionDisksStopGroupAsyncReplicationResponse res = sdk.regionDisks.computeRegionDisksStopGroupAsyncReplication(req, new ComputeRegionDisksStopGroupAsyncReplicationSecurity() {{
                option1 = new ComputeRegionDisksStopGroupAsyncReplicationSecurityOption1("ea", "rem") {{
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

            ComputeRegionDisksTestIamPermissionsRequest req = new ComputeRegionDisksTestIamPermissionsRequest("voluptas", "doloremque", "rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("similique"),
                    }};
                }};;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "voluptatum";
                fields = "eaque";
                key = "sequi";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "quibusdam";
                uploadProtocol = "ullam";
                userIp = "asperiores";
            }};            

            ComputeRegionDisksTestIamPermissionsResponse res = sdk.regionDisks.computeRegionDisksTestIamPermissions(req, new ComputeRegionDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionDisksTestIamPermissionsSecurityOption1("natus", "inventore") {{
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

            ComputeRegionDisksUpdateRequest req = new ComputeRegionDisksUpdateRequest("omnis", "veritatis", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "doloribus";
                        consistencyGroupPolicyId = "sed";
                        disk = "ratione";
                        diskId = "facilis";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("corrupti", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "velit";
                                consistencyGroupPolicyId = "delectus";
                                disk = "in";
                                diskId = "eveniet";
                            }};
                        }});
                    }};
                    creationTimestamp = "tempore";
                    description = "nisi";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "rerum";
                        kmsKeyServiceAccount = "labore";
                        rawKey = "est";
                        rsaEncryptedKey = "labore";
                        sha256 = "hic";
                    }};;
                    enableConfidentialCompute = false;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.TDX_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                    }};
                    id = "tenetur";
                    interface_ = DiskInterfaceEnum.NVME;
                    kind = "voluptatum";
                    labelFingerprint = "placeat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "aliquid");
                        put("similique", "esse");
                        put("quasi", "iure");
                    }};
                    lastAttachTimestamp = "sed";
                    lastDetachTimestamp = "error";
                    licenseCodes = new String[]{{
                        add("exercitationem"),
                        add("recusandae"),
                    }};
                    licenses = new String[]{{
                        add("ratione"),
                        add("labore"),
                        add("necessitatibus"),
                        add("earum"),
                    }};
                    locationHint = "doloribus";
                    locked = false;
                    multiWriter = false;
                    name = "Dorothy Kassulke";
                    options = "non";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("nesciunt", "doloremque");
                            put("rerum", "eius");
                            put("molestias", "eveniet");
                            put("dolores", "dolores");
                        }};
                    }};;
                    physicalBlockSizeBytes = "iusto";
                    provisionedIops = "officiis";
                    provisionedThroughput = "molestiae";
                    region = "voluptates";
                    replicaZones = new String[]{{
                        add("laborum"),
                    }};
                    resourcePolicies = new String[]{{
                        add("placeat"),
                        add("sunt"),
                        add("magni"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("iure", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "officia";
                    selfLinkWithId = "aliquam";
                    sizeGb = "eligendi";
                    sourceConsistencyGroupPolicy = "vel";
                    sourceConsistencyGroupPolicyId = "repellat";
                    sourceDisk = "labore";
                    sourceDiskId = "odio";
                    sourceImage = "animi";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "doloribus";
                        kmsKeyServiceAccount = "ipsa";
                        rawKey = "provident";
                        rsaEncryptedKey = "harum";
                        sha256 = "laborum";
                    }};;
                    sourceImageId = "pariatur";
                    sourceInstantSnapshot = "ullam";
                    sourceInstantSnapshotId = "asperiores";
                    sourceSnapshot = "minima";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "cum";
                        kmsKeyServiceAccount = "natus";
                        rawKey = "dolor";
                        rsaEncryptedKey = "illum";
                        sha256 = "impedit";
                    }};;
                    sourceSnapshotId = "debitis";
                    sourceStorageObject = "impedit";
                    status = DiskStatusEnum.FAILED;
                    storagePool = "praesentium";
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "magnam";
                    userLicenses = new String[]{{
                        add("recusandae"),
                        add("eaque"),
                    }};
                    users = new String[]{{
                        add("a"),
                        add("sed"),
                        add("laudantium"),
                    }};
                    zone = "cum";
                }};;
                accessToken = "blanditiis";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "placeat";
                key = "dolores";
                oauthToken = "placeat";
                paths = new String[]{{
                    add("eum"),
                }};
                prettyPrint = false;
                quotaUser = "ipsa";
                requestId = "cupiditate";
                updateMask = "reprehenderit";
                uploadType = "suscipit";
                uploadProtocol = "incidunt";
                userIp = "dignissimos";
            }};            

            ComputeRegionDisksUpdateResponse res = sdk.regionDisks.computeRegionDisksUpdate(req, new ComputeRegionDisksUpdateSecurity() {{
                option1 = new ComputeRegionDisksUpdateSecurityOption1("hic", "et") {{
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
