# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/ideahub/v1alpha/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.IdeahubIdeasListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Filter: "nulla",
        Key: "corrupti",
        OauthToken: "illum",
        OrderBy: "vel",
        PageSize: 623564,
        PageToken: "deserunt",
        Parent: "suscipit",
        PrettyPrint: false,
        QuotaUser: "iure",
        UploadType: "magnam",
        UploadProtocol: "debitis",
    }

    ctx := context.Background()
    res, err := s.Ideas.IdeahubIdeasList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1alphaListIdeasResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Ideas

* `IdeahubIdeasList` - List ideas for a given Creator and filter and sort options.

### Platforms

* `IdeahubPlatformsPropertiesIdeaActivitiesCreate` - Creates an idea activity entry.
* `IdeahubPlatformsPropertiesIdeasList` - List ideas for a given Creator and filter and sort options.
* `IdeahubPlatformsPropertiesLocalesList` - Returns which locales ideas are available in for a given Creator.
* `IdeahubPlatformsPropertiesTopicStatesPatch` - Update a topic state resource.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
