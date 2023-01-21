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
            Parent: "sit",
        },
        QueryParams: operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleSearchIdeahubV1betaIdeaActivity{
            Ideas: []string{
                "debitis",
                "voluptatum",
                "et",
            },
            Name: "ut",
            Topics: []string{
                "et",
                "voluptate",
                "iste",
            },
            Type: "POST_DELETED",
            URI: "totam",
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