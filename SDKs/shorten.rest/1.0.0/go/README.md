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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Alias

* `CreateAlias` - Create alias
* `DeleteAlias` - Delete alias
* `GetAlias` - Get alias
* `GetAliases` - Get aliases by domain
* `UpdateAlias` - Update alias

### Click

* `GetClicks` - Get clicks

### Statistics

* `GetStatistics` - Get clicks statistics
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
