# V1

### Available Operations

* [FirebasedynamiclinksGetLinkStats](#firebasedynamiclinksgetlinkstats) - Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
* [FirebasedynamiclinksInstallAttribution](#firebasedynamiclinksinstallattribution) - Get iOS strong/weak-match info for post-install attribution.
* [FirebasedynamiclinksReopenAttribution](#firebasedynamiclinksreopenattribution) - Get iOS reopen attribution for app universal link open deeplinking.

## FirebasedynamiclinksGetLinkStats

Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.

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
    res, err := s.V1.FirebasedynamiclinksGetLinkStats(ctx, operations.FirebasedynamiclinksGetLinkStatsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        DurationDays: sdk.String("voluptatibus"),
        DynamicLink: "vero",
        Fields: sdk.String("nihil"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        SDKVersion: sdk.String("omnis"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("cum"),
    }, operations.FirebasedynamiclinksGetLinkStatsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DynamicLinkStats != nil {
        // handle response
    }
}
```

## FirebasedynamiclinksInstallAttribution

Get iOS strong/weak-match info for post-install attribution.

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
    res, err := s.V1.FirebasedynamiclinksInstallAttribution(ctx, operations.FirebasedynamiclinksInstallAttributionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GetIosPostInstallAttributionRequest: &shared.GetIosPostInstallAttributionRequest{
            AppInstallationTime: sdk.String("doloremque"),
            BundleID: sdk.String("reprehenderit"),
            Device: &shared.DeviceInfo{
                DeviceModelName: sdk.String("ut"),
                LanguageCode: sdk.String("maiores"),
                LanguageCodeFromWebview: sdk.String("dicta"),
                LanguageCodeRaw: sdk.String("corporis"),
                ScreenResolutionHeight: sdk.String("dolore"),
                ScreenResolutionWidth: sdk.String("iusto"),
                Timezone: sdk.String("dicta"),
            },
            IosVersion: sdk.String("harum"),
            RetrievalMethod: shared.GetIosPostInstallAttributionRequestRetrievalMethodEnumImplicitWeakMatch.ToPointer(),
            SDKVersion: sdk.String("accusamus"),
            UniqueMatchLinkToCheck: sdk.String("commodi"),
            VisualStyle: shared.GetIosPostInstallAttributionRequestVisualStyleEnumCustomStyle.ToPointer(),
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("modi"),
        UploadType: sdk.String("praesentium"),
        UploadProtocol: sdk.String("rem"),
    }, operations.FirebasedynamiclinksInstallAttributionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIosPostInstallAttributionResponse != nil {
        // handle response
    }
}
```

## FirebasedynamiclinksReopenAttribution

Get iOS reopen attribution for app universal link open deeplinking.

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
    res, err := s.V1.FirebasedynamiclinksReopenAttribution(ctx, operations.FirebasedynamiclinksReopenAttributionRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GetIosReopenAttributionRequest: &shared.GetIosReopenAttributionRequest{
            BundleID: sdk.String("quasi"),
            RequestedLink: sdk.String("repudiandae"),
            SDKVersion: sdk.String("sint"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("incidunt"),
        Fields: sdk.String("enim"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.FirebasedynamiclinksReopenAttributionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIosReopenAttributionResponse != nil {
        // handle response
    }
}
```
