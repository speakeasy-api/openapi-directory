# rootOracle

## Overview

Oracle.

### Available Operations

* [bulkUpdateOracleDb](#bulkupdateoracledb) - Update Oracle Databases
* [bulkUpdateOracleHost](#bulkupdateoraclehost) - Update Oracle Hosts
* [bulkUpdateOracleRac](#bulkupdateoraclerac) - Update Oracle RACs
* [createOracleValidateBackupJob](#createoraclevalidatebackupjob) - Validate Oracle database backups
* [deleteDownloadedSnapshots](#deletedownloadedsnapshots) - Delete downloaded Oracle database snapshots and log snapshots
* [getAcoParameterList](#getacoparameterlist) - List of supported Advanced Cloning Options
* [getExampleAcoDownloadLink](#getexampleacodownloadlink) - Link to download the Advanced Recovery Options example file
* [getOracleDbV1](#getoracledbv1) - Get Oracle database information
* [oracleRestoreEstimate](#oraclerestoreestimate) - Get a size estimate for a restore or export
* [queryOracleDbV1](#queryoracledbv1) - Get summary information for Oracle databases
* [updateOracleDataGuardGroup](#updateoracledataguardgroup) - Update an Oracle Data Guard group
* [updateOracleDbV1](#updateoracledbv1) - Update an Oracle database
* [validateOracleAcoFile](#validateoracleacofile) - Validate Oracle ACO file

## bulkUpdateOracleDb

Update the properties of the objects that represent the specified Oracle Databases.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateOracleDbResponse;
import org.openapis.openapi.models.shared.OracleBulkUpdate;
import org.openapis.openapi.models.shared.OracleNodeOrder;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("dicta", "vel") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.OracleBulkUpdate req = new OracleBulkUpdate(                new String[]{{
                                add("debitis"),
                                add("ullam"),
                                add("architecto"),
                            }}) {{
                configuredSlaDomainIdDeprecated = "accusantium";
                hostLogRetentionHours = 18096;
                hostMount = "veritatis";
                logBackupFrequencyInMinutes = 590585;
                logRetentionHours = 765833;
                nodeOrder = new org.openapis.openapi.models.shared.OracleNodeOrder[]{{
                    add(new OracleNodeOrder("nemo", 923456) {{
                        nodeName = "quibusdam";
                        order = 798690;
                    }}),
                    add(new OracleNodeOrder("dignissimos", 388404) {{
                        nodeName = "velit";
                        order = 299153;
                    }}),
                }};
                numChannels = 152283;
            }};            

            BulkUpdateOracleDbResponse res = sdk.rootOracle.bulkUpdateOracleDb(req);

            if (res.bulkOracleDbDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateOracleHost

Update properties to Oracle Host objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateOracleHostResponse;
import org.openapis.openapi.models.shared.OracleBulkUpdate;
import org.openapis.openapi.models.shared.OracleNodeOrder;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("odio", "natus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.OracleBulkUpdate req = new OracleBulkUpdate(                new String[]{{
                                add("cum"),
                                add("doloribus"),
                                add("facilis"),
                            }}) {{
                configuredSlaDomainIdDeprecated = "quidem";
                hostLogRetentionHours = 932080;
                hostMount = "laboriosam";
                logBackupFrequencyInMinutes = 601714;
                logRetentionHours = 263767;
                nodeOrder = new org.openapis.openapi.models.shared.OracleNodeOrder[]{{
                    add(new OracleNodeOrder("aspernatur", 725784) {{
                        nodeName = "hic";
                        order = 736985;
                    }}),
                    add(new OracleNodeOrder("recusandae", 797254) {{
                        nodeName = "nam";
                        order = 279172;
                    }}),
                    add(new OracleNodeOrder("autem", 779409) {{
                        nodeName = "id";
                        order = 904440;
                    }}),
                }};
                numChannels = 198991;
            }};            

            BulkUpdateOracleHostResponse res = sdk.rootOracle.bulkUpdateOracleHost(req);

            if (res.bulkOracleHostDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateOracleRac

Update the properties of the objects that represent the specified Oracle RAC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateOracleRacResponse;
import org.openapis.openapi.models.shared.OracleBulkUpdate;
import org.openapis.openapi.models.shared.OracleNodeOrder;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("illum", "nemo") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.OracleBulkUpdate req = new OracleBulkUpdate(                new String[]{{
                                add("facilis"),
                                add("non"),
                                add("mollitia"),
                                add("assumenda"),
                            }}) {{
                configuredSlaDomainIdDeprecated = "recusandae";
                hostLogRetentionHours = 718981;
                hostMount = "pariatur";
                logBackupFrequencyInMinutes = 323365;
                logRetentionHours = 816151;
                nodeOrder = new org.openapis.openapi.models.shared.OracleNodeOrder[]{{
                    add(new OracleNodeOrder("incidunt", 802356) {{
                        nodeName = "eveniet";
                        order = 673191;
                    }}),
                    add(new OracleNodeOrder("suscipit", 647210) {{
                        nodeName = "ipsam";
                        order = 60;
                    }}),
                    add(new OracleNodeOrder("est", 577413) {{
                        nodeName = "molestias";
                        order = 672889;
                    }}),
                }};
                numChannels = 286716;
            }};            

            BulkUpdateOracleRacResponse res = sdk.rootOracle.bulkUpdateOracleRac(req);

            if (res.bulkOracleRacDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOracleValidateBackupJob

Queue a job to validate Oracle backups for a database snapshot or a specified timestamp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOracleValidateBackupJobRequest;
import org.openapis.openapi.models.operations.CreateOracleValidateBackupJobResponse;
import org.openapis.openapi.models.shared.OracleRecoveryPoint;
import org.openapis.openapi.models.shared.OracleValidateConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quo", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            CreateOracleValidateBackupJobRequest req = new CreateOracleValidateBackupJobRequest(                new OracleValidateConfig(                new OracleRecoveryPoint() {{
                                                snapshotId = "fugit";
                                                timestampMs = 399222L;
                                            }};, "magnam") {{
                                numChannels = 308528;
                                sgaMaxSizeInMb = 755868L;
                                targetMountPath = "hic";
                                targetOracleHome = "nostrum";
                            }};, "officiis");            

            CreateOracleValidateBackupJobResponse res = sdk.rootOracle.createOracleValidateBackupJob(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDownloadedSnapshots

Requests an asynchronous job to expire downloaded database snapshots taken during a specified time period as well as log snapshots that contain any logs with timestamps within that time period.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDownloadedSnapshotsRequest;
import org.openapis.openapi.models.operations.DeleteDownloadedSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("unde", "nulla") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteDownloadedSnapshotsRequest req = new DeleteDownloadedSnapshotsRequest("error") {{
                afterTime = OffsetDateTime.parse("2022-05-28T00:17:18.151Z");
                beforeTime = OffsetDateTime.parse("2022-07-16T18:26:00.868Z");
            }};            

            DeleteDownloadedSnapshotsResponse res = sdk.rootOracle.deleteDownloadedSnapshots(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAcoParameterList

Get the list of supported Advanced Cloning Options (ACO) parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAcoParameterListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "fuga") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAcoParameterListResponse res = sdk.rootOracle.getAcoParameterList();

            if (res.oracleAcoParameterList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExampleAcoDownloadLink

Link to download the Advanced Recovery Options example file which can be used to customize Oracle recoveries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExampleAcoDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("facere", "impedit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetExampleAcoDownloadLinkResponse res = sdk.rootOracle.getExampleAcoDownloadLink();

            if (res.oracleFileDownloadLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOracleDbV1

Retrieves detailed information for a specified Oracle database object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOracleDbV1Request;
import org.openapis.openapi.models.operations.GetOracleDbV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quasi", "deserunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetOracleDbV1Request req = new GetOracleDbV1Request("quod");            

            GetOracleDbV1Response res = sdk.rootOracle.getOracleDbV1(req);

            if (res.oracleDbDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## oracleRestoreEstimate

The estimated size of the data to download from an archival location in order to perform a specified restore or export operation.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OracleRestoreEstimateRequest;
import org.openapis.openapi.models.operations.OracleRestoreEstimateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "doloremque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            OracleRestoreEstimateRequest req = new OracleRestoreEstimateRequest("voluptatem") {{
                recoveryTime = OffsetDateTime.parse("2020-04-19T09:30:43.417Z");
                snapshotId = "maxime";
            }};            

            OracleRestoreEstimateResponse res = sdk.rootOracle.oracleRestoreEstimate(req);

            if (res.oracleRestoreEstimateResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryOracleDbV1

Retrieves an array containing summary information about the Oracle database objects in the Rubrik cluster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryOracleDbV1Request;
import org.openapis.openapi.models.operations.QueryOracleDbV1Response;
import org.openapis.openapi.models.operations.QueryOracleDbV1SLAAssignmentEnum;
import org.openapis.openapi.models.operations.QueryOracleDbV1SortByEnum;
import org.openapis.openapi.models.operations.QueryOracleDbV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("consequatur", "eaque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryOracleDbV1Request req = new QueryOracleDbV1Request() {{
                effectiveSlaDomainId = "architecto";
                includeBackupTaskInfo = false;
                isDataGuardGroup = false;
                isLiveMount = false;
                isRelic = false;
                limit = 627161;
                name = "Guy Beier";
                offset = 148379;
                primaryClusterId = "necessitatibus";
                slaAssignment = QueryOracleDbV1SLAAssignmentEnum.UNASSIGNED;
                sortBy = QueryOracleDbV1SortByEnum.EFFECTIVE_SLA_DOMAIN_NAME;
                sortOrder = QueryOracleDbV1SortOrderEnum.DESC;
            }};            

            QueryOracleDbV1Response res = sdk.rootOracle.queryOracleDbV1(req);

            if (res.oracleDbSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOracleDataGuardGroup

Update properties of an Oracle Data Guard group object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOracleDataGuardGroupRequest;
import org.openapis.openapi.models.operations.UpdateOracleDataGuardGroupResponse;
import org.openapis.openapi.models.shared.OracleDataGuardGroupUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("a", "maiores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateOracleDataGuardGroupRequest req = new UpdateOracleDataGuardGroupRequest(                new OracleDataGuardGroupUpdate() {{
                                hostLogRetentionHours = 514462;
                                hostMount = "maiores";
                                logBackupFrequencyInMinutes = 691;
                                logRetentionHours = 992667;
                                numChannels = 523365;
                                preferredDGMemberUniqueNames = new String[]{{
                                    add("suscipit"),
                                }};
                                shouldBackupFromPrimaryOnly = false;
                            }};, "earum");            

            UpdateOracleDataGuardGroupResponse res = sdk.rootOracle.updateOracleDataGuardGroup(req);

            if (res.oracleDbDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOracleDbV1

Updates the properties of a specified Oracle database object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOracleDbV1Request;
import org.openapis.openapi.models.operations.UpdateOracleDbV1Response;
import org.openapis.openapi.models.shared.OracleNodeOrder;
import org.openapis.openapi.models.shared.OracleUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("doloribus", "velit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateOracleDbV1Request req = new UpdateOracleDbV1Request(                new OracleUpdate() {{
                                configuredSlaDomainIdDeprecated = "eius";
                                hostLogRetentionHours = 458212;
                                hostMount = "in";
                                logBackupFrequencyInMinutes = 757407;
                                logRetentionHours = 94697;
                                nodeOrder = new org.openapis.openapi.models.shared.OracleNodeOrder[]{{
                                    add(new OracleNodeOrder("accusantium", 185816) {{
                                        nodeName = "vero";
                                        order = 566312;
                                    }}),
                                }};
                                numChannels = 771241;
                            }};, "beatae");            

            UpdateOracleDbV1Response res = sdk.rootOracle.updateOracleDbV1(req);

            if (res.oracleDbDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateOracleAcoFile

Validate the provided Oracle ACO (Advanced Cloning Options) file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateOracleAcoFileRequest;
import org.openapis.openapi.models.operations.ValidateOracleAcoFileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("incidunt", "dicta") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ValidateOracleAcoFileRequest req = new ValidateOracleAcoFileRequest("odit", false);            

            ValidateOracleAcoFileResponse res = sdk.rootOracle.validateOracleAcoFile(req);

            if (res.oracleAcoValidationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
