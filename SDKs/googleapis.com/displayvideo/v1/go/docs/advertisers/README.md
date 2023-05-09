# Advertisers

### Available Operations

* [DisplayvideoAdvertisersAssetsUpload](#displayvideoadvertisersassetsupload) - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
* [DisplayvideoAdvertisersAudit](#displayvideoadvertisersaudit) - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
* [DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions](#displayvideoadvertisersbulkeditadvertiserassignedtargetingoptions) - Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
* [DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions](#displayvideoadvertisersbulklistadvertiserassignedtargetingoptions) - Lists assigned targeting options of an advertiser across targeting types.
* [DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions](#displayvideoadvertiserscampaignsbulklistcampaignassignedtargetingoptions) - Lists assigned targeting options of a campaign across targeting types.
* [DisplayvideoAdvertisersCampaignsCreate](#displayvideoadvertiserscampaignscreate) - Creates a new campaign. Returns the newly created campaign if successful.
* [DisplayvideoAdvertisersCampaignsDelete](#displayvideoadvertiserscampaignsdelete) - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersCampaignsGet](#displayvideoadvertiserscampaignsget) - Gets a campaign.
* [DisplayvideoAdvertisersCampaignsList](#displayvideoadvertiserscampaignslist) - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
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
* [DisplayvideoAdvertisersGet](#displayvideoadvertisersget) - Gets an advertiser.
* [DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions](#displayvideoadvertisersinsertionordersbulklistinsertionorderassignedtargetingoptions) - Lists assigned targeting options of an insertion order across targeting types.
* [DisplayvideoAdvertisersInsertionOrdersCreate](#displayvideoadvertisersinsertionorderscreate) - Creates a new insertion order. Returns the newly created insertion order if successful.
* [DisplayvideoAdvertisersInsertionOrdersDelete](#displayvideoadvertisersinsertionordersdelete) - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersInsertionOrdersGet](#displayvideoadvertisersinsertionordersget) - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
* [DisplayvideoAdvertisersInsertionOrdersList](#displayvideoadvertisersinsertionorderslist) - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersInsertionOrdersPatch](#displayvideoadvertisersinsertionorderspatch) - Updates an existing insertion order. Returns the updated insertion order if successful.
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to an insertion order.
* [DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertisersinsertionorderstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to an insertion order.
* [DisplayvideoAdvertisersInvoicesList](#displayvideoadvertisersinvoiceslist) - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
* [DisplayvideoAdvertisersInvoicesLookupInvoiceCurrency](#displayvideoadvertisersinvoiceslookupinvoicecurrency) - Retrieves the invoice currency used by an advertiser in a given month.
* [DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulkeditlineitemassignedtargetingoptions) - Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions](#displayvideoadvertiserslineitemsbulklistlineitemassignedtargetingoptions) - Lists assigned targeting options of a line item across targeting types.
* [DisplayvideoAdvertisersLineItemsCreate](#displayvideoadvertiserslineitemscreate) - Creates a new line item. Returns the newly created line item if successful.
* [DisplayvideoAdvertisersLineItemsDelete](#displayvideoadvertiserslineitemsdelete) - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
* [DisplayvideoAdvertisersLineItemsGenerateDefault](#displayvideoadvertiserslineitemsgeneratedefault) - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
* [DisplayvideoAdvertisersLineItemsGet](#displayvideoadvertiserslineitemsget) - Gets a line item.
* [DisplayvideoAdvertisersLineItemsList](#displayvideoadvertiserslineitemslist) - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
* [DisplayvideoAdvertisersLineItemsPatch](#displayvideoadvertiserslineitemspatch) - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a line item.
* [DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList](#displayvideoadvertiserslineitemstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a line item.
* [DisplayvideoAdvertisersList](#displayvideoadvertiserslist) - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
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

## DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions

Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .

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
    res, err := s.Advertisers.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditAdvertiserAssignedTargetingOptionsRequestInput: &shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("quod"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformSamsungTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("totam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dolorum"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("officia"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("occaecati"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("fugit"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("hic"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("optio"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("totam"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("commodi"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("qui"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("cum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("excepturi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ad"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                                TargetingOptionID: sdk.String("sed"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("iste"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6169.34),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("hic"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fuga"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("in"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("corporis"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iste"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ipsa"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(666767),
                                StartHour: sdk.Int(653140),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolores"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                                TargetingOptionID: sdk.String("corporis"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("explicabo"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                                TargetingOptionID: sdk.String("enim"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("omnis"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                                TargetingOptionID: sdk.String("minima"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("excepturi"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("iure"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("culpa"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("doloribus"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("sapiente"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("dolorem"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("culpa"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("mollitia"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("commodi"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4663.11),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("velit"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("error"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("quis"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("vitae"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("laborum"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
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
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("vero"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X300Unspecified.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "perferendis",
                                        "doloremque",
                                        "reprehenderit",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("quae"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quidem"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("excepturi"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534.ToPointer(),
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rem"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("voluptates"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sint"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("itaque"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("enim"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("est"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("deserunt"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quibusdam"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("labore"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("modi"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("aliquid"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("perferendis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("assumenda"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("alias"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("excepturi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("facilis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("labore"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("non"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sint"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("necessitatibus"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("sint"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("officia"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("debitis"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("a"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolorum"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4471.25),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("illum"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rerum"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("dicta"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cumque"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("ea"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("laborum"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(581273),
                                StartHour: sdk.Int(313218),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                                TargetingOptionID: sdk.String("provident"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("nam"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("deleniti"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("amet"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("vel"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("natus"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("omnis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("molestiae"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("perferendis"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("distinctio"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("labore"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("labore"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("suscipit"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                                TargetingOptionID: sdk.String("nobis"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4287.69),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("aspernatur"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("architecto"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("et"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("excepturi"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("ullam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNonEnglish,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("facilis"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance25PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "repellat",
                                        "quibusdam",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq875.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("maxime"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ea"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("excepturi"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("ea"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewabilityUnspecified.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("ipsam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAmazonFiretv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("nam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("pariatur"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("perferendis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("fugiat"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("amet"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aut"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("corporis"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("hic"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("libero"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nobis"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quis"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eaque"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nesciunt"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dolores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dolor"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nostrum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("omnis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("facilis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("perspiciatis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatem"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("error"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(503.7),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("rerum"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("adipisci"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("earum"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("modi"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iste"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                                TargetingOptionID: sdk.String("deleniti"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial.ToPointer(),
                                TargetingOptionID: sdk.String("provident"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nobis"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday.ToPointer(),
                                EndHour: sdk.Int(964490),
                                StartHour: sdk.Int(311945),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                                TargetingOptionID: sdk.String("dolorem"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("dolor"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("hic"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("cum"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptate"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("amet"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("dolorum"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("numquam"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("ipsa"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("iure"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quaerat"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("voluptas"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6176.58),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("atque"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("sit"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("ab"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("soluta"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("dolorum"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumInflammatoryPoliticsAndNews,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("perferendis"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate75PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "provident",
                                        "minima",
                                        "repellendus",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq750.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("esse"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("harum"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("iusto"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quisquam"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability90PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1824.ToPointer(),
                                TargetingOptionID: sdk.String("tempore"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("numquam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformRoku.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sapiente"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("sit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("expedita"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("sed"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("libero"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("voluptas"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ipsum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("qui"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("pariatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dicta"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("totam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aspernatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("facilis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("temporibus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("fugit"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("sunt"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ullam"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7220.81),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cumque"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("soluta"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("nobis"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("et"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("quos"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("tempore"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday.ToPointer(),
                                EndHour: sdk.Int(45614),
                                StartHour: sdk.Int(961937),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolore"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                                TargetingOptionID: sdk.String("adipisci"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("dolorum"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quae"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("aut"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("consequatur"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("porro"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("doloribus"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("ut"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("facilis"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("qui"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("quae"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptatibus"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("vero"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6064.76),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("delectus"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("consectetur"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("vero"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("tenetur"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterVehicle,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("impedit"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud25.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability80PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "doloribus",
                                        "iusto",
                                        "eligendi",
                                        "ducimus",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("dicta"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("maiores"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("ex"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeDeviceMakeModel.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "sapiente",
                        "quisquam",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeContentStreamType.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "impedit",
                        "corporis",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeDeviceType.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "inventore",
                        "magnam",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeHouseholdIncome.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "consectetur",
                        "recusandae",
                        "aspernatur",
                        "minima",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAppCategory.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("a"),
        AdvertiserID: "libero",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity{
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

## DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions

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
    res, err := s.Advertisers.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        AdvertiserID: "dolorum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("velit"),
        Filter: sdk.String("eum"),
        Key: sdk.String("autem"),
        OauthToken: sdk.String("nobis"),
        OrderBy: sdk.String("quas"),
        PageSize: sdk.Int64(829603),
        PageToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity{
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

## DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions

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
    res, err := s.Advertisers.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("numquam"),
        AdvertiserID: "explicabo",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        CampaignID: "molestiae",
        Fields: sdk.String("magnam"),
        Filter: sdk.String("odio"),
        Key: sdk.String("eius"),
        OauthToken: sdk.String("esse"),
        OrderBy: sdk.String("esse"),
        PageSize: sdk.Int64(524593),
        PageToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("fugiat"),
    }, operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity{
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CampaignInput: &shared.CampaignInput{
            CampaignBudgets: []shared.CampaignBudget{
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("suscipit"),
                    BudgetID: sdk.String("assumenda"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitUnspecified.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(509342),
                            Month: sdk.Int(788546),
                            Year: sdk.Int(86377),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(56848),
                            Month: sdk.Int(660040),
                            Year: sdk.Int(696997),
                        },
                    },
                    DisplayName: sdk.String("neque"),
                    ExternalBudgetID: sdk.String("quo"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceMediaOcean.ToPointer(),
                    InvoiceGroupingID: sdk.String("quo"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("fuga"),
                            PrismaEstimateCode: sdk.String("eius"),
                            PrismaProductCode: sdk.String("eos"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeSearch.ToPointer(),
                        Supplier: sdk.String("ab"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("cupiditate"),
                    BudgetID: sdk.String("consequatur"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitUnspecified.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(892050),
                            Month: sdk.Int(370853),
                            Year: sdk.Int(133465),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(197054),
                            Month: sdk.Int(779192),
                            Year: sdk.Int(459856),
                        },
                    },
                    DisplayName: sdk.String("recusandae"),
                    ExternalBudgetID: sdk.String("aperiam"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceMediaOcean.ToPointer(),
                    InvoiceGroupingID: sdk.String("quod"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("dignissimos"),
                            PrismaEstimateCode: sdk.String("inventore"),
                            PrismaProductCode: sdk.String("nihil"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeVideo.ToPointer(),
                        Supplier: sdk.String("accusamus"),
                    },
                },
            },
            CampaignFlight: &shared.CampaignFlight{
                PlannedDates: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(306810),
                        Month: sdk.Int(488410),
                        Year: sdk.Int(577543),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(414567),
                        Month: sdk.Int(959434),
                        Year: sdk.Int(174112),
                    },
                },
                PlannedSpendAmountMicros: sdk.String("deserunt"),
            },
            CampaignGoal: &shared.CampaignGoal{
                CampaignGoalType: shared.CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeBrandAwareness.ToPointer(),
                PerformanceGoal: &shared.PerformanceGoal{
                    PerformanceGoalAmountMicros: sdk.String("accusantium"),
                    PerformanceGoalPercentageMicros: sdk.String("porro"),
                    PerformanceGoalString: sdk.String("eum"),
                    PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeClickCvr.ToPointer(),
                },
            },
            DisplayName: sdk.String("praesentium"),
            EntityStatus: shared.CampaignEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(536178),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitLifetime.ToPointer(),
                TimeUnitCount: sdk.Int(681393),
                Unlimited: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("mollitia"),
        AdvertiserID: "incidunt",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("minima"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("saepe"),
        AdvertiserID: "occaecati",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("et"),
        CampaignID: "esse",
        Fields: sdk.String("eveniet"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("nam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        AdvertiserID: "quasi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        CampaignID: "harum",
        Fields: sdk.String("molestiae"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("eligendi"),
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
        AdvertiserID: "tempore",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("consequuntur"),
        Filter: sdk.String("consequatur"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("quaerat"),
        OrderBy: sdk.String("sapiente"),
        PageSize: sdk.Int64(232865),
        PageToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("a"),
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
                    BudgetAmountMicros: sdk.String("esse"),
                    BudgetID: sdk.String("quasi"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitImpressions.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(621679),
                            Month: sdk.Int(575751),
                            Year: sdk.Int(863023),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(820767),
                            Month: sdk.Int(157632),
                            Year: sdk.Int(908844),
                        },
                    },
                    DisplayName: sdk.String("asperiores"),
                    ExternalBudgetID: sdk.String("facere"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("consequuntur"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("quasi"),
                            PrismaEstimateCode: sdk.String("similique"),
                            PrismaProductCode: sdk.String("culpa"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeSearch.ToPointer(),
                        Supplier: sdk.String("tenetur"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("quae"),
                    BudgetID: sdk.String("earum"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(447378),
                            Month: sdk.Int(258684),
                            Year: sdk.Int(727697),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(849039),
                            Month: sdk.Int(742238),
                            Year: sdk.Int(33304),
                        },
                    },
                    DisplayName: sdk.String("aliquam"),
                    ExternalBudgetID: sdk.String("sapiente"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("ullam"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("reprehenderit"),
                            PrismaEstimateCode: sdk.String("ullam"),
                            PrismaProductCode: sdk.String("nisi"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeUnspecified.ToPointer(),
                        Supplier: sdk.String("voluptatum"),
                    },
                },
                shared.CampaignBudget{
                    BudgetAmountMicros: sdk.String("qui"),
                    BudgetID: sdk.String("quibusdam"),
                    BudgetUnit: shared.CampaignBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
                    DateRange: &shared.DateRange{
                        EndDate: &shared.Date{
                            Day: sdk.Int(536275),
                            Month: sdk.Int(929292),
                            Year: sdk.Int(680270),
                        },
                        StartDate: &shared.Date{
                            Day: sdk.Int(99615),
                            Month: sdk.Int(609178),
                            Year: sdk.Int(945302),
                        },
                    },
                    DisplayName: sdk.String("quasi"),
                    ExternalBudgetID: sdk.String("at"),
                    ExternalBudgetSource: shared.CampaignBudgetExternalBudgetSourceEnumExternalBudgetSourceUnspecified.ToPointer(),
                    InvoiceGroupingID: sdk.String("voluptate"),
                    PrismaConfig: &shared.PrismaConfig{
                        PrismaCpeCode: &shared.PrismaCpeCode{
                            PrismaClientCode: sdk.String("ipsa"),
                            PrismaEstimateCode: sdk.String("minima"),
                            PrismaProductCode: sdk.String("veritatis"),
                        },
                        PrismaType: shared.PrismaConfigPrismaTypeEnumPrismaTypeDisplay.ToPointer(),
                        Supplier: sdk.String("adipisci"),
                    },
                },
            },
            CampaignFlight: &shared.CampaignFlight{
                PlannedDates: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(614465),
                        Month: sdk.Int(839513),
                        Year: sdk.Int(33074),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(522371),
                        Month: sdk.Int(15606),
                        Year: sdk.Int(513075),
                    },
                },
                PlannedSpendAmountMicros: sdk.String("eum"),
            },
            CampaignGoal: &shared.CampaignGoal{
                CampaignGoalType: shared.CampaignGoalCampaignGoalTypeEnumCampaignGoalTypeOfflineAction.ToPointer(),
                PerformanceGoal: &shared.PerformanceGoal{
                    PerformanceGoalAmountMicros: sdk.String("ab"),
                    PerformanceGoalPercentageMicros: sdk.String("corrupti"),
                    PerformanceGoalString: sdk.String("non"),
                    PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeUnspecified.ToPointer(),
                },
            },
            DisplayName: sdk.String("dolor"),
            EntityStatus: shared.CampaignEntityStatusEnumEntityStatusDraft.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(253191),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitHours.ToPointer(),
                TimeUnitCount: sdk.Int(131055),
                Unlimited: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("voluptas"),
        AdvertiserID: "aut",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dicta"),
        CampaignID: "maiores",
        Fields: sdk.String("natus"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        UpdateMask: sdk.String("asperiores"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("ea"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        AdvertiserID: "repellendus",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "maxime",
        Callback: sdk.String("dignissimos"),
        CampaignID: "officia",
        Fields: sdk.String("asperiores"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quaerat"),
        TargetingType: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeExchange,
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("labore"),
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
        AccessToken: sdk.String("adipisci"),
        AdvertiserID: "fuga",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("suscipit"),
        CampaignID: "velit",
        Fields: sdk.String("culpa"),
        Filter: sdk.String("est"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("totam"),
        OrderBy: sdk.String("fugiat"),
        PageSize: sdk.Int64(424089),
        PageToken: sdk.String("ducimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        TargetingType: operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeOnScreenPosition,
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("possimus"),
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
            AdvertiserID: sdk.String("cum"),
            DisplayName: sdk.String("commodi"),
            PartnerID: sdk.String("in"),
        },
        AccessToken: sdk.String("corporis"),
        AdvertiserID: "reiciendis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("aliquid"),
        OauthToken: sdk.String("aperiam"),
        PartnerID: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("exercitationem"),
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
        AccessToken: sdk.String("facere"),
        AdvertiserID: "numquam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("quidem"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("necessitatibus"),
        OrderBy: sdk.String("dolore"),
        PageSize: sdk.Int64(121059),
        PageToken: sdk.String("asperiores"),
        PartnerID: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("beatae"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("a"),
            DisplayName: sdk.String("debitis"),
            PartnerID: sdk.String("consectetur"),
        },
        AccessToken: sdk.String("corporis"),
        AdvertiserID: "harum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        ChannelID: "voluptates",
        Fields: sdk.String("libero"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("accusamus"),
        PartnerID: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UpdateMask: sdk.String("aspernatur"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("voluptas"),
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
            AdvertiserID: sdk.String("minima"),
            CreatedSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("dolorum"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("adipisci"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("minus"),
                },
            },
            DeletedSites: []string{
                "blanditiis",
            },
            PartnerID: sdk.String("in"),
        },
        AccessToken: sdk.String("dolore"),
        AdvertiserID: "aliquam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("temporibus"),
        ChannelID: "ullam",
        Fields: sdk.String("adipisci"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("hic"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("corrupti"),
        AdvertiserID: "pariatur",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        ChannelID: "exercitationem",
        Fields: sdk.String("nobis"),
        Key: sdk.String("sit"),
        OauthToken: sdk.String("rerum"),
        PartnerID: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("asperiores"),
        URLOrAppID: "facilis",
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("expedita"),
        AdvertiserID: "ab",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        ChannelID: "laborum",
        Fields: sdk.String("sed"),
        Filter: sdk.String("in"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("quidem"),
        OrderBy: sdk.String("explicabo"),
        PageSize: sdk.Int64(378326),
        PageToken: sdk.String("unde"),
        PartnerID: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReplaceSitesRequestInput: &shared.ReplaceSitesRequestInput{
            AdvertiserID: sdk.String("reiciendis"),
            NewSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("corrupti"),
                },
            },
            PartnerID: sdk.String("maiores"),
        },
        AccessToken: sdk.String("incidunt"),
        AdvertiserID: "sed",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        ChannelID: "necessitatibus",
        Fields: sdk.String("ipsum"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("occaecati"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("tempora"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AdvertiserInput: &shared.AdvertiserInput{
            AdServerConfig: &shared.AdvertiserAdServerConfig{
                CmHybridConfig: &shared.CmHybridConfig{
                    CmAccountID: sdk.String("voluptate"),
                    CmFloodlightConfigID: sdk.String("reiciendis"),
                    CmFloodlightLinkingAuthorized: sdk.Bool(false),
                    CmSyncableSiteIds: []string{
                        "sit",
                        "non",
                    },
                    Dv360ToCmCostReportingEnabled: sdk.Bool(false),
                    Dv360ToCmDataSharingEnabled: sdk.Bool(false),
                },
                ThirdPartyOnlyConfig: &shared.ThirdPartyOnlyConfig{
                    PixelOrderIDReportingEnabled: sdk.Bool(false),
                },
            },
            CreativeConfig: &shared.AdvertiserCreativeConfig{
                DynamicCreativeEnabled: sdk.Bool(false),
                IasClientID: sdk.String("officiis"),
                ObaComplianceDisabled: sdk.Bool(false),
                VideoCreativeDataSharingAuthorized: sdk.Bool(false),
            },
            DataAccessConfig: &shared.AdvertiserDataAccessConfig{
                SdfConfig: &shared.AdvertiserSdfConfig{
                    OverridePartnerSdfConfig: sdk.Bool(false),
                    SdfConfig: &shared.SdfConfig{
                        AdminEmail: sdk.String("praesentium"),
                        Version: shared.SdfConfigVersionEnumSdfVersion52.ToPointer(),
                    },
                },
            },
            DisplayName: sdk.String("quaerat"),
            EntityStatus: shared.AdvertiserEntityStatusEnumEntityStatusActive.ToPointer(),
            GeneralConfig: &shared.AdvertiserGeneralConfigInput{
                CurrencyCode: sdk.String("ipsam"),
                DomainURL: sdk.String("debitis"),
            },
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("rem"),
                IntegrationCode: sdk.String("sit"),
            },
            PartnerID: sdk.String("nobis"),
            PrismaEnabled: sdk.Bool(false),
            ServingConfig: &shared.AdvertiserTargetingConfig{
                ExemptTvFromViewabilityTargeting: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magni"),
        UploadType: sdk.String("aperiam"),
        UploadProtocol: sdk.String("saepe"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreativeInput: &shared.CreativeInput{
            AdditionalDimensions: []shared.Dimensions{
                shared.Dimensions{
                    HeightPixels: sdk.Int(446135),
                    WidthPixels: sdk.Int(889234),
                },
                shared.Dimensions{
                    HeightPixels: sdk.Int(104627),
                    WidthPixels: sdk.Int(512452),
                },
            },
            AppendedTag: sdk.String("exercitationem"),
            Assets: []shared.AssetAssociation{
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("cum"),
                        MediaID: sdk.String("laboriosam"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRolePrice.ToPointer(),
                },
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("voluptatum"),
                        MediaID: sdk.String("error"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRoleCoverImage.ToPointer(),
                },
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("expedita"),
                        MediaID: sdk.String("debitis"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRolePoliteLoad.ToPointer(),
                },
            },
            CmTrackingAd: &shared.CmTrackingAd{
                CmAdID: sdk.String("dolorum"),
                CmCreativeID: sdk.String("nostrum"),
                CmPlacementID: sdk.String("officia"),
            },
            CompanionCreativeIds: []string{
                "corrupti",
                "accusamus",
                "tempora",
            },
            CounterEvents: []shared.CounterEvent{
                shared.CounterEvent{
                    Name: sdk.String("Miss April Stiedemann"),
                    ReportingName: sdk.String("magnam"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Ms. Georgia Hintz"),
                    ReportingName: sdk.String("repudiandae"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Janet Kuvalis"),
                    ReportingName: sdk.String("sit"),
                },
            },
            CreativeType: shared.CreativeCreativeTypeEnumCreativeTypeNativeSiteSquare.ToPointer(),
            Dimensions: &shared.Dimensions{
                HeightPixels: sdk.Int(342611),
                WidthPixels: sdk.Int(906172),
            },
            DisplayName: sdk.String("error"),
            EntityStatus: shared.CreativeEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            ExitEvents: []shared.ExitEvent{
                shared.ExitEvent{
                    Name: sdk.String("Mr. Mike Pollich"),
                    ReportingName: sdk.String("labore"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("atque"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Marco White I"),
                    ReportingName: sdk.String("deserunt"),
                    Type: shared.ExitEventTypeEnumExitEventTypeDefault.ToPointer(),
                    URL: sdk.String("unde"),
                },
            },
            ExpandOnHover: sdk.Bool(false),
            ExpandingDirection: shared.CreativeExpandingDirectionEnumExpandingDirectionAnyDiagonal.ToPointer(),
            HostingSource: shared.CreativeHostingSourceEnumHostingSourceThirdParty.ToPointer(),
            IasCampaignMonitoring: sdk.Bool(false),
            IntegrationCode: sdk.String("repellendus"),
            JsTrackerURL: sdk.String("delectus"),
            Notes: sdk.String("voluptates"),
            ObaIcon: &shared.ObaIcon{
                ClickTrackingURL: sdk.String("perferendis"),
                Dimensions: &shared.Dimensions{
                    HeightPixels: sdk.Int(667285),
                    WidthPixels: sdk.Int(696483),
                },
                LandingPageURL: sdk.String("reprehenderit"),
                Position: shared.ObaIconPositionEnumObaIconPositionLowerLeft.ToPointer(),
                Program: sdk.String("fuga"),
                ResourceMimeType: sdk.String("praesentium"),
                ResourceURL: sdk.String("mollitia"),
                ViewTrackingURL: sdk.String("veniam"),
            },
            ProgressOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("voluptatem"),
                Seconds: sdk.String("quisquam"),
            },
            RequireHtml5: sdk.Bool(false),
            RequireMraid: sdk.Bool(false),
            RequirePingForAttribution: sdk.Bool(false),
            ReviewStatus: &shared.ReviewStatusInfo{
                ApprovalStatus: shared.ReviewStatusInfoApprovalStatusEnumApprovalStatusRejectedNotServable.ToPointer(),
                ContentAndPolicyReviewStatus: shared.ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusUnspecified.ToPointer(),
                CreativeAndLandingPageReviewStatus: shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusRejected.ToPointer(),
                ExchangeReviewStatuses: []shared.ExchangeReviewStatus{
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeHivestack.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeOneByAolVideo.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                },
                PublisherReviewStatuses: []shared.PublisherReviewStatus{
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("et"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("amet"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("ea"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("error"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusPending.ToPointer(),
                    },
                },
            },
            SkipOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("officiis"),
                Seconds: sdk.String("accusamus"),
            },
            Skippable: sdk.Bool(false),
            ThirdPartyTag: sdk.String("natus"),
            ThirdPartyUrls: []shared.ThirdPartyURL{
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeClickTracking.ToPointer(),
                    URL: sdk.String("ex"),
                },
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoProgress.ToPointer(),
                    URL: sdk.String("corrupti"),
                },
            },
            TimerEvents: []shared.TimerEvent{
                shared.TimerEvent{
                    Name: sdk.String("Guy Hoeger"),
                    ReportingName: sdk.String("atque"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Delia Parisian"),
                    ReportingName: sdk.String("reiciendis"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Mr. Elvira Buckridge"),
                    ReportingName: sdk.String("enim"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Sheila Wilderman"),
                    ReportingName: sdk.String("saepe"),
                },
            },
            TrackerUrls: []string{
                "occaecati",
            },
            UniversalAdID: &shared.UniversalAdID{
                ID: sdk.String("e973e922-a57a-415b-a3e0-60807e2b6e3a"),
                Registry: shared.UniversalAdIDRegistryEnumUniversalAdRegistryDv360.ToPointer(),
            },
            VastTagURL: sdk.String("voluptatum"),
        },
        AccessToken: sdk.String("rem"),
        AdvertiserID: "aliquam",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("alias"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("perspiciatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("voluptas"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        AdvertiserID: "reiciendis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        CreativeID: "minima",
        Fields: sdk.String("dolore"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
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
        AccessToken: sdk.String("molestiae"),
        AdvertiserID: "ex",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        CreativeID: "adipisci",
        Fields: sdk.String("debitis"),
        Key: sdk.String("laudantium"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("esse"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quis"),
        AdvertiserID: "eum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("aspernatur"),
        Filter: sdk.String("ullam"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("animi"),
        OrderBy: sdk.String("nostrum"),
        PageSize: sdk.Int64(652309),
        PageToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("animi"),
        UploadProtocol: sdk.String("ex"),
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
                    HeightPixels: sdk.Int(999278),
                    WidthPixels: sdk.Int(984632),
                },
            },
            AppendedTag: sdk.String("ullam"),
            Assets: []shared.AssetAssociation{
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("nam"),
                        MediaID: sdk.String("earum"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRoleAdvertiserName.ToPointer(),
                },
                shared.AssetAssociation{
                    Asset: &shared.Asset{
                        Content: sdk.String("laborum"),
                        MediaID: sdk.String("placeat"),
                    },
                    Role: shared.AssetAssociationRoleEnumAssetRoleHeadline.ToPointer(),
                },
            },
            CmTrackingAd: &shared.CmTrackingAd{
                CmAdID: sdk.String("voluptatibus"),
                CmCreativeID: sdk.String("molestias"),
                CmPlacementID: sdk.String("officiis"),
            },
            CompanionCreativeIds: []string{
                "cumque",
                "vitae",
                "rerum",
                "tempora",
            },
            CounterEvents: []shared.CounterEvent{
                shared.CounterEvent{
                    Name: sdk.String("Mr. Denise Runolfsdottir"),
                    ReportingName: sdk.String("aspernatur"),
                },
                shared.CounterEvent{
                    Name: sdk.String("Monica Lebsack"),
                    ReportingName: sdk.String("eos"),
                },
            },
            CreativeType: shared.CreativeCreativeTypeEnumCreativeTypeTemplatedAppInstallVideo.ToPointer(),
            Dimensions: &shared.Dimensions{
                HeightPixels: sdk.Int(433279),
                WidthPixels: sdk.Int(117320),
            },
            DisplayName: sdk.String("minima"),
            EntityStatus: shared.CreativeEntityStatusEnumEntityStatusUnspecified.ToPointer(),
            ExitEvents: []shared.ExitEvent{
                shared.ExitEvent{
                    Name: sdk.String("Darin Rodriguez"),
                    ReportingName: sdk.String("eaque"),
                    Type: shared.ExitEventTypeEnumExitEventTypeBackup.ToPointer(),
                    URL: sdk.String("perspiciatis"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Doyle Jacobs"),
                    ReportingName: sdk.String("dolorem"),
                    Type: shared.ExitEventTypeEnumExitEventTypeUnspecified.ToPointer(),
                    URL: sdk.String("cumque"),
                },
                shared.ExitEvent{
                    Name: sdk.String("Philip O'Kon"),
                    ReportingName: sdk.String("consequatur"),
                    Type: shared.ExitEventTypeEnumExitEventTypeUnspecified.ToPointer(),
                    URL: sdk.String("et"),
                },
            },
            ExpandOnHover: sdk.Bool(false),
            ExpandingDirection: shared.CreativeExpandingDirectionEnumExpandingDirectionUpAndLeft.ToPointer(),
            HostingSource: shared.CreativeHostingSourceEnumHostingSourceHosted.ToPointer(),
            IasCampaignMonitoring: sdk.Bool(false),
            IntegrationCode: sdk.String("occaecati"),
            JsTrackerURL: sdk.String("suscipit"),
            Notes: sdk.String("adipisci"),
            ObaIcon: &shared.ObaIcon{
                ClickTrackingURL: sdk.String("quasi"),
                Dimensions: &shared.Dimensions{
                    HeightPixels: sdk.Int(169025),
                    WidthPixels: sdk.Int(984934),
                },
                LandingPageURL: sdk.String("nulla"),
                Position: shared.ObaIconPositionEnumObaIconPositionLowerLeft.ToPointer(),
                Program: sdk.String("ipsa"),
                ResourceMimeType: sdk.String("tempora"),
                ResourceURL: sdk.String("nihil"),
                ViewTrackingURL: sdk.String("molestiae"),
            },
            ProgressOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("dicta"),
                Seconds: sdk.String("iusto"),
            },
            RequireHtml5: sdk.Bool(false),
            RequireMraid: sdk.Bool(false),
            RequirePingForAttribution: sdk.Bool(false),
            ReviewStatus: &shared.ReviewStatusInfo{
                ApprovalStatus: shared.ReviewStatusInfoApprovalStatusEnumApprovalStatusPendingServable.ToPointer(),
                ContentAndPolicyReviewStatus: shared.ReviewStatusInfoContentAndPolicyReviewStatusEnumReviewStatusRejected.ToPointer(),
                CreativeAndLandingPageReviewStatus: shared.ReviewStatusInfoCreativeAndLandingPageReviewStatusEnumReviewStatusPending.ToPointer(),
                ExchangeReviewStatuses: []shared.ExchangeReviewStatus{
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangePermodo.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusUnspecified.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeRedForPublishers.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusUnspecified.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeAdswizz.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                    shared.ExchangeReviewStatus{
                        Exchange: shared.ExchangeReviewStatusExchangeEnumExchangeImproveDigital.ToPointer(),
                        Status: shared.ExchangeReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                },
                PublisherReviewStatuses: []shared.PublisherReviewStatus{
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("consectetur"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusApproved.ToPointer(),
                    },
                    shared.PublisherReviewStatus{
                        PublisherName: sdk.String("ipsa"),
                        Status: shared.PublisherReviewStatusStatusEnumReviewStatusRejected.ToPointer(),
                    },
                },
            },
            SkipOffset: &shared.AudioVideoOffset{
                Percentage: sdk.String("sunt"),
                Seconds: sdk.String("nostrum"),
            },
            Skippable: sdk.Bool(false),
            ThirdPartyTag: sdk.String("fugiat"),
            ThirdPartyUrls: []shared.ThirdPartyURL{
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoThirdQuartile.ToPointer(),
                    URL: sdk.String("officia"),
                },
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeAudioVideoThirdQuartile.ToPointer(),
                    URL: sdk.String("aliquid"),
                },
                shared.ThirdPartyURL{
                    Type: shared.ThirdPartyURLTypeEnumThirdPartyURLTypeUnspecified.ToPointer(),
                    URL: sdk.String("eum"),
                },
            },
            TimerEvents: []shared.TimerEvent{
                shared.TimerEvent{
                    Name: sdk.String("Alfonso Bernier"),
                    ReportingName: sdk.String("voluptates"),
                },
                shared.TimerEvent{
                    Name: sdk.String("Cameron Reinger"),
                    ReportingName: sdk.String("enim"),
                },
            },
            TrackerUrls: []string{
                "repellendus",
            },
            UniversalAdID: &shared.UniversalAdID{
                ID: sdk.String("6c645b08-b618-491b-aa0f-e1ade008e6f8"),
                Registry: shared.UniversalAdIDRegistryEnumUniversalAdRegistryDv360.ToPointer(),
            },
            VastTagURL: sdk.String("nemo"),
        },
        AccessToken: sdk.String("asperiores"),
        AdvertiserID: "ratione",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        CreativeID: "illum",
        Fields: sdk.String("totam"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UpdateMask: sdk.String("ipsam"),
        UploadType: sdk.String("culpa"),
        UploadProtocol: sdk.String("dolor"),
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
        AccessToken: sdk.String("inventore"),
        AdvertiserID: "deleniti",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("consequatur"),
        OauthToken: sdk.String("architecto"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("fugit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        AdvertiserID: "quae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugiat"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quas"),
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("impedit"),
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

## DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions

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
    res, err := s.Advertisers.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        AdvertiserID: "necessitatibus",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("nesciunt"),
        Filter: sdk.String("expedita"),
        InsertionOrderID: "eum",
        Key: sdk.String("vel"),
        OauthToken: sdk.String("voluptatum"),
        OrderBy: sdk.String("magnam"),
        PageSize: sdk.Int64(349440),
        PageToken: sdk.String("ab"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("autem"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsSecurity{
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InsertionOrderInput: &shared.InsertionOrderInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("recusandae"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("consequuntur"),
                    MaxAverageCpmBidAmountMicros: sdk.String("voluptatem"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpc.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("necessitatibus"),
                    MaxAverageCpmBidAmountMicros: sdk.String("quasi"),
                    PerformanceGoalAmountMicros: sdk.String("nisi"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen.ToPointer(),
                },
            },
            BillableOutcome: shared.InsertionOrderBillableOutcomeEnumBillableOutcomePayPerViewableImpression.ToPointer(),
            Budget: &shared.InsertionOrderBudget{
                AutomationType: shared.InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeNone.ToPointer(),
                BudgetSegments: []shared.InsertionOrderBudgetSegment{
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("sequi"),
                        CampaignBudgetID: sdk.String("doloribus"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(918092),
                                Month: sdk.Int(759283),
                                Year: sdk.Int(579681),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(364544),
                                Month: sdk.Int(455898),
                                Year: sdk.Int(501063),
                            },
                        },
                        Description: sdk.String("officia"),
                    },
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("voluptas"),
                        CampaignBudgetID: sdk.String("numquam"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(364912),
                                Month: sdk.Int(551079),
                                Year: sdk.Int(260904),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(131903),
                                Month: sdk.Int(495970),
                                Year: sdk.Int(200516),
                            },
                        },
                        Description: sdk.String("fuga"),
                    },
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("laudantium"),
                        CampaignBudgetID: sdk.String("incidunt"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(97493),
                                Month: sdk.Int(524380),
                                Year: sdk.Int(851854),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(117380),
                                Month: sdk.Int(395544),
                                Year: sdk.Int(159845),
                            },
                        },
                        Description: sdk.String("consectetur"),
                    },
                },
                BudgetUnit: shared.InsertionOrderBudgetBudgetUnitEnumBudgetUnitUnspecified.ToPointer(),
            },
            CampaignID: sdk.String("cupiditate"),
            DisplayName: sdk.String("reiciendis"),
            EntityStatus: shared.InsertionOrderEntityStatusEnumEntityStatusPaused.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(3860),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitDays.ToPointer(),
                TimeUnitCount: sdk.Int(178580),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderType: shared.InsertionOrderInsertionOrderTypeEnumRtb.ToPointer(),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("iste"),
                IntegrationCode: sdk.String("magni"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("inventore"),
                DailyMaxMicros: sdk.String("fuga"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeEven.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeNielsenDar.ToPointer(),
                    FeeAmount: sdk.String("delectus"),
                    FeePercentageMillis: sdk.String("minima"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDataManagementPlatform.ToPointer(),
                    FeeAmount: sdk.String("temporibus"),
                    FeePercentageMillis: sdk.String("quos"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDoubleVerifyPrebid.ToPointer(),
                    FeeAmount: sdk.String("totam"),
                    FeePercentageMillis: sdk.String("earum"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PerformanceGoal: &shared.PerformanceGoal{
                PerformanceGoalAmountMicros: sdk.String("vero"),
                PerformanceGoalPercentageMicros: sdk.String("voluptatem"),
                PerformanceGoalString: sdk.String("ipsam"),
                PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeCpiavc.ToPointer(),
            },
        },
        AccessToken: sdk.String("alias"),
        AdvertiserID: "quasi",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("enim"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("nemo"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        AdvertiserID: "quis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusamus"),
        Fields: sdk.String("impedit"),
        InsertionOrderID: "hic",
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("debitis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        AdvertiserID: "minus",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("consectetur"),
        InsertionOrderID: "velit",
        Key: sdk.String("atque"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("magni"),
        UploadProtocol: sdk.String("soluta"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nam"),
        AdvertiserID: "dolore",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("sequi"),
        Filter: sdk.String("dignissimos"),
        Key: sdk.String("neque"),
        OauthToken: sdk.String("quo"),
        OrderBy: sdk.String("deleniti"),
        PageSize: sdk.Int64(844235),
        PageToken: sdk.String("iure"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("vel"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        InsertionOrderInput: &shared.InsertionOrderInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("quibusdam"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("inventore"),
                    MaxAverageCpmBidAmountMicros: sdk.String("facere"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCiva.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("architecto"),
                    MaxAverageCpmBidAmountMicros: sdk.String("voluptatibus"),
                    PerformanceGoalAmountMicros: sdk.String("quia"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen.ToPointer(),
                },
            },
            BillableOutcome: shared.InsertionOrderBillableOutcomeEnumBillableOutcomePayPerImpression.ToPointer(),
            Budget: &shared.InsertionOrderBudget{
                AutomationType: shared.InsertionOrderBudgetAutomationTypeEnumInsertionOrderAutomationTypeUnspecified.ToPointer(),
                BudgetSegments: []shared.InsertionOrderBudgetSegment{
                    shared.InsertionOrderBudgetSegment{
                        BudgetAmountMicros: sdk.String("accusantium"),
                        CampaignBudgetID: sdk.String("vel"),
                        DateRange: &shared.DateRange{
                            EndDate: &shared.Date{
                                Day: sdk.Int(406922),
                                Month: sdk.Int(107617),
                                Year: sdk.Int(877751),
                            },
                            StartDate: &shared.Date{
                                Day: sdk.Int(568218),
                                Month: sdk.Int(431994),
                                Year: sdk.Int(246557),
                            },
                        },
                        Description: sdk.String("ut"),
                    },
                },
                BudgetUnit: shared.InsertionOrderBudgetBudgetUnitEnumBudgetUnitCurrency.ToPointer(),
            },
            CampaignID: sdk.String("earum"),
            DisplayName: sdk.String("dicta"),
            EntityStatus: shared.InsertionOrderEntityStatusEnumEntityStatusPaused.ToPointer(),
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(975884),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitDays.ToPointer(),
                TimeUnitCount: sdk.Int(932562),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderType: shared.InsertionOrderInsertionOrderTypeEnumInsertionOrderTypeUnspecified.ToPointer(),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("nisi"),
                IntegrationCode: sdk.String("itaque"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("velit"),
                DailyMaxMicros: sdk.String("laborum"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodUnspecified.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeUnspecified.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeUnspecified.ToPointer(),
                    FeeAmount: sdk.String("doloremque"),
                    FeePercentageMillis: sdk.String("consequatur"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDoubleVerifyPrebid.ToPointer(),
                    FeeAmount: sdk.String("quidem"),
                    FeePercentageMillis: sdk.String("voluptas"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PerformanceGoal: &shared.PerformanceGoal{
                PerformanceGoalAmountMicros: sdk.String("perspiciatis"),
                PerformanceGoalPercentageMicros: sdk.String("expedita"),
                PerformanceGoalString: sdk.String("deleniti"),
                PerformanceGoalType: shared.PerformanceGoalPerformanceGoalTypeEnumPerformanceGoalTypeOther.ToPointer(),
            },
        },
        AccessToken: sdk.String("voluptate"),
        AdvertiserID: "ullam",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("animi"),
        InsertionOrderID: "impedit",
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UpdateMask: sdk.String("error"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("labore"),
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
        AccessToken: sdk.String("vero"),
        AdvertiserID: "consectetur",
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedTargetingOptionID: "inventore",
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("ad"),
        InsertionOrderID: "qui",
        Key: sdk.String("iste"),
        OauthToken: sdk.String("ex"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeGeoRegion,
        UploadType: sdk.String("libero"),
        UploadProtocol: sdk.String("rem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("odio"),
        AdvertiserID: "fugit",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("vel"),
        Filter: sdk.String("quae"),
        InsertionOrderID: "quae",
        Key: sdk.String("modi"),
        OauthToken: sdk.String("neque"),
        OrderBy: sdk.String("exercitationem"),
        PageSize: sdk.Int64(932394),
        PageToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        TargetingType: operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeKeyword,
        UploadType: sdk.String("nulla"),
        UploadProtocol: sdk.String("distinctio"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        AdvertiserID: "quia",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("libero"),
        IssueMonth: sdk.String("dicta"),
        Key: sdk.String("id"),
        LoiSapinInvoiceType: operations.DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnumLoiSapinInvoiceTypePlatform.ToPointer(),
        OauthToken: sdk.String("fugiat"),
        PageSize: sdk.Int64(637462),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("iusto"),
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
        AccessToken: sdk.String("voluptates"),
        AdvertiserID: "inventore",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dolore"),
        InvoiceMonth: sdk.String("eligendi"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("autem"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("dolores"),
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

## DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions

Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditLineItemAssignedTargetingOptionsRequestInput: &shared.BulkEditLineItemAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                                TargetingOptionID: sdk.String("corrupti"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("provident"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("tempore"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("ea"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("ipsam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("laudantium"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatibus"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("cum"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("at"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("alias"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quidem"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("repudiandae"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("accusantium"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("expedita"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quibusdam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("odit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("corporis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("earum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("similique"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quidem"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("beatae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("molestiae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fugit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("numquam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("at"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("optio"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("necessitatibus"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("qui"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("expedita"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptatum"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5873.75),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("placeat"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("enim"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("neque"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("in"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("minus"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eum"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("corporis"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("voluptates"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday.ToPointer(),
                                EndHour: sdk.Int(46013),
                                StartHour: sdk.Int(727547),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("labore"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("voluptas"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                                TargetingOptionID: sdk.String("velit"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("minus"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("nostrum"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("est"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("tempore"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("vero"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("odit"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation.ToPointer(),
                                TargetingOptionID: sdk.String("nemo"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("reprehenderit"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("minima"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("in"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("excepturi"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1721.95),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("ducimus"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("pariatur"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("itaque"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("similique"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
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
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumInflammatoryPoliticsAndNews,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsFinancial,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("earum"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate70PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability80PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "nobis",
                                        "ipsa",
                                        "ducimus",
                                        "maiores",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq1000.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("sint"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("enim"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("hic"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quas"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability50PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4554.ToPointer(),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("saepe"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("iste"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("tempore"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("velit"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("impedit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("cum"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ipsum"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("adipisci"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("deserunt"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("doloremque"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quis"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("veniam"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("architecto"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("cupiditate"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("molestiae"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("non"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("itaque"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("asperiores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("consequuntur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("odit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("amet"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ab"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("tempore"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptatibus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("blanditiis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("libero"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("facilis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ipsum"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ad"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatibus"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("debitis"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("labore"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7009.28),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("reprehenderit"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nostrum"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("neque"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("iusto"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("est"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("rem"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                                TargetingOptionID: sdk.String("fugiat"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(118041),
                                StartHour: sdk.Int(622894),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                                TargetingOptionID: sdk.String("esse"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("fugiat"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                                TargetingOptionID: sdk.String("aspernatur"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("enim"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("iusto"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dignissimos"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                                TargetingOptionID: sdk.String("illo"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("ab"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("incidunt"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("accusamus"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("eos"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("earum"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("reprehenderit"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7897.7),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("deleniti"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("labore"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("assumenda"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("aliquam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSexEducation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("similique"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate40PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability50PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "voluptatem",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("earum"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("iusto"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("amet"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("dolorum"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4554.ToPointer(),
                                TargetingOptionID: sdk.String("repudiandae"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("consequatur"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("nemo"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformPlaystation.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("facilis"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("aperiam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("accusamus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("totam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("velit"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("sunt"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("dolor"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("occaecati"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("atque"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("beatae"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("minus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptatem"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ea"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dignissimos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("velit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("consectetur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dignissimos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("soluta"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("officia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("tenetur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quo"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("illum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("vero"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("qui"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("repellat"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("explicabo"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("explicabo"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(3503.25),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("non"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ab"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("illo"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("hic"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("labore"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumTuesday.ToPointer(),
                                EndHour: sdk.Int(921193),
                                StartHour: sdk.Int(265303),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("explicabo"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                                TargetingOptionID: sdk.String("rem"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("aperiam"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("deleniti"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("enim"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                                TargetingOptionID: sdk.String("similique"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("minima"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("sit"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("modi"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("eum"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nesciunt"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("dignissimos"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("fugiat"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("modi"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(138.65),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("eveniet"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("odio"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("numquam"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("dolorum"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumMediumSeverityUnspecified,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("rem"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration10Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud10.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumVideoIabUnspecified.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumVideoViewableRateUnspecified.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "saepe",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq500.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("qui"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("harum"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("beatae"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeParentalStatus.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "molestias",
                        "officia",
                        "libero",
                        "totam",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeProximityLocationList.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "ea",
                        "impedit",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeSensitiveCategoryExclusion.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "velit",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAudioContentType.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "nulla",
                        "laborum",
                        "natus",
                        "accusamus",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeChannel.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("nisi"),
        AdvertiserID: "rerum",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("non"),
        Key: sdk.String("rem"),
        LineItemID: "quia",
        OauthToken: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditLineItemAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions

Lists assigned targeting options of a line item across targeting types.

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
    res, err := s.Advertisers.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions(ctx, operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quae"),
        AdvertiserID: "officiis",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("enim"),
        Filter: sdk.String("optio"),
        Key: sdk.String("rem"),
        LineItemID: "perferendis",
        OauthToken: sdk.String("facilis"),
        OrderBy: sdk.String("reiciendis"),
        PageSize: sdk.Int64(955551),
        PageToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkListLineItemAssignedTargetingOptionsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LineItemInput: &shared.LineItemInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("modi"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("itaque"),
                    MaxAverageCpmBidAmountMicros: sdk.String("maxime"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpc.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("consequuntur"),
                    MaxAverageCpmBidAmountMicros: sdk.String("assumenda"),
                    PerformanceGoalAmountMicros: sdk.String("vero"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeAvViewed.ToPointer(),
                },
            },
            Budget: &shared.LineItemBudgetInput{
                BudgetAllocationType: shared.LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeUnlimited.ToPointer(),
                MaxAmount: sdk.String("porro"),
            },
            ConversionCounting: &shared.ConversionCountingConfig{
                FloodlightActivityConfigs: []shared.TrackingFloodlightActivityConfig{
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("totam"),
                        PostClickLookbackWindowDays: sdk.Int(969168),
                        PostViewLookbackWindowDays: sdk.Int(66074),
                    },
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("sint"),
                        PostClickLookbackWindowDays: sdk.Int(472414),
                        PostViewLookbackWindowDays: sdk.Int(458412),
                    },
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("iure"),
                        PostClickLookbackWindowDays: sdk.Int(485031),
                        PostViewLookbackWindowDays: sdk.Int(202796),
                    },
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("debitis"),
                        PostClickLookbackWindowDays: sdk.Int(423588),
                        PostViewLookbackWindowDays: sdk.Int(208683),
                    },
                },
                PostViewCountPercentageMillis: sdk.String("corporis"),
            },
            CreativeIds: []string{
                "consequuntur",
                "officia",
            },
            DisplayName: sdk.String("reprehenderit"),
            EntityStatus: shared.LineItemEntityStatusEnumEntityStatusPaused.ToPointer(),
            ExcludeNewExchanges: sdk.Bool(false),
            Flight: &shared.LineItemFlight{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(262800),
                        Month: sdk.Int(56372),
                        Year: sdk.Int(522062),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(978154),
                        Month: sdk.Int(35160),
                        Year: sdk.Int(331452),
                    },
                },
                FlightDateType: shared.LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeTrigger.ToPointer(),
                TriggerID: sdk.String("neque"),
            },
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(816365),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitMonths.ToPointer(),
                TimeUnitCount: sdk.Int(552581),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderID: sdk.String("doloribus"),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("fugiat"),
                IntegrationCode: sdk.String("est"),
            },
            InventorySourceIds: []string{
                "velit",
                "vitae",
                "nesciunt",
                "similique",
            },
            LineItemType: shared.LineItemLineItemTypeEnumLineItemTypeUnspecified.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("repellat"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("nemo"),
                DailyMaxMicros: sdk.String("doloribus"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeAsap.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeAdsafe.ToPointer(),
                    FeeAmount: sdk.String("ipsam"),
                    FeePercentageMillis: sdk.String("cupiditate"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeUnspecified.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeTeracent.ToPointer(),
                    FeeAmount: sdk.String("nesciunt"),
                    FeePercentageMillis: sdk.String("commodi"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeUnspecified.ToPointer(),
                },
            },
            PartnerRevenueModel: &shared.PartnerRevenueModel{
                MarkupAmount: sdk.String("veniam"),
                MarkupType: shared.PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeTotalMediaCostMarkup.ToPointer(),
            },
            TargetingExpansion: &shared.TargetingExpansionConfig{
                ExcludeFirstPartyAudience: sdk.Bool(false),
                TargetingExpansionLevel: shared.TargetingExpansionConfigTargetingExpansionLevelEnumBalancedExpansion.ToPointer(),
            },
        },
        AccessToken: sdk.String("sint"),
        AdvertiserID: "ut",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("minus"),
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
        AccessToken: sdk.String("beatae"),
        AdvertiserID: "hic",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("ducimus"),
        LineItemID: "fuga",
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GenerateDefaultLineItemRequestInput: &shared.GenerateDefaultLineItemRequestInput{
            DisplayName: sdk.String("incidunt"),
            InsertionOrderID: sdk.String("adipisci"),
            LineItemType: shared.GenerateDefaultLineItemRequestLineItemTypeEnumLineItemTypeVideoMobileAppInstall.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("dolor"),
            },
        },
        AccessToken: sdk.String("exercitationem"),
        AdvertiserID: "expedita",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("sit"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("deserunt"),
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
        AccessToken: sdk.String("veniam"),
        AdvertiserID: "quod",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("enim"),
        LineItemID: "doloribus",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("alias"),
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
        AccessToken: sdk.String("ipsa"),
        AdvertiserID: "nobis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("dicta"),
        Filter: sdk.String("vel"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("debitis"),
        OrderBy: sdk.String("ullam"),
        PageSize: sdk.Int64(103578),
        PageToken: sdk.String("accusantium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("provident"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        LineItemInput: &shared.LineItemInput{
            BidStrategy: &shared.BiddingStrategy{
                FixedBid: &shared.FixedBidStrategy{
                    BidAmountMicros: sdk.String("iure"),
                },
                MaximizeSpendAutoBid: &shared.MaximizeSpendBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("quibusdam"),
                    MaxAverageCpmBidAmountMicros: sdk.String("quod"),
                    PerformanceGoalType: shared.MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpc.ToPointer(),
                    RaiseBidForDeals: sdk.Bool(false),
                },
                PerformanceGoalAutoBid: &shared.PerformanceGoalBidStrategy{
                    CustomBiddingAlgorithmID: sdk.String("recusandae"),
                    MaxAverageCpmBidAmountMicros: sdk.String("velit"),
                    PerformanceGoalAmountMicros: sdk.String("magnam"),
                    PerformanceGoalType: shared.PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeViewableCpm.ToPointer(),
                },
            },
            Budget: &shared.LineItemBudgetInput{
                BudgetAllocationType: shared.LineItemBudgetBudgetAllocationTypeEnumLineItemBudgetAllocationTypeAutomatic.ToPointer(),
                MaxAmount: sdk.String("sed"),
            },
            ConversionCounting: &shared.ConversionCountingConfig{
                FloodlightActivityConfigs: []shared.TrackingFloodlightActivityConfig{
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("natus"),
                        PostClickLookbackWindowDays: sdk.Int(588152),
                        PostViewLookbackWindowDays: sdk.Int(739508),
                    },
                    shared.TrackingFloodlightActivityConfig{
                        FloodlightActivityID: sdk.String("doloribus"),
                        PostClickLookbackWindowDays: sdk.Int(703966),
                        PostViewLookbackWindowDays: sdk.Int(697330),
                    },
                },
                PostViewCountPercentageMillis: sdk.String("itaque"),
            },
            CreativeIds: []string{
                "unde",
                "modi",
            },
            DisplayName: sdk.String("perspiciatis"),
            EntityStatus: shared.LineItemEntityStatusEnumEntityStatusScheduledForDeletion.ToPointer(),
            ExcludeNewExchanges: sdk.Bool(false),
            Flight: &shared.LineItemFlight{
                DateRange: &shared.DateRange{
                    EndDate: &shared.Date{
                        Day: sdk.Int(736985),
                        Month: sdk.Int(135548),
                        Year: sdk.Int(725784),
                    },
                    StartDate: &shared.Date{
                        Day: sdk.Int(720266),
                        Month: sdk.Int(279172),
                        Year: sdk.Int(925395),
                    },
                },
                FlightDateType: shared.LineItemFlightFlightDateTypeEnumLineItemFlightDateTypeTrigger.ToPointer(),
                TriggerID: sdk.String("id"),
            },
            FrequencyCap: &shared.FrequencyCap{
                MaxImpressions: sdk.Int(904440),
                TimeUnit: shared.FrequencyCapTimeUnitEnumTimeUnitMonths.ToPointer(),
                TimeUnitCount: sdk.Int(779409),
                Unlimited: sdk.Bool(false),
            },
            InsertionOrderID: sdk.String("nesciunt"),
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("illum"),
                IntegrationCode: sdk.String("nemo"),
            },
            InventorySourceIds: []string{
                "facilis",
                "non",
                "mollitia",
                "assumenda",
            },
            LineItemType: shared.LineItemLineItemTypeEnumLineItemTypeVideoOverTheTop.ToPointer(),
            MobileApp: &shared.MobileAppInput{
                AppID: sdk.String("distinctio"),
            },
            Pacing: &shared.Pacing{
                DailyMaxImpressions: sdk.String("pariatur"),
                DailyMaxMicros: sdk.String("ad"),
                PacingPeriod: shared.PacingPacingPeriodEnumPacingPeriodFlight.ToPointer(),
                PacingType: shared.PacingPacingTypeEnumPacingTypeAsap.ToPointer(),
            },
            PartnerCosts: []shared.PartnerCost{
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeTeracent.ToPointer(),
                    FeeAmount: sdk.String("incidunt"),
                    FeePercentageMillis: sdk.String("maxime"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeCpmFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeUnspecified.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDoubleVerify.ToPointer(),
                    FeeAmount: sdk.String("deserunt"),
                    FeePercentageMillis: sdk.String("molestias"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeMoatVideo.ToPointer(),
                    FeeAmount: sdk.String("labore"),
                    FeePercentageMillis: sdk.String("quo"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeUnspecified.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypeUnspecified.ToPointer(),
                },
                shared.PartnerCost{
                    CostType: shared.PartnerCostCostTypeEnumPartnerCostTypeDoubleVerify.ToPointer(),
                    FeeAmount: sdk.String("magnam"),
                    FeePercentageMillis: sdk.String("quaerat"),
                    FeeType: shared.PartnerCostFeeTypeEnumPartnerCostFeeTypeMediaFee.ToPointer(),
                    InvoiceType: shared.PartnerCostInvoiceTypeEnumPartnerCostInvoiceTypePartner.ToPointer(),
                },
            },
            PartnerRevenueModel: &shared.PartnerRevenueModel{
                MarkupAmount: sdk.String("nostrum"),
                MarkupType: shared.PartnerRevenueModelMarkupTypeEnumPartnerRevenueModelMarkupTypeTotalMediaCostMarkup.ToPointer(),
            },
            TargetingExpansion: &shared.TargetingExpansionConfig{
                ExcludeFirstPartyAudience: sdk.Bool(false),
                TargetingExpansionLevel: shared.TargetingExpansionConfigTargetingExpansionLevelEnumBalancedExpansion.ToPointer(),
            },
        },
        AccessToken: sdk.String("nulla"),
        AdvertiserID: "error",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("esse"),
        LineItemID: "corrupti",
        OauthToken: sdk.String("fuga"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UpdateMask: sdk.String("impedit"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("deserunt"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                TargetingOptionID: sdk.String("doloremque"),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("voluptatem"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("facere"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("consequatur"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("architecto"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("porro"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("quae"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("sed"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("necessitatibus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("impedit"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("ipsa"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("a"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("maiores"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("laudantium"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("alias"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("asperiores"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("rem"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("dicta"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("doloribus"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("eius"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("in"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("quasi"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("excepturi"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("qui"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("beatae"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("dicta"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("rerum"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("alias"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                TargetingOptionID: sdk.String("vel"),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("accusantium"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("id"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(3881.69),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                TargetingOptionID: sdk.String("quas"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("veritatis"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("ullam"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("quae"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("similique"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("incidunt"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                TargetingOptionID: sdk.String("magni"),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                TargetingOptionID: sdk.String("delectus"),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("omnis"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                EndHour: sdk.Int(200950),
                StartHour: sdk.Int(805463),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("cupiditate"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                TargetingOptionID: sdk.String("excepturi"),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("maiores"),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                TargetingOptionID: sdk.String("velit"),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("reiciendis"),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("nemo"),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("ipsa"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
                TargetingOptionID: sdk.String("tenetur"),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("quas"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("molestiae"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("aliquid"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("asperiores"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation.ToPointer(),
                TargetingOptionID: sdk.String("nobis"),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("perspiciatis"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("dicta"),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("minus"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("commodi"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                TargetingOptionID: sdk.String("porro"),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(7357.4),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                TargetingOptionID: sdk.String("modi"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("voluptates"),
                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("eius"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("sequi"),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("eligendi"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Point5Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                        },
                    },
                    CustomSegmentID: sdk.String("eum"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate30PercentHigher.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud8.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumVideoIabUnspecified.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "quisquam",
                        "eos",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("laborum"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("modi"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("perferendis"),
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("architecto"),
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability50PercentOrMore.ToPointer(),
            },
        },
        AccessToken: sdk.String("dolore"),
        AdvertiserID: "sunt",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("odit"),
        Key: sdk.String("earum"),
        LineItemID: "veniam",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeAudienceGroup,
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("nihil"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nisi"),
        AdvertiserID: "tenetur",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "quibusdam",
        Callback: sdk.String("nemo"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("pariatur"),
        LineItemID: "sit",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellendus"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeUnspecified,
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("sapiente"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("possimus"),
        AdvertiserID: "repellat",
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedTargetingOptionID: "architecto",
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("harum"),
        LineItemID: "dolore",
        OauthToken: sdk.String("voluptatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeDayAndTime,
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("soluta"),
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
        AccessToken: sdk.String("velit"),
        AdvertiserID: "earum",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("non"),
        Filter: sdk.String("quasi"),
        Key: sdk.String("mollitia"),
        LineItemID: "accusamus",
        OauthToken: sdk.String("harum"),
        OrderBy: sdk.String("cumque"),
        PageSize: sdk.Int64(42615),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        TargetingType: operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAppCategory,
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("aliquid"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("dolor"),
        Filter: sdk.String("rerum"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("accusamus"),
        OrderBy: sdk.String("optio"),
        PageSize: sdk.Int64(966576),
        PageToken: sdk.String("minus"),
        PartnerID: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("voluptatum"),
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
                    TargetingOptionID: sdk.String("accusantium"),
                },
                shared.AssignedLocationInput{
                    TargetingOptionID: sdk.String("illo"),
                },
            },
            DeletedAssignedLocations: []string{
                "doloribus",
            },
        },
        AccessToken: sdk.String("nostrum"),
        AdvertiserID: "at",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("vel"),
        LocationListID: "sapiente",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("aperiam"),
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
            TargetingOptionID: sdk.String("voluptates"),
        },
        AccessToken: sdk.String("ad"),
        AdvertiserID: "aliquam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("maiores"),
        LocationListID: "inventore",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laudantium"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("dolor"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("consectetur"),
        AdvertiserID: "cumque",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedLocationID: "voluptatum",
        Callback: sdk.String("ducimus"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("recusandae"),
        LocationListID: "tempora",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("sequi"),
        UploadProtocol: sdk.String("voluptatum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("rerum"),
        AdvertiserID: "veritatis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("quidem"),
        Filter: sdk.String("totam"),
        Key: sdk.String("porro"),
        LocationListID: "deserunt",
        OauthToken: sdk.String("magni"),
        OrderBy: sdk.String("nihil"),
        PageSize: sdk.Int64(374062),
        PageToken: sdk.String("animi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("fuga"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        LocationListInput: &shared.LocationListInput{
            AdvertiserID: sdk.String("dolore"),
            DisplayName: sdk.String("maxime"),
            LocationType: shared.LocationListLocationTypeEnumTargetingLocationTypeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("iste"),
        AdvertiserID: "ullam",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("unde"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("inventore"),
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
        AccessToken: sdk.String("ipsam"),
        AdvertiserID: "quasi",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("harum"),
        Filter: sdk.String("facere"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("beatae"),
        OrderBy: sdk.String("cumque"),
        PageSize: sdk.Int64(964511),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("rem"),
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
            AdvertiserID: sdk.String("officiis"),
            DisplayName: sdk.String("cum"),
            LocationType: shared.LocationListLocationTypeEnumTargetingLocationTypeRegional.ToPointer(),
        },
        AccessToken: sdk.String("sapiente"),
        AdvertiserID: "quo",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("minus"),
        Key: sdk.String("porro"),
        LocationListID: "id",
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UpdateMask: sdk.String("libero"),
        UploadType: sdk.String("quo"),
        UploadProtocol: sdk.String("esse"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "accusantium": "soluta",
            "fugit": "pariatur",
            "eligendi": "recusandae",
            "veritatis": "aut",
        },
        AccessToken: sdk.String("laudantium"),
        AdvertiserID: "iusto",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("tempora"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        TriggerID: "voluptatem",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("at"),
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
            ActivationDurationMinutes: sdk.String("reprehenderit"),
            AdvertiserID: sdk.String("voluptatum"),
            DisplayName: sdk.String("blanditiis"),
        },
        AccessToken: sdk.String("nihil"),
        AdvertiserID: "atque",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("atque"),
        Key: sdk.String("nostrum"),
        OauthToken: sdk.String("atque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("enim"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "quae": "quas",
        },
        AccessToken: sdk.String("placeat"),
        AdvertiserID: "enim",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sapiente"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        TriggerID: "cumque",
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("quaerat"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quia"),
        AdvertiserID: "officiis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("quis"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        TriggerID: "illum",
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("sit"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("minus"),
        AdvertiserID: "asperiores",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("praesentium"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("sit"),
        OrderBy: sdk.String("aliquid"),
        PageSize: sdk.Int64(898638),
        PageToken: sdk.String("sed"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("nesciunt"),
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
            ActivationDurationMinutes: sdk.String("laborum"),
            AdvertiserID: sdk.String("aliquam"),
            DisplayName: sdk.String("deserunt"),
        },
        AccessToken: sdk.String("modi"),
        AdvertiserID: "sunt",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorem"),
        TriggerID: "repellat",
        UpdateMask: sdk.String("aspernatur"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("sequi"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        NegativeKeywordListInput: &shared.NegativeKeywordListInput{
            DisplayName: sdk.String("fuga"),
        },
        AccessToken: sdk.String("hic"),
        AdvertiserID: "eaque",
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("architecto"),
        Fields: sdk.String("aperiam"),
        Key: sdk.String("aspernatur"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("magnam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        AdvertiserID: "optio",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("repellat"),
        Key: sdk.String("quae"),
        OauthToken: sdk.String("deleniti"),
        PageSize: sdk.Int64(711615),
        PageToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("sed"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkEditNegativeKeywordsRequestInput: &shared.BulkEditNegativeKeywordsRequestInput{
            CreatedNegativeKeywords: []shared.NegativeKeywordInput{
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("ea"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("animi"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("dolore"),
                },
            },
            DeletedNegativeKeywords: []string{
                "dignissimos",
                "esse",
                "animi",
                "laudantium",
            },
        },
        AccessToken: sdk.String("esse"),
        AdvertiserID: "eveniet",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("velit"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("eius"),
        NegativeKeywordListID: "rerum",
        OauthToken: sdk.String("itaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dignissimos"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("explicabo"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        AdvertiserID: "quis",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("ut"),
        Key: sdk.String("quaerat"),
        KeywordValue: "architecto",
        NegativeKeywordListID: "praesentium",
        OauthToken: sdk.String("eveniet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("libero"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("illo"),
        AdvertiserID: "minus",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("sint"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("enim"),
        NegativeKeywordListID: "accusamus",
        OauthToken: sdk.String("aperiam"),
        OrderBy: sdk.String("voluptates"),
        PageSize: sdk.Int64(512310),
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("illum"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReplaceNegativeKeywordsRequestInput: &shared.ReplaceNegativeKeywordsRequestInput{
            NewNegativeKeywords: []shared.NegativeKeywordInput{
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("deleniti"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("modi"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("earum"),
                },
                shared.NegativeKeywordInput{
                    KeywordValue: sdk.String("architecto"),
                },
            },
        },
        AccessToken: sdk.String("aliquam"),
        AdvertiserID: "labore",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("consequatur"),
        NegativeKeywordListID: "esse",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("cumque"),
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
            DisplayName: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("deserunt"),
        AdvertiserID: "ad",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sequi"),
        Fields: sdk.String("porro"),
        Key: sdk.String("laborum"),
        NegativeKeywordListID: "nobis",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UpdateMask: sdk.String("aut"),
        UploadType: sdk.String("ipsam"),
        UploadProtocol: sdk.String("officia"),
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
                    CmAccountID: sdk.String("reprehenderit"),
                    CmFloodlightConfigID: sdk.String("quia"),
                    CmFloodlightLinkingAuthorized: sdk.Bool(false),
                    CmSyncableSiteIds: []string{
                        "accusantium",
                        "ad",
                        "nisi",
                        "molestiae",
                    },
                    Dv360ToCmCostReportingEnabled: sdk.Bool(false),
                    Dv360ToCmDataSharingEnabled: sdk.Bool(false),
                },
                ThirdPartyOnlyConfig: &shared.ThirdPartyOnlyConfig{
                    PixelOrderIDReportingEnabled: sdk.Bool(false),
                },
            },
            CreativeConfig: &shared.AdvertiserCreativeConfig{
                DynamicCreativeEnabled: sdk.Bool(false),
                IasClientID: sdk.String("quia"),
                ObaComplianceDisabled: sdk.Bool(false),
                VideoCreativeDataSharingAuthorized: sdk.Bool(false),
            },
            DataAccessConfig: &shared.AdvertiserDataAccessConfig{
                SdfConfig: &shared.AdvertiserSdfConfig{
                    OverridePartnerSdfConfig: sdk.Bool(false),
                    SdfConfig: &shared.SdfConfig{
                        AdminEmail: sdk.String("laudantium"),
                        Version: shared.SdfConfigVersionEnumSdfVersion31.ToPointer(),
                    },
                },
            },
            DisplayName: sdk.String("odit"),
            EntityStatus: shared.AdvertiserEntityStatusEnumEntityStatusArchived.ToPointer(),
            GeneralConfig: &shared.AdvertiserGeneralConfigInput{
                CurrencyCode: sdk.String("expedita"),
                DomainURL: sdk.String("eos"),
            },
            IntegrationDetails: &shared.IntegrationDetails{
                Details: sdk.String("repellendus"),
                IntegrationCode: sdk.String("nesciunt"),
            },
            PartnerID: sdk.String("ipsa"),
            PrismaEnabled: sdk.Bool(false),
            ServingConfig: &shared.AdvertiserTargetingConfig{
                ExemptTvFromViewabilityTargeting: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("sint"),
        AdvertiserID: "dolore",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("quam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UpdateMask: sdk.String("aliquam"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("culpa"),
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
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                TargetingOptionID: sdk.String("quod"),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("voluptatibus"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("voluptas"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroid.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("laborum"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("doloribus"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("corporis"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("non"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("necessitatibus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("distinctio"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("laboriosam"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("voluptatem"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("optio"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("sequi"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("vitae"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("sed"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("in"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("temporibus"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("dolor"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("reiciendis"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("vitae"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("quod"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("possimus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("maiores"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("odio"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                TargetingOptionID: sdk.String("sapiente"),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("aperiam"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("similique"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(1979.82),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                TargetingOptionID: sdk.String("ex"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("repellendus"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("unde"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("alias"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("impedit"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("sequi"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                TargetingOptionID: sdk.String("labore"),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                TargetingOptionID: sdk.String("in"),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("quisquam"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                EndHour: sdk.Int(317260),
                StartHour: sdk.Int(859725),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("distinctio"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                TargetingOptionID: sdk.String("impedit"),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("accusamus"),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("quas"),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("blanditiis"),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                TargetingOptionID: sdk.String("dicta"),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("impedit"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeLower50Percent.ToPointer(),
                TargetingOptionID: sdk.String("eveniet"),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("repudiandae"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("sed"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("impedit"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("quas"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                TargetingOptionID: sdk.String("vel"),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("eligendi"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                TargetingOptionID: sdk.String("ex"),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("beatae"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("veritatis"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                TargetingOptionID: sdk.String("itaque"),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(8754.52),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                TargetingOptionID: sdk.String("illo"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("quo"),
                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("minus"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("distinctio"),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("possimus"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumOccult,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                        },
                    },
                    CustomSegmentID: sdk.String("beatae"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud50.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability40PercentHihger.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "illo",
                        "exercitationem",
                        "laborum",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq250.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("temporibus"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("optio"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("ipsa"),
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("exercitationem"),
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability60PercentOrMore.ToPointer(),
            },
        },
        AccessToken: sdk.String("repudiandae"),
        AdvertiserID: "aspernatur",
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("officia"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeChannel,
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("laudantium"),
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
        AccessToken: sdk.String("corrupti"),
        AdvertiserID: "molestiae",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "iure",
        Callback: sdk.String("ab"),
        Fields: sdk.String("quaerat"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeCategory,
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("quisquam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laudantium"),
        AdvertiserID: "nam",
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "enim",
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("minima"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeChannel,
        UploadType: sdk.String("fugiat"),
        UploadProtocol: sdk.String("numquam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        AdvertiserID: "nobis",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("impedit"),
        Filter: sdk.String("nisi"),
        Key: sdk.String("cumque"),
        OauthToken: sdk.String("soluta"),
        OrderBy: sdk.String("fugiat"),
        PageSize: sdk.Int64(389287),
        PageToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        TargetingType: operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeContentGenre,
        UploadType: sdk.String("consectetur"),
        UploadProtocol: sdk.String("necessitatibus"),
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
