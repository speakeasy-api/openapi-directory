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
            Parent: "sit",
        },
        QueryParams: operations.CloudprofilerProjectsProfilesCreateQueryParams{
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
        Request: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "debitis": "voluptatum",
                    "et": "ut",
                    "dolorem": "et",
                },
                ProjectID: "voluptate",
                Target: "iste",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "WALL",
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