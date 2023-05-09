# Query

### Available Operations

* [GetQuery](#getquery) - Search results
* [GetQueryExtension](#getqueryextension) - Search results

## GetQuery

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Query.GetQuery(ctx, operations.GetQueryRequest{
        Count: sdk.Float64(5488.14),
        InURLPrefixes: sdk.String("provident"),
        Q: "distinctio",
        Start: sdk.Float64(8442.66),
        Subdomains: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetQueryExtension

Search results

OpenSearch github repository
<https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Query.GetQueryExtension(ctx, operations.GetQueryExtensionRequest{
        Count: sdk.Float64(8579.46),
        Extension: operations.GetQueryExtensionExtensionEnumHTML,
        InURLPrefixes: sdk.String("illum"),
        Q: "vel",
        Start: sdk.Float64(6235.64),
        Subdomains: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
