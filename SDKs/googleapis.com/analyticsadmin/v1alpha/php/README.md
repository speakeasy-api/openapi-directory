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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AnalyticsadminAccountSummariesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AnalyticsadminAccountSummariesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->pageSize = 847252;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new AnalyticsadminAccountSummariesListSecurity();
    $requestSecurity->option1 = new AnalyticsadminAccountSummariesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountSummaries->analyticsadminAccountSummariesList($request, $requestSecurity);

    if ($response->googleAnalyticsAdminV1alphaListAccountSummariesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountSummaries](docs/accountsummaries/README.md)

* [analyticsadminAccountSummariesList](docs/accountsummaries/README.md#analyticsadminaccountsummarieslist) - Returns summaries of all accounts accessible by the caller.

### [accounts](docs/accounts/README.md)

* [analyticsadminAccountsList](docs/accounts/README.md#analyticsadminaccountslist) - Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
* [analyticsadminAccountsProvisionAccountTicket](docs/accounts/README.md#analyticsadminaccountsprovisionaccountticket) - Requests a ticket for creating an account.
* [analyticsadminAccountsSearchChangeHistoryEvents](docs/accounts/README.md#analyticsadminaccountssearchchangehistoryevents) - Searches through all changes to an account or its children given the specified set of filters.

### [properties](docs/properties/README.md)

* [analyticsadminPropertiesAccessBindingsBatchCreate](docs/properties/README.md#analyticsadminpropertiesaccessbindingsbatchcreate) - Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
* [analyticsadminPropertiesAccessBindingsBatchDelete](docs/properties/README.md#analyticsadminpropertiesaccessbindingsbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchGet](docs/properties/README.md#analyticsadminpropertiesaccessbindingsbatchget) - Gets information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsBatchUpdate](docs/properties/README.md#analyticsadminpropertiesaccessbindingsbatchupdate) - Updates information about multiple access bindings to an account or property.
* [analyticsadminPropertiesAccessBindingsCreate](docs/properties/README.md#analyticsadminpropertiesaccessbindingscreate) - Creates an access binding on an account or property.
* [analyticsadminPropertiesAccessBindingsList](docs/properties/README.md#analyticsadminpropertiesaccessbindingslist) - Lists all access bindings on an account or property.
* [analyticsadminPropertiesAcknowledgeUserDataCollection](docs/properties/README.md#analyticsadminpropertiesacknowledgeuserdatacollection) - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
* [analyticsadminPropertiesAudiencesCreate](docs/properties/README.md#analyticsadminpropertiesaudiencescreate) - Creates an Audience.
* [analyticsadminPropertiesAudiencesList](docs/properties/README.md#analyticsadminpropertiesaudienceslist) - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
* [analyticsadminPropertiesBigQueryLinksList](docs/properties/README.md#analyticsadminpropertiesbigquerylinkslist) - Lists BigQuery Links on a property.
* [analyticsadminPropertiesChannelGroupsCreate](docs/properties/README.md#analyticsadminpropertieschannelgroupscreate) - Creates a ChannelGroup.
* [analyticsadminPropertiesChannelGroupsList](docs/properties/README.md#analyticsadminpropertieschannelgroupslist) - Lists ChannelGroups on a property.
* [analyticsadminPropertiesConversionEventsCreate](docs/properties/README.md#analyticsadminpropertiesconversioneventscreate) - Creates a conversion event with the specified attributes.
* [analyticsadminPropertiesConversionEventsList](docs/properties/README.md#analyticsadminpropertiesconversioneventslist) - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
* [analyticsadminPropertiesCreate](docs/properties/README.md#analyticsadminpropertiescreate) - Creates an "GA4" property with the specified location and attributes.
* [analyticsadminPropertiesCreateConnectedSiteTag](docs/properties/README.md#analyticsadminpropertiescreateconnectedsitetag) - Creates a connected site tag for a Universal Analytics property. You can create a maximum of 20 connected site tags per property. Note: This API cannot be used on GA4 properties.
* [analyticsadminPropertiesCustomDimensionsCreate](docs/properties/README.md#analyticsadminpropertiescustomdimensionscreate) - Creates a CustomDimension.
* [analyticsadminPropertiesCustomDimensionsList](docs/properties/README.md#analyticsadminpropertiescustomdimensionslist) - Lists CustomDimensions on a property.
* [analyticsadminPropertiesCustomMetricsArchive](docs/properties/README.md#analyticsadminpropertiescustommetricsarchive) - Archives a CustomMetric on a property.
* [analyticsadminPropertiesCustomMetricsCreate](docs/properties/README.md#analyticsadminpropertiescustommetricscreate) - Creates a CustomMetric.
* [analyticsadminPropertiesCustomMetricsList](docs/properties/README.md#analyticsadminpropertiescustommetricslist) - Lists CustomMetrics on a property.
* [analyticsadminPropertiesDataStreamsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamscreate) - Creates a DataStream.
* [analyticsadminPropertiesDataStreamsEventCreateRulesCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamseventcreaterulescreate) - Creates an EventCreateRule.
* [analyticsadminPropertiesDataStreamsEventCreateRulesList](docs/properties/README.md#analyticsadminpropertiesdatastreamseventcreateruleslist) - Lists EventCreateRules on a web data stream.
* [analyticsadminPropertiesDataStreamsList](docs/properties/README.md#analyticsadminpropertiesdatastreamslist) - Lists DataStreams on a property.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretscreate) - Creates a measurement protocol secret.
* [analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList](docs/properties/README.md#analyticsadminpropertiesdatastreamsmeasurementprotocolsecretslist) - Returns child MeasurementProtocolSecrets under the specified parent Property.
* [analyticsadminPropertiesDeleteConnectedSiteTag](docs/properties/README.md#analyticsadminpropertiesdeleteconnectedsitetag) - Deletes a connected site tag for a Universal Analytics property. Note: this has no effect on GA4 properties.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalsapprove) - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscancel) - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalscreate) - Creates a DisplayVideo360AdvertiserLinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkproposalslist) - Lists DisplayVideo360AdvertiserLinkProposals on a property.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkscreate) - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
* [analyticsadminPropertiesDisplayVideo360AdvertiserLinksList](docs/properties/README.md#analyticsadminpropertiesdisplayvideo360advertiserlinkslist) - Lists all DisplayVideo360AdvertiserLinks on a property.
* [analyticsadminPropertiesExpandedDataSetsCreate](docs/properties/README.md#analyticsadminpropertiesexpandeddatasetscreate) - Creates a ExpandedDataSet.
* [analyticsadminPropertiesExpandedDataSetsList](docs/properties/README.md#analyticsadminpropertiesexpandeddatasetslist) - Lists ExpandedDataSets on a property.
* [analyticsadminPropertiesFetchAutomatedGa4ConfigurationOptOut](docs/properties/README.md#analyticsadminpropertiesfetchautomatedga4configurationoptout) - Fetches the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesFetchConnectedGa4Property](docs/properties/README.md#analyticsadminpropertiesfetchconnectedga4property) - Given a specified UA property, looks up the GA4 property connected to it. Note: this cannot be used with GA4 properties.
* [analyticsadminPropertiesFirebaseLinksCreate](docs/properties/README.md#analyticsadminpropertiesfirebaselinkscreate) - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesFirebaseLinksList](docs/properties/README.md#analyticsadminpropertiesfirebaselinkslist) - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
* [analyticsadminPropertiesGoogleAdsLinksCreate](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkscreate) - Creates a GoogleAdsLink.
* [analyticsadminPropertiesGoogleAdsLinksList](docs/properties/README.md#analyticsadminpropertiesgoogleadslinkslist) - Lists GoogleAdsLinks on a property.
* [analyticsadminPropertiesList](docs/properties/README.md#analyticsadminpropertieslist) - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
* [analyticsadminPropertiesListConnectedSiteTags](docs/properties/README.md#analyticsadminpropertieslistconnectedsitetags) - Lists the connected site tags for a Universal Analytics property. A maximum of 20 connected site tags will be returned. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesRunAccessReport](docs/properties/README.md#analyticsadminpropertiesrunaccessreport) - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
* [analyticsadminPropertiesSearchAds360LinksCreate](docs/properties/README.md#analyticsadminpropertiessearchads360linkscreate) - Creates a SearchAds360Link.
* [analyticsadminPropertiesSearchAds360LinksList](docs/properties/README.md#analyticsadminpropertiessearchads360linkslist) - Lists all SearchAds360Links on a property.
* [analyticsadminPropertiesSetAutomatedGa4ConfigurationOptOut](docs/properties/README.md#analyticsadminpropertiessetautomatedga4configurationoptout) - Sets the opt out status for the automated GA4 setup process for a UA property. Note: this has no effect on GA4 property.
* [analyticsadminPropertiesUserLinksAudit](docs/properties/README.md#analyticsadminpropertiesuserlinksaudit) - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
* [analyticsadminPropertiesUserLinksBatchCreate](docs/properties/README.md#analyticsadminpropertiesuserlinksbatchcreate) - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
* [analyticsadminPropertiesUserLinksBatchDelete](docs/properties/README.md#analyticsadminpropertiesuserlinksbatchdelete) - Deletes information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchGet](docs/properties/README.md#analyticsadminpropertiesuserlinksbatchget) - Gets information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksBatchUpdate](docs/properties/README.md#analyticsadminpropertiesuserlinksbatchupdate) - Updates information about multiple users' links to an account or property.
* [analyticsadminPropertiesUserLinksCreate](docs/properties/README.md#analyticsadminpropertiesuserlinkscreate) - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
* [analyticsadminPropertiesUserLinksDelete](docs/properties/README.md#analyticsadminpropertiesuserlinksdelete) - Deletes a user link on an account or property.
* [analyticsadminPropertiesUserLinksGet](docs/properties/README.md#analyticsadminpropertiesuserlinksget) - Gets information about a user's link to an account or property.
* [analyticsadminPropertiesUserLinksList](docs/properties/README.md#analyticsadminpropertiesuserlinkslist) - Lists all user links on an account or property.
* [analyticsadminPropertiesUserLinksPatch](docs/properties/README.md#analyticsadminpropertiesuserlinkspatch) - Updates a user link on an account or property.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
