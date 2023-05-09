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
            AdvertiserID: sdk.String("earum"),
            CreatedAssignedInventorySources: []shared.AssignedInventorySourceInput{
                shared.AssignedInventorySourceInput{
                    InventorySourceID: sdk.String("nostrum"),
                },
                shared.AssignedInventorySourceInput{
                    InventorySourceID: sdk.String("rerum"),
                },
            },
            DeletedAssignedInventorySources: []string{
                "nam",
            },
            PartnerID: sdk.String("ullam"),
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("modi"),
        InventorySourceGroupID: "illum",
        Key: sdk.String("error"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("cum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignedInventorySourceInput: &shared.AssignedInventorySourceInput{
            InventorySourceID: sdk.String("culpa"),
        },
        AccessToken: sdk.String("a"),
        AdvertiserID: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("quia"),
        InventorySourceGroupID: "quod",
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("voluptatum"),
        PartnerID: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("cupiditate"),
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
        AccessToken: sdk.String("odit"),
        AdvertiserID: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedInventorySourceID: "ipsum",
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("nulla"),
        InventorySourceGroupID: "est",
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("necessitatibus"),
        PartnerID: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("voluptatum"),
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
        AccessToken: sdk.String("sapiente"),
        AdvertiserID: sdk.String("ut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("ut"),
        Filter: sdk.String("enim"),
        InventorySourceGroupID: "nihil",
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("tenetur"),
        OrderBy: sdk.String("saepe"),
        PageSize: sdk.Int64(801014),
        PageToken: sdk.String("nulla"),
        PartnerID: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("nemo"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InventorySourceGroupInput: &shared.InventorySourceGroupInput{
            DisplayName: sdk.String("earum"),
        },
        AccessToken: sdk.String("eum"),
        AdvertiserID: sdk.String("dolor"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("sed"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("natus"),
        PartnerID: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("deserunt"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ex"),
        AdvertiserID: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("ad"),
        InventorySourceGroupID: "asperiores",
        Key: sdk.String("nam"),
        OauthToken: sdk.String("cumque"),
        PartnerID: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("repellendus"),
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
        AccessToken: sdk.String("dicta"),
        AdvertiserID: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odio"),
        Fields: sdk.String("totam"),
        InventorySourceGroupID: "magni",
        Key: sdk.String("eos"),
        OauthToken: sdk.String("harum"),
        PartnerID: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("quos"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquam"),
        AdvertiserID: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("eum"),
        Filter: sdk.String("vitae"),
        Key: sdk.String("animi"),
        OauthToken: sdk.String("possimus"),
        OrderBy: sdk.String("libero"),
        PageSize: sdk.Int64(353214),
        PageToken: sdk.String("quaerat"),
        PartnerID: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("ipsam"),
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
