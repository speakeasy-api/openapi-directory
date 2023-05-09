# partners

### Available Operations

* [displayvideoPartnersBulkEditPartnerAssignedTargetingOptions](#displayvideopartnersbulkeditpartnerassignedtargetingoptions) - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
* [displayvideoPartnersChannelsCreate](#displayvideopartnerschannelscreate) - Creates a new channel. Returns the newly created channel if successful.
* [displayvideoPartnersChannelsList](#displayvideopartnerschannelslist) - Lists channels for a partner or advertiser.
* [displayvideoPartnersChannelsPatch](#displayvideopartnerschannelspatch) - Updates a channel. Returns the updated channel if successful.
* [displayvideoPartnersChannelsSitesBulkEdit](#displayvideopartnerschannelssitesbulkedit) - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
* [displayvideoPartnersChannelsSitesDelete](#displayvideopartnerschannelssitesdelete) - Deletes a site from a channel.
* [displayvideoPartnersChannelsSitesList](#displayvideopartnerschannelssiteslist) - Lists sites in a channel.
* [displayvideoPartnersChannelsSitesReplace](#displayvideopartnerschannelssitesreplace) - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
* [displayvideoPartnersGet](#displayvideopartnersget) - Gets a partner.
* [displayvideoPartnersList](#displayvideopartnerslist) - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate](#displayvideopartnerstargetingtypesassignedtargetingoptionscreate) - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete](#displayvideopartnerstargetingtypesassignedtargetingoptionsdelete) - Deletes an assigned targeting option from a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet](#displayvideopartnerstargetingtypesassignedtargetingoptionsget) - Gets a single targeting option assigned to a partner.
* [displayvideoPartnersTargetingTypesAssignedTargetingOptionsList](#displayvideopartnerstargetingtypesassignedtargetingoptionslist) - Lists the targeting options assigned to a partner.

## displayvideoPartnersBulkEditPartnerAssignedTargetingOptions

Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity;
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
import org.openapis.openapi.models.shared.BulkEditPartnerAssignedTargetingOptionsRequestInput;
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

            DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest req = new DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest("omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditPartnerAssignedTargetingOptionsRequestInput = new BulkEditPartnerAssignedTargetingOptionsRequestInput() {{
                    createRequests = new org.openapis.openapi.models.shared.CreateAssignedTargetingOptionsRequestInput[]{{
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE2534;
                                        targetingOptionId = "vero";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nisi";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "praesentium";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_AMAZON_FIRETV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "animi";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ullam";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quaerat";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "maiores";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "accusamus";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "ipsam";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "fugiat";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ullam";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "inventore";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "doloribus";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY120_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "rem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nihil";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY12_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "magni";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nulla";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "non";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "enim";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "blanditiis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "a";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "autem";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "dolore";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "nostrum";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ex";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "amet";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4543.86;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "voluptatibus";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ipsum";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "hic";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "quidem";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "odit";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestiae";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "quia";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "doloribus";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "praesentium";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.WEDNESDAY;
                                        endHour = 163910;
                                        startHour = 389440;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "reprehenderit";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                        targetingOptionId = "ipsum";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "vel";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_APP;
                                        targetingOptionId = "maxime";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "vel";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_FEMALE;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "hic";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_LOWER50_PERCENT;
                                        targetingOptionId = "deleniti";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "iusto";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "quod";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "saepe";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ad";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNKNOWN;
                                        targetingOptionId = "nostrum";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "minus";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "quam";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ea";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "numquam";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "fuga";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5190.99;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "quasi";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "sed";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_LARGE;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "veniam";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "quae";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dolore";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
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
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALCOHOL),
                                                }};
                                            }};
                                            customSegmentId = "facilis";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE50_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD6;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.VIDEO_IAB_UNSPECIFIED;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE10_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("est"),
                                                add("distinctio"),
                                                add("fugiat"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY70;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_UNSPECIFIED;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY_UNSPECIFIED;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "veniam";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "sed";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quibusdam";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_LARGE;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "voluptate";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY40_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE_UNSPECIFIED;
                                        targetingOptionId = "eveniet";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptate";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "hic";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID_TV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "in";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY2_HOURS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consequatur";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "accusamus";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "repellat";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "voluptatum";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "consequuntur";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "natus";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "repellendus";
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
                                                        firstAndThirdPartyAudienceId = "fugiat";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "aut";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY14_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptate";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ullam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ipsa";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quos";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "quo";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "in";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "doloribus";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "id";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4293.44;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "odio";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "atque";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "similique";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "quia";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "architecto";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ea";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "illo";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                        targetingOptionId = "harum";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laborum";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SUNDAY;
                                        endHour = 922640;
                                        startHour = 795253;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "laboriosam";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "veritatis";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_OPTIMIZED;
                                        targetingOptionId = "excepturi";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "atque";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "magnam";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "doloremque";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP21_TO30_PERCENT;
                                        targetingOptionId = "suscipit";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "eius";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "maiores";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "delectus";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "quos";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "officiis";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "ab";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "consequatur";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "itaque";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "repellat";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "dolor";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7194.5;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "a";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "neque";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_SMALL;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "recusandae";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "numquam";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "mollitia";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.BORDERLINE_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ILLEGAL_CONTENT),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.DISCRIMINATORY_CONTENT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.SUBSTANCE_ABUSE),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.ALTERNATIVE_LIFESTYLES),
                                                }};
                                            }};
                                            customSegmentId = "animi";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE55_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD4;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30025;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY50_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("praesentium"),
                                                add("magni"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY60;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HMR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ1000;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY60;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "laboriosam";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "earum";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "occaecati";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNSPECIFIED;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "quidem";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY60_PERCENT_OR_MORE;
                                    }};
                                }}),
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE5564;
                                        targetingOptionId = "molestias";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "a";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "dignissimos";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ROKU;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "dolore";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_DAY;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "repudiandae";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                                }}),
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "quod";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY1_HOUR;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ipsa";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "repellendus";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "soluta";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "aut";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "amet";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "iure";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "voluptates";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ad";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "fuga";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "iure";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "dolorem";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "sed";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "illo";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY28_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "veniam";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                        targetingOptionId = "rem";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "cum";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "maiores";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 5882.02;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "maiores";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "excepturi";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "ducimus";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "dolore";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "aspernatur";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "molestias";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_POST_ROLL;
                                        targetingOptionId = "at";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                                        targetingOptionId = "laborum";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "provident";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SUNDAY;
                                        endHour = 545854;
                                        startHour = 743313;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_ADVERTISER;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "praesentium";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_UNSPECIFIED;
                                        targetingOptionId = "odit";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "illo";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                        targetingOptionId = "quia";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "ad";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "ullam";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "provident";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                        targetingOptionId = "iste";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "blanditiis";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "consectetur";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "totam";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dignissimos";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_RECOMMENDATION;
                                        targetingOptionId = "iusto";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "culpa";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_UNSPECIFIED;
                                        targetingOptionId = "cupiditate";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "maxime";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "assumenda";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_PARENT;
                                        targetingOptionId = "sed";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 7583.66;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "magni";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "modi";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_MEDIUM;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "dolore";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "possimus";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "dolorum";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_POINT5_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.ADULT_CONTENT_PORNOGRAPHY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.UNMODERATED_UGC),
                                                }};
                                            }};
                                            customSegmentId = "tenetur";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE70_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD100;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY30_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIDEO_VIEWABLE_RATE_UNSPECIFIED;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("eum"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY50;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_UNSPECIFIED;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ250;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "impedit";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "consequuntur";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "neque";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_UNKNOWN;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "amet";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY20_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_CONTENT_GENRE;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE65_PLUS;
                                        targetingOptionId = "repellat";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "mollitia";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "quaerat";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_XBOX;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "perspiciatis";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "iure";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nulla";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "recusandae";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "iste";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "aspernatur";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "ipsam";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "saepe";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "in";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "sed";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY_NO_LIMIT;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perspiciatis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "enim";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "nesciunt";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "saepe";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                                        targetingOptionId = "reiciendis";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "quis";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "modi";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 2383.71;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "praesentium";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nemo";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolore";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "numquam";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "dolor";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "perspiciatis";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "voluptates";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNSPECIFIED;
                                        targetingOptionId = "aspernatur";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "ut";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.TUESDAY;
                                        endHour = 386138;
                                        startHour = 37044;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "aliquam";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_COMPUTER;
                                        targetingOptionId = "expedita";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "impedit";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_UNSPECIFIED;
                                        targetingOptionId = "minima";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "magnam";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNSPECIFIED;
                                        targetingOptionId = "quos";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "atque";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_TOP11_TO20_PERCENT;
                                        targetingOptionId = "sunt";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "asperiores";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "corporis";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "vel";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "accusamus";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_IN_FEED;
                                        targetingOptionId = "ipsam";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "at";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "nihil";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "laudantium";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "dolorem";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                                        targetingOptionId = "officiis";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 6490.7;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_KILOMETERS;
                                        targetingOptionId = "fugiat";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "voluptas";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "odio";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "eligendi";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "nesciunt";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADLOOX_UNSPECIFIED),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_SOFT),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE_UNSPECIFIED;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HATE_PROFANITY),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_TERRORIST_EVENTS),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.MEDIUM_SEVERITY_UNSPECIFIED),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_MAN_MADE),
                                                }};
                                            }};
                                            customSegmentId = "temporibus";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE75_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION5_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.FRAUD_UNSPECIFIED;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30070;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("nam"),
                                                add("pariatur"),
                                                add("quod"),
                                                add("modi"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HR;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_UNSPECIFIED;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_UNSPECIFIED;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ500;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY70;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "facilis";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "minima";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "impedit";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "amet";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_BUSINESS_CHAIN;
                        }}),
                        add(new CreateAssignedTargetingOptionsRequestInput() {{
                            assignedTargetingOptions = new org.openapis.openapi.models.shared.AssignedTargetingOptionInput[]{{
                                add(new AssignedTargetingOptionInput() {{
                                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE3544;
                                        targetingOptionId = "nisi";
                                    }};
                                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "consectetur";
                                    }};
                                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                                        appId = "quos";
                                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_GENERIC_CTV;
                                        negative = false;
                                    }};
                                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                    firstAndThirdPartyAudienceId = "repudiandae";
                                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                                }}),
                                            }};
                                        }};
                                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "ducimus";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "atque";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "consectetur";
                                                }}),
                                            }};
                                        }};
                                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "provident";
                                                }}),
                                                add(new CombinedAudienceTargetingSetting() {{
                                                    combinedAudienceId = "accusamus";
                                                }}),
                                            }};
                                        }};
                                        includedCustomListGroup = new CustomListGroup() {{
                                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "impedit";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "minima";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "cumque";
                                                }}),
                                                add(new CustomListTargetingSetting() {{
                                                    customListId = "rerum";
                                                }}),
                                            }};
                                        }};
                                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "doloremque";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "quas";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY45_DAYS;
                                                    }}),
                                                }};
                                            }}),
                                            add(new FirstAndThirdPartyAudienceGroup() {{
                                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "ullam";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY7_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "perferendis";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY40_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "animi";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_DAYS;
                                                    }}),
                                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                                        firstAndThirdPartyAudienceId = "nesciunt";
                                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
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
                                        }};
                                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "repellat";
                                                }}),
                                                add(new GoogleAudienceTargetingSetting() {{
                                                    googleAudienceId = "necessitatibus";
                                                }}),
                                            }};
                                        }};
                                    }};
                                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_UNKNOWN;
                                        targetingOptionId = "quaerat";
                                    }};
                                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "magnam";
                                    }};
                                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "voluptate";
                                    }};
                                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 1649.89;
                                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                                        targetingOptionId = "esse";
                                    }};
                                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "cumque";
                                    }};
                                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "pariatur";
                                    }};
                                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                                        channelId = "non";
                                        negative = false;
                                    }};
                                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "rerum";
                                    }};
                                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "illo";
                                    }};
                                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "nulla";
                                    }};
                                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_UNKNOWN;
                                        targetingOptionId = "expedita";
                                    }};
                                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "libero";
                                    }};
                                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.SATURDAY;
                                        endHour = 918527;
                                        startHour = 170819;
                                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_UNSPECIFIED;
                                    }};
                                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "nihil";
                                    }};
                                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                                        targetingOptionId = "voluptate";
                                    }};
                                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "aliquid";
                                    }};
                                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_WEB_NOT_OPTIMIZED;
                                        targetingOptionId = "labore";
                                    }};
                                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "repudiandae";
                                    }};
                                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                                        targetingOptionId = "asperiores";
                                    }};
                                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "exercitationem";
                                    }};
                                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNSPECIFIED;
                                        targetingOptionId = "beatae";
                                    }};
                                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                                        inventorySourceId = "qui";
                                    }};
                                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                                        inventorySourceGroupId = "laboriosam";
                                    }};
                                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                                        keyword = "temporibus";
                                        negative = false;
                                    }};
                                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "in";
                                    }};
                                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                                        targetingOptionId = "nobis";
                                    }};
                                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                                        negativeKeywordListId = "voluptatibus";
                                    }};
                                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                                        targetingOptionId = "facilis";
                                    }};
                                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "facere";
                                    }};
                                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                                        negative = false;
                                        targetingOptionId = "aut";
                                    }};
                                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNKNOWN;
                                        targetingOptionId = "rerum";
                                    }};
                                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                                        proximityRadiusAmount = 4750.6;
                                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                                        targetingOptionId = "distinctio";
                                    }};
                                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                                        proximityLocationListId = "blanditiis";
                                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_SMALL;
                                    }};
                                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        regionalLocationListId = "odit";
                                    }};
                                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                                        excludedTargetingOptionId = "ab";
                                    }};
                                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "unde";
                                    }};
                                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                                        adloox = new Adloox() {{
                                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                                add(AdlooxExcludedAdlooxCategoriesEnum.ADULT_CONTENT_HARD),
                                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                                            }};
                                        }};
                                        doubleVerify = new DoubleVerify() {{
                                            appStarRating = new DoubleVerifyAppStarRating() {{
                                                avoidInsufficientStarRating = false;
                                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE2_LESS;
                                            }};
                                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE12_PLUS),
                                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE18_PLUS),
                                            }};
                                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                                avoidUnknownBrandSafetyCategory = false;
                                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.CRIMINAL_SKILLS),
                                                }};
                                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.CELEBRITY_GOSSIP),
                                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.AD_SERVERS),
                                                }};
                                            }};
                                            customSegmentId = "veniam";
                                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE55_PERCENT_HIGHER;
                                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION15_SEC;
                                            }};
                                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                                avoidInsufficientOption = false;
                                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD50;
                                            }};
                                            videoViewability = new DoubleVerifyVideoViewability() {{
                                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY40_PERCENT_HIHGER;
                                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE35_PERCENT_HIGHER;
                                            }};
                                        }};
                                        integralAdScience = new IntegralAdScience() {{
                                            customSegmentId = new String[]{{
                                                add("nostrum"),
                                                add("dolor"),
                                                add("quod"),
                                            }};
                                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY_UNSPECIFIED;
                                            excludeUnrateable = false;
                                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_UNSPECIFIED;
                                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_UNSPECIFIED;
                                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_UNSPECIFIED;
                                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_UNSPECIFIED;
                                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HR;
                                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HR;
                                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HR;
                                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_UNSPECIFIED;
                                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HR;
                                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ750;
                                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY40;
                                        }};
                                    }};
                                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                                        negative = false;
                                        url = "et";
                                    }};
                                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                                        targetingOptionId = "eveniet";
                                    }};
                                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "aliquid";
                                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_HD;
                                    }};
                                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                                        targetingOptionId = "adipisci";
                                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY_UNSPECIFIED;
                                    }};
                                }}),
                            }};
                            targetingType = CreateAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_EXCHANGE;
                        }}),
                    }};
                    deleteRequests = new org.openapis.openapi.models.shared.DeleteAssignedTargetingOptionsRequest[]{{
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("reiciendis"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_DAY_AND_TIME;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("porro"),
                                add("tempore"),
                                add("ullam"),
                                add("sunt"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_EXCHANGE;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("id"),
                                add("ut"),
                                add("et"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_AUDIO_CONTENT_TYPE;
                        }}),
                        add(new DeleteAssignedTargetingOptionsRequest() {{
                            assignedTargetingOptionIds = new String[]{{
                                add("distinctio"),
                                add("itaque"),
                                add("iste"),
                                add("quod"),
                            }};
                            targetingType = DeleteAssignedTargetingOptionsRequestTargetingTypeEnum.TARGETING_TYPE_INVENTORY_SOURCE;
                        }}),
                    }};
                }};;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "ipsam";
                key = "repudiandae";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "veniam";
                uploadProtocol = "debitis";
            }};            

            DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse res = sdk.partners.displayvideoPartnersBulkEditPartnerAssignedTargetingOptions(req, new DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity("doloremque", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bulkEditPartnerAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoPartnersChannelsCreate

Creates a new channel. Returns the newly created channel if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsCreateRequest req = new DisplayvideoPartnersChannelsCreateRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                channelInput = new ChannelInput() {{
                    advertiserId = "quisquam";
                    displayName = "molestiae";
                    partnerId = "mollitia";
                }};;
                accessToken = "quidem";
                advertiserId = "delectus";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "suscipit";
                key = "eveniet";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "porro";
                uploadProtocol = "molestiae";
            }};            

            DisplayvideoPartnersChannelsCreateResponse res = sdk.partners.displayvideoPartnersChannelsCreate(req, new DisplayvideoPartnersChannelsCreateSecurity("inventore", "vel") {{
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

## displayvideoPartnersChannelsList

Lists channels for a partner or advertiser.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsListRequest req = new DisplayvideoPartnersChannelsListRequest("modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "provident";
                advertiserId = "non";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "occaecati";
                filter = "sit";
                key = "asperiores";
                oauthToken = "aspernatur";
                orderBy = "officiis";
                pageSize = 25210L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "ab";
                uploadProtocol = "natus";
            }};            

            DisplayvideoPartnersChannelsListResponse res = sdk.partners.displayvideoPartnersChannelsList(req, new DisplayvideoPartnersChannelsListSecurity("possimus", "magni") {{
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

## displayvideoPartnersChannelsPatch

Updates a channel. Returns the updated channel if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsPatchRequest req = new DisplayvideoPartnersChannelsPatchRequest("a", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                channelInput = new ChannelInput() {{
                    advertiserId = "delectus";
                    displayName = "natus";
                    partnerId = "earum";
                }};;
                accessToken = "fugit";
                advertiserId = "repudiandae";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "nemo";
                key = "provident";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "numquam";
                updateMask = "tempore";
                uploadType = "molestias";
                uploadProtocol = "amet";
            }};            

            DisplayvideoPartnersChannelsPatchResponse res = sdk.partners.displayvideoPartnersChannelsPatch(req, new DisplayvideoPartnersChannelsPatchSecurity("enim", "illum") {{
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

## displayvideoPartnersChannelsSitesBulkEdit

Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BulkEditSitesRequestInput;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsSitesBulkEditRequest req = new DisplayvideoPartnersChannelsSitesBulkEditRequest("sed", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                bulkEditSitesRequestInput = new BulkEditSitesRequestInput() {{
                    advertiserId = "id";
                    createdSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "dolores";
                        }}),
                        add(new SiteInput() {{
                            urlOrAppId = "asperiores";
                        }}),
                    }};
                    deletedSites = new String[]{{
                        add("doloremque"),
                        add("blanditiis"),
                        add("magnam"),
                    }};
                    partnerId = "excepturi";
                }};;
                accessToken = "fugiat";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "itaque";
                key = "assumenda";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "eveniet";
                uploadProtocol = "optio";
            }};            

            DisplayvideoPartnersChannelsSitesBulkEditResponse res = sdk.partners.displayvideoPartnersChannelsSitesBulkEdit(req, new DisplayvideoPartnersChannelsSitesBulkEditSecurity("soluta", "dignissimos") {{
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

## displayvideoPartnersChannelsSitesDelete

Deletes a site from a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsSitesDeleteRequest req = new DisplayvideoPartnersChannelsSitesDeleteRequest("nemo", "neque", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                advertiserId = "excepturi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quia";
                key = "maxime";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "maiores";
                uploadProtocol = "exercitationem";
            }};            

            DisplayvideoPartnersChannelsSitesDeleteResponse res = sdk.partners.displayvideoPartnersChannelsSitesDelete(req, new DisplayvideoPartnersChannelsSitesDeleteSecurity("ducimus", "dolore") {{
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

## displayvideoPartnersChannelsSitesList

Lists sites in a channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsSitesListRequest req = new DisplayvideoPartnersChannelsSitesListRequest("iste", "inventore") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "id";
                advertiserId = "harum";
                alt = AltEnum.PROTO;
                callback = "laborum";
                fields = "aspernatur";
                filter = "vero";
                key = "odio";
                oauthToken = "eum";
                orderBy = "quasi";
                pageSize = 947004L;
                pageToken = "accusantium";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "id";
                uploadProtocol = "tempora";
            }};            

            DisplayvideoPartnersChannelsSitesListResponse res = sdk.partners.displayvideoPartnersChannelsSitesList(req, new DisplayvideoPartnersChannelsSitesListSecurity("pariatur", "labore") {{
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

## displayvideoPartnersChannelsSitesReplace

Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReplaceSitesRequestInput;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersChannelsSitesReplaceRequest req = new DisplayvideoPartnersChannelsSitesReplaceRequest("quis", "aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                replaceSitesRequestInput = new ReplaceSitesRequestInput() {{
                    advertiserId = "reiciendis";
                    newSites = new org.openapis.openapi.models.shared.SiteInput[]{{
                        add(new SiteInput() {{
                            urlOrAppId = "sit";
                        }}),
                    }};
                    partnerId = "adipisci";
                }};;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "praesentium";
                key = "perspiciatis";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "accusantium";
                uploadProtocol = "minus";
            }};            

            DisplayvideoPartnersChannelsSitesReplaceResponse res = sdk.partners.displayvideoPartnersChannelsSitesReplace(req, new DisplayvideoPartnersChannelsSitesReplaceSecurity("explicabo", "accusantium") {{
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

## displayvideoPartnersGet

Gets a partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersGetRequest req = new DisplayvideoPartnersGetRequest("ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "aspernatur";
                fields = "minus";
                key = "illum";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "quod";
                uploadProtocol = "quod";
            }};            

            DisplayvideoPartnersGetResponse res = sdk.partners.displayvideoPartnersGet(req, new DisplayvideoPartnersGetSecurity("alias", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.partner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoPartnersList

Lists partners that are accessible to the current user. The order is defined by the order_by parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersListRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersListResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersListRequest req = new DisplayvideoPartnersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "laudantium";
                filter = "ut";
                key = "possimus";
                oauthToken = "nihil";
                orderBy = "voluptas";
                pageSize = 817509L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "vitae";
                uploadProtocol = "reiciendis";
            }};            

            DisplayvideoPartnersListResponse res = sdk.partners.displayvideoPartnersList(req, new DisplayvideoPartnersListSecurity("cumque", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPartnersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate

Assigns a targeting option to a partner. Returns the assigned targeting option if successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum;
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

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest("explicabo", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum.TARGETING_TYPE_CHANNEL) {{
                dollarXgafv = XgafvEnum.TWO;
                assignedTargetingOptionInput = new AssignedTargetingOptionInput() {{
                    ageRangeDetails = new AgeRangeAssignedTargetingOptionDetails() {{
                        ageRange = AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum.AGE_RANGE3544;
                        targetingOptionId = "enim";
                    }};;
                    appCategoryDetails = new AppCategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "harum";
                    }};;
                    appDetails = new AppAssignedTargetingOptionDetailsInput() {{
                        appId = "aut";
                        appPlatform = AppAssignedTargetingOptionDetailsAppPlatformEnum.APP_PLATFORM_ANDROID;
                        negative = false;
                    }};;
                    audienceGroupDetails = new AudienceGroupAssignedTargetingOptionDetails() {{
                        excludedFirstAndThirdPartyAudienceGroup = new FirstAndThirdPartyAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "rerum";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY30_DAYS;
                                }}),
                                add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                    firstAndThirdPartyAudienceId = "blanditiis";
                                    recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY180_DAYS;
                                }}),
                            }};
                        }};;
                        excludedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "optio";
                                }}),
                            }};
                        }};;
                        includedCombinedAudienceGroup = new CombinedAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.CombinedAudienceTargetingSetting[]{{
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "corrupti";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "quas";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "ullam";
                                }}),
                                add(new CombinedAudienceTargetingSetting() {{
                                    combinedAudienceId = "veritatis";
                                }}),
                            }};
                        }};;
                        includedCustomListGroup = new CustomListGroup() {{
                            settings = new org.openapis.openapi.models.shared.CustomListTargetingSetting[]{{
                                add(new CustomListTargetingSetting() {{
                                    customListId = "molestiae";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "officiis";
                                }}),
                                add(new CustomListTargetingSetting() {{
                                    customListId = "labore";
                                }}),
                            }};
                        }};;
                        includedFirstAndThirdPartyAudienceGroups = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceGroup[]{{
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "consequatur";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "laborum";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY270_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "sed";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY10_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "maxime";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY6_HOURS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "facere";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "quidem";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY3_HOURS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "commodi";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY21_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "similique";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "voluptatibus";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY90_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "ea";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "corrupti";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY15_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "blanditiis";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY60_DAYS;
                                    }}),
                                }};
                            }}),
                            add(new FirstAndThirdPartyAudienceGroup() {{
                                settings = new org.openapis.openapi.models.shared.FirstAndThirdPartyAudienceTargetingSetting[]{{
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "ipsa";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "nesciunt";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                    }}),
                                    add(new FirstAndThirdPartyAudienceTargetingSetting() {{
                                        firstAndThirdPartyAudienceId = "error";
                                        recency = FirstAndThirdPartyAudienceTargetingSettingRecencyEnum.RECENCY5_MINUTES;
                                    }}),
                                }};
                            }}),
                        }};
                        includedGoogleAudienceGroup = new GoogleAudienceGroup() {{
                            settings = new org.openapis.openapi.models.shared.GoogleAudienceTargetingSetting[]{{
                                add(new GoogleAudienceTargetingSetting() {{
                                    googleAudienceId = "qui";
                                }}),
                            }};
                        }};;
                    }};;
                    audioContentTypeDetails = new AudioContentTypeAssignedTargetingOptionDetails() {{
                        audioContentType = AudioContentTypeAssignedTargetingOptionDetailsAudioContentTypeEnum.AUDIO_CONTENT_TYPE_BROADCAST;
                        targetingOptionId = "ex";
                    }};;
                    authorizedSellerStatusDetails = new AuthorizedSellerStatusAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "quaerat";
                    }};;
                    browserDetails = new BrowserAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "aliquid";
                    }};;
                    businessChainDetails = new BusinessChainAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 4294.67;
                        proximityRadiusUnit = BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_UNSPECIFIED;
                        targetingOptionId = "enim";
                    }};;
                    carrierAndIspDetails = new CarrierAndIspAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "cumque";
                    }};;
                    categoryDetails = new CategoryAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "ab";
                    }};;
                    channelDetails = new ChannelAssignedTargetingOptionDetails() {{
                        channelId = "quibusdam";
                        negative = false;
                    }};;
                    contentDurationDetails = new ContentDurationAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "blanditiis";
                    }};;
                    contentGenreDetails = new ContentGenreAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "et";
                    }};;
                    contentInstreamPositionDetails = new ContentInstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentInstreamPosition = ContentInstreamPositionAssignedTargetingOptionDetailsContentInstreamPositionEnum.CONTENT_INSTREAM_POSITION_UNKNOWN;
                        targetingOptionId = "explicabo";
                    }};;
                    contentOutstreamPositionDetails = new ContentOutstreamPositionAssignedTargetingOptionDetailsInput() {{
                        contentOutstreamPosition = ContentOutstreamPositionAssignedTargetingOptionDetailsContentOutstreamPositionEnum.CONTENT_OUTSTREAM_POSITION_IN_BANNER;
                        targetingOptionId = "perferendis";
                    }};;
                    contentStreamTypeDetails = new ContentStreamTypeAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "magnam";
                    }};;
                    dayAndTimeDetails = new DayAndTimeAssignedTargetingOptionDetails() {{
                        dayOfWeek = DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum.MONDAY;
                        endHour = 956150;
                        startHour = 363703;
                        timeZoneResolution = DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum.TIME_ZONE_RESOLUTION_END_USER;
                    }};;
                    deviceMakeModelDetails = new DeviceMakeModelAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "iste";
                    }};;
                    deviceTypeDetails = new DeviceTypeAssignedTargetingOptionDetails() {{
                        deviceType = DeviceTypeAssignedTargetingOptionDetailsDeviceTypeEnum.DEVICE_TYPE_SMART_PHONE;
                        targetingOptionId = "iusto";
                    }};;
                    digitalContentLabelExclusionDetails = new DigitalContentLabelAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "culpa";
                    }};;
                    environmentDetails = new EnvironmentAssignedTargetingOptionDetails() {{
                        environment = EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum.ENVIRONMENT_APP;
                        targetingOptionId = "a";
                    }};;
                    exchangeDetails = new ExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "consequatur";
                    }};;
                    genderDetails = new GenderAssignedTargetingOptionDetails() {{
                        gender = GenderAssignedTargetingOptionDetailsGenderEnum.GENDER_UNKNOWN;
                        targetingOptionId = "dolorum";
                    }};;
                    geoRegionDetails = new GeoRegionAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "fugit";
                    }};;
                    householdIncomeDetails = new HouseholdIncomeAssignedTargetingOptionDetails() {{
                        householdIncome = HouseholdIncomeAssignedTargetingOptionDetailsHouseholdIncomeEnum.HOUSEHOLD_INCOME_UNKNOWN;
                        targetingOptionId = "veritatis";
                    }};;
                    inventorySourceDetails = new InventorySourceAssignedTargetingOptionDetails() {{
                        inventorySourceId = "vel";
                    }};;
                    inventorySourceGroupDetails = new InventorySourceGroupAssignedTargetingOptionDetails() {{
                        inventorySourceGroupId = "placeat";
                    }};;
                    keywordDetails = new KeywordAssignedTargetingOptionDetails() {{
                        keyword = "libero";
                        negative = false;
                    }};;
                    languageDetails = new LanguageAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "saepe";
                    }};;
                    nativeContentPositionDetails = new NativeContentPositionAssignedTargetingOptionDetails() {{
                        contentPosition = NativeContentPositionAssignedTargetingOptionDetailsContentPositionEnum.NATIVE_CONTENT_POSITION_UNSPECIFIED;
                        targetingOptionId = "dignissimos";
                    }};;
                    negativeKeywordListDetails = new NegativeKeywordListAssignedTargetingOptionDetails() {{
                        negativeKeywordListId = "veritatis";
                    }};;
                    omidDetails = new OmidAssignedTargetingOptionDetails() {{
                        omid = OmidAssignedTargetingOptionDetailsOmidEnum.OMID_FOR_MOBILE_DISPLAY_ADS;
                        targetingOptionId = "cumque";
                    }};;
                    onScreenPositionDetails = new OnScreenPositionAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "ab";
                    }};;
                    operatingSystemDetails = new OperatingSystemAssignedTargetingOptionDetailsInput() {{
                        negative = false;
                        targetingOptionId = "ex";
                    }};;
                    parentalStatusDetails = new ParentalStatusAssignedTargetingOptionDetails() {{
                        parentalStatus = ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum.PARENTAL_STATUS_UNSPECIFIED;
                        targetingOptionId = "officiis";
                    }};;
                    poiDetails = new PoiAssignedTargetingOptionDetailsInput() {{
                        proximityRadiusAmount = 1493.76;
                        proximityRadiusUnit = PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum.DISTANCE_UNIT_MILES;
                        targetingOptionId = "unde";
                    }};;
                    proximityLocationListDetails = new ProximityLocationListAssignedTargetingOptionDetails() {{
                        proximityLocationListId = "harum";
                        proximityRadiusRange = ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum.PROXIMITY_RADIUS_RANGE_UNSPECIFIED;
                    }};;
                    regionalLocationListDetails = new RegionalLocationListAssignedTargetingOptionDetails() {{
                        negative = false;
                        regionalLocationListId = "libero";
                    }};;
                    sensitiveCategoryExclusionDetails = new SensitiveCategoryAssignedTargetingOptionDetailsInput() {{
                        excludedTargetingOptionId = "ipsa";
                    }};;
                    subExchangeDetails = new SubExchangeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "blanditiis";
                    }};;
                    thirdPartyVerifierDetails = new ThirdPartyVerifierAssignedTargetingOptionDetails() {{
                        adloox = new Adloox() {{
                            excludedAdlooxCategories = new org.openapis.openapi.models.shared.AdlooxExcludedAdlooxCategoriesEnum[]{{
                                add(AdlooxExcludedAdlooxCategoriesEnum.LOW_VIEWABILITY_DOMAINS),
                                add(AdlooxExcludedAdlooxCategoriesEnum.VIOLENT_CONTENT_WEAPONS),
                            }};
                        }};;
                        doubleVerify = new DoubleVerify() {{
                            appStarRating = new DoubleVerifyAppStarRating() {{
                                avoidInsufficientStarRating = false;
                                avoidedStarRating = DoubleVerifyAppStarRatingAvoidedStarRatingEnum.APP_STAR_RATE3_LESS;
                            }};;
                            avoidedAgeRatings = new org.openapis.openapi.models.shared.DoubleVerifyAvoidedAgeRatingsEnum[]{{
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE_UNKNOWN),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE4_PLUS),
                                add(DoubleVerifyAvoidedAgeRatingsEnum.APP_AGE_RATE9_PLUS),
                            }};
                            brandSafetyCategories = new DoubleVerifyBrandSafetyCategories() {{
                                avoidUnknownBrandSafetyCategory = false;
                                avoidedHighSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.HIGHER_SEVERITY_UNSPECIFIED),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.NUISANCE_INCENTIVIZED_MALWARE_CLUTTER),
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedHighSeverityCategoriesEnum.COPYRIGHT_INFRINGEMENT),
                                }};
                                avoidedMediumSeverityCategories = new org.openapis.openapi.models.shared.DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum[]{{
                                    add(DoubleVerifyBrandSafetyCategoriesAvoidedMediumSeverityCategoriesEnum.DISASTER_TERRORIST_EVENTS),
                                }};
                            }};;
                            customSegmentId = "incidunt";
                            displayViewability = new DoubleVerifyDisplayViewability() {{
                                iab = DoubleVerifyDisplayViewabilityIabEnum.IAB_VIEWED_RATE65_PERCENT_HIGHER;
                                viewableDuring = DoubleVerifyDisplayViewabilityViewableDuringEnum.AVERAGE_VIEW_DURATION10_SEC;
                            }};;
                            fraudInvalidTraffic = new DoubleVerifyFraudInvalidTraffic() {{
                                avoidInsufficientOption = false;
                                avoidedFraudOption = DoubleVerifyFraudInvalidTrafficAvoidedFraudOptionEnum.AD_IMPRESSION_FRAUD10;
                            }};;
                            videoViewability = new DoubleVerifyVideoViewability() {{
                                playerImpressionRate = DoubleVerifyVideoViewabilityPlayerImpressionRateEnum.PLAYER_SIZE400_X30095;
                                videoIab = DoubleVerifyVideoViewabilityVideoIabEnum.IAB_VIEWABILITY80_PERCENT_HIGHER;
                                videoViewableRate = DoubleVerifyVideoViewabilityVideoViewableRateEnum.VIEWED_PERFORMANCE20_PERCENT_HIGHER;
                            }};;
                        }};;
                        integralAdScience = new IntegralAdScience() {{
                            customSegmentId = new String[]{{
                                add("ut"),
                                add("eius"),
                                add("cupiditate"),
                            }};
                            displayViewability = IntegralAdScienceDisplayViewabilityEnum.PERFORMANCE_VIEWABILITY40;
                            excludeUnrateable = false;
                            excludedAdFraudRisk = IntegralAdScienceExcludedAdFraudRiskEnum.SUSPICIOUS_ACTIVITY_HMR;
                            excludedAdultRisk = IntegralAdScienceExcludedAdultRiskEnum.ADULT_HMR;
                            excludedAlcoholRisk = IntegralAdScienceExcludedAlcoholRiskEnum.ALCOHOL_HMR;
                            excludedDrugsRisk = IntegralAdScienceExcludedDrugsRiskEnum.DRUGS_HMR;
                            excludedGamblingRisk = IntegralAdScienceExcludedGamblingRiskEnum.GAMBLING_HMR;
                            excludedHateSpeechRisk = IntegralAdScienceExcludedHateSpeechRiskEnum.HATE_SPEECH_HMR;
                            excludedIllegalDownloadsRisk = IntegralAdScienceExcludedIllegalDownloadsRiskEnum.ILLEGAL_DOWNLOADS_HMR;
                            excludedOffensiveLanguageRisk = IntegralAdScienceExcludedOffensiveLanguageRiskEnum.OFFENSIVE_LANGUAGE_HR;
                            excludedViolenceRisk = IntegralAdScienceExcludedViolenceRiskEnum.VIOLENCE_HMR;
                            traqScoreOption = IntegralAdScienceTraqScoreOptionEnum.TRAQ700;
                            videoViewability = IntegralAdScienceVideoViewabilityEnum.VIDEO_VIEWABILITY50;
                        }};;
                    }};;
                    urlDetails = new UrlAssignedTargetingOptionDetails() {{
                        negative = false;
                        url = "soluta";
                    }};;
                    userRewardedContentDetails = new UserRewardedContentAssignedTargetingOptionDetailsInput() {{
                        targetingOptionId = "maxime";
                    }};;
                    videoPlayerSizeDetails = new VideoPlayerSizeAssignedTargetingOptionDetails() {{
                        targetingOptionId = "commodi";
                        videoPlayerSize = VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum.VIDEO_PLAYER_SIZE_SMALL;
                    }};;
                    viewabilityDetails = new ViewabilityAssignedTargetingOptionDetails() {{
                        targetingOptionId = "corporis";
                        viewability = ViewabilityAssignedTargetingOptionDetailsViewabilityEnum.VIEWABILITY30_PERCENT_OR_MORE;
                    }};;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "asperiores";
                key = "temporibus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "ipsam";
                uploadProtocol = "porro";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity("dolores", "iste") {{
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

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete

Deletes an assigned targeting option from a partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest("labore", "porro", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum.TARGETING_TYPE_APP_CATEGORY) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "accusantium";
                fields = "ea";
                key = "laborum";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "quos";
                uploadProtocol = "molestiae";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity("voluptate", "autem") {{
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

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet

Gets a single targeting option assigned to a partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest("numquam", "voluptates", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum.TARGETING_TYPE_CONTENT_STREAM_TYPE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "suscipit";
                alt = AltEnum.PROTO;
                callback = "doloremque";
                fields = "porro";
                key = "suscipit";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "itaque";
                uploadProtocol = "nulla";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity("excepturi", "quod") {{
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

## displayvideoPartnersTargetingTypesAssignedTargetingOptionsList

Lists the targeting options assigned to a partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity;
import org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest req = new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest("in", DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum.TARGETING_TYPE_GENDER) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "ut";
                filter = "nostrum";
                key = "dignissimos";
                oauthToken = "illo";
                orderBy = "corporis";
                pageSize = 55356L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "blanditiis";
                uploadProtocol = "recusandae";
            }};            

            DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse res = sdk.partners.displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(req, new DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity("deleniti", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPartnerAssignedTargetingOptionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
