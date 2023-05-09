# Partners

### Available Operations

* [DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptions](#displayvideopartnersbulkeditpartnerassignedtargetingoptions) - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [DisplayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [DisplayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [DisplayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [DisplayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [DisplayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [DisplayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [DisplayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [DisplayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [DisplayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

## DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptions

Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

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
    res, err := s.Partners.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptions(ctx, operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BulkEditPartnerAssignedTargetingOptionsRequestInput: &shared.BulkEditPartnerAssignedTargetingOptionsRequestInput{
            CreateRequests: []shared.CreateAssignedTargetingOptionsRequestInput{
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                                TargetingOptionID: sdk.String("commodi"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maxime"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("sed"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformSamsungTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("possimus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("aliquam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("eligendi"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("hic"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("illo"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nobis"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("esse"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nisi"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("sequi"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quos"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("vitae"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("rerum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolorem"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypePodcast.ToPointer(),
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nam"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ab"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2979.7),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("expedita"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("autem"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("tempore"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("recusandae"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nostrum"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("officia"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("excepturi"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("natus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumThursday.ToPointer(),
                                EndHour: sdk.Int(900411),
                                StartHour: sdk.Int(136770),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laborum"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                                TargetingOptionID: sdk.String("eos"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("voluptatem"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                                TargetingOptionID: sdk.String("id"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quae"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                                TargetingOptionID: sdk.String("a"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("minus"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("quia"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("iusto"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("ab"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("sint"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("ullam"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("molestiae"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                                TargetingOptionID: sdk.String("nemo"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2505.2),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("omnis"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("ipsa"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeSmall.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("dolor"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("occaecati"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quibusdam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
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
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdultContentSwimsuit,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("doloremque"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud10.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "libero",
                                        "ratione",
                                        "molestiae",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq500.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("quidem"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("exercitationem"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("veniam"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("quasi"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewabilityUnspecified.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange5564.ToPointer(),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quo"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("suscipit"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAmazonFiretv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("est"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("provident"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("deserunt"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Minutes.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quo"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("molestiae"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("facere"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("impedit"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("cupiditate"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("deleniti"),
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
                                                FirstAndThirdPartyAudienceID: sdk.String("laudantium"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("corrupti"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ea"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("libero"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("amet"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("minus"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("hic"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("similique"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6867.84),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("labore"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cumque"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("adipisci"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("itaque"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSunday.ToPointer(),
                                EndHour: sdk.Int(252854),
                                StartHour: sdk.Int(987362),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sapiente"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("numquam"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nobis"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeLower50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("consequuntur"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("voluptas"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("ratione"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("excepturi"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("est"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("perferendis"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1439.76),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("maxime"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("maxime"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeMedium.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("accusantium"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("ea"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate1Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterTerroristEvents,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumParkingPage,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSexEducation,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("odio"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate80PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability60PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance25PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "cum",
                                        "voluptatum",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("amet"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("nostrum"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("tenetur"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability40PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534.ToPointer(),
                                TargetingOptionID: sdk.String("ullam"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("velit"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("adipisci"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAppleTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("numquam"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("molestiae"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("repellendus"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency180Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("distinctio"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("necessitatibus"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("iste"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("corrupti"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ullam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("soluta"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("in"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("commodi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("ullam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("est"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("adipisci"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("totam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("qui"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                                TargetingOptionID: sdk.String("eligendi"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("deleniti"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2207.46),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odit"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("consectetur"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("inventore"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("minima"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPostRoll.ToPointer(),
                                TargetingOptionID: sdk.String("facilis"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ipsam"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                EndHour: sdk.Int(76786),
                                StartHour: sdk.Int(434955),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eveniet"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("ea"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("asperiores"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                                TargetingOptionID: sdk.String("quidem"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderMale.ToPointer(),
                                TargetingOptionID: sdk.String("deserunt"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repudiandae"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeLower50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("molestias"),
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
                                TargetingOptionID: sdk.String("assumenda"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("repudiandae"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("ipsum"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("commodi"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4018.44),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("eos"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("ad"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("a"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("facere"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
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
                                TargetingOptionID: sdk.String("enim"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("libero"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability60PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeDeviceMakeModel.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                                TargetingOptionID: sdk.String("corrupti"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("cum"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("commodi"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency15Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("autem"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("recusandae"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("odit"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("inventore"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("iste"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("explicabo"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("ullam"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("atque"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("pariatur"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("aut"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("similique"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("iste"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("animi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptate"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptates"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quaerat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("dolore"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecencyNoLimit.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("illum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dicta"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("atque"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ratione"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quisquam"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("atque"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6319.04),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("a"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ad"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cupiditate"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("suscipit"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("ab"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInBanner.ToPointer(),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(466022),
                                StartHour: sdk.Int(654931),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptatum"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quisquam"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("vitae"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentApp.ToPointer(),
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("sint"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quis"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop21To30Percent.ToPointer(),
                                TargetingOptionID: sdk.String("officia"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("iste"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("unde"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("quas"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("laboriosam"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatum"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("sapiente"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("dolor"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("hic"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iure"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                                TargetingOptionID: sdk.String("autem"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(6143.68),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("ab"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("fuga"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("dolor"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("voluptatum"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("molestias"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRateUnspecified.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAlcohol,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("consequatur"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate30PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X3005.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "doloremque",
                                        "sed",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq500.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewabilityUnspecified.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("necessitatibus"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("dignissimos"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("explicabo"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability30PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeUserRewardedContent.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534.ToPointer(),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sunt"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("ullam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformPlaystation.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("voluptates"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("est"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("illo"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("consequatur"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dolore"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nemo"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("quo"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("maxime"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("delectus"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("laboriosam"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quam"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("repellat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("soluta"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("culpa"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency90Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("atque"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency6Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("voluptates"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nesciunt"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quibusdam"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Day.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quidem"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("cumque"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("voluptatum"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("atque"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("expedita"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7024.18),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("aspernatur"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("impedit"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("nam"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ex"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                                TargetingOptionID: sdk.String("delectus"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInFeed.ToPointer(),
                                TargetingOptionID: sdk.String("ut"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumTuesday.ToPointer(),
                                EndHour: sdk.Int(176418),
                                StartHour: sdk.Int(333507),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionAdvertiser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sint"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeConnectedTv.ToPointer(),
                                TargetingOptionID: sdk.String("debitis"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("laboriosam"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("amet"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("reiciendis"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("tempore"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("in"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("omnis"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("possimus"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("tenetur"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionRecommendation.ToPointer(),
                                TargetingOptionID: sdk.String("expedita"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("iusto"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("harum"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ad"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quod"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("totam"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(8736.81),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("officia"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("cupiditate"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("illo"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate9Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSexEducation,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("maiores"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability65PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "corrupti",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability40.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq750.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("provident"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("necessitatibus"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("fugit"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeLarge.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("optio"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability90PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange65Plus.ToPointer(),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("a"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("natus"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformGenericCtv.ToPointer(),
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
                                            FirstAndThirdPartyAudienceID: sdk.String("dolore"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency5Minutes.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("accusantium"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("nisi"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("expedita"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("hic"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("blanditiis"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("iusto"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("velit"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("molestiae"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("nam"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("mollitia"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency365Days.ToPointer(),
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
                                            GoogleAudienceID: sdk.String("quam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("deleniti"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("rem"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                                TargetingOptionID: sdk.String("eos"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("labore"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("sunt"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(5015.91),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("incidunt"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("labore"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("sapiente"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInArticle.ToPointer(),
                                TargetingOptionID: sdk.String("accusantium"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ratione"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumMonday.ToPointer(),
                                EndHour: sdk.Int(990540),
                                StartHour: sdk.Int(103053),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("possimus"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("quasi"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("nemo"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("nobis"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("labore"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("veritatis"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeLower50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("magni"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("itaque"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("error"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("expedita"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("error"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                                TargetingOptionID: sdk.String("temporibus"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("voluptate"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("minima"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("odit"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odit"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("error"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4274.61),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitKilometers.ToPointer(),
                                TargetingOptionID: sdk.String("alias"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("itaque"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("sunt"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("amet"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("cum"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumBorderlineContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate12Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("amet"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate50PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud6.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "suscipit",
                                        "illum",
                                        "iusto",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
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
                                URL: sdk.String("perferendis"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("architecto"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("amet"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("nihil"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability80PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534.ToPointer(),
                                TargetingOptionID: sdk.String("magnam"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("ipsam"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformIos.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("praesentium"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("consequatur"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("tempora"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("dolor"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quam"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("officiis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("dicta"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("consectetur"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("deserunt"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("odit"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("corporis"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quaerat"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("tenetur"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency14Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("modi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eius"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("fugit"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency60Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("nobis"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("porro"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("perspiciatis"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ducimus"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("qui"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(1862.11),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("ratione"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("saepe"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("iure"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("aliquid"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("cum"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fugiat"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionMidRoll.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatibus"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial.ToPointer(),
                                TargetingOptionID: sdk.String("corporis"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("repellendus"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumDayOfWeekUnspecified.ToPointer(),
                                EndHour: sdk.Int(31605),
                                StartHour: sdk.Int(727789),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeSmartPhone.ToPointer(),
                                TargetingOptionID: sdk.String("officiis"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("delectus"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("sit"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("velit"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("neque"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("corporis"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("cupiditate"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("aut"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("impedit"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionPeripheral.ToPointer(),
                                TargetingOptionID: sdk.String("quo"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("architecto"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("perspiciatis"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("ea"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("eius"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(2478.38),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("sequi"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("rerum"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeUnspecified.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("debitis"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("quis"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("eaque"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumFraud,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate2Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumAdultContentPornography,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCriminalSkills,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumGambling,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdServers,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("assumenda"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRateUnspecified.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration15Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud4.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability30PercentHihger.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance40PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "corrupti",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability70.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHmr.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHmr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceHmr.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq600.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability70.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("quasi"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("accusamus"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("animi"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnknown.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("voluptatem"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability90PercentOrMore.ToPointer(),
                            },
                        },
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange3544.ToPointer(),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fuga"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("itaque"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sed"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("eligendi"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("distinctio"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quas"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("unde"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("et"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("quisquam"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("sed"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("suscipit"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("facere"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("nam"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quaerat"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("corrupti"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("sint"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("quasi"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency120Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("odio"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency2Hours.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("inventore"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("recusandae"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("commodi"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("possimus"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeMusic.ToPointer(),
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("sit"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("fugit"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(9521.1),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("vero"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("id"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("error"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("ratione"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("perferendis"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("distinctio"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionPreRoll.ToPointer(),
                                TargetingOptionID: sdk.String("sint"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial.ToPointer(),
                                TargetingOptionID: sdk.String("nihil"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("fuga"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSaturday.ToPointer(),
                                EndHour: sdk.Int(160988),
                                StartHour: sdk.Int(981067),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionEndUser.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("explicabo"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                                TargetingOptionID: sdk.String("quos"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("deleniti"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebOptimized.ToPointer(),
                                TargetingOptionID: sdk.String("sit"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderFemale.ToPointer(),
                                TargetingOptionID: sdk.String("voluptatem"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("tempora"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop31To40Percent.ToPointer(),
                                TargetingOptionID: sdk.String("quasi"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("veritatis"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("ex"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("doloremque"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("quas"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("perferendis"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("esse"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("blanditiis"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("laudantium"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("voluptates"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("autem"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(4235.5),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("quos"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("consectetur"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeMedium.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("tenetur"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("necessitatibus"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("perspiciatis"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumIllegalContent,
                                        shared.AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate4Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAgeRatingUnspecified,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumSubstanceAbuse,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumNuisanceIncentivizedMalwareClutter,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHateProfanity,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterManMade,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSexEducation,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumSmoking,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumMediumSeverityUnspecified,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("nam"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate70PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDurationUnspecified.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud100.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30025.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability75PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance20PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "consectetur",
                                        "reprehenderit",
                                        "eligendi",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability60.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHr.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsUnspecified.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq700.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability40.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("explicabo"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("eligendi"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("cupiditate"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeHd.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("odit"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability60PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeBusinessChain.ToPointer(),
                },
                shared.CreateAssignedTargetingOptionsRequestInput{
                    AssignedTargetingOptions: []shared.AssignedTargetingOptionInput{
                        shared.AssignedTargetingOptionInput{
                            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange1824.ToPointer(),
                                TargetingOptionID: sdk.String("nulla"),
                            },
                            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("est"),
                            },
                            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                                AppID: sdk.String("sapiente"),
                                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAndroidTv.ToPointer(),
                                Negative: sdk.Bool(false),
                            },
                            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("quasi"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("voluptatum"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency7Days.ToPointer(),
                                        },
                                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            FirstAndThirdPartyAudienceID: sdk.String("sapiente"),
                                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                                        },
                                    },
                                },
                                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("labore"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("ut"),
                                        },
                                    },
                                },
                                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                                    Settings: []shared.CombinedAudienceTargetingSetting{
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("nihil"),
                                        },
                                        shared.CombinedAudienceTargetingSetting{
                                            CombinedAudienceID: sdk.String("ratione"),
                                        },
                                    },
                                },
                                IncludedCustomListGroup: &shared.CustomListGroup{
                                    Settings: []shared.CustomListTargetingSetting{
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("saepe"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("quod"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("nulla"),
                                        },
                                        shared.CustomListTargetingSetting{
                                            CustomListID: sdk.String("tempora"),
                                        },
                                    },
                                },
                                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("nemo"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                    shared.FirstAndThirdPartyAudienceGroup{
                                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("eum"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Hour.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("placeat"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Days.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("sed"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency1Minute.ToPointer(),
                                            },
                                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                                FirstAndThirdPartyAudienceID: sdk.String("natus"),
                                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency30Minutes.ToPointer(),
                                            },
                                        },
                                    },
                                },
                                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                                    Settings: []shared.GoogleAudienceTargetingSetting{
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("unde"),
                                        },
                                        shared.GoogleAudienceTargetingSetting{
                                            GoogleAudienceID: sdk.String("deserunt"),
                                        },
                                    },
                                },
                            },
                            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeBroadcast.ToPointer(),
                                TargetingOptionID: sdk.String("ex"),
                            },
                            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("optio"),
                            },
                            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(8696.02),
                                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("asperiores"),
                            },
                            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("nam"),
                            },
                            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("cumque"),
                            },
                            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                                ChannelID: sdk.String("sapiente"),
                                Negative: sdk.Bool(false),
                            },
                            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("quam"),
                            },
                            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("occaecati"),
                            },
                            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("culpa"),
                            },
                            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionUnspecified.ToPointer(),
                                TargetingOptionID: sdk.String("rem"),
                            },
                            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("fuga"),
                            },
                            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumWednesday.ToPointer(),
                                EndHour: sdk.Int(518338),
                                StartHour: sdk.Int(168546),
                                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
                            },
                            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("harum"),
                            },
                            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                                TargetingOptionID: sdk.String("omnis"),
                            },
                            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("quis"),
                            },
                            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                                TargetingOptionID: sdk.String("natus"),
                            },
                            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("aliquam"),
                            },
                            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("nisi"),
                            },
                            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("praesentium"),
                            },
                            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeTop41To50Percent.ToPointer(),
                                TargetingOptionID: sdk.String("vitae"),
                            },
                            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                                InventorySourceID: sdk.String("animi"),
                            },
                            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                                InventorySourceGroupID: sdk.String("possimus"),
                            },
                            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                                Keyword: sdk.String("libero"),
                                Negative: sdk.Bool(false),
                            },
                            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("ullam"),
                            },
                            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionUnknown.ToPointer(),
                                TargetingOptionID: sdk.String("maiores"),
                            },
                            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                                NegativeKeywordListID: sdk.String("iste"),
                            },
                            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                                TargetingOptionID: sdk.String("ipsam"),
                            },
                            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("fugiat"),
                            },
                            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                                Negative: sdk.Bool(false),
                                TargetingOptionID: sdk.String("odio"),
                            },
                            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusParent.ToPointer(),
                                TargetingOptionID: sdk.String("inventore"),
                            },
                            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                                ProximityRadiusAmount: sdk.Float64(7571.3),
                                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                                TargetingOptionID: sdk.String("doloribus"),
                            },
                            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                                ProximityLocationListID: sdk.String("necessitatibus"),
                                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeMedium.ToPointer(),
                            },
                            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                RegionalLocationListID: sdk.String("a"),
                            },
                            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                                ExcludedTargetingOptionID: sdk.String("nihil"),
                            },
                            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("veniam"),
                            },
                            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                                Adloox: &shared.Adloox{
                                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                                    },
                                },
                                DoubleVerify: &shared.DoubleVerify{
                                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                                        AvoidInsufficientStarRating: sdk.Bool(false),
                                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRate3Point5Less.ToPointer(),
                                    },
                                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate18Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate17Plus,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRateUnknown,
                                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                                    },
                                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumHigherSeverityUnspecified,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumGraphicViolenceWeapons,
                                        },
                                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumAdServers,
                                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumNegativeNewsPharmaceutical,
                                        },
                                    },
                                    CustomSegmentID: sdk.String("et"),
                                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate65PercentHigher.ToPointer(),
                                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                                    },
                                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                                        AvoidInsufficientOption: sdk.Bool(false),
                                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud50.ToPointer(),
                                    },
                                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30095.ToPointer(),
                                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability70PercentHigher.ToPointer(),
                                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance35PercentHigher.ToPointer(),
                                    },
                                },
                                IntegralAdScience: &shared.IntegralAdScience{
                                    CustomSegmentID: []string{
                                        "voluptate",
                                    },
                                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewability50.ToPointer(),
                                    ExcludeUnrateable: sdk.Bool(false),
                                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultUnspecified.ToPointer(),
                                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholHmr.ToPointer(),
                                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsHmr.ToPointer(),
                                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingUnspecified.ToPointer(),
                                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechHr.ToPointer(),
                                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageUnspecified.ToPointer(),
                                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraq1000.ToPointer(),
                                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                                },
                            },
                            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                                Negative: sdk.Bool(false),
                                URL: sdk.String("aliquid"),
                            },
                            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                                TargetingOptionID: sdk.String("consequuntur"),
                            },
                            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("laboriosam"),
                                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeSmall.ToPointer(),
                            },
                            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                                TargetingOptionID: sdk.String("reprehenderit"),
                                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability70PercentOrMore.ToPointer(),
                            },
                        },
                    },
                    TargetingType: shared.CreateAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeVideoPlayerSize.ToPointer(),
                },
            },
            DeleteRequests: []shared.DeleteAssignedTargetingOptionsRequest{
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "maxime",
                        "vel",
                        "distinctio",
                        "cupiditate",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeOmid.ToPointer(),
                },
                shared.DeleteAssignedTargetingOptionsRequest{
                    AssignedTargetingOptionIds: []string{
                        "deleniti",
                        "iusto",
                    },
                    TargetingType: shared.DeleteAssignedTargetingOptionsRequestTargetingTypeEnumTargetingTypeExchange.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("nostrum"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("aliquid"),
        PartnerID: "quam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity{
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
            AdvertiserID: sdk.String("totam"),
            DisplayName: sdk.String("velit"),
            PartnerID: sdk.String("quasi"),
        },
        AccessToken: sdk.String("sed"),
        AdvertiserID: sdk.String("officiis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("dolore"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("libero"),
        PartnerID: "ut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("beatae"),
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
        AccessToken: sdk.String("cumque"),
        AdvertiserID: sdk.String("distinctio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("culpa"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("minus"),
        OrderBy: sdk.String("vero"),
        PageSize: sdk.Int64(773332),
        PageToken: sdk.String("omnis"),
        PartnerID: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("est"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ChannelInput: &shared.ChannelInput{
            AdvertiserID: sdk.String("fugiat"),
            DisplayName: sdk.String("nulla"),
            PartnerID: sdk.String("totam"),
        },
        AccessToken: sdk.String("praesentium"),
        AdvertiserID: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vitae"),
        ChannelID: "delectus",
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("minus"),
        OauthToken: sdk.String("labore"),
        PartnerID: "quas",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sed"),
        UpdateMask: sdk.String("veniam"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("quibusdam"),
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
            AdvertiserID: sdk.String("voluptate"),
            CreatedSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("et"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("eveniet"),
                },
            },
            DeletedSites: []string{
                "hic",
                "at",
            },
            PartnerID: sdk.String("perferendis"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aut"),
        ChannelID: "consequatur",
        Fields: sdk.String("iste"),
        Key: sdk.String("accusamus"),
        OauthToken: sdk.String("repellat"),
        PartnerID: "voluptatum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facere"),
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("natus"),
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
        AccessToken: sdk.String("voluptates"),
        AdvertiserID: sdk.String("illo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fugiat"),
        ChannelID: "ducimus",
        Fields: sdk.String("aut"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("voluptate"),
        PartnerID: "tempore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("mollitia"),
        URLOrAppID: "ipsa",
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
        AccessToken: sdk.String("quo"),
        AdvertiserID: sdk.String("ullam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("doloribus"),
        ChannelID: "id",
        Fields: sdk.String("eum"),
        Filter: sdk.String("cumque"),
        Key: sdk.String("odio"),
        OauthToken: sdk.String("atque"),
        OrderBy: sdk.String("similique"),
        PageSize: sdk.Int64(158515),
        PageToken: sdk.String("architecto"),
        PartnerID: "ea",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("excepturi"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReplaceSitesRequestInput: &shared.ReplaceSitesRequestInput{
            AdvertiserID: sdk.String("laborum"),
            NewSites: []shared.SiteInput{
                shared.SiteInput{
                    URLOrAppID: sdk.String("repudiandae"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("minus"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("officia"),
                },
                shared.SiteInput{
                    URLOrAppID: sdk.String("laboriosam"),
                },
            },
            PartnerID: sdk.String("illo"),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("aliquam"),
        ChannelID: "excepturi",
        Fields: sdk.String("atque"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("magnam"),
        PartnerID: "doloremque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("eius"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("voluptate"),
        PartnerID: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("voluptatem"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("neque"),
        Filter: sdk.String("nihil"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("numquam"),
        OrderBy: sdk.String("mollitia"),
        PageSize: sdk.Int64(651504),
        PageToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("quas"),
        UploadProtocol: sdk.String("quis"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AssignedTargetingOptionInput: &shared.AssignedTargetingOptionInput{
            AgeRangeDetails: &shared.AgeRangeAssignedTargetingOptionDetails{
                AgeRange: shared.AgeRangeAssignedTargetingOptionDetailsAgeRangeEnumAgeRange2534.ToPointer(),
                TargetingOptionID: sdk.String("iste"),
            },
            AppCategoryDetails: &shared.AppCategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("ea"),
            },
            AppDetails: &shared.AppAssignedTargetingOptionDetailsInput{
                AppID: sdk.String("autem"),
                AppPlatform: shared.AppAssignedTargetingOptionDetailsAppPlatformEnumAppPlatformAmazonFiretv.ToPointer(),
                Negative: sdk.Bool(false),
            },
            AudienceGroupDetails: &shared.AudienceGroupAssignedTargetingOptionDetails{
                ExcludedFirstAndThirdPartyAudienceGroup: &shared.FirstAndThirdPartyAudienceGroup{
                    Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                        shared.FirstAndThirdPartyAudienceTargetingSetting{
                            FirstAndThirdPartyAudienceID: sdk.String("magni"),
                            Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency21Days.ToPointer(),
                        },
                    },
                },
                ExcludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("voluptas"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("temporibus"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("porro"),
                        },
                    },
                },
                IncludedCombinedAudienceGroup: &shared.CombinedAudienceGroup{
                    Settings: []shared.CombinedAudienceTargetingSetting{
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("commodi"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("autem"),
                        },
                        shared.CombinedAudienceTargetingSetting{
                            CombinedAudienceID: sdk.String("praesentium"),
                        },
                    },
                },
                IncludedCustomListGroup: &shared.CustomListGroup{
                    Settings: []shared.CustomListTargetingSetting{
                        shared.CustomListTargetingSetting{
                            CustomListID: sdk.String("quisquam"),
                        },
                    },
                },
                IncludedFirstAndThirdPartyAudienceGroups: []shared.FirstAndThirdPartyAudienceGroup{
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("eaque"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("blanditiis"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency45Days.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("assumenda"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency12Hours.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("a"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency40Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("laboriosam"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("occaecati"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency10Minutes.ToPointer(),
                            },
                        },
                    },
                    shared.FirstAndThirdPartyAudienceGroup{
                        Settings: []shared.FirstAndThirdPartyAudienceTargetingSetting{
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("omnis"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency28Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("molestias"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency270Days.ToPointer(),
                            },
                            shared.FirstAndThirdPartyAudienceTargetingSetting{
                                FirstAndThirdPartyAudienceID: sdk.String("dignissimos"),
                                Recency: shared.FirstAndThirdPartyAudienceTargetingSettingRecencyEnumRecency3Hours.ToPointer(),
                            },
                        },
                    },
                },
                IncludedGoogleAudienceGroup: &shared.GoogleAudienceGroup{
                    Settings: []shared.GoogleAudienceTargetingSetting{
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("dolore"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("aliquid"),
                        },
                        shared.GoogleAudienceTargetingSetting{
                            GoogleAudienceID: sdk.String("repudiandae"),
                        },
                    },
                },
            },
            AudioContentTypeDetails: &shared.AudioContentTypeAssignedTargetingOptionDetails{
                AudioContentType: shared.AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnumAudioContentTypeUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("quod"),
            },
            AuthorizedSellerStatusDetails: &shared.AuthorizedSellerStatusAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("dolorem"),
            },
            BrowserDetails: &shared.BrowserAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("neque"),
            },
            BusinessChainDetails: &shared.BusinessChainAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(563.71),
                ProximityRadiusUnit: shared.BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                TargetingOptionID: sdk.String("repellendus"),
            },
            CarrierAndIspDetails: &shared.CarrierAndIspAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("soluta"),
            },
            CategoryDetails: &shared.CategoryAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("aut"),
            },
            ChannelDetails: &shared.ChannelAssignedTargetingOptionDetails{
                ChannelID: sdk.String("ullam"),
                Negative: sdk.Bool(false),
            },
            ContentDurationDetails: &shared.ContentDurationAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("amet"),
            },
            ContentGenreDetails: &shared.ContentGenreAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("iure"),
            },
            ContentInstreamPositionDetails: &shared.ContentInstreamPositionAssignedTargetingOptionDetailsInput{
                ContentInstreamPosition: shared.ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnumContentInstreamPositionUnknown.ToPointer(),
                TargetingOptionID: sdk.String("sint"),
            },
            ContentOutstreamPositionDetails: &shared.ContentOutstreamPositionAssignedTargetingOptionDetailsInput{
                ContentOutstreamPosition: shared.ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnumContentOutstreamPositionInterstitial.ToPointer(),
                TargetingOptionID: sdk.String("nihil"),
            },
            ContentStreamTypeDetails: &shared.ContentStreamTypeAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("ad"),
            },
            DayAndTimeDetails: &shared.DayAndTimeAssignedTargetingOptionDetails{
                DayOfWeek: shared.DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnumSaturday.ToPointer(),
                EndHour: sdk.Int(682756),
                StartHour: sdk.Int(5938),
                TimeZoneResolution: shared.DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnumTimeZoneResolutionUnspecified.ToPointer(),
            },
            DeviceMakeModelDetails: &shared.DeviceMakeModelAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("iure"),
            },
            DeviceTypeDetails: &shared.DeviceTypeAssignedTargetingOptionDetails{
                DeviceType: shared.DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnumDeviceTypeTablet.ToPointer(),
                TargetingOptionID: sdk.String("quis"),
            },
            DigitalContentLabelExclusionDetails: &shared.DigitalContentLabelAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("dolorem"),
            },
            EnvironmentDetails: &shared.EnvironmentAssignedTargetingOptionDetails{
                Environment: shared.EnvironmentAssignedTargetingOptionDetailsEnvironmentEnumEnvironmentWebNotOptimized.ToPointer(),
                TargetingOptionID: sdk.String("sed"),
            },
            ExchangeDetails: &shared.ExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("quo"),
            },
            GenderDetails: &shared.GenderAssignedTargetingOptionDetails{
                Gender: shared.GenderAssignedTargetingOptionDetailsGenderEnumGenderUnspecified.ToPointer(),
                TargetingOptionID: sdk.String("illo"),
            },
            GeoRegionDetails: &shared.GeoRegionAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("est"),
            },
            HouseholdIncomeDetails: &shared.HouseholdIncomeAssignedTargetingOptionDetails{
                HouseholdIncome: shared.HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnumHouseholdIncomeUnknown.ToPointer(),
                TargetingOptionID: sdk.String("veniam"),
            },
            InventorySourceDetails: &shared.InventorySourceAssignedTargetingOptionDetails{
                InventorySourceID: sdk.String("est"),
            },
            InventorySourceGroupDetails: &shared.InventorySourceGroupAssignedTargetingOptionDetails{
                InventorySourceGroupID: sdk.String("rem"),
            },
            KeywordDetails: &shared.KeywordAssignedTargetingOptionDetails{
                Keyword: sdk.String("cum"),
                Negative: sdk.Bool(false),
            },
            LanguageDetails: &shared.LanguageAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("maiores"),
            },
            NativeContentPositionDetails: &shared.NativeContentPositionAssignedTargetingOptionDetails{
                ContentPosition: shared.NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnumNativeContentPositionInFeed.ToPointer(),
                TargetingOptionID: sdk.String("sunt"),
            },
            NegativeKeywordListDetails: &shared.NegativeKeywordListAssignedTargetingOptionDetails{
                NegativeKeywordListID: sdk.String("maiores"),
            },
            OmidDetails: &shared.OmidAssignedTargetingOptionDetails{
                Omid: shared.OmidAssignedTargetingOptionDetailsOmidEnumOmidForMobileDisplayAds.ToPointer(),
                TargetingOptionID: sdk.String("ducimus"),
            },
            OnScreenPositionDetails: &shared.OnScreenPositionAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("dolore"),
            },
            OperatingSystemDetails: &shared.OperatingSystemAssignedTargetingOptionDetailsInput{
                Negative: sdk.Bool(false),
                TargetingOptionID: sdk.String("aspernatur"),
            },
            ParentalStatusDetails: &shared.ParentalStatusAssignedTargetingOptionDetails{
                ParentalStatus: shared.ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnumParentalStatusNotAParent.ToPointer(),
                TargetingOptionID: sdk.String("fuga"),
            },
            PoiDetails: &shared.PoiAssignedTargetingOptionDetailsInput{
                ProximityRadiusAmount: sdk.Float64(8697.18),
                ProximityRadiusUnit: shared.PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnumDistanceUnitMiles.ToPointer(),
                TargetingOptionID: sdk.String("laborum"),
            },
            ProximityLocationListDetails: &shared.ProximityLocationListAssignedTargetingOptionDetails{
                ProximityLocationListID: sdk.String("provident"),
                ProximityRadiusRange: shared.ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnumProximityRadiusRangeLarge.ToPointer(),
            },
            RegionalLocationListDetails: &shared.RegionalLocationListAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                RegionalLocationListID: sdk.String("corrupti"),
            },
            SensitiveCategoryExclusionDetails: &shared.SensitiveCategoryAssignedTargetingOptionDetailsInput{
                ExcludedTargetingOptionID: sdk.String("soluta"),
            },
            SubExchangeDetails: &shared.SubExchangeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("earum"),
            },
            ThirdPartyVerifierDetails: &shared.ThirdPartyVerifierAssignedTargetingOptionDetails{
                Adloox: &shared.Adloox{
                    ExcludedAdlooxCategories: []shared.AdlooxExcludedAdlooxCategoriesEnum{
                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                        shared.AdlooxExcludedAdlooxCategoriesEnumAdultContentHard,
                        shared.AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified,
                    },
                },
                DoubleVerify: &shared.DoubleVerify{
                    AppStarRating: &shared.DoubleVerifyAppStarRating{
                        AvoidInsufficientStarRating: sdk.Bool(false),
                        AvoidedStarRating: shared.DoubleVerifyAppStarRatingAvoidedStarRatingEnumAppStarRateUnspecified.ToPointer(),
                    },
                    AvoidedAgeRatings: []shared.DoubleVerifyAvoidedAgeRatingsEnum{
                        shared.DoubleVerifyAvoidedAgeRatingsEnumAppAgeRate4Plus,
                    },
                    BrandSafetyCategories: &shared.DoubleVerifyBrandSafetyCategories{
                        AvoidUnknownBrandSafetyCategory: sdk.Bool(false),
                        AvoidedHighSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnumCopyrightInfringement,
                        },
                        AvoidedMediumSeverityCategories: []shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum{
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumParkingPage,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterVehicle,
                            shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnumDisasterNatural,
                        },
                    },
                    CustomSegmentID: sdk.String("consectetur"),
                    DisplayViewability: &shared.DoubleVerifyDisplayViewability{
                        Iab: shared.DoubleVerifyDisplayViewabilityIabEnumIabViewedRate60PercentHigher.ToPointer(),
                        ViewableDuring: shared.DoubleVerifyDisplayViewabilityViewableDuringEnumAverageViewDuration5Sec.ToPointer(),
                    },
                    FraudInvalidTraffic: &shared.DoubleVerifyFraudInvalidTraffic{
                        AvoidInsufficientOption: sdk.Bool(false),
                        AvoidedFraudOption: shared.DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnumAdImpressionFraud2.ToPointer(),
                    },
                    VideoViewability: &shared.DoubleVerifyVideoViewability{
                        PlayerImpressionRate: shared.DoubleVerifyVideoViewabilityPlayerImpressionRateEnumPlayerSize400X30070.ToPointer(),
                        VideoIab: shared.DoubleVerifyVideoViewabilityVideoIabEnumIabViewability55PercentHihger.ToPointer(),
                        VideoViewableRate: shared.DoubleVerifyVideoViewabilityVideoViewableRateEnumViewedPerformance30PercentHigher.ToPointer(),
                    },
                },
                IntegralAdScience: &shared.IntegralAdScience{
                    CustomSegmentID: []string{
                        "maxime",
                        "assumenda",
                        "nihil",
                    },
                    DisplayViewability: shared.IntegralAdScienceDisplayViewabilityEnumPerformanceViewabilityUnspecified.ToPointer(),
                    ExcludeUnrateable: sdk.Bool(false),
                    ExcludedAdFraudRisk: shared.IntegralAdScienceExcludedAdFraudRiskEnumSuspiciousActivityHmr.ToPointer(),
                    ExcludedAdultRisk: shared.IntegralAdScienceExcludedAdultRiskEnumAdultHmr.ToPointer(),
                    ExcludedAlcoholRisk: shared.IntegralAdScienceExcludedAlcoholRiskEnumAlcoholUnspecified.ToPointer(),
                    ExcludedDrugsRisk: shared.IntegralAdScienceExcludedDrugsRiskEnumDrugsUnspecified.ToPointer(),
                    ExcludedGamblingRisk: shared.IntegralAdScienceExcludedGamblingRiskEnumGamblingHr.ToPointer(),
                    ExcludedHateSpeechRisk: shared.IntegralAdScienceExcludedHateSpeechRiskEnumHateSpeechUnspecified.ToPointer(),
                    ExcludedIllegalDownloadsRisk: shared.IntegralAdScienceExcludedIllegalDownloadsRiskEnumIllegalDownloadsHmr.ToPointer(),
                    ExcludedOffensiveLanguageRisk: shared.IntegralAdScienceExcludedOffensiveLanguageRiskEnumOffensiveLanguageHmr.ToPointer(),
                    ExcludedViolenceRisk: shared.IntegralAdScienceExcludedViolenceRiskEnumViolenceUnspecified.ToPointer(),
                    TraqScoreOption: shared.IntegralAdScienceTraqScoreOptionEnumTraqUnspecified.ToPointer(),
                    VideoViewability: shared.IntegralAdScienceVideoViewabilityEnumVideoViewability50.ToPointer(),
                },
            },
            URLDetails: &shared.URLAssignedTargetingOptionDetails{
                Negative: sdk.Bool(false),
                URL: sdk.String("eos"),
            },
            UserRewardedContentDetails: &shared.UserRewardedContentAssignedTargetingOptionDetailsInput{
                TargetingOptionID: sdk.String("omnis"),
            },
            VideoPlayerSizeDetails: &shared.VideoPlayerSizeAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("reiciendis"),
                VideoPlayerSize: shared.VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnumVideoPlayerSizeUnspecified.ToPointer(),
            },
            ViewabilityDetails: &shared.ViewabilityAssignedTargetingOptionDetails{
                TargetingOptionID: sdk.String("similique"),
                Viewability: shared.ViewabilityAssignedTargetingOptionDetailsViewabilityEnumViewability70PercentOrMore.ToPointer(),
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("exercitationem"),
        OauthToken: sdk.String("nihil"),
        PartnerID: "quia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnumTargetingTypeContentGenre,
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("dicta"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AssignedTargetingOptionID: "nobis",
        Callback: sdk.String("quasi"),
        Fields: sdk.String("itaque"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("vitae"),
        PartnerID: "temporibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnumTargetingTypeViewability,
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("neque"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AssignedTargetingOptionID: "saepe",
        Callback: sdk.String("amet"),
        Fields: sdk.String("labore"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("eos"),
        PartnerID: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repellat"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnumTargetingTypeViewability,
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("officia"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("iure"),
        Filter: sdk.String("nulla"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("iste"),
        OrderBy: sdk.String("aspernatur"),
        PageSize: sdk.Int64(136629),
        PageToken: sdk.String("et"),
        PartnerID: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        TargetingType: operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnumTargetingTypeAudioContentType,
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("sunt"),
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
