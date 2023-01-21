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
    
    req := operations.ResellerCustomersGetRequest{
        Security: operations.ResellerCustomersGetSecurity{
            Option1: &operations.ResellerCustomersGetSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.ResellerCustomersGetPathParams{
            CustomerID: "sit",
        },
        QueryParams: operations.ResellerCustomersGetQueryParams{
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
    }
    
    res, err := s.Customers.ResellerCustomersGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->