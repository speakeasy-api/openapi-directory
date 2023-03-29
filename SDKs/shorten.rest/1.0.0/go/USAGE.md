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
            AliasName: "unde",
            DomainName: "deserunt",
        },
        Request: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "Suriname",
                    Os: "id",
                    URL: "vero",
                },
                shared.DestinationModel{
                    Country: "Mali",
                    Os: "nulla",
                    URL: "nihil",
                },
                shared.DestinationModel{
                    Country: "Netherlands Antilles",
                    Os: "facilis",
                    URL: "eum",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "ullam",
                    Name: "saepe",
                },
                shared.MetaTagModel{
                    Content: "inventore",
                    Name: "sapiente",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "eum",
                    Parameters: map[string]string{
                        "autem": "vel",
                        "non": "deleniti",
                    },
                },
                shared.SnippetModel{
                    ID: "similique",
                    Parameters: map[string]string{
                        "molestiae": "quo",
                        "quasi": "laboriosam",
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