# Entities

### Available Operations

* [KgsearchEntitiesSearch](#kgsearchentitiessearch) - Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

## KgsearchEntitiesSearch

Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org

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
    res, err := s.Entities.KgsearchEntitiesSearch(ctx, operations.KgsearchEntitiesSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("temporibus"),
        Ids: []string{
            "quis",
        },
        Indent: sdk.Bool(false),
        Key: sdk.String("veritatis"),
        Languages: []string{
            "perferendis",
            "ipsam",
            "repellendus",
        },
        Limit: sdk.Int64(957156),
        OauthToken: sdk.String("quo"),
        Prefix: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("odit"),
        QuotaUser: sdk.String("at"),
        Types: []string{
            "maiores",
            "molestiae",
            "quod",
            "quod",
        },
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
