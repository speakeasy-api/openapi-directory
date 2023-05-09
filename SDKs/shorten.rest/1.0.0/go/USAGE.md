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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Alias.CreateAlias(ctx, operations.CreateAliasRequest{
        CreateAliasModel: shared.CreateAliasModel{
            Destinations: []shared.DestinationModel{
                shared.DestinationModel{
                    Country: sdk.String("Montenegro"),
                    Os: sdk.String("distinctio"),
                    URL: "quibusdam",
                },
                shared.DestinationModel{
                    Country: sdk.String("Mozambique"),
                    Os: sdk.String("nulla"),
                    URL: "corrupti",
                },
                shared.DestinationModel{
                    Country: sdk.String("Suriname"),
                    Os: sdk.String("vel"),
                    URL: "error",
                },
            },
            Metatags: []shared.MetaTagModel{
                shared.MetaTagModel{
                    Content: "suscipit",
                    Name: "Dr. Valerie Toy",
                },
                shared.MetaTagModel{
                    Content: "suscipit",
                    Name: "Alexandra Schulist",
                },
                shared.MetaTagModel{
                    Content: "excepturi",
                    Name: "Mrs. Sophie Smith MD",
                },
            },
            Snippets: []shared.SnippetModel{
                shared.SnippetModel{
                    ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
                    Parameters: map[string]string{
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                },
            },
        },
        AliasName: sdk.String("ad"),
        DomainName: sdk.String("natus"),
    }, operations.CreateAliasSecurity{
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