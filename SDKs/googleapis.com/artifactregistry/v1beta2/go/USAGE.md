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
            Name: "aperiam",
        },
        QueryParams: operations.ArtifactregistryProjectsLocationsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "assumenda",
            Alt: "proto",
            Callback: "omnis",
            Fields: "commodi",
            Filter: "doloremque",
            Key: "quis",
            OauthToken: "iste",
            PageSize: 7328465705078294941,
            PageToken: "aliquam",
            PrettyPrint: true,
            QuotaUser: "tenetur",
            UploadType: "quo",
            UploadProtocol: "omnis",
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