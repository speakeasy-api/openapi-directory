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
        DollarXgafv: "2",
        GoogleSearchIdeahubV1betaIdeaActivity: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "distinctio",
                "quibusdam",
                "unde",
            },
            Name: "nulla",
            Topics: []string{
                "illum",
                "vel",
                "error",
            },
            Type: "POST_DELETED",
            URI: "http://innocent-effect.org",
        },
        AccessToken: "ipsa",
        Alt: "proto",
        Callback: "tempora",
        Fields: "suscipit",
        Key: "molestiae",
        OauthToken: "minus",
        Parent: "placeat",
        PrettyPrint: false,
        QuotaUser: "voluptatum",
        UploadType: "iusto",
        UploadProtocol: "excepturi",
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