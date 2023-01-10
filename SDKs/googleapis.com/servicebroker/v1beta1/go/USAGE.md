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
            Parent: "consequatur",
        },
        QueryParams: operations.ServicebrokerProjectsBrokersCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "non",
            Alt: "proto",
            Callback: "earum",
            Fields: "voluptatem",
            Key: "quidem",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "nam",
            UploadType: "veritatis",
            UploadProtocol: "ad",
        },
        Request: &shared.GoogleCloudServicebrokerV1beta1Broker{
            CreateTime: "dolores",
            Name: "quia",
            Title: "animi",
            URL: "dicta",
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