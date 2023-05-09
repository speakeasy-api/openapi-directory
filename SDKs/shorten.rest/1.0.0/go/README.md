# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/shorten.rest/1.0.0/go
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Alias](docs/alias/README.md)

* [CreateAlias](docs/alias/README.md#createalias) - Create alias
* [DeleteAlias](docs/alias/README.md#deletealias) - Delete alias
* [GetAlias](docs/alias/README.md#getalias) - Get alias
* [GetAliases](docs/alias/README.md#getaliases) - Get aliases by domain
* [UpdateAlias](docs/alias/README.md#updatealias) - Update alias

### [Click](docs/click/README.md)

* [GetClicks](docs/click/README.md#getclicks) - Get clicks

### [Statistics](docs/statistics/README.md)

* [GetStatistics](docs/statistics/README.md#getstatistics) - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
