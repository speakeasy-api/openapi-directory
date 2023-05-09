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
        AccessToken: sdk.String("dolorem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("ducimus"),
        ID: "bd204a1f-340b-4b36-b677-a48519c33749",
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quas",
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("quos"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ex"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("aperiam"),
        ID: "3c7fd225-e478-471a-88ed-72a2d4af4158",
        Key: sdk.String("id"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "magni",
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("sapiente"),
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
            AccountID: sdk.String("repellat"),
            ID: sdk.String("nemo"),
            Kind: sdk.String("quos"),
            Name: sdk.String("Chad Rempel"),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("eaque"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "possimus",
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("laudantium"),
        Ids: []string{
            "porro",
        },
        Key: sdk.String("nostrum"),
        MaxResults: sdk.Int64(887079),
        OauthToken: sdk.String("adipisci"),
        PageToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "nisi",
        QuotaUser: sdk.String("voluptatibus"),
        SearchString: sdk.String("corporis"),
        SortField: operations.DfareportingPlacementStrategiesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementStrategiesListSortOrderEnumAscending.ToPointer(),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("maiores"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("quisquam"),
            ID: sdk.String("quibusdam"),
            Kind: sdk.String("voluptates"),
            Name: sdk.String("Robert Daugherty"),
        },
        AccessToken: sdk.String("pariatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("maxime"),
        ID: "43b18ab3-78f2-4fcf-b81d-df7e088f74ef",
        Key: sdk.String("quis"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "eligendi",
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("ab"),
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
            AccountID: sdk.String("vero"),
            ID: sdk.String("atque"),
            Kind: sdk.String("unde"),
            Name: sdk.String("Mrs. Beth Donnelly"),
        },
        AccessToken: sdk.String("soluta"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("quo"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "corrupti",
        QuotaUser: sdk.String("illum"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("reprehenderit"),
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
