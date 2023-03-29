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
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            Part: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            PrettyPrint: false,
            QuotaUser: "iusto",
            UploadType: "ullam",
            UploadProtocol: "saepe",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "sapiente",
                },
            },
            Description: "enim",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "voluptatum",
                        TypeID: "autem",
                        URL: "vel",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "non",
                        TypeID: "deleniti",
                        URL: "similique",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "reprehenderit",
                TypeID: "molestiae",
                URL: "quo",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AbuseReport != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->