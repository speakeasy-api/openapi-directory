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
        Security: operations.CreateAliasSecurity{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CreateAliasQueryParams{
            AliasName: "corrupti",
            DomainName: "provident",
        },
        Request: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "Suriname",
                    Os: "unde",
                    URL: "nulla",
                },
                shared.DestinationModel{
                    Country: "Mali",
                    Os: "illum",
                    URL: "vel",
                },
                shared.DestinationModel{
                    Country: "Netherlands Antilles",
                    Os: "deserunt",
                    URL: "suscipit",
                },
            },
            Metatags: []shared.MetaTagModel{
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
    }

    ctx := context.Background()
    res, err := s.Alias.CreateAlias(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResponseModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->