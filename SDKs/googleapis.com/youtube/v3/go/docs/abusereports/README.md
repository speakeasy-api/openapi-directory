# AbuseReports

### Available Operations

* [YoutubeAbuseReportsInsert](#youtubeabusereportsinsert) - Inserts a new resource into this collection.

## YoutubeAbuseReportsInsert

Inserts a new resource into this collection.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AbuseReport: &shared.AbuseReport{
            AbuseTypes: []shared.AbuseType{
                shared.AbuseType{
                    ID: sdk.String("969e9a3e-fa77-4dfb-94cd-66ae395efb9b"),
                },
                shared.AbuseType{
                    ID: sdk.String("a88f3a66-9970-474b-a446-9b6e21419598"),
                },
                shared.AbuseType{
                    ID: sdk.String("90afa563-e251-46fe-8c8b-711e5b7fd2ed"),
                },
                shared.AbuseType{
                    ID: sdk.String("028921cd-dc69-4260-9fb5-76b0d5f0d30c"),
                },
            },
            Description: sdk.String("corporis"),
            RelatedEntities: []shared.RelatedEntity{
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("bb258705-3202-4c73-95fe-9b90c28909b3"),
                        TypeID: sdk.String("asperiores"),
                        URL: sdk.String("earum"),
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("49a8d9cb-f486-4333-a3f9-b77f3a410067"),
                        TypeID: sdk.String("quaerat"),
                        URL: sdk.String("accusamus"),
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("bf69280d-1ba7-47a8-9ebf-737ae4203ce5"),
                        TypeID: sdk.String("saepe"),
                        URL: sdk.String("suscipit"),
                    },
                },
                shared.RelatedEntity{
                    Entity: &shared.Entity{
                        ID: sdk.String("a95d8a0d-446c-4e2a-b7a7-3cf3be453f87"),
                        TypeID: sdk.String("sit"),
                        URL: sdk.String("expedita"),
                    },
                },
            },
            Subject: &shared.Entity{
                ID: sdk.String("326b5a73-429c-4db1-a842-2bb679d23227"),
                TypeID: sdk.String("sunt"),
                URL: sdk.String("ullam"),
            },
        },
        AccessToken: sdk.String("nam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("cumque"),
        Key: sdk.String("soluta"),
        OauthToken: sdk.String("nobis"),
        Part: []string{
            "saepe",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("nobis"),
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
