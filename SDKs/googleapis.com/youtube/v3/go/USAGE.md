<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AbuseReports.YoutubeAbuseReportsInsert(ctx, operations.YoutubeAbuseReportsInsertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AbuseReport: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: sdk.String("bd9d8d69-a674-4e0f-867c-c8796ed151a0"),
                },
                shared.AbuseType{
                    ID: sdk.String("5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb"),
                },
                shared.AbuseType{
                    ID: sdk.String("73920592-9396-4fea-b596-eb10faaa2352"),
                },
            },
            Description: sdk.String("nobis"),
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("955907af-f1a3-4a2f-a946-7739251aa52c"),
                        TypeID: sdk.String("sequi"),
                        URL: sdk.String("tenetur"),
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("5ad019da-1ffe-478f-897b-0074f15471b5"),
                        TypeID: sdk.String("accusamus"),
                        URL: sdk.String("commodi"),
                    },
                },
            },
            Subject: &shared.Entity{
                ID: sdk.String("e13b99d4-88e1-4e91-a450-ad2abd442698"),
                TypeID: sdk.String("perferendis"),
                URL: sdk.String("magni"),
            },
        },
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("fugit"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("excepturi"),
        Part: []string{
            "facilis",
            "tempore",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    }, operations.YoutubeAbuseReportsInsertSecurity{
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