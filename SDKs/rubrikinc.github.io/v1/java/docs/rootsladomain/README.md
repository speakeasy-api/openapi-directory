# rootSlaDomain

## Overview

SLA Domains.

### Available Operations

* [assignSlaToDownloadedSnapshots](#assignslatodownloadedsnapshots) - Assign retention SLA Domain to the downloaded snapshots of a single object
* [createSlaDomain](#createsladomain) - Create SLA Domain
* [deleteSlaDomain](#deletesladomain) - Remove SLA Domain
* [getSlaDomain](#getsladomain) - Get SLA Domain details
* [~~patchSlaDomain~~](#patchsladomain) - Patch SLA Domain :warning: **Deprecated**
* [querySlaDomain](#querysladomain) - Get list of SLA Domains
* [updateSlaDomain](#updatesladomain) - Update SLA Domain

## assignSlaToDownloadedSnapshots

Assigns an SLA Domain to a list of downloaded snapshots. The SLA Domain manages retention for the snapshots in the downloaded location. The assignment does not affect the retention of the snapshots in other locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignSlaToDownloadedSnapshotsResponse;
import org.openapis.openapi.models.shared.DownloadedSnapshotSlaAssignmentInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("atque", "architecto") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.DownloadedSnapshotSlaAssignmentInfo req = new DownloadedSnapshotSlaAssignmentInfo("est", "enim",                 new String[]{{
                                add("magni"),
                                add("quae"),
                                add("quas"),
                            }});            

            AssignSlaToDownloadedSnapshotsResponse res = sdk.rootSlaDomain.assignSlaToDownloadedSnapshots(req);

            if (res.batchAsyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSlaDomain

Create a new SLA Domain on a Rubrik cluster by specifying Domain Rules and policies. Only Managed Volume objects support minute frequency to take transaction log backup. SLA assignment on other objects will be disallowed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSlaDomainResponse;
import org.openapis.openapi.models.shared.ArchivalSpec;
import org.openapis.openapi.models.shared.ArchivalTieringSpec;
import org.openapis.openapi.models.shared.BackupWindow;
import org.openapis.openapi.models.shared.CloudStorageColdTierEnum;
import org.openapis.openapi.models.shared.ReplicationSpec;
import org.openapis.openapi.models.shared.ReplicationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SlaDomainDefinition;
import org.openapis.openapi.models.shared.SlaFrequency;
import org.openapis.openapi.models.shared.SlaStartTimeAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("placeat", "enim") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.SlaDomainDefinition req = new SlaDomainDefinition(                new org.openapis.openapi.models.shared.BackupWindow[]{{
                                add(new BackupWindow(617497,                 new SlaStartTimeAttributes(312511, 985379) {{
                                                    dayOfWeek = 156098;
                                                }};) {{
                                    durationInHours = 958068;
                                    startTimeAttributes = new SlaStartTimeAttributes(620126, 763869) {{
                                        dayOfWeek = 901651;
                                        hour = 965735;
                                        minutes = 642234;
                                    }};
                                }}),
                                add(new BackupWindow(365539,                 new SlaStartTimeAttributes(849337, 201266) {{
                                                    dayOfWeek = 22331;
                                                }};) {{
                                    durationInHours = 887284;
                                    startTimeAttributes = new SlaStartTimeAttributes(313590, 430235) {{
                                        dayOfWeek = 651467;
                                        hour = 765070;
                                        minutes = 337081;
                                    }};
                                }}),
                            }},                 new org.openapis.openapi.models.shared.SlaFrequency[]{{
                                add(new SlaFrequency(912151, 506250, "dicta") {{
                                    frequency = 794306;
                                    retention = 990369;
                                    timeUnit = "recusandae";
                                }}),
                                add(new SlaFrequency(898638, 148975, "deleniti") {{
                                    frequency = 144179;
                                    retention = 25190;
                                    timeUnit = "aliquid";
                                }}),
                            }}, "sunt") {{
                allowedBackupWindows = new org.openapis.openapi.models.shared.BackupWindow[]{{
                    add(new BackupWindow(771092,                 new SlaStartTimeAttributes(259600, 528320) {{
                                        dayOfWeek = 60078;
                                    }};) {{
                        durationInHours = 963913;
                        startTimeAttributes = new SlaStartTimeAttributes(266680, 122085) {{
                            dayOfWeek = 673653;
                            hour = 303421;
                            minutes = 644223;
                        }};
                    }}),
                }};
                archivalSpecs = new org.openapis.openapi.models.shared.ArchivalSpec[]{{
                    add(new ArchivalSpec(143078L, "fuga") {{
                        archivalThreshold = 209860L;
                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                            coldStorageClass = CloudStorageColdTierEnum.GLACIER_DEEP_ARCHIVE;
                            isInstantTieringEnabled = false;
                            minAccessibleDurationInSeconds = 132305L;
                            shouldTierExistingSnapshots = false;
                        }};
                        isPassthroughSupported = false;
                        locationId = "inventore";
                        locationName = "sequi";
                    }}),
                    add(new ArchivalSpec(134173L, "nulla") {{
                        archivalThreshold = 943103L;
                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                            coldStorageClass = CloudStorageColdTierEnum.AZURE_ARCHIVE;
                            isInstantTieringEnabled = false;
                            minAccessibleDurationInSeconds = 211301L;
                            shouldTierExistingSnapshots = false;
                        }};
                        isPassthroughSupported = false;
                        locationId = "architecto";
                        locationName = "aperiam";
                    }}),
                    add(new ArchivalSpec(760279L, "nobis") {{
                        archivalThreshold = 316541L;
                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                            coldStorageClass = CloudStorageColdTierEnum.AZURE_ARCHIVE;
                            isInstantTieringEnabled = false;
                            minAccessibleDurationInSeconds = 298750L;
                            shouldTierExistingSnapshots = false;
                        }};
                        isPassthroughSupported = false;
                        locationId = "delectus";
                        locationName = "numquam";
                    }}),
                    add(new ArchivalSpec(944203L, "excepturi") {{
                        archivalThreshold = 404422L;
                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                            coldStorageClass = CloudStorageColdTierEnum.GLACIER_DEEP_ARCHIVE;
                            isInstantTieringEnabled = false;
                            minAccessibleDurationInSeconds = 65118L;
                            shouldTierExistingSnapshots = false;
                        }};
                        isPassthroughSupported = false;
                        locationId = "deleniti";
                        locationName = "expedita";
                    }}),
                }};
                isRetentionLocked = false;
                localRetentionLimit = 396610L;
                replicationSpecs = new org.openapis.openapi.models.shared.ReplicationSpec[]{{
                    add(new ReplicationSpec("tenetur", 493407L) {{
                        locationId = "beatae";
                        locationName = "similique";
                        logRetentionLimit = 408774L;
                        replicationType = ReplicationTypeEnum.REPLICATION_TO_CLOUD_LOCATION;
                        retentionLimit = 296128L;
                    }}),
                }};
            }};            

            CreateSlaDomainResponse res = sdk.rootSlaDomain.createSlaDomain(req);

            if (res.slaDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSlaDomain

Delete an SLA Domain from a Rubrik cluster. The SLA Domain must not be assigned to any VMs, filesets or databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSlaDomainRequest;
import org.openapis.openapi.models.operations.DeleteSlaDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "animi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteSlaDomainRequest req = new DeleteSlaDomainRequest("laudantium");            

            DeleteSlaDomainResponse res = sdk.rootSlaDomain.deleteSlaDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSlaDomain

Retrieve summary information for a specified SLA Domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSlaDomainRequest;
import org.openapis.openapi.models.operations.GetSlaDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "eveniet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSlaDomainRequest req = new GetSlaDomainRequest("earum");            

            GetSlaDomainResponse res = sdk.rootSlaDomain.getSlaDomain(req);

            if (res.slaDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~patchSlaDomain~~

(DEPRECATED) Patch the properties of an SLA Domain. The recommended endpoint is v3/sla_domain/{id}.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSlaDomainRequest;
import org.openapis.openapi.models.operations.PatchSlaDomainResponse;
import org.openapis.openapi.models.shared.ArchivalSpec;
import org.openapis.openapi.models.shared.ArchivalTieringSpec;
import org.openapis.openapi.models.shared.BackupWindow;
import org.openapis.openapi.models.shared.CloudStorageColdTierEnum;
import org.openapis.openapi.models.shared.ReplicationSpec;
import org.openapis.openapi.models.shared.ReplicationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SlaDomainPatchDefinition;
import org.openapis.openapi.models.shared.SlaFrequency;
import org.openapis.openapi.models.shared.SlaStartTimeAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("velit", "officiis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchSlaDomainRequest req = new PatchSlaDomainRequest(                new SlaDomainPatchDefinition() {{
                                allowedBackupWindows = new org.openapis.openapi.models.shared.BackupWindow[]{{
                                    add(new BackupWindow(397014,                 new SlaStartTimeAttributes(339843, 704402) {{
                                                        dayOfWeek = 218128;
                                                    }};) {{
                                        durationInHours = 701978;
                                        startTimeAttributes = new SlaStartTimeAttributes(131687, 771632) {{
                                            dayOfWeek = 930111;
                                            hour = 489685;
                                            minutes = 373449;
                                        }};
                                    }}),
                                    add(new BackupWindow(709051,                 new SlaStartTimeAttributes(730003, 615277) {{
                                                        dayOfWeek = 74921;
                                                    }};) {{
                                        durationInHours = 284885;
                                        startTimeAttributes = new SlaStartTimeAttributes(907899, 221781) {{
                                            dayOfWeek = 308819;
                                            hour = 103988;
                                            minutes = 506966;
                                        }};
                                    }}),
                                }};
                                archivalSpecs = new org.openapis.openapi.models.shared.ArchivalSpec[]{{
                                    add(new ArchivalSpec(881189L, "aperiam") {{
                                        archivalThreshold = 553315L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER_DEEP_ARCHIVE;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 576657L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "iusto";
                                        locationName = "enim";
                                    }}),
                                    add(new ArchivalSpec(848063L, "rem") {{
                                        archivalThreshold = 916419L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 271551L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "quae";
                                        locationName = "omnis";
                                    }}),
                                    add(new ArchivalSpec(305189L, "labore") {{
                                        archivalThreshold = 949370L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 264958L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "earum";
                                        locationName = "architecto";
                                    }}),
                                    add(new ArchivalSpec(891302L, "facere") {{
                                        archivalThreshold = 983434L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.AZURE_ARCHIVE;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 902132L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "consequatur";
                                        locationName = "esse";
                                    }}),
                                }};
                                firstFullAllowedBackupWindows = new org.openapis.openapi.models.shared.BackupWindow[]{{
                                    add(new BackupWindow(196451,                 new SlaStartTimeAttributes(785555, 671528) {{
                                                        dayOfWeek = 748973;
                                                    }};) {{
                                        durationInHours = 769047;
                                        startTimeAttributes = new SlaStartTimeAttributes(319834, 970411) {{
                                            dayOfWeek = 302878;
                                            hour = 677895;
                                            minutes = 644827;
                                        }};
                                    }}),
                                    add(new BackupWindow(442873,                 new SlaStartTimeAttributes(157281, 898088) {{
                                                        dayOfWeek = 37764;
                                                    }};) {{
                                        durationInHours = 842974;
                                        startTimeAttributes = new SlaStartTimeAttributes(642804, 584640) {{
                                            dayOfWeek = 607624;
                                            hour = 16252;
                                            minutes = 369941;
                                        }};
                                    }}),
                                    add(new BackupWindow(140439,                 new SlaStartTimeAttributes(479830, 712893) {{
                                                        dayOfWeek = 176935;
                                                    }};) {{
                                        durationInHours = 321473;
                                        startTimeAttributes = new SlaStartTimeAttributes(514767, 152742) {{
                                            dayOfWeek = 392752;
                                            hour = 474185;
                                            minutes = 154130;
                                        }};
                                    }}),
                                    add(new BackupWindow(38044,                 new SlaStartTimeAttributes(718119, 956545) {{
                                                        dayOfWeek = 463050;
                                                    }};) {{
                                        durationInHours = 830477;
                                        startTimeAttributes = new SlaStartTimeAttributes(291389, 457063) {{
                                            dayOfWeek = 199879;
                                            hour = 57909;
                                            minutes = 575139;
                                        }};
                                    }}),
                                }};
                                frequencies = new org.openapis.openapi.models.shared.SlaFrequency[]{{
                                    add(new SlaFrequency(531494, 482628, "quod") {{
                                        frequency = 307306;
                                        retention = 964201;
                                        timeUnit = "culpa";
                                    }}),
                                    add(new SlaFrequency(353819, 675058, "voluptas") {{
                                        frequency = 977583;
                                        retention = 374414;
                                        timeUnit = "non";
                                    }}),
                                    add(new SlaFrequency(359453, 252567, "necessitatibus") {{
                                        frequency = 987371;
                                        retention = 657862;
                                        timeUnit = "recusandae";
                                    }}),
                                }};
                                isRetentionLocked = false;
                                localRetentionLimit = 719469L;
                                name = "Lester Bartell";
                                replicationSpecs = new org.openapis.openapi.models.shared.ReplicationSpec[]{{
                                    add(new ReplicationSpec("rerum", 446793L) {{
                                        locationId = "vitae";
                                        locationName = "voluptatibus";
                                        logRetentionLimit = 42364L;
                                        replicationType = ReplicationTypeEnum.REPLICATION_TO_CLUSTER;
                                        retentionLimit = 227741L;
                                    }}),
                                }};
                            }};, "nostrum") {{
                shouldApplyToExistingSnapshots = false;
            }};            

            PatchSlaDomainResponse res = sdk.rootSlaDomain.patchSlaDomain(req);

            if (res.slaDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySlaDomain

Retrieve summary information for all SLA Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySlaDomainRequest;
import org.openapis.openapi.models.operations.QuerySlaDomainResponse;
import org.openapis.openapi.models.operations.QuerySlaDomainSortByEnum;
import org.openapis.openapi.models.operations.QuerySlaDomainSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("temporibus", "ratione") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QuerySlaDomainRequest req = new QuerySlaDomainRequest() {{
                dataSources = new String[]{{
                    add("nisi"),
                }};
                name = "Miss Johanna Ward DDS";
                primaryClusterId = "minus";
                snapshotIds = new String[]{{
                    add("possimus"),
                    add("maiores"),
                    add("odio"),
                }};
                sortBy = QuerySlaDomainSortByEnum.NAME;
                sortOrder = QuerySlaDomainSortOrderEnum.DESC;
            }};            

            QuerySlaDomainResponse res = sdk.rootSlaDomain.querySlaDomain(req);

            if (res.slaDomainSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSlaDomain

Update the properties of an SLA Domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSlaDomainRequest;
import org.openapis.openapi.models.operations.UpdateSlaDomainResponse;
import org.openapis.openapi.models.shared.ArchivalSpec;
import org.openapis.openapi.models.shared.ArchivalTieringSpec;
import org.openapis.openapi.models.shared.BackupWindow;
import org.openapis.openapi.models.shared.CloudStorageColdTierEnum;
import org.openapis.openapi.models.shared.ReplicationSpec;
import org.openapis.openapi.models.shared.ReplicationTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SlaDomainDefinition;
import org.openapis.openapi.models.shared.SlaFrequency;
import org.openapis.openapi.models.shared.SlaStartTimeAttributes;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("sapiente", "aperiam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateSlaDomainRequest req = new UpdateSlaDomainRequest(                new SlaDomainDefinition(                new org.openapis.openapi.models.shared.BackupWindow[]{{
                                                add(new BackupWindow(771931,                 new SlaStartTimeAttributes(196700, 413086) {{
                                                                    dayOfWeek = 287141;
                                                                }};) {{
                                                    durationInHours = 197982;
                                                    startTimeAttributes = new SlaStartTimeAttributes(601277, 1116) {{
                                                        dayOfWeek = 590998;
                                                        hour = 404774;
                                                        minutes = 832944;
                                                    }};
                                                }}),
                                                add(new BackupWindow(979271,                 new SlaStartTimeAttributes(715622, 649657) {{
                                                                    dayOfWeek = 770997;
                                                                }};) {{
                                                    durationInHours = 710059;
                                                    startTimeAttributes = new SlaStartTimeAttributes(317260, 859725) {{
                                                        dayOfWeek = 446737;
                                                        hour = 789870;
                                                        minutes = 123795;
                                                    }};
                                                }}),
                                                add(new BackupWindow(770544,                 new SlaStartTimeAttributes(274040, 908249) {{
                                                                    dayOfWeek = 920548;
                                                                }};) {{
                                                    durationInHours = 880998;
                                                    startTimeAttributes = new SlaStartTimeAttributes(741603, 119725) {{
                                                        dayOfWeek = 91120;
                                                        hour = 555938;
                                                        minutes = 501462;
                                                    }};
                                                }}),
                                            }},                 new org.openapis.openapi.models.shared.SlaFrequency[]{{
                                                add(new SlaFrequency(428378, 753087, "recusandae") {{
                                                    frequency = 772628;
                                                    retention = 558283;
                                                    timeUnit = "impedit";
                                                }}),
                                            }}, "ex") {{
                                allowedBackupWindows = new org.openapis.openapi.models.shared.BackupWindow[]{{
                                    add(new BackupWindow(778242,                 new SlaStartTimeAttributes(490966, 791615) {{
                                                        dayOfWeek = 717560;
                                                    }};) {{
                                        durationInHours = 86955;
                                        startTimeAttributes = new SlaStartTimeAttributes(694394, 73826) {{
                                            dayOfWeek = 982574;
                                            hour = 930877;
                                            minutes = 875452;
                                        }};
                                    }}),
                                }};
                                archivalSpecs = new org.openapis.openapi.models.shared.ArchivalSpec[]{{
                                    add(new ArchivalSpec(469588L, "quaerat") {{
                                        archivalThreshold = 738152L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 906495L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "earum";
                                        locationName = "quod";
                                    }}),
                                    add(new ArchivalSpec(138436L, "ad") {{
                                        archivalThreshold = 215959L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 514625L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "rerum";
                                        locationName = "deserunt";
                                    }}),
                                    add(new ArchivalSpec(487799L, "nulla") {{
                                        archivalThreshold = 193990L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.AZURE_ARCHIVE;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 481042L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "esse";
                                        locationName = "magnam";
                                    }}),
                                    add(new ArchivalSpec(848833L, "fugit") {{
                                        archivalThreshold = 771406L;
                                        archivalTieringSpec = new ArchivalTieringSpec(false) {{
                                            coldStorageClass = CloudStorageColdTierEnum.GLACIER;
                                            isInstantTieringEnabled = false;
                                            minAccessibleDurationInSeconds = 72422L;
                                            shouldTierExistingSnapshots = false;
                                        }};
                                        isPassthroughSupported = false;
                                        locationId = "exercitationem";
                                        locationName = "laborum";
                                    }}),
                                }};
                                isRetentionLocked = false;
                                localRetentionLimit = 804879L;
                                replicationSpecs = new org.openapis.openapi.models.shared.ReplicationSpec[]{{
                                    add(new ReplicationSpec("esse", 127499L) {{
                                        locationId = "repellat";
                                        locationName = "nostrum";
                                        logRetentionLimit = 847308L;
                                        replicationType = ReplicationTypeEnum.REPLICATION_TO_CLOUD_LOCATION;
                                        retentionLimit = 414456L;
                                    }}),
                                    add(new ReplicationSpec("exercitationem", 633643L) {{
                                        locationId = "consectetur";
                                        locationName = "temporibus";
                                        logRetentionLimit = 762525L;
                                        replicationType = ReplicationTypeEnum.REPLICATION_TO_CLUSTER;
                                        retentionLimit = 978655L;
                                    }}),
                                    add(new ReplicationSpec("suscipit", 688649L) {{
                                        locationId = "repudiandae";
                                        locationName = "aspernatur";
                                        logRetentionLimit = 960767L;
                                        replicationType = ReplicationTypeEnum.REPLICATION_TO_CLUSTER;
                                        retentionLimit = 640565L;
                                    }}),
                                }};
                            }};, "ducimus") {{
                shouldApplyToExistingSnapshots = false;
            }};            

            UpdateSlaDomainResponse res = sdk.rootSlaDomain.updateSlaDomain(req);

            if (res.slaDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
