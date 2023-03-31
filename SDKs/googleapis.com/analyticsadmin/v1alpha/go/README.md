# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/analyticsadmin/v1alpha/go
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

    req := operations.AnalyticsadminAccountSummariesListRequest{
        DollarXgafv: "2",
        AccessToken: "provident",
        Alt: "proto",
        Callback: "quibusdam",
        Fields: "unde",
        Key: "nulla",
        OauthToken: "corrupti",
        PageSize: 847252,
        PageToken: "vel",
        PrettyPrint: false,
        QuotaUser: "error",
        UploadType: "deserunt",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.AccountSummaries.AnalyticsadminAccountSummariesList(ctx, req, operations.AnalyticsadminAccountSummariesListSecurity{
        Option1: &operations.AnalyticsadminAccountSummariesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAnalyticsAdminV1alphaListAccountSummariesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### AccountSummaries

* `AnalyticsadminAccountSummariesList` - Returns summaries of all accounts accessible by the caller.

### Accounts

* `AnalyticsadminAccountsList` - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* `AnalyticsadminAccountsProvisionAccountTicket` - Requests a ticket for creating an account.
* `AnalyticsadminAccountsSearchChangeHistoryEvents` - Searches through all changes to an account or its children given the specified set of filters.

### Properties

* `AnalyticsadminPropertiesAccessBindingsBatchCreate` - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* `AnalyticsadminPropertiesAccessBindingsBatchDelete` - Deletes information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesAccessBindingsBatchGet` - Gets information about multiple access bindings to an account or property.
* `AnalyticsadminPropertiesAccessBindingsBatchUpdate` - Updates information about multiple access bindings to an account or property.
* `AnalyticsadminPropertiesAccessBindingsCreate` - Creates an access binding on an account or property.
* `AnalyticsadminPropertiesAccessBindingsList` - Lists all access bindings on an account or property.
* `AnalyticsadminPropertiesAcknowledgeUserDataCollection` - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* `AnalyticsadminPropertiesAudiencesCreate` - Creates an Audience.
* `AnalyticsadminPropertiesAudiencesList` - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* `AnalyticsadminPropertiesBigQueryLinksList` - Lists BigQuery Links on a property.
* `AnalyticsadminPropertiesConversionEventsCreate` - Creates a conversion event with the specified attributes.
* `AnalyticsadminPropertiesConversionEventsList` - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* `AnalyticsadminPropertiesCreate` - Creates an "GA4" property with the specified location and attributes.
* `AnalyticsadminPropertiesCreateConnectedSiteTag` - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* `AnalyticsadminPropertiesCustomDimensionsCreate` - Creates a CustomDimension.
* `AnalyticsadminPropertiesCustomDimensionsList` - Lists CustomDimensions on a property.
* `AnalyticsadminPropertiesCustomMetricsArchive` - Archives a CustomMetric on a property.
* `AnalyticsadminPropertiesCustomMetricsCreate` - Creates a CustomMetric.
* `AnalyticsadminPropertiesCustomMetricsList` - Lists CustomMetrics on a property.
* `AnalyticsadminPropertiesDataStreamsCreate` - Creates a DataStream.
* `AnalyticsadminPropertiesDataStreamsList` - Lists DataStreams on a property.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate` - Creates a measurement protocol secret.
* `AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList` - Returns child MeasurementProtocolSecrets under the specified parent Property.
* `AnalyticsadminPropertiesDeleteConnectedSiteTag` - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove` - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel` - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate` - Creates a DisplayVideo360AdvertiserLinkProposal.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList` - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate` - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* `AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList` - Lists all DisplayVideo360AdvertiserLinks on a property.
* `AnalyticsadminPropertiesExpandedDataSetsCreate` - Creates a ExpandedDataSet.
* `AnalyticsadminPropertiesExpandedDataSetsList` - Lists ExpandedDataSets on a property.
* `AnalyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut` - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* `AnalyticsadminPropertiesFirebaseLinksCreate` - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesFirebaseLinksList` - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* `AnalyticsadminPropertiesGoogleAdsLinksCreate` - Creates a GoogleAdsLink.
* `AnalyticsadminPropertiesGoogleAdsLinksList` - Lists GoogleAdsLinks on a property.
* `AnalyticsadminPropertiesList` - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* `AnalyticsadminPropertiesListConnectedSiteTags` - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* `AnalyticsadminPropertiesRunAccessReport` - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* `AnalyticsadminPropertiesSearchAds360LinksCreate` - Creates a SearchAds360Link.
* `AnalyticsadminPropertiesSearchAds360LinksList` - Lists all SearchAds360Links on a property.
* `AnalyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut` - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* `AnalyticsadminPropertiesUserLinksAudit` - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* `AnalyticsadminPropertiesUserLinksBatchCreate` - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* `AnalyticsadminPropertiesUserLinksBatchDelete` - Deletes information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksBatchGet` - Gets information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksBatchUpdate` - Updates information about multiple users' links to an account or property.
* `AnalyticsadminPropertiesUserLinksCreate` - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* `AnalyticsadminPropertiesUserLinksDelete` - Deletes a user link on an account or property.
* `AnalyticsadminPropertiesUserLinksGet` - Gets information about a user's link to an account or property.
* `AnalyticsadminPropertiesUserLinksList` - Lists all user links on an account or property.
* `AnalyticsadminPropertiesUserLinksPatch` - Updates a user link on an account or property.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
