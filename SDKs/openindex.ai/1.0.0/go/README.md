# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/openindex.ai/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [QueryQueryPost](docs/sdk/README.md#queryquerypost) - Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
