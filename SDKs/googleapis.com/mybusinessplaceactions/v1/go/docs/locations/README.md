# Locations

### Available Operations

* [MybusinessplaceactionsLocationsPlaceActionLinksCreate](#mybusinessplaceactionslocationsplaceactionlinkscreate) - Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
* [MybusinessplaceactionsLocationsPlaceActionLinksDelete](#mybusinessplaceactionslocationsplaceactionlinksdelete) - Deletes a place action link from the specified location.
* [MybusinessplaceactionsLocationsPlaceActionLinksGet](#mybusinessplaceactionslocationsplaceactionlinksget) - Gets the specified place action link.
* [MybusinessplaceactionsLocationsPlaceActionLinksList](#mybusinessplaceactionslocationsplaceactionlinkslist) - Lists the place action links for the specified location.
* [MybusinessplaceactionsLocationsPlaceActionLinksPatch](#mybusinessplaceactionslocationsplaceactionlinkspatch) - Updates the specified place action link and returns it.

## MybusinessplaceactionsLocationsPlaceActionLinksCreate

Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.

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
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksCreate(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        PlaceActionLinkInput: &shared.PlaceActionLinkInput{
            IsPreferred: sdk.Bool(false),
            Name: sdk.String("Ted Mante"),
            PlaceActionType: shared.PlaceActionLinkPlaceActionTypeEnumFoodTakeout.ToPointer(),
            URI: sdk.String("http://gloomy-blanket.name"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("odit"),
        Parent: "at",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
}
```

## MybusinessplaceactionsLocationsPlaceActionLinksDelete

Deletes a place action link from the specified location.

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
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksDelete(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        Name: "Antoinette Nikolaus",
        OauthToken: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("optio"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessplaceactionsLocationsPlaceActionLinksGet

Gets the specified place action link.

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
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksGet(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("qui"),
        Key: sdk.String("impedit"),
        Name: "Cory Emmerich",
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
}
```

## MybusinessplaceactionsLocationsPlaceActionLinksList

Lists the place action links for the specified location.

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
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksList(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolor"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("hic"),
        Filter: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PageSize: sdk.Int64(359508),
        PageToken: sdk.String("iste"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlaceActionLinksResponse != nil {
        // handle response
    }
}
```

## MybusinessplaceactionsLocationsPlaceActionLinksPatch

Updates the specified place action link and returns it.

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
    res, err := s.Locations.MybusinessplaceactionsLocationsPlaceActionLinksPatch(ctx, operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PlaceActionLinkInput: &shared.PlaceActionLinkInput{
            IsPreferred: sdk.Bool(false),
            Name: sdk.String("Carlton O'Hara"),
            PlaceActionType: shared.PlaceActionLinkPlaceActionTypeEnumAppointment.ToPointer(),
            URI: sdk.String("http://colorless-ribbon.biz"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("accusantium"),
        Name: "Cecilia Yundt MD",
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UpdateMask: sdk.String("consequuntur"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlaceActionLink != nil {
        // handle response
    }
}
```
