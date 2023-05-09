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
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("dolor"),
        ID: "663c66dc-bb7d-4f6c-b09c-8b408e071377",
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "saepe",
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("voluptates"),
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
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("et"),
        Fields: sdk.String("possimus"),
        ID: "9780a10c-47b9-4504-8d6c-8b2a5f002207",
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "quae",
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("molestias"),
        UploadProtocol: sdk.String("maiores"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("aperiam"),
            ID: sdk.String("alias"),
            Kind: sdk.String("sit"),
            Name: sdk.String("Merle Stanton"),
        },
        AccessToken: sdk.String("doloremque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("quos"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "aliquam",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("iste"),
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
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("iure"),
        Ids: []string{
            "recusandae",
        },
        Key: sdk.String("iste"),
        MaxResults: sdk.Int64(123286),
        OauthToken: sdk.String("corporis"),
        PageToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "alias",
        QuotaUser: sdk.String("ratione"),
        SearchString: sdk.String("sed"),
        SortField: operations.DfareportingPlacementStrategiesListSortFieldEnumID.ToPointer(),
        SortOrder: operations.DfareportingPlacementStrategiesListSortOrderEnumDescending.ToPointer(),
        UploadType: sdk.String("eos"),
        UploadProtocol: sdk.String("eligendi"),
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
            AccountID: sdk.String("cupiditate"),
            ID: sdk.String("distinctio"),
            Kind: sdk.String("omnis"),
            Name: sdk.String("Rhonda Klocko DVM"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("iste"),
        ID: "e5b7ec76-2664-49d8-8eb9-e4cfd2276e0b",
        Key: sdk.String("rem"),
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "repellat",
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("atque"),
        UploadProtocol: sdk.String("iure"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlacementStrategy: &shared.PlacementStrategy{
            AccountID: sdk.String("aliquid"),
            ID: sdk.String("asperiores"),
            Kind: sdk.String("similique"),
            Name: sdk.String("Bridget Keebler"),
        },
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "asperiores",
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("nam"),
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
