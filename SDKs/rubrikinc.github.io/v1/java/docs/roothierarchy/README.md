# rootHierarchy

### Available Operations

* [bulkHierarchySlaConflictsV1](#bulkhierarchyslaconflictsv1) - Retrieve the list of descendant objects with SLA conflicts in bulk

## bulkHierarchySlaConflictsV1

Retrieve the list of descendant objects with an explicitly configured SLA domain, or inherit an SLA domain from a different parent for each managed ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkHierarchySlaConflictsV1Response;
import org.openapis.openapi.models.shared.HierarchyObjectIds;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("animi", "nostrum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.HierarchyObjectIds req = new HierarchyObjectIds(                new String[]{{
                                add("provident"),
                                add("possimus"),
                                add("animi"),
                            }});            

            BulkHierarchySlaConflictsV1Response res = sdk.rootHierarchy.bulkHierarchySlaConflictsV1(req);

            if (res.bulkSlaConflictsSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
