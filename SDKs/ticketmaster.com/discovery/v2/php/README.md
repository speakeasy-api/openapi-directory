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

* `find` - Attraction Search
* `get` - Get Attraction Details
* `getGenre` - Get Genre Details
* `getImages` - Get Event Images
* `getSegment` - Get Segment Details
* `getSubgenre` - Get Sub-Genre Details
* `getDiscoveryV2Classifications` - Classification Search
* `getDiscoveryV2ClassificationsId` - Get Classification Details
* `getDiscoveryV2Events` - Event Search
* `getDiscoveryV2EventsId` - Get Event Details
* `getDiscoveryV2Venues` - Venue Search
* `getDiscoveryV2VenuesId` - Get Venue Details

### v2

* `getDiscoveryV2Suggest` - Find Suggest
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
