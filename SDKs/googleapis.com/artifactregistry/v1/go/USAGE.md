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
    
    req := operations.ArtifactregistryProjectsLocationsListRequest{
        Security: operations.ArtifactregistryProjectsLocationsListSecurity{
            Option1: &operations.ArtifactregistryProjectsLocationsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ArtifactregistryProjectsLocationsListPathParams{
            Name: "et",
        },
        QueryParams: operations.ArtifactregistryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "unde",
            Alt: "json",
            Callback: "repellendus",
            Fields: "sed",
            Filter: "aspernatur",
            Key: "est",
            OauthToken: "at",
            PageSize: 8128444413445684064,
            PageToken: "non",
            PrettyPrint: false,
            QuotaUser: "molestiae",
            UploadType: "assumenda",
            UploadProtocol: "neque",
        },
    }
    
    res, err := s.Projects.ArtifactregistryProjectsLocationsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->