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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.LanguageModelDirectAccess.GetFamilyDetails(ctx, operations.GetFamilyDetailsRequest{
        OcpApimSubscriptionKey: sdk.String("{{apiKey}}"),
        ID: sdk.String("{family_id}"),
    })
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


### [LanguageModelDirectAccess](docs/languagemodeldirectaccess/README.md)

* [GetFamilyDetails](docs/languagemodeldirectaccess/README.md#getfamilydetails) - Get family details
* [ListFeatureValues](docs/languagemodeldirectaccess/README.md#listfeaturevalues) - List feature values
* [ListHypernyms](docs/languagemodeldirectaccess/README.md#listhypernyms) - List hypernyms
* [ListHyponyms](docs/languagemodeldirectaccess/README.md#listhyponyms) - List hyponyms
* [ListInflectedForms](docs/languagemodeldirectaccess/README.md#listinflectedforms) - List inflected forms
* [ListWordSenses](docs/languagemodeldirectaccess/README.md#listwordsenses) - List word senses
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
