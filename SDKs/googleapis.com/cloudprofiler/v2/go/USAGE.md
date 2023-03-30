<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
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
            Parent: "corrupti",
        },
        QueryParams: operations.CloudprofilerProjectsProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
                ProjectID: "delectus",
                Target: "tempora",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "HEAP",
                "PEAK_HEAP",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->