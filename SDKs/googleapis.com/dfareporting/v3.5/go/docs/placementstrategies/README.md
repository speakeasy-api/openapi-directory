# PlacementStrategies

### Available Operations

* [DfareportingPlacementStrategiesDelete](#dfareportingplacementstrategiesdelete) - Deletes an existing placement strategy.
* [DfareportingPlacementStrategiesGet](#dfareportingplacementstrategiesget) - Gets one placement strategy by ID.
* [DfareportingPlacementStrategiesInsert](#dfareportingplacementstrategiesinsert) - Inserts a new placement strategy.
* [DfareportingPlacementStrategiesList](#dfareportingplacementstrategieslist) - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* [DfareportingPlacementStrategiesPatch](#dfareportingplacementstrategiespatch) - Updates an existing placement strategy. This method supports patch semantics.
* [DfareportingPlacementStrategiesUpdate](#dfareportingplacementstrategiesupdate) - Updates an existing placement strategy.

## DfareportingPlacementStrategiesDelete

Deletes an existing placement strategy.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesDelete(ctx, operations.DfareportingPlacementStrategiesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("adipisci"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("voluptatibus"),
        ID: "5576f5cd-eb02-486d-8bc4-3b18ab378f2f",
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "maiores",
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("assumenda"),
    }, operations.DfareportingPlacementStrategiesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DfareportingPlacementStrategiesGet

Gets one placement strategy by ID.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesGet(ctx, operations.DfareportingPlacementStrategiesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("eaque"),
        ID: "88f74ef5-4c92-416e-8926-313bb6fc2c8d",
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eaque",
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("unde"),
    }, operations.DfareportingPlacementStrategiesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementStrategy != nil {
        // handle response
    }
}
```

## DfareportingPlacementStrategiesInsert

Inserts a new placement strategy.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesInsert(ctx, operations.DfareportingPlacementStrategiesInsertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("quidem"),
            ID: sdk.String("vel"),
            Kind: sdk.String("autem"),
            Name: sdk.String("Laurence Hudson"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("fugiat"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "libero",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.DfareportingPlacementStrategiesInsertSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementStrategy != nil {
        // handle response
    }
}
```

## DfareportingPlacementStrategiesList

Retrieves a list of placement strategies, possibly filtered. This method supports paging.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesList(ctx, operations.DfareportingPlacementStrategiesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dicta"),
        Ids: []string{
            "id",
        },
        Key: sdk.String("id"),
        MaxResults: sdk.Int64(67786),
        OauthToken: sdk.String("nulla"),
        PageToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "at",
        QuotaUser: sdk.String("magni"),
        SearchString: sdk.String("quia"),
        SortField: operations.DfareportingPlacementStrategiesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementStrategiesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.DfareportingPlacementStrategiesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementStrategiesListResponse != nil {
        // handle response
    }
}
```

## DfareportingPlacementStrategiesPatch

Updates an existing placement strategy. This method supports patch semantics.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesPatch(ctx, operations.DfareportingPlacementStrategiesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("libero"),
            ID: sdk.String("dolorem"),
            Kind: sdk.String("pariatur"),
            Name: sdk.String("Kristen Botsford PhD"),
        },
        AccessToken: sdk.String("iusto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("est"),
        ID: "96bb3987-8839-48eb-a1bb-f7143356f634",
        Key: sdk.String("molestias"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "dicta",
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.DfareportingPlacementStrategiesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementStrategy != nil {
        // handle response
    }
}
```

## DfareportingPlacementStrategiesUpdate

Updates an existing placement strategy.

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
    res, err := s.PlacementStrategies.DfareportingPlacementStrategiesUpdate(ctx, operations.DfareportingPlacementStrategiesUpdateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("cupiditate"),
            ID: sdk.String("facilis"),
            Kind: sdk.String("dolores"),
            Name: sdk.String("Cheryl Rosenbaum"),
        },
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "enim",
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.DfareportingPlacementStrategiesUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlacementStrategy != nil {
        // handle response
    }
}
```
