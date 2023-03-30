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

    req := operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest{
        PathParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "iure",
                "magnam",
            },
            Name: "debitis",
            Topics: []string{
                "delectus",
            },
            Type: "POST_DRAFTED",
            URI: "http://lasting-sex.net",
        },
    }

    ctx := context.Background()
    res, err := s.Platforms.IdeahubPlatformsPropertiesIdeaActivitiesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaIdeaActivity != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->