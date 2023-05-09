<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.QueryQueryPost(ctx, shared.QueryRequest{
        Namespace: sdk.String("corrupti"),
        Queries: []shared.Query{
            shared.Query{
                Filter: &shared.DocumentMetadataFilter{
                    Author: sdk.String("distinctio"),
                    CollectionID: sdk.String("quibusdam"),
                    DocumentID: sdk.String("unde"),
                    EndDate: sdk.String("nulla"),
                    Keywords: []string{
                        "illum",
                        "vel",
                        "error",
                    },
                    Language: sdk.String("deserunt"),
                    Source: shared.SourceEnumWeb.ToPointer(),
                    SourceID: sdk.String("iure"),
                    StartDate: sdk.String("magnam"),
                    TimePeriod: sdk.String("debitis"),
                    UserID: sdk.String("ipsa"),
                },
                Query: "delectus",
                TopK: sdk.Int64(272656),
            },
            shared.Query{
                Filter: &shared.DocumentMetadataFilter{
                    Author: sdk.String("suscipit"),
                    CollectionID: sdk.String("molestiae"),
                    DocumentID: sdk.String("minus"),
                    EndDate: sdk.String("placeat"),
                    Keywords: []string{
                        "iusto",
                        "excepturi",
                        "nisi",
                    },
                    Language: sdk.String("recusandae"),
                    Source: shared.SourceEnumChat.ToPointer(),
                    SourceID: sdk.String("ab"),
                    StartDate: sdk.String("quis"),
                    TimePeriod: sdk.String("veritatis"),
                    UserID: sdk.String("deserunt"),
                },
                Query: "perferendis",
                TopK: sdk.Int64(368241),
            },
            shared.Query{
                Filter: &shared.DocumentMetadataFilter{
                    Author: sdk.String("repellendus"),
                    CollectionID: sdk.String("sapiente"),
                    DocumentID: sdk.String("quo"),
                    EndDate: sdk.String("odit"),
                    Keywords: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    Language: sdk.String("quod"),
                    Source: shared.SourceEnumWeb.ToPointer(),
                    SourceID: sdk.String("totam"),
                    StartDate: sdk.String("porro"),
                    TimePeriod: sdk.String("dolorum"),
                    UserID: sdk.String("dicta"),
                },
                Query: "nam",
                TopK: sdk.Int64(639921),
            },
        },
    }, operations.QueryQueryPostSecurity{
        HTTPBearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QueryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->