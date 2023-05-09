# Contributors

### Available Operations

* [GetContributor](#getcontributor) - Get details about a single contributor
* [GetContributorCollectionItems](#getcontributorcollectionitems) - Get the items in contributors' collections
* [GetContributorCollections](#getcontributorcollections) - Get details about contributors' collections
* [GetContributorCollectionsList](#getcontributorcollectionslist) - List contributors' collections
* [GetContributorList](#getcontributorlist) - Get details about multiple contributors

## GetContributor

This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.

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
    res, err := s.Contributors.GetContributor(ctx, operations.GetContributorRequest{
        ContributorID: "sit",
    }, operations.GetContributorSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContributorProfile != nil {
        // handle response
    }
}
```

## GetContributorCollectionItems

This endpoint lists the IDs of items in a contributor's collection and the date that each was added.

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
    res, err := s.Contributors.GetContributorCollectionItems(ctx, operations.GetContributorCollectionItemsRequest{
        ContributorID: "culpa",
        ID: "b3c20c4f-3789-4fd8-b1f9-9dd2efd121aa",
        Page: sdk.Int64(398434),
        PerPage: sdk.Int64(949298),
        Sort: operations.GetContributorCollectionItemsSortEnumNewest.ToPointer(),
    }, operations.GetContributorCollectionItemsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionItemDataList != nil {
        // handle response
    }
}
```

## GetContributorCollections

This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.

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
    res, err := s.Contributors.GetContributorCollections(ctx, operations.GetContributorCollectionsRequest{
        ContributorID: "earum",
        ID: "674bdb04-f157-4560-82d6-8ea19f1d1705",
    }, operations.GetContributorCollectionsSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## GetContributorCollectionsList

This endpoint lists collections based on contributor ID.

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
    res, err := s.Contributors.GetContributorCollectionsList(ctx, operations.GetContributorCollectionsListRequest{
        ContributorID: "veritatis",
        Sort: operations.GetContributorCollectionsListSortEnumNewest.ToPointer(),
    }, operations.GetContributorCollectionsListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionDataList != nil {
        // handle response
    }
}
```

## GetContributorList

This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.

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
    res, err := s.Contributors.GetContributorList(ctx, operations.GetContributorListRequest{
        ID: []string{
            "iste",
        },
    }, operations.GetContributorListSecurity{
        Basic: &shared.SchemeBasic{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContributorProfileDataList != nil {
        // handle response
    }
}
```
