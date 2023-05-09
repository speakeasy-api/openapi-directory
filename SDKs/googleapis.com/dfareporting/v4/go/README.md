# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/dfareporting/v4/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountActiveAdSummaries.DfareportingAccountActiveAdSummariesGet(ctx, operations.DfareportingAccountActiveAdSummariesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Key: sdk.String("nulla"),
        OauthToken: sdk.String("corrupti"),
        PrettyPrint: sdk.Bool(false),
        ProfileID: "illum",
        QuotaUser: sdk.String("vel"),
        SummaryAccountID: "error",
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.DfareportingAccountActiveAdSummariesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountActiveAdSummary != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [AccountActiveAdSummaries](docs/accountactiveadsummaries/README.md)

* [DfareportingAccountActiveAdSummariesGet](docs/accountactiveadsummaries/README.md#dfareportingaccountactiveadsummariesget) - Gets the account's active ad summary by account ID.

### [AccountPermissionGroups](docs/accountpermissiongroups/README.md)

* [DfareportingAccountPermissionGroupsGet](docs/accountpermissiongroups/README.md#dfareportingaccountpermissiongroupsget) - Gets one account permission group by ID.
* [DfareportingAccountPermissionGroupsList](docs/accountpermissiongroups/README.md#dfareportingaccountpermissiongroupslist) - Retrieves the list of account permission groups.

### [AccountPermissions](docs/accountpermissions/README.md)

* [DfareportingAccountPermissionsGet](docs/accountpermissions/README.md#dfareportingaccountpermissionsget) - Gets one account permission by ID.
* [DfareportingAccountPermissionsList](docs/accountpermissions/README.md#dfareportingaccountpermissionslist) - Retrieves the list of account permissions.

### [AccountUserProfiles](docs/accountuserprofiles/README.md)

* [DfareportingAccountUserProfilesGet](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesget) - Gets one account user profile by ID.
* [DfareportingAccountUserProfilesInsert](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesinsert) - Inserts a new account user profile.
* [DfareportingAccountUserProfilesList](docs/accountuserprofiles/README.md#dfareportingaccountuserprofileslist) - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* [DfareportingAccountUserProfilesPatch](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilespatch) - Updates an existing account user profile. This method supports patch semantics.
* [DfareportingAccountUserProfilesUpdate](docs/accountuserprofiles/README.md#dfareportingaccountuserprofilesupdate) - Updates an existing account user profile.

### [Accounts](docs/accounts/README.md)

* [DfareportingAccountsGet](docs/accounts/README.md#dfareportingaccountsget) - Gets one account by ID.
* [DfareportingAccountsList](docs/accounts/README.md#dfareportingaccountslist) - Retrieves the list of accounts, possibly filtered. This method supports paging.
* [DfareportingAccountsPatch](docs/accounts/README.md#dfareportingaccountspatch) - Updates an existing account. This method supports patch semantics.
* [DfareportingAccountsUpdate](docs/accounts/README.md#dfareportingaccountsupdate) - Updates an existing account.

### [Ads](docs/ads/README.md)

* [DfareportingAdsGet](docs/ads/README.md#dfareportingadsget) - Gets one ad by ID.
* [DfareportingAdsInsert](docs/ads/README.md#dfareportingadsinsert) - Inserts a new ad.
* [DfareportingAdsList](docs/ads/README.md#dfareportingadslist) - Retrieves a list of ads, possibly filtered. This method supports paging.
* [DfareportingAdsPatch](docs/ads/README.md#dfareportingadspatch) - Updates an existing ad. This method supports patch semantics.
* [DfareportingAdsUpdate](docs/ads/README.md#dfareportingadsupdate) - Updates an existing ad.

### [AdvertiserGroups](docs/advertisergroups/README.md)

* [DfareportingAdvertiserGroupsDelete](docs/advertisergroups/README.md#dfareportingadvertisergroupsdelete) - Deletes an existing advertiser group.
* [DfareportingAdvertiserGroupsGet](docs/advertisergroups/README.md#dfareportingadvertisergroupsget) - Gets one advertiser group by ID.
* [DfareportingAdvertiserGroupsInsert](docs/advertisergroups/README.md#dfareportingadvertisergroupsinsert) - Inserts a new advertiser group.
* [DfareportingAdvertiserGroupsList](docs/advertisergroups/README.md#dfareportingadvertisergroupslist) - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* [DfareportingAdvertiserGroupsPatch](docs/advertisergroups/README.md#dfareportingadvertisergroupspatch) - Updates an existing advertiser group. This method supports patch semantics.
* [DfareportingAdvertiserGroupsUpdate](docs/advertisergroups/README.md#dfareportingadvertisergroupsupdate) - Updates an existing advertiser group.

### [AdvertiserInvoices](docs/advertiserinvoices/README.md)

* [DfareportingAdvertiserInvoicesList](docs/advertiserinvoices/README.md#dfareportingadvertiserinvoiceslist) - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.

### [AdvertiserLandingPages](docs/advertiserlandingpages/README.md)

* [DfareportingAdvertiserLandingPagesGet](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesget) - Gets one landing page by ID.
* [DfareportingAdvertiserLandingPagesInsert](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesinsert) - Inserts a new landing page.
* [DfareportingAdvertiserLandingPagesList](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpageslist) - Retrieves a list of landing pages.
* [DfareportingAdvertiserLandingPagesPatch](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagespatch) - Updates an existing advertiser landing page. This method supports patch semantics.
* [DfareportingAdvertiserLandingPagesUpdate](docs/advertiserlandingpages/README.md#dfareportingadvertiserlandingpagesupdate) - Updates an existing landing page.

### [Advertisers](docs/advertisers/README.md)

* [DfareportingAdvertisersGet](docs/advertisers/README.md#dfareportingadvertisersget) - Gets one advertiser by ID.
* [DfareportingAdvertisersInsert](docs/advertisers/README.md#dfareportingadvertisersinsert) - Inserts a new advertiser.
* [DfareportingAdvertisersList](docs/advertisers/README.md#dfareportingadvertiserslist) - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* [DfareportingAdvertisersPatch](docs/advertisers/README.md#dfareportingadvertiserspatch) - Updates an existing advertiser. This method supports patch semantics.
* [DfareportingAdvertisersUpdate](docs/advertisers/README.md#dfareportingadvertisersupdate) - Updates an existing advertiser.

### [BillingAssignments](docs/billingassignments/README.md)

* [DfareportingBillingAssignmentsInsert](docs/billingassignments/README.md#dfareportingbillingassignmentsinsert) - Inserts a new billing assignment and returns the new assignment. Only one of advertiser_id or campaign_id is support per request. If the new assignment has no effect (assigning a campaign to the parent advertiser billing profile or assigning an advertiser to the account billing profile), no assignment will be returned.
* [DfareportingBillingAssignmentsList](docs/billingassignments/README.md#dfareportingbillingassignmentslist) - Retrieves a list of billing assignments.

### [BillingProfiles](docs/billingprofiles/README.md)

* [DfareportingBillingProfilesGet](docs/billingprofiles/README.md#dfareportingbillingprofilesget) - Gets one billing profile by ID.
* [DfareportingBillingProfilesList](docs/billingprofiles/README.md#dfareportingbillingprofileslist) - Retrieves a list of billing profiles, possibly filtered. This method supports paging.
* [DfareportingBillingProfilesUpdate](docs/billingprofiles/README.md#dfareportingbillingprofilesupdate) - Updates an existing billing profile.

### [BillingRates](docs/billingrates/README.md)

* [DfareportingBillingRatesList](docs/billingrates/README.md#dfareportingbillingrateslist) - Retrieves a list of billing rates. This method supports paging.

### [Browsers](docs/browsers/README.md)

* [DfareportingBrowsersList](docs/browsers/README.md#dfareportingbrowserslist) - Retrieves a list of browsers.

### [CampaignCreativeAssociations](docs/campaigncreativeassociations/README.md)

* [DfareportingCampaignCreativeAssociationsInsert](docs/campaigncreativeassociations/README.md#dfareportingcampaigncreativeassociationsinsert) - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* [DfareportingCampaignCreativeAssociationsList](docs/campaigncreativeassociations/README.md#dfareportingcampaigncreativeassociationslist) - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### [Campaigns](docs/campaigns/README.md)

* [DfareportingCampaignsGet](docs/campaigns/README.md#dfareportingcampaignsget) - Gets one campaign by ID.
* [DfareportingCampaignsInsert](docs/campaigns/README.md#dfareportingcampaignsinsert) - Inserts a new campaign.
* [DfareportingCampaignsList](docs/campaigns/README.md#dfareportingcampaignslist) - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* [DfareportingCampaignsPatch](docs/campaigns/README.md#dfareportingcampaignspatch) - Updates an existing campaign. This method supports patch semantics.
* [DfareportingCampaignsUpdate](docs/campaigns/README.md#dfareportingcampaignsupdate) - Updates an existing campaign.

### [ChangeLogs](docs/changelogs/README.md)

* [DfareportingChangeLogsGet](docs/changelogs/README.md#dfareportingchangelogsget) - Gets one change log by ID.
* [DfareportingChangeLogsList](docs/changelogs/README.md#dfareportingchangelogslist) - Retrieves a list of change logs. This method supports paging.

### [Cities](docs/cities/README.md)

* [DfareportingCitiesList](docs/cities/README.md#dfareportingcitieslist) - Retrieves a list of cities, possibly filtered.

### [ConnectionTypes](docs/connectiontypes/README.md)

* [DfareportingConnectionTypesGet](docs/connectiontypes/README.md#dfareportingconnectiontypesget) - Gets one connection type by ID.
* [DfareportingConnectionTypesList](docs/connectiontypes/README.md#dfareportingconnectiontypeslist) - Retrieves a list of connection types.

### [ContentCategories](docs/contentcategories/README.md)

* [DfareportingContentCategoriesDelete](docs/contentcategories/README.md#dfareportingcontentcategoriesdelete) - Deletes an existing content category.
* [DfareportingContentCategoriesGet](docs/contentcategories/README.md#dfareportingcontentcategoriesget) - Gets one content category by ID.
* [DfareportingContentCategoriesInsert](docs/contentcategories/README.md#dfareportingcontentcategoriesinsert) - Inserts a new content category.
* [DfareportingContentCategoriesList](docs/contentcategories/README.md#dfareportingcontentcategorieslist) - Retrieves a list of content categories, possibly filtered. This method supports paging.
* [DfareportingContentCategoriesPatch](docs/contentcategories/README.md#dfareportingcontentcategoriespatch) - Updates an existing content category. This method supports patch semantics.
* [DfareportingContentCategoriesUpdate](docs/contentcategories/README.md#dfareportingcontentcategoriesupdate) - Updates an existing content category.

### [Conversions](docs/conversions/README.md)

* [DfareportingConversionsBatchinsert](docs/conversions/README.md#dfareportingconversionsbatchinsert) - Inserts conversions.
* [DfareportingConversionsBatchupdate](docs/conversions/README.md#dfareportingconversionsbatchupdate) - Updates existing conversions.

### [Countries](docs/countries/README.md)

* [DfareportingCountriesGet](docs/countries/README.md#dfareportingcountriesget) - Gets one country by ID.
* [DfareportingCountriesList](docs/countries/README.md#dfareportingcountrieslist) - Retrieves a list of countries.

### [CreativeAssets](docs/creativeassets/README.md)

* [DfareportingCreativeAssetsInsert](docs/creativeassets/README.md#dfareportingcreativeassetsinsert) - Inserts a new creative asset.

### [CreativeFieldValues](docs/creativefieldvalues/README.md)

* [DfareportingCreativeFieldValuesDelete](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesdelete) - Deletes an existing creative field value.
* [DfareportingCreativeFieldValuesGet](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesget) - Gets one creative field value by ID.
* [DfareportingCreativeFieldValuesInsert](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesinsert) - Inserts a new creative field value.
* [DfareportingCreativeFieldValuesList](docs/creativefieldvalues/README.md#dfareportingcreativefieldvalueslist) - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* [DfareportingCreativeFieldValuesPatch](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluespatch) - Updates an existing creative field value. This method supports patch semantics.
* [DfareportingCreativeFieldValuesUpdate](docs/creativefieldvalues/README.md#dfareportingcreativefieldvaluesupdate) - Updates an existing creative field value.

### [CreativeFields](docs/creativefields/README.md)

* [DfareportingCreativeFieldsDelete](docs/creativefields/README.md#dfareportingcreativefieldsdelete) - Deletes an existing creative field.
* [DfareportingCreativeFieldsGet](docs/creativefields/README.md#dfareportingcreativefieldsget) - Gets one creative field by ID.
* [DfareportingCreativeFieldsInsert](docs/creativefields/README.md#dfareportingcreativefieldsinsert) - Inserts a new creative field.
* [DfareportingCreativeFieldsList](docs/creativefields/README.md#dfareportingcreativefieldslist) - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* [DfareportingCreativeFieldsPatch](docs/creativefields/README.md#dfareportingcreativefieldspatch) - Updates an existing creative field. This method supports patch semantics.
* [DfareportingCreativeFieldsUpdate](docs/creativefields/README.md#dfareportingcreativefieldsupdate) - Updates an existing creative field.

### [CreativeGroups](docs/creativegroups/README.md)

* [DfareportingCreativeGroupsGet](docs/creativegroups/README.md#dfareportingcreativegroupsget) - Gets one creative group by ID.
* [DfareportingCreativeGroupsInsert](docs/creativegroups/README.md#dfareportingcreativegroupsinsert) - Inserts a new creative group.
* [DfareportingCreativeGroupsList](docs/creativegroups/README.md#dfareportingcreativegroupslist) - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* [DfareportingCreativeGroupsPatch](docs/creativegroups/README.md#dfareportingcreativegroupspatch) - Updates an existing creative group. This method supports patch semantics.
* [DfareportingCreativeGroupsUpdate](docs/creativegroups/README.md#dfareportingcreativegroupsupdate) - Updates an existing creative group.

### [Creatives](docs/creatives/README.md)

* [DfareportingCreativesGet](docs/creatives/README.md#dfareportingcreativesget) - Gets one creative by ID.
* [DfareportingCreativesInsert](docs/creatives/README.md#dfareportingcreativesinsert) - Inserts a new creative.
* [DfareportingCreativesList](docs/creatives/README.md#dfareportingcreativeslist) - Retrieves a list of creatives, possibly filtered. This method supports paging.
* [DfareportingCreativesPatch](docs/creatives/README.md#dfareportingcreativespatch) - Updates an existing creative. This method supports patch semantics.
* [DfareportingCreativesUpdate](docs/creatives/README.md#dfareportingcreativesupdate) - Updates an existing creative.

### [DimensionValues](docs/dimensionvalues/README.md)

* [DfareportingDimensionValuesQuery](docs/dimensionvalues/README.md#dfareportingdimensionvaluesquery) - Retrieves list of report dimension values for a list of filters.

### [DirectorySites](docs/directorysites/README.md)

* [DfareportingDirectorySitesGet](docs/directorysites/README.md#dfareportingdirectorysitesget) - Gets one directory site by ID.
* [DfareportingDirectorySitesInsert](docs/directorysites/README.md#dfareportingdirectorysitesinsert) - Inserts a new directory site.
* [DfareportingDirectorySitesList](docs/directorysites/README.md#dfareportingdirectorysiteslist) - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### [DynamicTargetingKeys](docs/dynamictargetingkeys/README.md)

* [DfareportingDynamicTargetingKeysDelete](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeysdelete) - Deletes an existing dynamic targeting key.
* [DfareportingDynamicTargetingKeysInsert](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeysinsert) - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* [DfareportingDynamicTargetingKeysList](docs/dynamictargetingkeys/README.md#dfareportingdynamictargetingkeyslist) - Retrieves a list of dynamic targeting keys.

### [EventTags](docs/eventtags/README.md)

* [DfareportingEventTagsDelete](docs/eventtags/README.md#dfareportingeventtagsdelete) - Deletes an existing event tag.
* [DfareportingEventTagsGet](docs/eventtags/README.md#dfareportingeventtagsget) - Gets one event tag by ID.
* [DfareportingEventTagsInsert](docs/eventtags/README.md#dfareportingeventtagsinsert) - Inserts a new event tag.
* [DfareportingEventTagsList](docs/eventtags/README.md#dfareportingeventtagslist) - Retrieves a list of event tags, possibly filtered.
* [DfareportingEventTagsPatch](docs/eventtags/README.md#dfareportingeventtagspatch) - Updates an existing event tag. This method supports patch semantics.
* [DfareportingEventTagsUpdate](docs/eventtags/README.md#dfareportingeventtagsupdate) - Updates an existing event tag.

### [Files](docs/files/README.md)

* [DfareportingFilesGet](docs/files/README.md#dfareportingfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [DfareportingFilesList](docs/files/README.md#dfareportingfileslist) - Lists files for a user profile.

### [FloodlightActivities](docs/floodlightactivities/README.md)

* [DfareportingFloodlightActivitiesDelete](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesdelete) - Deletes an existing floodlight activity.
* [DfareportingFloodlightActivitiesGeneratetag](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesgeneratetag) - Generates a tag for a floodlight activity.
* [DfareportingFloodlightActivitiesGet](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesget) - Gets one floodlight activity by ID.
* [DfareportingFloodlightActivitiesInsert](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesinsert) - Inserts a new floodlight activity.
* [DfareportingFloodlightActivitiesList](docs/floodlightactivities/README.md#dfareportingfloodlightactivitieslist) - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* [DfareportingFloodlightActivitiesPatch](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiespatch) - Updates an existing floodlight activity. This method supports patch semantics.
* [DfareportingFloodlightActivitiesUpdate](docs/floodlightactivities/README.md#dfareportingfloodlightactivitiesupdate) - Updates an existing floodlight activity.

### [FloodlightActivityGroups](docs/floodlightactivitygroups/README.md)

* [DfareportingFloodlightActivityGroupsGet](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsget) - Gets one floodlight activity group by ID.
* [DfareportingFloodlightActivityGroupsInsert](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsinsert) - Inserts a new floodlight activity group.
* [DfareportingFloodlightActivityGroupsList](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupslist) - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* [DfareportingFloodlightActivityGroupsPatch](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupspatch) - Updates an existing floodlight activity group. This method supports patch semantics.
* [DfareportingFloodlightActivityGroupsUpdate](docs/floodlightactivitygroups/README.md#dfareportingfloodlightactivitygroupsupdate) - Updates an existing floodlight activity group.

### [FloodlightConfigurations](docs/floodlightconfigurations/README.md)

* [DfareportingFloodlightConfigurationsGet](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationsget) - Gets one floodlight configuration by ID.
* [DfareportingFloodlightConfigurationsList](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationslist) - Retrieves a list of floodlight configurations, possibly filtered.
* [DfareportingFloodlightConfigurationsPatch](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationspatch) - Updates an existing floodlight configuration. This method supports patch semantics.
* [DfareportingFloodlightConfigurationsUpdate](docs/floodlightconfigurations/README.md#dfareportingfloodlightconfigurationsupdate) - Updates an existing floodlight configuration.

### [InventoryItems](docs/inventoryitems/README.md)

* [DfareportingInventoryItemsGet](docs/inventoryitems/README.md#dfareportinginventoryitemsget) - Gets one inventory item by ID.
* [DfareportingInventoryItemsList](docs/inventoryitems/README.md#dfareportinginventoryitemslist) - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### [Languages](docs/languages/README.md)

* [DfareportingLanguagesList](docs/languages/README.md#dfareportinglanguageslist) - Retrieves a list of languages.

### [Metros](docs/metros/README.md)

* [DfareportingMetrosList](docs/metros/README.md#dfareportingmetroslist) - Retrieves a list of metros.

### [MobileApps](docs/mobileapps/README.md)

* [DfareportingMobileAppsGet](docs/mobileapps/README.md#dfareportingmobileappsget) - Gets one mobile app by ID.
* [DfareportingMobileAppsList](docs/mobileapps/README.md#dfareportingmobileappslist) - Retrieves list of available mobile apps.

### [MobileCarriers](docs/mobilecarriers/README.md)

* [DfareportingMobileCarriersGet](docs/mobilecarriers/README.md#dfareportingmobilecarriersget) - Gets one mobile carrier by ID.
* [DfareportingMobileCarriersList](docs/mobilecarriers/README.md#dfareportingmobilecarrierslist) - Retrieves a list of mobile carriers.

### [OperatingSystemVersions](docs/operatingsystemversions/README.md)

* [DfareportingOperatingSystemVersionsGet](docs/operatingsystemversions/README.md#dfareportingoperatingsystemversionsget) - Gets one operating system version by ID.
* [DfareportingOperatingSystemVersionsList](docs/operatingsystemversions/README.md#dfareportingoperatingsystemversionslist) - Retrieves a list of operating system versions.

### [OperatingSystems](docs/operatingsystems/README.md)

* [DfareportingOperatingSystemsGet](docs/operatingsystems/README.md#dfareportingoperatingsystemsget) - Gets one operating system by DART ID.
* [DfareportingOperatingSystemsList](docs/operatingsystems/README.md#dfareportingoperatingsystemslist) - Retrieves a list of operating systems.

### [OrderDocuments](docs/orderdocuments/README.md)

* [DfareportingOrderDocumentsGet](docs/orderdocuments/README.md#dfareportingorderdocumentsget) - Gets one order document by ID.
* [DfareportingOrderDocumentsList](docs/orderdocuments/README.md#dfareportingorderdocumentslist) - Retrieves a list of order documents, possibly filtered. This method supports paging.

### [Orders](docs/orders/README.md)

* [DfareportingOrdersGet](docs/orders/README.md#dfareportingordersget) - Gets one order by ID.
* [DfareportingOrdersList](docs/orders/README.md#dfareportingorderslist) - Retrieves a list of orders, possibly filtered. This method supports paging.

### [PlacementGroups](docs/placementgroups/README.md)

* [DfareportingPlacementGroupsGet](docs/placementgroups/README.md#dfareportingplacementgroupsget) - Gets one placement group by ID.
* [DfareportingPlacementGroupsInsert](docs/placementgroups/README.md#dfareportingplacementgroupsinsert) - Inserts a new placement group.
* [DfareportingPlacementGroupsList](docs/placementgroups/README.md#dfareportingplacementgroupslist) - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* [DfareportingPlacementGroupsPatch](docs/placementgroups/README.md#dfareportingplacementgroupspatch) - Updates an existing placement group. This method supports patch semantics.
* [DfareportingPlacementGroupsUpdate](docs/placementgroups/README.md#dfareportingplacementgroupsupdate) - Updates an existing placement group.

### [PlacementStrategies](docs/placementstrategies/README.md)

* [DfareportingPlacementStrategiesDelete](docs/placementstrategies/README.md#dfareportingplacementstrategiesdelete) - Deletes an existing placement strategy.
* [DfareportingPlacementStrategiesGet](docs/placementstrategies/README.md#dfareportingplacementstrategiesget) - Gets one placement strategy by ID.
* [DfareportingPlacementStrategiesInsert](docs/placementstrategies/README.md#dfareportingplacementstrategiesinsert) - Inserts a new placement strategy.
* [DfareportingPlacementStrategiesList](docs/placementstrategies/README.md#dfareportingplacementstrategieslist) - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* [DfareportingPlacementStrategiesPatch](docs/placementstrategies/README.md#dfareportingplacementstrategiespatch) - Updates an existing placement strategy. This method supports patch semantics.
* [DfareportingPlacementStrategiesUpdate](docs/placementstrategies/README.md#dfareportingplacementstrategiesupdate) - Updates an existing placement strategy.

### [Placements](docs/placements/README.md)

* [DfareportingPlacementsGeneratetags](docs/placements/README.md#dfareportingplacementsgeneratetags) - Generates tags for a placement.
* [DfareportingPlacementsGet](docs/placements/README.md#dfareportingplacementsget) - Gets one placement by ID.
* [DfareportingPlacementsInsert](docs/placements/README.md#dfareportingplacementsinsert) - Inserts a new placement.
* [DfareportingPlacementsList](docs/placements/README.md#dfareportingplacementslist) - Retrieves a list of placements, possibly filtered. This method supports paging.
* [DfareportingPlacementsPatch](docs/placements/README.md#dfareportingplacementspatch) - Updates an existing placement. This method supports patch semantics.
* [DfareportingPlacementsUpdate](docs/placements/README.md#dfareportingplacementsupdate) - Updates an existing placement.

### [PlatformTypes](docs/platformtypes/README.md)

* [DfareportingPlatformTypesGet](docs/platformtypes/README.md#dfareportingplatformtypesget) - Gets one platform type by ID.
* [DfareportingPlatformTypesList](docs/platformtypes/README.md#dfareportingplatformtypeslist) - Retrieves a list of platform types.

### [PostalCodes](docs/postalcodes/README.md)

* [DfareportingPostalCodesGet](docs/postalcodes/README.md#dfareportingpostalcodesget) - Gets one postal code by ID.
* [DfareportingPostalCodesList](docs/postalcodes/README.md#dfareportingpostalcodeslist) - Retrieves a list of postal codes.

### [Projects](docs/projects/README.md)

* [DfareportingProjectsGet](docs/projects/README.md#dfareportingprojectsget) - Gets one project by ID.
* [DfareportingProjectsList](docs/projects/README.md#dfareportingprojectslist) - Retrieves a list of projects, possibly filtered. This method supports paging .

### [Regions](docs/regions/README.md)

* [DfareportingRegionsList](docs/regions/README.md#dfareportingregionslist) - Retrieves a list of regions.

### [RemarketingListShares](docs/remarketinglistshares/README.md)

* [DfareportingRemarketingListSharesGet](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharesget) - Gets one remarketing list share by remarketing list ID.
* [DfareportingRemarketingListSharesPatch](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharespatch) - Updates an existing remarketing list share. This method supports patch semantics.
* [DfareportingRemarketingListSharesUpdate](docs/remarketinglistshares/README.md#dfareportingremarketinglistsharesupdate) - Updates an existing remarketing list share.

### [RemarketingLists](docs/remarketinglists/README.md)

* [DfareportingRemarketingListsGet](docs/remarketinglists/README.md#dfareportingremarketinglistsget) - Gets one remarketing list by ID.
* [DfareportingRemarketingListsInsert](docs/remarketinglists/README.md#dfareportingremarketinglistsinsert) - Inserts a new remarketing list.
* [DfareportingRemarketingListsList](docs/remarketinglists/README.md#dfareportingremarketinglistslist) - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* [DfareportingRemarketingListsPatch](docs/remarketinglists/README.md#dfareportingremarketinglistspatch) - Updates an existing remarketing list. This method supports patch semantics.
* [DfareportingRemarketingListsUpdate](docs/remarketinglists/README.md#dfareportingremarketinglistsupdate) - Updates an existing remarketing list.

### [Reports](docs/reports/README.md)

* [DfareportingReportsCompatibleFieldsQuery](docs/reports/README.md#dfareportingreportscompatiblefieldsquery) - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* [DfareportingReportsDelete](docs/reports/README.md#dfareportingreportsdelete) - Deletes a report by its ID.
* [DfareportingReportsFilesGet](docs/reports/README.md#dfareportingreportsfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [DfareportingReportsFilesList](docs/reports/README.md#dfareportingreportsfileslist) - Lists files for a report.
* [DfareportingReportsGet](docs/reports/README.md#dfareportingreportsget) - Retrieves a report by its ID.
* [DfareportingReportsInsert](docs/reports/README.md#dfareportingreportsinsert) - Creates a report.
* [DfareportingReportsList](docs/reports/README.md#dfareportingreportslist) - Retrieves list of reports.
* [DfareportingReportsPatch](docs/reports/README.md#dfareportingreportspatch) - Updates an existing report. This method supports patch semantics.
* [DfareportingReportsRun](docs/reports/README.md#dfareportingreportsrun) - Runs a report.
* [DfareportingReportsUpdate](docs/reports/README.md#dfareportingreportsupdate) - Updates a report.

### [Sites](docs/sites/README.md)

* [DfareportingSitesGet](docs/sites/README.md#dfareportingsitesget) - Gets one site by ID.
* [DfareportingSitesInsert](docs/sites/README.md#dfareportingsitesinsert) - Inserts a new site.
* [DfareportingSitesList](docs/sites/README.md#dfareportingsiteslist) - Retrieves a list of sites, possibly filtered. This method supports paging.
* [DfareportingSitesPatch](docs/sites/README.md#dfareportingsitespatch) - Updates an existing site. This method supports patch semantics.
* [DfareportingSitesUpdate](docs/sites/README.md#dfareportingsitesupdate) - Updates an existing site.

### [Sizes](docs/sizes/README.md)

* [DfareportingSizesGet](docs/sizes/README.md#dfareportingsizesget) - Gets one size by ID.
* [DfareportingSizesInsert](docs/sizes/README.md#dfareportingsizesinsert) - Inserts a new size.
* [DfareportingSizesList](docs/sizes/README.md#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### [Subaccounts](docs/subaccounts/README.md)

* [DfareportingSubaccountsGet](docs/subaccounts/README.md#dfareportingsubaccountsget) - Gets one subaccount by ID.
* [DfareportingSubaccountsInsert](docs/subaccounts/README.md#dfareportingsubaccountsinsert) - Inserts a new subaccount.
* [DfareportingSubaccountsList](docs/subaccounts/README.md#dfareportingsubaccountslist) - Gets a list of subaccounts, possibly filtered. This method supports paging.
* [DfareportingSubaccountsPatch](docs/subaccounts/README.md#dfareportingsubaccountspatch) - Updates an existing subaccount. This method supports patch semantics.
* [DfareportingSubaccountsUpdate](docs/subaccounts/README.md#dfareportingsubaccountsupdate) - Updates an existing subaccount.

### [TargetableRemarketingLists](docs/targetableremarketinglists/README.md)

* [DfareportingTargetableRemarketingListsGet](docs/targetableremarketinglists/README.md#dfareportingtargetableremarketinglistsget) - Gets one remarketing list by ID.
* [DfareportingTargetableRemarketingListsList](docs/targetableremarketinglists/README.md#dfareportingtargetableremarketinglistslist) - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### [TargetingTemplates](docs/targetingtemplates/README.md)

* [DfareportingTargetingTemplatesGet](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesget) - Gets one targeting template by ID.
* [DfareportingTargetingTemplatesInsert](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesinsert) - Inserts a new targeting template.
* [DfareportingTargetingTemplatesList](docs/targetingtemplates/README.md#dfareportingtargetingtemplateslist) - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* [DfareportingTargetingTemplatesPatch](docs/targetingtemplates/README.md#dfareportingtargetingtemplatespatch) - Updates an existing targeting template. This method supports patch semantics.
* [DfareportingTargetingTemplatesUpdate](docs/targetingtemplates/README.md#dfareportingtargetingtemplatesupdate) - Updates an existing targeting template.

### [UserProfiles](docs/userprofiles/README.md)

* [DfareportingUserProfilesGet](docs/userprofiles/README.md#dfareportinguserprofilesget) - Gets one user profile by ID.
* [DfareportingUserProfilesList](docs/userprofiles/README.md#dfareportinguserprofileslist) - Retrieves list of user profiles for a user.

### [UserRolePermissionGroups](docs/userrolepermissiongroups/README.md)

* [DfareportingUserRolePermissionGroupsGet](docs/userrolepermissiongroups/README.md#dfareportinguserrolepermissiongroupsget) - Gets one user role permission group by ID.
* [DfareportingUserRolePermissionGroupsList](docs/userrolepermissiongroups/README.md#dfareportinguserrolepermissiongroupslist) - Gets a list of all supported user role permission groups.

### [UserRolePermissions](docs/userrolepermissions/README.md)

* [DfareportingUserRolePermissionsGet](docs/userrolepermissions/README.md#dfareportinguserrolepermissionsget) - Gets one user role permission by ID.
* [DfareportingUserRolePermissionsList](docs/userrolepermissions/README.md#dfareportinguserrolepermissionslist) - Gets a list of user role permissions, possibly filtered.

### [UserRoles](docs/userroles/README.md)

* [DfareportingUserRolesDelete](docs/userroles/README.md#dfareportinguserrolesdelete) - Deletes an existing user role.
* [DfareportingUserRolesGet](docs/userroles/README.md#dfareportinguserrolesget) - Gets one user role by ID.
* [DfareportingUserRolesInsert](docs/userroles/README.md#dfareportinguserrolesinsert) - Inserts a new user role.
* [DfareportingUserRolesList](docs/userroles/README.md#dfareportinguserroleslist) - Retrieves a list of user roles, possibly filtered. This method supports paging.
* [DfareportingUserRolesPatch](docs/userroles/README.md#dfareportinguserrolespatch) - Updates an existing user role. This method supports patch semantics.
* [DfareportingUserRolesUpdate](docs/userroles/README.md#dfareportinguserrolesupdate) - Updates an existing user role.

### [VideoFormats](docs/videoformats/README.md)

* [DfareportingVideoFormatsGet](docs/videoformats/README.md#dfareportingvideoformatsget) - Gets one video format by ID.
* [DfareportingVideoFormatsList](docs/videoformats/README.md#dfareportingvideoformatslist) - Lists available video formats.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
