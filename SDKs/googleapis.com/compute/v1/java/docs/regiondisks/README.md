# regionDisks

### Available Operations

* [computeRegionDisksAddResourcePolicies](#computeregiondisksaddresourcepolicies) - Adds existing resource policies to a regional disk. You can only add one policy which will be applied to this disk for scheduling snapshot creation.
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

            ComputeRegionDisksAddResourcePoliciesRequest req = new ComputeRegionDisksAddResourcePoliciesRequest("similique", "occaecati", "deserunt") {{
                dollarXgafv = XgafvEnum.TWO;
                regionDisksAddResourcePoliciesRequest = new RegionDisksAddResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("qui"),
                        add("qui"),
                    }};
                }};;
                accessToken = "excepturi";
                alt = AltEnum.MEDIA;
                callback = "et";
                fields = "accusamus";
                key = "fuga";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "eaque";
                requestId = "qui";
                uploadType = "ratione";
                uploadProtocol = "magni";
                userIp = "dolore";
            }};            

            ComputeRegionDisksAddResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksAddResourcePolicies(req, new ComputeRegionDisksAddResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksAddResourcePoliciesSecurityOption1("eius", "incidunt") {{
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

            ComputeRegionDisksCreateSnapshotRequest req = new ComputeRegionDisksCreateSnapshotRequest("aliquam", "placeat", "explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                snapshot = new Snapshot() {{
                    architecture = SnapshotArchitectureEnum.X8664;
                    autoCreated = false;
                    chainName = "illo";
                    creationSizeBytes = "provident";
                    creationTimestamp = "ab";
                    description = "dolorum";
                    diskSizeGb = "sed";
                    downloadBytes = "architecto";
                    id = "nisi";
                    kind = "incidunt";
                    labelFingerprint = "sequi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consectetur", "dicta");
                        put("qui", "odio");
                    }};
                    licenseCodes = new String[]{{
                        add("labore"),
                        add("blanditiis"),
                    }};
                    licenses = new String[]{{
                        add("reiciendis"),
                        add("quae"),
                        add("minus"),
                    }};
                    locationHint = "facilis";
                    name = "Antonia Schmitt";
                    satisfiesPzs = false;
                    selfLink = "odit";
                    snapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "saepe";
                        kmsKeyServiceAccount = "unde";
                        rawKey = "iure";
                        rsaEncryptedKey = "dicta";
                        sha256 = "pariatur";
                    }};;
                    snapshotType = SnapshotSnapshotTypeEnum.ARCHIVE;
                    sourceDisk = "rerum";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "culpa";
                        kmsKeyServiceAccount = "tempora";
                        rawKey = "architecto";
                        rsaEncryptedKey = "laboriosam";
                        sha256 = "inventore";
                    }};;
                    sourceDiskId = "temporibus";
                    sourceSnapshotSchedulePolicy = "ut";
                    sourceSnapshotSchedulePolicyId = "placeat";
                    status = SnapshotStatusEnum.CREATING;
                    storageBytes = "velit";
                    storageBytesStatus = SnapshotStorageBytesStatusEnum.UP_TO_DATE;
                    storageLocations = new String[]{{
                        add("cupiditate"),
                        add("tenetur"),
                        add("iure"),
                        add("vero"),
                    }};
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "atque";
                key = "fuga";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "laboriosam";
                requestId = "distinctio";
                uploadType = "nam";
                uploadProtocol = "expedita";
                userIp = "voluptatibus";
            }};            

            ComputeRegionDisksCreateSnapshotResponse res = sdk.regionDisks.computeRegionDisksCreateSnapshot(req, new ComputeRegionDisksCreateSnapshotSecurity() {{
                option1 = new ComputeRegionDisksCreateSnapshotSecurityOption1("ut", "perferendis") {{
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

            ComputeRegionDisksDeleteRequest req = new ComputeRegionDisksDeleteRequest("iste", "recusandae", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "nesciunt";
                fields = "accusamus";
                key = "laboriosam";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "cum";
                requestId = "placeat";
                uploadType = "eius";
                uploadProtocol = "dolor";
                userIp = "eos";
            }};            

            ComputeRegionDisksDeleteResponse res = sdk.regionDisks.computeRegionDisksDelete(req, new ComputeRegionDisksDeleteSecurity() {{
                option1 = new ComputeRegionDisksDeleteSecurityOption1("quae", "quibusdam") {{
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

            ComputeRegionDisksGetRequest req = new ComputeRegionDisksGetRequest("adipisci", "voluptates", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "non";
                key = "delectus";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "maxime";
                uploadProtocol = "itaque";
                userIp = "molestias";
            }};            

            ComputeRegionDisksGetResponse res = sdk.regionDisks.computeRegionDisksGet(req, new ComputeRegionDisksGetSecurity() {{
                option1 = new ComputeRegionDisksGetSecurityOption1("laudantium", "occaecati") {{
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

            ComputeRegionDisksGetIamPolicyRequest req = new ComputeRegionDisksGetIamPolicyRequest("inventore", "maiores", "voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "iusto";
                key = "illum";
                oauthToken = "quos";
                optionsRequestedPolicyVersion = 398812L;
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "quasi";
                uploadProtocol = "magni";
                userIp = "delectus";
            }};            

            ComputeRegionDisksGetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksGetIamPolicy(req, new ComputeRegionDisksGetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksGetIamPolicySecurityOption1("commodi", "a") {{
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

            ComputeRegionDisksInsertRequest req = new ComputeRegionDisksInsertRequest("omnis", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                disk = new Disk() {{
                    architecture = DiskArchitectureEnum.X8664;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "ducimus";
                        consistencyGroupPolicyId = "dolorem";
                        disk = "doloribus";
                        diskId = "in";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("aut", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "quam";
                                consistencyGroupPolicyId = "mollitia";
                                disk = "molestiae";
                                diskId = "cumque";
                            }};
                        }});
                    }};
                    creationTimestamp = "harum";
                    description = "expedita";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "modi";
                        kmsKeyServiceAccount = "dolorem";
                        rawKey = "quod";
                        rsaEncryptedKey = "veritatis";
                        sha256 = "aliquid";
                    }};;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.GVNIC;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                    }};
                    id = "sit";
                    kind = "vero";
                    labelFingerprint = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aut", "qui");
                        put("perspiciatis", "recusandae");
                        put("at", "possimus");
                        put("rerum", "ad");
                    }};
                    lastAttachTimestamp = "error";
                    lastDetachTimestamp = "non";
                    licenseCodes = new String[]{{
                        add("maxime"),
                        add("quis"),
                    }};
                    licenses = new String[]{{
                        add("ipsam"),
                        add("praesentium"),
                    }};
                    locationHint = "voluptas";
                    name = "Jennie Stamm";
                    options = "accusamus";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("error", "excepturi");
                            put("voluptas", "quo");
                            put("maiores", "inventore");
                        }};
                    }};;
                    physicalBlockSizeBytes = "at";
                    provisionedIops = "cupiditate";
                    provisionedThroughput = "omnis";
                    region = "tempora";
                    replicaZones = new String[]{{
                        add("quod"),
                        add("ipsam"),
                    }};
                    resourcePolicies = new String[]{{
                        add("ab"),
                        add("numquam"),
                        add("nostrum"),
                        add("dignissimos"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("omnis", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                            }});
                            put("nam", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                            put("dolore", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                            put("corrupti", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STATE_UNSPECIFIED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "quisquam";
                    sizeGb = "esse";
                    sourceConsistencyGroupPolicy = "officia";
                    sourceConsistencyGroupPolicyId = "consequatur";
                    sourceDisk = "soluta";
                    sourceDiskId = "cumque";
                    sourceImage = "ipsum";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "dolorem";
                        kmsKeyServiceAccount = "culpa";
                        rawKey = "placeat";
                        rsaEncryptedKey = "tempora";
                        sha256 = "quam";
                    }};;
                    sourceImageId = "amet";
                    sourceSnapshot = "quidem";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "tempora";
                        kmsKeyServiceAccount = "doloremque";
                        rawKey = "nemo";
                        rsaEncryptedKey = "ea";
                        sha256 = "nihil";
                    }};;
                    sourceSnapshotId = "tempore";
                    sourceStorageObject = "amet";
                    status = DiskStatusEnum.RESTORING;
                    type = "exercitationem";
                    users = new String[]{{
                        add("necessitatibus"),
                    }};
                    zone = "eius";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "neque";
                key = "quae";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "expedita";
                requestId = "animi";
                sourceImage = "voluptatum";
                uploadType = "eos";
                uploadProtocol = "molestiae";
                userIp = "nihil";
            }};            

            ComputeRegionDisksInsertResponse res = sdk.regionDisks.computeRegionDisksInsert(req, new ComputeRegionDisksInsertSecurity() {{
                option1 = new ComputeRegionDisksInsertSecurityOption1("accusantium", "quidem") {{
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

            ComputeRegionDisksListRequest req = new ComputeRegionDisksListRequest("sapiente", "nisi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "saepe";
                fields = "vero";
                filter = "illo";
                key = "quo";
                maxResults = 698649L;
                oauthToken = "odit";
                orderBy = "dignissimos";
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "fugiat";
                returnPartialSuccess = false;
                uploadType = "itaque";
                uploadProtocol = "voluptatem";
                userIp = "quidem";
            }};            

            ComputeRegionDisksListResponse res = sdk.regionDisks.computeRegionDisksList(req, new ComputeRegionDisksListSecurity() {{
                option1 = new ComputeRegionDisksListSecurityOption1("ex", "dolore") {{
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

            ComputeRegionDisksRemoveResourcePoliciesRequest req = new ComputeRegionDisksRemoveResourcePoliciesRequest("quas", "alias", "reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksRemoveResourcePoliciesRequest = new RegionDisksRemoveResourcePoliciesRequest() {{
                    resourcePolicies = new String[]{{
                        add("perspiciatis"),
                        add("harum"),
                        add("asperiores"),
                        add("at"),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "fuga";
                key = "vel";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "nobis";
                requestId = "maiores";
                uploadType = "quis";
                uploadProtocol = "doloribus";
                userIp = "id";
            }};            

            ComputeRegionDisksRemoveResourcePoliciesResponse res = sdk.regionDisks.computeRegionDisksRemoveResourcePolicies(req, new ComputeRegionDisksRemoveResourcePoliciesSecurity() {{
                option1 = new ComputeRegionDisksRemoveResourcePoliciesSecurityOption1("consectetur", "officiis") {{
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

            ComputeRegionDisksResizeRequest req = new ComputeRegionDisksResizeRequest("in", "minus", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                regionDisksResizeRequest = new RegionDisksResizeRequest() {{
                    sizeGb = "aliquam";
                }};;
                accessToken = "in";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "eligendi";
                key = "magni";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "recusandae";
                uploadType = "dolores";
                uploadProtocol = "natus";
                userIp = "quas";
            }};            

            ComputeRegionDisksResizeResponse res = sdk.regionDisks.computeRegionDisksResize(req, new ComputeRegionDisksResizeSecurity() {{
                option1 = new ComputeRegionDisksResizeSecurityOption1("illo", "iste") {{
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

            ComputeRegionDisksSetIamPolicyRequest req = new ComputeRegionDisksSetIamPolicyRequest("qui", "quia", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetPolicyRequest = new RegionSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "ipsa";
                            condition = new Expr() {{
                                description = "aperiam";
                                expression = "repudiandae";
                                location = "nemo";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("necessitatibus"),
                            }};
                            role = "laboriosam";
                        }}),
                    }};
                    etag = "nemo";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nisi"),
                                            add("quidem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("fugiat"),
                                            add("quas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ex"),
                                            add("voluptatem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                            add("temporibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("soluta"),
                                    add("voluptatem"),
                                    add("commodi"),
                                    add("vero"),
                                }};
                                service = "sed";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("natus"),
                                            add("officia"),
                                            add("doloribus"),
                                            add("molestiae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("nam"),
                                    add("nostrum"),
                                }};
                                service = "id";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "ipsum";
                                condition = new Expr() {{
                                    description = "officiis";
                                    expression = "facilis";
                                    location = "voluptas";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("odio"),
                                }};
                                role = "fugit";
                            }}),
                            add(new Binding() {{
                                bindingId = "maxime";
                                condition = new Expr() {{
                                    description = "exercitationem";
                                    expression = "quibusdam";
                                    location = "magni";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("delectus"),
                                    add("repellat"),
                                    add("dolorum"),
                                    add("veniam"),
                                }};
                                role = "reprehenderit";
                            }}),
                        }};
                        etag = "odio";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "amet";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("voluptas"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                }};
                                description = "cum";
                                ins = new String[]{{
                                    add("facilis"),
                                    add("cum"),
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
                                                    name = "Miss Emily Blick";
                                                    value = "at";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Esther Prosacco";
                                                    value = "eos";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Louis Jacobson";
                                                    value = "unde";
                                                }}),
                                            }};
                                            field = "nulla";
                                            metric = "quis";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Ervin Heidenreich";
                                                    value = "numquam";
                                                }}),
                                            }};
                                            field = "aliquid";
                                            metric = "aspernatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("excepturi"),
                                    add("repudiandae"),
                                    add("laborum"),
                                }};
                                permissions = new String[]{{
                                    add("assumenda"),
                                    add("id"),
                                    add("eligendi"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "voluptas";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("saepe"),
                                            add("sunt"),
                                            add("iure"),
                                            add("at"),
                                        }};
                                    }}),
                                }};
                                description = "recusandae";
                                ins = new String[]{{
                                    add("quae"),
                                    add("corrupti"),
                                    add("sunt"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Jessie Fritsch";
                                                    value = "ea";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Clara Gibson";
                                                    value = "repellendus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marco Bechtelar";
                                                    value = "eaque";
                                                }}),
                                            }};
                                            field = "vel";
                                            metric = "totam";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Luther Witting";
                                                    value = "perspiciatis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Spencer Goldner";
                                                    value = "nobis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Mitchell Douglas";
                                                    value = "sequi";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Eric Farrell";
                                                    value = "culpa";
                                                }}),
                                            }};
                                            field = "cumque";
                                            metric = "quasi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
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
                                                    name = "Bradley Upton";
                                                    value = "consectetur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Terence Kessler";
                                                    value = "molestiae";
                                                }}),
                                            }};
                                            field = "totam";
                                            metric = "est";
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
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Juanita Goodwin";
                                                    value = "quam";
                                                }}),
                                            }};
                                            field = "expedita";
                                            metric = "amet";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("facilis"),
                                    add("possimus"),
                                }};
                                permissions = new String[]{{
                                    add("nesciunt"),
                                    add("velit"),
                                }};
                            }}),
                        }};
                        version = 917054;
                    }};;
                }};;
                accessToken = "deleniti";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "eum";
                key = "dicta";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "tempora";
                uploadProtocol = "dolor";
                userIp = "exercitationem";
            }};            

            ComputeRegionDisksSetIamPolicyResponse res = sdk.regionDisks.computeRegionDisksSetIamPolicy(req, new ComputeRegionDisksSetIamPolicySecurity() {{
                option1 = new ComputeRegionDisksSetIamPolicySecurityOption1("autem", "quisquam") {{
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

            ComputeRegionDisksSetLabelsRequest req = new ComputeRegionDisksSetLabelsRequest("est", "iusto", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                regionSetLabelsRequest = new RegionSetLabelsRequest() {{
                    labelFingerprint = "atque";
                    labels = new java.util.HashMap<String, String>() {{
                        put("labore", "doloribus");
                        put("veniam", "facere");
                        put("eum", "accusantium");
                        put("esse", "numquam");
                    }};
                }};;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "et";
                key = "quia";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "harum";
                uploadType = "laboriosam";
                uploadProtocol = "odit";
                userIp = "repellat";
            }};            

            ComputeRegionDisksSetLabelsResponse res = sdk.regionDisks.computeRegionDisksSetLabels(req, new ComputeRegionDisksSetLabelsSecurity() {{
                option1 = new ComputeRegionDisksSetLabelsSecurityOption1("quidem", "impedit") {{
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

            ComputeRegionDisksTestIamPermissionsRequest req = new ComputeRegionDisksTestIamPermissionsRequest("dolor", "cupiditate", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("eaque"),
                        add("voluptas"),
                        add("dolorum"),
                        add("possimus"),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.MEDIA;
                callback = "laudantium";
                fields = "voluptates";
                key = "cumque";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "non";
                uploadProtocol = "ipsum";
                userIp = "eaque";
            }};            

            ComputeRegionDisksTestIamPermissionsResponse res = sdk.regionDisks.computeRegionDisksTestIamPermissions(req, new ComputeRegionDisksTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionDisksTestIamPermissionsSecurityOption1("qui", "ut") {{
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

            ComputeRegionDisksUpdateRequest req = new ComputeRegionDisksUpdateRequest("id", "quisquam", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                disk1 = new Disk() {{
                    architecture = DiskArchitectureEnum.ARM64;
                    asyncPrimaryDisk = new DiskAsyncReplication() {{
                        consistencyGroupPolicy = "dolorum";
                        consistencyGroupPolicyId = "aperiam";
                        disk = "delectus";
                        diskId = "autem";
                    }};;
                    asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskAsyncReplicationList>() {{
                        put("hic", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "repudiandae";
                                consistencyGroupPolicyId = "harum";
                                disk = "provident";
                                diskId = "possimus";
                            }};
                        }});
                        put("dolorem", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "similique";
                                consistencyGroupPolicyId = "commodi";
                                disk = "cupiditate";
                                diskId = "quam";
                            }};
                        }});
                        put("reiciendis", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "amet";
                                consistencyGroupPolicyId = "dignissimos";
                                disk = "vitae";
                                diskId = "quisquam";
                            }};
                        }});
                        put("eveniet", new DiskAsyncReplicationList() {{
                            asyncReplicationDisk = new DiskAsyncReplication() {{
                                consistencyGroupPolicy = "consectetur";
                                consistencyGroupPolicyId = "iure";
                                disk = "architecto";
                                diskId = "repellendus";
                            }};
                        }});
                    }};
                    creationTimestamp = "qui";
                    description = "saepe";
                    diskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nostrum";
                        kmsKeyServiceAccount = "illum";
                        rawKey = "esse";
                        rsaEncryptedKey = "nesciunt";
                        sha256 = "officiis";
                    }};;
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                    }};
                    id = "officia";
                    kind = "officia";
                    labelFingerprint = "laboriosam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("est", "porro");
                        put("ex", "et");
                    }};
                    lastAttachTimestamp = "omnis";
                    lastDetachTimestamp = "quasi";
                    licenseCodes = new String[]{{
                        add("iusto"),
                        add("quaerat"),
                        add("praesentium"),
                    }};
                    licenses = new String[]{{
                        add("temporibus"),
                    }};
                    locationHint = "sunt";
                    name = "Miss Kirk Miller";
                    options = "ab";
                    params = new DiskParams() {{
                        resourceManagerTags = new java.util.HashMap<String, String>() {{
                            put("ipsam", "cupiditate");
                            put("nobis", "voluptatibus");
                            put("vel", "labore");
                            put("maiores", "mollitia");
                        }};
                    }};;
                    physicalBlockSizeBytes = "iure";
                    provisionedIops = "earum";
                    provisionedThroughput = "ad";
                    region = "exercitationem";
                    replicaZones = new String[]{{
                        add("deleniti"),
                        add("quod"),
                        add("illum"),
                        add("omnis"),
                    }};
                    resourcePolicies = new String[]{{
                        add("error"),
                        add("consequatur"),
                    }};
                    resourceStatus = new DiskResourceStatus() {{
                        asyncPrimaryDisk = new DiskResourceStatusAsyncReplicationStatus() {{
                            state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                        }};;
                        asyncSecondaryDisks = new java.util.HashMap<String, org.openapis.openapi.models.shared.DiskResourceStatusAsyncReplicationStatus>() {{
                            put("dolore", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STARTING;
                            }});
                            put("totam", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.ACTIVE;
                            }});
                            put("ex", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.STOPPED;
                            }});
                            put("autem", new DiskResourceStatusAsyncReplicationStatus() {{
                                state = DiskResourceStatusAsyncReplicationStatusStateEnum.CREATED;
                            }});
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "asperiores";
                    sizeGb = "magni";
                    sourceConsistencyGroupPolicy = "harum";
                    sourceConsistencyGroupPolicyId = "dicta";
                    sourceDisk = "necessitatibus";
                    sourceDiskId = "quidem";
                    sourceImage = "rerum";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "asperiores";
                        kmsKeyServiceAccount = "impedit";
                        rawKey = "nisi";
                        rsaEncryptedKey = "ipsum";
                        sha256 = "cumque";
                    }};;
                    sourceImageId = "porro";
                    sourceSnapshot = "animi";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "enim";
                        kmsKeyServiceAccount = "autem";
                        rawKey = "corporis";
                        rsaEncryptedKey = "aperiam";
                        sha256 = "veniam";
                    }};;
                    sourceSnapshotId = "ea";
                    sourceStorageObject = "accusantium";
                    status = DiskStatusEnum.CREATING;
                    type = "omnis";
                    users = new String[]{{
                        add("sapiente"),
                        add("ea"),
                        add("quia"),
                        add("occaecati"),
                    }};
                    zone = "eveniet";
                }};;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "illo";
                key = "dolores";
                oauthToken = "magni";
                paths = new String[]{{
                    add("dignissimos"),
                    add("ratione"),
                    add("ex"),
                    add("explicabo"),
                }};
                prettyPrint = false;
                quotaUser = "consectetur";
                requestId = "corporis";
                updateMask = "odio";
                uploadType = "iure";
                uploadProtocol = "amet";
                userIp = "voluptatibus";
            }};            

            ComputeRegionDisksUpdateResponse res = sdk.regionDisks.computeRegionDisksUpdate(req, new ComputeRegionDisksUpdateSecurity() {{
                option1 = new ComputeRegionDisksUpdateSecurityOption1("eos", "quos") {{
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
