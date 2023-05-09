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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
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
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("qui"),
        ID: "6313bb6f-c2c8-4d27-8109-6b66ad6e3e1d",
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "ipsum",
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("aliquid"),
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
            AccountID: sdk.String("nesciunt"),
            ID: sdk.String("non"),
            Kind: sdk.String("quaerat"),
            Name: sdk.String("Samuel Casper"),
        },
        AccessToken: sdk.String("ab"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("at"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "modi",
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("debitis"),
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
        AccessToken: sdk.String("libero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("pariatur"),
        Fields: sdk.String("labore"),
        Ids: []string{
            "quasi",
            "ducimus",
        },
        Key: sdk.String("eaque"),
        MaxResults: sdk.Int64(895114),
        OauthToken: sdk.String("iusto"),
        PageToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quos",
        QuotaUser: sdk.String("est"),
        SearchString: sdk.String("perspiciatis"),
        SortField: operations.DfareportingPlacementStrategiesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementStrategiesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("sequi"),
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
            AccountID: sdk.String("totam"),
            ID: sdk.String("reprehenderit"),
            Kind: sdk.String("voluptatum"),
            Name: sdk.String("Jimmy Metz"),
        },
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("expedita"),
        ID: "bf714335-6f63-449a-9642-49b211ce46b9",
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "vel",
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("facilis"),
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
            AccountID: sdk.String("corporis"),
            ID: sdk.String("atque"),
            Kind: sdk.String("optio"),
            Name: sdk.String("Salvador Bosco"),
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quia",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("quae"),
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
