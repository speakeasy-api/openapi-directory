# advertisers

### Available Operations

* [displayvideoAdvertisersAssetsUpload](#displayvideoadvertisersassetsupload) - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* [displayvideoAdvertisersAudit](#displayvideoadvertisersaudit) - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* [displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions](#displayvideoadvertisersbulkeditadvertiserassignedtargetingoptions) - Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* [displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions](#displayvideoadvertisersbulklistadvertiserassignedtargetingoptions) - Lists assigned targeting options of an advertiser across targeting types.
* [displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions](#displayvideoadvertiserscampaignsbulklistcampaignassignedtargetingoptions) - Lists assigned targeting options of a campaign across targeting types.
* [displayvideoAdvertisersCampaignsCreate](#displayvideoadvertiserscampaignscreate) - Creates a new campaign. Returns the newly created campaign if successful.
* [displayvideoAdvertisersCampaignsDelete](#displayvideoadvertiserscampaignsdelete) - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersCampaignsGet](#displayvideoadvertiserscampaignsget) - Gets a campaign.
* [displayvideoAdvertisersCampaignsList](#displayvideoadvertiserscampaignslist) - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
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
* [displayvideoAdvertisersGet](#displayvideoadvertisersget) - Gets an advertiser.
* [displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions](#displayvideoadvertisersinsertionordersbulklistinsertionorderassignedtargetingoptions) - Lists assigned targeting options of an insertion order across targeting types.
* [displayvideoAdvertisersInsertionOrdersCreate](#displayvideoadvertisersinsertionorderscreate) - Creates a new insertion order. Returns the newly created insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersDelete](#displayvideoadvertisersinsertionordersdelete) - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersInsertionOrdersGet](#displayvideoadvertisersinsertionordersget) - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* [displayvideoAdvertisersInsertionOrdersList](#displayvideoadvertisersinsertionorderslist) - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersInsertionOrdersPatch](#displayvideoadvertisersinsertionorderspatch) - Updates an existing insertion order. Returns the updated insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an insertion order.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an insertion order.
* [displayvideoAdvertisersInvoicesList](#displayvideoadvertisersinvoiceslist) - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* [displayvideoAdvertisersInvoicesLookupInvoiceCurrency](#displayvideoadvertisersinvoiceslookupinvoicecurrency) - Retrieves the invoice currency used by an advertiser in a given month.
* [displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulkeditlineitemassignedtargetingoptions) - Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulklistlineitemassignedtargetingoptions) - Lists assigned targeting options of a line item across targeting types.
* [displayvideoAdvertisersLineItemsCreate](#displayvideoadvertiserslineitemscreate) - Creates a new line item. Returns the newly created line item if successful.
* [displayvideoAdvertisersLineItemsDelete](#displayvideoadvertiserslineitemsdelete) - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersLineItemsGenerateDefault](#displayvideoadvertiserslineitemsgeneratedefault) - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* [displayvideoAdvertisersLineItemsGet](#displayvideoadvertiserslineitemsget) - Gets a line item.
* [displayvideoAdvertisersLineItemsList](#displayvideoadvertiserslineitemslist) - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersLineItemsPatch](#displayvideoadvertiserslineitemspatch) - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a line item.
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a line item.
* [displayvideoAdvertisersList](#displayvideoadvertiserslist) - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
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

## displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions

Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest;
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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
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
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput = new BulkEditAdvertiserAssignedTargetingOptionsRequestInput();
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditAdvertiserAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->accessToken = 'at';
    $request->advertiserId = 'maiores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'quod';
    $request->key = 'esse';
    $request->oauthToken = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditAdvertiserAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions

Lists assigned targeting options of an advertiser across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officia';
    $request->advertiserId = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deleniti';
    $request->fields = 'hic';
    $request->filter = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->orderBy = 'commodi';
    $request->pageSize = 473600;
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListAdvertiserAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions

Lists assigned targeting options of a campaign across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsum';
    $request->advertiserId = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->campaignId = 'ad';
    $request->fields = 'natus';
    $request->filter = 'sed';
    $request->key = 'iste';
    $request->oauthToken = 'dolor';
    $request->orderBy = 'natus';
    $request->pageSize = 386489;
    $request->pageToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'saepe';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'in';

    $requestSecurity = new DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListCampaignAssignedTargetingOptionsResponse !== null) {
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->campaignInput = new CampaignInput();
    $request->campaignInput->campaignBudgets = [
        new CampaignBudget(),
        new CampaignBudget(),
        new CampaignBudget(),
    ];
    $request->campaignInput->campaignFlight = new CampaignFlight();
    $request->campaignInput->campaignFlight->plannedDates = new DateRange();
    $request->campaignInput->campaignFlight->plannedDates->endDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->endDate->day = 437032;
    $request->campaignInput->campaignFlight->plannedDates->endDate->month = 902349;
    $request->campaignInput->campaignFlight->plannedDates->endDate->year = 697631;
    $request->campaignInput->campaignFlight->plannedDates->startDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->startDate->day = 99280;
    $request->campaignInput->campaignFlight->plannedDates->startDate->month = 60225;
    $request->campaignInput->campaignFlight->plannedDates->startDate->year = 969810;
    $request->campaignInput->campaignFlight->plannedSpendAmountMicros = 'est';
    $request->campaignInput->campaignGoal = new CampaignGoal();
    $request->campaignInput->campaignGoal->campaignGoalType = CampaignGoalCampaignGoalTypeEnum::CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION;
    $request->campaignInput->campaignGoal->performanceGoal = new PerformanceGoal();
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalAmountMicros = 'laborum';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalPercentageMicros = 'dolores';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalString = 'dolorem';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_VIEWABILITY;
    $request->campaignInput->displayName = 'explicabo';
    $request->campaignInput->entityStatus = CampaignEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->campaignInput->frequencyCap = new FrequencyCap();
    $request->campaignInput->frequencyCap->maxImpressions = 315428;
    $request->campaignInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_DAYS;
    $request->campaignInput->frequencyCap->timeUnitCount = 363711;
    $request->campaignInput->frequencyCap->unlimited = false;
    $request->accessToken = 'minima';
    $request->advertiserId = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'culpa';
    $request->key = 'doloribus';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'dolorem';

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
    $request->accessToken = 'consequuntur';
    $request->advertiserId = 'repellat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'occaecati';
    $request->campaignId = 'numquam';
    $request->fields = 'commodi';
    $request->key = 'quam';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->advertiserId = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->campaignId = 'odit';
    $request->fields = 'quo';
    $request->key = 'sequi';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'possimus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->advertiserId = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'quasi';
    $request->filter = 'reiciendis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'vero';
    $request->orderBy = 'nihil';
    $request->pageSize = 509624;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->campaignInput = new CampaignInput();
    $request->campaignInput->campaignBudgets = [
        new CampaignBudget(),
    ];
    $request->campaignInput->campaignFlight = new CampaignFlight();
    $request->campaignInput->campaignFlight->plannedDates = new DateRange();
    $request->campaignInput->campaignFlight->plannedDates->endDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->endDate->day = 39187;
    $request->campaignInput->campaignFlight->plannedDates->endDate->month = 441711;
    $request->campaignInput->campaignFlight->plannedDates->endDate->year = 282807;
    $request->campaignInput->campaignFlight->plannedDates->startDate = new Date();
    $request->campaignInput->campaignFlight->plannedDates->startDate->day = 979587;
    $request->campaignInput->campaignFlight->plannedDates->startDate->month = 120196;
    $request->campaignInput->campaignFlight->plannedDates->startDate->year = 359444;
    $request->campaignInput->campaignFlight->plannedSpendAmountMicros = 'dolore';
    $request->campaignInput->campaignGoal = new CampaignGoal();
    $request->campaignInput->campaignGoal->campaignGoalType = CampaignGoalCampaignGoalTypeEnum::CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS;
    $request->campaignInput->campaignGoal->performanceGoal = new PerformanceGoal();
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalAmountMicros = 'dicta';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalPercentageMicros = 'harum';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalString = 'enim';
    $request->campaignInput->campaignGoal->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE;
    $request->campaignInput->displayName = 'commodi';
    $request->campaignInput->entityStatus = CampaignEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->campaignInput->frequencyCap = new FrequencyCap();
    $request->campaignInput->frequencyCap->maxImpressions = 64147;
    $request->campaignInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_LIFETIME;
    $request->campaignInput->frequencyCap->timeUnitCount = 692472;
    $request->campaignInput->frequencyCap->unlimited = false;
    $request->accessToken = 'molestias';
    $request->advertiserId = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->campaignId = 'praesentium';
    $request->fields = 'rem';
    $request->key = 'voluptates';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->updateMask = 'sint';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->advertiserId = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'quibusdam';
    $request->callback = 'explicabo';
    $request->campaignId = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->targetingType = DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_PROXIMITY_LOCATION_LIST;
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

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
    $request->accessToken = 'perferendis';
    $request->advertiserId = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->campaignId = 'alias';
    $request->fields = 'fugit';
    $request->filter = 'dolorum';
    $request->key = 'excepturi';
    $request->oauthToken = 'tempora';
    $request->orderBy = 'facilis';
    $request->pageSize = 735194;
    $request->pageToken = 'labore';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->targetingType = DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_ON_SCREEN_POSITION;
    $request->uploadType = 'non';
    $request->uploadProtocol = 'eligendi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->advertiserId = 'aliquid';
    $request->channelInput->displayName = 'provident';
    $request->channelInput->partnerId = 'necessitatibus';
    $request->accessToken = 'sint';
    $request->advertiserId = 'officia';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'a';
    $request->key = 'dolorum';
    $request->oauthToken = 'in';
    $request->partnerId = 'in';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'rerum';

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
    $request->accessToken = 'magnam';
    $request->advertiserId = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->filter = 'laborum';
    $request->key = 'accusamus';
    $request->oauthToken = 'non';
    $request->orderBy = 'occaecati';
    $request->pageSize = 313218;
    $request->pageToken = 'accusamus';
    $request->partnerId = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

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
    $request->channelInput->advertiserId = 'blanditiis';
    $request->channelInput->displayName = 'deleniti';
    $request->channelInput->partnerId = 'sapiente';
    $request->accessToken = 'amet';
    $request->advertiserId = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vel';
    $request->channelId = 'natus';
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->partnerId = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->updateMask = 'distinctio';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'labore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditSitesRequestInput = new BulkEditSitesRequestInput();
    $request->bulkEditSitesRequestInput->advertiserId = 'suscipit';
    $request->bulkEditSitesRequestInput->createdSites = [
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
    ];
    $request->bulkEditSitesRequestInput->deletedSites = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->bulkEditSitesRequestInput->partnerId = 'architecto';
    $request->accessToken = 'magnam';
    $request->advertiserId = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->channelId = 'provident';
    $request->fields = 'quos';
    $request->key = 'sint';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eum';
    $request->advertiserId = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'odit';
    $request->channelId = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->oauthToken = 'doloribus';
    $request->partnerId = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'eius';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'deleniti';
    $request->urlOrAppId = 'facilis';

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
    $request->advertiserId = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->channelId = 'expedita';
    $request->fields = 'nihil';
    $request->filter = 'repellat';
    $request->key = 'quibusdam';
    $request->oauthToken = 'sed';
    $request->orderBy = 'saepe';
    $request->pageSize = 868126;
    $request->pageToken = 'accusantium';
    $request->partnerId = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'magni';

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
    $request->replaceSitesRequestInput->advertiserId = 'quo';
    $request->replaceSitesRequestInput->newSites = [
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
        new SiteInput(),
    ];
    $request->replaceSitesRequestInput->partnerId = 'pariatur';
    $request->accessToken = 'maxime';
    $request->advertiserId = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->channelId = 'ea';
    $request->fields = 'accusantium';
    $request->key = 'ab';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'voluptate';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->advertiserInput = new AdvertiserInput();
    $request->advertiserInput->adServerConfig = new AdvertiserAdServerConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig = new CmHybridConfig();
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmAccountId = 'nam';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightConfigId = 'eaque';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightLinkingAuthorized = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmSyncableSiteIds = [
        'nemo',
        'voluptatibus',
        'perferendis',
        'fugiat',
    ];
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmCostReportingEnabled = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmDataSharingEnabled = false;
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig = new ThirdPartyOnlyConfig();
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig->pixelOrderIdReportingEnabled = false;
    $request->advertiserInput->creativeConfig = new AdvertiserCreativeConfig();
    $request->advertiserInput->creativeConfig->dynamicCreativeEnabled = false;
    $request->advertiserInput->creativeConfig->iasClientId = 'amet';
    $request->advertiserInput->creativeConfig->obaComplianceDisabled = false;
    $request->advertiserInput->creativeConfig->videoCreativeDataSharingAuthorized = false;
    $request->advertiserInput->dataAccessConfig = new AdvertiserDataAccessConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig = new AdvertiserSdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->overridePartnerSdfConfig = false;
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig = new SdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->adminEmail = 'aut';
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->version = SdfConfigVersionEnum::SDF_VERSION53;
    $request->advertiserInput->displayName = 'corporis';
    $request->advertiserInput->entityStatus = AdvertiserEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->advertiserInput->generalConfig = new AdvertiserGeneralConfigInput();
    $request->advertiserInput->generalConfig->currencyCode = 'libero';
    $request->advertiserInput->generalConfig->domainUrl = 'nobis';
    $request->advertiserInput->integrationDetails = new IntegrationDetails();
    $request->advertiserInput->integrationDetails->details = 'dolores';
    $request->advertiserInput->integrationDetails->integrationCode = 'quis';
    $request->advertiserInput->partnerId = 'totam';
    $request->advertiserInput->prismaEnabled = false;
    $request->advertiserInput->servingConfig = new AdvertiserTargetingConfig();
    $request->advertiserInput->servingConfig->exemptTvFromViewabilityTargeting = false;
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'nesciunt';
    $request->key = 'eos';
    $request->oauthToken = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'quam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->creativeInput = new CreativeInput();
    $request->creativeInput->additionalDimensions = [
        new Dimensions(),
        new Dimensions(),
        new Dimensions(),
        new Dimensions(),
    ];
    $request->creativeInput->appendedTag = 'nostrum';
    $request->creativeInput->assets = [
        new AssetAssociation(),
        new AssetAssociation(),
        new AssetAssociation(),
        new AssetAssociation(),
    ];
    $request->creativeInput->cmTrackingAd = new CmTrackingAd();
    $request->creativeInput->cmTrackingAd->cmAdId = 'recusandae';
    $request->creativeInput->cmTrackingAd->cmCreativeId = 'omnis';
    $request->creativeInput->cmTrackingAd->cmPlacementId = 'facilis';
    $request->creativeInput->companionCreativeIds = [
        'voluptatem',
        'porro',
        'consequuntur',
    ];
    $request->creativeInput->counterEvents = [
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
    ];
    $request->creativeInput->creativeType = CreativeCreativeTypeEnum::CREATIVE_TYPE_NATIVE_APP_INSTALL;
    $request->creativeInput->dimensions = new Dimensions();
    $request->creativeInput->dimensions->heightPixels = 50370;
    $request->creativeInput->dimensions->widthPixels = 577229;
    $request->creativeInput->displayName = 'rerum';
    $request->creativeInput->entityStatus = CreativeEntityStatusEnum::ENTITY_STATUS_ACTIVE;
    $request->creativeInput->exitEvents = [
        new ExitEvent(),
        new ExitEvent(),
        new ExitEvent(),
        new ExitEvent(),
    ];
    $request->creativeInput->expandOnHover = false;
    $request->creativeInput->expandingDirection = CreativeExpandingDirectionEnum::EXPANDING_DIRECTION_ANY_DIAGONAL;
    $request->creativeInput->hostingSource = CreativeHostingSourceEnum::HOSTING_SOURCE_CM;
    $request->creativeInput->iasCampaignMonitoring = false;
    $request->creativeInput->integrationCode = 'iste';
    $request->creativeInput->jsTrackerUrl = 'dolorum';
    $request->creativeInput->notes = 'deleniti';
    $request->creativeInput->obaIcon = new ObaIcon();
    $request->creativeInput->obaIcon->clickTrackingUrl = 'pariatur';
    $request->creativeInput->obaIcon->dimensions = new Dimensions();
    $request->creativeInput->obaIcon->dimensions->heightPixels = 589910;
    $request->creativeInput->obaIcon->dimensions->widthPixels = 750844;
    $request->creativeInput->obaIcon->landingPageUrl = 'libero';
    $request->creativeInput->obaIcon->position = ObaIconPositionEnum::OBA_ICON_POSITION_LOWER_LEFT;
    $request->creativeInput->obaIcon->program = 'quaerat';
    $request->creativeInput->obaIcon->resourceMimeType = 'quos';
    $request->creativeInput->obaIcon->resourceUrl = 'aliquid';
    $request->creativeInput->obaIcon->viewTrackingUrl = 'dolorem';
    $request->creativeInput->progressOffset = new AudioVideoOffset();
    $request->creativeInput->progressOffset->percentage = 'dolorem';
    $request->creativeInput->progressOffset->seconds = 'dolor';
    $request->creativeInput->requireHtml5 = false;
    $request->creativeInput->requireMraid = false;
    $request->creativeInput->requirePingForAttribution = false;
    $request->creativeInput->reviewStatus = new ReviewStatusInfo();
    $request->creativeInput->reviewStatus->approvalStatus = ReviewStatusInfoApprovalStatusEnum::APPROVAL_STATUS_UNSPECIFIED;
    $request->creativeInput->reviewStatus->contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum::REVIEW_STATUS_UNSPECIFIED;
    $request->creativeInput->reviewStatus->creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum::REVIEW_STATUS_PENDING;
    $request->creativeInput->reviewStatus->exchangeReviewStatuses = [
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
    ];
    $request->creativeInput->reviewStatus->publisherReviewStatuses = [
        new PublisherReviewStatus(),
        new PublisherReviewStatus(),
        new PublisherReviewStatus(),
    ];
    $request->creativeInput->skipOffset = new AudioVideoOffset();
    $request->creativeInput->skipOffset->percentage = 'voluptate';
    $request->creativeInput->skipOffset->seconds = 'dignissimos';
    $request->creativeInput->skippable = false;
    $request->creativeInput->thirdPartyTag = 'reiciendis';
    $request->creativeInput->thirdPartyUrls = [
        new ThirdPartyUrl(),
    ];
    $request->creativeInput->timerEvents = [
        new TimerEvent(),
        new TimerEvent(),
        new TimerEvent(),
    ];
    $request->creativeInput->trackerUrls = [
        'veritatis',
        'ipsa',
    ];
    $request->creativeInput->universalAdId = new UniversalAdId();
    $request->creativeInput->universalAdId->id = '0674ebf6-9280-4d1b-a77a-89ebf737ae42';
    $request->creativeInput->universalAdId->registry = UniversalAdIdRegistryEnum::UNIVERSAL_AD_REGISTRY_UNSPECIFIED;
    $request->creativeInput->vastTagUrl = 'amet';
    $request->accessToken = 'optio';
    $request->advertiserId = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'suscipit';
    $request->key = 'deserunt';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'totam';

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
    $request->accessToken = 'alias';
    $request->advertiserId = 'at';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->creativeId = 'vel';
    $request->fields = 'quod';
    $request->key = 'officiis';
    $request->oauthToken = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'esse';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->advertiserId = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tenetur';
    $request->creativeId = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'enim';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'sapiente';

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
    $request->accessToken = 'nihil';
    $request->advertiserId = 'sit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'neque';
    $request->fields = 'sed';
    $request->filter = 'vel';
    $request->key = 'libero';
    $request->oauthToken = 'voluptas';
    $request->orderBy = 'deserunt';
    $request->pageSize = 463575;
    $request->pageToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'cupiditate';

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
        new Dimensions(),
        new Dimensions(),
    ];
    $request->creativeInput->appendedTag = 'soluta';
    $request->creativeInput->assets = [
        new AssetAssociation(),
    ];
    $request->creativeInput->cmTrackingAd = new CmTrackingAd();
    $request->creativeInput->cmTrackingAd->cmAdId = 'laborum';
    $request->creativeInput->cmTrackingAd->cmCreativeId = 'totam';
    $request->creativeInput->cmTrackingAd->cmPlacementId = 'incidunt';
    $request->creativeInput->companionCreativeIds = [
        'dolores',
    ];
    $request->creativeInput->counterEvents = [
        new CounterEvent(),
        new CounterEvent(),
        new CounterEvent(),
    ];
    $request->creativeInput->creativeType = CreativeCreativeTypeEnum::CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE;
    $request->creativeInput->dimensions = new Dimensions();
    $request->creativeInput->dimensions->heightPixels = 396060;
    $request->creativeInput->dimensions->widthPixels = 463150;
    $request->creativeInput->displayName = 'molestias';
    $request->creativeInput->entityStatus = CreativeEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->creativeInput->exitEvents = [
        new ExitEvent(),
    ];
    $request->creativeInput->expandOnHover = false;
    $request->creativeInput->expandingDirection = CreativeExpandingDirectionEnum::EXPANDING_DIRECTION_UP;
    $request->creativeInput->hostingSource = CreativeHostingSourceEnum::HOSTING_SOURCE_UNSPECIFIED;
    $request->creativeInput->iasCampaignMonitoring = false;
    $request->creativeInput->integrationCode = 'magni';
    $request->creativeInput->jsTrackerUrl = 'odio';
    $request->creativeInput->notes = 'sunt';
    $request->creativeInput->obaIcon = new ObaIcon();
    $request->creativeInput->obaIcon->clickTrackingUrl = 'ullam';
    $request->creativeInput->obaIcon->dimensions = new Dimensions();
    $request->creativeInput->obaIcon->dimensions->heightPixels = 722081;
    $request->creativeInput->obaIcon->dimensions->widthPixels = 940432;
    $request->creativeInput->obaIcon->landingPageUrl = 'voluptatem';
    $request->creativeInput->obaIcon->position = ObaIconPositionEnum::OBA_ICON_POSITION_LOWER_RIGHT;
    $request->creativeInput->obaIcon->program = 'soluta';
    $request->creativeInput->obaIcon->resourceMimeType = 'nobis';
    $request->creativeInput->obaIcon->resourceUrl = 'et';
    $request->creativeInput->obaIcon->viewTrackingUrl = 'saepe';
    $request->creativeInput->progressOffset = new AudioVideoOffset();
    $request->creativeInput->progressOffset->percentage = 'ipsum';
    $request->creativeInput->progressOffset->seconds = 'veritatis';
    $request->creativeInput->requireHtml5 = false;
    $request->creativeInput->requireMraid = false;
    $request->creativeInput->requirePingForAttribution = false;
    $request->creativeInput->reviewStatus = new ReviewStatusInfo();
    $request->creativeInput->reviewStatus->approvalStatus = ReviewStatusInfoApprovalStatusEnum::APPROVAL_STATUS_APPROVED_SERVABLE;
    $request->creativeInput->reviewStatus->contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum::REVIEW_STATUS_REJECTED;
    $request->creativeInput->reviewStatus->creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum::REVIEW_STATUS_REJECTED;
    $request->creativeInput->reviewStatus->exchangeReviewStatuses = [
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
        new ExchangeReviewStatus(),
    ];
    $request->creativeInput->reviewStatus->publisherReviewStatuses = [
        new PublisherReviewStatus(),
    ];
    $request->creativeInput->skipOffset = new AudioVideoOffset();
    $request->creativeInput->skipOffset->percentage = 'delectus';
    $request->creativeInput->skipOffset->seconds = 'dolorem';
    $request->creativeInput->skippable = false;
    $request->creativeInput->thirdPartyTag = 'dolore';
    $request->creativeInput->thirdPartyUrls = [
        new ThirdPartyUrl(),
        new ThirdPartyUrl(),
    ];
    $request->creativeInput->timerEvents = [
        new TimerEvent(),
    ];
    $request->creativeInput->trackerUrls = [
        'architecto',
        'quae',
        'aut',
    ];
    $request->creativeInput->universalAdId = new UniversalAdId();
    $request->creativeInput->universalAdId->id = '8e0adcf4-b921-4879-bce9-53f73ef7fbc7';
    $request->creativeInput->universalAdId->registry = UniversalAdIdRegistryEnum::UNIVERSAL_AD_REGISTRY_CLEARCAST;
    $request->creativeInput->vastTagUrl = 'facilis';
    $request->accessToken = 'vero';
    $request->advertiserId = 'ducimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->creativeId = 'illum';
    $request->fields = 'sequi';
    $request->key = 'natus';
    $request->oauthToken = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->updateMask = 'voluptatibus';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'nulla';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'porro';
    $request->advertiserId = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'iusto';
    $request->fields = 'eligendi';
    $request->key = 'ducimus';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'officia';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'ipsam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aspernatur';
    $request->advertiserId = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'ratione';
    $request->key = 'ex';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'dolor';
    $request->uploadProtocol = 'maiores';

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

## displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions

Lists assigned targeting options of an insertion order across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->advertiserId = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'nostrum';
    $request->filter = 'sapiente';
    $request->insertionOrderId = 'quisquam';
    $request->key = 'saepe';
    $request->oauthToken = 'ea';
    $request->orderBy = 'impedit';
    $request->pageSize = 359271;
    $request->pageToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'magnam';

    $requestSecurity = new DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListInsertionOrderAssignedTargetingOptionsResponse !== null) {
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
    $request->insertionOrderInput->bidStrategy->fixedBid->bidAmountMicros = 'quo';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'consectetur';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'recusandae';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA;
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'minima';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'eaque';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'a';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA;
    $request->insertionOrderInput->billableOutcome = InsertionOrderBillableOutcomeEnum::BILLABLE_OUTCOME_UNSPECIFIED;
    $request->insertionOrderInput->budget = new InsertionOrderBudget();
    $request->insertionOrderInput->budget->automationType = InsertionOrderBudgetAutomationTypeEnum::INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED;
    $request->insertionOrderInput->budget->budgetSegments = [
        new InsertionOrderBudgetSegment(),
        new InsertionOrderBudgetSegment(),
        new InsertionOrderBudgetSegment(),
    ];
    $request->insertionOrderInput->budget->budgetUnit = InsertionOrderBudgetBudgetUnitEnum::BUDGET_UNIT_IMPRESSIONS;
    $request->insertionOrderInput->campaignId = 'aliquam';
    $request->insertionOrderInput->displayName = 'fugit';
    $request->insertionOrderInput->entityStatus = InsertionOrderEntityStatusEnum::ENTITY_STATUS_SCHEDULED_FOR_DELETION;
    $request->insertionOrderInput->frequencyCap = new FrequencyCap();
    $request->insertionOrderInput->frequencyCap->maxImpressions = 79522;
    $request->insertionOrderInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_LIFETIME;
    $request->insertionOrderInput->frequencyCap->timeUnitCount = 89603;
    $request->insertionOrderInput->frequencyCap->unlimited = false;
    $request->insertionOrderInput->insertionOrderType = InsertionOrderInsertionOrderTypeEnum::OVER_THE_TOP;
    $request->insertionOrderInput->integrationDetails = new IntegrationDetails();
    $request->insertionOrderInput->integrationDetails->details = 'laborum';
    $request->insertionOrderInput->integrationDetails->integrationCode = 'placeat';
    $request->insertionOrderInput->pacing = new Pacing();
    $request->insertionOrderInput->pacing->dailyMaxImpressions = 'velit';
    $request->insertionOrderInput->pacing->dailyMaxMicros = 'eum';
    $request->insertionOrderInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_DAILY;
    $request->insertionOrderInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_EVEN;
    $request->insertionOrderInput->partnerCosts = [
        new PartnerCost(),
        new PartnerCost(),
        new PartnerCost(),
    ];
    $request->insertionOrderInput->performanceGoal = new PerformanceGoal();
    $request->insertionOrderInput->performanceGoal->performanceGoalAmountMicros = 'assumenda';
    $request->insertionOrderInput->performanceGoal->performanceGoalPercentageMicros = 'nulla';
    $request->insertionOrderInput->performanceGoal->performanceGoalString = 'voluptas';
    $request->insertionOrderInput->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_VCPM;
    $request->accessToken = 'quasi';
    $request->advertiserId = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'provident';
    $request->key = 'ipsa';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'eius';

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
    $request->accessToken = 'esse';
    $request->advertiserId = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reprehenderit';
    $request->fields = 'quidem';
    $request->insertionOrderId = 'fugiat';
    $request->key = 'ut';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'assumenda';
    $request->uploadProtocol = 'eos';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quisquam';
    $request->advertiserId = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'quidem';
    $request->insertionOrderId = 'neque';
    $request->key = 'quo';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'fuga';
    $request->uploadProtocol = 'eius';

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
    $request->accessToken = 'voluptas';
    $request->advertiserId = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'tempora';
    $request->filter = 'debitis';
    $request->key = 'ipsam';
    $request->oauthToken = 'aspernatur';
    $request->orderBy = 'sequi';
    $request->pageSize = 779192;
    $request->pageToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'distinctio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->insertionOrderInput = new InsertionOrderInput();
    $request->insertionOrderInput->bidStrategy = new BiddingStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->insertionOrderInput->bidStrategy->fixedBid->bidAmountMicros = 'dignissimos';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'inventore';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'nihil';
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO;
    $request->insertionOrderInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'accusamus';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'aliquam';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'odio';
    $request->insertionOrderInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO;
    $request->insertionOrderInput->billableOutcome = InsertionOrderBillableOutcomeEnum::BILLABLE_OUTCOME_PAY_PER_IMPRESSION;
    $request->insertionOrderInput->budget = new InsertionOrderBudget();
    $request->insertionOrderInput->budget->automationType = InsertionOrderBudgetAutomationTypeEnum::INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET;
    $request->insertionOrderInput->budget->budgetSegments = [
        new InsertionOrderBudgetSegment(),
    ];
    $request->insertionOrderInput->budget->budgetUnit = InsertionOrderBudgetBudgetUnitEnum::BUDGET_UNIT_CURRENCY;
    $request->insertionOrderInput->campaignId = 'molestiae';
    $request->insertionOrderInput->displayName = 'accusantium';
    $request->insertionOrderInput->entityStatus = InsertionOrderEntityStatusEnum::ENTITY_STATUS_PAUSED;
    $request->insertionOrderInput->frequencyCap = new FrequencyCap();
    $request->insertionOrderInput->frequencyCap->maxImpressions = 430402;
    $request->insertionOrderInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_WEEKS;
    $request->insertionOrderInput->frequencyCap->timeUnitCount = 510017;
    $request->insertionOrderInput->frequencyCap->unlimited = false;
    $request->insertionOrderInput->insertionOrderType = InsertionOrderInsertionOrderTypeEnum::INSERTION_ORDER_TYPE_UNSPECIFIED;
    $request->insertionOrderInput->integrationDetails = new IntegrationDetails();
    $request->insertionOrderInput->integrationDetails->details = 'deleniti';
    $request->insertionOrderInput->integrationDetails->integrationCode = 'fugit';
    $request->insertionOrderInput->pacing = new Pacing();
    $request->insertionOrderInput->pacing->dailyMaxImpressions = 'fuga';
    $request->insertionOrderInput->pacing->dailyMaxMicros = 'mollitia';
    $request->insertionOrderInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_UNSPECIFIED;
    $request->insertionOrderInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_ASAP;
    $request->insertionOrderInput->partnerCosts = [
        new PartnerCost(),
    ];
    $request->insertionOrderInput->performanceGoal = new PerformanceGoal();
    $request->insertionOrderInput->performanceGoal->performanceGoalAmountMicros = 'minima';
    $request->insertionOrderInput->performanceGoal->performanceGoalPercentageMicros = 'nisi';
    $request->insertionOrderInput->performanceGoal->performanceGoalString = 'fugit';
    $request->insertionOrderInput->performanceGoal->performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum::PERFORMANCE_GOAL_TYPE_OTHER;
    $request->accessToken = 'consequuntur';
    $request->advertiserId = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'occaecati';
    $request->insertionOrderId = 'atque';
    $request->key = 'et';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->quotaUser = 'eveniet';
    $request->updateMask = 'accusamus';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'esse';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nam';
    $request->advertiserId = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'quasi';
    $request->callback = 'saepe';
    $request->fields = 'vel';
    $request->insertionOrderId = 'harum';
    $request->key = 'molestiae';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_DEVICE_TYPE;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'eligendi';

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
    $request->accessToken = 'culpa';
    $request->advertiserId = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'consequuntur';
    $request->filter = 'consequatur';
    $request->insertionOrderId = 'minus';
    $request->key = 'quaerat';
    $request->oauthToken = 'sapiente';
    $request->orderBy = 'consectetur';
    $request->pageSize = 458139;
    $request->pageToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->targetingType = DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_OMID;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'quas';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quasi';
    $request->advertiserId = 'a';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sint';
    $request->fields = 'pariatur';
    $request->issueMonth = 'possimus';
    $request->key = 'quia';
    $request->loiSapinInvoiceType = DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum::LOI_SAPIN_INVOICE_TYPE_PLATFORM;
    $request->oauthToken = 'asperiores';
    $request->pageSize = 815524;
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'similique';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->advertiserId = 'tenetur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'earum';
    $request->fields = 'vel';
    $request->invoiceMonth = 'in';
    $request->key = 'eius';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'illum';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'accusantium';

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

## displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions

Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\BulkEditLineItemAssignedTargetingOptionsRequestInput;
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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
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
use \OpenAPI\OpenAPI\Models\Shared\CreateAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAssignedTargetingOptionsRequestTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->bulkEditLineItemAssignedTargetingOptionsRequestInput = new BulkEditLineItemAssignedTargetingOptionsRequestInput();
    $request->bulkEditLineItemAssignedTargetingOptionsRequestInput->createRequests = [
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
        new CreateAssignedTargetingOptionsRequestInput(),
    ];
    $request->bulkEditLineItemAssignedTargetingOptionsRequestInput->deleteRequests = [
        new DeleteAssignedTargetingOptionsRequest(),
    ];
    $request->accessToken = 'ullam';
    $request->advertiserId = 'reprehenderit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nisi';
    $request->fields = 'aut';
    $request->key = 'voluptatum';
    $request->lineItemId = 'qui';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'itaque';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkEditLineItemAssignedTargetingOptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions

Lists assigned targeting options of a line item across targeting types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'architecto';
    $request->advertiserId = 'omnis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'at';
    $request->filter = 'et';
    $request->key = 'voluptate';
    $request->lineItemId = 'ipsa';
    $request->oauthToken = 'minima';
    $request->orderBy = 'veritatis';
    $request->pageSize = 232744;
    $request->pageToken = 'adipisci';
    $request->prettyPrint = false;
    $request->quotaUser = 'iste';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->advertisers->displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions($request, $requestSecurity);

    if ($response->bulkListLineItemAssignedTargetingOptionsResponse !== null) {
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->lineItemInput = new LineItemInput();
    $request->lineItemInput->bidStrategy = new BiddingStrategy();
    $request->lineItemInput->bidStrategy->fixedBid = new FixedBidStrategy();
    $request->lineItemInput->bidStrategy->fixedBid->bidAmountMicros = 'aut';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'laudantium';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'eum';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA;
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'ab';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'corrupti';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'non';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED;
    $request->lineItemInput->budget = new LineItemBudgetInput();
    $request->lineItemInput->budget->budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum::LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED;
    $request->lineItemInput->budget->maxAmount = 'occaecati';
    $request->lineItemInput->conversionCounting = new ConversionCountingConfig();
    $request->lineItemInput->conversionCounting->floodlightActivityConfigs = [
        new TrackingFloodlightActivityConfig(),
        new TrackingFloodlightActivityConfig(),
    ];
    $request->lineItemInput->conversionCounting->postViewCountPercentageMillis = 'impedit';
    $request->lineItemInput->creativeIds = [
        'voluptas',
    ];
    $request->lineItemInput->displayName = 'aut';
    $request->lineItemInput->entityStatus = LineItemEntityStatusEnum::ENTITY_STATUS_ARCHIVED;
    $request->lineItemInput->excludeNewExchanges = false;
    $request->lineItemInput->flight = new LineItemFlight();
    $request->lineItemInput->flight->dateRange = new DateRange();
    $request->lineItemInput->flight->dateRange->endDate = new Date();
    $request->lineItemInput->flight->dateRange->endDate->day = 115484;
    $request->lineItemInput->flight->dateRange->endDate->month = 981640;
    $request->lineItemInput->flight->dateRange->endDate->year = 618480;
    $request->lineItemInput->flight->dateRange->startDate = new Date();
    $request->lineItemInput->flight->dateRange->startDate->day = 244651;
    $request->lineItemInput->flight->dateRange->startDate->month = 974257;
    $request->lineItemInput->flight->dateRange->startDate->year = 374323;
    $request->lineItemInput->flight->flightDateType = LineItemFlightFlightDateTypeEnum::LINE_ITEM_FLIGHT_DATE_TYPE_TRIGGER;
    $request->lineItemInput->flight->triggerId = 'aperiam';
    $request->lineItemInput->frequencyCap = new FrequencyCap();
    $request->lineItemInput->frequencyCap->maxImpressions = 409054;
    $request->lineItemInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_MONTHS;
    $request->lineItemInput->frequencyCap->timeUnitCount = 162954;
    $request->lineItemInput->frequencyCap->unlimited = false;
    $request->lineItemInput->insertionOrderId = 'repellendus';
    $request->lineItemInput->integrationDetails = new IntegrationDetails();
    $request->lineItemInput->integrationDetails->details = 'officia';
    $request->lineItemInput->integrationDetails->integrationCode = 'maxime';
    $request->lineItemInput->inventorySourceIds = [
        'officia',
        'asperiores',
    ];
    $request->lineItemInput->lineItemType = LineItemLineItemTypeEnum::LINE_ITEM_TYPE_VIDEO_DEFAULT;
    $request->lineItemInput->mobileApp = new MobileAppInput();
    $request->lineItemInput->mobileApp->appId = 'quae';
    $request->lineItemInput->pacing = new Pacing();
    $request->lineItemInput->pacing->dailyMaxImpressions = 'quaerat';
    $request->lineItemInput->pacing->dailyMaxMicros = 'porro';
    $request->lineItemInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_FLIGHT;
    $request->lineItemInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_AHEAD;
    $request->lineItemInput->partnerCosts = [
        new PartnerCost(),
    ];
    $request->lineItemInput->partnerRevenueModel = new PartnerRevenueModel();
    $request->lineItemInput->partnerRevenueModel->markupAmount = 'adipisci';
    $request->lineItemInput->partnerRevenueModel->markupType = PartnerRevenueModelMarkupTypeEnum::PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP;
    $request->lineItemInput->targetingExpansion = new TargetingExpansionConfig();
    $request->lineItemInput->targetingExpansion->excludeFirstPartyAudience = false;
    $request->lineItemInput->targetingExpansion->targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum::BALANCED_EXPANSION;
    $request->accessToken = 'suscipit';
    $request->advertiserId = 'velit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'recusandae';
    $request->key = 'totam';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'labore';
    $request->advertiserId = 'possimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cum';
    $request->fields = 'commodi';
    $request->key = 'in';
    $request->lineItemId = 'corporis';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'recusandae';

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
    $request->generateDefaultLineItemRequestInput->displayName = 'aperiam';
    $request->generateDefaultLineItemRequestInput->insertionOrderId = 'cum';
    $request->generateDefaultLineItemRequestInput->lineItemType = GenerateDefaultLineItemRequestLineItemTypeEnum::LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL;
    $request->generateDefaultLineItemRequestInput->mobileApp = new MobileAppInput();
    $request->generateDefaultLineItemRequestInput->mobileApp->appId = 'in';
    $request->accessToken = 'exercitationem';
    $request->advertiserId = 'earum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'doloribus';
    $request->key = 'suscipit';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'necessitatibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sunt';
    $request->advertiserId = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'non';
    $request->fields = 'amet';
    $request->key = 'beatae';
    $request->lineItemId = 'dignissimos';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laboriosam';
    $request->advertiserId = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->fields = 'vitae';
    $request->filter = 'accusamus';
    $request->key = 'similique';
    $request->oauthToken = 'tempora';
    $request->orderBy = 'aspernatur';
    $request->pageSize = 379057;
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'nobis';

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
    $request->lineItemInput->bidStrategy->fixedBid->bidAmountMicros = 'adipisci';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid = new MaximizeSpendBidStrategy();
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->customBiddingAlgorithmId = 'minus';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->maxAverageCpmBidAmountMicros = 'dolores';
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO;
    $request->lineItemInput->bidStrategy->maximizeSpendAutoBid->raiseBidForDeals = false;
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid = new PerformanceGoalBidStrategy();
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->customBiddingAlgorithmId = 'in';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->maxAverageCpmBidAmountMicros = 'dolore';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalAmountMicros = 'aliquam';
    $request->lineItemInput->bidStrategy->performanceGoalAutoBid->performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum::BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
    $request->lineItemInput->budget = new LineItemBudgetInput();
    $request->lineItemInput->budget->budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum::LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED;
    $request->lineItemInput->budget->maxAmount = 'ullam';
    $request->lineItemInput->conversionCounting = new ConversionCountingConfig();
    $request->lineItemInput->conversionCounting->floodlightActivityConfigs = [
        new TrackingFloodlightActivityConfig(),
    ];
    $request->lineItemInput->conversionCounting->postViewCountPercentageMillis = 'cum';
    $request->lineItemInput->creativeIds = [
        'quas',
        'hic',
        'nesciunt',
    ];
    $request->lineItemInput->displayName = 'culpa';
    $request->lineItemInput->entityStatus = LineItemEntityStatusEnum::ENTITY_STATUS_DRAFT;
    $request->lineItemInput->excludeNewExchanges = false;
    $request->lineItemInput->flight = new LineItemFlight();
    $request->lineItemInput->flight->dateRange = new DateRange();
    $request->lineItemInput->flight->dateRange->endDate = new Date();
    $request->lineItemInput->flight->dateRange->endDate->day = 867290;
    $request->lineItemInput->flight->dateRange->endDate->month = 519643;
    $request->lineItemInput->flight->dateRange->endDate->year = 940210;
    $request->lineItemInput->flight->dateRange->startDate = new Date();
    $request->lineItemInput->flight->dateRange->startDate->day = 348783;
    $request->lineItemInput->flight->dateRange->startDate->month = 750765;
    $request->lineItemInput->flight->dateRange->startDate->year = 24619;
    $request->lineItemInput->flight->flightDateType = LineItemFlightFlightDateTypeEnum::LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM;
    $request->lineItemInput->flight->triggerId = 'sed';
    $request->lineItemInput->frequencyCap = new FrequencyCap();
    $request->lineItemInput->frequencyCap->maxImpressions = 967966;
    $request->lineItemInput->frequencyCap->timeUnit = FrequencyCapTimeUnitEnum::TIME_UNIT_UNSPECIFIED;
    $request->lineItemInput->frequencyCap->timeUnitCount = 994401;
    $request->lineItemInput->frequencyCap->unlimited = false;
    $request->lineItemInput->insertionOrderId = 'facilis';
    $request->lineItemInput->integrationDetails = new IntegrationDetails();
    $request->lineItemInput->integrationDetails->details = 'voluptate';
    $request->lineItemInput->integrationDetails->integrationCode = 'expedita';
    $request->lineItemInput->inventorySourceIds = [
        'iste',
    ];
    $request->lineItemInput->lineItemType = LineItemLineItemTypeEnum::LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL;
    $request->lineItemInput->mobileApp = new MobileAppInput();
    $request->lineItemInput->mobileApp->appId = 'laborum';
    $request->lineItemInput->pacing = new Pacing();
    $request->lineItemInput->pacing->dailyMaxImpressions = 'sed';
    $request->lineItemInput->pacing->dailyMaxMicros = 'in';
    $request->lineItemInput->pacing->pacingPeriod = PacingPacingPeriodEnum::PACING_PERIOD_DAILY;
    $request->lineItemInput->pacing->pacingType = PacingPacingTypeEnum::PACING_TYPE_ASAP;
    $request->lineItemInput->partnerCosts = [
        new PartnerCost(),
    ];
    $request->lineItemInput->partnerRevenueModel = new PartnerRevenueModel();
    $request->lineItemInput->partnerRevenueModel->markupAmount = 'voluptas';
    $request->lineItemInput->partnerRevenueModel->markupType = PartnerRevenueModelMarkupTypeEnum::PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP;
    $request->lineItemInput->targetingExpansion = new TargetingExpansionConfig();
    $request->lineItemInput->targetingExpansion->excludeFirstPartyAudience = false;
    $request->lineItemInput->targetingExpansion->targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum::TARGETING_EXPANSION_LEVEL_UNSPECIFIED;
    $request->accessToken = 'suscipit';
    $request->advertiserId = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illo';
    $request->fields = 'reiciendis';
    $request->key = 'perferendis';
    $request->lineItemId = 'corrupti';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'incidunt';
    $request->updateMask = 'sed';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'eius';

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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
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
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->assignedTargetingOptionInput = new AssignedTargetingOptionInput();
    $request->assignedTargetingOptionInput->ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE1824;
    $request->assignedTargetingOptionInput->ageRangeDetails->targetingOptionId = 'ea';
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'occaecati';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'quos';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_GENERIC_CTV;
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
    ];
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup = new GoogleAudienceGroup();
    $request->assignedTargetingOptionInput->audienceGroupDetails->includedGoogleAudienceGroup->settings = [
        new GoogleAudienceTargetingSetting(),
    ];
    $request->assignedTargetingOptionInput->audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_UNKNOWN;
    $request->assignedTargetingOptionInput->audioContentTypeDetails->targetingOptionId = 'officiis';
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'praesentium';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'facilis';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 3103.81;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'ipsam';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'debitis';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'rem';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'sit';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'nobis';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'error';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_PRE_ROLL;
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->targetingOptionId = 'minima';
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->targetingOptionId = 'reiciendis';
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'nulla';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::MONDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 48690;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 901483;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'veniam';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_CONNECTED_TV;
    $request->assignedTargetingOptionInput->deviceTypeDetails->targetingOptionId = 'officiis';
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedTargetingOptionId = 'beatae';
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_WEB_NOT_OPTIMIZED;
    $request->assignedTargetingOptionInput->environmentDetails->targetingOptionId = 'exercitationem';
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->targetingOptionId = 'praesentium';
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_FEMALE;
    $request->assignedTargetingOptionInput->genderDetails->targetingOptionId = 'laboriosam';
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'dolorum';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
    $request->assignedTargetingOptionInput->householdIncomeDetails->targetingOptionId = 'error';
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'hic';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'expedita';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'debitis';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'neque';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_PERIPHERAL;
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->targetingOptionId = 'nostrum';
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'officia';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_FOR_MOBILE_DISPLAY_ADS;
    $request->assignedTargetingOptionInput->omidDetails->targetingOptionId = 'corrupti';
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'accusamus';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'tempora';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_NOT_A_PARENT;
    $request->assignedTargetingOptionInput->parentalStatusDetails->targetingOptionId = 'fugit';
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 2826.99;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'voluptatem';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'culpa';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum::PROXIMITY_RADIUS_RANGE_MEDIUM;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'magnam';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedTargetingOptionId = 'consequatur';
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'esse';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::ADLOOX_UNSPECIFIED,
        AdlooxExcludedAdlooxCategoriesEnum::BORDERLINE_CONTENT,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE3_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE4_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::AGE_RATING_UNSPECIFIED,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE9_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE4_PLUS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::SEX_EDUCATION,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::INFLAMMATORY_POLITICS_AND_NEWS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'error';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION5_SEC;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::AD_IMPRESSION_FRAUD2;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X30095;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY55_PERCENT_HIHGER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIDEO_VIEWABLE_RATE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'occaecati',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY40;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ600;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY60;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'reiciendis';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'provident';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->targetingOptionId = 'repellendus';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_UNKNOWN;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->targetingOptionId = 'voluptates';
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY_UNSPECIFIED;
    $request->accessToken = 'est';
    $request->advertiserId = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'fuga';
    $request->key = 'praesentium';
    $request->lineItemId = 'mollitia';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_EXCHANGE;
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'quasi';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reprehenderit';
    $request->advertiserId = 'asperiores';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'suscipit';
    $request->callback = 'quidem';
    $request->fields = 'maxime';
    $request->key = 'et';
    $request->lineItemId = 'esse';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_HOUSEHOLD_INCOME;
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'error';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'officiis';
    $request->advertiserId = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->assignedTargetingOptionId = 'minima';
    $request->callback = 'aspernatur';
    $request->fields = 'ex';
    $request->key = 'maiores';
    $request->lineItemId = 'corrupti';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'error';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_ENVIRONMENT;
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'repudiandae';

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
    $request->accessToken = 'atque';
    $request->advertiserId = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorum';
    $request->fields = 'repellendus';
    $request->filter = 'labore';
    $request->key = 'reiciendis';
    $request->lineItemId = 'doloremque';
    $request->oauthToken = 'repudiandae';
    $request->orderBy = 'dicta';
    $request->pageSize = 36033;
    $request->pageToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->targetingType = DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION;
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'velit';

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
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'consequuntur';
    $request->filter = 'occaecati';
    $request->key = 'officiis';
    $request->oauthToken = 'perspiciatis';
    $request->orderBy = 'in';
    $request->pageSize = 238043;
    $request->pageToken = 'eveniet';
    $request->partnerId = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'id';

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
    ];
    $request->bulkEditAssignedLocationsRequestInput->deletedAssignedLocations = [
        'illo',
        'corporis',
        'quidem',
    ];
    $request->accessToken = 'eveniet';
    $request->advertiserId = 'non';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'iure';
    $request->key = 'ipsa';
    $request->locationListId = 'totam';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'qui';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->assignedLocationInput = new AssignedLocationInput();
    $request->assignedLocationInput->targetingOptionId = 'iure';
    $request->accessToken = 'necessitatibus';
    $request->advertiserId = 'ratione';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'voluptatum';
    $request->key = 'rem';
    $request->locationListId = 'aliquam';
    $request->oauthToken = 'ad';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellat';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'corporis';

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
    $request->accessToken = 'nihil';
    $request->advertiserId = 'mollitia';
    $request->alt = AltEnum::MEDIA;
    $request->assignedLocationId = 'alias';
    $request->callback = 'maiores';
    $request->fields = 'reiciendis';
    $request->key = 'dolores';
    $request->locationListId = 'id';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'nesciunt';

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
    $request->accessToken = 'recusandae';
    $request->advertiserId = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->fields = 'ex';
    $request->filter = 'ut';
    $request->key = 'culpa';
    $request->locationListId = 'adipisci';
    $request->oauthToken = 'debitis';
    $request->orderBy = 'laudantium';
    $request->pageSize = 432606;
    $request->pageToken = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'recusandae';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'provident';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->locationListInput = new LocationListInput();
    $request->locationListInput->advertiserId = 'eum';
    $request->locationListInput->displayName = 'reiciendis';
    $request->locationListInput->locationType = LocationListLocationTypeEnum::TARGETING_LOCATION_TYPE_PROXIMITY;
    $request->accessToken = 'aspernatur';
    $request->advertiserId = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'animi';
    $request->fields = 'nostrum';
    $request->key = 'mollitia';
    $request->oauthToken = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'possimus';
    $request->uploadType = 'animi';
    $request->uploadProtocol = 'ex';

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
    $request->accessToken = 'accusantium';
    $request->advertiserId = 'repellat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ullam';
    $request->fields = 'in';
    $request->filter = 'nam';
    $request->key = 'earum';
    $request->oauthToken = 'officia';
    $request->orderBy = 'laborum';
    $request->pageSize = 813054;
    $request->pageToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'molestias';
    $request->uploadProtocol = 'officiis';

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
    $request->locationListInput->advertiserId = 'cumque';
    $request->locationListInput->displayName = 'vitae';
    $request->locationListInput->locationType = LocationListLocationTypeEnum::TARGETING_LOCATION_TYPE_REGIONAL;
    $request->accessToken = 'tempora';
    $request->advertiserId = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'cumque';
    $request->key = 'quae';
    $request->locationListId = 'perferendis';
    $request->oauthToken = 'velit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->updateMask = 'eum';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'rem';

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
        'eos' => 'sapiente',
        'eum' => 'dicta',
        'minima' => 'beatae',
        'cupiditate' => 'provident',
    ];
    $request->accessToken = 'earum';
    $request->advertiserId = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'eaque';
    $request->key = 'earum';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->triggerId = 'debitis';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'porro';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->manualTriggerInput = new ManualTriggerInput();
    $request->manualTriggerInput->activationDurationMinutes = 'dolorem';
    $request->manualTriggerInput->advertiserId = 'fugit';
    $request->manualTriggerInput->displayName = 'cumque';
    $request->accessToken = 'fuga';
    $request->advertiserId = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'necessitatibus';
    $request->fields = 'nulla';
    $request->key = 'consequatur';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'adipisci' => 'quasi',
        'magni' => 'doloribus',
    ];
    $request->accessToken = 'nulla';
    $request->advertiserId = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'nihil';
    $request->key = 'molestiae';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'iusto';
    $request->triggerId = 'esse';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'maiores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->advertiserId = 'architecto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloremque';
    $request->fields = 'dicta';
    $request->key = 'odio';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->triggerId = 'ex';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'aliquid';

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
    $request->accessToken = 'laborum';
    $request->advertiserId = 'sunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugiat';
    $request->fields = 'expedita';
    $request->filter = 'aliquid';
    $request->key = 'officia';
    $request->oauthToken = 'suscipit';
    $request->orderBy = 'aliquid';
    $request->pageSize = 21973;
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'id';

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
    $request->manualTriggerInput->activationDurationMinutes = 'error';
    $request->manualTriggerInput->advertiserId = 'possimus';
    $request->manualTriggerInput->displayName = 'voluptates';
    $request->accessToken = 'mollitia';
    $request->advertiserId = 'laborum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ad';
    $request->fields = 'deleniti';
    $request->key = 'enim';
    $request->oauthToken = 'vitae';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->triggerId = 'ex';
    $request->updateMask = 'quo';
    $request->uploadType = 'ex';
    $request->uploadProtocol = 'ut';

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
    $request->negativeKeywordListInput->displayName = 'expedita';
    $request->accessToken = 'voluptatem';
    $request->advertiserId = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquid';
    $request->fields = 'beatae';
    $request->key = 'voluptatum';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'est';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptatem';
    $request->advertiserId = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'fuga';
    $request->key = 'pariatur';
    $request->oauthToken = 'debitis';
    $request->pageSize = 29190;
    $request->pageToken = 'alias';
    $request->prettyPrint = false;
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'earum';
    $request->uploadProtocol = 'ex';

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
        'nemo',
        'asperiores',
        'ratione',
        'ullam',
    ];
    $request->accessToken = 'perferendis';
    $request->advertiserId = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'quibusdam';
    $request->key = 'nam';
    $request->negativeKeywordListId = 'ipsam';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'aliquam';
    $request->uploadProtocol = 'inventore';

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
    $request->accessToken = 'veritatis';
    $request->advertiserId = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'architecto';
    $request->key = 'sit';
    $request->keywordValue = 'modi';
    $request->negativeKeywordListId = 'fugit';
    $request->oauthToken = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'laudantium';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'dolor';

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
    $request->accessToken = 'ipsam';
    $request->advertiserId = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'eveniet';
    $request->filter = 'impedit';
    $request->key = 'officiis';
    $request->negativeKeywordListId = 'esse';
    $request->oauthToken = 'necessitatibus';
    $request->orderBy = 'sed';
    $request->pageSize = 332191;
    $request->pageToken = 'nesciunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'expedita';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'vel';

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
        new NegativeKeywordInput(),
    ];
    $request->accessToken = 'exercitationem';
    $request->advertiserId = 'ab';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'nobis';
    $request->key = 'laboriosam';
    $request->negativeKeywordListId = 'recusandae';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'necessitatibus';

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
    $request->negativeKeywordListInput->displayName = 'nisi';
    $request->accessToken = 'at';
    $request->advertiserId = 'vero';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'harum';
    $request->fields = 'sequi';
    $request->key = 'doloribus';
    $request->negativeKeywordListId = 'repudiandae';
    $request->oauthToken = 'optio';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->updateMask = 'nemo';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'blanditiis';

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
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmAccountId = 'voluptas';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightConfigId = 'numquam';
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmFloodlightLinkingAuthorized = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->cmSyncableSiteIds = [
        'quos',
        'eius',
    ];
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmCostReportingEnabled = false;
    $request->advertiserInput->adServerConfig->cmHybridConfig->dv360ToCmDataSharingEnabled = false;
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig = new ThirdPartyOnlyConfig();
    $request->advertiserInput->adServerConfig->thirdPartyOnlyConfig->pixelOrderIdReportingEnabled = false;
    $request->advertiserInput->creativeConfig = new AdvertiserCreativeConfig();
    $request->advertiserInput->creativeConfig->dynamicCreativeEnabled = false;
    $request->advertiserInput->creativeConfig->iasClientId = 'aspernatur';
    $request->advertiserInput->creativeConfig->obaComplianceDisabled = false;
    $request->advertiserInput->creativeConfig->videoCreativeDataSharingAuthorized = false;
    $request->advertiserInput->dataAccessConfig = new AdvertiserDataAccessConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig = new AdvertiserSdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->overridePartnerSdfConfig = false;
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig = new SdfConfig();
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->adminEmail = 'ducimus';
    $request->advertiserInput->dataAccessConfig->sdfConfig->sdfConfig->version = SdfConfigVersionEnum::SDF_VERSION4;
    $request->advertiserInput->displayName = 'fuga';
    $request->advertiserInput->entityStatus = AdvertiserEntityStatusEnum::ENTITY_STATUS_DRAFT;
    $request->advertiserInput->generalConfig = new AdvertiserGeneralConfigInput();
    $request->advertiserInput->generalConfig->currencyCode = 'incidunt';
    $request->advertiserInput->generalConfig->domainUrl = 'quasi';
    $request->advertiserInput->integrationDetails = new IntegrationDetails();
    $request->advertiserInput->integrationDetails->details = 'rem';
    $request->advertiserInput->integrationDetails->integrationCode = 'fugiat';
    $request->advertiserInput->partnerId = 'dicta';
    $request->advertiserInput->prismaEnabled = false;
    $request->advertiserInput->servingConfig = new AdvertiserTargetingConfig();
    $request->advertiserInput->servingConfig->exemptTvFromViewabilityTargeting = false;
    $request->accessToken = 'nisi';
    $request->advertiserId = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'cupiditate';
    $request->key = 'reiciendis';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'alias';
    $request->updateMask = 'omnis';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'occaecati';

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
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DigitalContentLabelAssignedTargetingOptionDetailsInput;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExchangeAssignedTargetingOptionDetails;
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
use \OpenAPI\OpenAPI\Models\Shared\ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionalLocationListAssignedTargetingOptionDetails;
use \OpenAPI\OpenAPI\Models\Shared\SensitiveCategoryAssignedTargetingOptionDetailsInput;
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
    $request->assignedTargetingOptionInput->ageRangeDetails->ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum::AGE_RANGE1824;
    $request->assignedTargetingOptionInput->ageRangeDetails->targetingOptionId = 'inventore';
    $request->assignedTargetingOptionInput->appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appCategoryDetails->negative = false;
    $request->assignedTargetingOptionInput->appCategoryDetails->targetingOptionId = 'fuga';
    $request->assignedTargetingOptionInput->appDetails = new AppAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->appDetails->appId = 'accusamus';
    $request->assignedTargetingOptionInput->appDetails->appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum::APP_PLATFORM_GENERIC_CTV;
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
    $request->assignedTargetingOptionInput->audioContentTypeDetails->audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum::AUDIO_CONTENT_TYPE_UNKNOWN;
    $request->assignedTargetingOptionInput->audioContentTypeDetails->targetingOptionId = 'temporibus';
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->authorizedSellerStatusDetails->targetingOptionId = 'quos';
    $request->assignedTargetingOptionInput->browserDetails = new BrowserAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->browserDetails->negative = false;
    $request->assignedTargetingOptionInput->browserDetails->targetingOptionId = 'commodi';
    $request->assignedTargetingOptionInput->businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusAmount = 9308.19;
    $request->assignedTargetingOptionInput->businessChainDetails->proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_MILES;
    $request->assignedTargetingOptionInput->businessChainDetails->targetingOptionId = 'totam';
    $request->assignedTargetingOptionInput->carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->carrierAndIspDetails->negative = false;
    $request->assignedTargetingOptionInput->carrierAndIspDetails->targetingOptionId = 'earum';
    $request->assignedTargetingOptionInput->categoryDetails = new CategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->categoryDetails->negative = false;
    $request->assignedTargetingOptionInput->categoryDetails->targetingOptionId = 'modi';
    $request->assignedTargetingOptionInput->channelDetails = new ChannelAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->channelDetails->channelId = 'nam';
    $request->assignedTargetingOptionInput->channelDetails->negative = false;
    $request->assignedTargetingOptionInput->contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentDurationDetails->targetingOptionId = 'vero';
    $request->assignedTargetingOptionInput->contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentGenreDetails->negative = false;
    $request->assignedTargetingOptionInput->contentGenreDetails->targetingOptionId = 'voluptatem';
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum::CONTENT_INSTREAM_POSITION_PRE_ROLL;
    $request->assignedTargetingOptionInput->contentInstreamPositionDetails->targetingOptionId = 'vel';
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum::CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->contentOutstreamPositionDetails->targetingOptionId = 'quasi';
    $request->assignedTargetingOptionInput->contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->contentStreamTypeDetails->targetingOptionId = 'non';
    $request->assignedTargetingOptionInput->dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->dayAndTimeDetails->dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum::SUNDAY;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->endHour = 318233;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->startHour = 575213;
    $request->assignedTargetingOptionInput->dayAndTimeDetails->timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum::TIME_ZONE_RESOLUTION_ADVERTISER;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->negative = false;
    $request->assignedTargetingOptionInput->deviceMakeModelDetails->targetingOptionId = 'deserunt';
    $request->assignedTargetingOptionInput->deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->deviceTypeDetails->deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum::DEVICE_TYPE_CONNECTED_TV;
    $request->assignedTargetingOptionInput->deviceTypeDetails->targetingOptionId = 'nemo';
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->digitalContentLabelExclusionDetails->excludedTargetingOptionId = 'reprehenderit';
    $request->assignedTargetingOptionInput->environmentDetails = new EnvironmentAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->environmentDetails->environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum::ENVIRONMENT_WEB_NOT_OPTIMIZED;
    $request->assignedTargetingOptionInput->environmentDetails->targetingOptionId = 'quis';
    $request->assignedTargetingOptionInput->exchangeDetails = new ExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->exchangeDetails->targetingOptionId = 'sint';
    $request->assignedTargetingOptionInput->genderDetails = new GenderAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->genderDetails->gender = GenderAssignedTargetingOptionDetailsGenderEnum::GENDER_UNKNOWN;
    $request->assignedTargetingOptionInput->genderDetails->targetingOptionId = 'impedit';
    $request->assignedTargetingOptionInput->geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->geoRegionDetails->negative = false;
    $request->assignedTargetingOptionInput->geoRegionDetails->targetingOptionId = 'hic';
    $request->assignedTargetingOptionInput->householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->householdIncomeDetails->householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum::HOUSEHOLD_INCOME_TOP10_PERCENT;
    $request->assignedTargetingOptionInput->householdIncomeDetails->targetingOptionId = 'asperiores';
    $request->assignedTargetingOptionInput->inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceDetails->inventorySourceId = 'ex';
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->inventorySourceGroupDetails->inventorySourceGroupId = 'voluptas';
    $request->assignedTargetingOptionInput->keywordDetails = new KeywordAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->keywordDetails->keyword = 'debitis';
    $request->assignedTargetingOptionInput->keywordDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails = new LanguageAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->languageDetails->negative = false;
    $request->assignedTargetingOptionInput->languageDetails->targetingOptionId = 'delectus';
    $request->assignedTargetingOptionInput->nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum::NATIVE_CONTENT_POSITION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->nativeContentPositionDetails->targetingOptionId = 'minus';
    $request->assignedTargetingOptionInput->negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->negativeKeywordListDetails->negativeKeywordListId = 'fuga';
    $request->assignedTargetingOptionInput->omidDetails = new OmidAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->omidDetails->omid = OmidAssignedTargetingOptionDetailsOmidEnum::OMID_FOR_MOBILE_DISPLAY_ADS;
    $request->assignedTargetingOptionInput->omidDetails->targetingOptionId = 'consectetur';
    $request->assignedTargetingOptionInput->onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->onScreenPositionDetails->targetingOptionId = 'velit';
    $request->assignedTargetingOptionInput->operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->operatingSystemDetails->negative = false;
    $request->assignedTargetingOptionInput->operatingSystemDetails->targetingOptionId = 'atque';
    $request->assignedTargetingOptionInput->parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->parentalStatusDetails->parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum::PARENTAL_STATUS_UNSPECIFIED;
    $request->assignedTargetingOptionInput->parentalStatusDetails->targetingOptionId = 'impedit';
    $request->assignedTargetingOptionInput->poiDetails = new PoiAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusAmount = 1660.47;
    $request->assignedTargetingOptionInput->poiDetails->proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum::DISTANCE_UNIT_KILOMETERS;
    $request->assignedTargetingOptionInput->poiDetails->targetingOptionId = 'repudiandae';
    $request->assignedTargetingOptionInput->proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityLocationListId = 'nam';
    $request->assignedTargetingOptionInput->proximityLocationListDetails->proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum::PROXIMITY_RADIUS_RANGE_SMALL;
    $request->assignedTargetingOptionInput->regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->regionalLocationListDetails->negative = false;
    $request->assignedTargetingOptionInput->regionalLocationListDetails->regionalLocationListId = 'iusto';
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->sensitiveCategoryExclusionDetails->excludedTargetingOptionId = 'voluptate';
    $request->assignedTargetingOptionInput->subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->subExchangeDetails->targetingOptionId = 'sequi';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox = new Adloox();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->adloox->excludedAdlooxCategories = [
        AdlooxExcludedAdlooxCategoriesEnum::ADULT_CONTENT_HARD,
        AdlooxExcludedAdlooxCategoriesEnum::LOW_VIEWABILITY_DOMAINS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify = new DoubleVerify();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating = new DoubleVerifyAppStarRating();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidInsufficientStarRating = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->appStarRating->avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum::APP_STAR_RATE3_LESS;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->avoidedAgeRatings = [
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE9_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::AGE_RATING_UNSPECIFIED,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE18_PLUS,
        DoubleVerifyAvoidedAgeRatingsEnum::APP_AGE_RATE4_PLUS,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories = new DoubleVerifyBrandSafetyCategories();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidUnknownBrandSafetyCategory = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedHighSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::CRIMINAL_SKILLS,
        DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum::HIGHER_SEVERITY_UNSPECIFIED,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->brandSafetyCategories->avoidedMediumSeverityCategories = [
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NEGATIVE_NEWS_FINANCIAL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ADULT_CONTENT_SWIMSUIT,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::NEGATIVE_NEWS_PHARMACEUTICAL,
        DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum::ALTERNATIVE_LIFESTYLES,
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->customSegmentId = 'porro';
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability = new DoubleVerifyDisplayViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->iab = DoubleVerifyDisplayViewabilityIabEnum::IAB_VIEWED_RATE70_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->displayViewability->viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum::AVERAGE_VIEW_DURATION_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidInsufficientOption = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->fraudInvalidTraffic->avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum::FRAUD_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability = new DoubleVerifyVideoViewability();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum::PLAYER_SIZE400_X300_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoIab = DoubleVerifyVideoViewabilityVideoIabEnum::IAB_VIEWABILITY65_PERCENT_HIHGER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->doubleVerify->videoViewability->videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum::VIEWED_PERFORMANCE35_PERCENT_HIGHER;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience = new IntegralAdScience();
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->customSegmentId = [
        'vero',
    ];
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->displayViewability = IntegralAdScienceDisplayViewabilityEnum::PERFORMANCE_VIEWABILITY50;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludeUnrateable = false;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum::SUSPICIOUS_ACTIVITY_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum::ADULT_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum::ALCOHOL_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum::DRUGS_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum::GAMBLING_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum::HATE_SPEECH_UNSPECIFIED;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum::ILLEGAL_DOWNLOADS_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum::OFFENSIVE_LANGUAGE_HMR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum::VIOLENCE_HR;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->traqScoreOption = IntegralAdScienceTraqScoreOptionEnum::TRAQ1000;
    $request->assignedTargetingOptionInput->thirdPartyVerifierDetails->integralAdScience->videoViewability = IntegralAdScienceVideoViewabilityEnum::VIDEO_VIEWABILITY_UNSPECIFIED;
    $request->assignedTargetingOptionInput->urlDetails = new UrlAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->urlDetails->negative = false;
    $request->assignedTargetingOptionInput->urlDetails->url = 'nisi';
    $request->assignedTargetingOptionInput->userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput();
    $request->assignedTargetingOptionInput->userRewardedContentDetails->targetingOptionId = 'itaque';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->targetingOptionId = 'velit';
    $request->assignedTargetingOptionInput->videoPlayerSizeDetails->videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum::VIDEO_PLAYER_SIZE_HD;
    $request->assignedTargetingOptionInput->viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails();
    $request->assignedTargetingOptionInput->viewabilityDetails->targetingOptionId = 'non';
    $request->assignedTargetingOptionInput->viewabilityDetails->viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum::VIEWABILITY20_PERCENT_OR_MORE;
    $request->accessToken = 'iusto';
    $request->advertiserId = 'sit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'officia';
    $request->key = 'recusandae';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum::TARGETING_TYPE_BROWSER;
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'placeat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'expedita';
    $request->advertiserId = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->assignedTargetingOptionId = 'voluptate';
    $request->callback = 'ullam';
    $request->fields = 'unde';
    $request->key = 'necessitatibus';
    $request->oauthToken = 'animi';
    $request->prettyPrint = false;
    $request->quotaUser = 'impedit';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum::TARGETING_TYPE_BROWSER;
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'est';

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
    $request->accessToken = 'esse';
    $request->advertiserId = 'labore';
    $request->alt = AltEnum::JSON;
    $request->assignedTargetingOptionId = 'vero';
    $request->callback = 'consectetur';
    $request->fields = 'vitae';
    $request->key = 'inventore';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'ad';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum::TARGETING_TYPE_PROXIMITY_LOCATION_LIST;
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'ex';

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
    $request->accessToken = 'soluta';
    $request->advertiserId = 'libero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'odio';
    $request->filter = 'fugit';
    $request->key = 'alias';
    $request->oauthToken = 'magni';
    $request->orderBy = 'vel';
    $request->pageSize = 64435;
    $request->pageToken = 'quae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->targetingType = DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum::TARGETING_TYPE_GENDER;
    $request->uploadType = 'exercitationem';
    $request->uploadProtocol = 'itaque';

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
