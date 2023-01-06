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
    
    req := operations.ServicebrokerProjectsBrokersCreateRequest{
        Security: operations.ServicebrokerProjectsBrokersCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ServicebrokerProjectsBrokersCreatePathParams{
            Parent: "doloribus",
        },
        QueryParams: operations.ServicebrokerProjectsBrokersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "maxime",
            Alt: "media",
            Callback: "corporis",
            Fields: "nam",
            Key: "assumenda",
            OauthToken: "molestias",
            PrettyPrint: true,
            QuotaUser: "esse",
            UploadType: "totam",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: "cumque",
            Name: "aut",
            Title: "qui",
            URL: "incidunt",
        },
    }
    
    res, err := s.Projects.ServicebrokerProjectsBrokersCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->