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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAssetsUploadRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAssetsUploadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersAssetsUploadRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = 'magnam';
    $request->accessToken = 'debitis';
    $request->advertiserId = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->key = 'molestiae';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new DisplayvideoAdvertisersAssetsUploadSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersAssetsUpload($request, $requestSecurity);

    if ($response->createAssetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersAudit

Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAuditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersAuditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersAuditRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nisi';
    $request->advertiserId = 'recusandae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ab';
    $request->fields = 'quis';
    $request->key = 'veritatis';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->readMask = 'ipsam';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'sapiente';

    $requestSecurity = new DisplayvideoAdvertisersAuditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersAudit($request, $requestSecurity);

    if ($response->auditAdvertiserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsCreate

Creates a new campaign. Returns the newly created campaign if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignInput;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudget;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudgetBudgetUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudgetExternalBudgetSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrismaConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrismaCpeCode;
use \OpenAPI\OpenAPI\Models\Shared\PrismaConfigPrismaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignFlight;
use \OpenAPI\OpenAPI\Models\Shared\CampaignGoal;
use \OpenAPI\OpenAPI\Models\Shared\CampaignGoalCampaignGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoal;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaignInput = new CampaignInput();
    $request->campaignInput->campaignBudgets = [
        new CampaignBudget(),
    ];
    $request->campaignInput->campaignFlight = new CampaignFlight();
    $request->campaignInput->campaignFlight->plannedDates = new DateRange();
    $request->campaignInput->campaignFlight->plannedDates->endDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->endDate->day = 870013;
    $request->campaignInput->campaignFlight->plannedDates->endDate->month = 870088;
    $request->campaignInput->campaignFlight->plannedDates->endDate->year = 978619;
    $request->campaignInput->campaignFlight->plannedDates->startDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->startDate->day = 473608;
    $request->campaignInput->campaignFlight->plannedDates->startDate->month = 799159;
    $request->campaignInput->campaignFlight->plannedDates->startDate->year = 800911;
    $request->campaignInput->campaignFlight->plannedSpendAmountMicros = 'esse';
    $request->campaignInput->campaignGoal = new CampaignGoal();
    $request->campaignInput->campaignGoal->campaignGoalType = CampaignGoalCampaignGoalTypeEnum::CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS;
    $request->campaignInput->campaignGoal->performanceGoal = new PerformanceGoal();
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalAmountMicros = 'porro';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalPercentageMicros = 'dolorum';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalString = 'dicta';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_VCPM;
    $request->campaignInput->displayName = 'officia';
    $request->campaignInput->entityStatus = CampaignEntityStatusEnum::ENTITY_STATUS_DRAFT;
    $request->campaignInput->frequencyCap = new FrequencyCap();
    $request->campaignInput->frequencyCap->maxImpressions = 143353;
    $request->campaignInput->frequencyCap->maxViews = 537373;
    $request->campaignInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MINUTES;
    $request->campaignInput->frequencyCap->timeUnitCount = 758616;
    $request->campaignInput->frequencyCap->unlimited = false;
    $request->accessToken = 'totam';
    $request->advertiserId = 'beatae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'modi';
    $request->key = 'qui';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsCreateSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersCampaignsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsCreate($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsDelete

Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aspernatur';
    $request->advertiserId = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'natus';
    $request->campaignId = 'sed';
    $request->fields = 'iste';
    $request->key = 'dolor';
    $request->oauthToken = 'natus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laboriosam';
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsDeleteSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersCampaignsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsGet

Gets a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'in';
    $request->advertiserId = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->campaignId = 'saepe';
    $request->fields = 'quidem';
    $request->key = 'architecto';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsGetSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersCampaignsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsGet($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsList

Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolores';
    $request->advertiserId = 'dolorem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'explicabo';
    $request->fields = 'nobis';
    $request->filter = 'enim';
    $request->key = 'omnis';
    $request->oauthToken = 'nemo';
    $request->orderBy = 'minima';
    $request->pageSize = 570197;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsListSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersCampaignsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsList($request, $requestSecurity);

    if ($response->listCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsListAssignedTargetingOptions

Lists assigned targeting options of a campaign across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->advertiserId = 'mollitia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->campaignId = 'consequuntur';
    $request->fields = 'repellat';
    $request->filter = 'mollitia';
    $request->key = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->orderBy = 'commodi';
    $request->pageSize = 466311;
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsListAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListCampaignAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsPatch

Updates an existing campaign. Returns the updated campaign if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignInput;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudget;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudgetBudgetUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\CampaignBudgetExternalBudgetSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\PrismaConfig;
use \OpenAPI\OpenAPI\Models\Shared\PrismaCpeCode;
use \OpenAPI\OpenAPI\Models\Shared\PrismaConfigPrismaTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignFlight;
use \OpenAPI\OpenAPI\Models\Shared\CampaignGoal;
use \OpenAPI\OpenAPI\Models\Shared\CampaignGoalCampaignGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoal;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CampaignEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->campaignInput = new CampaignInput();
    $request->campaignInput->campaignBudgets = [
        new CampaignBudget(),
    ];
    $request->campaignInput->campaignFlight = new CampaignFlight();
    $request->campaignInput->campaignFlight->plannedDates = new DateRange();
    $request->campaignInput->campaignFlight->plannedDates->endDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->endDate->day = 674752;
    $request->campaignInput->campaignFlight->plannedDates->endDate->month = 656330;
    $request->campaignInput->campaignFlight->plannedDates->endDate->year = 317202;
    $request->campaignInput->campaignFlight->plannedDates->startDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->startDate->day = 138183;
    $request->campaignInput->campaignFlight->plannedDates->startDate->month = 778346;
    $request->campaignInput->campaignFlight->plannedDates->startDate->year = 196582;
    $request->campaignInput->campaignFlight->plannedSpendAmountMicros = 'tenetur';
    $request->campaignInput->campaignGoal = new CampaignGoal();
    $request->campaignInput->campaignGoal->campaignGoalType = CampaignGoalCampaignGoalTypeEnum::CAMPAIGN_GOAL_TYPE_APP_INSTALL;
    $request->campaignInput->campaignGoal->performanceGoal = new PerformanceGoal();
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalAmountMicros = 'id';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalPercentageMicros = 'possimus';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalString = 'aut';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_CPM;
    $request->campaignInput->displayName = 'error';
    $request->campaignInput->entityStatus = CampaignEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->campaignInput->frequencyCap = new FrequencyCap();
    $request->campaignInput->frequencyCap->maxImpressions = 673660;
    $request->campaignInput->frequencyCap->maxViews = 96098;
    $request->campaignInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MINUTES;
    $request->campaignInput->frequencyCap->timeUnitCount = 976460;
    $request->campaignInput->frequencyCap->unlimited = false;
    $request->accessToken = 'vero';
    $request->advertiserId = 'nihil';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->campaignId = 'ipsa';
    $request->fields = 'omnis';
    $request->key = 'voluptate';
    $request->oauthToken = 'cum';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->updateMask = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsPatchSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersCampaignsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsPatch($request, $requestSecurity);

    if ($response->campaign !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->advertiserId = 'corporis';
    $request->alt = AltEnum::JSON;
    $request->assignedTargetingOptionId = 'iusto';
    $request->callback = 'dicta';
    $request->campaignId = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->targetingType = DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_APP;
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a campaign for a specified targeting type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->advertiserId = 'pariatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->campaignId = 'rem';
    $request->fields = 'voluptates';
    $request->filter = 'quasi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'sint';
    $request->orderBy = 'veritatis';
    $request->pageSize = 929297;
    $request->pageToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->targetingType = DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_UNSPECIFIED;
    $request->uploadType = 'est';
    $request->uploadProtocol = 'quibusdam';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listCampaignAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsCreate

Creates a new channel. Returns the newly created channel if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'deserunt';
    $request->channelInput->displayName = 'distinctio';
    $request->channelInput->partnerId = 'quibusdam';
    $request->accessToken = 'labore';
    $request->advertiserId = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aliquid';
    $request->fields = 'cupiditate';
    $request->key = 'quos';
    $request->oauthToken = 'perferendis';
    $request->partnerId = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new DisplayvideoAdvertisersChannelsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsCreate($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsList

Lists channels for a partner or advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorum';
    $request->advertiserId = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->filter = 'labore';
    $request->key = 'delectus';
    $request->oauthToken = 'eum';
    $request->orderBy = 'non';
    $request->pageSize = 756107;
    $request->pageToken = 'sint';
    $request->partnerId = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DisplayvideoAdvertisersChannelsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsList($request, $requestSecurity);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsPatch

Updates a channel. Returns the updated channel if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'dolor';
    $request->channelInput->displayName = 'debitis';
    $request->channelInput->partnerId = 'a';
    $request->accessToken = 'dolorum';
    $request->advertiserId = 'in';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'illum';
    $request->channelId = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->partnerId = 'cumque';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->updateMask = 'ea';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'laborum';

    $requestSecurity = new DisplayvideoAdvertisersChannelsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsPatch($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsSitesBulkEdit

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesBulkEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditSitesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesBulkEditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsSitesBulkEditRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditSitesRequestInput = new BulkEditSitesRequestInput();
    $request->bulkEditSitesRequestInput->advertiserId = 'non';
    $request->bulkEditSitesRequestInput->createdSites = [
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
    ];
    $request->bulkEditSitesRequestInput->deletedSites = [
        'accusamus',
        'delectus',
    ];
    $request->bulkEditSitesRequestInput->partnerId = 'quidem';
    $request->accessToken = 'provident';
    $request->advertiserId = 'nam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->channelId = 'deleniti';
    $request->fields = 'sapiente';
    $request->key = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DisplayvideoAdvertisersChannelsSitesBulkEditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsSitesBulkEdit($request, $requestSecurity);

    if ($response->bulkEditSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsSitesDelete

Deletes a site from a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsSitesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->advertiserId = 'perferendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->channelId = 'distinctio';
    $request->fields = 'id';
    $request->key = 'labore';
    $request->oauthToken = 'labore';
    $request->partnerId = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'eum';
    $request->urlOrAppId = 'vero';

    $requestSecurity = new DisplayvideoAdvertisersChannelsSitesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsSitesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsSitesList

Lists sites in a channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsSitesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'architecto';
    $request->advertiserId = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->channelId = 'ullam';
    $request->fields = 'provident';
    $request->filter = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->orderBy = 'mollitia';
    $request->pageSize = 968962;
    $request->pageToken = 'mollitia';
    $request->partnerId = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'eum';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'necessitatibus';

    $requestSecurity = new DisplayvideoAdvertisersChannelsSitesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsSitesList($request, $requestSecurity);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersChannelsSitesReplace

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceSitesRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\SiteInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersChannelsSitesReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersChannelsSitesReplaceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->replaceSitesRequestInput = new ReplaceSitesRequestInput();
    $request->replaceSitesRequestInput->advertiserId = 'nemo';
    $request->replaceSitesRequestInput->newSites = [
        new SiteInput(),
    ];
    $request->replaceSitesRequestInput->partnerId = 'iure';
    $request->accessToken = 'doloribus';
    $request->advertiserId = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->channelId = 'deleniti';
    $request->fields = 'facilis';
    $request->key = 'in';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $requestSecurity = new DisplayvideoAdvertisersChannelsSitesReplaceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersChannelsSitesReplace($request, $requestSecurity);

    if ($response->replaceSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreate

Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserAdServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\CmHybridConfig;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyOnlyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserBillingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserDataAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserSdfConfig;
use \OpenAPI\OpenAPI\Models\Shared\SdfConfig;
use \OpenAPI\OpenAPI\Models\Shared\SdfConfigVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserGeneralConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserTargetingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->advertiserInput = new AdvertiserInput();
    $request->advertiserInput->adServerConfig = new AdvertiserAdServerConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig = new CmHybridConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmAccountId = 'nihil';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightConfigId = 'repellat';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightLinkingAuthorized = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmSyncableSiteIds = [
        'sed',
        'saepe',
        'pariatur',
        'accusantium',
    ];
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmCostReportingEnabled = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmDataSharingEnabled = false;
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig = new ThirdPartyOnlyConfig();
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig->pixelOrderIdReportingEnabled = false;
    $request->advertiserInput->billingConfig = new AdvertiserBillingConfig();
    $request->advertiserInput->billingConfig->billingProfileId = 'consequuntur';
    $request->advertiserInput->creativeConfig = new AdvertiserCreativeConfig();
    $request->advertiserInput->creativeConfig->dynamicCreativeEnabled = false;
    $request->advertiserInput->creativeConfig->iasClientId = 'praesentium';
    $request->advertiserInput->creativeConfig->obaComplianceDisabled = false;
    $request->advertiserInput->creativeConfig->videoCreativeDataSharingAuthorized = false;
    $request->advertiserInput->dataAccessConfig = new AdvertiserDataAccessConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig = new AdvertiserSdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->overridePartnerSdfConfig = false;
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig = new SdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->adminEmail = 'natus';
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->version = SdfConfigVersionEnum::SDF_VERSION31;
    $request->advertiserInput->displayName = 'sunt';
    $request->advertiserInput->entityStatus = AdvertiserEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->advertiserInput->generalConfig = new AdvertiserGeneralConfigInput();
    $request->advertiserInput->generalConfig->currencyCode = 'illum';
    $request->advertiserInput->generalConfig->domainUrl = 'pariatur';
    $request->advertiserInput->integrationDetails = new IntegrationDetails();
    $request->advertiserInput->integrationDetails->details = 'maxime';
    $request->advertiserInput->integrationDetails->integrationCode = 'ea';
    $request->advertiserInput->partnerId = 'excepturi';
    $request->advertiserInput->prismaEnabled = false;
    $request->advertiserInput->servingConfig = new AdvertiserTargetingConfig();
    $request->advertiserInput->servingConfig->exemptTvFromViewabilityTargeting = false;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->fields = 'ab';
    $request->key = 'maiores';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DisplayvideoAdvertisersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreate($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreativesCreate

Creates a new creative. Returns the newly created creative if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeInput;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\AssetAssociation;
use \OpenAPI\OpenAPI\Models\Shared\Asset;
use \OpenAPI\OpenAPI\Models\Shared\AssetAssociationRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CmTrackingAd;
use \OpenAPI\OpenAPI\Models\Shared\CounterEvent;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExitEvent;
use \OpenAPI\OpenAPI\Models\Shared\ExitEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeExpandingDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeHostingSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\ObaIconPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioVideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfo;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoContentAndPolicyReviewStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatus;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatusExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublisherReviewStatus;
use \OpenAPI\OpenAPI\Models\Shared\PublisherReviewStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyUrl;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyUrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimerEvent;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdId;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdIdRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreativesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeInput = new CreativeInput();
    $request->creativeInput->additionalDimensions = [
        new Dimensions(),
    ];
    $request->creativeInput->appendedTag = 'pariatur';
    $request->creativeInput->assets = [
        new AssetAssociation(),
        new AssetAssociation(),
    ];
    $request->creativeInput->cmTrackingAd = new CmTrackingAd();
    $request->creativeInput->cmTrackingAd->cmAdId = 'voluptatibus';
    $request->creativeInput->cmTrackingAd->cmCreativeId = 'perferendis';
    $request->creativeInput->cmTrackingAd->cmPlacementId = 'fugiat';
    $request->creativeInput->companionCreativeIds = [
        'aut',
    ];
    $request->creativeInput->counterEvents = [
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
    ];
    $request->creativeInput->creativeType = CreativeCreativeTypeEnum::CREATIVE_TYPE_TEMPLATED_APP_INSTALL;
    $request->creativeInput->dimensions = new Dimensions();
    $request->creativeInput->dimensions->heightPixels = 944124;
    $request->creativeInput->dimensions->widthPixels = 729991;
    $request->creativeInput->displayName = 'nobis';
    $request->creativeInput->entityStatus = CreativeEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->creativeInput->exitEvents = [
        new ExitEvent(),
        new ExitEvent(),
    ];
    $request->creativeInput->expandOnHover = false;
    $request->creativeInput->expandingDirection = CreativeExpandingDirectionEnum::EXPANDING_DIRECTION_UP_AND_LEFT;
    $request->creativeInput->hostingSource = CreativeHostingSourceEnum::HOSTING_SOURCE_THIRD_PARTY;
    $request->creativeInput->iasCampaignMonitoring = false;
    $request->creativeInput->integrationCode = 'eaque';
    $request->creativeInput->jsTrackerUrl = 'quis';
    $request->creativeInput->notes = 'nesciunt';
    $request->creativeInput->obaIcon = new ObaIcon();
    $request->creativeInput->obaIcon->clickTrackingUrl = 'eos';
    $request->creativeInput->obaIcon->dimensions = new Dimensions();
    $request->creativeInput->obaIcon->dimensions->heightPixels = 18521;
    $request->creativeInput->obaIcon->dimensions->widthPixels = 170986;
    $request->creativeInput->obaIcon->landingPageUrl = 'minus';
    $request->creativeInput->obaIcon->position = ObaIconPositionEnum::OBA_ICON_POSITION_UPPER_LEFT;
    $request->creativeInput->obaIcon->program = 'dolor';
    $request->creativeInput->obaIcon->resourceMimeType = 'vero';
    $request->creativeInput->obaIcon->resourceUrl = 'nostrum';
    $request->creativeInput->obaIcon->viewTrackingUrl = 'hic';
    $request->creativeInput->progressOffset = new AudioVideoOffset();
    $request->creativeInput->progressOffset->percentage = 'recusandae';
    $request->creativeInput->progressOffset->seconds = 'omnis';
    $request->creativeInput->requireHtml5 = false;
    $request->creativeInput->requireMraid = false;
    $request->creativeInput->requirePingForAttribution = false;
    $request->creativeInput->reviewStatus = new ReviewStatusInfo();
    $request->creativeInput->reviewStatus->approvalStatus = ReviewStatusInfoApprovalStatusEnum::APPROVAL_STATUS_APPROVED_SERVABLE;
    $request->creativeInput->reviewStatus->contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum::REVIEW_STATUS_REJECTED;
    $request->creativeInput->reviewStatus->creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum::REVIEW_STATUS_UNSPECIFIED;
    $request->creativeInput->reviewStatus->exchangeReviewStatuses = [
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
    ];
    $request->creativeInput->reviewStatus->publisherReviewStatuses = [
        new PublisherReviewStatus(),
    ];
    $request->creativeInput->skipOffset = new AudioVideoOffset();
    $request->creativeInput->skipOffset->percentage = 'blanditiis';
    $request->creativeInput->skipOffset->seconds = 'error';
    $request->creativeInput->skippable = false;
    $request->creativeInput->thirdPartyTag = 'eaque';
    $request->creativeInput->thirdPartyUrls = [
        new ThirdPartyUrl(),
        new ThirdPartyUrl(),
        new ThirdPartyUrl(),
    ];
    $request->creativeInput->timerEvents = [
        new TimerEvent(),
        new TimerEvent(),
        new TimerEvent(),
    ];
    $request->creativeInput->trackerUrls = [
        'asperiores',
    ];
    $request->creativeInput->universalAdId = new UniversalAdId();
    $request->creativeInput->universalAdId->id = 'e49a8d9c-bf48-4633-b23f-9b77f3a41006';
    $request->creativeInput->universalAdId->registry = UniversalAdIdRegistryEnum::UNIVERSAL_AD_REGISTRY_AD_ID;
    $request->creativeInput->vastTagUrl = 'quaerat';
    $request->accessToken = 'accusamus';
    $request->advertiserId = 'quidem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'natus';
    $request->key = 'eos';
    $request->oauthToken = 'atque';
    $request->prettyPrint = false;
    $request->quotaUser = 'sit';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ab';

    $requestSecurity = new DisplayvideoAdvertisersCreativesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreativesCreate($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreativesDelete

Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreativesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->advertiserId = 'iusto';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->creativeId = 'deleniti';
    $request->fields = 'omnis';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->uploadType = 'nihil';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new DisplayvideoAdvertisersCreativesDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreativesDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreativesGet

Gets a creative.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreativesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'id';
    $request->advertiserId = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->creativeId = 'perferendis';
    $request->fields = 'amet';
    $request->key = 'optio';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new DisplayvideoAdvertisersCreativesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreativesGet($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreativesList

Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreativesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->advertiserId = 'minima';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'totam';
    $request->fields = 'similique';
    $request->filter = 'alias';
    $request->key = 'at';
    $request->oauthToken = 'quaerat';
    $request->orderBy = 'tempora';
    $request->pageSize = 425451;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new DisplayvideoAdvertisersCreativesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreativesList($request, $requestSecurity);

    if ($response->listCreativesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCreativesPatch

Updates an existing creative. Returns the updated creative if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeInput;
use \OpenAPI\OpenAPI\Models\Shared\Dimensions;
use \OpenAPI\OpenAPI\Models\Shared\AssetAssociation;
use \OpenAPI\OpenAPI\Models\Shared\Asset;
use \OpenAPI\OpenAPI\Models\Shared\AssetAssociationRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\CmTrackingAd;
use \OpenAPI\OpenAPI\Models\Shared\CounterEvent;
use \OpenAPI\OpenAPI\Models\Shared\CreativeCreativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExitEvent;
use \OpenAPI\OpenAPI\Models\Shared\ExitEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeExpandingDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreativeHostingSourceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ObaIcon;
use \OpenAPI\OpenAPI\Models\Shared\ObaIconPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudioVideoOffset;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfo;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoContentAndPolicyReviewStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatus;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatusExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeReviewStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublisherReviewStatus;
use \OpenAPI\OpenAPI\Models\Shared\PublisherReviewStatusStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyUrl;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyUrlTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimerEvent;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdId;
use \OpenAPI\OpenAPI\Models\Shared\UniversalAdIdRegistryEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCreativesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCreativesPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->creativeInput = new CreativeInput();
    $request->creativeInput->additionalDimensions = [
        new Dimensions(),
        new Dimensions(),
    ];
    $request->creativeInput->appendedTag = 'harum';
    $request->creativeInput->assets = [
        new AssetAssociation(),
        new AssetAssociation(),
    ];
    $request->creativeInput->cmTrackingAd = new CmTrackingAd();
    $request->creativeInput->cmTrackingAd->cmAdId = 'ipsum';
    $request->creativeInput->cmTrackingAd->cmCreativeId = 'quisquam';
    $request->creativeInput->cmTrackingAd->cmPlacementId = 'tenetur';
    $request->creativeInput->companionCreativeIds = [
        'tempore',
    ];
    $request->creativeInput->counterEvents = [
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
    ];
    $request->creativeInput->creativeType = CreativeCreativeTypeEnum::CREATIVE_TYPE_VIDEO;
    $request->creativeInput->dimensions = new Dimensions();
    $request->creativeInput->dimensions->heightPixels = 313692;
    $request->creativeInput->dimensions->widthPixels = 213312;
    $request->creativeInput->displayName = 'sapiente';
    $request->creativeInput->entityStatus = CreativeEntityStatusEnum::ENTITY_STATUS_DRAFT;
    $request->creativeInput->exitEvents = [
        new ExitEvent(),
        new ExitEvent(),
    ];
    $request->creativeInput->expandOnHover = false;
    $request->creativeInput->expandingDirection = CreativeExpandingDirectionEnum::EXPANDING_DIRECTION_UNSPECIFIED;
    $request->creativeInput->hostingSource = CreativeHostingSourceEnum::HOSTING_SOURCE_HOSTED;
    $request->creativeInput->iasCampaignMonitoring = false;
    $request->creativeInput->integrationCode = 'neque';
    $request->creativeInput->jsTrackerUrl = 'sed';
    $request->creativeInput->notes = 'vel';
    $request->creativeInput->obaIcon = new ObaIcon();
    $request->creativeInput->obaIcon->clickTrackingUrl = 'libero';
    $request->creativeInput->obaIcon->dimensions = new Dimensions();
    $request->creativeInput->obaIcon->dimensions->heightPixels = 374170;
    $request->creativeInput->obaIcon->dimensions->widthPixels = 646265;
    $request->creativeInput->obaIcon->landingPageUrl = 'quam';
    $request->creativeInput->obaIcon->position = ObaIconPositionEnum::OBA_ICON_POSITION_UPPER_RIGHT;
    $request->creativeInput->obaIcon->program = 'incidunt';
    $request->creativeInput->obaIcon->resourceMimeType = 'qui';
    $request->creativeInput->obaIcon->resourceUrl = 'cupiditate';
    $request->creativeInput->obaIcon->viewTrackingUrl = 'maxime';
    $request->creativeInput->progressOffset = new AudioVideoOffset();
    $request->creativeInput->progressOffset->percentage = 'pariatur';
    $request->creativeInput->progressOffset->seconds = 'soluta';
    $request->creativeInput->requireHtml5 = false;
    $request->creativeInput->requireMraid = false;
    $request->creativeInput->requirePingForAttribution = false;
    $request->creativeInput->reviewStatus = new ReviewStatusInfo();
    $request->creativeInput->reviewStatus->approvalStatus = ReviewStatusInfoApprovalStatusEnum::APPROVAL_STATUS_UNSPECIFIED;
    $request->creativeInput->reviewStatus->contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum::REVIEW_STATUS_REJECTED;
    $request->creativeInput->reviewStatus->creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum::REVIEW_STATUS_REJECTED;
    $request->creativeInput->reviewStatus->exchangeReviewStatuses = [
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
    ];
    $request->creativeInput->reviewStatus->publisherReviewStatuses = [
        new PublisherReviewStatus(),
    ];
    $request->creativeInput->skipOffset = new AudioVideoOffset();
    $request->creativeInput->skipOffset->percentage = 'dolores';
    $request->creativeInput->skipOffset->seconds = 'distinctio';
    $request->creativeInput->skippable = false;
    $request->creativeInput->thirdPartyTag = 'facilis';
    $request->creativeInput->thirdPartyUrls = [
        new ThirdPartyUrl(),
        new ThirdPartyUrl(),
    ];
    $request->creativeInput->timerEvents = [
        new TimerEvent(),
        new TimerEvent(),
    ];
    $request->creativeInput->trackerUrls = [
        'temporibus',
        'qui',
        'neque',
    ];
    $request->creativeInput->universalAdId = new UniversalAdId();
    $request->creativeInput->universalAdId->id = '22715bf0-cbb1-4e31-b8b9-0f3443a1108e';
    $request->creativeInput->universalAdId->registry = UniversalAdIdRegistryEnum::UNIVERSAL_AD_REGISTRY_UNSPECIFIED;
    $request->creativeInput->vastTagUrl = 'est';
    $request->accessToken = 'repellendus';
    $request->advertiserId = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ut';
    $request->creativeId = 'facilis';
    $request->fields = 'cupiditate';
    $request->key = 'qui';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->updateMask = 'odio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DisplayvideoAdvertisersCreativesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCreativesPatch($request, $requestSecurity);

    if ($response->creative !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersDelete

Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->advertiserId = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsum';
    $request->fields = 'delectus';
    $request->key = 'voluptate';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new DisplayvideoAdvertisersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersEditAssignedTargetingOptions

Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditAdvertiserAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput = new BulkEditAdvertiserAssignedTargetingOptionsRequestInput();
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->accessToken = 'odio';
    $request->advertiserId = 'similique';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'ducimus';
    $request->key = 'dolore';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'natus';

    $requestSecurity = new DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersEditAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditAdvertiserAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersGet

Gets an advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aut';
    $request->advertiserId = 'voluptatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'fugit';
    $request->key = 'porro';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'eligendi';

    $requestSecurity = new DisplayvideoAdvertisersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersGet($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersCreate

Creates a new insertion order. Returns the newly created insertion order if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\FixedBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBillableOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudget;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetAutomationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetSegment;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetBudgetUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderInsertionOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\Pacing;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCost;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostCostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoal;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->insertionOrderInput = new InsertionOrderInput();
    $request->insertionOrderInput->bidStrategy = new BiddingStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid->bidAmountMicros = 'alias';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'officia';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'tempora';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC;
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'ea';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'aspernatur';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'vel';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
    $request->insertionOrderInput->billableOutcome = InsertionOrderBillableOutcomeEnum::BILLABLE_OUTCOME_PAY_PER_IMPRESSION;
    $request->insertionOrderInput->budget = new InsertionOrderBudget();
    $request->insertionOrderInput->budget->automationType = InsertionOrderBudgetAutomationTypeEnum::INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED;
    $request->insertionOrderInput->budget->budgetSegments = [
        new InsertionOrderBudgetSegment(),
        new InsertionOrderBudgetSegment(),
    ];
    $request->insertionOrderInput->budget->budgetUnit = InsertionOrderBudgetBudgetUnitEnum::BUDGET_UNIT_CURRENCY;
    $request->insertionOrderInput->campaignId = 'dicta';
    $request->insertionOrderInput->displayName = 'dolor';
    $request->insertionOrderInput->entityStatus = InsertionOrderEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->insertionOrderInput->frequencyCap = new FrequencyCap();
    $request->insertionOrderInput->frequencyCap->maxImpressions = 97844;
    $request->insertionOrderInput->frequencyCap->maxViews = 406120;
    $request->insertionOrderInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MINUTES;
    $request->insertionOrderInput->frequencyCap->timeUnitCount = 569211;
    $request->insertionOrderInput->frequencyCap->unlimited = false;
    $request->insertionOrderInput->insertionOrderType = InsertionOrderInsertionOrderTypeEnum::OVER_THE_TOP;
    $request->insertionOrderInput->integrationDetails = new IntegrationDetails();
    $request->insertionOrderInput->integrationDetails->details = 'nostrum';
    $request->insertionOrderInput->integrationDetails->integrationCode = 'sapiente';
    $request->insertionOrderInput->pacing = new Pacing();
    $request->insertionOrderInput->pacing->dailyMaxImpressions = 'quisquam';
    $request->insertionOrderInput->pacing->dailyMaxMicros = 'saepe';
    $request->insertionOrderInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_DAILY;
    $request->insertionOrderInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_EVEN;
    $request->insertionOrderInput->partnerCosts = [
        new PartnerCost(),
        new PartnerCost(),
    ];
    $request->insertionOrderInput->performanceGoal = new PerformanceGoal();
    $request->insertionOrderInput->performanceGoal->performanceGoalAmountMicros = 'veniam';
    $request->insertionOrderInput->performanceGoal->performanceGoalPercentageMicros = 'aliquid';
    $request->insertionOrderInput->performanceGoal->performanceGoalString = 'inventore';
    $request->insertionOrderInput->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_CTR;
    $request->accessToken = 'ea';
    $request->advertiserId = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'recusandae';
    $request->fields = 'aspernatur';
    $request->key = 'minima';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'a';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'aut';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersCreate($request, $requestSecurity);

    if ($response->insertionOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersDelete

Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deleniti';
    $request->advertiserId = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'accusamus';
    $request->insertionOrderId = 'inventore';
    $request->key = 'non';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersGet

Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->advertiserId = 'autem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'assumenda';
    $request->insertionOrderId = 'nulla';
    $request->key = 'voluptas';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'numquam';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersGet($request, $requestSecurity);

    if ($response->insertionOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersList

Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->advertiserId = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magnam';
    $request->fields = 'odio';
    $request->filter = 'eius';
    $request->key = 'esse';
    $request->oauthToken = 'esse';
    $request->orderBy = 'rem';
    $request->pageSize = 683282;
    $request->pageToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersList($request, $requestSecurity);

    if ($response->listInsertionOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions

Lists assigned targeting options of an insertion order across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'suscipit';
    $request->advertiserId = 'assumenda';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'quisquam';
    $request->filter = 'veritatis';
    $request->insertionOrderId = 'ipsa';
    $request->key = 'id';
    $request->oauthToken = 'quidem';
    $request->orderBy = 'neque';
    $request->pageSize = 778696;
    $request->pageToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'eius';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListInsertionOrderAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersPatch

Updates an existing insertion order. Returns the updated insertion order if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\FixedBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBillableOutcomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudget;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetAutomationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetSegment;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderBudgetBudgetUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\InsertionOrderInsertionOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\Pacing;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCost;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostCostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoal;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->insertionOrderInput = new InsertionOrderInput();
    $request->insertionOrderInput->bidStrategy = new BiddingStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid->bidAmountMicros = 'voluptas';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'ab';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'cupiditate';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED;
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'tempora';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'debitis';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'ipsam';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA;
    $request->insertionOrderInput->billableOutcome = InsertionOrderBillableOutcomeEnum::BILLABLE_OUTCOME_UNSPECIFIED;
    $request->insertionOrderInput->budget = new InsertionOrderBudget();
    $request->insertionOrderInput->budget->automationType = InsertionOrderBudgetAutomationTypeEnum::INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET;
    $request->insertionOrderInput->budget->budgetSegments = [
        new InsertionOrderBudgetSegment(),
        new InsertionOrderBudgetSegment(),
    ];
    $request->insertionOrderInput->budget->budgetUnit = InsertionOrderBudgetBudgetUnitEnum::BUDGET_UNIT_IMPRESSIONS;
    $request->insertionOrderInput->campaignId = 'aperiam';
    $request->insertionOrderInput->displayName = 'distinctio';
    $request->insertionOrderInput->entityStatus = InsertionOrderEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->insertionOrderInput->frequencyCap = new FrequencyCap();
    $request->insertionOrderInput->frequencyCap->maxImpressions = 490819;
    $request->insertionOrderInput->frequencyCap->maxViews = 76956;
    $request->insertionOrderInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_WEEKS;
    $request->insertionOrderInput->frequencyCap->timeUnitCount = 518835;
    $request->insertionOrderInput->frequencyCap->unlimited = false;
    $request->insertionOrderInput->insertionOrderType = InsertionOrderInsertionOrderTypeEnum::OVER_THE_TOP;
    $request->insertionOrderInput->integrationDetails = new IntegrationDetails();
    $request->insertionOrderInput->integrationDetails->details = 'aliquam';
    $request->insertionOrderInput->integrationDetails->integrationCode = 'odio';
    $request->insertionOrderInput->pacing = new Pacing();
    $request->insertionOrderInput->pacing->dailyMaxImpressions = 'occaecati';
    $request->insertionOrderInput->pacing->dailyMaxMicros = 'commodi';
    $request->insertionOrderInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_FLIGHT;
    $request->insertionOrderInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_UNSPECIFIED;
    $request->insertionOrderInput->partnerCosts = [
        new PartnerCost(),
        new PartnerCost(),
        new PartnerCost(),
    ];
    $request->insertionOrderInput->performanceGoal = new PerformanceGoal();
    $request->insertionOrderInput->performanceGoal->performanceGoalAmountMicros = 'molestiae';
    $request->insertionOrderInput->performanceGoal->performanceGoalPercentageMicros = 'accusantium';
    $request->insertionOrderInput->performanceGoal->performanceGoalString = 'porro';
    $request->insertionOrderInput->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_CPIAVC;
    $request->accessToken = 'quas';
    $request->advertiserId = 'praesentium';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'fugit';
    $request->insertionOrderId = 'fuga';
    $request->key = 'mollitia';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->updateMask = 'explicabo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersPatch($request, $requestSecurity);

    if ($response->insertionOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->assignedTargetingOptionInput = new AssignedTargetingOptionInput();
    $request->assignedTargetingOptionInput->ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE6064;
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'consequuntur';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'ratione';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_IOS;
    $request->assignedTargetingOptionInput->appDetails->negative = false;
    $request->assignedTargetingOptionInput->audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup->settings = [
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup = new CombinedAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup->settings = [
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup = new CustomListGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup->settings = [
        new CustomListTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedFirstAndThirdPartyAudienceGroups = [
        new FirstAndThirdPartyAudienceGroup(),
        new FirstAndThirdPartyAudienceGroup(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_PODCAST;
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'veritatis';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'esse';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 8003.79;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'vero';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'aliquid';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'quasi';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'saepe';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'vel';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'harum';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_MID_ROLL;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_IN_FEED;
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'occaecati';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::TUESDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 716244;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 756779;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'culpa';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_SMART_PHONE;
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum::CONTENT_RATING_TIER_UNRATED;
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_APP;
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum::EXCHANGE_DAILYMOTION;
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_UNSPECIFIED;
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'minus';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_LOWER50_PERCENT;
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'sapiente';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'consectetur';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'esse';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'blanditiis';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_IN_FEED;
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'a';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_FOR_MOBILE_DISPLAY_ADS;
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'quas';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'esse';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 9518.75;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_MILES;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'sint';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'pariatur';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadius = 8207.67;
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum::PROXIMITY_RADIUS_UNIT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'eveniet';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum::SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO;
    $request->assignedTargetingOptionInput->sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sessionPositionDetails->sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum::SESSION_POSITION_FIRST_IMPRESSION;
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'veritatis';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::ADLOOX_UNSPECIFIED,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE3_POINT5_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE4_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE18_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::AGE_RATING_UNSPECIFIED,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::SUBSTANCE_ABUSE,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::SUBSTANCE_ABUSE,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::COPYRIGHT_INFRINGEMENT,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HATE_PROFANITY,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NEGATIVE_NEWS_FINANCIAL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::MEDIUM_SEVERITY_UNSPECIFIED,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::OCCULT,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NEGATIVE_NEWS_PHARMACEUTICAL,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'dicta';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE70_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION5_SEC;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD25;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X30095;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::VIDEO_IAB_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIEWED_PERFORMANCE30_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'quibusdam',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY50;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ600;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'minima';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'veritatis';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_SMALL;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY20_PERCENT_OR_MORE;
    $request->assignedTargetingOptionInput->youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeChannelDetails->channelId = 'iste';
    $request->assignedTargetingOptionInput->youtubeChannelDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeVideoDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails->videoId = 'temporibus';
    $request->accessToken = 'accusantium';
    $request->advertiserId = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'laudantium';
    $request->fields = 'eum';
    $request->insertionOrderId = 'mollitia';
    $request->key = 'ab';
    $request->oauthToken = 'corrupti';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_CHANNEL;
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->advertiserId = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'aut';
    $request->callback = 'dignissimos';
    $request->fields = 'dicta';
    $request->insertionOrderId = 'maiores';
    $request->key = 'natus';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_HOUSEHOLD_INCOME;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an insertion order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->advertiserId = 'consequuntur';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'officia';
    $request->callback = 'maxime';
    $request->fields = 'dignissimos';
    $request->insertionOrderId = 'officia';
    $request->key = 'asperiores';
    $request->oauthToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_DEVICE_TYPE;
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an insertion order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ab';
    $request->advertiserId = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'id';
    $request->fields = 'suscipit';
    $request->filter = 'velit';
    $request->insertionOrderId = 'culpa';
    $request->key = 'est';
    $request->oauthToken = 'recusandae';
    $request->orderBy = 'totam';
    $request->pageSize = 853940;
    $request->pageToken = 'vel';
    $request->prettyPrint = false;
    $request->quotaUser = 'ducimus';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_KEYWORD;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listInsertionOrderAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInvoicesList

Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInvoicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'facilis';
    $request->advertiserId = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->issueMonth = 'reiciendis';
    $request->key = 'assumenda';
    $request->loiSapinInvoiceType = DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum::LOI_SAPIN_INVOICE_TYPE_MEDIA;
    $request->oauthToken = 'recusandae';
    $request->pageSize = 397533;
    $request->pageToken = 'aperiam';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DisplayvideoAdvertisersInvoicesListSecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersInvoicesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInvoicesList($request, $requestSecurity);

    if ($response->listInvoicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersInvoicesLookupInvoiceCurrency

Retrieves the invoice currency used by an advertiser in a given month.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'earum';
    $request->advertiserId = 'facere';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'suscipit';
    $request->invoiceMonth = 'reiciendis';
    $request->key = 'quidem';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'sunt';

    $requestSecurity = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity();
    $requestSecurity->option1 = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInvoicesLookupInvoiceCurrency($request, $requestSecurity);

    if ($response->lookupInvoiceCurrencyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions

Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditAssignedTargetingOptionsRequestInput = new BulkEditAssignedTargetingOptionsRequestInput();
    $request->bulkEditAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->bulkEditAssignedTargetingOptionsRequestInput->lineItemIds = [
        'beatae',
    ];
    $request->accessToken = 'dignissimos';
    $request->advertiserId = 'a';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'consectetur';
    $request->fields = 'corporis';
    $request->key = 'harum';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions

Lists assigned targeting options for multiple line items across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'accusamus';
    $request->advertiserId = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aspernatur';
    $request->fields = 'voluptas';
    $request->filter = 'voluptas';
    $request->key = 'voluptas';
    $request->lineItemIds = [
        'nobis',
        'dolorum',
    ];
    $request->oauthToken = 'adipisci';
    $request->orderBy = 'minus';
    $request->pageSize = 171853;
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsBulkUpdate

Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkUpdateLineItemsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\LineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\FixedBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetBudgetAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionCountingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrackingFloodlightActivityConfig;
use \OpenAPI\OpenAPI\Models\Shared\LineItemEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlight;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlightFlightDateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\LineItemLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppInput;
use \OpenAPI\OpenAPI\Models\Shared\Pacing;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCost;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostCostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModel;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModelMarkupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfigTargetingExpansionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsContentCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersInventorySourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequency;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequencyTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersThirdPartyMeasurementSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfig;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfigVendorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettingsMinimumDurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStep;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStepInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsBulkUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkUpdateLineItemsRequestInput = new BulkUpdateLineItemsRequestInput();
    $request->bulkUpdateLineItemsRequestInput->lineItemIds = [
        'ullam',
        'adipisci',
        'cum',
        'blanditiis',
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem = new LineItemInput();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy = new BiddingStrategy();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->fixedBid->bidAmountMicros = 'quas';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'hic';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'nesciunt';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'corrupti';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'pariatur';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'totam';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->budget = new LineItemBudgetInput();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->budget->budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum::LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->budget->maxAmount = 'nobis';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->conversionCounting = new ConversionCountingConfig();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->conversionCounting->floodlightActivityConfigs = [
        new TrackingFloodlightActivityConfig(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->conversionCounting->postViewCountPercentageMillis = 'rerum';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->creativeIds = [
        'reiciendis',
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->displayName = 'explicabo';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->entityStatus = LineItemEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->excludeNewExchanges = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight = new LineItemFlight();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange = new DateRange();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->endDate = new Date();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->endDate->day = 707918;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->endDate->month = 451822;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->endDate->year = 709072;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->startDate = new Date();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->startDate->day = 70869;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->startDate->month = 611749;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->dateRange->startDate->year = 292794;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->flight->flightDateType = LineItemFlightFlightDateTypeEnum::LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap = new FrequencyCap();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap->maxImpressions = 152354;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap->maxViews = 447516;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MONTHS;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap->timeUnitCount = 696077;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->frequencyCap->unlimited = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->insertionOrderId = 'explicabo';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->integrationDetails = new IntegrationDetails();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->integrationDetails->details = 'voluptas';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->integrationDetails->integrationCode = 'unde';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->lineItemType = LineItemLineItemTypeEnum::LINE_ITEM_TYPE_DISPLAY_DEFAULT;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->mobileApp = new MobileAppInput();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->mobileApp->appId = 'suscipit';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->pacing = new Pacing();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->pacing->dailyMaxImpressions = 'sapiente';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->pacing->dailyMaxMicros = 'debitis';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_UNSPECIFIED;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_EVEN;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->partnerCosts = [
        new PartnerCost(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->partnerRevenueModel = new PartnerRevenueModel();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->partnerRevenueModel->markupAmount = 'corrupti';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->partnerRevenueModel->markupType = PartnerRevenueModelMarkupTypeEnum::PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->targetingExpansion = new TargetingExpansionConfig();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->targetingExpansion->excludeFirstPartyAudience = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->targetingExpansion->targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum::NO_EXPANSION;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->biddingStrategy->type = YoutubeAndPartnersBiddingStrategyTypeEnum::YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->biddingStrategy->value = 'provident';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum::YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeSearch = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideoPartners = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideos = false;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->leadFormId = 'necessitatibus';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->linkedMerchantId = 'ipsum';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->relatedVideoIds = [
        'occaecati',
        'quos',
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->targetFrequency = new TargetFrequency();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->targetFrequency->targetCount = 'voluptatibus';
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->targetFrequency->timeUnit = TargetFrequencyTimeUnitEnum::TIME_UNIT_LIFETIME;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->targetFrequency->timeUnitCount = 273009;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandLiftVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandSafetyVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->reachVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->viewabilityVendorConfigs = [
        new ThirdPartyVendorConfig(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->videoAdSequenceSettings = new VideoAdSequenceSettings();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->videoAdSequenceSettings->minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum::VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->videoAdSequenceSettings->steps = [
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
    ];
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap = new FrequencyCap();
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap->maxImpressions = 505866;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap->maxViews = 708609;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MONTHS;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap->timeUnitCount = 277773;
    $request->bulkUpdateLineItemsRequestInput->targetLineItem->youtubeAndPartnersSettings->viewFrequencyCap->unlimited = false;
    $request->bulkUpdateLineItemsRequestInput->updateMask = 'ipsam';
    $request->accessToken = 'debitis';
    $request->advertiserId = 'rem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nobis';
    $request->fields = 'error';
    $request->key = 'veniam';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsBulkUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsBulkUpdate($request, $requestSecurity);

    if ($response->bulkUpdateLineItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsCreate

Creates a new line item. Returns the newly created line item if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\FixedBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetBudgetAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionCountingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrackingFloodlightActivityConfig;
use \OpenAPI\OpenAPI\Models\Shared\LineItemEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlight;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlightFlightDateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\LineItemLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppInput;
use \OpenAPI\OpenAPI\Models\Shared\Pacing;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCost;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostCostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModel;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModelMarkupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfigTargetingExpansionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsContentCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersInventorySourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequency;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequencyTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersThirdPartyMeasurementSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfig;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfigVendorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettingsMinimumDurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStep;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStepInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->lineItemInput = new LineItemInput();
    $request->lineItemInput->bidStrategy = new BiddingStrategy();
    $request->lineItemInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->lineItemInput->bidStrategy->fixedBid->bidAmountMicros = 'aperiam';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'saepe';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'numquam';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC;
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'in';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'officiis';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'beatae';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO;
    $request->lineItemInput->budget = new LineItemBudgetInput();
    $request->lineItemInput->budget->budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum::LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC;
    $request->lineItemInput->budget->maxAmount = 'praesentium';
    $request->lineItemInput->conversionCounting = new ConversionCountingConfig();
    $request->lineItemInput->conversionCounting->floodlightActivityConfigs = [
        new TrackingFloodlightActivityConfig(),
        new TrackingFloodlightActivityConfig(),
        new TrackingFloodlightActivityConfig(),
    ];
    $request->lineItemInput->conversionCounting->postViewCountPercentageMillis = 'laboriosam';
    $request->lineItemInput->creativeIds = [
        'voluptatum',
        'error',
        'hic',
    ];
    $request->lineItemInput->displayName = 'expedita';
    $request->lineItemInput->entityStatus = LineItemEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->lineItemInput->excludeNewExchanges = false;
    $request->lineItemInput->flight = new LineItemFlight();
    $request->lineItemInput->flight->dateRange = new DateRange();
    $request->lineItemInput->flight->dateRange->endDate = new Date();
    $request->lineItemInput->flight->dateRange->endDate->day = 204923;
    $request->lineItemInput->flight->dateRange->endDate->month = 677115;
    $request->lineItemInput->flight->dateRange->endDate->year = 341698;
    $request->lineItemInput->flight->dateRange->startDate = new Date();
    $request->lineItemInput->flight->dateRange->startDate->day = 639028;
    $request->lineItemInput->flight->dateRange->startDate->month = 676243;
    $request->lineItemInput->flight->dateRange->startDate->year = 548361;
    $request->lineItemInput->flight->flightDateType = LineItemFlightFlightDateTypeEnum::LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM;
    $request->lineItemInput->frequencyCap = new FrequencyCap();
    $request->lineItemInput->frequencyCap->maxImpressions = 272683;
    $request->lineItemInput->frequencyCap->maxViews = 543678;
    $request->lineItemInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_LIFETIME;
    $request->lineItemInput->frequencyCap->timeUnitCount = 282699;
    $request->lineItemInput->frequencyCap->unlimited = false;
    $request->lineItemInput->insertionOrderId = 'fugiat';
    $request->lineItemInput->integrationDetails = new IntegrationDetails();
    $request->lineItemInput->integrationDetails->details = 'voluptatem';
    $request->lineItemInput->integrationDetails->integrationCode = 'culpa';
    $request->lineItemInput->lineItemType = LineItemLineItemTypeEnum::LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH;
    $request->lineItemInput->mobileApp = new MobileAppInput();
    $request->lineItemInput->mobileApp->appId = 'magnam';
    $request->lineItemInput->pacing = new Pacing();
    $request->lineItemInput->pacing->dailyMaxImpressions = 'consequatur';
    $request->lineItemInput->pacing->dailyMaxMicros = 'esse';
    $request->lineItemInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_DAILY;
    $request->lineItemInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_UNSPECIFIED;
    $request->lineItemInput->partnerCosts = [
        new PartnerCost(),
        new PartnerCost(),
        new PartnerCost(),
    ];
    $request->lineItemInput->partnerRevenueModel = new PartnerRevenueModel();
    $request->lineItemInput->partnerRevenueModel->markupAmount = 'quas';
    $request->lineItemInput->partnerRevenueModel->markupType = PartnerRevenueModelMarkupTypeEnum::PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP;
    $request->lineItemInput->targetingExpansion = new TargetingExpansionConfig();
    $request->lineItemInput->targetingExpansion->excludeFirstPartyAudience = false;
    $request->lineItemInput->targetingExpansion->targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum::LEAST_EXPANSION;
    $request->lineItemInput->youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput();
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput();
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy->type = YoutubeAndPartnersBiddingStrategyTypeEnum::YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED;
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy->value = 'blanditiis';
    $request->lineItemInput->youtubeAndPartnersSettings->contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum::YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig();
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeSearch = false;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideoPartners = false;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideos = false;
    $request->lineItemInput->youtubeAndPartnersSettings->leadFormId = 'sed';
    $request->lineItemInput->youtubeAndPartnersSettings->linkedMerchantId = 'sit';
    $request->lineItemInput->youtubeAndPartnersSettings->relatedVideoIds = [
        'nostrum',
        'saepe',
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency = new TargetFrequency();
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->targetCount = 'error';
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->timeUnit = TargetFrequencyTimeUnitEnum::TIME_UNIT_UNSPECIFIED;
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->timeUnitCount = 279068;
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings();
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandLiftVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandSafetyVendorConfigs = [
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->reachVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->viewabilityVendorConfigs = [
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings = new VideoAdSequenceSettings();
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings->minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum::VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED;
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings->steps = [
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap = new FrequencyCap();
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->maxImpressions = 289776;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->maxViews = 695270;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_WEEKS;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->timeUnitCount = 671957;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->unlimited = false;
    $request->accessToken = 'nam';
    $request->advertiserId = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'alias';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'voluptate';
    $request->prettyPrint = false;
    $request->quotaUser = 'unde';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsCreate($request, $requestSecurity);

    if ($response->lineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsDelete

Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->advertiserId = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'est';
    $request->fields = 'quidem';
    $request->key = 'reprehenderit';
    $request->lineItemId = 'facere';
    $request->oauthToken = 'fuga';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsDuplicate

Duplicates a line item. Returns the ID of the created line item if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsDuplicateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DuplicateLineItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsDuplicateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsDuplicateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->duplicateLineItemRequest = new DuplicateLineItemRequest();
    $request->duplicateLineItemRequest->targetDisplayName = 'quisquam';
    $request->accessToken = 'repudiandae';
    $request->advertiserId = 'quasi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'asperiores';
    $request->key = 'totam';
    $request->lineItemId = 'suscipit';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsDuplicateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsDuplicate($request, $requestSecurity);

    if ($response->duplicateLineItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsGenerateDefault

Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsGenerateDefaultRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateDefaultLineItemRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\GenerateDefaultLineItemRequestLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsGenerateDefaultRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->generateDefaultLineItemRequestInput = new GenerateDefaultLineItemRequestInput();
    $request->generateDefaultLineItemRequestInput->displayName = 'assumenda';
    $request->generateDefaultLineItemRequestInput->insertionOrderId = 'ea';
    $request->generateDefaultLineItemRequestInput->lineItemType = GenerateDefaultLineItemRequestLineItemTypeEnum::LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE;
    $request->generateDefaultLineItemRequestInput->mobileApp = new MobileAppInput();
    $request->generateDefaultLineItemRequestInput->mobileApp->appId = 'error';
    $request->accessToken = 'officiis';
    $request->advertiserId = 'officiis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'minima';
    $request->key = 'aspernatur';
    $request->oauthToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'at';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsGenerateDefault($request, $requestSecurity);

    if ($response->lineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsGet

Gets a line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'blanditiis';
    $request->advertiserId = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'atque';
    $request->fields = 'atque';
    $request->key = 'sunt';
    $request->lineItemId = 'recusandae';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsGet($request, $requestSecurity);

    if ($response->lineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsList

Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repudiandae';
    $request->advertiserId = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'beatae';
    $request->fields = 'dolores';
    $request->filter = 'enim';
    $request->key = 'laboriosam';
    $request->oauthToken = 'velit';
    $request->orderBy = 'a';
    $request->pageSize = 562783;
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsList($request, $requestSecurity);

    if ($response->listLineItemsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsPatch

Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemInput;
use \OpenAPI\OpenAPI\Models\Shared\BiddingStrategy;
use \OpenAPI\OpenAPI\Models\Shared\FixedBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\MaximizeSpendBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategy;
use \OpenAPI\OpenAPI\Models\Shared\PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetInput;
use \OpenAPI\OpenAPI\Models\Shared\LineItemBudgetBudgetAllocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConversionCountingConfig;
use \OpenAPI\OpenAPI\Models\Shared\TrackingFloodlightActivityConfig;
use \OpenAPI\OpenAPI\Models\Shared\LineItemEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlight;
use \OpenAPI\OpenAPI\Models\Shared\DateRange;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\LineItemFlightFlightDateTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCap;
use \OpenAPI\OpenAPI\Models\Shared\FrequencyCapTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\LineItemLineItemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MobileAppInput;
use \OpenAPI\OpenAPI\Models\Shared\Pacing;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingPeriodEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacingPacingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCost;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostCostTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostFeeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerCostInvoiceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModel;
use \OpenAPI\OpenAPI\Models\Shared\PartnerRevenueModelMarkupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetingExpansionConfigTargetingExpansionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyInput;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersBiddingStrategyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersSettingsContentCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersInventorySourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequency;
use \OpenAPI\OpenAPI\Models\Shared\TargetFrequencyTimeUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeAndPartnersThirdPartyMeasurementSettings;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfig;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVendorConfigVendorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettings;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceSettingsMinimumDurationEnum;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStep;
use \OpenAPI\OpenAPI\Models\Shared\VideoAdSequenceStepInteractionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->lineItemInput = new LineItemInput();
    $request->lineItemInput->bidStrategy = new BiddingStrategy();
    $request->lineItemInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->lineItemInput->bidStrategy->fixedBid->bidAmountMicros = 'perspiciatis';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'in';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'adipisci';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'occaecati';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'consequuntur';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'fugit';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA;
    $request->lineItemInput->budget = new LineItemBudgetInput();
    $request->lineItemInput->budget->budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum::LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC;
    $request->lineItemInput->budget->maxAmount = 'reprehenderit';
    $request->lineItemInput->conversionCounting = new ConversionCountingConfig();
    $request->lineItemInput->conversionCounting->floodlightActivityConfigs = [
        new TrackingFloodlightActivityConfig(),
        new TrackingFloodlightActivityConfig(),
        new TrackingFloodlightActivityConfig(),
    ];
    $request->lineItemInput->conversionCounting->postViewCountPercentageMillis = 'illo';
    $request->lineItemInput->creativeIds = [
        'quidem',
        'eveniet',
    ];
    $request->lineItemInput->displayName = 'non';
    $request->lineItemInput->entityStatus = LineItemEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->lineItemInput->excludeNewExchanges = false;
    $request->lineItemInput->flight = new LineItemFlight();
    $request->lineItemInput->flight->dateRange = new DateRange();
    $request->lineItemInput->flight->dateRange->endDate = new Date();
    $request->lineItemInput->flight->dateRange->endDate->day = 39615;
    $request->lineItemInput->flight->dateRange->endDate->month = 434156;
    $request->lineItemInput->flight->dateRange->endDate->year = 59944;
    $request->lineItemInput->flight->dateRange->startDate = new Date();
    $request->lineItemInput->flight->dateRange->startDate->day = 517612;
    $request->lineItemInput->flight->dateRange->startDate->month = 61078;
    $request->lineItemInput->flight->dateRange->startDate->year = 474668;
    $request->lineItemInput->flight->flightDateType = LineItemFlightFlightDateTypeEnum::LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM;
    $request->lineItemInput->frequencyCap = new FrequencyCap();
    $request->lineItemInput->frequencyCap->maxImpressions = 184362;
    $request->lineItemInput->frequencyCap->maxViews = 739884;
    $request->lineItemInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_WEEKS;
    $request->lineItemInput->frequencyCap->timeUnitCount = 898063;
    $request->lineItemInput->frequencyCap->unlimited = false;
    $request->lineItemInput->insertionOrderId = 'ratione';
    $request->lineItemInput->integrationDetails = new IntegrationDetails();
    $request->lineItemInput->integrationDetails->details = 'laborum';
    $request->lineItemInput->integrationDetails->integrationCode = 'distinctio';
    $request->lineItemInput->lineItemType = LineItemLineItemTypeEnum::LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE;
    $request->lineItemInput->mobileApp = new MobileAppInput();
    $request->lineItemInput->mobileApp->appId = 'rem';
    $request->lineItemInput->pacing = new Pacing();
    $request->lineItemInput->pacing->dailyMaxImpressions = 'aliquam';
    $request->lineItemInput->pacing->dailyMaxMicros = 'ad';
    $request->lineItemInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_FLIGHT;
    $request->lineItemInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_UNSPECIFIED;
    $request->lineItemInput->partnerCosts = [
        new PartnerCost(),
        new PartnerCost(),
    ];
    $request->lineItemInput->partnerRevenueModel = new PartnerRevenueModel();
    $request->lineItemInput->partnerRevenueModel->markupAmount = 'perspiciatis';
    $request->lineItemInput->partnerRevenueModel->markupType = PartnerRevenueModelMarkupTypeEnum::PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM;
    $request->lineItemInput->targetingExpansion = new TargetingExpansionConfig();
    $request->lineItemInput->targetingExpansion->excludeFirstPartyAudience = false;
    $request->lineItemInput->targetingExpansion->targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum::BALANCED_EXPANSION;
    $request->lineItemInput->youtubeAndPartnersSettings = new YoutubeAndPartnersSettingsInput();
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy = new YoutubeAndPartnersBiddingStrategyInput();
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy->type = YoutubeAndPartnersBiddingStrategyTypeEnum::YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM;
    $request->lineItemInput->youtubeAndPartnersSettings->biddingStrategy->value = 'alias';
    $request->lineItemInput->youtubeAndPartnersSettings->contentCategory = YoutubeAndPartnersSettingsContentCategoryEnum::YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings = new YoutubeAndPartnersInventorySourceConfig();
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeSearch = false;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideoPartners = false;
    $request->lineItemInput->youtubeAndPartnersSettings->inventorySourceSettings->includeYoutubeVideos = false;
    $request->lineItemInput->youtubeAndPartnersSettings->leadFormId = 'reiciendis';
    $request->lineItemInput->youtubeAndPartnersSettings->linkedMerchantId = 'dolores';
    $request->lineItemInput->youtubeAndPartnersSettings->relatedVideoIds = [
        'minima',
        'dolore',
        'dolorum',
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency = new TargetFrequency();
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->targetCount = 'nesciunt';
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->timeUnit = TargetFrequencyTimeUnitEnum::TIME_UNIT_UNSPECIFIED;
    $request->lineItemInput->youtubeAndPartnersSettings->targetFrequency->timeUnitCount = 925703;
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings = new YoutubeAndPartnersThirdPartyMeasurementSettings();
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandLiftVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->brandSafetyVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->reachVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->thirdPartyMeasurementSettings->viewabilityVendorConfigs = [
        new ThirdPartyVendorConfig(),
        new ThirdPartyVendorConfig(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings = new VideoAdSequenceSettings();
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings->minimumDuration = VideoAdSequenceSettingsMinimumDurationEnum::VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED;
    $request->lineItemInput->youtubeAndPartnersSettings->videoAdSequenceSettings->steps = [
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
        new VideoAdSequenceStep(),
    ];
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap = new FrequencyCap();
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->maxImpressions = 238413;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->maxViews = 890653;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_WEEKS;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->timeUnitCount = 432606;
    $request->lineItemInput->youtubeAndPartnersSettings->viewFrequencyCap->unlimited = false;
    $request->accessToken = 'nemo';
    $request->advertiserId = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quis';
    $request->key = 'eum';
    $request->lineItemId = 'reiciendis';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->updateMask = 'ullam';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'animi';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsPatch($request, $requestSecurity);

    if ($response->lineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->assignedTargetingOptionInput = new AssignedTargetingOptionInput();
    $request->assignedTargetingOptionInput->ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE3034;
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'provident';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'possimus';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_XBOX;
    $request->assignedTargetingOptionInput->appDetails->negative = false;
    $request->assignedTargetingOptionInput->audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup->settings = [
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup = new CombinedAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup->settings = [
        new CombinedAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup = new CustomListGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup->settings = [
        new CustomListTargetingSetting(),
        new CustomListTargetingSetting(),
        new CustomListTargetingSetting(),
        new CustomListTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedFirstAndThirdPartyAudienceGroups = [
        new FirstAndThirdPartyAudienceGroup(),
        new FirstAndThirdPartyAudienceGroup(),
        new FirstAndThirdPartyAudienceGroup(),
        new FirstAndThirdPartyAudienceGroup(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_MUSIC;
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'nam';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'earum';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 6375.83;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'placeat';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'modi';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'voluptatibus';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'molestias';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'officiis';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'sapiente';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_POST_ROLL;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'rerum';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::TUESDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 335498;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 82057;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'cumque';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum::CONTENT_RATING_TIER_UNSPECIFIED;
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum::EXCHANGE_BRIGHTROLL_DISPLAY;
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_MALE;
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'eius';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'at';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'impedit';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'eos';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'sapiente';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_IN_ARTICLE;
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'dicta';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_UNSPECIFIED;
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'beatae';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'cupiditate';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_NOT_A_PARENT;
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 9364.69;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'hic';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'illum';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadius = 525.08;
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum::PROXIMITY_RADIUS_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'perspiciatis';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum::SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO;
    $request->assignedTargetingOptionInput->sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sessionPositionDetails->sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum::SESSION_POSITION_FIRST_IMPRESSION;
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'aliquid';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::ILLEGAL_CONTENT,
        AdlooxExcludedAdlooxCategoriesEnum::ADULT_CONTENT_HARD,
        AdlooxExcludedAdlooxCategoriesEnum::ADULT_CONTENT_HARD,
        AdlooxExcludedAdlooxCategoriesEnum::VIOLENT_CONTENT_WEAPONS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE3_POINT5_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE12_PLUS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::CRIMINAL_SKILLS,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ALCOHOL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::DISASTER_VEHICLE,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'suscipit';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE75_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD100;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X3005;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY40_PERCENT_HIHGER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIEWED_PERFORMANCE10_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'tempora',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY50;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ875;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'dicta';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'odio';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_SMALL;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY40_PERCENT_OR_MORE;
    $request->assignedTargetingOptionInput->youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeChannelDetails->channelId = 'ex';
    $request->assignedTargetingOptionInput->youtubeChannelDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeVideoDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails->videoId = 'consectetur';
    $request->accessToken = 'aliquid';
    $request->advertiserId = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'nostrum';
    $request->key = 'fugiat';
    $request->lineItemId = 'expedita';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_HOUSEHOLD_INCOME;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptas';
    $request->advertiserId = 'iste';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'ab';
    $request->callback = 'error';
    $request->fields = 'possimus';
    $request->key = 'voluptates';
    $request->lineItemId = 'mollitia';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_DEVICE_TYPE;
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'enim';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellendus';
    $request->advertiserId = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'ex';
    $request->callback = 'ut';
    $request->fields = 'ad';
    $request->key = 'expedita';
    $request->lineItemId = 'voluptatem';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_ON_SCREEN_POSITION;
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'voluptatum';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a line item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->advertiserId = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->fields = 'voluptatem';
    $request->filter = 'sapiente';
    $request->key = 'officiis';
    $request->lineItemId = 'architecto';
    $request->oauthToken = 'fuga';
    $request->orderBy = 'pariatur';
    $request->pageSize = 891315;
    $request->pageToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_DEVICE_MAKE_MODEL;
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ex';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listLineItemAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersList

Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nemo';
    $request->fields = 'asperiores';
    $request->filter = 'ratione';
    $request->key = 'ullam';
    $request->oauthToken = 'perferendis';
    $request->orderBy = 'illum';
    $request->pageSize = 518150;
    $request->pageToken = 'impedit';
    $request->partnerId = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'culpa';

    $requestSecurity = new DisplayvideoAdvertisersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersList($request, $requestSecurity);

    if ($response->listAdvertisersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersListAssignedTargetingOptions

Lists assigned targeting options of an advertiser across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersListAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersListAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aliquam';
    $request->advertiserId = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veritatis';
    $request->fields = 'tempora';
    $request->filter = 'dolor';
    $request->key = 'consequatur';
    $request->oauthToken = 'architecto';
    $request->orderBy = 'sit';
    $request->pageSize = 265039;
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'laudantium';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersListAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListAdvertiserAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit

Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditAssignedLocationsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AssignedLocationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditAssignedLocationsRequestInput = new BulkEditAssignedLocationsRequestInput();
    $request->bulkEditAssignedLocationsRequestInput->createdAssignedLocations = [
        new AssignedLocationInput(),
        new AssignedLocationInput(),
        new AssignedLocationInput(),
        new AssignedLocationInput(),
    ];
    $request->bulkEditAssignedLocationsRequestInput->deletedAssignedLocations = [
        'consequuntur',
        'ipsa',
    ];
    $request->accessToken = 'quas';
    $request->advertiserId = 'eveniet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officiis';
    $request->fields = 'esse';
    $request->key = 'necessitatibus';
    $request->locationListId = 'sed';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'expedita';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit($request, $requestSecurity);

    if ($response->bulkEditAssignedLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsCreate

Creates an assignment between a location and a location list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedLocationInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->assignedLocationInput = new AssignedLocationInput();
    $request->assignedLocationInput->targetingOptionId = 'voluptatum';
    $request->accessToken = 'magnam';
    $request->advertiserId = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'autem';
    $request->key = 'nobis';
    $request->locationListId = 'laboriosam';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'exercitationem';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsAssignedLocationsCreate($request, $requestSecurity);

    if ($response->assignedLocation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsDelete

Deletes the assignment between a location and a location list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quasi';
    $request->advertiserId = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->assignedLocationId = 'vero';
    $request->callback = 'est';
    $request->fields = 'harum';
    $request->key = 'sequi';
    $request->locationListId = 'doloribus';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'nemo';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsAssignedLocationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsAssignedLocationsList

Lists locations assigned to a location list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'blanditiis';
    $request->advertiserId = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'nemo';
    $request->filter = 'quos';
    $request->key = 'eius';
    $request->locationListId = 'aspernatur';
    $request->oauthToken = 'ducimus';
    $request->orderBy = 'nesciunt';
    $request->pageSize = 681740;
    $request->pageToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsAssignedLocationsList($request, $requestSecurity);

    if ($response->listAssignedLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsCreate

Creates a new location list. Returns the newly created location list if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationListInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationListLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->locationListInput = new LocationListInput();
    $request->locationListInput->advertiserId = 'dicta';
    $request->locationListInput->displayName = 'nisi';
    $request->locationListInput->locationType = LocationListLocationTypeEnum::TARGETING_LOCATION_TYPE_UNSPECIFIED;
    $request->accessToken = 'consectetur';
    $request->advertiserId = 'aperiam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'soluta';
    $request->key = 'alias';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eos';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'iste';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsCreate($request, $requestSecurity);

    if ($response->locationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsList

Lists location lists based on a given advertiser id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'inventore';
    $request->advertiserId = 'fuga';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'distinctio';
    $request->filter = 'omnis';
    $request->key = 'delectus';
    $request->oauthToken = 'minima';
    $request->orderBy = 'praesentium';
    $request->pageSize = 802692;
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsList($request, $requestSecurity);

    if ($response->listLocationListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLocationListsPatch

Updates a location list. Returns the updated location list if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\LocationListInput;
use \OpenAPI\OpenAPI\Models\Shared\LocationListLocationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLocationListsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLocationListsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->locationListInput = new LocationListInput();
    $request->locationListInput->advertiserId = 'commodi';
    $request->locationListInput->displayName = 'totam';
    $request->locationListInput->locationType = LocationListLocationTypeEnum::TARGETING_LOCATION_TYPE_REGIONAL;
    $request->accessToken = 'modi';
    $request->advertiserId = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'ipsam';
    $request->key = 'vel';
    $request->locationListId = 'alias';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->updateMask = 'maiores';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new DisplayvideoAdvertisersLocationListsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLocationListsPatch($request, $requestSecurity);

    if ($response->locationList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersActivate

Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'esse' => 'nemo',
        'reprehenderit' => 'est',
        'quis' => 'sint',
    ];
    $request->accessToken = 'accusamus';
    $request->advertiserId = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'necessitatibus';
    $request->fields = 'asperiores';
    $request->key = 'ex';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->triggerId = 'delectus';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'minus';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersActivate($request, $requestSecurity);

    if ($response->manualTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersCreate

Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManualTriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->manualTriggerInput = new ManualTriggerInput();
    $request->manualTriggerInput->activationDurationMinutes = 'laborum';
    $request->manualTriggerInput->advertiserId = 'consectetur';
    $request->manualTriggerInput->displayName = 'velit';
    $request->accessToken = 'atque';
    $request->advertiserId = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magni';
    $request->fields = 'soluta';
    $request->key = 'repudiandae';
    $request->oauthToken = 'nam';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersCreate($request, $requestSecurity);

    if ($response->manualTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersDeactivate

Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersDeactivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersDeactivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersDeactivateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'neque' => 'quo',
        'deleniti' => 'quibusdam',
    ];
    $request->accessToken = 'iure';
    $request->advertiserId = 'odit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'magnam';
    $request->key = 'quibusdam';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->quotaUser = 'facere';
    $request->triggerId = 'libero';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersDeactivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersDeactivate($request, $requestSecurity);

    if ($response->manualTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersGet

Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->advertiserId = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'accusantium';
    $request->key = 'vel';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->triggerId = 'vero';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersGet($request, $requestSecurity);

    if ($response->manualTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersList

Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ut';
    $request->advertiserId = 'perspiciatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'impedit';
    $request->filter = 'voluptatibus';
    $request->key = 'iste';
    $request->oauthToken = 'itaque';
    $request->orderBy = 'alias';
    $request->pageSize = 391797;
    $request->pageToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'non';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersList($request, $requestSecurity);

    if ($response->listManualTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersManualTriggersPatch

Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManualTriggerInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersManualTriggersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersManualTriggersPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->manualTriggerInput = new ManualTriggerInput();
    $request->manualTriggerInput->activationDurationMinutes = 'iusto';
    $request->manualTriggerInput->advertiserId = 'sit';
    $request->manualTriggerInput->displayName = 'doloremque';
    $request->accessToken = 'consequatur';
    $request->advertiserId = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'quidem';
    $request->key = 'voluptas';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'placeat';
    $request->triggerId = 'perspiciatis';
    $request->updateMask = 'expedita';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'a';

    $requestSecurity = new DisplayvideoAdvertisersManualTriggersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersManualTriggersPatch($request, $requestSecurity);

    if ($response->manualTrigger !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsCreate

Creates a new negative keyword list. Returns the newly created negative keyword list if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->negativeKeywordListInput = new NegativeKeywordListInput();
    $request->negativeKeywordListInput->displayName = 'ullam';
    $request->accessToken = 'unde';
    $request->advertiserId = 'necessitatibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'ipsam';
    $request->key = 'corporis';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsCreate($request, $requestSecurity);

    if ($response->negativeKeywordList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsList

Lists negative keyword lists based on a given advertiser id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vero';
    $request->advertiserId = 'consectetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'inventore';
    $request->fields = 'dolorem';
    $request->key = 'ad';
    $request->oauthToken = 'qui';
    $request->pageSize = 611328;
    $request->pageToken = 'ex';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'libero';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsList($request, $requestSecurity);

    if ($response->listNegativeKeywordListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit

Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditNegativeKeywordsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditNegativeKeywordsRequestInput = new BulkEditNegativeKeywordsRequestInput();
    $request->bulkEditNegativeKeywordsRequestInput->createdNegativeKeywords = [
        new NegativeKeywordInput(),
        new NegativeKeywordInput(),
        new NegativeKeywordInput(),
    ];
    $request->bulkEditNegativeKeywordsRequestInput->deletedNegativeKeywords = [
        'fugit',
        'alias',
    ];
    $request->accessToken = 'magni';
    $request->advertiserId = 'vel';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quae';
    $request->fields = 'modi';
    $request->key = 'neque';
    $request->negativeKeywordListId = 'exercitationem';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'unde';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit($request, $requestSecurity);

    if ($response->bulkEditNegativeKeywordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete

Deletes a negative keyword from a negative keyword list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->advertiserId = 'maxime';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quia';
    $request->fields = 'nostrum';
    $request->key = 'omnis';
    $request->keywordValue = 'libero';
    $request->negativeKeywordListId = 'dicta';
    $request->oauthToken = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'libero';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'officia';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList

Lists negative keywords in a negative keyword list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'placeat';
    $request->advertiserId = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ipsa';
    $request->fields = 'voluptates';
    $request->filter = 'inventore';
    $request->key = 'aperiam';
    $request->negativeKeywordListId = 'totam';
    $request->oauthToken = 'dolore';
    $request->orderBy = 'eligendi';
    $request->pageSize = 715053;
    $request->pageToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'autem';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'dolores';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList($request, $requestSecurity);

    if ($response->listNegativeKeywordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace

Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReplaceNegativeKeywordsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->replaceNegativeKeywordsRequestInput = new ReplaceNegativeKeywordsRequestInput();
    $request->replaceNegativeKeywordsRequestInput->newNegativeKeywords = [
        new NegativeKeywordInput(),
    ];
    $request->accessToken = 'est';
    $request->advertiserId = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'provident';
    $request->key = 'accusamus';
    $request->negativeKeywordListId = 'necessitatibus';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace($request, $requestSecurity);

    if ($response->replaceNegativeKeywordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersNegativeKeywordListsPatch

Updates a negative keyword list. Returns the updated negative keyword list if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersNegativeKeywordListsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->negativeKeywordListInput = new NegativeKeywordListInput();
    $request->negativeKeywordListInput->displayName = 'rerum';
    $request->accessToken = 'laudantium';
    $request->advertiserId = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'cum';
    $request->key = 'at';
    $request->negativeKeywordListId = 'alias';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->updateMask = 'fuga';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersNegativeKeywordListsPatch($request, $requestSecurity);

    if ($response->negativeKeywordList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersPatch

Updates an existing advertiser. Returns the updated advertiser if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserInput;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserAdServerConfig;
use \OpenAPI\OpenAPI\Models\Shared\CmHybridConfig;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyOnlyConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserBillingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserCreativeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserDataAccessConfig;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserSdfConfig;
use \OpenAPI\OpenAPI\Models\Shared\SdfConfig;
use \OpenAPI\OpenAPI\Models\Shared\SdfConfigVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserEntityStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserGeneralConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationDetails;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiserTargetingConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->advertiserInput = new AdvertiserInput();
    $request->advertiserInput->adServerConfig = new AdvertiserAdServerConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig = new CmHybridConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmAccountId = 'officiis';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightConfigId = 'eos';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightLinkingAuthorized = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmSyncableSiteIds = [
        'odio',
        'praesentium',
        'odit',
        'explicabo',
    ];
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmCostReportingEnabled = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmDataSharingEnabled = false;
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig = new ThirdPartyOnlyConfig();
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig->pixelOrderIdReportingEnabled = false;
    $request->advertiserInput->billingConfig = new AdvertiserBillingConfig();
    $request->advertiserInput->billingConfig->billingProfileId = 'corporis';
    $request->advertiserInput->creativeConfig = new AdvertiserCreativeConfig();
    $request->advertiserInput->creativeConfig->dynamicCreativeEnabled = false;
    $request->advertiserInput->creativeConfig->iasClientId = 'error';
    $request->advertiserInput->creativeConfig->obaComplianceDisabled = false;
    $request->advertiserInput->creativeConfig->videoCreativeDataSharingAuthorized = false;
    $request->advertiserInput->dataAccessConfig = new AdvertiserDataAccessConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig = new AdvertiserSdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->overridePartnerSdfConfig = false;
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig = new SdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->adminEmail = 'earum';
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->version = SdfConfigVersionEnum::SDF_VERSION4;
    $request->advertiserInput->displayName = 'recusandae';
    $request->advertiserInput->entityStatus = AdvertiserEntityStatusEnum::ENTITY_STATUS_DRAFT;
    $request->advertiserInput->generalConfig = new AdvertiserGeneralConfigInput();
    $request->advertiserInput->generalConfig->currencyCode = 'ut';
    $request->advertiserInput->generalConfig->domainUrl = 'quidem';
    $request->advertiserInput->integrationDetails = new IntegrationDetails();
    $request->advertiserInput->integrationDetails->details = 'quis';
    $request->advertiserInput->integrationDetails->integrationCode = 'beatae';
    $request->advertiserInput->partnerId = 'unde';
    $request->advertiserInput->prismaEnabled = false;
    $request->advertiserInput->servingConfig = new AdvertiserTargetingConfig();
    $request->advertiserInput->servingConfig->exemptTvFromViewabilityTargeting = false;
    $request->accessToken = 'molestiae';
    $request->advertiserId = 'delectus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'numquam';
    $request->key = 'numquam';
    $request->oauthToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->updateMask = 'officia';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'optio';

    $requestSecurity = new DisplayvideoAdvertisersPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersPatch($request, $requestSecurity);

    if ($response->advertiser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AssignedTargetingOptionInput;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AppCategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\AppAssignedTargetingOptionDetailsAppPlatformEnum;
use \OpenAPI\OpenAPI\Models\Shared\AudienceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\FirstAndThirdPartyAudienceTargetingSettingRecencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceGroup;
use \OpenAPI\OpenAPI\Models\Shared\CombinedAudienceTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\CustomListGroup;
use \OpenAPI\OpenAPI\Models\Shared\CustomListTargetingSetting;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedSellerStatusAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BrowserAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\CarrierAndIspAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\CategoryAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ContentDurationAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentGenreAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentStreamTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum;
use \OpenAPI\OpenAPI\Models\Shared\DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMakeModelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetailsExchangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\GenderAssignedTargetingOptionDetailsGenderEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeoRegionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\InventorySourceGroupAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\KeywordAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\LanguageAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\NegativeKeywordListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\OmidAssignedTargetingOptionDetailsOmidEnum;
use \OpenAPI\OpenAPI\Models\Shared\OnScreenPositionAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\OperatingSystemAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubExchangeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyVerifierAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\Adloox;
use \OpenAPI\OpenAPI\Models\Shared\AdlooxExcludedAdlooxCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerify;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRating;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAppStarRatingAvoidedStarRatingEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyAvoidedAgeRatingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategories;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyDisplayViewabilityViewableDuringEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTraffic;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewability;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityPlayerImpressionRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoIabEnum;
use \OpenAPI\OpenAPI\Models\Shared\DoubleVerifyVideoViewabilityVideoViewableRateEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScience;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceDisplayViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdFraudRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAdultRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedAlcoholRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedDrugsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedGamblingRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedHateSpeechRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedIllegalDownloadsRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedOffensiveLanguageRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceExcludedViolenceRiskEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceTraqScoreOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IntegralAdScienceVideoViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\UrlAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\UserRewardedContentAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeChannelAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\YoutubeVideoAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->assignedTargetingOptionInput = new AssignedTargetingOptionInput();
    $request->assignedTargetingOptionInput->ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE65_PLUS;
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'qui';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'expedita';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_PLAYSTATION;
    $request->assignedTargetingOptionInput->appDetails->negative = false;
    $request->assignedTargetingOptionInput->audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedFirstAndThirdPartyAudienceGroup->settings = [
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
        new FirstAndThirdPartyAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->excludedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup = new CombinedAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCombinedAudienceGroup->settings = [
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
        new CombinedAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup = new CustomListGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedCustomListGroup->settings = [
        new CustomListTargetingSetting(),
        new CustomListTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedFirstAndThirdPartyAudienceGroups = [
        new FirstAndThirdPartyAudienceGroup(),
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_BROADCAST;
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'eum';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'modi';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 3573.47;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'voluptates';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'maiores';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'tempore';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'aperiam';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'libero';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'ratione';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_PRE_ROLL;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_IN_BANNER;
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'occaecati';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::WEDNESDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 779180;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 242099;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_ADVERTISER;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'fuga';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_COMPUTER;
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedContentRatingTier = DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnum::CONTENT_RATING_TIER_TEENS;
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_APP;
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->exchange = ExchangeAssignedTargetingOptionDetailsExchangeEnum::EXCHANGE_CONNATIX;
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_FEMALE;
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'vero';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_UNKNOWN;
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'repellat';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'pariatur';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'nemo';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'reprehenderit';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'odio';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_UNSPECIFIED;
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'in';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'ducimus';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_NOT_A_PARENT;
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 1721.95;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_MILES;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'veritatis';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'ducimus';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadius = 4527.29;
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusUnit = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnum::PROXIMITY_RADIUS_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'itaque';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedSensitiveCategory = SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnum::SENSITIVE_CATEGORY_POLITICS;
    $request->assignedTargetingOptionInput->sessionPositionDetails = new SessionPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->sessionPositionDetails->sessionPosition = SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum::SESSION_POSITION_FIRST_IMPRESSION;
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'ex';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::ILLEGAL_CONTENT,
        AdlooxExcludedAdlooxCategoriesEnum::LOW_VIEWABILITY_DOMAINS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE4_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE4_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE9_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE_UNKNOWN,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::GRAPHIC_VIOLENCE_WEAPONS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::CELEBRITY_GOSSIP,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::INFLAMMATORY_POLITICS_AND_NEWS,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NEGATIVE_NEWS_FINANCIAL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ADULT_CONTENT_SWIMSUIT,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'earum';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE70_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION10_SEC;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD100;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X30025;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY80_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIEWED_PERFORMANCE40_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'nobis',
        'ipsa',
        'ducimus',
        'maiores',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ1000;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY60;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'sint';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'enim';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_UNKNOWN;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY60_PERCENT_OR_MORE;
    $request->assignedTargetingOptionInput->youtubeChannelDetails = new YoutubeChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeChannelDetails->channelId = 'quas';
    $request->assignedTargetingOptionInput->youtubeChannelDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails = new YoutubeVideoAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->youtubeVideoDetails->negative = false;
    $request->assignedTargetingOptionInput->youtubeVideoDetails->videoId = 'totam';
    $request->accessToken = 'molestias';
    $request->advertiserId = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'architecto';
    $request->key = 'quos';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_INVENTORY_SOURCE_GROUP;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'velit';

    $requestSecurity = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->advertiserId = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'ipsum';
    $request->callback = 'adipisci';
    $request->fields = 'saepe';
    $request->key = 'deserunt';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_AUDIENCE_GROUP;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestiae';
    $request->advertiserId = 'eligendi';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'non';
    $request->callback = 'magnam';
    $request->fields = 'itaque';
    $request->key = 'sed';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'veniam';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_PROXIMITY_LOCATION_LIST;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->advertiserId = 'amet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ab';
    $request->fields = 'velit';
    $request->filter = 'facilis';
    $request->key = 'tempore';
    $request->oauthToken = 'nisi';
    $request->orderBy = 'voluptatibus';
    $request->pageSize = 310840;
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_ON_SCREEN_POSITION;
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listAdvertiserAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupAdsGet

Gets a YouTube ad group ad.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'minus';
    $request->advertiserId = 'facere';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'ad';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'labore';
    $request->youtubeAdGroupAdId = 'rerum';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupAdsGet($request, $requestSecurity);

    if ($response->youtubeAdGroupAd !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupAdsList

Lists YouTube ad group ads.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reprehenderit';
    $request->advertiserId = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iusto';
    $request->fields = 'est';
    $request->filter = 'rem';
    $request->key = 'eligendi';
    $request->oauthToken = 'fugiat';
    $request->orderBy = 'unde';
    $request->pageSize = 889448;
    $request->pageToken = 'ducimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'error';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupAdsList($request, $requestSecurity);

    if ($response->listYoutubeAdGroupAdsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions

Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vitae';
    $request->advertiserId = 'dignissimos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'ad';
    $request->filter = 'aspernatur';
    $request->key = 'enim';
    $request->oauthToken = 'delectus';
    $request->orderBy = 'iusto';
    $request->pageSize = 491201;
    $request->pageToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'illo';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'incidunt';
    $request->youtubeAdGroupIds = [
        'saepe',
        'tempore',
        'veniam',
        'eos',
    ];

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListAdGroupAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupsGet

Gets a YouTube ad group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'earum';
    $request->advertiserId = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nemo';
    $request->fields = 'repellat';
    $request->key = 'quisquam';
    $request->oauthToken = 'sequi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'illo';
    $request->youtubeAdGroupId = 'labore';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupsGet($request, $requestSecurity);

    if ($response->youtubeAdGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupsList

Lists YouTube ad groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->advertiserId = 'quisquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'repudiandae';
    $request->filter = 'consequatur';
    $request->key = 'maxime';
    $request->oauthToken = 'aspernatur';
    $request->orderBy = 'nam';
    $request->pageSize = 711991;
    $request->pageToken = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'rerum';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupsList($request, $requestSecurity);

    if ($response->listYoutubeAdGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->advertiserId = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'repellendus';
    $request->callback = 'iure';
    $request->fields = 'dolorem';
    $request->key = 'commodi';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->targetingType = DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_UNSPECIFIED;
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'ad';
    $request->youtubeAdGroupId = 'quae';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet($request, $requestSecurity);

    if ($response->assignedTargetingOption !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->advertiserId = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'amet';
    $request->filter = 'quasi';
    $request->key = 'dicta';
    $request->oauthToken = 'laudantium';
    $request->orderBy = 'doloremque';
    $request->pageSize = 938412;
    $request->pageToken = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->targetingType = DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_NEGATIVE_KEYWORD_LIST;
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'necessitatibus';
    $request->youtubeAdGroupId = 'provident';

    $requestSecurity = new DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList($request, $requestSecurity);

    if ($response->listYoutubeAdGroupAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
