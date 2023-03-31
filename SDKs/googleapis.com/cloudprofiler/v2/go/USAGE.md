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
        DollarXgafv: "2",
        CreateProfileRequest: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                ProjectID: "vel",
                Target: "error",
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                "HEAP",
                "HEAP",
                "WALL",
            },
        },
        AccessToken: "debitis",
        Alt: "json",
        Callback: "delectus",
        Fields: "tempora",
        Key: "suscipit",
        OauthToken: "molestiae",
        Parent: "minus",
        PrettyPrint: false,
        QuotaUser: "placeat",
        UploadType: "voluptatum",
        UploadProtocol: "iusto",
    }

    ctx := context.Background()
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, req, operations.CloudprofilerProjectsProfilesCreateSecurity{
        Option1: &operations.CloudprofilerProjectsProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->