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
    
    req := operations.YoutubeAbuseReportsInsertRequest{
        Security: operations.YoutubeAbuseReportsInsertSecurity{
            Option1: &operations.YoutubeAbuseReportsInsertSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        QueryParams: operations.YoutubeAbuseReportsInsertQueryParams{
            DollarXgafv: "1",
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            Part: []string{
                "fugit",
                "et",
                "nihil",
            },
            PrettyPrint: true,
            QuotaUser: "dicta",
            UploadType: "debitis",
            UploadProtocol: "voluptatum",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "ut",
                },
            },
            Description: "dolorem",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "voluptate",
                        TypeID: "iste",
                        URL: "vitae",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "totam",
                        TypeID: "dolores",
                        URL: "illum",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "debitis",
                TypeID: "vel",
                URL: "odio",
            },
        },
    }
    
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AbuseReport != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->