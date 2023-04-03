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


### groupItems

* `youtubeAnalyticsGroupItemsDelete` - Removes an item from a group.
* `youtubeAnalyticsGroupItemsInsert` - Creates a group item.
* `youtubeAnalyticsGroupItemsList` - Returns a collection of group items that match the API request parameters.

### groups

* `youtubeAnalyticsGroupsDelete` - Deletes a group.
* `youtubeAnalyticsGroupsInsert` - Creates a group.
* `youtubeAnalyticsGroupsList` - Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
* `youtubeAnalyticsGroupsUpdate` - Modifies a group. For example, you could change a group's title.

### reports

* `youtubeAnalyticsReportsQuery` - Retrieve your YouTube Analytics reports.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
