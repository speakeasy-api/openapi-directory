# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/mermade.org.uk/openapi-converter/1.0.0/go
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

    req := operations.ConvertRequestBody{
        Filename: "corrupti",
        Source: "provident",
        Validate: "on",
    }

    ctx := context.Background()
    res, err := s.Conversion.Convert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Convert200ApplicationJSONAny != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Conversion

* `Convert` - Convert a Swagger 2.0 definition passed in the body to OpenAPI 3.0.x 
* `ConvertURL` - Convert a Swagger 2.0 definition to OpenAPI 3.0.x from a URL

### Metadata

* `GetStatus` - Get the status of the API

### Validation

* `GetBadge` - Return a redirect to a badge svg file depending on a source definition's validity
* `Validate` - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* `ValidateURL` - Validate an OpenAPI 3.0.x definition
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
