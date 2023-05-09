# Platforms

### Available Operations

* [VersionhistoryPlatformsChannelsList](#versionhistoryplatformschannelslist) - Returns list of channels that are available for a given platform.
* [VersionhistoryPlatformsChannelsVersionsList](#versionhistoryplatformschannelsversionslist) - Returns list of version for the given platform/channel.
* [VersionhistoryPlatformsChannelsVersionsReleasesList](#versionhistoryplatformschannelsversionsreleaseslist) - Returns list of releases of the given version.
* [VersionhistoryPlatformsList](#versionhistoryplatformslist) - Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

## VersionhistoryPlatformsChannelsList

Returns list of channels that are available for a given platform.

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
    res, err := s.Platforms.VersionhistoryPlatformsChannelsList(ctx, operations.VersionhistoryPlatformsChannelsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        PageSize: sdk.Int64(791725),
        PageToken: sdk.String("placeat"),
        Parent: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## VersionhistoryPlatformsChannelsVersionsList

Returns list of version for the given platform/channel.

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
    res, err := s.Platforms.VersionhistoryPlatformsChannelsVersionsList(ctx, operations.VersionhistoryPlatformsChannelsVersionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("deserunt"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("ipsam"),
        OrderBy: sdk.String("repellendus"),
        PageSize: sdk.Int64(957156),
        PageToken: sdk.String("quo"),
        Parent: "odit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVersionsResponse != nil {
        // handle response
    }
}
```

## VersionhistoryPlatformsChannelsVersionsReleasesList

Returns list of releases of the given version.

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
    res, err := s.Platforms.VersionhistoryPlatformsChannelsVersionsReleasesList(ctx, operations.VersionhistoryPlatformsChannelsVersionsReleasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("totam"),
        Filter: sdk.String("porro"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("dicta"),
        OrderBy: sdk.String("nam"),
        PageSize: sdk.Int64(639921),
        PageToken: sdk.String("occaecati"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleasesResponse != nil {
        // handle response
    }
}
```

## VersionhistoryPlatformsList

Returns list of platforms that are available for a given product. The resource "product" has no resource name in its name.

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
    res, err := s.Platforms.VersionhistoryPlatformsList(ctx, operations.VersionhistoryPlatformsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PageSize: sdk.Int64(736918),
        PageToken: sdk.String("esse"),
        Parent: "ipsum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPlatformsResponse != nil {
        // handle response
    }
}
```
