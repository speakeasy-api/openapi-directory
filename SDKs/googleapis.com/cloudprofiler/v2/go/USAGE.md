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
    
    req := operations.CloudprofilerProjectsProfilesCreateRequest{
        Security: operations.CloudprofilerProjectsProfilesCreateSecurity{
            Option1: &operations.CloudprofilerProjectsProfilesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudprofilerProjectsProfilesCreatePathParams{
            Parent: "quis",
        },
        QueryParams: operations.CloudprofilerProjectsProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "sapiente",
            Alt: "media",
            Callback: "omnis",
            Fields: "placeat",
            Key: "expedita",
            OauthToken: "quis",
            PrettyPrint: false,
            QuotaUser: "rem",
            UploadType: "enim",
            UploadProtocol: "tempora",
        },
        Request: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "ab": "alias",
                },
                ProjectID: "libero",
                Target: "voluptatum",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "CPU",
                "CONTENTION",
            },
        },
    }
    
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->