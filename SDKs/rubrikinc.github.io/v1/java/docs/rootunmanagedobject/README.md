# rootUnmanagedObject

## Overview

Unmanaged Objects.

### Available Operations

* [assignToRetentionSlaAsync](#assigntoretentionslaasync) - Assign relic/unmanaged entities to an SLA Domain for managing retention asynchronously
* [bulkTierExistingSnapshots](#bulktierexistingsnapshots) - Bulk tier existing snapshots to cold storage
* [queryUnmanagedObjectSnapshotsV1](#queryunmanagedobjectsnapshotsv1) - Get summary of all the snapshots for a given object
* [queryUnmanagedObjectV1](#queryunmanagedobjectv1) - Get summary of all the objects with unmanaged snapshots
* [queryUnmanagedReaderObject](#queryunmanagedreaderobject) - Get summary of all unmanaged reader objects

## assignToRetentionSlaAsync

Assign relic/unmanaged entities to the specified SLA Domain for managing retention. The assignment event runs asynchronously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignToRetentionSlaAsyncResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnmanagedObjectSlaAssignmentInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iusto", "corrupti") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.UnmanagedObjectSlaAssignmentInfo req = new UnmanagedObjectSlaAssignmentInfo(                new String[]{{
                                add("quis"),
                                add("iure"),
                            }}, "ab") {{
                shouldApplyToNonPolicySnapshots = false;
            }};            

            AssignToRetentionSlaAsyncResponse res = sdk.rootUnmanagedObject.assignToRetentionSlaAsync(req);

            if (res.managedObjectPendingSlaInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkTierExistingSnapshots

Schedules a job to tier existing snapshots of the specified objects to cold storage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkTierExistingSnapshotsResponse;
import org.openapis.openapi.models.shared.BulkTierSnapshotsConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quaerat", "amet") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BulkTierSnapshotsConfig req = new BulkTierSnapshotsConfig(                new String[]{{
                                add("corporis"),
                                add("est"),
                                add("iure"),
                                add("quisquam"),
                            }}) {{
                locationId = "provident";
            }};            

            BulkTierExistingSnapshotsResponse res = sdk.rootUnmanagedObject.bulkTierExistingSnapshots(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryUnmanagedObjectSnapshotsV1

Gets summary information for all snapshots of the object with the specified object ID.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectSnapshotsV1Request;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectSnapshotsV1Response;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectSnapshotsV1SnapshotTypeEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectSnapshotsV1SortByEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectSnapshotsV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laudantium", "nam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryUnmanagedObjectSnapshotsV1Request req = new QueryUnmanagedObjectSnapshotsV1Request("nemo") {{
                afterDate = OffsetDateTime.parse("2022-08-18T12:10:26.870Z");
                beforeDate = OffsetDateTime.parse("2022-09-23T05:09:40.748Z");
                limit = 19691;
                offset = 546963;
                searchValue = "doloremque";
                snapshotType = QueryUnmanagedObjectSnapshotsV1SnapshotTypeEnum.RETRIEVED;
                sortBy = QueryUnmanagedObjectSnapshotsV1SortByEnum.SNAPSHOT_DATE_AND_TIME;
                sortOrder = QueryUnmanagedObjectSnapshotsV1SortOrderEnum.ASC;
            }};            

            QueryUnmanagedObjectSnapshotsV1Response res = sdk.rootUnmanagedObject.queryUnmanagedObjectSnapshotsV1(req);

            if (res.snapshotSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryUnmanagedObjectV1

Get summary of all the objects with unmanaged snapshots.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1ObjectTypeEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1Request;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1Response;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1SortByEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1SortOrderEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedObjectV1UnmanagedStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("cum", "nobis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryUnmanagedObjectV1Request req = new QueryUnmanagedObjectV1Request() {{
                afterId = "similique";
                limit = 783764;
                objectType = QueryUnmanagedObjectV1ObjectTypeEnum.WINDOWS_HOST;
                searchValue = "nisi";
                sortBy = QueryUnmanagedObjectV1SortByEnum.SNAPSHOT_COUNT;
                sortOrder = QueryUnmanagedObjectV1SortOrderEnum.DESC;
                unmanagedStatus = QueryUnmanagedObjectV1UnmanagedStatusEnum.REMOTE_UNPROTECTED;
            }};            

            QueryUnmanagedObjectV1Response res = sdk.rootUnmanagedObject.queryUnmanagedObjectV1(req);

            if (res.unmanagedObjectDetailsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryUnmanagedReaderObject

A summary of all unmanaged objects recovered from reader archival locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectObjectTypeEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectRequest;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectResponse;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectSortByEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectSortOrderEnum;
import org.openapis.openapi.models.operations.QueryUnmanagedReaderObjectUnmanagedStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("laboriosam", "nam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryUnmanagedReaderObjectRequest req = new QueryUnmanagedReaderObjectRequest() {{
                afterId = "enim";
                limit = 979011;
                objectName = "consectetur";
                objectType = QueryUnmanagedReaderObjectObjectTypeEnum.VOLUME_GROUP;
                sortBy = QueryUnmanagedReaderObjectSortByEnum.SNAPSHOT_COUNT;
                sortOrder = QueryUnmanagedReaderObjectSortOrderEnum.DESC;
                unmanagedStatus = QueryUnmanagedReaderObjectUnmanagedStatusEnum.PROTECTED_;
            }};            

            QueryUnmanagedReaderObjectResponse res = sdk.rootUnmanagedObject.queryUnmanagedReaderObject(req);

            if (res.unmanagedObjectSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
