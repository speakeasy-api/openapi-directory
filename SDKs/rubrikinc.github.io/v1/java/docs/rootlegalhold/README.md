# rootLegalHold

## Overview

Legal Hold.

### Available Operations

* [applyLegalHold](#applylegalhold) - Apply a Legal Hold
* [dissolveLegalHoldSnapshots](#dissolvelegalholdsnapshots) - Dissolve a collection of snapshots of specified data source from Legal Hold
* [getLegalHoldObjects](#getlegalholdobjects) - Get objects part of Legal Hold
* [queryLegalHold](#querylegalhold) - Get snasphots held under legal hold

## applyLegalHold

Places a snapshot on legal hold by specifying the hold requirements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplyLegalHoldResponse;
import org.openapis.openapi.models.shared.ApplyLegalHoldDefinition;
import org.openapis.openapi.models.shared.HoldConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("repellat", "pariatur") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.ApplyLegalHoldDefinition req = new ApplyLegalHoldDefinition(                new HoldConfig() {{
                                isHoldInPlace = false;
                            }};, "nemo");            

            ApplyLegalHoldResponse res = sdk.rootLegalHold.applyLegalHold(req);

            if (res.legalHoldSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dissolveLegalHoldSnapshots

Dissolve a collection of snapshots of specified data source from Legal Hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DissolveLegalHoldSnapshotsRequest;
import org.openapis.openapi.models.operations.DissolveLegalHoldSnapshotsResponse;
import org.openapis.openapi.models.shared.DissolveLegalHoldDefinition;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reprehenderit", "aperiam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DissolveLegalHoldSnapshotsRequest req = new DissolveLegalHoldSnapshotsRequest(                new DissolveLegalHoldDefinition(                new String[]{{
                                                add("minima"),
                                                add("in"),
                                            }});, "ducimus");            

            DissolveLegalHoldSnapshotsResponse res = sdk.rootLegalHold.dissolveLegalHoldSnapshots(req);

            if (res.dissolveLegalHoldResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLegalHoldObjects

Returns the object details for object with snapshots under legal hold.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLegalHoldObjectsRequest;
import org.openapis.openapi.models.operations.GetLegalHoldObjectsResponse;
import org.openapis.openapi.models.operations.GetLegalHoldObjectsSortByEnum;
import org.openapis.openapi.models.operations.GetLegalHoldObjectsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("excepturi", "dolores") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetLegalHoldObjectsRequest req = new GetLegalHoldObjectsRequest() {{
                limit = 621169;
                objectId = "veritatis";
                objectName = "ducimus";
                objectType = "voluptate";
                offset = 866789;
                sortBy = GetLegalHoldObjectsSortByEnum.NUMBER_OF_SNAPSHOTS_HELD;
                sortOrder = GetLegalHoldObjectsSortOrderEnum.DESC;
            }};            

            GetLegalHoldObjectsResponse res = sdk.rootLegalHold.getLegalHoldObjects(req);

            if (res.objectHoldSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryLegalHold

Get summary for snapshots under legal hold. If object_id is passed, return summary information only for snapshots of the object under legal hold else return summary for all snapshots under legal hold.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryLegalHoldRequest;
import org.openapis.openapi.models.operations.QueryLegalHoldResponse;
import org.openapis.openapi.models.operations.QueryLegalHoldSnapshotTypeEnum;
import org.openapis.openapi.models.operations.QueryLegalHoldSortByEnum;
import org.openapis.openapi.models.operations.QueryLegalHoldSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("optio", "ex") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryLegalHoldRequest req = new QueryLegalHoldRequest() {{
                afterDate = OffsetDateTime.parse("2022-08-01T21:46:48.262Z");
                beforeDate = OffsetDateTime.parse("2020-07-27T03:09:40.338Z");
                limit = 697274;
                objectId = "exercitationem";
                objectName = "quam";
                objectType = "dolorem";
                offset = 264619;
                placedOnHoldAfterDate = OffsetDateTime.parse("2022-06-04T22:19:22.955Z");
                placedOnHoldBeforeDate = OffsetDateTime.parse("2022-06-01T14:00:05.540Z");
                snapshotType = QueryLegalHoldSnapshotTypeEnum.UNPROTECTED;
                sortBy = QueryLegalHoldSortByEnum.SNAPSHOT_TYPE;
                sortOrder = QueryLegalHoldSortOrderEnum.ASC;
            }};            

            QueryLegalHoldResponse res = sdk.rootLegalHold.queryLegalHold(req);

            if (res.legalHoldSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
