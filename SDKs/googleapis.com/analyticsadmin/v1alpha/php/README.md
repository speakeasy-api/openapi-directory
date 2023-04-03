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

* `analyticsadminPropertiesAccessBindingsBatchCreate` - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* `analyticsadminPropertiesAccessBindingsBatchDelete` - Deletes information about multiple users' links to an account or property.
* `analyticsadminPropertiesAccessBindingsBatchGet` - Gets information about multiple access bindings to an account or property.
* `analyticsadminPropertiesAccessBindingsBatchUpdate` - Updates information about multiple access bindings to an account or property.
* `analyticsadminPropertiesAccessBindingsCreate` - Creates an access binding on an account or property.
* `analyticsadminPropertiesAccessBindingsList` - Lists all access bindings on an account or property.
* `analyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* `analyticsadminPropertiesAudiencesCreate` - Creates an Audience.
* `analyticsadminPropertiesAudiencesList` - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* `analyticsadminPropertiesBigQueryLinksList` - Lists BigQuery Links on a property.
* `analyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `analyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `analyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `analyticsadminPropertiesCreateConnectedSiteTag` - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* `analyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `analyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `analyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `analyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `analyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `analyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `analyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `analyticsadminPropertiesDeleteConnectedSiteTag` - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove` - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel` - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate` - Creates a DisplayVideo360AdvertiserLinkProposal.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList` - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate` - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* `analyticsadminPropertiesDisplayVideo360AdvertiserLinksList` - Lists all DisplayVideo360AdvertiserLinks on a property.
* `analyticsadminPropertiesExpandedDataSetsCreate` - Creates a ExpandedDataSet.
* `analyticsadminPropertiesExpandedDataSetsList` - Lists ExpandedDataSets on a property.
* `analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut` - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* `analyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `analyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `analyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `analyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `analyticsadminPropertiesListConnectedSiteTags` - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* `analyticsadminPropertiesRunAccessReport` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* `analyticsadminPropertiesSearchAds360LinksCreate` - Creates a SearchAds360Link.
* `analyticsadminPropertiesSearchAds360LinksList` - Lists all SearchAds360Links on a property.
* `analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut` - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* `analyticsadminPropertiesUserLinksAudit` - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* `analyticsadminPropertiesUserLinksBatchCreate` - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* `analyticsadminPropertiesUserLinksBatchDelete` - Deletes information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksBatchGet` - Gets information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksBatchUpdate` - Updates information about multiple users' links to an account or property.
* `analyticsadminPropertiesUserLinksCreate` - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* `analyticsadminPropertiesUserLinksDelete` - Deletes a user link on an account or property.
* `analyticsadminPropertiesUserLinksGet` - Gets information about a user's link to an account or property.
* `analyticsadminPropertiesUserLinksList` - Lists all user links on an account or property.
* `analyticsadminPropertiesUserLinksPatch` - Updates a user link on an account or property.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
