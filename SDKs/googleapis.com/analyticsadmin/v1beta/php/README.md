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


### accountSummaries

* `analyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### accounts

* `analyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `analyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `analyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### properties

* `analyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* `analyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `analyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `analyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `analyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `analyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `analyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `analyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `analyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `analyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `analyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet` - Lookup for a single "GA4" MeasurementProtocolSecret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `analyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `analyticsadminPropertiesGoogleAdsLinksDelete` - Deletes a GoogleAdsLink on a property
* `analyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `analyticsadminPropertiesGoogleAdsLinksPatch` - Updates a GoogleAdsLink on a property
* `analyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `analyticsadminPropertiesRunAccessReport` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
