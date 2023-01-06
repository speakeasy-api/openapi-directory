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
            AccessToken: "fugiat",
            Alt: "json",
            Callback: "inventore",
            Fields: "eos",
            Key: "at",
            OauthToken: "minus",
            Part: []string{
                "sit",
                "eveniet",
            },
            PrettyPrint: false,
            QuotaUser: "in",
            UploadType: "animi",
            UploadProtocol: "illum",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "minus",
                },
                shared.AbuseType{
                    ID: "autem",
                },
                shared.AbuseType{
                    ID: "et",
                },
            },
            Description: "dolore",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "velit",
                        TypeID: "explicabo",
                        URL: "cum",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "ut",
                        TypeID: "non",
                        URL: "expedita",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "assumenda",
                        TypeID: "atque",
                        URL: "libero",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "veniam",
                TypeID: "vel",
                URL: "quasi",
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