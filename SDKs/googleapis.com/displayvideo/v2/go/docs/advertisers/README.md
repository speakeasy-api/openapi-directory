# Advertisers

### Available Operations

* [DisplayvideoAdvertisersAssetsUpload](#displayvideoadvertisersassetsupload) - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* [DisplayvideoAdvertisersAudit](#displayvideoadvertisersaudit) - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* [DisplayvideoAdvertisersCampaignsCreate](#displayvideoadvertiserscampaignscreate) - Creates a new campaign. Returns the newly created campaign if successful.
* [DisplayvideoAdvertisersCampaignsDelete](#displayvideoadvertiserscampaignsdelete) - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersCampaignsGet](#displayvideoadvertiserscampaignsget) - Gets a campaign.
* [DisplayvideoAdvertisersCampaignsList](#displayvideoadvertiserscampaignslist) - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersCampaignsListAssignedTargetingOptions](#displayvideoadvertiserscampaignslistassignedtargetingoptions) - Lists assigned targeting options of a campaign across targeting types.
* [DisplayvideoAdvertisersCampaignsPatch](#displayvideoadvertiserscampaignspatch) - Updates an existing campaign. Returns the updated campaign if successful.
* [DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a campaign.
* [DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserscampaignstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a campaign for a specified targeting type.
* [DisplayvideoAdvertisersChannelsCreate](#displayvideoadvertiserschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [DisplayvideoAdvertisersChannelsList](#displayvideoadvertiserschannelslist) - Lists channels for a partner or advertiser.
* [DisplayvideoAdvertisersChannelsPatch](#displayvideoadvertiserschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [DisplayvideoAdvertisersChannelsSitesBulkEdit](#displayvideoadvertiserschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [DisplayvideoAdvertisersChannelsSitesDelete](#displayvideoadvertiserschannelssitesdelete) - Deletes a site from a channel.
* [DisplayvideoAdvertisersChannelsSitesList](#displayvideoadvertiserschannelssiteslist) - Lists sites in a channel.
* [DisplayvideoAdvertisersChannelsSitesReplace](#displayvideoadvertiserschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [DisplayvideoAdvertisersCreate](#displayvideoadvertiserscreate) - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
* [DisplayvideoAdvertisersCreativesCreate](#displayvideoadvertiserscreativescreate) - Creates a new creative. Returns the newly created creative if successful.
* [DisplayvideoAdvertisersCreativesDelete](#displayvideoadvertiserscreativesdelete) - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
* [DisplayvideoAdvertisersCreativesGet](#displayvideoadvertiserscreativesget) - Gets a creative.
* [DisplayvideoAdvertisersCreativesList](#displayvideoadvertiserscreativeslist) - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersCreativesPatch](#displayvideoadvertiserscreativespatch) - Updates an existing creative. Returns the updated creative if successful.
* [DisplayvideoAdvertisersDelete](#displayvideoadvertisersdelete) - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
* [DisplayvideoAdvertisersEditAssignedTargetingOptions](#displayvideoadvertiserseditassignedtargetingoptions) - Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* [DisplayvideoAdvertisersGet](#displayvideoadvertisersget) - Gets an advertiser.
* [DisplayvideoAdvertisersInsertionOrdersCreate](#displayvideoadvertisersinsertionorderscreate) - Creates a new insertion order. Returns the newly created insertion order if successful.
* [DisplayvideoAdvertisersInsertionOrdersDelete](#displayvideoadvertisersinsertionordersdelete) - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersInsertionOrdersGet](#displayvideoadvertisersinsertionordersget) - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* [DisplayvideoAdvertisersInsertionOrdersList](#displayvideoadvertisersinsertionorderslist) - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions](#displayvideoadvertisersinsertionorderslistassignedtargetingoptions) - Lists assigned targeting options of an insertion order across targeting types.
* [DisplayvideoAdvertisersInsertionOrdersPatch](#displayvideoadvertisersinsertionorderspatch) - Updates an existing insertion order. Returns the updated insertion order if successful.
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an insertion order.
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an insertion order.
* [DisplayvideoAdvertisersInvoicesList](#displayvideoadvertisersinvoiceslist) - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* [DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency](#displayvideoadvertisersinvoiceslookupinvoicecurrency) - Retrieves the invoice currency used by an advertiser in a given month.
* [DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulkeditassignedtargetingoptions) - Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulklistassignedtargetingoptions) - Lists assigned targeting options for multiple line items across targeting types.
* [DisplayvideoAdvertisersLineItemsBulkUpdate](#displayvideoadvertiserslineitemsbulkupdate) - Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsCreate](#displayvideoadvertiserslineitemscreate) - Creates a new line item. Returns the newly created line item if successful.
* [DisplayvideoAdvertisersLineItemsDelete](#displayvideoadvertiserslineitemsdelete) - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersLineItemsDuplicate](#displayvideoadvertiserslineitemsduplicate) - Duplicates a line item. Returns the ID of the created line item if successful.
* [DisplayvideoAdvertisersLineItemsGenerateDefault](#displayvideoadvertiserslineitemsgeneratedefault) - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* [DisplayvideoAdvertisersLineItemsGet](#displayvideoadvertiserslineitemsget) - Gets a line item.
* [DisplayvideoAdvertisersLineItemsList](#displayvideoadvertiserslineitemslist) - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersLineItemsPatch](#displayvideoadvertiserslineitemspatch) - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a line item.
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a line item.
* [DisplayvideoAdvertisersList](#displayvideoadvertiserslist) - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
* [DisplayvideoAdvertisersListAssignedTargetingOptions](#displayvideoadvertiserslistassignedtargetingoptions) - Lists assigned targeting options of an advertiser across targeting types.
* [DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit](#displayvideoadvertiserslocationlistsassignedlocationsbulkedit) - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
* [DisplayvideoAdvertisersLocationListsAssignedLocationsCreate](#displayvideoadvertiserslocationlistsassignedlocationscreate) - Creates an assignment between a location and a location list.
* [DisplayvideoAdvertisersLocationListsAssignedLocationsDelete](#displayvideoadvertiserslocationlistsassignedlocationsdelete) - Deletes the assignment between a location and a location list.
* [DisplayvideoAdvertisersLocationListsAssignedLocationsList](#displayvideoadvertiserslocationlistsassignedlocationslist) - Lists locations assigned to a location list.
* [DisplayvideoAdvertisersLocationListsCreate](#displayvideoadvertiserslocationlistscreate) - Creates a new location list. Returns the newly created location list if successful.
* [DisplayvideoAdvertisersLocationListsList](#displayvideoadvertiserslocationlistslist) - Lists location lists based on a given advertiser id.
* [DisplayvideoAdvertisersLocationListsPatch](#displayvideoadvertiserslocationlistspatch) - Updates a location list. Returns the updated location list if successful.
* [DisplayvideoAdvertisersManualTriggersActivate](#displayvideoadvertisersmanualtriggersactivate) - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersManualTriggersCreate](#displayvideoadvertisersmanualtriggerscreate) - Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersManualTriggersDeactivate](#displayvideoadvertisersmanualtriggersdeactivate) - Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersManualTriggersGet](#displayvideoadvertisersmanualtriggersget) - Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersManualTriggersList](#displayvideoadvertisersmanualtriggerslist) - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersManualTriggersPatch](#displayvideoadvertisersmanualtriggerspatch) - Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.
* [DisplayvideoAdvertisersNegativeKeywordListsCreate](#displayvideoadvertisersnegativekeywordlistscreate) - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
* [DisplayvideoAdvertisersNegativeKeywordListsList](#displayvideoadvertisersnegativekeywordlistslist) - Lists negative keyword lists based on a given advertiser id.
* [DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsbulkedit) - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
* [DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsdelete) - Deletes a negative keyword from a negative keyword list.
* [DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList](#displayvideoadvertisersnegativekeywordlistsnegativekeywordslist) - Lists negative keywords in a negative keyword list.
* [DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace](#displayvideoadvertisersnegativekeywordlistsnegativekeywordsreplace) - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
* [DisplayvideoAdvertisersNegativeKeywordListsPatch](#displayvideoadvertisersnegativekeywordlistspatch) - Updates a negative keyword list. Returns the updated negative keyword list if successful.
* [DisplayvideoAdvertisersPatch](#displayvideoadvertiserspatch) - Updates an existing advertiser. Returns the updated advertiser if successful.
* [DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
* [DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from an advertiser.
* [DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an advertiser.
* [DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an advertiser.
* [DisplayvideoAdvertisersYoutubeAdGroupAdsGet](#displayvideoadvertisersyoutubeadgroupadsget) - Gets a YouTube ad group ad.
* [DisplayvideoAdvertisersYoutubeAdGroupAdsList](#displayvideoadvertisersyoutubeadgroupadslist) - Lists YouTube ad group ads.
* [DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions](#displayvideoadvertisersyoutubeadgroupsbulklistadgroupassignedtargetingoptions) - Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.
* [DisplayvideoAdvertisersYoutubeAdGroupsGet](#displayvideoadvertisersyoutubeadgroupsget) - Gets a YouTube ad group.
* [DisplayvideoAdvertisersYoutubeAdGroupsList](#displayvideoadvertisersyoutubeadgroupslist) - Lists YouTube ad groups.
* [DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersyoutubeadgroupstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.
* [DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersyoutubeadgroupstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.

## DisplayvideoAdvertisersAssetsUpload

Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersAssetsUpload(ctx, operations.DisplayvideoAdvertisersAssetsUploadRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: []byte("magnam"),
        AccessToken: sdk.String("debitis"),
        AdvertiserID: "ipsa",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DisplayvideoAdvertisersAssetsUploadSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAssetResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersAudit

Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersAudit(ctx, operations.DisplayvideoAdvertisersAuditRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nisi"),
        AdvertiserID: "recusandae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        ReadMask: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DisplayvideoAdvertisersAuditSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditAdvertiserResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsCreate

Creates a new campaign. Returns the newly created campaign if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsCreate(ctx, operations.DisplayvideoAdvertisersCampaignsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CampaignInput: &shared.CampaignInput{
            CampaignBudgets: []shared.CampaignBudget{
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("at"),
                    BudgetID: sdk.String("at"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitImpressions.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(473608),
                            Month: sdk.Int(799159),
                            Year: sdk.Int(800911),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(461479),
                            Month: sdk.Int(520478),
                            Year: sdk.Int(780529),
                        },
                    },
                    DisplayName: sdk.String("dolorum"),
                    ExternalBudgetID: sdk.String("dicta"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceMediaOcean.ToPointer(),
                    InvoiceGroupingID: sdk.String("officia"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("occaecati"),
                            PrismaEstimateCode: sdk.String("fugit"),
                            PrismaProductCode: sdk.String("deleniti"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeFee.ToPointer(),
                        Supplier: sdk.String("optio"),
                    },
                },
            },
            CampaignFlight: &shared.CampaignFlight{
                PlannedDates: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(521848),
                        Month: sdk.Int(105907),
                        Year: sdk.Int(414662),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(473600),
                        Month: sdk.Int(264555),
                        Year: sdk.Int(186332),
                    },
                },
                PlannedSpendAmountMicros: sdk.String("impedit"),
            },
            CampaignGoal: &shared.CampaignGoal{
                CampaignGoalType: shared.CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeOfflineAction.ToPointer(),
                PerformanceGoal: &shared.PerformanceGoal{
                    PerformanceGoalAmountMicros: sdk.String("esse"),
                    PerformanceGoalPercentageMicros: sdk.String("ipsum"),
                    PerformanceGoalString: sdk.String("excepturi"),
                    PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpc.ToPointer(),
                },
            },
            DisplayName: sdk.String("perferendis"),
            EntityStatus: shared.CampaignEntityStatusEnumEntityStatusActive.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(617636),
                MaxViews: sdk.Int(149675),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitDays.ToPointer(),
                TimeUnitCount: sdk.Int(222321),
                Unlimited: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("natus"),
        AdvertiserID: "laboriosam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.DisplayvideoAdvertisersCampaignsCreateSecurity{
        Option1: &operations.DisplayvideoAdvertisersCampaignsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsDelete

Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsDelete(ctx, operations.DisplayvideoAdvertisersCampaignsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        AdvertiserID: "ipsa",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        CampaignID: "mollitia",
        Fields: sdk.String("laborum"),
        Key: sdk.String("dolores"),
        OauthToken: sdk.String("dolorem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DisplayvideoAdvertisersCampaignsDeleteSecurity{
        Option1: &operations.DisplayvideoAdvertisersCampaignsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsGet

Gets a campaign.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsGet(ctx, operations.DisplayvideoAdvertisersCampaignsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("omnis"),
        AdvertiserID: "nemo",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        CampaignID: "accusantium",
        Fields: sdk.String("iure"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.DisplayvideoAdvertisersCampaignsGetSecurity{
        Option1: &operations.DisplayvideoAdvertisersCampaignsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsList

Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsList(ctx, operations.DisplayvideoAdvertisersCampaignsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        AdvertiserID: "consequuntur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("numquam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quam"),
        OrderBy: sdk.String("molestiae"),
        PageSize: sdk.Int64(244425),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.DisplayvideoAdvertisersCampaignsListSecurity{
        Option1: &operations.DisplayvideoAdvertisersCampaignsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCampaignsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsListAssignedTargetingOptions

Lists assigned targeting options of a campaign across targeting types.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        AdvertiserID: "enim",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        CampaignID: "sequi",
        Fields: sdk.String("tenetur"),
        Filter: sdk.String("ipsam"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        OrderBy: sdk.String("aut"),
        PageSize: sdk.Int64(97101),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListCampaignAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsPatch

Updates an existing campaign. Returns the updated campaign if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsPatch(ctx, operations.DisplayvideoAdvertisersCampaignsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CampaignInput: &shared.CampaignInput{
            CampaignBudgets: []shared.CampaignBudget{
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("vero"),
                    BudgetID: sdk.String("nihil"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(976762),
                            Month: sdk.Int(55714),
                            Year: sdk.Int(604846),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(451159),
                            Month: sdk.Int(739264),
                            Year: sdk.Int(19987),
                        },
                    },
                    DisplayName: sdk.String("doloremque"),
                    ExternalBudgetID: sdk.String("reprehenderit"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("maiores"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("dicta"),
                            PrismaEstimateCode: sdk.String("corporis"),
                            PrismaProductCode: sdk.String("dolore"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeVideo.ToPointer(),
                        Supplier: sdk.String("dicta"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("harum"),
                    BudgetID: sdk.String("enim"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitImpressions.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(414263),
                            Month: sdk.Int(918236),
                            Year: sdk.Int(64147),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(216822),
                            Month: sdk.Int(692472),
                            Year: sdk.Int(565189),
                        },
                    },
                    DisplayName: sdk.String("excepturi"),
                    ExternalBudgetID: sdk.String("pariatur"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("praesentium"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("rem"),
                            PrismaEstimateCode: sdk.String("voluptates"),
                            PrismaProductCode: sdk.String("quasi"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeFee.ToPointer(),
                        Supplier: sdk.String("sint"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("veritatis"),
                    BudgetID: sdk.String("itaque"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitUnspecified.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(318569),
                            Month: sdk.Int(9356),
                            Year: sdk.Int(667411),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(842342),
                            Month: sdk.Int(131797),
                            Year: sdk.Int(647174),
                        },
                    },
                    DisplayName: sdk.String("distinctio"),
                    ExternalBudgetID: sdk.String("quibusdam"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("modi"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("qui"),
                            PrismaEstimateCode: sdk.String("aliquid"),
                            PrismaProductCode: sdk.String("cupiditate"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeVideo.ToPointer(),
                        Supplier: sdk.String("perferendis"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("magni"),
                    BudgetID: sdk.String("assumenda"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(4695),
                            Month: sdk.Int(146441),
                            Year: sdk.Int(677817),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(569618),
                            Month: sdk.Int(270008),
                            Year: sdk.Int(703737),
                        },
                    },
                    DisplayName: sdk.String("tempore"),
                    ExternalBudgetID: sdk.String("labore"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceMediaOcean.ToPointer(),
                    InvoiceGroupingID: sdk.String("eum"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("non"),
                            PrismaEstimateCode: sdk.String("eligendi"),
                            PrismaProductCode: sdk.String("sint"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeSearch.ToPointer(),
                        Supplier: sdk.String("provident"),
                    },
                },
            },
            CampaignFlight: &shared.CampaignFlight{
                PlannedDates: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(896039),
                        Month: sdk.Int(572252),
                        Year: sdk.Int(638921),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(223081),
                        Month: sdk.Int(891555),
                        Year: sdk.Int(952749),
                    },
                },
                PlannedSpendAmountMicros: sdk.String("dolorum"),
            },
            CampaignGoal: &shared.CampaignGoal{
                CampaignGoalType: shared.CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeBrandAwareness.ToPointer(),
                PerformanceGoal: &shared.PerformanceGoal{
                    PerformanceGoalAmountMicros: sdk.String("in"),
                    PerformanceGoalPercentageMicros: sdk.String("illum"),
                    PerformanceGoalString: sdk.String("maiores"),
                    PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeVcpm.ToPointer(),
                },
            },
            DisplayName: sdk.String("dicta"),
            EntityStatus: shared.CampaignEntityStatusEnumEntityStatusActive.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(767024),
                MaxViews: sdk.Int(813798),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitMonths.ToPointer(),
                TimeUnitCount: sdk.Int(396506),
                Unlimited: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("laborum"),
        AdvertiserID: "accusamus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("occaecati"),
        CampaignID: "enim",
        Fields: sdk.String("accusamus"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UpdateMask: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.DisplayvideoAdvertisersCampaignsPatchSecurity{
        Option1: &operations.DisplayvideoAdvertisersCampaignsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Campaign != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a campaign.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        AdvertiserID: "amet",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "nisi",
        Callback: sdk.String("vel"),
        CampaignID: "natus",
        Fields: sdk.String("omnis"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        TargetingType: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentOutstreamPosition,
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("id"),
    }, operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a campaign for a specified targeting type.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("labore"),
        AdvertiserID: "suscipit",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        CampaignID: "eum",
        Fields: sdk.String("vero"),
        Filter: sdk.String("aspernatur"),
        Key: sdk.String("architecto"),
        OauthToken: sdk.String("magnam"),
        OrderBy: sdk.String("et"),
        PageSize: sdk.Int64(569965),
        PageToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        TargetingType: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeKeyword,
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("accusantium"),
    }, operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCampaignAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsCreate

Creates a new channel. Returns the newly created channel if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsCreate(ctx, operations.DisplayvideoAdvertisersChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("reiciendis"),
            DisplayName: sdk.String("mollitia"),
            PartnerID: sdk.String("ad"),
        },
        AccessToken: sdk.String("eum"),
        AdvertiserID: "dolor",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("iure"),
        PartnerID: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("eius"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.DisplayvideoAdvertisersChannelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsList

Lists channels for a partner or advertiser.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsList(ctx, operations.DisplayvideoAdvertisersChannelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facilis"),
        AdvertiserID: "in",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("repudiandae"),
        Filter: sdk.String("ullam"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("nihil"),
        OrderBy: sdk.String("repellat"),
        PageSize: sdk.Int64(841140),
        PageToken: sdk.String("sed"),
        PartnerID: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DisplayvideoAdvertisersChannelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListChannelsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsPatch

Updates a channel. Returns the updated channel if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsPatch(ctx, operations.DisplayvideoAdvertisersChannelsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("natus"),
            DisplayName: sdk.String("magni"),
            PartnerID: sdk.String("sunt"),
        },
        AccessToken: sdk.String("quo"),
        AdvertiserID: "illum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        ChannelID: "ea",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("odit"),
        OauthToken: sdk.String("ea"),
        PartnerID: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UpdateMask: sdk.String("maiores"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DisplayvideoAdvertisersChannelsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsSitesBulkEdit

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsSitesBulkEdit(ctx, operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkEditSitesRequestInput: &shared.BulkEditSitesRequestInput{
            AdvertiserID: sdk.String("autem"),
            CreatedSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("eaque"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("pariatur"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("nemo"),
                },
            },
            DeletedSites: []string{
                "perferendis",
                "fugiat",
                "amet",
                "aut",
            },
            PartnerID: sdk.String("cumque"),
        },
        AccessToken: sdk.String("corporis"),
        AdvertiserID: "hic",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nobis"),
        ChannelID: "dolores",
        Fields: sdk.String("quis"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.DisplayvideoAdvertisersChannelsSitesBulkEditSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditSitesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsSitesDelete

Deletes a site from a channel.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsSitesDelete(ctx, operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        AdvertiserID: "dolores",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quam"),
        ChannelID: "dolor",
        Fields: sdk.String("vero"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("hic"),
        PartnerID: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("perspiciatis"),
        URLOrAppID: "voluptatem",
    }, operations.DisplayvideoAdvertisersChannelsSitesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsSitesList

Lists sites in a channel.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsSitesList(ctx, operations.DisplayvideoAdvertisersChannelsSitesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        AdvertiserID: "blanditiis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eaque"),
        ChannelID: "occaecati",
        Fields: sdk.String("rerum"),
        Filter: sdk.String("adipisci"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("earum"),
        OrderBy: sdk.String("modi"),
        PageSize: sdk.Int64(613966),
        PageToken: sdk.String("dolorum"),
        PartnerID: sdk.String("deleniti"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DisplayvideoAdvertisersChannelsSitesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSitesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersChannelsSitesReplace

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersChannelsSitesReplace(ctx, operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReplaceSitesRequestInput: &shared.ReplaceSitesRequestInput{
            AdvertiserID: sdk.String("delectus"),
            NewSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("quos"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("aliquid"),
                },
            },
            PartnerID: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("dolorem"),
        AdvertiserID: "dolor",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        ChannelID: "hic",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("amet"),
    }, operations.DisplayvideoAdvertisersChannelsSitesReplaceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplaceSitesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreate

Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreate(ctx, operations.DisplayvideoAdvertisersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdvertiserInput: &shared.AdvertiserInput{
            AdServerConfig: &shared.AdvertiserAdServerConfig{
                CmHybridConfig: &shared.CmHybridConfig{
                    CmAccountID: sdk.String("numquam"),
                    CmFloodlightConfigID: sdk.String("veritatis"),
                    CmFloodlightLinkingAuthorized: sdk.Bool(false),
                    CmSyncableSiteIds: []string{
                        "ipsa",
                    },
                    Dv360ToCmCostReportingEnabled: sdk.Bool(false),
                    Dv360ToCmDataSharingEnabled: sdk.Bool(false),
                },
                ThirdPartyOnlyConfig: &shared.ThirdPartyOnlyConfig{
                    PixelOrderIDReportingEnabled: sdk.Bool(false),
                },
            },
            BillingConfig: &shared.AdvertiserBillingConfig{
                BillingProfileID: sdk.String("iure"),
            },
            CreativeConfig: &shared.AdvertiserCreativeConfig{
                DynamicCreativeEnabled: sdk.Bool(false),
                IasClientID: sdk.String("odio"),
                ObaComplianceDisabled: sdk.Bool(false),
                VideoCreativeDataSharingAuthorized: sdk.Bool(false),
            },
            DataAccessConfig: &shared.AdvertiserDataAccessConfig{
                SdfConfig: &shared.AdvertiserSdfConfig{
                    OverridePartnerSdfConfig: sdk.Bool(false),
                    SdfConfig: &shared.SdfConfig{
                        AdminEmail: sdk.String("quaerat"),
                        Version: shared.SdfConfigVersionEnumSdfVersion54.ToPointer(),
                    },
                },
            },
            DisplayName: sdk.String("quidem"),
            EntityStatus: shared.AdvertiserEntityStatusEnumEntityStatusScheduledForDeletion.ToPointer(),
            GeneralConfig: &shared.AdvertiserGeneralConfigInput{
                CurrencyCode: sdk.String("voluptas"),
                DomainURL: sdk.String("natus"),
            },
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("eos"),
                IntegrationCode: sdk.String("atque"),
            },
            PartnerID: sdk.String("sit"),
            PrismaEnabled: sdk.Bool(false),
            ServingConfig: &shared.AdvertiserTargetingConfig{
                ExemptTvFromViewabilityTargeting: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("voluptate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.DisplayvideoAdvertisersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreativesCreate

Creates a new creative. Returns the newly created creative if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreativesCreate(ctx, operations.DisplayvideoAdvertisersCreativesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreativeInput: &shared.CreativeInput{
            AdditionalDimensions: []shared.Dimensions{
                shared.Dimensions{
                    HeightPixels: sdk.Int(990339),
                    WidthPixels: sdk.Int(469497),
                },
                shared.Dimensions{
                    HeightPixels: sdk.Int(216897),
                    WidthPixels: sdk.Int(456015),
                },
                shared.Dimensions{
                    HeightPixels: sdk.Int(663078),
                    WidthPixels: sdk.Int(906418),
                },
            },
            AppendedTag: sdk.String("eius"),
            Assets: []shared.AssetAssociation{
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("perferendis"),
                        MediaID: sdk.String("amet"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRoleAndroidAppID.ToPointer(),
                },
            },
            CmTrackingAd: &shared.CmTrackingAd{
                CmAdID: sdk.String("accusamus"),
                CmCreativeID: sdk.String("ad"),
                CmPlacementID: sdk.String("saepe"),
            },
            CompanionCreativeIds: []string{
                "deserunt",
                "provident",
            },
            CounterEvents: []shared.CounterEvent{
                shared.CounterEvent{
                    Name: sdk.String("Dr. Jimmie Murphy"),
                    ReportingName: sdk.String("tempora"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Bernadette Torp"),
                    ReportingName: sdk.String("a"),
                },
            },
            CreativeType: shared.CreativeCreativeTypeEnumCreativeTypeNativeSiteSquare.ToPointer(),
            Dimensions: &shared.Dimensions{
                HeightPixels: sdk.Int(687488),
                WidthPixels: sdk.Int(483409),
            },
            DisplayName: sdk.String("ipsum"),
            EntityStatus: shared.CreativeEntityStatusEnumEntityStatusPaused.ToPointer(),
            ExitEvents: []shared.ExitEvent{
                shared.ExitEvent{
                    Name: sdk.String("Kelli Thompson"),
                    ReportingName: sdk.String("dolorem"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("totam"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Karen Rath"),
                    ReportingName: sdk.String("vel"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("voluptas"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Darryl Emard"),
                    ReportingName: sdk.String("cupiditate"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("pariatur"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Keith Padberg"),
                    ReportingName: sdk.String("aspernatur"),
                    Type: shared.ExitEventTypeEnumExitEventTypeUnspecified.ToPointer(),
                    URL: sdk.String("distinctio"),
                },
            },
            ExpandOnHover: sdk.Bool(false),
            ExpandingDirection: shared.CreativeExpandingDirectionEnumExpandingDirectionDownAndRight.ToPointer(),
            HostingSource: shared.CreativeHostingSourceEnumHostingSourceCm.ToPointer(),
            IasCampaignMonitoring: sdk.Bool(false),
            IntegrationCode: sdk.String("quam"),
            JsTrackerURL: sdk.String("molestias"),
            Notes: sdk.String("temporibus"),
            ObaIcon: &shared.ObaIcon{
                ClickTrackingURL: sdk.String("qui"),
                Dimensions: &shared.Dimensions{
                    HeightPixels: sdk.Int(204865),
                    WidthPixels: sdk.Int(144847),
                },
                LandingPageURL: sdk.String("magni"),
                Position: shared.ObaIconPositionEnumObaIconPositionUpperLeft.ToPointer(),
                Program: sdk.String("sunt"),
                ResourceMimeType: sdk.String("ullam"),
                ResourceURL: sdk.String("nam"),
                ViewTrackingURL: sdk.String("hic"),
            },
            ProgressOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("voluptatem"),
                Seconds: sdk.String("cumque"),
            },
            RequireHtml5: sdk.Bool(false),
            RequireMraid: sdk.Bool(false),
            RequirePingForAttribution: sdk.Bool(false),
            ReviewStatus: &shared.ReviewStatusInfo{
                ApprovalStatus: shared.ReviewStatusInfoApprovalStatusEnumApprovalStatusApprovedServable.ToPointer(),
                ContentAndPolicyReviewStatus: shared.ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusRejected.ToPointer(),
                CreativeAndLandingPageReviewStatus: shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusUnspecified.ToPointer(),
                ExchangeReviewStatuses: []shared.ExchangeReviewStatus{
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeGeniee.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusUnspecified.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeSmaato.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeTaboola.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeBrightroll.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                },
                PublisherReviewStatuses: []shared.PublisherReviewStatus{
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("dolore"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                },
            },
            SkipOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("adipisci"),
                Seconds: sdk.String("dolorum"),
            },
            Skippable: sdk.Bool(false),
            ThirdPartyTag: sdk.String("architecto"),
            ThirdPartyUrls: []shared.ThirdPartyURL{
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeUnspecified.ToPointer(),
                    URL: sdk.String("quas"),
                },
            },
            TimerEvents: []shared.TimerEvent{
                shared.TimerEvent{
                    Name: sdk.String("Jodi Skiles"),
                    ReportingName: sdk.String("ut"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Ms. Terrance Davis"),
                    ReportingName: sdk.String("occaecati"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Wilson Terry"),
                    ReportingName: sdk.String("ipsum"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Karl Feeney"),
                    ReportingName: sdk.String("dignissimos"),
                },
            },
            TrackerUrls: []string{
                "distinctio",
                "quod",
                "odio",
                "similique",
            },
            UniversalAdID: &shared.UniversalAdID{
                ID: sdk.String("bd74dd39-c0f5-4d2c-bf7c-70a45626d436"),
                Registry: shared.UniversalAdIDRegistryEnumUniversalAdRegistryClearcast.ToPointer(),
            },
            VastTagURL: sdk.String("dicta"),
        },
        AccessToken: sdk.String("dolor"),
        AdvertiserID: "maiores",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("excepturi"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("quisquam"),
    }, operations.DisplayvideoAdvertisersCreativesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreativesDelete

Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreativesDelete(ctx, operations.DisplayvideoAdvertisersCreativesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ea"),
        AdvertiserID: "impedit",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veniam"),
        CreativeID: "aliquid",
        Fields: sdk.String("inventore"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("recusandae"),
    }, operations.DisplayvideoAdvertisersCreativesDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreativesGet

Gets a creative.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreativesGet(ctx, operations.DisplayvideoAdvertisersCreativesGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minima"),
        AdvertiserID: "eaque",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        CreativeID: "aut",
        Fields: sdk.String("aut"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.DisplayvideoAdvertisersCreativesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreativesList

Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreativesList(ctx, operations.DisplayvideoAdvertisersCreativesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("non"),
        AdvertiserID: "et",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("placeat"),
        Filter: sdk.String("velit"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("autem"),
        OrderBy: sdk.String("nobis"),
        PageSize: sdk.Int64(557369),
        PageToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nulla"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("libero"),
    }, operations.DisplayvideoAdvertisersCreativesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreativesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersCreativesPatch

Updates an existing creative. Returns the updated creative if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCreativesPatch(ctx, operations.DisplayvideoAdvertisersCreativesPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeInput: &shared.CreativeInput{
            AdditionalDimensions: []shared.Dimensions{
                shared.Dimensions{
                    HeightPixels: sdk.Int(256139),
                    WidthPixels: sdk.Int(131482),
                },
                shared.Dimensions{
                    HeightPixels: sdk.Int(591935),
                    WidthPixels: sdk.Int(55374),
                },
            },
            AppendedTag: sdk.String("molestiae"),
            Assets: []shared.AssetAssociation{
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("odio"),
                        MediaID: sdk.String("eius"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRoleLongBody.ToPointer(),
                },
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("esse"),
                        MediaID: sdk.String("rem"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRolePrice.ToPointer(),
                },
            },
            CmTrackingAd: &shared.CmTrackingAd{
                CmAdID: sdk.String("reprehenderit"),
                CmCreativeID: sdk.String("quidem"),
                CmPlacementID: sdk.String("fugiat"),
            },
            CompanionCreativeIds: []string{
                "eum",
                "suscipit",
            },
            CounterEvents: []shared.CounterEvent{
                shared.CounterEvent{
                    Name: sdk.String("Mr. Irma Schaefer"),
                    ReportingName: sdk.String("quidem"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Angelica Stamm"),
                    ReportingName: sdk.String("eius"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Brittany Bernier II"),
                    ReportingName: sdk.String("debitis"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Kelly Donnelly"),
                    ReportingName: sdk.String("recusandae"),
                },
            },
            CreativeType: shared.CreativeCreativeTypeEnumCreativeTypeUnspecified.ToPointer(),
            Dimensions: &shared.Dimensions{
                HeightPixels: sdk.Int(715179),
                WidthPixels: sdk.Int(799796),
            },
            DisplayName: sdk.String("dignissimos"),
            EntityStatus: shared.CreativeEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            ExitEvents: []shared.ExitEvent{
                shared.ExitEvent{
                    Name: sdk.String("Sheldon Hackett"),
                    ReportingName: sdk.String("commodi"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("dolores"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Fernando Barton"),
                    ReportingName: sdk.String("quas"),
                    Type: shared.ExitEventTypeEnumExitEventTypeDefault.ToPointer(),
                    URL: sdk.String("consequuntur"),
                },
            },
            ExpandOnHover: sdk.Bool(false),
            ExpandingDirection: shared.CreativeExpandingDirectionEnumExpandingDirectionUpAndLeft.ToPointer(),
            HostingSource: shared.CreativeHostingSourceEnumHostingSourceUnspecified.ToPointer(),
            IasCampaignMonitoring: sdk.Bool(false),
            IntegrationCode: sdk.String("fuga"),
            JsTrackerURL: sdk.String("mollitia"),
            Notes: sdk.String("incidunt"),
            ObaIcon: &shared.ObaIcon{
                ClickTrackingURL: sdk.String("atque"),
                Dimensions: &shared.Dimensions{
                    HeightPixels: sdk.Int(128860),
                    WidthPixels: sdk.Int(325685),
                },
                LandingPageURL: sdk.String("nisi"),
                Position: shared.ObaIconPositionEnumObaIconPositionUnspecified.ToPointer(),
                Program: sdk.String("sapiente"),
                ResourceMimeType: sdk.String("consequuntur"),
                ResourceURL: sdk.String("ratione"),
                ViewTrackingURL: sdk.String("explicabo"),
            },
            ProgressOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("saepe"),
                Seconds: sdk.String("occaecati"),
            },
            RequireHtml5: sdk.Bool(false),
            RequireMraid: sdk.Bool(false),
            RequirePingForAttribution: sdk.Bool(false),
            ReviewStatus: &shared.ReviewStatusInfo{
                ApprovalStatus: shared.ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingServable.ToPointer(),
                ContentAndPolicyReviewStatus: shared.ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusUnspecified.ToPointer(),
                CreativeAndLandingPageReviewStatus: shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusApproved.ToPointer(),
                ExchangeReviewStatuses: []shared.ExchangeReviewStatus{
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeTapjoy.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusUnspecified.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangePubmatic.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeTaboola.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeOoyala.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusUnspecified.ToPointer(),
                    },
                },
                PublisherReviewStatuses: []shared.PublisherReviewStatus{
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("vel"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("molestiae"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("occaecati"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("distinctio"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                },
            },
            SkipOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("sit"),
                Seconds: sdk.String("culpa"),
            },
            Skippable: sdk.Bool(false),
            ThirdPartyTag: sdk.String("tempore"),
            ThirdPartyUrls: []shared.ThirdPartyURL{
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoStop.ToPointer(),
                    URL: sdk.String("consequuntur"),
                },
            },
            TimerEvents: []shared.TimerEvent{
                shared.TimerEvent{
                    Name: sdk.String("Calvin Williamson"),
                    ReportingName: sdk.String("blanditiis"),
                },
            },
            TrackerUrls: []string{
                "a",
                "nulla",
                "quas",
            },
            UniversalAdID: &shared.UniversalAdID{
                ID: sdk.String("71f99dd2-efd1-421a-a6f1-e674bdb04f15"),
                Registry: shared.UniversalAdIDRegistryEnumUniversalAdRegistryAdID.ToPointer(),
            },
            VastTagURL: sdk.String("ullam"),
        },
        AccessToken: sdk.String("nisi"),
        AdvertiserID: "aut",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("qui"),
        CreativeID: "quibusdam",
        Fields: sdk.String("ex"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UpdateMask: sdk.String("architecto"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("tenetur"),
    }, operations.DisplayvideoAdvertisersCreativesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Creative != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersDelete

Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersDelete(ctx, operations.DisplayvideoAdvertisersDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        AdvertiserID: "et",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("minima"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("consectetur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DisplayvideoAdvertisersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersEditAssignedTargetingOptions

Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersEditAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkEditAdvertiserAssignedTargetingOptionsRequestInput: &shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2124.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eum"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("mollitia"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformUnspecified.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("non"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dolor"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("numquam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptas"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("dignissimos"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("maiores"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptatibus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aperiam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quaerat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("repellendus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("maxime"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("asperiores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("porro"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ab"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("adipisci"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("id"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("suscipit"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2460.63),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("est"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("recusandae"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("totam"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("fugiat"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("vel"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("labore"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSaturday.ToPointer(),
                                EndHour: sdk.Int(706575),
                                StartHour: sdk.Int(738227),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("in"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierFamilies.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeOneByAolMobile.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnspecified.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("cum"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("consectetur"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("in"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("facere"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("doloribus"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("suscipit"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6971.42),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("dolore"),
                                ProximityRadius: sdk.Float64(1210.59),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("adipisci"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryWeapons.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("tempora"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate80PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud25.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "adipisci",
                                        "minus",
                                        "dolores",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("nesciunt"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("culpa"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("totam"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("hic"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeBrowser.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnspecified.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rerum"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("sed"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformGenericCtv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("asperiores"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("expedita"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ab"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("dolore"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("laborum"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("sed"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("commodi"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quidem"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("unde"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("suscipit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("illo"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("reiciendis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("perferendis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("corrupti"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sed"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5922.31),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ea"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("occaecati"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quos"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptatibus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnknown.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("voluptate"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(401713),
                                StartHour: sdk.Int(25497),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierTeens.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeImproveDigital.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("debitis"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("sit"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("nobis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("error"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("recusandae"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nulla"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("magni"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(9014.83),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("in"),
                                ProximityRadius: sdk.Float64(8892.34),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("laudantium"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryViolence.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("cum"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("fugit"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate75PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability50PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "esse",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraqUnspecified.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("nostrum"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewabilityUnspecified.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("incidunt"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("reiciendis"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("harum"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("dicta"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("labore"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("atque"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("nam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("alias"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("amet"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("voluptate"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("unde"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("reiciendis"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("repellendus"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("delectus"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("voluptates"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quidem"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("facere"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("praesentium"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatem"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quisquam"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("atque"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4420.36),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("totam"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("suscipit"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("maxime"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("et"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("esse"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ea"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday.ToPointer(),
                                EndHour: sdk.Int(623295),
                                StartHour: sdk.Int(887265),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierGeneral.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeOpenx.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("corrupti"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("error"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("blanditiis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("suscipit"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repudiandae"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("atque"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("recusandae"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolorum"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2871.19),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("doloremque"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("repudiandae"),
                                ProximityRadius: sdk.Float64(1160.98),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("beatae"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDownloadsSharing.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("laboriosam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumInflammatoryPoliticsAndNews,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("occaecati"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate80PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud8.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance25PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "corporis",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq1000.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("cum"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("iure"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability10PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("laborum"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("distinctio"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2124.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rem"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("aliquam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("alias"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("perspiciatis"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("mollitia"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("alias"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolores"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("id"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("minima"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolore"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nesciunt"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quae"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("recusandae"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quaerat"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("molestiae"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("ex"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("adipisci"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("laudantium"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nemo"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("provident"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aspernatur"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ullam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quasi"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nostrum"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("mollitia"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5910.27),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("animi"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ex"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("accusantium"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("doloribus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nam"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(637583),
                                StartHour: sdk.Int(672041),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("modi"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierParentalGuidance.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeApplovin.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("tempora"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("quis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("inventore"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fugit"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("quae"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("velit"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aspernatur"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2606.28),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("at"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("impedit"),
                                ProximityRadius: sdk.Float64(1794.1),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("eum"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDerogatory.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNonEnglish,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("fuga"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate80PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumVideoIabUnspecified.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumVideoViewableRateUnspecified.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "ducimus",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq500.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("molestiae"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dicta"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability40PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("praesentium"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("maiores"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange6064.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vel"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("architecto"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dicta"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("esse"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ex"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("aliquid"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("laborum"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fugiat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aliquid"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aliquid"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("perferendis"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("voluptas"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iste"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6616.07),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("error"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptates"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("mollitia"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("laborum"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("libero"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("enim"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                EndHour: sdk.Int(833316),
                                StartHour: sdk.Int(405036),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ex"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierGeneral.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeAppnexus.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cum"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("beatae"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("voluptatum"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("omnis"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("est"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sapiente"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1032.98),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("pariatur"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("debitis"),
                                ProximityRadius: sdk.Float64(291.9),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("deleniti"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryEmbeddedVideo.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("sapiente"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("aliquam"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability75PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumVideoViewableRateUnspecified.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "sit",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("impedit"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("sed"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("veniam"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeGender.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnknown.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vel"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("voluptatum"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("ab"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("autem"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("recusandae"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("consequuntur"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("exercitationem"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quasi"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("nisi"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("at"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("vero"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sequi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("repudiandae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("occaecati"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("blanditiis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptas"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aspernatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("fuga"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5243.8),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("dicta"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("consectetur"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("aperiam"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cupiditate"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("alias"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday.ToPointer(),
                                EndHour: sdk.Int(178580),
                                StartHour: sdk.Int(579011),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("magni"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierTeens.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeResetDigital.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("omnis"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop10Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("minima"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("praesentium"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("maxime"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("quos"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("commodi"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(9366.18),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("vero"),
                                ProximityRadius: sdk.Float64(329.01),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("vel"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryUnspecified.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("non"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumInflammatoryPoliticsAndNews,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterAviation,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("voluptas"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate40PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance25PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "velit",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq250.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("neque"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quo"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("iure"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("odit"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange6064.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vel"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("magnam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("facere"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatibus"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("porro"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("velit"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("illo"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ea"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("vero"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("velit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ut"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("earum"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dicta"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7722.66),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("iste"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("alias"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("nisi"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("velit"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnknown.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                                EndHour: sdk.Int(24753),
                                StartHour: sdk.Int(39992),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officia"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierGeneral.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeOneByAolVideo.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("placeat"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("expedita"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("deleniti"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("a"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptate"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("unde"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("animi"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(3574.25),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("error"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("esse"),
                                ProximityRadius: sdk.Float64(2885.7),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("vero"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryWeapons.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("inventore"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumMediumSeverityUnspecified,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("magni"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability75PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "et",
                                        "ipsum",
                                        "unde",
                                        "nulla",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq875.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("quos"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("placeat"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability40PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("ipsa"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("voluptates"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1824.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aperiam"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("totam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("distinctio"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("autem"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dolores"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("beatae"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("corrupti"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("molestiae"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("provident"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("accusamus"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("tempore"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("sint"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("ea"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("autem"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("rerum"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("laudantium"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptatibus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("at"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fuga"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("expedita"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quibusdam"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odit"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1276.88),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("error"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("earum"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("adipisci"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("recusandae"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("similique"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ut"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday.ToPointer(),
                                EndHour: sdk.Int(476946),
                                StartHour: sdk.Int(963198),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fugit"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnrated.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeMedianet.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dignissimos"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("necessitatibus"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("corporis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("qui"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("expedita"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("cupiditate"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("placeat"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("enim"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4468.77),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("eum"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("modi"),
                                ProximityRadius: sdk.Float64(3573.47),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("voluptates"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryLiveStreamingVideo.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("aperiam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsFinancial,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("pariatur"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate70PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "excepturi",
                                        "dolores",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("placeat"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability40PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("dolorem"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("modi"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAppCategory.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "sequi",
                        "repudiandae",
                        "cum",
                        "dicta",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeContentGenre.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "animi",
                        "dolores",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeInventorySourceGroup.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "consequuntur",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAudioContentType.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("nobis"),
        AdvertiserID: "ipsa",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("laboriosam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditAdvertiserAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersGet

Gets an advertiser.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersGet(ctx, operations.DisplayvideoAdvertisersGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        AdvertiserID: "aliquam",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        Fields: sdk.String("eligendi"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DisplayvideoAdvertisersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersCreate

Creates a new insertion order. Returns the newly created insertion order if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersCreate(ctx, operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InsertionOrderInput: &shared.InsertionOrderInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("molestias"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("odio"),
                    MaxAverageCpmBidAmountMicros: sdk.String("eaque"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeAvViewed.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("architecto"),
                    MaxAverageCpmBidAmountMicros: sdk.String("quos"),
                    PerformanceGoalAmountMicros: sdk.String("iste"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen.ToPointer(),
                },
            },
            BillableOutcome: shared.InsertionOrderBillableOutcomeEnumBillableOutcomePayPerClick.ToPointer(),
            Budget: &shared.InsertionOrderBudget{
                AutomationType: shared.InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeNone.ToPointer(),
                BudgetSegments: []shared.InsertionOrderBudgetSegment{
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("doloremque"),
                        CampaignBudgetID: sdk.String("delectus"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(773110),
                                Month: sdk.Int(741238),
                                Year: sdk.Int(216870),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(238011),
                                Month: sdk.Int(903150),
                                Year: sdk.Int(644420),
                            },
                        },
                        Description: sdk.String("doloremque"),
                    },
                },
                BudgetUnit: shared.InsertionOrderBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
            },
            CampaignID: sdk.String("veniam"),
            DisplayName: sdk.String("libero"),
            EntityStatus: shared.InsertionOrderEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(584593),
                MaxViews: sdk.Int(475589),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitHours.ToPointer(),
                TimeUnitCount: sdk.Int(820023),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderType: shared.InsertionOrderInsertionOrderTypeEnumInsertionOrderTypeUnspecified.ToPointer(),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("magnam"),
                IntegrationCode: sdk.String("itaque"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("sed"),
                DailyMaxMicros: sdk.String("asperiores"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodUnspecified.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeUnspecified.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeIntegralAdSciencePrebid.ToPointer(),
                    FeeAmount: sdk.String("odit"),
                    FeePercentageMillis: sdk.String("pariatur"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeDv360.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeAdlooxPrebid.ToPointer(),
                    FeeAmount: sdk.String("velit"),
                    FeePercentageMillis: sdk.String("facilis"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeDv360.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeCustomFee5.ToPointer(),
                    FeeAmount: sdk.String("quaerat"),
                    FeePercentageMillis: sdk.String("blanditiis"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeDv360.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDefault.ToPointer(),
                    FeeAmount: sdk.String("nisi"),
                    FeePercentageMillis: sdk.String("libero"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PerformanceGoal: &shared.PerformanceGoal{
                PerformanceGoalAmountMicros: sdk.String("facilis"),
                PerformanceGoalPercentageMicros: sdk.String("ipsum"),
                PerformanceGoalString: sdk.String("ad"),
                PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeOther.ToPointer(),
            },
        },
        AccessToken: sdk.String("voluptatibus"),
        AdvertiserID: "consequuntur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("neque"),
        UploadProtocol: sdk.String("iusto"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsertionOrder != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersDelete

Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersDelete(ctx, operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("rem"),
        AdvertiserID: "eligendi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("officiis"),
        InsertionOrderID: "ducimus",
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersGet

Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersGet(ctx, operations.DisplayvideoAdvertisersInsertionOrdersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        AdvertiserID: "fugiat",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aspernatur"),
        Fields: sdk.String("enim"),
        InsertionOrderID: "delectus",
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("libero"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("ab"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsertionOrder != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersList

Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersList(ctx, operations.DisplayvideoAdvertisersInsertionOrdersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("accusamus"),
        AdvertiserID: "saepe",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("eos"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("reprehenderit"),
        OrderBy: sdk.String("praesentium"),
        PageSize: sdk.Int64(367046),
        PageToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("nihil"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsertionOrdersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions

Lists assigned targeting options of an insertion order across targeting types.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illo"),
        AdvertiserID: "labore",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquam"),
        Fields: sdk.String("quisquam"),
        Filter: sdk.String("provident"),
        InsertionOrderID: "laudantium",
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("consequatur"),
        OrderBy: sdk.String("maxime"),
        PageSize: sdk.Int64(136357),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("provident"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersListAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListInsertionOrderAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersPatch

Updates an existing insertion order. Returns the updated insertion order if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersPatch(ctx, operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        InsertionOrderInput: &shared.InsertionOrderInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("rerum"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("dignissimos"),
                    MaxAverageCpmBidAmountMicros: sdk.String("corporis"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("similique"),
                    MaxAverageCpmBidAmountMicros: sdk.String("repellendus"),
                    PerformanceGoalAmountMicros: sdk.String("iure"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpa.ToPointer(),
                },
            },
            BillableOutcome: shared.InsertionOrderBillableOutcomeEnumBillableOutcomePayPerImpression.ToPointer(),
            Budget: &shared.InsertionOrderBudget{
                AutomationType: shared.InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeBidBudget.ToPointer(),
                BudgetSegments: []shared.InsertionOrderBudgetSegment{
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("aut"),
                        CampaignBudgetID: sdk.String("voluptatem"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(322829),
                                Month: sdk.Int(60995),
                                Year: sdk.Int(229567),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(849320),
                                Month: sdk.Int(506863),
                                Year: sdk.Int(695526),
                            },
                        },
                        Description: sdk.String("cum"),
                    },
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("amet"),
                        CampaignBudgetID: sdk.String("quasi"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(118126),
                                Month: sdk.Int(514922),
                                Year: sdk.Int(40710),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(938412),
                                Month: sdk.Int(479707),
                                Year: sdk.Int(228646),
                            },
                        },
                        Description: sdk.String("provident"),
                    },
                },
                BudgetUnit: shared.InsertionOrderBudgetBudgetUnitEnumBudgetUnitImpressions.ToPointer(),
            },
            CampaignID: sdk.String("necessitatibus"),
            DisplayName: sdk.String("provident"),
            EntityStatus: shared.InsertionOrderEntityStatusEnumEntityStatusScheduledForDeletion.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(10063),
                MaxViews: sdk.Int(366244),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitWeeks.ToPointer(),
                TimeUnitCount: sdk.Int(930840),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderType: shared.InsertionOrderInsertionOrderTypeEnumOverTheTop.ToPointer(),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("corrupti"),
                IntegrationCode: sdk.String("aperiam"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("sint"),
                DailyMaxMicros: sdk.String("accusamus"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodUnspecified.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeAsap.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeUnspecified.ToPointer(),
                    FeeAmount: sdk.String("velit"),
                    FeePercentageMillis: sdk.String("dolor"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PerformanceGoal: &shared.PerformanceGoal{
                PerformanceGoalAmountMicros: sdk.String("dolor"),
                PerformanceGoalPercentageMicros: sdk.String("occaecati"),
                PerformanceGoalString: sdk.String("atque"),
                PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpm.ToPointer(),
            },
        },
        AccessToken: sdk.String("at"),
        AdvertiserID: "labore",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("voluptatem"),
        InsertionOrderID: "perferendis",
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("ea"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aperiam"),
        UpdateMask: sdk.String("dignissimos"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("velit"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InsertionOrder != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreate(ctx, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2529.ToPointer(),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("consectetur"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("eligendi"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformPlaystation.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("soluta"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("officia"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("amet"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("tenetur"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("aspernatur"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("itaque"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("illum"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("laborum"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("dignissimos"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("qui"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("consectetur"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("repellat"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("explicabo"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("nihil"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("ab"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("deserunt"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("delectus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("non"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("distinctio"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("exercitationem"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("labore"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(2543.82),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                TargetingOptionID: sdk.String("modi"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("in"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("explicabo"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("accusamus"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("rem"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("aperiam"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified.ToPointer(),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("enim"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                EndHour: sdk.Int(626707),
                StartHour: sdk.Int(326118),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("magnam"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnrated.ToPointer(),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeFluct.ToPointer(),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("dignissimos"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("nostrum"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("molestiae"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("veniam"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("reiciendis"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("modi"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("aut"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("eveniet"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(4137.58),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("dolorum"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("possimus"),
                ProximityRadius: sdk.Float64(4523.99),
                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("nesciunt"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryViolence.ToPointer(),
            },
            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("minus"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Point5Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumMediumSeverityUnspecified,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                        },
                    },
                    CustomSegmentID: sdk.String("repellendus"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance25PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "officia",
                        "sed",
                        "voluptatem",
                        "alias",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("optio"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("voluptatibus"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability60PercentOrMore.ToPointer(),
            },
            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("libero"),
                Negative: sdk.Bool(false),
            },
            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                VideoID: sdk.String("totam"),
            },
        },
        AccessToken: sdk.String("sequi"),
        AdvertiserID: "aliquid",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("ducimus"),
        InsertionOrderID: "odit",
        Key: sdk.String("velit"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeNativeContentPosition,
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("natus"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDelete(ctx, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("doloremque"),
        AdvertiserID: "nisi",
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedTargetingOptionID: "recusandae",
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("non"),
        InsertionOrderID: "rem",
        Key: sdk.String("quia"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDayAndTime,
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an insertion order.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("officiis"),
        AdvertiserID: "architecto",
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedTargetingOptionID: "enim",
        Callback: sdk.String("optio"),
        Fields: sdk.String("rem"),
        InsertionOrderID: "perferendis",
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeCategory,
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("quos"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an insertion order.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        AdvertiserID: "modi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("modi"),
        Filter: sdk.String("consequuntur"),
        InsertionOrderID: "assumenda",
        Key: sdk.String("vero"),
        OauthToken: sdk.String("doloribus"),
        OrderBy: sdk.String("impedit"),
        PageSize: sdk.Int64(783397),
        PageToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeYoutubeChannel,
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInsertionOrderAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInvoicesList

Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInvoicesList(ctx, operations.DisplayvideoAdvertisersInvoicesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("esse"),
        AdvertiserID: "iure",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("debitis"),
        IssueMonth: sdk.String("vel"),
        Key: sdk.String("neque"),
        LoiSapinInvoiceType: operations.DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnumLoiSapinInvoiceTypeMedia.ToPointer(),
        OauthToken: sdk.String("voluptas"),
        PageSize: sdk.Int64(163684),
        PageToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("eius"),
    }, operations.DisplayvideoAdvertisersInvoicesListSecurity{
        Option1: &operations.DisplayvideoAdvertisersInvoicesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInvoicesResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency

Retrieves the invoice currency used by an advertiser in a given month.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency(ctx, operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rem"),
        AdvertiserID: "maiores",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("saepe"),
        InvoiceMonth: sdk.String("neque"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity{
        Option1: &operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupInvoiceCurrencyResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions

Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditAssignedTargetingOptionsRequestInput: &shared.BulkEditAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1824.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("similique"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformUnspecified.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("nemo"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("possimus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("incidunt"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("ipsam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("alias"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quidem"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nesciunt"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("commodi"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("consequuntur"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("veniam"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("debitis"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("officia"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("ut"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("numquam"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("tenetur"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("in"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ex"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ab"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nisi"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quisquam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolor"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ducimus"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("minima"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1814.76),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("magni"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("adipisci"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("praesentium"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                EndHour: sdk.Int(363482),
                                StartHour: sdk.Int(633987),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("amet"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnrated.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeWaze.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("a"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("enim"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("doloribus"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("assumenda"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("alias"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ipsa"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nobis"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1559.78),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("vel"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("perspiciatis"),
                                ProximityRadius: sdk.Float64(8927.08),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("architecto"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryUnspecified.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("natus"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate60PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance10PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "unde",
                                        "modi",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq1000.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("quo"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("illum"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("facilis"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeParentalStatus.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4549.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("recusandae"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("distinctio"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("facere"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("eveniet"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("maxime"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ipsam"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("suscipit"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("molestias"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("laborum"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("est"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quo"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fugit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quaerat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("hic"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("unde"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("error"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("magnam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("esse"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("facere"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("impedit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quasi"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quod"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laboriosam"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(411.79),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("facere"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maxime"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("consequatur"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                EndHour: sdk.Int(169819),
                                StartHour: sdk.Int(885797),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnspecified.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeApplovin.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop10Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("alias"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("asperiores"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("rem"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dicta"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("earum"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("velit"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eius"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4465.47),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("neque"),
                                ProximityRadius: sdk.Float64(8766.49),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("accusantium"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDownloadsSharing.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterAviation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("veritatis"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate70PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud8.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "delectus",
                                        "omnis",
                                        "sed",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq250.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("ipsa"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quisquam"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability50PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("molestiae"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("aliquid"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange6064.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("a"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("nobis"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAppleTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dicta"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("eveniet"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("porro"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quidem"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("modi"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("voluptates"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("eius"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("asperiores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("blanditiis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("repellat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("animi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nulla"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("deserunt"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("corporis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("velit"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("enim"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officia"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(9029.79),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("repudiandae"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("accusantium"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officia"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("impedit"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("eos"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday.ToPointer(),
                                EndHour: sdk.Int(620054),
                                StartHour: sdk.Int(793568),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierMature.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeSovrn.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnknown.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("laborum"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("modi"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("perferendis"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("molestias"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("sunt"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1397.45),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("ipsam"),
                                ProximityRadius: sdk.Float64(510.53),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("veniam"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryAlcohol.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumInflammatoryPoliticsAndNews,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("pariatur"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate55PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability80PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "dolorum",
                                        "velit",
                                        "earum",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("deserunt"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability10PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("tempora"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("possimus"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rerum"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("sed"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("delectus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quo"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("asperiores"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("iste"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("illo"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("doloribus"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("at"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("possimus"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("vel"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("mollitia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("non"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aliquam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quisquam"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(815.81),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("est"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("aliquid"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("consectetur"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cumque"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(927959),
                                StartHour: sdk.Int(271306),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("numquam"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierParentalGuidance.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeTriton.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("tenetur"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("quidem"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("totam"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("porro"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("nihil"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("animi"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("commodi"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6863.8),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("dolore"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("maxime"),
                                ProximityRadius: sdk.Float64(3032.92),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("ullam"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryTransportationAccidents.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("voluptas"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRateUnspecified.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNonEnglish,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("labore"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate50PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud10.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability40PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "sapiente",
                                        "quo",
                                        "incidunt",
                                        "quod",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraqUnspecified.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("fugit"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("pariatur"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability90PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("veritatis"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("aut"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeOperatingSystem.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptates"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("tempora"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("doloremque"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("eum"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("eum"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("blanditiis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nihil"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("atque"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("deserunt"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("atque"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nostrum"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("architecto"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("est"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("enim"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("enim"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sapiente"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("delectus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("natus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quaerat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("mollitia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("enim"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("eum"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("illum"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(223.31),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("minus"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("recusandae"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("voluptates"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dicta"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnspecified.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(148975),
                                StartHour: sdk.Int(537170),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierTeens.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeYieldlab.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sunt"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("eius"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("voluptatum"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("ipsa"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("at"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("repellat"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("inventore"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sequi"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6854.67),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("dolorem"),
                                ProximityRadius: sdk.Float64(1018.54),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("aspernatur"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryShocking.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("illo"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("similique"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud50.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "laudantium",
                                        "esse",
                                        "eveniet",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("facilis"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("architecto"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("praesentium"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5559.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("expedita"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformSamsungTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("illo"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quos"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sint"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("accusamus"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aperiam"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("laudantium"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("tempora"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quae"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("omnis"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("rem"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("tenetur"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("deleniti"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("modi"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aliquam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sequi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("consequatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("debitis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quisquam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dolorum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ad"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("porro"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quibusdam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("omnis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aut"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("officia"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cupiditate"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4428.73),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("accusantium"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ad"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("nisi"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quia"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnspecified.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("odit"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                                EndHour: sdk.Int(712893),
                                StartHour: sdk.Int(176935),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierTeens.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangePubmatic.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop10Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("quam"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("est"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("aliquam"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("voluptatum"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quod"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptatibus"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2477.67),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("laborum"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("voluptas"),
                                ProximityRadius: sdk.Float64(9873.71),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("recusandae"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategorySuggestive.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlternativeLifestyles,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("amet"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate55PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud25.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability80PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "dignissimos",
                                        "reiciendis",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("aperiam"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("similique"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability50PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("ex"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("repellendus"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeViewability.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4044.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sequi"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("commodi"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("in"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sunt"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("nulla"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("mollitia"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("impedit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("accusamus"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quas"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("cum"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("dicta"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("impedit"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("repudiandae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("impedit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("impedit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eligendi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("beatae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("maiores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quidem"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("illo"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quo"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dignissimos"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7381.52),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("earum"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("nihil"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quaerat"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("rerum"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday.ToPointer(),
                                EndHour: sdk.Int(138436),
                                StartHour: sdk.Int(319419),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierParentalGuidance.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeRevenuemax.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("illo"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("exercitationem"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("laborum"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("illum"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("maxime"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nostrum"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(8450.86),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("esse"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("explicabo"),
                                ProximityRadius: sdk.Float64(2337.08),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("optio"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryAdult.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("quis"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud50.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "iure",
                                        "quisquam",
                                        "provident",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq875.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("doloremque"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("cum"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability60PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("porro"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("impedit"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeOnScreenPosition.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "fugiat",
                        "laboriosam",
                        "nam",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeDeviceType.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "consectetur",
                        "necessitatibus",
                        "maxime",
                        "cupiditate",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeChannel.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "adipisci",
                        "accusantium",
                        "magnam",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeSessionPosition.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "explicabo",
                        "vel",
                        "cum",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeLanguage.ToPointer(),
                },
            },
            LineItemIds: []string{
                "fugit",
                "ipsam",
                "nostrum",
                "sequi",
            },
        },
        AccessToken: sdk.String("voluptatum"),
        AdvertiserID: "quasi",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DisplayvideoAdvertisersLineItemsBulkEditAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions

Lists assigned targeting options for multiple line items across targeting types.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fugit"),
        AdvertiserID: "voluptatem",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("ea"),
        Filter: sdk.String("eos"),
        Key: sdk.String("aliquam"),
        LineItemIds: []string{
            "hic",
            "maiores",
            "asperiores",
        },
        OauthToken: sdk.String("autem"),
        OrderBy: sdk.String("nesciunt"),
        PageSize: sdk.Int64(585628),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("ipsa"),
    }, operations.DisplayvideoAdvertisersLineItemsBulkListAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsBulkUpdate

Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsBulkUpdate(ctx, operations.DisplayvideoAdvertisersLineItemsBulkUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkUpdateLineItemsRequestInput: &shared.BulkUpdateLineItemsRequestInput{
            LineItemIds: []string{
                "assumenda",
                "quo",
                "fuga",
            },
            TargetLineItem: &shared.LineItemInput{
                BidStrategy: &shared.BiddingStrategy{
                    FixedBid: &shared.FixedBidStrategy{
                        BidAmountMicros: sdk.String("tempore"),
                    },
                    MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                        CustomBiddingAlgorithmID: sdk.String("commodi"),
                        MaxAverageCpmBidAmountMicros: sdk.String("fugit"),
                        PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeViewableCpm.ToPointer(),
                        RaiseBidForDeals: sdk.Bool(false),
                    },
                    PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                        CustomBiddingAlgorithmID: sdk.String("voluptate"),
                        MaxAverageCpmBidAmountMicros: sdk.String("nisi"),
                        PerformanceGoalAmountMicros: sdk.String("aliquid"),
                        PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCustomAlgo.ToPointer(),
                    },
                },
                Budget: &shared.LineItemBudgetInput{
                    BudgetAllocationType: shared.LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeAutomatic.ToPointer(),
                    MaxAmount: sdk.String("accusamus"),
                },
                ConversionCounting: &shared.ConversionCountingConfig{
                    FloodlightActivityConfigs: []shared.TrackingFloodlightActivityConfig{
                        shared.TrackingFloodlightActivityConfig{
                            FloodlightActivityID: sdk.String("itaque"),
                            PostClickLookbackWindowDays: sdk.Int(790305),
                            PostViewLookbackWindowDays: sdk.Int(53529),
                        },
                    },
                    PostViewCountPercentageMillis: sdk.String("alias"),
                },
                CreativeIds: []string{
                    "consequuntur",
                },
                DisplayName: sdk.String("vitae"),
                EntityStatus: shared.LineItemEntityStatusEnumEntityStatusPaused.ToPointer(),
                ExcludeNewExchanges: sdk.Bool(false),
                Flight: &shared.LineItemFlight{
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(193334),
                            Month: sdk.Int(227431),
                            Year: sdk.Int(346608),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(847018),
                            Month: sdk.Int(506532),
                            Year: sdk.Int(601626),
                        },
                    },
                    FlightDateType: shared.LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeInherited.ToPointer(),
                },
                FrequencyCap: &shared.FrequencyCap{
                    MaxImpressions: sdk.Int(753261),
                    MaxViews: sdk.Int(732142),
                    TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitLifetime.ToPointer(),
                    TimeUnitCount: sdk.Int(890112),
                    Unlimited: sdk.Bool(false),
                },
                InsertionOrderID: sdk.String("nobis"),
                IntegrationDetails: &shared.IntegrationDetails{
                    Details: sdk.String("asperiores"),
                    IntegrationCode: sdk.String("temporibus"),
                },
                LineItemType: shared.LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersAudio.ToPointer(),
                MobileApp: &shared.MobileAppInput{
                    AppID: sdk.String("atque"),
                },
                Pacing: &shared.Pacing{
                    DailyMaxImpressions: sdk.String("quibusdam"),
                    DailyMaxMicros: sdk.String("sit"),
                    PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                    PacingType: shared.PacingPacingTypeEnumPacingTypeAhead.ToPointer(),
                },
                PartnerCosts: []shared.PartnerCost{
                    shared.PartnerCost{
                        CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeMoatVideo.ToPointer(),
                        FeeAmount: sdk.String("vero"),
                        FeePercentageMillis: sdk.String("earum"),
                        FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                        InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeUnspecified.ToPointer(),
                    },
                    shared.PartnerCost{
                        CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeUnspecified.ToPointer(),
                        FeeAmount: sdk.String("doloremque"),
                        FeePercentageMillis: sdk.String("tempora"),
                        FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                        InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeDv360.ToPointer(),
                    },
                },
                PartnerRevenueModel: &shared.PartnerRevenueModel{
                    MarkupAmount: sdk.String("atque"),
                    MarkupType: shared.PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeMediaCostMarkup.ToPointer(),
                },
                TargetingExpansion: &shared.TargetingExpansionConfig{
                    ExcludeFirstPartyAudience: sdk.Bool(false),
                    TargetingExpansionLevel: shared.TargetingExpansionConfigTargetingExpansionLevelEnumLeastExpansion.ToPointer(),
                },
                YoutubeAndPartnersSettings: &shared.YoutubeAndPartnersSettingsInput{
                    BiddingStrategy: &shared.YoutubeAndPartnersBiddingStrategyInput{
                        Type: shared.YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeUnspecified.ToPointer(),
                        Value: sdk.String("a"),
                    },
                    ContentCategory: shared.YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryExpanded.ToPointer(),
                    InventorySourceSettings: &shared.YoutubeAndPartnersInventorySourceConfig{
                        IncludeYoutubeSearch: sdk.Bool(false),
                        IncludeYoutubeVideoPartners: sdk.Bool(false),
                        IncludeYoutubeVideos: sdk.Bool(false),
                    },
                    LeadFormID: sdk.String("veritatis"),
                    LinkedMerchantID: sdk.String("quod"),
                    RelatedVideoIds: []string{
                        "qui",
                        "accusantium",
                        "commodi",
                        "atque",
                    },
                    TargetFrequency: &shared.TargetFrequency{
                        TargetCount: sdk.String("totam"),
                        TimeUnit: shared.TargetFrequencyTimeUnitEnumTimeUnitMinutes.ToPointer(),
                        TimeUnitCount: sdk.Int(451807),
                    },
                    ThirdPartyMeasurementSettings: &shared.YoutubeAndPartnersThirdPartyMeasurementSettings{
                        BrandLiftVendorConfigs: []shared.ThirdPartyVendorConfig{
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("quod"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMoat.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("sapiente"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDynata.ToPointer(),
                            },
                        },
                        BrandSafetyVendorConfigs: []shared.ThirdPartyVendorConfig{
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("voluptate"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorUnspecified.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("facere"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorNielsen.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("fuga"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorUnspecified.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("ex"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                            },
                        },
                        ReachVendorConfigs: []shared.ThirdPartyVendorConfig{
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("sed"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorZefr.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("sequi"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorNielsen.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("voluptatum"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorUnspecified.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("laborum"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                            },
                        },
                        ViewabilityVendorConfigs: []shared.ThirdPartyVendorConfig{
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("tenetur"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDynata.ToPointer(),
                            },
                            shared.ThirdPartyVendorConfig{
                                PlacementID: sdk.String("velit"),
                                Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                            },
                        },
                    },
                    VideoAdSequenceSettings: &shared.VideoAdSequenceSettings{
                        MinimumDuration: shared.VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationUnspecified.ToPointer(),
                        Steps: []shared.VideoAdSequenceStep{
                            shared.VideoAdSequenceStep{
                                AdGroupID: sdk.String("illum"),
                                InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeEngagedImpression.ToPointer(),
                                PreviousStepID: sdk.String("tenetur"),
                                StepID: sdk.String("molestias"),
                            },
                            shared.VideoAdSequenceStep{
                                AdGroupID: sdk.String("ipsam"),
                                InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeSkip.ToPointer(),
                                PreviousStepID: sdk.String("laborum"),
                                StepID: sdk.String("perspiciatis"),
                            },
                            shared.VideoAdSequenceStep{
                                AdGroupID: sdk.String("voluptates"),
                                InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeSkip.ToPointer(),
                                PreviousStepID: sdk.String("quasi"),
                                StepID: sdk.String("quas"),
                            },
                            shared.VideoAdSequenceStep{
                                AdGroupID: sdk.String("odio"),
                                InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeSkip.ToPointer(),
                                PreviousStepID: sdk.String("porro"),
                                StepID: sdk.String("aliquid"),
                            },
                        },
                    },
                    ViewFrequencyCap: &shared.FrequencyCap{
                        MaxImpressions: sdk.Int(648497),
                        MaxViews: sdk.Int(695347),
                        TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitUnspecified.ToPointer(),
                        TimeUnitCount: sdk.Int(92851),
                        Unlimited: sdk.Bool(false),
                    },
                },
            },
            UpdateMask: sdk.String("nulla"),
        },
        AccessToken: sdk.String("magni"),
        AdvertiserID: "natus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("ut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("doloribus"),
    }, operations.DisplayvideoAdvertisersLineItemsBulkUpdateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkUpdateLineItemsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsCreate

Creates a new line item. Returns the newly created line item if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsCreate(ctx, operations.DisplayvideoAdvertisersLineItemsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LineItemInput: &shared.LineItemInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("quisquam"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("facere"),
                    MaxAverageCpmBidAmountMicros: sdk.String("dignissimos"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCustomAlgo.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("provident"),
                    MaxAverageCpmBidAmountMicros: sdk.String("dolor"),
                    PerformanceGoalAmountMicros: sdk.String("sint"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeUnspecified.ToPointer(),
                },
            },
            Budget: &shared.LineItemBudgetInput{
                BudgetAllocationType: shared.LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeUnspecified.ToPointer(),
                MaxAmount: sdk.String("eum"),
            },
            ConversionCounting: &shared.ConversionCountingConfig{
                FloodlightActivityConfigs: []shared.TrackingFloodlightActivityConfig{
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("laborum"),
                        PostClickLookbackWindowDays: sdk.Int(422276),
                        PostViewLookbackWindowDays: sdk.Int(828481),
                    },
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("explicabo"),
                        PostClickLookbackWindowDays: sdk.Int(852689),
                        PostViewLookbackWindowDays: sdk.Int(41306),
                    },
                },
                PostViewCountPercentageMillis: sdk.String("voluptatem"),
            },
            CreativeIds: []string{
                "velit",
            },
            DisplayName: sdk.String("ullam"),
            EntityStatus: shared.LineItemEntityStatusEnumEntityStatusArchived.ToPointer(),
            ExcludeNewExchanges: sdk.Bool(false),
            Flight: &shared.LineItemFlight{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(242532),
                        Month: sdk.Int(188732),
                        Year: sdk.Int(555386),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(802976),
                        Month: sdk.Int(923935),
                        Year: sdk.Int(767466),
                    },
                },
                FlightDateType: shared.LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeUnspecified.ToPointer(),
            },
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(516833),
                MaxViews: sdk.Int(435266),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitMinutes.ToPointer(),
                TimeUnitCount: sdk.Int(667646),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderID: sdk.String("fugit"),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("veritatis"),
                IntegrationCode: sdk.String("necessitatibus"),
            },
            LineItemType: shared.LineItemLineItemTypeEnumLineItemTypeYoutubeAndPartnersVideoSequence.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("dicta"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("ipsam"),
                DailyMaxMicros: sdk.String("consequuntur"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeAsap.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeAdsafe.ToPointer(),
                    FeeAmount: sdk.String("sunt"),
                    FeePercentageMillis: sdk.String("molestias"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeDv360.ToPointer(),
                },
            },
            PartnerRevenueModel: &shared.PartnerRevenueModel{
                MarkupAmount: sdk.String("ducimus"),
                MarkupType: shared.PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeMediaCostMarkup.ToPointer(),
            },
            TargetingExpansion: &shared.TargetingExpansionConfig{
                ExcludeFirstPartyAudience: sdk.Bool(false),
                TargetingExpansionLevel: shared.TargetingExpansionConfigTargetingExpansionLevelEnumSomeExpansion.ToPointer(),
            },
            YoutubeAndPartnersSettings: &shared.YoutubeAndPartnersSettingsInput{
                BiddingStrategy: &shared.YoutubeAndPartnersBiddingStrategyInput{
                    Type: shared.YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeMaximizeConversions.ToPointer(),
                    Value: sdk.String("ipsum"),
                },
                ContentCategory: shared.YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryLimited.ToPointer(),
                InventorySourceSettings: &shared.YoutubeAndPartnersInventorySourceConfig{
                    IncludeYoutubeSearch: sdk.Bool(false),
                    IncludeYoutubeVideoPartners: sdk.Bool(false),
                    IncludeYoutubeVideos: sdk.Bool(false),
                },
                LeadFormID: sdk.String("quos"),
                LinkedMerchantID: sdk.String("illum"),
                RelatedVideoIds: []string{
                    "voluptatem",
                    "non",
                    "quaerat",
                },
                TargetFrequency: &shared.TargetFrequency{
                    TargetCount: sdk.String("consequatur"),
                    TimeUnit: shared.TargetFrequencyTimeUnitEnumTimeUnitWeeks.ToPointer(),
                    TimeUnitCount: sdk.Int(831067),
                },
                ThirdPartyMeasurementSettings: &shared.YoutubeAndPartnersThirdPartyMeasurementSettings{
                    BrandLiftVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("quibusdam"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("voluptas"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorIntegralAdScience.ToPointer(),
                        },
                    },
                    BrandSafetyVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("tenetur"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorKantar.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("dolore"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorIntegralAdScience.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("ullam"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("alias"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorComscore.ToPointer(),
                        },
                    },
                    ReachVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("dicta"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMoat.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("commodi"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("quibusdam"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("rem"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorKantar.ToPointer(),
                        },
                    },
                    ViewabilityVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("neque"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorIntegralAdScience.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("quod"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMoat.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("placeat"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                        },
                    },
                },
                VideoAdSequenceSettings: &shared.VideoAdSequenceSettings{
                    MinimumDuration: shared.VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationMonth.ToPointer(),
                    Steps: []shared.VideoAdSequenceStep{
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("dicta"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeEngagedImpression.ToPointer(),
                            PreviousStepID: sdk.String("ipsum"),
                            StepID: sdk.String("consequatur"),
                        },
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("soluta"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeEngagedImpression.ToPointer(),
                            PreviousStepID: sdk.String("sequi"),
                            StepID: sdk.String("recusandae"),
                        },
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("labore"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypePaidView.ToPointer(),
                            PreviousStepID: sdk.String("magni"),
                            StepID: sdk.String("aperiam"),
                        },
                    },
                },
                ViewFrequencyCap: &shared.FrequencyCap{
                    MaxImpressions: sdk.Int(172696),
                    MaxViews: sdk.Int(848860),
                    TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitWeeks.ToPointer(),
                    TimeUnitCount: sdk.Int(168976),
                    Unlimited: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("beatae"),
        AdvertiserID: "aliquid",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("vel"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.DisplayvideoAdvertisersLineItemsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItem != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsDelete

Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsDelete(ctx, operations.DisplayvideoAdvertisersLineItemsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rem"),
        AdvertiserID: "dignissimos",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("provident"),
        Key: sdk.String("facere"),
        LineItemID: "sed",
        OauthToken: sdk.String("inventore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("unde"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.DisplayvideoAdvertisersLineItemsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsDuplicate

Duplicates a line item. Returns the ID of the created line item if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsDuplicate(ctx, operations.DisplayvideoAdvertisersLineItemsDuplicateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        DuplicateLineItemRequest: &shared.DuplicateLineItemRequest{
            TargetDisplayName: sdk.String("consequatur"),
        },
        AccessToken: sdk.String("adipisci"),
        AdvertiserID: "doloremque",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("cumque"),
        LineItemID: "maxime",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("beatae"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.DisplayvideoAdvertisersLineItemsDuplicateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DuplicateLineItemResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsGenerateDefault

Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsGenerateDefault(ctx, operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GenerateDefaultLineItemRequestInput: &shared.GenerateDefaultLineItemRequestInput{
            DisplayName: sdk.String("ratione"),
            InsertionOrderID: sdk.String("iure"),
            LineItemType: shared.GenerateDefaultLineItemRequestLineItemTypeEnumLineItemTypeDisplayMobileAppInventory.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("eos"),
            },
        },
        AccessToken: sdk.String("natus"),
        AdvertiserID: "voluptatem",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aut"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("officia"),
    }, operations.DisplayvideoAdvertisersLineItemsGenerateDefaultSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItem != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsGet

Gets a line item.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsGet(ctx, operations.DisplayvideoAdvertisersLineItemsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("corporis"),
        AdvertiserID: "accusamus",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("esse"),
        Key: sdk.String("neque"),
        LineItemID: "quidem",
        OauthToken: sdk.String("quisquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.DisplayvideoAdvertisersLineItemsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItem != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsList

Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsList(ctx, operations.DisplayvideoAdvertisersLineItemsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        AdvertiserID: "magni",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("veritatis"),
        Key: sdk.String("error"),
        OauthToken: sdk.String("voluptatibus"),
        OrderBy: sdk.String("numquam"),
        PageSize: sdk.Int64(700634),
        PageToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("earum"),
        UploadProtocol: sdk.String("excepturi"),
    }, operations.DisplayvideoAdvertisersLineItemsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLineItemsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsPatch

Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsPatch(ctx, operations.DisplayvideoAdvertisersLineItemsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LineItemInput: &shared.LineItemInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("molestiae"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("impedit"),
                    MaxAverageCpmBidAmountMicros: sdk.String("error"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCiva.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("voluptatum"),
                    MaxAverageCpmBidAmountMicros: sdk.String("aliquid"),
                    PerformanceGoalAmountMicros: sdk.String("nihil"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCiva.ToPointer(),
                },
            },
            Budget: &shared.LineItemBudgetInput{
                BudgetAllocationType: shared.LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeUnlimited.ToPointer(),
                MaxAmount: sdk.String("incidunt"),
            },
            ConversionCounting: &shared.ConversionCountingConfig{
                FloodlightActivityConfigs: []shared.TrackingFloodlightActivityConfig{
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("magnam"),
                        PostClickLookbackWindowDays: sdk.Int(171172),
                        PostViewLookbackWindowDays: sdk.Int(400492),
                    },
                },
                PostViewCountPercentageMillis: sdk.String("eum"),
            },
            CreativeIds: []string{
                "ad",
                "quos",
            },
            DisplayName: sdk.String("illo"),
            EntityStatus: shared.LineItemEntityStatusEnumEntityStatusArchived.ToPointer(),
            ExcludeNewExchanges: sdk.Bool(false),
            Flight: &shared.LineItemFlight{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(844471),
                        Month: sdk.Int(855484),
                        Year: sdk.Int(771603),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(632939),
                        Month: sdk.Int(543922),
                        Year: sdk.Int(913909),
                    },
                },
                FlightDateType: shared.LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeCustom.ToPointer(),
            },
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(366275),
                MaxViews: sdk.Int(72600),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitMinutes.ToPointer(),
                TimeUnitCount: sdk.Int(766670),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderID: sdk.String("expedita"),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("modi"),
                IntegrationCode: sdk.String("cumque"),
            },
            LineItemType: shared.LineItemLineItemTypeEnumLineItemTypeAudioDefault.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("occaecati"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("ipsum"),
                DailyMaxMicros: sdk.String("accusamus"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeUnspecified.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeVizu.ToPointer(),
                    FeeAmount: sdk.String("temporibus"),
                    FeePercentageMillis: sdk.String("mollitia"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PartnerRevenueModel: &shared.PartnerRevenueModel{
                MarkupAmount: sdk.String("ipsa"),
                MarkupType: shared.PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeTotalMediaCostMarkup.ToPointer(),
            },
            TargetingExpansion: &shared.TargetingExpansionConfig{
                ExcludeFirstPartyAudience: sdk.Bool(false),
                TargetingExpansionLevel: shared.TargetingExpansionConfigTargetingExpansionLevelEnumMoreExpansion.ToPointer(),
            },
            YoutubeAndPartnersSettings: &shared.YoutubeAndPartnersSettingsInput{
                BiddingStrategy: &shared.YoutubeAndPartnersBiddingStrategyInput{
                    Type: shared.YoutubeAndPartnersBiddingStrategyTypeEnumYoutubeAndPartnersBiddingStrategyTypeTargetCpa.ToPointer(),
                    Value: sdk.String("similique"),
                },
                ContentCategory: shared.YoutubeAndPartnersSettingsContentCategoryEnumYoutubeAndPartnersContentCategoryLimited.ToPointer(),
                InventorySourceSettings: &shared.YoutubeAndPartnersInventorySourceConfig{
                    IncludeYoutubeSearch: sdk.Bool(false),
                    IncludeYoutubeVideoPartners: sdk.Bool(false),
                    IncludeYoutubeVideos: sdk.Bool(false),
                },
                LeadFormID: sdk.String("saepe"),
                LinkedMerchantID: sdk.String("facere"),
                RelatedVideoIds: []string{
                    "at",
                    "molestias",
                    "aut",
                },
                TargetFrequency: &shared.TargetFrequency{
                    TargetCount: sdk.String("temporibus"),
                    TimeUnit: shared.TargetFrequencyTimeUnitEnumTimeUnitMinutes.ToPointer(),
                    TimeUnitCount: sdk.Int(278050),
                },
                ThirdPartyMeasurementSettings: &shared.YoutubeAndPartnersThirdPartyMeasurementSettings{
                    BrandLiftVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("corrupti"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("dolore"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorTelemetry.ToPointer(),
                        },
                    },
                    BrandSafetyVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("iste"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("occaecati"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorUnspecified.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("impedit"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorIntegralAdScience.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("quos"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorTelemetry.ToPointer(),
                        },
                    },
                    ReachVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("voluptatem"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("quas"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDoubleVerify.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("vero"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorZefr.ToPointer(),
                        },
                    },
                    ViewabilityVendorConfigs: []shared.ThirdPartyVendorConfig{
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("maiores"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorMeetrics.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("recusandae"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDynata.ToPointer(),
                        },
                        shared.ThirdPartyVendorConfig{
                            PlacementID: sdk.String("consectetur"),
                            Vendor: shared.ThirdPartyVendorConfigVendorEnumThirdPartyVendorDynata.ToPointer(),
                        },
                    },
                },
                VideoAdSequenceSettings: &shared.VideoAdSequenceSettings{
                    MinimumDuration: shared.VideoAdSequenceSettingsMinimumDurationEnumVideoAdSequenceMinimumDurationMonth.ToPointer(),
                    Steps: []shared.VideoAdSequenceStep{
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("repellendus"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeImpression.ToPointer(),
                            PreviousStepID: sdk.String("delectus"),
                            StepID: sdk.String("odio"),
                        },
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("voluptatibus"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeUnspecified.ToPointer(),
                            PreviousStepID: sdk.String("quam"),
                            StepID: sdk.String("omnis"),
                        },
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("similique"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypeEngagedImpression.ToPointer(),
                            PreviousStepID: sdk.String("modi"),
                            StepID: sdk.String("facere"),
                        },
                        shared.VideoAdSequenceStep{
                            AdGroupID: sdk.String("neque"),
                            InteractionType: shared.VideoAdSequenceStepInteractionTypeEnumInteractionTypePaidView.ToPointer(),
                            PreviousStepID: sdk.String("in"),
                            StepID: sdk.String("sed"),
                        },
                    },
                },
                ViewFrequencyCap: &shared.FrequencyCap{
                    MaxImpressions: sdk.Int(250621),
                    MaxViews: sdk.Int(784059),
                    TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitHours.ToPointer(),
                    TimeUnitCount: sdk.Int(743938),
                    Unlimited: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("ipsa"),
        AdvertiserID: "reiciendis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("eos"),
        Key: sdk.String("quas"),
        LineItemID: "quasi",
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UpdateMask: sdk.String("iusto"),
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("enim"),
    }, operations.DisplayvideoAdvertisersLineItemsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LineItem != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(ctx, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2124.ToPointer(),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("modi"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("magnam"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("repudiandae"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("praesentium"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("animi"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("quae"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("eveniet"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("laboriosam"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("blanditiis"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("illum"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("reiciendis"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("placeat"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("nesciunt"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("voluptas"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("quo"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("laudantium"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("omnis"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("omnis"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(1443.97),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("quidem"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("molestiae"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("debitis"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("vitae"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("dolor"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("ad"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnknown.ToPointer(),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("asperiores"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                EndHour: sdk.Int(644129),
                StartHour: sdk.Int(930127),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("eos"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierGeneral.ToPointer(),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeTvn.ToPointer(),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("tenetur"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("aspernatur"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("eligendi"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("repudiandae"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("dicta"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("ullam"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("inventore"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("voluptate"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(2096.02),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("exercitationem"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("amet"),
                ProximityRadius: sdk.Float64(4541.65),
                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("pariatur"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryTransportationAccidents.ToPointer(),
            },
            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("fuga"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterAviation,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                        },
                    },
                    CustomSegmentID: sdk.String("aliquid"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "repellendus",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraqUnspecified.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("odit"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("aliquid"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
            },
            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("numquam"),
                Negative: sdk.Bool(false),
            },
            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                VideoID: sdk.String("architecto"),
            },
        },
        AccessToken: sdk.String("est"),
        AdvertiserID: "quaerat",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("alias"),
        LineItemID: "sapiente",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeRegionalLocationList,
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(ctx, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        AdvertiserID: "distinctio",
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedTargetingOptionID: "quod",
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("sit"),
        Key: sdk.String("possimus"),
        LineItemID: "distinctio",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("assumenda"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeContentStreamType,
        UploadType: sdk.String("soluta"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a line item.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempora"),
        AdvertiserID: "esse",
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedTargetingOptionID: "corrupti",
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("aliquam"),
        LineItemID: "repudiandae",
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeApp,
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("eum"),
    }, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a line item.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        AdvertiserID: "ab",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("porro"),
        Filter: sdk.String("labore"),
        Key: sdk.String("impedit"),
        LineItemID: "ut",
        OauthToken: sdk.String("earum"),
        OrderBy: sdk.String("ullam"),
        PageSize: sdk.Int64(256813),
        PageToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeNegativeKeywordList,
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLineItemAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersList

Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersList(ctx, operations.DisplayvideoAdvertisersListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("suscipit"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("sint"),
        OrderBy: sdk.String("nobis"),
        PageSize: sdk.Int64(186130),
        PageToken: sdk.String("accusantium"),
        PartnerID: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.DisplayvideoAdvertisersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdvertisersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersListAssignedTargetingOptions

Lists assigned targeting options of an advertiser across targeting types.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersListAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersListAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("est"),
        AdvertiserID: "et",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("quos"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("in"),
        OrderBy: sdk.String("culpa"),
        PageSize: sdk.Int64(42489),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListAdvertiserAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit

Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(ctx, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditAssignedLocationsRequestInput: &shared.BulkEditAssignedLocationsRequestInput{
            CreatedAssignedLocations: []shared.AssignedLocationInput{
                shared.AssignedLocationInput{
                    TargetingOptionID: sdk.String("dignissimos"),
                },
                shared.AssignedLocationInput{
                    TargetingOptionID: sdk.String("fugit"),
                },
                shared.AssignedLocationInput{
                    TargetingOptionID: sdk.String("ratione"),
                },
                shared.AssignedLocationInput{
                    TargetingOptionID: sdk.String("possimus"),
                },
            },
            DeletedAssignedLocations: []string{
                "aut",
                "natus",
            },
        },
        AccessToken: sdk.String("esse"),
        AdvertiserID: "delectus",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("debitis"),
        LocationListID: "iste",
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("ducimus"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditAssignedLocationsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsAssignedLocationsCreate

Creates an assignment between a location and a location list.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsAssignedLocationsCreate(ctx, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssignedLocationInput: &shared.AssignedLocationInput{
            TargetingOptionID: sdk.String("libero"),
        },
        AccessToken: sdk.String("quia"),
        AdvertiserID: "omnis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("consequatur"),
        LocationListID: "amet",
        OauthToken: sdk.String("consequatur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("velit"),
    }, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedLocation != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsAssignedLocationsDelete

Deletes the assignment between a location and a location list.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsAssignedLocationsDelete(ctx, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ullam"),
        AdvertiserID: "deserunt",
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedLocationID: "distinctio",
        Callback: sdk.String("iusto"),
        Fields: sdk.String("dignissimos"),
        Key: sdk.String("provident"),
        LocationListID: "occaecati",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("vero"),
    }, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsAssignedLocationsList

Lists locations assigned to a location list.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsAssignedLocationsList(ctx, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("optio"),
        AdvertiserID: "quasi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("magnam"),
        Filter: sdk.String("perspiciatis"),
        Key: sdk.String("amet"),
        LocationListID: "corrupti",
        OauthToken: sdk.String("sunt"),
        OrderBy: sdk.String("nemo"),
        PageSize: sdk.Int64(964210),
        PageToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssignedLocationsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsCreate

Creates a new location list. Returns the newly created location list if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsCreate(ctx, operations.DisplayvideoAdvertisersLocationListsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LocationListInput: &shared.LocationListInput{
            AdvertiserID: sdk.String("quos"),
            DisplayName: sdk.String("in"),
            LocationType: shared.LocationListLocationTypeEnumTargetingLocationTypeProximity.ToPointer(),
        },
        AccessToken: sdk.String("maxime"),
        AdvertiserID: "sed",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquam"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("hic"),
    }, operations.DisplayvideoAdvertisersLocationListsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationList != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsList

Lists location lists based on a given advertiser id.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsList(ctx, operations.DisplayvideoAdvertisersLocationListsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illo"),
        AdvertiserID: "nobis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("explicabo"),
        Filter: sdk.String("sequi"),
        Key: sdk.String("alias"),
        OauthToken: sdk.String("reiciendis"),
        OrderBy: sdk.String("quos"),
        PageSize: sdk.Int64(256310),
        PageToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DisplayvideoAdvertisersLocationListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationListsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLocationListsPatch

Updates a location list. Returns the updated location list if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLocationListsPatch(ctx, operations.DisplayvideoAdvertisersLocationListsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LocationListInput: &shared.LocationListInput{
            AdvertiserID: sdk.String("assumenda"),
            DisplayName: sdk.String("eos"),
            LocationType: shared.LocationListLocationTypeEnumTargetingLocationTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("hic"),
        AdvertiserID: "repellendus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("pariatur"),
        LocationListID: "expedita",
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UpdateMask: sdk.String("recusandae"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("officia"),
    }, operations.DisplayvideoAdvertisersLocationListsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LocationList != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersActivate

Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersActivate(ctx, operations.DisplayvideoAdvertisersManualTriggersActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "corporis": "excepturi",
            "natus": "deleniti",
            "necessitatibus": "aspernatur",
        },
        AccessToken: sdk.String("dolores"),
        AdvertiserID: "laborum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eos"),
        Fields: sdk.String("voluptatem"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        TriggerID: "commodi",
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DisplayvideoAdvertisersManualTriggersActivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualTrigger != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersCreate

Creates a new manual trigger. Returns the newly created manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersCreate(ctx, operations.DisplayvideoAdvertisersManualTriggersCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ManualTriggerInput: &shared.ManualTriggerInput{
            ActivationDurationMinutes: sdk.String("nam"),
            AdvertiserID: sdk.String("quia"),
            DisplayName: sdk.String("iusto"),
        },
        AccessToken: sdk.String("ab"),
        AdvertiserID: "deserunt",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("sint"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("rem"),
    }, operations.DisplayvideoAdvertisersManualTriggersCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualTrigger != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersDeactivate

Deactivates a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersDeactivate(ctx, operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "recusandae": "omnis",
            "ipsa": "aliquam",
        },
        AccessToken: sdk.String("dolor"),
        AdvertiserID: "occaecati",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("eius"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        TriggerID: "ipsam",
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.DisplayvideoAdvertisersManualTriggersDeactivateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualTrigger != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersGet

Gets a manual trigger. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersGet(ctx, operations.DisplayvideoAdvertisersManualTriggersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nisi"),
        AdvertiserID: "explicabo",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("odio"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        TriggerID: "delectus",
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.DisplayvideoAdvertisersManualTriggersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualTrigger != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersList

Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersList(ctx, operations.DisplayvideoAdvertisersManualTriggersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ratione"),
        AdvertiserID: "molestiae",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("maiores"),
        Filter: sdk.String("accusantium"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("eos"),
        OrderBy: sdk.String("consequuntur"),
        PageSize: sdk.Int64(338514),
        PageToken: sdk.String("vitae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DisplayvideoAdvertisersManualTriggersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManualTriggersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersManualTriggersPatch

Updates a manual trigger. Returns the updated manual trigger if successful. **Warning:** Line Items using manual triggers will stop serving in Display & Video 360 on **May 17, 2023**. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersManualTriggersPatch(ctx, operations.DisplayvideoAdvertisersManualTriggersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ManualTriggerInput: &shared.ManualTriggerInput{
            ActivationDurationMinutes: sdk.String("exercitationem"),
            AdvertiserID: sdk.String("veniam"),
            DisplayName: sdk.String("modi"),
        },
        AccessToken: sdk.String("quasi"),
        AdvertiserID: "quae",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("quo"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        TriggerID: "est",
        UpdateMask: sdk.String("doloribus"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("alias"),
    }, operations.DisplayvideoAdvertisersManualTriggersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ManualTrigger != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsCreate

Creates a new negative keyword list. Returns the newly created negative keyword list if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsCreate(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        NegativeKeywordListInput: &shared.NegativeKeywordListInput{
            DisplayName: sdk.String("fugit"),
        },
        AccessToken: sdk.String("autem"),
        AdvertiserID: "quo",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("facere"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("cupiditate"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NegativeKeywordList != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsList

Lists negative keyword lists based on a given advertiser id.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsList(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        AdvertiserID: "laudantium",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("quae"),
        Key: sdk.String("facere"),
        OauthToken: sdk.String("ea"),
        PageSize: sdk.Int64(730437),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNegativeKeywordListsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit

Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditNegativeKeywordsRequestInput: &shared.BulkEditNegativeKeywordsRequestInput{
            CreatedNegativeKeywords: []shared.NegativeKeywordInput{
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("fuga"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("consectetur"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("labore"),
                },
            },
            DeletedNegativeKeywords: []string{
                "cumque",
                "adipisci",
                "veritatis",
            },
        },
        AccessToken: sdk.String("nam"),
        AdvertiserID: "voluptatibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aperiam"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("itaque"),
        NegativeKeywordListID: "necessitatibus",
        OauthToken: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditNegativeKeywordsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete

Deletes a negative keyword from a negative keyword list.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("impedit"),
        AdvertiserID: "numquam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nobis"),
        Fields: sdk.String("nihil"),
        Key: sdk.String("voluptatum"),
        KeywordValue: "reiciendis",
        NegativeKeywordListID: "vitae",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList

Lists negative keywords in a negative keyword list.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        AdvertiserID: "corrupti",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("quibusdam"),
        Filter: sdk.String("impedit"),
        Key: sdk.String("ducimus"),
        NegativeKeywordListID: "nisi",
        OauthToken: sdk.String("nisi"),
        OrderBy: sdk.String("dolor"),
        PageSize: sdk.Int64(143976),
        PageToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListNegativeKeywordsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace

Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReplaceNegativeKeywordsRequestInput: &shared.ReplaceNegativeKeywordsRequestInput{
            NewNegativeKeywords: []shared.NegativeKeywordInput{
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("impedit"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("totam"),
                },
            },
        },
        AccessToken: sdk.String("optio"),
        AdvertiserID: "est",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("sit"),
        NegativeKeywordListID: "dolores",
        OauthToken: sdk.String("enim"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("perspiciatis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReplaceNegativeKeywordsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersNegativeKeywordListsPatch

Updates a negative keyword list. Returns the updated negative keyword list if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersNegativeKeywordListsPatch(ctx, operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NegativeKeywordListInput: &shared.NegativeKeywordListInput{
            DisplayName: sdk.String("alias"),
        },
        AccessToken: sdk.String("quidem"),
        AdvertiserID: "deleniti",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("odio"),
        Key: sdk.String("fugit"),
        NegativeKeywordListID: "aspernatur",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illum"),
        UpdateMask: sdk.String("praesentium"),
        UploadType: sdk.String("sint"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NegativeKeywordList != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersPatch

Updates an existing advertiser. Returns the updated advertiser if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersPatch(ctx, operations.DisplayvideoAdvertisersPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AdvertiserInput: &shared.AdvertiserInput{
            AdServerConfig: &shared.AdvertiserAdServerConfig{
                CmHybridConfig: &shared.CmHybridConfig{
                    CmAccountID: sdk.String("voluptatum"),
                    CmFloodlightConfigID: sdk.String("facilis"),
                    CmFloodlightLinkingAuthorized: sdk.Bool(false),
                    CmSyncableSiteIds: []string{
                        "reiciendis",
                        "dolores",
                        "dolore",
                        "pariatur",
                    },
                    Dv360ToCmCostReportingEnabled: sdk.Bool(false),
                    Dv360ToCmDataSharingEnabled: sdk.Bool(false),
                },
                ThirdPartyOnlyConfig: &shared.ThirdPartyOnlyConfig{
                    PixelOrderIDReportingEnabled: sdk.Bool(false),
                },
            },
            BillingConfig: &shared.AdvertiserBillingConfig{
                BillingProfileID: sdk.String("facilis"),
            },
            CreativeConfig: &shared.AdvertiserCreativeConfig{
                DynamicCreativeEnabled: sdk.Bool(false),
                IasClientID: sdk.String("cupiditate"),
                ObaComplianceDisabled: sdk.Bool(false),
                VideoCreativeDataSharingAuthorized: sdk.Bool(false),
            },
            DataAccessConfig: &shared.AdvertiserDataAccessConfig{
                SdfConfig: &shared.AdvertiserSdfConfig{
                    OverridePartnerSdfConfig: sdk.Bool(false),
                    SdfConfig: &shared.SdfConfig{
                        AdminEmail: sdk.String("nemo"),
                        Version: shared.SdfConfigVersionEnumSdfVersion51.ToPointer(),
                    },
                },
            },
            DisplayName: sdk.String("nisi"),
            EntityStatus: shared.AdvertiserEntityStatusEnumEntityStatusDraft.ToPointer(),
            GeneralConfig: &shared.AdvertiserGeneralConfigInput{
                CurrencyCode: sdk.String("amet"),
                DomainURL: sdk.String("dolor"),
            },
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("nostrum"),
                IntegrationCode: sdk.String("qui"),
            },
            PartnerID: sdk.String("tenetur"),
            PrismaEnabled: sdk.Bool(false),
            ServingConfig: &shared.AdvertiserTargetingConfig{
                ExemptTvFromViewabilityTargeting: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("molestiae"),
        AdvertiserID: "dolore",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UpdateMask: sdk.String("fugiat"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DisplayvideoAdvertisersPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Advertiser != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(ctx, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5559.ToPointer(),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("amet"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("distinctio"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAmazonFiretv.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("iste"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("corrupti"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("voluptatibus"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("dolorum"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("in"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("delectus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("commodi"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("fugit"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("ullam"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("doloremque"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("est"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("adipisci"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("qui"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("eligendi"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("dolor"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("est"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("reiciendis"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("odit"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("consectetur"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(809.98),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("facilis"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("facilis"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("deserunt"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("nisi"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("ipsam"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("voluptatem"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified.ToPointer(),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("incidunt"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                EndHour: sdk.Int(62224),
                StartHour: sdk.Int(409021),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("veniam"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierFamilies.ToPointer(),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeYieldlab.ToPointer(),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("nemo"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("architecto"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("expedita"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("quisquam"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("praesentium"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("assumenda"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("maiores"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("ipsum"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(1149.24),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("nam"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("ex"),
                ProximityRadius: sdk.Float64(2033.96),
                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("eos"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryUnspecified.ToPointer(),
            },
            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("a"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Point5Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumOccult,
                        },
                    },
                    CustomSegmentID: sdk.String("illum"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud25.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance10PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "vel",
                        "delectus",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq250.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("incidunt"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("dolores"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability40PercentOrMore.ToPointer(),
            },
            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("libero"),
                Negative: sdk.Bool(false),
            },
            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                VideoID: sdk.String("omnis"),
            },
        },
        AccessToken: sdk.String("excepturi"),
        AdvertiserID: "eos",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("corrupti"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeThirdPartyVerifier,
        UploadType: sdk.String("similique"),
        UploadProtocol: sdk.String("autem"),
    }, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from an advertiser.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(ctx, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("recusandae"),
        AdvertiserID: "sapiente",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "odit",
        Callback: sdk.String("inventore"),
        Fields: sdk.String("iste"),
        Key: sdk.String("atque"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeDeviceMakeModel,
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("pariatur"),
    }, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to an advertiser.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("similique"),
        AdvertiserID: "iste",
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedTargetingOptionID: "nam",
        Callback: sdk.String("animi"),
        Fields: sdk.String("labore"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quam"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeNativeContentPosition,
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to an advertiser.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        AdvertiserID: "quaerat",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("dolore"),
        Filter: sdk.String("voluptatem"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("laboriosam"),
        OrderBy: sdk.String("culpa"),
        PageSize: sdk.Int64(116705),
        PageToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ratione"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeDayAndTime,
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("atque"),
    }, operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAdvertiserAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupAdsGet

Gets a YouTube ad group ad.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupAdsGet(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        AdvertiserID: "temporibus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("ab"),
        YoutubeAdGroupAdID: "mollitia",
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupAdsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.YoutubeAdGroupAd != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupAdsList

Lists YouTube ad group ads.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupAdsList(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("praesentium"),
        AdvertiserID: "neque",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("animi"),
        Fields: sdk.String("debitis"),
        Filter: sdk.String("voluptatum"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("quisquam"),
        OrderBy: sdk.String("vitae"),
        PageSize: sdk.Int64(766498),
        PageToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sint"),
        UploadType: sdk.String("eligendi"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupAdsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListYoutubeAdGroupAdsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions

Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("tempore"),
        AdvertiserID: "officia",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("quas"),
        Filter: sdk.String("laboriosam"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("voluptatum"),
        OrderBy: sdk.String("sapiente"),
        PageSize: sdk.Int64(645139),
        PageToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("sint"),
        YoutubeAdGroupIds: []string{
            "iste",
            "cupiditate",
        },
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListAdGroupAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupsGet

Gets a YouTube ad group.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupsGet(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("fuga"),
        AdvertiserID: "a",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("repudiandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("autem"),
        YoutubeAdGroupID: "vitae",
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.YoutubeAdGroup != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupsList

Lists YouTube ad groups.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupsList(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("incidunt"),
        AdvertiserID: "modi",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minus"),
        Fields: sdk.String("voluptate"),
        Filter: sdk.String("error"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("reprehenderit"),
        OrderBy: sdk.String("animi"),
        PageSize: sdk.Int64(10585),
        PageToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListYoutubeAdGroupsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("ipsum"),
        AdvertiserID: "laboriosam",
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedTargetingOptionID: "sed",
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("debitis"),
        Key: sdk.String("a"),
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eveniet"),
        TargetingType: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeSessionPosition,
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("adipisci"),
        YoutubeAdGroupID: "aliquam",
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignedTargetingOption != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.

### Example Usage

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
    res, err := s.Advertisers.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        AdvertiserID: "sed",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("dignissimos"),
        Filter: sdk.String("itaque"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("ullam"),
        OrderBy: sdk.String("non"),
        PageSize: sdk.Int64(962497),
        PageToken: sdk.String("incidunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        TargetingType: operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAgeRange,
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("quam"),
        YoutubeAdGroupID: "illum",
    }, operations.DisplayvideoAdvertisersYoutubeAdGroupsTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListYoutubeAdGroupAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```
