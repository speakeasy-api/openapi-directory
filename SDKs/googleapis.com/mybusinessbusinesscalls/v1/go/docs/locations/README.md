# Locations

### Available Operations

* [MybusinessbusinesscallsLocationsBusinesscallsinsightsList](#mybusinessbusinesscallslocationsbusinesscallsinsightslist) - Returns insights for Business calls for a location.
* [MybusinessbusinesscallsLocationsGetBusinesscallssettings](#mybusinessbusinesscallslocationsgetbusinesscallssettings) - Returns the Business calls settings resource for the given location.
* [MybusinessbusinesscallsLocationsUpdateBusinesscallssettings](#mybusinessbusinesscallslocationsupdatebusinesscallssettings) - Updates the Business call settings for the specified location.

## MybusinessbusinesscallsLocationsBusinesscallsinsightsList

Returns insights for Business calls for a location.

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
    res, err := s.Locations.MybusinessbusinesscallsLocationsBusinesscallsinsightsList(ctx, operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("placeat"),
        PageSize: sdk.Int64(528895),
        PageToken: sdk.String("iusto"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBusinessCallsInsightsResponse != nil {
        // handle response
    }
}
```

## MybusinessbusinesscallsLocationsGetBusinesscallssettings

Returns the Business calls settings resource for the given location.

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
    res, err := s.Locations.MybusinessbusinesscallsLocationsGetBusinesscallssettings(ctx, operations.MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        Name: "Timmy Satterfield",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessCallsSettings != nil {
        // handle response
    }
}
```

## MybusinessbusinesscallsLocationsUpdateBusinesscallssettings

Updates the Business call settings for the specified location.

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
    res, err := s.Locations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettings(ctx, operations.MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BusinessCallsSettings: &shared.BusinessCallsSettings{
            CallsState: shared.BusinessCallsSettingsCallsStateEnumEnabled.ToPointer(),
            ConsentTime: sdk.String("totam"),
            Name: sdk.String("Omar Carroll"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("hic"),
        Key: sdk.String("optio"),
        Name: "Jack Johns",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UpdateMask: sdk.String("cum"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BusinessCallsSettings != nil {
        // handle response
    }
}
```
