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
    
    req := operations.SasportalCustomersListRequest{
        Security: operations.SasportalCustomersListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.SasportalCustomersListQueryParams{
            DollarXgafv: "1",
            AccessToken: "tempore",
            Alt: "proto",
            Callback: "dolorem",
            Fields: "voluptas",
            Key: "omnis",
            OauthToken: "nulla",
            PageSize: 6149356500451182273,
            PageToken: "ab",
            PrettyPrint: true,
            QuotaUser: "natus",
            UploadType: "ipsum",
            UploadProtocol: "sed",
        },
    }
    
    res, err := s.Customers.SasportalCustomersList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SasPortalListCustomersResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->