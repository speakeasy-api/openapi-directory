# disks

### Available Operations

* [computeDisksAddResourcePolicies](#computedisksaddresourcepolicies) - Adds existing resource policies to a disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
* [computeDisksAggregatedList](#computedisksaggregatedlist) - Retrieves an aggregated list of persistent disks.
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

            ComputeDisksAddResourcePoliciesRequest req = new ComputeDisksAddResourcePoliciesRequest("rem", "maiores", "accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                disksAddResourcePoliciesRequest = new DisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("neque"),
                        add("facere"),
                        add("aliquam"),
                        add("quos"),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "est";
                fields = "delectus";
                key = "velit";
                oauthToken = "vitae";
                prettyPrint = false;
                quotaUser = "nesciunt";
                requestId = "similique";
                uploadType = "illo";
                uploadProtocol = "repellat";
                userIp = "nemo";
            }};            

            ComputeDisksAddResourcePoliciesResponse res = sdk.disks.computeDisksAddResourcePolicies(req, new ComputeDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeDisksAddResourcePoliciesSecurityOption1("doloribus", "possimus") {{
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

            ComputeDisksAggregatedListRequest req = new ComputeDisksAggregatedListRequest("unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "optio";
                filter = "alias";
                includeAllScopes = false;
                key = "quidem";
                maxResults = 198911L;
                oauthToken = "commodi";
                orderBy = "sapiente";
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "veniam";
                returnPartialSuccess = false;
                uploadType = "debitis";
                uploadProtocol = "officia";
                userIp = "sint";
            }};            

            ComputeDisksAggregatedListResponse res = sdk.disks.computeDisksAggregatedList(req, new ComputeDisksAggregatedListSecurity() {{
                option1 = new ComputeDisksAggregatedListSecurityOption1("ut", "numquam") {{
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

            ComputeDisksCreateSnapshotRequest req = new ComputeDisksCreateSnapshotRequest("tenetur", "adipisci", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                    autoCreated = false;
                    chainName = "ex";
                    creationSizeBytes = "minus";
                    creationTimestamp = "ab";
                    description = "beatae";
                    diskSizeGb = "hic";
                    downloadBytes = "nisi";
                    id = "quisquam";
                    kind = "dolor";
                    labelFingerprint = "ducimus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("minima", "architecto");
                        put("qui", "aliquid");
                        put("magni", "incidunt");
                    }};
                    licenseCodes = new String[]{{
                        add("praesentium"),
                    }};
                    licenses = new String[]{{
                        add("exercitationem"),
                    }};
                    locationHint = "expedita";
                    name = "Rodolfo Bailey";
                    satisfiesPzs = false;
                    selfLink = "consequuntur";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "amet";
                        kmsKeyServiceAccount = "deserunt";
                        rawKey = "modi";
                        rsaEncryptedKey = "veniam";
                        sha256 = "quod";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.STANDARD;
                    sourceDisk = "a";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quisquam";
                        kmsKeyServiceAccount = "enim";
                        rawKey = "doloribus";
                        rsaEncryptedKey = "assumenda";
                        sha256 = "officiis";
                    }};;
                    sourceDiskId = "architecto";
                    sourceSnapshotSchedulePolicy = "alias";
                    sourceSnapshotSchedulePolicyId = "culpa";
                    status = SnapshotStatusEnum.CREATING;
                    storageBytes = "nobis";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("dicta"),
                    }};
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "ullam";
                guestFlush = false;
                key = "architecto";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "perferendis";
                requestId = "veritatis";
                uploadType = "provident";
                uploadProtocol = "cumque";
                userIp = "iure";
            }};            

            ComputeDisksCreateSnapshotResponse res = sdk.disks.computeDisksCreateSnapshot(req, new ComputeDisksCreateSnapshotSecurity() {{
                option1 = new ComputeDisksCreateSnapshotSecurityOption1("quibusdam", "quod") {{
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

            ComputeDisksDeleteRequest req = new ComputeDisksDeleteRequest("nemo", "recusandae", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "odio";
                key = "natus";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "cum";
                requestId = "doloribus";
                uploadType = "facilis";
                uploadProtocol = "quidem";
                userIp = "itaque";
            }};            

            ComputeDisksDeleteResponse res = sdk.disks.computeDisksDelete(req, new ComputeDisksDeleteSecurity() {{
                option1 = new ComputeDisksDeleteSecurityOption1("laboriosam", "unde") {{
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

            ComputeDisksGetRequest req = new ComputeDisksGetRequest("modi", "perspiciatis", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "nam";
                fields = "incidunt";
                key = "recusandae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "saepe";
                uploadProtocol = "autem";
                userIp = "quo";
            }};            

            ComputeDisksGetResponse res = sdk.disks.computeDisksGet(req, new ComputeDisksGetSecurity() {{
                option1 = new ComputeDisksGetSecurityOption1("nesciunt", "illum") {{
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

            ComputeDisksGetIamPolicyRequest req = new ComputeDisksGetIamPolicyRequest("nemo", "illum", "facilis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "recusandae";
                fields = "distinctio";
                key = "pariatur";
                oauthToken = "ad";
                optionsRequestedPolicyVersion = 816151L;
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "eveniet";
                uploadProtocol = "laborum";
                userIp = "incidunt";
            }};            

            ComputeDisksGetIamPolicyResponse res = sdk.disks.computeDisksGetIamPolicy(req, new ComputeDisksGetIamPolicySecurity() {{
                option1 = new ComputeDisksGetIamPolicySecurityOption1("maxime", "ipsam") {{
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
import org.openapis.openapi.models.shared.DiskParams;
import org.openapis.openapi.models.shared.DiskResourceStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatusStateEnum;
import org.openapis.openapi.models.shared.DiskStatusEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksInsertRequest req = new ComputeDisksInsertRequest("alias", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "laborum";
                        consistencyGroupPolicyId = "est";
                        disk = "occaecati";
                        diskId = "labore";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("perferendis", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "fugit";
                                consistencyGroupPolicyId = "aliquid";
                                disk = "magnam";
                                diskId = "quaerat";
                            }};
                        }});
                        put("eligendi", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "hic";
                                consistencyGroupPolicyId = "nostrum";
                                disk = "officiis";
                                diskId = "unde";
                            }};
                        }});
                        put("nulla", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "error";
                                consistencyGroupPolicyId = "mollitia";
                                disk = "magnam";
                                diskId = "nostrum";
                            }};
                        }});
                        put("esse", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "corrupti";
                                consistencyGroupPolicyId = "fuga";
                                disk = "facere";
                                diskId = "impedit";
                            }};
                        }});
                    }};
                    creationTimestamp = "quasi";
                    description = "deserunt";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quod";
                        kmsKeyServiceAccount = "laboriosam";
                        rawKey = "doloremque";
                        rsaEncryptedKey = "voluptatem";
                        sha256 = "facere";
                    }};;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.VIRTIO_SCSI_MULTIQUEUE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                    }};
                    id = "similique";
                    kind = "porro";
                    labelFingerprint = "blanditiis";
                    labels = new java.util.HashMap<String, String>() {{
                        put("magni", "officiis");
                    }};
                    lastAttachTimestamp = "sed";
                    lastDetachTimestamp = "necessitatibus";
                    licenseCodes = new String[]{{
                        add("ipsa"),
                        add("excepturi"),
                        add("a"),
                        add("maiores"),
                    }};
                    licenses = new String[]{{
                        add("maiores"),
                        add("alias"),
                        add("asperiores"),
                    }};
                    locationHint = "rem";
                    name = "Jeanette Wehner";
                    options = "eius";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("in", "eligendi");
                            put("quasi", "neque");
                        }};
                    }};;
                    physicalBlockSizeBytes = "vero";
                    provisionedIops = "excepturi";
                    provisionedThroughput = "accusantium";
                    region = "qui";
                    replicaZones = new String[]{{
                        add("beatae"),
                        add("incidunt"),
                        add("dicta"),
                        add("odit"),
                    }};
                    resourcePolicies = new String[]{{
                        add("rerum"),
                        add("alias"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("accusantium", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                            }});
                            put("laboriosam", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "quas";
                    sizeGb = "veritatis";
                    sourceConsistencyGroupPolicy = "ullam";
                    sourceConsistencyGroupPolicyId = "quae";
                    sourceDisk = "similique";
                    sourceDiskId = "incidunt";
                    sourceImage = "quam";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "magni";
                        kmsKeyServiceAccount = "deserunt";
                        rawKey = "delectus";
                        rsaEncryptedKey = "omnis";
                        sha256 = "sed";
                    }};;
                    sourceImageId = "nesciunt";
                    sourceSnapshot = "maxime";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quis";
                        kmsKeyServiceAccount = "cupiditate";
                        rawKey = "aliquam";
                        rsaEncryptedKey = "excepturi";
                        sha256 = "maiores";
                    }};;
                    sourceSnapshotId = "laudantium";
                    sourceStorageObject = "velit";
                    status = DiskStatusEnum.RESTORING;
                    type = "amet";
                    users = new String[]{{
                        add("ipsa"),
                        add("quisquam"),
                    }};
                    zone = "tenetur";
                }};;
                accessToken = "quas";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "asperiores";
                key = "a";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                requestId = "accusantium";
                sourceImage = "dicta";
                uploadType = "minus";
                uploadProtocol = "commodi";
                userIp = "eveniet";
            }};            

            ComputeDisksInsertResponse res = sdk.disks.computeDisksInsert(req, new ComputeDisksInsertSecurity() {{
                option1 = new ComputeDisksInsertSecurityOption1("porro", "tempore") {{
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

            ComputeDisksListRequest req = new ComputeDisksListRequest("quidem", "modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "sequi";
                fields = "eligendi";
                filter = "asperiores";
                key = "esse";
                maxResults = 500021L;
                oauthToken = "sint";
                orderBy = "repellat";
                pageToken = "a";
                prettyPrint = false;
                quotaUser = "animi";
                returnPartialSuccess = false;
                uploadType = "maiores";
                uploadProtocol = "itaque";
                userIp = "nulla";
            }};            

            ComputeDisksListResponse res = sdk.disks.computeDisksList(req, new ComputeDisksListSecurity() {{
                option1 = new ComputeDisksListSecurityOption1("deserunt", "corporis") {{
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

            ComputeDisksRemoveResourcePoliciesRequest req = new ComputeDisksRemoveResourcePoliciesRequest("velit", "officiis", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                disksRemoveResourcePoliciesRequest = new DisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("eum"),
                        add("repudiandae"),
                        add("accusantium"),
                        add("officia"),
                    }};
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "eius";
                key = "quisquam";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "natus";
                uploadType = "minus";
                uploadProtocol = "quia";
                userIp = "magnam";
            }};            

            ComputeDisksRemoveResourcePoliciesResponse res = sdk.disks.computeDisksRemoveResourcePolicies(req, new ComputeDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeDisksRemoveResourcePoliciesSecurityOption1("reprehenderit", "quod") {{
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

            ComputeDisksResizeRequest req = new ComputeDisksResizeRequest("quos", "corrupti", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                disksResizeRequest = new DisksResizeRequest() {{
                    sizeGb = "amet";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "necessitatibus";
                key = "architecto";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "dolore";
                requestId = "sunt";
                uploadType = "maiores";
                uploadProtocol = "neque";
                userIp = "odit";
            }};            

            ComputeDisksResizeResponse res = sdk.disks.computeDisksResize(req, new ComputeDisksResizeSecurity() {{
                option1 = new ComputeDisksResizeSecurityOption1("earum", "veniam") {{
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

            ComputeDisksSetIamPolicyRequest req = new ComputeDisksSetIamPolicyRequest("ipsam", "eaque", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                zoneSetPolicyRequest = new ZoneSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ad";
                            condition = new Expr() {{
                                description = "nisi";
                                expression = "tenetur";
                                location = "quis";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("suscipit"),
                                add("pariatur"),
                            }};
                            role = "sit";
                        }}),
                        add(new Binding() {{
                            bindingId = "quidem";
                            condition = new Expr() {{
                                description = "repellendus";
                                expression = "perferendis";
                                location = "id";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("possimus"),
                            }};
                            role = "repellat";
                        }}),
                    }};
                    etag = "repudiandae";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("harum"),
                                            add("dolore"),
                                            add("voluptatibus"),
                                            add("iure"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("soluta"),
                                    add("dolorum"),
                                    add("velit"),
                                    add("earum"),
                                }};
                                service = "praesentium";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "non";
                                condition = new Expr() {{
                                    description = "quasi";
                                    expression = "mollitia";
                                    location = "accusamus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("doloremque"),
                                    add("expedita"),
                                    add("corrupti"),
                                    add("eaque"),
                                }};
                                role = "deserunt";
                            }}),
                            add(new Binding() {{
                                bindingId = "aliquid";
                                condition = new Expr() {{
                                    description = "excepturi";
                                    expression = "magni";
                                    location = "tempora";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("rerum"),
                                }};
                                role = "sed";
                            }}),
                            add(new Binding() {{
                                bindingId = "accusamus";
                                condition = new Expr() {{
                                    description = "optio";
                                    expression = "delectus";
                                    location = "minus";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("asperiores"),
                                    add("voluptatum"),
                                    add("iste"),
                                }};
                                role = "corporis";
                            }}),
                        }};
                        etag = "accusantium";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "possimus";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("vel"),
                                            add("sapiente"),
                                            add("mollitia"),
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "non";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("aliquam"),
                                            add("quisquam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "maiores";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("laudantium"),
                                            add("est"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.IN;
                                        svc = "consectetur";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("ducimus"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                }};
                                description = "recusandae";
                                ins = new String[]{{
                                    add("blanditiis"),
                                    add("numquam"),
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
                                                    name = "Mandy Johnston";
                                                    value = "porro";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Martin Kovacek";
                                                    value = "commodi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Fannie Ankunding";
                                                    value = "aliquam";
                                                }}),
                                            }};
                                            field = "iste";
                                            metric = "ullam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptas"),
                                    add("occaecati"),
                                    add("unde"),
                                    add("illo"),
                                }};
                                permissions = new String[]{{
                                    add("inventore"),
                                    add("libero"),
                                }};
                            }}),
                        }};
                        version = 371287;
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "harum";
                key = "facere";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "cumque";
                uploadProtocol = "delectus";
                userIp = "labore";
            }};            

            ComputeDisksSetIamPolicyResponse res = sdk.disks.computeDisksSetIamPolicy(req, new ComputeDisksSetIamPolicySecurity() {{
                option1 = new ComputeDisksSetIamPolicySecurityOption1("expedita", "corrupti") {{
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

            ComputeDisksSetLabelsRequest req = new ComputeDisksSetLabelsRequest("rem", "atque", "officiis") {{
                dollarXgafv = XgafvEnum.TWO;
                zoneSetLabelsRequest = new ZoneSetLabelsRequest() {{
                    labelFingerprint = "pariatur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quo", "incidunt");
                        put("quod", "minus");
                        put("porro", "id");
                        put("excepturi", "occaecati");
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "hic";
                key = "maxime";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "soluta";
                requestId = "fugit";
                uploadType = "pariatur";
                uploadProtocol = "eligendi";
                userIp = "recusandae";
            }};            

            ComputeDisksSetLabelsResponse res = sdk.disks.computeDisksSetLabels(req, new ComputeDisksSetLabelsSecurity() {{
                option1 = new ComputeDisksSetLabelsSecurityOption1("veritatis", "aut") {{
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

            ComputeDisksTestIamPermissionsRequest req = new ComputeDisksTestIamPermissionsRequest("laudantium", "iusto", "dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("magni"),
                        add("rerum"),
                    }};
                }};;
                accessToken = "doloremque";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "at";
                key = "eum";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "blanditiis";
                uploadProtocol = "nihil";
                userIp = "atque";
            }};            

            ComputeDisksTestIamPermissionsResponse res = sdk.disks.computeDisksTestIamPermissions(req, new ComputeDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeDisksTestIamPermissionsSecurityOption1("rerum", "deserunt") {{
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
import org.openapis.openapi.models.shared.DiskParams;
import org.openapis.openapi.models.shared.DiskResourceStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus;
import org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatusStateEnum;
import org.openapis.openapi.models.shared.DiskStatusEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeDisksUpdateRequest req = new ComputeDisksUpdateRequest("atque", "nostrum", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.X8664;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "enim";
                        consistencyGroupPolicyId = "rem";
                        disk = "magni";
                        diskId = "quae";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("placeat", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "enim";
                                consistencyGroupPolicyId = "labore";
                                disk = "sapiente";
                                diskId = "saepe";
                            }};
                        }});
                        put("delectus", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "officia";
                                consistencyGroupPolicyId = "natus";
                                disk = "cumque";
                                diskId = "natus";
                            }};
                        }});
                        put("quaerat", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "doloribus";
                                consistencyGroupPolicyId = "quia";
                                disk = "officiis";
                                diskId = "mollitia";
                            }};
                        }});
                    }};
                    creationTimestamp = "cumque";
                    description = "quis";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "enim";
                        kmsKeyServiceAccount = "eum";
                        rawKey = "nemo";
                        rsaEncryptedKey = "illum";
                        sha256 = "nesciunt";
                    }};;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_CAPABLE;
                        }}),
                    }};
                    id = "minus";
                    kind = "asperiores";
                    labelFingerprint = "recusandae";
                    labels = new java.util.HashMap<String, String>() {{
                        put("praesentium", "dicta");
                        put("fugit", "sit");
                        put("aliquid", "necessitatibus");
                        put("sed", "deleniti");
                    }};
                    lastAttachTimestamp = "sunt";
                    lastDetachTimestamp = "nesciunt";
                    licenseCodes = new String[]{{
                        add("laborum"),
                        add("aliquam"),
                        add("deserunt"),
                        add("modi"),
                    }};
                    licenses = new String[]{{
                        add("impedit"),
                    }};
                    locationHint = "eius";
                    name = "Frank Swaniawski";
                    options = "aspernatur";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("sequi", "fugit");
                        }};
                    }};;
                    physicalBlockSizeBytes = "fuga";
                    provisionedIops = "hic";
                    provisionedThroughput = "eaque";
                    region = "dolorem";
                    replicaZones = new String[]{{
                        add("aperiam"),
                    }};
                    resourcePolicies = new String[]{{
                        add("nulla"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("magnam", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPING;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "numquam";
                    sizeGb = "optio";
                    sourceConsistencyGroupPolicy = "nobis";
                    sourceConsistencyGroupPolicyId = "ex";
                    sourceDisk = "repellat";
                    sourceDiskId = "quae";
                    sourceImage = "deleniti";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "expedita";
                        kmsKeyServiceAccount = "hic";
                        rawKey = "excepturi";
                        rsaEncryptedKey = "aliquid";
                        sha256 = "sed";
                    }};;
                    sourceImageId = "beatae";
                    sourceSnapshot = "similique";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ea";
                        kmsKeyServiceAccount = "animi";
                        rawKey = "dolore";
                        rsaEncryptedKey = "tenetur";
                        sha256 = "dignissimos";
                    }};;
                    sourceSnapshotId = "esse";
                    sourceStorageObject = "animi";
                    status = DiskStatusEnum.FAILED;
                    type = "esse";
                    users = new String[]{{
                        add("earum"),
                        add("velit"),
                        add("officiis"),
                        add("eius"),
                    }};
                    zone = "rerum";
                }};;
                accessToken = "itaque";
                alt = AltEnum.MEDIA;
                callback = "ipsam";
                fields = "explicabo";
                key = "impedit";
                oauthToken = "aliquid";
                paths = new String[]{{
                    add("facilis"),
                    add("ipsum"),
                }};
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "quaerat";
                updateMask = "architecto";
                uploadType = "praesentium";
                uploadProtocol = "eveniet";
                userIp = "dolor";
            }};            

            ComputeDisksUpdateResponse res = sdk.disks.computeDisksUpdate(req, new ComputeDisksUpdateSecurity() {{
                option1 = new ComputeDisksUpdateSecurityOption1("expedita", "libero") {{
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
