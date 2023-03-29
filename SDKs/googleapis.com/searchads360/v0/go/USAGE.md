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

    req := operations.Searchads360CustomersCustomColumnsListRequest{
        Security: operations.Searchads360CustomersCustomColumnsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.Searchads360CustomersCustomColumnsListPathParams{
            CustomerID: "unde",
        },
        QueryParams: operations.Searchads360CustomersCustomColumnsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.Customers.Searchads360CustomersCustomColumnsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAdsSearchads360V0ServicesListCustomColumnsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->