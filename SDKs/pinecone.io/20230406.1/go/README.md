# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/pinecone.io/20230406.1/go
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
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.IndexOperations.ConfigureIndex(ctx, operations.ConfigureIndexRequest{
        IndexConfiguration: shared.IndexConfiguration{
            PodType: shared.PodTypeEnumP1X4.ToPointer(),
            Replicas: sdk.Int(592845),
        },
        IndexName: "example",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [IndexOperations](docs/indexoperations/README.md)

* [ConfigureIndex](docs/indexoperations/README.md#configureindex) - Configure index
* [CreateCollection](docs/indexoperations/README.md#createcollection) - Create collection
* [CreateIndex](docs/indexoperations/README.md#createindex) - Create index
* [DeleteCollection](docs/indexoperations/README.md#deletecollection) - Delete Collection
* [DeleteIndex](docs/indexoperations/README.md#deleteindex) - Delete Index
* [DescribeCollection](docs/indexoperations/README.md#describecollection) - Describe collection
* [DescribeIndex](docs/indexoperations/README.md#describeindex) - Describe index
* [ListCollections](docs/indexoperations/README.md#listcollections) - List collections
* [ListIndexes](docs/indexoperations/README.md#listindexes) - List indexes

### [VectorOperations](docs/vectoroperations/README.md)

* [Delete](docs/vectoroperations/README.md#delete) - Delete
* [DescribeIndexStats](docs/vectoroperations/README.md#describeindexstats) - Describe Index Stats
* [Fetch](docs/vectoroperations/README.md#fetch) - Fetch
* [Query](docs/vectoroperations/README.md#query) - Query
* [Update](docs/vectoroperations/README.md#update) - Fetch
* [Upsert](docs/vectoroperations/README.md#upsert) - Upsert
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
