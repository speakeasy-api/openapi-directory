<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, operations.CloudprofilerProjectsProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateProfileRequest: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "distinctio": "quibusdam",
                    "unde": "nulla",
                    "corrupti": "illum",
                },
                ProjectID: sdk.String("vel"),
                Target: sdk.String("error"),
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                shared.CreateProfileRequestProfileTypeEnumHeap,
                shared.CreateProfileRequestProfileTypeEnumHeap,
                shared.CreateProfileRequestProfileTypeEnumWall,
            },
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("molestiae"),
        Parent: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.CloudprofilerProjectsProfilesCreateSecurity{
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