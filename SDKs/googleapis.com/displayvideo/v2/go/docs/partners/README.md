# Partners

### Available Operations

* [DisplayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [DisplayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [DisplayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [DisplayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [DisplayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [DisplayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [DisplayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [DisplayvideoPartnersEditAssignedTargetingOptions](#displayvideopartnerseditassignedtargetingoptions) - Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [DisplayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [DisplayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

## DisplayvideoPartnersChannelsCreate

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
    res, err := s.Partners.DisplayvideoPartnersChannelsCreate(ctx, operations.DisplayvideoPartnersChannelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("id"),
            DisplayName: sdk.String("eum"),
            PartnerID: sdk.String("cumque"),
        },
        AccessToken: sdk.String("odio"),
        AdvertiserID: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("architecto"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("accusamus"),
        PartnerID: "illo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.DisplayvideoPartnersChannelsCreateSecurity{
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

## DisplayvideoPartnersChannelsList

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
    res, err := s.Partners.DisplayvideoPartnersChannelsList(ctx, operations.DisplayvideoPartnersChannelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        AdvertiserID: sdk.String("minus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("illo"),
        Filter: sdk.String("cupiditate"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("aliquam"),
        OrderBy: sdk.String("excepturi"),
        PageSize: sdk.Int64(541046),
        PageToken: sdk.String("dicta"),
        PartnerID: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.DisplayvideoPartnersChannelsListSecurity{
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

## DisplayvideoPartnersChannelsPatch

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
    res, err := s.Partners.DisplayvideoPartnersChannelsPatch(ctx, operations.DisplayvideoPartnersChannelsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("maiores"),
            DisplayName: sdk.String("delectus"),
            PartnerID: sdk.String("quos"),
        },
        AccessToken: sdk.String("id"),
        AdvertiserID: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        ChannelID: "consequatur",
        Fields: sdk.String("itaque"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("voluptatem"),
        PartnerID: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UpdateMask: sdk.String("quaerat"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("neque"),
    }, operations.DisplayvideoPartnersChannelsPatchSecurity{
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

## DisplayvideoPartnersChannelsSitesBulkEdit

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
    res, err := s.Partners.DisplayvideoPartnersChannelsSitesBulkEdit(ctx, operations.DisplayvideoPartnersChannelsSitesBulkEditRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkEditSitesRequestInput: &shared.BulkEditSitesRequestInput{
            AdvertiserID: sdk.String("recusandae"),
            CreatedSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("mollitia"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("mollitia"),
                },
            },
            DeletedSites: []string{
                "suscipit",
                "quas",
                "quis",
            },
            PartnerID: sdk.String("enim"),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ea"),
        ChannelID: "autem",
        Fields: sdk.String("voluptate"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("magni"),
        PartnerID: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DisplayvideoPartnersChannelsSitesBulkEditSecurity{
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

## DisplayvideoPartnersChannelsSitesDelete

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
    res, err := s.Partners.DisplayvideoPartnersChannelsSitesDelete(ctx, operations.DisplayvideoPartnersChannelsSitesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        AdvertiserID: sdk.String("commodi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        ChannelID: "magni",
        Fields: sdk.String("quisquam"),
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("in"),
        PartnerID: "eaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("minus"),
        URLOrAppID: "tenetur",
    }, operations.DisplayvideoPartnersChannelsSitesDeleteSecurity{
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

## DisplayvideoPartnersChannelsSitesList

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
    res, err := s.Partners.DisplayvideoPartnersChannelsSitesList(ctx, operations.DisplayvideoPartnersChannelsSitesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("exercitationem"),
        AdvertiserID: sdk.String("a"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laboriosam"),
        ChannelID: "earum",
        Fields: sdk.String("occaecati"),
        Filter: sdk.String("dicta"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("omnis"),
        OrderBy: sdk.String("laborum"),
        PageSize: sdk.Int64(563149),
        PageToken: sdk.String("a"),
        PartnerID: "dignissimos",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("laudantium"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.DisplayvideoPartnersChannelsSitesListSecurity{
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

## DisplayvideoPartnersChannelsSitesReplace

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
    res, err := s.Partners.DisplayvideoPartnersChannelsSitesReplace(ctx, operations.DisplayvideoPartnersChannelsSitesReplaceRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReplaceSitesRequestInput: &shared.ReplaceSitesRequestInput{
            AdvertiserID: sdk.String("repudiandae"),
            NewSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("quod"),
                },
            },
            PartnerID: sdk.String("dolorem"),
        },
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        ChannelID: "repellendus",
        Fields: sdk.String("soluta"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("ullam"),
        PartnerID: "amet",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("quibusdam"),
        UploadProtocol: sdk.String("sint"),
    }, operations.DisplayvideoPartnersChannelsSitesReplaceSecurity{
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

## DisplayvideoPartnersEditAssignedTargetingOptions

Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

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
    res, err := s.Partners.DisplayvideoPartnersEditAssignedTargetingOptions(ctx, operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BulkEditPartnerAssignedTargetingOptionsRequestInput: &shared.BulkEditPartnerAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange4044.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fuga"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("consequatur"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformUnspecified.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("earum"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dolorem"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quo"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("illo"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quia"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("veniam"),
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
                                                FirstAndThirdPartyAudienceID: sdk.String("maiores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sunt"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("excepturi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aspernatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fuga"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("laborum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("hic"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("soluta"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("explicabo"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("odit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("illo"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quia"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ad"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2449.9),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("provident"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iste"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("blanditiis"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("consectetur"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("totam"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("iusto"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumFriday.ToPointer(),
                                EndHour: sdk.Int(453111),
                                StartHour: sdk.Int(583142),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("assumenda"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnrated.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeRedForPublishers.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("modi"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("dolore"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("possimus"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("dolorum"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eos"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("quam"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("omnis"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6268.27),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("numquam"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("inventore"),
                                ProximityRadius: sdk.Float64(8997.47),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("exercitationem"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryAlcohol.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quis"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlternativeLifestyles,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("labore"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate30PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "sunt",
                                        "perspiciatis",
                                        "quam",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq1000.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("sunt"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("in"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability10PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("voluptatem"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("perspiciatis"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3034.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("deleniti"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("enim"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroid.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("unde"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quis"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("adipisci"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("praesentium"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("numquam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolor"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("accusamus"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("voluptates"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quia"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("ut"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("accusantium"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("aliquam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("impedit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("minima"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("vitae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quisquam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("sunt"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("asperiores"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("vel"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5217.82),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("at"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("culpa"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("laudantium"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolorem"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odit"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("libero"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSaturday.ToPointer(),
                                EndHour: sdk.Int(376942),
                                StartHour: sdk.Int(93212),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eligendi"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeComputer.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierTeens.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeRedForPublishers.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("aliquam"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("ut"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("quidem"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("doloribus"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("architecto"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nulla"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4533.04),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("iure"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("temporibus"),
                                ProximityRadius: sdk.Float64(2784.69),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("alias"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDrugs.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("libero"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRateUnspecified.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumOccult,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNonEnglish,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("amet"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate70PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumFraudUnspecified.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "delectus",
                                        "sunt",
                                        "repudiandae",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq500.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("rerum"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewabilityUnspecified.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("delectus"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("quas"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeSubExchange.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("perferendis"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformSamsungTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("molestiae"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quas"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("aperiam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("repellat"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("necessitatibus"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quaerat"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("magnam"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("magni"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("excepturi"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("pariatur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("rerum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("illum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("amet"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("impedit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dolores"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nihil"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
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
                                            GoogleAudienceID: sdk.String("blanditiis"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("repudiandae"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(9916.88),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("beatae"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("qui"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("laboriosam"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("temporibus"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("in"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("voluptatibus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(704412),
                                StartHour: sdk.Int(817057),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierParentalGuidance.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeTriplelift.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quaerat"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnknown.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("ab"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("unde"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("nemo"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolorem"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("ut"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nulla"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7907.73),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("sequi"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("veritatis"),
                                ProximityRadius: sdk.Float64(3308.37),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("assumenda"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryWeapons.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterAviation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumCelebrityGossip,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("fuga"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate75PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability50PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "maxime",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("ut"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("et"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability90PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("distinctio"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("itaque"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2529.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("quidem"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("natus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("repudiandae"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("veniam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("debitis"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("esse"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("porro"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quisquam"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quidem"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("suscipit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ipsam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("molestiae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("vel"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("provident"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolore"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("soluta"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5810.17),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aspernatur"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("sit"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nulla"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnspecified.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(951633),
                                StartHour: sdk.Int(768772),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierFamilies.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeJcd.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("consequatur"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeLower50Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("provident"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("numquam"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("numquam"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("tempore"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("amet"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("illum"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sed"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4444.94),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("dolores"),
                                ProximityRadius: sdk.Float64(9897.66),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitMiles.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("doloremque"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDrugs.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("excepturi"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumParkingPage,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumUnmoderatedUgc,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("excepturi"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate80PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability60PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance10PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "exercitationem",
                                        "ducimus",
                                        "dolore",
                                        "iste",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraqUnspecified.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("accusantium"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quo"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability20PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("pariatur"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("labore"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aliquid"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("vero"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformGenericCtv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sit"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("saepe"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("praesentium"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("perspiciatis"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("hic"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("accusantium"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("minus"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ipsa"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quia"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aspernatur"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("minus"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("illum"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(8005.98),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nemo"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("molestias"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("modi"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("similique"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                                EndHour: sdk.Int(817509),
                                StartHour: sdk.Int(607937),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierMature.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeBidswitch.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eligendi"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("enim"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("harum"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("aut"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("consectetur"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("rerum"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7625.4),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("corrupti"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("quas"),
                                ProximityRadius: sdk.Float64(3568.7),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("quas"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryAlcohol.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("labore"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumOccult,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterAviation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("similique"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "magni",
                                        "blanditiis",
                                        "assumenda",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("aliquid"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("eum"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("cumque"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("ab"),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5054.ToPointer(),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("et"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformGenericCtv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("iste"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aspernatur"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("sapiente"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("laboriosam"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("iste"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("iusto"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("culpa"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("reiciendis"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptates"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("placeat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("saepe"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("veritatis"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("cumque"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
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
                                            GoogleAudienceID: sdk.String("officiis"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quam"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("unde"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6872.4),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("libero"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ipsa"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("aliquam"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("vero"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("dolorum"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumTuesday.ToPointer(),
                                EndHour: sdk.Int(461568),
                                StartHour: sdk.Int(833479),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierUnrated.ToPointer(),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeSovrn.ToPointer(),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iusto"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("in"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("numquam"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("quia"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("ut"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("cupiditate"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7335.71),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("earum"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("debitis"),
                                ProximityRadius: sdk.Float64(7738.63),
                                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("ex"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryTragedy.ToPointer(),
                            },
                            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionFirstImpression.ToPointer(),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("provident"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSexEducation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNonEnglish,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("dolores"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate55PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X300Unspecified.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumVideoViewableRateUnspecified.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "accusantium",
                                        "ea",
                                        "laborum",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityUnspecified.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("doloremque"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("porro"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("vel"),
                                Negative: sdk.Bool(false),
                            },
                            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                VideoID: sdk.String("itaque"),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeNativeContentPosition.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "in",
                        "nesciunt",
                        "temporibus",
                        "temporibus",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeDigitalContentLabelExclusion.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "ut",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAudienceGroup.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "illo",
                        "corporis",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeAppCategory.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("dignissimos"),
        PartnerID: "doloremque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("minus"),
    }, operations.DisplayvideoPartnersEditAssignedTargetingOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkEditPartnerAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```

## DisplayvideoPartnersGet

Gets a partner.

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
    res, err := s.Partners.DisplayvideoPartnersGet(ctx, operations.DisplayvideoPartnersGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("magni"),
        PartnerID: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("quisquam"),
        UploadProtocol: sdk.String("odio"),
    }, operations.DisplayvideoPartnersGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Partner != nil {
        // handle response
    }
}
```

## DisplayvideoPartnersList

Lists partners that are accessible to the current user. The order is defined by the order_by parameter.

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
    res, err := s.Partners.DisplayvideoPartnersList(ctx, operations.DisplayvideoPartnersListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("illo"),
        Filter: sdk.String("reiciendis"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("doloremque"),
        OrderBy: sdk.String("quod"),
        PageSize: sdk.Int64(491881),
        PageToken: sdk.String("non"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("exercitationem"),
    }, operations.DisplayvideoPartnersListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPartnersResponse != nil {
        // handle response
    }
}
```

## DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a partner. Returns the assigned targeting option if successful.

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
    res, err := s.Partners.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(ctx, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRangeUnknown.ToPointer(),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("molestiae"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("vitae"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAppleTv.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("iste"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("reiciendis"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                        },
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("consequuntur"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("nobis"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("expedita"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("adipisci"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("atque"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("rem"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("exercitationem"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("tempore"),
                        },
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("eos"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("minima"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("assumenda"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("ad"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("voluptates"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("eligendi"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("consequuntur"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(613),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("sint"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("minus"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("excepturi"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("porro"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("nesciunt"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("maiores"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("esse"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                EndHour: sdk.Int(48077),
                StartHour: sdk.Int(933677),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("corporis"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetailsInput{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetails{
                ExcludedContentRatingTier: shared.DigitalContentLabelAssignedTargetingOptionDetailsExcludedContentRatingTierEnumContentRatingTierParentalGuidance.ToPointer(),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                Exchange: shared.ExchangeAssignedTargetingOptionDetailsExchangeEnumExchangeNend.ToPointer(),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("beatae"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop11To20Percent.ToPointer(),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("ex"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("consequuntur"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("delectus"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("nobis"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("laborum"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("debitis"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("architecto"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(107.92),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("odit"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("inventore"),
                ProximityRadius: sdk.Float64(3888.89),
                ProximityRadiusUnit: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusUnitEnumProximityRadiusUnitKilometers.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("repudiandae"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetails{
                ExcludedSensitiveCategory: shared.SensitiveCategoryAssignedTargetingOptionDetailsExcludedSensitiveCategoryEnumSensitiveCategoryDownloadsSharing.ToPointer(),
            },
            SessionPositionDetails: &shared.SessionPositionAssignedTargetingOptionDetails{
                SessionPosition: shared.SessionPositionAssignedTargetingOptionDetailsSessionPositionEnumSessionPositionUnspecified.ToPointer(),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("sequi"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains,
                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterVehicle,
                        },
                    },
                    CustomSegmentID: sdk.String("quibusdam"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate60PercentHigher.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud8.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "necessitatibus",
                        "velit",
                        "sint",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq750.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability60.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("odit"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("rerum"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
            },
            YoutubeChannelDetails: &shared.YoutubeChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("et"),
                Negative: sdk.Bool(false),
            },
            YoutubeVideoDetails: &shared.YoutubeVideoAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                VideoID: sdk.String("et"),
            },
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("temporibus"),
        OauthToken: sdk.String("et"),
        PartnerID: "debitis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeOnScreenPosition,
        UploadType: sdk.String("excepturi"),
        UploadProtocol: sdk.String("quas"),
    }, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity{
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

## DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a partner.

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
    res, err := s.Partners.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(ctx, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssignedTargetingOptionID: "quaerat",
        Callback: sdk.String("veniam"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("dolores"),
        PartnerID: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeBusinessChain,
        UploadType: sdk.String("dolores"),
        UploadProtocol: sdk.String("molestias"),
    }, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity{
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

## DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a partner.

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
    res, err := s.Partners.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(ctx, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "voluptate",
        Callback: sdk.String("eum"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("tempora"),
        PartnerID: "aspernatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeContentInstreamPosition,
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity{
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

## DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a partner.

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
    res, err := s.Partners.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsList(ctx, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("tempore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("distinctio"),
        Fields: sdk.String("minima"),
        Filter: sdk.String("cupiditate"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("et"),
        OrderBy: sdk.String("accusamus"),
        PageSize: sdk.Int64(566262),
        PageToken: sdk.String("deleniti"),
        PartnerID: "inventore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perspiciatis"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeUnspecified,
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPartnerAssignedTargetingOptionsResponse != nil {
        // handle response
    }
}
```
