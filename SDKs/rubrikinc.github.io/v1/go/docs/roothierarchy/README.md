# RootHierarchy

### Available Operations

* [BulkHierarchySLAConflictsV1](#bulkhierarchyslaconflictsv1) - Retrieve the list of descendant objects with SLA conflicts in bulk

## BulkHierarchySLAConflictsV1

Retrieve the list of descendant objects with an explicitly configured SLA domain, or inherit an SLA domain from a different parent for each managed ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootHierarchy.BulkHierarchySLAConflictsV1(ctx, shared.HierarchyObjectIds{
        Ids: []string{
            "quibusdam",
            "magni",
            "consequuntur",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkSLAConflictsSummary != nil {
        // handle response
    }
}
```
