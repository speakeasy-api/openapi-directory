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
    
    req := operations.SecuritycenterOrganizationsOperationsCancelRequest{
        Security: operations.SecuritycenterOrganizationsOperationsCancelSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.SecuritycenterOrganizationsOperationsCancelPathParams{
            Name: "at",
        },
        QueryParams: operations.SecuritycenterOrganizationsOperationsCancelQueryParams{
            DollarXgafv: "2",
            AccessToken: "quo",
            Alt: "media",
            Callback: "nisi",
            Fields: "provident",
            Key: "inventore",
            OauthToken: "eligendi",
            PrettyPrint: true,
            QuotaUser: "error",
            UploadType: "nulla",
            UploadProtocol: "eos",
        },
    }
    
    res, err := s.Organizations.SecuritycenterOrganizationsOperationsCancel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->