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
    
    req := operations.CloudtraceProjectsTraceSinksCreateRequest{
        Security: operations.CloudtraceProjectsTraceSinksCreateSecurity{
            Option1: &operations.CloudtraceProjectsTraceSinksCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.CloudtraceProjectsTraceSinksCreatePathParams{
            Parent: "doloremque",
        },
        QueryParams: operations.CloudtraceProjectsTraceSinksCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "officia",
            Alt: "json",
            Callback: "sapiente",
            Fields: "ipsum",
            Key: "consequatur",
            OauthToken: "ea",
            PrettyPrint: false,
            QuotaUser: "quis",
            UploadType: "autem",
            UploadProtocol: "sunt",
        },
        Request: &shared.TraceSinkInput{
            Name: "non",
            OutputConfig: &shared.OutputConfig{
                Destination: "tempora",
            },
        },
    }
    
    res, err := s.Projects.CloudtraceProjectsTraceSinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TraceSink != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->