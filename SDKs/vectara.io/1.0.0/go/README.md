# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/vectara.io/1.0.0/go
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
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AdminService.CreateCorpus(ctx, operations.CreateCorpusRequest{
        AdminCreateCorpusRequest: shared.AdminCreateCorpusRequest{
            Corpus: &shared.AdminCorpus{
                CustomDimensions: []shared.AdminDimension{
                    shared.AdminDimension{
                        Description: sdk.String("provident"),
                        IndexingDefault: sdk.Float64(7151.9),
                        Name: sdk.String("Stuart Stiedemann"),
                        ServingDefault: sdk.Float64(4236.55),
                    },
                    shared.AdminDimension{
                        Description: sdk.String("error"),
                        IndexingDefault: sdk.Float64(6458.94),
                        Name: sdk.String("Willie Gulgowski DVM"),
                        ServingDefault: sdk.Float64(2726.56),
                    },
                    shared.AdminDimension{
                        Description: sdk.String("suscipit"),
                        IndexingDefault: sdk.Float64(4776.65),
                        Name: sdk.String("Irving Lehner"),
                        ServingDefault: sdk.Float64(3927.85),
                    },
                },
                Description: sdk.String("recusandae"),
                DtProvision: sdk.String("temporibus"),
                Enabled: sdk.Bool(false),
                EncoderID: sdk.String("ab"),
                Encrypted: sdk.Bool(false),
                FilterAttributes: []shared.AdminFilterAttribute{
                    shared.AdminFilterAttribute{
                        Description: sdk.String("veritatis"),
                        Indexed: sdk.Bool(false),
                        Level: shared.AdminFilterAttributeLevelEnumFilterAttributeLevelDocument.ToPointer(),
                        Name: sdk.String("Roberta Sipes"),
                        Type: shared.AdminFilterAttributeTypeEnumFilterAttributeTypeUndefined.ToPointer(),
                    },
                    shared.AdminFilterAttribute{
                        Description: sdk.String("at"),
                        Indexed: sdk.Bool(false),
                        Level: shared.AdminFilterAttributeLevelEnumFilterAttributeLevelDocumentPart.ToPointer(),
                        Name: sdk.String("Javier Schmidt"),
                        Type: shared.AdminFilterAttributeTypeEnumFilterAttributeTypeReal.ToPointer(),
                    },
                },
                ID: sdk.Int64(780529),
                MetadataMaxBytes: sdk.Int64(678880),
                Name: sdk.String("Antoinette Nikolaus"),
                SwapIenc: sdk.Bool(false),
                SwapQenc: sdk.Bool(false),
                Textless: sdk.Bool(false),
            },
        },
        CustomerID: 537373,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminCreateCorpusResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AdminService](docs/adminservice/README.md)

* [CreateCorpus](docs/adminservice/README.md#createcorpus) - Create Corpus
* [DeleteCorpus](docs/adminservice/README.md#deletecorpus) - Delete Corpus
* [ListCorpora](docs/adminservice/README.md#listcorpora) - List Corpora
* [ResetCorpus](docs/adminservice/README.md#resetcorpus) - Reset Corpus

### [IndexService](docs/indexservice/README.md)

* [Delete](docs/indexservice/README.md#delete) - Delete
* [FileUpload](docs/indexservice/README.md#fileupload) - File Upload
* [Index](docs/indexservice/README.md#index) - Index

### [QueryService](docs/queryservice/README.md)

* [Query](docs/queryservice/README.md#query) - Query
* [StreamQuery](docs/queryservice/README.md#streamquery) - Stream Query
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
