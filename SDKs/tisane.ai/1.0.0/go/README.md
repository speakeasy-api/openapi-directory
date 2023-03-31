# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tisane.ai/1.0.0/go
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

    req := operations.GetFamilyDetailsRequest{
        OcpApimSubscriptionKey: "{{apiKey}}",
        ID: "{family_id}",
    }

    ctx := context.Background()
    res, err := s.LanguageModelDirectAccess.GetFamilyDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFamilyDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### LanguageModelDirectAccess

* `GetFamilyDetails` - Get family details
* `ListFeatureValues` - List feature values
* `ListHypernyms` - List hypernyms
* `ListHyponyms` - List hyponyms
* `ListInflectedForms` - List inflected forms
* `ListWordSenses` - List word senses
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
