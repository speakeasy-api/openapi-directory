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
            DollarXgafv: "2",
            AccessToken: "dolores",
            Alt: "json",
            Callback: "nihil",
            Fields: "dolorem",
            Key: "a",
            OauthToken: "dicta",
            Part: []string{
                "consequatur",
            },
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "doloremque",
            UploadProtocol: "magnam",
        },
        Request: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: "ea",
                },
                shared.AbuseType{
                    ID: "in",
                },
                shared.AbuseType{
                    ID: "et",
                },
            },
            Description: "aut",
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "qui",
                        TypeID: "blanditiis",
                        URL: "inventore",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "minima",
                        TypeID: "eum",
                        URL: "dolorum",
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: "quibusdam",
                        TypeID: "est",
                        URL: "sint",
                    },
                },
            },
            Subject: &shared.Entity{
                ID: "et",
                TypeID: "aut",
                URL: "repellendus",
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