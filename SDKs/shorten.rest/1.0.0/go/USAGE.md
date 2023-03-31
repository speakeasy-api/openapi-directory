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
    s := sdk.New()

    req := operations.CreateAliasRequest{
        CreateAliasModel: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "Montenegro",
                    Os: "distinctio",
                    URL: "quibusdam",
                },
                shared.DestinationModel{
                    Country: "Mozambique",
                    Os: "nulla",
                    URL: "corrupti",
                },
                shared.DestinationModel{
                    Country: "Suriname",
                    Os: "vel",
                    URL: "error",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "suscipit",
                    Name: "iure",
                },
                shared.MetaTagModel{
                    Content: "magnam",
                    Name: "debitis",
                },
                shared.MetaTagModel{
                    Content: "ipsa",
                    Name: "delectus",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "suscipit",
                    Parameters: map[string]string{
                        "minus": "placeat",
                        "voluptatum": "iusto",
                    },
                },
                shared.SnippetModel{
                    ID: "excepturi",
                    Parameters: map[string]string{
                        "recusandae": "temporibus",
                        "ab": "quis",
                    },
                },
            },
        },
        AliasName: "veritatis",
        DomainName: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Alias.CreateAlias(ctx, req, operations.CreateAliasSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResponseModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->