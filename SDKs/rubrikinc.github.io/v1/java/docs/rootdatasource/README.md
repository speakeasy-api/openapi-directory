# rootDataSource

## Overview

Data Sources.

### Available Operations

* [bulkDeleteSnapshots](#bulkdeletesnapshots) - Bulk delete all snapshots for the given objects
* [bulkDeleteSnapshotsForObject](#bulkdeletesnapshotsforobject) - Bulk delete specified snapshots for the given object
* [expiredCustomRetentionSnapshots](#expiredcustomretentionsnapshots) - Returns a list of snapshots that have expired according to their snapshot-level SLA Domain assignments


## bulkDeleteSnapshots

This endpoint deletes all snapshots from all locations for the objects with the IDs specified by the 'objectIds' parameter. API returning success does not guarantee that the snapshots will be expired.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteSnapshotsResponse;
import org.openapis.openapi.models.shared.BulkDeleteSnapshotsConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quidem", "neque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.BulkDeleteSnapshotsConfig req = new BulkDeleteSnapshotsConfig(                new String[]{{
                                add("illum"),
                                add("quo"),
                                add("fuga"),
                                add("eius"),
                            }});            

            BulkDeleteSnapshotsResponse res = sdk.rootDataSource.bulkDeleteSnapshots(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkDeleteSnapshotsForObject

Bulk deletion of the snapshots specified by a list of snapshot IDs for a given object. Object type is required. Location ID is optional. API returning success does not guarantee that the snapshot will be expired.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkDeleteSnapshotsForObjectRequest;
import org.openapis.openapi.models.operations.BulkDeleteSnapshotsForObjectResponse;
import org.openapis.openapi.models.shared.BulkDeleteObjectSnapshotsConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("eos", "voluptas") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            BulkDeleteSnapshotsForObjectRequest req = new BulkDeleteSnapshotsForObjectRequest(                new BulkDeleteObjectSnapshotsConfig(                new String[]{{
                                                add("cupiditate"),
                                            }}) {{
                                locationId = "consequatur";
                            }};, "tempora");            

            BulkDeleteSnapshotsForObjectResponse res = sdk.rootDataSource.bulkDeleteSnapshotsForObject(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## expiredCustomRetentionSnapshots

Gets a list of the snapshots of a specified data source that have expired according to the snapshot-level SLA Domain assignments. This list does not include remote snapshots.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExpiredCustomRetentionSnapshotsRequest;
import org.openapis.openapi.models.operations.ExpiredCustomRetentionSnapshotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("debitis", "ipsam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            ExpiredCustomRetentionSnapshotsRequest req = new ExpiredCustomRetentionSnapshotsRequest("aspernatur");            

            ExpiredCustomRetentionSnapshotsResponse res = sdk.rootDataSource.expiredCustomRetentionSnapshots(req);

            if (res.expiredCustomRetentionSnapshots != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
