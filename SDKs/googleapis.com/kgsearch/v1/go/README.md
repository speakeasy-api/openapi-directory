# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/kgsearch/v1/go
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

    req := operations.KgsearchEntitiesSearchRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Ids: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Indent: false,
        Key: "deserunt",
        Languages: []string{
            "iure",
            "magnam",
        },
        Limit: 891773,
        OauthToken: "ipsa",
        Prefix: false,
        PrettyPrint: false,
        Query: "delectus",
        QuotaUser: "tempora",
        Types: []string{
            "molestiae",
            "minus",
        },
        UploadType: "placeat",
        UploadProtocol: "voluptatum",
    }

    ctx := context.Background()
    res, err := s.Entities.KgsearchEntitiesSearch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Entities

* `KgsearchEntitiesSearch` - Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
