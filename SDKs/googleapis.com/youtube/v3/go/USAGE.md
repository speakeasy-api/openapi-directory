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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            OauthToken: "corrupti",
            Part: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            PrettyPrint: false,
            QuotaUser: "iure",
            UploadType: "magnam",
            UploadProtocol: "debitis",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "delectus",
                },
            },
            Description: "tempora",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "molestiae",
                        TypeID: "minus",
                        URL: "placeat",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "voluptatum",
                        TypeID: "iusto",
                        URL: "excepturi",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "nisi",
                TypeID: "recusandae",
                URL: "temporibus",
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