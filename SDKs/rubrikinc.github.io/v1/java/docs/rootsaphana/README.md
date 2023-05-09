# rootSapHana

## Overview

SAP HANA.

### Available Operations

* [addSapHanaSystem](#addsaphanasystem) - Add a SAP HANA system
* [configureSapHanaRestore](#configuresaphanarestore) - Configure the target database for system copy restore
* [createOnDemandSapHanaBackup](#createondemandsaphanabackup) - Create on demand database snapshot
* [createSapHanaSystemRefresh](#createsaphanasystemrefresh) - Refresh SAP HANA system metadata
* [deleteSapHanaDbSnapshot](#deletesaphanadbsnapshot) - Delete a particular full snapshot of a SAP HANA database
* [deleteSapHanaSystem](#deletesaphanasystem) - Delete a SAP HANA system
* [getMissedSapHanaDbSnapshots](#getmissedsaphanadbsnapshots) - Retrieve summary information for missed snapshots of a SAP HANA database
* [getSapHanaDatabase](#getsaphanadatabase) - Get detailed information for an SAP HANA database
* [getSapHanaDbAsyncRequestStatus](#getsaphanadbasyncrequeststatus) - Get the status of a SAP HANA database request
* [getSapHanaDbRecoverableRanges](#getsaphanadbrecoverableranges) - Get recoverable ranges of a SAP HANA database
* [getSapHanaDbSnapshot](#getsaphanadbsnapshot) - Get SAP HANA database snapshot details
* [getSapHanaSystem](#getsaphanasystem) - Get summary information for a SAP HANA system
* [getSapHanaSystemAsyncRequestStatus](#getsaphanasystemasyncrequeststatus) - Get the status of a SAP HANA system request
* [patchSapHanaDatabase](#patchsaphanadatabase) - Update the SLA Domain for an SAP HANA database
* [patchSapHanaSystem](#patchsaphanasystem) - Update the SLA Domain for a SAP HANA system
* [querySapHanaDatabases](#querysaphanadatabases) - Get summary information for discovered SAP HANA databases
* [querySapHanaDbSnapshot](#querysaphanadbsnapshot) - Get a summary list of snapshots for a SAP HANA database
* [querySapHanaSystems](#querysaphanasystems) - Get summary information for added SAP HANA systems
* [unconfigureSapHanaRestore](#unconfiguresaphanarestore) - Reset the configuration for system copy restore on target database

## addSapHanaSystem

Add a SAP HANA system to the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSapHanaSystemResponse;
import org.openapis.openapi.models.shared.SapHanaDataPathTypeEnum;
import org.openapis.openapi.models.shared.SapHanaSystemConfig;
import org.openapis.openapi.models.shared.SapHanaSystemDataPathSpec;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("aperiam", "non") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.SapHanaSystemConfig req = new SapHanaSystemConfig(                new String[]{{
                                add("ad"),
                                add("aliquam"),
                                add("quisquam"),
                                add("quas"),
                            }}, "consequuntur", "maiores", "inventore", "aliquid") {{
                dataPathSpec = new SapHanaSystemDataPathSpec() {{
                    dataPathType = SapHanaDataPathTypeEnum.MANAGED_VOLUME;
                }};;
            }};            

            AddSapHanaSystemResponse res = sdk.rootSapHana.addSapHanaSystem(req);

            if (res.sapHanaAddSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureSapHanaRestore

Initiates a job to configure the specified target database for a system copy restore by sending metadata about the source database. System copy restore in SAP HANA is done across different databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureSapHanaRestoreRequest;
import org.openapis.openapi.models.operations.ConfigureSapHanaRestoreResponse;
import org.openapis.openapi.models.shared.SapHanaRestoreSourceConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("est", "dolor") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ConfigureSapHanaRestoreRequest req = new ConfigureSapHanaRestoreRequest(                new SapHanaRestoreSourceConfig() {{
                                snappableId = "aliquid";
                            }};, "consectetur");            

            ConfigureSapHanaRestoreResponse res = sdk.rootSapHana.configureSapHanaRestore(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOnDemandSapHanaBackup

Initiates a job to take an on demand full snapshot of a specified SAP HANA database object. The GET /sap_hana/db/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOnDemandSapHanaBackupRequest;
import org.openapis.openapi.models.operations.CreateOnDemandSapHanaBackupResponse;
import org.openapis.openapi.models.shared.BaseOnDemandSnapshotConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cumque", "rem") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOnDemandSapHanaBackupRequest req = new CreateOnDemandSapHanaBackupRequest("voluptatum") {{
                baseOnDemandSnapshotConfig = new BaseOnDemandSnapshotConfig() {{
                    slaId = "ducimus";
                }};;
            }};            

            CreateOnDemandSapHanaBackupResponse res = sdk.rootSapHana.createOnDemandSapHanaBackup(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSapHanaSystemRefresh

Initiates a job to refresh metadata of a SAP HANA system object. The GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSapHanaSystemRefreshRequest;
import org.openapis.openapi.models.operations.CreateSapHanaSystemRefreshResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("adipisci", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateSapHanaSystemRefreshRequest req = new CreateSapHanaSystemRefreshRequest("tempora");            

            CreateSapHanaSystemRefreshResponse res = sdk.rootSapHana.createSapHanaSystemRefresh(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSapHanaDbSnapshot

Initiates a request to delete a particular full snapshot of a SAP HANA database. If the log retention period for the database is still in effect, the snapshot will be deleted when the log retention period ends.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSapHanaDbSnapshotRequest;
import org.openapis.openapi.models.operations.DeleteSapHanaDbSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("blanditiis", "numquam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteSapHanaDbSnapshotRequest req = new DeleteSapHanaDbSnapshotRequest("sequi");            

            DeleteSapHanaDbSnapshotResponse res = sdk.rootSapHana.deleteSapHanaDbSnapshot(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSapHanaSystem

Initiates a job to delete a SAP HANA system object. GET /sap_hana/system/request/{id} endpoint can be used to monitor the progress of the job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSapHanaSystemRequest;
import org.openapis.openapi.models.operations.DeleteSapHanaSystemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatum", "sit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteSapHanaSystemRequest req = new DeleteSapHanaSystemRequest("rerum");            

            DeleteSapHanaSystemResponse res = sdk.rootSapHana.deleteSapHanaSystem(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMissedSapHanaDbSnapshots

Returns a summary of information for the missed snapshots of a SAP HANA database. Retrieve only the missed snapshots that occur between the beginning and ending timestamps.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMissedSapHanaDbSnapshotsRequest;
import org.openapis.openapi.models.operations.GetMissedSapHanaDbSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("veritatis", "tenetur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetMissedSapHanaDbSnapshotsRequest req = new GetMissedSapHanaDbSnapshotsRequest("autem") {{
                afterTime = OffsetDateTime.parse("2021-12-19T12:01:59.972Z");
                beforeTime = OffsetDateTime.parse("2021-01-23T02:13:37.670Z");
            }};            

            GetMissedSapHanaDbSnapshotsResponse res = sdk.rootSapHana.getMissedSapHanaDbSnapshots(req);

            if (res.missedSnapshotListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaDatabase

Returns a detailed view of the SAP HANA database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaDatabaseRequest;
import org.openapis.openapi.models.operations.GetSapHanaDatabaseResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("magni", "nihil") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaDatabaseRequest req = new GetSapHanaDatabaseRequest("voluptas");            

            GetSapHanaDatabaseResponse res = sdk.rootSapHana.getSapHanaDatabase(req);

            if (res.sapHanaDatabaseDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaDbAsyncRequestStatus

Get details about a SAP HANA database related request which includes the status of data backup job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaDbAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetSapHanaDbAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("animi", "commodi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaDbAsyncRequestStatusRequest req = new GetSapHanaDbAsyncRequestStatusRequest("alias");            

            GetSapHanaDbAsyncRequestStatusResponse res = sdk.rootSapHana.getSapHanaDbAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaDbRecoverableRanges

Retrieve the recoverable ranges for a specified SAP HANA database. Provide a beginning and/or ending timestamp to retrieve only the recoverable ranges that fall within this period of time.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaDbRecoverableRangesRequest;
import org.openapis.openapi.models.operations.GetSapHanaDbRecoverableRangesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("fuga", "aut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaDbRecoverableRangesRequest req = new GetSapHanaDbRecoverableRangesRequest("dolore") {{
                afterTime = OffsetDateTime.parse("2022-02-02T21:29:17.128Z");
                beforeTime = OffsetDateTime.parse("2022-04-16T04:49:18.950Z");
            }};            

            GetSapHanaDbRecoverableRangesResponse res = sdk.rootSapHana.getSapHanaDbRecoverableRanges(req);

            if (res.sapHanaRecoverableRangeListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaDbSnapshot

Retrieve detailed information about a full or an incremental snapshot of a SAP HANA database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaDbSnapshotRequest;
import org.openapis.openapi.models.operations.GetSapHanaDbSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eligendi", "placeat") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaDbSnapshotRequest req = new GetSapHanaDbSnapshotRequest("voluptas");            

            GetSapHanaDbSnapshotResponse res = sdk.rootSapHana.getSapHanaDbSnapshot(req);

            if (res.sapHanaDatabaseSnapshotDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaSystem

Returns a summary view of a SAP HANA system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaSystemRequest;
import org.openapis.openapi.models.operations.GetSapHanaSystemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("occaecati", "unde") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaSystemRequest req = new GetSapHanaSystemRequest("illo");            

            GetSapHanaSystemResponse res = sdk.rootSapHana.getSapHanaSystem(req);

            if (res.sapHanaSystemSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSapHanaSystemAsyncRequestStatus

Get details about a SAP HANA system related request which includes the status of delete or refresh system job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSapHanaSystemAsyncRequestStatusRequest;
import org.openapis.openapi.models.operations.GetSapHanaSystemAsyncRequestStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("nihil", "inventore") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetSapHanaSystemAsyncRequestStatusRequest req = new GetSapHanaSystemAsyncRequestStatusRequest("libero");            

            GetSapHanaSystemAsyncRequestStatusResponse res = sdk.rootSapHana.getSapHanaSystemAsyncRequestStatus(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSapHanaDatabase

Update the SLA Domain that is configured for an SAP HANA database.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSapHanaDatabaseRequest;
import org.openapis.openapi.models.operations.PatchSapHanaDatabaseResponse;
import org.openapis.openapi.models.shared.SapHanaDatabasePatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ipsam", "quasi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchSapHanaDatabaseRequest req = new PatchSapHanaDatabaseRequest(                new SapHanaDatabasePatch() {{
                                configuredSlaDomainId = "cumque";
                                logSnapshotJobIntervalInMinutes = 117491;
                            }};, "harum");            

            PatchSapHanaDatabaseResponse res = sdk.rootSapHana.patchSapHanaDatabase(req);

            if (res.sapHanaDatabaseDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSapHanaSystem

Update the SLA Domain that is configured for a SAP HANA system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSapHanaSystemRequest;
import org.openapis.openapi.models.operations.PatchSapHanaSystemResponse;
import org.openapis.openapi.models.shared.SapHanaSystemPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("facere", "facilis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchSapHanaSystemRequest req = new PatchSapHanaSystemRequest(                new SapHanaSystemPatch() {{
                                configuredSlaDomainId = "beatae";
                                hostIds = new String[]{{
                                    add("delectus"),
                                    add("labore"),
                                    add("expedita"),
                                    add("corrupti"),
                                }};
                                instanceNumber = "rem";
                                password = "atque";
                                sid = "officiis";
                                username = "Myrtle_Stracke27";
                            }};, "quod");            

            PatchSapHanaSystemResponse res = sdk.rootSapHana.patchSapHanaSystem(req);

            if (res.sapHanaPatchSystemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySapHanaDatabases

Returns summary information for SAP HANA databases connected to the CDM cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySapHanaDatabasesRequest;
import org.openapis.openapi.models.operations.QuerySapHanaDatabasesResponse;
import org.openapis.openapi.models.operations.QuerySapHanaDatabasesSortByEnum;
import org.openapis.openapi.models.operations.QuerySapHanaDatabasesSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("minus", "porro") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QuerySapHanaDatabasesRequest req = new QuerySapHanaDatabasesRequest() {{
                effectiveSlaDomainId = "id";
                isRelic = false;
                limit = 569706;
                name = "Wm Ryan";
                offset = 802216;
                primaryClusterId = "accusantium";
                slaAssignment = "soluta";
                sortBy = QuerySapHanaDatabasesSortByEnum.EFFECTIVE_SLA_DOMAIN_NAME;
                sortOrder = QuerySapHanaDatabasesSortOrderEnum.DESC;
            }};            

            QuerySapHanaDatabasesResponse res = sdk.rootSapHana.querySapHanaDatabases(req);

            if (res.sapHanaDatabaseSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySapHanaDbSnapshot

Retrieve summary information about the full and incremental snapshots of a specified SAP HANA database.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySapHanaDbSnapshotBackupTypeEnum;
import org.openapis.openapi.models.operations.QuerySapHanaDbSnapshotRequest;
import org.openapis.openapi.models.operations.QuerySapHanaDbSnapshotResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eligendi", "recusandae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QuerySapHanaDbSnapshotRequest req = new QuerySapHanaDbSnapshotRequest("veritatis") {{
                afterTime = OffsetDateTime.parse("2022-06-26T14:45:22.419Z");
                backupType = QuerySapHanaDbSnapshotBackupTypeEnum.FULL;
                beforeTime = OffsetDateTime.parse("2022-01-31T05:44:55.505Z");
            }};            

            QuerySapHanaDbSnapshotResponse res = sdk.rootSapHana.querySapHanaDbSnapshot(req);

            if (res.sapHanaDatabaseSnapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## querySapHanaSystems

Returns summary information for SAP HANA systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuerySapHanaSystemsRequest;
import org.openapis.openapi.models.operations.QuerySapHanaSystemsResponse;
import org.openapis.openapi.models.operations.QuerySapHanaSystemsSortByEnum;
import org.openapis.openapi.models.operations.QuerySapHanaSystemsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("tempora", "magni") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QuerySapHanaSystemsRequest req = new QuerySapHanaSystemsRequest() {{
                limit = 701841;
                offset = 39222;
                primaryClusterId = "voluptatem";
                sid = "eum";
                sortBy = QuerySapHanaSystemsSortByEnum.SID;
                sortOrder = QuerySapHanaSystemsSortOrderEnum.DESC;
            }};            

            QuerySapHanaSystemsResponse res = sdk.rootSapHana.querySapHanaSystems(req);

            if (res.sapHanaSystemSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unconfigureSapHanaRestore

Initiates a job to reset the configuration for the system copy restore on the specified target database. System copy restore in SAP HANA is done across different databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnconfigureSapHanaRestoreRequest;
import org.openapis.openapi.models.operations.UnconfigureSapHanaRestoreResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eum", "reprehenderit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UnconfigureSapHanaRestoreRequest req = new UnconfigureSapHanaRestoreRequest("voluptatum");            

            UnconfigureSapHanaRestoreResponse res = sdk.rootSapHana.unconfigureSapHanaRestore(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
