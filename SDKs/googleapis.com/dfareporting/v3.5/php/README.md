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
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountActiveAdSummariesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingAccountActiveAdSummariesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingAccountActiveAdSummariesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->key = 'nulla';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->profileId = 'illum';
    $request->quotaUser = 'vel';
    $request->summaryAccountId = 'error';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DfareportingAccountActiveAdSummariesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->accountActiveAdSummaries->dfareportingAccountActiveAdSummariesGet($request, $requestSecurity);

    if ($response->accountActiveAdSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accountActiveAdSummaries](docs/accountactiveadsummaries/README.md)

* [dfareportingAccountActiveAdSummariesGet](docs/accountactiveadsummaries/README.md#dfareportingaccountactiveadsummariesget) - Gets the account's active ad summary by account ID.

### [accountPermissionGroups](docs/accountpermissiongroups/README.md)

* [dfareportingAccountPermissionGroupsGet](docs/accountpermissiongroups/README.md#dfareportingaccountpermissiongroupsget) - Gets one account permission group by ID.
* [dfareportingAccountPermissionGroupsList](docs/accountpermissiongroups/README.md#dfareportingaccountpermissiongroupslist) - Retrieves the list of account permission groups.

### [accountPermissions](docs/accountpermissions/README.md)

* [dfareportingAccountPermissionsGet](docs/accountpermissions/README.md#dfareportingaccountpermissionsget) - Gets one account permission by ID.
* [dfareportingAccountPermissionsList](docs/accountpermissions/README.md#dfareportingaccountpermissionslist) - Retrieves the list of account permissions.

### [accountUserProfiles](docs/accountuserprofiles/README.md)

* [dfareportingAccountUserProfilesGet](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesget) - Gets one account user profile by ID.
* [dfareportingAccountUserProfilesInsert](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesinsert) - Inserts a new account user profile.
* [dfareportingAccountUserProfilesList](docs/accountuserprofiles/README.md#dfareportingaccountuserprofileslist) - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* [dfareportingAccountUserProfilesPatch](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilespatch) - Updates an existing account user profile. This method supports patch semantics.
* [dfareportingAccountUserProfilesUpdate](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesupdate) - Updates an existing account user profile.

### [accounts](docs/accounts/README.md)

* [dfareportingAccountsGet](docs/accounts/README.md#dfareportingaccountsget) - Gets one account by ID.
* [dfareportingAccountsList](docs/accounts/README.md#dfareportingaccountslist) - Retrieves the list of accounts, possibly filtered. This method supports paging.
* [dfareportingAccountsPatch](docs/accounts/README.md#dfareportingaccountspatch) - Updates an existing account. This method supports patch semantics.
* [dfareportingAccountsUpdate](docs/accounts/README.md#dfareportingaccountsupdate) - Updates an existing account.

### [ads](docs/ads/README.md)

* [dfareportingAdsGet](docs/ads/README.md#dfareportingadsget) - Gets one ad by ID.
* [dfareportingAdsInsert](docs/ads/README.md#dfareportingadsinsert) - Inserts a new ad.
* [dfareportingAdsList](docs/ads/README.md#dfareportingadslist) - Retrieves a list of ads, possibly filtered. This method supports paging.
* [dfareportingAdsPatch](docs/ads/README.md#dfareportingadspatch) - Updates an existing ad. This method supports patch semantics.
* [dfareportingAdsUpdate](docs/ads/README.md#dfareportingadsupdate) - Updates an existing ad.

### [advertiserGroups](docs/advertisergroups/README.md)

* [dfareportingAdvertiserGroupsDelete](docs/advertisergroups/README.md#dfareportingadvertisergroupsdelete) - Deletes an existing advertiser group.
* [dfareportingAdvertiserGroupsGet](docs/advertisergroups/README.md#dfareportingadvertisergroupsget) - Gets one advertiser group by ID.
* [dfareportingAdvertiserGroupsInsert](docs/advertisergroups/README.md#dfareportingadvertisergroupsinsert) - Inserts a new advertiser group.
* [dfareportingAdvertiserGroupsList](docs/advertisergroups/README.md#dfareportingadvertisergroupslist) - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* [dfareportingAdvertiserGroupsPatch](docs/advertisergroups/README.md#dfareportingadvertisergroupspatch) - Updates an existing advertiser group. This method supports patch semantics.
* [dfareportingAdvertiserGroupsUpdate](docs/advertisergroups/README.md#dfareportingadvertisergroupsupdate) - Updates an existing advertiser group.

### [advertiserLandingPages](docs/advertiserlandingpages/README.md)

* [dfareportingAdvertiserLandingPagesGet](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesget) - Gets one landing page by ID.
* [dfareportingAdvertiserLandingPagesInsert](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesinsert) - Inserts a new landing page.
* [dfareportingAdvertiserLandingPagesList](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpageslist) - Retrieves a list of landing pages.
* [dfareportingAdvertiserLandingPagesPatch](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagespatch) - Updates an existing advertiser landing page. This method supports patch semantics.
* [dfareportingAdvertiserLandingPagesUpdate](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesupdate) - Updates an existing landing page.

### [advertisers](docs/advertisers/README.md)

* [dfareportingAdvertisersGet](docs/advertisers/README.md#dfareportingadvertisersget) - Gets one advertiser by ID.
* [dfareportingAdvertisersInsert](docs/advertisers/README.md#dfareportingadvertisersinsert) - Inserts a new advertiser.
* [dfareportingAdvertisersList](docs/advertisers/README.md#dfareportingadvertiserslist) - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* [dfareportingAdvertisersPatch](docs/advertisers/README.md#dfareportingadvertiserspatch) - Updates an existing advertiser. This method supports patch semantics.
* [dfareportingAdvertisersUpdate](docs/advertisers/README.md#dfareportingadvertisersupdate) - Updates an existing advertiser.

### [browsers](docs/browsers/README.md)

* [dfareportingBrowsersList](docs/browsers/README.md#dfareportingbrowserslist) - Retrieves a list of browsers.

### [campaignCreativeAssociations](docs/campaigncreativeassociations/README.md)

* [dfareportingCampaignCreativeAssociationsInsert](docs/campaigncreativeassociations/README.md#dfareportingcampaigncreativeassociationsinsert) - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* [dfareportingCampaignCreativeAssociationsList](docs/campaigncreativeassociations/README.md#dfareportingcampaigncreativeassociationslist) - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### [campaigns](docs/campaigns/README.md)

* [dfareportingCampaignsGet](docs/campaigns/README.md#dfareportingcampaignsget) - Gets one campaign by ID.
* [dfareportingCampaignsInsert](docs/campaigns/README.md#dfareportingcampaignsinsert) - Inserts a new campaign.
* [dfareportingCampaignsList](docs/campaigns/README.md#dfareportingcampaignslist) - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* [dfareportingCampaignsPatch](docs/campaigns/README.md#dfareportingcampaignspatch) - Updates an existing campaign. This method supports patch semantics.
* [dfareportingCampaignsUpdate](docs/campaigns/README.md#dfareportingcampaignsupdate) - Updates an existing campaign.

### [changeLogs](docs/changelogs/README.md)

* [dfareportingChangeLogsGet](docs/changelogs/README.md#dfareportingchangelogsget) - Gets one change log by ID.
* [dfareportingChangeLogsList](docs/changelogs/README.md#dfareportingchangelogslist) - Retrieves a list of change logs. This method supports paging.

### [cities](docs/cities/README.md)

* [dfareportingCitiesList](docs/cities/README.md#dfareportingcitieslist) - Retrieves a list of cities, possibly filtered.

### [connectionTypes](docs/connectiontypes/README.md)

* [dfareportingConnectionTypesGet](docs/connectiontypes/README.md#dfareportingconnectiontypesget) - Gets one connection type by ID.
* [dfareportingConnectionTypesList](docs/connectiontypes/README.md#dfareportingconnectiontypeslist) - Retrieves a list of connection types.

### [contentCategories](docs/contentcategories/README.md)

* [dfareportingContentCategoriesDelete](docs/contentcategories/README.md#dfareportingcontentcategoriesdelete) - Deletes an existing content category.
* [dfareportingContentCategoriesGet](docs/contentcategories/README.md#dfareportingcontentcategoriesget) - Gets one content category by ID.
* [dfareportingContentCategoriesInsert](docs/contentcategories/README.md#dfareportingcontentcategoriesinsert) - Inserts a new content category.
* [dfareportingContentCategoriesList](docs/contentcategories/README.md#dfareportingcontentcategorieslist) - Retrieves a list of content categories, possibly filtered. This method supports paging.
* [dfareportingContentCategoriesPatch](docs/contentcategories/README.md#dfareportingcontentcategoriespatch) - Updates an existing content category. This method supports patch semantics.
* [dfareportingContentCategoriesUpdate](docs/contentcategories/README.md#dfareportingcontentcategoriesupdate) - Updates an existing content category.

### [conversions](docs/conversions/README.md)

* [dfareportingConversionsBatchinsert](docs/conversions/README.md#dfareportingconversionsbatchinsert) - Inserts conversions.
* [dfareportingConversionsBatchupdate](docs/conversions/README.md#dfareportingconversionsbatchupdate) - Updates existing conversions.

### [countries](docs/countries/README.md)

* [dfareportingCountriesGet](docs/countries/README.md#dfareportingcountriesget) - Gets one country by ID.
* [dfareportingCountriesList](docs/countries/README.md#dfareportingcountrieslist) - Retrieves a list of countries.

### [creativeAssets](docs/creativeassets/README.md)

* [dfareportingCreativeAssetsInsert](docs/creativeassets/README.md#dfareportingcreativeassetsinsert) - Inserts a new creative asset.

### [creativeFieldValues](docs/creativefieldvalues/README.md)

* [dfareportingCreativeFieldValuesDelete](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesdelete) - Deletes an existing creative field value.
* [dfareportingCreativeFieldValuesGet](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesget) - Gets one creative field value by ID.
* [dfareportingCreativeFieldValuesInsert](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesinsert) - Inserts a new creative field value.
* [dfareportingCreativeFieldValuesList](docs/creativefieldvalues/README.md#dfareportingcreativefieldvalueslist) - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldValuesPatch](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluespatch) - Updates an existing creative field value. This method supports patch semantics.
* [dfareportingCreativeFieldValuesUpdate](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesupdate) - Updates an existing creative field value.

### [creativeFields](docs/creativefields/README.md)

* [dfareportingCreativeFieldsDelete](docs/creativefields/README.md#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [dfareportingCreativeFieldsGet](docs/creativefields/README.md#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [dfareportingCreativeFieldsInsert](docs/creativefields/README.md#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [dfareportingCreativeFieldsList](docs/creativefields/README.md#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [dfareportingCreativeFieldsPatch](docs/creativefields/README.md#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [dfareportingCreativeFieldsUpdate](docs/creativefields/README.md#dfareportingcreativefieldsupdate) - Updates an existing creative field.

### [creativeGroups](docs/creativegroups/README.md)

* [dfareportingCreativeGroupsGet](docs/creativegroups/README.md#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [dfareportingCreativeGroupsInsert](docs/creativegroups/README.md#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [dfareportingCreativeGroupsList](docs/creativegroups/README.md#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [dfareportingCreativeGroupsPatch](docs/creativegroups/README.md#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [dfareportingCreativeGroupsUpdate](docs/creativegroups/README.md#dfareportingcreativegroupsupdate) - Updates an existing creative group.

### [creatives](docs/creatives/README.md)

* [dfareportingCreativesGet](docs/creatives/README.md#dfareportingcreativesget) - Gets one creative by ID.
* [dfareportingCreativesInsert](docs/creatives/README.md#dfareportingcreativesinsert) - Inserts a new creative.
* [dfareportingCreativesList](docs/creatives/README.md#dfareportingcreativeslist) - Retrieves a list of creatives, possibly filtered. This method supports paging.
* [dfareportingCreativesPatch](docs/creatives/README.md#dfareportingcreativespatch) - Updates an existing creative. This method supports patch semantics.
* [dfareportingCreativesUpdate](docs/creatives/README.md#dfareportingcreativesupdate) - Updates an existing creative.

### [dimensionValues](docs/dimensionvalues/README.md)

* [dfareportingDimensionValuesQuery](docs/dimensionvalues/README.md#dfareportingdimensionvaluesquery) - Retrieves list of report dimension values for a list of filters.

### [directorySites](docs/directorysites/README.md)

* [dfareportingDirectorySitesGet](docs/directorysites/README.md#dfareportingdirectorysitesget) - Gets one directory site by ID.
* [dfareportingDirectorySitesInsert](docs/directorysites/README.md#dfareportingdirectorysitesinsert) - Inserts a new directory site.
* [dfareportingDirectorySitesList](docs/directorysites/README.md#dfareportingdirectorysiteslist) - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### [dynamicTargetingKeys](docs/dynamictargetingkeys/README.md)

* [dfareportingDynamicTargetingKeysDelete](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeysdelete) - Deletes an existing dynamic targeting key.
* [dfareportingDynamicTargetingKeysInsert](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeysinsert) - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* [dfareportingDynamicTargetingKeysList](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeyslist) - Retrieves a list of dynamic targeting keys.

### [eventTags](docs/eventtags/README.md)

* [dfareportingEventTagsDelete](docs/eventtags/README.md#dfareportingeventtagsdelete) - Deletes an existing event tag.
* [dfareportingEventTagsGet](docs/eventtags/README.md#dfareportingeventtagsget) - Gets one event tag by ID.
* [dfareportingEventTagsInsert](docs/eventtags/README.md#dfareportingeventtagsinsert) - Inserts a new event tag.
* [dfareportingEventTagsList](docs/eventtags/README.md#dfareportingeventtagslist) - Retrieves a list of event tags, possibly filtered.
* [dfareportingEventTagsPatch](docs/eventtags/README.md#dfareportingeventtagspatch) - Updates an existing event tag. This method supports patch semantics.
* [dfareportingEventTagsUpdate](docs/eventtags/README.md#dfareportingeventtagsupdate) - Updates an existing event tag.

### [files](docs/files/README.md)

* [dfareportingFilesGet](docs/files/README.md#dfareportingfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingFilesList](docs/files/README.md#dfareportingfileslist) - Lists files for a user profile.

### [floodlightActivities](docs/floodlightactivities/README.md)

* [dfareportingFloodlightActivitiesDelete](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesdelete) - Deletes an existing floodlight activity.
* [dfareportingFloodlightActivitiesGeneratetag](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesgeneratetag) - Generates a tag for a floodlight activity.
* [dfareportingFloodlightActivitiesGet](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesget) - Gets one floodlight activity by ID.
* [dfareportingFloodlightActivitiesInsert](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesinsert) - Inserts a new floodlight activity.
* [dfareportingFloodlightActivitiesList](docs/floodlightactivities/README.md#dfareportingfloodlightactivitieslist) - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivitiesPatch](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiespatch) - Updates an existing floodlight activity. This method supports patch semantics.
* [dfareportingFloodlightActivitiesUpdate](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesupdate) - Updates an existing floodlight activity.

### [floodlightActivityGroups](docs/floodlightactivitygroups/README.md)

* [dfareportingFloodlightActivityGroupsGet](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [dfareportingFloodlightActivityGroupsInsert](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [dfareportingFloodlightActivityGroupsList](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [dfareportingFloodlightActivityGroupsPatch](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [dfareportingFloodlightActivityGroupsUpdate](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

### [floodlightConfigurations](docs/floodlightconfigurations/README.md)

* [dfareportingFloodlightConfigurationsGet](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationsget) - Gets one floodlight configuration by ID.
* [dfareportingFloodlightConfigurationsList](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationslist) - Retrieves a list of floodlight configurations, possibly filtered.
* [dfareportingFloodlightConfigurationsPatch](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationspatch) - Updates an existing floodlight configuration. This method supports patch semantics.
* [dfareportingFloodlightConfigurationsUpdate](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationsupdate) - Updates an existing floodlight configuration.

### [inventoryItems](docs/inventoryitems/README.md)

* [dfareportingInventoryItemsGet](docs/inventoryitems/README.md#dfareportinginventoryitemsget) - Gets one inventory item by ID.
* [dfareportingInventoryItemsList](docs/inventoryitems/README.md#dfareportinginventoryitemslist) - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### [languages](docs/languages/README.md)

* [dfareportingLanguagesList](docs/languages/README.md#dfareportinglanguageslist) - Retrieves a list of languages.

### [metros](docs/metros/README.md)

* [dfareportingMetrosList](docs/metros/README.md#dfareportingmetroslist) - Retrieves a list of metros.

### [mobileApps](docs/mobileapps/README.md)

* [dfareportingMobileAppsGet](docs/mobileapps/README.md#dfareportingmobileappsget) - Gets one mobile app by ID.
* [dfareportingMobileAppsList](docs/mobileapps/README.md#dfareportingmobileappslist) - Retrieves list of available mobile apps.

### [mobileCarriers](docs/mobilecarriers/README.md)

* [dfareportingMobileCarriersGet](docs/mobilecarriers/README.md#dfareportingmobilecarriersget) - Gets one mobile carrier by ID.
* [dfareportingMobileCarriersList](docs/mobilecarriers/README.md#dfareportingmobilecarrierslist) - Retrieves a list of mobile carriers.

### [operatingSystemVersions](docs/operatingsystemversions/README.md)

* [dfareportingOperatingSystemVersionsGet](docs/operatingsystemversions/README.md#dfareportingoperatingsystemversionsget) - Gets one operating system version by ID.
* [dfareportingOperatingSystemVersionsList](docs/operatingsystemversions/README.md#dfareportingoperatingsystemversionslist) - Retrieves a list of operating system versions.

### [operatingSystems](docs/operatingsystems/README.md)

* [dfareportingOperatingSystemsGet](docs/operatingsystems/README.md#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [dfareportingOperatingSystemsList](docs/operatingsystems/README.md#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

### [orderDocuments](docs/orderdocuments/README.md)

* [dfareportingOrderDocumentsGet](docs/orderdocuments/README.md#dfareportingorderdocumentsget) - Gets one order document by ID.
* [dfareportingOrderDocumentsList](docs/orderdocuments/README.md#dfareportingorderdocumentslist) - Retrieves a list of order documents, possibly filtered. This method supports paging.

### [orders](docs/orders/README.md)

* [dfareportingOrdersGet](docs/orders/README.md#dfareportingordersget) - Gets one order by ID.
* [dfareportingOrdersList](docs/orders/README.md#dfareportingorderslist) - Retrieves a list of orders, possibly filtered. This method supports paging.

### [placementGroups](docs/placementgroups/README.md)

* [dfareportingPlacementGroupsGet](docs/placementgroups/README.md#dfareportingplacementgroupsget) - Gets one placement group by ID.
* [dfareportingPlacementGroupsInsert](docs/placementgroups/README.md#dfareportingplacementgroupsinsert) - Inserts a new placement group.
* [dfareportingPlacementGroupsList](docs/placementgroups/README.md#dfareportingplacementgroupslist) - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* [dfareportingPlacementGroupsPatch](docs/placementgroups/README.md#dfareportingplacementgroupspatch) - Updates an existing placement group. This method supports patch semantics.
* [dfareportingPlacementGroupsUpdate](docs/placementgroups/README.md#dfareportingplacementgroupsupdate) - Updates an existing placement group.

### [placementStrategies](docs/placementstrategies/README.md)

* [dfareportingPlacementStrategiesDelete](docs/placementstrategies/README.md#dfareportingplacementstrategiesdelete) - Deletes an existing placement strategy.
* [dfareportingPlacementStrategiesGet](docs/placementstrategies/README.md#dfareportingplacementstrategiesget) - Gets one placement strategy by ID.
* [dfareportingPlacementStrategiesInsert](docs/placementstrategies/README.md#dfareportingplacementstrategiesinsert) - Inserts a new placement strategy.
* [dfareportingPlacementStrategiesList](docs/placementstrategies/README.md#dfareportingplacementstrategieslist) - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* [dfareportingPlacementStrategiesPatch](docs/placementstrategies/README.md#dfareportingplacementstrategiespatch) - Updates an existing placement strategy. This method supports patch semantics.
* [dfareportingPlacementStrategiesUpdate](docs/placementstrategies/README.md#dfareportingplacementstrategiesupdate) - Updates an existing placement strategy.

### [placements](docs/placements/README.md)

* [dfareportingPlacementsGeneratetags](docs/placements/README.md#dfareportingplacementsgeneratetags) - Generates tags for a placement.
* [dfareportingPlacementsGet](docs/placements/README.md#dfareportingplacementsget) - Gets one placement by ID.
* [dfareportingPlacementsInsert](docs/placements/README.md#dfareportingplacementsinsert) - Inserts a new placement.
* [dfareportingPlacementsList](docs/placements/README.md#dfareportingplacementslist) - Retrieves a list of placements, possibly filtered. This method supports paging.
* [dfareportingPlacementsPatch](docs/placements/README.md#dfareportingplacementspatch) - Updates an existing placement. This method supports patch semantics.
* [dfareportingPlacementsUpdate](docs/placements/README.md#dfareportingplacementsupdate) - Updates an existing placement.

### [platformTypes](docs/platformtypes/README.md)

* [dfareportingPlatformTypesGet](docs/platformtypes/README.md#dfareportingplatformtypesget) - Gets one platform type by ID.
* [dfareportingPlatformTypesList](docs/platformtypes/README.md#dfareportingplatformtypeslist) - Retrieves a list of platform types.

### [postalCodes](docs/postalcodes/README.md)

* [dfareportingPostalCodesGet](docs/postalcodes/README.md#dfareportingpostalcodesget) - Gets one postal code by ID.
* [dfareportingPostalCodesList](docs/postalcodes/README.md#dfareportingpostalcodeslist) - Retrieves a list of postal codes.

### [projects](docs/projects/README.md)

* [dfareportingProjectsGet](docs/projects/README.md#dfareportingprojectsget) - Gets one project by ID.
* [dfareportingProjectsList](docs/projects/README.md#dfareportingprojectslist) - Retrieves a list of projects, possibly filtered. This method supports paging .

### [regions](docs/regions/README.md)

* [dfareportingRegionsList](docs/regions/README.md#dfareportingregionslist) - Retrieves a list of regions.

### [remarketingListShares](docs/remarketinglistshares/README.md)

* [dfareportingRemarketingListSharesGet](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharesget) - Gets one remarketing list share by remarketing list ID.
* [dfareportingRemarketingListSharesPatch](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharespatch) - Updates an existing remarketing list share. This method supports patch semantics.
* [dfareportingRemarketingListSharesUpdate](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharesupdate) - Updates an existing remarketing list share.

### [remarketingLists](docs/remarketinglists/README.md)

* [dfareportingRemarketingListsGet](docs/remarketinglists/README.md#dfareportingremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingRemarketingListsInsert](docs/remarketinglists/README.md#dfareportingremarketinglistsinsert) - Inserts a new remarketing list.
* [dfareportingRemarketingListsList](docs/remarketinglists/README.md#dfareportingremarketinglistslist) - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* [dfareportingRemarketingListsPatch](docs/remarketinglists/README.md#dfareportingremarketinglistspatch) - Updates an existing remarketing list. This method supports patch semantics.
* [dfareportingRemarketingListsUpdate](docs/remarketinglists/README.md#dfareportingremarketinglistsupdate) - Updates an existing remarketing list.

### [reports](docs/reports/README.md)

* [dfareportingReportsCompatibleFieldsQuery](docs/reports/README.md#dfareportingreportscompatiblefieldsquery) - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* [dfareportingReportsDelete](docs/reports/README.md#dfareportingreportsdelete) - Deletes a report by its ID.
* [dfareportingReportsFilesGet](docs/reports/README.md#dfareportingreportsfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingReportsFilesList](docs/reports/README.md#dfareportingreportsfileslist) - Lists files for a report.
* [dfareportingReportsGet](docs/reports/README.md#dfareportingreportsget) - Retrieves a report by its ID.
* [dfareportingReportsInsert](docs/reports/README.md#dfareportingreportsinsert) - Creates a report.
* [dfareportingReportsList](docs/reports/README.md#dfareportingreportslist) - Retrieves list of reports.
* [dfareportingReportsPatch](docs/reports/README.md#dfareportingreportspatch) - Updates an existing report. This method supports patch semantics.
* [dfareportingReportsRun](docs/reports/README.md#dfareportingreportsrun) - Runs a report.
* [dfareportingReportsUpdate](docs/reports/README.md#dfareportingreportsupdate) - Updates a report.

### [sites](docs/sites/README.md)

* [dfareportingSitesGet](docs/sites/README.md#dfareportingsitesget) - Gets one site by ID.
* [dfareportingSitesInsert](docs/sites/README.md#dfareportingsitesinsert) - Inserts a new site.
* [dfareportingSitesList](docs/sites/README.md#dfareportingsiteslist) - Retrieves a list of sites, possibly filtered. This method supports paging.
* [dfareportingSitesPatch](docs/sites/README.md#dfareportingsitespatch) - Updates an existing site. This method supports patch semantics.
* [dfareportingSitesUpdate](docs/sites/README.md#dfareportingsitesupdate) - Updates an existing site.

### [sizes](docs/sizes/README.md)

* [dfareportingSizesGet](docs/sizes/README.md#dfareportingsizesget) - Gets one size by ID.
* [dfareportingSizesInsert](docs/sizes/README.md#dfareportingsizesinsert) - Inserts a new size.
* [dfareportingSizesList](docs/sizes/README.md#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### [subaccounts](docs/subaccounts/README.md)

* [dfareportingSubaccountsGet](docs/subaccounts/README.md#dfareportingsubaccountsget) - Gets one subaccount by ID.
* [dfareportingSubaccountsInsert](docs/subaccounts/README.md#dfareportingsubaccountsinsert) - Inserts a new subaccount.
* [dfareportingSubaccountsList](docs/subaccounts/README.md#dfareportingsubaccountslist) - Gets a list of subaccounts, possibly filtered. This method supports paging.
* [dfareportingSubaccountsPatch](docs/subaccounts/README.md#dfareportingsubaccountspatch) - Updates an existing subaccount. This method supports patch semantics.
* [dfareportingSubaccountsUpdate](docs/subaccounts/README.md#dfareportingsubaccountsupdate) - Updates an existing subaccount.

### [targetableRemarketingLists](docs/targetableremarketinglists/README.md)

* [dfareportingTargetableRemarketingListsGet](docs/targetableremarketinglists/README.md#dfareportingtargetableremarketinglistsget) - Gets one remarketing list by ID.
* [dfareportingTargetableRemarketingListsList](docs/targetableremarketinglists/README.md#dfareportingtargetableremarketinglistslist) - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### [targetingTemplates](docs/targetingtemplates/README.md)

* [dfareportingTargetingTemplatesGet](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesget) - Gets one targeting template by ID.
* [dfareportingTargetingTemplatesInsert](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesinsert) - Inserts a new targeting template.
* [dfareportingTargetingTemplatesList](docs/targetingtemplates/README.md#dfareportingtargetingtemplateslist) - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* [dfareportingTargetingTemplatesPatch](docs/targetingtemplates/README.md#dfareportingtargetingtemplatespatch) - Updates an existing targeting template. This method supports patch semantics.
* [dfareportingTargetingTemplatesUpdate](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesupdate) - Updates an existing targeting template.

### [userProfiles](docs/userprofiles/README.md)

* [dfareportingUserProfilesGet](docs/userprofiles/README.md#dfareportinguserprofilesget) - Gets one user profile by ID.
* [dfareportingUserProfilesList](docs/userprofiles/README.md#dfareportinguserprofileslist) - Retrieves list of user profiles for a user.

### [userRolePermissionGroups](docs/userrolepermissiongroups/README.md)

* [dfareportingUserRolePermissionGroupsGet](docs/userrolepermissiongroups/README.md#dfareportinguserrolepermissiongroupsget) - Gets one user role permission group by ID.
* [dfareportingUserRolePermissionGroupsList](docs/userrolepermissiongroups/README.md#dfareportinguserrolepermissiongroupslist) - Gets a list of all supported user role permission groups.

### [userRolePermissions](docs/userrolepermissions/README.md)

* [dfareportingUserRolePermissionsGet](docs/userrolepermissions/README.md#dfareportinguserrolepermissionsget) - Gets one user role permission by ID.
* [dfareportingUserRolePermissionsList](docs/userrolepermissions/README.md#dfareportinguserrolepermissionslist) - Gets a list of user role permissions, possibly filtered.

### [userRoles](docs/userroles/README.md)

* [dfareportingUserRolesDelete](docs/userroles/README.md#dfareportinguserrolesdelete) - Deletes an existing user role.
* [dfareportingUserRolesGet](docs/userroles/README.md#dfareportinguserrolesget) - Gets one user role by ID.
* [dfareportingUserRolesInsert](docs/userroles/README.md#dfareportinguserrolesinsert) - Inserts a new user role.
* [dfareportingUserRolesList](docs/userroles/README.md#dfareportinguserroleslist) - Retrieves a list of user roles, possibly filtered. This method supports paging.
* [dfareportingUserRolesPatch](docs/userroles/README.md#dfareportinguserrolespatch) - Updates an existing user role. This method supports patch semantics.
* [dfareportingUserRolesUpdate](docs/userroles/README.md#dfareportinguserrolesupdate) - Updates an existing user role.

### [videoFormats](docs/videoformats/README.md)

* [dfareportingVideoFormatsGet](docs/videoformats/README.md#dfareportingvideoformatsget) - Gets one video format by ID.
* [dfareportingVideoFormatsList](docs/videoformats/README.md#dfareportingvideoformatslist) - Lists available video formats.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
