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
        DollarXgafv: "2",
        AbuseReport: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "distinctio",
                },
                shared.AbuseType{
                    ID: "quibusdam",
                },
                shared.AbuseType{
                    ID: "unde",
                },
            },
            Description: "nulla",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "illum",
                        TypeID: "vel",
                        URL: "error",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "deserunt",
                        TypeID: "suscipit",
                        URL: "iure",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "magnam",
                        TypeID: "debitis",
                        URL: "ipsa",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "delectus",
                TypeID: "tempora",
                URL: "suscipit",
            },
        },
        AccessToken: "molestiae",
        Alt: "proto",
        Callback: "placeat",
        Fields: "voluptatum",
        Key: "iusto",
        OauthToken: "excepturi",
        Part: []string{
            "recusandae",
            "temporibus",
        },
        PrettyPrint: false,
        QuotaUser: "ab",
        UploadType: "quis",
        UploadProtocol: "veritatis",
    }

    ctx := context.Background()
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, req, operations.YoutubeAbuseReportsInsertSecurity{
        Option1: &operations.YoutubeAbuseReportsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AbuseReport != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->