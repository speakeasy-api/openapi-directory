# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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

            DisplayvideoAdvertisersAssetsUploadRequest req = new DisplayvideoAdvertisersAssetsUploadRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = "distinctio".getBytes();
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            DisplayvideoAdvertisersAssetsUploadResponse res = sdk.advertisers.displayvideoAdvertisersAssetsUpload(req, new DisplayvideoAdvertisersAssetsUploadSecurity("iure", "magnam") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [advertisers](docs/advertisers/README.md)

* [displayvideoAdvertisersAssetsUpload](docs/advertisers/README.md#displayvideoadvertisersassetsupload) - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* [displayvideoAdvertisersAudit](docs/advertisers/README.md#displayvideoadvertisersaudit) - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* [displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertisersbulkeditadvertiserassignedtargetingoptions) - Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* [displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertisersbulklistadvertiserassignedtargetingoptions) - Lists assigned targeting options of an advertiser across targeting types.
* [displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertiserscampaignsbulklistcampaignassignedtargetingoptions) - Lists assigned targeting options of a campaign across targeting types.
* [displayvideoAdvertisersCampaignsCreate](docs/advertisers/README.md#displayvideoadvertiserscampaignscreate) - Creates a new campaign. Returns the newly created campaign if successful.
* [displayvideoAdvertisersCampaignsDelete](docs/advertisers/README.md#displayvideoadvertiserscampaignsdelete) - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersCampaignsGet](docs/advertisers/README.md#displayvideoadvertiserscampaignsget) - Gets a campaign.
* [displayvideoAdvertisersCampaignsList](docs/advertisers/README.md#displayvideoadvertiserscampaignslist) - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersCampaignsPatch](docs/advertisers/README.md#displayvideoadvertiserscampaignspatch) - Updates an existing campaign. Returns the updated campaign if successful.
* [displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet](docs/advertisers/README.md#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a campaign.
* [displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList](docs/advertisers/README.md#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a campaign for a specified targeting type.
* [displayvideoAdvertisersChannelsCreate](docs/advertisers/README.md#displayvideoadvertiserschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoAdvertisersChannelsList](docs/advertisers/README.md#displayvideoadvertiserschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoAdvertisersChannelsPatch](docs/advertisers/README.md#displayvideoadvertiserschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoAdvertisersChannelsSitesBulkEdit](docs/advertisers/README.md#displayvideoadvertiserschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoAdvertisersChannelsSitesDelete](docs/advertisers/README.md#displayvideoadvertiserschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoAdvertisersChannelsSitesList](docs/advertisers/README.md#displayvideoadvertiserschannelssiteslist) - Lists sites in a channel.
* [displayvideoAdvertisersChannelsSitesReplace](docs/advertisers/README.md#displayvideoadvertiserschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoAdvertisersCreate](docs/advertisers/README.md#displayvideoadvertiserscreate) - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* [displayvideoAdvertisersCreativesCreate](docs/advertisers/README.md#displayvideoadvertiserscreativescreate) - Creates a new creative. Returns the newly created creative if successful.
* [displayvideoAdvertisersCreativesDelete](docs/advertisers/README.md#displayvideoadvertiserscreativesdelete) - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* [displayvideoAdvertisersCreativesGet](docs/advertisers/README.md#displayvideoadvertiserscreativesget) - Gets a creative.
* [displayvideoAdvertisersCreativesList](docs/advertisers/README.md#displayvideoadvertiserscreativeslist) - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersCreativesPatch](docs/advertisers/README.md#displayvideoadvertiserscreativespatch) - Updates an existing creative. Returns the updated creative if successful.
* [displayvideoAdvertisersDelete](docs/advertisers/README.md#displayvideoadvertisersdelete) - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* [displayvideoAdvertisersGet](docs/advertisers/README.md#displayvideoadvertisersget) - Gets an advertiser.
* [displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertisersinsertionordersbulklistinsertionorderassignedtargetingoptions) - Lists assigned targeting options of an insertion order across targeting types.
* [displayvideoAdvertisersInsertionOrdersCreate](docs/advertisers/README.md#displayvideoadvertisersinsertionorderscreate) - Creates a new insertion order. Returns the newly created insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersDelete](docs/advertisers/README.md#displayvideoadvertisersinsertionordersdelete) - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersInsertionOrdersGet](docs/advertisers/README.md#displayvideoadvertisersinsertionordersget) - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* [displayvideoAdvertisersInsertionOrdersList](docs/advertisers/README.md#displayvideoadvertisersinsertionorderslist) - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersInsertionOrdersPatch](docs/advertisers/README.md#displayvideoadvertisersinsertionorderspatch) - Updates an existing insertion order. Returns the updated insertion order if successful.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet](docs/advertisers/README.md#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an insertion order.
* [displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList](docs/advertisers/README.md#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an insertion order.
* [displayvideoAdvertisersInvoicesList](docs/advertisers/README.md#displayvideoadvertisersinvoiceslist) - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* [displayvideoAdvertisersInvoicesLookupInvoiceCurrency](docs/advertisers/README.md#displayvideoadvertisersinvoiceslookupinvoicecurrency) - Retrieves the invoice currency used by an advertiser in a given month.
* [displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertiserslineitemsbulkeditlineitemassignedtargetingoptions) - Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions](docs/advertisers/README.md#displayvideoadvertiserslineitemsbulklistlineitemassignedtargetingoptions) - Lists assigned targeting options of a line item across targeting types.
* [displayvideoAdvertisersLineItemsCreate](docs/advertisers/README.md#displayvideoadvertiserslineitemscreate) - Creates a new line item. Returns the newly created line item if successful.
* [displayvideoAdvertisersLineItemsDelete](docs/advertisers/README.md#displayvideoadvertiserslineitemsdelete) - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [displayvideoAdvertisersLineItemsGenerateDefault](docs/advertisers/README.md#displayvideoadvertiserslineitemsgeneratedefault) - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* [displayvideoAdvertisersLineItemsGet](docs/advertisers/README.md#displayvideoadvertiserslineitemsget) - Gets a line item.
* [displayvideoAdvertisersLineItemsList](docs/advertisers/README.md#displayvideoadvertiserslineitemslist) - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoAdvertisersLineItemsPatch](docs/advertisers/README.md#displayvideoadvertiserslineitemspatch) - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate](docs/advertisers/README.md#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete](docs/advertisers/README.md#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet](docs/advertisers/README.md#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a line item.
* [displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList](docs/advertisers/README.md#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a line item.
* [displayvideoAdvertisersList](docs/advertisers/README.md#displayvideoadvertiserslist) - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* [displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit](docs/advertisers/README.md#displayvideoadvertiserslocationlistsassignedlocationsbulkedit) - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* [displayvideoAdvertisersLocationListsAssignedLocationsCreate](docs/advertisers/README.md#displayvideoadvertiserslocationlistsassignedlocationscreate) - Creates an assignment between a location and a location list.
* [displayvideoAdvertisersLocationListsAssignedLocationsDelete](docs/advertisers/README.md#displayvideoadvertiserslocationlistsassignedlocationsdelete) - Deletes the assignment between a location and a location list.
* [displayvideoAdvertisersLocationListsAssignedLocationsList](docs/advertisers/README.md#displayvideoadvertiserslocationlistsassignedlocationslist) - Lists locations assigned to a location list.
* [displayvideoAdvertisersLocationListsCreate](docs/advertisers/README.md#displayvideoadvertiserslocationlistscreate) - Creates a new location list. Returns the newly created location list if successful.
* [displayvideoAdvertisersLocationListsList](docs/advertisers/README.md#displayvideoadvertiserslocationlistslist) - Lists location lists based on a given advertiser id.
* [displayvideoAdvertisersLocationListsPatch](docs/advertisers/README.md#displayvideoadvertiserslocationlistspatch) - Updates a location list. Returns the updated location list if successful.
* [displayvideoAdvertisersManualTriggersActivate](docs/advertisers/README.md#displayvideoadvertisersmanualtriggersactivate) - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersCreate](docs/advertisers/README.md#displayvideoadvertisersmanualtriggerscreate) - Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersDeactivate](docs/advertisers/README.md#displayvideoadvertisersmanualtriggersdeactivate) - Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersGet](docs/advertisers/README.md#displayvideoadvertisersmanualtriggersget) - Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersList](docs/advertisers/README.md#displayvideoadvertisersmanualtriggerslist) - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersManualTriggersPatch](docs/advertisers/README.md#displayvideoadvertisersmanualtriggerspatch) - Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [displayvideoAdvertisersNegativeKeywordListsCreate](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistscreate) - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* [displayvideoAdvertisersNegativeKeywordListsList](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistslist) - Lists negative keyword lists based on a given advertiser id.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistsnegativekeywordsbulkedit) - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistsnegativekeywordsdelete) - Deletes a negative keyword from a negative keyword list.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistsnegativekeywordslist) - Lists negative keywords in a negative keyword list.
* [displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistsnegativekeywordsreplace) - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* [displayvideoAdvertisersNegativeKeywordListsPatch](docs/advertisers/README.md#displayvideoadvertisersnegativekeywordlistspatch) - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* [displayvideoAdvertisersPatch](docs/advertisers/README.md#displayvideoadvertiserspatch) - Updates an existing advertiser. Returns the updated advertiser if successful.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate](docs/advertisers/README.md#displayvideoadvertiserstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete](docs/advertisers/README.md#displayvideoadvertiserstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from an advertiser.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet](docs/advertisers/README.md#displayvideoadvertiserstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an advertiser.
* [displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList](docs/advertisers/README.md#displayvideoadvertiserstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an advertiser.

### [combinedAudiences](docs/combinedaudiences/README.md)

* [displayvideoCombinedAudiencesGet](docs/combinedaudiences/README.md#displayvideocombinedaudiencesget) - Gets a combined audience.
* [displayvideoCombinedAudiencesList](docs/combinedaudiences/README.md#displayvideocombinedaudienceslist) - Lists combined audiences. The order is defined by the order_by parameter.

### [customBiddingAlgorithms](docs/custombiddingalgorithms/README.md)

* [displayvideoCustomBiddingAlgorithmsCreate](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmscreate) - Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsGet](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmsget) - Gets a custom bidding algorithm.
* [displayvideoCustomBiddingAlgorithmsList](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmslist) - Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsPatch](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmspatch) - Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsCreate](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmsscriptscreate) - Creates a new custom bidding script. Returns the newly created script if successful.
* [displayvideoCustomBiddingAlgorithmsScriptsGet](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmsscriptsget) - Gets a custom bidding script.
* [displayvideoCustomBiddingAlgorithmsScriptsList](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmsscriptslist) - Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.
* [displayvideoCustomBiddingAlgorithmsUploadScript](docs/custombiddingalgorithms/README.md#displayvideocustombiddingalgorithmsuploadscript) - Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.

### [customLists](docs/customlists/README.md)

* [displayvideoCustomListsGet](docs/customlists/README.md#displayvideocustomlistsget) - Gets a custom list.
* [displayvideoCustomListsList](docs/customlists/README.md#displayvideocustomlistslist) - Lists custom lists. The order is defined by the order_by parameter.

### [firstAndThirdPartyAudiences](docs/firstandthirdpartyaudiences/README.md)

* [displayvideoFirstAndThirdPartyAudiencesCreate](docs/firstandthirdpartyaudiences/README.md#displayvideofirstandthirdpartyaudiencescreate) - Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesEditCustomerMatchMembers](docs/firstandthirdpartyaudiences/README.md#displayvideofirstandthirdpartyaudienceseditcustomermatchmembers) - Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`
* [displayvideoFirstAndThirdPartyAudiencesGet](docs/firstandthirdpartyaudiences/README.md#displayvideofirstandthirdpartyaudiencesget) - Gets a first and third party audience.
* [displayvideoFirstAndThirdPartyAudiencesList](docs/firstandthirdpartyaudiences/README.md#displayvideofirstandthirdpartyaudienceslist) - Lists first and third party audiences. The order is defined by the order_by parameter.
* [displayvideoFirstAndThirdPartyAudiencesPatch](docs/firstandthirdpartyaudiences/README.md#displayvideofirstandthirdpartyaudiencespatch) - Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

### [floodlightGroups](docs/floodlightgroups/README.md)

* [displayvideoFloodlightGroupsGet](docs/floodlightgroups/README.md#displayvideofloodlightgroupsget) - Gets a Floodlight group.

### [googleAudiences](docs/googleaudiences/README.md)

* [displayvideoGoogleAudiencesGet](docs/googleaudiences/README.md#displayvideogoogleaudiencesget) - Gets a Google audience.
* [displayvideoGoogleAudiencesList](docs/googleaudiences/README.md#displayvideogoogleaudienceslist) - Lists Google audiences. The order is defined by the order_by parameter.

### [guaranteedOrders](docs/guaranteedorders/README.md)

* [displayvideoGuaranteedOrdersCreate](docs/guaranteedorders/README.md#displayvideoguaranteedorderscreate) - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
* [displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors](docs/guaranteedorders/README.md#displayvideoguaranteedorderseditguaranteedorderreadaccessors) - Edits read advertisers of a guaranteed order.
* [displayvideoGuaranteedOrdersGet](docs/guaranteedorders/README.md#displayvideoguaranteedordersget) - Gets a guaranteed order.
* [displayvideoGuaranteedOrdersList](docs/guaranteedorders/README.md#displayvideoguaranteedorderslist) - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoGuaranteedOrdersPatch](docs/guaranteedorders/README.md#displayvideoguaranteedorderspatch) - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.

### [inventorySourceGroups](docs/inventorysourcegroups/README.md)

* [displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsassignedinventorysourcesbulkedit) - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesCreate](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsassignedinventorysourcescreate) - Creates an assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesDelete](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsassignedinventorysourcesdelete) - Deletes the assignment between an inventory source and an inventory source group.
* [displayvideoInventorySourceGroupsAssignedInventorySourcesList](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsassignedinventorysourceslist) - Lists inventory sources assigned to an inventory source group.
* [displayvideoInventorySourceGroupsCreate](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupscreate) - Creates a new inventory source group. Returns the newly created inventory source group if successful.
* [displayvideoInventorySourceGroupsDelete](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsdelete) - Deletes an inventory source group.
* [displayvideoInventorySourceGroupsGet](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupsget) - Gets an inventory source group.
* [displayvideoInventorySourceGroupsList](docs/inventorysourcegroups/README.md#displayvideoinventorysourcegroupslist) - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.

### [inventorySources](docs/inventorysources/README.md)

* [displayvideoInventorySourcesCreate](docs/inventorysources/README.md#displayvideoinventorysourcescreate) - Creates a new inventory source. Returns the newly created inventory source if successful.
* [displayvideoInventorySourcesEditInventorySourceReadWriteAccessors](docs/inventorysources/README.md#displayvideoinventorysourceseditinventorysourcereadwriteaccessors) - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
* [displayvideoInventorySourcesGet](docs/inventorysources/README.md#displayvideoinventorysourcesget) - Gets an inventory source.
* [displayvideoInventorySourcesList](docs/inventorysources/README.md#displayvideoinventorysourceslist) - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [displayvideoInventorySourcesPatch](docs/inventorysources/README.md#displayvideoinventorysourcespatch) - Updates an existing inventory source. Returns the updated inventory source if successful.

### [media](docs/media/README.md)

* [displayvideoMediaDownload](docs/media/README.md#displayvideomediadownload) - Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.
* [displayvideoMediaUpload](docs/media/README.md#displayvideomediaupload) - Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.

### [partners](docs/partners/README.md)

* [displayvideoPartnersBulkEditPartnerAssignedTargetingOptions](docs/partners/README.md#displayvideopartnersbulkeditpartnerassignedtargetingoptions) - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [displayvideoPartnersChannelsCreate](docs/partners/README.md#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoPartnersChannelsList](docs/partners/README.md#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoPartnersChannelsPatch](docs/partners/README.md#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoPartnersChannelsSitesBulkEdit](docs/partners/README.md#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoPartnersChannelsSitesDelete](docs/partners/README.md#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoPartnersChannelsSitesList](docs/partners/README.md#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [displayvideoPartnersChannelsSitesReplace](docs/partners/README.md#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoPartnersGet](docs/partners/README.md#displayvideopartnersget) - Gets a partner.
* [displayvideoPartnersList](docs/partners/README.md#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](docs/partners/README.md#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](docs/partners/README.md#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](docs/partners/README.md#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsList](docs/partners/README.md#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

### [sdfdownloadtasks](docs/sdfdownloadtasks/README.md)

* [displayvideoSdfdownloadtasksCreate](docs/sdfdownloadtasks/README.md#displayvideosdfdownloadtaskscreate) - Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.
* [displayvideoSdfdownloadtasksOperationsGet](docs/sdfdownloadtasks/README.md#displayvideosdfdownloadtasksoperationsget) - Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.

### [targetingTypes](docs/targetingtypes/README.md)

* [displayvideoTargetingTypesTargetingOptionsGet](docs/targetingtypes/README.md#displayvideotargetingtypestargetingoptionsget) - Gets a single targeting option.
* [displayvideoTargetingTypesTargetingOptionsList](docs/targetingtypes/README.md#displayvideotargetingtypestargetingoptionslist) - Lists targeting options of a given type.
* [displayvideoTargetingTypesTargetingOptionsSearch](docs/targetingtypes/README.md#displayvideotargetingtypestargetingoptionssearch) - Searches for targeting options of a given type based on the given search terms.

### [users](docs/users/README.md)

* [displayvideoUsersBulkEditAssignedUserRoles](docs/users/README.md#displayvideousersbulkeditassigneduserroles) - Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersCreate](docs/users/README.md#displayvideouserscreate) - Creates a new user. Returns the newly created user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersDelete](docs/users/README.md#displayvideousersdelete) - Deletes a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersGet](docs/users/README.md#displayvideousersget) - Gets a user. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersList](docs/users/README.md#displayvideouserslist) - Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
* [displayvideoUsersPatch](docs/users/README.md#displayvideouserspatch) - Updates an existing user. Returns the updated user if successful. This method has unique authentication requirements. Read the prerequisites in our [Managing Users guide](/display-video/api/guides/users/overview#prerequisites) before using this method. The "Try this method" feature does not work for this method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
