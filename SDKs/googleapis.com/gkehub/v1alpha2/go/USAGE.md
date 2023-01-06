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
    
    req := operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubRequest{
        Security: operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubPathParams{
            Project: "quo",
        },
        QueryParams: operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolorum",
            Alt: "media",
            Callback: "optio",
            Fields: "est",
            Key: "doloribus",
            OauthToken: "voluptatem",
            PrettyPrint: true,
            QuotaUser: "occaecati",
            UploadType: "dolores",
            UploadProtocol: "dolores",
        },
        Request: map[string]interface{}{
            "temporibus": "labore",
        },
    }
    
    res, err := s.Projects.GkehubProjectsLocationsGlobalMembershipsInitializeHub(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InitializeHubResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->