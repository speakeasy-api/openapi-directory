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

            ComputeDisksAddResourcePoliciesRequest req = new ComputeDisksAddResourcePoliciesRequest("quia", "dicta", "vel") {{
                dollarXgafv = XgafvEnum.TWO;
                disksAddResourcePoliciesRequest = new DisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("ullam"),
                        add("architecto"),
                        add("accusantium"),
                        add("perferendis"),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "cumque";
                fields = "iure";
                key = "quibusdam";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "nemo";
                requestId = "recusandae";
                uploadType = "velit";
                uploadProtocol = "magnam";
                userIp = "dignissimos";
            }};            

            ComputeDisksAddResourcePoliciesResponse res = sdk.disks.computeDisksAddResourcePolicies(req, new ComputeDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeDisksAddResourcePoliciesSecurityOption1("laboriosam", "sed") {{
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

            ComputeDisksAggregatedListRequest req = new ComputeDisksAggregatedListRequest("odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "doloribus";
                fields = "facilis";
                filter = "quidem";
                includeAllScopes = false;
                key = "itaque";
                maxResults = 389548L;
                oauthToken = "unde";
                orderBy = "modi";
                pageToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "hic";
                returnPartialSuccess = false;
                uploadType = "cum";
                uploadProtocol = "aspernatur";
                userIp = "libero";
            }};            

            ComputeDisksAggregatedListResponse res = sdk.disks.computeDisksAggregatedList(req, new ComputeDisksAggregatedListSecurity() {{
                option1 = new ComputeDisksAggregatedListSecurityOption1("nam", "incidunt") {{
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

            ComputeDisksBulkInsertRequest req = new ComputeDisksBulkInsertRequest("recusandae", "quod") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkInsertDiskResource = new BulkInsertDiskResource() {{
                    sourceConsistencyGroupPolicy = "saepe";
                }};;
                accessToken = "autem";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "illum";
                key = "nemo";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "facilis";
                requestId = "non";
                uploadType = "mollitia";
                uploadProtocol = "assumenda";
                userIp = "recusandae";
            }};            

            ComputeDisksBulkInsertResponse res = sdk.disks.computeDisksBulkInsert(req, new ComputeDisksBulkInsertSecurity() {{
                option1 = new ComputeDisksBulkInsertSecurityOption1("distinctio", "pariatur") {{
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

            ComputeDisksCreateSnapshotRequest req = new ComputeDisksCreateSnapshotRequest("ad", "facere", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.X8664;
                    autoCreated = false;
                    chainName = "incidunt";
                    creationSizeBytes = "maxime";
                    creationTimestamp = "ipsam";
                    description = "alias";
                    diskSizeGb = "suscipit";
                    downloadBytes = "deserunt";
                    guestFlush = false;
                    id = "molestias";
                    kind = "laborum";
                    labelFingerprint = "est";
                    labels = new java.util.HashMap<String, String>() {{
                        put("labore", "quo");
                        put("perferendis", "fugit");
                        put("aliquid", "magnam");
                    }};
                    licenseCodes = new String[]{{
                        add("eligendi"),
                        add("hic"),
                    }};
                    licenses = new String[]{{
                        add("officiis"),
                        add("unde"),
                    }};
                    locationHint = "nulla";
                    name = "Shaun Gusikowski";
                    satisfiesPzs = false;
                    selfLink = "corrupti";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "fuga";
                        kmsKeyServiceAccount = "facere";
                        rawKey = "impedit";
                        rsaEncryptedKey = "quasi";
                        sha256 = "deserunt";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "laboriosam";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "doloremque";
                        kmsKeyServiceAccount = "voluptatem";
                        rawKey = "facere";
                        rsaEncryptedKey = "necessitatibus";
                        sha256 = "maxime";
                    }};;
                    sourceDiskId = "consequatur";
                    sourceSnapshotSchedulePolicy = "eaque";
                    sourceSnapshotSchedulePolicyId = "architecto";
                    status = SnapshotStatusEnum.READY;
                    storageBytes = "porro";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("magni"),
                    }};
                    userLicenses = new String[]{{
                        add("sed"),
                        add("necessitatibus"),
                        add("impedit"),
                        add("ipsa"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "laudantium";
                guestFlush = false;
                key = "maiores";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "asperiores";
                requestId = "rem";
                uploadType = "dicta";
                uploadProtocol = "suscipit";
                userIp = "earum";
            }};            

            ComputeDisksCreateSnapshotResponse res = sdk.disks.computeDisksCreateSnapshot(req, new ComputeDisksCreateSnapshotSecurity() {{
                option1 = new ComputeDisksCreateSnapshotSecurityOption1("doloribus", "velit") {{
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

            ComputeDisksDeleteRequest req = new ComputeDisksDeleteRequest("eius", "esse", "in") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "excepturi";
                key = "accusantium";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "beatae";
                uploadType = "incidunt";
                uploadProtocol = "dicta";
                userIp = "odit";
            }};            

            ComputeDisksDeleteResponse res = sdk.disks.computeDisksDelete(req, new ComputeDisksDeleteSecurity() {{
                option1 = new ComputeDisksDeleteSecurityOption1("corporis", "rerum") {{
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

            ComputeDisksGetRequest req = new ComputeDisksGetRequest("alias", "error", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "id";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "quas";
                key = "veritatis";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "similique";
                uploadProtocol = "incidunt";
                userIp = "quam";
            }};            

            ComputeDisksGetResponse res = sdk.disks.computeDisksGet(req, new ComputeDisksGetSecurity() {{
                option1 = new ComputeDisksGetSecurityOption1("magni", "deserunt") {{
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

            ComputeDisksGetIamPolicyRequest req = new ComputeDisksGetIamPolicyRequest("delectus", "omnis", "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maxime";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "aliquam";
                key = "excepturi";
                oauthToken = "maiores";
                optionsRequestedPolicyVersion = 512081L;
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
                userIp = "nemo";
            }};            

            ComputeDisksGetIamPolicyResponse res = sdk.disks.computeDisksGetIamPolicy(req, new ComputeDisksGetIamPolicySecurity() {{
                option1 = new ComputeDisksGetIamPolicySecurityOption1("ipsa", "quisquam") {{
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

            ComputeDisksInsertRequest req = new ComputeDisksInsertRequest("tenetur", "quas") {{
                dollarXgafv = XgafvEnum.ONE;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "asperiores";
                        consistencyGroupPolicyId = "a";
                        disk = "nobis";
                        diskId = "perspiciatis";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("dicta", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "minus";
                                consistencyGroupPolicyId = "commodi";
                                disk = "eveniet";
                                diskId = "porro";
                            }};
                        }});
                    }};
                    creationTimestamp = "tempore";
                    description = "quidem";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "modi";
                        kmsKeyServiceAccount = "voluptates";
                        rawKey = "fugit";
                        rsaEncryptedKey = "eius";
                        sha256 = "sequi";
                    }};;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.WINDOWS;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                    }};
                    id = "repellat";
                    interface_ = DiskInterfaceEnum.UNSPECIFIED;
                    kind = "animi";
                    labelFingerprint = "maiores";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "deserunt");
                        put("corporis", "velit");
                        put("officiis", "enim");
                        put("officia", "saepe");
                    }};
                    lastAttachTimestamp = "eum";
                    lastDetachTimestamp = "repudiandae";
                    licenseCodes = new String[]{{
                        add("officia"),
                    }};
                    licenses = new String[]{{
                        add("quasi"),
                        add("blanditiis"),
                        add("eius"),
                        add("quisquam"),
                    }};
                    locationHint = "eos";
                    locked = false;
                    multiWriter = false;
                    name = "Jeremiah Schimmel";
                    options = "reprehenderit";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("quos", "corrupti");
                            put("amet", "molestiae");
                            put("amet", "laborum");
                            put("modi", "perferendis");
                        }};
                    }};;
                    physicalBlockSizeBytes = "necessitatibus";
                    provisionedIops = "architecto";
                    provisionedThroughput = "molestias";
                    region = "dolore";
                    replicaZones = new String[]{{
                        add("maiores"),
                    }};
                    resourcePolicies = new String[]{{
                        add("odit"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPING;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("ipsam", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                            }});
                            put("exercitationem", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "nihil";
                    sizeGb = "ad";
                    sourceConsistencyGroupPolicy = "nisi";
                    sourceConsistencyGroupPolicyId = "tenetur";
                    sourceDisk = "quis";
                    sourceDiskId = "quibusdam";
                    sourceImage = "nemo";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "suscipit";
                        kmsKeyServiceAccount = "pariatur";
                        rawKey = "sit";
                        rsaEncryptedKey = "quidem";
                        sha256 = "repellendus";
                    }};;
                    sourceImageId = "perferendis";
                    sourceSnapshot = "id";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "sapiente";
                        kmsKeyServiceAccount = "sed";
                        rawKey = "possimus";
                        rsaEncryptedKey = "repellat";
                        sha256 = "repudiandae";
                    }};;
                    sourceSnapshotId = "architecto";
                    sourceStorageObject = "adipisci";
                    status = DiskStatusEnum.RESTORING;
                    storageType = DiskStorageTypeEnum.SSD;
                    type = "dolore";
                    userLicenses = new String[]{{
                        add("iure"),
                        add("explicabo"),
                        add("minus"),
                        add("soluta"),
                    }};
                    users = new String[]{{
                        add("velit"),
                        add("earum"),
                        add("praesentium"),
                    }};
                    zone = "error";
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "accusamus";
                key = "harum";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "doloremque";
                requestId = "expedita";
                sourceImage = "corrupti";
                uploadType = "eaque";
                uploadProtocol = "deserunt";
                userIp = "aliquid";
            }};            

            ComputeDisksInsertResponse res = sdk.disks.computeDisksInsert(req, new ComputeDisksInsertSecurity() {{
                option1 = new ComputeDisksInsertSecurityOption1("excepturi", "magni") {{
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

            ComputeDisksListRequest req = new ComputeDisksListRequest("tempora", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "optio";
                filter = "delectus";
                key = "minus";
                maxResults = 774748L;
                oauthToken = "quos";
                orderBy = "asperiores";
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iste";
                returnPartialSuccess = false;
                uploadType = "corporis";
                uploadProtocol = "accusantium";
                userIp = "illo";
            }};            

            ComputeDisksListResponse res = sdk.disks.computeDisksList(req, new ComputeDisksListSecurity() {{
                option1 = new ComputeDisksListSecurityOption1("aut", "doloribus") {{
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

            ComputeDisksRemoveResourcePoliciesRequest req = new ComputeDisksRemoveResourcePoliciesRequest("nostrum", "at", "possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                disksRemoveResourcePoliciesRequest = new DisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("vel"),
                        add("sapiente"),
                        add("mollitia"),
                        add("quae"),
                    }};
                }};;
                accessToken = "quos";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "voluptates";
                key = "ad";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "quisquam";
                requestId = "quas";
                uploadType = "consequuntur";
                uploadProtocol = "maiores";
                userIp = "inventore";
            }};            

            ComputeDisksRemoveResourcePoliciesResponse res = sdk.disks.computeDisksRemoveResourcePolicies(req, new ComputeDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeDisksRemoveResourcePoliciesSecurityOption1("aliquid", "laudantium") {{
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

            ComputeDisksResizeRequest req = new ComputeDisksResizeRequest("est", "dolor", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                disksResizeRequest = new DisksResizeRequest() {{
                    sizeGb = "cumque";
                }};;
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "ducimus";
                fields = "adipisci";
                key = "recusandae";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "numquam";
                uploadType = "sequi";
                uploadProtocol = "voluptatum";
                userIp = "sit";
            }};            

            ComputeDisksResizeResponse res = sdk.disks.computeDisksResize(req, new ComputeDisksResizeSecurity() {{
                option1 = new ComputeDisksResizeSecurityOption1("rerum", "veritatis") {{
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

            ComputeDisksSetIamPolicyRequest req = new ComputeDisksSetIamPolicyRequest("tenetur", "autem", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "deserunt";
                            condition = new Expr() {{
                                description = "magni";
                                expression = "nihil";
                                location = "voluptas";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("alias"),
                                add("fuga"),
                            }};
                            role = "aut";
                        }}),
                        add(new Binding() {{
                            bindingId = "dolore";
                            condition = new Expr() {{
                                description = "maxime";
                                expression = "aliquam";
                                location = "iste";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("placeat"),
                                add("voluptas"),
                                add("occaecati"),
                                add("unde"),
                            }};
                            role = "illo";
                        }}),
                        add(new Binding() {{
                            bindingId = "nihil";
                            condition = new Expr() {{
                                description = "inventore";
                                expression = "libero";
                                location = "ipsam";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("dicta"),
                                add("harum"),
                                add("facere"),
                                add("facilis"),
                            }};
                            role = "beatae";
                        }}),
                        add(new Binding() {{
                            bindingId = "cumque";
                            condition = new Expr() {{
                                description = "delectus";
                                expression = "labore";
                                location = "expedita";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("atque"),
                                add("officiis"),
                                add("cum"),
                            }};
                            role = "pariatur";
                        }}),
                    }};
                    etag = "sapiente";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minus"),
                                            add("porro"),
                                            add("id"),
                                            add("excepturi"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quo"),
                                            add("esse"),
                                            add("hic"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("soluta"),
                                }};
                                service = "fugit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("recusandae"),
                                            add("veritatis"),
                                            add("aut"),
                                            add("laudantium"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptates"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rerum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("reprehenderit"),
                                    add("voluptatum"),
                                }};
                                service = "blanditiis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rerum"),
                                            add("deserunt"),
                                            add("atque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("architecto"),
                                            add("est"),
                                            add("enim"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("quae"),
                                }};
                                service = "quas";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("labore"),
                                            add("sapiente"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("officia"),
                                            add("natus"),
                                            add("cumque"),
                                            add("natus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quia"),
                                            add("officiis"),
                                            add("mollitia"),
                                            add("cumque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eum"),
                                            add("nemo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("sit"),
                                }};
                                service = "odio";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "asperiores";
                                condition = new Expr() {{
                                    description = "recusandae";
                                    expression = "voluptates";
                                    location = "praesentium";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("sit"),
                                }};
                                role = "aliquid";
                            }}),
                            add(new Binding() {{
                                bindingId = "necessitatibus";
                                condition = new Expr() {{
                                    description = "sed";
                                    expression = "deleniti";
                                    location = "sunt";
                                    title = "Mrs.";
                                }};
                                members = new String[]{{
                                    add("laborum"),
                                    add("aliquam"),
                                    add("deserunt"),
                                    add("modi"),
                                }};
                                role = "sunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "impedit";
                                condition = new Expr() {{
                                    description = "eius";
                                    expression = "voluptatum";
                                    location = "ipsa";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("repellat"),
                                }};
                                role = "aspernatur";
                            }}),
                            add(new Binding() {{
                                bindingId = "inventore";
                                condition = new Expr() {{
                                    description = "sequi";
                                    expression = "fugit";
                                    location = "fuga";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("dolorem"),
                                }};
                                role = "architecto";
                            }}),
                        }};
                        etag = "aperiam";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "delectus";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("nobis"),
                                            add("ex"),
                                            add("repellat"),
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "hic";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("sed"),
                                            add("beatae"),
                                        }};
                                    }}),
                                }};
                                description = "similique";
                                ins = new String[]{{
                                    add("animi"),
                                    add("dolore"),
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
                                                    name = "Erik Upton";
                                                    value = "officiis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Susie Ward";
                                                    value = "explicabo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Gilbert Hayes";
                                                    value = "ut";
                                                }}),
                                            }};
                                            field = "quaerat";
                                            metric = "architecto";
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
                                                    name = "Nick Blanda";
                                                    value = "temporibus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tyrone Halvorson DVM";
                                                    value = "laudantium";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amy Mohr";
                                                    value = "tenetur";
                                                }}),
                                            }};
                                            field = "deleniti";
                                            metric = "modi";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Jimmy Turcotte";
                                                    value = "facere";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rodolfo Gutmann";
                                                    value = "ad";
                                                }}),
                                            }};
                                            field = "reiciendis";
                                            metric = "sequi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Joseph Hills";
                                                    value = "reprehenderit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Kelley Bashirian";
                                                    value = "molestiae";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Myrtle Cremin";
                                                    value = "expedita";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Kari Dooley";
                                                    value = "esse";
                                                }}),
                                            }};
                                            field = "accusantium";
                                            metric = "distinctio";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("est"),
                                    add("aliquam"),
                                }};
                                permissions = new String[]{{
                                    add("culpa"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("quod"),
                                }};
                            }}),
                        }};
                        version = 977583;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "laborum";
                key = "voluptas";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "recusandae";
                uploadProtocol = "corporis";
                userIp = "non";
            }};            

            ComputeDisksSetIamPolicyResponse res = sdk.disks.computeDisksSetIamPolicy(req, new ComputeDisksSetIamPolicySecurity() {{
                option1 = new ComputeDisksSetIamPolicySecurityOption1("necessitatibus", "distinctio") {{
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

            ComputeDisksSetLabelsRequest req = new ComputeDisksSetLabelsRequest("maiores", "laboriosam", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetLabelsRequest = new ZoneSetLabelsRequest() {{
                    labelFingerprint = "sequi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("vitae", "voluptatibus");
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "rerum";
                key = "in";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "ratione";
                uploadType = "dolor";
                uploadProtocol = "nisi";
                userIp = "dignissimos";
            }};            

            ComputeDisksSetLabelsResponse res = sdk.disks.computeDisksSetLabels(req, new ComputeDisksSetLabelsSecurity() {{
                option1 = new ComputeDisksSetLabelsSecurityOption1("reiciendis", "itaque") {{
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

            ComputeDisksStartAsyncReplicationRequest req = new ComputeDisksStartAsyncReplicationRequest("vitae", "est", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStartAsyncReplicationRequest = new DisksStartAsyncReplicationRequest() {{
                    asyncSecondaryDisk = "minus";
                }};;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "odio";
                key = "provident";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "similique";
                uploadType = "nesciunt";
                uploadProtocol = "provident";
                userIp = "ex";
            }};            

            ComputeDisksStartAsyncReplicationResponse res = sdk.disks.computeDisksStartAsyncReplication(req, new ComputeDisksStartAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStartAsyncReplicationSecurityOption1("repellendus", "unde") {{
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksStopAsyncReplicationRequest req = new ComputeDisksStopAsyncReplicationRequest("alias", "impedit", "sequi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "quisquam";
                key = "sunt";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "maiores";
                uploadType = "distinctio";
                uploadProtocol = "mollitia";
                userIp = "impedit";
            }};            

            ComputeDisksStopAsyncReplicationResponse res = sdk.disks.computeDisksStopAsyncReplication(req, new ComputeDisksStopAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStopAsyncReplicationSecurityOption1("accusamus", "et") {{
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

            ComputeDisksStopGroupAsyncReplicationRequest req = new ComputeDisksStopGroupAsyncReplicationRequest("quas", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                disksStopGroupAsyncReplicationResource = new DisksStopGroupAsyncReplicationResource() {{
                    resourcePolicy = "dicta";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "repudiandae";
                key = "sed";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "impedit";
                uploadType = "vel";
                uploadProtocol = "eligendi";
                userIp = "recusandae";
            }};            

            ComputeDisksStopGroupAsyncReplicationResponse res = sdk.disks.computeDisksStopGroupAsyncReplication(req, new ComputeDisksStopGroupAsyncReplicationSecurity() {{
                option1 = new ComputeDisksStopGroupAsyncReplicationSecurityOption1("ex", "beatae") {{
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

            ComputeDisksTestIamPermissionsRequest req = new ComputeDisksTestIamPermissionsRequest("veritatis", "maiores", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("illo"),
                        add("quo"),
                        add("dignissimos"),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.PROTO;
                callback = "possimus";
                fields = "cum";
                key = "suscipit";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "quod";
                uploadProtocol = "nihil";
                userIp = "quaerat";
            }};            

            ComputeDisksTestIamPermissionsResponse res = sdk.disks.computeDisksTestIamPermissions(req, new ComputeDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeDisksTestIamPermissionsSecurityOption1("ipsum", "ducimus") {{
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

            ComputeDisksUpdateRequest req = new ComputeDisksUpdateRequest("laudantium", "rerum", "deserunt") {{
                dollarXgafv = XgafvEnum.ONE;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "sequi";
                        consistencyGroupPolicyId = "beatae";
                        disk = "iusto";
                        diskId = "esse";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("odio", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "nulla";
                                consistencyGroupPolicyId = "impedit";
                                disk = "cupiditate";
                                diskId = "illo";
                            }};
                        }});
                        put("exercitationem", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "laborum";
                                consistencyGroupPolicyId = "illum";
                                disk = "fugit";
                                diskId = "maxime";
                            }};
                        }});
                    }};
                    creationTimestamp = "dolorum";
                    description = "repellat";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nostrum";
                        kmsKeyServiceAccount = "illum";
                        rawKey = "quibusdam";
                        rsaEncryptedKey = "commodi";
                        sha256 = "esse";
                    }};;
                    eraseWindowsVssSignature = false;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                    }};
                    id = "temporibus";
                    interface_ = DiskInterfaceEnum.UNSPECIFIED;
                    kind = "ipsa";
                    labelFingerprint = "maiores";
                    labels = new java.util.HashMap<String, String>() {{
                        put("culpa", "repudiandae");
                        put("aspernatur", "sapiente");
                    }};
                    lastAttachTimestamp = "neque";
                    lastDetachTimestamp = "officia";
                    licenseCodes = new String[]{{
                        add("harum"),
                        add("ducimus"),
                    }};
                    licenses = new String[]{{
                        add("perferendis"),
                    }};
                    locationHint = "laudantium";
                    locked = false;
                    multiWriter = false;
                    name = "Naomi Krajcik";
                    options = "ab";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("amet", "sapiente");
                            put("corporis", "est");
                        }};
                    }};;
                    physicalBlockSizeBytes = "iure";
                    provisionedIops = "quisquam";
                    provisionedThroughput = "provident";
                    region = "laudantium";
                    replicaZones = new String[]{{
                        add("nemo"),
                        add("enim"),
                        add("ipsam"),
                    }};
                    resourcePolicies = new String[]{{
                        add("tempora"),
                        add("perferendis"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("fugiat", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "doloremque";
                    sizeGb = "cum";
                    sourceConsistencyGroupPolicy = "nobis";
                    sourceConsistencyGroupPolicyId = "similique";
                    sourceDisk = "porro";
                    sourceDiskId = "impedit";
                    sourceImage = "nisi";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "cumque";
                        kmsKeyServiceAccount = "soluta";
                        rawKey = "fugiat";
                        rsaEncryptedKey = "laboriosam";
                        sha256 = "nam";
                    }};;
                    sourceImageId = "enim";
                    sourceSnapshot = "maiores";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "consectetur";
                        kmsKeyServiceAccount = "necessitatibus";
                        rawKey = "maxime";
                        rsaEncryptedKey = "cupiditate";
                        sha256 = "voluptatem";
                    }};;
                    sourceSnapshotId = "provident";
                    sourceStorageObject = "adipisci";
                    status = DiskStatusEnum.CREATING;
                    storageType = DiskStorageTypeEnum.HDD;
                    type = "repellat";
                    userLicenses = new String[]{{
                        add("explicabo"),
                        add("vel"),
                        add("cum"),
                    }};
                    users = new String[]{{
                        add("possimus"),
                        add("fugit"),
                        add("ipsam"),
                    }};
                    zone = "nostrum";
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "error";
                key = "nobis";
                oauthToken = "tempora";
                paths = new String[]{{
                    add("eius"),
                    add("expedita"),
                }};
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "voluptates";
                updateMask = "possimus";
                uploadType = "fugit";
                uploadProtocol = "voluptatem";
                userIp = "repudiandae";
            }};            

            ComputeDisksUpdateResponse res = sdk.disks.computeDisksUpdate(req, new ComputeDisksUpdateSecurity() {{
                option1 = new ComputeDisksUpdateSecurityOption1("corporis", "ea") {{
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
