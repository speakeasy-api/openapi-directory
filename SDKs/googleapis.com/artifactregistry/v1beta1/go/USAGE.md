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
            Name: "omnis",
        },
        QueryParams: operations.ArtifactregistryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "odit",
            Alt: "media",
            Callback: "et",
            Fields: "accusantium",
            Filter: "occaecati",
            Key: "incidunt",
            OauthToken: "est",
            PageSize: 1245406482671652753,
            PageToken: "rerum",
            PrettyPrint: false,
            QuotaUser: "libero",
            UploadType: "eligendi",
            UploadProtocol: "id",
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