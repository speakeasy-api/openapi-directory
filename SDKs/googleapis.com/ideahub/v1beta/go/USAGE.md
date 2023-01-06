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
            Parent: "eos",
        },
        QueryParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "vel",
            Alt: "media",
            Callback: "id",
            Fields: "aliquid",
            Key: "et",
            OauthToken: "possimus",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "est",
            UploadProtocol: "minus",
        },
        Request: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "ea",
            },
            Name: "et",
            Topics: []string{
                "voluptatem",
                "consequatur",
            },
            Type: "POST_DRAFTED",
            URI: "reprehenderit",
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