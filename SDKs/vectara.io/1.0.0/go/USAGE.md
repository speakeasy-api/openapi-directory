<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            OAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.CreateCorpusRequest{
        AdminCreateCorpusRequest: shared.AdminCreateCorpusRequest{
            Corpus: &shared.AdminCorpus{
                CustomDimensions: []shared.AdminDimension{
                    shared.AdminDimension{
                        Description: "provident",
                        IndexingDefault: 7151.9,
                        Name: "quibusdam",
                        ServingDefault: 6027.63,
                    },
                    shared.AdminDimension{
                        Description: "nulla",
                        IndexingDefault: 5448.83,
                        Name: "illum",
                        ServingDefault: 4236.55,
                    },
                    shared.AdminDimension{
                        Description: "error",
                        IndexingDefault: 6458.94,
                        Name: "suscipit",
                        ServingDefault: 4375.87,
                    },
                },
                Description: "magnam",
                DtProvision: "debitis",
                Enabled: false,
                EncoderID: "ipsa",
                Encrypted: false,
                FilterAttributes: []shared.AdminFilterAttribute{
                    shared.AdminFilterAttribute{
                        Description: "tempora",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                        Name: "molestiae",
                        Type: "FILTER_ATTRIBUTE_TYPE__TEXT",
                    },
                    shared.AdminFilterAttribute{
                        Description: "placeat",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                        Name: "iusto",
                        Type: "FILTER_ATTRIBUTE_TYPE__REAL",
                    },
                    shared.AdminFilterAttribute{
                        Description: "nisi",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART",
                        Name: "temporibus",
                        Type: "FILTER_ATTRIBUTE_TYPE__UNDEFINED",
                    },
                    shared.AdminFilterAttribute{
                        Description: "quis",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
                        Name: "deserunt",
                        Type: "FILTER_ATTRIBUTE_TYPE__UNDEFINED",
                    },
                },
                ID: 368241,
                MetadataMaxBytes: 832620,
                Name: "sapiente",
                SwapIenc: false,
                SwapQenc: false,
                Textless: false,
            },
        },
        CustomerID: 778157,
    }

    ctx := context.Background()
    res, err := s.AdminService.CreateCorpus(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminCreateCorpusResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->