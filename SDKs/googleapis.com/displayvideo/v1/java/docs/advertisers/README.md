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

## displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions

Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity;
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
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsInput;
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
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditAdvertiserAssignedTargetingOptionsRequestInput = new BulkEditAdvertiserAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                                        targetingOptionId = "dolorum";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dicta";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "nam";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "fugit";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "hic";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "totam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "molestiae";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "modi";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "impedit";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "esse";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ipsum";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "excepturi";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ad";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "iste";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "natus";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laboriosam";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "hic";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9025.99;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "in";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "corporis";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "iste";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "iure";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "saepe";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quidem";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "ipsa";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_INTERSTITIAL;
                                        targetingOptionId = "est";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "mollitia";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.FRIDAY;
                                        endHour = 170909;
                                        startHour = 210382;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "explicabo";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                        targetingOptionId = "enim";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "omnis";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "minima";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "excepturi";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "iure";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "culpa";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                        targetingOptionId = "sapiente";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "architecto";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "mollitia";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "dolorem";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "culpa";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                        targetingOptionId = "repellat";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "mollitia";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "numquam";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "commodi";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quam";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "velit";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6235.1;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "quis";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "vitae";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "animi";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "enim";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "odit";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NEGATIVE_NEWS_PHARMACEUTICAL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                                }};
                                            }};
                                            customSegmentId = "voluptatibus";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE_UNSPECIFIED;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD10;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.VIDEO_IAB_UNSPECIFIED;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("ut"),
                                                add("maiores"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "quidem";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "molestias";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "excepturi";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "modi";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE4554;
                                        targetingOptionId = "voluptates";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quasi";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "repudiandae";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_APPLE_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "itaque";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consequatur";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "est";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "explicabo";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "deserunt";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "distinctio";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "quibusdam";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "modi";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "qui";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "magni";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ipsam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolorum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "facilis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "tempore";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "delectus";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "eum";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "non";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7561.07;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "aliquid";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "provident";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "sint";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "officia";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolor";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "a";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                        targetingOptionId = "in";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "in";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                                        endHour = 978571;
                                        startHour = 699479;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "magnam";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                        targetingOptionId = "facere";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "ea";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "laborum";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "accusamus";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "occaecati";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "enim";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                        targetingOptionId = "delectus";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "quidem";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "provident";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "nam";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "id";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "deleniti";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "sapiente";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "deserunt";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nisi";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vel";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                        targetingOptionId = "omnis";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4748.67;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "nihil";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "magnam";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "id";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "labore";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "labore";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALCOHOL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NEGATIVE_NEWS_PHARMACEUTICAL),
                                                }};
                                            }};
                                            customSegmentId = "mollitia";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE70_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("iure"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "nihil";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "repellat";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quibusdam";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "saepe";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY80_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNSPECIFIED;
                                        targetingOptionId = "consequuntur";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "praesentium";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "natus";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_IOS;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quo";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "maxime";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ea";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "excepturi";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "odit";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "accusantium";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "ab";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quidem";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ipsam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "voluptate";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "autem";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "pariatur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perferendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "amet";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "cumque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "hic";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolores";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "totam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eaque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eos";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                                        targetingOptionId = "dolores";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "minus";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quam";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2239.24;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "nostrum";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "hic";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "recusandae";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "omnis";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "facilis";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "perspiciatis";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "porro";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "blanditiis";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "error";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.DAY_OF_WEEK_UNSPECIFIED;
                                        endHour = 577229;
                                        startHour = 699098;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "asperiores";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                        targetingOptionId = "modi";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "iste";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                        targetingOptionId = "deleniti";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "pariatur";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                        targetingOptionId = "nobis";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "libero";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                        targetingOptionId = "quaerat";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "quos";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "aliquid";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "dolorem";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolorem";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                                        targetingOptionId = "qui";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "ipsum";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "excepturi";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "cum";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptate";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "reiciendis";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2274.14;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "numquam";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "veritatis";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "ipsa";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "iure";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "odio";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                }};
                                            }};
                                            customSegmentId = "dolorum";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE60_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY30_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE30_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("voluptate"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ600;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "provident";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "minima";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "repellendus";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "similique";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY_UNSPECIFIED;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_DURATION;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                        targetingOptionId = "vel";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quod";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "officiis";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "a";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "harum";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "ipsum";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "amet";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "tempore";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "accusamus";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "numquam";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dolorem";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "sapiente";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "nihil";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "sit";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "expedita";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "vel";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "deserunt";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quam";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "incidunt";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "qui";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 8075.81;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "soluta";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dicta";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "laborum";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "totam";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "incidunt";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "aspernatur";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "distinctio";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                        targetingOptionId = "aliquid";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quam";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 840429;
                                        startHour = 183280;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "fugit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "odio";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "sunt";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "nam";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "hic";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "cumque";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "soluta";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                                        targetingOptionId = "et";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "saepe";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "ipsum";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "veritatis";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nobis";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "tempore";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "cupiditate";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "delectus";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dolorem";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolore";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "adipisci";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6772.63;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "quae";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "aut";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "itaque";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "consequatur";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "est";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SEX_EDUCATION),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                }};
                                            }};
                                            customSegmentId = "delectus";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD4;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY65_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE10_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("quod"),
                                                add("odio"),
                                                add("similique"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ1000;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "nulla";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "fugit";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "porro";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "doloribus";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY40_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                                        targetingOptionId = "ducimus";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "alias";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "officia";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "ea";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "vel";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ratione";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ex";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dicta";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dolor";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "maiores";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ex";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptatibus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "sapiente";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "saepe";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "corporis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aliquid";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "magnam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quo";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aspernatur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eaque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "libero";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aut";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aliquam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "accusamus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "non";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolorum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "autem";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nobis";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_MUSIC;
                                        targetingOptionId = "assumenda";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nulla";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptas";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7270.44;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "tempora";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "numquam";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "explicabo";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "provident";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ipsa";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestiae";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                        targetingOptionId = "odio";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "esse";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "esse";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 683282;
                                        startHour = 442015;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "fugiat";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                                        targetingOptionId = "eum";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "suscipit";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_APP;
                                        targetingOptionId = "eos";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "praesentium";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "veritatis";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsa";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                                        targetingOptionId = "quidem";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "neque";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "quo";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "illum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quo";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                        targetingOptionId = "eius";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "eos";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "ab";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "cupiditate";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consequatur";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "debitis";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3708.53;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "sequi";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "quo";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_SMALL;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "recusandae";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "aperiam";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "distinctio";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                }};
                                            }};
                                            customSegmentId = "eum";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE60_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("incidunt"),
                                                add("atque"),
                                                add("explicabo"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "eveniet";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "accusamus";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "veritatis";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quod";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY70_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_DURATION;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("saepe"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_ON_SCREEN_POSITION;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("molestiae"),
                                add("rerum"),
                                add("occaecati"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_DEVICE_TYPE;
                        }}),
                    }};
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "sit";
                fields = "culpa";
                key = "tempore";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "consequuntur";
                uploadProtocol = "consequatur";
            }};            

            DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions(req, new DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity("minus", "quaerat") {{
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

## displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions

Lists assigned targeting options of an advertiser across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "a";
                filter = "nulla";
                key = "quas";
                oauthToken = "esse";
                orderBy = "quasi";
                pageSize = 951875L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "pariatur";
                uploadProtocol = "possimus";
            }};            

            DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions(req, new DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity("quia", "eveniet") {{
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

## displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions

Lists assigned targeting options of a campaign across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest("asperiores", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "culpa";
                filter = "aliquid";
                key = "tenetur";
                oauthToken = "quae";
                orderBy = "earum";
                pageSize = 424032L;
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "libero";
                uploadProtocol = "illum";
            }};            

            DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions(req, new DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity("soluta", "accusantium") {{
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

            DisplayvideoAdvertisersCampaignsCreateRequest req = new DisplayvideoAdvertisersCampaignsCreateRequest("aliquam") {{
                dollarXgafv = XgafvEnum.TWO;
                campaignInput = new CampaignInput() {{
                    campaignBudgets = new org.openapis.openapi.models.shared.CampaignBudget[]{{
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "ullam";
                            budgetId = "reprehenderit";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_CURRENCY;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 391774;
                                    month = 16328;
                                    year = 531849;
                                }};
                                startDate = new Date() {{
                                    day = 185232;
                                    month = 845358;
                                    year = 401259;
                                }};
                            }};
                            displayName = "deleniti";
                            externalBudgetId = "itaque";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN;
                            invoiceGroupingId = "architecto";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "omnis";
                                    prismaEstimateCode = "tenetur";
                                    prismaProductCode = "quasi";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_FEE;
                                supplier = "et";
                            }};
                        }}),
                    }};
                    campaignFlight = new CampaignFlight() {{
                        plannedDates = new DateRange() {{
                            endDate = new Date() {{
                                day = 454162;
                                month = 55965;
                                year = 326701;
                            }};;
                            startDate = new Date() {{
                                day = 86532;
                                month = 232744;
                                year = 237173;
                            }};;
                        }};;
                        plannedSpendAmountMicros = "iste";
                    }};;
                    campaignGoal = new CampaignGoal() {{
                        campaignGoalType = CampaignGoalCampaignGoalTypeEnum.CAMPAIGN_GOAL_TYPE_ONLINE_ACTION;
                        performanceGoal = new PerformanceGoal() {{
                            performanceGoalAmountMicros = "accusantium";
                            performanceGoalPercentageMicros = "rem";
                            performanceGoalString = "aut";
                            performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CPE;
                        }};;
                    }};;
                    displayName = "eum";
                    entityStatus = CampaignEntityStatusEnum.ENTITY_STATUS_DRAFT;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 68074;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_WEEKS;
                        timeUnitCount = 251941;
                        unlimited = false;
                    }};;
                }};;
                accessToken = "voluptatem";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "numquam";
                key = "impedit";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "aut";
                uploadProtocol = "dignissimos";
            }};            

            DisplayvideoAdvertisersCampaignsCreateResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsCreate(req, new DisplayvideoAdvertisersCampaignsCreateSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsCreateSecurityOption1("dicta", "maiores") {{
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

            DisplayvideoAdvertisersCampaignsDeleteRequest req = new DisplayvideoAdvertisersCampaignsDeleteRequest("natus", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "aperiam";
                fields = "ea";
                key = "quaerat";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "officia";
                uploadProtocol = "maxime";
            }};            

            DisplayvideoAdvertisersCampaignsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsDelete(req, new DisplayvideoAdvertisersCampaignsDeleteSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsDeleteSecurityOption1("dignissimos", "officia") {{
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

            DisplayvideoAdvertisersCampaignsGetRequest req = new DisplayvideoAdvertisersCampaignsGetRequest("asperiores", "nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "labore";
                key = "ab";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "id";
                uploadProtocol = "suscipit";
            }};            

            DisplayvideoAdvertisersCampaignsGetResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsGet(req, new DisplayvideoAdvertisersCampaignsGetSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsGetSecurityOption1("velit", "culpa") {{
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

            DisplayvideoAdvertisersCampaignsListRequest req = new DisplayvideoAdvertisersCampaignsListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "ducimus";
                filter = "quos";
                key = "vel";
                oauthToken = "labore";
                orderBy = "possimus";
                pageSize = 706575L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            DisplayvideoAdvertisersCampaignsListResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsList(req, new DisplayvideoAdvertisersCampaignsListSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsListSecurityOption1("reiciendis", "assumenda") {{
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

            DisplayvideoAdvertisersCampaignsPatchRequest req = new DisplayvideoAdvertisersCampaignsPatchRequest("nemo", "recusandae") {{
                dollarXgafv = XgafvEnum.ONE;
                campaignInput = new CampaignInput() {{
                    campaignBudgets = new org.openapis.openapi.models.shared.CampaignBudget[]{{
                        add(new CampaignBudget() {{
                            budgetAmountMicros = "cum";
                            budgetId = "consectetur";
                            budgetUnit = CampaignBudgetBudgetUnitEnum.BUDGET_UNIT_CURRENCY;
                            dateRange = new DateRange() {{
                                endDate = new Date() {{
                                    day = 348519;
                                    month = 937285;
                                    year = 814967;
                                }};
                                startDate = new Date() {{
                                    day = 257233;
                                    month = 985492;
                                    year = 381760;
                                }};
                            }};
                            displayName = "reiciendis";
                            externalBudgetId = "quidem";
                            externalBudgetSource = CampaignBudgetExternalBudgetSourceEnum.EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN;
                            invoiceGroupingId = "necessitatibus";
                            prismaConfig = new PrismaConfig() {{
                                prismaCpeCode = new PrismaCpeCode() {{
                                    prismaClientCode = "dolore";
                                    prismaEstimateCode = "sunt";
                                    prismaProductCode = "asperiores";
                                }};
                                prismaType = PrismaConfigPrismaTypeEnum.PRISMA_TYPE_DISPLAY;
                                supplier = "non";
                            }};
                        }}),
                    }};
                    campaignFlight = new CampaignFlight() {{
                        plannedDates = new DateRange() {{
                            endDate = new Date() {{
                                day = 228263;
                                month = 105906;
                                year = 489509;
                            }};;
                            startDate = new Date() {{
                                day = 950953;
                                month = 891523;
                                year = 233420;
                            }};;
                        }};;
                        plannedSpendAmountMicros = "corporis";
                    }};;
                    campaignGoal = new CampaignGoal() {{
                        campaignGoalType = CampaignGoalCampaignGoalTypeEnum.CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION;
                        performanceGoal = new PerformanceGoal() {{
                            performanceGoalAmountMicros = "laboriosam";
                            performanceGoalPercentageMicros = "ipsa";
                            performanceGoalString = "voluptates";
                            performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_VCPM;
                        }};;
                    }};;
                    displayName = "vitae";
                    entityStatus = CampaignEntityStatusEnum.ENTITY_STATUS_SCHEDULED_FOR_DELETION;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 631126;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_LIFETIME;
                        timeUnitCount = 132815;
                        unlimited = false;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.MEDIA;
                callback = "voluptas";
                fields = "minima";
                key = "nobis";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "adipisci";
                updateMask = "minus";
                uploadType = "dolores";
                uploadProtocol = "blanditiis";
            }};            

            DisplayvideoAdvertisersCampaignsPatchResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsPatch(req, new DisplayvideoAdvertisersCampaignsPatchSecurity() {{
                option1 = new DisplayvideoAdvertisersCampaignsPatchSecurityOption1("in", "dolore") {{
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

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest("aliquam", "officiis", "temporibus", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_AUDIENCE_GROUP) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "hic";
                key = "nesciunt";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "pariatur";
                uploadProtocol = "totam";
            }};            

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity("hic", "exercitationem") {{
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

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest("nobis", "sit", DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_LANGUAGE) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "facilis";
                filter = "voluptate";
                key = "expedita";
                oauthToken = "ab";
                orderBy = "iste";
                pageSize = 292794L;
                pageToken = "laborum";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "in";
                uploadProtocol = "commodi";
            }};            

            DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity("quidem", "explicabo") {{
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

            DisplayvideoAdvertisersChannelsCreateRequest req = new DisplayvideoAdvertisersChannelsCreateRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                channelInput = new ChannelInput() {{
                    advertiserId = "architecto";
                    displayName = "suscipit";
                    partnerId = "sapiente";
                }};;
                accessToken = "debitis";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "perferendis";
                key = "corrupti";
                oauthToken = "maiores";
                partnerId = "incidunt";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "provident";
                uploadProtocol = "eius";
            }};            

            DisplayvideoAdvertisersChannelsCreateResponse res = sdk.advertisers.displayvideoAdvertisersChannelsCreate(req, new DisplayvideoAdvertisersChannelsCreateSecurity("necessitatibus", "ipsum") {{
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
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "tempora";
                filter = "voluptate";
                key = "reiciendis";
                oauthToken = "ex";
                orderBy = "sit";
                pageSize = 248413L;
                pageToken = "officiis";
                partnerId = "praesentium";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "quaerat";
                uploadProtocol = "incidunt";
            }};            

            DisplayvideoAdvertisersChannelsListResponse res = sdk.advertisers.displayvideoAdvertisersChannelsList(req, new DisplayvideoAdvertisersChannelsListSecurity("ipsam", "debitis") {{
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

            DisplayvideoAdvertisersChannelsPatchRequest req = new DisplayvideoAdvertisersChannelsPatchRequest("rem", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                channelInput = new ChannelInput() {{
                    advertiserId = "error";
                    displayName = "veniam";
                    partnerId = "minima";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "magni";
                key = "aperiam";
                oauthToken = "saepe";
                partnerId = "numquam";
                prettyPrint = false;
                quotaUser = "veniam";
                updateMask = "in";
                uploadType = "officiis";
                uploadProtocol = "beatae";
            }};            

            DisplayvideoAdvertisersChannelsPatchResponse res = sdk.advertisers.displayvideoAdvertisersChannelsPatch(req, new DisplayvideoAdvertisersChannelsPatchSecurity("laudantium", "exercitationem") {{
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

            DisplayvideoAdvertisersChannelsSitesBulkEditRequest req = new DisplayvideoAdvertisersChannelsSitesBulkEditRequest("praesentium", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditSitesRequestInput = new BulkEditSitesRequestInput() {{
                    advertiserId = "dolorum";
                    createdSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "error";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "hic";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "expedita";
                        }}),
                    }};
                    deletedSites = new String[]{{
                        add("neque"),
                        add("dolorum"),
                        add("nostrum"),
                        add("officia"),
                    }};
                    partnerId = "dolorum";
                }};;
                accessToken = "corrupti";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "atque";
                key = "fugit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "voluptatem";
                uploadProtocol = "culpa";
            }};            

            DisplayvideoAdvertisersChannelsSitesBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesBulkEdit(req, new DisplayvideoAdvertisersChannelsSitesBulkEditSecurity("expedita", "magnam") {{
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

            DisplayvideoAdvertisersChannelsSitesDeleteRequest req = new DisplayvideoAdvertisersChannelsSitesDeleteRequest("consequatur", "esse", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "corporis";
                key = "et";
                oauthToken = "blanditiis";
                partnerId = "ex";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "sit";
                uploadProtocol = "vel";
            }};            

            DisplayvideoAdvertisersChannelsSitesDeleteResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesDelete(req, new DisplayvideoAdvertisersChannelsSitesDeleteSecurity("nostrum", "saepe") {{
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

            DisplayvideoAdvertisersChannelsSitesListRequest req = new DisplayvideoAdvertisersChannelsSitesListRequest("error", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.JSON;
                callback = "harum";
                fields = "dicta";
                filter = "architecto";
                key = "occaecati";
                oauthToken = "labore";
                orderBy = "quidem";
                pageSize = 539074L;
                pageToken = "laborum";
                partnerId = "nam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "laboriosam";
                uploadProtocol = "alias";
            }};            

            DisplayvideoAdvertisersChannelsSitesListResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesList(req, new DisplayvideoAdvertisersChannelsSitesListSecurity("amet", "deserunt") {{
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

            DisplayvideoAdvertisersChannelsSitesReplaceRequest req = new DisplayvideoAdvertisersChannelsSitesReplaceRequest("voluptate", "unde") {{
                dollarXgafv = XgafvEnum.TWO;
                replaceSitesRequestInput = new ReplaceSitesRequestInput() {{
                    advertiserId = "provident";
                    newSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "delectus";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "voluptates";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "perferendis";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "est";
                        }}),
                    }};
                    partnerId = "quidem";
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "praesentium";
                key = "mollitia";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "quisquam";
                uploadProtocol = "repudiandae";
            }};            

            DisplayvideoAdvertisersChannelsSitesReplaceResponse res = sdk.advertisers.displayvideoAdvertisersChannelsSitesReplace(req, new DisplayvideoAdvertisersChannelsSitesReplaceSecurity("quasi", "atque") {{
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
                dollarXgafv = XgafvEnum.ONE;
                advertiserInput = new AdvertiserInput() {{
                    adServerConfig = new AdvertiserAdServerConfig() {{
                        cmHybridConfig = new CmHybridConfig() {{
                            cmAccountId = "asperiores";
                            cmFloodlightConfigId = "totam";
                            cmFloodlightLinkingAuthorized = false;
                            cmSyncableSiteIds = new String[]{{
                                add("quidem"),
                                add("maxime"),
                            }};
                            dv360ToCmCostReportingEnabled = false;
                            dv360ToCmDataSharingEnabled = false;
                        }};;
                        thirdPartyOnlyConfig = new ThirdPartyOnlyConfig() {{
                            pixelOrderIdReportingEnabled = false;
                        }};;
                    }};;
                    creativeConfig = new AdvertiserCreativeConfig() {{
                        dynamicCreativeEnabled = false;
                        iasClientId = "et";
                        obaComplianceDisabled = false;
                        videoCreativeDataSharingAuthorized = false;
                    }};;
                    dataAccessConfig = new AdvertiserDataAccessConfig() {{
                        sdfConfig = new AdvertiserSdfConfig() {{
                            overridePartnerSdfConfig = false;
                            sdfConfig = new SdfConfig() {{
                                adminEmail = "esse";
                                version = SdfConfigVersionEnum.SDF_VERSION4;
                            }};;
                        }};;
                    }};;
                    displayName = "assumenda";
                    entityStatus = AdvertiserEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    generalConfig = new AdvertiserGeneralConfigInput() {{
                        currencyCode = "atque";
                        domainUrl = "error";
                    }};;
                    integrationDetails = new IntegrationDetails() {{
                        details = "officiis";
                        integrationCode = "officiis";
                    }};;
                    partnerId = "accusamus";
                    prismaEnabled = false;
                    servingConfig = new AdvertiserTargetingConfig() {{
                        exemptTvFromViewabilityTargeting = false;
                    }};;
                }};;
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "ex";
                key = "maiores";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "error";
                uploadProtocol = "blanditiis";
            }};            

            DisplayvideoAdvertisersCreateResponse res = sdk.advertisers.displayvideoAdvertisersCreate(req, new DisplayvideoAdvertisersCreateSecurity("suscipit", "repudiandae") {{
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

            DisplayvideoAdvertisersCreativesCreateRequest req = new DisplayvideoAdvertisersCreativesCreateRequest("atque") {{
                dollarXgafv = XgafvEnum.TWO;
                creativeInput = new CreativeInput() {{
                    additionalDimensions = new org.openapis.openapi.models.shared.Dimensions[]{{
                        add(new Dimensions() {{
                            heightPixels = 923306;
                            widthPixels = 680697;
                        }}),
                    }};
                    appendedTag = "repellendus";
                    assets = new org.openapis.openapi.models.shared.AssetAssociation[]{{
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "reiciendis";
                                mediaId = "doloremque";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_ICON;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "dicta";
                                mediaId = "accusantium";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_MAIN;
                        }}),
                    }};
                    cmTrackingAd = new CmTrackingAd() {{
                        cmAdId = "dolores";
                        cmCreativeId = "enim";
                        cmPlacementId = "laboriosam";
                    }};;
                    companionCreativeIds = new String[]{{
                        add("a"),
                    }};
                    counterEvents = new org.openapis.openapi.models.shared.CounterEvent[]{{
                        add(new CounterEvent() {{
                            name = "Tricia Cronin";
                            reportingName = "perspiciatis";
                        }}),
                        add(new CounterEvent() {{
                            name = "Sylvia Upton";
                            reportingName = "fugit";
                        }}),
                        add(new CounterEvent() {{
                            name = "Leo Kiehn II";
                            reportingName = "quidem";
                        }}),
                    }};
                    creativeType = CreativeCreativeTypeEnum.CREATIVE_TYPE_NATIVE_VIDEO;
                    dimensions = new Dimensions() {{
                        heightPixels = 247399;
                        widthPixels = 878493;
                    }};;
                    displayName = "doloremque";
                    entityStatus = CreativeEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    exitEvents = new org.openapis.openapi.models.shared.ExitEvent[]{{
                        add(new ExitEvent() {{
                            name = "Frank Krajcik";
                            reportingName = "cum";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_DEFAULT;
                            url = "necessitatibus";
                        }}),
                    }};
                    expandOnHover = false;
                    expandingDirection = CreativeExpandingDirectionEnum.EXPANDING_DIRECTION_UP;
                    hostingSource = CreativeHostingSourceEnum.HOSTING_SOURCE_HOSTED;
                    iasCampaignMonitoring = false;
                    integrationCode = "distinctio";
                    jsTrackerUrl = "voluptatum";
                    notes = "rem";
                    obaIcon = new ObaIcon() {{
                        clickTrackingUrl = "aliquam";
                        dimensions = new Dimensions() {{
                            heightPixels = 320565;
                            widthPixels = 997963;
                        }};;
                        landingPageUrl = "alias";
                        position = ObaIconPositionEnum.OBA_ICON_POSITION_UPPER_RIGHT;
                        program = "perspiciatis";
                        resourceMimeType = "nihil";
                        resourceUrl = "mollitia";
                        viewTrackingUrl = "voluptas";
                    }};;
                    progressOffset = new AudioVideoOffset() {{
                        percentage = "alias";
                        seconds = "maiores";
                    }};;
                    requireHtml5 = false;
                    requireMraid = false;
                    requirePingForAttribution = false;
                    reviewStatus = new ReviewStatusInfo() {{
                        approvalStatus = ReviewStatusInfoApprovalStatusEnum.APPROVAL_STATUS_REJECTED_NOT_SERVABLE;
                        contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                        creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum.REVIEW_STATUS_REJECTED;
                        exchangeReviewStatuses = new org.openapis.openapi.models.shared.ExchangeReviewStatus[]{{
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_INDEX;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_FREEWHEEL;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                            }}),
                        }};
                        publisherReviewStatuses = new org.openapis.openapi.models.shared.PublisherReviewStatus[]{{
                            add(new PublisherReviewStatus() {{
                                publisherName = "omnis";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_APPROVED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "molestiae";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_APPROVED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "ut";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_REJECTED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "adipisci";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                        }};
                    }};;
                    skipOffset = new AudioVideoOffset() {{
                        percentage = "laudantium";
                        seconds = "eum";
                    }};;
                    skippable = false;
                    thirdPartyTag = "nemo";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyUrl[]{{
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE;
                            url = "provident";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT;
                            url = "eum";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS;
                            url = "provident";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_CLICK_TRACKING;
                            url = "ullam";
                        }}),
                    }};
                    timerEvents = new org.openapis.openapi.models.shared.TimerEvent[]{{
                        add(new TimerEvent() {{
                            name = "Gordon O'Hara";
                            reportingName = "animi";
                        }}),
                    }};
                    trackerUrls = new String[]{{
                        add("aliquid"),
                        add("accusantium"),
                    }};
                    universalAdId = new UniversalAdId() {{
                        id = "ff57bfaa-d4f9-4efc-9b45-12c1032648dc";
                        registry = UniversalAdIdRegistryEnum.UNIVERSAL_AD_REGISTRY_OTHER;
                    }};;
                    vastTagUrl = "sapiente";
                }};;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "beatae";
                key = "cupiditate";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "earum";
                uploadType = "soluta";
                uploadProtocol = "hic";
            }};            

            DisplayvideoAdvertisersCreativesCreateResponse res = sdk.advertisers.displayvideoAdvertisersCreativesCreate(req, new DisplayvideoAdvertisersCreativesCreateSecurity("illum", "eaque") {{
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

            DisplayvideoAdvertisersCreativesDeleteRequest req = new DisplayvideoAdvertisersCreativesDeleteRequest("earum", "perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "suscipit";
                key = "dolorem";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "fuga";
                uploadProtocol = "ratione";
            }};            

            DisplayvideoAdvertisersCreativesDeleteResponse res = sdk.advertisers.displayvideoAdvertisersCreativesDelete(req, new DisplayvideoAdvertisersCreativesDeleteSecurity("animi", "necessitatibus") {{
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

            DisplayvideoAdvertisersCreativesGetRequest req = new DisplayvideoAdvertisersCreativesGetRequest("nulla", "consequatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "occaecati";
                key = "suscipit";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "magni";
                uploadProtocol = "doloribus";
            }};            

            DisplayvideoAdvertisersCreativesGetResponse res = sdk.advertisers.displayvideoAdvertisersCreativesGet(req, new DisplayvideoAdvertisersCreativesGetSecurity("nulla", "necessitatibus") {{
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

            DisplayvideoAdvertisersCreativesListRequest req = new DisplayvideoAdvertisersCreativesListRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "dicta";
                fields = "iusto";
                filter = "esse";
                key = "praesentium";
                oauthToken = "maiores";
                orderBy = "reiciendis";
                pageSize = 423706L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "doloremque";
                uploadProtocol = "dicta";
            }};            

            DisplayvideoAdvertisersCreativesListResponse res = sdk.advertisers.displayvideoAdvertisersCreativesList(req, new DisplayvideoAdvertisersCreativesListSecurity("odio", "tempora") {{
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

            DisplayvideoAdvertisersCreativesPatchRequest req = new DisplayvideoAdvertisersCreativesPatchRequest("esse", "ex") {{
                dollarXgafv = XgafvEnum.ONE;
                creativeInput = new CreativeInput() {{
                    additionalDimensions = new org.openapis.openapi.models.shared.Dimensions[]{{
                        add(new Dimensions() {{
                            heightPixels = 58870;
                            widthPixels = 671384;
                        }}),
                        add(new Dimensions() {{
                            heightPixels = 123844;
                            widthPixels = 344718;
                        }}),
                    }};
                    appendedTag = "fugiat";
                    assets = new org.openapis.openapi.models.shared.AssetAssociation[]{{
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "aliquid";
                                mediaId = "officia";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_BODY;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "aliquid";
                                mediaId = "perferendis";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_LONG_BODY;
                        }}),
                        add(new AssetAssociation() {{
                            asset = new Asset() {{
                                content = "voluptas";
                                mediaId = "iste";
                            }};
                            role = AssetAssociationRoleEnum.ASSET_ROLE_PRICE;
                        }}),
                    }};
                    cmTrackingAd = new CmTrackingAd() {{
                        cmAdId = "ab";
                        cmCreativeId = "error";
                        cmPlacementId = "possimus";
                    }};;
                    companionCreativeIds = new String[]{{
                        add("mollitia"),
                        add("laborum"),
                        add("libero"),
                        add("ad"),
                    }};
                    counterEvents = new org.openapis.openapi.models.shared.CounterEvent[]{{
                        add(new CounterEvent() {{
                            name = "Gloria Skiles";
                            reportingName = "ex";
                        }}),
                        add(new CounterEvent() {{
                            name = "Ms. Geraldine Ratke";
                            reportingName = "aliquid";
                        }}),
                        add(new CounterEvent() {{
                            name = "Miss Nora Moen";
                            reportingName = "culpa";
                        }}),
                    }};
                    creativeType = CreativeCreativeTypeEnum.CREATIVE_TYPE_UNSPECIFIED;
                    dimensions = new Dimensions() {{
                        heightPixels = 959143;
                        widthPixels = 889288;
                    }};;
                    displayName = "architecto";
                    entityStatus = CreativeEntityStatusEnum.ENTITY_STATUS_PAUSED;
                    exitEvents = new org.openapis.openapi.models.shared.ExitEvent[]{{
                        add(new ExitEvent() {{
                            name = "Donald Abbott";
                            reportingName = "ex";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_BACKUP;
                            url = "rem";
                        }}),
                        add(new ExitEvent() {{
                            name = "Herman Zemlak";
                            reportingName = "perferendis";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_BACKUP;
                            url = "totam";
                        }}),
                        add(new ExitEvent() {{
                            name = "Taylor Reichel";
                            reportingName = "dolor";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_UNSPECIFIED;
                            url = "inventore";
                        }}),
                        add(new ExitEvent() {{
                            name = "Peter Goodwin Sr.";
                            reportingName = "sit";
                            type = ExitEventTypeEnum.EXIT_EVENT_TYPE_UNSPECIFIED;
                            url = "fugit";
                        }}),
                    }};
                    expandOnHover = false;
                    expandingDirection = CreativeExpandingDirectionEnum.EXPANDING_DIRECTION_UNSPECIFIED;
                    hostingSource = CreativeHostingSourceEnum.HOSTING_SOURCE_THIRD_PARTY;
                    iasCampaignMonitoring = false;
                    integrationCode = "quae";
                    jsTrackerUrl = "dolor";
                    notes = "fugiat";
                    obaIcon = new ObaIcon() {{
                        clickTrackingUrl = "ipsam";
                        dimensions = new Dimensions() {{
                            heightPixels = 162120;
                            widthPixels = 55107;
                        }};;
                        landingPageUrl = "quas";
                        position = ObaIconPositionEnum.OBA_ICON_POSITION_LOWER_LEFT;
                        program = "impedit";
                        resourceMimeType = "officiis";
                        resourceUrl = "esse";
                        viewTrackingUrl = "necessitatibus";
                    }};;
                    progressOffset = new AudioVideoOffset() {{
                        percentage = "sed";
                        seconds = "veniam";
                    }};;
                    requireHtml5 = false;
                    requireMraid = false;
                    requirePingForAttribution = false;
                    reviewStatus = new ReviewStatusInfo() {{
                        approvalStatus = ReviewStatusInfoApprovalStatusEnum.APPROVAL_STATUS_UNSPECIFIED;
                        contentAndPolicyReviewStatus = ReviewStatusInfoContentAndPolicyReviewStatusEnum.REVIEW_STATUS_REJECTED;
                        creativeAndLandingPageReviewStatus = ReviewStatusInfoCreativeAndLandingPageReviewStatusEnum.REVIEW_STATUS_APPROVED;
                        exchangeReviewStatuses = new org.openapis.openapi.models.shared.ExchangeReviewStatus[]{{
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_SMARTRTB;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_APPROVED;
                            }}),
                            add(new ExchangeReviewStatus() {{
                                exchange = ExchangeReviewStatusExchangeEnum.EXCHANGE_ONE_BY_AOL_DISPLAY;
                                status = ExchangeReviewStatusStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                            }}),
                        }};
                        publisherReviewStatuses = new org.openapis.openapi.models.shared.PublisherReviewStatus[]{{
                            add(new PublisherReviewStatus() {{
                                publisherName = "autem";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "laboriosam";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "consequuntur";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_UNSPECIFIED;
                            }}),
                            add(new PublisherReviewStatus() {{
                                publisherName = "exercitationem";
                                status = PublisherReviewStatusStatusEnum.REVIEW_STATUS_PENDING;
                            }}),
                        }};
                    }};;
                    skipOffset = new AudioVideoOffset() {{
                        percentage = "quasi";
                        seconds = "nisi";
                    }};;
                    skippable = false;
                    thirdPartyTag = "at";
                    thirdPartyUrls = new org.openapis.openapi.models.shared.ThirdPartyUrl[]{{
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND;
                            url = "harum";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START;
                            url = "doloribus";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP;
                            url = "optio";
                        }}),
                        add(new ThirdPartyUrl() {{
                            type = ThirdPartyUrlTypeEnum.THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE;
                            url = "nemo";
                        }}),
                    }};
                    timerEvents = new org.openapis.openapi.models.shared.TimerEvent[]{{
                        add(new TimerEvent() {{
                            name = "Gerard Hodkiewicz";
                            reportingName = "quos";
                        }}),
                        add(new TimerEvent() {{
                            name = "Janice Kunze";
                            reportingName = "laudantium";
                        }}),
                    }};
                    trackerUrls = new String[]{{
                        add("quasi"),
                        add("rem"),
                    }};
                    universalAdId = new UniversalAdId() {{
                        id = "d162309f-b092-4992-9aef-b9f58c4d86e6";
                        registry = UniversalAdIdRegistryEnum.UNIVERSAL_AD_REGISTRY_CLEARCAST;
                    }};;
                    vastTagUrl = "earum";
                }};;
                accessToken = "modi";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "voluptatem";
                key = "ipsam";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "alias";
                updateMask = "quasi";
                uploadType = "non";
                uploadProtocol = "maiores";
            }};            

            DisplayvideoAdvertisersCreativesPatchResponse res = sdk.advertisers.displayvideoAdvertisersCreativesPatch(req, new DisplayvideoAdvertisersCreativesPatchSecurity("enim", "sint") {{
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

            DisplayvideoAdvertisersDeleteRequest req = new DisplayvideoAdvertisersDeleteRequest("nulla") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "reprehenderit";
                fields = "est";
                key = "quis";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "impedit";
                uploadProtocol = "hic";
            }};            

            DisplayvideoAdvertisersDeleteResponse res = sdk.advertisers.displayvideoAdvertisersDelete(req, new DisplayvideoAdvertisersDeleteSecurity("necessitatibus", "asperiores") {{
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

            DisplayvideoAdvertisersGetRequest req = new DisplayvideoAdvertisersGetRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "debitis";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "minus";
                key = "fuga";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "consectetur";
                uploadType = "velit";
                uploadProtocol = "atque";
            }};            

            DisplayvideoAdvertisersGetResponse res = sdk.advertisers.displayvideoAdvertisersGet(req, new DisplayvideoAdvertisersGetSecurity("ipsum", "impedit") {{
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

## displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions

Lists assigned targeting options of an insertion order across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest("magni", "soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.JSON;
                callback = "iusto";
                fields = "voluptate";
                filter = "sequi";
                key = "dignissimos";
                oauthToken = "neque";
                orderBy = "quo";
                pageSize = 535468L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odit";
                uploadProtocol = "voluptatibus";
            }};            

            DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions(req, new DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity("vel", "magnam") {{
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

            DisplayvideoAdvertisersInsertionOrdersCreateRequest req = new DisplayvideoAdvertisersInsertionOrdersCreateRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                insertionOrderInput = new InsertionOrderInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "facere";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "libero";
                            maxAverageCpmBidAmountMicros = "architecto";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "quia";
                            maxAverageCpmBidAmountMicros = "porro";
                            performanceGoalAmountMicros = "aliquam";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA;
                        }};;
                    }};;
                    billableOutcome = InsertionOrderBillableOutcomeEnum.BILLABLE_OUTCOME_UNSPECIFIED;
                    budget = new InsertionOrderBudget() {{
                        automationType = InsertionOrderBudgetAutomationTypeEnum.INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED;
                        budgetSegments = new org.openapis.openapi.models.shared.InsertionOrderBudgetSegment[]{{
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "ea";
                                campaignBudgetId = "beatae";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 877751;
                                        month = 568218;
                                        year = 431994;
                                    }};
                                    startDate = new Date() {{
                                        day = 246557;
                                        month = 284086;
                                        year = 596433;
                                    }};
                                }};
                                description = "earum";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "dicta";
                                campaignBudgetId = "impedit";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 975884;
                                        month = 610987;
                                        year = 932562;
                                    }};
                                    startDate = new Date() {{
                                        day = 2677;
                                        month = 391797;
                                        year = 931505;
                                    }};
                                }};
                                description = "velit";
                            }}),
                        }};
                        budgetUnit = InsertionOrderBudgetBudgetUnitEnum.BUDGET_UNIT_IMPRESSIONS;
                    }};;
                    campaignId = "non";
                    displayName = "dolor";
                    entityStatus = InsertionOrderEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 24753;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_UNSPECIFIED;
                        timeUnitCount = 7468;
                        unlimited = false;
                    }};;
                    insertionOrderType = InsertionOrderInsertionOrderTypeEnum.RTB;
                    integrationDetails = new IntegrationDetails() {{
                        details = "recusandae";
                        integrationCode = "ea";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "quidem";
                        dailyMaxMicros = "voluptas";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_FLIGHT;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_EVEN;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER;
                            feeAmount = "deleniti";
                            feePercentageMillis = "a";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_NIELSEN_DAR;
                            feeAmount = "necessitatibus";
                            feePercentageMillis = "animi";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_MEDIA_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DEFAULT;
                            feeAmount = "est";
                            feePercentageMillis = "error";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_UNSPECIFIED;
                        }}),
                    }};
                    performanceGoal = new PerformanceGoal() {{
                        performanceGoalAmountMicros = "veritatis";
                        performanceGoalPercentageMicros = "vero";
                        performanceGoalString = "consectetur";
                        performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CPM;
                    }};;
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "qui";
                key = "iste";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "soluta";
                uploadProtocol = "libero";
            }};            

            DisplayvideoAdvertisersInsertionOrdersCreateResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersCreate(req, new DisplayvideoAdvertisersInsertionOrdersCreateSecurity("rem", "dolorum") {{
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

            DisplayvideoAdvertisersInsertionOrdersDeleteRequest req = new DisplayvideoAdvertisersInsertionOrdersDeleteRequest("odio", "fugit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "quae";
                key = "modi";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "itaque";
                uploadProtocol = "et";
            }};            

            DisplayvideoAdvertisersInsertionOrdersDeleteResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersDelete(req, new DisplayvideoAdvertisersInsertionOrdersDeleteSecurity("ipsum", "unde") {{
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

            DisplayvideoAdvertisersInsertionOrdersGetRequest req = new DisplayvideoAdvertisersInsertionOrdersGetRequest("nulla", "distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.JSON;
                callback = "nostrum";
                fields = "omnis";
                key = "libero";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "libero";
                uploadProtocol = "fugiat";
            }};            

            DisplayvideoAdvertisersInsertionOrdersGetResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersGet(req, new DisplayvideoAdvertisersInsertionOrdersGetSecurity("officia", "quos") {{
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

            DisplayvideoAdvertisersInsertionOrdersListRequest req = new DisplayvideoAdvertisersInsertionOrdersListRequest("placeat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "voluptates";
                fields = "inventore";
                filter = "aperiam";
                key = "totam";
                oauthToken = "dolore";
                orderBy = "eligendi";
                pageSize = 715053L;
                pageToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "autem";
                uploadType = "esse";
                uploadProtocol = "dolores";
            }};            

            DisplayvideoAdvertisersInsertionOrdersListResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersList(req, new DisplayvideoAdvertisersInsertionOrdersListSecurity("assumenda", "beatae") {{
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

            DisplayvideoAdvertisersInsertionOrdersPatchRequest req = new DisplayvideoAdvertisersInsertionOrdersPatchRequest("est", "facere") {{
                dollarXgafv = XgafvEnum.TWO;
                insertionOrderInput = new InsertionOrderInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "molestiae";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "provident";
                            maxAverageCpmBidAmountMicros = "accusamus";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "tempore";
                            maxAverageCpmBidAmountMicros = "sint";
                            performanceGoalAmountMicros = "ea";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM;
                        }};;
                    }};;
                    billableOutcome = InsertionOrderBillableOutcomeEnum.BILLABLE_OUTCOME_PAY_PER_IMPRESSION;
                    budget = new InsertionOrderBudget() {{
                        automationType = InsertionOrderBudgetAutomationTypeEnum.INSERTION_ORDER_AUTOMATION_TYPE_NONE;
                        budgetSegments = new org.openapis.openapi.models.shared.InsertionOrderBudgetSegment[]{{
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "corporis";
                                campaignBudgetId = "officiis";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 972912;
                                        month = 737279;
                                        year = 872303;
                                    }};
                                    startDate = new Date() {{
                                        day = 5152;
                                        month = 156653;
                                        year = 694158;
                                    }};
                                }};
                                description = "fuga";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "repudiandae";
                                campaignBudgetId = "accusantium";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 710456;
                                        month = 885208;
                                        year = 177005;
                                    }};
                                    startDate = new Date() {{
                                        day = 844854;
                                        month = 483518;
                                        year = 510128;
                                    }};
                                }};
                                description = "odit";
                            }}),
                            add(new InsertionOrderBudgetSegment() {{
                                budgetAmountMicros = "explicabo";
                                campaignBudgetId = "corporis";
                                dateRange = new DateRange() {{
                                    endDate = new Date() {{
                                        day = 621473;
                                        month = 937117;
                                        year = 239337;
                                    }};
                                    startDate = new Date() {{
                                        day = 923306;
                                        month = 630871;
                                        year = 282837;
                                    }};
                                }};
                                description = "quidem";
                            }}),
                        }};
                        budgetUnit = InsertionOrderBudgetBudgetUnitEnum.BUDGET_UNIT_CURRENCY;
                    }};;
                    campaignId = "beatae";
                    displayName = "unde";
                    entityStatus = InsertionOrderEntityStatusEnum.ENTITY_STATUS_ARCHIVED;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 963198;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_DAYS;
                        timeUnitCount = 147801;
                        unlimited = false;
                    }};;
                    insertionOrderType = InsertionOrderInsertionOrderTypeEnum.INSERTION_ORDER_TYPE_UNSPECIFIED;
                    integrationDetails = new IntegrationDetails() {{
                        details = "numquam";
                        integrationCode = "nesciunt";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "at";
                        dailyMaxMicros = "officia";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_DAILY;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_EVEN;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DEFAULT;
                            feeAmount = "qui";
                            feePercentageMillis = "expedita";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM;
                            feeAmount = "placeat";
                            feePercentageMillis = "enim";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_UNSPECIFIED;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_VIZU;
                            feeAmount = "eum";
                            feePercentageMillis = "modi";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_UNSPECIFIED;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_CUSTOM_FEE3;
                            feeAmount = "maiores";
                            feePercentageMillis = "tempore";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_UNSPECIFIED;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                    }};
                    performanceGoal = new PerformanceGoal() {{
                        performanceGoalAmountMicros = "ratione";
                        performanceGoalPercentageMicros = "labore";
                        performanceGoalString = "totam";
                        performanceGoalType = PerformanceGoalPerformanceGoalTypeEnum.PERFORMANCE_GOAL_TYPE_CLICK_CVR;
                    }};;
                }};;
                accessToken = "voluptas";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "minus";
                key = "fuga";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "est";
                updateMask = "impedit";
                uploadType = "delectus";
                uploadProtocol = "tempore";
            }};            

            DisplayvideoAdvertisersInsertionOrdersPatchResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersPatch(req, new DisplayvideoAdvertisersInsertionOrdersPatchSecurity("vero", "odit") {{
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

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest("repellat", "pariatur", "nemo", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_THIRD_PARTY_VERIFIER) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "in";
                fields = "ducimus";
                key = "excepturi";
                oauthToken = "dolores";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "veritatis";
                uploadProtocol = "ducimus";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity("voluptate", "pariatur") {{
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

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest("itaque", "similique", DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_INVENTORY_SOURCE_GROUP) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "officiis";
                fields = "placeat";
                filter = "quidem";
                key = "exercitationem";
                oauthToken = "quam";
                orderBy = "dolorem";
                pageSize = 264619L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "vero";
                uploadProtocol = "sequi";
            }};            

            DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity("repudiandae", "cum") {{
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

            DisplayvideoAdvertisersInvoicesListRequest req = new DisplayvideoAdvertisersInvoicesListRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veniam";
                alt = AltEnum.MEDIA;
                callback = "dolores";
                fields = "nam";
                issueMonth = "dicta";
                key = "consequuntur";
                loiSapinInvoiceType = DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum.LOI_SAPIN_INVOICE_TYPE_PLATFORM;
                oauthToken = "nobis";
                pageSize = 56877L;
                pageToken = "ducimus";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "veritatis";
                uploadProtocol = "quasi";
            }};            

            DisplayvideoAdvertisersInvoicesListResponse res = sdk.advertisers.displayvideoAdvertisersInvoicesList(req, new DisplayvideoAdvertisersInvoicesListSecurity() {{
                option1 = new DisplayvideoAdvertisersInvoicesListSecurityOption1("laboriosam", "pariatur") {{
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

            DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest req = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest("libero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "nostrum";
                invoiceMonth = "doloribus";
                key = "eligendi";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "hic";
                uploadProtocol = "animi";
            }};            

            DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse res = sdk.advertisers.displayvideoAdvertisersInvoicesLookupInvoiceCurrency(req, new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity() {{
                option1 = new DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1("quas", "totam") {{
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

## displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions

Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity;
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
import org.openapis.openapi.models.shared.BulkEditLineItemAssignedTargetingOptionsRequestInput;
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
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsInput;
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
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest("molestias", "odio") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditLineItemAssignedTargetingOptionsRequestInput = new BulkEditLineItemAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE4554;
                                        targetingOptionId = "iste";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "assumenda";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "tempore";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "doloremque";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "cum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ipsum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "adipisci";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "saepe";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "doloremque";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "quis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "veniam";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "architecto";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "cupiditate";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "molestiae";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "non";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "itaque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "asperiores";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "consequuntur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "odit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "amet";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ab";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "tempore";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptatibus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "blanditiis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "libero";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "facilis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ipsum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ad";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "voluptatibus";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                        targetingOptionId = "consequuntur";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "debitis";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "labore";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7009.28;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "reprehenderit";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nostrum";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "neque";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "iusto";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "est";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "rem";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_POST_ROLL;
                                        targetingOptionId = "fugiat";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                        targetingOptionId = "officiis";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ducimus";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.MONDAY;
                                        endHour = 118041;
                                        startHour = 622894;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vitae";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_CONNECTED_TV;
                                        targetingOptionId = "esse";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "fugiat";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "aspernatur";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "enim";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "iusto";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dignissimos";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                                        targetingOptionId = "illo";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "ab";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "incidunt";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "accusamus";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "saepe";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                        targetingOptionId = "veniam";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "eos";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "earum";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "reprehenderit";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "praesentium";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "repellat";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7897.7;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "nihil";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "deleniti";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "labore";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "assumenda";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "aliquam";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SEX_EDUCATION),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                }};
                                            }};
                                            customSegmentId = "similique";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE40_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("voluptatem"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "earum";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "iusto";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "amet";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dolorum";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY80_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_KEYWORD;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNSPECIFIED;
                                        targetingOptionId = "nemo";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestiae";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "itaque";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "aperiam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "accusamus";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "totam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "sunt";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "dolor";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "occaecati";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "atque";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "beatae";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptatem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ea";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dignissimos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "velit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "consectetur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dignissimos";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "soluta";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "officia";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "tenetur";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quo";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "illum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "vero";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "qui";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "repellat";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "explicabo";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "explicabo";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3503.25;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "non";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ab";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "illo";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "hic";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "deserunt";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "delectus";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                        targetingOptionId = "distinctio";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_ARTICLE;
                                        targetingOptionId = "exercitationem";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "labore";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 921193;
                                        startHour = 265303;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "explicabo";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                        targetingOptionId = "rem";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "aperiam";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                        targetingOptionId = "deleniti";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "enim";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                        targetingOptionId = "similique";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "minima";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                                        targetingOptionId = "magnam";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "sit";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "modi";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "eum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nesciunt";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "dignissimos";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "fugiat";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "molestiae";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "veniam";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "reiciendis";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "modi";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 138.65;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "eveniet";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "odio";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_SMALL;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "numquam";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "dolorum";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "possimus";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                                }};
                                            }};
                                            customSegmentId = "rem";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE_UNSPECIFIED;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD10;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X3005;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.VIDEO_IAB_UNSPECIFIED;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("saepe"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "qui";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "harum";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "beatae";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                        targetingOptionId = "optio";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "molestias";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "totam";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "aliquid";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "impedit";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "repellat";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "nulla";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "laborum";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "natus";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "doloremque";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "nisi";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "rerum";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "recusandae";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "rem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ullam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
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
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "perferendis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "facilis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "reiciendis";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_PODCAST;
                                        targetingOptionId = "iste";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dicta";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quos";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3563.15;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "modi";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "itaque";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "maxime";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "modi";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "consequuntur";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "assumenda";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "doloribus";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                        targetingOptionId = "porro";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "accusamus";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 969168;
                                        startHour = 66074;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nihil";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_CONNECTED_TV;
                                        targetingOptionId = "iure";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "odio";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                        targetingOptionId = "debitis";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "vel";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "corporis";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptas";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNKNOWN;
                                        targetingOptionId = "officia";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "reprehenderit";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "distinctio";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "eius";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsa";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "maiores";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "accusantium";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "saepe";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "neque";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "facere";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "quos";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9847.73;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "est";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "delectus";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "vitae";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "nesciunt";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "similique";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.GRAPHIC_VIOLENCE_WEAPONS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                }};
                                            }};
                                            customSegmentId = "nesciunt";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY40_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE25_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("ut"),
                                                add("numquam"),
                                                add("tenetur"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ875;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "ducimus";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "fuga";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "minima";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "qui";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE1824;
                                        targetingOptionId = "incidunt";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "adipisci";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "praesentium";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "expedita";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "impedit";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "culpa";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consequuntur";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "deserunt";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "veniam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "quod";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quisquam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "doloribus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "officiis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "alias";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nobis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dicta";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "debitis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "architecto";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perferendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "cumque";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "iure";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quibusdam";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                        targetingOptionId = "nemo";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "recusandae";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "velit";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2991.53;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "laboriosam";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "sed";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "odio";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "natus";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "provident";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cum";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "facilis";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                        targetingOptionId = "itaque";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laboriosam";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 263767;
                                        startHour = 595198;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cum";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "libero";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "nam";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "recusandae";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quod";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                        targetingOptionId = "saepe";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "autem";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                        targetingOptionId = "nesciunt";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "illum";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "nemo";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "illum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "facilis";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                                        targetingOptionId = "mollitia";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "assumenda";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "distinctio";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "pariatur";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ad";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                        targetingOptionId = "laborum";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9114.51;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "incidunt";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "maxime";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_SMALL;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "alias";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "suscipit";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "deserunt";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                }};
                                            }};
                                            customSegmentId = "nulla";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE55_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY65_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE30_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("facere"),
                                                add("impedit"),
                                                add("quasi"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "porro";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "blanditiis";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quae";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "officiis";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNKNOWN;
                                        targetingOptionId = "impedit";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsa";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "excepturi";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_GENERIC_CTV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "laudantium";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "alias";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "rem";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "suscipit";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eius";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "esse";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "in";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "quasi";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "neque";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "vero";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "excepturi";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "qui";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "incidunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "corporis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "error";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "id";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quas";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "veritatis";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "quae";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "similique";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "incidunt";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4625.83;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "deserunt";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "delectus";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "omnis";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "sed";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nesciunt";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "maxime";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "excepturi";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 243904;
                                        startHour = 971764;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nemo";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "quisquam";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "tenetur";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                        targetingOptionId = "molestiae";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "aliquid";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "a";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nobis";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
                                        targetingOptionId = "accusantium";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "dicta";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "minus";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "commodi";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eveniet";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                        targetingOptionId = "tempore";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "quidem";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "voluptates";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "fugit";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eius";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "eligendi";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 9928.87;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "blanditiis";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "sint";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_LARGE;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "a";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "animi";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE4_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ADULT_CONTENT_SWIMSUIT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                                }};
                                            }};
                                            customSegmentId = "eius";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE50_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION_UNSPECIFIED;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD6;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE40_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("reprehenderit"),
                                                add("quod"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "sunt";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "neque";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "earum";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_BROWSER;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                        targetingOptionId = "veniam";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nihil";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "ad";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_AMAZON_FIRETV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "nemo";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "pariatur";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quidem";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "id";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "sed";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "possimus";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "repellat";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "repudiandae";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "adipisci";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolore";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "iure";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "velit";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "praesentium";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "non";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "accusamus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "cumque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "expedita";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "deserunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "magni";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "tempora";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "possimus";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "rerum";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "sed";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "accusamus";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7598.74;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "minus";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quo";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quos";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "asperiores";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptatum";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "iste";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_PRE_ROLL;
                                        targetingOptionId = "accusantium";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "aut";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "doloribus";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 869848;
                                        startHour = 823472;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "pariatur";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_CONNECTED_TV;
                                        targetingOptionId = "sapiente";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "mollitia";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                        targetingOptionId = "quos";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "aperiam";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                                        targetingOptionId = "voluptates";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ad";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                        targetingOptionId = "quisquam";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "quas";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "consequuntur";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "maiores";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "inventore";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_ARTICLE;
                                        targetingOptionId = "laudantium";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "est";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "aliquid";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "consectetur";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cumque";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                        targetingOptionId = "voluptatum";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4985.34;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "recusandae";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "tempora";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "numquam";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "sequi";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "voluptatum";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE_UNSPECIFIED;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE17_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_AVIATION),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                                }};
                                            }};
                                            customSegmentId = "aut";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY70_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("voluptas"),
                                                add("occaecati"),
                                                add("unde"),
                                                add("illo"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "delectus";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "labore";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "expedita";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "rem";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_DURATION;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                                        targetingOptionId = "sapiente";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quo";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "incidunt";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_SAMSUNG_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "porro";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "excepturi";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "libero";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "esse";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "accusantium";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "soluta";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "fugit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "pariatur";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "recusandae";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "veritatis";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "aut";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "laudantium";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "dolor";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "voluptates";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "rerum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "eum";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "reprehenderit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "voluptatum";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_MUSIC;
                                        targetingOptionId = "nihil";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "atque";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "rerum";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6455.44;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "nostrum";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "atque";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "architecto";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "est";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "enim";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "rem";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "quae";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                        targetingOptionId = "placeat";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "enim";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 958068;
                                        startHour = 901651;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "officia";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                        targetingOptionId = "cumque";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "natus";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "doloribus";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quia";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "mollitia";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cumque";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                        targetingOptionId = "enim";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "eum";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "nemo";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "illum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nesciunt";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                        targetingOptionId = "odio";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "minus";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "recusandae";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "voluptates";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "praesentium";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "fugit";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 251.9;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "necessitatibus";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "sed";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "sunt";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "nesciunt";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "delectus";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE_UNSPECIFIED;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.AD_SERVERS),
                                                }};
                                            }};
                                            customSegmentId = "sequi";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY75_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("aspernatur"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ_UNSPECIFIED;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "expedita";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "hic";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "excepturi";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "sed";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5564;
                                        targetingOptionId = "ea";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "animi";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "dolore";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_GENERIC_CTV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "esse";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "laudantium";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "earum";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "velit";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "officiis";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "eius";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "itaque";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "dignissimos";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "ipsam";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "impedit";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "facilis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ut";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "praesentium";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "expedita";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                        targetingOptionId = "iste";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "illo";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "minus";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5533.15;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "sint";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "iusto";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "enim";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "accusamus";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "aperiam";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptates";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_MID_ROLL;
                                        targetingOptionId = "tempora";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "omnis";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "illum";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.THURSDAY;
                                        endHour = 949370;
                                        startHour = 537946;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "earum";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "aliquam";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "labore";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_APP;
                                        targetingOptionId = "sequi";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "saepe";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "esse";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "debitis";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                        targetingOptionId = "quisquam";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "cumque";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "aliquam";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "dolorum";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "deserunt";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                                        targetingOptionId = "reiciendis";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "sequi";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "laborum";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nobis";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quibusdam";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                                        targetingOptionId = "aut";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 3699.41;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "reprehenderit";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "necessitatibus";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "accusantium";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "ad";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.AGE_RATING_UNSPECIFIED),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.AD_SERVERS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_VEHICLE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.OCCULT),
                                                }};
                                            }};
                                            customSegmentId = "esse";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE_UNSPECIFIED;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY55_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("culpa"),
                                                add("voluptatum"),
                                                add("iusto"),
                                                add("quod"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "distinctio";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "laboriosam";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "optio";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY10_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE1824;
                                        targetingOptionId = "vitae";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "doloremque";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_IOS;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "rerum";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "temporibus";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ratione";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "nisi";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "reiciendis";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "itaque";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "accusantium";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "minus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "possimus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY365_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "provident";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "sapiente";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                                        targetingOptionId = "similique";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "nesciunt";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "provident";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4047.74;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "unde";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "alias";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "impedit";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "sequi";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "commodi";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "labore";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_POST_ROLL;
                                        targetingOptionId = "in";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                                        targetingOptionId = "sunt";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "enim";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                                        endHour = 979271;
                                        startHour = 715622;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "impedit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_TABLET;
                                        targetingOptionId = "et";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "quas";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                        targetingOptionId = "cum";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dicta";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "tempora";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "eveniet";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP10_PERCENT;
                                        targetingOptionId = "sed";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "impedit";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "quas";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "impedit";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "vel";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                                        targetingOptionId = "recusandae";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "ex";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "veritatis";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maiores";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "itaque";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                        targetingOptionId = "quidem";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 738.26;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "dignissimos";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "minus";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "possimus";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "cum";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "suscipit";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE1_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                                }};
                                            }};
                                            customSegmentId = "esse";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD4;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY60_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("laborum"),
                                                add("illum"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ250;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "optio";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ipsa";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "maiores";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "culpa";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY90_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_AGE_RANGE;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("officia"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_BROWSER;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("ducimus"),
                                add("doloremque"),
                                add("perferendis"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_ENVIRONMENT;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("corrupti"),
                                add("molestiae"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_DEVICE_TYPE;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("ab"),
                                add("quaerat"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_VIDEO_PLAYER_SIZE;
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.MEDIA;
                callback = "est";
                fields = "iure";
                key = "quisquam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "nam";
                uploadProtocol = "nemo";
            }};            

            DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions(req, new DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity("enim", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditLineItemAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions

Lists assigned targeting options of a line item across targeting types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest req = new DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest("minima", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "numquam";
                filter = "doloremque";
                key = "cum";
                oauthToken = "nobis";
                orderBy = "similique";
                pageSize = 783764L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "cumque";
                uploadProtocol = "soluta";
            }};            

            DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions(req, new DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity("fugiat", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkListLineItemAssignedTargetingOptionsResponse != null) {
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
import org.openapis.openapi.models.shared.TargetingExpansionConfig;
import org.openapis.openapi.models.shared.TargetingExpansionConfigTargetingExpansionLevelEnum;
import org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsCreateRequest req = new DisplayvideoAdvertisersLineItemsCreateRequest("nam") {{
                dollarXgafv = XgafvEnum.ONE;
                lineItemInput = new LineItemInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "maiores";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "consectetur";
                            maxAverageCpmBidAmountMicros = "necessitatibus";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "cupiditate";
                            maxAverageCpmBidAmountMicros = "voluptatem";
                            performanceGoalAmountMicros = "provident";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA;
                        }};;
                    }};;
                    budget = new LineItemBudgetInput() {{
                        budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum.LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED;
                        maxAmount = "magnam";
                    }};;
                    conversionCounting = new ConversionCountingConfig() {{
                        floodlightActivityConfigs = new org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig[]{{
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "omnis";
                                postClickLookbackWindowDays = 131576;
                                postViewLookbackWindowDays = 425817;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "cum";
                                postClickLookbackWindowDays = 663062;
                                postViewLookbackWindowDays = 821016;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "fugit";
                                postClickLookbackWindowDays = 373054;
                                postViewLookbackWindowDays = 343454;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "sequi";
                                postClickLookbackWindowDays = 529310;
                                postViewLookbackWindowDays = 98759;
                            }}),
                        }};
                        postViewCountPercentageMillis = "error";
                    }};;
                    creativeIds = new String[]{{
                        add("tempora"),
                        add("voluptate"),
                        add("eius"),
                    }};
                    displayName = "expedita";
                    entityStatus = LineItemEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    excludeNewExchanges = false;
                    flight = new LineItemFlight() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 915408;
                                month = 822711;
                                year = 146583;
                            }};;
                            startDate = new Date() {{
                                day = 27946;
                                month = 919171;
                                year = 360635;
                            }};;
                        }};;
                        flightDateType = LineItemFlightFlightDateTypeEnum.LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED;
                        triggerId = "eos";
                    }};;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 305267;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_WEEKS;
                        timeUnitCount = 943063;
                        unlimited = false;
                    }};;
                    insertionOrderId = "maiores";
                    integrationDetails = new IntegrationDetails() {{
                        details = "asperiores";
                        integrationCode = "autem";
                    }};;
                    inventorySourceIds = new String[]{{
                        add("cupiditate"),
                    }};
                    lineItemType = LineItemLineItemTypeEnum.LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY;
                    mobileApp = new MobileAppInput() {{
                        appId = "provident";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "beatae";
                        dailyMaxMicros = "ipsa";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_DAILY;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_ASAP;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_VIZU;
                            feeAmount = "fuga";
                            feePercentageMillis = "tempore";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_UNSPECIFIED;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DOUBLE_VERIFY;
                            feeAmount = "voluptate";
                            feePercentageMillis = "nisi";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_CPM_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DOUBLE_VERIFY;
                            feeAmount = "accusamus";
                            feePercentageMillis = "ab";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_MEDIA_FEE;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_PARTNER;
                        }}),
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_ADLOOX;
                            feeAmount = "alias";
                            feePercentageMillis = "qui";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_UNSPECIFIED;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_UNSPECIFIED;
                        }}),
                    }};
                    partnerRevenueModel = new PartnerRevenueModel() {{
                        markupAmount = "quidem";
                        markupType = PartnerRevenueModelMarkupTypeEnum.PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED;
                    }};;
                    targetingExpansion = new TargetingExpansionConfig() {{
                        excludeFirstPartyAudience = false;
                        targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum.NO_EXPANSION;
                    }};;
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "unde";
                key = "similique";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "amet";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoAdvertisersLineItemsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsCreate(req, new DisplayvideoAdvertisersLineItemsCreateSecurity("nobis", "asperiores") {{
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

            DisplayvideoAdvertisersLineItemsDeleteRequest req = new DisplayvideoAdvertisersLineItemsDeleteRequest("temporibus", "id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "veniam";
                key = "aliquam";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "earum";
                uploadProtocol = "doloremque";
            }};            

            DisplayvideoAdvertisersLineItemsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsDelete(req, new DisplayvideoAdvertisersLineItemsDeleteSecurity("ipsum", "alias") {{
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

            DisplayvideoAdvertisersLineItemsGenerateDefaultRequest req = new DisplayvideoAdvertisersLineItemsGenerateDefaultRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                generateDefaultLineItemRequestInput = new GenerateDefaultLineItemRequestInput() {{
                    displayName = "perspiciatis";
                    insertionOrderId = "quam";
                    lineItemType = GenerateDefaultLineItemRequestLineItemTypeEnum.LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL;
                    mobileApp = new MobileAppInput() {{
                        appId = "officia";
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "a";
                fields = "laborum";
                key = "veritatis";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "qui";
                uploadProtocol = "accusantium";
            }};            

            DisplayvideoAdvertisersLineItemsGenerateDefaultResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsGenerateDefault(req, new DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity("commodi", "atque") {{
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

            DisplayvideoAdvertisersLineItemsGetRequest req = new DisplayvideoAdvertisersLineItemsGetRequest("totam", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.PROTO;
                callback = "vitae";
                fields = "sapiente";
                key = "reiciendis";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "inventore";
                uploadProtocol = "facere";
            }};            

            DisplayvideoAdvertisersLineItemsGetResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsGet(req, new DisplayvideoAdvertisersLineItemsGetSecurity("maxime", "fuga") {{
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

            DisplayvideoAdvertisersLineItemsListRequest req = new DisplayvideoAdvertisersLineItemsListRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "animi";
                filter = "sequi";
                key = "eligendi";
                oauthToken = "voluptatum";
                orderBy = "perferendis";
                pageSize = 671690L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "tenetur";
                uploadProtocol = "sapiente";
            }};            

            DisplayvideoAdvertisersLineItemsListResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsList(req, new DisplayvideoAdvertisersLineItemsListSecurity("velit", "adipisci") {{
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
import org.openapis.openapi.models.shared.TargetingExpansionConfig;
import org.openapis.openapi.models.shared.TargetingExpansionConfigTargetingExpansionLevelEnum;
import org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsPatchRequest req = new DisplayvideoAdvertisersLineItemsPatchRequest("non", "optio") {{
                dollarXgafv = XgafvEnum.TWO;
                lineItemInput = new LineItemInput() {{
                    bidStrategy = new BiddingStrategy() {{
                        fixedBid = new FixedBidStrategy() {{
                            bidAmountMicros = "at";
                        }};;
                        maximizeSpendAutoBid = new MaximizeSpendBidStrategy() {{
                            customBiddingAlgorithmId = "tenetur";
                            maxAverageCpmBidAmountMicros = "molestias";
                            performanceGoalType = MaximizeSpendBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC;
                            raiseBidForDeals = false;
                        }};;
                        performanceGoalAutoBid = new PerformanceGoalBidStrategy() {{
                            customBiddingAlgorithmId = "esse";
                            maxAverageCpmBidAmountMicros = "laborum";
                            performanceGoalAmountMicros = "perspiciatis";
                            performanceGoalType = PerformanceGoalBidStrategyPerformanceGoalTypeEnum.BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED;
                        }};;
                    }};;
                    budget = new LineItemBudgetInput() {{
                        budgetAllocationType = LineItemBudgetBudgetAllocationTypeEnum.LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC;
                        maxAmount = "quasi";
                    }};;
                    conversionCounting = new ConversionCountingConfig() {{
                        floodlightActivityConfigs = new org.openapis.openapi.models.shared.TrackingFloodlightActivityConfig[]{{
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "odio";
                                postClickLookbackWindowDays = 416934;
                                postViewLookbackWindowDays = 780789;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "aliquid";
                                postClickLookbackWindowDays = 648497;
                                postViewLookbackWindowDays = 695347;
                            }}),
                            add(new TrackingFloodlightActivityConfig() {{
                                floodlightActivityId = "explicabo";
                                postClickLookbackWindowDays = 92851;
                                postViewLookbackWindowDays = 860027;
                            }}),
                        }};
                        postViewCountPercentageMillis = "magni";
                    }};;
                    creativeIds = new String[]{{
                        add("illum"),
                        add("a"),
                        add("impedit"),
                    }};
                    displayName = "unde";
                    entityStatus = LineItemEntityStatusEnum.ENTITY_STATUS_ACTIVE;
                    excludeNewExchanges = false;
                    flight = new LineItemFlight() {{
                        dateRange = new DateRange() {{
                            endDate = new Date() {{
                                day = 814585;
                                month = 377269;
                                year = 987384;
                            }};;
                            startDate = new Date() {{
                                day = 926027;
                                month = 787452;
                                year = 818078;
                            }};;
                        }};;
                        flightDateType = LineItemFlightFlightDateTypeEnum.LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED;
                        triggerId = "iste";
                    }};;
                    frequencyCap = new FrequencyCap() {{
                        maxImpressions = 588473;
                        timeUnit = FrequencyCapTimeUnitEnum.TIME_UNIT_LIFETIME;
                        timeUnitCount = 573247;
                        unlimited = false;
                    }};;
                    insertionOrderId = "aperiam";
                    integrationDetails = new IntegrationDetails() {{
                        details = "eaque";
                        integrationCode = "eum";
                    }};;
                    inventorySourceIds = new String[]{{
                        add("laborum"),
                        add("autem"),
                    }};
                    lineItemType = LineItemLineItemTypeEnum.LINE_ITEM_TYPE_AUDIO_DEFAULT;
                    mobileApp = new MobileAppInput() {{
                        appId = "explicabo";
                    }};;
                    pacing = new Pacing() {{
                        dailyMaxImpressions = "fugiat";
                        dailyMaxMicros = "doloremque";
                        pacingPeriod = PacingPacingPeriodEnum.PACING_PERIOD_UNSPECIFIED;
                        pacingType = PacingPacingTypeEnum.PACING_TYPE_UNSPECIFIED;
                    }};;
                    partnerCosts = new org.openapis.openapi.models.shared.PartnerCost[]{{
                        add(new PartnerCost() {{
                            costType = PartnerCostCostTypeEnum.PARTNER_COST_TYPE_DEFAULT;
                            feeAmount = "quis";
                            feePercentageMillis = "velit";
                            feeType = PartnerCostFeeTypeEnum.PARTNER_COST_FEE_TYPE_UNSPECIFIED;
                            invoiceType = PartnerCostInvoiceTypeEnum.PARTNER_COST_INVOICE_TYPE_DV360;
                        }}),
                    }};
                    partnerRevenueModel = new PartnerRevenueModel() {{
                        markupAmount = "maxime";
                        markupType = PartnerRevenueModelMarkupTypeEnum.PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP;
                    }};;
                    targetingExpansion = new TargetingExpansionConfig() {{
                        excludeFirstPartyAudience = false;
                        targetingExpansionLevel = TargetingExpansionConfigTargetingExpansionLevelEnum.MORE_EXPANSION;
                    }};;
                }};;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "maiores";
                key = "est";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "veritatis";
                updateMask = "necessitatibus";
                uploadType = "iste";
                uploadProtocol = "dicta";
            }};            

            DisplayvideoAdvertisersLineItemsPatchResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsPatch(req, new DisplayvideoAdvertisersLineItemsPatchSecurity("ipsam", "consequuntur") {{
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
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsInput;
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
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest("cumque", "quidem", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_USER_REWARDED_CONTENT) {{
                dollarXgafv = XgafvEnum.ONE;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNSPECIFIED;
                        targetingOptionId = "molestias";
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "beatae";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "autem";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_PLAYSTATION;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "molestias";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "ipsum";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "quos";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "voluptatem";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "non";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "quaerat";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "laudantium";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "commodi";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "quibusdam";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "consectetur";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "voluptas";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "tenetur";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "dolore";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "ullam";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "alias";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "dicta";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "commodi";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "quibusdam";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "rem";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "neque";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "corporis";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "quod";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                        targetingOptionId = "placeat";
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "excepturi";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "recusandae";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 5517.78;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "sapiente";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "ipsum";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "consequatur";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "soluta";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "necessitatibus";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "sequi";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                        targetingOptionId = "labore";
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                        targetingOptionId = "magni";
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "aperiam";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.MONDAY;
                        endHour = 848860;
                        startHour = 481553;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "beatae";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                        targetingOptionId = "ad";
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "voluptate";
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                        targetingOptionId = "minima";
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "sit";
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_MALE;
                        targetingOptionId = "laboriosam";
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "quaerat";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNSPECIFIED;
                        targetingOptionId = "rem";
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "dignissimos";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "doloremque";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "assumenda";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "provident";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_PERIPHERAL;
                        targetingOptionId = "sed";
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "inventore";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                        targetingOptionId = "unde";
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "deserunt";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "repellendus";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                        targetingOptionId = "adipisci";
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 390.69;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                        targetingOptionId = "tempora";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "debitis";
                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_LARGE;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "maxime";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "et";
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "beatae";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_POINT5_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SMOKING),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_NATURAL),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.SEX_EDUCATION),
                                }};
                            }};;
                            customSegmentId = "aut";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE80_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY40_PERCENT_HIHGER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE30_PERCENT_HIGHER;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("esse"),
                                add("neque"),
                                add("quidem"),
                                add("quisquam"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "numquam";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "rerum";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "dolorum";
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        targetingOptionId = "earum";
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY50_PERCENT_OR_MORE;
                    }};;
                }};;
                accessToken = "numquam";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "error";
                key = "animi";
                oauthToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "nihil";
                uploadProtocol = "facilis";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity("optio", "incidunt") {{
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

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest("eos", "magnam", "dolores", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_HOUSEHOLD_INCOME) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.JSON;
                callback = "quos";
                fields = "illo";
                key = "suscipit";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "impedit";
                uploadProtocol = "culpa";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity("atque", "voluptates") {{
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

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest("maiores", "nemo", "illo", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CONTENT_GENRE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "cumque";
                fields = "ipsam";
                key = "occaecati";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "quisquam";
                uploadProtocol = "quasi";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity("fugit", "quo") {{
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

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest("temporibus", "mollitia", DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_CATEGORY) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "quam";
                filter = "similique";
                key = "delectus";
                oauthToken = "saepe";
                orderBy = "facere";
                pageSize = 748723L;
                pageToken = "at";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "aut";
                uploadProtocol = "temporibus";
            }};            

            DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity("tenetur", "incidunt") {{
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
                accessToken = "corrupti";
                alt = AltEnum.MEDIA;
                callback = "dolore";
                fields = "esse";
                filter = "reiciendis";
                key = "iste";
                oauthToken = "amet";
                orderBy = "occaecati";
                pageSize = 15738L;
                pageToken = "impedit";
                partnerId = "minima";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "blanditiis";
                uploadProtocol = "quas";
            }};            

            DisplayvideoAdvertisersListResponse res = sdk.advertisers.displayvideoAdvertisersList(req, new DisplayvideoAdvertisersListSecurity("voluptatem", "provident") {{
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

            DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest("quas", "ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditAssignedLocationsRequestInput = new BulkEditAssignedLocationsRequestInput() {{
                    createdAssignedLocations = new org.openapis.openapi.models.shared.AssignedLocationInput[]{{
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "facilis";
                        }}),
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "maiores";
                        }}),
                        add(new AssignedLocationInput() {{
                            targetingOptionId = "error";
                        }}),
                    }};
                    deletedAssignedLocations = new String[]{{
                        add("a"),
                        add("consectetur"),
                        add("sapiente"),
                        add("voluptatibus"),
                    }};
                }};;
                accessToken = "assumenda";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "delectus";
                key = "odio";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "quam";
                uploadProtocol = "omnis";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity("similique", "asperiores") {{
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

            DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest("modi", "facere") {{
                dollarXgafv = XgafvEnum.ONE;
                assignedLocationInput = new AssignedLocationInput() {{
                    targetingOptionId = "quis";
                }};;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "non";
                fields = "porro";
                key = "fugiat";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "labore";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsCreate(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity("vero", "eos") {{
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

            DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest("quas", "quasi", "architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "iure";
                key = "laudantium";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "accusamus";
                uploadProtocol = "nulla";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsDelete(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity("repudiandae", "quibusdam") {{
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

            DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest req = new DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest("praesentium", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "unde";
                alt = AltEnum.JSON;
                callback = "eum";
                fields = "nostrum";
                filter = "eveniet";
                key = "laboriosam";
                oauthToken = "ratione";
                orderBy = "blanditiis";
                pageSize = 697729L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "placeat";
                uploadProtocol = "dolores";
            }};            

            DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsAssignedLocationsList(req, new DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity("consequatur", "nesciunt") {{
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

            DisplayvideoAdvertisersLocationListsCreateRequest req = new DisplayvideoAdvertisersLocationListsCreateRequest("quia") {{
                dollarXgafv = XgafvEnum.TWO;
                locationListInput = new LocationListInput() {{
                    advertiserId = "voluptas";
                    displayName = "quo";
                    locationType = LocationListLocationTypeEnum.TARGETING_LOCATION_TYPE_PROXIMITY;
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "fugit";
                key = "dolorem";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "debitis";
                uploadProtocol = "vitae";
            }};            

            DisplayvideoAdvertisersLocationListsCreateResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsCreate(req, new DisplayvideoAdvertisersLocationListsCreateSecurity("dolor", "ad") {{
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

            DisplayvideoAdvertisersLocationListsListRequest req = new DisplayvideoAdvertisersLocationListsListRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "itaque";
                filter = "et";
                key = "eos";
                oauthToken = "impedit";
                orderBy = "ex";
                pageSize = 507874L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "tenetur";
                uploadProtocol = "laudantium";
            }};            

            DisplayvideoAdvertisersLocationListsListResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsList(req, new DisplayvideoAdvertisersLocationListsListSecurity("aspernatur", "eligendi") {{
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

            DisplayvideoAdvertisersLocationListsPatchRequest req = new DisplayvideoAdvertisersLocationListsPatchRequest("repudiandae", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                locationListInput = new LocationListInput() {{
                    advertiserId = "ullam";
                    displayName = "iusto";
                    locationType = LocationListLocationTypeEnum.TARGETING_LOCATION_TYPE_UNSPECIFIED;
                }};;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "eaque";
                key = "exercitationem";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "voluptate";
                updateMask = "voluptate";
                uploadType = "pariatur";
                uploadProtocol = "minus";
            }};            

            DisplayvideoAdvertisersLocationListsPatchResponse res = sdk.advertisers.displayvideoAdvertisersLocationListsPatch(req, new DisplayvideoAdvertisersLocationListsPatchSecurity("a", "fuga") {{
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

            DisplayvideoAdvertisersManualTriggersActivateRequest req = new DisplayvideoAdvertisersManualTriggersActivateRequest("totam", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "quam");
                    put("exercitationem", "voluptates");
                    put("sequi", "quis");
                    put("commodi", "vel");
                }};
                accessToken = "rem";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "perspiciatis";
                key = "fugit";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "cumque";
                uploadProtocol = "dolor";
            }};            

            DisplayvideoAdvertisersManualTriggersActivateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersActivate(req, new DisplayvideoAdvertisersManualTriggersActivateSecurity("repellendus", "temporibus") {{
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

            DisplayvideoAdvertisersManualTriggersCreateRequest req = new DisplayvideoAdvertisersManualTriggersCreateRequest("minus") {{
                dollarXgafv = XgafvEnum.ONE;
                manualTriggerInput = new ManualTriggerInput() {{
                    activationDurationMinutes = "a";
                    advertiserId = "beatae";
                    displayName = "vitae";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "laborum";
                key = "dicta";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "aliquid";
                uploadProtocol = "pariatur";
            }};            

            DisplayvideoAdvertisersManualTriggersCreateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersCreate(req, new DisplayvideoAdvertisersManualTriggersCreateSecurity("enim", "numquam") {{
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

            DisplayvideoAdvertisersManualTriggersDeactivateRequest req = new DisplayvideoAdvertisersManualTriggersDeactivateRequest("architecto", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vitae", "omnis");
                    put("alias", "sapiente");
                    put("officiis", "expedita");
                    put("quia", "vitae");
                }};
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "distinctio";
                key = "placeat";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sit";
                uploadProtocol = "possimus";
            }};            

            DisplayvideoAdvertisersManualTriggersDeactivateResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersDeactivate(req, new DisplayvideoAdvertisersManualTriggersDeactivateSecurity("distinctio", "distinctio") {{
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

            DisplayvideoAdvertisersManualTriggersGetRequest req = new DisplayvideoAdvertisersManualTriggersGetRequest("assumenda", "illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "esse";
                key = "doloremque";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "facilis";
                uploadProtocol = "aliquam";
            }};            

            DisplayvideoAdvertisersManualTriggersGetResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersGet(req, new DisplayvideoAdvertisersManualTriggersGetSecurity("repudiandae", "amet") {{
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

            DisplayvideoAdvertisersManualTriggersListRequest req = new DisplayvideoAdvertisersManualTriggersListRequest("natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officiis";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "placeat";
                filter = "ab";
                key = "ad";
                oauthToken = "blanditiis";
                orderBy = "porro";
                pageSize = 286486L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "earum";
                uploadProtocol = "ullam";
            }};            

            DisplayvideoAdvertisersManualTriggersListResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersList(req, new DisplayvideoAdvertisersManualTriggersListSecurity("numquam", "enim") {{
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

            DisplayvideoAdvertisersManualTriggersPatchRequest req = new DisplayvideoAdvertisersManualTriggersPatchRequest("cupiditate", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                manualTriggerInput = new ManualTriggerInput() {{
                    activationDurationMinutes = "fuga";
                    advertiserId = "consectetur";
                    displayName = "modi";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "suscipit";
                fields = "ipsa";
                key = "eveniet";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "nobis";
                updateMask = "qui";
                uploadType = "accusantium";
                uploadProtocol = "consequatur";
            }};            

            DisplayvideoAdvertisersManualTriggersPatchResponse res = sdk.advertisers.displayvideoAdvertisersManualTriggersPatch(req, new DisplayvideoAdvertisersManualTriggersPatchSecurity("impedit", "recusandae") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsCreateRequest req = new DisplayvideoAdvertisersNegativeKeywordListsCreateRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                negativeKeywordListInput = new NegativeKeywordListInput() {{
                    displayName = "est";
                }};;
                accessToken = "et";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "quos";
                key = "maiores";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "culpa";
                uploadProtocol = "doloremque";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsCreateResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsCreate(req, new DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity("fuga", "dicta") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsListRequest req = new DisplayvideoAdvertisersNegativeKeywordListsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "fugit";
                key = "ratione";
                oauthToken = "possimus";
                pageSize = 311548L;
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "esse";
                uploadProtocol = "delectus";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsListResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsList(req, new DisplayvideoAdvertisersNegativeKeywordListsListSecurity("deserunt", "ratione") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest("ipsa", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                bulkEditNegativeKeywordsRequestInput = new BulkEditNegativeKeywordsRequestInput() {{
                    createdNegativeKeywords = new org.openapis.openapi.models.shared.NegativeKeywordInput[]{{
                        add(new NegativeKeywordInput() {{
                            keywordValue = "hic";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "ducimus";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "consequuntur";
                        }}),
                    }};
                    deletedNegativeKeywords = new String[]{{
                        add("libero"),
                        add("quia"),
                    }};
                }};;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "explicabo";
                key = "consequatur";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "fugiat";
                uploadProtocol = "voluptatum";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity("velit", "hic") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest("ullam", "deserunt", "itaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "occaecati";
                key = "assumenda";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "vero";
                uploadProtocol = "deleniti";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity("optio", "quasi") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest("repellat", "atque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "sunt";
                filter = "nemo";
                key = "delectus";
                oauthToken = "illum";
                orderBy = "porro";
                pageSize = 309634L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "cumque";
                uploadType = "quos";
                uploadProtocol = "in";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity("commodi", "maxime") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest req = new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest("sed", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                replaceNegativeKeywordsRequestInput = new ReplaceNegativeKeywordsRequestInput() {{
                    newNegativeKeywords = new org.openapis.openapi.models.shared.NegativeKeywordInput[]{{
                        add(new NegativeKeywordInput() {{
                            keywordValue = "delectus";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "harum";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "aliquam";
                        }}),
                        add(new NegativeKeywordInput() {{
                            keywordValue = "eligendi";
                        }}),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "illo";
                fields = "nobis";
                key = "esse";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "sequi";
                uploadProtocol = "alias";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(req, new DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity("reiciendis", "quos") {{
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

            DisplayvideoAdvertisersNegativeKeywordListsPatchRequest req = new DisplayvideoAdvertisersNegativeKeywordListsPatchRequest("numquam", "vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                negativeKeywordListInput = new NegativeKeywordListInput() {{
                    displayName = "nam";
                }};;
                accessToken = "architecto";
                alt = AltEnum.PROTO;
                callback = "assumenda";
                fields = "eos";
                key = "dolorem";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "repellendus";
                updateMask = "nam";
                uploadType = "ab";
                uploadProtocol = "magnam";
            }};            

            DisplayvideoAdvertisersNegativeKeywordListsPatchResponse res = sdk.advertisers.displayvideoAdvertisersNegativeKeywordListsPatch(req, new DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity("pariatur", "expedita") {{
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

            DisplayvideoAdvertisersPatchRequest req = new DisplayvideoAdvertisersPatchRequest("autem") {{
                dollarXgafv = XgafvEnum.TWO;
                advertiserInput = new AdvertiserInput() {{
                    adServerConfig = new AdvertiserAdServerConfig() {{
                        cmHybridConfig = new CmHybridConfig() {{
                            cmAccountId = "recusandae";
                            cmFloodlightConfigId = "nostrum";
                            cmFloodlightLinkingAuthorized = false;
                            cmSyncableSiteIds = new String[]{{
                                add("voluptas"),
                                add("laudantium"),
                                add("corporis"),
                            }};
                            dv360ToCmCostReportingEnabled = false;
                            dv360ToCmDataSharingEnabled = false;
                        }};;
                        thirdPartyOnlyConfig = new ThirdPartyOnlyConfig() {{
                            pixelOrderIdReportingEnabled = false;
                        }};;
                    }};;
                    creativeConfig = new AdvertiserCreativeConfig() {{
                        dynamicCreativeEnabled = false;
                        iasClientId = "excepturi";
                        obaComplianceDisabled = false;
                        videoCreativeDataSharingAuthorized = false;
                    }};;
                    dataAccessConfig = new AdvertiserDataAccessConfig() {{
                        sdfConfig = new AdvertiserSdfConfig() {{
                            overridePartnerSdfConfig = false;
                            sdfConfig = new SdfConfig() {{
                                adminEmail = "natus";
                                version = SdfConfigVersionEnum.SDF_VERSION5;
                            }};;
                        }};;
                    }};;
                    displayName = "necessitatibus";
                    entityStatus = AdvertiserEntityStatusEnum.ENTITY_STATUS_UNSPECIFIED;
                    generalConfig = new AdvertiserGeneralConfigInput() {{
                        currencyCode = "dolores";
                        domainUrl = "laborum";
                    }};;
                    integrationDetails = new IntegrationDetails() {{
                        details = "vero";
                        integrationCode = "eos";
                    }};;
                    partnerId = "voluptatem";
                    prismaEnabled = false;
                    servingConfig = new AdvertiserTargetingConfig() {{
                        exemptTvFromViewabilityTargeting = false;
                    }};;
                }};;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "quae";
                fields = "commodi";
                key = "a";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "sed";
                updateMask = "nam";
                uploadType = "quia";
                uploadProtocol = "iusto";
            }};            

            DisplayvideoAdvertisersPatchResponse res = sdk.advertisers.displayvideoAdvertisersPatch(req, new DisplayvideoAdvertisersPatchSecurity("ab", "deserunt") {{
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
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum;
import org.openapis.openapi.models.shared.DigitalContentLabelAssignedTargetingOptionDetailsInput;
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
import org.openapis.openapi.models.shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
import org.openapis.openapi.models.shared.RegionalLocationListAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.SensitiveCategoryAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.SubExchangeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ThirdPartyVerifierAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UrlAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.UserRewardedContentAssignedTargetingOptionDetailsInput;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetails;
import org.openapis.openapi.models.shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest("sed", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_ENVIRONMENT) {{
                dollarXgafv = XgafvEnum.TWO;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                        targetingOptionId = "ullam";
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "molestiae";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "itaque";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_PLAYSTATION;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "non";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "omnis";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "dolor";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "occaecati";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "magni";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "consequuntur";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "consequuntur";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "eius";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "ipsam";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "vel";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "nisi";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "modi";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_MINUTE;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "sit";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "tempora";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "dolorum";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "ratione";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "saepe";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "maiores";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "accusantium";
                                }}),
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "sed";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNSPECIFIED;
                        targetingOptionId = "consequuntur";
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "quis";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "vitae";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 5774.96;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "fugiat";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "quidem";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "exercitationem";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "veniam";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "modi";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "quasi";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNSPECIFIED;
                        targetingOptionId = "similique";
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_FEED;
                        targetingOptionId = "quo";
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "suscipit";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.WEDNESDAY;
                        endHour = 571550;
                        startHour = 666817;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "provident";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                        targetingOptionId = "deserunt";
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "fugit";
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                        targetingOptionId = "quo";
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "molestiae";
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                        targetingOptionId = "facere";
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "impedit";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP31_TO40_PERCENT;
                        targetingOptionId = "deleniti";
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "quasi";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "maiores";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "voluptatem";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "aliquid";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                        targetingOptionId = "unde";
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "corrupti";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                        targetingOptionId = "facere";
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "ea";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "libero";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_NOT_A_PARENT;
                        targetingOptionId = "amet";
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 2387.39;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                        targetingOptionId = "hic";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "similique";
                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "consectetur";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "labore";
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "laudantium";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                add(AdlooxExcludedAdlooxCategoriesEnum.FRAUD),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.NON_ENGLISH),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.GAMBLING),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ADULT_CONTENT_SWIMSUIT),
                                }};
                            }};;
                            customSegmentId = "nobis";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD2;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X300_UNSPECIFIED;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY70_PERCENT_HIGHER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("voluptas"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ250;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "dolore";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "maxime";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "maxime";
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        targetingOptionId = "accusantium";
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY40_PERCENT_OR_MORE;
                    }};;
                }};;
                accessToken = "impedit";
                alt = AltEnum.MEDIA;
                callback = "optio";
                fields = "est";
                key = "inventore";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "sit";
                uploadProtocol = "dolores";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity("enim", "aspernatur") {{
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

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest("perspiciatis", "magni", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "possimus";
                fields = "ipsam";
                key = "odio";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "at";
                uploadProtocol = "illum";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity("praesentium", "sint") {{
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

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest("exercitationem", "cum", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CARRIER_AND_ISP) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "placeat";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "dolore";
                key = "pariatur";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cupiditate";
                uploadType = "nemo";
                uploadProtocol = "natus";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity("nisi", "provident") {{
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

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest("amet", DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_VIDEO_PLAYER_SIZE) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "dolore";
                filter = "ullam";
                key = "velit";
                oauthToken = "adipisci";
                orderBy = "cupiditate";
                pageSize = 581269L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "molestiae";
                uploadProtocol = "quas";
            }};            

            DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.advertisers.displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity("repellendus", "saepe") {{
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
