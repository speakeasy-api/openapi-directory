# InventorySourceGroups

### Available Operations

* [DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit](#displayvideoinventorysourcegroupsassignedinventorysourcesbulkedit) - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* [DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreate](#displayvideoinventorysourcegroupsassignedinventorysourcescreate) - Creates an assignment between an inventory source and an inventory source group.
* [DisplayvideoInventorySourceGroupsAssignedInventorySourcesDelete](#displayvideoinventorysourcegroupsassignedinventorysourcesdelete) - Deletes the assignment between an inventory source and an inventory source group.
* [DisplayvideoInventorySourceGroupsAssignedInventorySourcesList](#displayvideoinventorysourcegroupsassignedinventorysourceslist) - Lists inventory sources assigned to an inventory source group.
* [DisplayvideoInventorySourceGroupsCreate](#displayvideoinventorysourcegroupscreate) - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* [DisplayvideoInventorySourceGroupsDelete](#displayvideoinventorysourcegroupsdelete) - Deletes an inventory source group.
* [DisplayvideoInventorySourceGroupsGet](#displayvideoinventorysourcegroupsget) - Gets an inventory source group.
* [DisplayvideoInventorySourceGroupsList](#displayvideoinventorysourcegroupslist) - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

## DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit

Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(ctx, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditAssignedInventorySourcesRequestInput: &shared.BulkEditAssignedInventorySourcesRequestInput{
            AdvertiserID: sdk.String("a"),
            CreatedAssignedInventorySources: []shared.AssignedInventorySourceInput{
                shared.AssignedInventorySourceInput{
                    InventorySourceID: sdk.String("sapiente"),
                },
            },
            DeletedAssignedInventorySources: []string{
                "assumenda",
                "repellendus",
                "omnis",
                "delectus",
            },
            PartnerID: sdk.String("odio"),
        },
        AccessToken: sdk.String("voluptatibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quam"),
        Fields: sdk.String("omnis"),
        InventorySourceGroupID: "similique",
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("quis"),
    }, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditAssignedInventorySourcesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreate

Creates an assignment between an inventory source and an inventory source group.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreate(ctx, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssignedInventorySourceInput: &shared.AssignedInventorySourceInput{
            InventorySourceID: sdk.String("sed"),
        },
        AccessToken: sdk.String("non"),
        AdvertiserID: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("ipsa"),
        InventorySourceGroupID: "reiciendis",
        Key: sdk.String("labore"),
        OauthToken: sdk.String("vero"),
        PartnerID: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedInventorySource != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsAssignedInventorySourcesDelete

Deletes the assignment between an inventory source and an inventory source group.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDelete(ctx, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iusto"),
        AdvertiserID: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedInventorySourceID: "iure",
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("modi"),
        InventorySourceGroupID: "magnam",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("nulla"),
        PartnerID: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsAssignedInventorySourcesList

Lists inventory sources assigned to an inventory source group.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsAssignedInventorySourcesList(ctx, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("unde"),
        AdvertiserID: sdk.String("quae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nostrum"),
        Fields: sdk.String("eveniet"),
        Filter: sdk.String("laboriosam"),
        InventorySourceGroupID: "ratione",
        Key: sdk.String("blanditiis"),
        OauthToken: sdk.String("quidem"),
        OrderBy: sdk.String("illum"),
        PageSize: sdk.Int64(970376),
        PageToken: sdk.String("placeat"),
        PartnerID: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("quia"),
    }, operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssignedInventorySourcesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsCreate

Creates a new inventory source group. Returns the newly created inventory source group if successful.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsCreate(ctx, operations.DisplayvideoInventorySourceGroupsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InventorySourceGroupInput: &shared.InventorySourceGroupInput{
            DisplayName: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("quo"),
        AdvertiserID: sdk.String("laudantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorem"),
        PartnerID: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.DisplayvideoInventorySourceGroupsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySourceGroup != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsDelete

Deletes an inventory source group.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsDelete(ctx, operations.DisplayvideoInventorySourceGroupsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ad"),
        AdvertiserID: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("asperiores"),
        Fields: sdk.String("reprehenderit"),
        InventorySourceGroupID: "deserunt",
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("et"),
        PartnerID: sdk.String("eos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("praesentium"),
    }, operations.DisplayvideoInventorySourceGroupsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsGet

Gets an inventory source group.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsGet(ctx, operations.DisplayvideoInventorySourceGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vitae"),
        AdvertiserID: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("eligendi"),
        InventorySourceGroupID: "repudiandae",
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("inventore"),
        PartnerID: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DisplayvideoInventorySourceGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InventorySourceGroup != nil {
        // handle response
    }
}
```

## DisplayvideoInventorySourceGroupsList

Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

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
    res, err := s.InventorySourceGroups.DisplayvideoInventorySourceGroupsList(ctx, operations.DisplayvideoInventorySourceGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolorem"),
        AdvertiserID: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("voluptate"),
        Filter: sdk.String("voluptate"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("minus"),
        OrderBy: sdk.String("a"),
        PageSize: sdk.Int64(686301),
        PageToken: sdk.String("totam"),
        PartnerID: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DisplayvideoInventorySourceGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInventorySourceGroupsResponse != nil {
        // handle response
    }
}
```
