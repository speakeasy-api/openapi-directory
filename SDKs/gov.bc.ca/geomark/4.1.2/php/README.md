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


### boundingBox

* `getGeomarksGeomarkIdBoundingBoxFileFormatExtension` - Gets the bounding box of the geomark

### create

* `postGeomarksCopy` - Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
* `postGeomarksNew` - Create a new geomark

### feature

* `getGeomarksGeomarkIdFeatureFileFormatExtension` - Get the feature and attribution of the geomark

### info

* `getGeomarksGeomarkIdFileFormatExtension` - Get information about a particular geomark

### parts

* `getGeomarksGeomarkIdPartsFileFormatExtension` - Get the individual geometries within a multi-part geometry

### point

* `getGeomarksGeomarkIdPointFileFormatExtension` - Gets a single spatial point representative of the geomark.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
