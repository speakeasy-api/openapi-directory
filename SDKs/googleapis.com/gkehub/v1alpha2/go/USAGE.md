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
            Project: "consequatur",
        },
        QueryParams: operations.GkehubProjectsLocationsGlobalMembershipsInitializeHubQueryParams{
            DollarXgafv: "1",
            AccessToken: "et",
            Alt: "media",
            Callback: "qui",
            Fields: "neque",
            Key: "sit",
            OauthToken: "accusamus",
            PrettyPrint: true,
            QuotaUser: "similique",
            UploadType: "quibusdam",
            UploadProtocol: "et",
        },
        Request: map[string]interface{}{
            "consectetur": "earum",
            "quos": "illo",
            "eligendi": "quam",
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