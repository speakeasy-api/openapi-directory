<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest{
        PathParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreatePathParams{
            Parent: "at",
        },
        QueryParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "et",
            Alt: "media",
            Callback: "sint",
            Fields: "vel",
            Key: "culpa",
            OauthToken: "fuga",
            PrettyPrint: false,
            QuotaUser: "cumque",
            UploadType: "debitis",
            UploadProtocol: "optio",
        },
        Request: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "placeat",
                "nihil",
            },
            Name: "quia",
            Topics: []string{
                "voluptas",
                "impedit",
                "earum",
            },
            Type: "POST_DRAFTED",
            URI: "quia",
        },
    }
    
    res, err := s.Platforms.IdeahubPlatformsPropertiesIdeaActivitiesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleSearchIdeahubV1betaIdeaActivity != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->