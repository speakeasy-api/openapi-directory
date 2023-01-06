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
            Parent: "neque",
        },
        QueryParams: operations.CloudprofilerProjectsProfilesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "adipisci",
            Alt: "media",
            Callback: "soluta",
            Fields: "nulla",
            Key: "aut",
            OauthToken: "voluptatibus",
            PrettyPrint: false,
            QuotaUser: "deleniti",
            UploadType: "libero",
            UploadProtocol: "dolorum",
        },
        Request: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "impedit": "ipsa",
                    "qui": "velit",
                    "officia": "iste",
                },
                ProjectID: "fugiat",
                Target: "minus",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "HEAP",
                "PROFILE_TYPE_UNSPECIFIED",
                "HEAP_ALLOC",
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