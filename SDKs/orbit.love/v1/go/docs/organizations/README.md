# Organizations

### Available Operations

* [GetWorkspaceSlugOrganizations](#getworkspaceslugorganizations) - List organizations in a workspace
* [GetWorkspaceSlugOrganizationsOrganizationID](#getworkspaceslugorganizationsorganizationid) - Get an organization
* [PutWorkspaceSlugOrganizationsOrganizationID](#putworkspaceslugorganizationsorganizationid) - Update an organization

## GetWorkspaceSlugOrganizations

List organizations in a workspace

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organizations.GetWorkspaceSlugOrganizations(ctx, operations.GetWorkspaceSlugOrganizationsRequest{
        Direction: operations.GetWorkspaceSlugOrganizationsDirectionEnumAsc.ToPointer(),
        Items: operations.GetWorkspaceSlugOrganizationsItemsEnumOneHundred.ToPointer(),
        Page: sdk.String("deleniti"),
        Query: sdk.String("omnis"),
        Sort: operations.GetWorkspaceSlugOrganizationsSortEnumEmployeesCount.ToPointer(),
        WorkspaceSlug: "distinctio",
    }, operations.GetWorkspaceSlugOrganizationsSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetWorkspaceSlugOrganizationsOrganizationID

Get an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organizations.GetWorkspaceSlugOrganizationsOrganizationID(ctx, operations.GetWorkspaceSlugOrganizationsOrganizationIDRequest{
        OrganizationID: "asperiores",
        WorkspaceSlug: "nihil",
    }, operations.GetWorkspaceSlugOrganizationsOrganizationIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutWorkspaceSlugOrganizationsOrganizationID

Update an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organizations.PutWorkspaceSlugOrganizationsOrganizationID(ctx, operations.PutWorkspaceSlugOrganizationsOrganizationIDRequest{
        Organization: &shared.Organization{
            CrmUID: sdk.String("ipsum"),
            CrmURL: "voluptate",
            DealClosedDate: sdk.String("id"),
            LifecycleStage: "saepe",
            OwnerEmail: sdk.String("eius"),
            OwnerName: sdk.String("aspernatur"),
            PricePlan: sdk.String("perferendis"),
            Source: "amet",
        },
        OrganizationID: "optio",
        WorkspaceSlug: "accusamus",
    }, operations.PutWorkspaceSlugOrganizationsOrganizationIDSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
