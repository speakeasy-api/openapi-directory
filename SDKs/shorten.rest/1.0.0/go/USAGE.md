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
            AliasName: "sit",
            DomainName: "voluptas",
        },
        Request: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "expedita",
                    Os: "consequuntur",
                    URL: "dolor",
                },
                shared.DestinationModel{
                    Country: "expedita",
                    Os: "voluptas",
                    URL: "fugit",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "nihil",
                    Name: "rerum",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "debitis",
                    Parameters: map[string]string{
                        "et": "ut",
                    },
                },
                shared.SnippetModel{
                    ID: "dolorem",
                    Parameters: map[string]string{
                        "voluptate": "iste",
                        "vitae": "totam",
                    },
                },
                shared.SnippetModel{
                    ID: "dolores",
                    Parameters: map[string]string{
                        "debitis": "vel",
                        "odio": "dolore",
                        "id": "aspernatur",
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