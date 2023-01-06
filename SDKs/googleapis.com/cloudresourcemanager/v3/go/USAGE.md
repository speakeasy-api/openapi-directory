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
    
    req := operations.CloudresourcemanagerEffectiveTagsListRequest{
        Security: operations.CloudresourcemanagerEffectiveTagsListSecurity{
            Option1: &operations.CloudresourcemanagerEffectiveTagsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.CloudresourcemanagerEffectiveTagsListQueryParams{
            DollarXgafv: "1",
            AccessToken: "veritatis",
            Alt: "media",
            Callback: "sunt",
            Fields: "et",
            Key: "quisquam",
            OauthToken: "doloribus",
            PageSize: 4393097444934014675,
            PageToken: "sint",
            Parent: "recusandae",
            PrettyPrint: true,
            QuotaUser: "voluptatem",
            UploadType: "sapiente",
            UploadProtocol: "dolores",
        },
    }
    
    res, err := s.EffectiveTags.CloudresourcemanagerEffectiveTagsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEffectiveTagsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->