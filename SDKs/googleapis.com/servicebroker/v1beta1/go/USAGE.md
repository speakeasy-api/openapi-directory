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
            Parent: "sit",
        },
        QueryParams: operations.ServicebrokerProjectsBrokersCreateQueryParams{
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
        Request: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: "dicta",
            Name: "debitis",
            Title: "voluptatum",
            URL: "et",
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