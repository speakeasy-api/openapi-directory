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
        GoogleSearchIdeahubV1betaIdeaActivity: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "deserunt",
            },
            Name: sdk.String("Roberta Sipes"),
            Topics: []string{
                "at",
            },
            Type: shared.GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostUnpublished.ToPointer(),
            URI: sdk.String("https://kosher-shoestring.net"),
        },
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("nam"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaIdeaActivity != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Filter: sdk.String("molestiae"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        OrderBy: sdk.String("impedit"),
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

    if res.GoogleSearchIdeahubV1betaListIdeasResponse != nil {
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
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iste"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("laboriosam"),
        PageSize: sdk.Int64(943749),
        PageToken: sdk.String("saepe"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaListAvailableLocalesResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleSearchIdeahubV1betaTopicState: &shared.GoogleSearchIdeahubV1betaTopicState{
            Dismissed: sdk.Bool(false),
            Name: sdk.String("Dr. Rickey Boyle"),
            Saved: sdk.Bool(false),
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dolores"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("corporis"),
        Name: "Della Halvorson",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UpdateMask: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaTopicState != nil {
        // handle response
    }
}
```
