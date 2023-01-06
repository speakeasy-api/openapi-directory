<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AliasName: "ut",
            DomainName: "quod",
        },
        Request: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "similique",
                    Os: "veniam",
                    URL: "aut",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "voluptas",
                    Name: "qui",
                },
                shared.MetaTagModel{
                    Content: "magnam",
                    Name: "perspiciatis",
                },
                shared.MetaTagModel{
                    Content: "eos",
                    Name: "voluptatem",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "illum",
                    Parameters: map[string]string{
                        "sit": "voluptatem",
                        "iusto": "animi",
                        "corporis": "voluptatem",
                    },
                },
            },
        },
    }
    
    res, err := s.Alias.CreateAlias(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAliasResponseModel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->