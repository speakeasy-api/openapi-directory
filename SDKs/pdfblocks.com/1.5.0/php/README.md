# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addImageWatermarkV1` - Add an image watermark to a PDF
* `addPasswordV1` - Add a password to a PDF
* `addRestrictionsV1` - Add restrictions to a PDF
* `addTextWatermarkV1` - Add a text watermark to a PDF
* `extractPagesV1` - Extract pages from a PDF
* `mergeDocumentsV1` - Merge PDF documents
* `removePagesV1` - Remove pages from a PDF
* `removePasswordV1` - Remove the password from a PDF
* `removeRestrictionsV1` - Remove the restrictions from a PDF
* `removeSignaturesV1` - Remove the signatures from a PDF
* `reversePagesV1` - Reverse the pages of a PDF
* `rotatePagesV1` - Rotate pages in a PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
