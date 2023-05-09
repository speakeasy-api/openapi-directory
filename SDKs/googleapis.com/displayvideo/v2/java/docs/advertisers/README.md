# advertisers

### Available Operations

* [displayvideoAdvertisersAssetsUpload](#displayvideoadvertisersassetsupload) - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* [displayvideoAdvertisersAudit](#displayvideoadvertisersaudit) - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* [displayvideoAdvertisersCampaignsCreate](#displayvideoadvertiserscampaignscreate) - Creates a new campaign. Returns the newly created campaign if successful.
* [displayvideoAdvertisersCampaignsDelete](#displayvideoadvertiserscampaignsdelete) - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersCampaignsGet](#displayvideoadvertiserscampaignsget) - Gets a campaign.
* [displayvideoAdvertisersCampaignsList](#displayvideoadvertiserscampaignslist) - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersCampaignsListAssignedTargetingOptions](#displayvideoadvertiserscampaignslistassignedtargetingoptions) - Lists assigned targeting options of a campaign across targeting types.
* [displayvideoAdvertisersCampaignsPatch](#displayvideoadvertiserscampaignspatch) - Updates an existing campaign. Returns the updated campaign if successful.
* [displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a campaign.
* [displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a campaign for a specified targeting type.
* [displayvideoAdvertisersChannelsCreate](#displayvideoadvertiserschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoAdvertisersChannelsList](#displayvideoadvertiserschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoAdvertisersChannelsPatch](#displayvideoadvertiserschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoAdvertisersChannelsSitesBulkEdit](#displayvideoadvertiserschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoAdvertisersChannelsSitesDelete](#displayvideoadvertiserschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoAdvertisersChannelsSitesList](#displayvideoadvertiserschannelssiteslist) - Lists sites in a channel.
* [displayvideoAdvertisersChannelsSitesReplace](#displayvideoadvertiserschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoAdvertisersCreate](#displayvideoadvertiserscreate) - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* [displayvideoAdvertisersCreativesCreate](#displayvideoadvertiserscreativescreate) - Creates a new creative. Returns the newly created creative if successful.
* [displayvideoAdvertisersCreativesDelete](#displayvideoadvertiserscreativesdelete) - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* [displayvideoAdvertisersCreativesGet](#displayvideoadvertiserscreativesget) - Gets a creative.
* [displayvideoAdvertisersCreativesList](#displayvideoadvertiserscreativeslist) - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersCreativesPatch](#displayvideoadvertiserscreativespatch) - Updates an existing creative. Returns the updated creative if successful.
* [displayvideoAdvertisersDelete](#displayvideoadvertisersdelete) - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* [displayvideoAdvertisersEditAssignedTargetingOptions](#displayvideoadvertiserseditassignedtargetingoptions) - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* [displayvideoAdvertisersGet](#displayvideoadvertisersget) - Gets an advertiser.
* [displayvideoAdvertisersInsertionOrdersCreate](#displayvideoadvertisersinsertionorderscreate) - Creates a new insertion order. Returns the newly created insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersDelete](#displayvideoadvertisersinsertionordersdelete) - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersInsertionOrdersGet](#displayvideoadvertisersinsertionordersget) - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* [displayvideoAdvertisersInsertionOrdersList](#displayvideoadvertisersinsertionorderslist) - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions](#displayvideoadvertisersinsertionorderslistassignedtargetingoptions) - Lists assigned targeting options of an insertion order across targeting types.
* [displayvideoAdvertisersInsertionOrdersPatch](#displayvideoadvertisersinsertionorderspatch) - Updates an existing insertion order. Returns the updated insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an insertion order.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an insertion order.
* [displayvideoAdvertisersInvoicesList](#displayvideoadvertisersinvoiceslist) - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* [displayvideoAdvertisersInvoicesLookupInvoiceCurrency](#displayvideoadvertisersinvoiceslookupinvoicecurrency) - Retrieves the invoice currency used by an advertiser in a given month.
* [displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulkeditassignedtargetingoptions) - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulklistassignedtargetingoptions) - Lists assigned targeting options for multiple line items across targeting types.
* [displayvideoAdvertisersLineItemsBulkUpdate](#displayvideoadvertiserslineitemsbulkupdate) - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsCreate](#displayvideoadvertiserslineitemscreate) - Creates a new line item. Returns the newly created line item if successful.
* [displayvideoAdvertisersLineItemsDelete](#displayvideoadvertiserslineitemsdelete) - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersLineItemsDuplicate](#displayvideoadvertiserslineitemsduplicate) - Duplicates a line item. Returns the ID of the created line item if successful.
* [displayvideoAdvertisersLineItemsGenerateDefault](#displayvideoadvertiserslineitemsgeneratedefault) - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* [displayvideoAdvertisersLineItemsGet](#displayvideoadvertiserslineitemsget) - Gets a line item.
* [displayvideoAdvertisersLineItemsList](#displayvideoadvertiserslineitemslist) - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersLineItemsPatch](#displayvideoadvertiserslineitemspatch) - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a line item.
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a line item.
* [displayvideoAdvertisersList](#displayvideoadvertiserslist) - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* [displayvideoAdvertisersListAssignedTargetingOptions](#displayvideoadvertiserslistassignedtargetingoptions) - Lists assigned targeting options of an advertiser across targeting types.
* [displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit](#displayvideoadvertiserslocationlistsassignedlocationsbulkedit) - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* [displayvideoAdvertisersLocationListsAssignedLocationsCreate](#displayvideoadvertiserslocationlistsassignedlocationscreate) - Creates an assignment between a location and a location list.
* [displayvideoAdvertisersLocationListsAssignedLocationsDelete](#displayvideoadvertiserslocationlistsassignedlocationsdelete) - Deletes the assignment between a location and a location list.
* [displayvideoAdvertisersLocationListsAssignedLocationsList](#displayvideoadvertiserslocationlistsassignedlocationslist) - Lists locations assigned to a location list.
* [displayvideoAdvertisersLocationListsCreate](#displayvideoadvertiserslocationlistscreate) - Creates a new location list. Returns the newly created location list if successful.
* [displayvideoAdvertisersLocationListsList](#displayvideoadvertiserslocationlistslist) - Lists location lists based on a given advertiser id.
* [displayvideoAdvertisersLocationListsPatch](#displayvideoadvertiserslocationlistspatch) - Updates a location list. Returns the updated location list if successful.
* [displayvideoAdvertisersManualTriggersActivate](#displayvideoadvertisersmanualtriggersactivate) - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersCreate](#displayvideoadvertisersmanualtriggerscreate) - Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersDeactivate](#displayvideoadvertisersmanualtriggersdeactivate) - Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersGet](#displayvideoadvertisersmanualtriggersget) - Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersList](#displayvideoadvertisersmanualtriggerslist) - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersPatch](#displayvideoadvertisersmanualtriggerspatch) - Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersNegativeKeywordListsCreate](#displayvideoadvertisersnegativekeywordlistscreate) - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* [displayvideoAdvertisersNegativeKeywordListsList](#displayvideoadvertisersnegativekeywordlistslist) - Lists negative keyword lists based on a given advertiser id.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsbulkedit) - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsdelete) - Deletes a negative keyword from a negative keyword list.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList](#displayvideoadvertisersnegativekeywordlistsnegativekeywordslist) - Lists negative keywords in a negative keyword list.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsreplace) - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* [displayvideoAdvertisersNegativeKeywordListsPatch](#displayvideoadvertisersnegativekeywordlistspatch) - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* [displayvideoAdvertisersPatch](#displayvideoadvertiserspatch) - Updates an existing advertiser. Returns the updated advertiser if successful.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from an advertiser.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an advertiser.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an advertiser.
* [displayvideoAdvertisersYoutubeAdGroupAdsGet](#displayvideoadvertisersyoutubeadgroupadsget) - Gets a YouTube ad group ad.
* [displayvideoAdvertisersYoutubeAdGroupAdsList](#displayvideoadvertisersyoutubeadgroupadslist) - Lists YouTube ad group ads.
* [displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions](#displayvideoadvertisersyoutubeadgroupsbulklistadgroupassignedtargetingoptions) - Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.
* [displayvideoAdvertisersYoutubeAdGroupsGet](#displayvideoadvertisersyoutubeadgroupsget) - Gets a YouTube ad group.
* [displayvideoAdvertisersYoutubeAdGroupsList](#displayvideoadvertisersyoutubeadgroupslist) - Lists YouTube ad groups.
* [displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersyoutubeadgroupstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.
* [displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersyoutubeadgroupstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.

## displayvideoAdvertisersAssetsUpload

Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAssetsUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreateAssetRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersAssetsUploadRequest req = new DisplayvideoAdvertisersAssetsUploadRequest("debitis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = "delectus".getBytes();
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "minus";
                key = "placeat";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            DisplayvideoAdvertisersAssetsUploadResponse res = sdk.advertisers.displayvideoAdvertisersAssetsUpload(req, new DisplayvideoAdvertisersAssetsUploadSecurity("recusandae", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createAssetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersAudit

Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAuditRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAuditResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersAuditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersAuditRequest req = new DisplayvideoAdvertisersAuditRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "ipsam";
                key = "repellendus";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "quo";
                readMask = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            DisplayvideoAdvertisersAuditResponse res = sdk.advertisers.displayvideoAdvertisersAudit(req, new DisplayvideoAdvertisersAuditSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.auditAdvertiserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsCreate

Creates a new campaign. Returns the newly created campaign if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsCreateSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsCreateSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CampaignBudget;
import org.openapis.openapi.models.shared.CampaignBudgetBudgetUnitEnum;
import org.openapis.openapi.models.shared.CampaignBudgetExternalBudgetSourceEnum;
import org.openapis.openapi.models.shared.CampaignEntityStatusEnum;
import org.openapis.openapi.models.shared.CampaignFlight;
import org.openapis.openapi.models.shared.CampaignGoal;
import org.openapis.openapi.models.shared.CampaignGoalCampaignGoalTypeEnum;
import org.openapis.openapi.models.shared.CampaignInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.PerformanceGoal;
import org.openapis.openapi.models.shared.PerformanceGoalPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.PrismaConfig;
import org.openapis.openapi.models.shared.PrismaConfigPrismaTypeEnum;
import org.openapis.openapi.models.shared.PrismaCpeCode;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsCreateRequest req = new DisplayvideoAdvertisersCampaignsCreateRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                campaignInput = new CampaignInput() {{
                    campaignBudgets = new org.openapis.openapi.models.shared.CampaignBudget[]{{
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "totam";
                            budgetId = "porro";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_IMPRESSIONS;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 118274;
                                    month = 720633;
                                    year = 639921;
                                }};
                                startDate = new Date() {{
                                    day = 582020;
                                    month = 143353;
                                    year = 537373;
                                }};
                            }};
                            displayName = "hic";
                            externalBudgetId = "optio";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_NONE;
                            invoiceGroupingId = "beatae";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "commodi";
                                    prismaEstimateCode = "molestiae";
                                    prismaProductCode = "modi";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_DISPLAY;
                                supplier = "impedit";
                            }};
                        }}),
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "cum";
                            budgetId = "esse";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_UNSPECIFIED;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 568434;
                                    month = 135218;
                                    year = 18789;
                                }};
                                startDate = new Date() {{
                                    day = 324141;
                                    month = 617636;
                                    year = 149675;
                                }};
                            }};
                            displayName = "iste";
                            externalBudgetId = "dolor";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_NONE;
                            invoiceGroupingId = "laboriosam";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "hic";
                                    prismaEstimateCode = "saepe";
                                    prismaProductCode = "fuga";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_VIDEO;
                                supplier = "corporis";
                            }};
                        }}),
                    }};
                    campaignFlight = new CampaignFlight() {{
                        plannedDates = new DateRange() {{
                            endDate = new Date() {{
                                day = 613064;
                                month = 437032;
                                year = 902349;
                            }};;
                            startDate = new Date() {{
                                day = 697631;
                                month = 99280;
                                year = 60225;
                            }};;
                        }};;
                        plannedSpendAmountMicros = "reiciendis";
                    }};;
                    campaignGoal = new CampaignGoal() {{
                        campaignGoalType = CampaignGoalCampaignGoalTypeEnum.CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION;
                        performanceGoal = new PerformanceGoal() {{
                            performanceGoalAmountMicros = "mollitia";
                            performanceGoalPercentageMicros = "laborum";
                            performanceGoalString = "dolores";
                            performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CPA;
                        }};;
                    }};;
                    displayName = "corporis";
                    entityStatus = CampaignEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 750686;
                        maxViews = 315428;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_DAYS;
                        timeUnitCount = 363711;
                        unlimited = false;
                    }};;
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            DisplayvideoAdvertisersCampaignsCreateResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsCreate(req, new DisplayvideoAdvertisersCampaignsCreateSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsCreateSecurityOption1("dolorem", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsDelete

Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsDeleteSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsDeleteRequest req = new DisplayvideoAdvertisersCampaignsDeleteRequest("consequuntur", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "quam";
                key = "molestiae";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "quia";
                uploadProtocol = "quis";
            }};            

            DisplayvideoAdvertisersCampaignsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsDelete(req, new DisplayvideoAdvertisersCampaignsDeleteSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsDeleteSecurityOption1("vitae", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsGet

Gets a campaign.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsGetSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsGetRequest req = new DisplayvideoAdvertisersCampaignsGetRequest("animi", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "tenetur";
                fields = "ipsam";
                key = "id";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            DisplayvideoAdvertisersCampaignsGetResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsGet(req, new DisplayvideoAdvertisersCampaignsGetSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsGetSecurityOption1("temporibus", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsList

Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsListRequest req = new DisplayvideoAdvertisersCampaignsListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "praesentium";
                filter = "voluptatibus";
                key = "ipsa";
                oauthToken = "omnis";
                orderBy = "voluptate";
                pageSize = 739264L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "doloremque";
                uploadType = "reprehenderit";
                uploadProtocol = "ut";
            }};            

            DisplayvideoAdvertisersCampaignsListResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsList(req, new DisplayvideoAdvertisersCampaignsListSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsListSecurityOption1("maiores", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCampaignsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsListAssignedTargetingOptions

Lists assigned targeting options of a campaign across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest("corporis", "dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "accusamus";
                filter = "commodi";
                key = "repudiandae";
                oauthToken = "quae";
                orderBy = "ipsum";
                pageSize = 692472L;
                pageToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsListAssignedTargetingOptions(req, new DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity("praesentium", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListCampaignAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsPatch

Updates an existing campaign. Returns the updated campaign if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsPatchSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsPatchSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CampaignBudget;
import org.openapis.openapi.models.shared.CampaignBudgetBudgetUnitEnum;
import org.openapis.openapi.models.shared.CampaignBudgetExternalBudgetSourceEnum;
import org.openapis.openapi.models.shared.CampaignEntityStatusEnum;
import org.openapis.openapi.models.shared.CampaignFlight;
import org.openapis.openapi.models.shared.CampaignGoal;
import org.openapis.openapi.models.shared.CampaignGoalCampaignGoalTypeEnum;
import org.openapis.openapi.models.shared.CampaignInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.PerformanceGoal;
import org.openapis.openapi.models.shared.PerformanceGoalPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.PrismaConfig;
import org.openapis.openapi.models.shared.PrismaConfigPrismaTypeEnum;
import org.openapis.openapi.models.shared.PrismaCpeCode;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsPatchRequest req = new DisplayvideoAdvertisersCampaignsPatchRequest("voluptates", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                campaignInput = new CampaignInput() {{
                    campaignBudgets = new org.openapis.openapi.models.shared.CampaignBudget[]{{
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "veritatis";
                            budgetId = "itaque";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_UNSPECIFIED;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 318569;
                                    month = 9356;
                                    year = 667411;
                                }};
                                startDate = new Date() {{
                                    day = 842342;
                                    month = 131797;
                                    year = 647174;
                                }};
                            }};
                            displayName = "distinctio";
                            externalBudgetId = "quibusdam";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_UNSPECIFIED;
                            invoiceGroupingId = "modi";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "qui";
                                    prismaEstimateCode = "aliquid";
                                    prismaProductCode = "cupiditate";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_VIDEO;
                                supplier = "perferendis";
                            }};
                        }}),
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "magni";
                            budgetId = "assumenda";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_CURRENCY;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 4695;
                                    month = 146441;
                                    year = 677817;
                                }};
                                startDate = new Date() {{
                                    day = 569618;
                                    month = 270008;
                                    year = 703737;
                                }};
                            }};
                            displayName = "tempore";
                            externalBudgetId = "labore";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN;
                            invoiceGroupingId = "eum";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "non";
                                    prismaEstimateCode = "eligendi";
                                    prismaProductCode = "sint";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_SEARCH;
                                supplier = "provident";
                            }};
                        }}),
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "necessitatibus";
                            budgetId = "sint";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_CURRENCY;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 223081;
                                    month = 891555;
                                    year = 952749;
                                }};
                                startDate = new Date() {{
                                    day = 680056;
                                    month = 447125;
                                    year = 449198;
                                }};
                            }};
                            displayName = "illum";
                            externalBudgetId = "maiores";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN;
                            invoiceGroupingId = "dicta";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "magnam";
                                    prismaEstimateCode = "cumque";
                                    prismaProductCode = "facere";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_SEARCH;
                                supplier = "aliquid";
                            }};
                        }}),
                    }};
                    campaignFlight = new CampaignFlight() {{
                        plannedDates = new DateRange() {{
                            endDate = new Date() {{
                                day = 675439;
                                month = 881104;
                                year = 249796;
                            }};;
                            startDate = new Date() {{
                                day = 581273;
                                month = 313218;
                                year = 881736;
                            }};;
                        }};;
                        plannedSpendAmountMicros = "delectus";
                    }};;
                    campaignGoal = new CampaignGoal() {{
                        campaignGoalType = CampaignGoalCampaignGoalTypeEnum.CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION;
                        performanceGoal = new PerformanceGoal() {{
                            performanceGoalAmountMicros = "provident";
                            performanceGoalPercentageMicros = "nam";
                            performanceGoalString = "id";
                            performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CPE;
                        }};;
                    }};;
                    displayName = "deleniti";
                    entityStatus = CampaignEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 230533;
                        maxViews = 643990;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_MONTHS;
                        timeUnitCount = 423855;
                        unlimited = false;
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "perferendis";
                key = "nihil";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "distinctio";
                updateMask = "id";
                uploadType = "labore";
                uploadProtocol = "labore";
            }};            

            DisplayvideoAdvertisersCampaignsPatchResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsPatch(req, new DisplayvideoAdvertisersCampaignsPatchSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsPatchSecurityOption1("suscipit", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.campaign != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a campaign.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest("nobis", "eum", "vero", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_AGE_RANGE) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "ullam";
                key = "provident";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusantium";
                uploadProtocol = "mollitia";
            }};            

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity("reiciendis", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a campaign for a specified targeting type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest("ad", "eum", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_VIDEO_PLAYER_SIZE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "iure";
                filter = "doloribus";
                key = "debitis";
                oauthToken = "eius";
                orderBy = "maxime";
                pageSize = 537023L;
                pageToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity("repudiandae", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCampaignAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsCreate

Creates a new channel. Returns the newly created channel if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsCreateRequest req = new DisplayvideoAdvertisersChannelsCreateRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    advertiserId = "repellat";
                    displayName = "quibusdam";
                    partnerId = "sed";
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "consequuntur";
                key = "praesentium";
                oauthToken = "natus";
                partnerId = "magni";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "quo";
                uploadProtocol = "illum";
            }};            

            DisplayvideoAdvertisersChannelsCreateResponse res = sdk.advertisers.displayvideoAdvertisersChannelsCreate(req, new DisplayvideoAdvertisersChannelsCreateSecurity("pariatur", "maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsList

Lists channels for a partner or advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsListRequest req = new DisplayvideoAdvertisersChannelsListRequest("ea") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "ab";
                filter = "maiores";
                key = "quidem";
                oauthToken = "ipsam";
                orderBy = "voluptate";
                pageSize = 420075L;
                pageToken = "nam";
                partnerId = "eaque";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "nemo";
                uploadProtocol = "voluptatibus";
            }};            

            DisplayvideoAdvertisersChannelsListResponse res = sdk.advertisers.displayvideoAdvertisersChannelsList(req, new DisplayvideoAdvertisersChannelsListSecurity("perferendis", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsPatch

Updates a channel. Returns the updated channel if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsPatchRequest req = new DisplayvideoAdvertisersChannelsPatchRequest("amet", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                channelInput = new ChannelInput() {{
                    advertiserId = "corporis";
                    displayName = "hic";
                    partnerId = "libero";
                }};;
                accessToken = "nobis";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "totam";
                key = "dignissimos";
                oauthToken = "eaque";
                partnerId = "quis";
                prettyPrint = false;
                quotaUser = "nesciunt";
                updateMask = "eos";
                uploadType = "perferendis";
                uploadProtocol = "dolores";
            }};            

            DisplayvideoAdvertisersChannelsPatchResponse res = sdk.advertisers.displayvideoAdvertisersChannelsPatch(req, new DisplayvideoAdvertisersChannelsPatchSecurity("minus", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsSitesBulkEdit

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkEditSitesRequestInput;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsSitesBulkEditRequest req = new DisplayvideoAdvertisersChannelsSitesBulkEditRequest("dolor", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditSitesRequestInput = new BulkEditSitesRequestInput() {{
                    advertiserId = "hic";
                    createdSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "omnis";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "facilis";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "perspiciatis";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "voluptatem";
                        }}),
                    }};
                    deletedSites = new String[]{{
                        add("consequuntur"),
                        add("blanditiis"),
                        add("error"),
                        add("eaque"),
                    }};
                    partnerId = "occaecati";
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "pariatur";
            }};            

            DisplayvideoAdvertisersChannelsSitesBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesBulkEdit(req, new DisplayvideoAdvertisersChannelsSitesBulkEditSecurity("provident", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsSitesDelete

Deletes a site from a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsSitesDeleteRequest req = new DisplayvideoAdvertisersChannelsSitesDeleteRequest("libero", "delectus", "quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "dolor";
                key = "qui";
                oauthToken = "ipsum";
                partnerId = "hic";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
            }};            

            DisplayvideoAdvertisersChannelsSitesDeleteResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesDelete(req, new DisplayvideoAdvertisersChannelsSitesDeleteSecurity("dignissimos", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsSitesList

Lists sites in a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsSitesListRequest req = new DisplayvideoAdvertisersChannelsSitesListRequest("amet", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "iure";
                filter = "odio";
                key = "quaerat";
                oauthToken = "accusamus";
                orderBy = "quidem";
                pageSize = 976405L;
                pageToken = "voluptas";
                partnerId = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "atque";
                uploadProtocol = "sit";
            }};            

            DisplayvideoAdvertisersChannelsSitesListResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesList(req, new DisplayvideoAdvertisersChannelsSitesListSecurity("fugiat", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersChannelsSitesReplace

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReplaceSitesRequestInput;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersChannelsSitesReplaceRequest req = new DisplayvideoAdvertisersChannelsSitesReplaceRequest("soluta", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                replaceSitesRequestInput = new ReplaceSitesRequestInput() {{
                    advertiserId = "voluptate";
                    newSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "deleniti";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "omnis";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "necessitatibus";
                        }}),
                    }};
                    partnerId = "distinctio";
                }};;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "voluptate";
                key = "id";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            DisplayvideoAdvertisersChannelsSitesReplaceResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesReplace(req, new DisplayvideoAdvertisersChannelsSitesReplaceSecurity("amet", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.replaceSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreate

Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreateSecurity;
import org.openapis.openapi.models.shared.AdvertiserAdServerConfig;
import org.openapis.openapi.models.shared.AdvertiserBillingConfig;
import org.openapis.openapi.models.shared.AdvertiserCreativeConfig;
import org.openapis.openapi.models.shared.AdvertiserDataAccessConfig;
import org.openapis.openapi.models.shared.AdvertiserEntityStatusEnum;
import org.openapis.openapi.models.shared.AdvertiserGeneralConfigInput;
import org.openapis.openapi.models.shared.AdvertiserInput;
import org.openapis.openapi.models.shared.AdvertiserSdfConfig;
import org.openapis.openapi.models.shared.AdvertiserTargetingConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CmHybridConfig;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.SdfConfig;
import org.openapis.openapi.models.shared.SdfConfigVersionEnum;
import org.openapis.openapi.models.shared.ThirdPartyOnlyConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreateRequest req = new DisplayvideoAdvertisersCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                advertiserInput = new AdvertiserInput() {{
                    adServerConfig = new AdvertiserAdServerConfig() {{
                        cmHybridConfig = new CmHybridConfig() {{
                            cmAccountId = "ad";
                            cmFloodlightConfigId = "saepe";
                            cmFloodlightLinkingAuthorized = false;
                            cmSyncableSiteIds = new String[]{{
                                add("deserunt"),
                                add("provident"),
                            }};
                            dv360ToCmCostReportingEnabled = false;
                            dv360ToCmDataSharingEnabled = false;
                        }};;
                        thirdPartyOnlyConfig = new ThirdPartyOnlyConfig() {{
                            pixelOrderIdReportingEnabled = false;
                        }};;
                    }};;
                    billingConfig = new AdvertiserBillingConfig() {{
                        billingProfileId = "minima";
                    }};;
                    creativeConfig = new AdvertiserCreativeConfig() {{
                        dynamicCreativeEnabled = false;
                        iasClientId = "repellendus";
                        obaComplianceDisabled = false;
                        videoCreativeDataSharingAuthorized = false;
                    }};;
                    dataAccessConfig = new AdvertiserDataAccessConfig() {{
                        sdfConfig = new AdvertiserSdfConfig() {{
                            overridePartnerSdfConfig = false;
                            sdfConfig = new SdfConfig() {{
                                adminEmail = "totam";
                                version = SdfConfigVersionEnum.SDF_VERSION51;
                            }};;
                        }};;
                    }};;
                    displayName = "alias";
                    entityStatus = AdvertiserEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    generalConfig = new AdvertiserGeneralConfigInput() {{
                        currencyCode = "quaerat";
                        domainUrl = "tempora";
                    }};;
                    integrationDetails = new IntegrationDetails() {{
                        details = "vel";
                        integrationCode = "quod";
                    }};;
                    partnerId = "officiis";
                    prismaEnabled = false;
                    servingConfig = new AdvertiserTargetingConfig() {{
                        exemptTvFromViewabilityTargeting = false;
                    }};;
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "esse";
                key = "harum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "quisquam";
                uploadProtocol = "tenetur";
            }};            

            DisplayvideoAdvertisersCreateResponse res = sdk.advertisers.displayvideoAdvertisersCreate(req, new DisplayvideoAdvertisersCreateSecurity("amet", "tempore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreativesCreate

Creates a new creative. Returns the newly created creative if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.AssetAssociation;
import org.openapis.openapi.models.shared.AssetAssociationRoleEnum;
import org.openapis.openapi.models.shared.AudioVideoOffset;
import org.openapis.openapi.models.shared.CmTrackingAd;
import org.openapis.openapi.models.shared.CounterEvent;
import org.openapis.openapi.models.shared.CreativeCreativeTypeEnum;
import org.openapis.openapi.models.shared.CreativeEntityStatusEnum;
import org.openapis.openapi.models.shared.CreativeExpandingDirectionEnum;
import org.openapis.openapi.models.shared.CreativeHostingSourceEnum;
import org.openapis.openapi.models.shared.CreativeInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.ExchangeReviewStatus;
import org.openapis.openapi.models.shared.ExchangeReviewStatusExchangeEnum;
import org.openapis.openapi.models.shared.ExchangeReviewStatusStatusEnum;
import org.openapis.openapi.models.shared.ExitEvent;
import org.openapis.openapi.models.shared.ExitEventTypeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.ObaIconPositionEnum;
import org.openapis.openapi.models.shared.PublisherReviewStatus;
import org.openapis.openapi.models.shared.PublisherReviewStatusStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfo;
import org.openapis.openapi.models.shared.ReviewStatusInfoApprovalStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfoContentAndPolicyReviewStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
import org.openapis.openapi.models.shared.ThirdPartyUrl;
import org.openapis.openapi.models.shared.ThirdPartyUrlTypeEnum;
import org.openapis.openapi.models.shared.TimerEvent;
import org.openapis.openapi.models.shared.UniversalAdId;
import org.openapis.openapi.models.shared.UniversalAdIdRegistryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreativesCreateRequest req = new DisplayvideoAdvertisersCreativesCreateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeInput = new CreativeInput() {{
                    additionalDimensions = new org.openapis.openapi.models.shared.Dimensions[]{{
                        add(new Dimensions() {{
                            heightPixels = 213312;
                            widthPixels = 957451;
                        }}),
                        add(new Dimensions() {{
                            heightPixels = 518201;
                            widthPixels = 471752;
                        }}),
                    }};
                    appendedTag = "sit";
                    assets = new org.openapis.openapi.models.shared.AssetAssociation[]{{
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "neque";
                                mediaId = "sed";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_LONG_BODY;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "libero";
                                mediaId = "voluptas";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_ADVERTISER_NAME;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "quam";
                                mediaId = "ipsum";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_HEADLINE;
                        }}),
                    }};
                    cmTrackingAd = new CmTrackingAd() {{
                        cmAdId = "qui";
                        cmCreativeId = "cupiditate";
                        cmPlacementId = "maxime";
                    }};;
                    companionCreativeIds = new String[]{{
                        add("soluta"),
                        add("dicta"),
                        add("laborum"),
                        add("totam"),
                    }};
                    counterEvents = new org.openapis.openapi.models.shared.CounterEvent[]{{
                        add(new CounterEvent() {{
                            name = "Bonnie Raynor";
                            reportingName = "quam";
                        }}),
                        add(new CounterEvent() {{
                            name = "Marty Deckow";
                            reportingName = "magni";
                        }}),
                    }};
                    creativeType = CreativeCreativeTypeEnum.CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL;
                    dimensions = new Dimensions() {{
                        heightPixels = 124833;
                        widthPixels = 355613;
                    }};;
                    displayName = "nam";
                    entityStatus = CreativeEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    exitEvents = new org.openapis.openapi.models.shared.ExitEvent[]{{
                        add(new ExitEvent() {{
                            name = "Dr. Dominic Rohan";
                            reportingName = "veritatis";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_BACKUP;
                            url = "quos";
                        }}),
                    }};
                    expandOnHover = false;
                    expandingDirection = CreativeExpandingDirectionEnum.EXPANDING_DIRECTION_DOWN_AND_RIGHT;
                    hostingSource = CreativeHostingSourceEnum.HOSTING_SOURCE_THIRD_PARTY;
                    iasCampaignMonitoring = false;
                    integrationCode = "aperiam";
                    jsTrackerUrl = "delectus";
                    notes = "dolorem";
                    obaIcon = new ObaIcon() {{
                        clickTrackingUrl = "dolore";
                        dimensions = new Dimensions() {{
                            heightPixels = 286915;
                            widthPixels = 240829;
                        }};;
                        landingPageUrl = "dolorum";
                        position = ObaIconPositionEnum.OBA_ICON_POSITION_UNSPECIFIED;
                        program = "quae";
                        resourceMimeType = "aut";
                        resourceUrl = "quas";
                        viewTrackingUrl = "itaque";
                    }};;
                    progressOffset = new AudioVideoOffset() {{
                        percentage = "consequatur";
                        seconds = "est";
                    }};;
                    requireHtml5 = false;
                    requireMraid = false;
                    requirePingForAttribution = false;
                    reviewStatus = new ReviewStatusInfo() {{
                        approvalStatus = ReviewStatusInfoApprovalStatusEnum.APPROVAL_STATUS_REJECTED_NOT_SERVABLE;
                        contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum.REVIEW_STATUS_PENDING;
                        creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum.REVIEW_STATUS_PENDING;
                        exchangeReviewStatuses = new org.openapis.openapi.models.shared.ExchangeReviewStatus[]{{
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_TRITON;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_FIVE;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                            }}),
                        }};
                        publisherReviewStatuses = new org.openapis.openapi.models.shared.PublisherReviewStatus[]{{
                            add(new PublisherReviewStatus() {{
                                publisherName = "odio";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "voluptatibus";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "vero";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                        }};
                    }};;
                    skipOffset = new AudioVideoOffset() {{
                        percentage = "quis";
                        seconds = "ipsum";
                    }};;
                    skippable = false;
                    thirdPartyTag = "delectus";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyUrl[]{{
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START;
                            url = "vero";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS;
                            url = "dignissimos";
                        }}),
                    }};
                    timerEvents = new org.openapis.openapi.models.shared.TimerEvent[]{{
                        add(new TimerEvent() {{
                            name = "Jermaine Kuhic";
                            reportingName = "vero";
                        }}),
                        add(new TimerEvent() {{
                            name = "Joanne Sporer";
                            reportingName = "natus";
                        }}),
                        add(new TimerEvent() {{
                            name = "Richard Wiza";
                            reportingName = "fugit";
                        }}),
                        add(new TimerEvent() {{
                            name = "Elijah Wyman";
                            reportingName = "ducimus";
                        }}),
                    }};
                    trackerUrls = new String[]{{
                        add("officia"),
                    }};
                    universalAdId = new UniversalAdId() {{
                        id = "45626d43-6813-4f16-99f5-fce6c556146c";
                        registry = UniversalAdIdRegistryEnum.UNIVERSAL_AD_REGISTRY_OTHER;
                    }};;
                    vastTagUrl = "recusandae";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "a";
                key = "libero";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "deleniti";
                uploadProtocol = "impedit";
            }};            

            DisplayvideoAdvertisersCreativesCreateResponse res = sdk.advertisers.displayvideoAdvertisersCreativesCreate(req, new DisplayvideoAdvertisersCreativesCreateSecurity("aliquam", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreativesDelete

Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreativesDeleteRequest req = new DisplayvideoAdvertisersCreativesDeleteRequest("accusamus", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "placeat";
                key = "velit";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "nobis";
                uploadProtocol = "quas";
            }};            

            DisplayvideoAdvertisersCreativesDeleteResponse res = sdk.advertisers.displayvideoAdvertisersCreativesDelete(req, new DisplayvideoAdvertisersCreativesDeleteSecurity("assumenda", "nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreativesGet

Gets a creative.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreativesGetRequest req = new DisplayvideoAdvertisersCreativesGetRequest("voluptas", "libero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "explicabo";
                fields = "provident";
                key = "ipsa";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "odio";
                uploadProtocol = "eius";
            }};            

            DisplayvideoAdvertisersCreativesGetResponse res = sdk.advertisers.displayvideoAdvertisersCreativesGet(req, new DisplayvideoAdvertisersCreativesGetSecurity("esse", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreativesList

Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreativesListRequest req = new DisplayvideoAdvertisersCreativesListRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "fugiat";
                fields = "ut";
                filter = "eum";
                key = "suscipit";
                oauthToken = "assumenda";
                orderBy = "eos";
                pageSize = 509342L;
                pageToken = "quisquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "id";
            }};            

            DisplayvideoAdvertisersCreativesListResponse res = sdk.advertisers.displayvideoAdvertisersCreativesList(req, new DisplayvideoAdvertisersCreativesListSecurity("quidem", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCreativesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersCreativesPatch

Updates an existing creative. Returns the updated creative if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCreativesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Asset;
import org.openapis.openapi.models.shared.AssetAssociation;
import org.openapis.openapi.models.shared.AssetAssociationRoleEnum;
import org.openapis.openapi.models.shared.AudioVideoOffset;
import org.openapis.openapi.models.shared.CmTrackingAd;
import org.openapis.openapi.models.shared.CounterEvent;
import org.openapis.openapi.models.shared.CreativeCreativeTypeEnum;
import org.openapis.openapi.models.shared.CreativeEntityStatusEnum;
import org.openapis.openapi.models.shared.CreativeExpandingDirectionEnum;
import org.openapis.openapi.models.shared.CreativeHostingSourceEnum;
import org.openapis.openapi.models.shared.CreativeInput;
import org.openapis.openapi.models.shared.Dimensions;
import org.openapis.openapi.models.shared.ExchangeReviewStatus;
import org.openapis.openapi.models.shared.ExchangeReviewStatusExchangeEnum;
import org.openapis.openapi.models.shared.ExchangeReviewStatusStatusEnum;
import org.openapis.openapi.models.shared.ExitEvent;
import org.openapis.openapi.models.shared.ExitEventTypeEnum;
import org.openapis.openapi.models.shared.ObaIcon;
import org.openapis.openapi.models.shared.ObaIconPositionEnum;
import org.openapis.openapi.models.shared.PublisherReviewStatus;
import org.openapis.openapi.models.shared.PublisherReviewStatusStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfo;
import org.openapis.openapi.models.shared.ReviewStatusInfoApprovalStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfoContentAndPolicyReviewStatusEnum;
import org.openapis.openapi.models.shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
import org.openapis.openapi.models.shared.ThirdPartyUrl;
import org.openapis.openapi.models.shared.ThirdPartyUrlTypeEnum;
import org.openapis.openapi.models.shared.TimerEvent;
import org.openapis.openapi.models.shared.UniversalAdId;
import org.openapis.openapi.models.shared.UniversalAdIdRegistryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCreativesPatchRequest req = new DisplayvideoAdvertisersCreativesPatchRequest("quo", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeInput = new CreativeInput() {{
                    additionalDimensions = new org.openapis.openapi.models.shared.Dimensions[]{{
                        add(new Dimensions() {{
                            heightPixels = 259422;
                            widthPixels = 178367;
                        }}),
                        add(new Dimensions() {{
                            heightPixels = 373813;
                            widthPixels = 69859;
                        }}),
                        add(new Dimensions() {{
                            heightPixels = 587600;
                            widthPixels = 9688;
                        }}),
                    }};
                    appendedTag = "tempora";
                    assets = new org.openapis.openapi.models.shared.AssetAssociation[]{{
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "ipsam";
                                mediaId = "aspernatur";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_POLITE_LOAD;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "quo";
                                mediaId = "esse";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_ICON;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "aperiam";
                                mediaId = "distinctio";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_IOS_APP_ID;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "dignissimos";
                                mediaId = "inventore";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_LONG_BODY;
                        }}),
                    }};
                    cmTrackingAd = new CmTrackingAd() {{
                        cmAdId = "totam";
                        cmCreativeId = "accusamus";
                        cmPlacementId = "aliquam";
                    }};;
                    companionCreativeIds = new String[]{{
                        add("occaecati"),
                        add("commodi"),
                    }};
                    counterEvents = new org.openapis.openapi.models.shared.CounterEvent[]{{
                        add(new CounterEvent() {{
                            name = "Miss Rosie Krajcik";
                            reportingName = "quas";
                        }}),
                        add(new CounterEvent() {{
                            name = "Eugene Leuschke";
                            reportingName = "mollitia";
                        }}),
                        add(new CounterEvent() {{
                            name = "Leah Champlin";
                            reportingName = "fugit";
                        }}),
                        add(new CounterEvent() {{
                            name = "Eugene Dibbert";
                            reportingName = "occaecati";
                        }}),
                    }};
                    creativeType = CreativeCreativeTypeEnum.CREATIVE_TYPE_LIGHTBOX;
                    dimensions = new Dimensions() {{
                        heightPixels = 92260;
                        widthPixels = 456911;
                    }};;
                    displayName = "eveniet";
                    entityStatus = CreativeEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    exitEvents = new org.openapis.openapi.models.shared.ExitEvent[]{{
                        add(new ExitEvent() {{
                            name = "Traci Reilly";
                            reportingName = "quasi";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_BACKUP;
                            url = "vel";
                        }}),
                    }};
                    expandOnHover = false;
                    expandingDirection = CreativeExpandingDirectionEnum.EXPANDING_DIRECTION_DOWN_AND_LEFT;
                    hostingSource = CreativeHostingSourceEnum.HOSTING_SOURCE_THIRD_PARTY;
                    iasCampaignMonitoring = false;
                    integrationCode = "rerum";
                    jsTrackerUrl = "occaecati";
                    notes = "minima";
                    obaIcon = new ObaIcon() {{
                        clickTrackingUrl = "distinctio";
                        dimensions = new Dimensions() {{
                            heightPixels = 756779;
                            widthPixels = 27069;
                        }};;
                        landingPageUrl = "culpa";
                        position = ObaIconPositionEnum.OBA_ICON_POSITION_LOWER_RIGHT;
                        program = "adipisci";
                        resourceMimeType = "cumque";
                        resourceUrl = "consequuntur";
                        viewTrackingUrl = "consequatur";
                    }};;
                    progressOffset = new AudioVideoOffset() {{
                        percentage = "minus";
                        seconds = "quaerat";
                    }};;
                    requireHtml5 = false;
                    requireMraid = false;
                    requirePingForAttribution = false;
                    reviewStatus = new ReviewStatusInfo() {{
                        approvalStatus = ReviewStatusInfoApprovalStatusEnum.APPROVAL_STATUS_REJECTED_NOT_SERVABLE;
                        contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                        creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum.REVIEW_STATUS_APPROVED;
                        exchangeReviewStatuses = new org.openapis.openapi.models.shared.ExchangeReviewStatus[]{{
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_TEADSTV;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_RED_FOR_PUBLISHERS;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_PUBMATIC;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                            }}),
                        }};
                        publisherReviewStatuses = new org.openapis.openapi.models.shared.PublisherReviewStatus[]{{
                            add(new PublisherReviewStatus() {{
                                publisherName = "error";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "pariatur";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "quia";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "asperiores";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                        }};
                    }};;
                    skipOffset = new AudioVideoOffset() {{
                        percentage = "veritatis";
                        seconds = "consequuntur";
                    }};;
                    skippable = false;
                    thirdPartyTag = "quasi";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyUrl[]{{
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND;
                            url = "aliquid";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS;
                            url = "quae";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP;
                            url = "vel";
                        }}),
                    }};
                    timerEvents = new org.openapis.openapi.models.shared.TimerEvent[]{{
                        add(new TimerEvent() {{
                            name = "Jeannette Stanton II";
                            reportingName = "sapiente";
                        }}),
                        add(new TimerEvent() {{
                            name = "Marion Kihn";
                            reportingName = "aut";
                        }}),
                    }};
                    trackerUrls = new String[]{{
                        add("qui"),
                        add("quibusdam"),
                        add("ex"),
                    }};
                    universalAdId = new UniversalAdId() {{
                        id = "8ea19f1d-1705-4133-9d08-086a1840394c";
                        registry = UniversalAdIdRegistryEnum.UNIVERSAL_AD_REGISTRY_UNSPECIFIED;
                    }};;
                    vastTagUrl = "voluptas";
                }};;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "maiores";
                key = "natus";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                updateMask = "voluptas";
                uploadType = "asperiores";
                uploadProtocol = "aperiam";
            }};            

            DisplayvideoAdvertisersCreativesPatchResponse res = sdk.advertisers.displayvideoAdvertisersCreativesPatch(req, new DisplayvideoAdvertisersCreativesPatchSecurity("ea", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.creative != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersDelete

Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersDeleteRequest req = new DisplayvideoAdvertisersDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "officia";
                key = "asperiores";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quae";
                uploadType = "quaerat";
                uploadProtocol = "porro";
            }};            

            DisplayvideoAdvertisersDeleteResponse res = sdk.advertisers.displayvideoAdvertisersDelete(req, new DisplayvideoAdvertisersDeleteSecurity("quod", "labore") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersEditAssignedTargetingOptions

Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.Adloox;
import org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsAppPlatformEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AppCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AssignedTargetingOptionInput;
import org.openapis.openapi.models.shared.AudienceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BrowserAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.CarrierAndIspAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.CombinedAudienceGroup;
import org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting;
import org.openapis.openapi.models.shared.ContentDurationAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentGenreAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentStreamTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput;
import org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
import org.openapis.openapi.models.shared.CustomListGroup;
import org.openapis.openapi.models.shared.CustomListTargetingSetting;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
import org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
import org.openapis.openapi.models.shared.DeviceMakeModelAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
import org.openapis.openapi.models.shared.DoubleVerify;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRating;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
import org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategories;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewability;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityViewableDuringEnum;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTraffic;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewability;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoViewableRateEnum;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetailsExchangeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetailsGenderEnum;
import org.openapis.openapi.models.shared.GeoRegionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.GoogleAudienceGroup;
import org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
import org.openapis.openapi.models.shared.IntegralAdScience;
import org.openapis.openapi.models.shared.IntegralAdScienceDisplayViewabilityEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdFraudRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdultRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAlcoholRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedDrugsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedGamblingRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedHateSpeechRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedViolenceRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceTraqScoreOptionEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceVideoViewabilityEnum;
import org.openapis.openapi.models.shared.InventorySourceAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.InventorySourceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.KeywordAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.LanguageAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetailsOmidEnum;
import org.openapis.openapi.models.shared.OnScreenPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.OperatingSystemAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.YoutubeVideoAssignedTargetingOptionDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditAdvertiserAssignedTargetingOptionsRequestInput = new BulkEditAdvertiserAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "velit";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "culpa";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "totam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "vel";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quos";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "labore";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "cum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "commodi";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "in";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "reiciendis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "assumenda";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "recusandae";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "aliquid";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "consectetur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "exercitationem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "facere";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "suscipit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "reiciendis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quidem";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "saepe";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dolore";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sunt";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9920.12;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "non";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "amet";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "beatae";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "dignissimos";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "a";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "debitis";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "harum";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.WEDNESDAY;
                                        endHour = 58356;
                                        startHour = 916727;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vitae";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_TEENS;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_BIDSWITCH;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptas";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "minima";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "nobis";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "dolorum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "adipisci";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "dolores";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "in";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolore";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 8859.63;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "ullam";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "adipisci";
                                        proximityRadius = 7383.91;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "quas";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_EMBEDDED_VIDEO;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "culpa";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.AD_SERVERS),
                                                }};
                                            }};
                                            customSegmentId = "iste";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY65_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("voluptas"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "provident";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "eius";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY20_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "ea";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "occaecati";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2124;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "tempora";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ROKU;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "reiciendis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "sit";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "praesentium";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "facilis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quaerat";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "incidunt";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "debitis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "rem";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "nobis";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minima";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "reiciendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aperiam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "veniam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "officiis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "exercitationem";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "praesentium";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "cum";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dolorum";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatum";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6223.85;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "expedita";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "debitis";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "neque";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "dolorum";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nostrum";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "officia";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_POST_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "accusamus";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 543678;
                                        startHour = 148268;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "fugiat";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_TEENS;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_KARGO;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "esse";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "sit";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "voluptatum";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "quas";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "repudiandae";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "et";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ex";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sed";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4255.08;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "saepe";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "error";
                                        proximityRadius = 85.11;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "reiciendis";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_WEAPONS;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dicta";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NEGATIVE_NEWS_PHARMACEUTICAL),
                                                }};
                                            }};
                                            customSegmentId = "provident";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE40_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY55_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("facere"),
                                                add("fuga"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "quidem";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maxime";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY40_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "amet";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "assumenda";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNKNOWN;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "atque";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "error";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "accusamus";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "minima";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "ex";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "corrupti";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "blanditiis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "suscipit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "repudiandae";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "atque";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "sunt";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "recusandae";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "repellendus";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "labore";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "reiciendis";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dicta";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "beatae";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "enim";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "velit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "magnam";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "saepe";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consequuntur";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_MUSIC;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "officiis";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "perspiciatis";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4463.94;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "eveniet";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "occaecati";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consequuntur";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "fugit";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "id";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quis";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "illo";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 696463;
                                        startHour = 910994;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vero";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_PARENTAL_GUIDANCE;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_SMARTCLIP;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestiae";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "qui";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "cum";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "iure";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "laborum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptatum";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "rem";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3205.65;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "alias";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "corporis";
                                        proximityRadius = 5973.03;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "mollitia";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_SUGGESTIVE;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALCOHOL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.GAMBLING),
                                                }};
                                            }};
                                            customSegmentId = "debitis";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE60_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD25;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY65_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("eum"),
                                                add("reiciendis"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ600;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "accusantium";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "repellat";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "in";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "nam";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_GENRE;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE3539;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "placeat";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "modi";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_GENERIC_CTV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "officiis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "cumque";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "rerum";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "inventore";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "fugit";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "quae";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "perferendis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "velit";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "aspernatur";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "eius";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "rem";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minima";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "cupiditate";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "soluta";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "illum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "earum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "maiores";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "porro";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolorem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "fuga";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "animi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nulla";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quasi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "natus";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "occaecati";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "adipisci";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quasi";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1690.25;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "nulla";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsa";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "tempora";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nihil";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestiae";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "esse";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 979963;
                                        startHour = 967260;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "architecto";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNSPECIFIED;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_REVENUEMAX;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "esse";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP41_TO50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "consectetur";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "aliquid";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "ipsa";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "laborum";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "nostrum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "expedita";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "aliquid";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3813.97;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "perferendis";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "eum";
                                        proximityRadius = 3747.53;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "id";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_ADULT;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "possimus";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.OCCULT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                }};
                                            }};
                                            customSegmentId = "voluptatem";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE60_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD25;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY60_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("rerum"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "earum";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ex";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "minus";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "nemo";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE6064;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ratione";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "ullam";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_UNSPECIFIED;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "totam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quibusdam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "ipsam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "dolor";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "deleniti";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "tempora";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "consequatur";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "modi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "laudantium";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dolor";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "fugiat";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3694.9;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "ipsa";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quas";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eveniet";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "impedit";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "officiis";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "esse";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "veniam";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.MONDAY;
                                        endHour = 712927;
                                        startHour = 432984;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatum";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_GENERAL;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_SUPERSHIP;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nobis";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP41_TO50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "recusandae";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "consequuntur";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "voluptatem";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "exercitationem";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_RECOMMENDATION;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "quasi";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "at";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vero";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6907.85;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "doloribus";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "repudiandae";
                                        proximityRadius = 7592.83;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "nemo";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_ALCOHOL;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "officia";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.GAMBLING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ADULT_CONTENT_SWIMSUIT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_TERRORIST_EVENTS),
                                                }};
                                            }};
                                            customSegmentId = "fugiat";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.VIDEO_IAB_UNSPECIFIED;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("soluta"),
                                                add("alias"),
                                                add("omnis"),
                                                add("eos"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "maxime";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "magnam";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "commodi";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "itaque";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNKNOWN;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "totam";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "earum";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "vero";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "ipsam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "alias";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "maiores";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "sint";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "nulla";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "esse";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "nemo";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "reprehenderit";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "sint";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "impedit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "asperiores";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptas";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "delectus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "consectetur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "atque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "impedit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "repudiandae";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nam";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "dolore";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_MUSIC;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptate";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sequi";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4939.58;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "quo";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "deleniti";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quibusdam";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "iure";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "odit";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quibusdam";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 818034;
                                        startHour = 726878;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_MATURE;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_IMOBILE;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "accusantium";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP41_TO50_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "ea";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "beatae";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "vero";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "excepturi";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "velit";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "perspiciatis";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "earum";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7722.66;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "iste";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "itaque";
                                        proximityRadius = 26.77;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "itaque";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_WEAPONS;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "non";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE_UNSPECIFIED;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                }};
                                            }};
                                            customSegmentId = "perspiciatis";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE50_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY70_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("animi"),
                                                add("impedit"),
                                                add("ipsam"),
                                                add("corporis"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "iste";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ex";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY70_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "libero";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "rem";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_AUTHORIZED_SELLER_STATUS;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "alias";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "magni";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_AMAZON_FIRETV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quae";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "exercitationem";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "et";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "ipsum";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "unde";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "nulla";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "maxime";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quia";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quia";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "libero";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "id";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "fugiat";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "placeat";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "iusto";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptates";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "totam";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "eligendi";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "distinctio";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 322.73;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "esse";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolores";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "assumenda";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "beatae";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "est";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "facere";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "provident";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SUNDAY;
                                        endHour = 896480;
                                        startHour = 733289;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ea";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_CONNECTED_TV;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_GENERAL;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_SMARTCLIP;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "officiis";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "cum";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "at";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "alias";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quia";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "fuga";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "accusantium";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "expedita";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1770.05;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "odio";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "praesentium";
                                        proximityRadius = 1403.16;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "corporis";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_POLITICS;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "adipisci";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE_UNSPECIFIED;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                }};
                                            }};
                                            customSegmentId = "officia";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("cupiditate"),
                                                add("minima"),
                                                add("placeat"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ750;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "libero";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ratione";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "occaecati";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "voluptas";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE4549;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "velit";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "minus";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "est";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "delectus";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "odit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "repellat";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "pariatur";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nemo";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "aperiam";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "odio";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "in";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ducimus";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "error";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptate";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "itaque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ex";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "commodi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "placeat";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "exercitationem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "modi";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "sint";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vero";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1949.01;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "cum";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dicta";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "earum";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "veniam";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "animi";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolores";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_POST_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "consequuntur";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SUNDAY;
                                        endHour = 748224;
                                        startHour = 56877;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "maiores";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNSPECIFIED;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_RED_FOR_PUBLISHERS;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "excepturi";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "nemo";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "aliquam";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "nostrum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "doloribus";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "sint";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "hic";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "animi";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5173.26;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "odio";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "eaque";
                                        proximityRadius = 9011.63;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "quos";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_POLITICS;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "tempore";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ADULT_CONTENT_SWIMSUIT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                }};
                                            }};
                                            customSegmentId = "eligendi";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE40_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE10_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("consequuntur"),
                                                add("facere"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ1000;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "blanditiis";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "distinctio";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "nisi";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "libero";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_POI;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("ipsum"),
                                add("ad"),
                                add("voluptatibus"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_YOUTUBE_CHANNEL;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("debitis"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("eos"),
                                add("reprehenderit"),
                                add("nostrum"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_VIDEO_PLAYER_SIZE;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("est"),
                                add("rem"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_EXCHANGE;
                        }}),
                    }};
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "ducimus";
                key = "dolor";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "porro";
                uploadProtocol = "vitae";
            }};            

            DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersEditAssignedTargetingOptions(req, new DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity("dignissimos", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditAdvertiserAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersGet

Gets an advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersGetRequest req = new DisplayvideoAdvertisersGetRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "iusto";
                key = "dignissimos";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "illo";
                uploadType = "ab";
                uploadProtocol = "incidunt";
            }};            

            DisplayvideoAdvertisersGetResponse res = sdk.advertisers.displayvideoAdvertisersGet(req, new DisplayvideoAdvertisersGetSecurity("accusamus", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersCreate

Creates a new insertion order. Returns the newly created insertion order if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingStrategy;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FixedBidStrategy;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.InsertionOrderBillableOutcomeEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudget;
import org.openapis.openapi.models.shared.InsertionOrderBudgetAutomationTypeEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudgetBudgetUnitEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudgetSegment;
import org.openapis.openapi.models.shared.InsertionOrderEntityStatusEnum;
import org.openapis.openapi.models.shared.InsertionOrderInput;
import org.openapis.openapi.models.shared.InsertionOrderInsertionOrderTypeEnum;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategy;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.Pacing;
import org.openapis.openapi.models.shared.PacingPacingPeriodEnum;
import org.openapis.openapi.models.shared.PacingPacingTypeEnum;
import org.openapis.openapi.models.shared.PartnerCost;
import org.openapis.openapi.models.shared.PartnerCostCostTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostFeeTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostInvoiceTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoal;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategy;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoalPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersCreateRequest req = new DisplayvideoAdvertisersInsertionOrdersCreateRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                insertionOrderInput = new InsertionOrderInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "eos";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "reiciendis";
                            maxAverageCpmBidAmountMicros = "earum";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "praesentium";
                            maxAverageCpmBidAmountMicros = "nemo";
                            performanceGoalAmountMicros = "repellat";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
                        }};;
                    }};;
                    billableOutcome = InsertionOrderBillableOutcomeEnum.BILLABLE_OUTCOME_UNSPECIFIED;
                    budget = new InsertionOrderBudget() {{
                        automationType = InsertionOrderBudgetAutomationTypeEnum.INSERTION_ORDER_AUTOMATION_TYPE_BUDGET;
                        budgetSegments = new org.openapis.openapi.models.shared.InsertionOrderBudgetSegment[]{{
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "illo";
                                campaignBudgetId = "labore";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 828841;
                                        month = 304173;
                                        year = 790463;
                                    }};
                                    startDate = new Date() {{
                                        day = 591065;
                                        month = 514993;
                                        year = 921719;
                                    }};
                                }};
                                description = "consequatur";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "maxime";
                                campaignBudgetId = "aspernatur";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 723942;
                                        month = 711991;
                                        year = 559174;
                                    }};
                                    startDate = new Date() {{
                                        day = 590858;
                                        month = 922299;
                                        year = 700045;
                                    }};
                                }};
                                description = "dignissimos";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "corporis";
                                campaignBudgetId = "vero";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 629377;
                                        month = 833982;
                                        year = 434827;
                                    }};
                                    startDate = new Date() {{
                                        day = 213835;
                                        month = 413801;
                                        year = 771226;
                                    }};
                                }};
                                description = "commodi";
                            }}),
                        }};
                        budgetUnit = InsertionOrderBudgetBudgetUnitEnum.BUDGET_UNIT_UNSPECIFIED;
                    }};;
                    campaignId = "voluptatem";
                    displayName = "ad";
                    entityStatus = InsertionOrderEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 229567;
                        maxViews = 849320;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_WEEKS;
                        timeUnitCount = 695526;
                        unlimited = false;
                    }};;
                    insertionOrderType = InsertionOrderInsertionOrderTypeEnum.OVER_THE_TOP;
                    integrationDetails = new IntegrationDetails() {{
                        details = "amet";
                        integrationCode = "quasi";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "dicta";
                        dailyMaxMicros = "laudantium";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_UNSPECIFIED;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_EVEN;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_AGENCY_TRADING_DESK;
                            feeAmount = "provident";
                            feePercentageMillis = "dolorum";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_MEDIA_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_CUSTOM_FEE3;
                            feeAmount = "consequatur";
                            feePercentageMillis = "nemo";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                    }};
                    performanceGoal = new PerformanceGoal() {{
                        performanceGoalAmountMicros = "facilis";
                        performanceGoalPercentageMicros = "corrupti";
                        performanceGoalString = "aperiam";
                        performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CLICK_CVR;
                    }};;
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "dicta";
                key = "voluptatem";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "sunt";
                uploadProtocol = "a";
            }};            

            DisplayvideoAdvertisersInsertionOrdersCreateResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersCreate(req, new DisplayvideoAdvertisersInsertionOrdersCreateSecurity("dolor", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.insertionOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersDelete

Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersDeleteRequest req = new DisplayvideoAdvertisersInsertionOrdersDeleteRequest("atque", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "labore";
                alt = AltEnum.PROTO;
                callback = "esse";
                fields = "voluptatem";
                key = "perferendis";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "aperiam";
                uploadProtocol = "dignissimos";
            }};            

            DisplayvideoAdvertisersInsertionOrdersDeleteResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersDelete(req, new DisplayvideoAdvertisersInsertionOrdersDeleteSecurity("repellat", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersGet

Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersGetRequest req = new DisplayvideoAdvertisersInsertionOrdersGetRequest("porro", "provident") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.MEDIA;
                callback = "consectetur";
                fields = "soluta";
                key = "natus";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "amet";
                uploadProtocol = "tenetur";
            }};            

            DisplayvideoAdvertisersInsertionOrdersGetResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersGet(req, new DisplayvideoAdvertisersInsertionOrdersGetSecurity("aspernatur", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.insertionOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersList

Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersListRequest req = new DisplayvideoAdvertisersInsertionOrdersListRequest("itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "vero";
                fields = "qui";
                filter = "consectetur";
                key = "repellat";
                oauthToken = "explicabo";
                orderBy = "explicabo";
                pageSize = 350325L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "ab";
                uploadProtocol = "illo";
            }};            

            DisplayvideoAdvertisersInsertionOrdersListResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersList(req, new DisplayvideoAdvertisersInsertionOrdersListSecurity("hic", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInsertionOrdersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions

Lists assigned targeting options of an insertion order across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest("delectus", "non") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "numquam";
                filter = "repudiandae";
                key = "modi";
                oauthToken = "in";
                orderBy = "explicabo";
                pageSize = 879857L;
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "odit";
                uploadProtocol = "deleniti";
            }};            

            DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions(req, new DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity("enim", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListInsertionOrderAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersPatch

Updates an existing insertion order. Returns the updated insertion order if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingStrategy;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FixedBidStrategy;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.InsertionOrderBillableOutcomeEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudget;
import org.openapis.openapi.models.shared.InsertionOrderBudgetAutomationTypeEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudgetBudgetUnitEnum;
import org.openapis.openapi.models.shared.InsertionOrderBudgetSegment;
import org.openapis.openapi.models.shared.InsertionOrderEntityStatusEnum;
import org.openapis.openapi.models.shared.InsertionOrderInput;
import org.openapis.openapi.models.shared.InsertionOrderInsertionOrderTypeEnum;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategy;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.Pacing;
import org.openapis.openapi.models.shared.PacingPacingPeriodEnum;
import org.openapis.openapi.models.shared.PacingPacingTypeEnum;
import org.openapis.openapi.models.shared.PartnerCost;
import org.openapis.openapi.models.shared.PartnerCostCostTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostFeeTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostInvoiceTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoal;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategy;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoalPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersPatchRequest req = new DisplayvideoAdvertisersInsertionOrdersPatchRequest("similique", "minima") {{
                dollarXgafv = XgafvEnum.TWO;
                insertionOrderInput = new InsertionOrderInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "magnam";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "sit";
                            maxAverageCpmBidAmountMicros = "modi";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "nesciunt";
                            maxAverageCpmBidAmountMicros = "mollitia";
                            performanceGoalAmountMicros = "dignissimos";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
                        }};;
                    }};;
                    billableOutcome = InsertionOrderBillableOutcomeEnum.BILLABLE_OUTCOME_PAY_PER_IMPRESSION;
                    budget = new InsertionOrderBudget() {{
                        automationType = InsertionOrderBudgetAutomationTypeEnum.INSERTION_ORDER_AUTOMATION_TYPE_BUDGET;
                        budgetSegments = new org.openapis.openapi.models.shared.InsertionOrderBudgetSegment[]{{
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "reiciendis";
                                campaignBudgetId = "ab";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 265632;
                                        month = 13865;
                                        year = 13508;
                                    }};
                                    startDate = new Date() {{
                                        day = 911657;
                                        month = 483753;
                                        year = 413758;
                                    }};
                                }};
                                description = "numquam";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "dolorum";
                                campaignBudgetId = "possimus";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 452399;
                                        month = 232772;
                                        year = 200637;
                                    }};
                                    startDate = new Date() {{
                                        day = 310629;
                                        month = 929476;
                                        year = 791228;
                                    }};
                                }};
                                description = "sunt";
                            }}),
                        }};
                        budgetUnit = InsertionOrderBudgetBudgetUnitEnum.BUDGET_UNIT_IMPRESSIONS;
                    }};;
                    campaignId = "iusto";
                    displayName = "quas";
                    entityStatus = InsertionOrderEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 704948;
                        maxViews = 229276;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_MONTHS;
                        timeUnitCount = 685415;
                        unlimited = false;
                    }};;
                    insertionOrderType = InsertionOrderInsertionOrderTypeEnum.INSERTION_ORDER_TYPE_UNSPECIFIED;
                    integrationDetails = new IntegrationDetails() {{
                        details = "rem";
                        integrationCode = "aut";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "quos";
                        dailyMaxMicros = "laudantium";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_FLIGHT;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_UNSPECIFIED;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_ADLOOX;
                            feeAmount = "saepe";
                            feePercentageMillis = "delectus";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                    }};
                    performanceGoal = new PerformanceGoal() {{
                        performanceGoalAmountMicros = "officia";
                        performanceGoalPercentageMicros = "sed";
                        performanceGoalString = "voluptatem";
                        performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_UNSPECIFIED;
                    }};;
                }};;
                accessToken = "eveniet";
                alt = AltEnum.PROTO;
                callback = "voluptatem";
                fields = "incidunt";
                key = "qui";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                updateMask = "harum";
                uploadType = "explicabo";
                uploadProtocol = "beatae";
            }};            

            DisplayvideoAdvertisersInsertionOrdersPatchResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersPatch(req, new DisplayvideoAdvertisersInsertionOrdersPatchSecurity("aliquid", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.insertionOrder != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
import org.openapis.openapi.models.shared.Adloox;
import org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsAppPlatformEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AppCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AssignedTargetingOptionInput;
import org.openapis.openapi.models.shared.AudienceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BrowserAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.CarrierAndIspAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.CombinedAudienceGroup;
import org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting;
import org.openapis.openapi.models.shared.ContentDurationAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentGenreAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentStreamTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CustomListGroup;
import org.openapis.openapi.models.shared.CustomListTargetingSetting;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
import org.openapis.openapi.models.shared.DeviceMakeModelAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
import org.openapis.openapi.models.shared.DoubleVerify;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRating;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
import org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategories;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewability;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityViewableDuringEnum;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTraffic;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewability;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoViewableRateEnum;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetailsExchangeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetailsGenderEnum;
import org.openapis.openapi.models.shared.GeoRegionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.GoogleAudienceGroup;
import org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
import org.openapis.openapi.models.shared.IntegralAdScience;
import org.openapis.openapi.models.shared.IntegralAdScienceDisplayViewabilityEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdFraudRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdultRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAlcoholRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedDrugsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedGamblingRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedHateSpeechRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedViolenceRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceTraqScoreOptionEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceVideoViewabilityEnum;
import org.openapis.openapi.models.shared.InventorySourceAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.InventorySourceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.KeywordAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.LanguageAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetailsOmidEnum;
import org.openapis.openapi.models.shared.OnScreenPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.OperatingSystemAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.YoutubeVideoAssignedTargetingOptionDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest("optio", "voluptatibus", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_KEYWORD) {{
                dollarXgafv = XgafvEnum.TWO;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE4044;
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "totam";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "sequi";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_AMAZON_FIRETV;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "impedit";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "odit";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "repellat";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "nulla";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "laborum";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "natus";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "doloremque";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "nisi";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "rerum";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "recusandae";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "non";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "rem";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "quia";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "ullam";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "voluptatibus";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "officiis";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "enim";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "perferendis";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "reiciendis";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "iste";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "ullam";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "dolore";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "modi";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "maxime";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "modi";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 1635.58;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                        targetingOptionId = "vero";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "doloribus";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "impedit";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "porro";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "accusamus";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "totam";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "sint";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.WEDNESDAY;
                        endHour = 458412;
                        startHour = 438256;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "nesciunt";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_GENERAL;
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_ONE_BY_AOL_DISPLAY;
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "consequuntur";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "reprehenderit";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "distinctio";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "eius";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "ipsa";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "maiores";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "veniam";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "saepe";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 8163.65;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "quos";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "doloribus";
                        proximityRadius = 8518.09;
                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_KILOMETERS;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "delectus";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_WEAPONS;
                    }};;
                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "nesciunt";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_POINT5_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_AVIATION),
                                }};
                            }};;
                            customSegmentId = "sapiente";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY60_PERCENT_HIGHER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE40_PERCENT_HIGHER;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("tenetur"),
                                add("adipisci"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ250;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "fuga";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "minima";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                    }};;
                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                        channelId = "aliquid";
                        negative = false;
                    }};;
                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                        negative = false;
                        videoId = "magni";
                    }};;
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "praesentium";
                fields = "dolor";
                key = "exercitationem";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "impedit";
                uploadProtocol = "sit";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity("nemo", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest("consequuntur", "amet", "deserunt", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_CONTENT_INSTREAM_POSITION) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "quisquam";
                key = "enim";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "officiis";
                uploadProtocol = "architecto";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity("alias", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an insertion order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest("ipsa", "nobis", "necessitatibus", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_REGIONAL_LOCATION_LIST) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "debitis";
                fields = "ullam";
                key = "architecto";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "veritatis";
                uploadProtocol = "provident";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity("cumque", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an insertion order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest("quibusdam", "quod", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_BROWSER) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.JSON;
                callback = "dignissimos";
                fields = "laboriosam";
                filter = "sed";
                key = "odio";
                oauthToken = "natus";
                orderBy = "provident";
                pageSize = 739508L;
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "quidem";
                uploadProtocol = "itaque";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity("laboriosam", "unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listInsertionOrderAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInvoicesList

Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListSecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInvoicesListRequest req = new DisplayvideoAdvertisersInvoicesListRequest("modi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "libero";
                issueMonth = "nam";
                key = "incidunt";
                loiSapinInvoiceType = DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum.LOI_SAPIN_INVOICE_TYPE_PLATFORM;
                oauthToken = "quod";
                pageSize = 664666L;
                pageToken = "saepe";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "quo";
                uploadProtocol = "nesciunt";
            }};            

            DisplayvideoAdvertisersInvoicesListResponse res = sdk.advertisers.displayvideoAdvertisersInvoicesList(req, new DisplayvideoAdvertisersInvoicesListSecurity() {{
                option1 = new DisplayvideoAdvertisersInvoicesListSecurityOption1("illum", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listInvoicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersInvoicesLookupInvoiceCurrency

Retrieves the invoice currency used by an advertiser in a given month.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest req = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "recusandae";
                invoiceMonth = "distinctio";
                key = "pariatur";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "laborum";
                uploadProtocol = "eveniet";
            }};            

            DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse res = sdk.advertisers.displayvideoAdvertisersInvoicesLookupInvoiceCurrency(req, new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity() {{
                option1 = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1("laborum", "incidunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lookupInvoiceCurrencyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions

Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.Adloox;
import org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsAppPlatformEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AppCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AssignedTargetingOptionInput;
import org.openapis.openapi.models.shared.AudienceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BrowserAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BulkEditAssignedTargetingOptionsRequestInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.CarrierAndIspAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.CombinedAudienceGroup;
import org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting;
import org.openapis.openapi.models.shared.ContentDurationAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentGenreAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentStreamTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput;
import org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
import org.openapis.openapi.models.shared.CustomListGroup;
import org.openapis.openapi.models.shared.CustomListTargetingSetting;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
import org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
import org.openapis.openapi.models.shared.DeviceMakeModelAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
import org.openapis.openapi.models.shared.DoubleVerify;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRating;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
import org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategories;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewability;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityViewableDuringEnum;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTraffic;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewability;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoViewableRateEnum;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetailsExchangeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetailsGenderEnum;
import org.openapis.openapi.models.shared.GeoRegionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.GoogleAudienceGroup;
import org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
import org.openapis.openapi.models.shared.IntegralAdScience;
import org.openapis.openapi.models.shared.IntegralAdScienceDisplayViewabilityEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdFraudRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdultRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAlcoholRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedDrugsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedGamblingRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedHateSpeechRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedViolenceRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceTraqScoreOptionEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceVideoViewabilityEnum;
import org.openapis.openapi.models.shared.InventorySourceAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.InventorySourceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.KeywordAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.LanguageAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetailsOmidEnum;
import org.openapis.openapi.models.shared.OnScreenPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.OperatingSystemAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.YoutubeVideoAssignedTargetingOptionDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest("maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditAssignedTargetingOptionsRequestInput = new BulkEditAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE3034;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestias";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "laborum";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "labore";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "perferendis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "aliquid";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eligendi";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "hic";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "officiis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "unde";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "error";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "mollitia";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "magnam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "nostrum";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "fuga";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "impedit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "deserunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "doloremque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "facere";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consequatur";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eaque";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "architecto";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "similique";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "blanditiis";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quae";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1698.19;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "sed";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "impedit";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "ipsa";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "excepturi";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "a";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 992667;
                                        startHour = 523365;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "suscipit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_FAMILIES;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_IBILLBOARD;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "in";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "quasi";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "neque";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "vero";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "excepturi";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "qui";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "beatae";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "incidunt";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1391.33;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "rerum";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "alias";
                                        proximityRadius = 6244.98;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "accusantium";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_RELIGION;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "ex";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                }};
                                            }};
                                            customSegmentId = "quis";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE60_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD8;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY60_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE40_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("amet"),
                                                add("nemo"),
                                                add("ipsa"),
                                                add("quisquam"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ875;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "eveniet";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "porro";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY60_PERCENT_OR_MORE;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "modi";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "voluptates";
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eius";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "sequi";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_SAMSUNG_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "esse";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "sint";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "a";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "maiores";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "deserunt";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "corporis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "officiis";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "officia";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "saepe";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "repudiandae";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "accusantium";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quasi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eius";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "natus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "magnam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "amet";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "amet";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "modi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "architecto";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "molestias";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "dolore";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "sunt";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "neque";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "odit";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9368.45;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "ipsam";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eaque";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "exercitationem";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "veniam";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nihil";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ad";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quis";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                                        endHour = 366480;
                                        startHour = 382764;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_MATURE;
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_YIELDMO;
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sed";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "repellat";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "repudiandae";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "architecto";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "adipisci";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_RECOMMENDATION;
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "harum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "iure";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7954.57;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "dolorum";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "velit";
                                        proximityRadius = 9378.65;
                                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "error";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_GAMBLING;
                                    }};
                                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_UNSPECIFIED;
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "mollitia";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.PARKING_PAGE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                }};
                                            }};
                                            customSegmentId = "rerum";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD6;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("asperiores"),
                                                add("voluptatum"),
                                                add("iste"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ600;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "mollitia";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quae";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY_UNSPECIFIED;
                                    }};
                                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                                        channelId = "non";
                                        negative = false;
                                    }};
                                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        videoId = "voluptates";
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_DEVICE_TYPE;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("quas"),
                                add("consequuntur"),
                                add("maiores"),
                                add("inventore"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_ON_SCREEN_POSITION;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("est"),
                                add("dolor"),
                                add("aliquid"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_USER_REWARDED_CONTENT;
                        }}),
                    }};
                    lineItemIds = new String[]{{
                        add("rem"),
                        add("voluptatum"),
                        add("ducimus"),
                        add("adipisci"),
                    }};
                }};;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "numquam";
                key = "sequi";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "rerum";
                uploadProtocol = "veritatis";
            }};            

            DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions(req, new DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity("tenetur", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions

Lists assigned targeting options for multiple line items across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "nihil";
                filter = "voluptas";
                key = "animi";
                lineItemIds = new String[]{{
                    add("alias"),
                    add("fuga"),
                }};
                oauthToken = "aut";
                orderBy = "dolore";
                pageSize = 802734L;
                pageToken = "aliquam";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "ullam";
                uploadProtocol = "eligendi";
            }};            

            DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions(req, new DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity("placeat", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsBulkUpdate

Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkUpdateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkUpdateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingStrategy;
import org.openapis.openapi.models.shared.BulkUpdateLineItemsRequestInput;
import org.openapis.openapi.models.shared.ConversionCountingConfig;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FixedBidStrategy;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.LineItemBudgetBudgetAllocationTypeEnum;
import org.openapis.openapi.models.shared.LineItemBudgetInput;
import org.openapis.openapi.models.shared.LineItemEntityStatusEnum;
import org.openapis.openapi.models.shared.LineItemFlight;
import org.openapis.openapi.models.shared.LineItemFlightFlightDateTypeEnum;
import org.openapis.openapi.models.shared.LineItemInput;
import org.openapis.openapi.models.shared.LineItemLineItemTypeEnum;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategy;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.MobileAppInput;
import org.openapis.openapi.models.shared.Pacing;
import org.openapis.openapi.models.shared.PacingPacingPeriodEnum;
import org.openapis.openapi.models.shared.PacingPacingTypeEnum;
import org.openapis.openapi.models.shared.PartnerCost;
import org.openapis.openapi.models.shared.PartnerCostCostTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostFeeTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostInvoiceTypeEnum;
import org.openapis.openapi.models.shared.PartnerRevenueModel;
import org.openapis.openapi.models.shared.PartnerRevenueModelMarkupTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategy;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.TargetFrequency;
import org.openapis.openapi.models.shared.TargetFrequencyTimeUnitEnum;
import org.openapis.openapi.models.shared.TargetingExpansionConfig;
import org.openapis.openapi.models.shared.TargetingExpansionConfigTargetingExpansionLevelEnum;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfig;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfigVendorEnum;
import org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig;
import org.openapis.openapi.models.shared.VideoAdSequenceSettings;
import org.openapis.openapi.models.shared.VideoAdSequenceSettingsMinimumDurationEnum;
import org.openapis.openapi.models.shared.VideoAdSequenceStep;
import org.openapis.openapi.models.shared.VideoAdSequenceStepInteractionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyTypeEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersInventorySourceConfig;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsContentCategoryEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersThirdPartyMeasurementSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsBulkUpdateRequest req = new DisplayvideoAdvertisersLineItemsBulkUpdateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkUpdateLineItemsRequestInput = new BulkUpdateLineItemsRequestInput() {{
                    lineItemIds = new String[]{{
                        add("nihil"),
                    }};
                    targetLineItem = new LineItemInput() {{
                        bidStrategy = new BiddingStrategy() {{
                            fixedBid = new FixedBidStrategy() {{
                                bidAmountMicros = "inventore";
                            }};;
                            maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                                customBiddingAlgorithmId = "libero";
                                maxAverageCpmBidAmountMicros = "ipsam";
                                performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED;
                                raiseBidForDeals = false;
                            }};;
                            performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                                customBiddingAlgorithmId = "cumque";
                                maxAverageCpmBidAmountMicros = "dicta";
                                performanceGoalAmountMicros = "harum";
                                performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
                            }};;
                        }};;
                        budget = new LineItemBudgetInput() {{
                            budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum.LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED;
                            maxAmount = "beatae";
                        }};;
                        conversionCounting = new ConversionCountingConfig() {{
                            floodlightActivityConfigs = new org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig[]{{
                                add(new TrackingFloodlightActivityConfig() {{
                                    floodlightActivityId = "delectus";
                                    postClickLookbackWindowDays = 287152;
                                    postViewLookbackWindowDays = 712640;
                                }}),
                                add(new TrackingFloodlightActivityConfig() {{
                                    floodlightActivityId = "corrupti";
                                    postClickLookbackWindowDays = 523995;
                                    postViewLookbackWindowDays = 543353;
                                }}),
                                add(new TrackingFloodlightActivityConfig() {{
                                    floodlightActivityId = "officiis";
                                    postClickLookbackWindowDays = 739633;
                                    postViewLookbackWindowDays = 863330;
                                }}),
                                add(new TrackingFloodlightActivityConfig() {{
                                    floodlightActivityId = "sapiente";
                                    postClickLookbackWindowDays = 775427;
                                    postViewLookbackWindowDays = 277990;
                                }}),
                            }};
                            postViewCountPercentageMillis = "quod";
                        }};;
                        creativeIds = new String[]{{
                            add("porro"),
                            add("id"),
                            add("excepturi"),
                            add("occaecati"),
                        }};
                        displayName = "libero";
                        entityStatus = LineItemEntityStatusEnum.ENTITY_STATUS_PAUSED;
                        excludeNewExchanges = false;
                        flight = new LineItemFlight() {{
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 457150;
                                    month = 944033;
                                    year = 802216;
                                }};;
                                startDate = new Date() {{
                                    day = 36691;
                                    month = 743531;
                                    year = 147400;
                                }};;
                            }};;
                            flightDateType = LineItemFlightFlightDateTypeEnum.LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM;
                        }};;
                        frequencyCap = new FrequencyCap() {{
                            maxImpressions = 756287;
                            maxViews = 927490;
                            timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_UNSPECIFIED;
                            timeUnitCount = 13637;
                            unlimited = false;
                        }};;
                        insertionOrderId = "laudantium";
                        integrationDetails = new IntegrationDetails() {{
                            details = "iusto";
                            integrationCode = "dolor";
                        }};;
                        lineItemType = LineItemLineItemTypeEnum.LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP;
                        mobileApp = new MobileAppInput() {{
                            appId = "tempora";
                        }};;
                        pacing = new Pacing() {{
                            dailyMaxImpressions = "magni";
                            dailyMaxMicros = "rerum";
                            pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_UNSPECIFIED;
                            pacingType = PacingPacingTypeEnum.PACING_TYPE_UNSPECIFIED;
                        }};;
                        partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                            add(new PartnerCost() {{
                                costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_CUSTOM_FEE2;
                                feeAmount = "eum";
                                feePercentageMillis = "reprehenderit";
                                feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                                invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                            }}),
                            add(new PartnerCost() {{
                                costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO;
                                feeAmount = "atque";
                                feePercentageMillis = "rerum";
                                feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                                invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                            }}),
                        }};
                        partnerRevenueModel = new PartnerRevenueModel() {{
                            markupAmount = "nostrum";
                            markupType = PartnerRevenueModelMarkupTypeEnum.PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP;
                        }};;
                        targetingExpansion = new TargetingExpansionConfig() {{
                            excludeFirstPartyAudience = false;
                            targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum.TARGETING_EXPANSION_LEVEL_UNSPECIFIED;
                        }};;
                        youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput() {{
                            biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput() {{
                                type = YoutubeAndPartnersBiddingStrategyTypeEnum.YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM;
                                value = "enim";
                            }};;
                            contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum.YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED;
                            inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig() {{
                                includeYoutubeSearch = false;
                                includeYoutubeVideoPartners = false;
                                includeYoutubeVideos = false;
                            }};;
                            leadFormId = "magni";
                            linkedMerchantId = "quae";
                            relatedVideoIds = new String[]{{
                                add("placeat"),
                                add("enim"),
                                add("labore"),
                            }};
                            targetFrequency = new TargetFrequency() {{
                                targetCount = "sapiente";
                                timeUnit = TargetFrequencyTimeUnitEnum.TIME_UNIT_MINUTES;
                                timeUnitCount = 965735;
                            }};;
                            thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings() {{
                                brandLiftVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "natus";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_NIELSEN;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "natus";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "doloribus";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MOAT;
                                    }}),
                                }};
                                brandSafetyVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "mollitia";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_NIELSEN;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "quis";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "eum";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_COMSCORE;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "illum";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_DOUBLE_VERIFY;
                                    }}),
                                }};
                                reachVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "odio";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_NIELSEN;
                                    }}),
                                }};
                                viewabilityVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "recusandae";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_DYNATA;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "praesentium";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MOAT;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "fugit";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_UNSPECIFIED;
                                    }}),
                                    add(new ThirdPartyVendorConfig() {{
                                        placementId = "aliquid";
                                        vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_KANTAR;
                                    }}),
                                }};
                            }};;
                            videoAdSequenceSettings = new VideoAdSequenceSettings() {{
                                minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum.VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED;
                                steps = new org.openapis.openapi.models.shared.VideoAdSequenceStep[]{{
                                    add(new VideoAdSequenceStep() {{
                                        adGroupId = "sunt";
                                        interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_PAID_VIEW;
                                        previousStepId = "delectus";
                                        stepId = "laborum";
                                    }}),
                                    add(new VideoAdSequenceStep() {{
                                        adGroupId = "aliquam";
                                        interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_IMPRESSION;
                                        previousStepId = "modi";
                                        stepId = "sunt";
                                    }}),
                                    add(new VideoAdSequenceStep() {{
                                        adGroupId = "impedit";
                                        interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_PAID_VIEW;
                                        previousStepId = "voluptatum";
                                        stepId = "ipsa";
                                    }}),
                                }};
                            }};;
                            viewFrequencyCap = new FrequencyCap() {{
                                maxImpressions = 872991;
                                maxViews = 209860;
                                timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_MINUTES;
                                timeUnitCount = 132305;
                                unlimited = false;
                            }};;
                        }};;
                    }};;
                    updateMask = "inventore";
                }};;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "hic";
                key = "eaque";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "aperiam";
                uploadProtocol = "aspernatur";
            }};            

            DisplayvideoAdvertisersLineItemsBulkUpdateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsBulkUpdate(req, new DisplayvideoAdvertisersLineItemsBulkUpdateSecurity("nulla", "enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkUpdateLineItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsCreate

Creates a new line item. Returns the newly created line item if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingStrategy;
import org.openapis.openapi.models.shared.ConversionCountingConfig;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FixedBidStrategy;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.LineItemBudgetBudgetAllocationTypeEnum;
import org.openapis.openapi.models.shared.LineItemBudgetInput;
import org.openapis.openapi.models.shared.LineItemEntityStatusEnum;
import org.openapis.openapi.models.shared.LineItemFlight;
import org.openapis.openapi.models.shared.LineItemFlightFlightDateTypeEnum;
import org.openapis.openapi.models.shared.LineItemInput;
import org.openapis.openapi.models.shared.LineItemLineItemTypeEnum;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategy;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.MobileAppInput;
import org.openapis.openapi.models.shared.Pacing;
import org.openapis.openapi.models.shared.PacingPacingPeriodEnum;
import org.openapis.openapi.models.shared.PacingPacingTypeEnum;
import org.openapis.openapi.models.shared.PartnerCost;
import org.openapis.openapi.models.shared.PartnerCostCostTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostFeeTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostInvoiceTypeEnum;
import org.openapis.openapi.models.shared.PartnerRevenueModel;
import org.openapis.openapi.models.shared.PartnerRevenueModelMarkupTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategy;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.TargetFrequency;
import org.openapis.openapi.models.shared.TargetFrequencyTimeUnitEnum;
import org.openapis.openapi.models.shared.TargetingExpansionConfig;
import org.openapis.openapi.models.shared.TargetingExpansionConfigTargetingExpansionLevelEnum;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfig;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfigVendorEnum;
import org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig;
import org.openapis.openapi.models.shared.VideoAdSequenceSettings;
import org.openapis.openapi.models.shared.VideoAdSequenceSettingsMinimumDurationEnum;
import org.openapis.openapi.models.shared.VideoAdSequenceStep;
import org.openapis.openapi.models.shared.VideoAdSequenceStepInteractionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyTypeEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersInventorySourceConfig;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsContentCategoryEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersThirdPartyMeasurementSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsCreateRequest req = new DisplayvideoAdvertisersLineItemsCreateRequest("illo") {{
                dollarXgafv = XgafvEnum.ONE;
                lineItemInput = new LineItemInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "delectus";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "numquam";
                            maxAverageCpmBidAmountMicros = "optio";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "ex";
                            maxAverageCpmBidAmountMicros = "repellat";
                            performanceGoalAmountMicros = "quae";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO;
                        }};;
                    }};;
                    budget = new LineItemBudgetInput() {{
                        budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum.LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED;
                        maxAmount = "hic";
                    }};;
                    conversionCounting = new ConversionCountingConfig() {{
                        floodlightActivityConfigs = new org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig[]{{
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "aliquid";
                                postClickLookbackWindowDays = 151385;
                                postViewLookbackWindowDays = 106682;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "similique";
                                postClickLookbackWindowDays = 408774;
                                postViewLookbackWindowDays = 657301;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "dolore";
                                postClickLookbackWindowDays = 945419;
                                postViewLookbackWindowDays = 493407;
                            }}),
                        }};
                        postViewCountPercentageMillis = "esse";
                    }};;
                    creativeIds = new String[]{{
                        add("laudantium"),
                        add("esse"),
                        add("eveniet"),
                    }};
                    displayName = "earum";
                    entityStatus = LineItemEntityStatusEnum.ENTITY_STATUS_ACTIVE;
                    excludeNewExchanges = false;
                    flight = new LineItemFlight() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 884765;
                                month = 263346;
                                year = 701978;
                            }};;
                            startDate = new Date() {{
                                day = 930111;
                                month = 489685;
                                year = 373449;
                            }};;
                        }};;
                        flightDateType = LineItemFlightFlightDateTypeEnum.LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED;
                    }};;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 771632;
                        maxViews = 397014;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_MONTHS;
                        timeUnitCount = 704402;
                        unlimited = false;
                    }};;
                    insertionOrderId = "ipsum";
                    integrationDetails = new IntegrationDetails() {{
                        details = "ut";
                        integrationCode = "quaerat";
                    }};;
                    lineItemType = LineItemLineItemTypeEnum.LINE_ITEM_TYPE_DISPLAY_DEFAULT;
                    mobileApp = new MobileAppInput() {{
                        appId = "praesentium";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "eveniet";
                        dailyMaxMicros = "dolor";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_FLIGHT;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_ASAP;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_ADLOOX_PREBID;
                            feeAmount = "minus";
                            feePercentageMillis = "quos";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_MEDIA_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO;
                            feeAmount = "enim";
                            feePercentageMillis = "accusamus";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_UNSPECIFIED;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID;
                            feeAmount = "tempora";
                            feePercentageMillis = "quae";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                    }};
                    partnerRevenueModel = new PartnerRevenueModel() {{
                        markupAmount = "rem";
                        markupType = PartnerRevenueModelMarkupTypeEnum.PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP;
                    }};;
                    targetingExpansion = new TargetingExpansionConfig() {{
                        excludeFirstPartyAudience = false;
                        targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum.SOME_EXPANSION;
                    }};;
                    youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput() {{
                        biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput() {{
                            type = YoutubeAndPartnersBiddingStrategyTypeEnum.YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV;
                            value = "earum";
                        }};;
                        contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum.YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED;
                        inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig() {{
                            includeYoutubeSearch = false;
                            includeYoutubeVideoPartners = false;
                            includeYoutubeVideos = false;
                        }};;
                        leadFormId = "aliquam";
                        linkedMerchantId = "labore";
                        relatedVideoIds = new String[]{{
                            add("sequi"),
                            add("saepe"),
                            add("consequatur"),
                            add("esse"),
                        }};
                        targetFrequency = new TargetFrequency() {{
                            targetCount = "debitis";
                            timeUnit = TargetFrequencyTimeUnitEnum.TIME_UNIT_HOURS;
                            timeUnitCount = 789016;
                        }};;
                        thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings() {{
                            brandLiftVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "aliquam";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_ZEFR;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "deserunt";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "reiciendis";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_DOUBLE_VERIFY;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "porro";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_ZEFR;
                                }}),
                            }};
                            brandSafetyVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "quibusdam";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MEETRICS;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "aut";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_COMSCORE;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "officia";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MEETRICS;
                                }}),
                            }};
                            reachVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "quia";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_KANTAR;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "accusantium";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                }}),
                            }};
                            viewabilityVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "molestiae";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MOAT;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "laudantium";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_MOAT;
                                }}),
                            }};
                        }};;
                        videoAdSequenceSettings = new VideoAdSequenceSettings() {{
                            minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum.VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED;
                            steps = new org.openapis.openapi.models.shared.VideoAdSequenceStep[]{{
                                add(new VideoAdSequenceStep() {{
                                    adGroupId = "expedita";
                                    interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_UNSPECIFIED;
                                    previousStepId = "repellendus";
                                    stepId = "nesciunt";
                                }}),
                                add(new VideoAdSequenceStep() {{
                                    adGroupId = "ipsa";
                                    interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_SKIP;
                                    previousStepId = "dolore";
                                    stepId = "esse";
                                }}),
                            }};
                        }};;
                        viewFrequencyCap = new FrequencyCap() {{
                            maxImpressions = 38044;
                            maxViews = 718119;
                            timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_MINUTES;
                            timeUnitCount = 463050;
                            unlimited = false;
                        }};;
                    }};;
                }};;
                accessToken = "est";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "culpa";
                key = "voluptatum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            DisplayvideoAdvertisersLineItemsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsCreate(req, new DisplayvideoAdvertisersLineItemsCreateSecurity("non", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsDelete

Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsDeleteRequest req = new DisplayvideoAdvertisersLineItemsDeleteRequest("laborum", "voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "non";
                key = "necessitatibus";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "laboriosam";
                uploadProtocol = "voluptatem";
            }};            

            DisplayvideoAdvertisersLineItemsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsDelete(req, new DisplayvideoAdvertisersLineItemsDeleteSecurity("optio", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsDuplicate

Duplicates a line item. Returns the ID of the created line item if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDuplicateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDuplicateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsDuplicateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DuplicateLineItemRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsDuplicateRequest req = new DisplayvideoAdvertisersLineItemsDuplicateRequest("sunt", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                duplicateLineItemRequest = new DuplicateLineItemRequest() {{
                    targetDisplayName = "doloremque";
                }};;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "in";
                key = "nostrum";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "dolor";
                uploadProtocol = "nisi";
            }};            

            DisplayvideoAdvertisersLineItemsDuplicateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsDuplicate(req, new DisplayvideoAdvertisersLineItemsDuplicateSecurity("dignissimos", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.duplicateLineItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsGenerateDefault

Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GenerateDefaultLineItemRequestInput;
import org.openapis.openapi.models.shared.GenerateDefaultLineItemRequestLineItemTypeEnum;
import org.openapis.openapi.models.shared.MobileAppInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsGenerateDefaultRequest req = new DisplayvideoAdvertisersLineItemsGenerateDefaultRequest("itaque") {{
                dollarXgafv = XgafvEnum.ONE;
                generateDefaultLineItemRequestInput = new GenerateDefaultLineItemRequestInput() {{
                    displayName = "est";
                    insertionOrderId = "accusantium";
                    lineItemType = GenerateDefaultLineItemRequestLineItemTypeEnum.LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP;
                    mobileApp = new MobileAppInput() {{
                        appId = "minus";
                    }};;
                }};;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "maiores";
                fields = "odio";
                key = "provident";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "similique";
                uploadProtocol = "nesciunt";
            }};            

            DisplayvideoAdvertisersLineItemsGenerateDefaultResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsGenerateDefault(req, new DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity("provident", "ex") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsGet

Gets a line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsGetRequest req = new DisplayvideoAdvertisersLineItemsGetRequest("repellendus", "unde") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "commodi";
                fields = "labore";
                key = "expedita";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "sunt";
                uploadProtocol = "enim";
            }};            

            DisplayvideoAdvertisersLineItemsGetResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsGet(req, new DisplayvideoAdvertisersLineItemsGetSecurity("nulla", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsList

Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsListRequest req = new DisplayvideoAdvertisersLineItemsListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "impedit";
                alt = AltEnum.PROTO;
                callback = "et";
                fields = "quas";
                filter = "blanditiis";
                key = "cum";
                oauthToken = "dicta";
                orderBy = "impedit";
                pageSize = 274040L;
                pageToken = "eveniet";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "sed";
                uploadProtocol = "impedit";
            }};            

            DisplayvideoAdvertisersLineItemsListResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsList(req, new DisplayvideoAdvertisersLineItemsListSecurity("quas", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLineItemsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsPatch

Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiddingStrategy;
import org.openapis.openapi.models.shared.ConversionCountingConfig;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.FixedBidStrategy;
import org.openapis.openapi.models.shared.FrequencyCap;
import org.openapis.openapi.models.shared.FrequencyCapTimeUnitEnum;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.LineItemBudgetBudgetAllocationTypeEnum;
import org.openapis.openapi.models.shared.LineItemBudgetInput;
import org.openapis.openapi.models.shared.LineItemEntityStatusEnum;
import org.openapis.openapi.models.shared.LineItemFlight;
import org.openapis.openapi.models.shared.LineItemFlightFlightDateTypeEnum;
import org.openapis.openapi.models.shared.LineItemInput;
import org.openapis.openapi.models.shared.LineItemLineItemTypeEnum;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategy;
import org.openapis.openapi.models.shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.MobileAppInput;
import org.openapis.openapi.models.shared.Pacing;
import org.openapis.openapi.models.shared.PacingPacingPeriodEnum;
import org.openapis.openapi.models.shared.PacingPacingTypeEnum;
import org.openapis.openapi.models.shared.PartnerCost;
import org.openapis.openapi.models.shared.PartnerCostCostTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostFeeTypeEnum;
import org.openapis.openapi.models.shared.PartnerCostInvoiceTypeEnum;
import org.openapis.openapi.models.shared.PartnerRevenueModel;
import org.openapis.openapi.models.shared.PartnerRevenueModelMarkupTypeEnum;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategy;
import org.openapis.openapi.models.shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
import org.openapis.openapi.models.shared.TargetFrequency;
import org.openapis.openapi.models.shared.TargetFrequencyTimeUnitEnum;
import org.openapis.openapi.models.shared.TargetingExpansionConfig;
import org.openapis.openapi.models.shared.TargetingExpansionConfigTargetingExpansionLevelEnum;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfig;
import org.openapis.openapi.models.shared.ThirdPartyVendorConfigVendorEnum;
import org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig;
import org.openapis.openapi.models.shared.VideoAdSequenceSettings;
import org.openapis.openapi.models.shared.VideoAdSequenceSettingsMinimumDurationEnum;
import org.openapis.openapi.models.shared.VideoAdSequenceStep;
import org.openapis.openapi.models.shared.VideoAdSequenceStepInteractionTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersBiddingStrategyTypeEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersInventorySourceConfig;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsContentCategoryEnum;
import org.openapis.openapi.models.shared.YoutubeAndPartnersSettingsInput;
import org.openapis.openapi.models.shared.YoutubeAndPartnersThirdPartyMeasurementSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsPatchRequest req = new DisplayvideoAdvertisersLineItemsPatchRequest("vel", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                lineItemInput = new LineItemInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "ex";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "beatae";
                            maxAverageCpmBidAmountMicros = "veritatis";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "itaque";
                            maxAverageCpmBidAmountMicros = "vero";
                            performanceGoalAmountMicros = "quidem";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED;
                        }};;
                    }};;
                    budget = new LineItemBudgetInput() {{
                        budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum.LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED;
                        maxAmount = "dignissimos";
                    }};;
                    conversionCounting = new ConversionCountingConfig() {{
                        floodlightActivityConfigs = new org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig[]{{
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "distinctio";
                                postClickLookbackWindowDays = 823341;
                                postViewLookbackWindowDays = 738152;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "suscipit";
                                postClickLookbackWindowDays = 906495;
                                postViewLookbackWindowDays = 934782;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "quod";
                                postClickLookbackWindowDays = 469588;
                                postViewLookbackWindowDays = 310930;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "ipsum";
                                postClickLookbackWindowDays = 498435;
                                postViewLookbackWindowDays = 514625;
                            }}),
                        }};
                        postViewCountPercentageMillis = "rerum";
                    }};;
                    creativeIds = new String[]{{
                        add("odit"),
                        add("ad"),
                        add("sequi"),
                    }};
                    displayName = "beatae";
                    entityStatus = LineItemEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    excludeNewExchanges = false;
                    flight = new LineItemFlight() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 456865;
                                month = 298246;
                                year = 487799;
                            }};;
                            startDate = new Date() {{
                                day = 862560;
                                month = 771406;
                                year = 586277;
                            }};;
                        }};;
                        flightDateType = LineItemFlightFlightDateTypeEnum.LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED;
                    }};;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 348665;
                        maxViews = 670430;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_HOURS;
                        timeUnitCount = 147989;
                        unlimited = false;
                    }};;
                    insertionOrderId = "maxime";
                    integrationDetails = new IntegrationDetails() {{
                        details = "dolorum";
                        integrationCode = "repellat";
                    }};;
                    lineItemType = LineItemLineItemTypeEnum.LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY;
                    mobileApp = new MobileAppInput() {{
                        appId = "illum";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "quibusdam";
                        dailyMaxMicros = "commodi";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_DAILY;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_UNSPECIFIED;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_CUSTOM_FEE1;
                            feeAmount = "optio";
                            feePercentageMillis = "ipsa";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_MEDIA_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                    }};
                    partnerRevenueModel = new PartnerRevenueModel() {{
                        markupAmount = "culpa";
                        markupType = PartnerRevenueModelMarkupTypeEnum.PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP;
                    }};;
                    targetingExpansion = new TargetingExpansionConfig() {{
                        excludeFirstPartyAudience = false;
                        targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum.TARGETING_EXPANSION_LEVEL_UNSPECIFIED;
                    }};;
                    youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput() {{
                        biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput() {{
                            type = YoutubeAndPartnersBiddingStrategyTypeEnum.YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS;
                            value = "neque";
                        }};;
                        contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum.YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED;
                        inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig() {{
                            includeYoutubeSearch = false;
                            includeYoutubeVideoPartners = false;
                            includeYoutubeVideos = false;
                        }};;
                        leadFormId = "suscipit";
                        linkedMerchantId = "harum";
                        relatedVideoIds = new String[]{{
                            add("doloremque"),
                            add("perferendis"),
                        }};
                        targetFrequency = new TargetFrequency() {{
                            targetCount = "laudantium";
                            timeUnit = TargetFrequencyTimeUnitEnum.TIME_UNIT_WEEKS;
                            timeUnitCount = 546868;
                        }};;
                        thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings() {{
                            brandLiftVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "quis";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_COMSCORE;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "ab";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                }}),
                            }};
                            brandSafetyVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "sapiente";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                }}),
                            }};
                            reachVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "iure";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_NIELSEN;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "provident";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_TELEMETRY;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "nam";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_COMSCORE;
                                }}),
                            }};
                            viewabilityVendorConfigs = new org.openapis.openapi.models.shared.ThirdPartyVendorConfig[]{{
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "ipsam";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE;
                                }}),
                                add(new ThirdPartyVendorConfig() {{
                                    placementId = "tempora";
                                    vendor = ThirdPartyVendorConfigVendorEnum.THIRD_PARTY_VENDOR_UNSPECIFIED;
                                }}),
                            }};
                        }};;
                        videoAdSequenceSettings = new VideoAdSequenceSettings() {{
                            minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum.VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK;
                            steps = new org.openapis.openapi.models.shared.VideoAdSequenceStep[]{{
                                add(new VideoAdSequenceStep() {{
                                    adGroupId = "fugiat";
                                    interactionType = VideoAdSequenceStepInteractionTypeEnum.INTERACTION_TYPE_PAID_VIEW;
                                    previousStepId = "doloremque";
                                    stepId = "cum";
                                }}),
                            }};
                        }};;
                        viewFrequencyCap = new FrequencyCap() {{
                            maxImpressions = 751298;
                            maxViews = 628314;
                            timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_HOURS;
                            timeUnitCount = 769789;
                            unlimited = false;
                        }};;
                    }};;
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "fugiat";
                key = "laboriosam";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "enim";
                updateMask = "maiores";
                uploadType = "consectetur";
                uploadProtocol = "necessitatibus";
            }};            

            DisplayvideoAdvertisersLineItemsPatchResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsPatch(req, new DisplayvideoAdvertisersLineItemsPatchSecurity("maxime", "cupiditate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
import org.openapis.openapi.models.shared.Adloox;
import org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsAppPlatformEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AppCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AssignedTargetingOptionInput;
import org.openapis.openapi.models.shared.AudienceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BrowserAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.CarrierAndIspAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.CombinedAudienceGroup;
import org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting;
import org.openapis.openapi.models.shared.ContentDurationAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentGenreAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentStreamTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CustomListGroup;
import org.openapis.openapi.models.shared.CustomListTargetingSetting;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
import org.openapis.openapi.models.shared.DeviceMakeModelAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
import org.openapis.openapi.models.shared.DoubleVerify;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRating;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
import org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategories;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewability;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityViewableDuringEnum;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTraffic;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewability;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoViewableRateEnum;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetailsExchangeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetailsGenderEnum;
import org.openapis.openapi.models.shared.GeoRegionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.GoogleAudienceGroup;
import org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
import org.openapis.openapi.models.shared.IntegralAdScience;
import org.openapis.openapi.models.shared.IntegralAdScienceDisplayViewabilityEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdFraudRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdultRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAlcoholRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedDrugsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedGamblingRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedHateSpeechRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedViolenceRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceTraqScoreOptionEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceVideoViewabilityEnum;
import org.openapis.openapi.models.shared.InventorySourceAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.InventorySourceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.KeywordAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.LanguageAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetailsOmidEnum;
import org.openapis.openapi.models.shared.OnScreenPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.OperatingSystemAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.YoutubeVideoAssignedTargetingOptionDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest("voluptatem", "provident", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_USER_REWARDED_CONTENT) {{
                dollarXgafv = XgafvEnum.ONE;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5564;
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "repellat";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "omnis";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_IOS;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "cum";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "possimus";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "nostrum";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "sequi";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "quasi";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "error";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "nobis";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "voluptate";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "eius";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "voluptates";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "voluptatem";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "ea";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "aliquam";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "maiores";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "asperiores";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "autem";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "nesciunt";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_MUSIC;
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "animi";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "provident";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 1064.95;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "mollitia";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "nam";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "assumenda";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "quo";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "fuga";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "tempore";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "suscipit";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.WEDNESDAY;
                        endHour = 393122;
                        startHour = 397160;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "laboriosam";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNSPECIFIED;
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_APP;
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_NEXSTAR_DIGITAL;
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "alias";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNKNOWN;
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "consequuntur";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "vitae";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "quidem";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "sequi";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "exercitationem";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "praesentium";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "unde";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 7532.61;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                        targetingOptionId = "amet";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "debitis";
                        proximityRadius = 7513.81;
                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_KILOMETERS;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "temporibus";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_RELIGION;
                    }};;
                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "quibusdam";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                }};
                            }};;
                            customSegmentId = "atque";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE55_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.FRAUD_UNSPECIFIED;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY55_PERCENT_HIHGER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("a"),
                                add("qui"),
                                add("accusantium"),
                                add("commodi"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ600;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "facere";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "maxime";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY_UNSPECIFIED;
                    }};;
                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                        channelId = "ex";
                        negative = false;
                    }};;
                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                        negative = false;
                        videoId = "consectetur";
                    }};;
                }};;
                accessToken = "maiores";
                alt = AltEnum.JSON;
                callback = "animi";
                fields = "sequi";
                key = "eligendi";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "laborum";
                uploadProtocol = "omnis";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity("nihil", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest("sapiente", "velit", "adipisci", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_PARENTAL_STATUS) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "molestias";
                key = "ipsam";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "perspiciatis";
                uploadProtocol = "voluptates";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity("eum", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest("quas", "odio", "commodi", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_POI) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "et";
                key = "nulla";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "illum";
                uploadProtocol = "a";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity("impedit", "unde") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a line item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest("ut", "facere", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_HOUSEHOLD_INCOME) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "dignissimos";
                filter = "iste";
                key = "provident";
                oauthToken = "dolor";
                orderBy = "sint";
                pageSize = 44252L;
                pageToken = "eaque";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "laboriosam";
                uploadProtocol = "laborum";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity("autem", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLineItemAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersList

Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersListRequest req = new DisplayvideoAdvertisersListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "alias";
                filter = "velit";
                key = "ullam";
                oauthToken = "quis";
                orderBy = "velit";
                pageSize = 188732L;
                pageToken = "quas";
                partnerId = "maxime";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "cumque";
                uploadProtocol = "doloremque";
            }};            

            DisplayvideoAdvertisersListResponse res = sdk.advertisers.displayvideoAdvertisersList(req, new DisplayvideoAdvertisersListSecurity("totam", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAdvertisersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersListAssignedTargetingOptions

Lists assigned targeting options of an advertiser across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersListAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersListAssignedTargetingOptionsRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "necessitatibus";
                fields = "iste";
                filter = "dicta";
                key = "ipsam";
                oauthToken = "consequuntur";
                orderBy = "cumque";
                pageSize = 696219L;
                pageToken = "non";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "sunt";
                uploadProtocol = "molestias";
            }};            

            DisplayvideoAdvertisersListAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersListAssignedTargetingOptions(req, new DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity("beatae", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListAdvertiserAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit

Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedLocationInput;
import org.openapis.openapi.models.shared.BulkEditAssignedLocationsRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest("ducimus", "libero") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditAssignedLocationsRequestInput = new BulkEditAssignedLocationsRequestInput() {{
                    createdAssignedLocations = new org.openapis.openapi.models.shared.AssignedLocationInput[]{{
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "ipsum";
                        }}),
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "impedit";
                        }}),
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "quos";
                        }}),
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "illum";
                        }}),
                    }};
                    deletedAssignedLocations = new String[]{{
                        add("voluptatem"),
                        add("non"),
                        add("quaerat"),
                    }};
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "commodi";
                key = "quibusdam";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "quaerat";
                uploadProtocol = "earum";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity("tenetur", "assumenda") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditAssignedLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsCreate

Creates an assignment between a location and a location list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AssignedLocationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest("dolore", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                assignedLocationInput = new AssignedLocationInput() {{
                    targetingOptionId = "perspiciatis";
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "quibusdam";
                fields = "dicta";
                key = "quia";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "neque";
                uploadType = "quibusdam";
                uploadProtocol = "numquam";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsCreate(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity("rem", "officiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedLocation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsDelete

Deletes the assignment between a location and a location list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest("omnis", "neque", "corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "excepturi";
                fields = "recusandae";
                key = "quos";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "ipsum";
                uploadProtocol = "consequatur";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsDelete(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity("soluta", "necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsList

Lists locations assigned to a location list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest("sequi", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.JSON;
                callback = "aperiam";
                fields = "dolores";
                filter = "illum";
                key = "iusto";
                oauthToken = "magni";
                orderBy = "beatae";
                pageSize = 396884L;
                pageToken = "ad";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "vel";
                uploadProtocol = "minima";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsList(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity("sit", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAssignedLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsCreate

Creates a new location list. Returns the newly created location list if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocationListInput;
import org.openapis.openapi.models.shared.LocationListLocationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsCreateRequest req = new DisplayvideoAdvertisersLocationListsCreateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                locationListInput = new LocationListInput() {{
                    advertiserId = "quasi";
                    displayName = "rem";
                    locationType = LocationListLocationTypeEnum.TARGETING_LOCATION_TYPE_PROXIMITY;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "facere";
                key = "sed";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "unde";
                uploadProtocol = "deserunt";
            }};            

            DisplayvideoAdvertisersLocationListsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsCreate(req, new DisplayvideoAdvertisersLocationListsCreateSecurity("repellendus", "consequatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.locationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsList

Lists location lists based on a given advertiser id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsListRequest req = new DisplayvideoAdvertisersLocationListsListRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "optio";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "cumque";
                filter = "maxime";
                key = "et";
                oauthToken = "beatae";
                orderBy = "id";
                pageSize = 9060L;
                pageToken = "quos";
                prettyPrint = false;
                quotaUser = "ratione";
                uploadType = "iure";
                uploadProtocol = "tempora";
            }};            

            DisplayvideoAdvertisersLocationListsListResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsList(req, new DisplayvideoAdvertisersLocationListsListSecurity("eos", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLocationListsPatch

Updates a location list. Returns the updated location list if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLocationListsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.LocationListInput;
import org.openapis.openapi.models.shared.LocationListLocationTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLocationListsPatchRequest req = new DisplayvideoAdvertisersLocationListsPatchRequest("voluptatem", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                locationListInput = new LocationListInput() {{
                    advertiserId = "facilis";
                    displayName = "laudantium";
                    locationType = LocationListLocationTypeEnum.TARGETING_LOCATION_TYPE_PROXIMITY;
                }};;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "quaerat";
                key = "corporis";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "iusto";
                updateMask = "sapiente";
                uploadType = "esse";
                uploadProtocol = "neque";
            }};            

            DisplayvideoAdvertisersLocationListsPatchResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsPatch(req, new DisplayvideoAdvertisersLocationListsPatchSecurity("quidem", "quisquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.locationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersActivate

Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersActivateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersActivateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersActivateRequest req = new DisplayvideoAdvertisersManualTriggersActivateRequest("praesentium", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sequi", "magni");
                    put("voluptatem", "est");
                    put("amet", "veritatis");
                    put("error", "voluptatibus");
                }};
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "dolorum";
                fields = "quibusdam";
                key = "earum";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "molestiae";
                uploadProtocol = "impedit";
            }};            

            DisplayvideoAdvertisersManualTriggersActivateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersActivate(req, new DisplayvideoAdvertisersManualTriggersActivateSecurity("error", "animi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.manualTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersCreate

Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ManualTriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersCreateRequest req = new DisplayvideoAdvertisersManualTriggersCreateRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.ONE;
                manualTriggerInput = new ManualTriggerInput() {{
                    activationDurationMinutes = "nihil";
                    advertiserId = "facilis";
                    displayName = "optio";
                }};;
                accessToken = "incidunt";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "dolores";
                key = "aliquid";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "ad";
                uploadProtocol = "quos";
            }};            

            DisplayvideoAdvertisersManualTriggersCreateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersCreate(req, new DisplayvideoAdvertisersManualTriggersCreateSecurity("illo", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.manualTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersDeactivate

Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersDeactivateRequest req = new DisplayvideoAdvertisersManualTriggersDeactivateRequest("quibusdam", "fugiat") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("atque", "voluptates");
                    put("maiores", "nemo");
                    put("illo", "doloribus");
                }};
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "cumque";
                key = "ipsam";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "accusamus";
                uploadProtocol = "quisquam";
            }};            

            DisplayvideoAdvertisersManualTriggersDeactivateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersDeactivate(req, new DisplayvideoAdvertisersManualTriggersDeactivateSecurity("quasi", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.manualTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersGet

Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersGetRequest req = new DisplayvideoAdvertisersManualTriggersGetRequest("quo", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "ipsa";
                fields = "accusamus";
                key = "placeat";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "delectus";
                uploadProtocol = "saepe";
            }};            

            DisplayvideoAdvertisersManualTriggersGetResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersGet(req, new DisplayvideoAdvertisersManualTriggersGetSecurity("facere", "nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.manualTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersList

Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersListRequest req = new DisplayvideoAdvertisersManualTriggersListRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "incidunt";
                filter = "numquam";
                key = "corrupti";
                oauthToken = "similique";
                orderBy = "dolore";
                pageSize = 456599L;
                pageToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "amet";
                uploadProtocol = "occaecati";
            }};            

            DisplayvideoAdvertisersManualTriggersListResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersList(req, new DisplayvideoAdvertisersManualTriggersListSecurity("aut", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listManualTriggersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersManualTriggersPatch

Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersManualTriggersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ManualTriggerInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersManualTriggersPatchRequest req = new DisplayvideoAdvertisersManualTriggersPatchRequest("minima", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                manualTriggerInput = new ManualTriggerInput() {{
                    activationDurationMinutes = "quas";
                    advertiserId = "voluptatem";
                    displayName = "provident";
                }};;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "vero";
                fields = "fuga";
                key = "facilis";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "error";
                updateMask = "recusandae";
                uploadType = "a";
                uploadProtocol = "consectetur";
            }};            

            DisplayvideoAdvertisersManualTriggersPatchResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersPatch(req, new DisplayvideoAdvertisersManualTriggersPatchSecurity("sapiente", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.manualTrigger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsCreate

Creates a new negative keyword list. Returns the newly created negative keyword list if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsCreateRequest req = new DisplayvideoAdvertisersNegativeKeywordListsCreateRequest("assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                negativeKeywordListInput = new NegativeKeywordListInput() {{
                    displayName = "omnis";
                }};;
                accessToken = "delectus";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "aut";
                key = "quam";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "similique";
                uploadType = "asperiores";
                uploadProtocol = "modi";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsCreateResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsCreate(req, new DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity("facere", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.negativeKeywordList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsList

Lists negative keyword lists based on a given advertiser id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsListRequest req = new DisplayvideoAdvertisersNegativeKeywordListsListRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                alt = AltEnum.JSON;
                callback = "porro";
                fields = "fugiat";
                key = "soluta";
                oauthToken = "ipsa";
                pageSize = 967047L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "eos";
                uploadProtocol = "quas";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsListResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsList(req, new DisplayvideoAdvertisersNegativeKeywordListsListSecurity("quasi", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNegativeKeywordListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit

Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkEditNegativeKeywordsRequestInput;
import org.openapis.openapi.models.shared.NegativeKeywordInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest("praesentium", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditNegativeKeywordsRequestInput = new BulkEditNegativeKeywordsRequestInput() {{
                    createdNegativeKeywords = new org.openapis.openapi.models.shared.NegativeKeywordInput[]{{
                        add(new NegativeKeywordInput() {{
                            keywordValue = "iure";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "laudantium";
                        }}),
                    }};
                    deletedNegativeKeywords = new String[]{{
                        add("magnam"),
                        add("accusamus"),
                    }};
                }};;
                accessToken = "nulla";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "praesentium";
                key = "enim";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "quae";
                uploadProtocol = "eum";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity("nostrum", "eveniet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditNegativeKeywordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete

Deletes a negative keyword from a negative keyword list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest("laboriosam", "ratione", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "dolores";
                key = "consequatur";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "quia";
                uploadType = "quidem";
                uploadProtocol = "voluptas";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity("quo", "laudantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList

Lists negative keywords in a negative keyword list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest("dignissimos", "omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "quidem";
                fields = "molestiae";
                filter = "debitis";
                key = "vitae";
                oauthToken = "dolor";
                orderBy = "ad";
                pageSize = 539886L;
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "reprehenderit";
                uploadProtocol = "deserunt";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity("itaque", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listNegativeKeywordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace

Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NegativeKeywordInput;
import org.openapis.openapi.models.shared.ReplaceNegativeKeywordsRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest("eos", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                replaceNegativeKeywordsRequestInput = new ReplaceNegativeKeywordsRequestInput() {{
                    newNegativeKeywords = new org.openapis.openapi.models.shared.NegativeKeywordInput[]{{
                        add(new NegativeKeywordInput() {{
                            keywordValue = "natus";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "vitae";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "tenetur";
                        }}),
                    }};
                }};;
                accessToken = "laudantium";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "repudiandae";
                key = "dicta";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "iusto";
                uploadProtocol = "inventore";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity("voluptate", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.replaceNegativeKeywordsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersNegativeKeywordListsPatch

Updates a negative keyword list. Returns the updated negative keyword list if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersNegativeKeywordListsPatchRequest req = new DisplayvideoAdvertisersNegativeKeywordListsPatchRequest("dolorem", "eaque") {{
                dollarXgafv = XgafvEnum.ONE;
                negativeKeywordListInput = new NegativeKeywordListInput() {{
                    displayName = "amet";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "minus";
                key = "a";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "totam";
                updateMask = "cupiditate";
                uploadType = "at";
                uploadProtocol = "doloribus";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsPatchResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsPatch(req, new DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity("omnis", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.negativeKeywordList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersPatch

Updates an existing advertiser. Returns the updated advertiser if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersPatchSecurity;
import org.openapis.openapi.models.shared.AdvertiserAdServerConfig;
import org.openapis.openapi.models.shared.AdvertiserBillingConfig;
import org.openapis.openapi.models.shared.AdvertiserCreativeConfig;
import org.openapis.openapi.models.shared.AdvertiserDataAccessConfig;
import org.openapis.openapi.models.shared.AdvertiserEntityStatusEnum;
import org.openapis.openapi.models.shared.AdvertiserGeneralConfigInput;
import org.openapis.openapi.models.shared.AdvertiserInput;
import org.openapis.openapi.models.shared.AdvertiserSdfConfig;
import org.openapis.openapi.models.shared.AdvertiserTargetingConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CmHybridConfig;
import org.openapis.openapi.models.shared.IntegrationDetails;
import org.openapis.openapi.models.shared.SdfConfig;
import org.openapis.openapi.models.shared.SdfConfigVersionEnum;
import org.openapis.openapi.models.shared.ThirdPartyOnlyConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersPatchRequest req = new DisplayvideoAdvertisersPatchRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiserInput = new AdvertiserInput() {{
                    adServerConfig = new AdvertiserAdServerConfig() {{
                        cmHybridConfig = new CmHybridConfig() {{
                            cmAccountId = "sequi";
                            cmFloodlightConfigId = "quis";
                            cmFloodlightLinkingAuthorized = false;
                            cmSyncableSiteIds = new String[]{{
                                add("vel"),
                                add("rem"),
                            }};
                            dv360ToCmCostReportingEnabled = false;
                            dv360ToCmDataSharingEnabled = false;
                        }};;
                        thirdPartyOnlyConfig = new ThirdPartyOnlyConfig() {{
                            pixelOrderIdReportingEnabled = false;
                        }};;
                    }};;
                    billingConfig = new AdvertiserBillingConfig() {{
                        billingProfileId = "aliquid";
                    }};;
                    creativeConfig = new AdvertiserCreativeConfig() {{
                        dynamicCreativeEnabled = false;
                        iasClientId = "aperiam";
                        obaComplianceDisabled = false;
                        videoCreativeDataSharingAuthorized = false;
                    }};;
                    dataAccessConfig = new AdvertiserDataAccessConfig() {{
                        sdfConfig = new AdvertiserSdfConfig() {{
                            overridePartnerSdfConfig = false;
                            sdfConfig = new SdfConfig() {{
                                adminEmail = "perspiciatis";
                                version = SdfConfigVersionEnum.SDF_VERSION31;
                            }};;
                        }};;
                    }};;
                    displayName = "itaque";
                    entityStatus = AdvertiserEntityStatusEnum.ENTITY_STATUS_DRAFT;
                    generalConfig = new AdvertiserGeneralConfigInput() {{
                        currencyCode = "cumque";
                        domainUrl = "dolor";
                    }};;
                    integrationDetails = new IntegrationDetails() {{
                        details = "repellendus";
                        integrationCode = "temporibus";
                    }};;
                    partnerId = "minus";
                    prismaEnabled = false;
                    servingConfig = new AdvertiserTargetingConfig() {{
                        exemptTvFromViewabilityTargeting = false;
                    }};;
                }};;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "beatae";
                fields = "vitae";
                key = "veritatis";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "earum";
                updateMask = "laborum";
                uploadType = "dicta";
                uploadProtocol = "voluptatem";
            }};            

            DisplayvideoAdvertisersPatchResponse res = sdk.advertisers.displayvideoAdvertisersPatch(req, new DisplayvideoAdvertisersPatchSecurity("odit", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advertiser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
import org.openapis.openapi.models.shared.Adloox;
import org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsAppPlatformEnum;
import org.openapis.openapi.models.shared.AppAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AppCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.AssignedTargetingOptionInput;
import org.openapis.openapi.models.shared.AudienceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
import org.openapis.openapi.models.shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BrowserAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.CarrierAndIspAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.CombinedAudienceGroup;
import org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting;
import org.openapis.openapi.models.shared.ContentDurationAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentGenreAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
import org.openapis.openapi.models.shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ContentStreamTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.CustomListGroup;
import org.openapis.openapi.models.shared.CustomListTargetingSetting;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
import org.openapis.openapi.models.shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
import org.openapis.openapi.models.shared.DeviceMakeModelAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
import org.openapis.openapi.models.shared.DoubleVerify;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRating;
import org.openapis.openapi.models.shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
import org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategories;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewability;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyDisplayViewabilityViewableDuringEnum;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTraffic;
import org.openapis.openapi.models.shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewability;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoIabEnum;
import org.openapis.openapi.models.shared.DoubleVerifyVideoViewabilityVideoViewableRateEnum;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ExchangeAssignedTargetingOptionDetailsExchangeEnum;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting;
import org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.GenderAssignedTargetingOptionDetailsGenderEnum;
import org.openapis.openapi.models.shared.GeoRegionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.GoogleAudienceGroup;
import org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
import org.openapis.openapi.models.shared.IntegralAdScience;
import org.openapis.openapi.models.shared.IntegralAdScienceDisplayViewabilityEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdFraudRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAdultRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedAlcoholRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedDrugsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedGamblingRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedHateSpeechRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceExcludedViolenceRiskEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceTraqScoreOptionEnum;
import org.openapis.openapi.models.shared.IntegralAdScienceVideoViewabilityEnum;
import org.openapis.openapi.models.shared.InventorySourceAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.InventorySourceGroupAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.KeywordAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.LanguageAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
import org.openapis.openapi.models.shared.NegativeKeywordListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.OmidAssignedTargetingOptionDetailsOmidEnum;
import org.openapis.openapi.models.shared.OnScreenPositionAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.OperatingSystemAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.YoutubeChannelAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.YoutubeVideoAssignedTargetingOptionDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest("pariatur", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_DEVICE_TYPE) {{
                dollarXgafv = XgafvEnum.ONE;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE1824;
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "est";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "quaerat";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_SAMSUNG_TV;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "omnis";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "officiis";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "expedita";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "quia";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "vitae";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "quas";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "ipsa";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "placeat";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "quod";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "eligendi";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "distinctio";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "assumenda";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "soluta";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "laudantium";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "doloremque";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "corrupti";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "facilis";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "aliquam";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 9229.15;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "natus";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "ab";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "officiis";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "eum";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "rerum";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "placeat";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "blanditiis";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                        endHour = 286486;
                        startHour = 773889;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "earum";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails() {{
                        excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum.CONTENT_RATING_TIER_UNRATED;
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum.EXCHANGE_STROER;
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "itaque";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "consectetur";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "modi";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "aspernatur";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "explicabo";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "ipsa";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "sint";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "nobis";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 374.77;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "impedit";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "recusandae";
                        proximityRadius = 4518.31;
                        proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum.PROXIMITY_RADIUS_UNIT_MILES;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "est";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails() {{
                        excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum.SENSITIVE_CATEGORY_ADULT;
                    }};;
                    sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails() {{
                        sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum.SESSION_POSITION_FIRST_IMPRESSION;
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "quibusdam";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_POINT5_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NEGATIVE_NEWS_FINANCIAL),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                }};
                            }};;
                            customSegmentId = "dignissimos";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD4;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.VIDEO_IAB_UNSPECIFIED;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("delectus"),
                                add("deserunt"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ250;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "dicta";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "qui";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY_UNSPECIFIED;
                    }};;
                    youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails() {{
                        channelId = "amet";
                        negative = false;
                    }};;
                    youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails() {{
                        negative = false;
                        videoId = "consequatur";
                    }};;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "hic";
                key = "ullam";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "distinctio";
                uploadProtocol = "iusto";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity("dignissimos", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest("occaecati", "assumenda", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_AGE_RANGE) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "quasi";
                key = "repellat";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "perspiciatis";
                uploadProtocol = "amet";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity("corrupti", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest("nemo", "delectus", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CONTENT_STREAM_TYPE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "quos";
                key = "in";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "sed";
                uploadProtocol = "minus";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity("consequuntur", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest("delectus", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_AUTHORIZED_SELLER_STATUS) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "illo";
                filter = "nobis";
                key = "esse";
                oauthToken = "nisi";
                orderBy = "explicabo";
                pageSize = 197441L;
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "quos";
                uploadProtocol = "numquam";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity("vitae", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listAdvertiserAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupAdsGet

Gets a YouTube ad group ad.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest req = new DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest("nam", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "assumenda";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "hic";
                key = "repellendus";
                oauthToken = "nam";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "magnam";
                uploadProtocol = "pariatur";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupAdsGetResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupAdsGet(req, new DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity("expedita", "autem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.youtubeAdGroupAd != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupAdsList

Lists YouTube ad group ads.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest req = new DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "laudantium";
                filter = "corporis";
                key = "excepturi";
                oauthToken = "natus";
                orderBy = "deleniti";
                pageSize = 900411L;
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "laborum";
                uploadProtocol = "vero";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupAdsListResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupAdsList(req, new DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity("eos", "voluptatem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listYoutubeAdGroupAdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions

Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.MEDIA;
                callback = "a";
                fields = "minus";
                filter = "sed";
                key = "nam";
                oauthToken = "quia";
                orderBy = "iusto";
                pageSize = 70088L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "blanditiis";
                uploadProtocol = "sint";
                youtubeAdGroupIds = new String[]{{
                    add("ullam"),
                    add("molestiae"),
                    add("itaque"),
                    add("rem"),
                }};
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions(req, new DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity("nemo", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListAdGroupAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupsGet

Gets a YouTube ad group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupsGetRequest req = new DisplayvideoAdvertisersYoutubeAdGroupsGetRequest("recusandae", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "quibusdam";
                key = "magni";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "eius";
                uploadProtocol = "commodi";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupsGetResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupsGet(req, new DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity("ipsam", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.youtubeAdGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupsList

Lists YouTube ad groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupsListRequest req = new DisplayvideoAdvertisersYoutubeAdGroupsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.JSON;
                callback = "modi";
                fields = "doloremque";
                filter = "odio";
                key = "sit";
                oauthToken = "voluptatum";
                orderBy = "tempora";
                pageSize = 962411L;
                pageToken = "quam";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "libero";
                uploadProtocol = "ratione";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupsListResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupsList(req, new DisplayvideoAdvertisersYoutubeAdGroupsListSecurity("molestiae", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listYoutubeAdGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest("saepe", "maiores", DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CHANNEL, "sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "occaecati";
                key = "labore";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "exercitationem";
                uploadProtocol = "veniam";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity("modi", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.assignedTargetingOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest("quae", DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_CATEGORY, "possimus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "sint";
                fields = "est";
                filter = "doloribus";
                key = "provident";
                oauthToken = "alias";
                orderBy = "deserunt";
                pageSize = 145450L;
                pageToken = "autem";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "molestiae";
                uploadProtocol = "maxime";
            }};            

            DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity("facere", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listYoutubeAdGroupAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
