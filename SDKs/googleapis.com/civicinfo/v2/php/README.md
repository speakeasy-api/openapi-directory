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


### divisions

* `civicinfoDivisionsSearch` - Searches for political divisions by their natural name or OCD ID.

### elections

* `civicinfoElectionsElectionQuery` - List of available elections to query.
* `civicinfoElectionsVoterInfoQuery` - Looks up information relevant to a voter based on the voter's registered address.

### representatives

* `civicinfoRepresentativesRepresentativeInfoByAddress` - Looks up political geography and representative information for a single address.
* `civicinfoRepresentativesRepresentativeInfoByDivision` - Looks up representative information for a single geographic division.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
