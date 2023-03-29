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
            Parent: "unde",
        },
        QueryParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "iusto",
                "ullam",
            },
            Name: "saepe",
            Topics: []string{
                "sapiente",
            },
            Type: "POST_DRAFTED",
            URI: "http://jason.net",
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