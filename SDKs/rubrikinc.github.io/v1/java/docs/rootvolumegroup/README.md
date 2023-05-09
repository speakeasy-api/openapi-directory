# rootVolumeGroup

## Overview

Volume Groups.

### Available Operations

* [createOnDemandVolumeGroupBackup](#createondemandvolumegroupbackup) - Create on-demand snapshot for the Volume Group
* [getVolumeGroup](#getvolumegroup) - Get Volume Group details
* [getVolumeGroupForceFullSpec](#getvolumegroupforcefullspec) - Retrieve the configuration for forcing a full snapshot
* [getVolumeGroupSnapshot](#getvolumegroupsnapshot) - Get Volume Group snapshot details
* [getVolumeGroupSnapshotMount](#getvolumegroupsnapshotmount) - Get summary information for a mount
* [patchVolumeGroup](#patchvolumegroup) - Update Volume Group properties
* [queryVolumeGroup](#queryvolumegroup) - Get list of Volume Groups
* [queryVolumeGroupLatestSnapshot](#queryvolumegrouplatestsnapshot) - Get the latest snapshot of the Volume Group
* [queryVolumeGroupSnapshot](#queryvolumegroupsnapshot) - Get list of snapshots of the Volume Group
* [queryVolumeGroupSnapshotMount](#queryvolumegroupsnapshotmount) - Get summary information for all mounts
* [requestVolumeGroupForceFullSnapshot](#requestvolumegroupforcefullsnapshot) - Request a full snapshot on the next backup job of a Volume Group

## createOnDemandVolumeGroupBackup

Create an on-demand snapshot for the given Volume Group ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandVolumeGroupBackupRequest;
import org.openapis.openapi.models.operations.CreateOnDemandVolumeGroupBackupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VolumeGroupOnDemandSnapshotConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quod", "eos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandVolumeGroupBackupRequest req = new CreateOnDemandVolumeGroupBackupRequest("alias") {{
                volumeGroupOnDemandSnapshotConfig = new VolumeGroupOnDemandSnapshotConfig() {{
                    slaId = "ad";
                    volumeIdsIncludedInSnapshot = new String[]{{
                        add("facere"),
                        add("id"),
                        add("atque"),
                        add("quaerat"),
                    }};
                }};;
            }};            

            CreateOnDemandVolumeGroupBackupResponse res = sdk.rootVolumeGroup.createOnDemandVolumeGroupBackup(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumeGroup

Detailed view of a Volume Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumeGroupRequest;
import org.openapis.openapi.models.operations.GetVolumeGroupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aperiam", "dignissimos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVolumeGroupRequest req = new GetVolumeGroupRequest("quam");            

            GetVolumeGroupResponse res = sdk.rootVolumeGroup.getVolumeGroup(req);

            if (res.volumeGroupDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumeGroupForceFullSpec

Retrieve the configuration for forcing a full snapshot for a Volume Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumeGroupForceFullSpecRequest;
import org.openapis.openapi.models.operations.GetVolumeGroupForceFullSpecResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "fuga") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVolumeGroupForceFullSpecRequest req = new GetVolumeGroupForceFullSpecRequest("iure");            

            GetVolumeGroupForceFullSpecResponse res = sdk.rootVolumeGroup.getVolumeGroupForceFullSpec(req);

            if (res.volumeGroupForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumeGroupSnapshot

Retrieve detailed information about a snapshot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumeGroupSnapshotRequest;
import org.openapis.openapi.models.operations.GetVolumeGroupSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deleniti", "officia") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVolumeGroupSnapshotRequest req = new GetVolumeGroupSnapshotRequest("sint");            

            GetVolumeGroupSnapshotResponse res = sdk.rootVolumeGroup.getVolumeGroupSnapshot(req);

            if (res.volumeGroupSnapshotSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVolumeGroupSnapshotMount

Retrieve information on a Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (The ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (the mounted volumes information), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that intiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVolumeGroupSnapshotMountRequest;
import org.openapis.openapi.models.operations.GetVolumeGroupSnapshotMountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laborum", "dolor") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetVolumeGroupSnapshotMountRequest req = new GetVolumeGroupSnapshotMountRequest("ad");            

            GetVolumeGroupSnapshotMountResponse res = sdk.rootVolumeGroup.getVolumeGroupSnapshotMount(req);

            if (res.volumeGroupMountSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchVolumeGroup

Patch Volume Group with specified properties.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchVolumeGroupRequest;
import org.openapis.openapi.models.operations.PatchVolumeGroupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VolumeGroupPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("illum", "sit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchVolumeGroupRequest req = new PatchVolumeGroupRequest(                new VolumeGroupPatch() {{
                                configuredSlaDomainId = "molestias";
                                forceFull = false;
                                isPaused = false;
                                volumeIdsIncludedInSnapshots = new String[]{{
                                    add("expedita"),
                                    add("voluptas"),
                                }};
                            }};, "maiores");            

            PatchVolumeGroupResponse res = sdk.rootVolumeGroup.patchVolumeGroup(req);

            if (res.volumeGroupDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVolumeGroup

Get summary of all Volume Groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVolumeGroupRequest;
import org.openapis.openapi.models.operations.QueryVolumeGroupResponse;
import org.openapis.openapi.models.operations.QueryVolumeGroupSLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryVolumeGroupSortByEnum;
import org.openapis.openapi.models.operations.QueryVolumeGroupSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ea", "vel") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVolumeGroupRequest req = new QueryVolumeGroupRequest() {{
                effectiveSlaDomainId = "delectus";
                isRelic = false;
                limit = 881067;
                name = "Dr. Michael Cormier";
                offset = 978460;
                primaryClusterId = "quaerat";
                slaAssignment = QueryVolumeGroupSLAAssignmentEnum.DERIVED;
                sortBy = QueryVolumeGroupSortByEnum.NAME;
                sortOrder = QueryVolumeGroupSortOrderEnum.DESC;
            }};            

            QueryVolumeGroupResponse res = sdk.rootVolumeGroup.queryVolumeGroup(req);

            if (res.volumeGroupSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVolumeGroupLatestSnapshot

Retrieve the latest snapshot summary of a Volume Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVolumeGroupLatestSnapshotRequest;
import org.openapis.openapi.models.operations.QueryVolumeGroupLatestSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVolumeGroupLatestSnapshotRequest req = new QueryVolumeGroupLatestSnapshotRequest("enim");            

            QueryVolumeGroupLatestSnapshotResponse res = sdk.rootVolumeGroup.queryVolumeGroupLatestSnapshot(req);

            if (res.volumeGroupSnapshotSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVolumeGroupSnapshot

Retrieve snapshot details for a Volume Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotRequest;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nihil", "libero") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVolumeGroupSnapshotRequest req = new QueryVolumeGroupSnapshotRequest("omnis");            

            QueryVolumeGroupSnapshotResponse res = sdk.rootVolumeGroup.queryVolumeGroupSnapshot(req);

            if (res.volumeGroupSnapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryVolumeGroupSnapshotMount

Retrieves information for each Volume Group mount. The information returned includes the following items, when available. id (the unique ID of the mount), name (the name of the Volume Group), snapshotDate (the snapshot date), sourceVolumeGroupId (the ID of the Volume Group from which this snapshot was created), sourceHostId (the ID of the source host), sourceHostName (the name of the source host), mountedDate (the date when the mount was created), mountedVolumes (information on the mounted volumes), targetHostId (the ID of the mounted volumes host), targetHostName (the name of the mounted volumes host), mountRequestId (the ID of the job instance that initiated the mount), unmountRequestId (the ID of the job instance that initiated the request to remove the mount), isReady (whether the Volume Group mount is ready to use), and restoreScriptSmbPath (the link to the script that can perform bare-metal recovery).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotMountRequest;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotMountResponse;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotMountSortByEnum;
import org.openapis.openapi.models.operations.QueryVolumeGroupSnapshotMountSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("excepturi", "eos") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryVolumeGroupSnapshotMountRequest req = new QueryVolumeGroupSnapshotMountRequest() {{
                limit = 789036;
                offset = 547184;
                sortBy = QueryVolumeGroupSnapshotMountSortByEnum.MOUNTED_DATE;
                sortOrder = QueryVolumeGroupSnapshotMountSortOrderEnum.DESC;
                sourceHostName = "quibusdam";
                sourceVolumeGroupId = "est";
            }};            

            QueryVolumeGroupSnapshotMountResponse res = sdk.rootVolumeGroup.queryVolumeGroupSnapshotMount(req);

            if (res.volumeGroupMountSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestVolumeGroupForceFullSnapshot

Request a full snapshot to be taken during the next backup job of a Volume Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestVolumeGroupForceFullSnapshotRequest;
import org.openapis.openapi.models.operations.RequestVolumeGroupForceFullSnapshotResponse;
import org.openapis.openapi.models.shared.ForceFullVolumeInfo;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VolumeGroupForceFullRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("commodi", "similique") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestVolumeGroupForceFullSnapshotRequest req = new RequestVolumeGroupForceFullSnapshotRequest(                new VolumeGroupForceFullRequest() {{
                                volumeInfos = new org.openapis.openapi.models.shared.ForceFullVolumeInfo[]{{
                                    add(new ForceFullVolumeInfo(false, "recusandae") {{
                                        shouldDedupe = false;
                                        volumeId = "dicta";
                                    }}),
                                    add(new ForceFullVolumeInfo(false, "id") {{
                                        shouldDedupe = false;
                                        volumeId = "sapiente";
                                    }}),
                                }};
                            }};, "odit");            

            RequestVolumeGroupForceFullSnapshotResponse res = sdk.rootVolumeGroup.requestVolumeGroupForceFullSnapshot(req);

            if (res.volumeGroupForceFullResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
