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
            Parent: "sit",
        },
        QueryParams: operations.CloudtraceProjectsTraceSinksCreateQueryParams{
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
        Request: &shared.TraceSinkInput{
            Name: "dicta",
            OutputConfig: &shared.OutputConfig{
                Destination: "debitis",
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