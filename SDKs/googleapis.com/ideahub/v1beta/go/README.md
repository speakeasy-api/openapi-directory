# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/ideahub/v1beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleSearchIdeahubV1betaIdeaActivity: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: sdk.String("Johnnie Stamm"),
            Topics: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            Type: shared.GoogleSearchIdeahubV1betaIdeaActivityTypeEnumPostUnpublished.ToPointer(),
            URI: sdk.String("http://whirlwind-diver.info"),
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("excepturi"),
        Parent: "nisi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("recusandae"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaIdeaActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Platforms](docs/platforms/README.md)

* [IdeahubPlatformsPropertiesIdeaActivitiesCreate](docs/platforms/README.md#ideahubplatformspropertiesideaactivitiescreate) - Creates an idea activity entry.
* [IdeahubPlatformsPropertiesIdeasList](docs/platforms/README.md#ideahubplatformspropertiesideaslist) - List ideas for a given Creator and filter and sort options.
* [IdeahubPlatformsPropertiesLocalesList](docs/platforms/README.md#ideahubplatformspropertieslocaleslist) - Returns which locales ideas are available in for a given Creator.
* [IdeahubPlatformsPropertiesTopicStatesPatch](docs/platforms/README.md#ideahubplatformspropertiestopicstatespatch) - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
