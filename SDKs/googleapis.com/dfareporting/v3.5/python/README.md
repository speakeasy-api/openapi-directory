# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/dfareporting/v3.5/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DfareportingAccountActiveAdSummariesGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    oauth_token="corrupti",
    pretty_print=False,
    profile_id="illum",
    quota_user="vel",
    summary_account_id="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.account_active_ad_summaries.dfareporting_account_active_ad_summaries_get(req, operations.DfareportingAccountActiveAdSummariesGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.account_active_ad_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account_active_ad_summaries

* `dfareporting_account_active_ad_summaries_get` - Gets the account's active ad summary by account ID.

### account_permission_groups

* `dfareporting_account_permission_groups_get` - Gets one account permission group by ID.
* `dfareporting_account_permission_groups_list` - Retrieves the list of account permission groups.

### account_permissions

* `dfareporting_account_permissions_get` - Gets one account permission by ID.
* `dfareporting_account_permissions_list` - Retrieves the list of account permissions.

### account_user_profiles

* `dfareporting_account_user_profiles_get` - Gets one account user profile by ID.
* `dfareporting_account_user_profiles_insert` - Inserts a new account user profile.
* `dfareporting_account_user_profiles_list` - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
* `dfareporting_account_user_profiles_patch` - Updates an existing account user profile. This method supports patch semantics.
* `dfareporting_account_user_profiles_update` - Updates an existing account user profile.

### accounts

* `dfareporting_accounts_get` - Gets one account by ID.
* `dfareporting_accounts_list` - Retrieves the list of accounts, possibly filtered. This method supports paging.
* `dfareporting_accounts_patch` - Updates an existing account. This method supports patch semantics.
* `dfareporting_accounts_update` - Updates an existing account.

### ads

* `dfareporting_ads_get` - Gets one ad by ID.
* `dfareporting_ads_insert` - Inserts a new ad.
* `dfareporting_ads_list` - Retrieves a list of ads, possibly filtered. This method supports paging.
* `dfareporting_ads_patch` - Updates an existing ad. This method supports patch semantics.
* `dfareporting_ads_update` - Updates an existing ad.

### advertiser_groups

* `dfareporting_advertiser_groups_delete` - Deletes an existing advertiser group.
* `dfareporting_advertiser_groups_get` - Gets one advertiser group by ID.
* `dfareporting_advertiser_groups_insert` - Inserts a new advertiser group.
* `dfareporting_advertiser_groups_list` - Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
* `dfareporting_advertiser_groups_patch` - Updates an existing advertiser group. This method supports patch semantics.
* `dfareporting_advertiser_groups_update` - Updates an existing advertiser group.

### advertiser_landing_pages

* `dfareporting_advertiser_landing_pages_get` - Gets one landing page by ID.
* `dfareporting_advertiser_landing_pages_insert` - Inserts a new landing page.
* `dfareporting_advertiser_landing_pages_list` - Retrieves a list of landing pages.
* `dfareporting_advertiser_landing_pages_patch` - Updates an existing advertiser landing page. This method supports patch semantics.
* `dfareporting_advertiser_landing_pages_update` - Updates an existing landing page.

### advertisers

* `dfareporting_advertisers_get` - Gets one advertiser by ID.
* `dfareporting_advertisers_insert` - Inserts a new advertiser.
* `dfareporting_advertisers_list` - Retrieves a list of advertisers, possibly filtered. This method supports paging.
* `dfareporting_advertisers_patch` - Updates an existing advertiser. This method supports patch semantics.
* `dfareporting_advertisers_update` - Updates an existing advertiser.

### browsers

* `dfareporting_browsers_list` - Retrieves a list of browsers.

### campaign_creative_associations

* `dfareporting_campaign_creative_associations_insert` - Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.
* `dfareporting_campaign_creative_associations_list` - Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.

### campaigns

* `dfareporting_campaigns_get` - Gets one campaign by ID.
* `dfareporting_campaigns_insert` - Inserts a new campaign.
* `dfareporting_campaigns_list` - Retrieves a list of campaigns, possibly filtered. This method supports paging.
* `dfareporting_campaigns_patch` - Updates an existing campaign. This method supports patch semantics.
* `dfareporting_campaigns_update` - Updates an existing campaign.

### change_logs

* `dfareporting_change_logs_get` - Gets one change log by ID.
* `dfareporting_change_logs_list` - Retrieves a list of change logs. This method supports paging.

### cities

* `dfareporting_cities_list` - Retrieves a list of cities, possibly filtered.

### connection_types

* `dfareporting_connection_types_get` - Gets one connection type by ID.
* `dfareporting_connection_types_list` - Retrieves a list of connection types.

### content_categories

* `dfareporting_content_categories_delete` - Deletes an existing content category.
* `dfareporting_content_categories_get` - Gets one content category by ID.
* `dfareporting_content_categories_insert` - Inserts a new content category.
* `dfareporting_content_categories_list` - Retrieves a list of content categories, possibly filtered. This method supports paging.
* `dfareporting_content_categories_patch` - Updates an existing content category. This method supports patch semantics.
* `dfareporting_content_categories_update` - Updates an existing content category.

### conversions

* `dfareporting_conversions_batchinsert` - Inserts conversions.
* `dfareporting_conversions_batchupdate` - Updates existing conversions.

### countries

* `dfareporting_countries_get` - Gets one country by ID.
* `dfareporting_countries_list` - Retrieves a list of countries.

### creative_assets

* `dfareporting_creative_assets_insert` - Inserts a new creative asset.

### creative_field_values

* `dfareporting_creative_field_values_delete` - Deletes an existing creative field value.
* `dfareporting_creative_field_values_get` - Gets one creative field value by ID.
* `dfareporting_creative_field_values_insert` - Inserts a new creative field value.
* `dfareporting_creative_field_values_list` - Retrieves a list of creative field values, possibly filtered. This method supports paging.
* `dfareporting_creative_field_values_patch` - Updates an existing creative field value. This method supports patch semantics.
* `dfareporting_creative_field_values_update` - Updates an existing creative field value.

### creative_fields

* `dfareporting_creative_fields_delete` - Deletes an existing creative field.
* `dfareporting_creative_fields_get` - Gets one creative field by ID.
* `dfareporting_creative_fields_insert` - Inserts a new creative field.
* `dfareporting_creative_fields_list` - Retrieves a list of creative fields, possibly filtered. This method supports paging.
* `dfareporting_creative_fields_patch` - Updates an existing creative field. This method supports patch semantics.
* `dfareporting_creative_fields_update` - Updates an existing creative field.

### creative_groups

* `dfareporting_creative_groups_get` - Gets one creative group by ID.
* `dfareporting_creative_groups_insert` - Inserts a new creative group.
* `dfareporting_creative_groups_list` - Retrieves a list of creative groups, possibly filtered. This method supports paging.
* `dfareporting_creative_groups_patch` - Updates an existing creative group. This method supports patch semantics.
* `dfareporting_creative_groups_update` - Updates an existing creative group.

### creatives

* `dfareporting_creatives_get` - Gets one creative by ID.
* `dfareporting_creatives_insert` - Inserts a new creative.
* `dfareporting_creatives_list` - Retrieves a list of creatives, possibly filtered. This method supports paging.
* `dfareporting_creatives_patch` - Updates an existing creative. This method supports patch semantics.
* `dfareporting_creatives_update` - Updates an existing creative.

### dimension_values

* `dfareporting_dimension_values_query` - Retrieves list of report dimension values for a list of filters.

### directory_sites

* `dfareporting_directory_sites_get` - Gets one directory site by ID.
* `dfareporting_directory_sites_insert` - Inserts a new directory site.
* `dfareporting_directory_sites_list` - Retrieves a list of directory sites, possibly filtered. This method supports paging.

### dynamic_targeting_keys

* `dfareporting_dynamic_targeting_keys_delete` - Deletes an existing dynamic targeting key.
* `dfareporting_dynamic_targeting_keys_insert` - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* `dfareporting_dynamic_targeting_keys_list` - Retrieves a list of dynamic targeting keys.

### event_tags

* `dfareporting_event_tags_delete` - Deletes an existing event tag.
* `dfareporting_event_tags_get` - Gets one event tag by ID.
* `dfareporting_event_tags_insert` - Inserts a new event tag.
* `dfareporting_event_tags_list` - Retrieves a list of event tags, possibly filtered.
* `dfareporting_event_tags_patch` - Updates an existing event tag. This method supports patch semantics.
* `dfareporting_event_tags_update` - Updates an existing event tag.

### files

* `dfareporting_files_get` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareporting_files_list` - Lists files for a user profile.

### floodlight_activities

* `dfareporting_floodlight_activities_delete` - Deletes an existing floodlight activity.
* `dfareporting_floodlight_activities_generatetag` - Generates a tag for a floodlight activity.
* `dfareporting_floodlight_activities_get` - Gets one floodlight activity by ID.
* `dfareporting_floodlight_activities_insert` - Inserts a new floodlight activity.
* `dfareporting_floodlight_activities_list` - Retrieves a list of floodlight activities, possibly filtered. This method supports paging.
* `dfareporting_floodlight_activities_patch` - Updates an existing floodlight activity. This method supports patch semantics.
* `dfareporting_floodlight_activities_update` - Updates an existing floodlight activity.

### floodlight_activity_groups

* `dfareporting_floodlight_activity_groups_get` - Gets one floodlight activity group by ID.
* `dfareporting_floodlight_activity_groups_insert` - Inserts a new floodlight activity group.
* `dfareporting_floodlight_activity_groups_list` - Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
* `dfareporting_floodlight_activity_groups_patch` - Updates an existing floodlight activity group. This method supports patch semantics.
* `dfareporting_floodlight_activity_groups_update` - Updates an existing floodlight activity group.

### floodlight_configurations

* `dfareporting_floodlight_configurations_get` - Gets one floodlight configuration by ID.
* `dfareporting_floodlight_configurations_list` - Retrieves a list of floodlight configurations, possibly filtered.
* `dfareporting_floodlight_configurations_patch` - Updates an existing floodlight configuration. This method supports patch semantics.
* `dfareporting_floodlight_configurations_update` - Updates an existing floodlight configuration.

### inventory_items

* `dfareporting_inventory_items_get` - Gets one inventory item by ID.
* `dfareporting_inventory_items_list` - Retrieves a list of inventory items, possibly filtered. This method supports paging.

### languages

* `dfareporting_languages_list` - Retrieves a list of languages.

### metros

* `dfareporting_metros_list` - Retrieves a list of metros.

### mobile_apps

* `dfareporting_mobile_apps_get` - Gets one mobile app by ID.
* `dfareporting_mobile_apps_list` - Retrieves list of available mobile apps.

### mobile_carriers

* `dfareporting_mobile_carriers_get` - Gets one mobile carrier by ID.
* `dfareporting_mobile_carriers_list` - Retrieves a list of mobile carriers.

### operating_system_versions

* `dfareporting_operating_system_versions_get` - Gets one operating system version by ID.
* `dfareporting_operating_system_versions_list` - Retrieves a list of operating system versions.

### operating_systems

* `dfareporting_operating_systems_get` - Gets one operating system by DART ID.
* `dfareporting_operating_systems_list` - Retrieves a list of operating systems.

### order_documents

* `dfareporting_order_documents_get` - Gets one order document by ID.
* `dfareporting_order_documents_list` - Retrieves a list of order documents, possibly filtered. This method supports paging.

### orders

* `dfareporting_orders_get` - Gets one order by ID.
* `dfareporting_orders_list` - Retrieves a list of orders, possibly filtered. This method supports paging.

### placement_groups

* `dfareporting_placement_groups_get` - Gets one placement group by ID.
* `dfareporting_placement_groups_insert` - Inserts a new placement group.
* `dfareporting_placement_groups_list` - Retrieves a list of placement groups, possibly filtered. This method supports paging.
* `dfareporting_placement_groups_patch` - Updates an existing placement group. This method supports patch semantics.
* `dfareporting_placement_groups_update` - Updates an existing placement group.

### placement_strategies

* `dfareporting_placement_strategies_delete` - Deletes an existing placement strategy.
* `dfareporting_placement_strategies_get` - Gets one placement strategy by ID.
* `dfareporting_placement_strategies_insert` - Inserts a new placement strategy.
* `dfareporting_placement_strategies_list` - Retrieves a list of placement strategies, possibly filtered. This method supports paging.
* `dfareporting_placement_strategies_patch` - Updates an existing placement strategy. This method supports patch semantics.
* `dfareporting_placement_strategies_update` - Updates an existing placement strategy.

### placements

* `dfareporting_placements_generatetags` - Generates tags for a placement.
* `dfareporting_placements_get` - Gets one placement by ID.
* `dfareporting_placements_insert` - Inserts a new placement.
* `dfareporting_placements_list` - Retrieves a list of placements, possibly filtered. This method supports paging.
* `dfareporting_placements_patch` - Updates an existing placement. This method supports patch semantics.
* `dfareporting_placements_update` - Updates an existing placement.

### platform_types

* `dfareporting_platform_types_get` - Gets one platform type by ID.
* `dfareporting_platform_types_list` - Retrieves a list of platform types.

### postal_codes

* `dfareporting_postal_codes_get` - Gets one postal code by ID.
* `dfareporting_postal_codes_list` - Retrieves a list of postal codes.

### projects

* `dfareporting_projects_get` - Gets one project by ID.
* `dfareporting_projects_list` - Retrieves a list of projects, possibly filtered. This method supports paging .

### regions

* `dfareporting_regions_list` - Retrieves a list of regions.

### remarketing_list_shares

* `dfareporting_remarketing_list_shares_get` - Gets one remarketing list share by remarketing list ID.
* `dfareporting_remarketing_list_shares_patch` - Updates an existing remarketing list share. This method supports patch semantics.
* `dfareporting_remarketing_list_shares_update` - Updates an existing remarketing list share.

### remarketing_lists

* `dfareporting_remarketing_lists_get` - Gets one remarketing list by ID.
* `dfareporting_remarketing_lists_insert` - Inserts a new remarketing list.
* `dfareporting_remarketing_lists_list` - Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
* `dfareporting_remarketing_lists_patch` - Updates an existing remarketing list. This method supports patch semantics.
* `dfareporting_remarketing_lists_update` - Updates an existing remarketing list.

### reports

* `dfareporting_reports_compatible_fields_query` - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* `dfareporting_reports_delete` - Deletes a report by its ID.
* `dfareporting_reports_files_get` - Retrieves a report file by its report ID and file ID. This method supports media download.
* `dfareporting_reports_files_list` - Lists files for a report.
* `dfareporting_reports_get` - Retrieves a report by its ID.
* `dfareporting_reports_insert` - Creates a report.
* `dfareporting_reports_list` - Retrieves list of reports.
* `dfareporting_reports_patch` - Updates an existing report. This method supports patch semantics.
* `dfareporting_reports_run` - Runs a report.
* `dfareporting_reports_update` - Updates a report.

### sites

* `dfareporting_sites_get` - Gets one site by ID.
* `dfareporting_sites_insert` - Inserts a new site.
* `dfareporting_sites_list` - Retrieves a list of sites, possibly filtered. This method supports paging.
* `dfareporting_sites_patch` - Updates an existing site. This method supports patch semantics.
* `dfareporting_sites_update` - Updates an existing site.

### sizes

* `dfareporting_sizes_get` - Gets one size by ID.
* `dfareporting_sizes_insert` - Inserts a new size.
* `dfareporting_sizes_list` - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### subaccounts

* `dfareporting_subaccounts_get` - Gets one subaccount by ID.
* `dfareporting_subaccounts_insert` - Inserts a new subaccount.
* `dfareporting_subaccounts_list` - Gets a list of subaccounts, possibly filtered. This method supports paging.
* `dfareporting_subaccounts_patch` - Updates an existing subaccount. This method supports patch semantics.
* `dfareporting_subaccounts_update` - Updates an existing subaccount.

### targetable_remarketing_lists

* `dfareporting_targetable_remarketing_lists_get` - Gets one remarketing list by ID.
* `dfareporting_targetable_remarketing_lists_list` - Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.

### targeting_templates

* `dfareporting_targeting_templates_get` - Gets one targeting template by ID.
* `dfareporting_targeting_templates_insert` - Inserts a new targeting template.
* `dfareporting_targeting_templates_list` - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* `dfareporting_targeting_templates_patch` - Updates an existing targeting template. This method supports patch semantics.
* `dfareporting_targeting_templates_update` - Updates an existing targeting template.

### user_profiles

* `dfareporting_user_profiles_get` - Gets one user profile by ID.
* `dfareporting_user_profiles_list` - Retrieves list of user profiles for a user.

### user_role_permission_groups

* `dfareporting_user_role_permission_groups_get` - Gets one user role permission group by ID.
* `dfareporting_user_role_permission_groups_list` - Gets a list of all supported user role permission groups.

### user_role_permissions

* `dfareporting_user_role_permissions_get` - Gets one user role permission by ID.
* `dfareporting_user_role_permissions_list` - Gets a list of user role permissions, possibly filtered.

### user_roles

* `dfareporting_user_roles_delete` - Deletes an existing user role.
* `dfareporting_user_roles_get` - Gets one user role by ID.
* `dfareporting_user_roles_insert` - Inserts a new user role.
* `dfareporting_user_roles_list` - Retrieves a list of user roles, possibly filtered. This method supports paging.
* `dfareporting_user_roles_patch` - Updates an existing user role. This method supports patch semantics.
* `dfareporting_user_roles_update` - Updates an existing user role.

### video_formats

* `dfareporting_video_formats_get` - Gets one video format by ID.
* `dfareporting_video_formats_list` - Lists available video formats.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
