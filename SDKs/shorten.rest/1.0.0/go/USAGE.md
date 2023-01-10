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
            AliasName: "et",
            DomainName: "ea",
        },
        Request: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: "vel",
                    Os: "quia",
                    URL: "voluptas",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "non",
                    Name: "ut",
                },
                shared.MetaTagModel{
                    Content: "excepturi",
                    Name: "cumque",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "aspernatur",
                    Parameters: map[string]string{
                        "unde": "adipisci",
                        "aut": "porro",
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