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


### intersections

* `getAddressesOutputFormat` - Geocode an address
* `getIntersectionsNearOutputFormat` - Find intersections near to a geographic point
* `getIntersectionsNearestOutputFormat` - Find nearest intersection to a geographic point
* `getIntersectionsWithinOutputFormat` - Find intersections in a geographic area
* `getIntersectionsIntersectionIDOutputFormat` - Get an intersection by its unique ID

### occupants

* `getOccupantsAddressesOutputFormat` - Geocode an address and identify site occupants
* `getOccupantsNearOutputFormat` - Find occupants of sites near to a geographic point
* `getOccupantsNearestOutputFormat` - Find occupants of the site nearest to a geographic point
* `getOccupantsWithinOutputFormat` - Find occupants of sites in a geographic area
* `getOccupantsOccupantIDOutputFormat` - Get an occupant (of a site) by its unique ID

### parcels

* `getParcelsPidsSiteIDOutputFormat` - Get a comma-separated string of all pids for a given site

### sites

* `getAddressesOutputFormat` - Geocode an address
* `getSitesNearOutputFormat` - Find sites near to a geographic point
* `getSitesNearestOutputFormat` - Find the site nearest to a geographic point
* `getSitesWithinOutputFormat` - Find sites in a geographic area
* `getSitesSiteIDOutputFormat` - Get a site by its unique ID
* `getSitesSiteIDSubsitesOutputFormat` - Represents all subsites of a given site
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
