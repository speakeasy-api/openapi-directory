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
            OAuth: shared.SchemeOAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.CreateCorpusRequest{
        Headers: operations.CreateCorpusHeaders{
            CustomerID: 548814,
        },
        Request: shared.AdminCreateCorpusRequest{
            Corpus: &shared.AdminCorpus{
                CustomDimensions: []shared.AdminDimension{
                    shared.AdminDimension{
                        Description: "distinctio",
                        IndexingDefault: 8442.66,
                        Name: "unde",
                        ServingDefault: 8579.46,
                    },
                    shared.AdminDimension{
                        Description: "corrupti",
                        IndexingDefault: 8472.52,
                        Name: "vel",
                        ServingDefault: 6235.64,
                    },
                    shared.AdminDimension{
                        Description: "deserunt",
                        IndexingDefault: 3843.82,
                        Name: "iure",
                        ServingDefault: 2975.34,
                    },
                },
                Description: "debitis",
                DtProvision: "ipsa",
                Enabled: false,
                EncoderID: "delectus",
                Encrypted: false,
                FilterAttributes: []shared.AdminFilterAttribute{
                    shared.AdminFilterAttribute{
                        Description: "suscipit",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                        Name: "minus",
                        Type: "FILTER_ATTRIBUTE_TYPE__TEXT",
                    },
                    shared.AdminFilterAttribute{
                        Description: "voluptatum",
                        Indexed: false,
                        Level: "FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                        Name: "excepturi",
                        Type: "FILTER_ATTRIBUTE_TYPE__INTEGER_LIST",
                    },
                },
                ID: 925597,
                MetadataMaxBytes: 836079,
                Name: "ab",
                SwapIenc: false,
                SwapQenc: false,
                Textless: false,
            },
        },
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