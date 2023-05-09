# Platforms

### Available Operations

* [IdeahubPlatformsPropertiesIdeaActivitiesCreate](#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [IdeahubPlatformsPropertiesIdeasList](#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [IdeahubPlatformsPropertiesLocalesList](#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [IdeahubPlatformsPropertiesTopicStatesPatch](#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.

## IdeahubPlatformsPropertiesIdeaActivitiesCreate

Creates an idea activity entry.

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
    res, err := s.Platforms.IdeahubPlatformsPropertiesIdeaActivitiesCreate(ctx, operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleSearchIdeahubV1alphaIdeaActivity: &shared.GoogleSearchIdeahubV1alphaIdeaActivity{
            Ideas: []string{
                "perferendis",
                "ipsam",
                "repellendus",
            },
            Name: sdk.String("Cedric Connelly"),
            Topics: []string{
                "molestiae",
                "quod",
                "quod",
                "esse",
            },
            Type: shared.GoogleSearchIdeahubV1alphaIdeaActivityTypeEnumPostPublished.ToPointer(),
            URI: sdk.String("https://rash-butcher.net"),
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("optio"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaIdeaActivity != nil {
        // handle response
    }
}
```

## IdeahubPlatformsPropertiesIdeasList

List ideas for a given Creator and filter and sort options.

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
    res, err := s.Platforms.IdeahubPlatformsPropertiesIdeasList(ctx, operations.IdeahubPlatformsPropertiesIdeasListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cum"),
        Fields: sdk.String("esse"),
        Filter: sdk.String("ipsum"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("aspernatur"),
        OrderBy: sdk.String("perferendis"),
        PageSize: sdk.Int64(324141),
        PageToken: sdk.String("natus"),
        Parent: "sed",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("natus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListIdeasResponse != nil {
        // handle response
    }
}
```

## IdeahubPlatformsPropertiesLocalesList

Returns which locales ideas are available in for a given Creator.

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
    res, err := s.Platforms.IdeahubPlatformsPropertiesLocalesList(ctx, operations.IdeahubPlatformsPropertiesLocalesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        PageSize: sdk.Int64(437032),
        PageToken: sdk.String("saepe"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListAvailableLocalesResponse != nil {
        // handle response
    }
}
```

## IdeahubPlatformsPropertiesTopicStatesPatch

Update a topic state resource.

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
    res, err := s.Platforms.IdeahubPlatformsPropertiesTopicStatesPatch(ctx, operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSearchIdeahubV1alphaTopicState: &shared.GoogleSearchIdeahubV1alphaTopicState{
            Dismissed: sdk.Bool(false),
            Name: sdk.String("Cameron Dach"),
            Saved: sdk.Bool(false),
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        Name: "Velma Batz",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UpdateMask: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaTopicState != nil {
        // handle response
    }
}
```
