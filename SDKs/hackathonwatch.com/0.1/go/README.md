# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/hackathonwatch.com/0.1/go
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
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Hackathons.GETHackathonsIDFormat(ctx, operations.GETHackathonsIDFormatRequest{
        ID: 548814,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Hackathons](docs/hackathons/README.md)

* [GETHackathonsIDFormat](docs/hackathons/README.md#gethackathonsidformat) - Return the detail of a given hackathon
* [GETHackathonsComingFormat](docs/hackathons/README.md#gethackathonscomingformat) - Return a list of coming hackathons

### [SwaggerDoc](docs/swaggerdoc/README.md)

* [GETSwaggerDocFormat](docs/swaggerdoc/README.md#getswaggerdocformat) - Swagger compatible API description
* [GETSwaggerDocNameFormat](docs/swaggerdoc/README.md#getswaggerdocnameformat) - Swagger compatible API description for specific API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
