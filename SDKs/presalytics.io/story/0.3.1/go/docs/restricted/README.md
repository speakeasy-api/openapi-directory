# Restricted

### Available Operations

* [CollaboratorsPost](#collaboratorspost) - Collborators: Bulk Update (Admin Only)

## CollaboratorsPost

Allows for bulk updates on collaborator metadata.  Restricted to internal admins

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Restricted.CollaboratorsPost(ctx, shared.CollaboratorBulkUpdateRequest{
        Active: sdk.Bool(false),
        LeadID: sdk.Int(99569),
        UserID: sdk.String("e5b7fd2e-d028-4921-8ddc-692601fb576b"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionTypes != nil {
        // handle response
    }
}
```
